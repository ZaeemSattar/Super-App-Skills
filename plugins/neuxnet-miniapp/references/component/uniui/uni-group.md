---
title: "Uni group — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-group.html
---
component name: uni-group

> Code block: `uGroup`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-group)

Group Components can be used to group components, adding spacing, to produce distinct blocks.

##  introduce

###  Basic usage

```
<uni-group title="分组1" top="20">
    <view>分组1 的内容</view>
    <view>分组1 的内容</view>
</uni-group>

<uni-group title="分组2">
    <view>分组2 的内容</view>
    <view>分组2 的内容</view>
</uni-group>
```

##  API

###  Group Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| title | String | \- | Main title |
| top | Number | \- | Group Interval |
| mode | String | '' | Mode , card is the card mode |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-group) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

```
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">分组组件可用于将组件分组，添加间隔，以产生明显的区块。</text>
		</uni-card>
		<uni-section title="基础分组" type="line">
			<uni-group>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
			<uni-group title="基本模式" margin-top="20">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
		</uni-section>
		<uni-section title="卡片分组" type="line">
			<uni-group mode="card">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>

			<uni-group title="card 模式" mode="card">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
		</uni-section>

	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/group/group)
