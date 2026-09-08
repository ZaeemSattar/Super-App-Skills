---
title: "uni.canvasToTempFilePath(object, component)"
source_url: https://miniapp.neuxnet.com/api/canvas/canvasToTempFilePath.html
---
###  uni.canvasToTempFilePath(object, component)

Export the contents of the specified area in the current canvas to generate a image with specified size and return the file path. Under custom components, the second parameter is passed into the custom component instance to operate the `<canvas>` component.

**object parameter description:**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| x | Number | No | Starting point of canvas on the X axis (default is 0) |
| y | Number | No | Starting point of canvas on the Y axis (default is 0) |
| width | Number | No | Width of canvas (default canvas width is -x) |
| height | Number | No | Height of canvas (default canvas height is -y) |
| destWidth | Number | No | Output image width (default is width \* screen pixel density) |
| destHeight | Number | No | Output image height (default is height \* screen pixel density) |
| canvasId | String | Yes | Canvas ID, pass in `<canvas/>` |
| fileType | String | No | Supported target file types are 'jpg' and 'png' only. The default is 'png' |
| quality | Number | No | The value range of the image quality is (0, 1\]. The outranged values are treated as 1.0. |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Sample code**

```
uni.canvasToTempFilePath({
  x: 100,
  y: 200,
  width: 50,
  height: 50,
  destWidth: 100,
  destHeight: 100,
  canvasId: 'myCanvas',
  success: function(res) {
    //On H5 platform, tempFilePath is base64.
    console.log(res.tempFilePath)
  } 
})
```

**Tips**

-   At H5 side, the cross-domain access is required to achieve image drawing in canvas.
