---
title: "picker"
source_url: https://miniapp.neuxnet.com/component/picker.html
---
####  picker

Scroll selector that pops up from the bottom. Five selectors are supported, which are distinguished by mode, namely, ordinary selector, multi-column selector, time selector, date selector, and province-city-district selector, with ordinary selector as default.

####  Normal selector

`mode = selector`

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| range | Array / Array<Object> | \[\] | range is valid for selector or multiSelector mode |  |
| range-key | String |  | When range is a `Array＜Object＞`, range-key is used to specify the value of key in the Object as the selector display content. |  |
| value | Number | 0 | The value indicates which term in range is selected (subscript starts from 0) |  |
| selector-type | String | auto | UI type for large screen, which supports picker, select and auto. It is displayed in picker style on iPad and select style on PC by default | H5 2.9.9+ |
| disabled | Boolean | false | Whether to disable | Do not support Kuaishou applet |
| @change | EventHandle |  | change event will be triggered when value changes, event.detail = {value: value} |  |
| @cancel | EventHandle |  | Triggered when the picker is canceled or clicked to close the mask layer | Not supported by Kuaishou applet |

####  Multiple column selector

`mode = multiSelector`

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| range | Two-dimensional Array/two-dimensional Array＜Object＞ | \[\] | range is valid for selector or multiSelector mode. Two-dimensional array, the length indicates the number of columns, and each item of the array indicates the data of each column, for example \[\["a","b"\], \["c","d"\]\] |
| range-key | String |  | For the range as a two-dimensional Array＜Object＞, use range-key to specify the value of key in Object as the display content of the selector |
| value | Array | \[\] | Each of the value indicates which term in range is selected (subscript starts from 0) |
| @change | EventHandle |  | change event will be triggered when value changes, event.detail = {value: value} |
| @columnchange | EventHandle |  | columnchange event is triggered when the value from a column changes, event.detail = {column: column, value: value}, wherein the column indicates which column is changed (the subscript starts from 0), and the value indicates the subscript of the changed value |
| @cancel | EventHandle |  | Triggered when the selection is canceled (not supported by Kuaishou applet) |
| disabled | Boolean | false | Whether to disable (not supported by Kuaishou applet) |

####  Time picker

`mode = time`

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| value | String |  | Indicate the selected time with the format of "hh:mm" |  |
| start | String |  | Indicate the beginning of the valid time range with the string format of "hh:mm" | Not supported on App |
| end | String |  | Indicate the ending of the valid time range with the string format of "hh:mm" | Not supported on App |
| @change | EventHandle |  | change event will be triggered when value changes, event.detail = {value: value} |  |
| @cancel | EventHandle |  | Triggered when deselected |  |
| disabled | Boolean | false | Disable or not |  |

####  Date picker

`mode = date`

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| value | String | 0 | Indicate the selected date with the format of "YYYY-MM-DD" |  |
| start | String |  | Indicate the beginning of the valid date range with the string format of "YYYY-MM-DD" |  |
| end | String |  | Indicate the ending of the valid date range with the string format of "YYYY-MM-DD" |  |
| fields | String | day | Valid values are year, month, day, indicating the granularity of the selector. The default is day. If this item is not configured on the App side, use the system UI | H5, App 2.6.3+, WeChat applet, Baidu applet Program, ByteDance applet, Feishu applet |
| @change | EventHandle |  | change event will be triggered when value changes, event.detail = {value: value} |  |
| @cancel | EventHandle |  | Triggered when deselected |  |
| disabled | Boolean | false | Disable or not |  |

**valid values for fields**

| Value | Instruction |
| --- | --- |
| year | Selector granularity is year |
| month | Selector granularity is month |
| day | Selector granularity is days |

####  Province city selector

`mode = region`

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| value | Array | \[\] | indicates the selected province and city, the first value of each column is selected by default |
| custom-item | String |  | Add a custom item to the top of each column |
| @change | EventHandle |  | change event will be triggered when value changes, event.detail = {value: value} |
| @cancel | EventHandle |  | Triggered when the selection is canceled (not supported by Kuaishou applet) |
| disabled | Boolean | false | Whether to disable (not supported by Kuaishou applet) |

Template

Script

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini Appp project -->
<template>
	<view>
		<view class="uni-title uni-common-pl">
            </view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl"></view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					
				</view>
				<view class="uni-list-cell-db">
					<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
						<view class="uni-input">{{time}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl"></view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view>
	</view>
</template>
```
