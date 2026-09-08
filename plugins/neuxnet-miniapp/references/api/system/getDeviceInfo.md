---
title: "uni.getDeviceInfo()"
source_url: https://miniapp.neuxnet.com/api/system/getDeviceInfo.html
---
###  uni.getDeviceInfo()

Get basic device information

**Return parameter description**

| Parameter Name | Type | Description |
| --- | --- | --- |
| deviceBrand | string | The device brand. For example: `apple`, `huawei` | `H5 does not support` |
| deviceId | string | The device id. Generated and stored by the Mini App framework, emptying the Storage will cause changes |  |
| deviceModel | string | Device Model |  |
| deviceType | string | device type `phone`, `pad`, `pc` |  |
| deviceOrientation | string | Device orientation `portrait`, `landscape` | `App, H5`. For WeChat applet, please use `(getSystemInfo Api)[/api/system/info.html]` to get |
| devicePixelRatio | string | Device pixel ratio | `App, H5`. For WeChat applet, please use `(getSystemInfo Api)[/api/system/info.html]` to get |
| system | string | OS and version |  |
| platform | Client Platform |  |

applet special return parameters

| Parameter Name | Type | Description |
| --- | --- | --- |
| abi | String | Application binary interface type (only supported by Android) | `WeChat applet only` |
| benchmarkLevel | Number | Device performance level (Android only). The value is: -2 or 0 (the device cannot run mini games), -1 (the performance is unknown), >=1 (the device performance value, the higher the value, the better the device performance, the current maximum is less than 50) | `WeChat applet only` |

Deprecated return parameter, reserved for backward compatibility only

| Parameter Name | Type | Description |
| --- | --- | --- |
| brand | string | device brand | `H5 not supported` |
| model | string | Device model. The new model will display unknown after it has been launched for a while, and WeChat will adapt it as soon as possible. |  |

**Tips**

-   `deviceId`: `android platform` uses imei and mac according to the priority, and uses a randomly generated identifier if it is not obtained. `ios platform` is to use the randomly generated logo directly
