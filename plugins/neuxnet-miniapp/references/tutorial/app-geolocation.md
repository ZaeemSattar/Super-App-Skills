---
title: "System Location"
source_url: https://miniapp.neuxnet.com/tutorial/app-geolocation.html
---
The `system positioning` that comes with the packaging system of the app-side positioning module, and the mainstream three-party positioning SDKs in the market, such as `Gode positioning`, `Baidu positioning`, etc., provide JS API unified call positioning function.

| Project Type | API |
| --- | --- |
| uni-app | [uni.getLocation(OBJECT)](../api/location/location.md#getlocation) |
| 5+ App/Wap2App | [plus.geolocation.\*](https://www.html5plus.org/doc/zh_cn/geolocation.html) |

![](https://native-res.dcloud.net.cn/images/uniapp/geolocation/modules.png)

###  System Location

> HBuilderX3.2.16 began to separate out the "system location" module

![](https://native-res.dcloud.net.cn/images/uniapp/geolocation/system.png)

`System positioning` calls the positioning service provided by the operating system of the device, which only supports the wgs84 coordinate system. Different devices support different positioning functions.

####  iOS Platform

The positioning service is provided by Apple's iOS system, which can obtain latitude and longitude information and support the resolution of address information, that is, it can directly return city street information.

####  Android Platform

Only latitude and longitude information can be obtained, and address information cannot be resolved, that is, city street information cannot be returned.

The positioning service of the standard Android system is provided by Google, but it requires the built-in GMS service of the mobile phone to connect to the Google server. Domestic mainstream mobile phone manufacturers provide their own positioning services, but niche brands may not support it, nor do older models from mainstream brands. The following Android phone manufacturers support `system positioning`:

-   Huawei
-   Oppo
-   Vivo
-   Nubia
-   one plus
-   Meizu
-   Lenovo
-   Gionee

In foreign countries, Google's GMS is usually used to provide location services.

**Notice**

-   Due to the adaptation of the device manufacturer, the positioning service may be unstable on some Android devices. If you want to improve the stability of the positioning function, it is recommended to use `Guide Positioning` or `Baidu Positioning`
-   Local offline packaging reference \[Android platform system positioning module configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/geolocation?id=%e7%b3%bb%e7%bb%9f%e5 %ae%9a%e4%bd%8d), \[iOS platform Baidu positioning module configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/geolocation?id=%e7%b3%bb% e7%bb%9f%e5%ae%9a%e4%bd%8d)

###  Gaode Positioning

> You need to apply for business authorization from AutoNavi, refer to: [Commercial authorization instructions](app-geolocation#business), you need to log in to the [AutoNavi Open Platform](https://lbs.amap.com/) to create Application Application Key

![](https://native-res.dcloud.net.cn/images/uniapp/geolocation/amap.png)

####  Parameter Description

-   appkey\_android  
    [Amap Open Platform](https://lbs.amap.com/) Key applied for Android platform
-   appkey\_ios  
    [Amap Open Platform](https://lbs.amap.com/) Key applied for iOS platform

**Notice**

-   Calling the positioning service provided by the AutoNavi positioning SDK, it only supports the gcj02 coordinate system, and supports parsing address information.
-   After configuration, the cloud package must be submitted to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)
-   Local offline packaging reference \[Android platform AutoNavi positioning module configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/geolocation?id=%e9%ab%98%e5%be%b7% e5%ae%9a%e4%bd%8d), \[iOS Platform Geolocation Module Configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/geolocation?id=%e9%ab% 98%e5%be%b7%e5%ae%9a%e4%bd%8d)

###  Baidu positioning

> You need to apply for business authorization from Baidu, please refer to: [Commercial authorization instructions](app-geolocation#business), you need to log in to [Baidu Map Open Platform](https://lbsyun.baidu.com/) to create an application before use Request an Access Application Key (AK)

![](https://native-res.dcloud.net.cn/images/uniapp/geolocation/baidu.png)

####  Parameter Description

-   appkey\_android  
    [Baidu Map Open Platform](https://lbsyun.baidu.com/) Access application key applied for Android platform
-   appkey\_ios  
    [Baidu Map Open Platform](https://lbsyun.baidu.com/) Access application key applied for the iOS platform

**Notice**

-   Calling the positioning service provided by Baidu Positioning SDK, only supports gcj02/bd09/bd09ll coordinate system, and supports parsing address information.
-   After configuration, the cloud package must be submitted to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)
-   Local offline packaging reference \[Android platform Baidu positioning module configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/geolocation?id=%e7%99%be%e5%ba%a6%e5 %ae%9a%e4%bd%8d), \[iOS platform Baidu positioning module configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/geolocation?id=%e7%99%be% e5%ba%a6%e5%ae%9a%e4%bd%8d)

###  Commercial Authorization Instructions

From the beginning of 2021, map service providers such as AutoNavi, Baidu, and Tencent have updated their service agreements and started to implement a commercial authorization mechanism, requiring all map-related functions (including positioning SDK, map SDK, H5 map, etc.) Obtain commercial authorization from map service providers. It is important to emphasize that free applications also require commercial authorization. Unless your application is a public welfare application, other types of applications require commercial authorization.

-   Amap map reference: [https://lbs.amap.com/upgrade](https://lbs.amap.com/upgrade)
-   Baidu map reference: [https://lbsyun.baidu.com/cashier/auth](https://lbsyun.baidu.com/cashier/auth)

Apps that have not obtained the authorization of the map service provider may encounter problems of positioning or map functions being disabled, and the application market may prompt the existence of infringement. Therefore, it is necessary to apply for commercial authorization from map open platforms such as AutoNavi and Baidu.

In order to avoid problems caused by commercial authorization, if you only need to obtain the coordinates of wgs84, you can only use the "system positioning" module. "System positioning" is not as complete as AutoNavi, Baidu and other commercial positioning services in terms of function and model adaptation. Developers need to choose according to the actual situation.
