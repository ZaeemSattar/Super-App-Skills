---
title: "getMenuButtonBoundingClientRect()"
source_url: https://miniapp.neuxnet.com/api/ui/menuButton.html
---
###  getMenuButtonBoundingClientRect()

On the Mini Program platform, if the native navigation bar is hidden, there will still be a floating button in the upper right corner, also known as the capsule button under WeChat. This API is used to obtain the layout position information of the menu button under the applet, which is convenient for developers to avoid the button when laying out the top content.

The coordinate information takes the upper left corner of the screen as the origin.

**Platform Difference Description**

| App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | Feishu applet | QQ applet |
| --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | √ | √ | √ | x | √ |

**Return value description**

| property | type | description |
| --- | --- | --- |
| width | number | Width, unit: px |
| height | number | Height, unit: px |
| top | number | Coordinate of the upper boundary, unit: px |
| right | number | Right border coordinate, unit: px |
| bottom | number | Bottom coordinate, unit: px |
| left | number | Left border coordinate, unit: px |

**Example**

```
  let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
```

**Notice**

-   Alipay applet: its logic is different from the WeChat applet, it provides the custom function of the button after the menu is clicked, and you can choose to display those system buttons, \[specification details\](https://docs.alipay.com/mini/api /optionmenuitem)
