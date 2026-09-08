---
title: "uni.chooseAddress(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/other/choose-address.html
---
###  uni.chooseAddress(OBJECT)

Get the user's shipping address. Call up the native interface for the user to edit the delivery address, and return to the address selected by the user after editing, which requires the user to authorize scope.address.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | √ | √ | √ | x | x | x | x |

**OBJECT parameter description**

| Attribute | Type | Required | Description | | --- | --- | --- | --- | --- | | success | function|No | Callback function for successful interface call | | fail | function|No | Callback function for interface call failure | | complete | function|No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**success return parameter description**

| Properties | Type | Description | Platform Difference Description |
| --- | --- | --- | --- |
| userName | string | consignee name |  |
| postalCode | string | Postal Code |  |
| provinceName | string | National standard delivery address first-level address |  |
| cityName | string | The second-level address of the national standard delivery address |  |
| countyName | string | National standard delivery address third-level address |  |
| detailInfo | string | Detailed delivery address information |  |
| nationalCode | string | Shipping address country code |  |
| telNumber | string | recipient mobile phone number |  |
| errMsg | string | Error message | WeChat applet |

**Sample code**

```
uni.chooseAddress({
  success(res) {
    console.log(res.userName)
    console.log(res.postalCode)
    console.log(res.provinceName)
    console.log(res.cityName)
    console.log(res.countyName)
    console.log(res.detailInfo)
    console.log(res.nationalCode)
    console.log(res.telNumber)
  }
})
```
