---
title: "App payment"
source_url: https://miniapp.neuxnet.com/tutorial/app-payment.html
---
The App-side payment module encapsulates the mainstream three-party payment platform SDK in the market, and provides JS API to call the mobile payment function uniformly.

| Project Type | API |
| --- | --- |
| uni-app | [uni.requestPayment(OBJECT)](../api/plugins/payment.md#requestpayment) |
| 5+ App/Wap2App | [plus.payment.\*](https://www.html5plus.org/doc/zh_cn/payment.html) |

If the server uses [uniCloud](https://uniapp.dcloud.io/uniCloud/README) , the official provides [uniPay](https://uniapp.dcloud.io/uniCloud/unipay) cloud unified payment service, extremely Greatly improve the development efficiency of payment business, it is strongly recommended for developers to use, reference example: \[https://ext.dcloud.net.cn/plugin?id=1835\](https://ext.dcloud.net.cn/ plugin?id=1835)

![](https://native-res.dcloud.net.cn/images/uniapp/payment/modules.png)

> Tip: The parameter configuration of the payment module can only take effect after submitting the cloud package. Please use the \[custom base\] when running and debugging the real machine (http://ask.dcloud.net.cn/article/35115)

The basic process of using the payment function:

-   Apply to the third-party payment platform for activation, some platforms (such as WeChat payment) will obtain the appid after successful application
-   Generate payment orders on the server and obtain payment order data
-   Call API on the client to pay

Supported third-party payment platforms:

-   [Apple In-App Payments](https://uniapp.dcloud.io/app-payment-aip) HBuilderX1.0.0+ version support
-   [Alipay payment](https://uniapp.dcloud.io/app-payment-alipay)
-   [WeChat Payment](https://uniapp.dcloud.io/app-payment-weixin)
-   [Paypal payment](https://uniapp.dcloud.io/app-payment-paypal) HBuilderX3.3.7+ version support
-   [Stripe Payment](https://uniapp.dcloud.io/app-payment-stripe) HBuilderX3.3.7+ version support
-   [Google Pay](https://uniapp.dcloud.io/app-payment-google) HBuilderX3.3.7+ version support
