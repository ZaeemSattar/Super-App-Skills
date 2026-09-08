---
title: "Uni card — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-card.html
---
component name: uni-card

> Code block: `uCard`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-card)

The card component is commonly used to display a complete and independent piece of information, while allowing the user to understand its role. For example, a preview image of an article, author information, time, etc., cards are often entry points for more complex and detailed information.

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   Due to platform compatibility issues, shadows are currently not supported under APP-NVUE Android platform
-   **Version 1.2.1 has major changes, please pay attention to component compatibility issues when updating components**

###  Basic usage

```
<uni-card>
	<text>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
</uni-card>
```

###  Card title + extra info

Use the `title` property to set the card title

Use the `extra` attribute to set card title extra information

```
<uni-card title="基础卡片" extra="额外信息">
	<text>这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
</uni-card>
```

###  Dual Title Card + Thumbnail

Use the `sub-title` property to set the card subtitle

Use the `thumbnail` property to set the left thumbnail of the card title

```
<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" thumbnail="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
	<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
</uni-card>
```

###  Banner Cards

Use the `is-full` property to set the card banner, the banner has no margin, and the left and right will fit the parent element

```
<uni-card title="基础卡片" :isFull="true" sub-title="副标题" extra="额外信息">
	<text>这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
</uni-card>
```

###  Card Cover + Action Bar

Use the `cover` property to set the card cover image, or use the `cover` slot to set the card cover image

Use the `actions` slot to set the content of the card action bar, the example style layout and events need to be implemented by yourself

```
<uni-card cover="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
	<text>这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
	<template v-slot:actions>
		<view class="card-actions">
			<view class="card-actions-item" @click="actionsClick('分享')">
				<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
				<text class="card-actions-item-text">分享</text>
			</view>
			<view class="card-actions-item" @click="actionsClick('点赞')">
				<uni-icons type="heart" size="18" color="#999"></uni-icons>
				<text class="card-actions-item-text">点赞</text>
			</view>
			<view class="card-actions-item" @click="actionsClick('评论')">
				<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
				<text class="card-actions-item-text">评论</text>
			</view>
		</view>
	</template>
</uni-card>
```

##  API

###  Card Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| title | String | \- | title text |
| sub-title | String | \- | Subtitle text |
| extra | String | \- | title extra information |
| thumbnail | String | \- | Thumbnail on the left side of the title, support network images, local images, this image needs to pass in an absolute path, such as: `/static/xxx.png` |
| cover | String | \- | Cover image, support network image, local image, this image needs to pass in an absolute path, such as: `/static/xxx.png` |
| is-full | Boolean | false | Whether the card content is full, if it is true, the padding value will be removed |
| is-shadow | Boolean | false | Whether the shadow of the card content is enabled |
| shadow | String | 0px 0px 3px 1px rgba(0, 0, 0, 0.08) | Card shadow, it must conform to css value |
| border | Boolean | true | card border |
| margin | String | 10px | Card margins |
| spacing | String | 10px | Card padding |
| padding | String | 10px | Card Content Padding |
| border | Boolean | true | card border |
| mode\[deprecated\] | String | basic | card mode, optional value, basic: basic card; style: graphic card; title: title card |
| note\[Deprecated\] | String | \- | Bottom Information |

###  Card Events

| Event name | Event description | Return parameter |
| --- | --- | --- |
| @click | Click Card to trigger event | \- |

###  Card Slots

| Slot Name | Description |
| --- | --- |
| cover | Cover Image Slot |
| title | Card header slot, replace the original header slot |
| actions | Action bar slot, replace the original footer slot |
| header\[Deprecated\] | Card header slot (not supported when graphic card mode="style" ) |
| footer\[Deprecated\] | Card Bottom Slot |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-card) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

template

script

```
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。</text>
		</uni-card>
		<uni-section title="基础卡片" type="line">
			<uni-card :is-shadow="false">
				<text class="uni-body">这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
			</uni-card>
		</uni-section>
		<uni-section title="卡片标题+额外信息" type="line">
			<uni-card title="基础卡片" extra="额外信息">
				<text class="uni-body">这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
			</uni-card>
		</uni-section>

		<uni-section title="双标题卡片" type="line" >
			<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" :thumbnail="avatar" @click="onClick">
				<text class="uni-body">这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
			</uni-card>
		</uni-section>

		<uni-section title="通栏卡片" type="line">
			<uni-card title="基础卡片" :isFull="true" sub-title="副标题" extra="额外信息" :thumbnail="avatar">
				<text class="uni-body">这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
			</uni-card>
		</uni-section>

		<uni-section title="卡片封面图+操作栏" type="line">
			<uni-card :cover="cover" @click="onClick">
				<!-- <image slot='cover' style="width: 100%;" :src="cover"></image> -->
				<text class="uni-body">这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
				<view slot="actions" class="card-actions">
					<view class="card-actions-item" @click="actionsClick('分享')">
						<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">分享</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('点赞')">
						<uni-icons type="heart" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">点赞</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('评论')">
						<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">评论</text>
					</view>
				</view>
			</uni-card>
		</uni-section>

		<uni-section title="自定义卡片内容" type="line">
			<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" padding="10px 0" :thumbnail="avatar" >
				<template v-slot:title>
					<uni-list>
						<uni-list-item :show-switch="true" title="自定义标题"/>
					</uni-list>
				</template>
				<image style="width: 100%;" :src="cover"></image>
				<text class="uni-body uni-mt-5">卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。</text>
				<view slot="actions" class="card-actions">
					<view class="card-actions-item" @click="actionsClick('分享')">
						<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">分享</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('点赞')">
						<uni-icons type="heart" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">点赞</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('评论')">
						<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">评论</text>
					</view>
				</view>
			</uni-card>
		</uni-section>

		<uni-section title="卡片+列表" type="line">
			<uni-card padding="0" spacing="0">
				<template v-slot:cover>
					<view class="custom-cover">
						<image class="cover-image" mode="aspectFill" :src="cover">
						</image>
						<view class="cover-content">
							<text class="uni-subtitle uni-white">今日新闻热点</text>
						</view>
					</view>
				</template>
				<uni-list>
					<uni-list-item title="今日新闻" showArrow></uni-list-item>
					<uni-list-item title="今日新闻" showArrow></uni-list-item>
				</uni-list>
				<view slot="actions" class="card-actions no-border">
					<view class="card-actions-item" @click="actionsClick('分享')">
						<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">分享</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('点赞')">
						<uni-icons type="heart" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">点赞</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('评论')">
						<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">评论</text>
					</view>
				</view>
			</uni-card>
		</uni-section>

	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/card/card)
