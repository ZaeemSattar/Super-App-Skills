---
title: "uni.getAccountInfoSync()"
source_url: https://miniapp.neuxnet.com/api/other/getAccountInfoSync.html
---
####  uni.getAccountInfoSync()

Get the current account information, you can return the Appid of the applet. If you use the cloud plug-in of WeChat applet, you can also feedback the id and version of the plug-in

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | x | √ | √ | √ |

**return value**

**Object**

account information

| property | type | description |
| --- | --- | --- |
| miniProgram | Object | Mini Program account information |
| plugin | Object | Plugin account information (only include this item when called in the plugin) |
| appName | string | Smart applet name (only supported by Baidu applet) |
| lastAppURL | string | The last calling protocol of the smart applet opened (only supported by Baidu applet) |
| scheme | string | Call up the protocol header (only supported by Baidu applet) |

**The structure of the miniProgram**

| property | type | description |
| --- | --- | --- |
| appId | string | Mini Program appId |
| envVersion | string | applet current environment version: `develop`, `trial`, `release` |
| version | string | version number |

**plugin structure**

| property | type | description |
| --- | --- | --- |
| appId | string | Plugin appId (not supported by Baidu applet) |
| version | string | Plugin version number |

**Sample code**

```
const accountInfo = uni.getAccountInfoSync();
console.log(accountInfo.miniProgram.appId); // 小程序 appId
console.log(accountInfo.plugin.appId); // 插件 appId
console.log(accountInfo.plugin.version); // 插件版本号， 'a.b.c' 这样的形式
```
