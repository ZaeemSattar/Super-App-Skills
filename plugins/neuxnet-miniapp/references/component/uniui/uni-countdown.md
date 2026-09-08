---
title: "Uni countdown — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-countdown.html
---
component name: uni-countdown

> Code block: `uCountDown`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-countdown)

Countdown component.

##  introduce

###  Basic usage

Using components in `template`

```
<!-- General usage -->
<uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>

<!-- Do not display days -->
<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12"></uni-countdown>

<!-- Modify color -->
<uni-countdown color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" :day="1" :hour="2" :minute="30" :second="0"></uni-countdown>
```

##  API

###  Countdown Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| backgroundColor | String | #FFFFFF | BackgroundColor |
| color | String | #000000 | Text Color |
| splitorColor | String | #000000 | Split symbol color |
| day | Number | 0 | Number of days |
| hour | Number | 0 | hour |
| minute | Number | 0 | minute |
| second | Number | 0 | seconds |
| showDay | Boolean | true | whether to show the number of days |
| showColon | Boolean | true | Are colon separators |
| start | Boolean | true | Whether to start the countdown after the component is initialized |

###  Countdown Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| @timeup | Countdown time to trigger event | \- |

###  Countdown Methods

| Event Name | Description | Return Value |
| --- | --- | --- |
| update | After the dynamic update time, refresh the component display | \- |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-countdown) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

```
<template>
	<view class="container">
		<uni-card is-full>
			<text class="uni-h6">倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景</text>
		</uni-card>
		 <uni-section title="一般用法" type="line" padding>
			<uni-countdown :day="1" :hour="1" :minute="12" :second="40" />
		</uni-section>
		<uni-section title="不显示天数" subTitle="设置 show-day = false 不显示天" type="line" padding>
			<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12" />
		</uni-section>
		<uni-section title="文字分隔符" subTitle="设置 show-colon 属性设置分隔符样式" type="line" padding>
			<uni-countdown :minute="30" :second="0" :show-colon="false" />
		</uni-section>
		<uni-section title="修改颜色" subTitle="设置 color \ background 属性设置组件颜色" type="line" padding>
			<uni-countdown :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF" />
		</uni-section>
		<uni-section title="修改字体大小" subTitle="设置 font-size 属性设置组件大小" type="line" padding>
			<uni-countdown :font-size="30" :day="1" :hour="2" :minute="30" :second="0" />
		</uni-section>
		<uni-section title="修改颜色 + 字体大小" type="line" padding>
			<uni-countdown :font-size="30" :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF" />
		</uni-section>
		<uni-section title="自由控制开始/暂停" subTitle="设置 start 属性控制是否自动开启" type="line" padding>
			<uni-countdown :start="start" :day="1" :hour="1" :minute="12" :second="40" />
		</uni-section>
		<uni-section title="倒计时回调事件" type="line" padding>
			<uni-countdown :show-day="false" :second="timeupSecond" @timeup="timeup" />
		</uni-section>
		<uni-section title="动态赋值" type="line" padding>
			<uni-countdown  :show-day="false" :hour="testHour" :minute="testMinute" :second="testSecond" />
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/countdown/countdown)
