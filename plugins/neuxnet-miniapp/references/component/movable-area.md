---
title: "movable-area"
source_url: https://miniapp.neuxnet.com/component/movable-area.html
---
###  movable-area

draggable area

Since the architecture of the Mini App is that the logic layer is separated from the view layer, using js to monitor and drag will cause frequent communication between the logic layer and the view layer, affecting performance. In order to facilitate high-performance dragging, the platform encapsulates the `movable-area` component.

`movable-area` refers to the draggable area, and the `movable-view` component is embedded in it to indicate the draggable area.

That is, finger/mouse hold down `movable-view` to drag or pinch to zoom, but cannot drag the range specified by `movable-area`.

Of course, instead of dragging, you can use code to trigger the move and zoom of `movable-view` in `movable-area`.

See also [movable-view](./movable-view.md) for the specification of `movable-view`.

**Property description**

| property name | type | default value | description |
| --- | --- | --- | --- |
| scale-area | Boolean | false | When the movable-view inside is set to support two-finger zooming, setting this value can modify the effective area of the zoom gesture to the entire movable-area |

**Note: movable-area must set the width and height properties, if not set the default is 10px**

-   The movable-area app-nvue platform currently does not support gesture zooming and conflicts with scrolling.
