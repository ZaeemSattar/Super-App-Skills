---
title: "slider"
source_url: https://miniapp.neuxnet.com/component/slider.html
---
####  slider

Slide selector.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| min | Number | 0 | Minimum |
| max | Number | 100 | Maximum |
| step | Number | 1 | Step size, which must be greater than 0 and divisible by (max-min) |
| disabled | Boolean | false | Disable or not |
| value | Number | 0 | Current value |
| activeColor | Color | It is different on each platform, see below for details | Left side of the slider is the line color of the selected part |
| backgroundColor | Color | #e9e9e9 | Right side of the slider is the color of the background bar |
| block-size | Number | 28 | The size of the slider ranges from 12-28 |
| block-color | Color | #ffffff | Color of the slider |
| show-value | Boolean | false | Whether to display the current value |
| @change | EventHandle |  | Event triggered after a drag is finished, event.detail = {value: value} |
| @changing | EventHandle |  | Event triggered during dragging, event.detail = {value: value} |
