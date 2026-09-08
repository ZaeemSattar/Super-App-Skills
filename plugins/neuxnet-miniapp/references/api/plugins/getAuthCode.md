---
title: "uni.getAuthCode(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/plugins/getAuthCode.html
---
###  uni.getAuthCode(OBJECT)3.0.0-3090920240723001

Function description

Request the API to obtain the user information in advance. After execution, a pop-up window will immediately ask the user if he agrees to authorize the Mini App to obtain the user's information. The user will receive a certificate (code) upon consent. The credentials are then exchanged for the user's information Developers need to be in the developer server call `https://{domain}/neuopenapi/oauth/mini/accessToken` and `https://{domain}/neuopenapi/oauth/mini/user/info`, use code to exchange user information.

WARNING

Note that get user information requires not only Mini App client-side development, but also server-side development.

Related document: [OAuth API](../../serverside/index.md#oauth)

**Platform Difference Description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Parameter Name | Type | Required | Instruction |
| --- | --- | --- | --- |
| scope | String | Yes | scope to obtain permissions. Multiple scopes are separated by commas |
| success | Function | No | Callback for successful interface call |  |
| fail | Function | No | Callback function for interface call failure |  |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |

**scope list**

| Name | key |
| --- | --- |
| Avatar & NickName | user.info |
| Phone Number | user.phone |
| Email | user.email |
| QDI | user.qdi |
| QID | user.qid |
| E-passport | user.epassport |
| MRZ Passport | user.mrzpassport |

**success return parameter description**

| Parameter Name | Description |
| --- | --- |
| code | User OAuth credentials. The developer needs to use the code in the background of the developer server to exchange information |
| errMsg | Description Information |

**Example**

```
uni.getAuthCode({
  scope: 'user.info,user.phone,user.email',
  success (res) {
    if (res.code) {
      uni.request({
        url: 'https://example.com/getUserInfo', // Replace it with the back-end service API of the Mini App
        data: {
          code: res.code
        }
      })
    } else {
      console.log('get user info failed :' + res.errMsg)
    }
  }
})
```
