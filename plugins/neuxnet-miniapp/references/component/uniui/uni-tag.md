---
title: "Uni tag — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-tag.html
---
component name: uni-tag

> Code block: `uTag`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-tag)

It is used to display one or more text labels, which can be clicked to switch between selected and unselected states.

##  introduce

###  Basic usage

Using components in `template`

```
<uni-tag text="标签"></uni-tag>
<uni-tag text="标签" type="error" :circle="true"></uni-tag>
<uni-tag text="标签" @click="bindClick"></uni-tag>
```

##  API

###  Tag Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| text | String | \- | label content |
| size | String | normal | Size size, optional values: normal, small |
| type | String | default | Color type, optional values: default (gray), primary (blue), success (green), warning (yellow), error (red), royal (purple) |
| disabled | Boolean | false | Disabled |
| inverted | Boolean | false | Doesn't need background color (hollow label) |
| circle | Boolean | false | Whether it is rounded |

###  Tag Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| @click | Click on Tag to trigger event | \- |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-tag) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

```
<template>
	<view class="container">
		<uni-card is-full>
			<text class="uni-h6">标签组件多用于商品分类、重点内容显示等场景。</text>
		</uni-card>

		<uni-section title="实心标签" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag text="标签" type="primary" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="success" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="warning" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="error" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" />
				</view>
			</view>
		</uni-section>

		<uni-section title="空心标签" subTitle="使用 inverted 属性显示空心表签" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="primary" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="success" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="warning" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="error" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" />
				</view>
			</view>
		</uni-section>

		<uni-section title="标签尺寸" subTitle="使用 size 属性控制标签大小" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag text="标签" type="primary" size="normal" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="primary" size="small" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="primary" size="mini" />
				</view>
			</view>
		</uni-section>

		<uni-section title="圆角样式" subTitle="使用 circle 属性控制标签圆角" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :circle="true" text="标签" type="primary" />
				</view>
				<view class="tag-view">
					<uni-tag :circle="true" text="标签" type="primary" size="small" />
				</view>
				<view class="tag-view">
					<uni-tag :circle="true" text="标签" type="primary" size="mini" />
				</view>
			</view>
		</uni-section>

		<uni-section title="标记样式" subTitle="使用 mark 属性显示标记样式" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :mark="true" text="标签" type="primary" size="default" />
				</view>
				<view class="tag-view">
					<uni-tag :mark="true" text="标签" type="primary" size="small" />
				</view>
				<view class="tag-view">
					<uni-tag :mark="true" text="标签" type="primary" size="mini" />
				</view>
			</view>
		</uni-section>
		<uni-section title="不可点击状态" subTitle="使用 disabled 属性 显示禁用样式" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag disabled text="标签" type="primary" />
				</view>
			</view>
		</uni-section>

		<uni-section title="自定义样式" subTitle="使用 custom-style 属性自定义样式" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag text="自定义标签样式"
						custom-style="background-color: #4335d6; border-color: #4335d6; color: #fff;">
					</uni-tag>
				</view>
			</view>
		</uni-section>

		<uni-section title="点击事件" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :type="type" text="标签" @click="setType" />
				</view>
				<view class="tag-view">
					<uni-tag :circle="true" :inverted="inverted" text="标签" type="primary" @click="setInverted" />
				</view>
			</view>
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/tag/tag)
