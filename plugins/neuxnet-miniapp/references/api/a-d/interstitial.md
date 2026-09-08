---
title: "Interstitial ads"
source_url: https://miniapp.neuxnet.com/api/a-d/interstitial.html
---
###  Interstitial ads

[Introduction to Interstitial Ads](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| App 3.1.10+ | x | √ | x | x | x | √ | x | x |

**Activate configuration advertisement**

[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

###  grammar

`uni.createInterstitialAd(options)`

###  Parameter Description

`options` is of type object with the following attributes:

| Property Name | Type | Required | Description | Minimum Supported Version |
| --- | --- | --- | --- | --- |
| adpid | string | yes | ad slot id | App 3.1.10+ |
| adUnitId | string | Yes | Ad unit id | WeChat applet 2.6.0+, QQ0.1.26+ |

The test ad slot `adpid` of the HBuilder base is `1111111113`

###  Ad Creation

Interstitial ad components are hidden by default, so they can be created ahead of time to initialize components early. Developers can create an ad instance in the page's onReady event callback, and call the ad instance repeatedly during the page's life cycle.

###  show/hide

The interstitial ad component is hidden by default, and the developer needs to call InterstitialAd.show() to display it. If the ad pull fails or the frequency limit is triggered, the InterstitialAd.show() method will return a rejected Promise, and the developer can monitor the error message by himself

```
interstitialAd.show().catch((err) => {
  console.error(err)
})
```

Users can actively close interstitial ads. The developer has no control over the hiding of interstitial ad components.

###  Listen for users to close ads

If the ad is closed, the callback function registered through InterstitialAd.onClose() will be executed, and the callback function has no parameters passed.

```
interstitialAd.onClose(res => {
    console.log('插屏 广告关闭')
})
```

sample code

```
<template>
  <view>
    <view>
      <button :loading="loading" :disabled="loading" type="primary" @click="showInterstitialAd">显示广告</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '插屏广告',
        loading: false
      }
    },
    onReady() {
      this.adOption = {
        adpid: '1111111113' // HBuilder基座的测试广告位
      };

      // create ad instance
      this.createInterstitialAd();
    },
    methods: {
      createInterstitialAd() {
        var interstitialAd = this.interstitialAd = uni.createInterstitialAd(this.adOption);
        interstitialAd.onLoad(() => {
          this.loading = false;
          console.log("插屏 广告加载成功");
        });
        interstitialAd.onClose(() => {
          // User clicked close or back button (only Android has back button)
          console.log("插屏 广告关闭");
        });
        interstitialAd.onError((err) => {
          this.loading = false;
          console.log("插屏 广告加载失败");
        });

        // After the ad instance is created successfully, a load will be executed by default to load the ad data
        // If there is a "Show Ads" button on the interface, you need to disable it first to prevent users from clicking, wait for the ad data to be loaded successfully, and then release it
        this.loading = true;
      },
      showInterstitialAd() {
        // Call interstitialAd.show(), if the data is loading, the ad will not be displayed, and it will be displayed after the loading is successful
        // When the data is not loaded successfully, it is necessary to prevent the user from frequently clicking on the display ad
        if (this.loading == true) {
          return
        }
        this.loading = true;
        this.interstitialAd.show().then(() => {
          this.loading = false;
        });
      }
    },
    onUnload() {
      // Destroy the instance after the page is closed
      this.interstitialAd.destroy()
    }
  }
</script>
```

####  method

`Promise InterstitialAd.load()`

Load the interstitial ad.

`Promise InterstitialAd.show()`

Display interstitial ads.

`InterstitialAd.destroy()`

Destroy the interstitial ad instance.

`InterstitialAd.onLoad(function callback)`

Listen for interstitial ad load events.

`InterstitialAd.offLoad(function callback)`

Cancel listening for interstitial ad load event

`InterstitialAd.onError(function callback)`

Listen for interstitial error events.

`InterstitialAd.offError(function callback)`

Cancel listening for interstitial error events

`InterstitialAd.onClose(function callback)`

Listen for the interstitial ad close event.

`InterstitialAd.offClose(function callback)`

Cancel listening for interstitial ad close event

###  Precautions

If you switch pages quickly during the display of interstitial ads, it may happen that the interstitial ads are displayed on the non-calling page. If necessary, please display the interstitial ads after the page switching is completed.
