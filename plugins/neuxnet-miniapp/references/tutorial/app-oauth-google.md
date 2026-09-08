---
title: "App oauth google — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-oauth-google.html
---
###  Open

-   Register a [Google](https://accounts.google.com/) account
-   Log in to [Google Cloud Platform](https://console.cloud.google.com/) , open the "Select Project" interface and select a project that has already been created. If no project has been created, click "New Project" to create a project according to the page prompts
-   Select "APIs and Services" -> "Credentials" in the left navigation bar to open the management page
-   Click "Create Credentials" -> "OAuth Client ID", select "Application Type" according to the prompts, and enter Android/iOS platform configuration information as required
-   The iOS platform can obtain the client ID after the credential is created (the Android platform does not need the client ID)

For more information, see [Operation Guide for Applying for Google Login](https://uniapp.dcloud.io/app-oauth-facebook-open)

###  Configuration

![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/oauth/google-manifest.png)

-   iOS platform client ID iOS platform client ID for OAuth2.0 credentials created by Google Cloud Platform

**Notice**

-   The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the Google login function
-   The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)

###  Sign in with Google

-   uni-app project Call [uni.login(OBJECT)](../api/plugins/login.md#login) to initiate authorized login, call \[uni.getUserInfo(OBJECT)\](https://uniapp.dcloud.io/api/plugins/login? id=getuserinfo) to get user information, the provider attribute value in the OBJECT parameter is fixed to `google`
-   5+ App items Call [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) to get the login service object [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService) , then call its \[login\](https://www.html5plus.org/doc/zh\_cn/oauth.html# plus.oauth.AuthService.login) method for login authentication, [getUserInfo](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.getUserInfo) method to obtain user information

####  Sample code

-   uni-app project

```
uni.login({
    provider: 'google',
    success: function (loginRes) {
        // login successful
        uni.getUserInfo({
            provider: 'google',
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
var googleOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// Get the WeChat login object
		if (service.id == 'google') {
			googleOauth = service;
			break;
		}
	}
	googleOauth.login( function(oauth){
		// The authorization is successful, and the authorization information is saved in googleOauth.authResult
	}, function(err) {
    // Login authorization failed
    // err.code is the error code
	})
}, function(err) {
	// Failed to get services
})
```
