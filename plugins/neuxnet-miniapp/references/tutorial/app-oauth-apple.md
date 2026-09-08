---
title: "App oauth apple — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-oauth-apple.html
---
If an app uses a third-party or social login service (e.g., Facebook login, Google login, Twitter login, LinkedIn login, Amazon login, or WeChat login) to set up or authenticate users of the app, as required by Apple's review guidelines primary account, the app must also offer "Sign in with Apple" as an equivalent option. For details, please refer to: [App Store Review Guidelines - Sign in with Apple](https://developer.apple.com/cn/app-store/review/guidelines/#sign-in-with-apple)

> HBuilderX 2.4.7+ version newly supports `Sign in with Apple`, Apple sign in is a newly added feature of **iOS13**, when your application uses a third-party login such as WeChat login, you also need to integrate Apple Login, otherwise submitting AppStore review will be rejected

###  Open

To log in with Apple, you first need to enable the `Sign In with Apple` service of the App in the Apple developer background:

-   Log in to [Apple Developer Dashboard](https://developer.apple.com/)
-   Select the App ID (Bundle ID) of the app on the [Identifiers](https://developer.apple.com/account/resources/identifiers/list) page to enter the edit `Capabilities` interface, and check the `Sign In with Apple` service and save ![](https://native-res.dcloud.net.cn/images/uniapp/oauth/apple-appid.png)
-   After modifying the `Sign In with Apple` configuration, you need to go to [Profiles](https://developer.apple.com/account/resources/profiles/list) to update the profile description file (no need to create a new one), click Edit to re-edit the corresponding profile file, then download and save the new profile file ![](https://native-res.dcloud.net.cn/images/uniapp/oauth/apple-profile.png)

> Note: Only apps published in the Appstore can use Apple login. The enterprise version of the developer account does not support `Sign In with Apple` (the enterprise version of the developer account refers to the account used to distribute apps within the enterprise and cannot be used to publish the App Store, that is, the account with the price of 299$)

###  Configuration

![](https://native-res.dcloud.net.cn/images/uniapp/oauth/apple-manifest.png)

**Notice**

-   The standard real machine running base in HBuilderX uses enterprise certificate signature, which does not support `Sign In with Apple`
-   After configuration, the cloud package must be submitted to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)

###  Login with Apple

-   uni-app project Call [uni.login(OBJECT)](../api/plugins/login.md#login) to initiate authorized login, call \[uni.getUserInfo(OBJECT)\](https://uniapp.dcloud.io/api/plugins/login ?id=getuserinfo) to get user information, the value of the provider attribute in the OBJECT parameter is fixed to `apple`
-   5+ App items Call [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) to get the login service object [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService) , then call its \[login\](https://www.html5plus.org/doc/zh\_cn/oauth.html# plus.oauth.AuthService.login) method for login authorization

####  Login button style

Apple has requirements for the style of the login button, please set the style of the login button uniformly according to Apple's requirements, otherwise the review may be rejected, pay attention to the following:

-   Buttons must be prominently located (avoid swiping the screen to see)
-   The login button has three appearances: white, white with black outline and black, other designs may affect the review;
-   There are also requirements for the rounded corner range of the button and the minimum size of the button;
-   For specific rules, please refer to Apple's [official document](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/overview/)

![](https://native-res.dcloud.net.cn/images/uniapp/oauth/apple-style-zh.png)

####  Sample code

> Note: Because the iOS13+ system only supports Apple login, it is recommended that only iOS13 display the option of Apple login under the judgment of the interface entry of the App.

-   uni-app project

```
uni.login({
    provider: 'apple',
    success: function (loginRes) {
        // login successful
        uni.getUserInfo({
            provider: 'apple',
            success: function(info) {
                // Obtain user information successfully, save login authentication data in info.authResult
            }
        })
    },
    fail: function (err) {
        // Login authorization failed
        // err.code error code refer to `authorization failure error code (code) description`
    }
});
```

-   5+ App项目
-   5+ App items

```
var appleOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// Get the Apple authorized login object, if the Apple authorized login id is 'apple' iOS13 or below, the service corresponding to Apple login will not be returned
		if (service.id == 'apple') {
			appleOauth = service;
			break;
		}
	}
	appleOauth.login( function(oauth){
		// Authorization succeeded
    // save generic authentication data in appleOauth.authResult
    // appleOauth.appleInfo saves the complete data of Apple login authentication, please refer to the description of `appleInfo`
	}, function(err) {
    // Login authorization failed
    // err.code is the error code
	}, {
		// By default, only user name information is requested. To request user email information, you need to set scope: 'email'
		scope: 'email'
	})
}, function(err) {
	// Failed to get services
})
```

**appleInfo**

| property | type | description |
| --- | --- | --- |
| user | String | Apple user unique identifier |
| state | String | Verification information state |
| email | String | Optional email shared by the user |
| fullName | Object | Optional full name shared by the user |
| authorizationCode | String | Authentication data |
| identityToken | String | Web Token (JWT) |
| realUserStatus | Number | Identifies whether the user is a real person 0: The current platform does not support, ignore this value; 1: Unable to confirm; 2: The authenticity of the user is very high |
| scope | String | Return information scope |

**fullName**

| property | type | description |
| --- | --- | --- |
| namePrefix | String | Name prefix, title, honorific |
| givenName | String | Name |
| middleName | String | middle name |
| familyName | String | Last name |
| nameSuffix | String | Name suffix, degree, honor |
| nickName | String | nickname |

**Authorization failure error code (code) description**

| code | Description |
| --- | --- |
| 1000 | Unknown error |
| 1001 | Cancel authorization |
| 1002 | Invalid return value |
| 1003 | Request not processed |
| 1004 | Authorization failed |

###  Precautions

1.  The built-in pedestal is signed for the enterprise certificate and does not support Sign in with Apple. You need to submit a cloud package or make a custom pedestal for functional testing.
2.  Only when the login authorization box pops up for the first time will there be items of username and email (email needs to be configured with scope: 'email' ), and the user can delete or edit the username or hide the user's mailbox, if the user deletes the username and the authorization is successful After the fullname field will also be empty
3.  After the authorization is successful, calling the login interface again will first verify whether the last authorization is still valid. If it is valid, the callback will be successful and the data of the last authorization will be returned. \*\*Note that this verification will not verify whether the identityToken has expired. \*\*, which needs to be handled by the user; if you want to pop up the authorization box every time to obtain new identityToken and other information, you need to call 'logout()' first, and then the authorization box will pop up after calling the login interface. The username and email address will appear. After successful login, these two fields will be empty. You need to get the authorizationCode and identityToken and pass them to the server, and then verify with the Apple server to obtain the user name and other information. For details, please refer to the documentation; if you want to The username or email appears again in the authorization box. You need to cancel the authorization in System Settings->AppleID->Password and Security->Apps using Apple ID, and then call the login interface
