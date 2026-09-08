---
title: "scroll-view"
source_url: https://miniapp.neuxnet.com/component/scroll-view.html
---
###  scroll-view

Scrollable view area. Used for zone scrolling.

Please note that in the page rendered by webview, the performance of area scrolling is not superior to page scrolling.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| scroll-x | Boolean | false | Horizontal scrolling is allowed |  |
| scroll-y | Boolean | false | Vertical scrolling is allowed |  |
| upper-threshold | Number/String | 50 | How far from the top/left (unit px), trigger the scrolltoupper event |
| lower-threshold | Number/String | 50 | How far from the bottom/right (unit px), the scrolltolower event is triggered |
| scroll-top | Number/String |  | Set vertical scroll bar position |  |
| scroll-left | Number/String |  | Set horizontal scroll bar position |
| scroll-into-view | String |  | The value should be a child element id (id cannot start with a number). If the scrollable direction is set, it scrolls to the element in that direction |  |
| scroll-with-animation | Boolean | false | Use animation to transition when setting scroll bar location |  |
| show-scrollbar | Boolean | false |
| refresher-enabled | Boolean | false |
| refresher-enabled | Boolean | false | Enable custom pull-down refresh |
| refresher-threshold | Number | 45 | Set custom pull-down refresh threshold |
| refresher-default-style | String | "black" | Set the default style of custom pull-down refresh, support setting black, white, none, none means not to use the default style | H5, app-vue 2.5.12+, WeChat applet basics Libraries 2.10.1+ |
| refresher-background | String | "#FFF" | Set the background color of the custom pull-down refresh area |
| refresher-triggered | Boolean | false | Set the current pull-down refresh status, true means pull-down refresh has been triggered, false means pull-down refresh has not been triggered |
| @scrolltoupper | EventHandle |  | Scrolling to the top/left will trigger scrolltoupper event |  |
| @scrolltolower | EventHandle |  | Scrolling to the bottom/right will trigger scrolltolower event |  |
| @scroll | EventHandle |  | Triggered when scrolling, event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} |
| @refresherpulling | EventHandle |  | The custom pull-down refresh control is pulled down |
| @refresherrefresh | EventHandle |  |
| @refresherrefresh | EventHandle |  | Custom pull-down refresh is triggered |
| @refresherrestore | EventHandle |  | Custom pull-down refresh is reset |
| @refresherabort | EventHandle |  | Custom pull-down refresh is aborted |

When using vertical scrolling, you need to give `<scroll-view>` a fixed height and set the height through css; When using horizontal scrolling, you need to add the style of `white-space: nowrap;` to `<scroll-view>`.

Template

Script

Style

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				Vertical Scroll
				<text>
					</text>
			</view>
			<view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view @tap="goTop" class="uni-link uni-center uni-common-mt">
			</view>
		
			<view class="uni-title uni-common-mt">
				Horizontal Scroll
				<text>
				</text>
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view class="uni-common-pb"></view>
		</view>
	</view>
</template>
```

###  Custom pull down to refresh

Note that the performance of custom pull-down refresh is not superior to the native pull-down refresh configured in pages.json.

Template

Script

```
<template>
    <view>
        <scroll-view style="height: 300px;" scroll-y="true" refresher-enabled="true" :refresher-triggered="triggered"
            :refresher-threshold="100" refresher-background="lightgreen" @refresherpulling="onPulling"
            @refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort"></scroll-view>
    </view>
</template>
```

**Tips**

-   Do not use native components such as map and video in scroll-view.
-   scroll-view is not suitable for long lists, or otherwise perlistance problems would occur. Long list scrolling and pull-down refreshing should be realized by using native navigation bar with page-level scrolling and pull-down refreshing. Long list should use list instead of scroll-view even on app-nvue pages.
-   scroll-into-view has a higher priority than scroll-top.
-   scroll-view runs in area scrolling, which will not trigger page scrolling, and cannot trigger the pull-down refresh configured by pages.json, onReachBottomDistance, and the transparent gradient of titleNView.
-   Scroll bar settings of scroll-view can be customized by -webkit-scrollbar of css, including hiding scroll bar.
