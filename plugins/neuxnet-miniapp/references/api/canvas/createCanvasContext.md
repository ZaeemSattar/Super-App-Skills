---
title: "uni.createCanvasContext(canvasId, this)"
source_url: https://miniapp.neuxnet.com/api/canvas/createCanvasContext.html
---
###  uni.createCanvasContext(canvasId, this)

####  Definition

Create `canvas` Graphics Context (specify canvasId). Under custom components, the second parameter is passed into the custom component instance this to operate the `<canvas/>` component.

**Tip:** canvasId needs to be specified, and this Graphics Context only works on the corresponding `<canvas/>`

####  Parameter

| Parameter | Type | Instruction |
| --- | --- | --- |
| canvasId | String | Canvas representation, the incoming definition is in `<canvas/>` canvas-id or id (Alipay applet is id, other platforms are canvas-id) |
| componentInstance | Object | Custom component instance this means to find the `<canvas/>` with canvas-id under this custom component. If omitted, it will not find in any custom component |

####  Return value

[CanvasContext](./CanvasContext.md)
