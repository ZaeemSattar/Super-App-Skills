---
title: "uni.createVideoContext(videoId, this)"
source_url: https://miniapp.neuxnet.com/api/media/video-context.html
---
###  uni.createVideoContext(videoId, this)

Create and return videoContext object of the video context. Under custom components, the second parameter is passed into the custom component instance this to operate the `<video>` component.

**Method list of videoContext object**

| Method | Parameter | Instruction |
| --- | --- | --- |
| play | None | Play |  |
| pause | None | Pause |  |
| seek | position | Jump to the specified position, in s |  |
| stop |  | stop video | WeChat applet |
| sendDanmu | danmu | Send Bullet screen (danmu) which contains two attributes, text and color. |  |
| playbackRate | rate | Set the multi-speed playback, the supported ratios are 0.5/0.8/1.0/1.25/1.5. WeChat base library 2.6.3 supports 2.0x speed |  |
| requestFullScreen | None | To enter full screen, you can pass in the {direction} parameter, see the video component documentation for details | H5 and ByteDance applet do not support the {direction} parameter |
| exitFullScreen | None | Exit full screen |  |
| showStatusBar | None | Show the status bar, only valid in iOS full screen | WeChat applet, Baidu applet, QQ applet |
| hideStatusBar | None | Hide the status bar, only valid in iOS full screen | WeChat applet, Baidu applet, QQ applet |

**Example**

```
<template>
	<view>
		<view class="page-body">
			<view class="page-section">
				<video id="myVideo" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-Mini-App-doc/360e4b20-4f4b-11eb-8a36-ebb87efcf8c0.mp4" @error="videoErrorCallback" :danmu-list="danmuList"
				    enable-danmu danmu-btn controls>
                                </video>

				<view class="uni-list">
					<view class="uni-list-cell">
						<view>
							<view class="uni-label">
								</view>
						</view>
						<view class="uni-list-cell-db">
							<input @blur="bindInputBlur" class="uni-input" type="text" placeholder="" />
						</view>
					</view>
				</view>
				<view class="btn-area">
					<button @tap="bindSendDanmu" class="page-body-button" formType="submit">
					</button>
				</view>
			</view>
		</view>
	</view>
</template>
```

```
export default {
	data() {
		return {
			title: 'video',
			src: '',
			inputValue: '',
			danmuList: [{
					text: '111',
					color: '#ff0000',
					time: 1
				},
				{
					text: '222',
					color: '#ff00ff',
					time: 3
				}
			]
		}
	},
	onReady: function (res) {
		this.videoContext = uni.createVideoContext('myVideo')
	},
	methods: {
		bindInputBlur: function (e) {
			this.inputValue = e.target.value
		},
		bindButtonTap: function () {
			var that = this
			uni.chooseVideo({
				sourceType: ['album', 'camera'],
				maxDuration: 60,
				camera: ['front', 'back'],
				success: function (res) {
					this.src = res.tempFilePath
				}
			})
		},
		bindSendDanmu: function () {
			this.videoContext.sendDanmu({
				text: this.inputValue,
				color: this.getRandomColor()
			})
		},
		videoErrorCallback: function (e) {
			console.log(e.target.errMsg)
		},
		getRandomColor: function () {
			const rgb = []
			for (let i = 0; i < 3; ++i) {
				let color = Math.floor(Math.random() * 256).toString(16)
				color = color.length == 1 ? '0' + color : color
				rgb.push(color)
			}
			return '#' + rgb.join('')
		}
	}
}
```
