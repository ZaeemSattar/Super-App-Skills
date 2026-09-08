---
title: "Uni row — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-row.html
---
component name uni-row, uni-col

> Code blocks: `uRow`, `uCol`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-row)

A fluid grid system that divides the screen or viewport into 24 pieces for quick and easy layout creation.

##  introduce

###  Platform Difference Description

###  `uni-row`

| Attribute name | App(nvue) | App(vue) | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | QQ applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| gutter | \- | √ | √ | √ | √ | √ | √ | √ |

###  `uni-col`

| Attribute name | App(nvue) | App(vue) | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | QQ applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| span | √ | √ | √ | √ | √ | √ | √ | √ |
| offset | √ | √ | √ | √ | √ | √ | √ | √ |
| push | √ | √ | √ | √ | √ | √ | √ | √ |
| pull | √ | √ | √ | √ | √ | √ | √ | √ |
| xs | \- | √ | √ | √ | √ | √ | √ | √ |
| sm | \- | √ | √ | √ | √ | √ | √ | √ |
| md | \- | √ | √ | √ | √ | √ | √ | √ |
| lg | \- | √ | √ | √ | √ | √ | √ | √ |
| xl | \- | √ | √ | √ | √ | √ | √ | √ |

###  Basic usage

```
<uni-row class="demo-uni-row">
	<uni-col>
		<view class="demo-uni-col dark_deep"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="12">
		<view class="demo-uni-col light"></view>
	</uni-col>
</uni-row>
```

###  Column offset

```
<uni-row class="demo-uni-row">
	<uni-col :span="8">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="8" :offset="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12" :pull="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12" :push="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>
```

###  Responsive layout

```
<uni-row class="demo-uni-row">
	<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
		<view class="demo-uni-col light"></view>
	</uni-col>
	<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
		<view class="demo-uni-col light"></view>
	</uni-col>
</uni-row>
```

###  CSS used

```
.demo-uni-row {
	margin-bottom: 10px;
	/* QQ、字节小程序文档写有 :host，但实测不生效 */
	/* 百度小程序没有 :host，需要设置block */
	/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
	display: block;
	/* #endif */
}

/* 支付宝小程序没有 demo-uni-row 层级 */
/* 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级 */
/* #ifdef MP-ALIPAY || MP-WEIXIN */
/deep/ .uni-row {
	margin-bottom: 10px;
}
/* #endif */

.demo-uni-col {
	height: 36px;
	border-radius: 4px;
}

.dark_deep {
	background-color: #99a9bf;
}

.dark {
	background-color: #d3dce6;
}

.light {
	background-color: #e5e9f2;
}
```

##  API

###  Row Props

`Other Platforms`

| Property Name | Type | Optional Value | Default Value | Required | Description |
| --- | --- | --- | --- | --- | --- |
| gutter | Number | \- | 0 | no | grid interval |

`nvue-platform`

| Property Name | Type | Optional Value | Default Value | Required | Description |
| --- | --- | --- | --- | --- | --- |
| width | Number/String | \- | `750rpx` | No | There is no percentage width in nvue. When using properties such as span, you need to configure this `rpx value`. This item will not affect the display effect of other platforms |

###  Col Props

| Property Name | Type | Optional Value | Default Value | Required | Description |
| --- | --- | --- | --- | --- | --- |
| span | Number | \- | 24 | no | number of columns occupied by the grid |
| offset | Number | \- | \- | No | Number of spaces to the left of the grid |
| push | Number | \- | \- | No | Grid offset to the right by the number of cells |
| pull | Number | \- | \- | No | Grid offset number to the left |
| xs | Number/object | \- | \- | No | The grid rules to display when the screen width is `<768px`, such as: `:xs="8"` or `:xs="{span: 8, pull : 4}"` |
| sm | Number/object | \- | \- | No | Grid rules to display when screen width `≥768px` |
| md | Number/object | \- | \- | No | Grid rules to display when screen width `≥992px` |
| lg | Number/object | \- | \- | No | Grid rules to display when screen width `≥1200px` |
| xl | Number/object | \- | \- | No | Grid rules to display when screen width `≥1920px` |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-row) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<!-- #ifndef APP-NVUE -->
			<text class="uni-h6"> 流式栅格系统，随着屏幕或视口分为 24 份，可以迅速简便地创建布局</text>
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<text class="uni-h6"> 流式栅格系统，在nvue不可使用媒体查询</text>
			<!-- #endif -->
		</uni-card>

		<uni-section title="基础布局" subTitle="使用单一分栏创建基础的栅格布局" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col>
						<view class="demo-uni-col dark_deep"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col :span="12">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="12">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col :span="8">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="8">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="8">
						<view class="demo-uni-col dark"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col :span="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>
			</view>
		</uni-section>

		<uni-section title="混合布局" subTitle="通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="8">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="8">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="16">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
				</uni-row>
			</view>
		</uni-section>

		<uni-section title="分栏偏移" subTitle="支持偏移指定的栏数" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="8">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="8" :offset="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="6" :offset="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="6" :offset="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="12" :pull="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="6" :push="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="12" :offset="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
				</uni-row>
			</view>
		</uni-section>

		<!-- #ifndef APP-NVUE -->
		<uni-section title="响应式布局" subTitle="共五个响应尺寸：xs、sm、md、lg 和 xl" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :gutter="gutter">
					<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>
			</view>
		</uni-section>

		<!-- #endif -->
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/row/row)
