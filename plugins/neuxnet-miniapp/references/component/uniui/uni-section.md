---
title: "Uni section — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-section.html
---
component name: uni-section

> Code block: `uSection`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-section)

The title bar component is mainly used for title display such as articles and list details.

##  introduce

###  Basic usage

Using components in `template`

```
<uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>

<uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>

<uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
  <template v-slot:decoration>
    <view class="decoration"></view>
  </template>
</uni-section>

<uni-section class="mb-10" title="默认插槽" sub-title="副标题">默认插槽内容</uni-section>

<uni-section class="mb-10" title="主标题">
  <template v-slot:right>
    right slot
  </template>
</uni-section>
```

##  properties/methods

###  Section Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| type | String | \- | Decoration type, optional values: line (vertical line), circle (circle), square (square) |
| title | String | \- | Main title |
| titleFontSize | String | 14px | Main title font size |
| titleColor | String | #333 | Main title font color |
| subTitle | String | \- | Subtitle |
| subTitleFontSize | String | 12px | Subtitle font size |
| subTitleColor | String | #999 | Subtitle font color |
| padding | Boolean/String | false | The padding value of the default slot container, when the incoming type is Boolean, set to 10px or 0 |

###  Section Events

| Event Name | Event Description | Return Parameters |
| --- | --- | --- |
| @click | Click on Section to trigger event | \- |

##  example

attention

Copying the sample code directly will not work. The sample relies on the `uni-scss` component.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-section) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

```
<template>
	<view class="uni-wrap">
			<view class="example-info">
				<text class="example-info-text"> uni-section 组件主要用于文章、列表详情等标题展示 </text>
			</view>
			<uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>
			<uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>
			<uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
        <template v-slot:decoration>
          <view class="decoration"></view>
        </template>
      </uni-section>
			<uni-section class="mb-10" title="默认插槽" sub-title="副标题" padding="0 0 5px 10px">默认插槽内容</uni-section>
			<uni-section class="mb-10" title="主标题">
				<template v-slot:right>
					right slot
				</template>
			</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onReady() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
  $uni-success: #18bc37 !default;

	.uni-wrap {
		flex-direction: column;
		/* #ifdef H5 */
		height: calc(100vh - 44px);
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		flex: 1;
	}

	.mb-10 {
		margin-bottom: 10px;
	}

  .decoration{
    width: 6px;
    height: 6px;
		margin-right: 4px;
    border-radius: 50%;
		background-color: $uni-success;
  }
</style>

```
