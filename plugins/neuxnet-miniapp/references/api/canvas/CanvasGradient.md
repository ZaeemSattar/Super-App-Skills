---
title: "CanvasGradient.addColorStop(stop,color)"
source_url: https://miniapp.neuxnet.com/api/canvas/CanvasGradient.html
---
###  CanvasGradient.addColorStop(stop,color)

Create a gradient point of color.

-   Parts smaller than the minimum stop will be rendered with the color of the minimum stop, and those larger than the maximum stop will be rendered with the color of the maximum stop.
    
-   `addColorStop()` is required to specify at least two gradient points.
    

####  Parameter

| Parameter | Type | Definition |
| --- | --- | --- |
| stop | Number(0-1) | Position of the gradient point referring to the starting and ending points. |
| color | Color | Gradient point color |

**Sample code**

```
const ctx = uni.createCanvasContext('myCanvas')

// Create circular gradient
const grd = ctx.createLinearGradient(30, 10, 120, 10)
grd.addColorStop(0, 'red')
grd.addColorStop(0.16, 'orange')
grd.addColorStop(0.33, 'yellow')
grd.addColorStop(0.5, 'green')
grd.addColorStop(0.66, 'cyan')
grd.addColorStop(0.83, 'blue')
grd.addColorStop(1, 'purple')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```
