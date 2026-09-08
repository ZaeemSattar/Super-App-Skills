---
title: "canvas"
source_url: https://miniapp.neuxnet.com/component/canvas.html
---
####  canvas

Canvas.

**Attribute description**

| property name | type | default value | description |
| --- | --- | --- | --- |
| canvas-id | String |  | Unique identifier for the canvas component |  |
| disable-scroll | Boolean | false | When moving in the canvas and there is a bound gesture event, screen scrolling and pull-down refresh are prohibited | ByteDance applet and Feishu applet are not supported |
| hidpi | Boolean | true | Enable HD processing | H5 (HBuilder X 3.4.0+), App-vue (HBuilder X 3.4.0+) |
| @longtap | EventHandle |  | Triggered after a finger long press for 500ms, moving after the long press event is triggered will not trigger the scrolling of the screen | ByteDance applet and Feishu applet are not supported |
| @error | EventHandle |  | The error event is triggered when an error occurs, detail = {errMsg: 'something wrong'} | ByteDance applet and Feishu applet are not supported |

**Notes:**

-   The default width of the canvas tag is 300px and the height is 225px. It needs to be redrawn after dynamically modifying the canvas size.
-   The single oversized canvas in h5 and app-vue cannot be drawn in iOS/Safari (the specific size limit has not been announced).
-   The canvas-id in the same page cannot be duplicated. If you use a canvas-id that has already appeared, the canvas corresponding to the canvas label will be hidden and will no longer work normally.
-   The canvas in app-vue is still the canvas of webview. To use canvas under app-nvue, you need to download the plugin. See the bottom chapter of the documentation for details.

Template

Script

```
<template>
	<view>
		<canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas" id="firstCanvas"></canvas>
		<canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" id="secondCanvas"></canvas>
		<canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" id="secondCanvas" @error="canvasIdErrorCallback"></canvas>
	</view>
</template>
```

Related api: [uni.createCanvasContext](../api/canvas/createCanvasContext.md)

About chart

-   If we only consider H5 side, we can continue to use conventional web charts such as echart and f2.
