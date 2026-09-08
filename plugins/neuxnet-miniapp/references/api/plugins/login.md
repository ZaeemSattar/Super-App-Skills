---
title: "uni.login(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/plugins/login.html
---
###  uni.login(OBJECT)

Function description

Call the interface to get the login credentials (code). The credentials are then exchanged for user login state information, including the unique identification of the user in the current applet and the session key (session\_key) of the login. User data encryption and decryption communication depends on the session key.

WARNING

Note that login requires not only Mini App client-side development, but also server-side development.

Related document: [Mini App Login OAuth](../../serverside/index.md#oauth)

**Platform Difference Description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Parameter Name | Type | Required |
| --- | --- | --- |
| success | Function | No | Callback for successful interface call |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**success return parameter description**

| Parameter Name | Description |
| --- | --- |
| code | User login credentials. The developer needs to use the code in the background of the developer server to exchange information such as openid |
| errMsg | Description Information |

**Example**

```
uni.login({
  success (res) {
    if (res.code) {
      uni.request({
        url: 'https://example.com/onLogin', // Replace it with the back-end service API of the Mini App
        data: {
          code: res.code
        }
      })
    } else {
      console.log('login failed :' + res.errMsg)
    }
  }
})
```
