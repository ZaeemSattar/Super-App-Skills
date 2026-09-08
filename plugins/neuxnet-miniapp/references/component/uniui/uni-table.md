---
title: "Uni table — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-table.html
---
component name: uni-table

> Code block: `uTable`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-table)

Used to display multiple pieces of data with similar structures

##  introduce

###  Basic usage

A table is composed of 4 components: `uni-table` table component, `uni-tr` table row, `uni-th` table header, `uni-td` cell

have to be aware of is:

-   The root node of `uni-table` must be `uni-tr`
-   The root node of `uni-tr` must be `uni-th` or `uni-td`
-   A table can theoretically only contain header rows
-   Currently only the width property can be set in `uni-th`, the width of `uni-td` changes with the width of `uni-th`

```
<uni-table border stripe emptyText="暂无更多数据" >
	<!-- Header row -->
	<uni-tr>
		<uni-th align="center">日期</uni-th>
		<uni-th align="center">姓名</uni-th>
		<uni-th align="left">地址</uni-th>
	</uni-tr>
	<!-- table data row -->
	<uni-tr>
		<uni-td>2020-10-20</uni-td>
		<uni-td>Jeson</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-21</uni-td>
		<uni-td>HanMeiMei</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-22</uni-td>
		<uni-td>LiLei</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-23</uni-td>
		<uni-td>Danner</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>

</uni-table>
```

##  API

###  Table Props

| property name | type | default value | optional value | description |
| --- | --- | --- | --- | --- |
| border | Boolean | false | \- | Whether to have a vertical border |
| stripe | Boolean | true | \- | Whether to show zebra style |
| type | String | '' | \- | When the value is type="selection", multiple selection is enabled |
| emptyText | String | No more data | \- | Text content to display when empty data |
| loading | Boolean | false | \- | Show loading |

###  Table Events

| Event name | Description | Return parameter |
| --- | --- | --- |
| selection-change | When multi-selection is enabled, this event will be triggered when the selection changes | Function(Object) |

###  Table Methods

**Tips: Due to the WeChat applet framework, the following methods are not currently supported**

| method name | description | parameters |
| --- | --- | --- |
| selectionAll | Select all rows | \- |
| toggleRowSelection | Used to select multiple tables, switch the selected state of a row, if the second parameter is used, it is to set whether the row is selected (selected is true, then selected) | Function(Array:\[row index\],Boolean :selected) |
| clearSelection | Used for multi-selection forms, clearing the user's selection | \- |
| toggleAllSelection | Used for multi-select tables, toggle the selected state of all rows | \- |

###  Th Props

| property name | type | default value | optional value | description |
| --- | --- | --- | --- | --- |
| width | String | \- | \- | cell width |
| align | String | left | left/center/right | Header alignment |
| filter-type | String |  | search/select/range/date | filter type, search keyword search, select category selection |
| filter-data | Array |  |  | Filter data |
| sortable | Boolean | false | \- | whether to enable sorting |

**filter-data example**

```
[{
	text: "", //显示
	value: "" // 值
}]
```

###  Th Events

| Event name | Description | Return parameter |
| --- | --- | --- |
| sort-change | This event is fired when sorting is clicked | Function(Object) |
| filter-change | This event is fired when filtering data | Function(Object) |

filter-change(e) Description

```
e = {
	filterType: "", //筛选类型 search/select/range 和传入的相同
	filter: "" // 值, filterType=search字符串类型，filterType=select数组类型，filterType=range数组类型，[0]开始值， [1]结束值
}
```

###  Td Props

| property name | type | default value | optional value | description |
| --- | --- | --- | --- | --- |
| align | String | left | left/center/right | Cell alignment |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-table) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

tableData.js

```
<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据" @selection-change="selectionChange">
				<uni-tr>
					<uni-th width="150" align="center">日期</uni-th>
					<uni-th width="150" align="center">姓名</uni-th>
					<uni-th align="center">地址</uni-th>
					<uni-th width="204" align="center">设置</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td>{{ item.date }}</uni-td>
					<uni-td>
						<view class="name">{{ item.name }}</view>
					</uni-td>
					<uni-td align="center">{{ item.address }}</uni-td>
					<uni-td>
						<view class="uni-group">
							<button class="uni-button" size="mini" type="primary">修改</button>
							<button class="uni-button" size="mini" type="warn">删除</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
		</view>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/table/table)
