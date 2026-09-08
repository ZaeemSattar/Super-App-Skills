# Contributing

## Layout

```
.claude-plugin/marketplace.json      marketplace manifest
plugins/neuxnet-miniapp/
  .claude-plugin/plugin.json         plugin manifest
  skills/<name>/SKILL.md             one directory per skill
  agents/<name>.md                   subagents
  references/                        generated docs mirror -- do not hand-edit
tools/mirror-docs.mjs                regenerates references/
```

`skills/`, `agents/` and `references/` live at the **plugin root**. Only `plugin.json` goes inside `.claude-plugin/`.

## Adding or changing a skill

Every `SKILL.md` uses the same shape so the pack reads consistently:

```markdown
---
name: miniapp-thing
description: >-
  Use when ... — a trigger-first sentence naming the concrete tasks and symbols
  a developer would mention.
---

# Title

## When to use this / the model
## Steps            <- numbered, copy-pasteable
## Pitfalls         <- what actually goes wrong
## Reference        <- relative links into ../../references/
## Verify           <- how a developer confirms it worked
```

Guidelines:

- **The `description` is everything.** It is the only basis on which a skill gets loaded. Write it trigger-first and name the concrete symbols and tasks (`uni.requestPayment`, "signature error") a developer would actually say. Vague descriptions mean the skill never fires; overlapping ones make the wrong skill fire.
- **Keep `SKILL.md` short and link out.** Detail belongs in `references/`, loaded on demand.
- **Verify claims against the real toolchain**, not just the docs — scaffold a project and run the command. The docs lag in several places (see the table in the README).
- **Pitfalls must be real**, ideally ones that have bitten someone.
- Only add `allowed-tools` where a skill genuinely runs commands, and keep it narrow.

## Refreshing the docs mirror

```bash
cd tools && npm install && node mirror-docs.mjs
```

Never hand-edit `references/` — it is regenerated. Commit the diff separately from skill changes so review stays readable.

## Before opening a PR

```bash
claude plugin validate ./plugins/neuxnet-miniapp
```

Then install the marketplace locally and confirm your skill loads on a realistic prompt without being named explicitly:

```
/plugin marketplace add /path/to/this/repo
/plugin install neuxnet-miniapp@superapp-skills
```

Bump `version` in `plugin.json` for anything users would notice.

## Publishing the VS Code extension

The extension in `extension/` bundles the same skills and docs mirror. Its
`skills/` and `references/` directories are **generated** by `sync-payload.mjs`
and are gitignored — `plugins/neuxnet-miniapp/` stays the only place either is
edited.

One-time setup:

1. Create a publisher at https://marketplace.visualstudio.com/manage.
2. Create an Azure DevOps Personal Access Token with **Organization: All
   accessible organizations** and scope **Marketplace > Manage**.
3. `npx @vscode/vsce login ZaeemSattar` and paste the PAT.

Release:

```bash
cd extension
npm run package                 # sync payload + build the .vsix
npx @vscode/vsce ls --no-dependencies | grep -c '^skills/'   # sanity: payload present
npm run publish                 # or: npx @vscode/vsce publish minor
```

Bump `version` in `extension/package.json` and add a `CHANGELOG.md` entry first —
the Marketplace rejects a republish of an existing version.
