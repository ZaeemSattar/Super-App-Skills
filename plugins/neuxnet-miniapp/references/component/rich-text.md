---
title: "rich-text"
source_url: https://miniapp.neuxnet.com/component/rich-text.html
---
####  rich-text

Rich text.

Default events are supported, including click, touchstart, touchmove, touchcancel, touchend and longpress.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| nodes | Array / String | \[\] | Node list/HTML String |  |
| space | string |  | Display consecutive spaces | App, H5, WeChat Basic Library 2.4.1+[See details](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html) , QQ applet, byte applet, Kuaishou applet [see details](https://mp.kuaishou.com/docs/develop/components/basicComponents/richText.html) |
| @itemclick | EventHandle |  | Intercept click events (only support `a`, `img` tags), return current node information `event.detail={node}` |  |

#####  nodes

When the value of nodes is HTML String, it will be automatically parsed into a node list inside the component. It is recommended to use the Array type directly to avoid performance degradation caused by internal conversion.

The nodes in the list now support two types, and distinguished by types: element nodes and text nodes. Element nodes are the default nodes, and HTML nodes are displayed in the rich text area.

**Element nodes: type = node**

| Attribute | Instruction | Type | Required | Remark |
| --- | --- | --- | --- | --- |
| name | Label name | String | Yes | Part of the trusted HTML nodes are supported |
| attrs | Attribute | Object | No | Part of the trusted attributes are supported, in consistent with the Pascal nomenclature |
| children | Child node list | Array | No | The structure is consistent with nodes |

**Text nodes: type = text**

| Attribute | Instruction | Type | Required | Remark |
| --- | --- | --- | --- | --- |
| text | Text | String | Yes | Supported entities |

#####  Trusted HTML nodes and attributes

The class and style attributes are supported globally, but **id attributes are not supported**.

| Node | Attribute |
| --- | --- |
| a |  |
| abbr |  |
| b |  |
| blockquote |  |
| br |  |
| code |  |
| col | span，width |
| colgroup | span，width |
| dd |  |
| del |  |
| div |  |
| dl |  |
| dt |  |
| em |  |
| fieldset |  |
| h1 |  |
| h2 |  |
| h3 |  |
| h4 |  |
| h5 |  |
| h6 |  |
| hr |  |
| i |  |
| img | alt，src，height，width |
| ins |  |
| label |  |
| legend |  |
| li |  |
| ol | start，type |
| p |  |
| q |  |
| span |  |
| strong |  |
| sub |  |
| sup |  |
| table | width |
| tbody |  |
| td | colspan，height，rowspan，width |
| tfoot |  |
| th | colspan，height，rowspan，width |
| thead |  |
| tr |  |
| ul |  |

Template

Script

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view class="content">
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="nodes"></rich-text>
			</view>
			<view class="uni-title uni-common-mt">
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="strings"></rich-text>
			</view>
		</view>
	</view>
</template>
```

**Tips**

-   String type is not recommended for nodes, or the performance will be degraded.
-   Events of all nodes are blocked in the rich-text component. Therefore, if there are links or images in the content that need to be clicked, rich-text cannot be used.
-   attrs attribute supports class instead of id.
-   name attribute is case insensitive.
-   If an untrusted HTML node is used, the node and all its child nodes will be removed.
-   On non-App platforms, the img tag only supports web pictures.
-   If rich-text components are used in custom components, only css style of the custom components will take effect on class in rich-text.
-   When using `itemclick`, if node nesting occurs, the outer `a tag` has a higher priority.
