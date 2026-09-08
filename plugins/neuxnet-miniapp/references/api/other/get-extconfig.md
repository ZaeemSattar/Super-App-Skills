---
title: "uni.getExtConfig(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/other/get-extconfig.html
---
###  uni.getExtConfig(OBJECT)

Get data fields customized by third-party platforms.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | √ | x | x | x | x |

**OBJECT parameter description**

| Properties | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for interface call failure |
| complete | function |  | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**success callback parameter description**

| property | type | description |
| --- | --- | --- |
| extConfig | Object | Data customized by third-party platforms |

**Tips**

-   This interface cannot be judged for compatibility through `uni.canIUse` temporarily. Developers need to judge whether `uni.getExtConfig` exists to be compatible.

**Sample code**

```
if (uni.getExtConfig) {
  uni.getExtConfig({
    success(res) {
      console.log(res.extConfig)
    }
  })
}
```

###  uni.getExtConfigSync()

Synchronized version of `uni.getExtConfig`.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | √ | x | x | x | x |

**Return value(Object)**

| property | type | description |
| --- | --- | --- |
| extConfig | Object | Data customized by third-party platforms |

**Tips**

-   This interface cannot be judged for compatibility through `uni.canIUse` temporarily. Developers need to judge whether `uni.getExtConfigSync` exists to be compatible.

**CODE EXAMPLE**

```
const extConfig = uni.getExtConfigSync ? uni.getExtConfigSync() : {}
console.log(extConfig)
```
