---
title: "uni.requestPayment(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/plugins/payment.html
---
#  uni.requestPayment(OBJECT)

uni.requestPayment is a payment API for Mini App.

WARNING

Note that payment requires not only Mini App client-side development, but also server-side development.

Related document: [Mini App Payment](../../serverside/index.md#payment)

**Platform Difference Description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| name | String | Yes | Business name (eg: "shop") |
| country | String | Yes | Country code (eg: "SA") |
| currency | String | Yes | Currency (eg: "SAR") |
| amount | String | Yes | Commodity Price (eg: "0.01") |
| transactionNo | String | Yes | The order number (eg: "E9E82C63B62C409C8934A0AD2B47DCA2") |
| success | Function | No | Callback for successful interface call |  |
| fail | Function | No | Callback function for interface call failure |  |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |

###  Precautions

-   On the Mini APP side, if your application completes the payment by the user; immediately send a push message notification to the paying user.

##  Mini App payment

###  Example

```
uni.requestPayment({
   name: "shop",
   country:"SA",
   currency:"SAR",
   amount:"0.01",
   transactionNo:"E9E82C63B62C409C8934A0AD2B47DCA2"
    success: function (res) {
        console.log('success:' + JSON.stringify(res));
    },
    fail: function (err) {
        console.log('fail:' + JSON.stringify(err));
    }
});
```

###  success return parameter description

```
success: function (res) {
    console.log('success:' + JSON.stringify(res));
},
fail: function (err) {
    console.log('fail:' + JSON.stringify(err));
}
```

| Parameter Name | Type | Description |
| --- | --- | --- |
| status | Number | 0：Close payment  
1：Payment failure  
2：Payment success |
| failCode | Number | status = 1 Need to call back failure error code：  
10：applyPayError  
11：unsupport  
24：checkoutFailed |
