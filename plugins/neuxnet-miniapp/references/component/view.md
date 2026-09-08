---
title: "view"
source_url: https://miniapp.neuxnet.com/component/view.html
---
All view components, including view, swiper, etc., do not display any visual elements themselves. Their purpose is to wrap other components that are actually displayed.

###  view

View container.

Similar to div in traditional html, it is used to wrap various element contents.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| hover-class | String | none | Specify the style class after pressing. For hover-class="none", there is no effect of click state |
| hover-start-time | Number | 50 | How long does the click state appear after pressing, in milliseconds |
| hover-stay-time | Number | 400 | Retention time of the click state after finger release, in milliseconds |

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. -->
<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view class="uni-title uni-common-mt">
                flex-direction: row
            </view>
            <view class="uni-flex uni-row">
                <view class="flex-item uni-bg-red">A</view>
                <view class="flex-item uni-bg-green">B</view>
                <view class="flex-item uni-bg-blue">C</view>
            </view>
            <view class="uni-title uni-common-mt">
                flex-direction: column
            </view>
            <view class="uni-flex uni-column">
                <view class="flex-item flex-item-V uni-bg-red">A</view>
                <view class="flex-item flex-item-V uni-bg-green">B</view>
                <view class="flex-item flex-item-V uni-bg-blue">C</view>
            </view>
        </view>
    </view>
</template>
```
