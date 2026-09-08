---
title: "camera"
source_url: https://miniapp.neuxnet.com/component/camera.html
---
####  camera

The area camera component embedded in the page. Note that this is not the camera that opens in full screen after clicking.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Quick application | 360 applet | Kuishou applet | JD applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | x | √ | √ | x | √ | √ |

-   On the App and H5 side, you can use the API method to call the full-screen camera instead of the component inline method, see: [uni.chooseImage](../api/media/image.md#chooseimage) and [uni.chooseVideo](../api/media/video.md#choosevideo) \*
-   If you develop OCR identification requirements such as ID card scanning, bank card identification, etc., use this camera component in WeChat applet and Baidu applet, and send the picture to the server for identification. The plug-in market has packaged \[templates\](https:// ext.dcloud.net.cn/search?q=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9B%B8%E6%9C%BA); use on the App side [native Plugin](https://ext.dcloud.net.cn/search?q=ocr)
-   For liveness detection and face recognition, see also the document [Biometric Authentication](../api/system/authentication.md)
-   The barcode component is supported under app-nvue, which can realize custom code scanning. [Reference](https://uniapp.dcloud.io/component/barcode)

**Property description**

| property name | type | default value | description | platform difference description |
| --- | --- | --- | --- | --- |
| mode | String | normal | Valid values are normal, scanCode | WeChat applet, QQ applet, Quick App, Jingdong applet |
| resolution | string | medium | Resolution, dynamic modification is not supported | WeChat applet 2.10.0 |
| device-position | String | back | Front or back camera, the value is front, back |  |
| flash | String | auto | Flash, the value is auto, on, off |  |
| frame-size | string | medium | Specify the desired camera frame data size | WeChat Mini Program 2.7.0, Quick App |
| @stop | EventHandle |  | The camera is triggered when the camera is terminated abnormally, such as exiting the background, etc. | Kuaishou applet does not support |
| @error | EventHandle |  | Triggered when the user is not allowed to use the camera | Kuaishou applet does not support |
| @initdone | eventhandle |  | Triggered when camera initialization is complete, e.detail = {maxZoom} | WeChat applet 2.7.0 |
| @scancode | EventHandle |  | Triggered when the scan code recognition is successful, it only takes effect when mode="scanCode" | WeChat applet |

**Tips：**

-   The camera component is a native component created by the client, its level is the highest, and the level cannot be controlled by z-index. Can be overlaid with cover-view cover-image.
-   Do not use camera component in scroll-view, swiper, picker-view, movable-view.
-   Only one camera component can be inserted on the same page.
-   Related API: [createCameraContext](../api/media/camera-context.md)

**CODE EXAMPLE**

```
<template>
	<view>
        <camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
        <button type="primary" @click="takePhoto">拍照</button>
        <view>预览</view>
        <image mode="widthFix" :src="src"></image>
    </view>
</template>
```

```
export default {
    data() {
        return {
            src:""
        }
    },
    methods: {
         takePhoto() {
            const ctx = uni.createCameraContext();
            ctx.takePhoto({
                quality: 'high',
                success: (res) => {
                    this.src = res.tempImagePath
                }
            });
        },
        error(e) {
            console.log(e.detail);
        }
    }
}
```
