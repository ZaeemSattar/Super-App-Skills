---
title: "Make sure to upgrade HBulider X to version `3.2.15+`. Offline packaging requires upgrading the offline packaging SDK to version `3.2.15+`"
source_url: https://miniapp.neuxnet.com/tutorial/android-gp.html
---
####  Make sure to upgrade HBulider X to version `3.2.15+`. Offline packaging requires upgrading the offline packaging SDK to version `3.2.15+`

When submitting an app for cloud packaging, be sure to check the "GooglePlay(AAB)" channel

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/app/android/googleplay/channel.png)

The Google Play listing review requirements are strict, and the following behaviors cannot exist in the application:

-   You cannot directly download the apk to install the app, you need to guide the user to Google Play to install it
-   No dynamic loading code behavior

Some functional modules in uni-app do not meet the Google Play review requirements, please read the following sections carefully.

###  Must be compatible with Android11

The targetSdkVersion needs to be set to a value greater than or equal to 30 in "App common other settings"

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/app/android/googleplay/targetsdkversion.png)

**Note: Be sure to test on an Android 11 device to make sure that all the features of the app work properly**

###  Cannot include install app permissions

Do not check android.permission.INSTALL\_PACKAGES, android.permission.REQUEST\_INSTALL\_PACKAGES permissions in App permission configuration

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/app/android/googleplay/permission-install.png)

####  Offline packaging:

1.  Update SDK3.2.15+ version
    
2.  Please check the AndroidManifest.xml in the native project. If it contains the following permissions, please delete it manually:
    

```
<uses-permission android:name="android.permission.INSTALL_PACKAGES" />
<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
```

**Note: If the uni native plugin is used, the permission to install the application may be added, please contact the author of the uni native plugin to confirm**

###  Do not use QQ login, QQ sharing module

When using the QQ login and sharing function, if the QQ application is not installed on the current device, the user will be guided to download and install it, which does not meet the review requirements of Google Play. Therefore, do not check the QQ login and QQ sharing modules when submitting to Google Play.

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/app/android/googleplay/qq.png)

####  Offline packaging:

Please do not integrate SDKs such as qq\_mta-sdk-xxx.jar, qq\_sdk\_vxxx.jar, etc. If there is, please delete

###  Do not use the domestic enhanced advertising SDK

The landing page of the uni-AD domestic enhanced advertisement (such as pangolin, Guangdiantong, Kuaishou, etc. SDK) may guide users to download and install the apk, which does not meet the review requirements of Google Play, so do not check the enhanced advertisement when submitting to Google Play SDK

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/app/android/googleplay/ad.png)

**Note: uni-AD advertising basic functionality is not affected**

####  Offline packaging:

Please do not integrate the domestic enhanced advertising related dependency libraries ks\_adsdk-ad.aar, windAd.aar, GDTSDK.unionNormal.aar, open\_ad\_sdk.aar, torch-adcore-xx.aar. Please delete if so

###  Don't use X5 kernel

Tencent TBS (X5) kernel solves many adaptation problems on the Android platform (for details, please refer to: \[https://ask.dcloud.net.cn/article/36806\](https://ask.dcloud.net.cn/ article/36806)), but it uses dynamic hot update technology and does not meet the review requirements of Google Play, so do not check the "Android X5 Webview (Tencent TBS)" module when submitting to Google Play

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/app/android/googleplay/x5.png)

####  Offline packaging:

Please do not integrate the X5 dependent library webview-x5-release.aar, if so, please delete

###  Other related questions

-   Description of Android App Bundle (AAB) format: [https://ask.dcloud.net.cn/article/39052](https://ask.dcloud.net.cn/article/39052)
