---
title: "App payment weixin — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-payment-weixin.html
---
###  Open

-   Log in to [WeChat Open Platform](https://open.weixin.qq.com/) , add a mobile application and submit it for review. After the review, you can get the application ID (AppID, which is required for payment orders)
-   `Apply to activate` WeChat payment function in the application details, fill in the information according to the page prompts, and submit for review
-   After the payment application is approved, you will receive an email, including the `merchant ID` (PartnerID, required for payment orders) and `login password`
-   Log in to [WeChat Merchant Platform](https://pay.weixin.qq.com/index.php/core/home/login) using `merchant ID` and `login password`, go to "Account Center" > "API Security" ” > “Set APIv2 Key” Set the API key (used by the server to generate orders). For details, please refer to [API certificate and key](https://kf.qq.com/faq/180830UVRZR7180830Ij6ZZz.html)

For more information, please refer to the official WeChat document [APP payment access application process guidelines](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Pay/Vendor_Service_Center.html) , and the server access related information please refer to [Preparation for APP payment access](https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_5_1.shtml)

###  Configuration

![](https://native-res.dcloud.net.cn/images/uniapp/payment/wxpay_setup_manifest_info.png)

####  Parameter Description

-   appid  
    The application ID (AppID) applied for by the WeChat Open Platform
-   Universal Link for iOS platform The universal link used in WeChat payment on the iOS platform must be configured in the same way as the "Universal Links" item in "Administration Center" > "Application Details" > "Development Information" of the WeChat open platform. For more details, please refer to [One-click generation of iOS universal links Links](https://uniapp.dcloud.io/api/plugins/universal-links)

**Notice**

-   After configuration, the cloud package must be submitted to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)
-   Local offline packaging reference \[Android platform WeChat payment module configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/pay?id=%e5%be%ae%e4%bf%a1%e6 %94%af%e4%bb%98), \[iOS platform WeChat payment module configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/pay?id=%e5%be%ae% e4%bf%a1%e6%94%af%e4%bb%98)

###  Server generates order

Before invoking payment on the app side, a payment order needs to be generated on the business server, please refer to:

-   [WeChat payment example (PHP)](https://github.com/dcloudio/H5P.Server/tree/master/payment/wxpayv3)

For more information, please refer to WeChat payment official document [APP payment unified order](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1)

###  In-app payment

-   uni-app project Call [uni.requestPayment(OBJECT)](https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment) to initiate payment. The value of the provider attribute in the OBJECT parameter is fixed to `wxpay`, and the value of the orderInfo attribute is the order object
-   5+ App items Call [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) to initiate payment, the channel parameter is WeChat payment object, the orderInfo parameter is the order object

####  Order object parameter description

Object object type

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| appid | String | Yes | Application ID (AppID), please log in to [WeChat Open Platform](https://open.weixin.qq.com/) to view, note that it is different from the APPID of the official account |
| partnerid | String | Yes | The merchant ID (PartnerID) allocated by WeChat Pay |
| prepayid | String | Yes | Prepay transaction session ID |
| package | String | Yes | Extended field, fixed value "Sign=WXPay" |
| noncestr | String | yes | random string, no longer than 32 bits |
| timestamp | String | Yes | Timestamp, standard Beijing time, the time zone is Dongba District, the number of seconds since 0:00:00 on January 1, 1970 |
| sign | String | Yes | Signature, see [Signature Generation Algorithm](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=4_3) |

For more information, please refer to the official WeChat payment document [APP payment calls up payment interface](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_12&index=2)

####  Sample code

-   uni-app project

```
//Order object, obtained from the server
var orderInfo = {
  "appid": "wx499********7c70e",  // 应用ID（AppID）
  "partnerid": "148*****52",      // 商户号（PartnerID）
  "prepayid": "wx202254********************fbe90000", // 预支付交易会话ID
  "package": "Sign=WXPay",        // 固定值
  "noncestr": "c5sEwbaNPiXAF3iv", // 随机字符串
  "timestamp": 1597935292,        // 时间戳（单位：秒）
  "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5 签名
};
uni.getProvider({
    service: 'payment',
    success: function (res) {
        console.log(res.provider)
        if (~res.provider.indexOf('wxpay')) {
            uni.requestPayment({
                "provider": "wxpay",  //固定值为"wxpay"
                "orderInfo": orderInfo, 
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
//Order object, obtained from the server
var orderInfo = {
  "appid": "wx499********7c70e",  // 应用ID（AppID）
  "partnerid": "148*****52",      // 商户号（PartnerID）
  "prepayid": "wx202254********************fbe90000", // 预支付交易会话ID
  "package": "Sign=WXPay",        // 固定值
  "noncestr": "c5sEwbaNPiXAF3iv", // 随机字符串
  "timestamp": 1597935292,        // 时间戳（单位：秒）
  "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5 签名
};
//get payment channel
var wxpaySev = null;
plus.payment.getChannels(function(channels){
    for (var i in channels) {
        var channel = channels[i];
        if (channel.id === 'wxpay') {
            wxpaySev = channel;
        }
    }
    //Initiate payment
    plus.payment.request(wxpaySev, orderInfo, function(result) {
        var rawdata = JSON.parse(result.rawdata);
        console.log("支付成功");
    }, function(e) {
        console.log("支付失败：" + JSON.stringify(e));
    });
  }, function(e){
      console.log("获取支付渠道失败：" + JSON.stringify(e));
});
```
