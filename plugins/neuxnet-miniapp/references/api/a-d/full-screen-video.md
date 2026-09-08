---
title: "Full Screen Video Ads"
source_url: https://miniapp.neuxnet.com/api/a-d/full-screen-video.html
---
###  Full Screen Video Ads

[Introduction to Full Screen Video Ads](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| √（2.9.5+） | x | x | x | x | x | x | x | x |

**Activate configuration advertisement**

[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

uni.createFullScreenVideoAd(Object)

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| adpid | string | is | adslot id |

####  method

Load a full screen video ad.

`Promise FullScreenVideoAd.load()`

Display a full screen video ad.

`Promise FullScreenVideoAd.show()`

Destroys the fullscreen video ad instance.

`FullScreenVideoAd.destroy()`

Listen to the fullscreen video ad load event.

`FullScreenVideoAd.onLoad(function callback)`

Listen for fullscreen video error events.

`FullScreenVideoAd.onError(function callback)`

Listen to the fullscreen video ad close event.

`FullScreenVideoAd.onClose(function callback)`

sample code

```
<template>
  <view>
    <button :loading="loading" :disabled="loading" type="primary" @click="showFullScreenVideoAd">显示广告</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '全屏视频广告',
        loading: false
      }
    },
    onReady() {
      // HBuilderX standard base real machine running test full-screen video advertising slot ID (adpid) is: 1507000611
      // adpid: 1507000611 is only used for testing, it needs to be changed to the adpid applied for by the advertising background (https://uniad.dcloud.net.cn/) when publishing
      // The advertising space (adpid) applied for by the advertising background needs to be customized after the base/cloud packaging/local packaging takes effect
      this.adOption = {
        adpid: '1507000611'
      };

      // create ad instance
      this.createFullScreenVideoAd();
    },
    methods: {
      createFullScreenVideoAd() {
        var fullScreenVideoAd = this.fullScreenVideoAd = uni.createFullScreenVideoAd(this.adOption);
        fullScreenVideoAd.onLoad(() => {
          // Ad data loaded successfully
          this.loading = false;
          console.log("onLoad");
        });
        fullScreenVideoAd.onClose((e) => {
          // User clicked close or back button (only Android has back button)
          console.log("onClose " + e.isEnded);
        });
        fullScreenVideoAd.onError((err) => {
          console.log("onError", JSON.stringify(err));
          // Failed to load ad data
          this.loading = false;
          uni.showToast({
            title: `${err.code} : ${err.errMsg}`
          })
        });
      },
      showFullScreenVideoAd() {
        // Call fullScreenVideoAd.show(), if the data is loading, the ad will not be displayed, it will be displayed after the loading is successful
        // When the data is not loaded successfully, it is necessary to prevent the user from frequently clicking on the display ad
        if (this.loading == true) {
          return
        }
        this.loading = true;
        this.fullScreenVideoAd.show().then(() => {
          this.loading = false;
        }).catch((err) => {
          console.log(err.message);
          this.loading = false;
          uni.showToast({
            title: `${err.code} : ${err.errMsg}`
          })
        });
      }
    },
    onUnload() {
      this.fullScreenVideoAd.destroy()
    }
  }
</script>

```
