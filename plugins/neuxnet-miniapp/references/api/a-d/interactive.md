---
title: "interactive game"
source_url: https://miniapp.neuxnet.com/api/a-d/interactive.html
---
#  interactive game

##  Introduction

Interactive games are DCloud and third-party service providers to provide developers with new value-added services for advertising scenarios. The developer places the entrance in the App, and the user clicks the entrance to participate in the equity and interesting activities. Accelerate your benefits by watching rewarded video ads. An immersive gaming experience can reduce resistance to ads, increase the display of rewarded video ads, and effectively increase ad revenue.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/c19c9518-c953-49c3-89a0-33a1e595be7f.png)

##  Active scene type:

There are three types of scenarios: lottery, game, and development. Developers can choose the type of activity according to their own situation:

1.  Sweepstakes activities: obtain prize fragments or red envelopes through sweepstakes such as turntable, gashapon, and dice shaking
2.  Game activities: get gold coins or red envelopes through synthetic games, idiom answering, fishing and other gameplay
3.  Cultivation activities: long-term activities such as orchards, farms, and cattle raising. Users can improve the level of the cultivation objects through continuous check-in, item collection, task system and other gameplay. After upgrading, they can get red envelopes or exchange prizes

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/994e3f54-d498-4642-8e61-3177dcfef63a.jpg)

###  Activity classification table

| activity classification | Event name | Give out rewards | activity cycle | Whether to support the integration of points |
| --- | --- | --- | --- | --- |
| lottery | set fragment | multiple prizes |  |
| money printing machine | cash |  |
| gashapon machine | multiple prizes |  |
| game | Monopoly | cash | 7 days | support |
| Idiom big winner | cash |  |
| Synthetic Lucky Cat | cash |  |
| fishing expert | cash | long | Added support |
| cultivate | Blessed Bull | cash |  |
| orchard | fruit |  |
| farm | cash |  |
| chicken raising | cash |  |
| walk to earn | cash | 7 days | support |

Note: If you want to select the corresponding activity, please fill in the corresponding activity name into the ad slot name when creating an interactive game ad slot. It cannot be modified after creation. If you need to modify it, please email [uniad@dcloud.io](mailto:uniad@dcloud.io)

##  Instructions on Reward Distribution

The purpose of interactive games is to attract users to participate in activities, guide users to watch advertisements, obtain rewards through activities, and issue rewards to users after meeting certain conditions. There are currently two ways to issue rewards. One is that DCloud and third-party service providers provide developers with offline distribution of user rewards; the other is that developers connect with the app's own points system to convert user rewards into app points to increase user Engagement and experience.

###  User reward offline service

By default, the offline proxy service of user rewards is used, and the details are as follows:

1.  When the user participates in the above activities and reaches a certain amount of assets (the reward fragments or gold coins reach the exchange threshold, and the red envelope amount reaches the withdrawal threshold), they can initiate a redemption application. If the user applies for cash withdrawal, he needs to fill in the Alipay or WeChat account for the payment; if the user applies to exchange virtual or physical prizes, he needs to fill in the contact information and delivery address, etc.;
2.  After the user submits the application for redemption, the customer service will confirm it within 5 working days, and will deliver the prize as soon as possible after confirmation.
3.  If physical prizes (fresh fruits, etc.) cannot be sent temporarily due to seasonal problems, epidemic areas, or remote areas such as Xinjiang and Tibet, customer service will contact the user to present a cash reward equal to the value of the prize.
4.  After the physical prize is distributed, please receive the goods within 24 hours for express delivery. If there is any quality problem, please apply for after-sales within 48 hours after signing. No compensation will be made beyond the time limit.
5.  Users are not allowed to use any plug-ins, plug-ins and other methods that violate the rules of the activity and violate the principle of fairness to participate in this activity, otherwise the service provider has the right to disqualify the user from participating in the activity and clear the rewards obtained.

###  User rewards for docking app points

The integration of points requires the connection between the developer's business system and the interactive games of the third-party service providers, which requires a certain amount of development work. Please email [uniad@dcloud.io](mailto:uniad@dcloud.io)

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| App 3.1.15+ | x | x | x | x | x | x | x | x |

**Activate configuration advertisement**

[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

Note: When packaging, you must select the advertising SDK interactive game (realization cat) to be integrated, at least one of Youlianghui, Pangolin, and Kuaishou.

###  grammar

`uni.createInteractiveAd(options)`

###  Parameter Description

`options` is of type object with the following attributes:

| Attribute Name | Type | Required | Description |
| --- | --- | --- | --- |
| adpid | string | Yes | Ad Slot id |
| provider | string | is | provider ID, i.e. plugin id |
| userData | object | No | Integrated App Points System Parameters |

`provider` value:

| value | description |
| --- | --- |
| BXM-AD | Interactive Game Realization Cat |

###  Ad Creation

The ad component is hidden by default, so it can be created ahead of time to initialize the component early. Developers can create an ad instance in the page's onReady event callback, and call the ad instance repeatedly during the page's life cycle.

###  show/hide

The ad component is hidden by default, and the developer needs to call CreateInteractiveAd.show() to display it. If the ad pull fails or the frequency limit is triggered, the CreateInteractiveAd.show() method will return a rejected Promise, and the developer can monitor the error message by himself

```
CreateInteractiveAd.show().catch((err) => {
  console.error(err)
})
```

Users can actively close ads. The developer has no control over the hiding of ad components.

###  Listen for the successful ad loading event

If the ad loads successfully, the callback function registered with CreateInteractiveAd.onLoad() is executed, and the callback function returns the creative parameters.

| property name | type | description |
| --- | --- | --- |
| imgUrl | string | URL of the creative image |

```
CreateInteractiveAd.onLoad(res => {
    console.log('图片素材地址', res.imgUrl);
    console.log('广告加载成功');
})
```

Test ad slot of HBuilder base adpid: `1042956255` (game); `1620839118` (lottery); `1064042976` (cultivation)

sample code

```
<template>
  <view>
    <image class="ad-icon" v-if="imgUrl" :src="imgUrl" @click="showInteractiveAd"></image>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '互动游戏',
        loading: false,
        imgUrl: ""
      }
    },
    onReady() {
      this.adOption = {
        adpid: '1042956255',
        provider: 'BXM-AD'
      };

			// create ad instance
      this.createInteractiveAd();
    },
    methods: {
      createInteractiveAd() {
        var interactiveAd = this.interactiveAd = uni.createInteractiveAd(this.adOption);
        interactiveAd.onLoad((e) => {
          this.loading = false;
          this.imgUrl = e.imgUrl;
          console.log("广告加载成功");
					// If there is an ad image material, get it through e.imgUrl
        });
        interactiveAd.onClose(() => {
          // User clicked close or back button (only Android has back button)
          console.log("广告关闭");
        });
        interactiveAd.onError((err) => {
          this.loading = false;
          console.log("广告加载失败");
        });

				// After the ad instance is created successfully, a load will be executed by default to load the ad data
				// If there is a "Show Ads" button on the interface, you need to disable it first to prevent users from clicking, wait for the ad data to be loaded successfully, and then release it
        this.loading = true;
      },
      showInteractiveAd() {
				// Call interactiveAd.show(), if the data is loading, the ad will not be displayed, and it will be displayed after the loading is successful
				// When the data is not loaded successfully, it is necessary to prevent the user from frequently clicking on the display ad
        if (this.loading == true) {
          return
        }
        this.loading = true;
        this.interactiveAd.show().then(() => {
          this.loading = false;
        });
      }
    },
    onUnload() {
			// Destroy the instance after the page is closed
      this.interactiveAd.destroy();
    }
  }
</script>
<style>
  .ad-icon {
    display: block;
    width: 80px;
    height: 80px;
    margin: 10px;
  }
</style>
```

####  method

`Promise CreateInteractiveAd.load()`

Load ad.

`Promise CreateInteractiveAd.show()`

Display ads.

`CreateInteractiveAd.reportExposure()`

Scene entrance exposure dots.

`CreateInteractiveAd.destroy()`

Destroy the ad instance.

`CreateInteractiveAd.onLoad(function callback)`

Listen for ad load events.

`CreateInteractiveAd.offLoad(function callback)`

Cancel listening for ad load event

`CreateInteractiveAd.onError(function callback)`

Listen for error events.

`CreateInteractiveAd.offError(function callback)`

Cancel listening for error events

###  Points docking

###  Open

1.  The developer needs to provide the ad slot `adpid`
2.  Developers need to provide a server interface
3.  Get points interface
4.  Operation integration interface
5.  The third-party service provider needs to provide `secretKey` for developers to verify the source of the request

###  Earn points

A brief description:

This interface is used to obtain the total number of user points;

Developers provide url user query points

Request method `GET`

parameter:

| Parameter name | Required | Type | Description |
| --- | --- | --- | --- |
| appUserId | is | String | app UserId |
| appId | is | String | appId registered in the SSP background |
| timestamp | is | String | timestamp (since 1970, milliseconds accurate) |
| sign | is the | String | signature used to verify identity. Perform MD5 encryption according to secretKey + timestamp (note that the encrypted string should be capitalized without adding a "+" sign) |

Return parameter description

| parameter name | type | description |
| --- | --- | --- |
| appUserId | String | appUserId |
| avatar | String | User Avatar |
| nickname | String | User nickname |
| amount | Long | Total User Points |

example

```
  {
   "appUserId" : "dcloud",
   "avatar": "https://xxx.yyy.com/xxxx.jpg",
   "nickname": "jack",
   "amount": 100
  }
```

###  Operation Points

A brief description:

This interface is used to operate the number of user points, such as adding and deducting; The request parameters are placed in the body and submitted in JSON format; Considering the security of the interface, it is recommended that developers use the IP whitelist + signature method to verify the source to prevent being used by third parties.

Failure:

-   The URL has special characters or cannot be accessed through the external network;
-   Content that is not returned as required by the response format;
-   When the interface returns a status code other than `200`;
-   The interface response time exceeds `3` seconds.

Developers provide url user query points

Request method `POST`

parameter:

| Parameter name | Required | Type | Description |
| --- | --- | --- | --- |
| appUserId | is | String | App user ID (unique identifier) |
| appId | is | String | appId registered in the SSP background |
| operateType | is | Long | Operation type: 1. Add 2. Deduct |
| amount | is | Long | the integral value of this operation |
| timestamp | is | String | timestamp (since 1970, milliseconds accurate) |
| sign | is the | String | signature used to verify identity. Perform MD5 encryption according to secretKey + timestamp (note that the encrypted string should be capitalized without adding a "+" sign) |

Return parameter description

| parameter name | type | description |
| --- | --- | --- |
| appUserId | String | App User Id (Unique ID) |
| status | int | Status code: 0. Processing failed 1. Processing successful |
| message | String | Failure Reason |
| amount | Long | Total points of users after operation |

Example of return result

```
{
  "appUserId": "dcloud",
  "status": 1,
  "amount": 100
}
```
