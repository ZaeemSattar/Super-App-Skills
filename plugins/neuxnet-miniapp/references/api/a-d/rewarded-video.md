---
title: "Rewarded video — grammar"
source_url: https://miniapp.neuxnet.com/api/a-d/rewarded-video.html
---
**Rewarded Video Ads**

This document is outdated, new document: \[https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html\](https://uniapp.dcloud.net.cn/component/ad-rewarded- video.html)

[Introduction to Rewarded Video Ads](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | Feishu applet | QQ applet | Kuishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| √（2.5.11+） | x | √ | x | x | √（1.57.0+） | x | √（0.1.26+） | √ | x |

**Activate configuration advertisement**

[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

The rewarded video ad component is a native component, the highest level, and will be overlaid on the common front-end component.

###  grammar

`uni.createRewardedVideoAd(options)`

###  Parameter Description

options is of type object with the following properties:

| Property Name | Type | Required | Description | Minimum Supported Version |
| --- | --- | --- | --- | --- |
| adpid | string | yes | ad slot id | App 2.5.11+ |
| adUnitId | string | Yes | Ad slot id | WeChat applet 2.6.0+, QQ0.1.26+, ByteDance 1.57.0+ |

###  return value

The return value is of type RewarededVideoAd with the following properties:

| property name | type | description | minimum supported version |
| --- | --- | --- | --- |
| show | Function | Ads are hidden by default after they are created. You can use this method to display ads | App 2.5.11+, WeChat applet 2.6.0+, QQ0.1.26+, ByteDance 1.57.0+ |
| onLoad | Function | Binding a listener for ad load event | App 2.5.11+, WeChat applet 2.6.0+, QQ0.1.26+, ByteDance 1.57.0+ |
| offLoad | Function | Unbind the listener for the load event | QQ0.1.26+, ByteDance 1.57.0+ |
| load | Function | When there is an error in the creative loading, you can manually load it through the load method | App 2.5.11+, WeChat applet 2.6.0+, QQ0.1.26+, ByteDance 1.57.0+ |
| onError | Function | Binding the listener of the error event | App 2.5.11+, WeChat applet 2.6.0+, QQ0.1.26+, ByteDance 1.57.0+ |
| onAdClicked | Function | Binding a listener for the clickable screen area event of an ad | App 2.5.11+ |
| offError | Function | Unbind the listener for the error event | QQ0.1.26+, ByteDance 1.57.0+ |
| onClose | Function | Bind the listener of the close event | App 2.5.11+, WeChat applet 2.6.0+, QQ0.1.26+, ByteDance 1.57.0+ |
| offClose | Function | Unbind the listener for the close event | QQ0.1.26+, ByteDance 1.57.0+ |

###  Ad Creation

Developers can call `uni.createRewardedVideoAd` to create rewarded video ad components.

The rewarded video ad component is hidden by default, so it can be created ahead of time to initialize the component early. Developers can create an ad instance in the page's `onReady` event callback, and call the ad instance repeatedly during the page's life cycle.

```
<script>
    export default {
        data() {
            return {
                title: 'createRewardedVideoAd'
            }
        },
        onReady() {
          this._isLoaded = false
          rewardedVideoAd = this._rewardedVideoAd = uni.createRewardedVideoAd({ adpid: '1507000689' }) // 仅用于HBuilder基座调试 adpid: '1507000689'
          rewardedVideoAd.onLoad(() => {
            this._isLoaded = true
            console.log('onLoad event')
            // When the incentive video is closed, the next data is preloaded by default, and the `onLoad` event is still triggered when the loading is complete
          })
          rewardedVideoAd.onError((err) => {
            console.log('onError event', err)
          })
          rewardedVideoAd.onClose((res) => {
            console.log('onClose event', res)
          })
        },
        methods: {
          show() {
            if (this._isLoaded) {
              this._rewardedVideoAd.show()
            }
          }
        }
    }
</script>
```

###  Recommended access example

`ad.js` is the encapsulation of `uni.createRewardedVideoAd`. One page caches multiple pages and takes effect, avoiding the problem that each page is preloaded but not displayed. Different ad slots can be passed in, and the Loading state and quick clicks are processed internally. , data expired, failed to retry 1 logic

```
<template>
  <view>
    <button type="primary" class="btn" @click="showRewardedVideoAd">显示激励视频广告</button>
    <button type="primary" class="btn" @click="showFullScreenVideoAd">显示全屏视频广告</button>
  </view>
</template>

<script>
  import AD from "../ad.js"

  export default {
    data() {
      return {
        title: '视频广告'
      }
    },
    onReady() {
      // optional preload ad data

      // AD.load({
      //   adpid: 1507000689,
      //   adType: "RewardedVideo"
      // });

      // AD.load({
      //   adpid: 1507000611,
      //   adType: "FullScreenVideo"
      // });
    },
    methods: {
      showRewardedVideoAd() {
        // After calling, the loading interface will be displayed
        AD.show({
          adpid: 1507000689, // HBuilder 基座测试广告位
          adType: "RewardedVideo",
          urlCallback: {// 服务器回调透传参数
            userId: 'testuser',
            extra: 'testdata'
          }
          //singleton: false // After this parameter is set, the ad instance will be recreated every time the show method is called, and the preload will be invalid. If the ad callback needs to transparently transmit user information every time, it needs to be set to false
        }, (res) => {
          // User clicked the [Close Ad] button
          if (res && res.isEnded) {
            // end of normal playback
            console.log("onClose " + res.isEnded);
          } else {
            // Exit midway through playback
            console.log("onClose " + res.isEnded);
          }

          // Process server callback logic here
        }, (err) => {
          // ad loading error
          console.log(err)
        })
      },
      showFullScreenVideoAd() {
        // After calling, the loading interface will be displayed
        AD.show({
          adpid: 1507000611, // HBuilder 基座测试广告位
          adType: "FullScreenVideo"
        }, (res) => {
          // The user clicked the [Close Ad] button
          if (res && res.isEnded) {
            // end of normal playback
            console.log("onClose " + res.isEnded);
          } else {
            // Exit midway through playback
            console.log("onClose " + res.isEnded);
          }
        }, (err) => {
          // ad loading error
          console.log(err)
        })
      }
    }
  }
</script>

```

```
// ad.js
const ADType = {
  RewardedVideo: "RewardedVideo",
  FullScreenVideo: "FullScreenVideo"
}

class AdHelper {

  constructor() {
    this._ads = {}
  }

  load(options, onload, onerror) {
    let ops = this._fixOldOptions(options)
    let {
      adpid
    } = ops

    if (!adpid || this.isBusy(adpid)) {
      return
    }

    this.get(ops).load(onload, onerror)
  }

  show(options, onsuccess, onfail) {
    let ops = this._fixOldOptions(options)
    let {
      adpid
    } = ops

    if (!adpid) {
      return
    }

    uni.showLoading({
      mask: true
    })

    var ad = this.get(ops)

    ad.load(() => {
      uni.hideLoading()
      ad.show((e) => {
        onsuccess && onsuccess(e)
      })
    }, (err) => {
      uni.hideLoading()
      onfail && onfail(err)
    })
  }

  isBusy(adpid) {
    return (this._ads[adpid] && this._ads[adpid].isLoading)
  }

  get(options) {
    const {
      adpid,
      singleton = true
    } = options
    if (singleton === false) {
      if (this._ads[adpid]) {
        this._ads[adpid].destroy()
        delete this._ads[adpid]
      }
    }
    delete options.singleton
    if (!this._ads[adpid]) {
      this._ads[adpid] = this._createAdInstance(options)
    }

    return this._ads[adpid]
  }

  _createAdInstance(options) {
    const adType = options.adType || ADType.RewardedVideo
    delete options.adType

    let ad = null;
    if (adType === ADType.RewardedVideo) {
      ad = new RewardedVideo(options)
    } else if (adType === ADType.FullScreenVideo) {
      ad = new FullScreenVideo(options)
    }

    return ad
  }

  _fixOldOptions(options) {
    return (typeof options === "string") ? {
      adpid: options
    } : options
  }
}

const EXPIRED_TIME = 1000 * 60 * 30
const ProviderType = {
  CSJ: 'csj',
  GDT: 'gdt'
}

const RETRY_COUNT = 1

class AdBase {
  constructor(adInstance, options = {}) {
    this._isLoad = false
    this._isLoading = false
    this._lastLoadTime = 0
    this._lastError = null
    this._retryCount = 0

    this._loadCallback = null
    this._closeCallback = null
    this._errorCallback = null

    const ad = this._ad = adInstance
    ad.onLoad((e) => {
      this._isLoading = false
      this._isLoad = true
      this._lastLoadTime = Date.now()

      this.onLoad()
    })
    ad.onClose((e) => {
      this._isLoad = false
      this.onClose(e)
    })
    ad.onVerify && ad.onVerify((e) => {
      // e.isValid
    })
    ad.onError(({
      code,
      message
    }) => {
      this._isLoading = false
      const data = {
        code: code,
        errMsg: message
      }

      if (code === -5008) {
        this._loadAd()
        return
      }

      if (this._retryCount < RETRY_COUNT) {
        this._retryCount += 1
        this._loadAd()
        return
      }

      this._lastError = data
      this.onError(data)
    })
  }

  get isExpired() {
    return (this._lastLoadTime !== 0 && (Math.abs(Date.now() - this._lastLoadTime) > EXPIRED_TIME))
  }

  get isLoading() {
    return this._isLoading
  }

  getProvider() {
    return this._ad.getProvider()
  }

  load(onload, onerror) {
    this._loadCallback = onload
    this._errorCallback = onerror

    if (this._isLoading) {
      return
    }

    if (this._isLoad) {
      this.onLoad()
      return
    }

    this._retryCount = 0

    this._loadAd()
  }

  show(onclose) {
    this._closeCallback = onclose

    if (this._isLoading || !this._isLoad) {
      return
    }

    if (this._lastError !== null) {
      this.onError(this._lastError)
      return
    }

    const provider = this.getProvider()
    if (provider === ProviderType.CSJ && this.isExpired) {
      this._loadAd()
      return
    }

    this._ad.show()
  }

  onLoad(e) {
    if (this._loadCallback != null) {
      this._loadCallback()
    }
  }

  onClose(e) {
    if (this._closeCallback != null) {
      this._closeCallback({
        isEnded: e.isEnded
      })
    }
  }

  onError(e) {
    if (this._errorCallback != null) {
      this._errorCallback(e)
    }
  }

  destroy() {
    this._ad.destroy()
  }

  _loadAd() {
    this._isLoad = false
    this._isLoading = true
    this._lastError = null
    this._ad.load()
  }
}

class RewardedVideo extends AdBase {
  constructor(options = {}) {
    super(plus.ad.createRewardedVideoAd(options), options)
  }
}

class FullScreenVideo extends AdBase {
  constructor(options = {}) {
    super(plus.ad.createFullScreenVideoAd(options), options)
  }
}

export default new AdHelper()

```

###  show/hide

The rewarded video ad component is hidden by default. After the user actively triggers the ad, the developer needs to call RewardedVideoAd.show() to display it.

```
rewardedVideoAd.show()
```

The ad will only close when the user clicks the Close Ad button on the rewarded video ad component. The developer has no control over the hiding of rewarded video ad components.

###  Ad pull success and failure

The rewarded video ad component automatically pulls the ad and updates it. After the component is created, one ad will be pulled, and the user will click on Close Ad to pull the next ad.

If the pull is successful, the callback function registered by `RewardedVideoAd.onLoad()` will be executed, and the Promise returned by `RewardedVideoAd.show()` will also be a resolved Promise. There is no parameter passed in the callback function of both.

```
rewardedVideoAd.onLoad(() => {
  console.log('激励视频 广告加载成功')
})

rewardedVideoAd.show()
.then(() => console.log('激励视频 广告显示'))
```

If the pull fails, the callback function registered with `RewardedVideoAd.onError()` will be executed. The parameter of the callback function is an object containing the error information. Common exception error reference document

```
rewardedVideoAd.onError(err => {
  console.log(err)
})
```

The Promise returned by `RewardedVideoAd.show()` will also be a rejected Promise.

```
rewardedVideoAd.show()
.catch(err => console.log(err))
```

###  Pull failed, re-pull

If an automatic pull of the component fails, subsequent calls to show() will be rejected. At this point, you can call `RewardedVideoAd.load()` to manually re-pull the ad.

```
rewardedVideoAd.show()
.catch(() => {
    rewardedVideoAd.load()
    .then(() => rewardedVideoAd.show())
    .catch(err => {
      console.log('激励视频 广告显示失败')
    })
})
```

If the automatic pull of the component is successful, calling the `load()` method will directly return a resolved Promise without pulling the ad.

```
rewardedVideoAd.load()
.then(() => rewardedVideoAd.show())
```

###  Listen for users to close ads

!\[\](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-Mini App-doc/24d1db60-441f-11eb-bd01-97bc1429a9ff.png)

The ad will only close when the user clicks the Close Ad button on the rewarded video ad component. This event can be listened to by `RewardedVideoAd.onClose()`.

The callback function of `RewardedVideoAd.onClose()` will pass a parameter res, res.isEnded describes the state when the ad is closed.

| property | type | description |
| --- | --- | --- |
| isEnded | boolean | Whether the video was closed when the user watched it completely, true means the user closed the video after the video finished playing, false means the user closed the video during the video playback |

The developer needs to judge whether the video has finished playing according to res.isEnded , and should issue a reward to the user if it finishes playing successfully.

```
rewardedVideoAd.onClose(res => {
    // User clicked the [Close Ad] button
    if (res && res.isEnded) {
    // end of normal playback
	  // This should be connected to the Internet to give users incentives. And this code should do security protection, see "Security Notice" below for details
    } else {
      // Exit midway through playback
    }
})
```

###  Server callback

App platform 3.1.15+ supports Pangolin/Youlianghui/Kuishou

The rewarded video advertisement can support the callback from the advertisement server to the service server, which is used by the service system to determine whether to provide rewards to users who watch the advertisement. After the server callback is configured, when the user successfully finishes watching the ad, the ad server will access the configured cloud function and notify the user to finish watching the rewarded video.

Relatively speaking, the server callback will be more secure, and you can rely on the anti-cheating mechanism of the advertising platform to prevent users from simulating the completion of watching the advertisement.

![Incentive video callback](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/d0e94790-68e4-4007-8e34-bdb8cb6b4d34.jpg)

how to use

1.  Enable server callback when applying for a rewarded video ad slot
2.  Pass in callback parameters when creating a rewarded video ad

urlCallback example

```
rewardedVideoAd = uni.createRewardedVideoAd({
  adpid: '',
  urlCallback: {
    userId: 'testuser',
    extra: 'testdata'
  }
});

rewardedVideoAd.onClose(e => {
})
```

###  server callback

[Detailed description of server callback](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#callback)

####  Safety Notice

\[Detailed description\](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#%E5%AE%89%E5%85%A8%E6%B3%A8%E6%84% 8F)

####  Get Advertiser Name

> HBuilderX 2.6.8+

####  grammar

`RewardedVideoAd.getProvider()`

####  illustrate

The return value is of type string

| value | description |
| --- | --- |
| csj | Pangolin |
| gdt | Tencent Youlianghui (formerly known as Guangdiantong) |
| sigmob | Sigmob |

```
var rewardedVideoAd = uni.createRewardedVideoAd(Options);
var provider = rewardedVideoAd.getProvider();
```

###  manifest configuration

Note: `Sigmob` is a small ad network with low revenue. If conditions permit, it is necessary to open advertising channels such as Youlianghui and Kuaishou in order to increase revenue.

`Sigmob` currently does not support the check of the packaging interface. For integration, the following configuration changes are required:

`Sigmob` packaging requires `HBuilderX` to be upgraded to `3.2.0` or later.

Open the `manifest.json` file, click "Source View", add the following content in `Mini App` under `app-plus->distribute->sdkConfigs`, `5+ app` in `plus->distribute->plugins` \` add the following:

```
{
	"app-plus": {
		"distribute": {
			"sdkConfigs": {
				"ad" : {
				  "sigmob" : {}
				}
			}
		}
	}
}
```

**Note: If there is already an ad node, just append it, as follows**

```
{
	"app-plus": {
		"distribute": {
			"sdkConfigs": {
				"ad" : {
				  "gdt" : {},
				  "csj" : {},
				  "ks" : {},
				  "ks-content" : {},
				  "sigmob" : {}
				}
			}
		}
	}
}
```
