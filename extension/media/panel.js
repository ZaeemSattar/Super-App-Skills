/* Runs inside the webview. Owns rendering and filtering only -- every action
   that touches disk is posted to the extension host, which is the sole writer. */
(function () {
  const vscode = acquireVsCodeApi()

  /** @type {{skills: Array, target: Object, hasWorkspace: boolean}} */
  let state = { skills: [], target: null, hasWorkspace: false }
  let filter = ''
  let showOnly = 'all'

  const $ = (id) => document.getElementById(id)

  function post(type, payload) {
    vscode.postMessage({ type, ...payload })
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ))
  }

  function visible() {
    const q = filter.trim().toLowerCase()
    return state.skills.filter((s) => {
      if (showOnly === 'installed' && !s.installed) return false
      if (showOnly === 'available' && s.installed) return false
      if (!q) return true
      return s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    })
  }

  function renderTarget() {
    const t = state.target
    $('target-project').setAttribute('aria-pressed', String(t.kind === 'project'))
    $('target-global').setAttribute('aria-pressed', String(t.kind === 'global'))

    const projectBtn = $('target-project')
    projectBtn.disabled = !state.hasWorkspace
    projectBtn.querySelector('.path').textContent = state.hasWorkspace
      ? `${state.workspaceName}/.claude/skills`
      : 'This project'
    projectBtn.querySelector('.hint').textContent = state.hasWorkspace
      ? 'Only this project — commit it so your team gets the skills too'
      : 'Open a folder first'

    $('target-global').querySelector('.hint').textContent =
      `Every project on ${esc(state.machine)}`
  }

  function renderCards() {
    const list = visible()
    const installedCount = state.skills.filter((s) => s.installed).length

    $('count').textContent =
      `${installedCount} of ${state.skills.length} installed` +
      (list.length !== state.skills.length ? ` · showing ${list.length}` : '')

    $('install-all').disabled = installedCount === state.skills.length
    $('install-all').textContent =
      installedCount === state.skills.length ? 'All skills installed' : `Install all ${state.skills.length} skills`

    if (list.length === 0) {
      $('grid').innerHTML = '<div class="empty">No skills match that search.</div>'
      return
    }

    $('grid').innerHTML = list.map((s) => `
      <div class="card ${s.installed ? 'installed' : ''}">
        <div class="dot">${s.installed ? '●' : '○'}</div>
        <div>
          <div class="name" data-open="${esc(s.name)}" role="button" tabindex="0">${esc(s.name)}</div>
          <p class="desc">${esc(s.description)}</p>
        </div>
        <div class="actions">
          ${s.installed
            ? `<span class="badge">installed</span>
               <button class="icon-btn danger" data-remove="${esc(s.name)}">Remove</button>`
            : `<button class="btn" data-install="${esc(s.name)}">Install</button>`}
        </div>
      </div>
    `).join('')
  }

  function render() {
    if (!state.target) return
    renderTarget()
    renderCards()
  }

  // --- events -------------------------------------------------------------

  $('search').addEventListener('input', (e) => { filter = e.target.value; renderCards() })

  $('filter').addEventListener('change', (e) => { showOnly = e.target.value; renderCards() })

  $('install-all').addEventListener('click', () => post('installAll'))
  $('browse-docs').addEventListener('click', () => post('browseDocs'))
  $('refresh').addEventListener('click', () => post('refresh'))

  $('target-project').addEventListener('click', () => post('setTarget', { target: 'project' }))
  $('target-global').addEventListener('click', () => post('setTarget', { target: 'global' }))

  // Delegated so re-rendering the grid never leaves stale listeners behind.
  $('grid').addEventListener('click', (e) => {
    const el = e.target.closest('[data-install],[data-remove],[data-open]')
    if (!el) return
    if (el.dataset.install) post('install', { name: el.dataset.install })
    else if (el.dataset.remove) post('remove', { name: el.dataset.remove })
    else if (el.dataset.open) post('open', { name: el.dataset.open })
  })

  $('grid').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return
    const el = e.target.closest('[data-open]')
    if (!el) return
    e.preventDefault()
    post('open', { name: el.dataset.open })
  })

  window.addEventListener('message', (e) => {
    if (e.data.type === 'state') {
      state = e.data.state
      render()
    }
  })

  post('ready')
})()
