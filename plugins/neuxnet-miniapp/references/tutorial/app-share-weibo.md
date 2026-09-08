---
title: "App share weibo — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-share-weibo.html
---
###  Open

-   Log in to the [Sina Weibo Open Platform](http://open.weibo.com/) and open the “Mobile Application MOBILE” page
-   Select "Access Now" on the page, and fill in the information to create an application according to the prompts
-   After the creation is successful, click the application in "My Application", you can view the application details page
-   You can get the App Key in "App Info" -> "Basic Info" on the app details page, click Edit to set the UniversalLink for the iOS platform

For more information, please refer to the official Sina Weibo document [Mobile Application Access](https://open.weibo.com/wiki/Connect/login)

###  Configuration

![](https://native-res.dcloud.net.cn/images/uniapp/share/sina-manifest.png)

-   appkey  
    Sina Weibo open platform to apply for the AppKey value of the application
-   redirect\_url  
    The callback page set in the Sina Weibo open platform application application
-   UniversalLinks  
    The iOS platform universal link must be consistent with the configuration of the Sina Weibo open platform. It is recommended to use [One-click to generate iOS universal links](https://uniapp.dcloud.io/api/plugins/universal-links.html)

**Notice**

-   The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the Sina Weibo sharing function
-   The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)

###  Share using Sina Weibo

-   uni-app project Call [uni.share(OBJECT)](../api/plugins/share.md#share) to initiate a share operation. The value of the provider attribute in the OBJECT parameter is fixed to `sinaweibo`
-   5+ App items Call [plus.share.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.getServices) to get the sharing service object \[ShareService\](https://www.html5plus.org/doc/zh\_cn/share.html#plus.share.getServices www.html5plus.org/doc/zh\_cn/share.html#plus.share.ShareService), then call its \[send\](https://www.html5plus.org/doc/zh\_cn/share.html#plus.share. ShareService.send) method to send share message

####  Sample code

-   uni-app project

```
uni.share({
    provider: 'sinaweibo',
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
var weiboShare = null;
plus.share.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// Get Weibo sharing object
		if (service.id == 'sinaweibo') {
			weiboShare = service;
			break;
		}
	}
	weiboShare.send( {
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
