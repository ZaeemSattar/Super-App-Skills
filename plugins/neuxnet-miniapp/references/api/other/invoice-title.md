---
title: "uni.chooseInvoiceTitle(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/other/invoice-title.html
---
###  uni.chooseInvoiceTitle(OBJECT)

Selecting the user's invoice header requires the user to authorize scope.invoiceTitle.

In the WeChat applet, the current applet must be associated with an official account, and this official account has completed [WeChat authentication](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1496554031_RD4xe) , to call chooseInvoiceTitle.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | x | x | √ | x | x |

**OBJECT parameter description**

|Attribute|Type|Required|Description| |:-|:-|:-|:-|:-| |success|function|No|Callback function for successful interface call| |fail|function|No|Callback function for interface call failure| |complete|function|No|The callback function for the end of the interface call (the call will be executed if the call succeeds or fails)|

**success return parameter description**

| Properties | Type | Description | Platform Difference Description |
| --- | --- | --- | --- |
| type | string | Header Type (0: Unit, 1: Individual) |  |
| title | string | Header name |  |
| taxNumber | string | Look up tax number |  |
| companyAddress | string | Company Address |  |
| telephone | string | Mobile number |  |
| bankName | string | Bank Name |  |
| bankAccount | string | Bank Account Number |  |
| errMsg | string | Error message | WeChat applet |

**Sample code**

```
uni.chooseInvoiceTitle({
    success(res) {
        console.log(res.type);
        console.log(res.title);
        console.log(res.taxNumber);
        console.log(res.companyAddress);
        console.log(res.telephone);
        console.log(res.bankName);
        console.log(res.bankAccount);
  }
})
```
