---
title: "uni.openSetting(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/other/setting.html
---
###  uni.openSetting(OBJECT)

Call up the client applet setting interface and return the operation result set by the user.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | √ | √ | √ | √ | √ | √ |

|Attribute|Type|Required|Description| |---|---|---|---|---| |success|function|No|Callback function for successful interface call| |fail|function|No|Callback function for interface call failure| |complete|function|No|The callback function for the end of the interface call (the call will be executed if the call succeeds or fails)|

**success return parameter**

| property | type | description |
| --- | --- | --- |
| authSetting | Object | User authorization result, where key is [scope](./authorize.md#scope-%E5%88%97%E8%A1%A8) value, value is Boolean value, indicating whether the user is Allow Authorization |

**CODE EXAMPLE**

```
uni.openSetting({
  success(res) {
    console.log(res.authSetting)
  }
});
```

###  uni.getSetting(OBJECT)

Get the user's current settings.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | √ | √ | √ | √ | √ | √ |

| property | type | default value | required | description |
| --- | --- | --- | --- | --- |
| withSubscriptions | Boolean | false | No | Whether to obtain the subscription status of the user's subscription messages at the same time, the default is not to obtain. Note: withSubscriptions will only return subscription messages for which the user has checked the "Always keep above, never ask again" option in the Subscriptions panel. **(Wechat applet 2.10.1 support)** |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for interface call failure |
| complete | function |  | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**success return parameter**

| property | type | description |
| --- | --- | --- |
| authSetting | Object | User authorization result, where key is [scope](./authorize.md#scope-%E5%88%97%E8%A1%A8) value, value is Boolean value, indicating whether the user is Allow Authorization |
| subscriptionsSetting | SubscriptionsSetting | User subscription message settings, only returned when the interface parameter `withSubscriptions` value is `true`. **(Wechat applet 2.10.1 support)** |

####  Sample code

```
uni.getSetting({
   success(res) {
      console.log(res.authSetting)
   }
})
```
