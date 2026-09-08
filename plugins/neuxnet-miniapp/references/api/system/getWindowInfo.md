---
title: "uni.getWindowInfo()"
source_url: https://miniapp.neuxnet.com/api/system/getWindowInfo.html
---
###  uni.getWindowInfo()

Get window information

**Return parameter description**

| Parameter Name | Type | Description |
| --- | --- | --- |
| pixelRatio | number | Device pixel ratio |  |
| screenWidth | number | Screen width |  |
| screenHeight | number | Screen Height |  |
| windowWidth | number | Available window width |  |
| windowHeight | number | Available window heights |  |
| windowTop | number | The top position of the available window |  |
| windowBottom | number | The bottom position of the available window |  |
| statusBarHeight | number | The height of the mobile phone status bar |  |
| screenTop | number | The y value of the top edge of the window |  |
| safeArea | object | Safe area in the positive direction of vertical screen |  |
| safeAreaInsets | object | Inset position of safe area in the positive direction of vertical screen |  |

**Structure of safeArea**

| parameter | type | description |
| --- | --- | --- |
| left | Number | Abscissa of the upper left corner of the safe area |
| right | Number | Abscissa of the lower right corner of the safe area |
| top | Number | The vertical coordinate of the upper left corner of the safe area |
| bottom | Number | The vertical coordinate of the lower right corner of the safe area |
| width | Number | Width of the safe area, in logical pixels |
| height | Number | The height of the safe area, in logical pixels |

**Structure of safeAreaInsets**

| parameter | type | description |
| --- | --- | --- |
| left | Number | Insert position on the left side of the safe area |
| right | Number | The right caret position of the safe area |
| top | Number | Safe Area Top Insertion |
| bottom | Number | Insert position at the bottom of the safe area |
