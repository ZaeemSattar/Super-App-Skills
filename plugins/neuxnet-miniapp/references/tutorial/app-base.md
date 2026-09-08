---
title: "Application ID"
source_url: https://miniapp.neuxnet.com/tutorial/app-base.html
---
![](https://native-res.dcloud.net.cn/images/uniapp/base.png)

###  Application ID

DCloud application appid (appid for short) is a unique identifier generated when DCloud creates an App project. It is associated with DCloud cloud services and will be automatically generated after the project is created, and cannot be changed at will.

> Note: This is different from the appid of each applet, Apple's appid (bundle id) and the appid applied for by other third-party SDK platforms, which belong to the appid system of their respective platforms

For more appid uses, please refer to [DCloud appid instructions](https://ask.dcloud.net.cn/article/35907)

####  Local offline packaging

Offline packaging needs to be set in the native project, Android platform reference [Android Studio project configuration DCloud appid](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=appid) , iOS platform reference [XCode Engineering configuration DCloud appid](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=appid)

###  Application Name

The name of the application, which is used as the name of the application desktop icon when it is released as an app. When internationalization is supported, please refer to [manifest.json internationalization](https://uniapp.dcloud.io/collocation/i18n?id=manifest)

####  Local offline packaging

Offline packaging needs to be set in the native project, Android platform reference [Android Studio project configuration application name](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=name) , iOS platform reference \[XCode Engineering Configuration Application Name\](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94%a8 %e5%90%8d%e7%a7%b0)

###  Application Description

The description information of the application, which is used to briefly introduce the application, and will not be used when it is released as an app.

###  App version name

The version name displayed by the application can use any string. It is recommended to use a number separated by "." to indicate "major version number. This version number. Compile version number", such as "1.1.1234". Set the application version name of the native project after cloud packaging:

-   Android platform The value of the `android:versionName` attribute of the manifest node in the application manifest file (AndroidManifest.xml) can be viewed in "Settings" -> "Application Management" -> "Application Information" after it is installed on the phone
-   iOS platform Apply the value of the `CFBundleShortVersionString` field in the Info.plist file. After installing it on the phone, you can connect it to the computer and view it in the iTunes application list. When submitting AppStore for review, it is usually the same as the version number of the background build. After the review fails, repackage usually does not need to modify the version name.

> In the app, you can get the app version name through [plus.runtime.version](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.version) .

####  Local offline packaging

Offline packaging needs to be set in the native project, Android platform reference [Android Studio project configuration application version name](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=versioncode) , iOS platform reference \[ XCode project configuration application version name\](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94 %a8%e7%89%88%e6%9c%ac%e5%90%8d%e7%a7%b0)

###  Application version number

The internal version number of the application, which must be an integer, is used to record the development version. It is recommended to update it to a higher value than the previous one each time it is released (cloud packaging). For example: the current version is 100, and the next release will be greater than 100, such as 101, 102, etc. Set the application version number of the native project after cloud packaging:

-   Android platform The value of the `android:versionCode` attribute of the manifest node in the application manifest file (AndroidManifest.xml), during installation, only the installation package of the higher version can overwrite the installation package of the lower version. high version.
-   iOS platform Apply the value of the `CFBundleVersion` field in the Info.plist file. Every time the AppStore is submitted for review, it must be updated to a higher version number than the previous one. After the review fails, the repackaged version number also needs to be updated.

> In the app, you can get the app version number through [plus.runtime.versionCode](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.versionCode) .

####  Local offline packaging

Offline packaging needs to be set in the native project, Android platform reference [Android Studio project configuration application version name](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=versionname) , iOS platform reference \[ XCode project configuration application version number\](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94 %a8%e7%89%88%e6%9c%ac%e5%8f%b7)
