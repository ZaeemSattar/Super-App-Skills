---
title: "swiper"
source_url: https://miniapp.neuxnet.com/component/swiper.html
---
###  swiper

Slider view container.

Generally used to slide left and right or up and down, such as banner carousel.

Note the difference between sliding switching and scrolling. Sliding switching is switching one screen after the other. Each swiper-item under swiper is a sliding switching area, and cannot stay between two sliding areas.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| indicator-dots | Boolean | false | Whether to display panel indicator points? |  |
| indicator-color | Color | rgba(0, 0, 0, .3) | Indicator color |  |
| indicator-active-color | Color | #000000 | Color of the currently selected indicator |  |
| Class | Alipay applet |
| autoplay | Boolean | false | Whether to switch automatically? |  |
| current | Number | 0 | index of the current slider |  |
| current-item-id | String |  | The item-id of the current slider, cannot be specified together with current | Alipay applet does not support |
| interval | Number | 5000 | Time interval for automatic switching |  |
| duration | Number | 500 | Slide animation duration | Not supported by app-nvue |
| circular | Boolean | false | Whether to use circular sliding, i.e. return to the beginning after playing |  |
| vertical | Boolean | false | Whether the sliding direction is longitudinal? |  |
| previous-margin | String | 0px | The front margin, which can be used to reveal a small part of the previous item, accepts px and rpx values | app-nvue, ByteDance applet, Feishu applet do not support |
| next-margin | String | 0px | The back margin, which can be used to expose a small part of the next item, accepts px and rpx values | app-nvue, ByteDance applet, Feishu applet do not support |
| display-multiple-items | Number | 1 | Number of sliders displayed at the same time | app-nvue, Alipay applet not supported |
| skip-hidden-item-layout | Boolean | false | Whether to skip the slider layout that is not displayed, set to true to optimize the sliding performance in complex situations, but the layout information of the hidden state slider will be lost | App, WeChat small Program, JD Mini Program |
| disable-touch | Boolean | false | Whether user touch operation is prohibited | App 2.5.5+, H5 2.5.5+, Alipay applet, ByteDance applet and Feishu applet (only valid during initialization, not dynamic change) |
| @change | EventHandle |  | change event will be triggered when current changes, event.detail = {current: current, source: source} |  |
| @transition | EventHandle |  | The transition event will be triggered when the position of the swiper-item changes, event.detail = {dx: dx, dy: dy}, Alipay applet does not support dx, dy | App, H5, WeChat applet Program, Alipay applet, ByteDance applet, Feishu applet, QQ applet, Kuaishou applet |
| @animationfinish | EventHandle |  | The animationfinish event will be triggered when the animation ends, event.detail = {current: current, source: source} | ByteDance applet and Feishu applet are not supported |

A source field is contained when change event returns detail, which indicates the cause of the change. Possible values are as follows:

-   Autoplay causes the swiper to change.
-   User touch causes the swiper to change.
-   Other reasons will be indicated by an empty string.

**A special issue about using swiper to make long lists of left and right drags**

-   Swiper is a single page component suitable for banner picture carousel and simple list sliding left and right.
-   For perlistance reasons, making complex long lists with swiper requires high optimization skills and will be subject to certain limitations.

**Tips**

-   If the `@animationfinish` event on the nvue page cannot return correct data, you can listen to the `@change` event at the same time.
-   When using vertical scrolling, you need to give `<scroll-view>` a fixed height by css.
-   Note: Only the `<swiper-item>` component can be placed in it, or otherwise it will lead to undefined behavior.
-   The switching effect of the banner picture and the style of the indicator can be customized in a variety of styles

####  easing-function

| value | description |
| --- | --- |
| default | Default easing function |
| linear | Linear animation |
| easeInCubic | Ease-In Animation |
| easeOutCubic | Ease Out Animation |
| easeInOutCubic | Ease In Ease Out Animation |

####  swiper-item

It can only be placed in the `<swiper>` component, with the width and height automatically set to 100%. Note: 100% of the width and height is relative to its parent component rather than sub-component, and it cannot be opened automatically by sub-component.

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| item-id | String |  | The identifier of this swiper-item |

Template

Script

Style

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="swiper-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<switch :checked="indicatorDots" @change="changeIndicatorDots" />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<switch :checked="autoplay" @change="changeAutoplay" />
			</view>
		</view>
		
		<view class="uni-padding-wrap">
			<view class="uni-common-mt">
				<text class="info">{{duration}}</text>
			</view>
			<slider @change="durationChange" :value="duration" min="500" max="2000" />
			<view class="uni-common-mt">
				<text class="info">{{interval}}</text>
			</view>
			<slider @change="intervalChange" :value="interval" min="2000" max="10000" />
		</view>
	</view>
</template>
```
