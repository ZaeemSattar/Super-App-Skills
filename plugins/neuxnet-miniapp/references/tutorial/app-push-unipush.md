---
title: "App push unipush — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-push-unipush.html
---
###  Open

-   Log in to [DCloud Developer Center](https://dev.dcloud.net.cn/) , after passing the real-name authentication, you can enter the UniPush web console through the following entry for configuration ![](https://native-res.dcloud.net.cn/images/uniapp/push/unipush-hx-config.png) ![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/unipush-web-config.png)
-   Configure "Android package name", "Android application signature", "iOS Bundle Id" and other information on the UniPush activation interface, and click "Activate"
-   After activation, other message push parameters can be configured
    -   Android platform In order to improve the offline delivery rate of the app, it is recommended to configure the manufacturer push settings
    -   iOS platform The push certificate needs to be configured. You can upload the push certificate in "Configuration" -> "App Configuration" on the "UniPush" page.

For more information, see [UniPush Activation Guide](https://ask.dcloud.net.cn/article/35716)

###  Configuration

![](https://native-res.dcloud.net.cn/images/uniapp/push/unipush-manifest.png)

**Notice**

-   The UniPush module needs to be activated before submitting the cloud package, otherwise an error will be prompted. If UniPush is not activated, do not check this module
-   The UniPush push function needs to be submitted to the cloud before it can take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)
-   For local offline packaging reference [UniPush module configuration on Android platform](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push) , \[UniPush module configuration on iOS platform\](https://nativesupport.dcloud. net.cn/AppDocs/usemodule/iOSModuleConfig/push)

####  FCM configuration

#####  Overview

In the overseas network environment, some networks may be unstable when connecting to the push service provided by UniPush technical support provider. At this point, developers can access the FCM auxiliary channel. When the personal push service is disconnected, messages can be sent through Google's FCM push channel to improve the push arrival rate.

**When using FCM, the mobile phone needs to install Google Mobile Services (GMS), and can connect to Google services normally (domestic network needs to be over the wall)**

To use FCM, you must first activate UniPush:

-   Open UniPush service reference: [https://ask.dcloud.net.cn/article/35716](https://ask.dcloud.net.cn/article/35716)
-   Reference for using UniPush on the App side: [https://ask.dcloud.net.cn/article/35622](https://ask.dcloud.net.cn/article/35622)

#####  Request key information from Google background

Go to [Firebase official website](https://firebase.google.com/) to create a project and obtain the google-services.json file and Server key.

![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/signin.png)

![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/gotoconsole.png)

![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/addproject.png)

![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/createproject1.png)

![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/createproject2.png)

![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/createproject3.png)

![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/android.png)

![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/regapp.png)

After registering the Android application, download the configuration file "google-services.json", **You need to use the google-services.json file after saving** ![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/download.png)

The operation in this step has been processed by the cloud packager, ignore the prompt information, continue to click "Next" to enter the next step ![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/continuetoconsole.png)

![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/settings.png)

Switch to the "Cloud Messaging" item, get the "Server key", **You need to use it after saving the Server key**

![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_get_server_key.png)

Jump to the Api management page to start `Cloud Messaging API`

![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_open_old_api.png)

After starting the `Cloud Messaging API`, you can get the `Server key`

![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_server_key.png)

#####  UniPush background configuration FCM parameters

To configure FCM, you need to activate UniPush first. If the application has not activated UniPush, please activate it first. ![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/hx_unipush.png)

\[attach\]94813\[/attach\]

![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/hx_package.png)

If you have completed the code development of uniPush, you only need to complete the above configuration and packaging without modifying the code.

If you have not developed push code, please refer to using UniPush on App: [https://ask.dcloud.net.cn/article/35622](https://ask.dcloud.net.cn/article/35622)

#####  Local offline packaging

Android platform offline sdk integration UniPush supports FCM for reference: \[Push (message push)\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push?id=%e8%b0%b7%e6% ad%8c%e6%8e%a8%e9%80%81)

#####  Precautions

\*\* FCM offline messages only support GOOGLE push, not the overseas version released by domestic equipment manufacturers\*\*

####  Android platform push icon configuration

UniPush and personal push push modules support setting custom push icons, including push icons and push small icons (small)

-   push icon Use the app icon by default
-   Push small icons (small) By default, the small icon provided by Tweet is used

The display effect is as shown in the following figure:

![](https://native-res.dcloud.net.cn/images/uniapp/push/custom_push_icon/custom_push_icon_small_instructions.png)

#####  Source view configuration

Open the manifest.json file of the project, switch to the "source view", and manually set the push icon. Configure the push icon under the "app-plus" -> "distribute" -> "sdkConfigs" -> "push" -> "unipush" -> "icons" node

```
{
    "unipush": {                    //可选，JSON对象，使用UniPush SDK配置，无需手动配置参数，云端打包自动获取配置参数
        "icons": {                          //可选，JSON对象，推送图标配置
            "push": {                               //可选，JSON对象，Push图标配置
                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送图标路径，分辨率要求48x48
                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送图标路径，分辨率要求48x48
                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送图标路径，分辨率要求72x72
                "xdpi": "",                                 //可选，字符串类型，720P高分屏设备推送图标路径，分辨率要求96x96
                "xxdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送图标路径，分辨率要求144x144
                "xxxdpi": "",                               //可选，字符串类型，4K屏设备推送图标路径，分辨率要求192x192
            },
            "small": {                               //可选，JSON对象，Push小图标配置
                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送小图标路径，分辨率要求18x18
                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送小图标路径，分辨率要求24x24
                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送小图标路径，分辨率要求36x36
                "xdpi": "",                                 //可选，字符串类型，720P高分屏设备推送小图标路径，分辨率要求48x48
                "xxdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送小图标路径，分辨率要求72x72
                "xxxdpi": "",                               //可选，字符串类型，4K屏设备推送小图标路径，分辨率要求96x96
            }
        }
    }
}
```

也可在HBuilder X（3.5.1+ 版本） 中可视化配置 Configuration can also be visualized in HBuilder X (version 3.5.1+)

![](https://native-res.dcloud.net.cn/images/uniapp/push/custom_push_icon/unipush_icons_hx_config.png)

**注意事项**  
**Precautions**

-   5+ App项目在manifest.json文件的 "plus" -> "distribute" -> "plugins" -> "push" -> "unipush" -> "icons"节点下配置推送图标
-   5+ App projects configure push icons under the "plus" -> "distribute" -> "plugins" -> "push" -> "unipush" -> "icons" node of the manifest.json file
-   “个推推送”模块已不再维护，推荐使用UniPush模块，如需继续使用“个推推送”模块，可将“unipush”节点名称修改为“igexin”进行配置，完整配置信息可参考[App完整manifest.json](../collocation/manifest-app.md)
-   The "UniPush" module is no longer maintained. It is recommended to use the UniPush module. If you want to continue to use the "Push" module, you can change the name of the "unipush" node to "igexin" for configuration. For complete configuration information, please refer to [App full manifest.json](../collocation/manifest-app.md)

#####  推送小图标(small)要求

#####  Push small icon (small) request

设计规范需要注意： Design specifications need to pay attention to:

1.  必须是带 Alpha 透明通道的 PNG 图片。
2.  Must be a PNG image with alpha transparency channel.
3.  背景必须是透明的。 （如果非透明就会显示为白色方块）
4.  The background must be transparent. (If it is not transparent, it will be displayed as a white square)

![](http://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/push/unipsuh_small_icon_style.png.png)

###  使用UniPush

###  Using UniPush

-   **Please refer to [UniPush](https://uniapp.dcloud.io/unipush)**
-   **Please refer to [UniPush User Guide](https://ask.dcloud.net.cn/article/35622) for detailed usage tutorials of 5+ App and Wap2App projects.**
