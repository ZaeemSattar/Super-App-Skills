---
title: "Short video content alliance components"
source_url: https://miniapp.neuxnet.com/component/ad-content-page.html
---
##  Short video content alliance components

###  Introduction

A video content channel that supports sliding up and down to switch video content

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/9146fb82-0d0e-4210-804c-93e292f4273e.png)

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Quick application | 360 applet | Kuishou applet | JD applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ✓ | x | x | x | x | x | x | x | x | x | x |

**Only nvue support (iOS-hx3.4.2 support, Android-hx3.1.17 support)**

**Activate configuration advertisement**

[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

Note: Kuaishou Content Alliance must be selected when packaging.

**Property description**

| property name | type | default value | description | platform difference |
| --- | --- | --- | --- | --- |
| adpid | String |  | uni-AD App ad slot id, apply for an ad slot on [uni-AD official website](https://uniad.dcloud.net.cn/) | Only supported by nvue |
| @load | EventHandle |  | Callback for successful ad loading |  |
| @error | EventHandle |  | Callback for failed ad loading |  |
| @start | EventHandle | Triggered when playback starts | 3.4.3+ |
| @pause | EventHandle | Triggered when paused | 3.4.3+ |
| @resume | EventHandle | Triggered when playback resumes | 3.4.3+ |
| @complete | EventHandle | Triggered when playback is complete | 3.4.3+ |

**@start @pause @resume @complete callback parameter description**

| Field Name | Description |
| --- | --- |
| id | Unique ID |
| type | 0 unknown type 1 general information flow 2 sdk internal advertisement 3 third party advertisement 4 live broadcast |
| duration | Total video duration |

The test ad slot `adpid` of the HBuilder base is `1111111112`

**Example:**

```
<template>
  <view class="content">
    <ad-content-page class="ad-content-page" ref="adContentPage" adpid="1111111112" @load="onadload" @error="onaderror"></ad-content-page>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'ad-content-page'
    }
  },
  onShow() {
    this.$nextTick(() => {
      // Need to call the show method of the ad component when the page is displayed
      this.$refs.adContentPage.show();
    })
  },
  onHide() {
    // Need to call the hide method of the ad component to stop the sound of the ad content when the page is hidden
    this.$refs.adContentPage.hide();
  },
  methods: {
    onadload(e) {
      console.log("onadload",e);
    },
    onaderror(e) {
      console.log("onaderror",e);
    }
  }
}
</script>

<style>
.content {
  flex: 1
}

.ad-content-page {
  flex: 1
}
</style>
```

**Notice**

-   The component's `hide` method needs to be called when the page is hidden to stop the sound of the ad content
-   3.4.17+ iOS platform Due to advertiser restrictions, calling the `show` or `hide` method needs to be valid after the application is approved. For details, please contact `uniad@dcloud.io`
