---
title: "Configure to use UIWebview module"
source_url: https://miniapp.neuxnet.com/tutorial/app-ios-uiwebview.html
---
iOS has two webviews, UIWebview and WKWebview. Since iOS13, Apple has listed UIWebview as an outdated API.

\*\*App Store will no longer accept new apps using UIWebView from April 2020, and app updates using UIWebView will no longer be accepted from December 2020. \*\*

Since HBuilderX 2.2.5, the default is WKWebview on iOS. Unless the developer manually specifies to use UIWebview in the code, the actual rendered pages are all rendered in WKWebview. However, although the actual page is rendered by WKWebview, there is still an optional reference to UIWebview in the source code of the underlying engine of the App. The Appstore's machine review found that the binary code included a reference to UIWebview, which caused an alert. From HBuilderX 2.6.6, uiWebview is removed from the base engine and becomes an optional module (selected in the manifest). There was no hint from the inspection.

For the old HBuilder and HBuilderX versions before 2.2.5, the App-side strategy is as follows:

-   5+ APP (including wap2app) Default is UIWebview.
-   uni-app The web-view component in the vue page uses UIWebview by default, and the web-view component in the nvue page uses WKWebview.

\*\*HBuilderX 2.2.5+ version has adjusted the default kernel of all webviews on iOS from UIWebview to WKWebview. \*\*

**HBuilderX 2.6.6+ version has removed all UIWebview code in iOS from the basic engine, and is a separate UIWebview module. If you continue to use UIWebview, you need to check the use of UIWebview module in the manifest**

###  Configure to use UIWebview module

![](https://native-res.dcloud.net.cn/images/uniapp/ios/uiwebview-manifest.png)

**hint**

> Use UIWebview module to submit cloud package to take effect, please use \[custom base\] when running and debugging on real machine (http://ask.dcloud.net.cn/article/35115) App fails App Store review after using UIWebview module For local offline packaging, please refer to: [Configure UIWebview Module](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/uiwebview)

###  Using UIWebview

####  5+App (including wap2app) how to switch iOS to use UIWebview or WKWebview kernel by default?

Before HBuilderX 2.2.5, the default webview on iOS is UIWebview, and HBuilderX 2.2.5 and later versions default to WKWebview. If you want to modify the default value, you can configure it in manifest.json. In the manifest.json file source view, set the value of plus -> kernel -> ios to "WKWebview" or "UIWebview":

```
	"plus": {
		"kernel": {
			"ios": "UIWebview"    //或者 "WKWebview"
		},
		// ...
	}
```

####  uni-app How to configure web-view components to use UIWebview or WKWebview core by default?

Before HBuilderX 2.2.5, the web-view component in the vue page on iOS or the Webview window created by calling 5+ API defaults to UIWebview, and HBuilderX 2.2.5 and later versions default to WKWebview. If you want to modify the default value, you can configure it in manifest.json. In the manifest.json file source view, set the value of app-plus -> kernel -> ios to "WKWebview" or "UIWebview":

```
	"app-plus": {
		"kernel": {
			"ios": "UIWebview"    //或者 "WKWebview"
		},
		// ...
	}
```

**The web-view component in the nvue page is forced to use WKWebview, which is not configurable**

####  How to specify to use UIWebview or WKWebview kernel when creating Webview window using 5+ API (plus.webview.create)?

When creating a Webvie window, you can specify the kernel through the kernel property, as follows:

```
// Specify the kernel of the Webview through the kernel property
var w = plus.webview.create('https://xxx.xxx.xxx', 'id', {
    'kernel': 'UIWebview'       //或者'WKWebview'
});
```

For more specifications, refer to \[WebviewStyles\] of the 5+ API (https://www.html5plus.org/doc/zh\_cn/webview.html#plus.webview.WebviewStyles)

###  Impact of using WKWebview

**Replacing UIWebview with WKWebview will affect the following functionality:**

-   Stricter cross-domain access restrictions WKWebview believes that local html access to the network and local files through js is considered cross-domain access (in this case UIWebview is not cross-domain), when accessing network resources across domains, use 5+ API (plus.net) to replace traditional ajax writing methods such as xmlhttp; ajax You cannot access local files either. You need to use 5+ API (plus.io) to read local files. The latter has a separate article for reference: \[https://ask.dcloud.net.cn/article/36858\](https: //ask.dcloud.net.cn/article/36858). The use of third-party libraries such as exif.js may involve cross-directory local image download requests. Plus, there are special APIs for image orientation acquisition and rotation, and there is no need to use js libraries.
-   Since WKWebview does not support cross-domain access, standard xhr or jq ajax cannot cross-domain. In the mui framework, if the network request is judged as cross-domain access, the 5+ API (plus.net) will be automatically called. If it is called before mui.plusReady is triggered, it will report "Script error.filename:lineno:0" because the 5+ API is not ready. Error, at this time, it must be ensured that the network request of mui is called after mui.plusReady, or the plus.net writing method is directly used.
-   The canvas under WKWebview also has cross-domain issues, such as canvas.toDataURL. If canvas encounters cross-origin problems using network images, the server needs to set the response header of the image: Access-Control-Allow-Origin If canvas uses local images and encounters cross-domain problems, you can use the plus interface to convert the images to base64 and use them. Related plugins: https://ext.dcloud.net.cn/plugin?id=123
-   When the memory of the iOS phone is insufficient, if it is an application of UIWebview, the system will recycle the app as a whole. The WKWebview is a single page recycling, the disadvantage of this is that when the memory is insufficient, a single page white screen will be displayed. For details, see [https://ask.dcloud.net.cn/article/35913](https://ask.dcloud.net.cn/article/35913) . uni-app does not involve this problem. If it is 5+App, method 1 is to switch back to UIWebview in the manifest. For the time being, UIWebview can still be put on the shelves, but you will receive a warning. In mode 2, monitor the white screen event and restore the page by itself: [https://ask.dcloud.net.cn/article/36540](https://ask.dcloud.net.cn/article/36540)
-   WKWebview on iOS8, 9 does not support websql, iOS10 restores support
-   does not support plus.navigator.setCookie
-   The overrideresource method of webview is not supported
-   The first rendering speed of wk is slightly slower than uiwebview;
-   Because the API overrideresource for resource interception can no longer be used, in 5+ APP (including wap2app) projects, the js native obfuscation function during cloud packaging will be invalid. If you want to use js native obfuscation, you must use UIWebview. uni-app has a separate native js encryption scheme, because uni-app's js does not run in webview, but in independent jscore, so it is not affected.

But the advantages of WKWebview are: save memory; lazy-loaded pictures can also be rendered in real time when scrolling, while uiwebview can only display lazy-loaded pictures after scrolling stops.

If you use both ui and wk webviews in an app at the same time, note that cookies, localstorage, and sessions between the two webviews are not shared, but plus.storage is shared.

###  Notes on the use of Webview in uni-app

The js of uni-app runs in independent jscore, not in Webview, so there is no cross-domain problem. The rendering layer of uni-app is mandatory wkwebview under iOS. If you write renderjs code and execute js in the rendering layer, you will also encounter cross-domain problems. At this time, try to put the operations related to cross-domain into the ordinary js logic layer operation. In addition to the rendering layer, there is another issue with web-view components to be aware of:

-   The web-view component of the vue page of uni-app is WKWebview since HBuilderX 2.2.5+, and the default is UIWebview in previous versions
-   js logic layer of non-custom component mode of uni-app, UIWebview before HBuilderX 2.2.5. After upgrading to HBuilderX2.3+, it may cause network cross-domain problems, `fail{"statusCode":0,"errMsg":"request:fail abort"}`. However, non-custom components have been discontinued from November 1, 2019.

If you need to adjust the rendering kernel settings of the web-view component under uni-app, set the value of app-plus -> kernel -> ios in the manifest.json source view to UIWebview.

####  uni-app's nvue page problem

The nvue page is not rendered using webview, but the web-view component in it is described below.

-   nvue's weex component mode The web-view component in weex mode is implemented by weex itself, and it still uses UIWebview. The official will track the upgrade of weex.
-   nvue's uni-app component mode The web-view component uses WKWebview. Cannot be modified to uiWebview.

###  The use of UIWebview in the third-party SDK

At present, UIWebview is still used in the following SDK, whether it is 5+App or uni-app.

-   DCloud opening advertisement Before HBuilderX version 2.2.5, the built-in web page opened by clicking on the ad was still loaded using UIWebview HBuilderX 2.2.5+ version has been adjusted to WKWebview.
-   Alipay Before HBuilderX version 2.6.10, Alipay SDK was version 15.5.7, including UIWebview HBuilderX 2.6.10+ version has updated Alipay SDK to 15.7.4, without using UIWebview
-   WeChat login, sharing, payment HBuilderX 2.6.6+ version has updated WeChat SDK to version 1.8.6.2, without using UIWebview. Note that after the SDK for WeChat login payment is upgraded, a universal link will be mandatory. See also the documentation: [https://ask.dcloud.net.cn/article/36445](https://ask.dcloud.net.cn/article/36445)
-   Weibo login and share Before HBuilderX version 2.6.10, the Weibo SDK was version 3.2.5, including UIWebview HBuilderX 2.6.10+ version has updated Weibo SDK to version 3.2.7, without using UIWebview
-   QQ login and share HBuilderX 2.3.4+ version has updated QQSDK to 3.3.6, without using UIWebview.
-   Xiaomi login Xiaomi official SDK uses UIWebview, if you submit appstore, it is recommended not to use Xiaomi to log in

\*\*5+App developers recommend to directly upgrade to uni-app, once and for all, there will be no problems such as cross-domain, white screen and inability to encrypt. \*\*

###  Precautions

If you are not configured to use the "iOS UIWebview" module and submit to the App Store, you are still prompted to include UIWebview, then please check whether your app uses other native plugins. Generally, it is either a configuration error or a third-party native plug-in. ,
