---
title: "Uni notice bar — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-notice-bar.html
---
component name: uni-notice-bar

> Code block: `uNoticeBar`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-notice-bar)

Notice Board Component .

##  introduce

###  Basic usage

Use the `text` property to set the bulletin board content

Use the `singlet` property to set whether the guide is displayed on a single line

```
<uni-notice-bar single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
<uni-notice-bar text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

###  Text scrolling

Use the `scrollable` property to set whether the text is scrollable

```
<uni-notice-bar scrollable single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

###  show icon

Use the `showIcon` property to set whether to show the icon

```
<uni-notice-bar showIcon text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

###  Show close button

Use the `showClose` property to set whether to show the close icon

```
<uni-notice-bar showClose showIcon text="这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

###  see more

Use the `showGetMore` property to set whether to show the see more icon on the right

Use the `moreText` property setting to see more text

```
 <uni-notice-bar @getmore="getMore" showGetMore moreText="查看更多" single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

attention

If you need to get the content asynchronously and display it, you need to use `v-if` to control it, `<uni-notice-bar v-if="text" :text="text"></uni-notice-bar>`

##  NoticeBar API

###  NoticeBar Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| speed | Number | 100 | Text scrolling speed, default 100px/sec |
| text | String | \- | Display text |
| background-color | String | #fffbe8 | background-color |
| color | String | #de8c17 | Text Color |
| moreColor | String | #999999 | View more text colors |
| moreText | String | \- | Sets the text for "see more" |
| single | Boolean | false | Single line |
| scrollable | Boolean | false | Whether scrollable, when true, NoticeBar is a single line |
| showIcon | Boolean | false | Whether to show the left horn icon |
| showClose | Boolean | false | Whether to show the left close button |
| showGetMore | Boolean | false | Whether to show the view more icon on the right, when true, the NoticeBar is a single line |

###  NoticeBar Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| @click | Click the NoticeBar to trigger the event | \- |
| @close | Close NoticeBar trigger event | \- |
| @getmore | Trigger event when "View more" is clicked | \- |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-notice-bar) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">通告栏组件多用于系统通知，广告通知等场景，可自定义图标，颜色，展现方式等。</text>
		</uni-card>

		<uni-section title="多行显示" type="line">
			<uni-notice-bar text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="单行显示" subTitle="使用 single 属性单行显示通知" type="line">
			<uni-notice-bar single text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="显示图标" subTitle="使用 show-icon 属性显示左侧小喇叭图标" type="line">
			<uni-notice-bar show-icon text="uni-app发布，开发一次、7端覆盖！" />
		</uni-section>
		<uni-section title="文字滚动" subTitle="使用 scrollable 属性使通告滚动,此时 single 属性将失效,始终单行显示" type="line">
			<uni-notice-bar show-icon scrollable
				text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="查看更多" subTitle="使用 show-get-more 显示更多,此时 single 属性将失效,始终单行显示,如不配置 more-text 属性 ,将显示箭头图标"
			type="line">
			<uni-notice-bar show-get-more show-icon text="年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！" @getmore="getMore" />
			<uni-notice-bar show-get-more show-icon more-text="查看更多" text="年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"
				@getmore="getMore" />
		</uni-section>
		<uni-section title="修改颜色" type="line">
			<uni-notice-bar single color="#2979FF" background-color="#EAF2FF"
				text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="关闭按钮" subTitle="使用 show-close 属性,可关闭通知" type="line">
			<uni-notice-bar show-close single text="HBuilderX 1.0正式发布！uni-app实现里程碑突破实现里程碑突破！" />
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/notice-bar/notice-bar)
