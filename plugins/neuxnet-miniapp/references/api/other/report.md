---
title: "Statistics"
source_url: https://miniapp.neuxnet.com/api/other/report.html
---
attention

Recommended to use [uni-stat 2.0](https://uniapp.dcloud.io/uni-stat-v2.html)

##  Statistics

Since Mini App 2.2.3, uni statistics are supported. One report, master all data. For business introduction, see [https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)

Custom events are an integral feature in statistics. Developers can customize the reporting of statistical data through this API, such as statistical login, registration, and clicking a button, which can be called custom events.

###  uni.report( eventKey , param)

**Parameter Description**

| parameters | type | description |
| --- | --- | --- |
| eventKey | String | Event name, max length 255 characters |
| param | String , Object | Event parameter |

TIP

-   eventKey is of type String and the character length must be less than 255
-   When param is of type String, the character length must be less than 255
-   When param is of type Object, the value of the object can only be of type String
-   Strings support special characters but not include (comma , colon : dot .)
-   When the eventKey is `title`, the content title is reported, which cannot be customized by the user. At this time, the data will be displayed in the home page of uni statistics - content statistics and content statistics in the left navigation. Easy to view content page data.
-   When the user uses `uni.login()`, the login event will be executed without parameters. If you need to report data with specific parameters, you need to manually call `uni.report('login',{...})`
-   When the user uses `uni.share()` or triggers `onShareAppMessage`, the share event will be executed without parameters. If you need to report data with specific parameters, you need to manually call `uni.report('share',{...})`
-   When the user uses `uni.requestPayment()`, the payment event will be executed without parameters. If you need to report data with specific parameters, you need to manually call `uni.report('pay_success',{...})` and `uni.report('pay_fail',{...})`

**Example**

```
// content statistics
// When eventKey is title, param can only be String type
uni.report('title','首页')

// Log in
uni.report('login',{
  'name':'Mini App',
  'age':'21',
  // ...
})

// share
uni.report('share','分享')

// payment successful
uni.report('pay_success','支付成功')
// or
uni.report('pay_success',{
  "订单金额":'20元',
  "订单名称":'鼠标',
  // ...
})

// payment failed
uni.report('pay_fail','支付失败')
// or
uni.report('pay_fail',{
  "订单金额":'20元',
  "订单名称":'鼠标',
  // ...
})

// register
uni.report('register',{
  'name':'Mini App',
  'age':'21',
  // ...
})

// search
uni.report('search','搜索内容')
// or
uni.report('search',{
  '内容':'搜索内容'
})

```

After the custom event is reported:

-   Statistics 1.0 In the `Event and Conversion` column of the statistics background, you can see the reported events.
-   Statistics 2.0 In the `uni statistics --> custom events` column in the uni-admin background, you can see the reported events.

TIP

-   For Mini Program Platform, `tongji.dcloud.net.cn` needs to be added to the domain name whitelist, [see details](https://ask.dcloud.net.cn/article/36298)
-   uni statistics tutorial: [uni statistics 2.0](https://uniapp.dcloud.io/uni-stat-v2.html) , \[uni statistics 1.0\](https://uniapp.dcloud.io/uni-stat -v1.html)

###  A uni-ui component that supports uni.report

`uni-ui` has built-in components related to data collection. Users can use these components and set the property `stat:true` to automatically report relevant custom data when using related components

-   [uni-nav-bar](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar)
-   [uni-title](https://ext.dcloud.net.cn/plugin?name=uni-title)
-   [uni-group](https://ext.dcloud.net.cn/plugin?name=uni-group)
-   [uni-goods-nav](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav)

###  Unofficial Custom Statistics

In addition to the official uni statistics, if developers also need to call the custom statistics of the applet platform to report data to the background of the applet, they need to use conditional compilation to call their own API on each end.

####  WeChat Mini Program Platform:

-   Data reporting: [wx.reportMonitor](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/report/wx.reportMonitor.html)
-   Data analysis: [wx.reportAnalytics](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/data-analysis/wx.reportAnalytics.html)

####  Alipay Mini Program Platform:

-   Custom analysis data reporting interface: [my.reportAnalytics](https://docs.alipay.com/mini/api/report)

####  Baidu Mini Program Platform:

-   Data analysis: [swan.reportAnalytics](https://smartprogram.baidu.com/docs/develop/api/data/#swan-reportAnalytics/)

####  ByteDance Mini Program Platform:

-   [reportAnalytics](https://developer.toutiao.com/dev/cn/mini-app/develop/open-capacity/data-analysis/reportanalytics)

####  QQ Mini Program Platform:

-   Data report: [qq.reportMonitor](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_dataup.html)
-   Data Analysis: [qq.reportAnalytics](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_dataanalysis.html#qq-reportanalytics)

####  Umeng statistics of App platform:

-   Umeng Statistics: [Development Specifications](http://www.html5plus.org/doc/zh_cn/statistic.html) , [Configuration Documents](https://ask.dcloud.net.cn/article/74)
