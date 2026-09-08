/**
 * Neuxnet OpenAPI request signing (Node.js, no dependencies).
 *
 * Algorithm, per the reference implementation in the Neuxnet docs:
 *   1. Put `secret` into the parameter map alongside the business params.
 *   2. Sort ALL keys in dictionary order (so `secret` sorts into position --
 *      it is NOT appended at the end).
 *   3. Concatenate `key=value` pairs with NO separator between pairs.
 *   4. SHA256 the result, lowercase hex.
 *   5. Send params + appid + timestamp + sign as form-urlencoded.
 *
 * `sign` and `fileData` never participate in the signature.
 */
import { createHash } from 'node:crypto'

/** Arrays/collections join with commas; everything else stringifies. */
export function transToStr(value) {
  if (value === null || value === undefined) return ''
  if (Array.isArray(value)) return value.join(',')
  return String(value)
}

export function sign(params, secret) {
  const signing = { ...params, secret }
  const signStr = Object.keys(signing)
    .filter((k) => k !== 'sign' && k !== 'fileData')
    .sort()
    .map((k) => `${k}=${transToStr(signing[k])}`)
    .join('')
  return createHash('sha256').update(signStr, 'utf8').digest('hex')
}

/** Builds the signed form body for a Neuxnet OpenAPI call. */

export function buildSignedBody(params, { appid, secret }) {
  const full = { ...params, appid, timestamp: Date.now() }
  full.sign = sign(full, secret)
  return new URLSearchParams(
    Object.fromEntries(Object.entries(full).map(([k, v]) => [k, transToStr(v)])),
  ).toString()
}

export async function callNeuxnet(uri, params, { host, appid, secret }) {
  const res = await fetch(`${host}${uri}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: buildSignedBody(params, { appid, secret }),
  })
  const json = await res.json()
  if (json?.responseHeader?.status !== 200) {
    throw new Error(`Neuxnet ${uri} failed: ${JSON.stringify(json?.responseHeader)}`)
  }
  return json.response
}

// Worked example -- the same vector is used by sign.py and Sign.java.
if (import.meta.url === `file://${process.argv[1]}`) {
  const vector = { appid: 'demo-appid', code: 'abc123', grantType: 'authorization_code', scope: 'user.info', timestamp: 1700000000000 }
  console.log(sign(vector, 'demo-secret'))
}
