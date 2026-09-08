---
name: miniapp-docs
description: >-
  Use when looking up Neuxnet Mini App documentation — the exact parameters of a
  component or API, whether something is supported on H5, configuration options,
  or any detail not covered by the other miniapp skills. Searches a complete
  offline mirror of the official docs.
---

# Look up the Neuxnet docs

This plugin bundles a complete offline mirror of `https://miniapp.neuxnet.com` — **403 pages** under [`references/`](../../references/INDEX.md). Prefer it over fetching the web: it is faster, versioned, and always available.

## How to search

Start with the index, which lists every page grouped by section:

```
references/INDEX.md
```

Then grep for the symbol you need:

```bash
grep -rl "requestPayment" plugins/neuxnet-miniapp/references/
grep -rn "enablePullDownRefresh" plugins/neuxnet-miniapp/references/collocation/pages.md
```

Every page carries frontmatter with the canonical `source_url`, so you can cite or open the live page.

## Layout

| Path | Contents |
| --- | --- |
| `references/quickstart/` | Install, scaffold, run, build |
| `references/tutorial/` | Concepts, page lifecycle, JS/CSS/Vue syntax, platform topics |
| `references/collocation/` | `pages.json`, `manifest.json`, `vite.config.js`, `App.vue`, `main.js` |
| `references/component/` | Built-in components; `component/uniui/` for the uni-ui library |
| `references/api/` | Client APIs — `api/plugins/` holds the Neuxnet-specific ones |
| `references/serverside/` | OpenAPI: OAuth, signing, payment, push |

The highest-value Neuxnet-specific pages:

- `references/api/plugins/` — `login`, `getAuthCode`, `getPhoneNumber`, `getUserProfile`, `payment`, `share`, `push`
- `references/serverside/index.md` — signing algorithm and every endpoint

## For broad questions

For a sweep across many pages ("which APIs work on H5?", "every component that takes a `mode`"), delegate to the **miniapp-docs-researcher** agent — it searches the mirror in an isolated context and returns just the answer with citations, instead of loading hundreds of pages here.

## Reading the docs critically

- **Check the platform table.** Nearly every component and API page has a "Platform Difference Description" table (`Mini App` vs `H5`). An `x` under H5 means it cannot be tested in `dev:h5`.
- **Much of this is upstream uni-app documentation** republished by Neuxnet and machine-translated from Chinese, so wording is sometimes awkward and occasional headings remain untranslated. The Neuxnet-specific pages (`api/plugins/`, `serverside/`) are the authoritative ones for Super App behaviour.
- **The docs can lag the toolchain.** Where they disagree with the installed packages or actual build output, trust the toolchain and note the discrepancy. Known cases: `dev:app` is not a scaffolded script, build output is `dist/build/app/`, and the bundled payment TypeScript types describe upstream uni-app rather than Neuxnet.

## Refreshing the mirror

```bash
cd tools && npm install && node mirror-docs.mjs
```

Re-scrapes all pages and rewrites `references/`; review the git diff to see what Neuxnet changed.

## Verify

The answer cites a specific file under `references/`, and any platform claim is backed by that page's platform table.
