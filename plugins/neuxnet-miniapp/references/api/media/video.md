---
title: "uni.chooseVideo(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/media/video.html
---
###  uni.chooseVideo(OBJECT)

Shoot a video or select one from the mobile photo album, and call back the temporary file path of the video.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| sourceType | Array<String> | No | album means to select video from album, camera means to use camera to shoot, defaulting to\['album', 'camera'\] |  |
| extension | Array<String> | No | Filter by file extension, each item cannot be an empty string. No filtering by default. | H5 |
| compressed | Boolean | No | Whether to compress the selected video source file, the default value is true, compression is required. | Mini App |
| maxDuration | Number | No | The longest video recording time, in seconds. A maximum of 60 seconds is supported. | Mini App (iOS support, Android depends on whether the camera component of ROM implements this function, if this function is not implemented, this property is ignored.) WeChat applet, Baidu applet, Jingdong applet |
| camera | String | No | 'front', 'back', default 'back' | Mini App |
| success | Function | No | The interface is successfully called, and the temporary file path of the video file is returned. See the description of return parameters for details. |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**success return parameter description**

| Parameters | Type | Description |
| --- | --- | --- |
| tempFilePath | String | Select temporary file path for video |  |
| tempFile | File | Selected video file | Only supported by H5 |
| duration | Number | The duration of the selected video, in s | Mini App |
| size | Number | Data size of the selected video | Mini App |
| height | Number | Returns the height of the selected video | Mini App |
| width | Number | Returns the width of the selected video | Mini App |
| name | String | File names with extensions | Supported on H5 only |

**Notice:**

-   The value of sourceType varies according to different browsers on the H5 platform. Generally, it is not restricted to use only the photo album, and some browsers cannot restrict whether to use the camera.
-   The maximum video selected by the Android side only supports 180MB. If you want to break this limit
-   The temporary path of the file can be used normally during this startup of the application. To save it for a long time, you need to call [uni.saveFile](../file/file.md#savefile) actively, which will not be accessible until the next startup of the application.
-   camera is not available for some Android phones because the system ROM doesn't support it, which can be switched after opening the shooting interface.
-   The user authorization API can be used to determine whether the user authorizes the application the access to the photo album or camera
-   Video information cannot be obtained in some browsers.

**Example**

```
<template>
	<view>
		<text>hello</text>
		<button @tap="test">click me</button>
		<video :src="src"></video>
	</view>
</template>
```

```
export default {
	data() {
		return {
			src: ''
		}
	},
	methods: {
		test: function () {
			var self = this;
			uni.chooseVideo({
				sourceType: ['camera', 'album'],
				success: function (res) {
					self.src = res.tempFilePath;
				}
			});
		}
	}
}
```

###  uni.saveVideoToPhotosAlbum(OBJECT)

Save the video to the system album.

**Platform difference description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| filePath | String | Yes | The video file path can be a temporary file path or a permanent file path. |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**success return parameter description**

| Parameter name | Type | Instruction |
| --- | --- | --- |
| errMsg | String | Call result |

**Notice**

-   The user authorization API can be used to determine whether the user authorizes the application the permission to write the album **Example**

```
<template>
	<view>
		<text>hello</text>
		<button @tap="test">click me</button>
		<video :src="src"></video>
	</view>
</template>
```

```
export default {
	data() {
		return {
			src: ''
		}
	},
	methods: {
		test: function () {
			var self = this;
			uni.chooseVideo({
				sourceType: ['camera'],
				success: function (res) {
					self.src = res.tempFilePath;
					
					uni.saveVideoToPhotosAlbum({
						filePath: res.tempFilePath,
						success: function () {
							console.log('save success');
						}
					});
				}
			});
		}
	}
}
```

###  uni.getVideoInfo(OBJECT)

Get video details

**OBJECT parameter description**

| property | type | default | required | description |
| --- | --- | --- | --- | --- |
| src | string | \- | Yes | Video file path, can be a temporary file path or a permanent file path (network address is not supported) |
| success | function | \- | No | Callback function for successful interface call |
| fail | function | \- | No | Callback function for interface call failure |
| complete | function | \- | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**success return parameter description**

| Parameter Name | Type | Description |
| --- | --- | --- |
| orientation | string | Screen orientation | Mini App |
| type | string | Video format | Mini App |
| duration | number | Video length |  |
| size | number | Video size, unit kB |  |
| height | number | The length of the video, in px |  |
| width | number | The width of the video, in px |  |
| fps | number | Video frame rate | Mini App |
| bitrate | number | Video bit rate, unit kbps | Mini App |

**res.orientation parameter description**

| Value | Instruction |
| --- | --- |
| up | Default |
| down | 180° rotation |
| left | Rotate 90° counterclockwise |
| right | Rotate 90° clockwise |
| up-mirrored | Same as up, but flipped horizontally |
| down-mirrored | Same as down, but flipped horizontally. |
| left-mirrored | Same as left, but flipped vertically. |
| right-mirrored | Same as right, but flipped vertically. |

###  uni.compressVideo(OBJECT)

Compressed video interface. Developers can specify the compression quality (quality) for compression. When finer control is needed, bitrate, fps and resolution can be specified, which will be ignored when quality is passed in. The related information of the original video can be obtained through getVideoInfo.

**Platform difference description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| src | string |  | Yes | The video file path can be a temporary file path or a permanent file path. |
| quality | string |  | Yes | Compression quality |
| bitrate | number |  | Yes | bit rate, in kbps |
| fps | number |  | Yes | Frame rate |
| resolution | number |  | Yes | Resolution ratio to the original video, with the value range of (0, 1\] |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Optional values of quality**

| Value | Instruction |
| --- | --- |
| low | Low |
| medium | Middle |
| high | High |

**success return parameter description**

| Parameter name | Type | Instruction |
| --- | --- | --- |
| tempFilePath | string | Compressed temporary file address |
| size | string | Compressed size, in kB |
