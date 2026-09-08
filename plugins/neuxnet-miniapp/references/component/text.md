---
title: "text"
source_url: https://miniapp.neuxnet.com/component/text.html
---
####  text

Text components.

Used to wrap text content.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| selectable | Boolean | false | Whether the text is optional | App, H5, Kuaishou applet |
| space | String |  | Display consecutive spaces | App, H5, WeChat applet |
| decode | Boolean | false | Whether to decode | App, H5, WeChat applet |

**space value description**

| Value | Instruction |
| --- | --- |
| ensp | Half the size of Chinese character spaces |
| emsp | Size of Chinese character spaces |
| nbsp | Space size set according to font |

**Tips**

-   `<text>` only supports nested `<text>` components, and does not support other components or custom components, or otherwise rendering differences in different platforms will be caused.
-   Under app-nvue, only `<text>` can wrap the text content. Unable to wrap text in the `<view>` component.
-   `&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;` can be parsed by decode.
-   The space standard of each operating system is not consistent.
-   All nodes except the text node can not be selected by long press.
-   Line feed using the `\n` method is supported.
-   If you use the `<span>` component to compile, it will be converted to `<text>`.

Template

Script

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="text-box" scroll-y="true">
				<text>{{text}}</text>
			</view>
			<view class="uni-btn-v">
				<button type="primary" :disabled="!canAdd" @click="add">add line</button>
				<button type="warn" :disabled="!canRemove" @click="remove">remove line</button>
			</view>
		</view>
	</view>
</template>
```
