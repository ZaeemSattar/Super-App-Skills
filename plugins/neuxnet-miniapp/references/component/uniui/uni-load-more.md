---
title: "Uni load more — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-load-more.html
---
component name: uni-load-more

> Code block: `uLoadMore`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-load-more)

Used in lists, used for scroll loading, and displayed various states of loading.

##  introduce

###  Basic usage

```
<uni-load-more status="more"></uni-load-more>
```

##  API

###  LoadMore Props

| property name | type | optional value | default value | description |
| --- | --- | --- | --- | --- |
| iconSize | Number | \- | 24 | Specify icon size |
| status | String | more/loading/noMore | more | loading status |
| showIcon | Boolean | \- | true | whether to show the loading icon |
| showText | Boolean | \- | true | \*\*\[New in 1.3.3\]\*\*Whether to display text |
| iconType | String | snow/circle/auto | auto | Specify icon style |
| color | String | \- | #777777 | Icon and text color |
| contentText | Object | \- | {contentdown: "Pull up to show more",contentrefresh: "Loading...",contentnomore: "No more data"} | Text description of each state |

####  Status Options

| Parameter name | Description |
| --- | --- |
| more | Before Loading |
| loading | Loading |
| no-more | No more data |

####  IconType Options

| Parameter name | Description |
| --- | --- |
| snow | ios snowflake loading style |
| circle | Android Ring Loading Style |
| auto | Automatically select loading styles based on platform |

Description

When `iconType` is `snow`, the size cannot be set on the `APP-NVUE` platform, and the color cannot be set on the non-`APP-NVUE` platform

###  LoadMore Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| clickLoadMore | triggered when click to load more | e.detail={status:'loading'} |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-load-more) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">加载更多组件用于页面加载更多数据时，页面底部显示内容等场景</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<uni-load-more :status="status" />
		</uni-section>
		<uni-section title="修改默认文字" type="line">
			<uni-load-more :status="status" :content-text="contentText" />
		</uni-section>
		<uni-section title="改变颜色" type="line">
			<uni-load-more color="#007AFF" :status="status" />
		</uni-section>
		<uni-section title="指定加载图标样式 - 按平台自动选择样式" type="line">
			<uni-load-more iconType="auto" :status="status" />
		</uni-section>
		<uni-section title="指定加载图标样式 - 环形" type="line">
			<uni-load-more iconType="circle" :status="status" />
		</uni-section>

		<uni-section title="改变组件状态" type="line">
			<radio-group class="uni-list" @change="onChange">
				<view v-for="(item, index) in statusTypes" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">
							<text class="uni-list-item__content-title">{{ item.text }}</text>
						</view>
						<view class="uni-list-item__extra">
							<radio :value="item.value" :checked="item.checked" />
						</view>
					</view>
				</view>
			</radio-group>
		</uni-section>

	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/load-more/load-more)
