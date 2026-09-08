---
title: "App oauth facebook — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-oauth-facebook.html
---
###  Open

-   Register [Facebook](http://www.facebook.com) account
-   Log in to the [Facebook Developer Center](http://developers.facebook.com/) and open the "My Apps" page
-   Click "Create Application" and fill in the application information according to the prompts
-   You can get the application ID (AppID) after the application is created
-   Enter the application details page, add login function to the application, and configure Android/iOS platform information

For more information, see [Operation Guide for Applying for Facebook Login](https://uniapp.dcloud.io/app-oauth-facebook-open)

###  Configuration

![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/oauth/facebook-manifest.png)

-   appid  
    Application ID (AppID) applied for by Facebook Developer Center

**Notice**

-   The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the Facebook login function
-   The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)

###  Login with Facebook

-   uni-app project Call [uni.login(OBJECT)](../api/plugins/login.md#login) to initiate authorized login, call \[uni.getUserInfo(OBJECT)\](https://uniapp.dcloud.io/api/plugins/login? id=getuserinfo) to get user information, the value of the provider attribute in the OBJECT parameter is fixed to `facebook`
-   5+ App items Call [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) to get the login service object [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService) , then call its \[login\](https://www.html5plus.org/doc/zh\_cn/oauth.html# plus.oauth.AuthService.login) method for login authentication, [getUserInfo](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.getUserInfo) method to obtain user information

####  Sample code

-   uni-app project

```
uni.login({
    provider: 'facebook',
    success: function (loginRes) {
        // login successful
        uni.getUserInfo({
            provider: 'facebook',
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
var facebookOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// Get the WeChat login object
		if (service.id == 'facebook') {
			facebookOauth = service;
			break;
		}
	}
	facebookOauth.login( function(oauth){
		// The authorization is successful, and the authorization information is saved in facebookOauth.authResult
	}, function(err) {
    // Login authorization failed
    // err.code is the error code
	})
}, function(err) {
	// Failed to get services
})
```
