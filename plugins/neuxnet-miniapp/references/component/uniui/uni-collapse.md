---
title: "Uni collapse — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-collapse.html
---
component name: uni-collapse

> Code block: `uCollapse`
> 
> Associated components: `uni-collapse-item`, `uni-icons`.

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-collapse)

Accordion panels are used to collapse/display long content or lists. It is usually used in multi-content classification items to collapse unimportant content and display important content. Click to expand the collapsed section.

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   The component needs to depend on the `sass` plugin, please install it manually
-   The `App` side turns off the component animation by default, because the `height` animation cost is relatively large, which will cause the page to freeze, please use animation as appropriate
-   If it is found that the freeze is serious during the use of the component, please try to disable the component animation. The cause of the problem is as above
-   When the content of the component on the applet side changes, you need to manually call the resize() method to manually update some information to avoid content misalignment
-   To customize the default border color of the component, etc., use the slot to customize the content and use the `border` and `title-border` properties appropriately
-   uni-collapse-item only supports nested use, do not use it alone
-   The component supports nvue, you need to configure `"nvueStyleCompiler" : "uni-app"` under the `manifest.json > app-plus` node

###  Basic usage

Use the `title` attribute to specify what the panel should display

Use the `open` property to open the current panel by default

Use the `disabled` property to disable panels

```
<uni-collapse>
	<uni-collapse-item title="默认开启" :open="true">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="折叠内容">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="禁用状态" disabled>
		<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

###  Accordion effect

Using the `accordion` property, you can open only one panel and close other panels that are already open, similar to an accordion

When setting the `accordion` property, the `open` property takes effect on the last component

```
<uni-collapse accordion>
	<uni-collapse-item title="手风琴效果">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="手风琴效果">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="禁用状态" disabled>
		<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

###  Dynamically set the open state of the accordion panel

Use the `v-model` property to dynamically set the display state of the panel

Use the `name` property to set the unique identifier of each panel, if not set use the default index, start counting from the string `"0"`

**Notice**

-   if `accordion` property is `true` then `v-model` is of type `String`
-   if `accordion` property is `false` then `v-model` is of type `Array`
-   Please note that `v-model` attribute and `open` attribute should not be used together, it is recommended to use only `v-model`

Template

Script

```
<uni-collapse v-model="value">
	<uni-collapse-item name="key1" title="默认开启">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item name="key2" title="默认开启">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item name="key3" title="默认不开启">
			<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

###  Using animation

Use the `show-animation` property to turn on or off the panel collapse animation, the default animation is on

**Notice**

-   The `App` side closes the component animation by default, because the height animation cost is relatively large, which will cause the page to freeze. Please use the animation as appropriate. If there is obvious lag, try to close the animation

```
<uni-collapse>
	<uni-collapse-item :show-animation="true" title="开启动画">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item :show-animation="true"  title="开启动画">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item :show-animation="false"  title="不开启动画">
			<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

###  Configure image

Use `thumb` to configure the image address to display an image on the left side of the panel

To display more content, such as icons, etc., see the description of custom slots below

```
<uni-collapse>
	<uni-collapse-item title="标题文字"
		thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
		<view class="content">
			<text class="text">折叠内容主体，可自定义内容及样式</text>
		</view>
	</uni-collapse-item>
</uni-collapse>
```

###  Custom Slots

If you need to customize the panel display, you can use the `title` slot for full customization. The following is an example of a list using `uni-list`, which requires the introduction of the `uni-list` component

```
<uni-collapse>
	<!-- Because the list has a separator by default, use titleBorder="none" to cancel the panel's separator -->
	<uni-collapse-item title-border="none" :border="false">
		<template v-slot:title>
			<uni-list>
				<uni-list-item title="标题使用自定义标题插槽" :show-extra-icon="true" :extra-icon="extraIcon">
				</uni-list-item>
			</uni-list>
		</template>
		<view class="content">
			<text class="text">折叠内容主体，可自定义内容及样式</text>
		</view>
	</uni-collapse-item>
</uni-collapse>
```

**Notice**

-   When using list in the accordion panel component, do not use uni-list-item alone under App-Nvue, it will cause the component to not display properly, and other platforms do not impose restrictions
-   Using the uni-list component in the default slot is the same as the above example, just write it directly in the default slot

##  API

###  Collapse Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| value/v-model | String/Array | \- | Triggered when the active panel changes (if it is accordion mode, the parameter type is string, otherwise it is array) |
| accordion | Boolean | false | Whether to enable the accordion effect |

###  Collapse Event

| Event Name | Description | Return Value |
| --- | --- | --- |
| @change | Triggered when switching panels | Triggered when switching panels, if it is accordion mode, the return type is string, otherwise it is array |

###  Collapse Methods

| Method Name | Description |
| --- | --- |
| resize | Update the current list height |

prompt

-   The resize method solves the problem of dynamically adding data, and the height of the collapsed panel with animation does not update
-   The `resize` method needs to be used after the data has been rendered. Recommended for `this.$nextTick()`
-   Currently only the applet side needs to call this method, the H5\\App side has already processed it, and there is no need to manually update the height

**Example:**

Template

Script

```
<template>
	<view>
		<uni-collapse ref="collapse" v-model="value">
			<uni-collapse-item title="默认开启" >
				<view class="content">
					<text class="text">{{content}}</text>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="折叠内容">
				<view class="content">
					<text class="text">折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段文字。再次点击标题，折叠内容。</text>
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<button class="button" type="primary" @click="add">动态修改内容</button>
	</view>
</template>

```

###  CollapseItem Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| title | String | \- | title text |
| thumb | String | \- | title left thumbnail |
| disabled | Boolean | false | Disabled |
| open | Boolean | false | Whether to expand the panel |
| show-animation | Boolean | false | Enable animation |
| border | Boolean | true | Collapse panel content divider |
| title-border | String | auto | The optional value of the title divider of the accordion panel is shown below **TitleBorder Params** |
| show-arrow | Boolean | true | Show right arrow |

####  TitleBorder Params

| Parameter name | Description |
| --- | --- |
| auto | Separator lines are displayed automatically |
| none | Do not display dividers |
| show | Always show the divider |

###  Collapse Slots

| Slot Name | Description |
| --- | --- |
| default | default slot |
| title | Panel title slot, if you use this slot to disable the style effect, it will be invalid |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-collapse) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">折叠面板用来折叠/显示过长的内容或者是列表。通常是在多内容分类项使用，折叠不重要的内容，显示重要内容。点击可以展开折叠部分。</text>
		</uni-card>
		<uni-section title="基础用法" type="line">
			<uni-collapse ref="collapse" v-model="value" @change="change">
				<uni-collapse-item title="默认开启" >
					<view class="content">
						<text class="text">{{content}}</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="折叠内容">
					<view class="content">
						<text class="text">折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段文字。再次点击标题，折叠内容。</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="禁用状态" disabled>
					<view class="content">
						<text class="text">禁用状态内容主体，页面上是看不到这段话的。</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>

		<button class="button" type="primary" @click="add">动态修改内容</button>
		<!-- The TODO app side does not use animation by default. When the app uses high animation, there will be performance overhead problems, so it should be used as appropriate -->
		<uni-section title="使用动画效果" type="line">
			<uni-collapse >
				<uni-collapse-item title="使用动画" :show-animation="true">
					<view class="content">
						<text class="text">默认开启组件动画，使用动画效果折叠内容会有一个从上到下的动画。</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="不使用动画" :show-animation="false">
					<view class="content">
						<text class="text">设置 show-animation="false",关闭当前组件动画效果。</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>
		<uni-section title="手风琴效果（只会保留一个的打开状态）" type="line">
			<uni-collapse  accordion v-model="accordionVal" @change="change">
				<uni-collapse-item title="手风琴效果">
					<view class="content">
						<text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="手风琴效果">
					<view class="content">
						<text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="手风琴效果">
					<view class="content">
						<text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>

		<uni-section title="配置图片" type="line">
			<uni-collapse>
				<uni-collapse-item title="标题文字"
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
					<view class="content">
						<text class="text">折叠内容主体，可自定义内容及样式</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="标题文字"
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
					<view class="content">
						<text class="text">折叠内容主体，可自定义内容及样式</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>

		<uni-section title="使用插槽" type="line">
			<uni-collapse>
				<uni-collapse-item titleBorder="none">
					<template v-slot:title>
						<uni-list>
							<uni-list-item title="标题使用自定义标题插槽" :show-extra-icon="true" :extra-icon="extraIcon">
							</uni-list-item>
						</uni-list>
					</template>
					<view class="content">
						<text class="text">折叠内容主体，可自定义内容及样式</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="折叠内容使用 uni-list 组件">
					<uni-list>
						<uni-list-item title="列表文字"></uni-list-item>
						<uni-list-item :disabled="true" title="列表文字" note="列表禁用状态"></uni-list-item>
						<uni-list-item title="列表右侧显示 switch" :show-switch="true"></uni-list-item>
						<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon" title="列表左侧带扩展图标"></uni-list-item>
						<uni-list-item title="列表左侧带略缩图" note="列表描述信息"
							thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
							thumb-size="lg" rightText="右侧文字" showArrow></uni-list-item>
						<uni-list-item title="开启点击反馈" clickable showArrow @click="onClick"></uni-list-item>
					</uni-list>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/collapse/collapse)
