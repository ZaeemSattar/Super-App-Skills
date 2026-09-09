const vscode = require('vscode')
const os = require('os')

/**
 * Skills ship as directories (`<name>/SKILL.md`, plus optional `scripts/`), and
 * Claude Code discovers them in two places: `~/.claude/skills/` (every project)
 * and `<workspace>/.claude/skills/` (that project only, and committable so a
 * whole team gets them). The user picks which via the target setting below.
 *
 * `os.homedir()` resolves on whichever machine the extension host runs on. The
 * manifest declares `extensionKind: ["workspace"]`, so under Remote SSH / WSL /
 * Codespaces that is the remote machine -- which is where Claude Code runs, and
 * therefore the correct target.
 */

const SKILLS_DIR = 'skills'
const REFERENCES_DIR = 'references'

/** Where the last install went. Persisted so the tree opens showing the truth. */
const TARGET_KEY = 'neuxnetMiniapp.target'
const TARGET_PROJECT = 'project'
const TARGET_GLOBAL = 'global'

function skillsSource(context) {
  return vscode.Uri.joinPath(context.extensionUri, SKILLS_DIR)
}

function workspaceRoot() {
  return vscode.workspace.workspaceFolders?.[0]?.uri
}

/**
 * Resolves the configured target to a concrete directory. Falls back to global
 * when 'project' is selected but no folder is open, so the tree and the install
 * command can never disagree about where skills belong.
 */
function resolveTarget(context) {
  const stored = context.globalState.get(TARGET_KEY, TARGET_PROJECT)
  const root = workspaceRoot()

  if (stored === TARGET_PROJECT && root) {
    return {
      kind: TARGET_PROJECT,
      uri: vscode.Uri.joinPath(root, '.claude', 'skills'),
      label: `${vscode.workspace.workspaceFolders[0].name}/.claude/skills`,
      description: 'this project only — commit it to share with your team',
    }
  }

  return {
    kind: TARGET_GLOBAL,
    uri: vscode.Uri.joinPath(vscode.Uri.file(os.homedir()), '.claude', 'skills'),
    label: '~/.claude/skills',
    description: 'every project on this machine',
  }
}

function describeMachine() {
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

/** Directory names under `skills/` that contain a SKILL.md. */
async function listBundledSkills(context) {
  const entries = await vscode.workspace.fs.readDirectory(skillsSource(context))
  return entries
    .filter(([, type]) => type === vscode.FileType.Directory)
    .map(([name]) => name)
    .sort()
}

/** Frontmatter description, used as the tooltip and picker subtitle. */
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

/** Copies one skill directory into the target, replacing any existing copy. */
async function copySkill(context, name, targetDir) {
  await vscode.workspace.fs.copy(
    vscode.Uri.joinPath(skillsSource(context), name),
    vscode.Uri.joinPath(targetDir, name),
    { overwrite: true },
  )
}

// ---------------------------------------------------------------------------
// Tree view
// ---------------------------------------------------------------------------

class SkillsProvider {
  constructor(context) {
    this.context = context
    this._onDidChangeTreeData = new vscode.EventEmitter()
    this.onDidChangeTreeData = this._onDidChangeTreeData.event
  }

  refresh() {
    this._onDidChangeTreeData.fire()
    // The panel may be showing the same state; keep the two surfaces in step.
    refreshDashboard().catch(() => {})
  }

  getTreeItem(item) {
    return item
  }

  async getChildren(parent) {
    if (parent) return []

    const target = resolveTarget(this.context)
    const names = await listBundledSkills(this.context)

    const header = new vscode.TreeItem(
      target.label,
      vscode.TreeItemCollapsibleState.None,
    )
    header.description = target.description
    header.tooltip = new vscode.MarkdownString(
      `Skills install to \`${target.uri.fsPath}\` on ${describeMachine()}.\n\nClick to change.`,
    )
    header.iconPath = new vscode.ThemeIcon(target.kind === TARGET_PROJECT ? 'folder-active' : 'home')
    header.contextValue = 'target'
    header.command = { command: 'neuxnetMiniapp.setTarget', title: 'Change Install Location' }

    const skills = await Promise.all(
      names.map(async (name) => {
        const installed = await exists(vscode.Uri.joinPath(target.uri, name))
        const summary = await skillSummary(this.context, name)

        const item = new vscode.TreeItem(name, vscode.TreeItemCollapsibleState.None)
        item.description = installed ? 'installed' : ''
        item.tooltip = new vscode.MarkdownString(`**${name}**\n\n${summary}`)
        item.iconPath = new vscode.ThemeIcon(
          installed ? 'pass-filled' : 'circle-large-outline',
          installed ? new vscode.ThemeColor('testing.iconPassed') : undefined,
        )
        // Drives which inline buttons show; only installed skills get Remove.
        item.contextValue = installed ? 'skill-installed' : 'skill'
        item.command = {
          command: 'neuxnetMiniapp.openSkill',
          title: 'Open a Skill',
          arguments: [item],
        }
        return item
      }),
    )

    return [header, ...skills]
  }
}

// ---------------------------------------------------------------------------
// Commands
// ---------------------------------------------------------------------------

/** Shared install routine: copies `names`, reports progress, offers next step. */
async function performInstall(context, provider, names) {
  if (names.length === 0) return

  const target = resolveTarget(context)

  // Overwriting is destructive if the user has edited a skill in place, so ask
  // once rather than silently replacing their work.
  const clashes = []
  for (const name of names) {
    if (await exists(vscode.Uri.joinPath(target.uri, name))) clashes.push(name)
  }
  if (clashes.length > 0) {
    const proceed = await vscode.window.showWarningMessage(
      `${clashes.length} skill(s) already exist in ${target.label} and will be overwritten.`,
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
      title: `Installing skills to ${target.label}`,
      cancellable: true,
    },
    async (progress, token) => {
      await vscode.workspace.fs.createDirectory(target.uri)
      const step = 100 / names.length

      for (const name of names) {
        if (token.isCancellationRequested) break
        progress.report({ message: name, increment: step })
        try {
          await copySkill(context, name, target.uri)
          installed++
        } catch (err) {
          failures.push(`${name}: ${err.message}`)
        }
      }
    },
  )

  provider.refresh()

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
    `Installed ${installed} skill(s) to ${target.label}. Restart Claude Code, then just ask it to build something — it picks the right skill on its own.`,
    'Reveal Folder',
  )
  if (choice === 'Reveal Folder') {
    await vscode.commands.executeCommand('revealFileInOS', vscode.Uri.joinPath(target.uri, names[0]))
  }
}

async function installAll(context, provider) {
  const names = await listBundledSkills(context)
  if (names.length === 0) {
    vscode.window.showErrorMessage('No bundled skills found in this extension.')
    return
  }
  await performInstall(context, provider, names)
}

async function installOne(context, provider, item) {
  if (!item?.label) return
  await performInstall(context, provider, [item.label])
}

async function uninstallOne(context, provider, item) {
  if (!item?.label) return

  const target = resolveTarget(context)
  const uri = vscode.Uri.joinPath(target.uri, item.label)

  const proceed = await vscode.window.showWarningMessage(
    `Remove "${item.label}" from ${target.label}?`,
    { modal: true, detail: 'This deletes the installed copy. The bundled original stays in the extension.' },
    'Remove',
  )
  if (proceed !== 'Remove') return

  try {
    await vscode.workspace.fs.delete(uri, { recursive: true, useTrash: true })
  } catch (err) {
    vscode.window.showErrorMessage(`Could not remove ${item.label}: ${err.message}`)
    return
  }
  provider.refresh()
}

/** Lets the user pick between the project and home directory install targets. */
async function setTarget(context, provider) {
  const root = workspaceRoot()
  const current = context.globalState.get(TARGET_KEY, TARGET_PROJECT)

  const items = [
    {
      label: root ? `$(folder-active) ${vscode.workspace.workspaceFolders[0].name}/.claude/skills` : '$(folder) This project',
      description: current === TARGET_PROJECT ? 'current' : '',
      detail: root
        ? 'Only this project. Commit .claude/skills so your team gets the skills too.'
        : 'Unavailable — open a folder first.',
      value: TARGET_PROJECT,
      disabled: !root,
    },
    {
      label: '$(home) ~/.claude/skills',
      description: current === TARGET_GLOBAL ? 'current' : '',
      detail: `Every project on ${describeMachine()}.`,
      value: TARGET_GLOBAL,
    },
  ]

  const choice = await vscode.window.showQuickPick(items, {
    title: 'Where should skills be installed?',
    placeHolder: 'Claude Code reads both locations',
  })
  if (!choice) return

  if (choice.disabled) {
    vscode.window.showWarningMessage('Open a project folder before installing skills into it.')
    return
  }

  await context.globalState.update(TARGET_KEY, choice.value)
  provider.refresh()
}

/** Kept for users who prefer the palette-driven multi-select flow. */
async function installSkills(context, provider) {
  const names = await listBundledSkills(context)
  if (names.length === 0) {
    vscode.window.showErrorMessage('No bundled skills found in this extension.')
    return
  }

  const target = resolveTarget(context)
  const items = await Promise.all(
    names.map(async (name) => ({
      label: name,
      detail: await skillSummary(context, name),
      picked: true,
    })),
  )

  const picked = await vscode.window.showQuickPick(items, {
    canPickMany: true,
    title: `Install skills to ${target.label}`,
    placeHolder: 'All selected by default',
  })
  if (!picked || picked.length === 0) return

  await performInstall(context, provider, picked.map((p) => p.label))
}

/** Opens a skill's SKILL.md preview — from a tree click or the palette. */
async function openSkill(context, item) {
  let name = item?.label

  if (!name) {
    const names = await listBundledSkills(context)
    const items = await Promise.all(
      names.map(async (n) => ({ label: n, detail: await skillSummary(context, n) })),
    )
    const choice = await vscode.window.showQuickPick(items, {
      title: 'Open a skill',
      placeHolder: 'Select a skill to read',
      matchOnDetail: true,
    })
    if (!choice) return
    name = choice.label
  }

  await vscode.commands.executeCommand(
    'markdown.showPreview',
    vscode.Uri.joinPath(skillsSource(context), name, 'SKILL.md'),
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


// ---------------------------------------------------------------------------
// Dashboard webview
// ---------------------------------------------------------------------------

/** Blocks injected scripts from running if a skill description ever contains markup. */
function nonce() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return Array.from({ length: 32 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

/** The live picture the webview renders: every bundled skill plus its state. */
async function buildState(context) {
  const target = resolveTarget(context)
  const names = await listBundledSkills(context)

  const skills = await Promise.all(
    names.map(async (name) => ({
      name,
      description: await skillSummary(context, name),
      installed: await exists(vscode.Uri.joinPath(target.uri, name)),
    })),
  )

  return {
    skills,
    target: { kind: target.kind, label: target.label, path: target.uri.fsPath },
    hasWorkspace: Boolean(workspaceRoot()),
    workspaceName: vscode.workspace.workspaceFolders?.[0]?.name ?? '',
    machine: describeMachine(),
  }
}

function panelHtml(webview, context) {
  const n = nonce()
  const css = webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, 'media', 'panel.css'))
  const js = webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, 'media', 'panel.js'))

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${n}';">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="${css}" rel="stylesheet">
<title>974 Super App Skills</title>
</head>
<body>
<div class="wrap">
  <header>
    <h1>974 Super App Skills</h1>
    <p class="sub">Claude Code skills for building Mini Apps on the Neuxnet Super App platform.
    Install them, restart Claude Code, then just describe what you want to build &mdash; Claude picks the right skill on its own.</p>

    <div class="target">
      <div class="target-label">Install location</div>
      <div class="seg">
        <button id="target-project" aria-pressed="false">
          <span class="path">This project</span>
          <span class="hint"></span>
        </button>
        <button id="target-global" aria-pressed="false">
          <span class="path">~/.claude/skills</span>
          <span class="hint"></span>
        </button>
      </div>
    </div>
  </header>

  <div class="toolbar">
    <input id="search" class="search" type="search" placeholder="Search skills — try &quot;payment&quot; or &quot;login&quot;" aria-label="Search skills">
    <select id="filter" class="search" style="flex:0 0 130px" aria-label="Filter by state">
      <option value="all">All skills</option>
      <option value="installed">Installed</option>
      <option value="available">Not installed</option>
    </select>
    <button id="install-all" class="btn">Install all</button>
    <button id="browse-docs" class="btn secondary">Browse docs</button>
    <button id="refresh" class="btn secondary">Refresh</button>
  </div>

  <div class="count" id="count"></div>
  <div class="grid" id="grid" style="margin-top:12px"></div>

  <div class="next">
    <h2>After installing</h2>
    <ol>
      <li>Restart Claude Code so it picks up the new skills.</li>
      <li>Ask normally &mdash; <em>&ldquo;scaffold a new Neuxnet mini app&rdquo;</em> loads <code>miniapp-create</code>, <em>&ldquo;add checkout to this page&rdquo;</em> loads <code>miniapp-payment</code>.</li>
      <li>Force a specific one with a slash command, e.g. <code>/miniapp-payment</code>.</li>
    </ol>
  </div>
</div>
<script nonce="${n}" src="${js}"></script>
</body>
</html>`
}

/** Single reused panel -- reopening focuses it rather than stacking duplicates. */
let dashboard = null

/** Reassigned when a panel opens; a no-op while none is. */
let refreshDashboard = async () => {}

async function showDashboard(context, provider) {
  if (dashboard) {
    dashboard.reveal(vscode.ViewColumn.One)
    return
  }

  dashboard = vscode.window.createWebviewPanel(
    'neuxnetMiniapp.dashboard',
    '974 Super App Skills',
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true,
      localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')],
    },
  )

  dashboard.iconPath = vscode.Uri.joinPath(context.extensionUri, 'images', 'icon.png')
  dashboard.webview.html = panelHtml(dashboard.webview, context)

  const push = async () => {
    if (!dashboard) return
    await dashboard.webview.postMessage({ type: 'state', state: await buildState(context) })
  }

  // Every disk-touching action funnels through here, then re-pushes state so
  // the panel and the tree can never drift apart.
  dashboard.webview.onDidReceiveMessage(async (msg) => {
    try {
      switch (msg.type) {
        case 'ready':
        case 'refresh':
          break
        case 'installAll':
          await installAll(context, provider)
          break
        case 'install':
          await performInstall(context, provider, [msg.name])
          break
        case 'remove':
          await uninstallOne(context, provider, { label: msg.name })
          break
        case 'open':
          await openSkill(context, { label: msg.name })
          break
        case 'browseDocs':
          await browseDocs(context)
          break
        case 'setTarget':
          if (msg.target === TARGET_PROJECT && !workspaceRoot()) {
            vscode.window.showWarningMessage('Open a project folder before installing skills into it.')
            break
          }
          await context.globalState.update(TARGET_KEY, msg.target)
          provider.refresh()
          break
      }
    } catch (err) {
      vscode.window.showErrorMessage(`Neuxnet Mini App Skills: ${err.message}`)
    }
    await push()
  })

  dashboard.onDidDispose(() => {
    dashboard = null
    refreshDashboard = async () => {}
  })

  // Installs triggered from the tree or palette must refresh the panel too.
  refreshDashboard = push
  await push()
}

/**
 * Nudges first-time users once. Without this the extension is silent on install
 * and looks broken -- the sidebar is easy to miss in a crowded activity bar.
 */
const GREETED_KEY = 'neuxnetMiniapp.greeted'

async function maybeGreet(context) {
  if (context.globalState.get(GREETED_KEY)) return
  await context.globalState.update(GREETED_KEY, true)

  const target = resolveTarget(context)
  const choice = await vscode.window.showInformationMessage(
    `974 Super App Skills is ready. Install the Mini App skills to ${target.label} so Claude Code can use them?`,
    'Open Skills Panel',
    'Install All',
  )

  if (choice === 'Install All') {
    await vscode.commands.executeCommand('neuxnetMiniapp.installAll')
  } else if (choice === 'Open Skills Panel') {
    await vscode.commands.executeCommand('neuxnetMiniapp.showDashboard')
  }
}

/** Wraps a command so an unexpected failure surfaces instead of vanishing. */
function guard(fn) {
  return async (...args) => {
    try {
      await fn(...args)
    } catch (err) {
      vscode.window.showErrorMessage(`Neuxnet Mini App Skills: ${err.message}`)
    }
  }
}

function activate(context) {
  const provider = new SkillsProvider(context)

  context.subscriptions.push(
    vscode.window.registerTreeDataProvider('neuxnetMiniapp.skills', provider),
    vscode.commands.registerCommand('neuxnetMiniapp.showDashboard', guard(() => showDashboard(context, provider))),
    vscode.commands.registerCommand('neuxnetMiniapp.installAll', guard(() => installAll(context, provider))),
    vscode.commands.registerCommand('neuxnetMiniapp.installOne', guard((item) => installOne(context, provider, item))),
    vscode.commands.registerCommand('neuxnetMiniapp.uninstallOne', guard((item) => uninstallOne(context, provider, item))),
    vscode.commands.registerCommand('neuxnetMiniapp.setTarget', guard(() => setTarget(context, provider))),
    vscode.commands.registerCommand('neuxnetMiniapp.refresh', guard(() => provider.refresh())),
    vscode.commands.registerCommand('neuxnetMiniapp.installSkills', guard(() => installSkills(context, provider))),
    vscode.commands.registerCommand('neuxnetMiniapp.openSkill', guard((item) => openSkill(context, item))),
    vscode.commands.registerCommand('neuxnetMiniapp.browseDocs', guard(() => browseDocs(context))),
    // Installing outside VS Code (or a teammate committing .claude/skills)
    // should still be reflected in the badges.
    vscode.workspace.onDidChangeWorkspaceFolders(() => provider.refresh()),
  )

  maybeGreet(context).catch(() => {})
}

function deactivate() {}

module.exports = { activate, deactivate }
