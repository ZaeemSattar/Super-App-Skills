---
title: "Uni nav bar — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-nav-bar.html
---
component name: uni-nav-bar

> Code block: `uNavBar`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar)

Navigation bar component, mainly used for header navigation.

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   The component needs to depend on the `sass` plugin, please install it manually according to the prompts
-   The component internally depends on the `'uni-icons'` component
-   Do not use inside components, width may be wrong
-   The current component does not support text size modification, if necessary, use the depth selector to override the style

###  Basic usage

```
<uni-nav-bar title="导航栏组件"></uni-nav-bar>
```

###  Enable shadows

Use the `shadow` property to enable navigation bar shadows

Tips:

-   Some models may not display properly under nvue, it is recommended to turn off the shadow under nvue

```
<uni-nav-bar shadow title="导航栏组件"></uni-nav-bar>
```

###  Enable dark mode

Use the `dark` property to enable dark mode for the navigation bar

Tips:

-   Dark mode will only change the default foreground and background colors of the component. If you set a custom color, the custom color will be displayed first

```
<uni-nav-bar dark title="导航栏组件"></uni-nav-bar>
```

###  custom color

Use the `color` property to modify the navigation bar foreground color (text icon color)

Use the `background-color` property to modify the background color of the navigation bar

```
<uni-nav-bar dark title="导航栏组件"></uni-nav-bar>
```

###  with left and right text

Use the `left-text` property to set the text on the left side of the navbar

Use the `right-text` property to set the text on the right side of the navbar

Tips:

-   Icons depend on `uni-icons` component, available icon types refer to [uni-icons example](https://hellouniapp.dcloud.net.cn/pages/extUI/icons/icons)

```
<uni-nav-bar left-text="返回" right-text="设置" title="标题" />
```

###  with left and right icons

Use the `left-icon` property to set the icon on the left side of the navbar

Use the `right-icon` property to set the right icon of the navbar

Tips:

-   Icons depend on `uni-icons` component, available icon types refer to [uni-icons example](https://hellouniapp.dcloud.net.cn/pages/extUI/icons/icons)
-   **right-text and right-icon properties cannot exist at the same time, if you want to use both, please use the right slot to customize**

```
<uni-nav-bar left-icon="left" right-icon="cart" title="标题" />
```

###  custom height

Use the `height` property to set the navbar height

Tips:

-   Component default height is 44px
-   If you use Number type to pass the value, the default unit is px, if you use String type to pass the value, you must have the unit. If the passed value is invalid, use the default value

```
<uni-nav-bar height="120rpx" title="自定义高度" />
```

##  API

###  NavBar Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| title | String | \- | title text |
| leftText | String | \- | left button text |
| rightText | String | \- | right button text |
| leftIcon | String | \- | left button icon (icon type refer to [Icon icon](http://ext.dcloud.net.cn/plugin?id=28) type attribute) |
| rightIcon | String | \- | The right button icon (the icon type refers to the [Icon icon](http://ext.dcloud.net.cn/plugin?id=28) type attribute) |
| color | String | #000000 | Icon and text color |
| backgroundColor | String | #FFFFFF | Navigation bar background color |
| fixed | Boolean | false | Is the top fixed |
| statusBar | Boolean | false | Include status bar |
| shadow | Boolean | false | Is there a shadow under the navigation bar |
| border | Boolean | true | Is there a border under the navigation bar |
| height | Number/String | 44 | Navigation bar height |
| dark | Boolean | false | Enable dark mode for navigation bar |
| leftWidth | Number/String | 120rpx | The width of the left slot of the navigation bar |
| rightWidth | Number/String | 120rpx | Slot width on the right side of the navigation bar |
| stat | Boolean/String | 120rpx | Whether to enable the statistics title function. **Note: It will only take effect if the title attribute is used and the statistics function is turned on** |

**Tips**

-   `leftWidth` and `rightWidth` do not need to be set if not necessary
-   If `leftWidth` and `rightWidth` need to be set, only the two values are the same to ensure that `title` is centered. If the set value is too large, you need to pay attention to the possibility of `title` being overwritten

###  NavBar Slots

Supports inserting different content into NavBar for customization purposes.

| slot name | description |
| --- | --- |
| default | Insert into the middle of the navigation bar |
| left | Insert | to the left of the navigation bar |
| right | Insert to the right of the navigation bar |

```
<uni-nav-bar>
    <view>标题栏</view>
    <view v-slot:left>left</view>
    <view v-slot:right>right</view>
</uni-nav-bar>
```

###  NavBar Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| @clickLeft | Fires when the left button is clicked | \- |
| @clickRight | Fires when the right button is clicked | \- |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-nav-bar dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left" left-text="返回"
			title="自定义导航栏" @clickLeft="back" />
		<uni-card is-full :isShadow="false">
			<text
				class="uni-h6">本导航栏为自定义组件，并非原生导航栏。除非原生导航栏无法满足需求，否则不推荐使用自定义导航栏组件。具体参考https://ask.dcloud.net.cn/article/34921</text>
		</uni-card>
		<uni-section title="基本用法" subTitle="使用 title 属性设置导航栏标题" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar title="标题" />
			</view>
		</uni-section>
		<uni-section title="开启阴影" subTitle="使用 shadow 属性启用阴影" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" title="开启阴影" @clickLeft="back" />
			</view>
		</uni-section>
		<uni-section title="开启暗黑模式" subTitle="使用 dark 属性设置暗黑模式" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" dark title="暗黑模式" @clickLeft="back" />
			</view>
		</uni-section>
		<uni-section title="带返回箭头+右侧图标" subTitle="使用 left-icon/right-icon 设置左右图标" type="line"
			style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" right-icon="cart" title="标题" />
			</view>
		</uni-section>
		<uni-section title="左侧文字+右侧文字" subTitle="使用 left-text/right-text 设置左右文字" type="line"
			style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" leftText="返回" rightText="设置" title="标题" />
			</view>
		</uni-section>
		<uni-section title="自定义颜色" subTitle="使用 color/background-color 属性设置前景背景色" type="line"
			style="margin-bottom: 3px;">
			<view class="box-bg">
				<view class="box-bg">
					<uni-nav-bar dark color="#999" backgroundColor="#f5f5f5" shadow left-icon="left" leftText="返回"
						rightText="设置" title="自定义颜色" />
				</view>
			</view>
		</uni-section>
		<uni-section title="自定义高度" subTitle="使用 height 修改组件高度" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<view class="box-bg">
					<uni-nav-bar height="65px" dark shadow left-icon="left" leftText="返回" rightText="设置"
						title="自定义高度" />
				</view>
			</view>
		</uni-section>
		<uni-section title="自定义内容" subTitle="使用 left/right/default 插槽自定义内容" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar>
					<block slot="left">
						<view class="city">
							<view>
								<text class="uni-nav-bar-text">{{ city }}</text>
							</view>
							<uni-icons type="arrowdown" color="#666" size="18" />
						</view>
					</block>
					<view class="input-view">
						<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
						<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词"
							@confirm="confirm" />
					</view>
					<block slot="right">
						<view class="city">
							搜索
						</view>
					</block>
				</uni-nav-bar>
			</view>
		</uni-section>

	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/nav-bar/nav-bar)
