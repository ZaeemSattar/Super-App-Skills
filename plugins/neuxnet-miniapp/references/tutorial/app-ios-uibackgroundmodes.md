---
title: "Set background running capability"
source_url: https://miniapp.neuxnet.com/tutorial/app-ios-uibackgroundmodes.html
---
In order to reduce system resource consumption on the iOS platform, the application does not support running in the background by default, and switching to the background will stop running. For example, when the app switches to the background, the music will be paused, and the next time it switches to the foreground, it will continue to play. If the application switches to the background to continue running functions such as playing music, positioning, etc., it needs to configure the ability to support background running.

The following capabilities are supported:

-   Play music in the background, set the value to "audio"
-   Get location information (positioning) in the background, set the value to "location"

###  Set background running capability

**Visual interface configuration** ![](https://native-res.dcloud.net.cn/images/uniapp/others/backgroundmodes-manifest.png)

> Note: "audio" means the ability to play music in the background, and "location" means the ability to locate the background. For more background capabilities, please refer to Apple's official website \[UIBackgroundModes document\](https://developer.apple.com/library/archive/documentation/General/Reference /InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple\_ref/doc/uid/TP40009252-SW22); Multiple background capabilities are split using ","; If the visual interface cannot be edited, please switch to the "source view" to delete the `UIBackgroundModes` node data and re-operate.

**Source view configuration** Open the manifest.json file of the project, switch to the "source view", and configure according to the project type

-   uni-app project Configure the background running capability in the UIBackgroundModes property of the "app-plus"->"distribute"->"ios" node. The example is as follows:

```
  "app-plus": {
    "distribute": {
      "ios": {
        "UIBackgroundModes": "audio,location"
        //...
      },
      //...
    },
    //...
  },
  //...
```

-   5+App/Wap2App项目
-   5+App/Wap2App projects 在 "plus"->"distribute"->"ios" 节点的 UIBackgroundModes 属性配置后台运行能力，示例如下： Configure the background running capability in the UIBackgroundModes property of the "plus"->"distribute"->"ios" node. The example is as follows:

```
  "plus": {
    "distribute": {
      "ios": {
        "UIBackgroundModes": "audio,location"
        //...
      },
      //...
    },
    //...
  },
  //...
```

> Note: For backward compatibility, the `UIBackgroundModes` property value supports a string array when configuring the HBuilderX source view. The value in the above example can also be configured like this \["audio","location"\]

**Submit the App cloud package to take effect after saving**

####  Precautions

-   After configuration, the cloud package must be submitted to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115) The real machine does not support this function, and it needs to be submitted to the App Cloud for packaging to take effect.
-   When the app is switched to the background, it is necessary to avoid calling synchronous 5+ APIs (calling APIs that directly return data), such APIs will not be able to return data synchronously when running in the background
