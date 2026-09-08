# Neuxnet Super App Mini App Skills

Claude Code skills and a complete offline documentation mirror for building **Mini Apps on the Neuxnet Super App platform**.

Mini App development spans a lot of surface — a `neu`/Vite toolchain, Vue 3 SFCs, `pages.json` routing, `rpx` styling, platform APIs that behave differently in the browser than in the Super App, and a signed backend OpenAPI. This extension packages that knowledge as [Claude Code](https://claude.com/claude-code) skills, so Claude applies the right rules without being told, and ships the docs so you can read them without leaving the editor.

## Commands

Open the Command Palette (`Ctrl/Cmd+Shift+P`):

| Command | What it does |
| --- | --- |
| **Neuxnet Mini App: Install Skills to ~/.claude** | Copies the skills into `~/.claude/skills` so Claude Code loads them in every project |
| **Neuxnet Mini App: Browse Documentation** | Searches 403 mirrored doc pages and opens one in Markdown preview |
| **Neuxnet Mini App: Open a Skill** | Reads a skill's guidance directly |

Restart Claude Code after installing so it picks up the new skills.

> Under Remote SSH, WSL, Dev Containers or Codespaces the skills install to the **remote** home directory — the machine where Claude Code actually runs. The confirmation message tells you which host was written to.

## The skills

| Skill | Covers |
| --- | --- |
| `miniapp-create` | Scaffolding, project layout, `appid` |
| `miniapp-run` | Dev server, H5 vs app platform, on-device QR preview |
| `miniapp-page` | `pages.json`, routing, tabBar, lifecycle, subPackages |
| `miniapp-ui` | Components, `rpx` sizing, styling, easycom, static assets |
| `miniapp-api` | request, storage, media, device, UI feedback |
| `miniapp-auth` | Login, auth codes, scopes, user profile |
| `miniapp-payment` | `requestPayment`, trade orders, status codes, callbacks |
| `miniapp-push` | `sendNotify` and `sendActivity` |
| `miniapp-serverside` | OpenAPI signing, OAuth exchange, endpoints |
| `miniapp-build` | `.wgt` packaging, versioning, release checklist |
| `miniapp-review` | Reviewing a Mini App against platform rules |
| `miniapp-docs` | Looking things up in the offline mirror |

The server-side skill also ships runnable request-signing helpers in **Node, Python and Java**, all verified to produce identical digests — signing is the most common backend integration failure.

## Verified against the real toolchain

The skills were checked by scaffolding, building and running an actual project, not just by reading the docs. Where the two disagree, the skills follow the toolchain and say so:

| Docs say | Actually |
| --- | --- |
| `npm run dev:app` | Not a scaffolded script — use `npx neu -p app` |
| Output in `dist/build/app-plus/` | `dist/build/app/` |
| Sources at project root | Under `src/` |
| Hooks from `@dcloudio/uni-app` | `@neuxnet/neu-app` |
| `requestPayment({provider, orderInfo})` in the bundled types | Neuxnet uses `{name, country, currency, amount, transactionNo}` |

That last one is a trap worth knowing: the bundled TypeScript types are inherited uni-app stubs, so editor autocomplete actively misleads you on payments.

## Also available as a Claude Code plugin

If your team uses the Claude Code plugin flow, you can skip this extension entirely:

```
/plugin marketplace add https://github.com/ZaeemSattar/Super-App-Skills.git
/plugin install neuxnet-miniapp@superapp-skills
```

Both routes deliver the same skills.

## Documentation mirror

The bundled `references/` directory is a Markdown mirror of `https://miniapp.neuxnet.com`, each page carrying its canonical `source_url`. Pages under `component/`, most of `api/`, and `tutorial/` are upstream uni-app documentation republished by Neuxnet and machine-translated from Chinese; the Neuxnet-specific pages (`api/plugins/`, `serverside/`) are authoritative for Super App behaviour.

## Source

[github.com/ZaeemSattar/Super-App-Skills](https://github.com/ZaeemSattar/Super-App-Skills)

## License

MIT
