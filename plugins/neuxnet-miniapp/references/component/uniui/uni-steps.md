---
title: "Uni steps — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-steps.html
---
component name: uni-steps

> Code block: `uSteps`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-steps)

Step bar, often used to show progress

##  introduce

###  Basic usage

```
<!-- Basic usage -->
<uni-steps :options="[{title: '事件一'}, {title: '事件二'}, {title: '事件三'}, {title: '事件四'}]" :active="1"></uni-steps>

<!-- Vertical alignment -->
<uni-steps :options="[{title:'买家下单',desc:'2018-11-11'},{title:'卖家发货',desc:'2018-11-12'},{title:'买家签收',desc:'2018-11-13'},{title:'交易完成',desc:'2018-11-14'}]" direction="column" :active="2"></uni-steps>
```

##  API

###  Steps Props

| property name | type | optional value | default value | description |
| --- | --- | --- | --- | --- |
| active | Number | \- | 0 | Current step |
| **direction** | String | row/column | row | Orientation direction |
| active-color | String | \- | #1aad19 | Selected state color |
| options | Array | \- | \- | Data source, the format is: \[{title:'xxx',desc:'xxx'},{title:'xxx',desc:'xxx'}\] |

####  Direction Options

| attribute name | description |
| --- | --- |
| row | horizontal |
| column | vertical |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-steps) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view>
		<uni-section title="基本用法" type="line" padding>
			<uni-steps :options="list1" :active="active" />
		</uni-section>
		<uni-section title="自定义图标" type="line" padding>
			<uni-steps :options="list1" active-icon="checkbox" :active="active" />
		</uni-section>
		<uni-section title="自定义图标" type="line" padding>
			<uni-steps :options="list1" active-icon="medal" :active="active" />
		</uni-section>
		<uni-section title="纵向排列" type="line" padding>
			<uni-steps :options="list2" active-color="#007AFF" :active="active" direction="column" />
		</uni-section>
		<button type="primary" size="mini" style="margin: 30px 10px; width: 100px;" @click="change">改变状态</button>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/steps/steps)
