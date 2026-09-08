---
title: "Uni number box — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-number-box.html
---
component name: uni-number-box

> Code block: `uNumberBox`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-number-box)

Numeric input box with plus and minus buttons.

##  introduce

###  Basic usage

```
<uni-number-box></uni-number-box>
<uni-number-box v-model="vModelValue" ></uni-number-box>
<uni-number-box :min="0" :max="9"></uni-number-box>
<uni-number-box @change="bindChange"></uni-number-box>
```

##  API

###  NumberBox Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| value/v-model | Number | 0 | Current value of input box |
| min | Number | 0 | Minimum |
| max | Number | 100 | Maximum |
| step | Number | 1 | The size of the interval to change with each click |
| disabled | Boolean | false | Disabled state |

###  NumberBox Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| change | The event triggered when the value of the input box changes, the parameter is the current value of the input box | \- |
| focus | The event triggered when the input box is focused, the parameter is the event object | \- |
| blur | The event triggered when the input box is out of focus, the parameter is the event object | \- |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-number-box) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

```
<template>
	<view class="page">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">数字输入框组件多用于购物车加减商品等场景</text>
		</uni-card>
		<uni-section title="基本用法" type="line" padding>
			<uni-number-box @change="changeValue" />
		</uni-section>
		<uni-section :title="'使用v-model : '+ vModelValue" subTitle="使用 v-model 显示默认值" type="line" padding>
			<uni-number-box v-model="vModelValue" @blur="blur" @focus="focus" @change="changeValue" />
		</uni-section>
		<uni-section title="设置最小值和最大值" subTitle="使用 min \ max 属性设置最大最小值" type="line" padding>
			<uni-number-box :min="2" :max="9" :value="555" />
		</uni-section>
		<uni-section title="设置步长（步长0.1)" subTitle="使用 step 属性设置步长" type="line" padding>
			<uni-number-box :value="1.1" :step="0.1" />
		</uni-section>
		<uni-section title="自定义背景" type="line" subTitle="使用 background 属性设置自定义背景色" padding>
			<uni-number-box :value="50" background="#2979FF" color="#fff" />
		</uni-section>
		<uni-section title="禁用状态" subTitle="使用 disabled 属性设置组件禁用" type="line" padding>
			<uni-number-box :disabled="true" />
		</uni-section>
		<uni-section :title="'获取输入的值 : '+ numberValue" type="line" padding>
			<uni-number-box :value="numberValue" @change="change" />
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/number-box/number-box)
