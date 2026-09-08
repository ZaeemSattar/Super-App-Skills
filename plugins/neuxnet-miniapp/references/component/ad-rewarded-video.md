---
title: "Rewarded Video Ads"
source_url: https://miniapp.neuxnet.com/component/ad-rewarded-video.html
---
##  Rewarded Video Ads

###  Introduction

Rewarded video ads are the most profitable form of advertising in CPM.

Mobile phone users watch video advertisements for dozens of seconds, and after the advertisements are played, they can get rewards from application developers, and application developers can get a lot of advertising revenue from advertising platforms.

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/23fcff30-441f-11eb-b680-7980c8a877b8.png)

Different from advertising monetization methods such as screen opening and information flow, incentive videos have high revenue, but the workload of scene design and programming is also high.

The scenarios of rewarded video ads are flexible and diverse:

-   Watch ads in the game to revive, watch ads to get advanced props
-   Synthetic games, watch advertisements to get props, such as raising dragons, raising phoenixes, raising cattle, raising crabs...
-   There are also many applications such as walking to make money, watching short videos to make money, guessing songs to make money, etc.
-   In the online earning app, you can earn money by doing various tasks, or you want to take on the task of making money, the premise is to watch the rewarding video
-   Consumption of value-added content, such as reading half of novels and movies, and the rest need to watch advertisements before continuing
-   Blockchain applications integrate rewarded videos, such as watching advertisements to increase revenue or improve mining success rate

Incentive videos are often combined with invitation fission, and application developers design rewards for users to invite friends, so that users are motivated to invite more users to use the application.

Incentive videos are an artifact of making money. The industry often has a team of several people with a monthly income of millions of miracles. All because of well-designed excitation scenarios and fission models.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet | QQ applet | Quick app | 360 applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| √（3.4.8+） | x | √（3.4.8+） | x | x | x | x | x | x | x | x |

**Activate configuration advertisement**

[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

The rewarded video ad component is a native component, the highest level, and will be overlaid on the common front-end component.

###  grammar

`<ad-rewarded-video></ad-rewarded-video>`

**Property description**

| property name | type | default value | description | platform difference |
| --- | --- | --- | --- | --- |
| adpid | String|Number|Array |  | Ad slot id, if an array is passed in, it will start from index 0 and continue to the next after the request fails, which applies to the logic of the configured reserve price |  |
| preload | Boolean | true | Load ad data when page is ready |  |
| loadnext | Boolean | false | Automatically load next ad data |  |
| url-callback | Object |  | Server callback data transparently |  |
| v-slot:default="{loading, error}" |  |  | The scope slot can get the loading status and loading error information of the ad inside the component |  |
| @load | EventHandle | Load event |  |  |
| @close | EventHandle | Close event |  |  |
| @error | EventHandle | Error event |  |  |

**Method Description**

| method name | description |
| --- | --- |
| load | Load ad data |
| show | Show Ads |

**Notice**

`load` and `show` cannot be called at the same time, calling `show` during the `load` process will be ignored, because the data has not been loaded, you can call `show` in the `@load` completion event

Support repeated calls to `show`. When calling `show`, it will determine whether data has been loaded. If not, it will be automatically loaded once. If the component is preloading data, calling `show` will also be ignored.

It is recommended to use the component's autoloading logic directly, and there is no need to manually call `load` and `show`

####  Simple example

```
<template>
  <view>
    <ad-rewarded-video adpid="1507000689" :loadnext="true" v-slot:default="{loading, error}">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
  </view>
</template>
```

####  complete example

```
<template>
  <view class="content">
    <ad-rewarded-video adpid="1507000689" :loadnext="true" v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
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
      const detail = e.detail
      // User clicked the [Close Ad] button
      if (detail && detail.isEnded) {
        // end of normal playback
        console.log("onadclose " + detail.isEnded);
      } else {
        // Exit midway through playback
        console.log("onadclose " + detail.isEnded);
      }
    },
    onaderror(e) {
      // ad failed to load
      console.log("onaderror: ", e.detail);
    }
  }
}
</script>
```

####  API call example

```
<template>
  <view>
    <ad-rewarded-video ref="adRewardedVideo" adpid="1507000689" :preload="false" :loadnext="false" :disabled="true"
      v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <view class="ad-error" v-if="error">{{error}}</view>
    </ad-rewarded-video>
    <button type="primary" :disabled="isLoading" :loading="isLoading" @click="showAd">显示广告</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false
      }
    },
    onReady() {
      this.isLoading = true;
      this.$refs.adRewardedVideo.load();
    },
    methods: {
      showAd() {
        if (this.isLoading) {
          return
        }
        this.$refs.adRewardedVideo.show();
      },
      onadload(e) {
        this.isLoading = false;
        console.log('广告数据加载成功');
      },
      onadclose(e) {
        const detail = e.detail
        // User clicked the [Close Ad] button
        if (detail && detail.isEnded) {
          // end of normal playback
          console.log("onClose " + detail.isEnded);
        } else {
          // Exit midway through playback
          console.log("onClose " + detail.isEnded);
        }
        //this.isLoading = true;
        //this.$refs.adRewardedVideo.load();
      },
      onaderror(e) {
        // ad failed to load
        console.log(e.detail);
        this.isLoading = false;
      }
    }
  }
</script>

<style>
  .ad-error {
    color: orangered;
    margin-top: 5px;
  }
</style>
```

####  Waterfall logical ad slot

```
<template>
  <view class="content">
    <ad-rewarded-video :adpid="adpids" :loadnext="true" v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
  </view>
</template>

<script>
export default {
  data() {
    return {
      adpids: ["1507000611", "1507000611", "1507000611", "1507000611"]
    }
  },
  methods: {
    onadload(e) {
      console.log('广告数据加载成功');
    },
    onadclose(e) {
      const detail = e.detail
      // User clicked the [Close Ad] button
      if (detail && detail.isEnded) {
        // end of normal playback
        console.log("onadclose " + detail.isEnded);
      } else {
        // Exit midway through playback
        console.log("onadclose " + detail.isEnded);
      }
    },
    onaderror(e) {
      // ad failed to load
      console.log("onaderror: ", e.detail);
    }
  }
}
</script>
```

Tip: 3.5.1+ adds ad parallel request logic, optimizes layered logic, and improves ad display speed

###  Get Advertiser Name

####  grammar

`getProvider()`

####  illustrate

The return value is of type string

| value | description |
| --- | --- |
| csj | Pangolin |
| gdt | Tencent Youlianghui (formerly known as Guangdiantong) |
| sigmob | Sigmob |

sample code

```
<template>
  <view class="content">
    <ad-rewarded-video ref="adRewardedVideo" adpid="1507000689" :loadnext="true" v-slot:default="{loading, error}" @load="onload">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onload(e) {
      console.log('广告数据加载成功');

      let providerName = this.$refs.adRewardedVideo.getProvider();
      console.log('广告商名称::', providerName);
    }
  }
}
</script>
```

###  show/hide

The rewarded video ad component is hidden by default and is displayed after the user actively triggers the ad.

The ad will only close when the user clicks the Close Ad button on the rewarded video ad component. The developer has no control over the hiding of rewarded video ad components.

###  Ad pull success and failure

When `loadnext=true`, the rewarded video ad component automatically pulls the ad and updates it. After the component is created, one ad will be pulled, and the user will click on Close Ad to pull the next ad.

If the pull fails, the callback function registered with `@error` will be executed. The parameter of the callback function is an object containing the error information.

###  Pull failed, re-pull

If an automatic pull of the component fails, you can call `load()` to manually pull the advertisement again.

###  Listen for users to close ads

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/24d1db60-441f-11eb-bd01-97bc1429a9ff.png)

The ad will only close when the user clicks the Close Ad button on the rewarded video ad component. This event can be listened to via `@close`.

The callback function of `@close` will pass a parameter e.detail, e.detail.isEnded describes the state when the ad is closed.

| property | type | description |
| --- | --- | --- |
| detail: { isEnded } | boolean | Whether the video was closed when the user watched it completely, true means the user closed the video after the video is finished playing, false means the user closed the video during the video playback |

The developer needs to judge whether the video has ended according to isEnded, and if the video is finished successfully, the user should be rewarded.

```
<template>
  <view class="content">
    <ad-rewarded-video adpid="1507000689" :loadnext="true" v-slot:default="{loading, error}" @close="onadclose">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
  </view>
</template>

<script>
export default {
  methods: {
    onadclose(e) {
      const detail = e.detail
      // User clicked the [Close Ad] button
      if (detail && detail.isEnded) {
        // end of normal playback
        // This should be connected to the Internet to give users incentives. And this code should do security protection, see "Security Notice" below for details
        console.log("onadclose " + detail.isEnded);
      } else {
        // Exit midway through playback
        console.log("onadclose " + detail.isEnded);
      }
    }
  }
}
</script>
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
<template>
  <view class="content">
    <ad-rewarded-video adpid="1507000689" :url-callback="urlCallback" :loadnext="true" v-slot:default="{loading, error}">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
  </view>
</template>

<script>
export default {
  data() {
    return {
      urlCallback: {
        userId: 'testuser',
        extra: 'testdata'
      }
    }
  },
  methods: {
  }
}
</script>
```

###  Server callback description

The server callback is based on [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README) . The detailed process is as follows:

1.  Log in to the [uniCloud](https://unicloud.dcloud.net.cn/) web console, create a new service space or select an existing service space, then create a new uni-app project in HBuilderX and associate the service space to create a new cloud Function upload, callback for receiving advertisements
2.  Enable server callback in the [uniAD](https://uniad.dcloud.net.cn/) web console and select the cloud function created in the previous step
3.  After activation, an encrypted cloud function `uniAdCallback` will be automatically deployed in the selected service space
4.  `uniAdCallback` receives a callback from the advertiser's server to verify the signature and smooth out the parameter differences between Pangolin/Youlianghui/Kuishou, and then use \[callFunction\](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id =callbyfunction) method to call user cloud function
5.  Users process business in their own cloud functions

Notice:

1.  The newly created cloud function name cannot use `uniAdCallback`
2.  Server communication and front-end events are parallel, and the front-end needs to poll the server to request and verify the results
3.  It is not recommended to modify the callback service space and cloud function name in `uniAD` web control, because it will take some time for the modification to take effect

###  Q&A

A：

1.  Due to the different callback and signature verification logic of multiple advertisers, developers need to write a lot of logic. The cloud function `uniAdCallback` in `uniCloud` has smoothed out the difference, and developers can handle it according to the unified parameters.
2.  The developer's server may respond slowly or lose response, resulting in loss of callback data. Using `uniCloud` can help developers save a copy of the callback data from the advertiser's server to the developer's cloud data, so that the developer can actively query
3.  `uniCloud` can carry large concurrency and prevent DDoS attacks without maintenance by operators. If you choose `Aliyun`, it is free

###  Parameters passed by cloud function uniAdCallback

| Field Definition | Type | Field Name | Remarks |
| --- | --- | --- | --- |
| adpid | String | DCloud ad slot id |  |
| provider | String | Ad Service Provider | csj, ks, gdt, sigmob |
| platform | String | Platform | iOS, Android |
| trans\_id | String | Transaction id | Unique transaction ID of completed viewing |
| user\_id | String | User id | Invoking SDK transparent transmission, the unique identifier of the user by the application |
| extra | String | Custom data | Call the SDK to pass in and transparently transmit it, or empty if not needed |

####  User's cloud function return data convention

Return json data, the fields are as follows:

| field name | description | field type | remark |
| --- | --- | --- | --- |
| isValid | Verification result | Blean | Judgment result, whether to issue rewards |

example

```
exports.main = async (event, context) => {
  //event is the parameter uploaded by the client
  console.log('event : ', event);

  return {
    "isValid": true
  }
};
```

####  User cloud function details

If the business uses uniCloud, it can be processed directly inside the cloud function

You can also send the results to an existing business server

sample code

```
'use strict';

const crypto = require('crypto');

const db = uniCloud.database();

const DEFAUTL_TIMEOUT = 30000;
const DEFAUTL_RETRY_COUNT = 3;
const RETRY_TIMEOUT = 3000;

const ProviderType = {
  CSJ: "csj",
  GDT: "gdt",
  KS: "ks"
};

const collectionName = "opendb-uniad-callback-log";

class DB {

  static save(data) {
    return new DB().add(data);
  }

  add(data) {
    const collection = db.collection(collectionName);
    const data2 = Object.assign(data, {
      ad_type: 0,
      create_date: new Date()
    })
    return collection.add(data2);
  }
}

class UserServer {

  static send(url, data) {
    return new UserServer().sendHttpRequest(url, data);
  }

  async sendHttpRequest(url, data) {
    let needRetry = data.provider !== ProviderType.GDT;
    let retryCount = needRetry ? DEFAUTL_RETRY_COUNT : 1;
    let timeout = needRetry ? RETRY_TIMEOUT : DEFAUTL_TIMEOUT;
    let result = null;

    while (retryCount > 0) {
      console.log("sendHttpRequest::count::" + retryCount + "::", url, data);

      try {
        result = await uniCloud.httpclient.request(url, {
          data,
          dataType: 'json',
          contentType: 'json',
          timeout
        });

        if (result.data && result.data.isValid === true) {
          break;
        }
      } catch (e) {
        console.log(e);
      }

      retryCount--;
    }

    return result;
  }
}

exports.main = async (event, context) => {
  //event is the parameter uploaded by the client
  console.log('event : ', event);

  const {
    path,
    queryStringParameters
  } = event;

  const data = {
    adpid: event.adpid,
    platform: event.platform,
    provider: event.provider,
    trans_id: event.trans_id,
    sign: event.sign,
    user_id: event.user_id,
    extra: event.extra,
  }

  // Note: The source of the request must be verified
  const secret = "";// uniad 后台开通激励视频回调后生成的 Security key
  const trans_id = event.trans_id;
  const sign2 = crypto.createHash('sha256').update(`${secret}:${trans_id}`).digest('hex');
  if (event.sign !== sign2) {
    return null;
  }

  // try {
  //   await DB.save(data);
  // } catch (e) {
  //   console.log(e);
  // }

  //let reuslt = await UserServer.send(url, data);

  return reuslt
};
```

####  Safety Notice

Since rewarded videos correspond to user rewards, you may encounter situations where you maliciously use incentive rewards but do not actually watch ads. At this time, the advertising platform does not provide settlement, but the developer may send the incentive.

To improve security, it is recommended that all developers using rewarded videos do the following to strengthen protection:

1.  Front-end code encryption. In relation to incentives, configure the code files to be encrypted in the manifest, and the corresponding files will be automatically encrypted after packaging. [See details](https://ask.dcloud.net.cn/article/36437)
2.  APK reinforcement. Even if the front-end code is encrypted, the java code of the native layer engine may still be decompiled, and the apk needs to be strengthened. There are many reinforcement services on the market, such as 360 reinforcement and love encryption reinforcement, which can be selected by yourself.
3.  Use the following security APIs to prevent clients from being tampered with

-   plus.navigator.getSignature to get the app signature. Combined with the certificate information stored on the server side, it can be compared and judged whether the certificate of the App has been re-signed [Specification](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
-   plus.navigator.isSimulator to determine whether the App is running in the simulator environment [Specification](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
-   plus.navigator.isRoot determines whether the device is rooted or jailbroken [Specification](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
-   plus.networkinfo.isSetProxy determines whether the device's network has a proxy set [Specification](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)

4.  Avoid using SMS verification codes to identify your identity. It is recommended to use a more reliable [mobile phone number one-key login](https://miniapp.neuxnet.com/univerify) or [WeChat login](../api/plugins/login.md#login)
5.  If necessary, use [biometric authentication (fingerprint and faceid)](../api/system/authentication.md), \[sdk for live detection\](https://ext.dcloud.net.cn/search?q=%E6% B4%BB%E4%BD%93%E6%A3%80%E6%B5%8B&orderBy=Relevance&cat1=5&cat2=51)

###  manifest configuration

Note: `Sigmob` is a small ad network with low revenue. If conditions permit, it is necessary to open advertising channels such as Youlianghui and Kuaishou in order to increase revenue.

`Sigmob` currently does not support the check of the packaging interface. For integration, the following configuration changes are required:

`Sigmob` packaging requires `HBuilderX` to be upgraded to `3.2.0` or later.

Open the `manifest.json` file, click "Source View", add the following content in `uni-app` under `app-plus->distribute->sdkConfigs`, `5+ app` in `plus->distribute->plugins` \` add the following:

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

###  Precautions

-   For details on the iOS platform configuration application to use the Advertising Identification (IDFA): [https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
-   Please use the test `adpid` during the test, refer to the test code, if it cannot be displayed, try again at another time
-   Multiple calls to `RewardedVideoAd.onLoad()`, `RewardedVideoAd.onError()`, `RewardedVideoAd.onClose()` and other methods to monitor ad events will generate multiple event callbacks. It is recommended to listen once after creating an ad.
-   In order to avoid abusing advertising resources, currently each user can watch a limited number of rewarded video ads per day. It is recommended to judge whether the advertisement is successfully pulled before displaying the advertising button.
-   App platform, it is recommended that each advertiser call each device no more than `15` per day, and there should be an interval in between, otherwise it may trigger the system's anti-cheating strategy and lead to a decrease in traffic revenue.

###  Case Reference

-   Project source code "Cat Raising Synthesis Game", you can use it when you take it away, \[https://ext.dcloud.net.cn/plugin?id=4095\](https://ext.dcloud.net.cn/plugin? id=4095)
-   The project source code "Guess Songs with Prizes" can be used when you take it away, \[https://ext.dcloud.net.cn/plugin?id=4826\](https://ext.dcloud.net.cn/plugin? id=4826)
-   Project source code "Character Puzzle", you can use it when you take it away, \[https://ext.dcloud.net.cn/plugin?id=7996\](https://ext.dcloud.net.cn/plugin?id= 7996)

**error code**

[Error code related troubleshooting](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
