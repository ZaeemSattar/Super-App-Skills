---
title: "Uni title — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-title.html
---
component name: uni-title

> Code block: `uTitle`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-title)

The chapter title, usually used to record the page title, using the current component, uni-app will automatically count the page title if statistics are enabled.

##  introduce

###  Basic usage

```
<uni-title title="上报统计数据"></uni-title>
<uni-title type="h1" title="h1 一级标题 "></uni-title>
<uni-title type="h1" title="h1 一级标题" color="#027fff"></uni-title>
<uni-title type="h2" title="h2 居中" align="center"></uni-title>
```

###  Title Statistics

The title component can be used with the uni statistics collection, as long as the uni statistics is turned on, the title can be automatically collected

-   If the type attribute is not written, it is the report title. This is the default usage of title statistics. The page will preferentially report the title value passed in by the component to the statistics report data.
-   The page statistics report will only be reported once. If multiple components are enabled, only the content of the last component will be reported. Therefore, if it is not necessary, please do not enable statistics for multiple components at the same time to avoid reporting wrong title statistics.
-   To avoid reporting wrong title statistics, do not use the uni.report() API with the chapter title component

Notes

-   When using the align attribute, it does not take effect on non-nvue pages, or the width of the component is wrong. Please set the display of an element outside the component to block to solve the problem.
    
    **Example:**
    
    ```
    <template>
    	<view class="box">
    		<uni-title type="h1" title="h1 一级标题 "></uni-title>
    	</view>
    </template>
    <style>
    	.box {
    		/* #ifndef APP-NVUE */
    		display: block;
    		/* #endif */
    	}
    </style>
    ```
    

##  API

###  Title Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| type | String | \- | Title type, optional values h1, h2, h3, h4, h5 , the chapter title font will be thicker than the normal font length, do not specify the type value, the default is to report statistics |
| title | String | \- | Chapter Title Content |
| align | String | \- | Alignment, optional left: left alignment; center: center; right: right alignment; |
| color | String | \- | Font Color |
| stat | Boolean | \- | Whether to enable the statistics function, if you do not fill in the type value, the default is on, fill in the type attribute, the default is off |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-title) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="uni-content">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6"> 章节标题，通常用于记录页面标题，使用当前组件在 uni-app 开启统计的情况下，将会自动统计页面标题.</text>
		</uni-card>
		<uni-section title="不同类型" type="line">
			<view class="example-body">
				<uni-title type="h1" title="h1 一级标题"></uni-title>
				<uni-title type="h2" title="h2 二级标题"></uni-title>
				<uni-title type="h3" title="h3 三级标题"></uni-title>
				<uni-title type="h4" title="h4 四级标题"></uni-title>
				<uni-title type="h5" title="h5 五级标题"></uni-title>
			</view>
		</uni-section>

		<uni-section title="改变颜色" type="line">

			<view class="example-body">
				<uni-title type="h1" title="h1 一级标题" color="#027fff"></uni-title>
				<uni-title type="h2" title="h2 二级标题" color="#2490ff"></uni-title>
				<uni-title type="h3" title="h3 三级标题" color="#439ffc"></uni-title>
				<uni-title type="h4" title="h4 四级标题" color="#60adfb"></uni-title>
				<uni-title type="h5" title="h5 五级标题" color="#7db9f7"></uni-title>
			</view>
		</uni-section>
		<uni-section title="对齐方式" type="line">

			<view class="example-body">
				<uni-title type="h1" title="h1 左对齐" align="left"></uni-title>
				<uni-title type="h2" title="h2 居中" align="center"></uni-title>
				<uni-title type="h3" title="h3 右对齐" align="right"></uni-title>
				<uni-title type="h4" title="h4 居中" align="center"></uni-title>
				<uni-title type="h5" title="h5 左对齐" align="left"></uni-title>
			</view>
		</uni-section>
		<uni-section title="组合示例" type="line">

			<view class="example-body">
				<view class="uni-box-head">
					<uni-title type="h1" align="center" title="uni-app介绍"></uni-title>
				</view>
				<view class="uni-box">
					<uni-title class="h3" type="h3" title="1 框架介绍"></uni-title>
				</view>
				<view class="uni-box">
					<uni-title class="h4" type="h4" title="1.1 什么是uni-app"></uni-title>
				</view>
				<view>
					<text
						class="uni-text">uni-app是一个使用Vue.js开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。即使不跨端，uni-app同时也是更好的小程序开发框架。DCloud公司拥有370万开发者用户，旗下uni-app有5万+案例、900款插件、50+微信/qq群，并且被阿里小程序工具内置，开发者可以放心选择。</text>
				</view>
				<view class="uni-box">
					<uni-title class="h4" type="h4" title="1.2 开发规范"></uni-title>
				</view>
				<view class="">
					<uni-title class="h5" type="h5" color="#666" title="- 页面文件遵循 Vue 单文件组件 (SFC) 规范"></uni-title>
					<uni-title class="h5" type="h5" color="#666" title="- 组件标签靠近小程序规范，详见uni-app 组件规范"></uni-title>
					<uni-title class="h5" type="h5" color="#666"
						title="- 接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni，详见uni-app接口规范"></uni-title>
					<uni-title class="h5" type="h5" color="#666" title="- 数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期">
					</uni-title>
					<uni-title class="h5" type="h5" color="#666" title="- 为兼容多端运行，建议使用flex布局进行开发"></uni-title>
				</view>
			</view>
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/title/title)
