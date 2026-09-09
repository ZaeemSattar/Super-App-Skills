# super-app-skills

Claude Code skills for building Mini Apps on the **Neuxnet Super App** platform, installable from your terminal.

```sh
npx super-app-skills install
```

That copies 12 skills plus a complete offline mirror of the official Neuxnet docs into `.claude/skills/` in the current project. Restart Claude Code and it picks them up — you never type a skill name, Claude loads the right one on its own when you say things like *"scaffold a new Neuxnet mini app"* or *"add checkout to this page"*.

## Usage

```sh
npx super-app-skills install                  # all skills, this project
npx super-app-skills install miniapp-payment  # just one (or: install payment)
npx super-app-skills install --global         # into ~/.claude/skills, every project
npx super-app-skills list                     # what's available and what's installed
npx super-app-skills remove miniapp-payment   # remove one
npx super-app-skills where                    # print the install location
```

### Options

| Flag | Meaning |
| --- | --- |
| `-g`, `--global` | Install into `~/.claude/skills` so every project sees them |
| `--dir <path>` | Install into `<path>/.claude/skills` |
| `-f`, `--force` | Overwrite skills that are already installed |
| `-y`, `--yes` | No prompts; implies `--force` on conflicts |

## The skills

| Skill | Use it for |
| --- | --- |
| `miniapp-create` | Scaffolding a new Mini App, project structure, `manifest.json` |
| `miniapp-page` | Routes in `pages.json`, navigation bar, tabBar, lifecycle, subPackages |
| `miniapp-ui` | Layout, built-in components, `rpx` sizing, styles, easycom, assets |
| `miniapp-api` | Network, storage, media, location, device, scan, clipboard, canvas |
| `miniapp-auth` | `uni.login` / `uni.getAuthCode`, scopes, profile, code exchange |
| `miniapp-payment` | `uni.requestPayment`, trade orders, `notifyUrl`, failure codes |
| `miniapp-push` | `sendNotify`, `sendActivity`, deep-linking a message into a page |
| `miniapp-serverside` | SHA256 OpenAPI signing, access tokens, `/neuopenapi` endpoints |
| `miniapp-run` | Dev server, h5 vs app, device preview by QR, debugging |
| `miniapp-build` | `.wgt` packaging, `versionName` / `versionCode`, release prep |
| `miniapp-review` | Reviewing a diff or project against Super App platform rules |
| `miniapp-docs` | Searching the full offline docs mirror for anything else |

## Other ways to install

**Claude Code plugin** (skills, agents and docs as one managed plugin):

```
/plugin marketplace add ZaeemSattar/Super-App-Skills
/plugin install neuxnet-miniapp@superapp-skills
```

**Shell, no npm:**

```sh
curl -fsSL https://raw.githubusercontent.com/ZaeemSattar/Super-App-Skills/main/install/install.sh | sh
```

**VS Code:** search the marketplace for *974 Super app skills*.

## License

MIT © Zaeem Sattar
