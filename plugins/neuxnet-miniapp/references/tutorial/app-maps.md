---
title: "Gaode map"
source_url: https://miniapp.neuxnet.com/tutorial/app-maps.html
---
The app-side map module encapsulates the mainstream three-party map SDK in the market, and provides JS API to call Android and iOS native map functions uniformly.

| Project Type | API |
| --- | --- |
| 5+App/Wap2App | [plus.maps.\*](https://www.html5plus.org/doc/zh_cn/maps.html) |

![](https://native-res.dcloud.net.cn/images/uniapp/maps/modules.png)

> Tip: App module configuration can only take effect after submitting the cloud package. Please use the \[custom base\] when running and debugging the real machine (http://ask.dcloud.net.cn/article/35115)

**Notice**

-   Commercial authorization is required to use AutoNavi Map and Baidu Map. For details, please refer to [Commercial Authorization Instructions](app-geolocation#business)
-   Only nvue pages in the uni-app project support the use of native SDK
-   The uni-app project temporarily does not support the use of Baidu Maps

###  Gaode map

####  Apply for Gaode Map Key

Before using it, you need to go to [Amap Open Platform](https://lbs.amap.com/) to create an application and apply for a Key

-   Log in to the [Amap Open Platform](https://lbs.amap.com/) , enter the "Console", if you do not have an account, please register an account according to the page prompts
-   Open the "App Management" -> "My Apps" page, click "Create New App", and fill in the content to create an app according to the page prompts
-   Click "Add" under the application to add a key to the application, and apply for a key for the Android platform and iOS platform as required

####  Configure to use Gaode map

![](https://native-res.dcloud.net.cn/images/uniapp/maps/amap.png)

####  Parameter Description

-   appkey\_android  
    Android platform Key applied for by AutoNavi Open Platform
-   appkey\_ios  
    iOS platform Key applied for by AutoNavi Open Platform

**Notice**

-   The HBuilderX standard base uses the AutoNavi Map SDK by default, and you can run the test directly on the real machine. At this time, the configured application package name and signature information will not take effect. Before the official release, please submit the cloud package or use the \[custom debugging base\](https 😕/ask.dcloud.net.cn/article/35115) test
-   Local offline packaging reference \[Android platform AutoNavi map module configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/map?id=%e9%ab%98%e5%be%b7% e5%9c%b0%e5%9b%be), \[iOS Platform AutoNavi Map Module Configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/map?id=%e9%ab% 98%e5%be%b7%e5%9c%b0%e5%9b%be)

###  Baidu map

####  Apply for Baidu Map Key

Before using, you need to go to [Baidu Open Platform](https://lbsyun.baidu.com/) to create an application and apply for a Key

-   Log in to [Baidu Open Platform](https://lbsyun.baidu.com/) , enter the "Console", if you do not have an account, please register an account according to the page prompts
-   Open the "App Management" -> "My Apps" page, click "Create App", and fill in the contents according to the page prompts to create an app to get the Key

####  Configure to use Baidu map

![](https://native-res.dcloud.net.cn/images/uniapp/maps/bmap.png)

####  Parameter Description

-   appkey\_android  
    The Android platform Key applied for by Baidu Maps Open Platform
-   appkey\_ios  
    The iOS platform key applied for by Baidu Maps Open Platform

**Notice**

-   HBuilderX standard base does not contain Baidu map, please use [custom debugging base](https://ask.dcloud.net.cn/article/35115) to test after configuration
-   Local offline packaging reference \[Android platform Baidu map module configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/map?id=%e7%99%be%e5%ba%a6%e5 %9c%b0%e5%9b%be), \[iOS platform Baidu map module configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/map?id=%e7%99%be% e5%ba%a6%e5%9c%b0%e5%9b%be)

###  Google Maps (Google Maps/google map)

> Added support for HBuilderX 3.4.0+

####  Apply for Google Maps Key

Before using it, you need to go to [Google Maps Open Platform](https://console.cloud.google.com/google/maps-apis) to create an application and apply for an APIKey

-   Log in to [Google Maps Open Platform](https://console.cloud.google.com/google/maps-apis) , if you don't have an account, please register an account according to the page prompts
-   Create a new project according to the prompt on the page, or select an existing project
-   Open the "Credentials" page, click "Create Credentials" -> "API Key" to get the APIKey, because Google Maps needs to be charged, it is recommended to configure a restricted key to ensure security
    -   Android platform Check "Android Application" under "Application Restrictions", and add binding "Package Name" and "SHA-1 Certificate Fingerprint"; under "API Restrictions", it is recommended to check "Unrestricted Keys"
    -   iOS platform Under "App Restrictions", check "iOS App" and add the binding "Package ID"; under "API Restrictions", it is recommended to check "Unrestricted Keys"

####  Configure to use Google Maps

![](https://native-res.dcloud.net.cn/images/uniapp/maps/gmap.png)

####  Parameter Description

-   APIKey\_android  
    Android platform APIKey applied by Google Maps Open Platform
-   APIKey\_ios  
    iOS platform APIKey applied for by Google Maps Open Platform

**Notice**

-   Google Maps on Android and iOS platform SDK does not support POI search, and cannot directly use [uni.chooseLocation(OBJECT)](https://uniapp.dcloud.io/api/location/location?id=chooselocation) , you can apply for Web Server APIKey performs POI search on the business server side, and implements chooseLocation related functions on the App side
-   HBuilderX standard base does not include Google map, please use [custom debugging base](https://ask.dcloud.net.cn/article/35115) to test after configuration
