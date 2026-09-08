---
title: "Uni list — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-list.html
---
component name: uni-list

> Code blocks: `uList`, `uListItem` Associated components: `uni-list-item`, `uni-badge`, `uni-icons`, `uni-list-chat`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-list)

List list component, including basic list style, expandable slot mechanism, long list performance optimization, multi-terminal compatibility.

In vue pages, it uses page-level scrolling by default. In app-nvue pages, it defaults to scrolling using the native list component. For such a long list, after scrolling out of the screen, the system will recycle the rendering memory resources in the invisible area, which will not cause the problem that the longer the scrolling, the more stuck the phone becomes.

The uni-list component is the parent container, and the core inside is the uni-list-item sub-component, which represents a repeatable line in the list, and the sub-component can loop infinitely.

There are many styles of uni-list-item. The uni-list-item component meets some common scenarios through built-in properties. When the built-in properties do not meet your needs, you can customize the list content by extending the slot.

Scenarios that can be covered by built-in properties include: navigation list, settings list, small icon list, address book list, and chat history list.

Lists involving many large images or rich content, such as news lists like Toutiao and e-commerce lists like Taobao, need to be implemented through expansion slots.

Examples are given below.

uni-list does not include pull-to-refresh and pull-up page-turning. Pull up and turn pages. See also components: [uni-load-more](https://ext.dcloud.net.cn/plugin?id=29)

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   The component needs to depend on the `sass` plugin, please install it manually
-   Component internal dependencies `'uni-icons'` , `uni-badge` components
-   `uni-list` and `uni-list-item` need to be used together, and `uni-list-item` alone is not currently supported
-   Only when click feedback is turned on, there will be a click selection effect
-   Fully customizable content when using slots
-   The note and rightText attributes are not limited for the time being. They do not support text overflow and hiding. When using, they should control the length display or expand by themselves through the default slot.
-   The Alipay applet platform needs to enable the component2 compilation mode in the Alipay applet developer tool. The way to enable it: Details --> Project Configuration --> Enable component2 compilation
-   If you need to modify `switch`, `badge` style, please use slot customization
-   In the lower version of `HBuilderX`, there may be a problem that the component displays `undefined`, please upgrade the latest `HBuilderX` or `cli`

###  Basic usage

-   Set the `title` property to display the title of the list
-   Set the `disabled` property to disable the current item

```
<uni-list>
	<uni-list-item  title="列表文字" ></uni-list-item>
	<uni-list-item :disabled="true" title="列表禁用状态" ></uni-list-item>
</uni-list>
			 
```

###  Multi-line content display

-   Set the `note` property to display descriptive text information on the second line

```
<uni-list>
	<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
	<uni-list-item :disabled="true" title="列表文字" note="列表禁用状态"></uni-list-item>
</uni-list>

```

###  The right side shows the corner mark, switch

-   Set the `show-badge` property to display the content of the badge
-   Set the `show-switch` property to display the switch switch

```
<uni-list>
	<uni-list-item  title="列表右侧显示角标" :show-badge="true" badge-text="12" ></uni-list-item>
	<uni-list-item title="列表右侧显示 switch"  :show-switch="true"  @switchChange="switchChange" ></uni-list-item>
</uni-list>

```

###  Thumbnails and icons are displayed on the left

-   Set the `thumb` property to display thumbnails on the left side of the list
-   Set the `show-extra-icon` property and specify `extra-icon` to display the icon on the left

```
 <uni-list>
 	<uni-list-item title="列表左侧带略缩图" note="列表描述信息" thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
 	 thumb-size="lg" rightText="右侧文字"></uni-list-item>
 	<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="列表左侧带扩展图标" ></uni-list-item>
</uni-list>
```

###  Enable click feedback and right arrow

-   Set `clickable` to `true` , it means that this is a clickable list, it will give a click effect by default, and can listen to the `click` event
-   Setting the `link` property will automatically enable click feedback and add an arrow to the right side of the list
-   Set the `to` attribute, you can jump to the page, the value of `link` indicates the jump method, if not specified, the default is `navigateTo`

```

<uni-list>
	<uni-list-item title="开启点击反馈" clickable  @click="onClick" ></uni-list-item>
	<uni-list-item title="默认 navigateTo 方式跳转页面" link to="/pages/vue/index/index" @click="onClick($event,1)" ></uni-list-item>
	<uni-list-item title="reLaunch 方式跳转页面" link="reLaunch" to="/pages/vue/index/index" @click="onClick($event,1)" ></uni-list-item>
</uni-list>

```

###  Chat list example

-   Set `clickable` to `true` , it means that this is a clickable list, it will give a click effect by default, and can listen to the `click` event
-   Setting the `link` property will automatically enable click feedback. The value of `link` indicates the jump method. If not specified, the default is `navigateTo`
-   Set the `to` attribute to jump to the page
-   `time` attribute, usually set to display time, but this attribute can not only set the time, you can pass in any text, note that the length of the text may affect the display
-   Only one of the `avatar` and `avatarList` attributes is valid at the same time. If they are set at the same time, the length of the `avatarList` attribute is greater than 1, and the `avatar` attribute will be invalid.
-   The content on the right side of the list can be customized through the default slot

Template

Script

Style

```

<uni-list>
	<uni-list :border="true">
		<!-- Show round avatar -->
		<!-- right side with corner mark -->
		<!-- Avatar display dots -->
		<!-- Avatar display corner label -->
		<!-- Show multiple avatars -->
		<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot"></uni-list-chat>
		<!-- Customize the right content -->
		<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
			<view class="chat-custom-right">
				<text class="chat-custom-text">刚刚</text>
				<!-- If you need to use uni-icons, please import it yourself -->
				<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
			</view>
		</uni-list-chat>
	</uni-list>
</uni-list>

```

##  API

###  List Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| border | Boolean | true | whether to show border |

###  ListItem Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| title | String | \- | title |
| note | String | \- | Description |
| ellipsYes | Number | 0 | Title is overflow hidden, optional value, 0: default; 1: display one line; 2: display two lines; |
| thumb | String | \- | The thumbnail on the left, if the thumb has a value, the extension icon will not be displayed |
| thumbSize | String | medium | Thumbnail size, optional value, lg: large image; medium: normal; sm: small image; |
| showBadge | Boolean | false | Whether to show the digital badge |
| badgeText | String | \- | Number badge content |
| badgeType | String | \- | Digital badge type, refer to [uni-icons](https://ext.dcloud.net.cn/plugin?id=21) |
| badgeStyle | Object | \- | Number badge style, use the custom-style parameter of uni-badge |
| rightText | String | \- | right text content |
| disabled | Boolean | false | Disabled |
| showArrow | Boolean | true | Show arrow icon |
| link | String | navigateTo | New page jump method, see the following table for optional values |
| to | String | \- | New page jump address, if you fill in this attribute, click will return whether the page jump is successful |
| clickable | Boolean | false | Whether to enable clickable feedback |
| showSwitch | Boolean | false | Whether to show Switch |
| switchChecked | Boolean | false | Whether the Switch is checked |
| showExtraIcon | Boolean | false | Whether to show the extension icon on the left |
| extraIcon | Object | \- | Extended icon parameter, the format is `{color: '#4cd964',size: '22',type: 'spinner'}`, refer to \[uni-icons\](https://ext .dcloud.net.cn/plugin?id=28) |
| direction | String | row | Typesetting direction, optional value, row: horizontal arrangement; column: vertical arrangement; 3 slots are horizontal or vertical, also controlled by this property |

####  Link Options

| attribute name | description |
| --- | --- |
| navigateTo | same as uni.navigateTo() |
| redirectTo | same as uni.reLaunch() |
| reLaunch | same as uni.reLaunch() |
| switchTab | same as uni.switchTab() |

###  ListItem Events

| Event name | Description | Return parameter |
| --- | --- | --- |
| click | Click on uniListItem to trigger an event, you need to enable click feedback | \- |
| switchChange | Triggered when the switch is clicked, switch | e={value:checked} |

###  ListItem Slots

| Name | Description |
| --- | --- |
| header | Left/Top content slot, fully customizable default display |
| body | Middle content slot, fully customizable middle content |
| footer | Right/bottom content slot, fully customizable right content |

> **Extended by slot** It should be noted that when the slot is used, the built-in style will be invalid, and only the typesetting style will be retained. The style at this time needs to be implemented by the developer If the built-in property styles of the `uni-list-item` component cannot meet your needs, you can use slots to customize the content in uni-list-item. uni-list-item provides 3 expandable slots: `header`, `body`, `footer`
> 
> -   When the `direction` property is `row`, it means horizontal arrangement, in this case `header` means the left part of the list, `body` means the middle part of the list, `footer` means the right part of the list
> -   When the `direction` property is `column`, it means vertical arrangement, in this case `header` means the top part of the list, `body` means the middle part of the list, `footer` means the bottom part of the list Developers can use only 1 slot or 3 together. In the slot, you can independently write the view label to achieve your desired effect.

**Example**

```
<uni-list>
	<uni-list-item title="自定义右侧插槽" note="列表描述信息" link>
		<template v-slot:header>
			<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
		</template>
	</uni-list-item>
	<uni-list-item>
		<!-- custom header -->
		<template v-slot:header>
			<view class="slot-box"><image class="slot-image" src="/static/logo.png" mode="widthFix"></image></view>
		</template>
		<!-- custom body -->
		<template v-slot:body>
			<text class="slot-box slot-text">自定义插槽</text>
		</template>
		<!-- custom footer-->
		<template v-slot:footer>
			<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
		</template>
	</uni-list-item>
</uni-list>
```

###  ListItemChat Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| title | String | \- | title |
| note | String | \- | Description |
| clickable | Boolean | false | Whether to enable clickable feedback |
| badgeText | String | \- | Number badge content, set to `dot` will display dots |
| badgePositon | String | right | Badge Position |
| link | String | navigateTo | Whether to display the right arrow and enable click feedback, the optional values are shown in the following table |
| clickable | Boolean | false | Whether to enable clickable feedback |
| to | String | \- | Jump page address, if fill in this attribute, click will return whether the page jump is successful |
| time | String | \- | Time display on the right |
| avatarCircle | Boolean | false | Whether to show circular avatar |
| avatar | String | \- | avatar address, valid if avatarCircle is not filled in |
| avatarList | Array | \- | Avatar group, the format is \[{url:''}\] |

####  Link Options

| property name | description |
| --- | --- |
| navigateTo | Same as uni.navigateTo() |
| redirectTo | Same as uni.reLaunch() |
| reLaunch | Same as uni.reLaunch() |
| switchTab | uni.switchTab() |

###  ListItemChat Slots

| Name | Description |
| --- | --- |
| default | Customize the content on the right side of the list (including time and corner mark display) |

###  ListItemChat Events

| Event name | Description | Return parameter |
| --- | --- | --- |
| @click | Click on uniListChat to trigger an event | {data:{}} , if there is a to attribute, it will return the page jump information |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-link) , select `Import example project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等</text>
		</uni-card>
		<uni-section title="基础用法" type="line">
			<uni-list>
				<uni-list-item title="列表文字" />
				<uni-list-item title="列表文字" rightText="右侧文字" />
				<uni-list-item title="列表文字" note="列表描述信息" rightText="右侧文字" />
			</uni-list>
		</uni-section>
		<uni-section title="禁用列表" type="line">
			<uni-list>
				<uni-list-item :disabled="true" title="列表禁用状态" rightText="右侧文字" />
				<uni-list-item :disabled="true" title="列表禁用状态" rightText="右侧文字" />
			</uni-list>
		</uni-section>
		<uni-section title="显示右侧箭头" type="line">
			<uni-list>
				<uni-list-item showArrow title="列表文字" />
				<uni-list-item showArrow title="列表文字" rightText="右侧文字" />
			</uni-list>
		</uni-section>
		<uni-section title="开启点击反馈" type="line">
			<uni-list>
				<uni-list-item title="弹窗提示" clickable @click="onClick" />
				<uni-list-item title="页面跳转" :to="`./chat`" @click="onClick" />
				<uni-list-item title="关闭当前页面打开新页面" showArrow link="redirectTo" to="./chat" @click="onClick" />
				<uni-list-item title="打开错误页面(查看控制台)" showArrow link="redirectTo" to="./chats" @click="onClick" />
			</uni-list>
		</uni-section>

		<uni-section title="不显示分隔线" type="line">
			<uni-list :border="false">
				<uni-list-item title="列表文字" />
				<uni-list-item :border="false" title="列表文字" note="列表描述信息" rightText="右侧文字" />
				<uni-list-item :border="false" title="列表文字" note="列表描述信息" rightText="右侧文字" />
			</uni-list>
		</uni-section>

		<uni-section title="分隔线通栏" type="line">
			<uni-list border-full>
				<uni-list-item title="列表文字" />
				<uni-list-item title="列表文字" note="列表描述信息" rightText="右侧文字" />
				<uni-list-item title="列表文字" note="列表描述信息" rightText="右侧文字" />
			</uni-list>
		</uni-section>

		<uni-section title="文字溢出隐藏" type="line">
			<uni-list>
				<uni-list-item ellipsis="1" title="超长文字显示一行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字" />
				<uni-list-item ellipsis="2" title="超长文字显示二行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字"
					rightText="二行显示" />
				<uni-list-item ellipsis="1" title="全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字"
					note="列表描述信息,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字" showArrow rightText="一行显示" />
				<uni-list-item title="全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字" showArrow rightText="全部" />
			</uni-list>
		</uni-section>

		<uni-section title="显示图标或图片" type="line">
			<uni-list>
				<uni-list-item :show-extra-icon="true" showArrow :extra-icon="extraIcon" title="列表左侧带扩展图标" />
				<uni-list-item title="列表左侧带略缩图" note="列表描述信息" showArrow
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
					thumb-size="sm" rightText="小图" />

				<uni-list-item title="列表左侧带略缩图" note="列表描述信息" showArrow
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
					thumb-size="base" rightText="默认" />
				<uni-list-item title="列表左侧带略缩图" note="列表描述信息" showArrow
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
					thumb-size="lg" rightText="大图" />
			</uni-list>
		</uni-section>

		<uni-section title="使用插槽" type="line">
			<uni-list>
				<uni-list-item>
					<template v-slot:body>
						<view class="slot-box">
							<text class="slot-text">使用 body 插槽</text>
						</view>
					</template>
				</uni-list-item>
				<uni-list-item title="自定义右侧插槽" note="列表描述信息" link>
					<template v-slot:footer>
						<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
					</template>
				</uni-list-item>
				<uni-list-item>
					<template v-slot:header>
						<view class="slot-box">
							<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
						</view>
					</template>
					<template v-slot:body>
						<text class="slot-box slot-text">自定义两侧插槽</text>
					</template>
					<template v-slot:footer>
						<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
					</template>
				</uni-list-item>
			</uni-list>
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/list/list)

##  Page template based on uni-list extension

By extending the slot, a list of many common styles can be implemented

**News list class**

1.  Cloud-integrated hybrid layout: [https://ext.dcloud.net.cn/plugin?id=2546](https://ext.dcloud.net.cn/plugin?id=2546)
2.  Cloud integrated vertical layout, big picture mode: [https://ext.dcloud.net.cn/plugin?id=2583](https://ext.dcloud.net.cn/plugin?id=2583)
3.  Cloud integrated vertical layout, multi-line graphics and text mixed: \[https://ext.dcloud.net.cn/plugin?id=2584\](https://ext.dcloud.net.cn/plugin?id= 2584)
4.  Cloud integrated vertical layout, multi-image mode: [https://ext.dcloud.net.cn/plugin?id=2585](https://ext.dcloud.net.cn/plugin?id=2585)
5.  Horizontal layout of cloud integration, picture on the left and text on the right: [https://ext.dcloud.net.cn/plugin?id=2586](https://ext.dcloud.net.cn/plugin?id=2586)
6.  Horizontal layout of cloud integration, left and right: [https://ext.dcloud.net.cn/plugin?id=2587](https://ext.dcloud.net.cn/plugin?id=2587)
7.  Cloud integrated vertical layout, no picture mode, main title + subtitle: \[https://ext.dcloud.net.cn/plugin?id=2588\](https://ext.dcloud.net.cn/plugin? id=2588)

**Product list class**

1.  Cloud integration list/grid view mutual cut: [https://ext.dcloud.net.cn/plugin?id=2651](https://ext.dcloud.net.cn/plugin?id=2651)
2.  Cloud integration list (gongge mode): [https://ext.dcloud.net.cn/plugin?id=2671](https://ext.dcloud.net.cn/plugin?id=2671)
3.  Cloud integration list (list mode): [https://ext.dcloud.net.cn/plugin?id=2672](https://ext.dcloud.net.cn/plugin?id=2672)
