"""
Neuxnet OpenAPI request signing (Python 3, standard library only).

Algorithm, per the reference implementation in the Neuxnet docs:
  1. Put `secret` into the parameter map alongside the business params.
  2. Sort ALL keys in dictionary order (so `secret` sorts into position --
     it is NOT appended at the end).
  3. Concatenate `key=value` pairs with NO separator between pairs.
  4. SHA256 the result, lowercase hex.
  5. Send params + appid + timestamp + sign as form-urlencoded.

`sign` and `fileData` never participate in the signature.
"""

import hashlib
import time
import urllib.parse
import urllib.request


def trans_to_str(value):
    """Lists/tuples/sets join with commas; everything else stringifies."""
    if value is None:
        return ""
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (list, tuple, set)):
        return ",".join(str(v) for v in value)
    return str(value)


def sign(params, secret):
    signing = dict(params)
    signing["secret"] = secret
    sign_str = "".join(
        f"{k}={trans_to_str(signing[k])}"
        for k in sorted(signing)
        if k not in ("sign", "fileData")
    )
    return hashlib.sha256(sign_str.encode("utf-8")).hexdigest()


def build_signed_body(params, appid, secret):
    full = dict(params)
    full["appid"] = appid
    full["timestamp"] = int(time.time() * 1000)
    full["sign"] = sign(full, secret)
    return urllib.parse.urlencode({k: trans_to_str(v) for k, v in full.items()})


def call_neuxnet(uri, params, host, appid, secret):
    import json

    body = build_signed_body(params, appid, secret).encode("utf-8")
    req = urllib.request.Request(
        f"{host}{uri}",
        data=body,
        headers={"Content-Type": "application/x-www-form-urlencoded"},
        method="POST",
    )
    with urllib.request.urlopen(req) as resp:
        payload = json.loads(resp.read())

    header = payload.get("responseHeader", {})
    if header.get("status") != 200:
        raise RuntimeError(f"Neuxnet {uri} failed: {header}")
    return payload.get("response")


if __name__ == "__main__":
    vector = {
        "appid": "demo-appid",
        "code": "abc123",
        "grantType": "authorization_code",
        "scope": "user.info",
        "timestamp": 1700000000000,
    }
    print(sign(vector, "demo-secret"))
