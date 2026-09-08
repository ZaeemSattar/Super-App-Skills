---
title: "label"
source_url: https://miniapp.neuxnet.com/component/label.html
---
####  label

Used to improve the usability of form components. Find the corresponding id with "for" attribute, or put the control under the label. Once being clicked, the corresponding control will be triggered.

The priority of "for" is higher than the internal control. The first control will be triggered by default if there are multiple controls internally.

Currently, the controls that can be bound are: `<button>`, `<checkbox>`, `<radio>`, `<switch>`.

**Attribute description**

| Attribute name | Type | Instruction |
| --- | --- | --- |
| for | String | id of the bound control |

Template

Script

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">1</view>
				<checkbox-group class="uni-list" @change="checkboxChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
						<view>
							<checkbox :value="item.name" :checked="item.checked"></checkbox>
						</view>
						<view>{{item.value}}</view>
					</label>
				</checkbox-group>
			</view>

			<view class="uni-form-item uni-column">
				<view class="title">1</view>
				<radio-group class="uni-list" @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
						<view>
							<radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
						</view>
						<view>
							<label class="label-2-text" :for="item.name">
								<text>{{item.value}}</text>
							</label>
						</view>
					</label>
				</radio-group>
			</view>

			<view class="uni-form-item uni-column">
				<view class="title">
                    1
                    </view>
				<checkbox-group class="uni-list" @change="checkboxChange">
					<label class="label-3">
						<view class="uni-list-cell uni-list-cell-pd">
							<checkbox class="checkbox-3">1</checkbox>
						</view>
						<view class="uni-list-cell uni-list-cell-pd">
							<checkbox class="checkbox-3">2</checkbox>
						</view>
						<view class="uni-link uni-center" style="margin-top:20rpx;">checkbox</view>
					</label>
				</checkbox-group>
			</view>

		</view>
	</view>
</template>
```
