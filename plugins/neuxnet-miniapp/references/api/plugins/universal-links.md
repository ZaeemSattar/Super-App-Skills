---
title: "Background introduction:"
source_url: https://miniapp.neuxnet.com/api/plugins/universal-links.html
---
**One-click to generate iOS Universal Links**

###  Background introduction:

> Universal Link is one of the new features of iOS 9 proposed by Apple at WWDC 2015. This feature is similar to deep linking, and can easily launch your client application (the mobile phone has an installed app) by opening an Https link. Compared with the URLSheme used in the past, this new feature can provide an excellent user experience when implementing seamless web-app links. Please read [Apple official documentation](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1) .

> Due to the security upgrade of Apple's iOS 13 system version, the WeChat SDK 1.8.6 version is required to support the Universal Links method of jumping, so as to conduct legality verification and improve security. For more details, please refer to [WeChat Official Instructions](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)

In the vernacular: In the past, your APP had to open other APPs [through URLScheme](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.launchApplication) . Later, Apple proposed to use Https links to Start, the corresponding app (already installed) on the mobile phone is more convenient to seamlessly connect with the web-app. WeChat responded to this plan. Therefore, the APP developed by everyone, whether it is WeChat login, WeChat payment, or WeChat sharing, etc., will jump to WeChat and then jump back to the scene, you need to provide this link. Otherwise, if your app opens WeChat, WeChat will not be able to open your app.

If the universal link is not configured, the cloud package submission using the new version of HX will fail, and the following error message will be displayed:

```
Error code = -5000
Error message: 
Error: not set parameter 'UniversalLinks' @'oauth-weixin'
```

Configuring Universal Links the traditional way requires:

1.  In the Apple Developer Center: Enable the Associated Domains service
2.  Obtain the relevant parameters and manually create the apple-app-site-association file
3.  Deploy the apple-app-site-association file to your own cloud server and configure the SSL certificate to resolve the domain name
4.  Then manually configure Associated Domains in manifest.json
5.  Paste the universal link to the corresponding permission module
6.  Configure Universal Links on WeChat Open Platform

There are many details that need to be paid attention to, and debugging is difficult and cumbersome, which has troubled a large number of developers.

Now through HBuilderX (version 3.1.9 onwards) cloud packaging, supports automatic generation of apple-app-site-association files, and automatically hosted to: "free" cloud service space with services such as cdn, ssl \[uniCloud front-end webpage\] Hosting\](https://uniapp.dcloud.io/uniCloud/hosting), which automatically completes the relevant configuration in manifest.json. Replaced with automation technology, as shown above the traditional way of frustrating (2-5) 4 steps; just three steps below to get the universal link directly.

###  Step 1: Start the Associated Domains service

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/2eae9f97-2c4a-4dc8-97e8-e665b0c660e1.png)

**After enabling the Associated Domains service, you need to regenerate the profile file and use it when submitting the cloud package**

###  Step 2 Automatically generate Universal Links

HBuilderX (starting from version 3.2.0) Added the settings of the universal link of QQ Internet and Sina Weibo open platform. Taking the WeChat module as an example, QQ and Weibo are similar.

Open the manifest.json file of the project, and in the "(App) SDK Configuration" item under WeChat login (WeChat sharing, WeChat payment), under "iOS Platform Universal Links (Universal Links)", ![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/ea2b1e04-a858-4626-b3fa-bd4ddddd0c3b.jpg)

-   Note that you must first activate "uniCloud (Alibaba Cloud Edition) cloud service space and activate front-end web hosting" [Click here to view the activation tutorial](https://ask.dcloud.net.cn/article/38951) , follow the prompts to complete Just do it.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/53e0141e-d2d4-496a-b0f2-2359005c0c4e.jpg)

-   Note: The default domain name of the universal link is only for testing, and the access frequency is limited to 60 times/min. Please do not use it in officially released projects. For official projects, be sure to bind your own domain name (top-level domain name, second-level domain name is acceptable)
-   How to bind your own domain name: [https://uniapp.dcloud.io/uniCloud/hosting?id=domain](https://uniapp.dcloud.io/uniCloud/hosting?id=domain)

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1e081fdd-27b2-4c0b-8985-7d59756ed313.jpg)

###  Step 3: Configure universal links on third-party open platforms

####  WeChat

Open WeChat [Open Platform](https://open.weixin.qq.com/) , find the app you have applied for under "Mobile Apps" on the "Management Center" page (if you have not applied for an app, please click "Create Mobile App" to create a new one application), click View to open the application details page. ![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20191008/e933f7ef8ff078bf05e28a24efee74bd.png)

####  QQ

Open QQ [Open Platform](https://connect.qq.com/index.html) , find the app you have applied for under "Mobile Apps" on the "Management Center" page (if you have not applied for an app, please click "Create Mobile App" Create a new application), click View to open the application details page. ![](https://img-cdn-aliyun.dcloud.net.cn/client/ulink/QQ.jpeg)

-   Note: QQ open platform only needs to fill in the host when filling in, and the path QQ will be automatically generated, such as one-click generation in HBuilder https://static-fa42aa5f-xxxxxxx-xxxxxxxx.bspapp.com/qq\_conn/ 11111233333/`Only need to fill in`https://static-fa42aa5f-xxxxxxx-xxxxxxxx.bspapp.com/\`\`\`, please refer to \[QQ fill and verify universallinks\](https://wiki.connect .qq.com/%E5%A1%AB%E5%86%99%E5%8F%8A%E6%A0%A1%E9%AA%8Cuniversallinks)

####  Weibo

Open Weibo \[Open Platform\] (https://open.weibo.com/), find the app you have applied for under "My Apps", and click "View" to open the app details page. Click Modify after the "Application Information" column, and configure the universal link of the application in the "Universal Links" item under "iOS Application", as shown in the following figure: !\[\](https://img-cdn-aliyun.dcloud. net.cn/client/ulink/weibo.jpeg)

So far, the whole process of configuring the universal link has been completed, and it will take effect after the cloud is packaged.

###  Other related

####  Client handles Universal Links.

The application startup source can be determined through the plus.runtime.launcher of the 5+ API. If its value is "uniLink", it means that the application is launched through the universal link. At this time, the startup parameters can be obtained through plus.runtime.arguments of the 5+ API, and the full universal link address will be returned when the universal link is started. Example: The default real machine running base that comes with HBuilderX is registered with the universal link of HBuilderX: [https://demo.dcloud.net.cn/ulink/](https://demo.dcloud.net.cn/ulink/)

####  Universal link generation principle:

1.  Select Cloud Space to get the default/custom domain name of Cloud Space
2.  Concatenate URLs according to pre-made specifications (uni-universallinks/DCloud appid)
3.  Automatically generate universal link related parameters to manifest.json based on existing parameters
4.  When initiating cloud packaging, read the profile file of the certificate to generate apple-app-site-association and deploy it to the .well-known directory of the cloud space root directory selected earlier (do not delete this file, otherwise the universal link will become invalid )

#####  Precautions:

-   The path pointed to by the universal link can be empty, it is just a way of information transmission. It can be simply understood as: find the specified package name in apple-app-site-association by parsing the parameters after "/" of the URL and wake up the corresponding APP
-   The content of the universal link is saved in manifest.json "to take effect after cloud packaging", and the time when it is read by the mobile phone is when the application is installed. If your universal link content has changed, you need to resubmit the cloud package and reinstall the application to take effect
-   The universal link is finally hosted on the server, if there is any change, please pay attention to the cleaning of the cache, such as trying to restart the phone, etc.

> If you are local offline packaging or for some reason you need to use the traditional way: private deployment server to host apple-app-site-association file to create universal links. You can still do this by manually configuring manifest.json. Details: [https://ask.dcloud.net.cn/article/36393#unilink](https://ask.dcloud.net.cn/article/36393#unilink)

####  common problem

1.  Why do I open the universal link prompt: `The requested file was not found on this server.`

this is normal phenomenon. Universal links are not required to be a valid path, in other words the directory pointed to by the link is allowed to be empty. The principle is that when accessing this link, the iphone detects that the current domain name is the domain name corresponding to the universal link, reads the apple-app-site-association under the domain name server, and then verifies and resolves the app to be opened according to the path name behind the domain name. package name and wake up the corresponding app.

2.  How to verify that the universal link has taken effect, what is the performance or test plan

You can enter the universal link into the Safari browser that comes with the iPhone. Pull down to see that the universal link corresponds to the application name and an open button. Click the button to open the corresponding APP directly in the browser. Details: [Click here to view the demo video](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/4e920b86-0f67-45ac-81f6-6b97f87ff0ae.mp4)
