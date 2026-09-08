---
title: "Uni calendar — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-calendar.html
---
component name: uni-calendar

> Code block: `uCalendar`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-calendar)

The calendar component can view the date, select the date in any range, and click the operation. Common scenarios such as: hotel date reservation, train ticket purchase date selection, commute to get off work, etc.

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   The js used for the lunar calendar conversion of this component is \[the Gregorian calendar and the lunar calendar in the interval of @1900-2100\] (https://github.com/jjonline/calendar.js)
-   The `date` attribute should be passed in a String , such as: 2019-06-27 , not new Date()
-   Use the `insert` property to determine whether the current event is @change or @confirm . It should be merged into one event, but in order to distinguish the mode, two events are now used, and attention should be paid here
-   The following elements cannot be prevented from scrolling in the pop-up window mode. If you need to prevent it, please manually set the scroll elements to be non-scrollable after the pop-up window pops up

###  Basic usage

Using components in `template`

```
<view>
	<uni-calendar 
	:insert="true"
	:lunar="true" 
	:start-date="'2019-3-2'"
	:end-date="'2019-5-20'"
	@change="change"
	 />
</view>
```

###  Open the calendar by method

Need to set `insert` to `false`

```
<view>
	<uni-calendar 
	ref="calendar"
	:insert="false"
	@confirm="confirm"
	 />
	 <button @click="open">打开日历</button>
</view>
```

```

export default {
	data() {
		return {};
	},
	methods: {
		open(){
			this.$refs.calendar.open();
		},
		confirm(e) {
			console.log(e);
		}
	}
};

```

##  API

###  Calendar Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| date | String | \- | Customize the current time, the default is today |
| lunar | Boolean | false | Show lunar |
| startDate | String | \- | Date Selection Range-Start Date |
| endDate | String | \- | Date Selection Range-End Date |
| range | Boolean | false | Range selection |
| insert | Boolean | false | Insert mode, optional value, ture: insert mode; false: pop-up mode; default is insert mode |
| clearDate | Boolean | true | Whether the popup mode clears the last selection |
| selected | Array | \- | Dots, expect format \[{date: '2019-06-27', info: 'check-in', data: { custom: 'custom information', name: 'custom message header',xxx :xxx... }}\] |
| showMonth | Boolean | true | Whether to show the month as background |

###  Calendar Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| open | Pop up the calendar component, valid when `insert :false` | \- |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-calendar) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="calendar-content" v-if="showCalendar">
		<text class="example-info">日历组件可以查看日期，选择任意范围内的日期，打点操作。常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等。</text>
		<uni-section title="插入模式" type="line"></uni-section>
		<view>
			<!-- Insert mode -->
			<uni-calendar class="uni-calendar--hook" :selected="info.selected" :showMonth="false" @change="change" @monthSwitch="monthSwitch" />
		</view>
		<uni-section class="hideOnPc" title="弹出模式" type="line"></uni-section>
		<view class="example-body hideOnPc">
			<button class="calendar-button" type="button" @click="open">打开日历</button>
		</view>
		<uni-calendar ref="calendar" class="uni-calendar--hook" :clear-date="true" :date="info.date" :insert="info.insert" :lunar="info.lunar" :startDate="info.startDate"
		 :endDate="info.endDate" :range="info.range" @confirm="confirm" @close="close"/>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/calendar/calendar)
