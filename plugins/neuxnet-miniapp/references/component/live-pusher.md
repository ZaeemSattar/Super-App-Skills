---
title: "live-pusher"
source_url: https://miniapp.neuxnet.com/component/live-pusher.html
---
####  live-pusher

Live audio and video recording, also known as live-pusher.

**Platform difference description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Quick application | 360 applet | Kuishou applet | JD applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| √(nvue)、vue 3.4.1+ | x | √ | x | x | x | x | x | x | x | x |

The 3.4.1+ vue page of the app platform already supports live-pusher, versions before 3.4.1 Need to write conditional compilation code, use `plus.video.LivePusher`, [Business Guide](https://ask.dcloud.net.cn/article/13416) , \[Specification Document\](http://www.html5plus. org/doc/en\_us/video.html#plus.video.LivePusher). It is still recommended to use the `live-pusher` component in nvue directly.

For app development, it is recommended to use nvue for live streaming. Compared with vue, it has the following advantages:

1.  nvue can also compile multiple sides with a set of codes.
2.  cover-view of nvue is more powerful than that of vue, making it easier to draw elements on video. If only the App side is considered, any component can override the live-pusher component without using cover-view, for there is no hierarchy problem.
3.  If you need the video embedded in the swiper to slide up and down (such as the home page modes like Tik Tok and Inke), only nvue can achieve on the app side Of course, the disadvantage of nvue compared to vue is that CSS is limited in writing. If you only develop WeChat applets and do not consider App, then the same is true for using vue pages.

**Parameter Description**

Set the live-pusher address and live-pusher video mode of the live-pusher component.

| Property | Type | Default | Required | Description | Platform Difference Description |
| --- | --- | --- | --- | --- | --- |
| url | string |  | yes | The push stream address, which supports RTMP protocol. |
| mode | string | SD | No | Push video mode, available values: SD (standard definition), HD (high definition), FHD (ultra-definition). |
| aspect | string | 3:2 | No | Video aspect ratio |
| muted | Boolean | false | no | Whether to mute. |
| enable-camera | Boolean | true | no | Enable the camera. |
| auto-focus | Boolean | true | No | Auto-focus. |
| beauty | Number | 0 | No | Beauty, the value range is 0-9 (iOS value range is 1), 0 means off. |
| whiteness | Number | 0 | No | Whitening, the value range is 0-9 (iOS value range is 1), 0 means off. |
| orientation | String | "vertical" | no | screen orientation |
| min-bitrate | Number | 200 | No | Minimum bitrate. |
| max-bitrate | Number | 1000 | No | Maximum bitrate. |
| audio-quality | string | high | No | High sound quality (48KHz) or low sound quality (16KHz), the value is high, low | WeChat applet 1.7.0 |
| waiting-image | string |  | No | Waiting image for streaming when entering the background | WeChat applet 1.7.0 |
| waiting-image-hash | string |  | No | Waiting for the MD5 value of the image resource | WeChat applet 1.7.0 |
| zoom | boolean | false | No | Adjust focus | WeChat applet 2.1.0 |
| device-position | string | front | No | Front or rear, the value is front, back | WeChat applet 2.3.0 |
| background-mute | boolean | false | No | Mute when entering the background | WeChat applet 1.7.0 |
| remote-mirror | boolean | false | No | Set whether the push screen is mirrored, the effect will be reflected in the live-player | WeChat applet 2.10.0 |
| local-mirror | string | auto | No | Control whether the local preview screen is mirrored | WeChat applet 2.10.0 |
| audio-reverb-type | number | 0 | No | Audio reverb type | WeChat applet 2.10.0 |
| enable-mic | boolean | true | no | Enable or disable the microphone | WeChat applet 2.10.0 |
| enable-agc | boolean | false | No | Whether to enable automatic audio gain | WeChat applet 2.10.0 |
| enable-ans | boolean | false | No | Enable audio noise suppression | WeChat applet 2.10.0 |
| audio-volume-type | string | voicecall | No | Volume Type | WeChat Mini Program 2.10.0 |
| @statechange | EventHandle |  |  | state change event, detail = {code} |
| @netstatus | EventHandle |  |  | Network status notification, detail = {info} |
| @error | EventHandle |  |  | Render error event, detail = {errMsg, errCode} |
| @bgmstart | EventHandle |  |  | Triggered when the background sound starts playing | WeChat applet 2.4.0 |
| @bgmprogress | EventHandle |  |  | Triggered when the background sound progress changes, detail = {progress, duration} | WeChat applet 2.4.0 |
| @bgmcomplete | EventHandle |  |  | Triggered when the background sound playback is complete | WeChat applet 2.4.0 |

####  Legal value of orientation

| Value | Instruction |
| --- | --- |
| vertical | Vertical |
| horizontal | Horizontal |

####  Legal values for local-mirror

| Value | Instruction |
| --- | --- |
| auto | Front camera mirroring, rear camera not mirroring |
| enable | Mirroring both front and rear cameras |
| disable | The front and rear cameras are not mirrored |

####  Legal values for audio-reverb-type

| Value | Instruction |
| --- | --- |
| 1 | KTV |
| 2 | Small Room |
| 3 | Great Hall |
| 4 | Deep |
| 5 | Resonant |
| 6 | Metal Sound |
| 7 | Magnetic |

####  Legal values for audio-volume-type

| Value | Instruction |
| --- | --- |
| media | Media Volume |
| voicecall | Call Volume |

####  Network status data (info) Android

| keyname | description |
| --- | --- |
| videoBitrate | The current output bit rate of the video encoder/encoder, in kbps |
| audioBitrate | The current output bit rate of the audio encoder/encoder, in kbps |
| videoFPS | current video frame rate |
| videoGOP | The current video GOP, that is, the interval between every two key frames (I frames), in s |
| netSpeed | current send/receive speed |
| netJitter | Network jitter situation, the greater the jitter, the more unstable the network is |
| videoWidth | The width of the video screen |
| videoHeight | The height of the video screen |

####  Network status data (info) iOS

| parameter | type | description |
| --- | --- | --- |
| code | Number | code |
| message | string | Specific network status information |

####  Event

####  statechange

> State change event

#####  Detailed description of return parameter (detail)

| parameter | type | description |
| --- | --- | --- |
| code | Number |
| message | string |

####  netstatus

> Network status notification event

#####  For Android, the detailed description of return parameter (detail)

| keyname | description |
| --- | --- |
| videoBitrate | The current output bit rate of the video encoder/encoder, in kbps |
| audioBitrate | The current output bit rate of the audio encoder/encoder, in kbps |
| videoFPS | current video frame rate |
| videoGOP | The current video GOP, that is, the interval between every two key frames (I frames), in s |
| netSpeed | current send/receive speed |
| netJitter | Network jitter situation, the greater the jitter, the more unstable the network is |
| videoWidth | The width of the video screen |
| videoHeight | The height of the video screen |

#####  For iOS, the detailed description of return parameter (detail)

| parameter | type | description |
| --- | --- | --- |
| code | Number | code |
| message | string | Specific network status information |

####  error

> Render error event

#####  Detailed description of return parameter (detail)

| parameter | type | description |
| --- | --- | --- |
| errCode | Number |
| errMsg | string |

```
<template>
    <view>
        <live-pusher id='livePusher' ref="livePusher" class="livePusher" url=""
        mode="SD" :muted="true" :enable-camera="true" :auto-focus="true" :beauty="1" whiteness="2"
        aspect="9:16" @statechange="statechange" @netstatus="netstatus" @error = "error"
        ></live-pusher>
        <button class="btn" @click="start">开始推流</button>
        <button class="btn" @click="pause">暂停推流</button>
        <button class="btn" @click="resume">resume</button>
        <button class="btn" @click="stop">停止推流</button>
        <button class="btn" @click="snapshot">快照</button>
        <button class="btn" @click="startPreview">开启摄像头预览</button>
        <button class="btn" @click="stopPreview">关闭摄像头预览</button>
        <button class="btn" @click="switchCamera">切换摄像头</button>
    </view>
</template>
```

```
<script>
    export default {
        data() {
			return {}
        },
        onReady() {
            // Note: Need to delay in onReady or onLoad
            this.context = uni.createLivePusherContext("livePusher", this);
        },
        methods: {
            statechange(e) {
                console.log("statechange:" + JSON.stringify(e));
            },
            netstatus(e) {
                console.log("netstatus:" + JSON.stringify(e));
            },
            error(e) {
                console.log("error:" + JSON.stringify(e));
            },
            start: function() {
                this.context.start({
                    success: (a) => {
                        console.log("livePusher.start:" + JSON.stringify(a));
                    }
                });
            },
            close: function() {
                this.context.close({
                    success: (a) => {
                        console.log("livePusher.close:" + JSON.stringify(a));
                    }
                });
            },
            snapshot: function() {
                this.context.snapshot({
                    success: (e) => {
                        console.log(JSON.stringify(e));
                    }
                });
            },
            resume: function() {
                this.context.resume({
                    success: (a) => {
                        console.log("livePusher.resume:" + JSON.stringify(a));
                    }
                });
            },
            pause: function() {
                this.context.pause({
                    success: (a) => {
                        console.log("livePusher.pause:" + JSON.stringify(a));
                    }
                });
            },
            stop: function() {
                this.context.stop({
                    success: (a) => {
                        console.log(JSON.stringify(a));
                    }
                });
            },
            switchCamera: function() {
                this.context.switchCamera({
                    success: (a) => {
                        console.log("livePusher.switchCamera:" + JSON.stringify(a));
                    }
                });
            },
            startPreview: function() {
                this.context.startPreview({
                    success: (a) => {
                        console.log("livePusher.startPreview:" + JSON.stringify(a));
                    }
                });
            },
            stopPreview: function() {
                this.context.stopPreview({
                    success: (a) => {
                        console.log("livePusher.stopPreview:" + JSON.stringify(a));
                    }
                });
            }
        }
    }
</script>
```

Related api: [uni.createLivePusherContext](../api/media/live-pusher-context.md#createLivePusherContext)

**Notice**

-   live-pusher is a native component, which is higher than the front-end component on the applet side and needs to be covered with cover-view. In lower versions of WeChat, live-pusher cannot be embedded in scroll-view, swiper, picker-view, and movable-view. In the nvue file on the App side, live-pusher has no such restrictions.
-   App platform: When using the `<live-pusher/>` component, you must check manifest.json->App module permission configuration->LivePusher module when packaging the App.
