---
name: miniapp-serverside
description: >-
  Use when writing the backend for a Neuxnet Super App Mini App — signing
  OpenAPI requests with the SHA256 algorithm, exchanging a login code for an
  accessToken, fetching user info, or calling any /neuopenapi endpoint. Use this
  whenever a Neuxnet request returns a signature or authentication error.
---

# Neuxnet OpenAPI (backend)

Every `/neuopenapi/*` call is `POST` form-urlencoded (some are `GET`), carries `appid`, `timestamp` and `sign`, and returns:

```json
{ "responseHeader": { "status": 200, "msg": "OK" }, "response": { } }
```

**Always check `responseHeader.status === 200`** — a transport-level `200 OK` does not mean the call succeeded.

## The signature — get this exactly right

Signature errors are the most common integration failure. The algorithm:

1. Take all business parameters and **add `secret`** to the map.
2. **Sort every key in dictionary order.** `secret` sorts into its natural position — it is **not** appended at the end.
3. Concatenate `key=value` pairs with **no separator at all** — no `&`, no anything: `appid=Xcode=Ysecret=Z`.
4. `SHA256` the string, lowercase hex.
5. Exclude `sign` and `fileData` from the signature (uploaded files are never signed).
6. Values: arrays and collections join with `,`; other objects use their string form.

The request **body** is normal `key=value&key=value` — only the *signing string* omits separators. Mixing these two up is the usual bug.

`timestamp` is milliseconds since epoch and must be **within 5 minutes** of server time, so keep the backend clock synced.

## Ready-made helpers

Runnable, dependency-free implementations — all three verified to produce identical digests:

- [`scripts/sign.mjs`](scripts/sign.mjs) — Node.js
- [`scripts/sign.py`](scripts/sign.py) — Python 3
- [`scripts/Sign.java`](scripts/Sign.java) — Java 8+

Each exposes `sign(params, secret)` plus a `buildSignedBody`/`callNeuxnet` convenience wrapper, and prints a shared test vector when run directly:

```bash
node sign.mjs && python3 sign.py && javac -d /tmp/j Sign.java && java -cp /tmp/j Sign
# 964bd40923c2f8911560c18cb06f580d3d26436378c11edff3f0691e4db00242
```

If your own implementation disagrees with that digest for
`{appid: demo-appid, code: abc123, grantType: authorization_code, scope: user.info, timestamp: 1700000000000}` with secret `demo-secret`, your signing is wrong.

## OAuth: code → accessToken → user info

**1. Exchange the code** — `POST /neuopenapi/oauth/mini/accessToken`

| Param | Required | Notes |
| --- | --- | --- |
| `appid` | yes | |
| `code` | yes | from `uni.login` / `uni.getAuthCode` |
| `grantType` | yes | `authorization_code` |
| `scope` | yes | must match what the client requested |
| `timestamp` | yes | ms, within 5 minutes |
| `sign` | yes | |

```json
{ "responseHeader": { "status": 200, "msg": "OK" },
  "response": { "accessToken": "…", "expire": 604800, "tokenType": "bearer" } }
```

**2. Fetch the user** — `GET /neuopenapi/oauth/mini/user/info?accessToken=…`

```json
{ "response": { "openId": "…", "unionId": "…", "nickName": "…",
                "avatar": "https://…", "email": "…", "country": "+86", "phone": "…" } }
```

- `openId` identifies the user **within this Mini App** — use it as your primary key.
- `unionId` is stable for the same user **across** the vendor's Mini Apps.
- `phone`/`email` are only populated if the matching scope was granted.

```js
import { callNeuxnet } from './scripts/sign.mjs'

const { accessToken } = await callNeuxnet('/neuopenapi/oauth/mini/accessToken', {
  code, grantType: 'authorization_code', scope: 'user.info,user.phone',
}, { host: process.env.NEUXNET_HOST, appid: process.env.NEUXNET_APPID, secret: process.env.NEUXNET_SECRET })
```

## Endpoints

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/neuopenapi/oauth/mini/accessToken` | POST | Exchange code for token |
| `/neuopenapi/oauth/mini/user/info` | GET | Authenticated user details |
| `/neuopenapi/pay/transactions/trade` | POST | Create a payment order |
| `/neuopenapi/pay/transactions/tradedetail` | GET | Query payment status |
| `/neuopenapi/pay/transactions/tradeclose` | POST | Close an order |
| `/neuopenapi/notify/sendNotify` | POST | Push notification |
| `/neuopenapi/activity/sendActivity` | POST | Activity/template message |

Payment details are in [miniapp-payment](../miniapp-payment/SKILL.md); messaging in [miniapp-push](../miniapp-push/SKILL.md).

## Pitfalls

- **Never ship `secret` to the client.** It lives only in backend environment config. Anything in the Mini App bundle is readable.
- Do not URL-encode values *before* signing — sign raw values, encode only when building the body.
- Treat the `code` as single-use; exchange it once, immediately.
- Store `openId` rather than phone/email as the account key — scopes may be revoked.
- Unsynced server clocks cause intermittent, hard-to-diagnose signature failures.

## Reference

- [Server side: OAuth, payment, push, OpenAPI](../../references/serverside/index.md)

## Verify

Run the three helpers and confirm the shared digest. Then exchange a real `code` and confirm `responseHeader.status` is 200 and an `openId` comes back.
