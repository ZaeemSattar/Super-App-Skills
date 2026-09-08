---
title: "uni.authorize(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/other/authorize.html
---
###  uni.authorize(OBJECT)

Initiate an authorization request to the user in advance. Immediately after the call, a pop-up window will ask the user whether he agrees to authorize the applet to use a certain function or obtain some data of the user, but the corresponding interface will not be actually called. If the user has agreed to the authorization before, the pop-up window will not appear, and success will be returned directly. If the user has previously refused authorization, this interface will directly enter the failure callback, which is generally used with `uni.getSetting` and `uni.openSetting`.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | √ | √ | √ | x |

Note: For the authorization judgment method of the App platform, see also: [https://ext.dcloud.net.cn/plugin?id=594](https://ext.dcloud.net.cn/plugin?id=594)

**OBJECT parameter description**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| scope | String | is the scope for which permissions need to be obtained, see scope list for details. |
| success | Function | No | Callback function for successful interface call |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

#####  scope list

| scope | Corresponding Interface | Description | Platform Difference Description |
| --- | --- | --- | --- |
| scope.userInfo | [uni.getUserInfo](../plugins/login.md#getuserinfo) | User Info |  |
| scope.userLocation | [uni.getLocation](../location/location.md#getlocation), [uni.chooseLocation](../location/location.md#chooselocation) | Location |  |
| scope.userLocationBackground | wx.userLocationBackground | Background Location | WeChat Mini Program |
| scope.address | [uni.chooseAddress](./choose-address.md) | communication area |  |
| scope.record | [uni.getRecorderManager](../media/record-manager.md#getrecordermanager) | Recording function |  |
| scope.writePhotosAlbum | [uni.saveImageToPhotosAlbum](../media/image.md#saveimagetophotosalbum), [uni.saveVideoToPhotosAlbum](../media/video.md#savevideotophotosalbum) | Save to album | ByteDance applet The return value is scope.album |
| scope.camera | [`<camera />`](../../component/camera.md) component, scan the code, take a photo, select an album under the headline | Camera |  |
| scope.invoice | [wx.chooseInvoice](https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseInvoice.html) | Get Invoice | WeChat Mini Program, QQ Mini Program |
| scope.invoiceTitle | [uni.chooseInvoiceTitle](./invoice-title.md) | Invoice header | WeChat applet, Baidu applet, QQ applet |
| scope.werun | [wx.getWeRunData](https://developers.weixin.qq.com/miniprogram/dev/api/wx.getWeRunData.html) | WeChat Exercise Steps | WeChat Mini Program |

Note: scope.userLocation permission needs to configure permission in manifest.json, see: [https://uniapp.dcloud.io/collocation/manifest](https://uniapp.dcloud.io/collocation/manifest)

**CODE EXAMPLE**

```
uni.authorize({
    scope: 'scope.userLocation',
    success() {
        uni.getLocation()
    }
})
```
