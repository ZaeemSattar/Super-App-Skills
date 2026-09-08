---
title: "uni.setBackgroundColor(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/ui/bgcolor.html
---
###  uni.setBackgroundColor(OBJECT)

Dynamically set the background color of the window.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | x | √ | √ | √ |

**Parameter Description**

| property | type | default value | required | description |
| --- | --- | --- | --- | --- |
| backgroundColor | String |  | No | The background color of the window, must be a hexadecimal color value |
| backgroundColorTop | String |  | No | Background color of the top window, must be a hexadecimal color value, only supported by iOS |
| backgroundColorBottom | String |  | No | The background color of the bottom window, must be a hexadecimal color value, only supported by iOS |
| success | Function |  | No | Callback function for successful interface call |
| fail | Function |  | No | Callback function for interface call failure |
| complete | Function |  | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**CODE EXAMPLE**

```
uni.setBackgroundColor({
    backgroundColor: '#ffffff',
    backgroundColorTop: '#222222',
    backgroundColorBottom: '#333333'
});
```

###  uni.setBackgroundTextStyle(OBJECT)

Dynamically set the style of the drop-down background font and loading image.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | x | √ | √ | √ |

**Parameter Description**

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| textStyle | String | Yes | the style of the drop-down background font and loading image, the values are: dark, light |
| success | Function | No | Callback function for successful interface call |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**CODE EXAMPLE**

```
uni.setBackgroundTextStyle({
  textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
})
```
