---
title: "On the domestic application market"
source_url: https://miniapp.neuxnet.com/tutorial/store.html
---
##  On the domestic application market

Recently, in order to effectively manage the phenomenon of compulsory authorization of apps, excessive claims, and collection of personal information beyond the scope, to implement the requirements of the "Cybersecurity Law" and the "Consumer Rights Protection Law" to ensure the security of personal information, major application markets have strengthened application review. Detection requires that the application must comply with relevant policies, otherwise the application will be at risk of being notified or removed from the shelf.

**App Market Listing Review Compliance Guide:**[https://ask.dcloud.net.cn/article/39073](https://ask.dcloud.net.cn/article/39073)

##  Make Google Play available

First, please check the "GooglePlay" channel when submitting the App for cloud packaging:

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/channel-google.png)

Review requirements for release of Google Play are strict, and the following issues should be noted:

-   There can be no behavior of downloading/installing apk in the applications. Do not check android.permission.INSTALL\_PACKAGES, android.permission.REQUEST\_INSTALL\_PACKAGES permission'
-   No function in the application can guide users to download other applications, and the following modules cannot be used:
    -   QQ login, QQ share: when QQ application is not installed on the mobile phone, users will be guided to install it
    -   uni-AD enhanced advertising SDK: there is the behavior of downloading and installing other third-party applications in advertisements. **The basic functions of uni-AD ads are not affected**
-   Dynamic loading code cannot be used in the application, so the X5 kernel cannot be configured. See [https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/36806) for details.

**application must be adapted to Android 11, and targetSdkVersion must be set to be greater than or equal to 30:** [https://ask.dcloud.net.cn/article/193](https://ask.dcloud.net.cn/article/193#targetsdkversion)

**uploads the installation package in Android App Bundle (AAB) format:** [https://ask.dcloud.net.cn/article/39052](https://ask.dcloud.net.cn/article/39052)

##  Make App Store available

> Again: uni-app does not simply use Webview shell. Webview is only responsible for UI rendering of vue pages, while nvue pages are completely rendered by native UI. The business logic code runs in an standalone JS engine (JSCore), and encapsulates many capabilities of JS API calling native (OC code implementation). It can be released on the Apple Store.

Apple App Store has a set of more detailed application review specifications. It is recommended to carefully read Apple's official [App Store Review Guidelines](https://developer.apple.com/cn/app-store/review/guidelines/) before submitting for review.

The following issues need to be noted:

-   Application function should not be too simple
-   Application function shall not be similar to that of the application that has released. That is to say, no vest package is allowed

**Instructions on using IDFA:** [https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)

**UIWebview API is obsolete:** [https://ask.dcloud.net.cn/article/36348](https://ask.dcloud.net.cn/article/36348)
