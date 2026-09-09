#!/usr/bin/env node
/**
 * super-app-skills — install the Neuxnet Super App Mini App skills for Claude Code.
 *
 * Skills are copied into <target>/.claude/skills/<name>/ so Claude Code picks
 * them up on its next start. The docs mirror the skills read from is copied
 * once into <target>/.claude/skills/.super-app-references/.
 */
import { cp, mkdir, rm, readdir, readFile, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { homedir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const PKG = join(HERE, '..')
const SRC_SKILLS = join(PKG, 'skills')
const SRC_REFS = join(PKG, 'references')
const REFS_DIRNAME = '.super-app-references'

const c = process.stdout.isTTY && !process.env.NO_COLOR
const dim = (s) => (c ? `\x1b[2m${s}\x1b[0m` : s)
const bold = (s) => (c ? `\x1b[1m${s}\x1b[0m` : s)
const green = (s) => (c ? `\x1b[32m${s}\x1b[0m` : s)
const yellow = (s) => (c ? `\x1b[33m${s}\x1b[0m` : s)
const red = (s) => (c ? `\x1b[31m${s}\x1b[0m` : s)

function parseArgs(argv) {
  const opts = { global: false, force: false, yes: false, dir: null, names: [] }
  let command = null
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '-g' || a === '--global') opts.global = true
    else if (a === '-f' || a === '--force') opts.force = true
    else if (a === '-y' || a === '--yes') opts.yes = true
    else if (a === '--dir') opts.dir = argv[++i]
    else if (a === '-h' || a === '--help') command = command || 'help'
    else if (a === '-v' || a === '--version') command = command || 'version'
    else if (a.startsWith('-')) throw new Error(`unknown option: ${a}`)
    else if (!command) command = a
    else opts.names.push(a)
  }
  return { command: command || 'install', opts }
}

/**
 * Minimal frontmatter reader for the `name` and `description` keys only.
 * Handles both `key: value` and YAML block scalars (`key: >-` / `|`), whose
 * continuation lines are indented under the key.
 */
function parseFrontmatter(block) {
  const lines = block.split(/\r?\n/)
  const meta = {}
  for (let i = 0; i < lines.length; i++) {
    const hit = lines[i].match(/^([A-Za-z_][\w-]*):[ \t]*(.*)$/)
    if (!hit) continue
    const [, key, rest] = hit
    if (key !== 'name' && key !== 'description') continue
    if (rest && !/^[>|][-+]?$/.test(rest.trim())) {
      meta[key] = rest.trim().replace(/^["']|["']$/g, '')
      continue
    }
    const parts = []
    while (i + 1 < lines.length && /^\s+\S/.test(lines[i + 1])) parts.push(lines[++i].trim())
    meta[key] = parts.join(' ')
  }
  return meta
}

/** Read `name` and `description` out of a SKILL.md YAML frontmatter block. */
async function readMeta(skillDir) {
  const file = join(skillDir, 'SKILL.md')
  let text
  try {
    text = await readFile(file, 'utf8')
  } catch {
    return null
  }
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) return null
  return parseFrontmatter(m[1])
}

async function availableSkills() {
  const entries = await readdir(SRC_SKILLS, { withFileTypes: true })
  const out = []
  for (const e of entries) {
    if (!e.isDirectory()) continue
    const meta = (await readMeta(join(SRC_SKILLS, e.name))) || {}
    out.push({ name: e.name, description: meta.description || '' })
  }
  return out.sort((a, b) => a.name.localeCompare(b.name))
}

function targetRoot(opts) {
  if (opts.dir) return resolve(opts.dir)
  return opts.global ? homedir() : process.cwd()
}

function skillsDir(opts) {
  return join(targetRoot(opts), '.claude', 'skills')
}

/** First sentence of a description, for a one-line listing. */
function short(desc, width = 96) {
  const s = desc.replace(/\s+/g, ' ').trim()
  if (s.length <= width) return s
  return s.slice(0, width - 1).replace(/\s\S*$/, '') + '…'
}

function usage() {
  console.log(`
${bold('super-app-skills')} — Neuxnet Super App Mini App skills for Claude Code

${bold('Usage')}
  npx super-app-skills ${green('install')} [skill...]   install skills into this project
  npx super-app-skills ${green('list')}                 list available and installed skills
  npx super-app-skills ${green('remove')} [skill...]    remove installed skills
  npx super-app-skills ${green('where')}                print the install location

${bold('Options')}
  -g, --global      install into ~/.claude/skills (every project)
      --dir <path>  install into <path>/.claude/skills
  -f, --force       overwrite skills that are already installed
  -y, --yes         no prompts (assumes --force on conflicts)
  -h, --help        show this help
  -v, --version     print the version

${bold('Examples')}
  npx super-app-skills install                 ${dim('# all skills, this project')}
  npx super-app-skills install miniapp-payment ${dim('# just one')}
  npx super-app-skills install --global        ${dim('# available everywhere')}

${dim('Restart Claude Code after installing — it scans for skills at startup.')}
`)
}

async function installedNames(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true })
    return new Set(entries.filter((e) => e.isDirectory() && !e.name.startsWith('.')).map((e) => e.name))
  } catch {
    return new Set()
  }
}

function resolveNames(requested, available) {
  const known = new Map(available.map((s) => [s.name, s]))
  if (!requested.length) return available.map((s) => s.name)
  const picked = []
  for (const raw of requested) {
    // Accept both `payment` and `miniapp-payment`.
    const name = known.has(raw) ? raw : known.has(`miniapp-${raw}`) ? `miniapp-${raw}` : null
    if (!name) throw new Error(`unknown skill: ${raw}\nRun \`npx super-app-skills list\` to see the available skills.`)
    picked.push(name)
  }
  return [...new Set(picked)]
}

async function cmdInstall(opts) {
  const available = await availableSkills()
  const names = resolveNames(opts.names, available)
  const dest = skillsDir(opts)
  await mkdir(dest, { recursive: true })
  const already = await installedNames(dest)

  let installed = 0
  let skipped = 0
  for (const name of names) {
    const to = join(dest, name)
    if (already.has(name) && !(opts.force || opts.yes)) {
      console.log(`  ${yellow('skip')}    ${name} ${dim('(already installed — use --force to overwrite)')}`)
      skipped++
      continue
    }
    await rm(to, { recursive: true, force: true })
    await cp(join(SRC_SKILLS, name), to, { recursive: true })
    console.log(`  ${green('installed')} ${name}`)
    installed++
  }

  // The docs mirror is shared by every skill, so it is copied once alongside them.
  const refsDest = join(dest, REFS_DIRNAME)
  if (installed > 0 || !existsSync(refsDest)) {
    await rm(refsDest, { recursive: true, force: true })
    await cp(SRC_REFS, refsDest, { recursive: true })
  }

  console.log('')
  console.log(`${bold(`${installed} installed`)}${skipped ? `, ${skipped} skipped` : ''} → ${dim(dest)}`)
  console.log(`Docs mirror → ${dim(refsDest)}`)
  console.log('')
  console.log(dim('Restart Claude Code, then just ask it — e.g. "scaffold a new Neuxnet mini app".'))
}

async function cmdList(opts) {
  const available = await availableSkills()
  const dest = skillsDir(opts)
  const already = await installedNames(dest)
  console.log('')
  console.log(`${bold('Skills')} ${dim(`(target: ${dest})`)}`)
  console.log('')
  for (const s of available) {
    const mark = already.has(s.name) ? green('✓') : dim('·')
    console.log(`  ${mark} ${bold(s.name.padEnd(20))} ${dim(short(s.description))}`)
  }
  console.log('')
  console.log(dim(`${already.size} of ${available.length} installed. ✓ = installed here.`))
}

async function cmdRemove(opts) {
  const available = await availableSkills()
  const names = resolveNames(opts.names, available)
  const dest = skillsDir(opts)
  const already = await installedNames(dest)

  let removed = 0
  for (const name of names) {
    if (!already.has(name)) continue
    await rm(join(dest, name), { recursive: true, force: true })
    console.log(`  ${red('removed')}  ${name}`)
    removed++
  }

  // Drop the shared docs mirror once nothing is left to read it.
  const left = await installedNames(dest)
  if (left.size === 0) await rm(join(dest, REFS_DIRNAME), { recursive: true, force: true })

  console.log('')
  console.log(removed ? `${bold(`${removed} removed`)} from ${dim(dest)}` : dim('Nothing to remove.'))
}

async function cmdWhere(opts) {
  console.log(skillsDir(opts))
}

async function main() {
  let parsed
  try {
    parsed = parseArgs(process.argv.slice(2))
  } catch (err) {
    console.error(red(err.message))
    process.exit(1)
  }
  const { command, opts } = parsed

  switch (command) {
    case 'help':
      return usage()
    case 'version': {
      const pkg = JSON.parse(await readFile(join(PKG, 'package.json'), 'utf8'))
      return console.log(pkg.version)
    }
    case 'install':
    case 'add':
      return cmdInstall(opts)
    case 'list':
    case 'ls':
      return cmdList(opts)
    case 'remove':
    case 'uninstall':
    case 'rm':
      return cmdRemove(opts)
    case 'where':
      return cmdWhere(opts)
    default:
      console.error(red(`unknown command: ${command}`))
      usage()
      process.exit(1)
  }
}

main().catch((err) => {
  console.error(red(err.message || String(err)))
  process.exit(1)
})
