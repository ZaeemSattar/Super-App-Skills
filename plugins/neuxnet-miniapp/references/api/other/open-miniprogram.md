---
title: "uni.navigateToMiniProgram(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/other/open-miniprogram.html
---
###  uni.navigateToMiniProgram(OBJECT)

Open another applet.

**Platform Difference Description**

| Mini App | H5 | [WeChat Mini Program](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html) | \[Alipay Mini Program\](https://docs. alipay.com/mini/api/open-miniprogram) | [Baidu Mini Program](https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#swan-navigateToSmartProgram/) | [Byte Beat Mini Program](https://developer.toutiao.com/dev/cn/mini-app/develop/open-capacity/mini-app-forward/navigatetominiprogram) | \[QQ Mini Program\](https://q.qq.com /wiki/develop/miniprogram/API/open\_port/port\_change.html#qq-navigatetominiprogram) | JD Mini Program |
| --- | --- | --- | --- | --- | --- | --- | --- |
| x (see below) | x | √ | √ | √ | √(1.15.0+) | √ | √ |

-   Open the WeChat Mini Program on the App platform and use the \[launchMiniProgram\] of plus.share (https://www.html5plus.org/doc/zh\_cn/share.html#plus.share.ShareService.launchMiniProgram). Note that Mini App does not need plus ready, just write the code in plus ready to the onLoad life cycle of the page. To use this function, you need to configure WeChat to share SDK information in the manifest, and it will take effect after packaging.
-   Each Mini Program platform has some restrictions and regulations on jumping to other Mini Programs, which need to be followed. For details, see the documentation of each platform.

**OBJECT parameter description**

| Attribute | Type | Default | Required | Description | Platform Difference Description |
| --- | --- | --- | --- | --- | --- |
| appId | string |  | Yes | The applet appId to be opened (fill in the App Key for Baidu applet) |  |
| path | string |  | No | Open page path, if empty, open home page |  |
| extraData | object |  | No | The data that needs to be passed to the target applet. The target applet can obtain this data in `onLaunch` or `onShow` of `App.vue`. |  |
| envVersion | string | release | No | Version of the applet to open, valid values: develop (development version), trial (experience version), release (official version). This parameter is valid only when the current Mini Program is the development version or the trial version. If the current applet is the official version, the opened applet must be the official version. | Alipay applet, WeChat applet |
| success | function |  | No | Callback function for successful interface call |  |
| fail | function |  | No | Callback function for interface call failure |  |
| complete | function |  | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |

**Sample code**

```
uni.navigateToMiniProgram({
  appId: '',
  path: 'pages/index/index?id=123',
  extraData: {
    'data1': 'test'
  },
  success(res) {
    // open successfully
  }
})
```

###  uni.navigateBackMiniProgram(OBJECT)

Jump back to the previous applet, only when another applet jumps to the current applet can it be called successfully.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | √ | √ | √ | x | √ | √ | √ |

**OBJECT parameter description**

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| extraData | Object | No | The data that needs to be returned to the previous applet, the last applet can get this data in `onShow` of `App.vue` |
| success | function | No | Callback function for successful interface call |
| fail | function | No | Callback function for interface call failure |
| complete | function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**Sample code**

```
uni.navigateBackMiniProgram({
  extraData: {
    'data1': 'test'
  },
  success(res) {
    // return success
  }
})
```

###  uni.openEmbeddedMiniProgram(OBJECT)

WeChat applet jump to applet (half-screen mode) (supported from WeChat base library 2.20.1)

When the applet needs to open another applet for the user to perform shortcut operations, the applet to be opened can be jumped in the form of a half screen.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/96851308-0f50-49b8-9495-135dcee3bcf5.jpeg)

**Call process**

1.  For the basic library of WeChat applet version 2.23.1 or lower, developers need to add the `embeddedAppIdList` field in the global configuration `manifest.json`\-->`mp-weixin` node and declare the applet that needs half-screen jumping. If it is not configured, it will switch to the normal applet and jump to the applet. No configuration is required since version 2.23.1 and above.

Configuration example:

```
	{
		"mp-weixin" : {
		   "embeddedAppIdList": ["wxe5f52902cf4de896"]//需要半屏跳转的小程序appid
		}
	}
```

2.  The developer can jump to the applet by calling uni.openEmbeddedMiniProgram:

| property | type | default value | required | description |
| --- | --- | --- | --- | --- |
| appId | string |  | Yes | the applet to open appId |
| path | string |  | No | The path of the page to open, if empty, open the home page. The part after the ? in the path will become the query, and the query data can be obtained in the callback functions of `onLaunch`, `onShow` and Page.onLoad of `App.vue` of the applet. For small games, you can only pass in the query part to achieve the effect of passing parameters, for example: pass in "?foo=bar". [See details](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html) |
| extraData | object |  | No | The data that needs to be passed to the target applet. The target applet can obtain this data in `onLaunch` or `onShow` of `App.vue`. [See details](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html) |
| envVersion | string | release | No | The version of the applet to open, valid values: develop (development version), trial (experience version), release (official version). This parameter is valid only when the current Mini Program is the development version or the trial version. If the current applet is the official version, the opened applet must be the official version. |
| shortLink | string |  | No | Mini program link, when this parameter is passed, appId and path can be omitted. The link can be obtained through \[Mini Program Menu\] -> \[Copy Link\]. |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for interface call failure |
| complete | function |  | No | Callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**Sample code**

```
uni.openEmbeddedMiniProgram({
	appId: '',
	path: 'pages/index/index?id=123',
	extraData: {
		'data1': 'test'
	},
	success(res) {
    // open successfully
	}
})
```

**Usage Restrictions**

After March 18, 2022, the use process has the following restrictions. If all the following conditions are not met, it will be automatically switched to the normal applet jump applet, which will not affect the user's use:

1.  The applet that is jumped by half-screen needs to be applied through the calling of the source applet. The developer can initiate an application in the "Settings" - "Third-party Settings" - "Half-screen applet management" section of the applet management background. Apply for 10 Mini Programs;
2.  The basic library of WeChat applet version 2.23.1 and below, the applet opened by half-screen needs to add the `embeddedAppIdList` field and declare it in the global configuration `manifest.json`\-->`mp-weixin` node;
3.  The current applet needs to be vertical screen;
4.  The applet that is jumped by half-screen must be a non-personal main applet (excluding mini-games)

Before March 18, 2022, the use process has the following restrictions. If all of the following conditions are not met, it will be automatically switched to the normal applet jumping applet, which will not affect the user's use:

1.  Cannot open half-screen applet in landscape mode
2.  Can open mini games
3.  The jump target applet must meet the following categories, [see the applet documentation for details](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)
