# Building & releasing

Every distributable is produced into `build/`, one subfolder per target.

```
build/
  manifest.json                          version, timestamp, commit, sizes, checksums
  vscode/
    super-app-skills-by-zaeem-1.3.0.vsix
  cli/
    super-app-skills-1.3.0.tgz
  plugin/
    neuxnet-miniapp-1.3.0.tar.gz
```

One file per target per build — **that versioned file is the one you upload.** Earlier versions are left in place so past releases stay downloadable. `build/` is gitignored: artifacts are reproducible from source and distributed via npm, the VS Code Marketplace and GitHub Releases.

## What to upload where

| Channel | Artifact |
| --- | --- |
| VS Code Marketplace | `build/vscode/super-app-skills-by-zaeem-<version>.vsix` |
| npm | `cd cli && npm publish` — publishes from source, no manual upload |
| GitHub Release | `build/plugin/neuxnet-miniapp-<version>.tar.gz` |

The Claude Code plugin and the `curl | sh` installer both read straight from the repo, so they need no upload — only a pushed tag.

## Commands

```sh
npm run build              # all targets
npm run build:vscode       # just the .vsix
npm run build:cli          # just the npm tarball
npm run build:plugin       # just the plugin archive
npm run clean              # remove build/
```

Building a single target merges into the existing `manifest.json`, so the other entries are preserved.

## Versioning

The extension, CLI and Claude Code plugin all ship the same skills, so they share one version number. `tools/version.mjs` keeps them in lockstep:

```sh
npm run version:set                  # report current versions
npm run version:set -- 1.4.0         # set explicitly
npm run version:set -- minor         # major | minor | patch
```

A bump keyword resolves against the *highest* version in the repo, so a target that has drifted behind can't pull the release backwards.

`npm run build` refuses to run when versions differ, because a mixed-version `build/` is ambiguous about what a release actually contains. Override with `ALLOW_VERSION_DRIFT=1` if you genuinely need to.

## Release checklist

1. `npm run version:set -- <version|minor|patch>`
2. `npm run build`
3. Commit the version bumps and tag: `git tag v<version> && git push --tags`
4. Publish each channel:
   - **npm** — `cd cli && npm publish`
   - **VS Code** — `cd extension && npx vsce publish` (or upload `build/vscode/latest.vsix`)
   - **Plugin / curl** — served straight from the repo once the tag is pushed; optionally attach `build/plugin/latest.tar.gz` to the GitHub Release.

## How the payload gets in

`plugins/neuxnet-miniapp/` is the single source of truth for skills and the docs mirror. Two sync scripts copy it into the packaging targets at build time, and neither copy is committed:

- `extension/sync-payload.mjs` → `extension/{skills,references}/` (runs on `vscode:prepublish`)
- `tools/sync-cli-payload.mjs` → `cli/{skills,references}/` (runs on `prepack`)

Edit skills and docs only in `plugins/neuxnet-miniapp/`.
