---
title: "App oauth weibo — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-oauth-weibo.html
---
###  Open

-   Log in to the [Sina Weibo Open Platform](http://open.weibo.com/) and open the “Mobile Application MOBILE” page
-   Select "Access Now" on the page, and fill in the information to create an application according to the prompts
-   After the creation is successful, click the application in "My Application", you can view the application details page
-   You can get the App Key in "App Info" -> "Basic Info" on the app details page, click Edit to set the UniversalLink for the iOS platform
-   The authorization callback page (redirect\_url) can be set in the "Application Information" -> "Advanced Information" -> "OAuth2.0 Authorization Settings" of the application details page

For more information, please refer to the official Sina Weibo document [Mobile Application Access](https://open.weibo.com/wiki/Connect/login)

###  Configuration

![](https://native-res.dcloud.net.cn/images/uniapp/oauth/sina-manifest.png)

-   appkey  
    Sina Weibo open platform to apply for the AppKey value of the application
-   redirect\_url  
    Authorization callback page set in Sina Weibo open platform application application
-   UniversalLinks  
    The iOS platform universal link must be consistent with the configuration of the Sina Weibo open platform. It is recommended to use [One-click to generate iOS universal links](https://uniapp.dcloud.io/api/plugins/universal-links.html)

**Notice**

-   The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the Sina Weibo login function
-   The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)

###  Login with Sina Weibo

-   uni-app project Call [uni.login(OBJECT)](../api/plugins/login.md#login) to initiate authorized login, call \[uni.getUserInfo(OBJECT)\](https://uniapp.dcloud.io/api/plugins/login? id=getuserinfo) to get user information, the value of the provider attribute in the OBJECT parameter is fixed to `sinaweibo`
-   5+ App items Call [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) to get the login service object [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService) , then call its \[login\](https://www.html5plus.org/doc/zh\_cn/oauth.html# plus.oauth.AuthService.login) method for login authentication, [getUserInfo](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.getUserInfo) method to obtain user information

####  Sample code

-   uni-app project

```
uni.login({
    provider: 'sinaweibo',
    success: function (loginRes) {
        // login successful
        uni.getUserInfo({
            provider: 'sinaweibo',
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
var weiboOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// Get Sina Weibo login object
		if (service.id == 'sinaweibo') {
			weiboOauth = service;
			break;
		}
	}
	weiboOauth.login( function(oauth){
		// The authorization is successful, and the authorization information is saved in weiboOauth.authResult
	}, function(err) {
    // Login authorization failed
    // err.code is the error code
	})
}, function(err) {
	// Failed to get services
})
```
