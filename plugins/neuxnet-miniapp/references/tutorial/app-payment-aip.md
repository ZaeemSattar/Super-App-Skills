---
title: "uni-app project Apple in-app payment payment usage"
source_url: https://miniapp.neuxnet.com/tutorial/app-payment-aip.html
---
###  uni-app project Apple in-app payment payment usage

-   For uni-app project usage, please go to [Apple In-App Payment](https://uniapp.dcloud.io/api/plugins/payment.html#iap)

###  Open

-   Sign in to [App Store Connect](https://appstoreconnect.apple.com/) to sign the Paid Application Agreement
-   Configure the in-app purchase item product for the app in App Store Connect, refer to [Create an in-app purchase item](https://help.apple.com/app-store-connect/#/devae49fb316) , set the product ID (productId )

For more information, see Apple's official documentation [In-App Purchase Item Configuration Process](https://help.apple.com/app-store-connect/#/devb57be10e7) .

**Notice**

-   Only apps submitted to the App Store can activate in-app payment, and apps published with an `Apple corporate account` cannot be activated for use
-   According to App Store Review Guidelines Clause [3.1.1](https://developer.apple.com/cn/app-store/review/guidelines/#in-app-purchase) , virtual item transactions must use in-app payment , physical transactions can only use third-party payment (Alipay, WeChat, etc.)
-   The information for creating an in-app purchase project needs to be filled in completely. After saving, the status of the in-app purchase project is ready to submit. When the submitted app passes the review, the status changes to approved
-   App Store Connect users can be added on the Test Flight platform before the official launch, and this user account can be used for test payment

###  Configuration

![](https://native-res.dcloud.net.cn/images/uniapp/payment/iap_setup_manifest_info.png)

> Tip: The cloud package must be submitted to take effect. Please use the [custom debugging base](https://ask.dcloud.net.cn/article/35115) when the real machine is running; local offline packaging reference \[Apple in-app Payment Module Configuration\](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/pay?id=%e8%8b%b9%e6%9e%9c%e5%ba%94%e7%94% a8%e5%86%85%e8%b4%ad%e6%94%af%e4%bb%98)

###  5+ Apps Apple In-App Payments

####  In-app payment

####  Get in-app payment object

The in-app payment channel is identified as `appleiap`, call [plus.payment.getChannels](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.getChannels) to obtain the in-app payment object:

```
var iap = null;  //保存应用内支付对象
plus.payment.getChannels(function(channels){
    for (var i in channels) {
        var channel = channels[i];
        // Get the channel with id 'appleiap'
        if (channel.id === 'appleiap') {
            iap = channel;
        }
    }
  }, function(e){
    console.log("获取iap支付通道失败：" + e.message);
});
```

####  Get order information

Before initiating payment, you need to call [requestOrder](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.PaymentChannel.requestOrder) and pass in the product ID (productId) to obtain order information:

```
// The item in the ids array is the in-app purchase item product ID (productId) configured by App Store Connect
var ids = ['商品ID 1', '商品ID 2'];
// iap is the in-app payment object
iap.requestOrder(ids, function(e) {  
    // Get the order information success callback method
    console.log('requestOrder success: ' + JSON.stringify(e));
  }, function(e) {
    // Callback method for failure to get order information
    console.log('requestOrder failed: ' + JSON.stringify(e));
});
```

####  Initiate payment

Call [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) to initiate payment, the channel parameter is in-app Payment object, the orderInfo parameter is the order object

#####  Order object parameter description

Object object type

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| productid | String | Yes | App Store Connect configured in-app purchase item product ID (productId) |
| username | String | No | User ID |
| manualFinishTransaction | Boolean | No | 3.5.1+ support, close the order manually, if the value is false, the order will be closed automatically after payment is completed, if it is true, the order will not be closed, you need to call finishTransaction at the right time to close the order. It is recommended to set it to true, the default value is false for backward compatibility |
| password | String | No | App-specific shared key (must be passed when in-app purchases are auto-renewing subscriptions) |

#####  Sample code

```
// restoreFlag flag, used to determine whether the restoreComplateRequest method needs to be called when the page is displayed
var restoreFlag = true; // 调用支付接口时标记 restoreFlag = true , 实际应用请将标记存储在 storage 中  
plus.payment.request(iap, {
    productid: "商品id",
    username: "appusername", // 用户标识  
    manualFinishTransaction: true // 3.5.1+ 支持，设置此参数后需要开发者主动关闭订单，参见下面的关闭订单方法 finishTransaction()
  }, function(result){
    // The payment is successful, the result is the IAP commodity transaction information object IAPTransaction needs to pass the returned payment voucher to the backend for secondary authentication
  }, function(e){
	// Payment failed return error message
});
```

####  Restore Purchases

```
function restoreComplateRequest() {
    iap.restoreComplateRequest({
		manualFinishTransaction: true // 3.5.1+ 支持，设置此参数后需要开发者主动关闭订单，参见下面的关闭订单方法 finishTransaction()
	}, function(results){
        // The results format is an array to store the recovered IAP commodity transaction information object IAPTransaction, and the returned payment voucher needs to be passed to the backend for secondary authentication
    });
}
```

`restoreComplateRequest` description:

-   Purchased non-consumable items and subscription items
-   Lost items (all types) Note: **Consumption type products that have lost orders** After the payment is completed, **the first** call to this interface can return the payment voucher

####  Close order

3.5.1+ start support

```
function finishTransaction() {
  // IAP commodity transaction information object IAPTransaction
    iap.finishTransaction(transaction, (success) => {
      console.log('关闭订单成功');
    }, (fail) => {
      console.log('关闭订单失败');
    });
}
```

Precautions:

1.  This method will fail when the manualFinishTransaction parameter of `restoreComplateRequest` and `plus.payment.request` is false before calling

####  Lost order detection

Call `restoreComplateRequest` in the listener page `resume` event callback

```
document.addEventListener('resume',function(){  
    if(需要restore的触发条件) {  
        restoreComplateRequest({
			 manualFinishTransaction: true // 3.5.1+ 支持
		});
    }  
},false); 
```

####  Lost order problem description

The user does not bind the AppStore payment method, calls `plus.payment.request` to prepare for payment, triggers the fail callback, errCode=2, the user does not bind the payment method, and the in-app payment process ends. The system pop-up box guides the user to bind the payment method. This process will jump to the system application AppStore to bind the payment method. If the binding is successful, the synchronization payment is successful, and the user successfully pays.

3.5.1 +

-   Added manual close order parameter `manualFinishTransaction`, call `iapChannel.finishTransaction` at the right time to close the order
    
-   Added close order method `iapChannel.finishTransaction(Transaction, <Function> success, <Function> fail)`
    

```
// pay
plus.payment.request(iapChannel, {
  manualFinishTransaction: true
})

// recover
iapChannel.restoreComplateRequest({
  manualFinishTransaction: true
})
```

-   After calling `plus.payment.request`, the failure callback may be triggered for the following reasons

1.  Network reasons
2.  User binds the card for the first time

Call the restore purchase `restoreComplateRequest` after a period of time to get the last abnormal or uncompleted order

-   The correct way to close an order

1.  The client obtains the successful payment and passes it to the server
2.  Notify the client after the server requests the second confirmation from the Apple server to be valid
3.  After the second confirmation, you can safely call `finishTransaction` to close the order

Notice:

-   When the order is not closed, even if you uninstall the app and call the restore purchase `restoreComplateRequest`, you can still get it
-   The app downloaded by account A, switch account B, and call `restoreComplateRequest`, the system pops up prompting that the purchase fails to restore

###  common problem

-   Jailbroken machines may have the risk of in-app payment and may function abnormally
-   Reference for anti-swiping on the server side [IAP payment to prevent swiping](https://www.jianshu.com/p/5cf686e92924)
-   Binding payment methods in advance can effectively avoid lost orders, for example: `plus.runtime.openURL("https://apps.apple.com/account/billing"); //Jump to AppStore to bind payment method`
-   It is recommended to add dot log collection before and after each interface call to quickly locate the problem
