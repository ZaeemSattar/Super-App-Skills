---
title: "picker-view"
source_url: https://miniapp.neuxnet.com/component/picker-view.html
---
####  picker-view

Scroll selector embedded in the page.

`picker-view` is more flexible than the `picker` component. When you need to display the customized pop-up mode and UI, you often need to use `picker-view`.

**Attribute description**

| Attribute name | Type | Defaults |
| --- | --- | --- |
| value | Array＜Number＞ | The numbers in the array sequentially indicate which item is selected by picker-view-column in picker-view (subscript starts from 0), and when the number is greater than the selectable length of picker-view-column, the last item is selected. |  |
| indicator-style | String | Set the style of the check box in the middle of the selector |  |
| indicator-class | String | Set the class name of the check box in the middle of the selector. Note that when scoped is written in the style of the page or component, you need to write /deep/ | app-nvue and ByteDance applet and Feishu before the class name Applets do not support |
| mask-style | String | Set the style of the mask |  |
| mask-class | String | Set the class name of the mask | app-nvue and ByteDance applet and Feishu applet are not supported |
| @change | EventHandle | For scrolling selection, change event will be triggered when value changes, event.detail = {value: value}; value is an array, indicating which item is currently selected by the picker-view-column in the picker-view (subscript starts from 0) |  |

\*\*Note: Only the `<picker-view-column/>` component can be placed in \*\*, other nodes will not be displayed.

####  picker-view-column

The sub-components of `<picker-view />` can only be placed in `<picker-view />`, and the height of its sub-nodes will automatically be set to be the same as the height of the picker-view check box.

**Note:** The subnode of nvue page does not inherit the height of the check box of picker-view, so you need to set the height and center it yourself.

Template

Script

Style

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="uni-title">date：{{year}}-{{month}}-{{day}}</view>
        </view>
        <picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
            <picker-view-column>
                <view class="item" v-for="(item,index) in years" :key="index">{{item}}y</view>
            </picker-view-column>
            <picker-view-column>
                <view class="item" v-for="(item,index) in months" :key="index">{{item}}m</view>
            </picker-view-column>
            <picker-view-column>
                <view class="item" v-for="(item,index) in days" :key="index">{{item}}d</view>
            </picker-view-column>
        </picker-view>
    </view>
</template>
```
