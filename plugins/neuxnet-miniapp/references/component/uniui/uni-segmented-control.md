---
title: "Uni segmented control — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-segmented-control.html
---
component name: uni-segmented-control

> Code block: `uSegmentedControl`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-segmented-control)

Used as a display for different views

##  introduce

###  Basic usage

```
<template>
    <view>
        <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button" activeColor="#4cd964"></uni-segmented-control>
        <view class="content">
            <view v-show="current === 0">
                选项卡1的内容
            </view>
            <view v-show="current === 1">
                选项卡2的内容
            </view>
            <view v-show="current === 2">
                选项卡3的内容
            </view>
        </view>
    </view>
</template>
<script>
export default {
  data() {
    return {
        ...
        items: ['选项1', '选项2', '选项3'],
        current: 0
    };
  },
  
  methods: {
    ...
    onClickItem(e) {
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex;
      }
    }
  }
};
</script>
```

##  API

###  SegmentedControl Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| current | Number | 0 | The index value of the currently selected tab, counted from 0 |
| styleType | String | button | Segmenter style type, optional values: button (button type), text (text type) |
| activeColor | String | #007aff | Selected label background color and border color |
| values | Array | \- | Array of options |

###  SegmentedControl Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| @clickItem | fired when the component fires a click event | e={currentIndex} |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-segmented-control) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view>
		<uni-card is-full>
			<text class="uni-h6">标签组件多用于商品分类、重点内容显示等场景。</text>
		</uni-card>

		<uni-section title="实心标签" type="line">
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType"
					:active-color="activeColor" @clickItem="onClickItem" />
			</view>
			<view class="content">
				<view v-if="current === 0"><text class="content-text">选项卡1的内容</text></view>
				<view v-if="current === 1"><text class="content-text">选项卡2的内容</text></view>
				<view v-if="current === 2"><text class="content-text">选项卡3的内容</text></view>
			</view>
		</uni-section>

		<uni-section title="Style" type="line"></uni-section>
		<view class="example-body">
			<radio-group class="uni-list" @change="styleChange">
				<view v-for="(item, index) in styles" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">
							<text class="uni-list-item__content-title">{{ item.text }}</text>
						</view>
						<view class="uni-list-item__extra">
							<radio :value="item.value" :checked="item.checked" />
						</view>
					</view>
				</view>
			</radio-group>
		</view>
		<uni-section title="Color" type="line"></uni-section>
		<view class="example-body">
			<radio-group class="uni-list" @change="colorChange">
				<view v-for="(item, index) in colors" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">
							<view :style="{ backgroundColor: item }" class="color-tag" />
						</view>
						<view class="uni-list-item__extra">
							<radio :value="item" :checked="index === colorIndex" />
						</view>
					</view>
				</view>
			</radio-group>
		</view>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/segmented-control/segmented-control)
