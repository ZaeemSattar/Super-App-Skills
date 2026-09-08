---
title: "button"
source_url: https://miniapp.neuxnet.com/component/button.html
---
##  button

Button.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| size | String | default | Button size |
| type | String | default | Button style type |
| plain | Boolean | false | Whether the button is hollow and the background color is transparent |
| disabled | Boolean | false | Disable or not |
| loading | Boolean | false | Is there a loading icon before the name |
| form-type | String |  | Used for the `<form>` component, clicking will trigger the submit/reset event of the `<form>` component respectively |
| open-type | String |  | Openness |
| hover-class | String | button-hover | Specify the style class of the pressed button. For hover-class="none", there is no effect of click state |
| hover-start-time | Number | 20 | How long does the click state appear after pressing, in milliseconds |
| hover-stay-time | Number | 70 | Retention time of the click state after finger release, in milliseconds |

-   **Note 1: `button-hover` defaults to `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`**

###  size valid values

| Value | Instruction |
| --- | --- |
| default | Default size |
| mini | Small size |

###  type valid values

| Value | Instruction |
| --- | --- |
| primary |  |
| default | White |
| warn | Red |

###  form-type valid values

| Value | Instruction |
| --- | --- |
| submit | Submit form |
| reset | Reset form |

###  button click

The click of the button component follows the vue standard @click event.

Button component has no url attribute. If you want to jump to certain pages, you can write it in @click, or put a layer of navigator component outside the button component. For example, if you need to jump to the about page, execution can be performed as the following writing mode of codes:

```
<template>
	<view>
		<navigator url="/pages/about/about"><button type="default">
			</button></navigator>
		<button type="default" @click="goto('/pages/about/about')">
		</button>
		<button type="default" @click="navigateTo('/pages/about/about')">
		</button>
	</view>
</template>
<script>
	export default {
		methods: {
			goto(url) {
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>
```

Template

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary">
				 Normal
				</button>
			<button type="primary" loading="true">
				 Loading
				</button>
			<button type="primary" disabled="true">
			<button type="default">
				</button>
			<button type="default" disabled="true">
				</button>
			<button type="warn">
				</button>
			<button type="warn" disabled="true">
				</button>
			<view class="button-sp-area">
				<button type="primary" plain="true">
					btn
					</button>
				<button type="primary" disabled="true" plain="true">

				</button>
				<button type="default" plain="true">

				</button>
				<button type="default" disabled="true" plain="true">
					btn</button>
				<button class="mini-btn" type="primary" size="mini">btn</button>
				<button class="mini-btn" type="default" size="mini">btn</button>
				<button class="mini-btn" type="warn" size="mini">btn</button>
			</view>
		</view>
	</view>
</template>
```
