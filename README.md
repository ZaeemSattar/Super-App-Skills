# Super App Skills

Claude Code skills for building **Mini Apps on the Neuxnet Super App platform**.

This repo is a Claude Code **plugin marketplace**. Install it once and every developer gets the same skills for scaffolding, running, styling, wiring APIs, integrating the backend, and reviewing Mini Apps — plus a complete offline copy of the official documentation.

## Install

Four routes — all deliver the same skills.

### npm / terminal (fastest)

Works in any terminal, no Claude Code plugin system needed:

```sh
npx super-app-skills install            # this project (.claude/skills)
npx super-app-skills install --global   # every project (~/.claude/skills)
npx super-app-skills list               # see what's available and installed
```

See [cli/](cli/) for all commands and flags.

### Claude Code plugin (recommended for teams)

```
/plugin marketplace add https://github.com/ZaeemSattar/Super-App-Skills.git
/plugin install neuxnet-miniapp@superapp-skills
```

### Shell one-liner (no npm)

```sh
curl -fsSL https://raw.githubusercontent.com/ZaeemSattar/Super-App-Skills/main/install/install.sh | sh
```

Add `-s -- --global` to install into `~/.claude/skills` instead of the current project.

### VS Code extension

Install **Neuxnet Super App Mini App Skills** from the Marketplace, then run
**Neuxnet Mini App: Install Skills to ~/.claude** from the Command Palette. The
extension also bundles the docs mirror for browsing inside the editor. See
[extension/](extension/).

Then just describe what you want. The skills load automatically:

> "Scaffold a new Neuxnet mini app with a login page"
> "Why does navigateTo do nothing on my home tab?"
> "My accessToken call returns a signature error"

Or invoke one by name: `/miniapp-create`, `/miniapp-payment`, `/miniapp-review`.

### Enable it for a whole team automatically

Commit this to a project's `.claude/settings.json`. Teammates who trust the repo get the plugin with no further steps:

```json
{
  "extraKnownMarketplaces": {
    "superapp-skills": {
      "source": { "source": "git", "url": "https://github.com/ZaeemSattar/Super-App-Skills.git" }
    }
  },
  "enabledPlugins": { "neuxnet-miniapp@superapp-skills": true }
}
```

## Building

All distributables are produced into `build/`, one subfolder per target, at a single shared version:

```sh
npm run version:set -- minor   # bump extension, CLI and plugin together
npm run build                  # -> build/{vscode,cli,plugin}/ + manifest.json
```

See [docs/BUILDING.md](docs/BUILDING.md) for the release checklist.

## What's included

| Skill | Use it for |
| --- | --- |
| `miniapp-create` | Scaffold a project; understand the file layout |
| `miniapp-run` | Dev server, H5 vs app platform, on-device QR preview |
| `miniapp-page` | Pages, `pages.json`, routing, tabBar, lifecycle, subPackages |
| `miniapp-ui` | Components, `rpx` sizing, styling, easycom, static assets |
| `miniapp-api` | Client APIs: request, storage, media, device, UI feedback |
| `miniapp-auth` | Login, auth codes, scopes, user profile |
| `miniapp-payment` | `requestPayment`, trade orders, status codes, callbacks |
| `miniapp-push` | `sendNotify` and `sendActivity` messaging |
| `miniapp-serverside` | OpenAPI signing, OAuth exchange, all endpoints |
| `miniapp-build` | `.wgt` packaging, versioning, release checklist |
| `miniapp-review` | Review against platform rules before shipping |
| `miniapp-docs` | Look anything up in the offline docs mirror |

Two subagents keep heavy work out of your main conversation: **miniapp-docs-researcher** (searches the mirror) and **miniapp-reviewer** (independent review pass).

### Signing helpers

Because request signing is the most common backend failure, `skills/miniapp-serverside/scripts/` ships runnable, dependency-free implementations in **Node, Python and Java**, all verified to produce identical digests.

## Documentation mirror

`plugins/neuxnet-miniapp/references/` holds **403 pages** mirrored from
`https://miniapp.neuxnet.com`, converted to Markdown with the source URL in each
page's frontmatter.

Refresh it when Neuxnet updates their docs:

```bash
cd tools && npm install && node mirror-docs.mjs
```

The result is a reviewable git diff.

> Pages under `component/`, most of `api/`, and `tutorial/` are upstream uni-app
> documentation republished by Neuxnet and machine-translated from Chinese. The
> Neuxnet-specific pages — `api/plugins/` and `serverside/` — are authoritative
> for Super App behaviour.

## Where the docs and the toolchain disagree

Verified against `create-neu-miniapp@1.0.6` and `@neuxnet/*@3.0.0`. The skills follow the toolchain and call these out:

| Docs say | Actually |
| --- | --- |
| `npm run dev:app` | Not a scaffolded script — use `npx neu -p app` |
| Output in `dist/build/app-plus/` | `dist/build/app/` |
| Source at project root | Under `src/` |
| Hooks from `@dcloudio/uni-app` | `@neuxnet/neu-app` |
| `requestPayment({provider, orderInfo})` in the bundled types | Neuxnet uses `{name, country, currency, amount, transactionNo}` |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
