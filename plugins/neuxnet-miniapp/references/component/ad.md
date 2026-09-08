---
title: "In-feed ads"
source_url: https://miniapp.neuxnet.com/component/ad.html
---
##  In-feed ads

###  Introduction

In-app display advertising component, which can be used for banner or news feed.

###  Applicable scene

Banner or information flow advertisement display scenarios are very flexible. Common display scenarios are: the top of the article, the top of the details page, the middle of the first screen, etc. It is recommended not to place in-feed ads at the bottom

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/b613df50-4420-11eb-bc56-c9cea619f663.png)

-   The advertising sources on the App side are composed of mainstream advertising channels such as Tencent Youlianghui, Toutiao Pangolin and Kuaishou Advertising Alliance, as well as some DCloud direct advertisements. Register in the uni-AD background of DCloud: [https://uniad.dcloud.net.cn /](https://uniad.dcloud.net.cn/)
-   The advertisements on the H5 terminal and WeChat applet are directly provided by DCloud
-   Other applet terminals are provided by the applet platform

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | QQ applet | Quick app | 360 applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| √（2.5.2+） | 3.4.8+ | √ | x | √ | √ | √ | x | x | √ | x |

**Activate configuration advertisement**

[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

**Property description**

| property name | type | default value | description | platform difference |
| --- | --- | --- | --- | --- |
| adpid | String |  | uni-AD App ad slot id, apply for an ad slot on [uni-AD official website](https://uniad.dcloud.net.cn/) | App, WeChat applet 3.4.8+ |
| unit-id | String |  | Ad unit id, which can be created in the main traffic module of the applet management background | WeChat applet, ByteDance applet (minimum version 1.19.0+), QQ applet, Kuaishou applet |
| ad-intervals | number |  | Interval time for automatic advertisement refresh, in seconds, the parameter value must be greater than or equal to 30 (Banner advertisements will not be automatically refreshed if this parameter is not passed in) | WeChat applet (basic library 2.3.1+ ) |
| data | Object | Optional | Ad data, via plus.ad.getAds (refer to sample code), takes precedence over adpid | App |
| appid | String |  | Mini Program Application ID | Baidu Mini Program |
| apid | String |  | Mini Program Ad Slot ID | Baidu Mini Program |
| ad-left | Number |  | When type is feeds, the left margin of the ad (px) must be greater than 0 | QQ Mini Program |
| ad-top | Number |  | When the type is feeds, the ad top margin (px) must be greater than 0 | QQ Mini Program |
| ad-width | Number |  | When type is feeds, the ad width (px), the default is 100%, the maximum value is the screen width, and the minimum value is 265 | QQ applet |
| ad-height | Number |  | Ad height (px) when type is feeds, minimum 85, maximum 160 | QQ applet |
| type | String | feed |  | QQ applet, Baidu applet, ByteDance applet, Kuaishou applet |
| @load | EventHandle |  | Callback for successful ad loading |  |
| @error | EventHandle |  | Callback for ad loading failure, event.detail = {errCode: } |  |
| @close | EventHandle |  | Ad close callback |  |

**type attribute Baidu**

Advertisement type: banner/feed, which must match the code bit type on the Baiqingteng platform.

**type attribute headlines**

The type of advertisement, the default banner, the specific types are: banner, video (video), large (large image), lImg (left image and right text), rImg (right image and left text), the default value is banner

**type attribute QQ**

| value | description |
| --- | --- |
| banner | banner advertisement is divided into 1 picture and 3 pictures and 1 text. 3 Figure 1 The background color and text color of the text advertisement will be adjusted according to the background color of the ancestor node. There are three cases: dark background, light background and white background |
| swip | Page flip advertisement, 1 picture 1 text, will cover the entire applet, and the display and hiding logic needs to be controlled by the developer |
| card | Card ad, 1 image, can be closed |
| feeds | Customize ads, you can flexibly control the top, left margin, width and height of the ad to fit the rest of the interface. You can listen to the size event to get the actual width and height |

The ad component of App and WeChat applet has no type attribute and can be used for banner or information flow.

##  WeChat applet

WeChat applet platform supports information flow (Banner) advertising component `<ad unit-id=""></ad>`, provided by WeChat

uniAD also supports the banner ad component `<ad adpid=""></ad>`, provided by uniAD

The `ad` component of the version before 3.4.10 runs to the WeChat applet and uses the advertising component provided by WeChat

Versions after 3.4.10+ are adjusted as follows

1.  The component only sets the `unit-id`, uses the ad component provided by WeChat, and the logic remains unchanged
2.  The component sets the `adpid` attribute and is compiled as `uniad`, see the introduction below
3.  The component sets the `adpid` and `unit-id` attributes and is compiled into `uniad`, see the introduction below

`uniad` is a built-in component of the `uni-app` framework. The `uniad` component supports both `uniAD` advertisements and WeChat native advertisements. Please request uniAD first. If it has been activated, use it directly or switch to WeChat advertisements. 3 second delay

The `uniad` component relies on the WeChat applet plug-in provided by uniAD and the coral advertisement plug-in provided by Tencent

If you want to use only WeChat ads on WeChat, you can use conditional compilation if you use uniAD for App or Web

Conditional compilation example

```
<!-- #ifdef MP-WEIXIN -->
<ad unit-id=""></ad>
<!-- #endif -->
<!-- #ifndef MP-WEIXIN -->
<ad adpid=""></ad>
<!-- #endif -->
```

**Notice**

-   The `<ad>` component is a native component, there will be hierarchical problems in the webview page, and it cannot be used in the `<swiper>` and `<scroll-view>` components. But app-nvue, the new version of WeChat applet and the new version of Toutiao applet support the same layer rendering, so there is no level problem. However, platforms such as app-vue and QQ applet have hierarchical problems. See: [Native Components](https://uniapp.dcloud.io/component/native-component)
-   No height when there is no ad, the height is released when the ad is closed, and the width is determined by the parent container
-   On the App platform, since the ad data is obtained inside the ad component and the component size is set after calculation, there will be a problem of interface jitter. You can obtain the ad data through plus.ad.getAds in advance. After setting the data, the adpid will be invalid.
-   WeChat applet `<ad>` component does not support triggering touch related events such as tap
-   When using `<ad>` in the `<list>` component of nvue on the Android platform, the width attribute `<ad width="750rpx" />` must be specified, because `<list>` has an automatic memory recovery mechanism, which is not The screen-scoped component is not created, and the size cannot be obtained inside the component
-   Nested `<ad>` is not supported in the `<recycle-list>` component of app-nvue
-   There is a probability of repeating advertisements in Guangdiantong. You can request advertisement data according to your needs. It is recommended to have more than 1 advertisement at a time (plus.ad.getAds) to reduce the repetition rate
-   HBuilderX2.8+ version Android platform no longer supports x86 type CPU after updating the Pangolin (Today's Toutiao) advertising SDK, and cannot run to the emulator of x86 type CPU.
-   The `<ad>` component test ad slot is the context of the above image, and the ad slot applied for by the uniAD background defaults to the left image and the right text
-   HBuilderX standard base real machine running test information flow advertising space identifier (adpid) is: 1111111111, WeChat applet and H5 platform do not provide test advertising space temporarily

**Example:**

```
<template>
  <view class="content">
    <!-- adpid="1111111111" This ad slot ID is only valid in the HBuilderX standard base, for testing purposes only -->
    <!-- The advertising space (adpid) applied for by the advertising background needs to be customized after the base/cloud packaging/local packaging takes effect -->
    <view class="ad-view">
      <ad adpid="1111111111" @load="onload" @close="onclose" @error="onerror"></ad>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'ad'
    }
  },
  methods: {
    onload(e) {
      console.log("onload");
    },
    onclose(e) {
      console.log("onclose: " + e.detail);
    },
    onerror(e) {
      console.log("onerror: " + e.detail.errCode + " message:: " + e.detail.errMsg);
    }
  }
}
</script>

<style>
  .content {
    background-color: #DBDBDB;
    padding: 10px;
  }

  .ad-view {
    background-color: #FFFFFF;
    margin-bottom: 10px;
  }
</style>
```

API method (only supported by the App platform), this calling method is not recommended, the call is more complicated, and it is not cross-platform, developers also need to manually handle the cache logic

```
<template>
  <view class="content">
    <view class="ad-view">
      <ad :data="adData"></ad>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'ad',
      adData: {}
    }
  },
  onReady: function (e) {
    this.getAdData()
  },
  methods: {
    getAdData: function (e) {
      // only supported by APP platform
      plus.ad.getAds({
          adpid: '1111111111',  // 替换为自己申请获取的广告位标识，此广告位标识仅在HBuilderX标准基座中有效，仅用于测试
          count: 1,   // 广告数量，默认 3
          width: 300  // 根据宽度获取合适的广告(单位px)
        },
        (res) => {
					// Note: Ad data can only be used once
          this.adData = res.ads[0];
          console.log(this.adData);
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }
}
</script>

<style>
  .content {
    background-color: #DBDBDB;
    padding: 10px;
  }

  .ad-view {
    background-color: #FFFFFF;
    margin-bottom: 10px;
  }
</style>
```

Using ad/ad-draw to simulate interstitial ad effects @Interstitial

```
<template>
  <view>
    <!-- Use ad/ad-draw to simulate the effect of interstitial ads -->
    <view>
      <button @click="showInterstitialAd">显示插屏广告</button>
    </view>
    <view class="ad-interstitial" v-if="isShowInterstitialAd">
      <view class="ad-view">
        <ad class="ad" adpid="1111111111" @error="onerror"></ad>

        <!-- <ad-draw class="ad-draw" adpid="1507000690"></ad-draw> -->
      </view>
      <view class="close-area">
        <!-- Set the style of the close button according to your own page style -->
        <button @click="hideInterstitialAd">X</button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        isShowInterstitialAd: false
      }
    },
    methods: {
      showInterstitialAd() {
        this.isShowInterstitialAd = true
      },
      hideInterstitialAd() {
        this.isShowInterstitialAd = false
      },
      onerror(e) {
        console.log(e);
      }
    }
  }
</script>

<style>
  .ad-interstitial {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    /* #ifndef APP-NVUE */
    display: flex;
    z-index: 1000;
    /* #endif */
    flex-direction: column;
    justify-content: center;
  }

  .ad-draw {
    width: 700rpx;
    height: 400px;
  }
</style>

```

**Rewarded Video Ads** Document address: [https://uniapp.dcloud.io/component/ad-rewarded-video](https://uniapp.dcloud.io/component/ad-rewarded-video)

**Full Screen Video Ads** Document address: [https://uniapp.dcloud.io/component/ad-fullscreen-video](https://uniapp.dcloud.io/component/ad-fullscreen-video)

**Interstitial Ads** Document address: [https://uniapp.dcloud.io/component/ad-interstitial](https://uniapp.dcloud.io/component/ad-interstitial)

**Notice**

-   For details of the iOS platform configuration application using the Advertising Identification (IDFA): [https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
-   App-side advertising activation guide and revenue related issues: [https://ask.dcloud.net.cn/article/36769](https://ask.dcloud.net.cn/article/36769)
-   In addition to the ad component, the App side also supports various advertising forms such as screen opening and rewarded video. For details, please refer to [uni-AD official website](https://uniad.dcloud.net.cn/)
-   uni-AD on the App side aggregates services such as Tencent Guangdiantong, Toutiao Pangolin, 360 Advertising Alliance, etc. You must check the corresponding sdk when packaging, see: [https://ask.dcloud.net.cn/article/36718](https://ask.dcloud.net.cn/article/36718) ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/f21eb570-4f32-11eb-b680-7980c8a877b8.jpg)

**error code**

[Error code related troubleshooting](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
