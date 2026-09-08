---
title: "progress"
source_url: https://miniapp.neuxnet.com/component/progress.html
---
####  progress

Progress bar.

**Attribute description**

| property name | type | default value | description |
| --- | --- | --- | --- |
| percent | Number | None | Percent 0~100 |  |
| show-info | Boolean | false | Display percentage on the right side of the progress bar |  |
| stroke-width | Number | 6 | Width of progress bar, in px |  |
| activeColor | Color | #09BB07 (Baidu is #E6E6E6) | Selected progress bar color |  |
| backgroundColor | Color | #EBEBEB | Color of the unselected progress bar |  |
| active | Boolean | false | Animation of progress bar from left to right |  |
| active-mode | String | backwards | backwards: The animation is broadcast from the beginning; forwards: The animation is broadcast from the last end point | App, H5, WeChat applet, QQ applet, Kuaishou applet, Jingdong applet |
| duration | Number | 30 | The number of milliseconds required to increase the progress by 1% | App-nvue2.6.1+, WeChat basic library 2.8.2+, H5 3.1.11+, App-Vue 3.1.11+, Kuaishou applet, Jingdong applet |

Template

Script

Style

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="progress-box">
				<progress :percent="pgList[0]" show-info stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress :percent="pgList[1]" stroke-width="3" />
				<uni-icons type="close" class="progress-cancel" color="#dd524d"></uni-icons>
			</view>
			<view class="progress-box">
				<progress :percent="pgList[2]" stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress :percent="pgList[3]" activeColor="#10AEFF" stroke-width="3" />
			</view>
			<view class="progress-control">
				<button type="primary" @click="setProgress">
				</button>
				<button type="warn" @click="clearProgress">
				</button>
			</view>
		</view>
	</view>
</template>
```
