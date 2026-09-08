---
title: "App payment paypal — open"
source_url: https://miniapp.neuxnet.com/tutorial/app-payment-paypal.html
---
###  Open

-   Log in to the [paypal Developer Center](https://developer.paypal.com/developer/applications) to create an application
-   Click the created app in My Apps to get ClientID (required in payment order)
-   Add related configurations such as return URL. When setting the return URL, pay attention to:
    -   The format is "package name+://paypalpay", which must be all lowercase
    -   Multiple return URLs can be added for Android and iOS platforms respectively

For more information, please refer to [Operation Guide for Applying to Open Paypal](https://uniapp.dcloud.io/app-payment-paypal-open)

**Notice**

-   Only supports iOS11.0 and above

###  Configuration

![](https://native-res.dcloud.net.cn/images/uniapp/payment/paypal_setup_manifest_info.png)

**Parameter Description**

-   returnURL\_android  
    The return URL used by the Android platform must be the same as the value configured in the paypal developer center, otherwise the payment cannot be invoked
-   returnURL\_ios  
    The return URL used by the iOS platform must be the same as the value configured in the paypal developer center, otherwise the payment cannot be invoked

> Tip: returnURL\_android and returnURL\_ios can be the same, if they are different, you need to add multiple return URLs to the paypal developer center

###  Server generates order

Before calling the payment on the App side, you need to generate a payment order on the business server and obtain the `orderId`. For details, please refer to the official paypal documentation: [Create Order](https://developer.paypal.com/api/orders/v2/#orders_create)

###  In-app payment

-   uni-app project Call [uni.requestPayment(OBJECT)](https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment) to initiate payment, the provider attribute value in the OBJECT parameter is fixed to `paypal`, and the orderInfo attribute value is the order object
-   5+ App items Call [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) to initiate payment, the channel parameter is paypal payment object, the orderInfo parameter is the order object

####  Order object parameter description

Object object type

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| clientId | String | Yes | Client ID, which can be obtained when creating an application in the paypal developer center |
| currency | String | No | The currency must be capitalized. For the value, please refer to the official paypal documentation [Currency Codes](https://developer.paypal.com/docs/api/reference/currency-codes/) |
| environment | String | Yes | The operating environment, which can be sandbox/live, sandbox represents the sandbox environment (for development and testing), and live represents the online environment (officially released) |
| orderId | String | Yes | Order id, which can be obtained when the server generates a payment order |
| userAction | String | No | Button style, value paynow/continue |

####  Sample code

-   uni-app project

```
//Order object, obtained from the server
var orderInfo = {
  "userAction": "continue",  //  paynow/continue
  "currency":"USD",          // 币种  
  "environment":"sandbox",   //运行环境 sandbox/live
};
uni.getProvider({
    service: 'payment',
    success: function (res) {
        console.log(res.provider)
        if (~res.provider.indexOf('paypal')) {
            uni.requestPayment({
                "provider": "paypal", 
                "orderInfo": orderInfo,
                success: function (res) {
                    var rawdata = JSON.parse(res.rawdata);
                    console.log("orderId：" + rawdata.orderId);
                },
                fail: function (err) {
                    console.log('fail:' + JSON.stringify(err));
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
  "userAction":"continue",  //  paynow/continue
  "currency":"USD",         // 币种  
  "environment":"sandbox",  //运行环境 sandbox/live
};
//get payment channel
var paypalSev = null;
plus.payment.getChannels(function(channels){
    for (var i in channels) {
        var channel = channels[i];
        if (channel.id === 'paypal') {
            paypalSev = channel;
        }
    }
    //Initiate payment
    plus.payment.request(paypalSev, orderInfo, function(result) {
         var rawdata = JSON.parse(result.rawdata);
         console.log("支付成功");
    }, function(e) {
         console.log("支付失败：" + JSON.stringify(e));
    });
  }, function(e){
      console.log("获取支付渠道失败：" + JSON.stringify(e));
});
```

###  服务器授权

###  Server authorization

在App端发起支付完成后，返回订单id，并没有完成支付操作，需要在服务器授权或捕获订单完成扣款。 After the payment is initiated on the App side, the order id is returned, and the payment operation has not been completed. The server needs to authorize or capture the order to complete the deduction.

-   For authorizing order payment, please refer to the official paypal documentation: [Authorize payment for order](https://developer.paypal.com/api/orders/v2/#orders_authorize)
-   To capture order payment refer to paypal official documentation: [Capture payment for order](https://developer.paypal.com/api/orders/v2/#orders_capture)
