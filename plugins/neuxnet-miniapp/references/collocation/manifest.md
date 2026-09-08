---
title: "List of configuration items"
source_url: https://miniapp.neuxnet.com/collocation/manifest.html
---
The `manifest.json` file is the configuration file of the application, which is used to specify the name, icon, permission and so on of the application.

###  List of configuration items

| Attribute | Type | Default |
| --- | --- | --- |
| name | String |  | application name |
| appid | String | When creating a new Mini App project | App ID |
| description | String |  | Application description |
| locale | String | auto | Set the current default language. Refer to [locale](../api/ui/locale.md) |
| versionName | String |  | version name, e.g.: 1.0.0. See Tips description below for details |
| versionCode | String |  | version number, e.g.: 36 |
| transformPx | Boolean | true | Whether to transform the px of the item, when true, convert px to rpx, when false, px is the traditional actual pixel. The default value is true for compatible historical projects, but it is not recommended to enable this configuration for new projects (the new project template is generally configured to be false) |
| networkTimeout | Object |  | Network timeout, [see details](./manifest.md#networktimeout) |

####  networkTimeout

Timeout required by all kinds of network, in milliseconds.

| Attribute | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| request | Number | No | 60000 | uni.request timeout, in milliseconds. |
| connectSocket | Number | No | 60000 | uni.connectSocket timeout, in milliseconds. |
| uploadFile | Number | No | 60000 | uni.uploadFile timeout, in milliseconds. |
| downloadFile | Number | No | 60000 | uni.downloadFile timeout, in milliseconds. |
