---
title: "Uni drawer — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-drawer.html
---
component name: uni-drawer

> Code block: `uDrawer`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-drawer)

Drawer side sliding menu.

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   The `width` property only takes effect on the `vue` page. The `nvue` page does not support dynamic setting of width due to performance issues. If you need to modify it, please download the component modification source code

###  Basic usage

```
<template>
	<view>
		<button @click="showDrawer" type="primary">右侧弹出 显示Drawer</button>
		<uni-drawer ref="showRight" mode="right" :mask-click="false">
			<scroll-view style="height: 100%;" scroll-y="true">
				<button @click="closeDrawer" type="primary">关闭Drawer</button>
				<view v-for="item in 60" :key="item">可滚动内容 {{ item }}</view>
			</scroll-view>
		</uni-drawer>
	</view>
</template>

<script>
	export default {
		methods: {
			showDrawer() {
				this.$refs.showRight.open();
			},
			closeDrawer() {
				this.$refs.showRight.close();
			}

		}
	}
</script>
```

##  API

###  Drawer Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| mask | Boolean | true | whether to display the mask |
| maskClick | Boolean | true | Does the drawer close by clicking on the mask |
| mode | String | left | Drawer slide out position, optional values: left (slide out from the left), right (slide out from the right) |
| width | Number | 220 | Drawer width, only the vue page setting takes effect |

###  Drawer Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| @change | The state of the drawer changes and triggers the event | true: the drawer has been opened; false: the drawer has been closed; |

###  Drawer Methods

| method name | description | parameters |
| --- | --- | --- |
| open | Open the drawer | \- |
| close | Close the drawer | \- |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-drawer) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面按钮即可显示导航菜单。</text>
		</uni-card>

		<uni-section title="左侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showLeft')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
					<view class="close">
						<button @click="closeDrawer('showLeft')"><text class="word-btn-white">关闭Drawer</text></button>
					</view>
				</uni-drawer>
			</view>
		</uni-section>

		<uni-section title="右侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showRight')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showRight" mode="right" :mask-click="false" @change="change($event,'showRight')">
					<view class="scroll-view">
						<scroll-view class="scroll-view-box" scroll-y="true">
							<view class="info">
								<text class="info-text">右侧遮罩只能通过按钮关闭，不能通过点击遮罩关闭</text>
							</view>
							<view class="close">
								<button @click="closeDrawer('showRight')"><text class="word-btn-white">关闭Drawer</text></button>
							</view>
							<view class="info-content" v-for="item in 100" :key="item">
								<text>可滚动内容 {{item}}</text>
							</view>
							<view class="close">
								<button  @click="closeDrawer('showRight')"><text class="word-btn-white">关闭Drawer</text></button>
							</view>
						</scroll-view>
					</view>
				</uni-drawer>
			</view>
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/drawer/drawer)
