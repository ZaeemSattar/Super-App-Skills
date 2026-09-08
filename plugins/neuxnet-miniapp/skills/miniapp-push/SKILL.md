---
name: miniapp-push
description: >-
  Use when sending messages or notifications to Neuxnet Super App users from a
  backend — push notifications via sendNotify, activity/banner messages via
  sendActivity, deep-linking a message into a Mini App page, or notifying a user
  that a payment completed.
---

# Push and activity messages

Both are **backend-only**, signed calls (see [miniapp-serverside](../miniapp-serverside/SKILL.md)). They target users by `openId`, so the user must have logged in first.

| | `sendNotify` | `sendActivity` |
| --- | --- | --- |
| Endpoint | `/neuopenapi/notify/sendNotify` | `/neuopenapi/activity/sendActivity` |
| Form | A notification message | A time-limited activity card in the Super App |
| Lifetime | One-shot | Lives `validityTime` seconds; can be withdrawn |

## sendNotify

`POST /neuopenapi/notify/sendNotify`

| Param | Required | Notes |
| --- | --- | --- |
| `openIds` | yes | List of recipients; joins with commas when signing |
| `title` | yes | |
| `text` | yes | Body |
| `notifyType` | yes | `1` = plain text |
| `navigateType` | yes | `1` = open the Mini App, `2` = open a URL |
| `url` | conditional | **Required when `navigateType` is 2** |
| `link` | no | Page to open inside the Mini App |
| `language` | yes | `zh_CN`, `en_US`, or `ar_SA` |
| `appid`, `timestamp`, `sign` | yes | Standard |

```js
import { callNeuxnet } from '../miniapp-serverside/scripts/sign.mjs'

await callNeuxnet('/neuopenapi/notify/sendNotify', {
  openIds: [openId],
  notifyType: 1,
  title: 'Payment received',
  text: 'Your order #1042 is confirmed.',
  navigateType: 1,
  link: 'pages/orders/detail?id=1042',
  language: 'en_US',
}, config)
```

`response` is simply `true` on success — still check `responseHeader.status === 200`.

## sendActivity

`POST /neuopenapi/activity/sendActivity`

| Param | Required | Notes |
| --- | --- | --- |
| `activityId` | yes | **You** generate it; must be unique. Reuse it to update or withdraw |
| `openIds` | yes | Recipients |
| `templateId` | yes | Template to render |
| `title`, `text` | yes | Content |
| `color` | yes | Hex without `#`, e.g. `FFFFFF` |
| `iconUrl` | yes | Icon image URL |
| `status` | yes | `1` = display, `0` = remove |
| `validityTime` | yes | Lifetime in **seconds** |
| `language` | yes | `zh_CN`, `en_US`, `ar_SA` |
| `path` | no | Where a tap goes |

`path` accepts either an internal page (`pages/index/index`) or a webview wrapper
(`pages/webview/webview?src=https://example.com`).

To withdraw a card early, resend the **same `activityId`** with `status: 0`.

## After a payment

The payment docs require it explicitly: when a payment completes, notify the paying user. Send from the **`notifyUrl` handler**, not the client success callback, so the message reflects the authoritative result. See [miniapp-payment](../miniapp-payment/SKILL.md).

## Pitfalls

- `language` is **required** on both endpoints and is easy to miss.
- `url` is mandatory whenever `navigateType` is `2`; omitting it fails the call.
- `openIds` is a list — the signing helpers join lists with commas automatically; hand-rolled signing usually gets this wrong.
- An `openId` is only valid for **your** appid; ids from another Mini App will not resolve.
- `validityTime` is seconds, not milliseconds.
- Messaging is rate-sensitive — send on real events, and batch `openIds` rather than looping one call per user.

## Reference

- [Push Notification module](../../references/serverside/index.md)

## Verify

Send to your own `openId` and confirm the notification arrives in the Super App, the tap target opens the intended page, and an activity card disappears when resent with `status: 0`.
