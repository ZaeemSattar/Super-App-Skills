---
title: "uni.onUserCaptureScreen(CALLBACK)"
source_url: https://miniapp.neuxnet.com/api/system/capture-screen.html
---
###  uni.onUserCaptureScreen(CALLBACK)

Monitor the user's active screen capture event. This event is triggered when the user uses the system screen capture button to capture the screen.

**Platform Difference Description**

|Mini App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet| |:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐 |x|x|√|√|√|√|√|√|√|

**CALLBACK return parameters:**

none

**CODE EXAMPLE**

```
uni.onUserCaptureScreen(function() {
    console.log('用户截屏了')
});
```

###  uni.offUserCaptureScreen(function callback)

User active screenshot event. Cancel event listening.

**Platform Difference Description**

|Mini App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet| |:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐 |x|x|√|√|√|√|x|√|√|

**parameter**

| property | type | description |
| --- | --- | --- |
| Callback function | Function | Callback function for the user's active screen capture event |
