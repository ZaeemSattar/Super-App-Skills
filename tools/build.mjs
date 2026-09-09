#!/usr/bin/env node
/**
 * Builds every distributable into build/, one subfolder per target.
 *
 *   build/
 *     manifest.json          what was built, when, from which commit
 *     vscode/  <name>-<version>.vsix
 *     cli/     <name>-<version>.tgz
 *     plugin/  <name>-<version>.tar.gz
 *
 * One versioned file per target per build -- that file is what you upload.
 * Previous versions are kept so old releases stay downloadable. Run with no
 * argument to build everything, or name targets: `node tools/build.mjs cli`.
 */
import { execFile } from 'node:child_process'
import { createReadStream } from 'node:fs'
import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

const run = promisify(execFile)
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const BUILD = join(ROOT, 'build')

const c = process.stdout.isTTY && !process.env.NO_COLOR
const bold = (s) => (c ? `\x1b[1m${s}\x1b[0m` : s)
const dim = (s) => (c ? `\x1b[2m${s}\x1b[0m` : s)
const green = (s) => (c ? `\x1b[32m${s}\x1b[0m` : s)
const red = (s) => (c ? `\x1b[31m${s}\x1b[0m` : s)

const readJson = async (rel) => JSON.parse(await readFile(join(ROOT, rel), 'utf8'))

async function sha256(file) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(file)) hash.update(chunk)
  return hash.digest('hex')
}

function human(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

/**
 * Move the produced artifact into build/<target>/.
 *
 * Exactly one file per build lands here -- the versioned one, which is what you
 * upload. Older versions are left in place so past releases stay downloadable.
 */
async function collect(target, fromFile, filename) {
  const dir = join(BUILD, target)
  await mkdir(dir, { recursive: true })
  const dest = join(dir, filename)
  await copyFile(fromFile, dest)
  const { size } = await stat(dest)
  return { file: `${target}/${filename}`, bytes: size, sha256: await sha256(dest) }
}

const builders = {
  async vscode() {
    const pkg = await readJson('extension/package.json')
    const name = `${pkg.name}-${pkg.version}.vsix`
    const staged = join(ROOT, 'extension', name)
    // vsce always writes next to the manifest; build there, then collect and tidy.
    await run('npx', ['--yes', '@vscode/vsce', 'package', '--no-dependencies', '--out', name], {
      cwd: join(ROOT, 'extension'),
      maxBuffer: 32 * 1024 * 1024,
    })
    const meta = await collect('vscode', staged, name)
    await rm(staged, { force: true })
    return { ...meta, version: pkg.version }
  },

  async cli() {
    const pkg = await readJson('cli/package.json')
    const name = `${pkg.name}-${pkg.version}.tgz`
    await mkdir(join(BUILD, '.tmp'), { recursive: true })
    const { stdout } = await run('npm', ['pack', '--pack-destination', join(BUILD, '.tmp')], {
      cwd: join(ROOT, 'cli'),
      maxBuffer: 32 * 1024 * 1024,
    })
    const produced = stdout.trim().split('\n').pop().trim()
    const staged = join(BUILD, '.tmp', produced)
    const meta = await collect('cli', staged, name)
    await rm(join(BUILD, '.tmp'), { recursive: true, force: true })
    return { ...meta, version: pkg.version }
  },

  async plugin() {
    const pkg = await readJson('plugins/neuxnet-miniapp/.claude-plugin/plugin.json')
    const name = `${pkg.name}-${pkg.version}.tar.gz`
    await mkdir(join(BUILD, '.tmp'), { recursive: true })
    const staged = join(BUILD, '.tmp', name)
    // Archive the plugin directory itself so it unpacks as neuxnet-miniapp/.
    await run('tar', ['-czf', staged, '-C', join(ROOT, 'plugins'), 'neuxnet-miniapp'], {
      maxBuffer: 32 * 1024 * 1024,
    })
    const meta = await collect('plugin', staged, name)
    await rm(join(BUILD, '.tmp'), { recursive: true, force: true })
    return { ...meta, version: pkg.version }
  },
}

async function gitCommit() {
  try {
    const { stdout } = await run('git', ['rev-parse', '--short', 'HEAD'], { cwd: ROOT })
    const { stdout: dirty } = await run('git', ['status', '--porcelain'], { cwd: ROOT })
    return { commit: stdout.trim(), dirty: dirty.trim().length > 0 }
  } catch {
    return { commit: null, dirty: false }
  }
}

async function main() {
  const requested = process.argv.slice(2)
  const unknown = requested.filter((t) => !builders[t])
  if (unknown.length) throw new Error(`unknown target(s): ${unknown.join(', ')}\nAvailable: ${Object.keys(builders).join(', ')}`)
  const targets = requested.length ? requested : Object.keys(builders)

  // Refuse to build a mixed-version release; it makes build/ ambiguous.
  const { currentVersions } = await import('./version.mjs')
  const versions = await currentVersions()
  const spread = new Set(versions.map((v) => v.version))
  if (spread.size > 1 && !process.env.ALLOW_VERSION_DRIFT) {
    console.error(red('✗ target versions differ:'))
    for (const v of versions) console.error(`    ${v.label.padEnd(10)} ${v.version}`)
    console.error('')
    console.error('Run `npm run version:set -- <version|major|minor|patch>` first,')
    console.error('or set ALLOW_VERSION_DRIFT=1 to build anyway.')
    process.exit(1)
  }

  await mkdir(BUILD, { recursive: true })
  console.log(`${bold('Building')} ${targets.join(', ')}\n`)

  const artifacts = {}
  for (const t of targets) {
    process.stdout.write(`  ${t.padEnd(8)} building…`)
    try {
      const meta = await builders[t]()
      artifacts[t] = meta
      process.stdout.write(`\r  ${t.padEnd(8)} ${green('✓')} ${meta.file} ${dim(human(meta.bytes))}\n`)
    } catch (err) {
      process.stdout.write(`\r  ${t.padEnd(8)} ${red('✗')} ${err.message.split('\n')[0]}\n`)
      throw err
    }
  }

  // Merge into any existing manifest so building one target keeps the others.
  const manifestPath = join(BUILD, 'manifest.json')
  let previous = {}
  try {
    previous = JSON.parse(await readFile(manifestPath, 'utf8')).artifacts ?? {}
  } catch {}

  const git = await gitCommit()
  const manifest = {
    version: [...spread].length === 1 ? [...spread][0] : null,
    builtAt: new Date().toISOString(),
    ...git,
    artifacts: { ...previous, ...artifacts },
  }
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n')

  console.log('')
  console.log(`${bold('build/')} ${dim(`manifest.json · version ${manifest.version ?? 'mixed'}`)}`)
  if (git.dirty) console.log(dim('note: working tree was dirty at build time'))
}

main().catch((err) => {
  console.error(red(err.message || String(err)))
  process.exit(1)
})
