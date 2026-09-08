---
title: "App oauth"
source_url: https://miniapp.neuxnet.com/tutorial/app-oauth.html
---
The App-side OAuth (login authentication) module encapsulates the mainstream three-party login SDKs on the market, and provides the JS API to call the login authentication function uniformly.

| Project Type | API |
| --- | --- |
| uni-app | [uni.preLogin(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=prelogin) 、[uni.login(OBJECT)](../api/plugins/login.md#login)、[uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo) 、[uni.closeAuthView()](https://uniapp.dcloud.io/api/plugins/login?id=closeauthview) 、[uni.getCheckBoxState(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getcheckboxstate) 、[uni.getUniverifyManager(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuniverifymanager) |
| 5+App/Wap2App | [plus.oauth.\*](https://www.html5plus.org/doc/zh_cn/oauth.html) |

If the server uses [uniCloud](https://uniapp.dcloud.io/uniCloud/README) , the official provides [uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id) The cloud unified login service integrates the development of server-side logins such as WeChat login, SMS verification code login, and role rights management. The combination of the unified `uni.login` of the front end and the unified `uni-id` of the cloud can greatly improve the development efficiency of the login business, and is strongly recommended for developers to use. See also the documentation of uni-id: [https://uniapp.dcloud.net.cn/uniCloud/uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)

![](https://native-res.dcloud.net.cn/images/uniapp/oauth/modules.png)

> Tip: The parameter configuration of the three-party login module can only take effect after submitting the cloud package. Please use the \[custom base\] when running and debugging the real machine (http://ask.dcloud.net.cn/article/35115)

The basic process of using the login authentication function:

-   Apply to the third-party login platform for activation, some platforms (such as WeChat login) will obtain the appid after the application is successful
-   Configure the parameters of the application (such as appid, etc.) in HBuilderX, and submit the cloud package to generate [custom base](http://ask.dcloud.net.cn/article/35115)
-   Call the API in the App project to log in, and after success, obtain the authorization ID and submit it to the business server to complete the login operation

Supported third-party login platforms:

-   [One-click login (univerify)](https://uniapp.dcloud.io/univerify)
-   [Sign in with Apple](https://uniapp.dcloud.io/app-oauth-apple)
-   [WeChat login](https://uniapp.dcloud.io/app-oauth-weixin)
-   [QQ login](https://uniapp.dcloud.io/app-oauth-qq)
-   [Sina Weibo login](https://uniapp.dcloud.io/app-oauth-sina)
-   [Google Login](https://uniapp.dcloud.io/app-oauth-google)
-   [Facebook login](https://uniapp.dcloud.io/app-oauth-facebook)
