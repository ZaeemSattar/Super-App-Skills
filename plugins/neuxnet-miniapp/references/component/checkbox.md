---
title: "checkbox-group"
source_url: https://miniapp.neuxnet.com/component/checkbox.html
---
####  checkbox-group

Multi-item selector, consisting of multiple checkbox inside.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| @change | EventHandle |  | Change of selected options in `<checkbox-group>` will trigger the change event, detail = {value:\[array of values of the selected checkboxes\]} |

####  checkbox

Multiple selection items.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| value | String |  | The `<checkbox>` tag triggers the change event of `<checkbox-group>` when selected, and carries the value of `<checkbox>`. |
| disabled | Boolean | false | Disable or not |
| checked | Boolean | false | Checked or not with checked as default. |
| color | Color |  | The color of the checkbox is the same as that of css. |

Template

Script

Style

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
			</view>
			<view>
				<checkbox-group>
					<label>
						<checkbox value="cb" checked="true" />
					</label>
					<label>
						<checkbox value="cb" />
					</label>
				</checkbox-group>
			</view>
			<view class="uni-title uni-common-mt">
				</view>
			<view>
				<checkbox-group>
					<label>
						<checkbox value="cb" checked="true" color="#FFCC33" style="transform:scale(0.7)" />
					</label>
					<label>
						<checkbox value="cb" color="#FFCC33" style="transform:scale(0.7)" />
					</label>
				</checkbox-group>
			</view>
		</view>
		
		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
			</view>
		</view>
		<view class="uni-list">
			<checkbox-group @change="checkboxChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</checkbox-group>
		</view>
	</view>
</template>
```
