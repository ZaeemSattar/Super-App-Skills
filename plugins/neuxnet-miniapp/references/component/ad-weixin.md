---
title: "uni-ad supports WeChat applet advertising"
source_url: https://miniapp.neuxnet.com/component/ad-weixin.html
---
##  uni-ad supports WeChat applet advertising

3.4.10+ support

On WeChat Mini Programs, there are 2 ad types:

1.  DCloud's uni-ad advertisements (referred to as uni-ad advertisements)
2.  The main traffic ad (referred to as wx ad) that comes with the WeChat applet

The difference between the two is:

1.  Application threshold

uni-ad has a lower application threshold and is more friendly to start-ups; WeChat application traffic masters need to live more than 1,000 small programs per day

2.  Full end support

uni-ad can monetize a whole set of codes, including app, web, WeChat applet; wx ads only support WeChat applet

3.  Types of Ads

Both support banners/feeds, incentive videos, and interstitials. wx ad supports one more open screen ad

4.  Benefit Comparison

There are highs and lows, different small programs have different cpm, and developers need to test and compare

4.  Billing Cycle

Compared with WeChat's own traffic main advertisement, uni-ad developers can apply for a relatively shorter settlement cycle and advance payment service. Scan the code and add enterprise WeChat consultation.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/e5e4a83a-8a05-40a1-978d-471871f939a6.jpg)

5.  Safety protection

uni-ad has built-in security protection strategies to reduce the risk of ads being brushed

6.  How to open

uni-ad is applied by the developer on the DCloud website [uniad.dcloud.net.cn](https://uniad.dcloud.net.cn) , and the developer bills and settles with DCloud; while the wx ad is applied for in the background of the WeChat applet, Invoicing and settlement between developers and WeChat

7.  Code writing

Both use the same components during development, such as the `<ad>` component and the `<ad-rewarded-video>` component, but the component attribute of uni-ad is adpid (abbreviation for ad slot id), WeChat small The component property of a program is unit-id.

##  uni-ad developer usage process

1.  Apply for advertising at [uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)
2.  Get the ad slot id (adpid) at [uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)
3.  Introduce the uni-ad WeChat applet plugin and Tencent coral ad plugin in the applet plugin configuration, refer to the application plan below
4.  Write the ad component `<ad adpid=""></ad>` in the appropriate position on the front-end page

Note: The WeChat applet platform does not provide test advertising space for the time being. You can also preview the advertising effect during the development period. The effect of the real machine shall prevail.

##  Development documentation for different ad types

-   banner/feed advertisement

Detailed development document address: [https://uniapp.dcloud.io/component/ad](https://uniapp.dcloud.io/component/ad)

-   Rewarded video ads

Detailed development document address: [https://uniapp.dcloud.io/component/ad-rewarded-video](https://uniapp.dcloud.io/component/ad-rewarded-video)

-   Interstitial ads

Detailed development document address: [https://uniapp.dcloud.io/component/ad-interstitial](https://uniapp.dcloud.io/component/ad-interstitial)

##  adpid and unit-id detailed

`<ad>` (banner/feed), `<ad-rewarded-video>` (rewarded video), `<ad-interstitial>` (interstitial) are the built-in 3 ads of the `uni-app` framework components.

The `<ad>` component supports both `uni-ad` ads and wx ads, while the other 2 ad components only support uni-ad ads. Developing rewarded videos and interstitials for wx ads needs to go through js api instead of components.

Both adpid and unit-id can be written on the `<ad>` component, the differences are as follows:

-   `<ad adpid=""></ad>`, uni-ad ads (uni-app version 3.4.10+)
-   `<ad unit-id=""></ad>`, wx ad, unit-id needs to be applied in the WeChat applet background

`adpid` and `unit-id` can be set at the same time. The priority of `adpid` is higher than `unit-id`. If `uni-ad` is not activated or the network fails, it will switch to wx advertisement. There will be a 3-second interval in this process.

**example:** If you want to use only WeChat advertisements on WeChat, you can use conditional compilation to use uni-ad in App or Web, as follows

```
<!-- #ifdef MP-WEIXIN -->
<ad unit-id=""></ad>
<!-- #endif -->
<!-- #ifndef MP-WEIXIN -->
<ad adpid=""></ad>
<!-- #endif -->
```

##  WeChat applet plug-in application

Apply for plugins through the following two options

###  Option One

Run HBuilderX to the WeChat developer tool, and the link to apply for the plug-in will be output in the developer tool debugging console of WeChat. After clicking, the application confirmation box will pop up, and then click the `OK` button

###  Option II

Log in to the WeChat public platform [https://mp.weixin.qq.com/](https://mp.weixin.qq.com/) , click `Settings` on the left sidebar, and then find the top tab `Third Party Settings` `, scroll down the screen to`Plugin Management`, Click the`Add Plugin`button, search for`uniAD`and`Coral Operation Platform\` and add
