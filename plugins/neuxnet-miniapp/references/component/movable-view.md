---
title: "movable-view"
source_url: https://miniapp.neuxnet.com/component/movable-view.html
---
###  movable-view

Movable view container. Dragging and sliding or scaling with two fingers on the page is allowed.

`movable-view` must be in the `movable-area` component and must be a direct child node, otherwise it cannot be moved.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| direction | String | none | The moving direction of movable-view, with the attribute values of all, vertical, horizontal and none |  |
| inertia | Boolean | false | movable-view has inertia |  |
| out-of-bounds | Boolean | false | After the movable area is exceeded, can the movable-view still move |  |
| x | Number / String |  | Define the offset of x-axis direction. If the value of x is not within the movable range, it will automatically move to it. Changing the value of x will trigger the animation |  |
| y | Number / String |  | Define the offset of y-axis direction. If the value of y is not within the movable range, it will automatically move to it. Changing the value of y will trigger the animation |  |
| damping | Number | 20 | Damping coefficient, which is used to control the animation when x or y changes and the animation of the rebound after crossing the boundary. The larger the value, the faster the movement | 360 applet does not support |
| friction | Number | 2 | Friction coefficient, used to control the animation of inertial sliding, the larger the value, the greater the friction force, and the faster the sliding stops; it must be greater than 0, otherwise it will be set to the default value | 360 applet does not support |
| disabled | Boolean | false | Disable or not |  |
| scale | Boolean | false | Whether pinch zoom is supported, the default zoom gesture effective area is in movable-view | 360 applet does not support |
| scale-min | Number | 0.5 | Define the minimum scaling factor |  |
| scale-max | Number | 10 | Define the maximum zoom factor |  |
| scale-value | Number | 1 | defines the zoom factor, the value range is 0.5 - 10 |  |
| animation | Boolean | true | whether to use animation |  |
| @change | EventHandle |  | Event triggered during dragging, event.detail = {x: x, y: y, source: source}, wherein the source represents the reason for the movement, with the options of touch (drag), touch-out-of-bounds (out of the movement bound), out-of-bounds (rebound after exceeding the movement bound), friction (Inertia) and empty string (setData) |  |
| @scale | EventHandle |  | Event triggered during scaling, event.detail = {x: x, y: y, scale: scale}, |  |

> The width and height attributes must be set for movable-view, with 10px as default
> 
> movable-view defaults to absolute positioning, and the top and left attributes are 0px.
> 
> When movable-view is smaller than the movable-area, the moving range of the movable-view is within the movable-area. When it is larger than the movable-area, the moving range of the movable-view must include the movable-area (X-axis direction and Y-axis direction are considered separately)

**Tips**

-   movable-view must be in the `<movable-area/>` component and must be a direct child node, otherwise it cannot be moved.

Template

Script

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view class="page-body">
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
			</view>
			<movable-area>
				<movable-view :x="x" :y="y" direction="all" @change="onChange">text</movable-view>
			</movable-area>
			<view @tap="tap" class="uni-link uni-center uni-common-mt">
			</view>
			<view class="uni-title uni-common-mt">
			</view>
			<movable-area>
				<movable-view class="max" direction="all">text</movable-view>
			</movable-area>
		</view>
	</view>
</template>
```
