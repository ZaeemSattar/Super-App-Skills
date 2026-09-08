---
title: "uni.getPhoneNumber(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/plugins/getPhoneNumber.html
---
###  uni.getPhoneNumber(OBJECT)3.0.0-3090920240606001

Function description

Request the user to obtain the mobile phone number in advance. After execution, a pop-up window will immediately ask the user if he agrees to authorize the small program to obtain the user's mobile phone number. The user will receive a certificate (code) upon consent. The credentials are then exchanged for the user's mobile phone number information Developers need to be in the developer server call `https://{domain}/neuopenapi/oauth/mini/accessToken` and `https://{domain}/neuopenapi/oauth/mini/user/info`, use the code for phone number

WARNING

Note that get Phone Number requires not only Mini App client-side development, but also server-side development.

Related document:[OAuth API](../../serverside/index.md#oauth)

**Platform Difference Description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Parameter Name | Type | Required |
| --- | --- | --- |
| success | Function | No | Callback for successful interface call |  |
| fail | Function | No | Callback function for interface call failure |  |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |

**success return parameter description**

| Parameter Name | Description |
| --- | --- |
| code | User OAuth credentials. The developer needs to use the code in the background of the developer server to exchange information |
| errMsg | Description Information |

**Example**

```
uni.getPhoneNumber({
  success (res) {
    if (res.code) {
      uni.request({
        url: 'https://example.com/getPhoneNumber',
        data: {
          code: res.code
        }
      })
    } else {
      console.log('get Phone Number failed :' + res.errMsg)
    }
  }
})
```
