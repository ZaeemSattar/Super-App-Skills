---
title: "radio-group"
source_url: https://miniapp.neuxnet.com/component/radio.html
---
####  radio-group

Single item selector is internally composed of multiple `<radio>`. By wrapping multiple `radio` under one `radio-group`, the single selection of these `radio` can be realized.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| @change | EventHandle |  | The change event is triggered when the selected item in `<radio-group>` changes, event.detail = {value: Value of selected radio} |

####  radio

Radio item.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| value | String |  | `<radio>` identification. When the `<radio>` is selected, the change event of `<radio-group>` will carry the value of `<radio>` |
| checked | Boolean | false | Whether it is currently selected? |
| disabled | Boolean | false | Disable or not |
| color | Color |  | The color of the radio is the same as that of css |
| backgroundColor | Color | #ffffff | The background color of the radio |
| borderColor | Color | #d1d1d1 | The border color of the radio |
| activeBackgroundColor | Color | #007AFF | The background color of the radio when it is selected |
| activeBorderColor | Color |  | The border color of the radio when it is selected |
| iconColor | Color | #ffffff | The color of the radio icon |

Template

Script

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="uni-title">test</view>
			<view>
				<label class="radio"><radio value="r1" checked="true" />test</label>
				<label class="radio"><radio value="r2" />test</label>
			</view>
		</view>
		<view class="uni-title uni-common-mt uni-common-pl">test</view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</radio-group>
		</view>
	</view>
</template>
```

**Notice**

-   If you need to adjust the size of the radio, you can adjust it by the scale method of css, such as scaling down it to 70% `style="transform:scale(0.7)"`
-   radio is not checkbox, clicking on a selected radio will not uncheck it
