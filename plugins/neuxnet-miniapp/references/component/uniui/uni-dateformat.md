---
title: "Uni dateformat — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-dateformat.html
---
component name: uni-dateformat

> Code block: `uDateformat`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-dateformat)

Date formatting component.

##  introduce

###  Basic usage

Using components in `template`

```
<!-- General usage -->
<uni-dateformat date="2020/10/20 20:20:20"></uni-dateformat>

<!-- don't show just/immediately/xx minutes ago -->
<uni-dateformat date="2020/10/20 20:20:20" :threshold="[0,0]"></uni-dateformat>
```

##  API

###  Dateformat Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| date | Object|String|Number | Date.now() | Date object/datestring/timestamp to format |
| threshold | Array | \[0, 0\] | Transformation type threshold |
| format | String | 'yyyy/MM/dd hh:mm:ss' | format string |
| locale | String | zh | The language used for formatting, currently supports zh (Chinese), en (English) |

####  Threshold Options

The formatting component will perform user-friendly conversion of time, and the threshold is used to control the time threshold for conversion.

Take `[60000, 3600000]` as an example, record the absolute value of the difference between the incoming time and the current time as delta (unit: milliseconds)

-   When `delta < 60000`, the time will be converted to "just | right now"
-   When `delta >= 60000 && delta < 3600000`, the time will be converted to "xx minutes ago | xx minutes later", if it exceeds 1 hour, it will be displayed as "xx hours ago | xx hours later", and so on
-   When `delta >= 3600000`, it will be formatted according to the format passed in the format parameter

If you don't want to convert it to "right now | just now", you can pass in `:threshold = "[0,3600000]"`. The default value of `[0,0]` does not translate to either "right now|just now" nor "xx minutes ago|xx minutes later"

####  Format Options

format accepts characters and their meanings are as follows:

| character | description |
| --- | --- |
| yyyy | Four-digit year |
| yy | Two Years |
| MM | Two-digit month (with less than two digits, add 0 in front) |
| M | month, do not automatically fill 0 |
| dd | Two days (if there are less than two digits, add 0 in front) |
| d | days, do not automatically fill 0 |
| hh | Two hours (for less than two digits, add 0 in front) |
| h | hour, not automatically filled with 0 |
| mm | Two minutes (for less than two digits, add 0 in front) |
| m | minutes, do not automatically fill 0 |
| ss | Two seconds (for less than two digits, add 0 in front) |
| s | Seconds, do not automatically fill 0 |
| SSS | Three milliseconds (if less than three, add 0 in front) |
| S | milliseconds, not automatically filled with 0 |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-dateformat) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">日期格式化组件，通常用于需要展示友好的日期格式的场景。</text>
		</uni-card>
		<uni-section title="基础用法" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 7200000"></uni-dateformat>
				<uni-dateformat date="2020/12/12"></uni-dateformat>
			</view>
		</uni-section>
		<uni-section title="设置阈值" subTitle="阈值用于控制什么时候显示刚刚|马上，什么时候显示xx分钟前|xx分钟后" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 30000" :threshold="[0,3600000]"></uni-dateformat>
				<uni-dateformat :date="now - 30000" :threshold="[0,0]"></uni-dateformat>
			</view>
		</uni-section>
		<uni-section title="使用英文" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 1200000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
				<uni-dateformat :date="now - 30000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
				<uni-dateformat :date="now - 80000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
			</view>
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/dateformat/dateformat)
