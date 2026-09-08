---
title: "uni.getBackgroundAudioManager()"
source_url: https://miniapp.neuxnet.com/api/media/background-audio-manager.html
---
###  uni.getBackgroundAudioManager()

Get the **globally unique** background audio manager `backgroundAudioManager`.

Background audio is not the background music of games, but similar to QQ Music which still plays music in the background.

**Platform difference description**

|Mini App|H5| |Mini App|H5| |:-😐:-😐 |√|x|

**Attribute list for backgroundAudioManager object**

| Attribute | Type | Instruction | Read only |
| --- | --- | --- | --- |
| duration | Number | Length of the current audio (in s), being returned when there is a legal src | Yes |
| currentTime | Number | Playback location of the current audio (in s), being returned when there is a legal src | Yes |
| paused | Boolean | Whether in pause or stop state, true for pause or stop, and false for playing | Yes |
| src | String | Audio source, which defaults to an empty string. \*\*The audio will be automatically played after setting a new SRC. \*\*Currently supported formats include m4a, aac, mp3, and wav. | No |
| startTime | Number | The position where the audio starts to play (in s) | No |
| buffered | Number | Time point of audio buffering. Only ensure that the content from the current point to the target point has been buffered. | Yes |
| title | String | Audio title, used as the audio title of native audio player. This value is also used as the shared card title under the share feature of the native audio player. | No |
| epname | String | Album name. This value is also used as the shared card profile under the share feature of the native audio player. | No |
| singer | String | Singer name. This value is also used as the shared card profile under the share feature of the native audio player. | No |
| coverImgUrl | String | Cover url, used as the background image of the native audio player. This image is also used as the shared card image and background under the share feature of the native audio player. | No |
| webUrl | String | Page linkage. This value is also used as the shared card profile under the share feature of the native audio player. | No |
| protocol | String | Audio protocal. Default is 'http'. The direct broadcast audio with HLS protocol is supported after setting to 'hls'. However, it is temporarily not supported by the App platform. | No |
| playbackRate | Number | The playback rate. Possible values: 0.5/0.8/1.0/1.25/1.5/2.0, the default value is 1.0. | No |

**Method list of backgroundAudioManager object**

| Method | Parameter | Instruction |
| --- | --- | --- |
| play |  | Play |
| pause |  | Pause |
| stop |  | Stop |
| seek | position | Jump to the specified position, in s |
| onCanplay | callback | Background audio is ready for play, but the smooth play of the rest part cannot be guaranteed |
| onPlay | callback | Background audio play event |
| onPause | callback | Background audio pause event |
| onStop | callback | Background audio stop event |
| onEnded | callback | Background audio natural play end event |
| onTimeUpdate | callback | Background audio play progress update event |
| onError | callback | Background audio play error event |
| onWaiting | callback | Audio loading event, which will be triggered in case of insufficient audio data resulting in pause and loading |

Description of errCode

| errCode | Instruction |
| --- | --- |
| 10001 | System error |
| 10002 | Network error |
| 10003 | File error |
| 10004 | Format error |
| \-1 | Unknown error |

**Example**

```
const bgAudioManager = uni.getBackgroundAudioManager();
bgAudioManager.title = '致爱丽丝';
bgAudioManager.singer = '暂无';
bgAudioManager.coverImgUrl = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-Mini App-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png';
bgAudioManager.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
```
