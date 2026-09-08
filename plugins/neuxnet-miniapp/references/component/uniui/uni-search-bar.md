---
title: "Uni search bar — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-search-bar.html
---
component name: uni-search-bar

> Code block: `uSearchBar`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-search-bar)

search bar component

##  introduce

###  Basic usage

```
<!-- Basic usage -->
<uni-search-bar @confirm="search" @input="input" ></uni-search-bar>

<!-- v-model usage -->
<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input" @cancel="cancel" @change="change" @clear="clear"></uni-search-bar>

<!-- Custom Placeholder -->
<uni-search-bar placeholder="自定placeholder" @confirm="search"></uni-search-bar>

<!-- Set rounded corners -->
<uni-search-bar :radius="100" @confirm="search"></uni-search-bar>
```

##  API

###  SearchBar Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| value/v-model | StringNumber |  | Search bar binding value |
| placeholder | String | Search | Search Bar Placeholder |
| radius | Number | 10 | Search bar rounded corners, in px |
| clearButton | String | auto | Whether to display the clear button, the optional value is `always` - always display, `auto` - display when the input box is not empty, `none` - never display |
| cancelButton | String | auto | Whether to display the cancel button, the optional values `always` - always display, `auto` - display when the input box is not empty, `none` - never display |
| cancelText | String | Cancel | Cancel button text |
| bgColor | String | #F8F8F8 | Input box background color |
| focus | Boolean | false |  |

###  SearchBar Events

| Event name | Description | Return parameter |
| --- | --- | --- |
| @confirm | The input box of uniSearchBar confirm event, the return parameter is the value of uniSearchBar | e={value:Number} |
| @input | The value of uniSearchBar triggers an event when the value changes, and the return parameter is the value of uniSearchBar | e=value |
| @cancel | The event is triggered when the cancel button is clicked, and the return parameter is the value of uniSearchBar | e={value:Number} |
| @clear | The event is triggered when the clear button is clicked, and the return parameter is value | e={value:Number} of uniSearchBar |
| @focus | input triggers an event when the focus is obtained, and the return parameter is value | e={value:Number} of uniSearchBar |
| @blur | input triggers an event when it loses focus, the return parameter is value | e={value:Number} of uniSearchBar |

###  Replace the slot slot of the icon

| Slot Name | Description |
| --- | --- |
| searchIcon | Replaces the component's search icon |
| clearIcon | Replaces the component's clear icon |

```
<!-- Replaces the component's search icon -->
<uni-search-bar placeholder="自定义searchIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
	<template v-slot:searchIcon>
		<uni-icons  color="#999999" size="18" type="home" />
	</template>
</uni-search-bar>

<!-- Replaces the component's clear icon -->
<uni-search-bar placeholder="自定义clearIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
	
	<template v-slot:clearIcon>
		<view style="color: #999999" >X</view>
	</template>
</uni-search-bar>

```

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-search-bar) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">搜索栏组件，通常用于搜索商品、文章等。</text>
		</uni-card>

		<uni-section title="基本用法" type="line">
			<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
				@cancel="cancel" @clear="clear">
			</uni-search-bar>
			<view class="search-result">
				<text class="search-result-text">当前输入为：{{ searchValue }}</text>
			</view>

		</uni-section>

		<uni-section title="自定义样式" subTitle="使用 bgColor 属性自定义背景色" type="line">
			<uni-search-bar placeholder="自定义背景色" bgColor="#EEEEEE" @confirm="search" />
		</uni-section>
		<uni-section title="自定义icon" type="line">
			<uni-search-bar placeholder="自定义searchIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
				<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
			</uni-search-bar>
		</uni-section>
		<uni-section title="控制清除/取消按钮" subTitle="使用 clearButton 属性设置清除按钮" type="line">
			<uni-search-bar radius="5" placeholder="一直显示" clearButton="always" cancelButton="always" @confirm="search"
				@cancel="cancel" />
			<uni-search-bar class="uni-mt-10" radius="5" placeholder="自动显示隐藏" clearButton="auto" cancelButton="none" @confirm="search" />
			<uni-search-bar class="uni-mt-10" radius="100" placeholder="一直不显示" clearButton="none" cancelButton="none" @confirm="search" />
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/search-bar/search-bar)
