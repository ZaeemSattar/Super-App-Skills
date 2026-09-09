<div align="center">

# 974 Super App Skills

### Build Neuxnet Mini Apps with Claude Code — without reading the docs first

Twelve battle-tested [Claude Code](https://claude.com/claude-code) skills and a **403-page offline documentation mirror**, packaged so Claude already knows your platform.

[![Marketplace](https://img.shields.io/visual-studio-marketplace/v/ZaeemSattar.super-app-skills-by-zaeem?style=for-the-badge&color=1e88e5&label=marketplace)](https://marketplace.visualstudio.com/items?itemName=ZaeemSattar.super-app-skills-by-zaeem)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/ZaeemSattar.super-app-skills-by-zaeem?style=for-the-badge&color=43a047)](https://marketplace.visualstudio.com/items?itemName=ZaeemSattar.super-app-skills-by-zaeem)
[![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)](LICENSE)

**12 skills** · **403 doc pages** · **3 signing helpers** · **zero configuration**

</div>

---

## Why this exists

Ask Claude to add checkout to a Mini App without these skills and you'll get plausible, wrong code — because the platform's own TypeScript types are inherited uni-app stubs that describe a **different payment API than the one Neuxnet actually runs**.

That's not the only trap. Mini App development spans a `neu`/Vite toolchain, Vue 3 SFCs, `pages.json` routing, `rpx` styling, APIs that behave differently in a browser than in the Super App, and a signed backend OpenAPI. The published docs disagree with the shipped toolchain in at least five places.

This extension encodes all of it as skills Claude loads automatically — so the right rules apply without you remembering to mention them.

---

## Quick start

> **Three steps, about thirty seconds.**

**1.** Click the **974 Super App Skills** icon in the activity bar
**2.** Choose where skills go, then hit **Install all**
**3.** Restart Claude Code

Then just talk normally. You never type a skill name:

| You say | Claude loads |
| :--- | :--- |
| *"scaffold a new Neuxnet mini app"* | `miniapp-create` |
| *"add checkout to this page"* | `miniapp-payment` |
| *"why is my notifyUrl callback not firing?"* | `miniapp-payment` |
| *"set up login"* | `miniapp-auth` |
| *"package this for release"* | `miniapp-build` |

Need a specific one? Force it with a slash command — `/miniapp-payment`.

---

## The Skills Panel

A real UI, not a command palette scavenger hunt.

```
┌─────────────────────────────────────────────────────────────┐
│  974 Super App Skills                                       │
│  ─────────────────────────────────────────────────────────  │
│  INSTALL LOCATION                                           │
│  ┌───────────────────────┐  ┌───────────────────────┐       │
│  │ ▸ my-app/.claude/…    │  │   ~/.claude/skills    │       │
│  │   this project only   │  │   every project       │       │
│  └───────────────────────┘  └───────────────────────┘       │
│                                                             │
│  🔍 Search skills…      [All ▾]  [Install all] [Docs]       │
│                                                             │
│  4 of 12 installed                                          │
│  ● miniapp-create    Scaffolding, layout, appid  [installed]│
│  ● miniapp-payment   requestPayment, callbacks   [installed]│
│  ○ miniapp-auth      Login, auth codes, scopes    [Install] │
│  ○ miniapp-ui        Components, rpx, easycom     [Install] │
└─────────────────────────────────────────────────────────────┘
```

- **Live install badges** — see at a glance what's active
- **Search** by name or by what a skill actually covers
- **One-click install or removal**, individually or all at once
- **Click any skill** to read its full guidance before installing
- **Safe by default** — overwriting an edited skill always asks first

---

## Where skills install

Claude Code reads both locations. The panel toggles between them.

| Location | Scope | Pick this when |
| :--- | :--- | :--- |
| **`<project>/.claude/skills`** | This project only | You want skills committed to the repo so your **whole team** gets them |
| **`~/.claude/skills`** | Every project on the machine | You build Mini Apps across **several repos** |

Project is the default whenever a folder is open.

> **Remote development:** under Remote SSH, WSL, Dev Containers or Codespaces, skills install to the **remote** machine — where Claude Code actually runs. The panel names the host it writes to.

---

## What's covered

**🚀 Getting started**

| Skill | Covers |
| :--- | :--- |
| `miniapp-create` | Scaffolding, project layout, `appid` |
| `miniapp-run` | Dev server, H5 vs app platform, on-device QR preview |
| `miniapp-docs` | Looking things up in the offline mirror |

**🎨 Building the app**

| Skill | Covers |
| :--- | :--- |
| `miniapp-page` | `pages.json`, routing, tabBar, lifecycle, subPackages |
| `miniapp-ui` | Components, `rpx` sizing, styling, easycom, static assets |
| `miniapp-api` | request, storage, media, device, UI feedback |

**💳 Platform features**

| Skill | Covers |
| :--- | :--- |
| `miniapp-auth` | Login, auth codes, scopes, user profile |
| `miniapp-payment` | `requestPayment`, trade orders, status codes, callbacks |
| `miniapp-push` | `sendNotify` and `sendActivity` |

**🖥 Backend, shipping & quality**

| Skill | Covers |
| :--- | :--- |
| `miniapp-serverside` | OpenAPI signing, OAuth exchange, endpoints |
| `miniapp-build` | `.wgt` packaging, versioning, release checklist |
| `miniapp-review` | Reviewing a Mini App against platform rules |

`miniapp-serverside` ships runnable request-signing helpers in **Node, Python and Java** — all three verified to produce identical digests. Signing is the single most common backend integration failure.

---

## Verified against the real toolchain

These skills were written by scaffolding, building and running an actual project — not by reading the docs. Where the two disagree, the skills follow reality and say so:

| The docs say | What actually happens |
| :--- | :--- |
| `npm run dev:app` | Not a scaffolded script — use **`npx neu -p app`** |
| Output in `dist/build/app-plus/` | **`dist/build/app/`** |
| Sources at project root | Under **`src/`** |
| Hooks from `@dcloudio/uni-app` | **`@neuxnet/neu-app`** |
| `requestPayment({provider, orderInfo})` | Neuxnet uses **`{name, country, currency, amount, transactionNo}`** |

> ⚠️ **That last row is the expensive one.** The bundled TypeScript types are inherited uni-app stubs, so your editor's autocomplete will confidently suggest the wrong payment shape. Claude with `miniapp-payment` installed will not.

---

## Offline documentation

403 Markdown pages mirrored from `miniapp.neuxnet.com`, searchable without leaving the editor — **Browse Documentation** in the panel or the Command Palette.

Every page carries its canonical `source_url`. Pages under `component/`, most of `api/`, and `tutorial/` are upstream uni-app documentation republished by Neuxnet and machine-translated from Chinese. The Neuxnet-specific pages (`api/plugins/`, `serverside/`) are authoritative for Super App behaviour.

---

## Commands

| Command | What it does |
| :--- | :--- |
| **Open Skills Panel** | The main UI — browse, install and remove |
| **Install All Skills** | Installs everything without opening the panel |
| **Change Install Location** | Switch between project and home directory |
| **Browse Documentation** | Search 403 doc pages, open in Markdown preview |
| **Open a Skill** | Read a skill's guidance directly |

---

## Prefer the plugin flow?

If your team uses Claude Code plugins, skip the extension entirely:

```
/plugin marketplace add https://github.com/ZaeemSattar/Super-App-Skills.git
/plugin install neuxnet-miniapp@superapp-skills
```

Both routes deliver the same skills.

---

<div align="center">

**[Source on GitHub](https://github.com/ZaeemSattar/Super-App-Skills)** · **[Report an issue](https://github.com/ZaeemSattar/Super-App-Skills/issues)** · MIT licensed

Built by [Zaeem Sattar](https://github.com/ZaeemSattar)

</div>
