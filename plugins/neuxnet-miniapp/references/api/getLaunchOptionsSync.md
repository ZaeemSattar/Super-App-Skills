---
title: "uni.getLaunchOptionsSync()"
source_url: https://miniapp.neuxnet.com/api/getLaunchOptionsSync.html
---
###  uni.getLaunchOptionsSync()

Get the parameters at startup. The return value is consistent with the callback parameter of App.onLaunch

There are differences in the support of different Vue versions of the web platform:

**Return parameter description**

| Parameter Name | Type | Description |
| --- | --- | --- |
| path | String | The path to start (code package path) | Other platforms are supported, `Byte applet (1.12.0+)` |
| scene | Number | The scene value at startup | Other platforms are supported, `Byte applet (1.12.0+)` |
| query | Object | The query parameter at startup | All other platforms are supported, `Byte applet (1.12.0+)` |
| referrerInfo | Object | Source information. If not, return `{}` | Other platforms are supported, `Byte applet (1.15.0+)`, `Feishu applet is not supported`, `Dingding applet is not supported` |

**Object referrerInfo**

| Properties | Type | Description |
| --- | --- | --- |
| appId | String | Source applet appId | Other platforms are supported, `Byte applet (1.15.0+)` |
| extraData | Object | Data from the source applet | Other platforms are supported, `Byte applet (1.15.0+)` |
