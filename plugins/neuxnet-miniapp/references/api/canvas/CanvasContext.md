---
title: "CanvasContext.fillStyle string"
source_url: https://miniapp.neuxnet.com/api/canvas/CanvasContext.html
---
**Attribute**

###  CanvasContext.fillStyle string

Fill color. Same usage as [CanvasContext.setFillStyle()](#canvascontextsetfillstyle).

###  CanvasContext.strokeStyle string

Border color. Same usage as [CanvasContext.setStrokeStyle()](#canvascontextsetstrokestyle).

###  CanvasContext.shadowOffsetX number

Horizontal shift of shadow with respect to shape

###  CanvasContext.shadowOffsetY number

Vertical shift of shadow with respect to shape

###  CanvasContext.shadowColor number

Shadow color

###  CanvasContext.shadowBlur number

Blur level of the shadow

###  CanvasContext.lineWidth number

Line width. Same usage as [CanvasContext.setLineWidth()](#canvascontextsetlinewidth).

###  CanvasContext.lineCap number

endpoint style of the line. Same usage as [CanvasContext.setLineCap()](#canvascontextsetlinecap).

###  CanvasContext.lineJoin number

intersection point style of lines. Same usage as [CanvasContext.setLineJoin()](#canvascontextsetlinejoin).

###  CanvasContext.miterLimit number

Maximum miter length. Same usage as [CanvasContext.setMiterLimit()](#canvascontextsetmiterlimit).

###  CanvasContext.lineDashOffset number

Dotted line offset, with its initial value of 0

###  CanvasContext.font string

Attributes of the current font style. A DOMString conforming to [CSS font syntax](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) needs to provide at least the font size and font family name. The default is 10px sans-serif.

###  CanvasContext.globalAlpha number

global brush transparency. The range is 0-1. 0 means completely transparent, and 1 means completely opaque.

###  CanvasContext.globalCompositeOperation string

The type of synthesis process applied when drawing a new shape. Currently, the Android version only applies to the composition of the `fill`, and the composition effect for the `stroke` line segment is `source-over`.

Currently supported operations are

-   App and H5 sides: source-over, destination-over, source-in, destination-in, source-out, destination-out, source-atop, destination-atop, lighter, darker, xor, copy.

**Method**

###  CanvasContext.arc

Draw an arc. To create a circle, the `arc()` method can be used to specify a starting radian of 0 and an ending radian of `2 * Math.PI`. Draw an arc in `canvas` using the `stroke()` or `fill()` method.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| x | Number | X coordinate of the circle |
| y | Number | Y coordinate of the circle |
| r | Number | Circle Radius |
| sAngle | Number | Starting radian, in radian (at 3 o'clock direction) |
| eAngle | Number | End arc |
| counterclockwise | Boolean | Optional. Specify whether the direction of radian is counterclockwise or clockwise. false as default, i.e., clockwise. |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

// Draw coordinates
ctx.arc(100, 75, 50, 0, 2 * Math.PI)
ctx.setFillStyle('#EEEEEE')
ctx.fill()

ctx.beginPath()
ctx.moveTo(40, 75)
ctx.lineTo(160, 75)
ctx.moveTo(100, 15)
ctx.lineTo(100, 135)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

ctx.setFontSize(12)
ctx.setFillStyle('black')
ctx.fillText('0', 165, 78)
ctx.fillText('0.5*PI', 83, 145)
ctx.fillText('1*PI', 15, 78)
ctx.fillText('1.5*PI', 83, 10)

// Draw points
ctx.beginPath()
ctx.arc(100, 75, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(100, 25, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.beginPath()
ctx.arc(150, 75, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

// Draw arc
ctx.beginPath()
ctx.arc(100, 75, 50, 0, 1.5 * Math.PI)
ctx.setStrokeStyle('#333333')
ctx.stroke()

ctx.draw()
```

The three key coordinates for `arc(100, 75, 50, 0, 1.5 * Math.PI)` are as follows:

-   Green: Center of circle (100, 75)
-   Red: Starting radian (0)
-   Blue: Ending radian (1.5 \* Math.PI)

###  CanvasContext.arcTo

Draw arc path according to the control points and radius.

```
CanvasContext.arcTo(x1, y1, x2, y2, radius)
```

**Parameter**

| Attribute value | Type | Instruction |
| --- | --- | --- |
| x1 | Number | X-axis coordinates of the first control point |
| y1 | Number | Y-axis coordinates of the first control point |
| x2 | Number | X-axis coordinates of the second control point |
| y2 | Number | Y-axis coordinates of the second control point |
| radius | Number | Arc Radius |

###  CanvasContext.beginPath

To create a path, you need to call fill or stroke to fill or stroke the path.

**Tip:** It is equivalent to calling `beginPath()` once at the very beginning. **Tip:** For multiple settings such as `setFillStyle()`, \`\`setStrokeStyle()`,`setLineWidth()\`\`\` in the same path, the last setting shall prevail.

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setFillStyle('yellow')
ctx.fill()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

###  CanvasContext.bezierCurveTo

Create a cubic Bezier curve path.

**Tip:** The starting point of the curve is the previous point in the path.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| cp1x | Number | The x coordinate of the first Bezier control point |
| cp1y | Number | The y coordinate of the first Bezier control point |
| cp2x | Number | The x coordinate of the second Bezier control point |
| cp2y | Number | The y coordinate of the second Bezier control point |
| x | Number | X coordinate of the ending point |
| y | Number | Y coordinate of the ending point |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

// Draw points
ctx.beginPath()
ctx.arc(20, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

ctx.beginPath()
ctx.arc(200, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(20, 100, 2, 0, 2 * Math.PI)
ctx.arc(200, 100, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.setFillStyle('black')
ctx.setFontSize(12)

// Draw guides
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(150, 75)

ctx.moveTo(200, 20)
ctx.lineTo(200, 100)
ctx.lineTo(70, 75)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

// Draw quadratic curve
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.bezierCurveTo(20, 100, 200, 100, 200, 20)
ctx.setStrokeStyle('black')
ctx.stroke()

ctx.draw()
```

The three key coordinates for ` moveTo(20, 20)`` ` bezierCurveTo(20, 100, 200, 100, 200, 20)\`\`\` are as follows:

-   Red: starting point (20, 20)
-   Blue: two control points (20, 100) (200, 100)
-   Green: end point (200, 20)

###  CanvasContext.clearRect

Clear the contents in this rectangular area on the canvas.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| x | Number | x coordinate of the upper left corner of the rectangle |
| y | Number | y coordinate of the upper left corner of the rectangle |
| width | Number | Width of the rectangular area |
| height | Number | Height of the rectangular area |

**Sample code**

clearRect removes anything in the address area instead of drawing a white rectangle. In order to have an intuitive feeling, a layer of background color is added to the canvas.

```
<canvas canvas-id="myCanvas" id="myCanvas" style="border: 1px solid; background: #123456;"/>
```

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(0, 0, 150, 200)
ctx.setFillStyle('blue')
ctx.fillRect(150, 0, 150, 200)
ctx.clearRect(10, 10, 150, 75)
ctx.draw()
```

###  CanvasContext.clip

Cut any shape and size from the original canvas. Once an area is cut, all subsequent drawings will be limited to the cut area (other areas on the canvas cannot be accessed). You can save the current canvas area by using the save() method before using the clip() method, and restore it at any time in the future (by using the restore() method).

**Tip:** Use setFillStroke() to set the color of rectangular lines, with black as default.

**Sample code**

```
const context = uni.createCanvasContext('myCanvas')

uni.downloadFile({
	url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-MiniApp-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png',
	success: function (res) {
context.save()
context.beginPath()
context.arc(96, 96, 48, 0, 2 * Math.PI)
context.clip()
context.drawImage(res.tempFilePath, 48, 48)
		context.restore()
		context.draw()
	}
})

```

###  CanvasContext.closePath

Close a path.

**Tip:** Closing the path will connect the start point and the end point. **Tip:** If `fill()` or `stroke()` is not called after closing the path and a new path is opened, the previous path will not be rendered.

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.closePath()
ctx.stroke()
ctx.draw()
```

```
const ctx = uni.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.closePath()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

###  CanvasContext.createCircularGradient

Create a gradient from the center of circle. For the returned [CanvasGradient](./CanvasGradient.md) object, `CanvasGradient.addColorStop()` is required to specify at least two gradient points.

**Parameter**

| Parameter | Type | Definition |
| --- | --- | --- |
| x | Number | X coordinate of the center of the circle |
| y | Number | Y coordinate of the center of the circle |
| r | Number | Circle Radius |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

// Create circular gradient
const grd = ctx.createCircularGradient(75, 50, 50)
grd.addColorStop(0, 'red')
grd.addColorStop(1, 'white')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```

###  CanvasContext.createLinearGradient

Create a linear gradient color. For the returned [CanvasGradient](./CanvasGradient.md) object, `CanvasGradient.addColorStop()` is required to specify at least two gradient points.

**Parameter**

| Parameter | Type | Definition |
| --- | --- | --- |
| x0 | Number | X coordinate of the starting point |
| y0 | Number | Y coordinate of the starting point |
| x1 | Number | X coordinate of the end point |
| y1 | Number | Y coordinate of the end point |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

// Create linear gradient
const grd = ctx.createLinearGradient(0, 0, 200, 0)
grd.addColorStop(0, 'red')
grd.addColorStop(1, 'white')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```

###  CanvasContext.createPattern

The method of creating the pattern for the specified image, can repeat the meta image in the specified direction

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| image | String | Duplicate image source. Only in-package paths and temporary paths are supported |
| repetition | String | Specify how to repeat the image. Valid values are: repeat, repeat-x, repeat-y, no-repeat |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
const pattern = ctx.createPattern('/path/to/image', 'repeat-x')
ctx.fillStyle = pattern
ctx.fillRect(0, 0, 300, 150)
ctx.draw()
```

###  CanvasContext.draw

Draw the previous description (path, deformation, style) in the context of drawing into the canvas.

**Parameter**

| Parameter | Type | Instruction | Minimum version |
| --- | --- | --- | --- |
| reserve | Boolean | Optional. Whether this drawing follows the previous drawing, i.e., if the reserve parameter is false, then the native layer should clear the canvas before calling drawCanvas to continue drawing; if the reserver parameter is true, the content on the current canvas shall be retained, and the content drawn by drawCanvas of this call is overlaid on it, with false as default |  |
| callback | Function | Callback after drawing | 1.7.0 |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.draw()
ctx.fillRect(50, 50, 150, 100)
ctx.draw()
```

```
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.draw()
ctx.fillRect(50, 50, 150, 100)
ctx.draw(true)
```

###  CanvasContext.drawImage

Draw images to canvas.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| imageResource | String | Picture resource to be drawn |
| dx | Number | The position of the upper left corner of the image on the X axis of the target canvas |
| dy | Number | The position of the upper left corner of the image on the Y axis of the target canvas |
| dWidth | Number | The width of the drawn image on the target canvas, scaling the drawn image is allowed |
| dHeight | Number | The height of the drawn image on the target canvas, scaling the drawn image is allowed |
| sx | Number | The X coordinate of the upper left corner of the rectangle selection box of the source image |
| sy | Number | The Y coordinate of the upper left corner of the rectangle selection box of the source image |
| sWidth | Number | The width of the rectangular selection box of the source image |
| sHeight | Number | Height of rectangular selection box of source image |

There are three versions of writing:

-   `drawImage(dx, dy)`
-   `drawImage(dx, dy, dWidth, dHeight)`
-   `drawImage(sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

uni.chooseImage({
  success: function(res){
    ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
    ctx.draw()
  }
})
```

###  CanvasContext.fill

Fill the contents in the current path. The default fill color is black.

**Tip:** If the current path is not closed, the `fill()` method will connect the starting point and the ending point, and then fill them. See Example 1 for details.

**Tip:** The path filled by `fill()` is computed from `beginPath()`, but will not include `fillRect()`. See Example 2 for details.

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.fill()
ctx.draw()
```

```
const ctx = uni.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setFillStyle('yellow')
ctx.fill()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

###  CanvasContext.fillRect

Fill a rectangle.

**Tip:** Set the fill color of the rectangle with `setFillStyle()`. If not set, it defaults to black.

**Parameter**

| Parameter | Type | Definition |
| --- | --- | --- |
| x | Number | x coordinate of the upper left corner in the rectangle path |
| y | Number | y coordinate of the upper left corner in the rectangle path |
| width | Number | Width of the rectangular path |
| height | Number | Height of the rectangular path |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

###  CanvasContext.fillText

Draw the filled text on the canvas.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| text | String | Text output on the canvas |
| x | Number | Draw the x coordinate position of the upper left corner of the text |
| y | Number | Draw the y coordinate position of the upper left corner of the text |
| maxWidth | Number | Maximum width to be drawn, optional |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFontSize(20)
ctx.fillText('Hello', 20, 20)
ctx.fillText('MINA', 100, 100)

ctx.draw()
```

###  CanvasContext.lineTo

Add a new point, and then create a line from the last specified point to the target point.

**Tip:** Draw lines with the `stroke()` method

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| x | Number | X coordinate of the target location |
| y | Number | Y coordinate of the target location |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.rect(10, 10, 100, 50)
ctx.lineTo(110, 60)
ctx.stroke()
ctx.draw()
```

###  CanvasContext.measureText

Measure the text size information, and currently only return the text width. Synchronous interface. (App side 2.8.12+ supported)

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| text | String | Text to be measured |

**Return**

Return to the `TextMetrics` object with the following structure:

| Parameter | Type | Instruction |
| --- | --- | --- |
| width | Number | Width of text |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.font = 'italic bold 20px cursive'
const metrics = ctx.measureText('Hello World')
console.log(metrics.width)
```

###  CanvasContext.moveTo

If move the path to the specified point in the canvas, no line will be created. Draw lines with the `stroke()` method.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| x | Number | X coordinate of the target location |
| y | Number | Y coordinate of the target location |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)

ctx.moveTo(10, 50)
ctx.lineTo(100, 50)
ctx.stroke()
ctx.draw()
```

###  CanvasContext.quadraticCurveTo

Create a quadratic Bezier curve path. The starting point of the curve is the previous point in the path.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| cpx | Number | The x coordinate of the Bezier control point |
| cpy | Number | The y coordinate of the Bezier control point |
| x | Number | X coordinate of the ending point |
| y | Number | Y coordinate of the ending point |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

// Draw points
ctx.beginPath()
ctx.arc(20, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

ctx.beginPath()
ctx.arc(200, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(20, 100, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.setFillStyle('black')
ctx.setFontSize(12)

// Draw guides
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(200, 20)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

// Draw quadratic curve
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.quadraticCurveTo(20, 100, 200, 20)
ctx.setStrokeStyle('black')
ctx.stroke()

ctx.draw()
```

The three key coordinates for ` moveTo(20, 20)`` `quadraticCurveTo(20, 100, 200, 20)\`\`\` are as follows:

-   Red: starting point (20, 20)
-   Blue: control point (20, 100)
-   Green: end point (200, 20)

###  CanvasContext.rect

Create a rectangle.

**Tip:** Use the fill() or stroke() approach to draw the rectangle into the canvas.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| x | Number | x coordinate of the upper left corner in the rectangle path |
| y | Number | y coordinate of the upper left corner in the rectangle path |
| width | Number | Width of the rectangular path |
| height | Number | Height of the rectangular path |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.rect(10, 10, 150, 75)
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

###  CanvasContext.restore

Restore the graphics context saved beforehand.

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

// save the default fill style
ctx.save() 
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)

// restore to the previous saved state
ctx.restore()
ctx.fillRect(50, 50, 150, 100)

ctx.draw()
```

###  CanvasContext.rotate

With the origin point as the center, the origin point can be modified by the translate approach. Rotate the current axis clockwise. Call rotate several times, and the rotation angle will be cumulative.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| rotate | Number | Rotate angle, measured in radians (degrees \* Math.PI/180; Degrees range from 0 to 360) |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

ctx.strokeRect(100, 10, 150, 100)
ctx.rotate(20 * Math.PI / 180)
ctx.strokeRect(100, 10, 150, 100)
ctx.rotate(20 * Math.PI / 180)
ctx.strokeRect(100, 10, 150, 100)

ctx.draw()
```

###  CanvasContext.save

Save the current graphics context.

**Sample code**

```
const ctx = wx.createCanvasContext('myCanvas')

// save the default fill style
ctx.save()
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)

// restore to the previous saved state
ctx.restore()
ctx.fillRect(50, 50, 150, 100)

ctx.draw()
```

###  CanvasContext.scale

After calling the `scale` method, the horizontal and vertical coordinates of the path created later will be scaled. If calling `scale` for multiple times, the multiples will be multiplied.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| scaleWidth | Number | Multiples of X-axis scaling (1=100%, 0.5=50%, 2=200%) |
| scaleHeight | Number | Multiples of Y-axis scaling (1=100%, 0.5=50%, 2=200%) |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

ctx.strokeRect(10, 10, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(10, 10, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(10, 10, 25, 15)

ctx.draw()
```

###  CanvasContext.setFillStyle

Set the fill color for fillStyle, with black as default.

**Grammar**

```
canvasContext.setFillStyle(color)
canvasContext.fillStyle = color
```

**Parameter**

| Parameter | Type | Definition | Instruction |
| --- | --- | --- | --- |
| color | Color | Gradient Object | Fill color |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

###  CanvasContext.setFontSize

Set the font size.

| Parameter | Type | Instruction |
| --- | --- | --- |
| fontSize | Number | Font size |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFontSize(20)
ctx.fillText('20', 20, 20)
ctx.setFontSize(30)
ctx.fillText('30', 40, 40)
ctx.setFontSize(40)
ctx.fillText('40', 60, 60)
ctx.setFontSize(50)
ctx.fillText('50', 90, 90)

ctx.draw()
```

###  CanvasContext.setGlobalAlpha

Set the global brush transparency.

**Parameter**

| Parameter | Type | Scope | Instruction |
| --- | --- | --- | --- |
| alpha | Number | 0~1 | Transparency, 0 means completely transparent and 1 means completely opaque. |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.setGlobalAlpha(0.2)
ctx.setFillStyle('blue')
ctx.fillRect(50, 50, 150, 100)
ctx.setFillStyle('yellow')
ctx.fillRect(100, 100, 150, 100)

ctx.draw()
```

###  CanvasContext.setLineCap

Set the endpoint style of the line.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| lineCap | String | 'butt', 'round', 'square' | End point style of the line |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(150, 10)
ctx.stroke()

ctx.beginPath()
ctx.setLineCap('butt')
ctx.setLineWidth(10)
ctx.moveTo(10, 30)
ctx.lineTo(150, 30)
ctx.stroke()

ctx.beginPath()
ctx.setLineCap('round')
ctx.setLineWidth(10)
ctx.moveTo(10, 50)
ctx.lineTo(150, 50)
ctx.stroke()

ctx.beginPath()
ctx.setLineCap('square')
ctx.setLineWidth(10)
ctx.moveTo(10, 70)
ctx.lineTo(150, 70)
ctx.stroke()

ctx.draw()
```

###  CanvasContext.setLineDash

Set the line width.

**Parameter**

| Parameter | Type | Definition |
| --- | --- | --- |
| pattern | Array | A set of numbers describing the lengths of alternately drawn segments and spaces (coordinate space units). |
| offset | Number | Dashed line offset |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

ctx.setLineDash([10, 20], 5);

ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
ctx.stroke();

ctx.draw()
```

###  CanvasContext.setLineJoin

Set the intersection point style of lines.

**Parameter**

| Parameter | Type | Scope | Instruction |
| --- | --- | --- | --- |
| lineJoin | String | 'bevel', 'round', 'miter' | End intersection style of the line |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('bevel')
ctx.setLineWidth(10)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('round')
ctx.setLineWidth(10)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('miter')
ctx.setLineWidth(10)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()

ctx.draw()
```

###  CanvasContext.setLineWidth

Set the width of the line.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| lineWidth | Number | Width of the line (in px) |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(150, 10)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(5)
ctx.moveTo(10, 30)
ctx.lineTo(150, 30)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.moveTo(10, 50)
ctx.lineTo(150, 50)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(15)
ctx.moveTo(10, 70)
ctx.lineTo(150, 70)
ctx.stroke()

ctx.draw()
```

###  CanvasContext.setMiterLimit

Set the maximum miter length, i.e. the distance between the inner corner and the outer corner at the intersection of two lines. It is valid only when `setLineJoin()` is miter. If the maximum inclined length is exceeded, the joint will present lineJoin as bevel.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| miterLimit | Number | Maximum miter length |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(1)
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(2)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(3)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(4)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()

ctx.draw()
```

###  CanvasContext.setShadow

Set the shadow style. If not set, the default value of offsetX is 0, the offsetY is 0, the blur is 0 and the color is black.

**Parameter**

| Parameter | Type | Definition | Instruction |
| --- | --- | --- | --- |
| offsetX | Number |  | Horizontal shift of shadow with respect to shape |
| offsetY | Number |  | Vertical shift of shadow with respect to shape |
| blur | Number | 0~100 | The larger blur level of the shadow indicates higher blur effect. |
| color | Color |  | Shadow color |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.setShadow(10, 50, 50, 'blue')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

###  CanvasContext.setStrokeStyle

Set the border color. If fillStyle not set, the black is used as default.

**Parameter**

| Parameter | Type | Definition | Instruction |
| --- | --- | --- | --- |
| color | Color | Gradient Object | Fill color |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.strokeRect(10, 10, 150, 75)
ctx.draw()
```

###  CanvasContext.setTextAlign

Apply to set the alignment of text.

| Parameter | Type | Definition |
| --- | --- | --- |
| align | String | Options are 'left', 'center' and 'right'. |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

ctx.setStrokeStyle('red')
ctx.moveTo(150, 20)
ctx.lineTo(150, 170)
ctx.stroke()

ctx.setFontSize(15)
ctx.setTextAlign('left')
ctx.fillText('textAlign=left', 150, 60)

ctx.setTextAlign('center')
ctx.fillText('textAlign=center', 150, 80)

ctx.setTextAlign('right')
ctx.fillText('textAlign=right', 150, 100)

ctx.draw()
```

###  CanvasContext.setTextBaseline

Apply to set the horizontal alignment of text.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| textBaseline | String | Options are 'top', 'bottom', 'middle' and 'normal'. |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

ctx.setStrokeStyle('red')
ctx.moveTo(5, 75)
ctx.lineTo(295, 75)
ctx.stroke()

ctx.setFontSize(20)

ctx.setTextBaseline('top')
ctx.fillText('top', 5, 75)

ctx.setTextBaseline('middle')
ctx.fillText('middle', 50, 75)

ctx.setTextBaseline('bottom')
ctx.fillText('bottom', 120, 75)

ctx.setTextBaseline('normal')
ctx.fillText('normal', 200, 75)

ctx.draw()
```

###  CanvasContext.setTransform

Method of resetting (overriding) current transformation by matrix

**Grammar**

```
canvasContext.setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY)
```

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| scaleX | Number | Horizontal zoom |
| skewX | Number | Horizontal tilt |
| skewY | Number | Vertical tilt |
| scaleY | Number | Vertical zoom |
| translateX | Number | Horizontal move |
| translateY | Number | Vertical move |

###  CanvasContext.stroke

Draw the border of the current path. The default color is black.

**Tip:** The path depicted by `stroke()` is computed from `beginPath()`, but `strokeRect()` will not be included. See Example 2 for details.

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.stroke()
ctx.draw()
```

```
const ctx = uni.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setStrokeStyle('yellow')
ctx.stroke()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only stoke this rect, not in current path
ctx.setStrokeStyle('blue')
ctx.strokeRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will stroke current path
ctx.setStrokeStyle('red')
ctx.stroke()
ctx.draw()
```

###  CanvasContext.strokeRect

Draw a rectangle (non-filled). Set the border color with `setFillStroke()`. If not set, it defaults to black.

**Parameter**

| Parameter | Type | Scope | Instruction |
| --- | --- | --- | --- |
| x | Number |  | x coordinate of the upper left corner in the rectangle path |
| y | Number |  | y coordinate of the upper left corner in the rectangle path |
| width | Number |  | Width of the rectangular path |
| height | Number |  | Height of the rectangular path |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.strokeRect(10, 10, 150, 75)
ctx.draw()
```

###  CanvasContext.strokeText

Method of drawing text stroking at given (x, y) position

**Grammar**

```
canvasContext.strokeText(text, x, y, maxWidth)
```

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| text | String | Text to be drawn |
| x | Number | X-axis coordinates of the starting point of the text |
| y | Number | Y-axis coordinates of the starting point of the text |
| maxWidth | Number | Maximum width to be drawn, optional |

###  CanvasContext.transform

Method of repeatedly applying the current transformation with matrix.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| scaleX | Number | Horizontal zoom |
| skewX | Number | Horizontal tilt |
| skewY | Number | Vertical tilt |
| scaleY | Number | Vertical zoom |
| translateX | Number | Horizontal move |
| translateY | Number | Vertical move |

###  CanvasContext.translate

Transform the origin point (0, 0) of the current coordinate system. The default origin point of the coordinate system is on the upper left corner of the page.

**Parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| x | Number | Horizontal coordinate translation |
| y | Number | Vertical coordinate translation |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

ctx.strokeRect(10, 10, 150, 100)
ctx.translate(20, 20)
ctx.strokeRect(10, 10, 150, 100)
ctx.translate(20, 20)
ctx.strokeRect(10, 10, 150, 100)

ctx.draw()
```
