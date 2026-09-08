---
title: "Uni fav — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-fav.html
---
component name: uni-fav

> Code block: `uFav`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-fav)

For the collection function, you can click to switch the selected and unselected states.

##  introduce

###  Basic usage

```
<uni-fav :checked="checked" @click="onClick"/>
<uni-fav :checked="checked" class="favBtn" circle="true" bgColor="#dd524d" bgColorChecked="#007aff" @click="onClick"/>
```

##  API

###  Fav Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| star | Boolean | true | Does the button have a star |
| bgColor | String | #eeeeee | Background color when not bookmarked |
| bgColorChecked | String | #007aff | Background color when bookmarked |
| fgColor | String | #666666 | Text color when not bookmarked |
| fgColorChecked | String | #FFFFFF | Text color when bookmarked |
| circle | Boolean | false | Whether it is rounded |
| checked | Boolean | false | Is it Favorite |
| contentText | Object | `{contentDefault: 'Favorite',contentFav: 'Favorite'}` | Favorite button text |

###  Fav Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| click | Click the fav button to trigger the event | \- |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-fav) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">用于收藏功能，可点击切换选中、不选中的状态。</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<view class="example-body">
				<uni-fav :checked="checkList[0]" class="favBtn" @click="favClick(0)" />
				<uni-fav :checked="checkList[1]" :star="false" class="favBtn" @click="favClick(1)" />
				<uni-fav :checked="checkList[2]" class="favBtn" :circle="true" bg-color="#dd524d"
					bg-color-checked="#007aff" fg-color="#ffffff" fg-color-checked="#ffffff" @click="favClick(2)" />
				<uni-fav :checked="checkList[3]" class="favBtn" bg-color="#f8f8f8" bg-color-checked="#eeeeee"
					fg-color="#333333" fg-color-checked="#333333" @click="favClick(3)" />
			</view>
		</uni-section>

		<uni-section title="自定义文字" type="line">
			<view class="example-body">
				<uni-fav :checked="checkList[4]" :content-text="contentText" @click="favClick(4)" />
			</view>
		</uni-section>

		<uni-section title="在自定义导航栏使用" type="line">
			<uni-nav-bar style="width: 100%;" :fixed="false" left-icon="arrowleft" title="标题" color="#333333"
				background-color="#FFFFFF">
				<template v-slot:right>
					<uni-fav :checked="checkList[5]" :circle="true" @click="favClick(5)" />
				</template>
			</uni-nav-bar>
		</uni-section>
		<view class="example-body example-body-fullWidth">

		</view>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/fav/fav)
