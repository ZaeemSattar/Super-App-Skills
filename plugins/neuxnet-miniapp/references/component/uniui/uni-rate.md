---
title: "Uni rate — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-rate.html
---
component name: uni-rate

> Code block: `uRate` Associated components: `uni-icons`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-rate)

The scoring component is mostly used for scenarios such as evaluating the product after purchasing the product

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following instructions carefully before using the component, which can help you avoid some mistakes.
> 
> -   Sporadic selection is temporarily not supported
> -   The current version does not support modifying the icon, and subsequent versions will continue to optimize
> -   the recommended way to bind values using `v-model`
> -   If you need to set a star to indicate multiple points, for example: display 5 stars, the highest score is 10 points. In this case, please handle it yourself in the change event listener. You can multiply the obtained value by your cardinality. The default component is one star and one point.

###  Basic usage

```
<!-- Basic usage -->
<!-- You need to bind the value variable in the script -->
<uni-rate v-model="value" @change="onChange"/>

<!-- Swipe gestures are not supported to select ratings -->
<uni-rate :touchable="false" :value="5"/>
<!-- set size -->
<uni-rate :size="18" :value="5"/>

<!-- Set the number of ratings -->
<uni-rate :max="10" :value="5" />
	
<!-- set star interval -->
<uni-rate :value="4" :margin="20" />	

<!-- set color -->
<uni-rate :value="3" color="#bbb" active-color="red" />

<!-- select half star -->
<uni-rate allow-half :value="3.5" />

<!-- read-only status -->
<uni-rate :readonly="true" :value="2" />

<!-- Disabled state -->
<uni-rate :disabled="true" disabledColor="#ccc" :value="3" />

<!-- Unselected stars are hollowed out -->
<uni-rate :value="3" :is-fill="false" />
			 
```

```

export default {
	components: {},
	data() {
		return {
			value: 2
		}
	},
	methods: {
		onChange(e) {
			console.log('rate发生改变:' + JSON.stringify(e))
		}
	}
}

```

##  API

###  Rate Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| value/v-model | Number | 0 | Current Rating |
| color | String | #ececec | Unchecked star color |
| activeColor | String | #ffca3e | Selected star color |
| disabledColor | String | #c0c0c0 | Disabled star color |
| size | Number | 24 | The size of the star |
| max | Number | 5 | The maximum number of ratings, currently one point and one star |
| margin | Number | 0 | The spacing of the stars, in px |
| isFill | Boolean | true | The type of the star, whether it is a solid type |
| disabled | Boolean | false | Is it disabled (previously read, now corrected to disabled) |
| readonly | Boolean | false | Is it read-only |
| allowHalf | Boolean | false | Whether to show half stars |
| touchable | Boolean | true | Whether swipe gestures are supported |

###  Rate Events

| Event name | Description | Return parameter |
| --- | --- | --- |
| @change | Change the value of value and return | e = { value:number } |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-rate) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

```
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">评分组件多用于商品评价打分、服务态度评价、用户满意度等场景。</text>
		</uni-card>
		<uni-section title="基本用法" type="line" padding>
			<uni-rate v-model="rateValue" @change="onChange" />
		</uni-section>
		<uni-section title="不支持滑动手势选择评分" subTitle="设置 touchable 属性控制是否开启手势选择" type="line" padding>
			<uni-rate :touchable="false" :value="5" @change="onChange" />
		</uni-section>
		<uni-section title="设置尺寸大小" subTitle="设置 size 属性控制组件大小" type="line" padding>
			<uni-rate size="18" :value="5" />
		</uni-section>
		<uni-section title="设置评分数" subTitle="设置 max 属性控制组件最大星星数量" type="line" padding>
			<uni-rate :max="10" :value="5" />
		</uni-section>
		<uni-section title="设置星星间隔" subTitle="设置 margin 属性控制星星间隔" type="line" padding>
			<uni-rate :value="4" margin="20" />
		</uni-section>
		<uni-section title="设置颜色" subTitle="使用 color 属性设置星星颜色" type="line" padding>
			<uni-rate :value="3" color="#bbb" active-color="red" />
		</uni-section>
		<uni-section title="半星" subTitle="使用 allow-half 属性设置是否显示半星" type="line" padding>
			<uni-rate allow-half :value="3.5" />
		</uni-section>
		<uni-section title="只读状态" subTitle="使用 readonly 属性设置组件只读" type="line" padding>
			<uni-rate :readonly="true" :value="2" />
		</uni-section>
		<uni-section title="禁用状态" subTitle="使用 disabled 属性设置组件禁用" type="line" padding>
			<uni-rate :disabled="true" disabledColor="#ccc" :value="3" />
		</uni-section>
		<uni-section title="未选中的星星为镂空状态" subTitle="使用 is-fill 属性设置星星镂空" type="line" padding>
			<uni-rate :value="3" :is-fill="false" />
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/rate/rate)
