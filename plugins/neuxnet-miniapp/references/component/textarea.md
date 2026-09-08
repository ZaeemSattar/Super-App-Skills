---
title: "textarea"
source_url: https://miniapp.neuxnet.com/component/textarea.html
---
####  textarea

Multi-line input box.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| value | String |  | Contents of the input box |  |
| placeholder | String |  | Placeholder when the input box is empty |  |
| placeholder-style | String |  | Specify the style of placeholder |  |
| placeholder-class | String | textarea-placeholder | Specifies the style class of the placeholder. Note that when scoped is written in the style of the page or component, you need to write /deep/ | in front of the class name ByteDance applet, Feishu applet, Kuaishou Applets do not support |
| disabled | Boolean | false | Disable or not |  |
| maxlength | Number | 140 | Maximum input length, which is not limited when set to -1 |  |
| focus | Boolean | false | Get focus | Whether to focus on H5 platform and whether the soft keyboard pops up with it depend on the implementation of the current browser itself. nvue page is not supported, and focus () and blur () methods of the component are needed to be used to control the focus |
| auto-focus | Boolean | false | Auto-focus, pull up the keyboard | JD Mini Program |
| auto-height | Boolean | false | Whether to increase the height automatically. style.height does not take effect when auto-height is set |  |
| cursor-spacing | Number | 0 | Specifies the distance between the cursor and the keyboard, in px . Take the minimum value of the distance between the textarea and the bottom and the distance specified by cursor-spacing as the distance between the cursor and the keyboard | App, WeChat applet, Baidu applet, ByteDance applet, Feishu applet, QQ applet, Jingdong applet Program |
| cursor | Number |  | Cursor position when specifying focus | WeChat applet, App, H5, Baidu applet, ByteDance applet, Feishu applet, QQ applet, Jingdong applet |
| confirm-type | String | done | Set the text of the button in the lower right corner of the keyboard | WeChat Mini Program Basic Library 2.13.0+, App-vue and H5 (2.9.9+, and requires device webview kernel Chrome81+, Safari13.7+) |
| confirm-hold | Boolean | false | Whether to keep the keyboard closed when clicking the button in the lower right corner of the keyboard | App(3.3.7+), H5 (3.3.7+), WeChat applet (basic library 2.16.0+), Baidu applet (basic library 3.130.1+), Kuaishou applet |
| show-confirm-bar | Boolean | true | Whether to display the column with the "Complete" button above the keyboard | WeChat applet, Baidu applet, QQ applet, Jingdong applet |
| selection-start | Number | \-1 | The starting position of the cursor, valid when auto-focusing, and must be used with selection-end | WeChat applet, App, H5, Baidu applet, ByteDance applet, Feishu applet , QQ applet, Jingdong applet |
| selection-end | Number | \-1 | Cursor end position, valid when auto-focusing, must be used in conjunction with selection-start | WeChat applet, App, H5, Baidu applet, ByteDance applet, Feishu applet, QQ applet, Jingdong applet |
| adjust-position | Boolean | true | Whether the page is automatically pushed up when the keyboard pops up | App-Android (invalid when the softinputMode is adjustResize), WeChat applet, Baidu applet, QQ applet, Jingdong applet |
| disable-default-padding | boolean | false | Whether to remove the default padding under iOS | WeChat applet 2.10.0, Feishu applet 3.46 |
| hold-keyboard | boolean | false | focus, do not hold the keyboard when clicking on the page | WeChat applet 2.8.2 |
| auto-blur | boolean | false | Whether to automatically lose focus when the keyboard is retracted | App-vue 3.0.0+, not supported by App-nvue |
| ignoreCompositionEvent | boolean | true | Whether to ignore the processing of text composition system events in the component. `false` will fire `compositionstart, compositionend, compositionupdate` events, and `input` events will fire during text composition | App-vue (3.4.4+), H5 (3.4.4+), App-nvue not Support |
| @focus | EventHandle |  | Triggered when the input box is focused, event.detail = { value, height }, height is the height of the keyboard | Wechat applet, Jingdong applet, App , QQ applet supports height |
| @blur | EventHandle |  | Triggered when the input box loses focus, event.detail = {value, cursor} | Not supported by Kuaishou applet |
| @linechange | EventHandle |  | Called when the number of lines in the input box changes, event.detail = {height: 0, heightRpx: 0, lineCount: 0} | ByteDance applet, Feishu applet, Kuaishou applet are not supported, nvue ios does not currently support |
| @input | EventHandle |  | When the keyboard is input, trigger the input event, event.detail = {value, cursor}, the return value of the @input processing function will not be reflected on the textarea | Not supported by Kuaishou applet |
| @confirm | EventHandle |  | When you click Finish, trigger the confirm event, event.detail = {value: value} | WeChat applet, Baidu applet, QQ applet, Jingdong applet |
| @keyboardheightchange | Eventhandle |  | This event is triggered when the keyboard height changes, event.detail = {height: height, duration: duration} | WeChat Mini Program Basic Library 2.7.0+, App 3.1.0+ |

**Valid value of confirm-type**

| Value | Instruction |
| --- | --- |
| send | The button in the lower right corner is "Send" |
| search | The button in the lower right corner is "Search" |
| next | The button in the lower right corner is "Next" |
| go | The button in the lower right corner is "Go" |
| done | The button in the lower right corner is "Finish" |

Template

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view>
		<view class="uni-title uni-common-pl">
			</view>
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaBlur" auto-height />
			</view>
			<view class="uni-title uni-common-pl">
				</view>
			<view class="uni-textarea">
				<textarea placeholder-style="color:#F76260" placeholder=""/>
			</view>
		</view>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        bindTextAreaBlur: function (e) {
            console.log(e.detail.value)
        }
    }
}
</script>
```

**Tips**

-   The blur event of textarea will be later than the tap event on the page. If you need to get the textarea from the click event of the button, you can use the @submit。 of the form
-   It can only take effect during user interaction on H5 platform via modifying the focus.
-   For the pop-up and retract logic of the soft keyboard, please refer to the [input document](./input.md#app%E5%B9%B3%E5%8F%B0ios%E7%AB%AF%E8%BD%AF%E9%94%AE%E7%9B%98%E4%B8%8A%E6%96%B9%E6%A8%AA%E6%9D%A1%E5%8E%BB%E9%99%A4%E6%96%B9%E6%A1%88)
-   If you need to prohibit the default behavior of clicking other places to collapse the keyboard, you can listen to the `touch` event and use the `prevent` modifier (only App and H5 are supported. On other platforms, you can set `focus` to enable input box to regain the focus), for example, use on the confirm button: `@touchend.prevent="onTap"`
-   js assigns a value to the textarea component as a string. Adding \\n to the string can realize line feed.
-   nvue style `word-wrap` is not supported on Android platform
-   Older versions of chrome or browsers with the same core will put multiple punctuation marks on one line. In this case, you can set the textarea style to `word-break: break-word;` to achieve automatic line break.

```
<template>
    <view class="content">
        <textarea class="textarea" v-model="txt"></textarea>
    </view>
</template>
<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>
```
