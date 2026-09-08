---
title: "Uni badge — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-badge.html
---
component name: uni-badge

> Code block: `uBadge`

The digital corner mark is generally used in conjunction with other controls (list, 9-grid, etc.) to prompt the number, and the default is a solid gray background.

##  introduce

###  Basic usage

Using components in `template`

```
<uni-badge size="small" :text="100" absolute="rightBottom" type="primary">
	<button type="default">右下</button>
</uni-badge>

<uni-badge text="1"></uni-badge>

<uni-badge text="2" type="purple" @click="bindClick"></uni-badge>

<uni-badge text="3" type="primary" :inverted="true"></uni-badge>

```

##  properties/methods

###  Badge Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| text | String | \- | Corner content |
| type | String | default | Color type, optional values: default (gray), primary (blue), success (green), warning (yellow), error (red) |
| size | String | normal | Badge size, possible values: normal, small |
| is-dot | Boolean | false | No numbers, just a dot |
| max-num | String/Numbuer | 99 | Display the capped number value, if it exceeds 99, display 99+ |
| custom-style | Object | {} | Custom Badge style, style object syntax |
| inverted | Boolean | false | Does not require background color, when true, the background color will be changed to the font color of the text |
| absolute(nvue is not supported) | String | rightTop | Open absolute positioning, the corner label will be positioned on the four corners of the label it wraps, optional values: rightTop (upper right corner), rightBottom (lower right corner), leftBottom (lower left corner) corner) , leftTop (upper left corner) |
| offset | Array\[number\] | \[0, 0\] | The offset from the center point of the positioning corner, \[-10, -10\] means offset by 10px in the direction specified by absolute, \[10, 10\] means specified by absolute The offset is 10px in the opposite direction, which is only valid when the absolute attribute exists, and corresponds to the absolute value one-to-one (for example: the value is rightTop, the corresponding offset is \[right, Top\]) |

###  Badge Events

| Event Name | Event Description | Return Parameters |
| --- | --- | --- |
| @click | Click Badge triggers event | \- |

##  Example

attention

Copying the sample code directly will not work. The sample relies on multiple components such as `uni-card` `uni-section` `uni-scss`.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-badge) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

```
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等</text>
		</uni-card>
		<uni-section title="基础用法" type="line" padding>
			<view class="example-body">
				<uni-badge class="uni-badge-left-margin" text="1" />
				<uni-badge class="uni-badge-left-margin" text="2" type="primary" />
				<uni-badge class="uni-badge-left-margin" text="34" type="success" />
				<uni-badge class="uni-badge-left-margin" text="45" type="warning" />
				<uni-badge class="uni-badge-left-margin" text="123" type="info" />
			</view>
		</uni-section>
		<uni-section title="无底色" type="line" padding>
			<view class="example-body">
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="1" />
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="2" type="primary" />
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="34" type="success" />
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="45" type="warning" />
				<uni-badge class="uni-badge-left-margin" :inverted="true" text="123" type="info" />
			</view>
		</uni-section>

		<uni-section title="自定义样式" type="line" padding>
			<view class="example-body">
				<uni-badge class="uni-badge-left-margin" text="2" type="primary"
					:customStyle="{background: '#4335d6'}" />
				<uni-badge class="uni-badge-left-margin" text="2" type="primary" :customStyle="customStyle" />
			</view>
		</uni-section>

		<uni-section title="定位: aboslute 属性" subTitle="注：在安卓端不支持 nvue" type="line" padding>
				<uni-badge class="uni-badge-left-margin" :text="value" absolute="rightTop" size="small">
					<view class="box"><text class="box-text">右上</text></view>
				</uni-badge>
		</uni-section>

		<uni-section title="偏移: offset 属性(存在 aboslute)" type="line" padding>
			<uni-badge class="uni-badge-left-margin" :text="8" absolute="rightTop" :offset="[-3, -3]" size="small">
				<view class="box"><text class="box-text">右上</text></view>
			</uni-badge>
		</uni-section>
		<uni-section title="仅显示点: is-dot 属性" type="line" padding>
			<uni-badge class="uni-badge-left-margin" :is-dot="true" :text="value" absolute="rightTop" size="small">
				<view class="box"><text class="box-text">圆点</text></view>
			</uni-badge>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				value: 0,
				customStyle: {
					backgroundColor: '#62ed0d',
					color: '#fff'
				}
			};
		},
		mounted() {
			const timer = setInterval(() => {
				if (this.value >= 199) {
					clearInterval(timer)
					return
				}
				this.value++
			}, 100)
		}
	};
</script>

<style lang="scss">
	/* #ifdef MP-ALIPAY */
	.uni-badge {
		margin-left: 20rpx;
	}

	/* #endif */
	.example-body {
		flex-direction: row;
		justify-content: flex-start;
	}

	.uni-badge-left-margin {
		margin-left: 10px;
	}

	.uni-badge-absolute {
		margin-left: 40px;
	}

	.box {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #DCDFE6;
		color: #fff;
		font-size: 12px;
	}

	.box-text {
		text-align: center;
		color: #fff;
		font-size: 12px;
	}
</style>

```
