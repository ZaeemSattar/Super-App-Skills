---
title: "Uni indexed list — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-indexed-list.html
---
component name: uni-indexed-list

> Code block: `uIndexedList`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-indexed-list)

Used to display the index list.

##  introduce

###  Basic usage

```
<uni-indexed-list :options="list" :showSelect="false" @click="bindClick"></uni-indexed-list>
```

##  API

###  IndexedList Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| options | Object | \- | Data object required for index list |
| showSelect | Boolean | \- | Display mode, true is the default display, false is the selection mode, the default is false |

**options data format description**

```
[{
	"letter": "A",
	"data": [
		"阿克苏机场",
		"阿拉山口机场",
		"阿勒泰机场",
		"阿里昆莎机场",
		"安庆天柱山机场",
		"澳门国际机场"
	]
}, {
	"letter": "B",
	"data": [
		"保山机场",
		"包头机场",
		"北海福成机场",
		"北京南苑机场",
		"北京首都国际机场"
	]
}]
```

###  IndexedList Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| click | Click list event, return the event object of the currently selected item | \- |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-indexed-list) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

airport.js

```
<template>
	<uni-indexed-list :options="list" :show-select="true" @click="bindClick" />
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/indexed-list/indexed-list)
