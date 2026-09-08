---
title: "Uni grid — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-grid.html
---
component name: uni-grid

> Code block: `uGrid`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-grid)

Palace components.

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   Delete the dot corner mark effect of the component, which is completely implemented by the user. The example has a simple corner mark effect.
-   Grid component is only supported in custom component mode
-   The maximum value of the column attribute should not exceed 5. If it exceeds, you need to pay attention to the content display
-   The Alipay applet platform needs to enable the component2 compilation mode in the Alipay applet developer tool. The way to enable it: `Details --> Project Configuration --> Enable component2 compilation`
-   There must be content inside the component to avoid height display errors

###  Basic usage

```
<uni-grid :column="3">
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>
```

###  Without border and rectangle display

```
<uni-grid :column="3" :showBorder="false"  :square="false">
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>
```

##  API

###  Grid Props

**uni-grid property description:**

| property name | type | default value | description |
| --- | --- | --- | --- |
| column | Number | 3 | Number of each column |
| borderColor | String | #d0dee5 | border color |
| showBorder | Boolean | true | whether to show border |
| square | Boolean | true | Whether to display a square |
| highlight | Boolean | true | Click background to highlight |

###  Grid Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| @change | Click the grid to trigger | e={detail:{index:0}}, index is the current click grid subscript |

###  GridItem Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| index | Number | \- | The unique identifier of the child component, click grid will return the current identifier |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-grid) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="warp">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">宫格组件主要使用场景如：商品推荐列表、热门内容等</text>
		</uni-card>
		<uni-section title="基础样式" type="line" padding>
			<uni-grid :column="4" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in 4" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons type="image" :size="30" color="#777" />
						<text class="text">文本信息</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="自定义列数" type="line" padding>
			<uni-grid :column="4" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in 8" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons type="image" :size="30" color="#777" />
						<text class="text">文本信息</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>

		<uni-section title="滑动视图" type="line" padding>
			<!-- Because of the swiper feature, please specify the height of the swiper, the height of the swiper will not be stretched by the content-->
			<swiper class="swiper" :indicator-dots="true">
				<swiper-item>
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<image :src="item.url" class="image" mode="aspectFill" />
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</swiper-item>
				<swiper-item>
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<image :src="item.url" class="image" mode="aspectFill" />
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</swiper-item>
				<swiper-item>
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<image :src="item.url" class="image" mode="aspectFill" />
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</swiper-item>
			</swiper>
		</uni-section>
		<uni-section title="动态加载" type="line" padding>
			<view class="grid-dynamic-box">
				<uni-grid :column="3" :highlight="true" @change="change">
					<uni-grid-item v-for="(item, index) in dynamicList" :index="index" :key="index">
						<view class="grid-item-box" :style="{'backgroundColor':item.color}">
							<image :src="item.url" class="image" mode="aspectFill" />
							<text class="text">{{ item.text }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
			<button type="primary" @click="add">点击添加一个宫格</button>
			<button v-if="dynamicList.length !== 0" type="primary" style="margin-top: 15px;"
				@click="del">点击删除一个宫格</button>
		</uni-section>
		<uni-section title="无边框带角标（3列）" type="line" padding>
			<uni-grid :column="3" :show-border="false" :square="false" @change="change">
				<uni-grid-item v-for="(item ,index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image class="image" :src="item.url" mode="aspectFill" />
						<text class="text">{{item.text}}</text>
						<view v-if="item.badge" class="grid-dot">
							<uni-badge :text="item.badge" :type="item.type" />
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="矩形宫格（3列）" type="line" padding>
			<uni-grid :column="3" :square="false" :highlight="false" @change="change">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.url" class="image" mode="aspectFill" />
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="边框颜色（4列 无文字）" type="line" padding>
			<uni-grid :column="4" border-color="#03a9f4" @change="change">
				<uni-grid-item :index="0">
					<view class="grid-item-box">
						<image class="image" src="/static/c1.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
				<uni-grid-item :index="1">
					<view class="grid-item-box">
						<image class="image" src="/static/c2.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
				<uni-grid-item :index="2">
					<view class="grid-item-box">
						<image class="image" src="/static/c3.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
				<uni-grid-item :index="3">
					<view class="grid-item-box">
						<image class="image" src="/static/c4.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/grid/grid)
