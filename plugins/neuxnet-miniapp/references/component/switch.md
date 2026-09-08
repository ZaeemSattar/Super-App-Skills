---
title: "switch"
source_url: https://miniapp.neuxnet.com/component/switch.html
---
####  switch

Switch selector.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| checked | Boolean | false | Selected or not |  |
| disabled | Boolean | false | Whether to disable | ByteDance applet and Feishu applet are not supported |
| type | String | switch | Style, valid values: switch, checkbox |  |
| color | Color |  | The color of the switch is the same as that of css |  |
| @change | EventHandle |  | change event is triggered at checked changing, event.detail={ value:checked} |  |

Template

Script

```
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">test</view>
			<view>
				<switch checked @change="switch1Change" />
				<switch @change="switch2Change" />
			</view>
			<view class="uni-title">test</view>
			<view>
				<switch checked color="#FFCC33" style="transform:scale(0.7)"/>
				<switch color="#FFCC33" style="transform:scale(0.7)"/>
			</view>
			<view class="uni-title">test</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">test</view>
				<switch checked />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">test</view>
				<switch />
			</view>
		</view>
	</view>
</template>
```

**Notice**

-   If you need to adjust the switch size, you can adjust it by the scale method of css, such as scaling down it to 70% `style="transform:scale(0.7)"`
