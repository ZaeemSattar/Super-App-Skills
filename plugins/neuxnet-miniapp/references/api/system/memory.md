---
title: "uni.onMemoryWarning(CALLBACK)"
source_url: https://miniapp.neuxnet.com/api/system/memory.html
---
###  uni.onMemoryWarning(CALLBACK)

Listen for out-of-memory alarm events.

This event is fired when iOS/Android issues a memory warning to the applet process. There are alarm levels for Android, but no level for iOS.

**Platform Difference Description**

|Mini App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet| |:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐 |x|x|√|√|√|x|√|√|√|

**CALLBACK return parameters:**

| parameter name | type | description |
| --- | --- | --- |
| level | Number | Only Android has this field, corresponding to the macro definition of system memory alarm level |

**legal values for level**

| value | description |
| --- | --- |
| 5 | TRIM\_MEMORY\_RUNNING\_MODERATE |
| 10 | TRIM\_MEMORY\_RUNNING\_LOW |
| 15 | TRIM\_MEMORY\_RUNNING\_CRITICAL |

**CODE EXAMPLE**

```
uni.onMemoryWarning(function () {
  console.log('onMemoryWarningReceive')
})
```

###  uni.offMemoryWarning(CALLBACK)

Cancel the monitoring of the low-memory alarm event. If no callback is passed, all listeners will be cancelled.

**Platform Difference Description**

|Mini App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet| |:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐 |x|x|√|√|√|x|x|√|√|

**parameter**

| property | type | description |
| --- | --- | --- |
| Callback function | Function | Callback function for low memory alarm event |
