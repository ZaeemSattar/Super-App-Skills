---
title: "uni.getEnterOptionsSync()"
source_url: https://miniapp.neuxnet.com/api/getEnterOptionsSync.html
---
###  uni.getEnterOptionsSync()

Get the parameters at startup.

Note: There are differences in parameter acquisition when each platform is started. The details are as follows:

-   Mini App platform: the return value is consistent with the callback parameter of App.onLaunch;
-   Web platform: The return value is the same as the callback parameter of App.onLaunch, and the support of different

**Return parameter description**

| Parameter Name | Type | Description |
| --- | --- | --- |
| path | String | The path to start (code package path) | Other platforms are supported, `Byte applet (1.12.0+)` |
| scene | Number | The scene value at startup, please refer to the documentation of each platform for the specific value meaning. App and web terminal are always 1001. | Other platforms are supported, `Byte applet (1.12.0+)` |
| query | Object | The query parameter at startup | All other platforms are supported, `Byte applet (1.12.0+)` |
| referrerInfo | Object | Source information. If not, return `{}` | Other platforms are supported, `Byte applet (1.15.0+)` |

**Object referrerInfo**

| Properties | Type | Description |
| --- | --- | --- |
| appId | String | Source applet appId | Other platforms are supported, `Byte applet (1.15.0+)` |
| extraData | Object | Data sent from the source applet. | Other platforms are supported, `Byte applet (1.15.0+)` |
