---
title: "Uni datetime picker — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-datetime-picker.html
---
Important notice

After the component is upgraded and updated to 2.0.0, it supports date + time range selection. The component ui will use the calendar to select the date. The ui changes greatly, and supports both PC and mobile terminals. This version is not backward compatible and no longer supports a separate time picker (type=time) and the associated hide-second property (time picker can use the built-in component picker). If you still need to use the old version, you can download the _non-uni\_modules version_ in the plugin market, the old version will no longer be maintained

component name: uni-datetime-picker

> Code block: `uDatetimePicker`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker)

The advantage of this component is that it supports **timestamp** input and output (start time, end time also supports timestamp), and you can select both date and time at the same time.

If you just need to select the date and time separately, and don't need timestamp input and output, you can use the native picker component.

**\_Click picker default value rule: \_**

-   If the initial value is set, it will be displayed in the picker display box
-   If there is no initial value value, the initial value value is the current local time Date.now(), but it will not be displayed in the picker display box

##  introduce

###  Basic usage

```
<template>
	<view class="page">
		<text class="example-info">可以同时选择日期和时间的选择器</text>
		<uni-section :title="'日期用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker
				type="date"
				:value="single"
				start="2021-3-20"
				end="2021-6-20"
				@change="change"
			/>
		</view>
		<uni-section :title="'时间戳用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker
				returnType="timestamp"
				@change="changeLog($event)"
				start="2021-3-20"
				end="2021-5-20"
			/>
		</view>
		<uni-section
			:title="'日期时间用法：' + datetimesingle"
			type="line"
		></uni-section>
		<view class="example-body">
			<uni-datetime-picker
				type="datetime"
				v-model="datetimesingle"
				@change="changeLog"
			/>
		</view>
		<uni-section :title="'v-model用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" />
		</view>
		<uni-section :title="'插槽用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single"
				>我是一个插槽，点击我</uni-datetime-picker
			>
		</view>
		<uni-section :title="'无边框用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :border="false" />
		</view>
		<uni-section :title="'disabled用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" disabled />
		</view>
		<uni-section
			:title="'日期范围用法：' + '[' + range + ']'"
			type="line"
		></uni-section>
		<view class="example-body">
			<uni-datetime-picker
				v-model="range"
				type="daterange"
				start="2021-3-20"
				end="2021-5-20"
				rangeSeparator="至"
			/>
		</view>
		<uni-section
			:title="'日期时间范围用法：' + '[' + datetimerange + ']' "
			type="line"
		></uni-section>
		<view class="example-body">
			<uni-datetime-picker
				v-model="datetimerange"
				type="datetimerange"
				start="2021-3-20 12:00:00"
				end="2021-6-20 20:00:00"
				rangeSeparator="至"
			/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				single: "2021-04-3",
				datetimesingle: "2021-04-3",
				range: ["2021-03-8", "2021-4-20"],
				datetimerange: ["2021-03-20 20:10:10", "2021-05-10 10:10:10"],
			};
		},

		watch: {
			datetimesingle(newval) {
				console.log("单选:", this.datetimesingle);
			},
			range(newval) {
				console.log("范围选:", this.range);
			},
			datetimerange(newval) {
				console.log("范围选:", this.datetimerange);
			},
		},
		mounted() {
			setTimeout(() => {
				this.datetimesingle = "2021-5-1";
				this.single = "2021-5-1";
			}, 1000);
		},

		methods: {
			change(e) {
				this.single = e;
				console.log("-change事件:", e);
			},
		},
	};
</script>

```

##  API

###  DatetimePicker Props

| property name | type | default value | value range | description |
| --- | --- | --- | --- | --- |
| type | String | datetime | date/daterange/datetime/datetimerange | selector type |
| value | String, Number, Array (range selection), Date | \- | \- | Current value of input box |
| start | String, Number | \- | \- | Minimum value, you can use date string (String), timestamp (Number) |
| end | String, Number | \- | \- | Maximum value, you can use date string (String), timestamp (Number) |
| return-type | String | string | timestamp, string, date | return value format |
| border | Boolean | true | \- | is there a border |
| rangeSeparator | String | '-' | \- | Separator when selecting a range |
| placeholder | String | \- | \- | The placeholder content for non-range selection |
| start-placeholder | String | \- | \- | The placeholder content of the start date when the range is selected |
| end-placeholder | String | \- | \- | The placeholder content of the end date when the range is selected |
| disabled | Boolean | false | \- | is not selectable |
| clear-icon | Boolean | true |  | Show clear button |
| hide-second | Boolean | false | \- | Whether to display seconds, only hours and minutes |

###  DatetimePicker Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| change | The event triggered when the date and time are determined, the parameter is the currently selected date object | The single selection returns the date string, such as: '2010-02-3'; the range selection returns the date string array, such as: \['2020- 10-1', '2021-4-1'\] |
| maskClick | Click on the mask layer to trigger | \- |

###  DatetimePicker Methods

| method name | description | parameters |
| --- | --- | --- |
| show | Open popup layer | \- |
| close | Close the popup layer | \- |
| clear | Clear the last selected state and value | \- |

###  DatetimePicker Slots

| Name | Description |
| --- | --- |
| default | will override the input box |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="page container">
		<uni-card is-full>
			<text class="uni-h6">可以同时选择日期和时间的选择器</text>
		</uni-card>
		<uni-section :title="'日期用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick" />
		</view>
		<uni-section :title="'日期时间用法：' + datetimesingle" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" v-model="datetimesingle" @change="changeLog" />
		</view>
		<uni-section :title="'日期范围用法：' + '[' + range + ']'" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="range" type="daterange" @maskClick="maskClick" />
		</view>
		<uni-section :title="'日期时间范围用法：' + '[' + datetimerange + ']' " type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="datetimerange" type="datetimerange" rangeSeparator="至" />
		</view>
		<uni-section :title="'v-model用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" />
		</view>
		<uni-section :title="'时间戳用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker returnType="timestamp" v-model="single" @change="changeLog($event)" />
		</view>
		<uni-section :title="'date 对象用法：' + datetimesingle" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" returnType="date" v-model="datetimesingle" @change="changeLog" />
		</view>
		<uni-section :title="'插槽用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single">我是一个插槽，点击我</uni-datetime-picker>
		</view>
		<uni-section :title="'无边框用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :border="false" />
		</view>
		<uni-section :title="'隐藏清除按钮用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :clearIcon="false" />
		</view>
		<uni-section :title="'disabled用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" disabled />
		</view>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/datetime-picker/datetime-picker)
