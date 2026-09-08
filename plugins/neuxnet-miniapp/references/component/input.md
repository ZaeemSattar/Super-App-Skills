---
title: "input"
source_url: https://miniapp.neuxnet.com/component/input.html
---
####  input

Input box.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| value | String |  | Initial content of the input box |  |
| type | String | text | input type | H5 does not support dynamic switching yet, and see Tips below for details. Please use v-if for overall switching |
| password | Boolean | false | Is it a password type? | type is invalid when H5 and App write this attribute |
| placeholder | String |  | Placeholder when the input box is empty |  |
| placeholder-style | String |  | Specify the style of placeholder |  |
| placeholder-class | String | "input-placeholder" | Specify the style class of the placeholder. Note that when scoped is written in the style of the page or component, you need to write /deep/ | in front of the class name ByteDance applet, Feishu applet , Kuaishou applet does not support |
| disabled | Boolean | false | Disable or not |  |
| maxlength | Number | 140 | Maximum input length, which is not limited when set to -1 |  |
| cursor-spacing | Number | 0 | Specifies the distance between the cursor and the keyboard, in px . Take the minimum value of the distance between the input and the bottom and the distance specified by cursor-spacing as the distance between the cursor and the keyboard | App, WeChat applet, Baidu applet, QQ applet, Jingdong applet |
| focus | Boolean | false | Get focus. | Whether to focus on H5 platform and whether the soft keyboard pops up with it depend on the implementation of the current browser itself. nvue page is not supported, and focus () and blur () methods of the component are needed to be used to control the focus |
| confirm-type | String | done | Sets the text of the button in the lower right corner of the keyboard. It only takes effect when type="text". | WeChat applet, App, H5, Kuaishou applet, Jingdong applet |
| confirm-hold | Boolean | false | Whether to keep the keyboard closed when clicking the button in the lower right corner of the keyboard | App(3.3.7+), H5 (3.3.7+), WeChat applet, Alipay applet, Baidu applet, QQ applet, Jingdong applet |
| cursor | Number |  | Cursor position while specifying the focus |  |
| selection-start | Number | \-1 | Home position of cursor, valid for automatically focusing, needing to be used with selection-end |  |
| selection-end | Number | \-1 | End position of cursor, valid for automatically focusing, needing to be used with selection-start |  |
| adjust-position | Boolean | true | Whether the page is automatically pushed up when the keyboard is up | App-Android (invalid when the softinputMode of the vue page is adjustResize, invalid when using the x5 kernel), WeChat applet, Baidu applet, QQ applet , Jingdong Mini Program |
| hold-keyboard | Boolean | false | focus, do not hold the keyboard when clicking on the page | WeChat applet 2.8.2 |
| auto-blur | Boolean | false | When the keyboard is closed, whether to automatically lose focus | App-Vue 3.0.0+ |
| ignoreCompositionEvent | Boolean | true | Whether to ignore the processing of text composition system events in the component. `false` will fire `compositionstart, compositionend, compositionupdate` events, and `input` events will fire during text composition | App-vue (3.4.4+), H5 (3.4.4+), App-nvue not Support |
| @input | EventHandle |  | Input event is triggered at keyboard inputting, event.detail = {value} | See Tips below for differences |
| @blur | EventHandle |  | Triggered when the input box loses focus, event.detail = {value: value} | Not supported by Kuaishou applet |
| @confirm | EventHandle |  | Triggered when the Done button is clicked, event.detail = {value: value} |  Not supported by Kuaishou applet |
| @keyboardheightchange | eventhandle |  | This event is triggered when the keyboard height changes, event.detail = {height: height, duration: duration} | WeChat Mini Program Basic Library 2.7.0+, App 3.1.0+ |

**Tips**

-   The `input` event handler can directly return a string that will replace the content of the input box. Only supported by WeChat applet.
-   There is a default `min-height` style on the `input` component. If the value of `min-height` is greater than the value of `height`, then the `height` style is invalid.
-   H5 side does not support dynamic switching yet, please use `v-if` for overall switching.

```
        <!-- Wrong writing mode -->
		<input :type="isText?'text':'number'" placeholder="placeholder..." />
        <!-- Correct writing mode -->
		<input v-if="isText" type="text" placeholder="placeholder..." />
		<input v-else  type="number"  placeholder="placeholder..." />
```

**type valid value**

| Value | Instruction |
| --- | --- |
| text | Text input keyboard |  |
| number | Numerical input keyboard | All supported. The keyboards displayed on the iOS platform on vue page of App platform and H5 platform version 3.1.22 or lower contain negative numbers and decimals. |
| idcard | ID card input keyboard | WeChat, Alipay, Baidu, QQ applet, Kuaishou applet, Jingdong applet |
| digit | Numeric keyboard with decimal point | All supported. The keyboards displayed on the iOS platform on vue page of App platform and H5 platform contain negative numbers. |
| tel | Phone input keyboard | Only supported under the nvue page of App |
| safe-password | Password safe input keyboard | WeChat applet |
| nickname | nickname input keyboard | WeChat applet |

**Precautions**

-   If you need to input floating-point numbers on the applet platform, please use the `digit` type.
-   When the applet-side input is in focus, it will appear as a native control, and the level will become higher at this time. If the front-end component needs to cover the input, you need to make the input out of focus, or use cover-view and other solutions to cover the native control
-   input components can be set to disabled if the soft keyboard doesn't need to be popped up

**Valid value of confirm-type**

| Value | Instruction |
| --- | --- |
| send | The button in the lower right corner is "Send" | WeChat, Alipay, Baidu applet, Kuaishou applet, Jingdong applet, app-nvue, app-vue and h5 (2.9.9+, and require the device webview kernel Chrome81+, Safari13 .7+) |
| search | The button in the lower right corner is "Search" |  |
| next | The button in the lower right corner is "Next" | WeChat, Alipay, Baidu applet, Kuaishou applet, Jingdong applet, app-nvue, app-vue and h5 (2.9.9+, and the device webview kernel Chrome81+, Safari13.7+) |
| go | The button in the lower right corner is "Go" |  |
| done | The button in the lower right corner is "Done" | WeChat, Alipay, Baidu applet, Kuaishou applet, Jingdong applet, app-nvue, app-vue and h5 (2.9.9+, and require device webview kernel Chrome81+, Safari13 .7+) |

-   If nvue page of App platform is in weex compilation mode, it needs to be set by api of weex (weex mode has been abolished)
-   The pop-up keyboard on vue page of App platform and H5 platform is controlled by browser. Before Chrome81+ and Safari13.7+, the text in the lower right corner of the keyboard can only be set to Finish and Search, and since these versions, it is supported to be set to Send and Next.
-   It is recommended to use nvue for chat in App platform. On the one hand, it is because the button text "Send" in the lower right corner of app-vue control keyboard requires for webview kernel and on the other hand, when sroll-view is used in chat record, too long content will cause performance problems in app-vue.

####  The scheme for removing bar above the soft keyboard on iOS App platform

For iOS Mini App, the soft keyboard in webview pops up with a bar above the soft keyboard by default, showing buttons such as Back, Next and Finish, etc. If you don't want to display this bar, you can configure softinputNavBar: 'none'

Configuration mode, to configure style in pages.json

```
"app-plus": {
	"softinputNavBar": "none"
}
```

-   To dynamically set softinputNavBar using js

```
this.$scope.$getAppWebview().setStyle({
	softinputNavBar: 'none'
})
//this.$scope.$getAppWebview() is equivalent to plus.webview.currentWebview() in html5plus. Using plus.webview.currentWebview() directly on the vue page in Mini App is invalid
```

For nvue page, iOS has no bar above the keyboard by default, and without any setting.

####  Logical explanation about the soft keyboard pop-up

There are two modes adjustResize|adjustPan in the soft keyboard pop-up on the App platform. The default is adjustPan mode. The applet platform only supports adjustPan mode. The H5 platform varies with different browsers.

-   adjustResize: when the soft keyboard pops up, the window height of webview will be squeezed. Screen height= the window height of webview+ soft keyboard height
-   adjustPan: when the soft keyboard pops up, the window height of webview will be unchanged, but the window will be pushed up to ensure that the input box will not be covered by the soft keyboard

Configuration mode, to configure style in pages.json

```
"app-plus": {
	"softinputMode": "adjustResize"
}
```

**Notice**

-   For adjustResize mode on Android App, when the keyboard pops up and retracts, the screen may blink gray or leak the content on the page below in some Android devices since the webview window height requires resetting,.
-   It can only take effect during user interaction on H5 platform via modifying the focus.
-   If you need to prohibit the default behavior of clicking other places to collapse the keyboard, you can listen to the `touch` event and use the `prevent` modifier (only App and H5 are supported. On other platforms, you can set `focus` to enable input box to regain the focus), for example, use on the confirm button: `@touchend.prevent="onTap"`

####  Logical explanation of soft keyboard retracting

-   On Android, after the soft keyboard pops up, click back or the non-focus area to retract the soft keyboard.
-   On iOS, if there is a horizontal bar with "Finished" above the soft keyboard, you need to click Finished to retract the keyboard; if not, click the non-input/textarea area to retract the soft keyboard

####  Explanation of native input box on App platform

On the app platform, there are the [searchinput](../collocation/pages.md#app-titlenview) native input box configured by titleNView and the drawinput of plus.nativeObj.view. The input boxes in these two ways are native, not in the webview.

-   On iOS, no horizontal bar above the soft keyboard will occur in the native input box
-   The native input box is also affected by the configured `adjustPan|adjustResize` mode

Template

Script

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">test</view>
				<input class="uni-input" focus placeholder="test" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">test</view>
				<input class="uni-input" confirm-type="search" placeholder="test" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">test</view>
				<input class="uni-input" maxlength="10" placeholder="test" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">{{inputValue}}</view>
				<input class="uni-input" @input="onKeyInput" placeholder="test" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">test</view>
				<input class="uni-input" @input="replaceInput" v-model="changeValue" placeholder="test" />
			</view>
			<!-- #ifndef MP-BAIDU -->
			<view class="uni-form-item uni-column">
				<view class="title">test</view>
				<input class="uni-input" ref="input1" @input="hideKeyboard" placeholder="test" />
			</view>
			<!-- #endif -->
			<view class="uni-form-item uni-column">
				<view class="title">test</view>
				<input class="uni-input" type="number" placeholder="test" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">test</view>
				<input class="uni-input" password type="text" placeholder="test" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">test</view>
				<input class="uni-input" type="digit" placeholder="test" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">test</view>
				<input class="uni-input" type="idcard" placeholder="test" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">test</view>
				<input class="uni-input" placeholder-style="color:#F76260" placeholder="test" />
			</view>
		</view>
	</view>
</template>
```
