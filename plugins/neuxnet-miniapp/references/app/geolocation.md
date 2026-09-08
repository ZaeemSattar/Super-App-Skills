---
title: "Geolocation — background"
source_url: https://miniapp.neuxnet.com/app/geolocation.html
---
> HBuilderX3.3.0 began to separate out the "system positioning" module

###  background

From the beginning of 2021, map service providers such as AutoNavi, Baidu, and Tencent have updated their service agreements and started to implement a commercial authorization mechanism, requiring all map-related functions (including positioning SDK, map SDK, H5 map, etc.) Obtain commercial authorization from map service providers. It is important to emphasize that free applications also require commercial authorization. Unless your application is a public welfare application, other types of applications require commercial authorization.

-   Amap map reference: [https://lbs.amap.com/upgrade](https://lbs.amap.com/upgrade)
-   Baidu map reference: [https://lbsyun.baidu.com/cashier/auth](https://lbsyun.baidu.com/cashier/auth) Apps that have not obtained the authorization of the map service provider may encounter the problem that the positioning or map function is disabled, and the application market may prompt the existence of infringement. Therefore, it is necessary to apply for commercial authorization from map open platforms such as AutoNavi and Baidu.

In order to avoid problems caused by commercial authorization, you can also only use the "system positioning" module. "System positioning" is not as complete as AutoNavi, Baidu and other commercial positioning services in terms of function and model adaptation, and developers need to choose according to the actual situation.

###  System Location

The positioning service provided by the system called by the system positioning, different devices support the positioning function differently

####  iOS Platform

The positioning service is provided by Apple, which can obtain longitude and latitude information, and also supports parsing address information. That is, you can directly return the city street information.

####  Android Platform

The positioning service of the standard Android platform is provided by Google, but it requires the built-in GMS service of the mobile phone to connect to the Google server. Most domestic mobile phones do not support it.

Mainstream domestic mobile phone manufacturers provide their own positioning services, but niche brands may not support it, nor do older models from mainstream brands. The following Android phone manufacturers support system positioning:

-   Huawei
-   Oppo
-   Vivo
-   Nubia
-   one plus
-   Meizu
-   Lenovo
-   Gionee

In foreign countries, Google's GMS is usually used to provide location services.

**Note: The Android system positioning module does not support location resolution services, only latitude and longitude information can be obtained, and address information cannot be resolved. If you need to obtain city street information based on latitude and longitude, you still need to request commercial services such as AutoNavi and Baidu**
