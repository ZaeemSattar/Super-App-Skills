---
title: "icon"
source_url: https://miniapp.neuxnet.com/component/icon.html
---
####  icon

**Tips**

-   Due to the differences in the performance of each end of the icon component, you can use font icon to make up for the differences at each end.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| type | String |  | icon type |
| size | Number | 23 | icon size, in px |
| color | Color |  | The color of the icon is the same as that of css. |

**Type effective value description**

success, success\_no\_circle, info, warn, waiting, cancel, download, search, clear

**Example**

Templete

Script

```
<view class="item" v-for="(value,index) in iconType" :key="index">
    <icon :type="value" size="26"/>
    <text>{{value}}</text>
</view>
```
