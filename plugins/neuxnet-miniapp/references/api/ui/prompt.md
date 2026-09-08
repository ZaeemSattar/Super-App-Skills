---
title: "uni.showToast(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/ui/prompt.html
---
###  uni.showToast(OBJECT)

Displays the message prompt box.

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| title | String | Yes | The content and length of the prompt are related to the value of icon. |  |
| icon | String | No | Icon. See the description below for valid values. |  |
| image | String | No | The local path of the custom icon (gif is not supported on the app side) | App, H5, WeChat applet, Baidu applet |
| mask | Boolean | No | Whether to display a transparent mask to prevent touch penetration, default: false | App, WeChat applet |
| duration | Number | No | Prompt delay time, in milliseconds, default: 1500 |  |
| position | String | No | The plain text light prompt displays the location. After filling in the valid value, only the `title` attribute takes effect. See the description below for the valid value. | App |
| success | Function | No | Callback function for successful interface calling |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**icon value description**

| Value| Instruction| |:-|:-|:-| |success|The success icon is displayed. At this time, the title text on the `Mini Program` platform can display up to 7 Chinese characters in length. |Alipay applet unlimited length unlimited | |error|Display the error icon. At this time, the title text can display up to 7 Chinese characters in length on the `Mini Program` platform. |Alipay applet, Kuaishou applet, byte applet, Baidu applet, Jingdong applet, QQ applet are not supported| |fail|Display an error icon, and the title text has no length. |Alipay applet, byte applet| |exception|Display the exception icon. The title text is now displayed without length. |Alipay Mini Program| |loading|Display the loading icon. At this time, the title text can display up to 7 Chinese characters in length on the `Mini Program` platform. |Alipay applet does not support| |none|No icon is displayed. At this time, the title text can be displayed on a maximum of two lines in `Applet`, and `App` only supports single-line display. | |

**Example**

```
uni.showToast({
	duration: 2000
});
```

**Description of position value (valid only in App)**

| Value | Instruction |
| --- | --- |
| top | Display at top |
| center | Display at center |
| bottom | Display at bottom |

**Tips**

-   The App can achieve more functions through the [plus.nativeUI.toast API](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.toast) .

###  uni.hideToast()

Hide the message prompt box.

**Example**

```
uni.hideToast();
```

###  uni.showLoading(OBJECT)

If the loading prompt box is displayed, you must actively call [uni.hideLoading](./prompt.md#hideloading) to close the prompt box.

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| title | String | Yes | Text content of the prompt, displayed under loading |  |
| mask | Boolean | No | Whether to display a transparent mask to prevent touch penetration, default: false | H5, App, WeChat applet, Baidu applet |
| success | Function | No | Callback function for successful interface calling |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**Example**

```
uni.showLoading({
});
```

###  uni.hideLoading()

Hide the loading prompt box.

**Example**

```
uni.showLoading({
});

setTimeout(function () {
	uni.hideLoading();
}, 2000);
```

###  uni.showModal(OBJECT)

Display the modal pop-up window with only one OK button or both OK and Cancel buttons. Similar to an API integrating alert and confirm in html.

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| title | String | No | Prompt title |  |
| content | String | No | Prompt content |  |
| showCancel | Boolean | No | Whether to display the Cancel button, with true as default |  |
| cancelText | String | No | Cancel button text, default is "Cancel" |  |
| cancelColor | HexColor | No | The text color of the cancel button, the default is "#000000" | H5, WeChat applet, Baidu applet |
| confirmText | String | No | Confirm button text, the default is "OK" |  |
| confirmColor | HexColor | No | Confirm the text color of the button, the default for H5 platform is "#007aff", the default for WeChat applet platform is "#576B95", the default for Baidu applet platform is "#3c76ff" | H5, WeChat applet, Baidu Mini Program |
| editable | Boolean | No | Show input box | H5 (3.2.10+), App (3.2.10+), WeChat applet (2.17.1+) |
| placeholderText | String | No | Prompt text when the input box is displayed | H5 (3.2.10+), App (3.2.10+), WeChat applet (2.17.1+) |
| success | Function | No | Callback function for successful interface calling |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**Success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| confirm | Boolean | true indicates the user clicking on the OK button |
| cancel | Boolean | true indicates the user clicking on the Cancel button (used for Android system to distinguish between clicking the mask to close or clicking the Cancel button to close) |

**Example**

```
uni.showModal({
	success: function (res) {
		if (res.confirm) {
		} else if (res.cancel) {
		}
	}
});
```

**Notice**

-   When the pop-up box is used at the same time to confirm and cancel, it should be noted that the positions of the confirm and cancel buttons on different platforms are different. In WeChat and H5, the confirm button is on the right by default. In the App, the iOS confirmation button is on the right by default, and Android is on the left by default. The reason for this difference is that uni.showModal calls the natively provided pop-up box on the App and the applet, and the native platform strategy itself is different. If you need to adjust, you can control the text of the button by yourself, that is, the text of the "OK" button can actually be set to "Cancel";
-   When showModal does not meet the requirements, you can develop the component popup by yourself. There are many custom popup components in the plug-in market. It should be noted that on non-H5 platforms, front-end components cannot cover native components (such as maps and videos), and masks cannot cover tabbar and navigationbar. If you need to cover native components or mask tabbar, etc.
-   There is also a native \[prompt API\] (https://www.html5plus.org/doc/zh\_cn/nativeui.html#plus.nativeUI.prompt) on the App side, and an input box is built into the pop-up interface. Other platforms need to encapsulate front-end components for implementation;

###  uni.showActionSheet(OBJECT)

Pop up the operation menu from the bottom up

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| title | String | No | Menu title | App, H5, Alipay applet, DingTalk applet, WeChat applet 3.4.5+ (only valid for real devices) |
| alertText | String | No | Alert text (same as menu title) | WeChat applet (only valid on real devices) |
| itemList | Array<String> | Yes | Button text array | WeChat, Baidu, ByteDance applet array length is up to 6 |
| itemColor | HexColor | No | Button text color, string format, default is "#000000" | App-iOS, ByteDance applet, Feishu applet are not supported |
| popover | Object | No | On large-screen devices, the display area of the native selection button box is popped up and displayed in the center by default | App-iPad(2.6.6+), H5(2.9.2) |
| success | Function | No | Callback function for successful interface calling. See the notices on returning parameter description. |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**popover value description (only valid for App)**

| Value | Type | Instruction |
| --- | --- | --- |
| top | Number | Coordinates of the indication area. When using the native navigationBar, it is generally necessary to add the height of the navigationBar. |
| left | Number | Indicate area coordinates |
| width | Number | Indicate area width |
| height | Number | Indicate area height |

**Success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| tapIndex | Number | The buttons clickable by user, from top to bottom, starting from 0 |

**Example**

```
uni.showActionSheet({
	itemList: ['A', 'B', 'C'],
	success: function (res) {
	},
	fail: function (res) {
		console.log(res.errMsg);
	}
});
```

**Tips**

-   App platform, iPad devices support setting the position of the popup box, see [plus.nativeUI documentation](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.ActionSheetStyles)
-   To realize native and complex bottom menu of graphics and text on the App platform

**Notice**

-   On the non-H5 side, all pop-up controls in this chapter are native controls with the highest level, covering native controls such as video, map and tabbar.
