---
title: "Uni combox — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-combox.html
---
component name: uni-combox

> Code block: `uCombox`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-combox)

The combo box component is generally used for form items that can be selected and entered.

##  introduce

attention

-   Due to the limitation of the nvue framework, the component does not support nvue for the time being

###  Basic usage

Using components in `template`

```
<uni-combox label="所在城市" :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
```

##  API

###  Combox Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| label | String | \- | label text |
| value | String | \- | value of combox |
| labelWidth | String | auto | Label width, there is a unit string, such as: '100px' |
| placeholder | String | \- | input box placeholder |
| candidates | Array/String | \[\] | Candidates |
| emptyTips | String | No match | Tips when no match |

###  Combox Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| @input | combox input event | return combox value |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-combox) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">组合框一般用于可以选择也可以输入的表单项。</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<view class="example-body">
				<uni-combox :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
				<view class="result-box">
					<text>所选城市为：{{city}}</text>
				</view>
			</view>
		</uni-section>

		<uni-section title="无边框" subTitle="使用 border = false 取消边框" type="line">
			<view class="example-body">
				<uni-combox :border="false" :candidates="candidates" placeholder="请选择所在城市"></uni-combox>
			</view>
		</uni-section>

		<uni-section title="设置无匹配项时的提示语" subTitle="使用 emptyTips 属性设置无匹配项时的提示语" type="line">
			<view class="example-body">
				<uni-combox emptyTips="这里啥都没有" placeholder="请选择所在城市"></uni-combox>
			</view>
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/combox/combox)
