---
title: "App oauth qq — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-oauth-qq.html
---
###  Open

-   Log in to the [Tencent Open Platform](https://connect.qq.com/index.html) , open the "Application Management" -> "Mobile Application" page
-   Select "Create App" -> "Create Mobile App" on the page, and fill in the information to create an app according to the prompts
-   After the creation is successful, the APP ID can be obtained on the page of the application details
-   In the "Basic Information" -> "Platform Information" of the application details page, click "Modify" to set the UniversalLink for the iOS platform

For more information, please refer to the official QQ document \[Overview of Mobile Application Access\](https://wiki.connect.qq.com/%e7%a7%bb%e5%8a%a8%e5%ba%94%e7%94 %a8%e6%8e%a5%e5%85%a5%e6%a6%82%e8%bf%b0)

###  Configuration

![](https://native-res.dcloud.net.cn/images/uniapp/oauth/qq-manifest.png)

-   appid  
    AppID value of the application applied by the QQ open platform
-   UniversalLinks  
    The universal link of the iOS platform must be consistent with the configuration of the QQ open platform. It is recommended to use [Generate iOS universal link with one click](https://uniapp.dcloud.io/api/plugins/universal-links.html)

**Notice**

-   The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the QQ login function
-   The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)

###  Login with QQ

-   uni-app project Call [uni.login(OBJECT)](../api/plugins/login.md#login) to initiate authorized login, call \[uni.getUserInfo(OBJECT)\](https://uniapp.dcloud.io/api/plugins/login? id=getuserinfo) to get user information, the value of the provider attribute in the OBJECT parameter is fixed to `qq`
-   5+ App items Call [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) to get the login service object [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService) , then call its \[login\](https://www.html5plus.org/doc/zh\_cn/oauth.html# plus.oauth.AuthService.login) method for login authentication, [getUserInfo](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.getUserInfo) method to obtain user information

####  Sample code

-   uni-app project

```
uni.login({
    provider: 'qq',
    success: function (loginRes) {
        // login successful
        uni.getUserInfo({
            provider: 'qq',
            success: function(info) {
                // Obtain user information successfully, info.authResult saves user information
            }
        })
    },
    fail: function (err) {
        // Login authorization failed
        // err.code is the error code
    }
});
```

-   5+ App项目
-   5+ App items

```
var qqOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// Get the QQ login object
		if (service.id == 'qq') {
			qqOauth = service;
			break;
		}
	}
	qqOauth.login( function(oauth){
		// The authorization is successful, and the authorization information is saved in qqOauth.authResult
	}, function(err) {
    // Login authorization failed
    // err.code is the error code
	})
}, function(err) {
	// Failed to get services
})
```
