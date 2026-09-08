---
name: miniapp-payment
description: >-
  Use when implementing payments or checkout in a Neuxnet Super App Mini App —
  calling uni.requestPayment, creating a trade order on the backend, handling
  payment status and failure codes, receiving the notifyUrl callback, or querying
  and closing transactions.
---

# Payments

Payment always spans both sides: the backend creates the order, the client invokes the cashier, and the **backend callback is the source of truth**.

```
Backend  --POST /pay/transactions/trade-->  transactionNo
Client   --uni.requestPayment(...)------->  Super App cashier
Neuxnet  --POST your notifyUrl----------->  authoritative result
Backend  --GET  /pay/transactions/tradedetail  (verify)
```

## 1. Create the order (backend)

`POST /neuopenapi/pay/transactions/trade` — signed as in [miniapp-serverside](../miniapp-serverside/SKILL.md).

| Param | Required | Notes |
| --- | --- | --- |
| `outTradeNo` | yes | Your order number. Digits, letters and `_ - *` only; unique per merchant |
| `amount` | yes | **In cents** — `100` is 1.00 |
| `currency` | yes | `CNY`, `USD`, `SGD`, `SAR` |
| `openId` | yes | From OAuth; identifies the payer |
| `notifyUrl` | yes | Public **HTTPS** URL, no query parameters |
| `merchantId` | no | Derived from the appid when empty |
| `description` | no | Shown to the user |
| `timeExpire` | no | Expiry timestamp |

Returns `{ outTradeNo, tradeNo }`. `tradeNo` is Neuxnet's id — store it against your order.

## 2. Invoke the cashier (client)

```js
uni.requestPayment({
  name: 'shop',                 // your business name
  country: 'SA',
  currency: 'SAR',
  amount: '0.01',               // a display STRING, in major units
  transactionNo: tradeNo,       // the tradeNo from step 1
  success(res) {
    if (res.status === 2) {
      // Optimistic only -- confirm against your backend before granting anything
    }
  },
  fail(err) { console.error(err) },
})
```

> **Trap:** the bundled TypeScript types describe uni-app's upstream `requestPayment` (`provider`, `orderInfo`). Neuxnet's Super App uses the fields above instead. Follow the docs, not editor autocomplete.

Note the unit mismatch, which is easy to get wrong: the **backend `amount` is an integer in cents** (`100`), the **client `amount` is a string in major units** (`"1.00"`).

### Status codes

| `status` | Meaning |
| --- | --- |
| `0` | Payment closed / cancelled by the user |
| `1` | Payment failed — see `failCode` |
| `2` | Payment succeeded |

Common `failCode` values: `1`–`4` Google Pay, `5`–`6` PayTabs, `10`–`11` Apple Pay, `20` order already succeeded, `21` expired, `22` closed, `23` already in payment, `24` checkout failed, `27` transaction failed. The full enum is in the reference.

## 3. Confirm server-side — always

**Never fulfil an order on the client `success` callback alone.** It can be lost to a crash, a backgrounded app, or a tampered client.

- Handle the `notifyUrl` callback as the authoritative signal, and make it **idempotent** — it can be delivered more than once.
- Verify with `GET /neuopenapi/pay/transactions/tradedetail?tradeNo=…`:

  | `transactionStatus` | Meaning |
  | --- | --- |
  | 1 | processing |
  | 2 | succeeded |
  | 3 | failed |
  | 4 | expired |
  | 5 | canceled |
  | 6 | closed |

- Re-check the returned `amount` and `currency` against your own order before fulfilling.
- Abandoned orders can be closed with `POST /neuopenapi/pay/transactions/tradeclose`.

## 4. Notify the user

The docs are explicit: once payment completes, **send the paying user a push message**. See [miniapp-push](../miniapp-push/SKILL.md).

## Pitfalls

- Payment does **not** work in `dev:h5` — test on a device.
- `amount` in cents server-side; a float there will be rejected or wrong.
- `notifyUrl` must be public HTTPS with no query string — localhost will silently never fire.
- Reusing an `outTradeNo` collides; generate a fresh unique one per attempt.
- Treat `status === 2` on the client as "probably paid", never as "fulfil now".

## Reference

- [uni.requestPayment](../../references/api/plugins/payment.md)
- [Payment module, endpoints and FailReasonType enum](../../references/serverside/index.md)

## Verify

Create an order, pay on device, and confirm: `notifyUrl` fires, `tradedetail` reports `transactionStatus: 2`, amount and currency match, and replaying the callback does not double-fulfil.
