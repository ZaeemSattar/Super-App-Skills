---
title: "Uni data checkbox — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-data-checkbox.html
---
component name: uni-data-checkbox

> Code block: `uDataCheckbox`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-data-checkbox)

This component is a package based on the uni-app basic component checkbox. Problems to be solved by this component include:

1.  Data-bound component: Bind a data to this component, and a set of candidate content will be automatically rendered. In the past, developers need to write a lot of code to achieve similar functions
2.  Automatic form verification: The component is bound with data and conforms to the form verification specification of the [uni-forms](https://ext.dcloud.net.cn/plugin?id=2773) component. Automatically implement form validation
3.  This component incorporates multiple selections
4.  This component has several styles to choose from, such as ordinary radio and multi-select boxes, side-by-side button styles, and tag styles. Developers can quickly select the desired style. However, as an encapsulated component, although the style code does not need to be written by itself, it will sacrifice a certain degree of style customization.

In the development of uniCloud, after configuring the enum enumeration and other types in `DB Schema`, in the [Auto Generate Form](https://uniapp.dcloud.io/uniCloud/schema?id=autocode) function of the web console , will automatically generate the `uni-data-checkbox` component and bind the data

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   The component needs to depend on the `sass` plugin, please install it manually
-   This component is data-driven and aims to be put into use quickly. It can only override limited styles through style, and does not support customizing more styles
-   The component supports nvue, you need to configure `"nvueStyleCompiler" : "uni-app"` under the `manifest.json > app-plus` node
-   If there is a problem with the component display, please upgrade `HBuilderX` to `v3.1.0` or above

###  Basic usage

After setting the `localdata` attribute, the component will render the corresponding content through the data, and the radio button is displayed by default

It should be noted that when `:multiple="false"` (single choice), the value of `value/v-model` is of type `String|Number`

```
<template>
	<view>
		<uni-data-checkbox v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: 0,
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

###  Checkbox

Set the `multiple` property, the component is displayed as a multiple selection box

It should be noted that when `:multiple="true"` (multiple selection), the value of `value/v-model` is of type `Array`

```
<template>
	<view>
		<uni-data-checkbox multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

###  set max and min

When setting `:multiple="true"` (multiple selection), you can set `min`, `max` attributes

If the number of selections is less than the value set by the `min` property, the selection cannot be cancelled. Only when the number of selections is greater than or equal to `min` and less than `max`, can the selection be cancelled

If the number of selected items is greater than or equal to the value set by the `max` property, other unselected items will not be selected.

```
<template>
	<view>
		<uni-data-checkbox min="1" max="2" multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

###  setting disabled

If you need to disable something, you need to add the `disable` attribute to the data source of the `localdata` attribute, not the `disable` attribute in the component

```
<template>
	<view>
		<uni-data-checkbox v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

<script>
	export default {
		data() { 
			return {
				value: 0,
				range: [{
						"value": 0,
						"text": "篮球"
					},
					{
						"value": 1,
						"text": "足球",
						// disable current item
						"disable":true
					},
					{
						"value": 2,
						"text": "游泳"
					}
				]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

###  Customize the selected color

Set the `selectedColor` property to modify the icon and border color after the component is selected

Set the `selectedTextColor` property to modify the text color after the component is selected. If not filled in, the default is the same as the `selectedColor` property. When the `mode` property is `tag`, the default is white

```
<template>
	<view>
		<uni-data-checkbox　selectedColor＝"red" selectedTextColor="red" multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

###  more patterns

Set the `mode` property, you can set more display styles, there are currently four built-in styles `default/list/button/tag`

If you need to disable something, you need to add the `disable` attribute to the data source of the `localdata` attribute, not the `disable` attribute in the component

```
<template>
	<view>
		<!-- default default -->
		<uni-data-checkbox v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		<!-- list list , showing left icon -->
		<uni-data-checkbox mode="list" icon="left" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		<!-- list list , show right icon -->
		<uni-data-checkbox mode="list" icon="right" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		<!-- button button -->
		<uni-data-checkbox mode="button" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		<!-- tag tag -->
		<uni-data-checkbox mode="tag" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

<script>
	export default {
		data() { 
			return {
				value: 0,
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

##  API

###  DataCheckbox Props

| property name | type | optional value | default value | description |
| --- | --- | --- | --- | --- |
| value/v-model | Array/String/Number | \- | \- | Default value, Array type when multiple=true, String or Number type otherwise |
| localdata | Array | \- | \- | local rendering data |
| mode | String | default/list/button/tag | default | Display Mode |
| multiple | Boolean | \- | false | Multiple selection |
| min | String/Number | \- | \- | Minimum selection number, effective when multiple is true |
| max | String/Number | \- | \- | Maximum selection number, valid when multiple is true |
| wrap | Boolean | \- | \- | Whether to wrap the line |
| icon | String | left/right | left | list Icon display position in list mode |
| selectedColor | String | \- | #007aff | Selected Color |
| selectedTextColor | String | \- | #333 | Selected text color, if not filled in, it will be displayed automatically |
| emptyText | String | \- | No data yet | The text displayed when there is no data, the local data is invalid |
| map | Object | \- | {text:'text',value:'value'} | Field mapping, map text/value to other fields in the data |

####  Localdata Options

The format of the `localdata` attribute is an array, and each item in the array is an object, which needs to strictly follow the following format

| property name | description |
| --- | --- |
| text | Display text |
| value | Selected value |
| disable | Whether to disable |

####  Mode Options

| property name | description |
| --- | --- |
| default | Default value, landscape display |
| list | list |
| button | button |
| tag | tag |

###  DataCheckbox Events

| Event name | Event description | Return parameter |
| --- | --- | --- |
| @change | Trigger an event when the selected state changes | \- |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-data-checkbox) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view>
		<uni-card is-full>
			<text class="uni-h6">通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用</text>
		</uni-card>
		<uni-section title="单选" type="line">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">单选选中：{{JSON.stringify(radio1)}}</view>
				<uni-data-checkbox v-model="radio1" :localdata="sex"></uni-data-checkbox>
			</view>
		</uni-section>
		<uni-section title="多选" subTitle="使用multiple属性开启多选" type="line">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox1)}}</view>
				<uni-data-checkbox multiple v-model="checkbox1" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="最大最小值" subTitle="使用 min / max 设置多选的最大最小值,单选无效">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">选中：{{JSON.stringify(checkbox6)}}</view>
				<uni-data-checkbox min="1" max="2" multiple v-model="checkbox6" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="更多样式 - button" subTitle="使用mode=button属性使用按钮样式" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio2)}}</view>
				<uni-data-checkbox mode="button" v-model="radio2" :localdata="sex"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox2)}}</view>
				<uni-data-checkbox mode="button" multiple v-model="checkbox2" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="更多样式 - tag" subTitle="使用mode=tag属性使用标签样式" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio3)}}</view>
				<uni-data-checkbox mode="tag" v-model="radio3" :localdata="sex"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox3)}}</view>
				<uni-data-checkbox mode="tag" multiple v-model="checkbox3" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="禁用" subTitle="数据中使用 disable 属性实现单独禁用,组件使用 disable 属性实现全部禁用" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio4)}}</view>
				<uni-data-checkbox mode="button" v-model="radio4" :localdata="sex1"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox4)}}</view>
				<uni-data-checkbox mode="button" multiple v-model="checkbox4" :localdata="hobby2">
				</uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="自定义高亮颜色" subTitle="使用 selectedColor 属性修改颜色" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio5)}}</view>
				<uni-data-checkbox selectedColor="red" v-model="radio5" :localdata="sex1"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox5)}}</view>
				<uni-data-checkbox selectedColor="red" multiple v-model="checkbox5" :localdata="hobby2">
				</uni-data-checkbox>
			</view>
		</uni-section>
	
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/data-checkbox/data-checkbox)
