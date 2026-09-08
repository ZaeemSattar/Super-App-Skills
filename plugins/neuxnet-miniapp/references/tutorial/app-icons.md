---
title: "Android Platform"
source_url: https://miniapp.neuxnet.com/tutorial/app-icons.html
---
![](https://native-res.dcloud.net.cn/images/uniapp/icons/auto.png)

If you do not use the automatic icon generation method, you can configure the icons for Android and iOS platforms according to the following documents.

###  Android Platform

**Precautions**

-   The png format must be used. Other formats need to be converted using the picture tool. Be careful not to directly rename pictures in other formats such as jpg to png
-   The system does not limit the icon resolution, you can configure it according to the recommended resolution
-   The image supports transparent areas, it is recommended to use rounded icons

> Tip: Some special mobile phone ROMs may have requirements for icons, please pay attention to whether there are requirements when submitting the corresponding application market

####  Cloud Packaging

**Visual interface configuration** ![](https://native-res.dcloud.net.cn/images/uniapp/icons/android.png)

**Source view configuration** Switch to the source view interface, and configure the corresponding resolution icon path in the "app-plus"->"distribute"->"icons"->"android" node according to the following attributes:

| property name | type | description |
| --- | --- | --- |
| xxxhdpi | String | 2K screen device program icon, resolution 192x192 |
| xxhdpi | String | 1080P high resolution screen device program icon, the resolution requirement is 144x144 |
| xhdpi | String | 720P high-resolution screen device program icon, the resolution requirement is 96x96 |
| hdpi | String | High-resolution screen device program icon, resolution 72x72 |
| mdpi | String | Program icon of common screen device, the resolution requires 48x48, such devices are rare and can not be configured |
| ldpi | String | Large screen device program icon, the resolution requires 48x48, such devices are rare and can not be configured |

> Tip: 5+ App project source code view node is app->distribute->icons->android

**Default Icon** ![](https://native-res.dcloud.net.cn/images/uniapp/icons/def-android.png)

####  Offline packaging

Offline packaging needs to configure the application icon in the native project, refer to [Android native project configuration](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=icons)

###  iOS Platform

**Precautions**

-   The png format must be used. Other formats need to be converted using the picture tool. Be careful not to directly rename pictures in other formats such as jpg to png
-   Icons must be right-angled, do not use rounded corners, the AppStore review will not pass if you use rounded corners
-   When packaging and submitting the appstore, you must configure the AppStore icon with a resolution of 1024\*1024. The cloud packager uses a pure white icon by default.
-   All icons do not contain transparent information (alpha channel), otherwise submitting to AppStore will report the following error [ITMS-90717](#itms90717) error

For more information about app icons, refer to Apple's official instructions: \[https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/\](https://developer .apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/)

####  Cloud Packaging

**Visual interface configuration** ![](https://native-res.dcloud.net.cn/images/uniapp/icons/ios.png)

-   app store  
    The application needs to be submitted to the AppStore for review, which is a must-configure
-   iPhone icon configuration It must be configured when "Support iPhone" is checked when packaging
-   iPad icon configuration Checking "support iPad" when packaging is a must

**Source view configuration** Switch to the source code view interface, and configure the corresponding resolution icon path in the "app-plus"->"distribute"->"icons"->"ios" node according to the following properties:

| property name | type | description |
| --- | --- | --- |
| iphone | Object, refer to [iPhone icon source code parameters](#iphone) | iPhone device program icon |
| ipad | Object, refer to [iPad icon source code parameters](#ipad) | iPad device program icon |
| appstore | String | App Store icon path, resolution 1024x1024 |

iPhone icon source code parameters

| property name | type | description |
| --- | --- | --- |
| app@2x | String | The main icon of the iOS7+ device program, the resolution requirement is 120x120 |
| app@3x | String | The main icon of the iOS7+ device program, the resolution requirement is 180x180 |
| spotlight@2x | String | Spotlight search icon for iOS7+ devices, resolution 80x80 |
| spotlight@3x | String | Spotlight search icon for iOS7+ devices, resolution 120x120 |
| settings@2x | String | iOS7+ device Settings icon, resolution 58x58 |
| settings@3x | String | iOS7+ device Settings icon, resolution 87x87 |
| notification@2x | String | iOS7+ device notification bar icon, resolution 40x40 |
| notification@3x | String | iOS7+ device notification bar icon, resolution 60x60 |

iPad icon source code parameters

| property name | type | description |
| --- | --- | --- |
| app | String | The main icon of the iOS7+ device program, the resolution requirement is 76x76 |
| app@2x | String | The main icon of the iOS7+ high-resolution screen device program, the resolution requirement is 152x152 |
| proapp@2x | String | iOS9+ iPad Pro (12.9 inches) device program main icon, the resolution requirement is 167x167 |
| spotlight | String | iOS7+ device Spotlight search icon, the resolution requires 40x40 |
| spotlight@2x | String | iOS7+ high-resolution screen device Spotlight search icon, the resolution requirement is 80x80 |
| settings | String | iOS5+ device Settings icon, resolution 29x29 |
| settings@2x | String | iOS5+ high-resolution screen device Settings icon, the resolution requires 58x58 |
| notification | String | iOS7+ device notification bar icon, resolution 20x20 |
| notification@2x | String | iOS7+ high-resolution screen device notification bar icon, the resolution requires 40x40 |

####  Offline packaging

Offline packaging needs to configure the application icon in the native project, refer to \[iOS native project configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd% ae%e5%ba%94%e7%94%a8%e7%9a%84%e5%9b%be%e6%a0%87)

###  common problem

####  After the iOS platform is configured/updated the icon is packaged and installed, the icon is displayed incorrectly

**solution**  
The iOS system will cache the app icon, and you need to restart the phone for the new icon to take effect

####  Submitting AppStore review is reporting ITMS-90717 error

This is because the image contains transparent information, that is, the alpha channel. The complete error message is as follows:

```
ERROR ITMS-90717: "Invalid App Store Icon. The App Store Icon in the asset catalog in 'HBuilder.app' can't be transparent nor contain an alpha channel."
```

**solution**  
Remove the alpha channel when generating the png icon file, and resubmit the cloud package
