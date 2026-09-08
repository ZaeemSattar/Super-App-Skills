---
title: "Configure to use X5 kernel"
source_url: https://miniapp.neuxnet.com/tutorial/app-android-x5.html
---
> Tencent TBS x5 kernel only supports Android platform; iOS can only use its own WKWebview/UIWebview

The "Tencent TBS x5 kernel" in the following instructions is shortened to "x5 kernel". Integrated x5 core description:

1.  First, you need to upgrade to HBuilderX 2.5.3 or higher
2.  Configure the manifest.json of the project according to the following instructions, and then submit the cloud package or use [Custom Dock](http://ask.dcloud.net.cn/article/35115) to take effect

Which pages will be rendered by the x5 core after integrating the x5 core?

1.  All webviews created by plus.webview.create
2.  All vue pages in uni-app
3.  The web-view component in uni-app

###  Configure to use X5 kernel

![](https://native-res.dcloud.net.cn/images/uniapp/android/x5-manifest.png)

**hint**

> It will take effect after submitting the cloud package using the X5 kernel module. Please use the \[custom base\] when running and debugging the real machine (http://ask.dcloud.net.cn/article/35115) [CPU type configuration](https://uniapp.dcloud.io/tutorial/app-android-abifilters) does not support "x86", it is recommended to configure only "armeabi-v7a", otherwise the X5 kernel may not be used normally HBuilderX 3.0.7+ version [CPU type configuration](https://uniapp.dcloud.io/tutorial/app-android-abifilters) starts to support "arm64-v8a" For local offline packaging, please refer to: [X5 Webview Configuration](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/x5) For the uni applet SDK, please refer to: [unimp applet integration x5 tutorial](https://nativesupport.dcloud.net.cn/UniMPDocs/UseModule/android/x5)

###  What problems can the X5 kernel solve:

1.  The x5 is adapted to the custom theme font of rom, which is consistent with the native font. There will not be a problem that some fonts of the interface are native fonts and some fonts are webview fonts. Previously, the system webview could not adapt to the font of the rom custom theme on some mobile phones. (Note: Some devices may require a system reboot or do not support custom theme fonts)
2.  The system webview has browser compatibility issues, and the low-end Android webview has many new syntaxes that are not supported. Using x5 you can snap the webview kernel. For 5+App and wap2app, all can be flushed. For uni-app, since uni-app comes with its own js engine, there is no browser compatibility problem at the js and component level itself, only the css of the vue page involves browser compatibility issues. If you want to use new css syntax such as sticky, you can use x5 lashing at this time. If the developer pays more attention and does not use too new syntax, in fact, x5 is useless in this regard at this time
3.  The video implementation of the x5 kernel is stronger than the html video, and supports more video formats. (This can only be used for the built-in video in the html of 5+app and wap2app, and the video in the web-view component of uni-app. The default video component of uni-app itself is native and has nothing to do with x5)
4.  Anti-hijacking of remote web pages is a highlight of the x5 kernel

###  How to verify whether x5 and x5 version number are used

-   For HBuilderX 3.4.14+, use [uni.getSystemInfo](https://uniapp.dcloud.io/api/system/info.html) to see the returned browserName and browserVersion
-   Lower versions of HBuilderX use `plus.navigator.getUserAgent()`

The UserAgent of the x5 kernel is as follows:

```
Mozilla/5.0 (Linux; Android 11; PEXM00 Build/RKQ1.201217.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045738
```

Note that it needs to be tested after packaging, at least a custom base is required.

###  X5 Kernel Notes

1.  Since x5 uses dynamic hot update to load x5 kernel. Review on Google Play is not allowed, so can't submit to Google Play
2.  x5 does not support running on PC emulators, everything is based on real machines
3.  The x5 kernel is not friendly to webview nesting support. Try not to use webview nesting (parent-child pages, etc.) for pages rendered by x5, which are prone to animation stuck and other phenomena
4.  Due to the problem of the x5 loading kernel mechanism, the first time the cloud packaged APK is installed and run, the x5 may not be downloaded. At this time, the page is not rendered by the x5 kernel, but the system webview renders the page. But after the x5 download is complete, kill the process and run it again, the page will be rendered using the x5 kernel
5.  Not all mobile phones have the x5 kernel. When the mobile phone does not have the x5 kernel, the app will download the kernel first after the app is started. Before the x5 is loaded successfully, the system webview is still used to call the webview.
6.  html5 embedded iframe video fixed positioning will cause the application to crash
7.  Some systems (Huawei) will not restart the system after modifying the font. As a result, the x5 page cannot immediately replace the font library and re-render. You need to kill the process and restart the application (back exiting the application is invalid) to reset the font library for page rendering
8.  The APK itself has integrated X5 to be able to upgrade through wgt. If the apk itself does not integrate X5, it cannot support X5 through WGT upgrade. Need to change to APK upgrade!
9.  You can use plus.navigator.getUserAgent to determine whether the UA contains the MQQBrowser keyword to determine whether the current webview is rendered by X5. HX2.6.16+ support
10.  The scroll bar of the x5 kernel renders the page. A scrolling slider is displayed with the length of the page content. You can hold down the scroll slider and drag for fast scrolling. There is a difference with the normal webview scroll bar

###  x5 kernel self-update

The x5 kernel has a self-update mechanism. Therefore, there may be compatibility issues caused by the historical version upgrading the x5 kernel. Integrated students need to pay attention!

###  Adaptation problem

It is currently known that after the TBS45738 version is updated, the input component adjust-position=false of the uniapp vue page will become invalid! Students who use the x5 kernel, please know to adapt as soon as possible, you can change to nvue or not apply the x5 kernel.
