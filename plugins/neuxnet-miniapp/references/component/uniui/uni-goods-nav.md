---
title: "Uni goods nav — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-goods-nav.html
---
component name: uni-goods-nav

> Code block: `uGoodsNav`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav)

Add product to cart, buy now

##  introduce

###  Basic usage

```
<template>
	<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
</template>
<script>

export default {
	data () {
	  return {
	    options: [{
			icon: 'headphones',
			text: '客服'
		}, {
			icon: 'shop',
			text: '店铺',
			info: 2,
			infoBackgroundColor:'#007aff',
			infoColor:"red"
		}, {
			icon: 'cart',
			text: '购物车',
			info: 2
		}],
	    buttonGroup: [{
	      text: '加入购物车',
	      backgroundColor: '#ff0000',
	      color: '#fff'
	    },
	    {
	      text: '立即购买',
	      backgroundColor: '#ffa200',
	      color: '#fff'
	    }
	    ]
	  }
	},
	methods: {
	  onClick (e) {
	    uni.showToast({
	      title: `点击${e.content.text}`,
	      icon: 'none'
	    })
	  },
	  buttonClick (e) {
	    console.log(e)
	    this.options[2].info++
	  }
	}
}
</script>
```

##  API

###  GoodsNav Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| options | Array | \- | Component Parameters |
| buttonGroup | Array | \- | Component button group parameters |
| fill | Boolean | false | Whether the button is tiled |

**options parameter description:**

| property name | type | default value | description |
| --- | --- | --- | --- |
| text | String | \- | Display text |
| icon | String |  | icon, [reference](https://ext.dcloud.net.cn/plugin?id=28) |
| info | Number | 0 | Number in the upper right corner |
| infoBackgroundColor | String | #ff0000 | Corner background color |
| infoColor | String | #fff | Corner Foreground Color |

**buttonGroup parameter description:**

| property name | type | default value | description |
| --- | --- | --- | --- |
| text | String | \- | Button Text |
| backgroundColor | String | \- | Button background color |
| color | String | \- | Font Color |

###  GoodsNav Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| @click | left click event | e = {index,content} |
| @buttonClick | Right button group click event | e = {index,content} |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="uni-container">
		<uni-card is-full>
			<text class="uni-h6"> uni-goods-nav 组件主要用于电商类应用底部导航，可自定义加入购物车，购买等操作</text>
		</uni-card>
		<uni-section title="基础用法" type="line">
			<uni-goods-nav @click="onClick" />
		</uni-section>
		<uni-section title="自定义用法" type="line">
			<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup" @click="onClick"
				@buttonClick="buttonClick" />
			<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup1" @click="onClick"
				@buttonClick="buttonClick" style="margin-top: 20px;" />
		</uni-section>
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>

	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/goods-nav/goods-nav)
