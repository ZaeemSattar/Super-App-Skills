---
title: "Uni fab — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-fab.html
---
component name: uni-fab

> Code block: `uFab`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-fab)

Click to expand a graphical button menu

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   Dynamically modifying properties is not recommended, as some performance may be lost.
-   The expansion menu does not support font icons at the moment. It is recommended to use absolute paths when using image paths. Relative paths may have problems.
-   The selected state must be controlled by yourself. If you do not want to have a selected state, just do not process `active`.
-   It is recommended to display up to four in the expanded menu, if too many may exceed the screen for small screen phones.

###  Basic usage

Using components in `template`

```
<template>
	<view>
		<uni-fab
			:pattern="pattern"
			:content="content"
			:horizontal="horizontal"
			:vertical="vertical"
			:direction="direction"
			@trigger="trigger"
		></uni-fab>
	</view>
</template>
```

##  API

###  Fab Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| pattern | Object | \- | Optional style configuration item |
| horizontal | String | 'left' | Horizontal alignment. `left`: left-aligned, `right`: right-aligned |
| vertical | String | 'bottom' | Vertical alignment. `bottom`: bottom alignment, `top`: top alignment |
| direction | String | 'horizontal' | Expand how the menu is displayed. `horizontal`: display horizontally, `vertical`: display vertically |
| popMenu | Boolean | true | Whether to use popup menu |
| content | Array | \- | Expand menu content configuration items |

**pattern configuration item:**

| parameters | type | default value | description |
| --- | --- | --- | --- |
| color | String | #3c3e49 | Default color of text |
| selectedColor | String | #007AFF | Color when text is selected |
| backgroundColor | String | #ffffff | Background Color |
| buttonColor | String | #3c3e49 | Button background color |

**content configuration item:**

| Parameters | Type | Description | | :-😐 :-😐 :-😐 :-😐 | iconPath| String| Image path| | selectedIconPath| String | Selected image path| | text| String | Character| | active| Boolean| Whether to select the current |

###  Fab Events

| Parameters | Type | Description |
| --- | --- | --- |
| @trigger | Function | Expand menu click event, return click information |
| @fabClick | Function | Floating button click event |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-fab) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-ui 规范颜色色板，通过内置样式快速指定元素前景和背景色。</text>
		</uni-card>

		<uni-section title="基本功能" subTitle="点击按钮,切换 fab 不同状态" type="line">
			<view class="warp">
				<button class="button" type="primary" @click="switchBtn(0)">切换菜单方向({{ directionStr }})</button>
				<button class="button" type="primary" @click="switchBtn('left', 'bottom')">左下角显示</button>
				<button class="button" type="primary" @click="switchBtn('right', 'bottom')">右下角显示</button>
				<button class="button" type="primary" @click="switchBtn('left', 'top')">左上角显示</button>
				<button class="button" type="primary" @click="switchBtn('left', 'top')">左上角显示</button>
				<button class="button" type="primary" @click="switchBtn('right', 'top')">右上角显示</button>
				<button class="button" type="primary" @click="switchColor">修改颜色</button>
			</view>
		</uni-section>
		<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
			:direction="direction" @trigger="trigger" @fabClick="fabClick" />
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/fab/fab)
