---
title: "Interstitial ads"
source_url: https://miniapp.neuxnet.com/component/ad-interstitial.html
---
###  Interstitial ads

Interstitial ad components are composed of client-side native image, text, and video controls; interstitial ads have a larger display size than information flow or banner ads, and can also meet your needs for a large number of exposures and user conversions.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/5dc1ce6b-b786-4175-aec5-dd2ab4a5e34c.png)

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | QQ applet | Quick app | 360 applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| √（3.4.8+） | x | √（3.4.8+） | x | x | x | x | x | x | x | x |

**Activate configuration advertisement**

[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

###  grammar

`<ad-interstitial></ad-interstitial>`

**Property description**

| property name | type | default value | description | platform difference |
| --- | --- | --- | --- | --- |
| adpid | String|Number|Array |  | Ad slot id, if an array is passed in, it will start from index 0 and continue to the next after the request fails, which applies to the logic of the configured reserve price |  |
| preload | Boolean | true | Load ad data when page is ready |  |
| loadnext | Boolean | false | Automatically load next ad data |  |
| v-slot:default="{loading, error}" |  |  | The scope slot can get the loading status and loading error information of the ad inside the component |  |
| @load | EventHandle | Load event |  |  |
| @close | EventHandle | Close event |  |  |
| @error | EventHandle | Error event |  |  |

**Method Description**

| method name | description |
| --- | --- |
| load | Load ad data |
| show | Show Ads |

The test ad slot `adpid` of the HBuilder base is `1111111113`

Simple example

```
<template>
  <view>
    <ad-interstitial adpid="1111111113" :loadnext="true" v-slot:default="{loading, error}">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-interstitial>
  </view>
</template>
```

Complete example

```
<template>
  <view class="content">
    <ad-interstitial adpid="1111111113" :loadnext="true" v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-interstitial>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onadload(e) {
      console.log('广告数据加载成功');
    },
    onadclose(e) {
		 console.log("onadclose",e);
    },
    onaderror(e) {
      // ad failed to load
      console.log("onaderror: ", e.detail);
    }
  }
}
</script>
```

**error code**

[Error code related troubleshooting](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
