---
title: "Startup interface options"
source_url: https://miniapp.neuxnet.com/tutorial/app-splashscreen.html
---
When the app starts, it takes a certain amount of time for the system to load the application and render the home page. In order to avoid the user's waiting, the mobile operating system provides a special startup interface design, allowing users to see a simple interface first, and then officially enter the application home page after the application is loaded.

This interface is called the startup interface, also known as splash or lauch screen.

###  Startup interface options

####  Wait until the home page is rendered before closing the Splash image

After entering the application, the startup interface will automatically close at the right time and display the application home page, which can be configured in the manifest.json file.

![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/setting-closesplash-onrender.png)

-   Check "Wait for the rendering of the home page before closing the Splash image", indicating that you need to wait for the rendering of the home page to complete before closing the startup interface
-   If you don't check "Wait for the home page to be rendered before closing the Splash image", it means that the startup interface will be closed after the home page is loaded. At this time, the home page may not be rendered, and a white screen may flash on some devices, which is not recommended.

The source view supports the following configurations: |property|type|default value|description|minimum version| |:-|:-|:-|:-|:-| |alwaysShowBeforeRender|Boolean|true|Whether to wait for the home page to render before closing the startup interface|1.6.0| |autoclose|Boolean|true|Whether to automatically close the startup interface, it only takes effect when alwaysShowBeforeRender is set to false, if you need to \[manually close\](https://www.html5plus.org/doc/zh\_cn/navigator.html#plus.navigator .closeSplashscreen) to start the interface, both alwaysShowBeforeRender and autoclose should be set to false. || |waiting|Boolean|true|Whether to display waiting snowflakes in the startup interface||

The combination of alwaysShowBeforeRender and autoclose properties can configure the following three strategies for closing the splash interface:

-   Automatically close the startup interface after the home page is rendered After the app starts, it automatically detects the rendering status of the home page, and automatically closes the startup interface when it detects that the rendering of the home page is complete.

```
"app-plus" : {
    "splashscreen" : {
        "alwaysShowBeforeRender" : true
    }
}
```

-   Automatically close the startup interface after the home page is loaded After the app starts, the rendering state of the home page is not detected, and the startup interface is automatically closed after the home page is loaded.

```
"app-plus" : {
    "splashscreen" : {
        "alwaysShowBeforeRender" : false
    }
}
```

-   Code control to close the startup interface After the app starts, the startup interface will not be closed automatically. You need to call [plus.navigator.closeSplashscreen](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.closeSplashscreen) in the code to close the startup interface .

```
"app-plus" : {
    "splashscreen" : {
        "alwaysShowBeforeRender" : false,
        "autoclose" : false,
    }
}
```

###  Startup interface settings

`Startup interface` was originally a static png image. With the diversification of mobile device screens, in order to make the interface not deformed when each screen starts, developers need to make different images for more and more screen sizes. This brings many problems, including complex production and increased size of the app package.

The following `start interface` methods are provided in HBuilderX:

| Startup Screen | Platform Support | Features |
| --- | --- | --- |
| Universal launch interface | Both Android and iOS are supported. Among them, it is implemented through storyboard on iOS | Simple, weak customization, adaptable to different screens |
| Custom launch image | Android support, also supports the use of [.9.png image](#id=9png); iOS can be packaged, but from June 30, 2020, it cannot be submitted to the Appstore | In order to adapt to different screen sizes , need to do a lot of pictures |
| [Custom storyboard startup interface](#storyboard) | Only supported by iOS, HBuilderX2.8+ version | Can adapt to different screens |

> Tip: The startup interface settings need to be submitted to the cloud package to take effect

####  Generic startup interface

`Universal startup interface` is a simple `startup interface` that can adapt to different screens. It uses the logo and name of the app as elements, and automatically generates a `startup interface` that adapts to different screen sizes and different OS requirements.

The `universal startup interface` has the lowest threshold, and only requires the developer to configure the logo and name for the app in the manifest. And it complies with the go-live specifications of any app store. It's implemented on iOS through storyboards.

> Tip `Universal startup interface` is designed for the convenience of developers. It does not have strong flexibility. If developers have strong customization requirements, please use [.9.png format to customize the startup image for Android platform.](#id=9png) 、For iOS platform, please use [custom storyboard startup interface](#storyboard)

#####  Android platform universal startup interface

![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/setting-android.png)

![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/common-android.png)

#####  iOS platform universal launch interface

![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/setting-ios.png)

![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/common-ios.png)

If the app is turned on to adapt to dark mode/night mode/dark mode, the background color of the startup interface will automatically use dark color, and the text color will automatically use white.

####  Custom launch image

#####  Android platform custom launch map

![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/setting-android-default.png)

#####  Android platform uses .9.png startup image

At present, HBuilderX only defines several standard resolution startup image configurations. In fact, there are many mobile phones with different resolutions. As a result, the startup image will be stretched or compressed to cause deformation in some uncommon devices. In order to solve this problem, the Android platform There is a picture format ".9.png" that can adapt to various sizes. This is a special picture format that can specify a specific area to stretch without distortion. **Advantages of using .9.png**

1.  Avoid scaling distortion on non-standard resolution phones
2.  You can configure only 1 or more pictures to adapt to more resolutions and reduce the size of the apk (it is recommended to configure at least 1080P high-resolution screen startup pictures)

**.9.The difference between png image and normal png image**

1.  The difference between the .9.png picture and the general picture is that the .9.png picture has four black borders, while the general picture does not. These four black borders are used to stretch and specify the display position.
2.  After using the .9.png image, the entire image should wrap the content you want to display. If it is not used, the entire image will be stretched

**Make .9.png image**

1.  In the tools directory of the Android sdk directory, there is a file called draw9patch.bat, which can be used by double-clicking to open it (the file no longer exists in the latest android SDK, if the computer does not have android studio installed, you can download the attached tool to edit. 9.png image)
2.  Use android studio, because android studio has integrated the .9.png production tool, just select the png file that needs to be generated, then right-click and click the create 9-patch file option

For detailed production steps, please refer to the link: [The meaning and production tutorial of .9 pictures in Android](https://www.jianshu.com/p/3fd048644e3f?tdsourcetag=s_pctim_aiomsg) You can use the online .9.png generation tool: [http://inloop.github.io/shadow4android/](http://inloop.github.io/shadow4android/)

**.9.png configuration use** Open the manifest.json file of the project, check "Custom Launch Image" under "Android Launch Interface Settings" in "App Launch Interface Configuration", and select the desired .9.png in each resolution launch image setting box Picture (please upload the picture size according to the prompt size), save it and submit it to the cloud for packaging.

> The splash images of different sizes are to adapt to mobile phones of different resolutions, so please be sure to upload the splash images of different sizes when submitting the package, and do not upload multiple launch images of the same size

You can refer to the .9 sample project done by the developer in [Plugin Market](https://ext.dcloud.net.cn/search?q=.9)

#####  iOS platform custom launch map

> Tip: From June 30, 2020, the Apple AppStore audit requires that the app cannot use the launch image when launching, and must instead use Storyboard to create the launch interface. If you need to submit the AppStore, please use the [Common Launch Interface](#common) Or [custom storyboard launch interface](#storyboard).

![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/setting-ios-default.png)

####  Custom storyboard startup interface

Storyboard is a simplified layout interface provided by Apple, which describes the interface through xml and cannot be programmed. Although it is impossible to make a very flexible interface, it is no problem to meet the startup interface, such as setting the background color and background image, setting the foreground text, and the position of the image. The advantage of storyboard is that it starts fast. Before the real home page of the app is rendered, a Storyboard-based splash screen can be quickly provided to the user.

#####  Make storyboard file

There are two ways to make storyboards: **1.** **Use the relatively common storyboard template provided by the attachment directly, which can be customized on the basis of this file (Mac and XCode are not required, please check the readme tutorial in the attachment for details)** This storyboard file is suitable for portrait and landscape screens on various iPhone and iPad devices, and supports custom interface elements including:

-   Page background image or background color
-   middle display picture
-   Bottom display text and color Note: each item is optional (for example, only the background image is displayed, only the background image can be provided)

**2.** Make it by yourself using xcode. Xcode provides a visual way to make storyboards, but it depends on Mac computers. For the tutorial of making storyboard in xcode, please search the Internet by yourself, please pay attention to the following precautions.

![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/pkg/splash/storyboard.png)

**Precautions**

-   Do not include directories in the zip archive, directly include .storyboard and .png files
-   There is one and only one .storyboard file
-   The .storyboard file can be generated by xcode, or you can use any text editor to modify its source code, such as right-clicking the .storyboard file and opening it with HBuilderX. It is essentially an xml file.
-   The @2x and @3x in the png file name are pictures of different resolutions, and the system will automatically select them according to the dpi of the device. Please refer to [here](https://www.jianshu.com/p/5b5f47ff87d4)
-   In order to avoid the png file name conflict with the file name built in the app, it is recommended to start with dc\_launchscreen
-   When making a storyboard, **please drag and drop the image resources directly into the project, do not put them in the imageset, and the image naming should ensure a certain uniqueness, please refer to the example in the attachment**
-   When creating a storyboard file in XCode, \*\*page elements must be relative to \*\* `Superview` when adding constraints, otherwise the page will jump or deform when the startup image transitions to the loading page ![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/pkg/splash/xcode.png)

#####  Using storyboard files

![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/setting-storyboard.png)
