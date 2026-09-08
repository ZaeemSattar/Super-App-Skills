---
title: "uni.getSystemSetting()"
source_url: https://miniapp.neuxnet.com/api/system/getsystemsetting.html
---
###  uni.getSystemSetting()

Get device settings

**Platform Difference Description**

|Mini App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|Dingding applet| |:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐:-😐 |HBuilderX (3.5.2+)|x|Base Library (2.20.1+)|x|x|x|x|x|x|x|

**Return parameter description**

| property | type | description |
| --- | --- | --- |
| bluetoothEnabled | boolean | System switch for bluetooth. When the value is `false`, on the App side: it may be caused by incorrect configuration. In this case, the `bluetoothError` attribute description error will be returned. |
| bluetoothError | String | App: Returns a string when the Android platform does not have permission or the iOS platform module configuration is incorrect, otherwise this property is not returned. See below for details |
| locationEnabled | boolean | System switch for location. When the value is `false`, App side: Android platform is accurate; iOS platform may be caused by incorrect configuration, in this case, `locationError` property description error will be returned. |
| locationError | String | App: Android platform does not return this property; iOS platform module configuration error returns a string, otherwise this property is not returned. See below for details |
| wifiEnabled | boolean | System switch for Wi-Fi |
| deviceOrientation | string | Device orientation. `Portrait: portrait`, `Landscape: landscape` |

**Tips**

-   `bluetoothError`：
    -   The Android platform value is `"Missing permissions required by BluetoothAdapter.isEnabled: android.permission.BLUETOOTH"` means there is no `android.permission.BLUETOOTH` permission
    -   The iOS platform value is `"Missing bluetooth module in manifest.json"` , indicating that the `BlueTooth (Bluetooth Low Energy)` module is not configured in `manifest.json -> App Module Configuration`
-   `locationError`：
    -   The Android platform does not return this value;
    -   The value of `"Missing geolocation module in manifest.json"` on iOS platform means that the `Geolocation(location)` module is not configured in `manifest.json -> App module configuration`

**Example**

```
const systemSetting = uni.getSystemSetting()

console.log(systemSetting.bluetoothEnabled)
console.log(systemSetting.deviceOrientation)
console.log(systemSetting.locationEnabled)
console.log(systemSetting.wifiEnabled)
```
