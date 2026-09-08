---
title: "Immersive Video Streaming Ads"
source_url: https://miniapp.neuxnet.com/component/ad-draw.html
---
##  Immersive Video Streaming Ads

###  Introduction

Also known as Draw Video Feed Ads

Immersive video streaming ads provide media with a vertical-screen video feed ad style, suitable for use in full-screen vertical-screen videos. Support app-nvue page usage.

###  Applicable scene

Douyin-like vertical video stream, full-screen video such as call show, live room, etc.

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7ab8d610-4423-11eb-8a36-ebb87efcf8c0.png)

-   The advertising sources on the app side are provided by Tencent Guangdiantong, Toutiao Pangolin, Kuaishou Advertising Alliance and some DCloud direct investment advertising aggregation. Register in DCloud's uni-AD background: [https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/)

**Platform Difference Description**

| App-nvue | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Quick application | 360 applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| √（3.0.0+） | x | x | x | x | x | x | x | x | x | x |

**Activate configuration advertisement**

[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

**Property description**

| property name | type | default value | description | platform difference |
| --- | --- | --- | --- | --- |
| data | Object | Optional | Ad data, through plus.ad.getDrawAds (refer to the sample code), after setting the adpid will be invalid | App |
| adpid | String |  | uni-AD App ad slot id, apply for an ad slot on [uni-AD official website](https://uniad.dcloud.net.cn/) | App |
| @load | EventHandle |  | Callback for successful ad loading |  |
| @error | EventHandle |  | Callback for ad loading failure, event.detail = {errCode: } |  |

**Notice**

-   HBuilderX2.8+ version Android platform no longer supports x86 type CPU after updating the Pangolin (Today's Toutiao) advertising SDK, and cannot run the simulator with x86 type CPU.
-   HBuilderX standard base real machine running test draw information flow advertisement slot ID (adpid) is: 1507000690

**@error error code**

-   App-side aggregated pangolins (iOS): [error code](https://ad.oceanengine.com/union/media/union/download/detail?id=16&docId=5de8d574b1afac00129330d5&osType=ios)
-   App-side aggregated pangolins (Android): [error code](https://ad.oceanengine.com/union/media/union/download/detail?id=4&docId=5de8d9b925b16b00113af0ed&osType=android)
-   App-side aggregated Guangdiantong (iOS): \[Error code\](https://developers.adnet.qq.com/doc/ios/union/union\_debug#%E9%94%99%E8%AF%AF% E7%A0%81)
-   Guangdiantong (Android) aggregated on the App side: \[Error code\](https://developers.adnet.qq.com/doc/android/union/union\_debug#sdk%20%E9%94%99%E8%AF %AF%E7%A0%81)

**Example:**

Example 1

```
<template>
  <!-- nvue page support only -->
  <!-- You must specify the width and height of ad-draw, otherwise the size will be full screen -->
  <view class="container">
    <ad-draw class="ad-draw" adpid="1507000690"></ad-draw>
  </view>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>
  .container {
    flex: 1;
  }

  .ad-draw {
    flex: 1;
    width: 750rpx;
  }
</style>

```

Example 2

```
<template>
  <!-- nvue page support only -->
  <view class="content">
    <view class="ad-draw">
      <ad-draw :data="adData" @load="onload" @error="onerror"></ad-draw>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'ad-draw',
        adData: {}
      }
    },
    onReady: function (e) {
      this.getAdData()
    },
    methods: {
      getAdData: function (e) {
        // only supported by APP platform
        plus.ad.getDrawAds({
            adpid: '1507000690',  // 此广告位标识仅在HBuilderX标准基座中有效，仅用于测试
            count: 1,   // 广告数量，默认 1-3
            width: 300,  // 根据宽度获取合适的广告(单位px)
            height: 300  // 根据高度获取合适的广告(单位px)
          },
          (res) => {
            this.adData = res.ads[0];
            console.log(this.adData);
          },
          (err) => {
            console.log(err);
          }
        )
      },
      onload(e) {
        console.log("onload",e);
      },
      onerror(e) {
        console.log("onerror: " + e.detail.errCode + " message:: " + e.detail.errMsg);
      }
    }
  }
</script>
```

Immersive video streaming ads are not rewarded video ads, see also rewarded video ads: \[https://uniapp.dcloud.io/api/a-d/rewarded-video\](https://uniapp.dcloud.io/api/a-d/rewarded -video)

**Notice**

-   For details of the iOS platform configuration application using the Advertising Identification (IDFA): [https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
-   App-side advertising activation guidelines and revenue related issues: [https://ask.dcloud.net.cn/article/36769](https://ask.dcloud.net.cn/article/36769)
-   In addition to the ad component and ad-draw component, the App side also supports various advertising forms such as screen opening, rewarded video, and full-screen advertising. For details, please refer to [uni-AD official website](https://uniad.dcloud.net.cn/)
-   uni-AD on the App side aggregates services such as Tencent Guangdiantong, Toutiao Pangolin, 360 Advertising Alliance, etc. You must check the corresponding sdk when packaging, see: [https://ask.dcloud.net.cn/article/36718](https://ask.dcloud.net.cn/article/36718) ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/f21eb570-4f32-11eb-b680-7980c8a877b8.jpg)
