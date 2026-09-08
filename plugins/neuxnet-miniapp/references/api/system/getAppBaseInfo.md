---
title: "uni.getAppBaseInfo()"
source_url: https://miniapp.neuxnet.com/api/system/getAppBaseInfo.html
---
###  uni.getAppBaseInfo()

Get the basic information

**Return parameter description**

| Parameter Name | Type | Description |
| --- | --- | --- |
| appId | string | The application appid in the `manifest.json` |  |
| appName | string | App name in `manifest.json` |  |
| appVersion | string | The app version name in `manifest.json`. |  |
| appVersionCode | string | The app version name in `manifest.json`. |  |
| appWgtVersion | string | Version name of the app resource (wgt). | `Mini App` |
| hostVersion | string | App, applet host version. For example: SuperApp version number | `Mini App` |
| hostName | string | mini program host name | `Mini App` |
| hostPackageName | string | mini program host package name | `Mini App` |
| hostSDKVersion | string | Mini App SDK version, SuperApp client base library version | `Mini App` |
| hostTheme | string | The current theme of the system, the value is light or dark. | `Mini App` |

###  uni.getHostLanguage()

Get the host App language

**OBJECT parameter description:**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | Yes | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

####  success Return parameter description

| Parameter Name | Type | Description |
| --- | --- | --- |
| code | String | Language code |

###  uni.getHostFontSize()

Get the host App font size

**OBJECT parameter description:**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | Yes | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

####  success Return parameter description

| Parameter Name | Type | Description |
| --- | --- | --- |
| fontSizeSetting | Number | The host app font size, the default value is 16 |
| fontSizeScaleFactor | Number | The host app font size scale factor, the default value is 1 |
