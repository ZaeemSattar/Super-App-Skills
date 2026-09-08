---
title: "Short Video Content Network Advertising"
source_url: https://miniapp.neuxnet.com/api/a-d/content-page.html
---
###  Short Video Content Network Advertising

Introduction

A video content channel that supports sliding up and down to switch video content

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/673f23ff-0924-4302-8467-9c1c1fd03b96.png)

The content network ad is a native fullscreen component with uncontrollable size

If you need to embed into the page to control the size, please use [Short Video Content Alliance Component <ad-content-page />](https://uniapp.dcloud.net.cn/component/ad-content-page)

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| √（3.1.5+） | x | x | x | x | x | x | x | x |

**Activate configuration advertisement**

[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

###  grammar

`plus.ad.showContentPage(options, success, fail)`

###  Parameter Description

`options` is of type object with the following attributes:

| Attribute Name | Type | Required | Description |
| --- | --- | --- | --- |
| adpid | string | is | adslot id |
| background | string | no | background color, transparency not supported |

`success` is function type, the callback after successful loading

`fail` is function type, the callback after the loading fails

The test ad slot `adpid` of the HBuilder base is `1111111112`

sample code

```
<template>
	<view>
		<button :loading="loading" :disabled="loading" type="primary" class="btn" @click="showAd">显示广告</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false
			}
		},
		onLoad() {
			// The HBuilderX standard base real machine runs the test content alliance advertising space identifier (adpid): 1111111112
			// adpid: 1111111112 is only used for testing, it needs to be changed to the adpid applied for by the advertising background (https://uniad.dcloud.net.cn/) when publishing
			// The advertising space (adpid) applied for by the advertising background needs to be customized after the base/cloud packaging/local packaging takes effect

			this.adOptions = {
				adpid: 1111111112
			}
		},
		methods: {
			showAd() {
				if (this.loading == true) {
					return;
				}

				this.loading = true;
				plus.ad.showContentPage(this.adOptions, (res) => {
					this.loading = false;
				}, (err) => {
					this.loading = false;
					console.log(err);
				});
			}
		}
	}
</script>
```
