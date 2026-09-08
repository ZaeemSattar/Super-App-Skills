---
title: "video"
source_url: https://miniapp.neuxnet.com/component/video.html
---
####  video

Video player components.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| src | String |  | Address of resource to play video |  |
| autoplay | Boolean | false | Whether it is played automatically? |  |
| loop | Boolean | false | Whether to loop? |  |
| muted | Boolean | false | Whether to play in silent mode | ByteDance applet and Feishu applet are not supported |
| initial-time | Number |  | Specifies the initial playback position of the video, in seconds (s). | Byte Beat applet and Feishu applet are not supported |
| duration | Number |  | Specifies the video duration in seconds (s). | Byte Beat applet, Feishu applet, Kuaishou applet, JD.com applet are not supported |
| controls | Boolean | true | Whether to display the default playback controls (play/pause button, playback progress, time) | Not supported by Kuaishou applet |
| danmu-list | Object Array |  | danmu list | ByteDance applet, Feishu applet, Kuaishou applet, JD.com applet are not supported |
| danmu-btn | Boolean | false | Whether to display the barrage button, it is only valid during initialization and cannot be changed dynamically | ByteDance applet, Feishu applet, Kuaishou applet, Jingdong applet are not supported |
| enable-danmu | Boolean | false | Whether to display the barrage, it is only valid during initialization and cannot be changed dynamically | ByteDance applet, Feishu applet, Kuaishou applet, Jingdong applet are not supported |
| page-gesture | Boolean | false | In non-full screen mode, whether to enable brightness and volume adjustment gestures | WeChat applet, H5 |
| direction | Number |  | Set the direction of the video in full screen, if not specified, it will be automatically judged according to the aspect ratio. Valid values are 0 (normal vertical orientation), 90 (screen 90 degrees counterclockwise), -90 (screen 90 degrees clockwise) | H5, ByteDance applet, Feishu applet, Kuaishou applet, Jingdong applet not Support |
| show-progress | Boolean | true | If not set, it will only be displayed when the width is greater than 240 | ByteDance applet, Feishu applet, Kuaishou applet, JD.com applet are not supported |
| show-fullscreen-btn | Boolean | true | Whether to show the full screen button | JD applet does not support |
| show-play-btn | Boolean | true | Whether to show the play button in the control bar at the bottom of the video | JD applet does not support |
| show-center-play-btn | Boolean | true | Whether to show the play button in the middle of the video | ByteDance applet, JD applet not supported |
| object-fit | String | contain | The representation of the video when the video size is inconsistent with the video container size. contain: contain, fill: fill, cover: cover | App, WeChat applet, ByteDance applet, Feishu applet, H5, Jingdong applet |
| poster | String |  | The image network resource address of the video cover. If the control attribute value is false, the poster will be an invalid setting. |  |
| @play | EventHandle |  | Trigger play event when start/continue playing | ByteDance applet and Feishu applet are not supported |
| @pause | EventHandle |  | The pause event is triggered when the playback is paused | ByteDance applet and Feishu applet are not supported |
| @ended | EventHandle |  | The ended event is triggered when the playback reaches the end | ByteDance applet and Feishu applet are not supported |
| @timeupdate | EventHandle |  | Triggered when the playback progress changes, event.detail = {currentTime, duration} . Trigger frequency: once every 250ms | Byte Beat applet and Feishu applet are not supported |
| @fullscreenchange | EventHandle |  | Triggered when the video enters and exits full screen, event.detail = {fullScreen, direction}, direction is vertical or horizontal | ByteDance applet and Feishu applet are not supported |
| @waiting | EventHandle |  | Triggered when the video appears buffering | ByteDance applet, Feishu applet, Kuaishou applet are not supported |
| @error | EventHandle |  | Triggered when there is an error in video playback | ByteDance applet and Feishu applet are not supported |
| @progress | EventHandle |  | Triggered when the loading progress changes, only one stage of loading is supported. event.detail = {buffered}, percentage | WeChat applet, H5 |
| @loadedmetadata | EventHandle |  | Fired when the video metadata is loaded. event.detail = {width, height, duration} | WeChat applet, H5, Jingdong applet |

The width of `<video>` is 300px and the height is 225px by default, which can be set via css.

#####  Legal value of direction

| Value | Instruction |
| --- | --- |
| 0 | Normal vertical |
| 90 | 90° counterclockwise of the screen |
| \-90 | 90° clockwise of the screen |

#####  Legal value of object-fit

| Value | Instruction |
| --- | --- |
| contain | Include |
| fill | Fill |
| cover | Cover |

#####  Legal values for play-btn-position

| Value | Instruction |
| --- | --- |
| bottom | on the controls bar |
| center | Video center |

Template

Script

```
<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            
            <view class="uni-list uni-common-mt">
                <view class="uni-list-cell">
                    <view>
                        <view class="uni-label">
                            </view>
                    </view>
                    <view class="uni-list-cell-db">
                        <input v-model="danmuValue" class="uni-input" type="text" placeholder="" />
                    </view>
                </view>
            </view>
            <view class="uni-btn-v">
                <button @click="sendDanmu" class="page-body-button">
                </button>
            </view>
        </view>
    </view>
</template>
```
