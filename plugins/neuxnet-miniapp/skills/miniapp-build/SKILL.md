---
name: miniapp-build
description: >-
  Use when building, packaging, versioning, or releasing a Neuxnet Mini App —
  producing the .wgt package, setting versionName and versionCode, understanding
  build output directories, or preparing a release for Super App submission.
allowed-tools: Bash(npm run build*), Bash(npx neu build*)
---

# Build and release

## Commands

| Command | Output |
| --- | --- |
| `npm run build:app` | Mini App build + `release/${appid}.wgt` |
| `npm run build:app-preview` | Same, plus a QR code for on-device preview |
| `npm run build:h5` | Static H5 site |

```bash
npm run build:app
```

Output locations (verified against the current toolchain):

```
dist/build/app/       compiled Mini App assets
release/${appid}.wgt  the distributable package
```

The `.wgt` is what you submit to the Super App platform.

> Older docs mention `dist/build/app-plus/`; the current `neu` CLI emits `dist/build/app/`. Trust the build output.

## appid is mandatory

The package is named from `appid` in `src/manifest.json`. Building with `"appid": ""` produces an unusable artifact. Set it before releasing:

```json
{
  "name": "my-app",
  "appid": "your-appid",
  "versionName": "1.2.0",
  "versionCode": "120"
}
```

The build log echoes the values it matched — check them:

```
The matched appid value is: your-appid
The matched versionName value is: 1.2.0
```

## Versioning

- `versionName` — the human-readable version (`1.2.0`).
- `versionCode` — an **integer that must increase** with every submission. A resubmission with a stale `versionCode` is rejected.

Bump both together; keep `versionCode` monotonic across the whole app's history.

## Release checklist

1. `appid` set, `versionName`/`versionCode` bumped.
2. API base URLs point at production, not a LAN IP or localhost.
3. No `secret`, token or private key anywhere in `src/` — the `.wgt` is inspectable.
4. `console.log` of sensitive data removed.
5. `src/static/` pruned — every file ships whether referenced or not.
6. Smoke-tested on a real device via `build:app-preview`, not just `dev:h5`.
7. Login, payment and push exercised on device (they cannot work in H5).

Confirm what shipped:

```bash
unzip -l release/*.wgt | head -30
```

## Pitfalls

- `dev:h5` passing says nothing about the Super App build — always preview on device before release.
- A leftover `--host <lan-ip>` in `build:app-preview` does not affect `build:app`, but check the config you actually ship.
- Large images in `static/` inflate the `.wgt` and slow launch; compress before release.
- Conditional-compilation blocks (`// #ifdef APP-PLUS`) are stripped per platform — verify the app build, not just H5.

## Reference

- [Build and release](../../references/quickstart/index.md)
- [manifest.json](../../references/collocation/manifest.md)

## Verify

```bash
npm run build:app && ls -la release/
```

`${appid}.wgt` exists, the log shows the expected appid and version, and the package installs and launches in the Super App.
