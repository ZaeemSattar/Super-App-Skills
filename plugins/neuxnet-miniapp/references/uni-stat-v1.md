---
title: "The first step, configure the statistics switch"
source_url: https://miniapp.neuxnet.com/uni-stat-v1.html
---
attention

You are browsing the documentation for the old version of uni stats 1.0. It is recommended to upgrade to [uni stats 2.0](./uni-stat-v2.md)

uni-app 2.2.3+ version adds `uni statistics 1.0`, which supports business statistics on the whole platform, including App, H5 and various small programs.

1.  There is no need to connect different sdk at each end, and there is no need to view data in different reports. uni statistics: a report to see the business panorama.
2.  Pull through the content. Let you know what content users like you provide, whether it is the news in the news app or the products in the shopping app, you can see the panorama at a glance.

Web console address: [https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)

##  The first step, configure the statistics switch

Since uni-app version 2.2.3, the `uni-app` project will enable uni statistics by default when it is released. .net.cn) to view the data report. But since uni-app 2.7, the default is changed to not enabled. It needs to be manually configured in the manifest.

Open the manifest in HBuilderX and select uni statistics, as shown below:

![Select uni statistics](https://img-cdn-tc.dcloud.net.cn/uploads/article/20200428/761d2dca6ce34febfc4d43c09c6fd85f.jpg)

If you don't use HBuilderX, you can also manually turn off uni statistics in the source view of `manifest.json`

Set the `enable` field under `manifest.json -> uniStatistics` to `false` to turn off uni statistics

```
//...
"uniStatistics": {
	"enable": false//全局关闭
},
//...
```

Note: `uniStatistics` supports sub-platform settings. For example, if you only need to turn off uni statistics on the WeChat platform, you can set `uniStatistics ->enable` under the `mp-weixin` node, as follows:

```
//...
"mp-weixin":{
    "uniStatistics": {
        "enable": false //微信平台关闭统计
    }
}
```

##  Step 2, the applet needs to add domain name access whitelist

Because each applet needs to configure a whitelist for the accessible domain names, otherwise it will not be able to connect to the Internet, so you need to add `tongji.dcloud.io` to the server domain name list. For detailed tutorials, please refer to [https://ask.dcloud.net.cn/article/36298](https://ask.dcloud.net.cn/article/36298)

##  The third step, use HBuilderX 2.2.3 or above or the corresponding cli version to release the application

The application will not report statistical data when it is running or debugged. It will only report the data after launching the new version of the app, h5, and applet.

##  The fourth step, log in to the statistics background to see the data

Website of uni statistical report: [https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)

Please use the correct DCloud account to log in to the background. After logging in with each DCloud account, you can see the applications created under your own name. If you don't see the expected app, then the account is not the owner of an app.

If the owner of the project corresponding to the appid changes, please refer to [How to transfer the app](http://ask.dcloud.net.cn/article/12861)

There is a delay in the update of the data report. After the data is reported on the mobile phone, the data can be seen in the background report after a delay of tens of minutes.

* * *

##  Why does it prompt "The current application does not have an Appid configured and cannot use uni statistics" when it is released

`uni statistics` uses appid to distinguish different applications, so when compiling the project, if it is found that the current application is not configured with appid, the following warning will be displayed on the console:

```
当前应用未配置Appid，无法使用uni统计
```

At this point, developers can create applications through the two portals of HBuilderX and [DCloud Developer Center](https://dev.dcloud.net.cn) to obtain the Appid.

**Method 1. Log in to HBluiderX to obtain**

Log in first in HBluiderX, then open `manifest.json` in the project root directory, click to get `APPID` in the visual interface, no other settings are required, as shown below

![Get appid](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/4e33ea58-4d1b-4a9b-a865-d9ac23009567.png)

**Method 2. Log in to DCud Developer Center to get it (coming soon)**

Log in to [DCloud Developer Center](https://dev.dcloud.net.cn) , create an application online, and then fill in the appid of the new application into manifest.json

```
{
  // ...
  "appid":"创建的 appid"
  // ...
}
```

Tips

-   To use uni statistics, `APPID` must be configured for normal use
-   The `APPID` obtained and created is bound to your `DCloud` account, please do not fill in it at will, otherwise the report content will not be obtained normally
-   Some developers don't pay attention to Appid and use the same appid in different applications, please correct these wrong behaviors.
-   Attached reference article: [What is the use of DCloud's Appid, how to transfer the application](https://ask.dcloud.net.cn/article/35907)

##  Precautions

-   uni statistics has the function of real-time data statistics of the day, but this real-time still needs to go through a certain computing time, generally ranging from 3 minutes to 1 hour.
-   If the developer does not log in to the uni statistics console for 3 consecutive days, the real-time statistics service will be suspended; real-time statistics will be started within 1 hour after logging in again. This suspension does not affect the daily report and does not affect the overall data accuracy.
-   If the developer does not log in to the uni statistics console for 1 month, the data reporting function will be suspended. After logging in again, click the button to resume data reporting. The system will send a reminder email to the developer before pausing. During the suspension period, data is no longer recorded, and historical data is not affected. After resuming, the data during the suspension period cannot be recovered either.

##  common problem

1.  The background data always shows 0, and the data report cannot be seen

-   Please check if `manifest.json` is configured with uni statistics enabled
-   If already configured, please check whether `HBuilderX` has been upgraded to `2.2.3` or above, and whether `CLI` has been upgraded to the latest version.
-   Please make sure that `tongji.dcloud.io` is added to the server domain name list of the applet
-   Please make sure the new version with uni stats has been released to the phone and is up and running
-   There is a delay of dozens of minutes for statistical data. If it is just added, please wait for a while before refreshing the report
-   The application needs to be published to have data, and the data will not be reported during the running period
-   Display logic of real-time statistics of the day: Apps that have not logged in to the statistics background within 3 days will not process real-time statistics of the day; real-time statistics will be started within 1 hour after logging in again.

2.  How to use custom events Use the `uni.report()` API to report data, see [Custom Event Description](https://ask.dcloud.net.cn/article/36304)
    
3.  What is content statistics / how to configure page rules Content statistics is one of the characteristic functions of uni statistics. It is the access statistics of the content details page. For details, please refer to [Content Statistics Description](https://ask.dcloud.net.cn/article/36299)
    
4.  Importing old data and combining statistics is not supported. uni statistics need to have data after it is opened and online
    
5.  It is illegal to sell user data or share data to a third party without the user's consent. DCloud strictly complies with national legal requirements, and uni statistics can be used with peace of mind.
