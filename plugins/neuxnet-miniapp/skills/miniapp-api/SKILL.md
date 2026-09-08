---
name: miniapp-api
description: >-
  Use when calling client-side Mini App APIs in a Neuxnet app — network requests,
  local storage, media and image picking, location, device info, scanning,
  clipboard, toasts and modals, canvas, or checking whether an API works on H5 as
  well as in the Super App.
---

# Client APIs

All client APIs live on the global `uni` object. `neu` is a complete alias — `uni.request` and `neu.request` are the same function. **Prefer `uni.` for consistency**; the mirrored docs use it throughout.

No import is needed; `uni` is a declared global.

## Callback and promise styles

Every async API takes `success` / `fail` / `complete`. Omitting the callbacks returns a promise:

```js
const res = await uni.request({ url: 'https://api.example.com/items' })
```

Promise style is cleaner but be careful: **`uni.request` does not reject on HTTP 4xx/5xx**. Check `statusCode` yourself.

## Network

```js
const res = await uni.request({
  url: 'https://api.example.com/items',
  method: 'POST',
  header: { 'Content-Type': 'application/json' },
  data: { id: 1 },
})
if (res.statusCode !== 200) throw new Error(`HTTP ${res.statusCode}`)
```

Also: `uni.uploadFile`, `uni.downloadFile`, `uni.connectSocket` + `SocketTask` for WebSockets. Timeouts come from `networkTimeout` in `manifest.json` (60000ms default).

## Storage

Synchronous variants are convenient for small values; async ones avoid blocking.

```js
uni.setStorageSync('token', value)
const token = uni.getStorageSync('token')
uni.removeStorageSync('token')
```

Storage is a small key–value store, not a database — do not cache large payloads. **Never store secrets or raw payment data here**; it is readable on a rooted device.

## Common categories

| Area | APIs |
| --- | --- |
| UI feedback | `showToast`, `showLoading`/`hideLoading`, `showModal`, `showActionSheet` |
| Navigation bar | `setNavigationBarTitle`, `setNavigationBarColor` |
| Media | `chooseImage`, `previewImage`, `chooseVideo`, `chooseMedia`, `saveImageToPhotosAlbum` |
| Location | `getLocation`, `chooseLocation`, `openLocation` |
| Device | `getSystemInfoSync`, `getDeviceInfo`, `getWindowInfo`, `getNetworkType`, `onNetworkStatusChange` |
| Hardware | `scanCode`, `makePhoneCall`, `setClipboardData`, `vibrateShort` |
| Canvas | `createCanvasContext`, `canvasToTempFilePath` |
| Layout queries | `createSelectorQuery`, `createIntersectionObserver` |

```js
uni.showToast({ title: 'Saved', icon: 'success', duration: 1500 })

const { confirm } = await uni.showModal({ title: 'Delete?', content: 'This cannot be undone.' })
if (confirm) await remove()
```

`showLoading` **must** be paired with `hideLoading`, including on the error path, or the app locks behind a spinner.

## Check platform support first

Every API page has a **Mini App vs H5** table. Anything marked `x` for H5 will fail in `dev:h5` — that includes login, payment, share, scan, Bluetooth, and most device APIs.

Guard platform-specific calls with conditional compilation:

```js
// #ifdef APP-PLUS
uni.scanCode({ success: (r) => console.log(r.result) })
// #endif
// #ifdef H5
console.warn('scanCode is unavailable in the browser')
// #endif
```

Or check at runtime: `if (typeof uni.scanCode === 'function')`.

## Permissions

Location, camera, album and contacts prompt the user on first use. Always handle `fail` — a refused permission is a normal path, not an exception. Request permissions in response to a user action.

## Pitfalls

- `uni.request` resolves on HTTP errors; inspect `statusCode`.
- Storage is synchronous and small — heavy use on a hot path janks the UI.
- Callbacks do not propagate exceptions the way promises do; wrap `await` calls in `try/catch`.
- Base URLs belong in config, not scattered string literals — the host differs per environment.

## Reference

- [API index](../../references/api/index.md)
- [uni.request](../../references/api/request/request.md)
- [Storage](../../references/api/storage/storage.md)
- [Prompts and toasts](../../references/api/ui/prompt.md)
- [Device info](../../references/api/system/info.md)

## Verify

Exercise the call in `dev:h5` if it is supported there, then confirm on device with `npm run build:app-preview` — H5 success alone proves nothing about the Super App.
