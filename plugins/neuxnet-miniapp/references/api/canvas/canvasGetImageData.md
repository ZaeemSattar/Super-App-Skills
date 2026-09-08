---
title: "uni.canvasGetImageData(OBJECT,this)"
source_url: https://miniapp.neuxnet.com/api/canvas/canvasGetImageData.html
---
###  uni.canvasGetImageData(OBJECT,this)

Return an array to describe the pixel data hidden in the canvas area. Under custom components, the second parameter is passed into the custom component instance this to operate the `<canvas>` component.

**OBJECT parameter description:**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| canvasId | String | Yes | Canvas ID, pass in `<canvas />` |
| x | Number | Yes | x coordinate of the upper left corner of the rectangular area of the image data to be extracted |
| y | Number | Yes | y coordinate of the upper left corner of the rectangular area of the image data to be extracted |
| width | Number | Yes | Width of the rectangular area of the image data to be extracted |
| height | Number | Yes | Height of the rectangular area of the image data to be extracted |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**success callback return parameters:**

| Parameter | Type | Instruction |
| --- | --- | --- |
| errMsg | String |  |
| width | Number | Width of rectangle in image data |
| height | Number | Height of the image data rectangle |
| data | Uint8ClampedArray | Image pixel data is a one-dimensional array and every four terms represent the rgba of a pixel. |

**Sample code**

```
uni.canvasGetImageData({
  canvasId: 'myCanvas',
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  success(res) {
    console.log(res.width) // 100
    console.log(res.height) // 100
    console.log(res.data instanceof Uint8ClampedArray) // true
    console.log(res.data.length) // 100 * 100 * 4
  }
})
```
