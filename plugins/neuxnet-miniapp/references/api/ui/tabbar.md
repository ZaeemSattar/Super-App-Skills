---
title: "uni.setTabBarItem(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/ui/tabbar.html
---
###  uni.setTabBarItem(OBJECT)

Dynamically set the content of any item in tabBar

**OBJECT parameter description:**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| index | number |  | Yes | Which term of tabBar, counting from the left |  |
| text | String |  | No | Button text on tab |  |
| iconPath | String |  | No | Path of the image, the size of icon is limited to 40kb, and the recommended size is 81px \* 81px. For position = top, this parameter is invalid and does not support network image |  |
| selectedIconPath | String |  | No | Path of the selected image, the size of icon is limited to 40kb, and the recommended size is 81px \* 81px. For position = top, this parameter is invalid |  |
| pagePath | String |  | No | Absolute page path, must be defined in [pages](../../collocation/pages.md#pages), the replaced pagePath will not become a normal page (you still need to use uni.switchTab to jump transfer) | App (2.8.4+), H5 (2.8.4+) |
| visible | Boolean | true | No | Whether the item is displayed? | App(3.2.10+), H5(3.2.10+) |
| iconfont | Object |  | No | Font icon, higher priority than iconPath | App (3.4.4+) |
| success | Funtion |  | No | Callback function for successful interface calling |  |
| fail | Funtion |  | No | Callback function for failed interface calling |  |
| complete | Funtion |  | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**iconfont parameter description:**

| property | type | description |
| --- | --- | --- |
| text | String | Font Unicode Code |
| selectedText | String | The Unicode code of the selected font |
| fontSize | String | Font icon font size (px) |
| color | String | Font icon color |
| selectedColor | String | Font icon selected color |

**Sample code**

```
uni.setTabBarItem({
  index: 0,
  text: 'text',
  iconPath: '/path/to/iconPath',
  selectedIconPath: '/path/to/selectedIconPath'
})
```

Note: When setting the `iconfont` property, pages.json `iconfontSrc` needs to specify the font file, refer to the following configuration

```
// pages.json
{
  "tabBar": {
    "iconfontSrc":"static/iconfont.ttf",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "Tab1",
        "iconfont": {
          "text": "\ue102",
          "selectedText": "\ue103",
          "fontSize": "17px",
          "color": "#000000",
          "selectedColor": "#0000ff"
        }
      }
    ]
  }
}
```

###  uni.setTabBarStyle(OBJECT)

Dynamically set the overall style of tabBar

**OBJECT parameter description:**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| color | String |  | No | Default color of text on tab, HexColor |
| selectedColor | String |  | No | Color when the text on the tab is selected, HexColor |
| backgroundColor | String |  | No | Background color of tab, HexColor |
| backgroundImage | String |  | No | Image background. Setting local images or creating linear gradients, with the priority higher than backgroundColor, only supported by App 2.7.1+ |
| backgroundRepeat | String |  | No | Tiling of the background image. repeat: the background image is tiled vertically and horizontally; repeat-x: the background image is tiled horizontally and stretched vertically; repeat-y: the background image is tiled vertically and stretched horizontally; no-repeat: the background image is stretched vertically and horizontally. Use no-repeat by default. Only supported by App 2.7.1+ |
| borderStyle | String |  | No | Color of top border of tabBar, only supporting black/white |
| success | Funtion |  | No | Callback function for successful interface calling |
| fail | Funtion |  | No | Callback function for failed interface calling |
| complete | Funtion |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Description of backgroundImage creating linear gradients**

`backgroundImage: linear-gradient(to top, #a80077, #66ff00);`

radial-gradient is currently not supported.

Currently, only support two color gradients, with the gradient direction as follows:

-   to right: gradient from left to right
-   to left: gradient from right to left
-   to bottom: gradient from top to bottom
-   to top: gradient from bottom to top
-   to bottom right: gradient from upper left corner to lower right corner
-   to top left: gradient from the lower right corner to the upper left corner

**Sample code**

```
uni.setTabBarStyle({
  color: '#FF0000',
  selectedColor: '#00FF00',
  backgroundColor: '#0000FF',
  borderStyle: 'white'
})
```

###  uni.hideTabBar(OBJECT)

Hide tabBar

**OBJECT parameter description:**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| animation | boolean | false | No | Do you need animation effects? Only supported by WeChat applet, Alipay applet, Baidu applet, ByteDance applet, Feishu applet, QQ applet, Kuaishou applet, and Jingdong applet |
| success | Funtion |  | No | Callback function for successful interface calling |
| fail | Funtion |  | No | Callback function for failed interface calling |
| complete | Funtion |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

###  uni.showTabBar(OBJECT)

Display tabBar

**OBJECT parameter description:**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| animation | boolean | false | No | Do you need animation effects? Only supported by WeChat applet, Alipay applet, Baidu applet, ByteDance applet, Feishu applet, QQ applet, Kuaishou applet, and Jingdong applet |
| success | Funtion |  | No | Callback function for successful interface calling |
| fail | Funtion |  | No | Callback function for failed interface calling |
| complete | Funtion |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

###  uni.setTabBarBadge(OBJECT)

Add text to the upper right corner of any item in tabBar.

**OBJECT parameter description:**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| index | Number | Yes | Which term of tabBar, counting from the left |
| text | String | Yes | Text displayed, no more than 3 half-width characters |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Sample code**

```
uni.setTabBarBadge({
  index: 0,
  text: '1'
})
```

###  uni.removeTabBarBadge(OBJECT)

Remove the text in the upper right corner of any item in tabBar.

**OBJECT parameter description:**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| index | Number | Yes | Which term of tabBar, counting from the left |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

###  uni.showTabBarRedDot(OBJECT)

Display the red dot in the upper right corner of any item in tabBar.

**OBJECT parameter description:**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| index | Number | Yes | Which term of tabBar, counting from the left |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

###  uni.hideTabBarRedDot(OBJECT)

Hide the red dot in the upper right corner of any item in tabBar.

**OBJECT parameter description:**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| index | Number | Yes | Which term of tabBar, counting from the left |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

###  uni.onTabBarMidButtonTap(CALLBACK)

listen to the click event of the middle button

**Tip**

-   tabbar is native and has a higher level than the front end element
-   Most of the above APIs for operating tabbar can only be used after tabbar rendering, try not to use before tabbar is initialized
