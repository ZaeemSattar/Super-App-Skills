---
title: "Grid Ads"
source_url: https://miniapp.neuxnet.com/component/ad-grid.html
---
##  Grid Ads

###  Introduction

Developers can use the ad component to create a Grid ad component. After the Grid ad component is created, it will automatically pull the ad data and display it.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Quick app | 360 applet | kuaishou applet | JD applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ 3.5.1+ | x | x | x | x | x | x | x | x |

**Activate configuration advertisement**

[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

**Property description**

| property name | type | default value | description |
| --- | --- | --- | --- |
| adpid | String |  | uni-AD advertising space id, apply for advertising space on [uni-AD official website](https://uniad.dcloud.net.cn/) |
| @load | EventHandle |  | Callback for successful ad loading |
| @error | EventHandle |  | Callback for ad loading failure, event.detail = {errCode: xxx} |

###  Advertising event listener

Grid ads automatically pull ads after they are created. Developers can listen to the success or failure of ad pulling through the load and error events of the ad component, and can listen to the ad being closed through the close event.

```
<template>
  <view class="adContainer">
    <ad adpid="xxxx" @load="adLoad" @error="adError"></ad>
  </view>
</template>
```

```
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      adLoad() {
        console.log("adLoad");
      },
      adError(e) {
        console.log("adError",e);
      }
    }
  }
</script>
```
