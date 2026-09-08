---
title: "App share weixin — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-share-weixin.html
---
###  Open

-   Log in to the [WeChat Open Platform](https://open.weixin.qq.com/) , add a mobile application and submit it for review. After the review, you can get the App ID (AppID)
-   Confirm in the application details that you have obtained the `Share to Moments`, `Share to Friends` and other interfaces
-   After configuring appid and iOS universal link in HBuilderX, you can package and use WeChat sharing function

For more information, please refer to the official WeChat document [Share and Favorites](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Share_and_Favorites/Share_and_Favorites.html)

###  Configuration

![](https://native-res.dcloud.net.cn/images/uniapp/share/weixin-manifest.png)

-   appid  
    AppID value of WeChat open platform application application
-   UniversalLinks  
    The iOS platform universal link must be consistent with the configuration of the WeChat open platform. It is recommended to use [Generate iOS Universal Links with One Click](https://uniapp.dcloud.io/api/plugins/universal-links.html)

**Notice**

-   The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the WeChat sharing function
-   The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)

###  Share using WeChat

-   uni-app project Call [uni.share(OBJECT)](../api/plugins/share.md#share) to initiate a share operation. The value of the provider attribute in the OBJECT parameter is fixed to `weixin`
-   5+ App items Call [plus.share.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.getServices) to get the sharing service object \[ShareService\](https://www.html5plus.org/doc/zh\_cn/share.html#plus.share.getServices www.html5plus.org/doc/zh\_cn/share.html#plus.share.ShareService), then call its \[send\](https://www.html5plus.org/doc/zh\_cn/share.html#plus.share. ShareService.send) method to send share message

####  Sample code

-   uni-app project

```
uni.share({
	provider: "weixin",
	scene: "WXSceneSession",
	type: 1,
	success: function (res) {
		console.log("success:" + JSON.stringify(res));
	},
	fail: function (err) {
		console.log("fail:" + JSON.stringify(err));
	}
});
```

-   5+ App项目
-   5+ App items

```
var weixinShare = null;
plus.share.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// Get WeChat sharing object
		if (service.id == 'weixin') {
			weixinShare = service;
			break;
		}
	}
	weixinShare.send( {
		content: '我正在使用HBuilderX开发App，赶紧跟我一起来体验！'
	}, function(){
		// share successfully
	}, function(err) {
    // share operation failed
    // err.code is the error code
	})
}, function(err) {
	// Failed to get services
})
```
