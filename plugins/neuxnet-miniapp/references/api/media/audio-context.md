---
title: "uni.createInnerAudioContext()"
source_url: https://miniapp.neuxnet.com/api/media/audio-context.html
---
###  uni.createInnerAudioContext()

Create and return the internal audio context `innerAudioContext` object.

**Attribute list of innerAudioContext object**

| Attribute | Type | Instruction | Read only |
| --- | --- | --- | --- |
| src | String | A data link of the audio for direct playback. | No | WeChat applet does not support local path |
| startTime | Number | The start position of play (in s), 0 as default | No |  |
| autoplay | Boolean | Whether to start playing automatically, false as default | No | Not supported by some browsers on H5 side |
| loop | Boolean | Whether to play in loop, false as default | No |  |
| obeyMuteSwitch | Boolean | Whether to follow the system mute switch, when this parameter is false, even if the user turns on the mute switch, the sound can continue to be made, the default value is true | No | WeChat applet, Baidu applet, ByteDance applet , Feishu applet, Jingdong applet, Kuaishou applet (only available on iOS) |
| duration | Number | Length of the current audio (in s), being returned when there is a legal src and obtained in onCanplay. | Yes |  |
| currentTime | Number | The playback position of current audio (in s). being returned when there is a legal src. The time will not be rounded but keep six decimals | Yes |  |
| paused | Boolean | Whether in pause or stop state, true for pause or stop, and false for playing | Yes |  |
| buffered | Number | Time point of audio buffering. Only ensure that the content from the current point to the target point has been buffered. | Yes |  |
| volume | Number | volume. Range from 0-1. | No |  |
| sessionCategory | String | Sets the audio playback mode, the possible values are: "ambient" - do not stop other sound playback, cannot play in the background, no sound after mute; "soloAmbient" - stop other sound playback, cannot play in the background, no sound after mute ; "playback" - stop other sounds, can play in the background, sound after mute. The default value is "playback". | No | App 3.3.7+ |
| playbackRate | Number | The playback rate. Possible values: 0.5/0.8/1.0/1.25/1.5/2.0, the default value is 1.0 | No | App 3.4.5+ (Android version 6 and above is required), WeChat applet 2.11.0, Alipay applet, Byte Mini Program 2.33.0+, Kuaishou Mini Program, Baidu Mini Program 3.120.2+ |

**Method list of innerAudioContext object**

| Methods | Parameters | Description |
| --- | --- | --- |
| play |  | Play (some browsers on the H5 end need to be performed when the user interacts) |  |
| pause |  | Pause |  |
| stop |  | stop |  |
| seek | position | Jump to the specified position, unit s |  |
| destroy |  | Destroy the current instance |  |
| onCanplay | callback | The audio enters the playable state, but it is not guaranteed to play smoothly later |  |
| onPlay | callback | Audio playback event |  |
| onPause | callback | Audio Pause Event |  |
| onStop | callback | Audio stop event |  |
| onEnded | callback | Audio natural playback end event |  |
| onTimeUpdate | callback | Audio playback progress update event |  |
| onError | callback | Audio playback error event |  |
| onWaiting | callback | Audio loading event, when the audio needs to stop loading due to insufficient data, it will be triggered |  |
| onSeeking | callback | Audio seek operation event |  |
| onSeeked | callback | Audio complete seek operation event |  |
| offCanplay | callback | Cancel monitoring onCanplay event | WeChat applet 1.9.0+, Alipay applet, Byte applet, Baidu applet |
| offPlay | callback | Cancel monitoring onPlay event | WeChat applet 1.9.0+, Alipay applet, Byte applet, Baidu applet |
| offPause | callback | Cancel monitoring onPause event | WeChat applet 1.9.0+, Alipay applet, Byte applet, Baidu applet |
| offStop | callback | Cancel monitoring onStop event | WeChat applet 1.9.0+, Alipay applet, Byte applet, Baidu applet |
| offEnded | callback | Cancel monitoring onEnded event | WeChat applet 1.9.0+, Alipay applet, Byte applet, Baidu applet |
| offTimeUpdate | callback | Cancel monitoring onTimeUpdate event | WeChat applet 1.9.0+, Alipay applet, Byte applet, Baidu applet |
| offError | callback | Cancel monitoring onError event | WeChat applet 1.9.0+, Alipay applet, Byte applet, Baidu applet |
| offWaiting | callback | Cancel monitoring onWaiting event | WeChat applet 1.9.0+, Alipay applet, Byte applet, Baidu applet |
| offSeeking | callback | Cancel monitoring onSeeking event | WeChat applet 1.9.0+, Alipay applet, Byte applet, Baidu applet |
| offSeeked | callback | Cancel monitoring onSeeked event | WeChat applet 1.9.0+, Alipay applet, Byte applet, Baidu applet |

Description of errCode

| errCode | Instruction |
| --- | --- |
| 10001 | System error |
| 10002 | Network error |
| 10003 | File error |
| 10004 | Format error |
| \-1 | Unknown error |

**Supported format**

| Format | iOS | Android |
| --- | --- | --- |
| flac | x | √ |
| m4a | √ | √ |
| ogg | x | √ |
| ape | x | √ |
| amr | x | √ |
| wma | x | √ |
| wav | √ | √ |
| mp3 | √ | √ |
| mp4 | x | √ |
| aac | √ | √ |
| aiff | √ | x |
| caf | √ | x |

**Example**

```
const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
innerAudioContext.onPlay(() => {
});
innerAudioContext.onError((res) => {
  console.log(res.errMsg);
  console.log(res.errCode);
});
```

**tips**

-   The audio play at double speed can be implemented via video play at double speed instead. There is an encapsulated plug-in
-   `Android 4.1` and later versions support `PCM/WAVE` in the range of `8`\-bit and `16`\-bit linear PCM (bit rate up to hardware upper limit). The sampling rates required to record the original PCM include 8000, 16000 and 44100 Hz.
