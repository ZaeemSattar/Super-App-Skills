---
title: "Uni pagination — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-pagination.html
---
component name: uni-pagination

> Code block: `uPagination`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-pagination)

Pager component, used to display page numbers, request data, etc.

##  introduce

###  Basic usage

```
<uni-pagination title="标题文字" total="20"></uni-pagination>
<uni-pagination title="标题文字" show-icon="true" total="50" current="2"></uni-pagination>
```

##  API

###  Pagination Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| prevText | String | Previous page | left button text |
| nextText | String | Next page | Right button text |
| value/v-model | Number | 1 | Current Page |
| current | Number | 1 | Current page, higher priority than value |
| total | Number | 0 | Total data |
| pageSize | Number | 10 | Data size per page |
| showIcon | Boolean | false | Whether to show the button as an icon |

###  Pagination Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| @change | Triggered when the page number button is clicked | e={type,current} current is the current page, and the type value is: next/prev, indicating whether the previous page or the next page is clicked |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-pagination) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">分页器组件，用于展示页码、请求数据等</text>
		</uni-card>
		<uni-section title="默认样式" type="line" padding>
			<uni-pagination :total="50" title="标题文字" />
		</uni-section>
		<uni-section title="修改按钮文字" subTitle="使用 prev-text / next-text 属性修改按钮文字" type="line" padding>
			<uni-pagination :total="50" title="标题文字" prev-text="前一页" next-text="后一页" />
		</uni-section>
		<uni-section title="图标样式" subTitle="使用 show-icon 属性显示图标按钮" type="line" padding>
			<uni-pagination :show-icon="true" :total="50" title="标题文字" />
		</uni-section>
		<uni-section title="修改数据长度" type="line" padding>
			<uni-pagination :current="current" :total="total" title="标题文字" :show-icon="true" @change="change" />
			<view class="btn-view">
				<view>
					<text class="example-info">当前页：{{ current }}，数据总量：{{ total }}条，每页数据：{{ pageSize }}</text>
				</view>
				<view class="btn-flex">
					<button class="button word-btn" hover-class="word-btn--hover" :hover-start-time="20"
						:hover-stay-time="70" @click="add"><text class="word-btn-white">增加10条数据</text></button>
					<button class="button" type="default" @click="reset">重置数据</button>
				</view>
			</view>
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/pagination/pagination)
