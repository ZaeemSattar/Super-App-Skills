---
title: "uni.setEnableDebug(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/log.html
---
###  uni.setEnableDebug(OBJECT)3.0.0-3090920240606001

Set whether to enable the debug switch.

**OBJECT DESCRIPTION**

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| enableDebug | boolean | yes | whether to enable debugging |
| success | function | No | Callback function for successful API call |
| fail | function | No | Callback function for API call failure |
| complete | function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

####  Sample code

```
// turn on debugging
uni.setEnableDebug({
    enableDebug: true
})
// turn off debugging
uni.setEnableDebug({
    enableDebug: false
})
```

###  console

Output the log information to the console.

Note: Debug method on the App side is equivalent to the log method.

###  $log

Output the log to the console

###  $info

Output the info log to the console

###  $warn

Output the warn log to the console

###  $error

Output the error log to the console

**Notice:**

-   The traditional `console.log(...)` does not print to the debug window and needs to be replaced with `console.$log(...)`
