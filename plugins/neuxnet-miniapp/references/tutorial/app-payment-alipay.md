---
title: "App payment alipay — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-payment-alipay.html
---
###  Open

-   Log in to [Alipay Open Platform](https://open.alipay.com/) and enter the console page
-   [Create a mobile application](https://opendocs.alipay.com/open/200/105310) , fill in the application information and submit for review
-   Add the `APP payment` function in the `capability list` of the application details page. For details, refer to \[Add Application Function\](https://opendocs.alipay.com/open/200/105310#%E6%B7%BB%E5 %8A%A0%E5%BA%94%E7%94%A8%E5%8A%9F%E8%83%BD)
-   Enter the development settings to complete the encryption method, IP whitelist and other development information settings. For details, refer to \[Configuring the Application Environment\](https://opendocs.alipay.com/open/200/105310#%E9%85%8D%E7%BD %AE%E5%BA%94%E7%94%A8%E7%8E%AF%E5%A2%83)
-   After adding functions and configuring keys (obtaining public and private keys, which are used for server generation of orders), submit the application for review. For details, refer to \[Online Application\](https://opendocs.alipay.com/open/200/golive /)
-   After the application is online, the payment function can be used in the production environment after completing the contract. For details, please refer to [Signing Function](https://opendocs.alipay.com/open/200/105314/)

For more information, please refer to the official Alipay document [App Payment Access Preparation](https://opendocs.alipay.com/open/204/105297/)

###  Configuration

![](https://native-res.dcloud.net.cn/images/uniapp/payment/alipay_setup_manifest_info.png)

**Notice**

-   Alipay payment is not bound to the application package name and signature information. It can be developed and tested using the standard base. Before the official release, please submit the cloud package and use the \[custom debugging base\](https://ask.dcloud.net.cn/ article/35115)
-   Local offline packaging reference \[Alipay module configuration on Android platform\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/pay?id=%e6%94%af%e4%bb%98%e5% ae%9d), \[iOS platform Alipay module configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/pay?id=%e6%94%af%e4%bb%98%e5% ae%9d)

###  Server generates order

Before invoking payment on the app side, a payment order needs to be generated on the business server, please refer to:

-   [Generate payment order example (PHP)](https://github.com/dcloudio/H5P.Server/tree/master/payment/alipayrsa2)
-   [Old version "Mobile Quick Payment" sample code (PHP)](https://github.com/dcloudio/H5P.Server/tree/master/payment/alipay)
-   [Example of generating payment order (C#)](http://ask.dcloud.net.cn/article/197)

For more information, please refer to the official Alipay document [Server Access Process](https://opendocs.alipay.com/open/204/01dcc0)

###  In-app payment

-   uni-app project Call [uni.requestPayment(OBJECT)](https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment) to initiate payment, the provider attribute value in the OBJECT parameter is fixed to `alipay`, and the orderInfo attribute value is the order object
-   5+ App items Call [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) to initiate payment, the channel parameter is Alipay payment object, the orderInfo parameter is the order object

####  Order object description

The Alipay payment order object is of String type, and the string data format is "application/x-www-form-urlencoded", that is, the form of key=value, which is connected with the & symbol. An example is as follows:

```
app_id=2015052600090779&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22seller_id%22%3A%22%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.02%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22314VYGIAGG7ZOYY%22%7D&charset=utf-8&method=alipay.trade.app.pay&sign_type=RSA2&timestamp=2016-08-15%2012%3A12%3A15&version=1.0&sign=MsbylYkCzlfYLy9PeRwUUIg9nZPeN9SfXPNavUCroGKR5Kqvx0nEnd3eRmKxJuthNUx4ERCXe552EV9PfwexqW%2B1wbKOdYtDIb4%2B7PL3Pc94RZL0zKaWcaY3tSL89%2FuAVUsQuFqEJdhIukuKygrXucvejOUgTCfoUdwTi7z%2BZzQ%3D
```

For more information, please refer to the official Alipay document [APP payment request parameter description](https://opendocs.alipay.com/open/204/105465/)

####  Sample code

-   uni-app project

```
var orderInfo = '';  //从服务器获取的订单
uni.getProvider({
    service: 'payment',
    success: function (res) {
        console.log(res.provider)
        if (~res.provider.indexOf('alipay')) {
            uni.requestPayment({
                "provider": "alipay",   //固定值为"alipay"
                "orderInfo": orderInfo, //此处为服务器返回的订单信息字符串
                success: function (res) {
                    var rawdata = JSON.parse(res.rawdata);
                    console.log("支付成功");
                },
                fail: function (err) {
                    console.log('支付失败:' + JSON.stringify(err));
                }
            });
        }
    }
});
```

-   5+ App items

```
//Get Alipay payment object
var alipaySev = null;  // 支付宝支付对象
plus.payment.getChannels(function(channels){
    for (var i in channels) {
        var channel = channels[i];
        if (channel.id === 'alipay') {
            alipaySev = channel;
        }
    }
    //Initiate payment
    plus.payment.request(alipaySev, orderInfo, function(result){
          var rawdata = JSON.parse(result.rawdata);
          console.log("支付成功");
      }, function(e){
          console.log("支付失败：" + JSON.stringify(e));
    });
  }, function(e){
      console.log("获取支付渠道失败：" + JSON.stringify(e));
});
```
