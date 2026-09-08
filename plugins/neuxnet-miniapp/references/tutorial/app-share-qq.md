---
title: "App share qq — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-share-qq.html
---
###  Open

-   Log in to the [Tencent Open Platform](https://connect.qq.com/index.html) , open the "Application Management" -> "Mobile Application" page
-   Select "Create App" -> "Create Mobile App" on the page, and fill in the information to create an app according to the prompts
-   After the creation is successful, the APP ID can be obtained on the page of the application details
-   In the "Basic Information" -> "Platform Information" of the application details page, click "Modify" to set the UniversalLink for the iOS platform

For more information, please refer to the official QQ document \[Overview of Mobile Application Access\](https://wiki.connect.qq.com/%e7%a7%bb%e5%8a%a8%e5%ba%94%e7%94 %a8%e6%8e%a5%e5%85%a5%e6%a6%82%e8%bf%b0)

###  Configuration

![](https://native-res.dcloud.net.cn/images/uniapp/share/qq-manifest.png)

-   appid  
    AppID value of the application applied by the QQ open platform
-   UniversalLinks  
    The universal link of the iOS platform must be consistent with the configuration of the QQ open platform. It is recommended to use [Generate iOS universal link with one click](https://uniapp.dcloud.io/api/plugins/universal-links.html)

**Notice**

-   The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the QQ sharing function
-   The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)

###  Share using QQ

-   uni-app project Call [uni.share(OBJECT)](../api/plugins/share.md#share) to initiate a share operation. The value of the provider attribute in the OBJECT parameter is fixed to `qq`
-   5+ App items Call [plus.share.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.getServices) to get the sharing service object \[ShareService\](https:// www.html5plus.org/doc/zh\_cn/share.html#plus.share.ShareService), then call its \[send\](https://www.html5plus.org/doc/zh\_cn/share.html#plus.share. ShareService.send) method to send share message

####  Sample code

-   uni-app project

```
uni.share({
    provider: 'qq',
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
var qqShare = null;
plus.share.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// Get QQ share object
		if (service.id == 'qq') {
			qqShare = service;
			break;
		}
	}
	qqShare.send( {
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
