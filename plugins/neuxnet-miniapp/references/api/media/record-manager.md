---
title: "uni.getRecorderManager()"
source_url: https://miniapp.neuxnet.com/api/media/record-manager.html
---
###  uni.getRecorderManager()

Get the **globally unique** recording manager `recorderManager`.

**Platform difference description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**Method list of recorderManager object**

| Method | Parameter | Instruction | Platform difference description |
| --- | --- | --- | --- |
| start | options | Start recording |  |
| pause |  | Pause recording |  |
| resume |  | Resume recording |  |
| stop |  | Stop recording |  |
| onStart | callback | Recording start event |  |
| onPause | callback | Recording pause event |  |
| onStop | callback | In terms of recording stop event, file address will be called back |  |
| onFrameRecorded | callback | After recording the file with the specified frame size, the recording fragmentation result data will be called back. If frameSize is set, this event will be called back |  |
| onError | callback | In terms of recording error event, error messages will be called back |  |

**start(options) description**

| Attribute | Type | Required | Instruction | Platform difference description |
| --- | --- | --- | --- | --- |
| duration | Number | No | Specify the duration of the recording, the unit is ms. If a valid duration is passed in, the recording will automatically stop when the specified duration is reached. The maximum value is 600000 (10 minutes), and the default value is 60000 (1 minute) | Mini App |
| sampleRate | Number | No | Sampling rate, valid value 8000/16000/44100 | Mini App |
| format | String | No | Audio format, valid values aac/mp3/wav/PCM. The default value of App is mp3, and the default value of applet is aac | Mini App |

Among them, the sampling rate and code rate have certain requirements, and the specific effective values are as follows:

| Sampling Rate | Encoding Rate |
| --- | --- |
| 8000 | 16000 ~ 48000 |
| 11025 | 16000 ~ 48000 |
| 12000 | 24000 ~ 64000 |
| 16000 | 24000 ~ 96000 |
| 22050 | 32000 ~ 128000 |
| 24000 | 32000 ~ 128000 |
| 32000 | 48000 ~ 192000 |
| 44100 | 64000 ~ 320000 |
| 48000 | 64000 ~ 320000 |

**onStop(callback) callback result description**

| Attribute | Type | Instruction |
| --- | --- | --- |
| tempFilePath | String | Temporary path of the recording file |

**onFrameRecorded(callback) callback result description**

| Attribute | Type | Instruction |
| --- | --- | --- |
| frameBuffer | ArrayBuffer | Recording fragmentation result data |
| isLastFrame | Boolean | Whether the current frame is the last frame before normal record ending |

**onError(callback) callback result description**

| Attribute | Type | Instruction |
| --- | --- | --- |
| errMsg | String | Error message |

**Example**

```
<template>
	<view>
		<button @tap="startRecord">开始录音</button>
		<button @tap="endRecord">停止录音</button>
		<button @tap="playVoice">播放录音</button>
	</view>
</template>
```

```
const recorderManager = uni.getRecorderManager();
const innerAudioContext = uni.createInnerAudioContext();

innerAudioContext.autoplay = true;

export default {
	data() {
		return {
			text: 'Mini App',
			voicePath: ''
		}
	},
	onLoad() {
		let self = this;
		recorderManager.onStop(function (res) {
			console.log('recorder stop' + JSON.stringify(res));
			self.voicePath = res.tempFilePath;
		});
	},
	methods: {
		startRecord() {
			console.log('start');

			recorderManager.start();
		},
		endRecord() {
			console.log('stop');
			recorderManager.stop();
		},
		playVoice() {
			console.log('play');

			if (this.voicePath) {
				innerAudioContext.src = this.voicePath;
				innerAudioContext.play();
			}
		}
	}
}
```
