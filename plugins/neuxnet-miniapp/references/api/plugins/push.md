---
title: "Client API"
source_url: https://miniapp.neuxnet.com/api/plugins/push.html
---
> The following is the api document of uni-push2.0, business introduction \[for details\] (/unipush-v2)

`uni-push` has a server API and a client API.

##  Client API

###  uni.getPushClientId(OBJECT)

Get the client's unique push ID

Note: This is an asynchronous method and only supports uni-push2.0;

**OBJECT parameter description**

| Parameter name | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | Yes | the callback function called by the interface, see the return parameter description for details |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**success return parameter description**

| parameters | type | description |
| --- | --- | --- |
| cid | String | A push client push id, corresponding to the push\_clientid | of the uni-id-device table |
| errMsg | String | Error description |

**fail return parameter description**

| parameters | type | description |
| --- | --- | --- |
| errMsg | String | Error description |

`getPushClientId:fail register fail: {\"errorCode\":1,\"errorMsg\":\"\"}`  
Please check:

1.  Whether the current application has enabled uni-push2.0 \[For details\](https://uniapp.dcloud.io/unipush-v2.html#%E7%AC%AC%E4%B8%80%E6%AD% A5-%E5%BC%80%E9%80%9A)
2.  Whether the corresponding platform of the client has enabled uni-push2.0 \[For details\](https://uniapp.dcloud.io/unipush-v2.html#%E5%AE%A2%E6%88%B7%E7% AB%AF%E5%90%AF%E7%94%A8unipush2-0)
3.  HBuilderX3.5.1 App platform vue3 project first starts to call uni.getPushClientId, there is a problem that cid may not be obtained, HBuilderX3.5.2 fixes this problem, please upgrade.

Sample code:

```
	uni.getPushClientId({
		success: (res) => {
			console.log(res.cid);
		},
		fail(err) {
			console.log(err)
		}
	})
```

###  uni.onPushMessage(\[callback,eventName\])

启动监听推送消息事件 Start listening for push message events 代码示例： Code example:

```
uni.onPushMessage((res)=>{
	console.log(res)
})
```

####  Callback parameter description

| Name | Type | Description |
| --- | --- | --- |
| type | String | Event type, "click" - click message from system push service to start app event; "receive" - app receives push message event from push server. |
| data | String, Object | Message content |

###  uni.offPushMessage(\[eventName\])

Turn off push message listener events Sample code:

```
let eventName = (res)=>{
	console.log(res)
}
//Start push event listener
uni.onPushMessage(eventName);
//close push event listener
uni.offPushMessage(eventName);
```

####  Tips

-   If no parameter is passed in uni.offPushMessage, remove all event listeners at the App level;
-   If only the event name (eventName) is provided, all listeners corresponding to the event name are removed;

###  uni.createPushMessage(OBJECT)

Create local notification bar message (supported since HBuilderX 3.5.2)

**Platform Difference Description**

| App | H5 | Quick app | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kuishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| √ | x | x | x | x | x | x | x | x | x |

**OBJECT parameter description**

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| title | string | No | The title of the push message, the title of the notification message displayed in the system message center, the default value is the name of the program.  
Android - ALL (supported)  
iOS - 5.0+ (not supported): Does not support setting the title of the message, fixed to the name of the program. |
| content | string | yes | The content of the message, the text content displayed in the system notification center. |
| payload | string, Object | No | The data carried by the message can be customized according to business logic. |
| icon | string | No | Push message icon  
Local image address, relative path - relative to the host location of the current page, such as "a.jpg", note that the current page is a network address, it is not supported; absolute path - System absolute path, such as Android platform "/sdcard/logo.png", such path is usually obtained through other 5+ APIs; Extended relative path URL (RelativeURL) - relative path starting with "\_", such as "\_www/a .jpg"; local path URL - starts with "file://" followed by a system absolute path.  
Android - 2.3+ (supported)  
iOS - ALL (not supported): Custom images are not supported, and application icons are fixed. |
| sound | string | No | 'system' 'none'prompt sound for push messages  
The prompt sound to be played when the message is displayed, the possible values are: "system"-indicates that the system notification sound is used; "none"- Indicates not to use a beep; the default is "system".  
Android - 2.3+ (supported)  
iOS - 5.1+ (supported): When the program is running in the foreground, the prompt sound does not take effect. Note: The delay time should usually be set, which takes effect when the program switches to the background to create a local push message. |
| cover | boolean | No | Whether to cover the last prompt message  
The value can be true or false, true is to cover, false is not to cover, the default is the cover value set in permission  
Android - ALL (support )  
iOS - 5.0+ (not supported): Overwriting messages is not supported, only new messages can be created. |
| delay | number | No | Prompt message delay time  
When the device receives the push message, it can not be displayed immediately, but delayed for a period of time. The delay time unit is s, the default is 0s, and it is displayed immediately. |
| when | Date | No | The prompt time displayed on the message  
defaults to the current time. If the display is delayed, the time to display the message after the delay is used.  
Android - ALL (supported)  
iOS - 5.0+ (not supported): It is not supported to set the display time of the message, and the system automatically manages the creation time of the message. |
| success | Function | No | Callback function for successful interface call |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**Other related resources**

-   Check if the app is granted push permission: [https://ext.dcloud.net.cn/plugin?id=594](https://ext.dcloud.net.cn/plugin?id=594)
-   Enable and disable push service: [https://ext.dcloud.net.cn/plugin?id=727](https://ext.dcloud.net.cn/plugin?id=727)
-   Custom App push ringtone: [https://ext.dcloud.net.cn/plugin?id=7482](https://ext.dcloud.net.cn/plugin?id=7482)
-   How to customize push notification icons: [https://ask.dcloud.net.cn/article/35537](https://ask.dcloud.net.cn/article/35537)

###  Mini Program Platform

The similar concept of the applet platform is called `template message`, and some platforms have changed its name to `subscription message`.

Taking WeChat as an example, the developer's server sends a message to the WeChat server, and the WeChat server sends a subscription message, which is folded into the service notification in the WeChat message list. It belongs to the background development and has nothing to do with the mobile terminal.

If you use uniCloud to send WeChat and Alipay subscription messages, please refer to: [https://ext.dcloud.net.cn/plugin?id=1810](https://ext.dcloud.net.cn/plugin?id=1810)

WeChat subscription message document: \[https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html\](https://developers.weixin.qq.com/miniprogram/dev /framework/open-ability/subscribe-message.html)

Alipay template message document: [https://docs.alipay.com/mini/introduce/message](https://docs.alipay.com/mini/introduce/message)

Baidu template message document: [https://smartprogram.baidu.com/docs/develop/third/api/](https://smartprogram.baidu.com/docs/develop/third/api/)

Bytedance subscription message documentation: \[https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/functional-plug-in/subscribemessage/\](https://microapp.bytedance.com/ docs/en-US/mini-app/develop/functional-plug-in/subscribemessage/)

QQ Mini Program Subscription Message Document: \[https://q.qq.com/wiki/develop/miniprogram/frame/open\_ability/open\_message.html#%E8%AE%A2%E9%98%85%E6%B6%88 %E6%81%AF\](https://q.qq.com/wiki/develop/miniprogram/frame/open\_ability/open\_message.html#%E8%AE%A2%E9%98%85%E6%B6%88 %E6%81%AF)

Huawei Quick App Push Documentation: \[https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwpush\](https://developer.huawei.com/consumer/cn/ doc/development/quickApp-References/webview-api-hwpush)

##  Server Api [Details reference](https://miniapp.neuxnet.com/uniCloud/uni-cloud-push/api)
