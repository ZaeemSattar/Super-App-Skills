---
name: miniapp-auth
description: >-
  Use when implementing login, sign-in, or user identity in a Neuxnet Super App
  Mini App — calling uni.login or uni.getAuthCode to obtain a code, requesting
  scopes such as phone number or email, getting the user profile, and exchanging
  the code for user info on the backend.
---

# Login and user authorization

## The model

The Mini App **never** receives user data directly. It obtains a short-lived `code`, sends it to *your* backend, and your backend exchanges it with the Neuxnet OpenAPI.

```
Mini App              Your backend                 Neuxnet OpenAPI
  |  login/getAuthCode                                   |
  |------ code ------->|                                 |
  |                    |-- accessToken (appid+code+sign) ->|
  |                    |<-------------- accessToken -------|
  |                    |-- user/info (accessToken) ------->|
  |                    |<-------------- openId, phone… ----|
  |<-- your session ---|                                 |
```

The backend half is in [miniapp-serverside](../miniapp-serverside/SKILL.md) — it requires a SHA256 signature.

## Which call to use

| Call | Use it for |
| --- | --- |
| `uni.login()` | Silent sign-in — just identify the user (`openId`) |
| `uni.getAuthCode({ scope })` | Request **specific** data (phone, email, …); prompts the user |
| `uni.getPhoneNumber()` | Phone number only; prompts |
| `uni.getUserProfile({ desc })` | Nickname + avatar **directly on the client**, no backend needed |

### Silent login

```js
uni.login({
  success(res) {
    if (!res.code) return console.error('login failed:', res.errMsg)
    uni.request({
      url: 'https://your-backend.example.com/auth/login',
      method: 'POST',
      data: { code: res.code },
      success: ({ data }) => uni.setStorageSync('token', data.token),
    })
  },
})
```

### Authorized login with scopes

```js
uni.getAuthCode({
  scope: 'user.info,user.phone',
  success(res) {
    if (!res.code) return console.error(res.errMsg)
    uni.request({
      url: 'https://your-backend.example.com/auth/exchange',
      method: 'POST',
      data: { code: res.code },
    })
  },
  fail(err) {
    // user declined the prompt
  },
})
```

**Available scopes** — comma-separated, no spaces:

| Data | scope key |
| --- | --- |
| Avatar & nickname | `user.info` |
| Phone number | `user.phone` |
| Email | `user.email` |
| QDI | `user.qdi` |
| QID | `user.qid` |
| E-passport | `user.epassport` |
| MRZ passport | `user.mrzpassport` |

The `scope` you request must match the `scope` your backend sends to `accessToken`, or the exchange fails.

### Profile without a backend

```js
uni.getUserProfile({
  desc: 'Personalise your profile',   // shown to the user, max 30 chars
  success: ({ userInfo }) => {
    // userInfo.nickName, userInfo.avatarUrl
  },
})
```

Returns display data only — no `openId`. Never treat it as proof of identity.

## Pitfalls

- **None of these work in `dev:h5`.** Test on device via `npm run build:app-preview`. Stub the login result behind a conditional block for browser work.
- The `code` is **single-use and short-lived** — exchange it immediately server-side and never cache or reuse it.
- Ask for the **narrowest scope** that does the job; every extra scope adds a permission the user can refuse.
- Handle refusal: `fail` fires when the user dismisses the prompt. Keep the app usable in that state.
- **Never put the app `secret` in Mini App code.** It belongs on the backend only — client bundles are readable.
- Trigger authorization from a user action (a tap), not on app launch.

## Reference

- [uni.login](../../references/api/plugins/login.md)
- [uni.getAuthCode](../../references/api/plugins/getAuthCode.md)
- [uni.getPhoneNumber](../../references/api/plugins/getPhoneNumber.md)
- [uni.getUserProfile](../../references/api/plugins/getUserProfile.md)
- [Server-side OAuth](../../references/serverside/index.md)

## Verify

On a device: tapping login prompts for consent, your backend receives the `code`, and the exchange returns an `openId`. Confirm a declined prompt does not break the app.
