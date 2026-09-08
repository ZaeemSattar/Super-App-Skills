---
title: "App share"
source_url: https://miniapp.neuxnet.com/tutorial/app-share.html
---
The App-side Share module encapsulates the mainstream three-party sharing SDK in the market, and provides the unified call sharing function of JS API.

| Project Type | API |
| --- | --- |
| uni-app | [uni.share(OBJECT)](../api/plugins/share.md#share)、[uni.shareWithSystem(OBJECT)](../api/plugins/share.md#sharewithsystem) |
| 5+App/Wap2App | [plus.share.\*](https://www.html5plus.org/doc/zh_cn/share.html) |

In the uni-app project, the official packaged [uni-share](https://ext.dcloud.net.cn/plugin?id=4860) plugin is provided for developers to use.

![](https://native-res.dcloud.net.cn/images/uniapp/share/modules.png)

> Tip: The parameter configuration of the three-party sharing module can only take effect after submitting the cloud package. Please use the \[custom base\] when running and debugging the real machine (http://ask.dcloud.net.cn/article/35115)

The basic process of using the sharing function:

-   Apply to the three-party sharing platform for activation, some platforms (such as WeChat sharing) will get the appid after the application is successful
-   Configure the parameters of the application (such as appid, etc.) in HBuilderX, and submit the cloud package to generate [custom base](http://ask.dcloud.net.cn/article/35115)
-   Call the API in the App project for sharing operations

Supported third-party sharing platforms:

-   [WeChat Share](./app-share-weixin.md)
-   [QQ Share](./app-share-qq.md)
-   [Sina Weibo Share](https://miniapp.neuxnet.com/tutorial/app-share-sina)
