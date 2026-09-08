---
title: "uni.canvasPutImageData(OBJECT,this)"
source_url: https://miniapp.neuxnet.com/api/canvas/canvasPutImageData.html
---
###  uni.canvasPutImageData(OBJECT,this)

Method of drawing pixel data to the canvas. Under custom components, the second parameter is passed into the custom component instance this to operate the `<canvas>` component.

**OBJECT parameter description:**

| Parameter | Type | Required | Instruction | Minimum version |
| --- | --- | --- | --- | --- |
| canvasId | String | Yes | Canvas ID, pass in `<canvas />` |  |
| data | Uint8ClampedArray | Yes | Image pixel data is a one-dimensional array and every four terms represent the rgba of a pixel. |  |
| x | Number | Yes | Position offset of source image data in target canvas (offset in x axis direction) |  |
| y | Number | Yes | Position offset of source image data in target canvas (offset in y axis direction) |  |
| width | Number | Yes | Width of rectangular area in source image data |  |
| height | Number | No | Height of rectangular area in source image data |  |
| success | Function | No | Callback function for successful interface calling |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**Sample code**

```
const data = new Uint8ClampedArray([255, 0, 0, 255])
uni.canvasPutImageData({
  canvasId: 'myCanvas',
  x: 0,
  y: 0,
  width: 1,
  data: data,
  success(res) {}
})
```
