---
title: "uni.getProvider(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/plugins/provider.html
---
###  uni.getProvider(OBJECT)

Get a service provider.

On the App platform, the available service provider is the service provider configured in the packaging environment, and it has nothing to do with whether the app of the service provider is installed on the mobile phone.

Cloud packaging configures related modules and SDK information in the manifest, and offline packaging configures it in the native project. A certain service provider configuration is packaged in, and the corresponding service provider can be obtained at runtime.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Enterprise WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet |
| --- | --- | --- | --- | --- | --- | --- | --- |
| √ | x | √ | x | √ | √ | √ | √ |

**OBJECT parameter description**

| Parameter name | Type | Required | Description |
| --- | --- | --- | --- |
| service | String | is the | service type, and the possible values are described below. |
| success | Function | No | Callback for successful interface call |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**service value description**

| value | description |
| --- | --- |
| oauth | Authorized Login |
| share | Share |
| payment | Payment |
| push | Push |

**success return parameter description**

| parameter name | type | description |
| --- | --- | --- |
| service | String | Service Type |
| provider | Array | Get Service Providers |
| providers | Array | The obtained service provider service object. `App 3.5.1+` |

**provider possible value description under different service types**

| service | provider | Description | Remarks |
| --- | --- | --- | --- |
| oauth | weixin | WeChat Login |  |
|  | qq | QQ login |  |
|  | sinaweibo | Sina Weibo Login |  |
|  | xiaomi | Xiaomi Login |  |
|  | univerify | [One-click login](https://miniapp.neuxnet.com/univerify) | App 3.0.0+ |
|  | apple | [Sign in with Apple](https://ask.dcloud.net.cn/article/36651) | iOS13+ support, App 2.4.7+ |
|  | google | [Google Login](https://miniapp.neuxnet.com/app-oauth-facebook) | App 3.4.0+ |
|  | facebook | [Facebook login](https://miniapp.neuxnet.com/app-oauth-google) | App 3.4.0+ |
| share | sinaweibo | Share on Sina Weibo |  |
|  | qq | Share to QQ friends |  |
|  | weixin | Share WeChat news, Moments and WeChat Mini Programs |  |
| payment | alipay | Alipay payment |  |
|  | wxpay | WeChat Pay |  |
|  | baidu | Baidu Cashier |  |
|  | appleiap | Apple in-app payment | Available after the iOS app is packaged |
|  | google-pay | Pay with Google Pay | App 3.3.7+, available as an Android app packaged with Google Play Services 18.0.0 or higher on Android devices |
|  | paypal | PayPal payment | App 3.3.7+, iOS11.0+ support, Android 5.0+ (API21+) |
|  | stripe | Stripe payment | App 3.3.7+, iOS13.0+ support |
| push | unipush | [UniPush](https://ask.dcloud.net.cn/article/35622) | Push service is one of three, and only one supplier will be obtained. |
|  | igexin | Personal Tweet | You can get it after filling in the configuration and packaging it. It is reserved for backward compatibility only and is no longer recommended. |
|  | mipush | Xiaomi Push | You can get it after filling in the configuration and packaging it. It is reserved for backward compatibility only and is no longer recommended. |

**providers possible value description under different service types**

| service | providers | Description | Remarks |
| --- | --- | --- | --- |
| oauth | id | Login Authentication Service ID |  |
|  | description | Login Authentication Service Description |  |
|  | isAppExist | Whether the client App that authorizes login depends on is installed |  |
|  | authResult | Login authentication data |  |
|  | userInfo | Login user information |  |
| share | id | Share service ID |  |
|  | description | Share service description |  |
|  | authenticated | Whether the authentication is authorized |  |
|  | accessToken | Authorization information |  |
|  | isAppExist | Whether the share client App is installed |  |
| payment | id | Payment channel ID |  |
|  | description | Description of payment channel |  |
|  | isAppExist | Whether the payment channel client App is installed |  |
| push | id | Push channel ID | Currently supports the following push channels: "igexin" - means push push; "mipush" - means Xiaomi push; "unipush" - means DCloud UniPush. |
|  | token | Device token (iOS device unique identifier), used to identify the device's identity in APNS service push | Android: The device's unique identification number, usually the same as the clientid value. iOS: The DeviceToken value of the device, used when sending push messages to the APNS server. |
|  | clientid | Push service token (device unique identifier), used to identify the identity of the recipient of the push information | The unique identifier of the device managed by the third-party push server, this value is usually different from the token on the iOS platform; on other platforms, this value is usually the same as the The token value is the same. This value is related to both the device and the application, that is, different apk/ipa installed on the same device have different values. |
|  | appid | App ID of the third-party push service | The application ID managed by the third-party push server usually needs to be registered on the third-party push server platform. |
|  | appkey | The application key of the third-party push server | The application key managed by the third-party push server usually needs to be registered on the third-party push server platform. |

**Precautions**

-   As of HBuilderX 1.7.3, the push provider for the HBuilder base is the UniPush service.

**CODE**

```
uni.getProvider({
	service: 'oauth',
	success: function (res) {
		console.log(res.provider)
		if (~res.provider.indexOf('qq')) {
			uni.login({
				provider: 'qq',
				success: function (loginRes) {
					console.log(JSON.stringify(loginRes));
				}
			});
		}
	}
});
```
