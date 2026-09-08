---
title: "Uni easyinput — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-easyinput.html
---
Component name: uni-easyinput

> Code block: `uEasyinput`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-easyinput)

The easyinput component is an enhancement of the native input component. It is specially designed to cooperate with the form component [uni-forms](https://ext.dcloud.net.cn/plugin?id=2773) . Easyinput has built-in borders and icons. etc., including all functions of input at the same time

##  introduce

###  Basic usage

After entering the content, a clear button will be displayed at the end of the input box. Click to clear the content. If you do not need to display the icon, set the `clearable` property to `false`

The `clearable` property is set to `true` , the content will only be displayed when the input box is focused and the content is not empty

```
<uni-easyinput v-model="value" placeholder="请输入内容"></uni-easyinput>
```

###  Input box with left and right icons

Set the `prefixIcon` property to display the header icon of the input field

Set the `suffixIcon` property to display the suffix icon of the input field

Note that the icon currently only supports the built-in icon of `uni-icons`. When the `suffixIcon` property is configured, the original icon when `:clearable="true"` and `type="password"` is overwritten

Binding the `@iconClick` event can trigger the click of the icon, returning `prefix` means clicking the left icon, returning `suffix` means clicking the right icon

```

<!-- Input box header icon -->
<uni-easyinput prefixIcon="search" v-model="value" placeholder="请输入内容" @iconClick="onClick"></uni-easyinput>
<!-- Display the icon at the end of the input box -->
<uni-easyinput suffixIcon="search"  v-model="value" placeholder="请输入内容" @iconClick="onClick"></uni-easyinput>
```

###  input box disabled

Set the `disable` property to disable the input box, in this case the input box is not editable

```
<uni-easyinput disabled  v-model="value" placeholder="请输入内容"></uni-easyinput>
```

###  Password box

When `type="password"` is set, the content of the input box will be invisible, replaced by solid dots, and the eye icon will be displayed at the end of the input box, click to switch the content display state

```
<uni-easyinput type="password" v-model="password" placeholder="请输入密码"></uni-easyinput>
```

###  input field focus

Set the `focus` property to focus the input field

If there are multiple input boxes with the `focus` property set on the page, only the `focus` property of the last input box will take effect

```
<uni-easyinput focus v-model="password" placeholder="请输入内容"></uni-easyinput>
```

###  Multi-line text

Multiple lines of text can be entered when `type="textarea"` is set

```
<uni-easyinput type="textarea" v-model="value" placeholder="请输入内容"></uni-easyinput>
```

###  Multi-line text auto height

When `type="textarea"` is set and the `autoHeight` property is set, the automatic height of multi-line text can be used, and the display height of the input box will be adjusted according to the content

```
<uni-easyinput type="textarea" autoHeight v-model="value" placeholder="请输入内容"></uni-easyinput>
```

###  Cancel the border

When `:inputBorder="false"` is set, the border display of the input box can be canceled, and the `:border="true"` of `uni-forms` has a better effect.

```
<uni-forms border>
	<uni-forms-item label="姓名">
		<uni-easyinput :inputBorder="false" placeholder="请输入姓名"></uni-easyinput>
	</uni-forms-item>
	<uni-forms-item label="年龄">
		<uni-easyinput :inputBorder="false" placeholder="请输入年龄"></uni-easyinput>
	</uni-forms-item>
</uni-forms>
```

##  API

###  Easyinput Props

| property name | type | optional value | default value | description |
| --- | --- | --- | --- | --- |
| value | String/ Number | \- | \- | Input Content |
| type | String | See type Options | text | Type of input box (default text) |
| clearable | Boolean | \- | true | Whether to display the icon control on the right to clear the content (displayed when the input box has content and is not disabled), click to clear the content of the input box |
| autoHeight | Boolean | \- | false | Whether to automatically increase the input area, valid when type is textarea |
| placeholder | String | \- | \- | The prompt text of the input box |
| placeholderStyle | String | \- | \- | The style of placeholder (inline style, string), such as "color: #ddd" |
| focus | Boolean | \- | false | Automatically get focus |
| disabled | Boolean | \- | false | Cannot be entered |
| maxlength | Number | \- | 140 | Maximum input length, when set to -1, the maximum length is not limited |
| confirmType | String | \- | done | Set the text of the button in the lower right corner of the keyboard, it only takes effect when type="text" |
| clearSize | Number | \- | 15 | The size of the clear icon, in px |
| prefixIcon | String | \- | \- | Input box header icon |
| suffixIcon | String | \- | \- | input box tail icon |
| trim | Boolean/String | See trim Options | false | Whether to automatically remove spaces, when the incoming type is Boolean, automatically remove the spaces before and after |
| inputBorder | Boolean | \- | true | Whether to display the border of the input box |
| styles | Object | \- | \- | Style customization |
| passwordIcon | Boolean | \- | true | When type=password, whether to display the small eye icon |

####  Type Options

| property name | description |
| --- | --- |
| text | Text Input Keyboard |
| textarea | Multiline Text Input Keyboard |
| password | Password Input Keyboard |
| number | Number input keyboard, note that the number keyboard popped up by app-vue on iOS is not a 9-square grid |
| idcard | ID card input keyboard, only supports WeChat, Alipay, Baidu, QQ applet |
| digit | Numeric keyboard with decimal point, only supports WeChat, Alipay, Baidu, Toutiao, QQ applet |

####  ConfirmType Options

Platform differences are the same as [input](https://uniapp.dcloud.io/component/input)

| property name | description |
| --- | --- |
| send | The button in the lower right corner is "Send" |
| search | The bottom right button is "Search" |
| next | The button in the lower right corner is "Next" |
| go | The button in the lower right corner is "Go" |
| done | The bottom right button is "Done" |

####  Styles Options

| property name | default value | description |
| --- | --- | --- |
| color | #333 | Enter text color |
| disableColor | #eee | Disable background color of input box |
| borderColor | #e5e5e5 | Border Color |

####  Trim Options

When the incoming type is `Boolean`, the spaces before and after are automatically removed. When the incoming type is `String`, it can be controlled separately. The following are optional values

| property name | description |
| --- | --- |
| both | remove spaces at both ends |
| left | Remove left spaces |
| right | Remove right spaces |
| all | Remove all spaces |
| none | Does not strip spaces |

###  Easyinput Events

| EventName | Description | Return Value | Compatibility Description |
| --- | --- | --- | --- |
| @input | Triggered when the content of the input box changes | \- |  |
| @clear | Triggered when the right cross icon is clicked | \- | New in 1.1.0 |
| @focus | Triggered when the input box gets focus | \- |  |
| @blur | Fired when the input box loses focus | \- |  |
| @confirm | Triggered when done button is clicked | \- |  |
| @iconClick | Fired when an icon is clicked | prefix/suffix |  |
| @change | Only triggered when the input box loses focus or the user presses enter |  | New in 1.1.0 |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-easyinput) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Ｓtyle

```
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">easyinput 组件是对原生input组件的增强 ，是专门为配合表单组件 uni-forms 而设计的，easyinput 内置了边框，图标等，同时包含 input所有功能</text>
		</uni-card>
		<uni-section title="默认" subTitle="使用 focus 属性自动获取输入框焦点" type="line" padding>
			<uni-easyinput errorMessage v-model="value" focus placeholder="请输入内容" @input="input"></uni-easyinput>
		</uni-section>

		<uni-section title="去除空格" subTitle="使用 trim 属性 ,可以控制返回内容的空格 " type="line" padding>
			<text class="uni-subtitle">输入内容：{{ '"'+value+'"' }}</text>
			<uni-easyinput class="uni-mt-5" trim="all" v-model="value" placeholder="请输入内容" @input="input"></uni-easyinput>
		</uni-section>

		<uni-section title="自定义样式" subTitle="使用 styles 属性 ,可以自定义输入框样式" type="line" padding>
			<uni-easyinput v-model="value" :styles="styles" :placeholderStyle="placeholderStyle" placeholder="请输入内容"@input="input"></uni-easyinput>
		</uni-section>
		<uni-section title="图标" subTitle="使用 prefixIcon / suffixIcon 属性 ,可以自定义输入框左右侧图标" type="line" padding>
			<uni-easyinput prefixIcon="search" v-model="value" placeholder="左侧图标" @iconClick="iconClick">
			</uni-easyinput>
			<uni-easyinput class="uni-mt-5" suffixIcon="search" v-model="value" placeholder="右侧图标" @iconClick="iconClick"></uni-easyinput>
		</uni-section>
		<uni-section title="禁用" subTitle="使用 disabled 属性禁用输入框" type="line" padding>
			<uni-easyinput disabled value="已禁用" placeholder="请输入内容"></uni-easyinput>
		</uni-section>

		<uni-section title="密码框" subTitle="指定属性 type=password 使用密码框,右侧会显示眼睛图标" type="line" padding>
			<uni-easyinput type="password" v-model="password" placeholder="请输入密码"></uni-easyinput>
		</uni-section>

		<uni-section title="多行文本" subTitle="指定属性 type=textarea 使用多行文本框" type="line" padding>
			<uni-easyinput type="textarea" v-model="value" placeholder="请输入内容"></uni-easyinput>
		</uni-section>

		<uni-section title="多行文本自动高度" subTitle="使用属性 autoHeight 使多行文本框自动增高" type="line" padding>
			<uni-easyinput type="textarea" autoHeight v-model="value" placeholder="请输入内容"></uni-easyinput>
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/easyinput/easyinput)
