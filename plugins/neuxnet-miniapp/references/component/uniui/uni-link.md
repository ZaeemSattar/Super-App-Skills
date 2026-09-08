---
title: "Uni link — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-link.html
---
component name: uni-link

> Code block: `uLink`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-link)

uni-link is an external web page hyperlink component, copy the url in the applet, open an external browser in the app, and open a new web page on the h5 side.

##  introduce

###  Basic usage

```
<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
```

##  API

###  Link Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| href | String | \- | Link Address |
| text | String | \- | Display text |
| download | String | \- | H5 platform download file name |
| showUnderLine | Boolean | true | whether to show underline |
| copyTips | String | The URL has been copied automatically, please paste the URL in the mobile browser | Prompt when copying the link on the applet |
| color | String | #999999 | Link text color |
| fontSize | String | 14 | Link text size, in px |

###  Link Slots

| Name | Description |
| --- | --- |
| default | Custom content will overwrite the original content display (only supported by vue) |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-link) , select `Import example project using HBuilderX` on the right side of the page to experience the complete component example.

Template

```
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。</text>
		</uni-card>
		<uni-section title="基本示例" subTitle="打开外部连接" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
		</uni-section>
		<uni-section title="自定义颜色" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" color="#007BFF"></uni-link>
		</uni-section>
		<uni-section title="自定义下划线" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false">
			</uni-link>
		</uni-section>
		<uni-section title="自定义字体大小" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false"
				font-size="20"></uni-link>
		</uni-section>
		<uni-section title="自定义插槽" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false"
				color="red">点击跳转</uni-link>
		</uni-section>
	</view>
</template>

```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/link/link)
