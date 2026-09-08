---
title: "App statistic"
source_url: https://miniapp.neuxnet.com/tutorial/app-statistic.html
---
The app-side statistics module encapsulates the mainstream three-party mobile app statistics SDK in the market, and provides the JS API unified call statistics function.

| Project Type | API |
| --- | --- |
| 5+ App | [plus.statistic.\*](https://www.html5plus.org/doc/zh_cn/statistic.html) |

Note: After checking the three-party statistics module when packaging, it will automatically count data such as daily activities and startup times of the application. The statistics API is used to expand custom statistics.

**uni-app comes with uni statistics, no need to use third-party statistics. The third-party statistics increase the package volume and cannot achieve the built-in buried-free point collection behavior data. For details, see: [https://tongji.dcloud.io/](https://tongji.dcloud.io/)**

![](https://native-res.dcloud.net.cn/images/uniapp/statistic/moudules.png)

> Tip: The parameter configuration of the statistics module can only take effect after submitting the cloud package. Please use the \[custom base\] when running and debugging the real machine (http://ask.dcloud.net.cn/article/35115)

Supported third-party statistical platforms:

-   [Umeng Statistics](https://uniapp.dcloud.io/app-statistic-umeng)
-   [Google Statistics](https://uniapp.dcloud.io/app-statistic-google) HBuilderX3.3.7+ version support
