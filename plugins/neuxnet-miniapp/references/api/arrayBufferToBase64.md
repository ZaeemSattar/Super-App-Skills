---
title: "uni.arrayBufferToBase64(arrayBuffer)"
source_url: https://miniapp.neuxnet.com/api/arrayBufferToBase64.html
---
###  uni.arrayBufferToBase64(arrayBuffer)

Convert ArrayBuffer object to Base64 string

**Parameter Description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| arrayBuffer | ArrayBuffer | Yes | ArrayBuffer object to be converted to Base64 string |

**Example**

```
const arrayBuffer = new Uint8Array([55, 55, 55])
const base64 = uni.arrayBufferToBase64(arrayBuffer)
```
