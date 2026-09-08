---
title: "The concept of system information"
source_url: https://miniapp.neuxnet.com/api/system/info.html
---
###  The concept of system information

Mini App provides two APIs to obtain system information, asynchronous (`uni.getSystemInfo`) and synchronous (`uni.getSystemInfoSync`).

Sorted according to the operating environment level, from the bottom to the top, Mini App has 6 concepts:

-   `device`: the device running the application, such as iphone, huawei
-   `os`: the operating system of the device, such as ios, andriod, windows, mac, linux
-   `rom`: customization based on operating system, unique concepts of Android system, such as miui, Hongmeng
-   `uni`: information related to the Mini App framework, such as the compiler version and runtime version of the Mini App framework
-   `app`: information related to the developer's application, such as application name, version

###  uni.getSystemInfo(OBJECT)

Get system information asynchronously

**OBJECT parameter description:**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | Yes | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

####  success Return parameter description

| Parameter Classification | Parameters | Description | App Platform Value Domain | Web Platform Value Domain |
| --- | --- | --- | --- | --- |
| device | deviceId | device id . Generated and stored by the Mini App framework, clearing the Storage will result in changes |  |  |  |  |  |
|  | deviceType | The device type. Such as `phone`, `pad`, `pc`, `unknow` | [see details](#tips) | `phone`, `pad`, `pc`, `unknow` | `phone`, `pad`, `pc` |  | Mini App 3.4.10+ |
|  | deviceBrand | The device brand. For example: `apple`, `huawei` |  | Not supported |  |  | Mini App 3.4.10+ |
|  | deviceModel | Device model |  | Some devices cannot be obtained |  |  | Mini App 3.4.10+ |
|  | deviceModel | Device model |  | Some devices cannot be obtained |  |  | Mini App 3.4.10+ |
|  | deviceOrientation | Device Orientation | `Portrait portrait`, `Landscape landscape` | `Portrait portrait`, `Landscape landscape` | `Portrait portrait`, `Landscape landscape`. Only WeChat and Baidu applet support |  | Mini App 3.4.13+ |
|  | devicePixelRatio | Device pixel ratio |  |  |  |  | Mini App 3.4.13+ |
| os | osName | System Name | ios, android | ios, android, windows, macos, linux | ios, android, windows, macos |  | Mini App 3.4.10+ |
|  | osVersion | Operating system version. Such as ios version, andriod version |  |  |  |  | Mini App 3.4.10+ |
|  | osLanguage | OS language [see details](#tips) | Android only supports primary language + region: `zh-CN Chinese Simplified`, iOS supports primary language + secondary language + region `zh-Hans-CN Chinese Simplified` | Same as browser language | Not supported |  | Mini App 3.4.10+ |
|  | osTheme | OS Theme | light, dark. The iOS platform can get the system theme only when the app theme is set to follow the system | Does not support | Does not support |  | Mini App 3.4.10+ |
|  | osAndroidAPILevel | The version of the Android system API library. For details, please refer to [Android Official Documentation](https://developer.android.google.cn/guide/topics/manifest/uses-sdk-element?hl=en#ApiLevels) | `Only supported by Android` | Not supported | Not supported |  | Mini App 3.4.10+ |
| rom | romName | rom name | Some Android models cannot get the value, [see details](#romname). iOS Not Supported | Not Supported | Not Supported |  | Mini App 3.4.13+ |
|  | romVersion | rom version | Some Android models cannot get the value, [see details](#romname). iOS Not Supported | Not Supported | Not Supported |  | Mini App 3.4.13+ |
| browser | browserName | Browser name or App webview name | chrome(android), wkwebview(ios), x5webview(app packaging x5 engine) | chrome, edge, safari, firefox | Not supported |  | Mini App 3.4.10 + |
|  | browserVersion | Browser version, webview version |  |  | Not supported |  | Mini App 3.4.10+ |
| host | hostName | The name of the applet host or the integrated host of uniMPSDK, such as: `WeChat`, `FeiShu` | Only supported by UniMPSDK | Not supported | [For details](#hostname) | WeChat applet can only run on real machine value | Mini App 3.4.10+ |
|  | hostVersion | Host version. Such as: SuperApp version number | only supported by UniMPSDK | not supported | mini program host version |  | Mini App 3.4.10+ |
|  | hostLanguage | Host Language | Supported by UniMPSDK only | Not Supported | Mini Program Host Language |  | Mini App 3.4.10+ |
|  | hostTheme | HostTheme | `light`, `dark`. Only supported by UniMPSDK | Not supported | `light`, `dark`. The premise is that the WeChat applet is globally configured with "darkmode": true to obtain |  | Mini App 3.4.10+ |
|  | hostFontSizeSetting | User font size setting. The setting in "I-Settings-General-Font Size" shall prevail, unit: px | Not supported | Not supported | WeChat applet, Alipay applet, Baidu applet, QQ applet, byte applet (2.53. 0+) |  | Mini App 3.4.13+ |
|  | hostPackageName | Applet host package name | Supported only by UniMPSDK | Not supported | Not supported |  | Mini App 3.4.10+ |
|  | hostSDKVersion | uni applet SDK version, applet client base library version | only supported by UniMPSDK | not supported |  |  | Mini App 3.4.13+ |
| Mini App framework | uniPlatform | Mini App runs on the same platform as the conditional compilation platform. [See details](#uniplatform) | app | `web` or `h5` | various small programs, such as `mp-weixin` |  | Mini App 3.4.10+ |
|  | uniCompileVersion | uni compiler version number. [See details](#uniplatform) | `3.4.10`, `3.2.9`, etc. | `3.4.10`, `3.2.9`, etc. | `3.4.10`, `3.2.9`, etc. |  | uni -app 3.4.10+ |
|  | uniRuntimeVersion | uni runtime version. [See details](#uniplatform) | `3.4.10`, `3.2.9`, etc. | `3.4.10`, `3.2.9`, etc. | `3.4.10`, `3.2.9`, etc. |  | uni -app 3.4.10+ |
| app | appId | The application appid in the `manifest` is the appid. |  |  |  |  | Mini App 3.4.10+ |
|  | appName | The application name in `manifest` |  |  |  | conflicts with the field of `ByteDance applet`, the original field of `ByteDance applet` is consistent with `hostName` | Mini App 3.4.10+ |
|  | appVersion | The name of the app version in the `manifest`. |  |  |  |  | Mini App 3.4.10+ |
|  | appVersionCode | The app version name in the `manifest`. |  |  |  |  | Mini App 3.4.10+ |
|  | appWgtVersion | The version name of the app resource (wgt). |  |  |  |  | Mini App 3.4.15+ |
|  | appLanguage | Language for app settings | `en`, `zh-Hans`, `zh-Hant`, `fr`, `es` | `en`, `zh-Hans`, `zh-Hant`, `fr`, `es` | `en`, `zh-Hans`, `zh-Hant`, `fr`, `es` |  | Mini App 3.4.13+ |
| Other | ua | userAgent ID |  |  | Not supported |  | Mini App 3.4.10+ |
|  | screenWidth | Screen width |  |  |  |  |  |
|  | screenHeight | Screen Height |  |  |  |  |  |
|  | windowWidth | Available window width |  |  |  |  |  |
|  | windowHeight | Available window height |  |  |  |  |  |
|  | windowTop | The top position of the available window |  |  |  |  |  |
|  | windowBottom | The bottom position of the window can be used |  |  |  |  |  |
|  | statusBarHeight | The height of the mobile phone status bar |  |  |  |  |  |
|  | safeArea | The safe area in the positive direction of the vertical screen. Since this property is difficult to understand and use, it is more recommended to use the safeAreaInsets property. [See details](#safearea) |  |  | WeChat, Baidu (developer tools are not supported for the time being, but valid for real devices), ByteDance, Feishu, Kuaishou Mini Program, Huawei Quick App |  |  |
|  | safeAreaInsets | Inset positions in the safe area in the positive direction of vertical screen. It has the same purpose as the safeArea defined by the applet, but the specification refers to [safeAreaInsets](https://developer.apple.com/documentation/uikit/uiview/2891103-safeareainssets) of the iOS platform for better understanding and use. [See details](#safearea) |  |  | WeChat, Baidu (developer tools are not supported for now, but valid on real devices), ByteDance, Feishu, Kuaishou Mini Program, Huawei Quick App |  | Mini App 2.5.3+ |

####  Deprecated return parameter, reserved for backward compatibility only

| Parameter | Instruction |
| --- | --- |
| pixelRatio | Device pixel ratio |  |
| brand | Equipment brand. After Mini App 3.4.10+, this field is all lowercase, and compatibility processing may be required | App, WeChat applet, Baidu applet, ByteDance applet, Feishu applet, QQ applet |
| model | Device Model | Full Platform Support. Some devices on the web side cannot obtain the specific model |
| system | Name and version of operating system, such as Android 10 |  |
| language | App settings language |  |
| version | Engine version number | Not supported by Web |
| platform | Client platform, the value range is: `ios`, `android`, `mac（3.1.10+）`, `windows（3.1.10+）`, `linux（3.1.10+）` |  |
| SDKVersion | Client base library version | Alipay applet and Web are not supported |
| swanNativeVersion | Host platform version number | Baidu applet |
| app | Currently running client | Alipay applet |
| AppPlatform | App Platform | QQ Mini Program |
| fontSizeSetting | User font size setting. The setting in "I-Settings-General-Font Size" shall prevail, unit: px | WeChat applet, Alipay applet, Baidu applet, QQ applet, byte applet (2.53.0+) |

####  uniPlatform Return value description

| value | valid condition |
| --- | --- |
| app | App |
| web | Web |

`uniCompileVersion` compiler version and `uniRuntimeVersion` runtime version, normally should be the same value, that is, the version of Mini App.

####  romName Return value description

| value | explanation |
| --- | --- |
| MIUI | Xiaomi |
| EMUI | Huawei |
| HarmonyOS | Huawei Hongmeng |
| ColorOS | oppo |
| Funtouch OS | vivo |
| FLymeOS | Meizu |
| SmartisanOS | Hammer |

Note: The version number rules of different roms are different, for example, the version number of `MIUI` is `V130`, while the version number of `HarmonyOS` is `2.0.0`

####  safeArea Return value description

| parameter | type | description |
| --- | --- | --- |
| left | Number | Abscissa of upper left corner in safety area |
| right | Number | Abscissa of lower right corner in safety area |
| top | Number | Ordinate of upper left corner in safety area |
| bottom | Number | Ordinate of lower right corner in safety area |
| width | Number | Width of safe area, in logical pixel |
| height | Number | Height of safe area, in logical pixel |

**Sstructure of safeAreaInsets**

| parameter | type | description |
| --- | --- | --- |
| left | Number | Insert position of left side in safety area |
| right | Number | Insert position of right side in safety area |
| top | Number | Insert location at the top of the safety zone |
| bottom | Number | Insert position of bottom side in safety area |

####  language Return value description

The international specification of language is the `BCP47 specification`, which is divided into three sections, main language-sub-language-region. For example `zh-Hans-CN`, means Chinese-Simplified-Mainland China

-   app-ios, if not omitted, returns `zh-Hans-CN`
-   app-android, web, WeChat applet, omit secondary language, return `zh-CN`
-   Mini App framework and multi-language applications, as well as Alipay applet, use `zh-Hans` to represent Simplified Chinese

Therefore, after obtaining the language, you cannot directly compare strings, and you need to compare segments. There is also a library dedicated to `BCP47 language specification` comparison on npm.

####  deviceId return value description

The Web, and iOS are platforms with stricter privacy protections for users, and it is difficult to obtain an effective unique device tag on these platforms.

Android has also improved user privacy protections. On very old mobile phones, you can obtain imei unlimitedly. On second-old mobile phones, you need a pop-up box to ask the user to authorize when obtaining private information such as imei. New Android phones (above Android 10) are completely unable to obtain imei.

Therefore, most of the marking devices can only be marked by locally storing a random number.

deviceId, on the `app-android` platform, it will use imei and mac according to the priority (only if the user has authorized, if it is found that authorization is required or unauthorized, this step will be skipped), if it is not obtained, it will be randomly generated 's identity. Other platforms simply use randomly generated logos.

When using locally stored random numbers, the following conditions will cause the deviceId to become invalid:

-   Uninstall App
-   Reset App data on Android
-   Browser clear cache or turn on privacy mode,

####  deviceModel return value description

The Mini App version 3.5.1+ standardizes the return value of deviceModel, for example, the return value of `iPhone11ProMax` is returned before, and the return value of the new version is `iPhone 11 Pro Max`, each device model \[reference specification\](https://www.theiphonewiki.com/ wiki/Models) in the value corresponding to Generation

Note: The new model will display Unknown for a while, and the official will adapt it as soon as possible.

####  Other Notes

-   `deviceType`：
    -   `app-ios` only supports `phone`, `pad`.
        
    -   `app-android` supports `phone`, `pad`, `tv`, `car`, `watch`, `vr`, `appliance`, `undefined`, `unknown`, more detailed explanation about each type Refer to [Android official documentation](https://developer.android.com/guide/) .
        
    -   Among them, the judgment of the `pad` type under the `app-android` platform is not necessarily accurate on non-Google official devices such as domestic pads. If necessary, developers can judge by themselves according to the model or screen size. The java code for judging `pad` in the Mini App framework source code is as follows, for reference:
        
        ```
        public static boolean isTablet(Context context) {
        	return (context.getResources().getConfiguration().screenLayout & Configuration.SCREENLAYOUT_SIZE_MASK) >= Configuration.SCREENLAYOUT_SIZE_LARGE;
        }
        ```
        
-   `osTheme`: `app-ios` can get the system theme only when the app theme is set to follow the system. Applets have similar restrictions.
-   Screen height = native NavigationBar height (including status bar height) + available window height + native TabBar height
-   windowHeight does not include the heights of NavigationBar and TabBar
-   On the web side, windowTop is equal to the height of the NavigationBar, and windowBottom is equal to the height of the TabBar
-   For App, windowTop is equal to the height of NavigationBar in transparent state and windowBottom is equal to the height of TabBar in transparent state
-   Highly related information should be obtained in onReady. Too early to get it.

####  Example

Example of calling code

```
uni.getSystemInfo({
	success: function (res) {
		console.log(res.appName)
	}
});
```

> Anything marked `-` is undefined, other values are the same as listed

| Field Name | App-Android | App-iOS | h5 |
| --- | --- | --- | --- |
| appId | \_\_UNI\_\_8BB4001 | \_\_UNI\_\_8BB4001 | \_\_UNI\_\_8BB4001 | \_\_UNI\_\_8BB4001 | \_\_UNI\_\_8BB4001 | \_\_UNI\_\_8BB4001 | \_\_UNI\_\_8BB4001 | \_\_UNI\_\_8BB4001 | \_\_UNI\_\_8BB4001 |
| appName | test | test | test | test | test | test | test | test | test |
| appVersion | 1.0.0 | 1.0.0 | 1.0.0 | 1.0.0 | 1.0.0 | 1.0.0 | 1.0.0 | 1.0.0 | 1.0.0 |
| appVersionCode | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 |
| appLanguage | zh-Hans | zh-Hans | zh-Hans | zh-Hans | zh-Hans | zh-Hans | zh-Hans | zh-Hans | zh-Hans |
| browserName | chrome | wkwebview | safari | chrome | wkwebview | \- | \- | \- | \- |
| browserVersion | 96.0.4664.104 | 13.4.13 | 13.0.3 | 88.0.4324.93 | 15.4 | \- | \- | \- | \- |
| deviceId | d3db0944da20f333 | F791564F-853B-47B6-8CB8-27FF59315059 | 16518284854447835016 | c7eafa7ed8774c0d | F791564F-853B-47B6-8CB8-27FF59315059 | 1652178285720384773 | 16536215804846585135 | 1653359639811213582 | 16538995501084056633 |
| deviceBrand | xiaomi | apple | \- | huawei | apple | iphone | iphone | iphone | apple |
| deviceModel | Mi10Pro | iPhone13ProMax | iPhone | MXW-AN00 | iPhoneSimulator | iPhone6/7/8Plus | iPhone14,3 | iPhone6/7/8 | iPhone6 |
| deviceType | phone | phone | phone | phone | phone | phone | phone | phone | phone |
| deviceOrientation | portrait | portrait | portrait | portrait | portrait | portrait | \- | portrait | \- |
| devicePixelRatio | 2.5687501430511475 | 3 | 2 | 3 | 3 | 3 | 3 | 2 | 2 |
| hostVersion | \- | \- | 13.0.3 | 1.0 | 1.0.0 | 8.0.5 | 10.2.23 | 2.45.0 | 6.6.3 |
| hostLanguage | \- | \- | zh-CN | zh-CN | zh-Hans-CN | zh-CN | zh-CN | zh-CN |
| hostTheme | \- | \- | \- | light | light | \- | \- | \- | \- |
| hostPackageName | \- | \- | \- | com.example.mplauncherv3 |  | \- | \- | \- | \- |
| hostSDKVersion | \- | \- | \- | 3.4.13 | 3.4.13 | 2.24.2 | 2.7.6 | 3.450.16 | 2.49.0 |
| osName | android | ios | ios | android | ios | ios | ios | ios | ios |
| osVersion | 12 | 15.5 | 13.2.3 | 10 | 15.4 | 10.0.1 | 15.5 | 15.5 | 10.0.1 |
| osLanguage | zh-CN | zh-Hans-CN | \- | zh-CN | zh-Hans-CN | \- | \- | \- | \- |
| osTheme | light | light | \- | light | light | \- | \- | \- | \- |
| osAndroidAPILevel | 31 | \- | \- | 29 | \- | \- | \- | \- | \- | \- |
| romName | MIUI | \- | \- | HarmonyOS | \- | \- | \- | \- | \- |
| romVersion | V130 | \- | \- | 2.0.0 | \- | \- | \- | \- | \- |
| uniPlatform | app | app | web | app | app | mp-weixin | mp-alipay | mp-baidu | mp-toutiao |
| uniCompileVersion | 3.4.13 | 3.4.13 | 3.4.13 | 3.4.13 | 3.4.13 | 3.4.13 | 3.4.13 | 3.4.13 | 3.4.13 |
| uniRuntimeVersion | 3.4.13 | 3.4.13 | 3.4.13 | 3.4.13 | 3.4.13 | 3.4.13 | 3.4.13 | 3.4.13 | 3.4.13 |

###  uni.getSystemInfoSync()

Synchronous interface to get system information. `Call parameters and return values as above getSystemInfo`.

> The content of device information is large and complex. Developers are welcome to test more environment devices and edit this document to contribute.
