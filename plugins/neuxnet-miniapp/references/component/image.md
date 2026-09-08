---
title: "image"
source_url: https://miniapp.neuxnet.com/component/image.html
---
####  image

Image.

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| src | String |  | Image resource address |  |
| mode | String | 'scaleToFill' | Modes of image cropping and zooming | 
 |
| draggable | boolean | true | Can drag pictures | H5 3.1.1+, App (iOS15+) |
| @error | HandleEvent |  | When an error occurs, event name is released to AppService whose event object is event.detail = {errMsg: 'something wrong'} |  |
| @load | HandleEvent |  | When image loading completed, event name will be posted to AppService, with the event object event.detail = {height:'image height px', width:'image width px'} |  |

**Tips**

-   `<image>` component default width 320px, height 240px; `app-nvue platform, temporarily default to screen width, height 240px;`
    
-   `src` only supports relative path, absolute path, and base64 code;
    
-   If the page structure is complex and there are too many css styles, the use of image may cause the styles to take effect slowly, causing a "flicker" situation. At this time, setting `image{will-change: transform}` can optimize this problem.
    
-   When using `<image>` in a custom component, if `src` uses a relative path, the path search may fail. Therefore, it is recommended to use an absolute path.
    
-   Images in svg format are supported differently on different platforms. Specifically: app-nvue does not support images in svg format, and only network addresses are supported on the applet.
    
-   Detailed explanation of webp image support
    
    -   Android4 or above (inclusive), iOS14 or above (inclusive), the system has built-in support for webp. At this time, no matter web, applet, app, or vue or nvue, you can use webp directly;
    -   Below iOS14, under app-vue, iOS is not supported; under app-nvue, iOS is supported;

**mode valid values:**

There are 14 modes, 5 of which are zooming modes and 9 are cropping modes.

| Mode | Value | Instruction |
| --- | --- | --- |
| Zoom | scaleToFill | Zoom the image without keeping aspect ratio to ensure the width and height of the image are fully stretched to fill the image element |
| Zoom | aspectFit | Zoom the image with constant aspect ratio to ensure the long sides of the image can be fully displayed. That is to say, the image can be displayed completely. |
| Zoom | aspectFill | Zoom the image with constant aspect ratio to ensure the short sides of the image can be fully displayed only. That is to say, the image is usually complete only in horizontal direction or vertical direction, and in the other directions it will be cropped. |
| Zoom | widthFix | The width is unchanged, the height changes automatically, and the aspect ratio of the original image is preserved |
| Zoom | heightFix | The height does not change, the width changes automatically, and the aspect ratio of the original image remains unchanged |
| Crop | top | Don't zoom the image, but show the top area of the image only |
| Crop | bottom | Don't zoom the image, but show the bottom area of the image only |
| Crop | center | Don't zoom the image, but show the center area of the image only |
| Crop | left | Don't zoom the image, but show the left area of the image only |
| Crop | right | Don't zoom the image, but show the right area of the image only |
| Crop | top left | Don't zoom the image, but show the left top area of the image only |
| Crop | top right | Don't zoom the image, but show the right top area of the image only |
| Crop | bottom left | Don't zoom the image, but show the left bottom area of the image only |
| Crop | bottom right | Don't zoom the image, but show the right bottom area of the image only |

Template

Script

```
<template>
    <view class="page">
        <view class="image-list">
            <view class="image-item" v-for="(item,index) in array" :key="index">
                <view class="image-content">
                    <image style="width: 200px; height: 200px; background-color: #eeeeee;" :mode="item.mode" :src="src"
                        @error="imageError"></image>
                </view>
                <view class="image-title">{{item.text}}</view>
            </view>
        </view>
    </view>
</template>
```
