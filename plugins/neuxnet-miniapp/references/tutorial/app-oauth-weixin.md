---
title: "App oauth weixin — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-oauth-weixin.html
---
> This document is for App login instructions, H5 and Mini Program [details](https://uniapp.dcloud.io/api/plugins/login.html#login)

###  Open

-   Log in to the [WeChat Open Platform](https://open.weixin.qq.com/) , add a mobile application and submit it for review. After the review, you can get the App ID (AppID), AppSecret and other information
-   `Apply to activate` the WeChat login function in the application details, fill in the information according to the page prompts, and submit for review
-   After the application is approved, the WeChat authorized login function can be packaged and used

> For more information, please refer to the official WeChat document [Mobile Application WeChat Login Open Guide](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Development_Guide.html)

###  Configuration

![](https://native-res.dcloud.net.cn/images/uniapp/oauth/weixin-manifest.png)

-   appid  
    AppID value of WeChat open platform application application
-   appSecret (HBuilderX3.4.18+ no longer provides visual configuration of this parameter, see \[Configuration parameter security issues\](#%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95% B0%E5%AE%89%E5%85%A8%E6%80%A7%E9%97%AE%E9%A2%98)))  
    AppSecret value of WeChat open platform application application
-   UniversalLinks  
    The iOS platform universal link must be consistent with the configuration of the WeChat open platform. It is recommended to use [Generate iOS Universal Links with One Click](https://uniapp.dcloud.io/api/plugins/universal-links.html)

**Notice**

-   The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the WeChat login function
-   The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)

###  Login with WeChat

1.  The client calls the api to request authorization from WeChat, obtains a temporary ticket (code), and initiates a network request to the developer business server
2.  The business server initiates a network request to: WeChat open platform interface through code + appsecret parameters saved only on the server \[Details\](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir\_list&t= resource/res\_list&verify=1&id=open1419317853&token=&lang=zh\_CN).
3.  After the business server successfully obtains the user information, it checks the user table of the database according to the unionid or openid, generates a new token, and returns the token to the client
4.  After the client gets the token, save it to storage to complete the login.

sample code

-   uni-app project

```
uni.login({ 
	"provider": "weixin",
	success: function(event){
		const {code} = event
		//The client successfully obtains the authorized temporary ticket (code) and initiates a login request to the business server.
		uni.request({
		    data: {
		        code: event.code
		    },
		    success: (res) => {
		        //Get the token to complete the login
				uni.setStorageSync('token',res.token)
		    }
		});
	},
	fail: function (err) {
        // Login authorization failed
        // err.code is the error code
    }
})
```

> Related API documentation: [uni.login](https://uniapp.dcloud.io/api/plugins/login.html#login) , \[uni.request\](https://uniapp.dcloud.io/api/ request/request.html)

-   5+ App项目
-   5+ App items

```
var weixinOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// Get the WeChat login object
		if (service.id == 'weixin') {
			weixinOauth = service;
			break;
		}
	}
	weixinOauth.authorize( function(event){
		const {code} = event
		//The client successfully obtains the authorized temporary ticket (code) and initiates a login request to the business server.
		uni.request({
		    url: 'https://www.example.com/loginByWeixin', //仅为示例，并非真实接口地址。
		    data: {
		        code: event.code
		    },
		    success: (res) => {
		        //Get the token to complete the login
				uni.setStorageSync('token',res.token)
		    }
		});
	}, function(err) {
    // Login authorization failed
    // err.code is the error code
	})
}, function(err) {
	// Failed to get services
})
```

> Related API documentation: [plus.oauth.getServices](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) , \[plus.oauth.AuthService\](https://www .html5plus.org/doc/en\_us/oauth.html#plus.oauth.AuthService)

####  Configuration parameter security issues

The appsecret parameters configured in HBuilderX will be saved in apk/ipa after being packaged in the cloud, there is a risk of parameter leakage! HBuilderX3.4.18+ no longer provides visual configuration of this parameter.

For developers with low security requirements, you can add appsecret configuration through manifest.json -> source view -> app-plus -> distribute -> sdkConfigs -> oauth -> weixin -> . You can complete the login without the verification of the business server:

-   uni-app project Call [uni.login(OBJECT)](../api/plugins/login.md#login) to initiate authorized login, call \[uni.getUserInfo(OBJECT)\](https://uniapp.dcloud.io/api/plugins/login? id=getuserinfo) to get user information, the value of provider attribute in the OBJECT parameter is fixed to `weixin`
-   5+ App items Call [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) to get the login service object [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService) , then call its \[login\](https://www.html5plus.org/doc/zh\_cn/oauth.html# plus.oauth.AuthService.login) method for login authentication, [getUserInfo](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.getUserInfo) method to obtain user information

####  Sample code

-   uni-app project

```
uni.login({
    provider: 'weixin',
    success: function (loginRes) {
        // login successful
        uni.getUserInfo({
            provider: 'weixin',
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
var weixinOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// Get the WeChat login object
		if (service.id == 'weixin') {
			weixinOauth = service;
			break;
		}
	}
	weixinOauth.login( function(oauth){
		// The authorization is successful, and the authorization information is saved in weixinOauth.authResult
	}, function(err) {
    // Login authorization failed
    // err.code is the error code
	})
}, function(err) {
	// Failed to get services
})
```
