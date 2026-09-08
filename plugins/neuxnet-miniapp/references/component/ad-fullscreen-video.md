---
title: "Full Screen Video Ads"
source_url: https://miniapp.neuxnet.com/component/ad-fullscreen-video.html
---
###  Full Screen Video Ads

A full-screen video ad is a native component with a higher level than normal components. A new instance of a full-screen video ad is returned each time it is created. It is hidden by default and needs to be displayed by calling FullScreenVideoAd.show() .

How to activate reference rewarded video ads [https://uniapp.dcloud.net.cn/api/a-d/rewarded-video](https://uniapp.dcloud.net.cn/api/a-d/rewarded-video)

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | QQ applet | Quick app | 360 applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| √（3.4.8+） | x | √（3.4.8+） | x | x | x | x | x | x | x | x |

-   The advertising sources on the app side are provided by Tencent Youlianghui, Toutiao Pangolin, Kuaishou and other advertising alliances, and DCloud is responsible for the aggregation
-   The advertisement on the applet is provided by the applet platform

**Activate configuration advertisement**

[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

###  grammar

`<ad-fullscreen-video adpid=""></ad-fullscreen-video>`

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

Simple example

```
<template>
  <view>
    <ad-fullscreen-video adpid="1507000611" :loadnext="true" v-slot:default="{loading, error}">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-fullscreen-video>
  </view>
</template>
```

Complete example

```
<template>
  <view class="content">
    <ad-fullscreen-video adpid="1507000611" :loadnext="true" v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-fullscreen-video>
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
      console.log("onerror: ", e.detail);
    }
  }
}
</script>
```

**error code**

[Error code related troubleshooting](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
