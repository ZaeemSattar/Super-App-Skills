#!/usr/bin/env node
/**
 * Mirrors https://miniapp.neuxnet.com (VuePress 1.x, pre-rendered) to Markdown
 * under plugins/neuxnet-miniapp/references/.
 *
 * Re-run this to refresh the pack when Neuxnet updates their docs; the result
 * is a reviewable git diff.
 *
 *   node tools/mirror-docs.mjs                # discover routes + mirror
 *   node tools/mirror-docs.mjs --routes-only  # just refresh tools/routes.txt
 *   node tools/mirror-docs.mjs --limit 20     # mirror the first N routes (smoke test)
 */

import { writeFile, mkdir, readFile } from 'node:fs/promises'
import { dirname, join, relative, posix } from 'node:path'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const ORIGIN = 'https://miniapp.neuxnet.com'
const HERE = dirname(fileURLToPath(import.meta.url))
const ROUTES_FILE = join(HERE, 'routes.txt')
const OUT_DIR = join(HERE, '..', 'plugins', 'neuxnet-miniapp', 'references')

const CONCURRENCY = 5
const RETRIES = 3

const args = process.argv.slice(2)
const ROUTES_ONLY = args.includes('--routes-only')
const LIMIT = (() => {
  const i = args.indexOf('--limit')
  return i === -1 ? Infinity : Number(args[i + 1])
})()

/** Pages that are navigation scaffolding rather than content. */
const SKIP = /(^\/404\.html$|_sidebar\.html$)/

// ---------------------------------------------------------------- fetching

async function fetchText(url) {
  let lastErr
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'user-agent': 'neuxnet-docs-mirror/1.0 (+internal skills pack)' },
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return await res.text()
    } catch (err) {
      lastErr = err
      if (attempt < RETRIES) {
        await new Promise((r) => setTimeout(r, 500 * 2 ** (attempt - 1)))
      }
    }
  }
  throw lastErr
}

/**
 * The route table lives inside the VuePress app bundle. The bundle filename is
 * content-hashed and sits under a dated asset directory, so discover it from
 * the homepage rather than hard-coding it -- that way a site rebuild does not
 * silently break the mirror.
 */
async function discoverRoutes() {
  const home = await fetchText(`${ORIGIN}/index.html`)
  const bundle = home.match(/\/[^"']*\/assets\/js\/app\.[a-f0-9]+\.js/)?.[0]
  if (!bundle) throw new Error('Could not locate the VuePress app bundle on the homepage')

  const js = await fetchText(`${ORIGIN}${bundle}`)
  const routes = [...js.matchAll(/"(\/[a-zA-Z0-9/_.-]+\.html)"/g)].map((m) => m[1])

  const unique = [...new Set(routes)].filter((r) => !SKIP.test(r)).sort()
  if (unique.length < 100) {
    throw new Error(`Only found ${unique.length} routes -- the bundle format likely changed`)
  }
  return unique
}

async function loadRoutes() {
  try {
    const txt = await readFile(ROUTES_FILE, 'utf8')
    const routes = txt.split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'))
    if (routes.length) return routes
  } catch {
    /* fall through to discovery */
  }
  return discoverRoutes()
}

// ---------------------------------------------------------------- converting

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '_',
})
turndown.use(gfm)

// VuePress renders a "#" permalink anchor inside every heading. Drop it.
turndown.addRule('stripHeaderAnchors', {
  filter: (node) => node.nodeName === 'A' && node.classList.contains('header-anchor'),
  replacement: () => '',
})

/** `/api/plugins/payment.html` -> `api/plugins/payment.md` */
function routeToRelPath(route) {
  return route.replace(/^\//, '').replace(/\.html$/, '.md')
}

/**
 * Rewrite intra-site links to relative paths into the mirror so the docs stay
 * navigable offline. Anything we do not mirror (assets, external) is absolutised
 * back to the live site so the link still resolves.
 */
function rewriteLinks(markdown, route, routeSet) {
  const fromDir = posix.dirname(routeToRelPath(route))

  return markdown.replace(/\]\((\/[^)\s]*)([^)]*)\)/g, (match, href, tail) => {
    let [path, hash = ''] = href.split(/(#.*)/)

    // VuePress links appear in several shapes for the same page:
    //   /api/plugins/login.html   /api/plugins/login   /component/navigator?id=navigator
    // Normalise them all to the ".html" route the route table uses, and turn a
    // "?id=" query into the fragment it actually is.
    const query = path.match(/\?id=([^&]*)/)
    if (query) {
      if (!hash) hash = `#${query[1]}`
      path = path.replace(/\?.*$/, '')
    }

    const candidates = path.endsWith('/')
      ? [`${path}index.html`]
      : path.endsWith('.html')
        ? [path]
        : [`${path}.html`, `${path}/index.html`]

    const normalised = candidates.find((c) => routeSet.has(c))
    if (normalised) {
      let rel = posix.relative(fromDir, routeToRelPath(normalised))
      if (!rel.startsWith('.')) rel = `./${rel}`
      return `](${rel}${hash}${tail})`
    }
    return `](${ORIGIN}${href}${tail})`
  })
}

const CJK = /[一-鿿]/

/** `/api/a-d/rewarded-video.html` -> `Rewarded video` */
function humanizeRoute(route) {
  const slug = route.replace(/\.html$/, '').split('/').filter(Boolean).pop() ?? route
  const words = slug.replace(/[-_]/g, ' ').trim()
  return words.charAt(0).toUpperCase() + words.slice(1)
}

/**
 * Titles feed INDEX.md, which is how these docs get found, so they need to be
 * readable English. The site is a machine translation of a Chinese original and
 * a few pages still carry an untranslated <title> or lack a top-level heading,
 * so prefer the first in-content heading of any level and fall back to the
 * route slug rather than emitting CJK or a generic site name.
 */
/**
 * Titles that say nothing on their own. Many pages lead with a boilerplate
 * section heading ("introduce", "Open", "Overview"), which would make INDEX.md
 * unusable -- 44 pages called "introduce" cannot be told apart.
 */
const GENERIC_TITLE =
  /^(introduce|introduction|overview|open|background|grammar|parameters?|syntax|example|description|instructions?|preface|notes?|summary|usage|tip)$/i

function extractTitle(doc, markdown, route) {
  const slug = humanizeRoute(route)

  const candidates = [
    markdown.match(/^#\s+(.+)$/m)?.[1],
    doc.querySelector('title')?.textContent?.split('|')[0],
    markdown.match(/^#{2,4}\s+(.+)$/m)?.[1],
  ]

  for (const raw of candidates) {
    const title = raw?.trim()
    if (!title || CJK.test(title) || title === 'Neuxnet Documentation') continue
    // Keep a generic heading only as a qualifier, so the page stays identifiable.
    return GENERIC_TITLE.test(title) ? `${slug} — ${title.toLowerCase()}` : title
  }

  return slug
}

function yamlEscape(s) {
  return `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
}

function convert(html, route, routeSet) {
  const doc = new JSDOM(html).window.document
  const content = doc.querySelector('.theme-default-content')
  if (!content) return null

  // Strip site chrome that is not part of the documentation itself.
  content
    .querySelectorAll('.page-edit, .page-nav, .translate-tip, .translated-tip, .global-ui')
    .forEach((n) => n.remove())

  // The Cloud-Translation banner is repeated at the top of every page and is
  // not marked with a stable class, so match it by its content.
  content.querySelectorAll('p, div').forEach((n) => {
    const t = n.textContent.replace(/\s+/g, ' ').trim()
    if (/^This page is translated by/.test(t) && t.length < 200) n.remove()
  })

  let markdown = turndown.turndown(content.innerHTML).trim()
  markdown = rewriteLinks(markdown, route, routeSet)
  markdown = markdown.replace(/\n{3,}/g, '\n\n')

  const title = extractTitle(doc, markdown, route)
  const frontmatter = [
    '---',
    `title: ${yamlEscape(title)}`,
    `source_url: ${ORIGIN}${route}`,
    '---',
    '',
  ].join('\n')

  return { markdown: `${frontmatter}${markdown}\n`, title }
}

// ---------------------------------------------------------------- driver

/** Runs `worker` over `items` with a bounded number of in-flight tasks. */
async function pooled(items, limit, worker) {
  const results = new Array(items.length)
  let cursor = 0

  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const i = cursor++
      results[i] = await worker(items[i], i)
    }
  })

  await Promise.all(runners)
  return results
}

const SECTION_TITLES = {
  quickstart: 'Getting started',
  tutorial: 'Tutorial / guides',
  collocation: 'Framework configuration',
  component: 'Components',
  api: 'Client APIs',
  serverside: 'Server side (Neuxnet OpenAPI)',
  plugin: 'Plugins & uni_modules',
  app: 'App platform',
}

async function writeIndex(pages) {
  const bySection = new Map()
  for (const p of pages) {
    const section = p.relPath.includes('/') ? p.relPath.split('/')[0] : 'root'
    if (!bySection.has(section)) bySection.set(section, [])
    bySection.get(section).push(p)
  }

  const order = [...Object.keys(SECTION_TITLES), 'root'].filter((s) => bySection.has(s))
  for (const s of bySection.keys()) if (!order.includes(s)) order.push(s)

  const lines = [
    '---',
    'title: "Neuxnet Mini App documentation index"',
    `source_url: ${ORIGIN}/`,
    '---',
    '',
    '# Neuxnet Mini App documentation index',
    '',
    `Offline mirror of ${ORIGIN} — ${pages.length} pages.`,
    'Generated by `tools/mirror-docs.mjs`; do not edit by hand.',
    '',
    'Pages under `component/`, most of `api/`, and `tutorial/` are upstream uni-app',
    'documentation republished by Neuxnet and machine-translated from Chinese. Where a',
    'translation is ambiguous, check the `source_url` in the page frontmatter.',
    '',
  ]

  for (const section of order) {
    lines.push(`## ${SECTION_TITLES[section] ?? section}`, '')
    lines.push('| Page | Local file |', '| --- | --- |')
    for (const p of bySection.get(section).sort((a, b) => a.relPath.localeCompare(b.relPath))) {
      const title = p.title.replace(/\|/g, '\\|')
      lines.push(`| ${title} | [${p.relPath}](${p.relPath}) |`)
    }
    lines.push('')
  }

  await writeFile(join(OUT_DIR, 'INDEX.md'), lines.join('\n'))
}

async function main() {
  console.log('Discovering routes...')
  const routes = await discoverRoutes()
  await writeFile(
    ROUTES_FILE,
    `# Routes for ${ORIGIN}, discovered by mirror-docs.mjs\n# ${routes.length} pages\n${routes.join('\n')}\n`,
  )
  console.log(`  ${routes.length} routes -> ${relative(process.cwd(), ROUTES_FILE)}`)
  if (ROUTES_ONLY) return

  const routeSet = new Set(routes)
  const targets = routes.slice(0, LIMIT)
  const failures = []
  let done = 0

  console.log(`Mirroring ${targets.length} pages...`)
  const pages = await pooled(targets, CONCURRENCY, async (route) => {
    try {
      const html = await fetchText(`${ORIGIN}${route}`)
      const result = convert(html, route, routeSet)
      if (!result) throw new Error('no .theme-default-content on page')

      const relPath = routeToRelPath(route)
      const outPath = join(OUT_DIR, relPath)
      await mkdir(dirname(outPath), { recursive: true })
      await writeFile(outPath, result.markdown)

      done++
      if (done % 25 === 0) console.log(`  ${done}/${targets.length}`)
      return { relPath, title: result.title }
    } catch (err) {
      failures.push({ route, message: err.message })
      return null
    }
  })

  const ok = pages.filter(Boolean)
  await writeIndex(ok)

  console.log(`\nMirrored ${ok.length} pages, ${failures.length} failed.`)
  for (const f of failures) console.log(`  FAIL ${f.route}: ${f.message}`)
  if (failures.length) process.exitCode = 1
}

await main()
