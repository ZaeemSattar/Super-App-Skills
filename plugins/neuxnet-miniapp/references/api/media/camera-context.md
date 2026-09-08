---
title: "uni.createCameraContext()"
source_url: https://miniapp.neuxnet.com/api/media/camera-context.html
---
###  uni.createCameraContext()

Creates and returns a context cameraContext object for the camera component.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | √ | √ | √ | x | √ | √ | √ |

This API is the js API supporting the camera component. It has the same platform compatibility as the camera component, and can implement non-full-screen cameras. On the App side, a full-screen camera can be achieved through [plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html) .

**CameraContext object method list**

| Methods | Parameters | Description | Platform Difference Description |
| --- | --- | --- | --- |
| takePhoto | Object | Take a photo, you can specify the quality, if successful, it will return the image path. |  |
| setZoom | Object | Set the zoom level **WeChat applet 2.10.0+ supports** | JD applet does not support |
| startRecord | Object | Start recording | JD applet does not support |
| stopRecord | Object | End the recording, if successful, it will return the cover and video. | JD Mini Program does not support |
| onCameraFrame | Function | Get the camera real-time frame data. | Supported only by `WeChat Mini Program Platform`, [Specification Details](https://developers.weixin.qq.com/miniprogram/dev/api/CameraContext.onCameraFrame.html) |

###  cameraContext.takePhoto

**takePhoto's Object parameter list:**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| quality | String | No | Image quality, the value is high (high quality), normal (normal quality), low (low quality), default normal |
| success | Function | No | The callback function when the interface is called successfully, returns the temporary path of the photo file, res = { tempImagePath } |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

###  cameraContext.setZoom

**List of Object parameters for setZoom:**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| zoom | String | Yes | zoom level, range \[1, maxZoom\]. zoom can take decimals, accurate to one decimal place. maxZoom is available in the @initdone return value. |
| success | Function | No | Callback function for successful interface call |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

###  cameraContext.startRecord

**List of Object parameters for startRecord:**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| timeoutCallback | Function | No | The recording will end when the call exceeds 30s or the page is onHide |
| success | Function | No | Callback function for successful interface call |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

###  cameraContext.stopRecord

**List of Object parameters for stopRecord:**

| Parameters | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| compressed | Boolean | false | No | Enable video compression, the compression effect is the same as `chooseVideo` ,\*\*supported by WeChat Mini Program 2.10.0+\*\*｜ |
| success | Function |  | No | The interface calls the callback function successfully, and returns the temporary path of the cover and video, res = { tempThumbPath, tempVideoPath }. |
| fail | Function |  | No | Callback function for interface call failure |
| complete | Function |  | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**Notice**

-   OCR and other document identification requirements are realized under the App, and native plug-ins can be obtained in the plug-in market, \[https://ext.dcloud.net.cn/plugin?id=135\](https://ext.dcloud.net.cn /plugin?id=135)
-   OCR and other document identification requirements are realized under the WeChat applet, and the plug-in market is also packaged. Search [ocr](https://ext.dcloud.net.cn/search?q=ocr) to see.
-   The user authorization API can be used to determine whether the user has granted camera access to the application [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
-   The API implementations of various mini-program platforms may be inconsistent. For example, when Alipay mini-programs call createCameraContext, you need to pass the cameraId as a parameter. Please refer to the specific documents when using them.
