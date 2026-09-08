---
title: "live-player"
source_url: https://miniapp.neuxnet.com/component/live-player.html
---
####  live-player

Live audio and video playback, also known as live-puller.

Note when using the live-player component: If you publish to Mini Programs, you need to pass the review of each Mini Program first. Only Mini Programs of the specified category can be used ([WeChat Mini Program Category](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html) , [Baidu Mini Program Category](https://smartprogram.baidu.com/docs/develop/component/media/#live-player/) ), after passing the review, you can automatically activate the component permissions in the management background of each applet.

**Platform difference description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | Feishu applet | QQ applet | Quick app | 360 applet | JD applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x (see below) | x | √ | x | √ | √(base library version>=1.52.0) | x | √ | x | x | x |

-   Live audio and video playback of App, not using live-player, but the video component directly.
-   Under H5, streaming media conforming to HTML5 standard can be played by video, and non-HTML5 standard streaming media formats such as rtmp can only be played on some Chinese mobile browsers that support flash. On pc browsers, rtmp and other formats can be played only after installing the flash plug-in.

**Attribute description**

| Attribute name | Type | Defaults | Instruction | Platform difference description |
| --- | --- | --- | --- | --- |
| id | String |  | Unique identifier of the live-player attribute |  |
| src | String |  | Audio and video address. Baidu applet supports m3u8 format; WeChat applet supports flv, rtmp format |  |
| mode | String | live | live (live broadcast), RTC (real-time call, this mode has lower latency) | WeChat applet |
| autoplay | Boolean | false | Autoplay |  |
| muted | Boolean | false | Mute or not |  |
| orientation | String | vertical | Screen orientation. Options include vertical and horizontal |  |
| object-fit | String | contain | Fill mode. Options include contain and fillCrop |  |
| background-mute | Boolean | false | Whether to mute when entering the background |  |
| sound-mode | string | speaker | Sound output mode; optional values speaker, ear | WeChat applet, QQ applet 1.5.0 (only support speaker) |
| min-cache | Number | 1 | Minimum buffer, in s |  |
| max-cache | Number | 3 | Maximum buffer, in s |  |
| picture-in-picture-mode | string/Array | 3 | Set the small window mode: push, pop, empty string or set multiple modes in the form of an array (eg: \["push", "pop"\]) | WeChat Mini Program (2.10.3) |
| @statechange | EventHandle |  | Play status change event, detail = {code} |  |
| @netstatus | EventHandle |  | Network status notification, detail = {info} |  |
| @fullscreenchange | EventHandle |  | Full screen change event, detail = {direction, fullScreen}. |  |
| @audiovolumenotify | EventHandle |  | Play volume notification, detail = {} | WeChat applet (2.10.0) |
| @enterpictureinpicture | EventHandle |  | Player enters the small window | WeChat applet (2.11.0) |
| @leavepictureinpicture | EventHandle |  | Player exits small window | 2.11.0 |

legal values for mode

| Value | Instruction |
| --- | --- |
| live | Live |
| RTC | Real-time call, this mode has lower latency |

Legal value of orientation

| Value | Instruction |
| --- | --- |
| vertical | Vertical |
| horizontal | Horizontal |

Legal value of object-fit

| Value | Instruction |
| --- | --- |
| contain | The long side of the image fits the screen, and the short side area is filled with black |
| fillCrop | The image overspreads the screen, and the part beyond the display area will be cut off |

Legal values for sound-mode

| Value | Instruction |
| --- | --- |
| speaker | Speaker |
| ear | earpiece |

**Tips**

-   Baidu applet iOS does not support setting the orientation attribute;
-   WeChat applet has abandoned the background-mute property, the default is to enter the background mute;
-   live-player has the default width of 300px and default height of 225px;.
-   Live-player is native component with a higher level than the front-end component. Please do not use it in scroll-view, swiper, picker-view or movable-view
-   Cover-view is required to cover the live-player under the applet. [See details](./native-component.md)
-   JS API related to live-player components: [createLivePlayerContext](../api/media/live-player-context.md)
-   There are audit restrictions on the use of live-player on the Mini Program platform, please pay attention to refer to each document.
-   App side uses the live streaming. It is recommended to use video component under nvue page to avoid complicated hierarchy problem and full-screen coverage problem.

**Status code**

| Code | Instruction |
| --- | --- |
| 2001 | Already connected to the server |
| 2002 | The server has been connected, and started the live-puller |
| 2003 | The network receives the first video packet (IDR) |
| 2004 | Video playback starts |
| 2005 | Video playback progress |
| 2006 | Video playback ends |
| 2007 | Play video Loading |
| 2008 | Decoder start-up |
| 2009 | Video resolution change |
| \-2301 | Network disconnection, and it is invalid after several reconnection. Please restart playback by yourself for more retries |
| \-2302 | Failed to get the accelerated live-puller address |
| 2101 | Failed to decode the current video frame |
| 2102 | Failed to decode the current audio frame |
| 2103 | Network disconnection, and automatic reconnection has been switched on |
| 2104 | Unstable incoming packets from the network: it may be due to insufficient downlink bandwidth or uneven outflow from the anchor side |
| 2105 | The current video playback lags |
| 2106 | Failed to start with hardware decoding, and soft solution is adopted |
| 2107 | The current video frame is discontinuous, and the drop frame may occur |
| 2108 | Hardware decoding the first I frame of the current stream failed, and SDK automatically switches to software decoding |
| 3001 | RTMP - DNS resolution failure |
| 3002 | RTMP server connection failure |
| 3003 | RTMP server handshake failure |
| 3005 | RTMP read/write failure |

**Network status data**

| Key name | Instruction |
| --- | --- |
| videoBitrate | The bit rate of current video encoder output, in kbps |
| audioBitrate | The bit rate of current audio encoder output, in kbps |
| videoFPS | Current video frame rate |
| videoGOP | GOP of current video, namely the interval time of every two key frames (I frames), in s |
| netSpeed | The current sending/receiving speed |
| netJitter | Network jitter, the greater the jitter, the more unstable the network is |
| videoWidth | Width of the video screen |
| videoHeight | Height of the video screen |

**Example**

```
<live-player
  src="https://domain/pull_stream"
  autoplay
  @statechange="statechange"
  @error="error"
  style="width: 300px; height: 225px;"
/>
```

```
export default {
    methods:{
        statechange(e){
            console.log('live-player code:', e.detail.code)
        },
        error(e){
            console.error('live-player error:', e.detail.errMsg)
        }
    }
}
```
