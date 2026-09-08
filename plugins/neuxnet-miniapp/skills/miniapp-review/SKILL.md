---
name: miniapp-review
description: >-
  Use when reviewing Neuxnet Mini App code for correctness, portability, security
  or release-readiness — checking a diff or a whole project against Super App
  platform rules, or before submitting a build. Covers pages.json, styling, API
  portability, auth, payment and secret handling.
---

# Review a Mini App

Work through the checks below against the code under review. Report findings **most severe first**, each with the file, the concrete failure it causes, and the fix. Do not report style preferences as defects.

## 1. Correctness and platform rules

- **Unregistered pages** — every `pages/*.vue` should be in `pages.json`; an unregistered page is unreachable.
- **`navigateTo` to a tabBar page** — silently fails. Tab pages need `switchTab`. This is the most common routing bug.
- **tabBar shape** — 2 to 5 entries; every `pagePath` also present in `pages`; icons under `static/`.
- **`onLoad` vs `onShow`** — tabBar pages stay in memory, so `onLoad` fires once. Data that must refresh on revisit belongs in `onShow`.
- **`onPullDownRefresh` without `uni.stopPullDownRefresh()`** — the spinner never stops. Check error paths too.
- **`enablePullDownRefresh`** missing for a page that implements the hook.
- **Page-stack depth** — long `navigateTo` chains hit the 10-level cap; use `redirectTo`/`reLaunch`.
- **Hook imports** come from `@neuxnet/neu-app`, not `@dcloudio/uni-app`.

## 2. Portability (H5 vs Super App)

- **HTML tags in templates** — `div`, `span`, `p`, `img`, `a` are not Mini App components. Must be `view`, `text`, `image`, `navigator`.
- **App-only APIs called unguarded** — `login`, `getAuthCode`, `requestPayment`, `share`, `scanCode`, Bluetooth, biometrics all fail on H5. Expect `// #ifdef APP-PLUS` guards or a runtime check.
- **Browser globals** — `window`, `document`, `localStorage` are unavailable in the app renderer. Use `uni.*` storage and layout-query APIs.
- **CSS Grid / `float` / exotic selectors** — unreliable on-device. Flexbox and plain class selectors only.

## 3. Styling

- **`px` where `rpx` belongs** — fixed widths that should scale across screens. (Deliberate `px` for hairlines and font sizes is correct — do not flag it.)
- **CSS or `.js` inside `src/static/`** — that directory is copied verbatim and never compiled. Stylesheets belong in `src/common/`; ES6 JS there can crash older devices.
- **Unreferenced bulk in `static/`** — everything ships in the `.wgt`.
- **`image` without `mode`** — defaults to a distorting stretch.

## 4. Auth and identity

- **`getUserProfile` used as authentication** — it returns display data only, no `openId`. Identity must come from a backend code exchange.
- **`code` reused, cached or logged** — single-use and short-lived.
- **Over-broad scopes** — request only what is used.
- **No `fail` handler** on an authorization prompt — a user declining must not break the app.

## 5. Payment

- **Fulfilment on the client `success` callback** — must be confirmed by the `notifyUrl` callback or `tradedetail`.
- **Non-idempotent `notifyUrl` handler** — callbacks may be delivered more than once.
- **Amount units** — backend `amount` is an **integer in cents**; the client `amount` is a **string in major units**. Mismatches are a real money bug.
- **Amount/currency not re-verified** server-side before fulfilling.
- **`outTradeNo` reuse** across attempts.
- **Upstream `provider`/`orderInfo` fields** copied from the TypeScript types instead of Neuxnet's `name`/`country`/`currency`/`amount`/`transactionNo`.

## 6. Backend signing

- **`secret` present in Mini App source** — critical; client bundles are readable.
- **`&` in the signing string** — pairs concatenate with **no separator**; only the request body uses `&`.
- **`secret` appended at the end** instead of sorted into dictionary position with the other keys.
- **`sign` or `fileData` included** in the signature.
- **Values URL-encoded before signing.**
- **`responseHeader.status` unchecked** — HTTP 200 does not mean success.
- **Missing `language`** on `sendNotify` / `sendActivity` (required).
- **`url` missing when `navigateType` is 2.**

## 7. Release readiness

- `appid` set in `manifest.json`; `versionCode` increased.
- No hardcoded LAN IPs or localhost URLs.
- No secrets, tokens or keys in `src/`.
- No sensitive values left in `console.log`.

## Reference

Cross-check specifics against the relevant skill — [miniapp-page](../miniapp-page/SKILL.md), [miniapp-ui](../miniapp-ui/SKILL.md), [miniapp-auth](../miniapp-auth/SKILL.md), [miniapp-payment](../miniapp-payment/SKILL.md), [miniapp-serverside](../miniapp-serverside/SKILL.md) — or the mirrored docs in [`references/`](../../references/INDEX.md).

## Verify

Confirm each finding against the actual file before reporting it. Where practical, check the fix builds: `npm run build:app`.
