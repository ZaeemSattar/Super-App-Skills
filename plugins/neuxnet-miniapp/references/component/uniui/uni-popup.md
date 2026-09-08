---
title: "Uni popup — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-popup.html
---
component name: uni-popup

> Code block: `uPopup` Associated components: `uni-popup-dialog`, `uni-popup-message`, `uni-popup-share`, `uni-transition`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-popup)

Pop-up layer component, pops up a message prompt window, prompt box, etc. in the application

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
> 
> -   The component needs to depend on the `sass` plugin, please install it manually

-   `uni-popup-message` , `uni-popup-dialog` and other extended ui components need to be used in conjunction with `uni-popup`, and do not support separate use currently
-   When using `uni-popup` in `nvue`, try to place components behind other elements to avoid hierarchy problems
-   `uni-popup` does not completely prevent page scrolling, you can manually do some processing when opening `uni-popup` to prohibit page scrolling
-   If you want to open `uni-popup` after the page is rendered, please call it during the `onReady` or `mounted` lifecycle to make sure the component is rendered
-   In the WeChat applet developer tool, when real device debugging is enabled, the popup will appear delayed, which is caused by the delay of setTimeout in real device debugging. This problem does not occur when previewing and publishing applet
-   Use `npm` to import components. If you confirm that the reference is correct, but it prompts that the component is not registered or the display is abnormal, please try to recompile the project
-   Try not to use `scroll-view` to nest too much content in `uni-popup`, which may affect the performance of the component, causing the component to fail to open or to freeze
-   `uni-popup` does not override native tabbar and native navbar
-   Components in app-vue cannot cover native components such as video, ad, etc. It is recommended to use nvue
-   The component supports nvue, you need to configure `"nvueStyleCompiler" : "uni-app"` under the `manifest.json > app-plus` node

###  Basic usage

```
<template>
	<view>
		<button @click="open">打开弹窗</button>
		<uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup>
	</view>
</template>
<script>
export default {
   methods:{
      open(){
        // Call the uni-popup method through the ref defined by the component. If the parameter is passed in, the type attribute will be invalid. Only ['top','left','bottom','right','center'] is supported
        this.$refs.popup.open('top')
      }
   }
}
</script>

```

###  Set the background color of the main window

In most scenarios, you do not need to set the `background-color` property, because the main window of `uni-popup` is transparent by default. When inserting content into it, the style is completely customized by the user. If the background is set For example, the rounded corners in `uni-popup-dialog` are difficult to achieve. Without setting the background color, it is more suitable for users to freely play.

There are also special cases that require us to actively set the background color. For example, when `type = 'bottom'`, the bottom safe area problem is encountered in the special-shaped screen (such as iphone 11), because the main content of `uni-popup` avoids The safe area is set (set `safe-area: true`), so we cannot customize the color of the bottom. At this time, using `background-color` can solve this problem.

**Example**

```
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="bottom" background-color="#fff">底部弹出 Popup</uni-popup>
```

###  Disable opening animation

In some scenarios, you may not want the popup layer to animate, just set the `animation` property to `false` to turn off the animation.

**Example**

```
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="center" :animation="false">中间弹出 Popup</uni-popup>
```

###  Disable click mask off

By default, clicking on the mask will automatically close `uni-popup`, if you don't want to click to close, just set `mask-click` to `false`, then to close `uni-popup`, you can only manually call `close` method.

**Example**

```
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" :mask-click="false">
	<text>Popup</text>
	<button @click="close">关闭</button>
</uni-popup>
```

```
export default {
	data() {
		return {}
	},
	onReady() {},
	methods: {
		open() {
			this.$refs.popup.open('top')
		},
		close() {
			this.$refs.popup.close()
		}
	}
}

```

##  API

###  Popup Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| animation | Boolean | true | Enable animation |
| type | String | 'center' | Popup |
| mask-click **\[to be deprecated\]** | Boolean | true | Does the mask click close the popup window |
| is-mask-click **\[New in 1.7.4\]** | Boolean | true | Does the mask click close the popup window |
| mask-background-color **\[New in 1.7.4\]** | rgba | rgba(0,0,0,0.4) | Mask color, it is recommended to use rgba color value |
| background-color | String | 'none' | Main window background color |
| safe-area | Boolean | true | Whether it fits the bottom safe area |

####  Type Options

| property name | description |
| --- | --- |
| top | Top Popup |
| center | Center Popup |
| bottom | bottom popup |
| left | Left Popup |
| right | Popup right |
| message | Preset Style : Message Prompt |
| dialog | Preset Styles: Dialog |
| share | Preset Style : Pop-up share example at the bottom |

###  Popup Methods

| method name | description | parameters |
| --- | --- | --- |
| open | Open the popup layer | open(String:type), if the parameter can replace the type attribute |
| close | Close the popup layer | \- |

###  Popup Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| change | The component state changes to trigger | e={show: true | false,type:current mode} |
| maskClick | Click on the mask layer to trigger | \- |

##  Extended component description

`uni-popup` does not actually have any styles, it only provides basic animation effects, giving users a pop-up layer solution, which alone cannot meet development needs, so we provide three basic extension styles

###  uni-popup-message message

Change the `type` attribute of `uni-popup` to `message`, and introduce the corresponding component to use the message prompt. _This component does not support separate use_

**Example**

```
<uni-popup ref="popup" type="message">
	<uni-popup-message type="success" message="成功消息" :duration="2000"></uni-popup-message>
</uni-popup>
```

###  PopupMessage Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| type | String | success | message prompt subject |
| message | String | \- | message prompt text |
| duration | Number | 3000 | The message display time, the component will be automatically closed after the display time, if it is set to 0, it will not be closed, you need to manually call the close method to close |

####  Type Options

| property name | description |
| --- | --- |
| success | success |
| warn | Warning |
| error | failed |
| info | News |

###  PopupMessage Slots

| Name | Description |
| --- | --- |
| default | The content of the message, which overrides the message property |

###  uni-popup-dialog dialog

Change the `type` attribute of `uni-popup` to `dialog`, and import the corresponding component to use the dialog box. _This component does not support separate use_

**Example**

```
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="dialog">
	<uni-popup-dialog mode="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
</uni-popup>
```

```
export default {
	methods: {
		open() {
			this.$refs.popup.open()
		},
		/**
		 * 点击取消按钮触发
		 * @param {Object} done
		 */
		close() {
			// ...
			this.$refs.popup.close()
		},
		/**
		 * 点击确认按钮触发
		 * @param {Object} done
		 * @param {Object} value
		 */
		confirm(value) {
			// the value of the input box
			console.log(value)
			// ...
			this.$refs.popup.close()
		}
	}
}
```

###  PopupDialog Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| type | String | success | Dialog title subject, optional value: success/warn/info/error |
| mode | String | base | Dialog mode, optional value: base (prompt dialog)/input (input dialog) |
| title | String | \- | Dialog Title |
| content | String | \- | Dialog content, valid in base mode |
| confirmText **\[New in 1.7.4\]** | String | \- | Define the text of the confirm button |
| cancelText **\[New in 1.7.4\]** | String | \- | Define the text of the cancel button |
| value | String\\Number | \- | Default value of the input box, valid in input mode |
| placeholder | String | \- | Input box prompt text, valid in input mode |
| before-close | Boolean | false | Whether to intercept button events, if true, the dialog box will not be closed, and the close method of uni-popup needs to be manually executed to close |

####  PopupDialog Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| close | Click the dialog cancel button to trigger | \- |
| confirm | Click the dialog OK button to trigger | e={value: the value of the input box in input mode} |

###  PopupDialog Slots

| Name | Description |
| --- | --- |
| default | Custom content will overwrite the original content display |

###  uni-popup-share sharing example

The sharing example is not used as a final component, but only as a style component for users to modify by themselves. `The follow-up development plan is to implement the actual sharing logic, and the parameters can be configured`.

Change the `type` attribute of `uni-popup` to `share`, and import the corresponding component to use, _this component does not support separate use_

**Example**

```
<uni-popup ref="popup" type="share">
	<uni-popup-share title="分享到" @select="select"></uni-popup-share>
</uni-popup>
```

###  PopupShare Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| title | String | \- | Share popup title |
| before-close | Boolean | false | Whether to intercept button events, if true, the dialog box will not be closed, and the close method of uni-popup needs to be manually executed to close |

###  PopupShare Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| select | select trigger | e = {item,index}: selected parameter |

**Tips**

-   share share component, just as an extension example, if you need to modify the data source, please modify it in the component

##  Forbid scroll penetration

When using components, you will find that when the content part scrolls to the end, continuing to swipe will cause the underlying page to scroll, which is scroll penetration.

However, due to the platform's own reasons, except for the h5 platform, other platforms cannot prohibit scroll penetration in the component, so in the WeChat applet and App platform, the user needs special treatment in the page

###  WeChat Mini Program/App

On the `WeChat Mini Program/App` platform, you can use the `page-meta` component to dynamically modify the page style.

You need to define a variable in data to indicate the open and close state of `uni-popup`, and modify the `overflow` attribute of `page-meta` through this variable.

In the `@change` event of `uni-popup`, you can receive the open/close state of `uni-popup` and assign it to the above variable

**Here is the key code snippet:**

```
<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>
	<view class="container">
		<!-- Normal popup -->
		<uni-popup ref="popup" background-color="#fff" @change="change">
		<!-- ... -->
		</uni-popup>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				show:false
			}
		},
		methods: {
			change(e) {
				this.show = e.show
			}
		}
	}
</script>

```

**Tips**

-   h5 scroll penetration does not require processing
-   wx, app need to use page-meta component to prevent scroll penetration
-   Note the page-meta component, only one page can exist
-   Other platforms cannot prevent scroll penetration. It is recommended to use scroll-view scrolling and manually set overflow:hidden, which is consistent with the page-meta method

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-popup) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">弹出层组件用于弹出一个覆盖到页面上的内容，使用场景如：底部弹出分享弹窗、页面插屏广告等。</text>
		</uni-card>
		<uni-section title="基本示例" type="line">
			<view class="example-body box">
				<button class="button" type="primary" @click="toggle('top')"><text class="button-text">顶部</text></button>
				<button class="button" type="primary" @click="toggle('bottom')"><text class="button-text">底部</text></button>
				<button class="button" type="primary" @click="toggle('center')"><text class="button-text">居中</text></button>
				<button class="button" type="primary" @click="toggle('left')"><text class="button-text">左侧</text></button>
				<button class="button" type="primary" @click="toggle('right')"><text class="button-text">右侧</text></button>
			</view>
		</uni-section>

		<uni-section title="提示消息" type="line">
			<view class="example-body box">
				<button class="button popup-success" @click="messageToggle('success')"><text
						class="button-text success-text">成功</text></button>
				<button class="button popup-error" @click="messageToggle('error')"><text
						class="button-text error-text">失败</text></button>
				<button class="button popup-warn" @click="messageToggle('warn')"><text
						class="button-text warn-text">警告</text></button>
				<button class="button popup-info" @click="messageToggle('info')"><text
						class="button-text info-text">信息</text></button>
			</view>
		</uni-section>

		<uni-section title="对话框示例" type="line" class="hideOnPc">
			<view class="example-body box">
				<button class="button popup-success" @click="dialogToggle('success')"><text
						class="button-text success-text">成功</text></button>
				<button class="button popup-error" @click="dialogToggle('error')"><text
						class="button-text error-text">失败</text></button>
				<button class="button popup-warn" @click="dialogToggle('warn')"><text
						class="button-text warn-text">警告</text></button>
				<button class="button popup-info" @click="dialogToggle('info')"><text
						class="button-text info-text">信息</text></button>
			</view>
		</uni-section>

		<uni-section title="输入框示例" type="line" padding>
			<view class="dialog-box">
				<text class="dialog-text">输入内容：{{ value }}</text>
			</view>
			<button class="button" type="primary" @click="inputDialogToggle"><text
					class="button-text">输入对话框</text></button>

		</uni-section>
		<uni-section title="底部分享示例" type="line" padding>
			<button class="button" type="primary" @click="shareToggle"><text class="button-text">分享模版示例</text></button>
		</uni-section>
		<view>
			<!-- Normal popup -->
			<uni-popup ref="popup" background-color="#fff" @change="change">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }"><text
						class="text">popup 内容</text></view>
			</uni-popup>
		</view>

		<view>
			<!-- Prompt information popup -->
			<uni-popup ref="message" type="message">
				<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
			</uni-popup>
		</view>

		<view>
			<!-- Prompt window example -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog :type="msgType" cancelText="关闭" confirmText="同意" title="通知" content="欢迎使用 uni-popup!" @confirm="dialogConfirm"
					@close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- Input box example -->
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose"  mode="input" title="输入内容" value="对话框预置提示内容!"
					placeholder="请输入内容" @confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- share example -->
			<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
				<uni-popup-share></uni-popup-share>
			</uni-popup>
		</view>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/popup/popup)
