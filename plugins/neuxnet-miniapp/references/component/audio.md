---
title: "audio"
source_url: https://miniapp.neuxnet.com/component/audio.html
---
####  audio

Audio.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| id | String |  | Unique identifier of the audio component |
| src | String |  | Address of the resource to play audio |
| loop | Boolean | false | Whether to loop? |
| controls | Boolean | false | Whether to display the default control? |
| poster | String |  | The image resource address of the audio cover on the default control. If the control attribute value is false, the poster will be an invalid setting. |
| name | String | Unknown audio | The audio name on the default control. If the control attribute value is false, the name will be an invalid setting. |
| author | String | Unknown author | The author name on the default control. If the control attribute value is false, the author will be an invalid setting. |
| @error | EventHandle |  | Trigger the error event when an error occurs, detail = {errMsg: MediaError.code} |
| @play | EventHandle |  | Trigger the play event when starts/continues playing |
| @pause | EventHandle |  | Trigger the pause event when playing is paused |
| @timeupdate | EventHandle |  | The timeupdate event is triggered when the playback progress changes, detail = {currentTime, duration} |
| @ended | EventHandle |  | Trigger the ended event when playing goes to the end |

**MediaError.code**

| Return error code | Describe |
| --- | --- |
| 1 | Access to resources is forbidden by the user |
| 2 | Network error |
| 3 | Decoding error |
| 4 | Inappropriate resources |

```
<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap" style="text-align: center;">
				<audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls></audio>
			</view>
		</view>
	</view>
</template>
```

```
export default {
	data() {
		return {
			current: {
				poster: 'https://example.com/poster.png',
				src: 'https://example.com/audio.mp3',
			},
			audioAction: {
				method: 'pause'
			}
		}
	}
}
```
