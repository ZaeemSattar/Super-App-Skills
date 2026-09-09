#!/usr/bin/env node
/**
 * Sets one shared version across every target.
 *
 * The extension, the CLI and the Claude Code plugin ship the same skills, so a
 * single version number keeps `build/` unambiguous. Run with no argument to
 * print the current versions, or pass a semver / bump keyword to set them:
 *
 *   node tools/version.mjs            # report
 *   node tools/version.mjs 1.4.0      # explicit
 *   node tools/version.mjs minor      # major | minor | patch
 */
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

/** Every file carrying a version, and the JSON key path it lives at. */
export const TARGETS = [
  { label: 'workspace', file: 'package.json' },
  { label: 'vscode', file: 'extension/package.json' },
  { label: 'cli', file: 'cli/package.json' },
  { label: 'plugin', file: 'plugins/neuxnet-miniapp/.claude-plugin/plugin.json' },
]

async function readJson(rel) {
  return JSON.parse(await readFile(join(ROOT, rel), 'utf8'))
}

export async function currentVersions() {
  const out = []
  for (const t of TARGETS) out.push({ ...t, version: (await readJson(t.file)).version })
  return out
}

function bump(version, kind) {
  const m = version.match(/^(\d+)\.(\d+)\.(\d+)/)
  if (!m) throw new Error(`cannot bump non-semver version: ${version}`)
  let [major, minor, patch] = m.slice(1).map(Number)
  if (kind === 'major') [major, minor, patch] = [major + 1, 0, 0]
  else if (kind === 'minor') [minor, patch] = [minor + 1, 0]
  else patch += 1
  return `${major}.${minor}.${patch}`
}

async function main() {
  const arg = process.argv[2]
  const versions = await currentVersions()

  if (!arg) {
    const spread = new Set(versions.map((v) => v.version))
    for (const v of versions) console.log(`  ${v.label.padEnd(10)} ${v.version}`)
    console.log('')
    console.log(spread.size === 1 ? `All targets at ${[...spread][0]}.` : `⚠ versions differ: ${[...spread].join(', ')}`)
    return
  }

  // A bump keyword resolves against the highest version currently in the repo,
  // so a drifted target can never silently pull the release backwards.
  let next
  if (['major', 'minor', 'patch'].includes(arg)) {
    const highest = versions
      .map((v) => v.version)
      .sort((a, b) => {
        const pa = a.split('.').map(Number)
        const pb = b.split('.').map(Number)
        return pa[0] - pb[0] || pa[1] - pb[1] || pa[2] - pb[2]
      })
      .pop()
    next = bump(highest, arg)
  } else {
    if (!/^\d+\.\d+\.\d+/.test(arg)) throw new Error(`not a valid version or bump keyword: ${arg}`)
    next = arg
  }

  for (const t of TARGETS) {
    const path = join(ROOT, t.file)
    const raw = await readFile(path, 'utf8')
    // Rewrite in place with a targeted replace so key order and formatting survive.
    if (!/"version"\s*:\s*"/.test(raw)) throw new Error(`no "version" key found in ${t.file}`)
    const updated = raw.replace(/("version"\s*:\s*")[^"]+(")/, `$1${next}$2`)
    if (updated !== raw) await writeFile(path, updated)
    console.log(`  ${t.label.padEnd(10)} → ${next}`)
  }
  console.log('')
  console.log(`All targets set to ${next}.`)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err.message)
    process.exit(1)
  })
}
