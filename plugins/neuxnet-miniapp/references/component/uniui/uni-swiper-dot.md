---
title: "Uni swiper dot — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-swiper-dot.html
---
component name: uni-swiper-dot

> Code block: `uSwiperDot`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-swiper-dot)

Custom carousel indicator points

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   This component depends on the `swiper` component, please use it with the `swiper` component
-   `width` and `height` should not be set too large or too small unless necessary
-   `swiper-item` should be kept within a certain amount as much as possible, otherwise the indicator point may exceed the screen
-   Do not support vertical pointers

###  Basic usage

Use in `template`

```
<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
	<swiper class="swiper-box" @change="change">
		<swiper-item v-for="(item ,index) in info" :key="index">
			<view class="swiper-item">
				{{item.content}}
			</view>
		</swiper-item>
	</swiper>
</uni-swiper-dot>
```

```
export default {
	data() {
		return {
			info: [{
				content: '内容 A'
			}, {
				content: '内容 B'
			}, {
				content: '内容 C'
			}],
			current: 0,
			mode: 'round',
		}
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		}
	}
}
```

##  API

###  SwiperDot Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| current | Number | 0 | The index of the current index point, which must be `e.detail.current` | obtained through the `change` event of `swiper` |
| mode | String | default | indicates the type of the point, optional values: default , round , nav , indexes |
| field | String | \- | When mode is nav, the displayed content field (required when mode = nav) |
| info | Array | \- | The data of the carousel, the number of indicated points is determined by the length of the array |
| dotsStyles | Object | \- | Indicates dot styles |

####  dotsStyles Options

| property name | type | default value | description |
| --- | --- | --- | --- |
| width | Number | 8 | Indicates point width **Not valid when mode = nav, mode = indexes** |
| bottom | Number | 10 | Indicates the height of the dot from the bottom of the `swiper` |
| color | Color | '#fff' | Indicates the point foreground color, **only valid when mode = nav, mode = indexes** |
| backgroundColor | Color | 'rgba(0, 0, 0, .3)' | Indicating point background color not selected |
| border | Border | '1px rgba(0, 0, 0, .3) solid' | point border style not selected |
| selectedBackgroundColor | Color | '#333' | The background color of the indicator point has been selected, **not valid when mode = nav** |
| selectedBorder | Border | '1px rgba(0, 0, 0, .9) solid' | indicated point border style is selected, **does not take effect when mode = nav** |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-swiper-dot) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="content">
		<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="info" :current="current" :mode="mode"
			:dots-styles="dotsStyles" field="content">
			<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
				<swiper-item v-for="(item, index) in 3" :key="index">
					<view class="swiper-item" :class="'swiper-item' + index">
						<text style="color: #fff; font-size: 32px;">{{index+1}}</text>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<uni-section title="模式选择" type="line">
			<view class="example-body">
				<view :class="{ active: modeIndex === 0 }" class="example-body-item" @click="selectMode('default', 0)">
					<text class="example-body-item-text">default</text></view>
				<view :class="{ active: modeIndex === 1 }" class="example-body-item" @click="selectMode('dot', 1)"><text
						class="example-body-item-text">dot</text></view>
				<view :class="{ active: modeIndex === 2 }" class="example-body-item" @click="selectMode('round', 2)">
					<text class="example-body-item-text">round</text></view>
				<view :class="{ active: modeIndex === 3 }" class="example-body-item" @click="selectMode('nav', 3)"><text
						class="example-body-item-text">nav</text></view>
				<view :class="{ active: modeIndex === 4 }" class="example-body-item" @click="selectMode('indexes', 4)">
					<text class="example-body-item-text">indexes</text></view>
			</view>
		</uni-section>

		<uni-section title="颜色样式选择" type="line">
			<view class="example-body">
				<template v-if="mode !== 'nav'">
					<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index"
						class="example-body-item" @click="selectStyle(index)">
						<view :style="{ 'background-color': item.selectedBackgroundColor, border: item.selectedBorder }"
							class="example-body-dots" />
						<view :style="{ 'background-color': item.backgroundColor, border: item.border }"
							class="example-body-dots" />
						<view :style="{ 'background-color': item.backgroundColor, border: item.border }"
							class="example-body-dots" />
					</view>
				</template>
				<template v-if="mode === 'nav'">
					<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index"
						:style="{ 'background-color': item.selectedBackgroundColor }" class="example-body-item"
						@click="selectStyle(index)">
						<text class="example-body-item-text" :style="{ color: item.color }">内容</text>
					</view>
				</template>
			</view>
		</uni-section>

	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/swiper-dot/swiper-dot)
