---
title: "uni.requestSubscribeMessage(Object object)"
source_url: https://miniapp.neuxnet.com/api/other/requestSubscribeMessage.html
---
###  uni.requestSubscribeMessage(Object object)

**Platform Difference Description**

| App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet |
| --- | --- | --- | --- | --- | --- | --- |
| x | x | Base library version >=2.8.2 | x | x | x | x |

**object parameter description**

| property | type | default | required | description |
| --- | --- | --- | --- | --- |
| tmplIds | Array |  | Yes | A collection of ids of message templates that need to be subscribed, a maximum of 3 messages can be subscribed in one call (Note: One-time subscription after iOS client version 7.0.6 and Android client version 7.0.7/ Long-term subscriptions only support multiple template messages. iOS client version 7.0.5 and Android client version 7.0.6 only support one template message per subscription.) The message template id is in \[WeChat Public Platform (mp.weixin.qq.com\] )-function-subscribe message\] configuration |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for interface call failure |
| complete | function |  | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**Notice**

-   After the user clicks or initiates a payment callback, the subscription message interface can be called up

**Platform Description**

-   [WeChat Mini Program Subscription Message Reference Document](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html)

**object.success return value**

| property | type | description |
| --- | --- | --- |
| errMsg | String | The errMsg value is 'requestSubscribeMessage:ok' when the interface call is successful |
| TEMPLATE\_ID | String | \[TEMPLATE\_ID\] is the dynamic key, the template id, and the values include 'accept', 'reject', and 'ban'. 'accept' indicates that the user agrees to subscribe to the template message corresponding to the id, 'reject' indicates that the user refuses to subscribe to the template message corresponding to the id, and 'ban' indicates that it has been banned in the background. For example, { errMsg: "requestSubscribeMessage:ok", zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A\_x0oXE: "accept"} means that the user agrees to subscribe to this message zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A\_x0oXE |

**object.fail return value**

| property | type | description |
| --- | --- | --- |
| errMsg | String | Interface call failed error message |
| errCode | Number | Interface call failure error code |

**Sample code**

```
uni.requestSubscribeMessage({
  tmplIds: [''],
  success (res) { }
})
```
