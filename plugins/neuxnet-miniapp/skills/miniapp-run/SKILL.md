---
name: miniapp-run
description: >-
  Use when running or previewing a Neuxnet Mini App during development — starting
  the dev server, choosing between h5 and app platforms, previewing on a real
  device by QR code, or debugging why an API works in the browser but not in the
  Super App.
allowed-tools: Bash(npm run dev*), Bash(npm run build:app-preview), Bash(npx neu*)
---

# Run and preview a Mini App

## Platforms

The CLI is `neu` (a Vite-based toolchain). The scaffold ships these scripts:

| Command | What it does |
| --- | --- |
| `npm run dev` / `npm run dev:h5` | Dev server, **H5 platform** in a browser |
| `npm run build:h5` | Production H5 build |
| `npm run build:app` | Mini App build → `.wgt` package |
| `npm run build:app-preview` | Mini App build + **QR code** for on-device preview |

`neu` also accepts `-p app` directly for an app-platform dev server:

```bash
npx neu -p app
```

Useful flags: `--host <ip>`, `--port <n>`, `--open`, `-m <mode>`, `--devtools`.

## Recommended loop

1. **Build UI fast** with `npm run dev:h5` — instant hot reload in a browser.
2. **Verify platform behaviour** on a device with `npm run build:app-preview` before considering a feature done.

## Preview on a real device

```bash
npm run build:app-preview
```

A QR code prints in the terminal; scan it with the **Super App** and the Mini App opens directly inside it.

Your computer and phone must be on the **same LAN**. If the phone cannot reach the dev machine, pin the address explicitly in `package.json`:

```json
"build:app-preview": "neu build -p app --preview --host 192.168.18.47 --port 5678"
```

Use your machine's actual LAN IP (`ipconfig getifaddr en0` on macOS).

## H5 is not the Super App

H5 is a convenience for view work only. These do **not** work in a browser and must be tested on device:

- `uni.login()`, `getAuthCode`, `getUserProfile`, `getPhoneNumber`
- `uni.requestPayment()`
- share, push, scan, Bluetooth/BLE, biometrics, and most device APIs

Every API page in the mirror carries a "Platform Difference Description" table (`Mini App` vs `H5`) — check it before assuming a call is available. Never conclude a feature works because it worked in `dev:h5`.

## Pitfalls

- The upstream docs mention `npm run dev:app`; the current scaffold does **not** define that script. Use `npx neu -p app`, or add the script yourself.
- Guard platform-specific code with conditional compilation so H5 builds keep working:

  ```js
  // #ifdef APP-PLUS
  uni.login({ /* ... */ })
  // #endif
  ```

## Reference

- [Quick start — run and release](../../references/quickstart/index.md)
- [Run and debug](../../references/tutorial/run-and-debug.md)

## Verify

`npm run dev:h5` serves the app and edits hot-reload. For device work, the QR scan opens the Mini App inside the Super App.
