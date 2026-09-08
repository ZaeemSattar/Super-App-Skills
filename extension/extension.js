const vscode = require('vscode')
const os = require('os')

/**
 * Skills ship as directories (`<name>/SKILL.md`, plus optional `scripts/`), and
 * Claude Code discovers them at `~/.claude/skills/<name>/SKILL.md`.
 *
 * `os.homedir()` resolves on whichever machine the extension host runs on. The
 * manifest declares `extensionKind: ["workspace"]`, so under Remote SSH / WSL /
 * Codespaces that is the remote machine -- which is where Claude Code runs, and
 * therefore the correct target.
 */

const SKILLS_DIR = 'skills'
const REFERENCES_DIR = 'references'

function skillsSource(context) {
  return vscode.Uri.joinPath(context.extensionUri, SKILLS_DIR)
}

function claudeSkillsDir() {
  return vscode.Uri.joinPath(vscode.Uri.file(os.homedir()), '.claude', 'skills')
}

/** Directory names under `skills/` that contain a SKILL.md. */
async function listBundledSkills(context) {
  const entries = await vscode.workspace.fs.readDirectory(skillsSource(context))
  return entries
    .filter(([, type]) => type === vscode.FileType.Directory)
    .map(([name]) => name)
    .sort()
}

/** First line of the skill body, used as a one-line summary in the picker. */
async function skillSummary(context, name) {
  try {
    const uri = vscode.Uri.joinPath(skillsSource(context), name, 'SKILL.md')
    const text = new TextDecoder('utf-8').decode(await vscode.workspace.fs.readFile(uri))

    // Frontmatter `description:` may be a folded block spanning several lines.
    const match = text.match(/^description:\s*(?:>-?\s*\n((?:\s{2,}.*\n?)+)|(.*))/m)
    if (!match) return ''
    const raw = match[1] ?? match[2] ?? ''
    return raw.replace(/\s+/g, ' ').trim()
  } catch {
    return ''
  }
}

function describeTarget() {
  return vscode.env.remoteName ? `the remote host (${vscode.env.remoteName})` : 'this machine'
}

async function exists(uri) {
  try {
    await vscode.workspace.fs.stat(uri)
    return true
  } catch {
    return false
  }
}

async function installSkills(context) {
  const names = await listBundledSkills(context)
  if (names.length === 0) {
    vscode.window.showErrorMessage('No bundled skills found in this extension.')
    return
  }

  const items = await Promise.all(
    names.map(async (name) => ({
      label: name,
      detail: await skillSummary(context, name),
      picked: true,
    })),
  )

  const picked = await vscode.window.showQuickPick(items, {
    canPickMany: true,
    title: `Install skills to ~/.claude/skills on ${describeTarget()}`,
    placeHolder: 'All selected by default',
  })
  if (!picked || picked.length === 0) return

  const target = claudeSkillsDir()

  // Overwriting is destructive if the user has edited a skill in place, so ask
  // once rather than silently replacing their work.
  const clashes = []
  for (const { label } of picked) {
    if (await exists(vscode.Uri.joinPath(target, label))) clashes.push(label)
  }
  if (clashes.length > 0) {
    const proceed = await vscode.window.showWarningMessage(
      `${clashes.length} skill(s) already exist in ~/.claude/skills and will be overwritten.`,
      { modal: true, detail: clashes.join(', ') },
      'Overwrite',
    )
    if (proceed !== 'Overwrite') return
  }

  let installed = 0
  const failures = []

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: 'Installing Neuxnet Mini App skills',
      cancellable: true,
    },
    async (progress, token) => {
      await vscode.workspace.fs.createDirectory(target)
      const step = 100 / picked.length

      for (const { label } of picked) {
        if (token.isCancellationRequested) break
        progress.report({ message: label, increment: step })
        try {
          await vscode.workspace.fs.copy(
            vscode.Uri.joinPath(skillsSource(context), label),
            vscode.Uri.joinPath(target, label),
            { overwrite: true },
          )
          installed++
        } catch (err) {
          failures.push(`${label}: ${err.message}`)
        }
      }
    },
  )

  if (failures.length > 0) {
    const channel = vscode.window.createOutputChannel('Neuxnet Mini App Skills')
    channel.appendLine('Failed to install:')
    failures.forEach((f) => channel.appendLine(`  ${f}`))
    channel.show()
    vscode.window.showErrorMessage(
      `Installed ${installed} skill(s); ${failures.length} failed. See output for details.`,
    )
    return
  }

  if (installed === 0) return

  const choice = await vscode.window.showInformationMessage(
    `Installed ${installed} skill(s) to ~/.claude/skills on ${describeTarget()}. Restart Claude Code to pick them up.`,
    'Reveal Folder',
  )
  if (choice === 'Reveal Folder') {
    await vscode.commands.executeCommand('revealFileInOS', vscode.Uri.joinPath(target, picked[0].label))
  }
}

async function openSkill(context) {
  const names = await listBundledSkills(context)
  const items = await Promise.all(
    names.map(async (name) => ({ label: name, detail: await skillSummary(context, name) })),
  )

  const choice = await vscode.window.showQuickPick(items, {
    title: 'Open a skill',
    placeHolder: 'Select a skill to read',
    matchOnDetail: true,
  })
  if (!choice) return

  await vscode.commands.executeCommand(
    'markdown.showPreview',
    vscode.Uri.joinPath(skillsSource(context), choice.label, 'SKILL.md'),
  )
}

/** Recursively collect every .md file under the bundled docs mirror. */
async function collectDocs(root, dir = root, out = []) {
  for (const [name, type] of await vscode.workspace.fs.readDirectory(dir)) {
    const child = vscode.Uri.joinPath(dir, name)
    if (type === vscode.FileType.Directory) {
      await collectDocs(root, child, out)
    } else if (name.endsWith('.md')) {
      out.push(child.path.slice(root.path.length + 1))
    }
  }
  return out
}

async function browseDocs(context) {
  const root = vscode.Uri.joinPath(context.extensionUri, REFERENCES_DIR)
  if (!(await exists(root))) {
    vscode.window.showErrorMessage('The bundled documentation mirror is missing from this extension.')
    return
  }

  const paths = await vscode.window.withProgress(
    { location: vscode.ProgressLocation.Window, title: 'Loading Neuxnet documentation…' },
    () => collectDocs(root),
  )

  const choice = await vscode.window.showQuickPick(paths.sort(), {
    title: `Neuxnet Mini App documentation (${paths.length} pages)`,
    placeHolder: 'Search by page path, e.g. "payment" or "pages.json"',
  })
  if (!choice) return

  await vscode.commands.executeCommand('markdown.showPreview', vscode.Uri.joinPath(root, choice))
}

/** Wraps a command so an unexpected failure surfaces instead of vanishing. */
function guard(fn, context) {
  return async () => {
    try {
      await fn(context)
    } catch (err) {
      vscode.window.showErrorMessage(`Neuxnet Mini App Skills: ${err.message}`)
    }
  }
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('neuxnetMiniapp.installSkills', guard(installSkills, context)),
    vscode.commands.registerCommand('neuxnetMiniapp.browseDocs', guard(browseDocs, context)),
    vscode.commands.registerCommand('neuxnetMiniapp.openSkill', guard(openSkill, context)),
  )
}

function deactivate() {}

module.exports = { activate, deactivate }
