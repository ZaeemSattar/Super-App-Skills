---
title: "uni.openAppAuthorizeSetting()"
source_url: https://miniapp.neuxnet.com/api/system/openappauthorizesetting.html
---
###  uni.openAppAuthorizeSetting()

Jump to the system authorization management page

-   App side Open the permission setting interface of the system app
-   WeChat applet Open the permission setting interface of the system WeChat App

**Platform Difference Description**

|Mini App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|Dingding applet| |:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐 |HBuilderX (3.5.3+)|x|Base Library (2.20.1+)|x|x|x|x|x|x|x|

**OBJECT parameter description**

| Parameter name | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface call |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**Example**

```
uni.openAppAuthorizeSetting({
  success (res) {
    console.log(res)
  }
})
```
