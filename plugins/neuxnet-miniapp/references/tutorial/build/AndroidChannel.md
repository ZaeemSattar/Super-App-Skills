---
title: "Android Custom Channel Pack"
source_url: https://miniapp.neuxnet.com/tutorial/build/AndroidChannel.html
---
#  Android Custom Channel Pack

##  Cloud packaging how to package channel

Select the project --> Menu Release-Native App-Cloud Packaging to enter the packaging window.

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/android_channel_1.png)

As shown in FIG,

HBuilderX provides `7` channels by default (`Google`, `360`, `Xiaomi`, `Huawei`, `Apppo`, `vivo`, `oppo`), more can be found in the `manifest.json` file \[Source view\] to configure.

| Default Channel | Channel ID |
| --- | --- |
| GooglePlay | google |
| App Store | yyb |
| 360 App Market | 360 |
| Huawei App Store | huawei |
| Xiaomi App Store | xiaomi |
| vivo App Store | vivo |
| oppo app store | oppo |

**Note: When submitting to Google Play, you must set the channel ID to google, that is, you must select the google channel in the packaging interface, otherwise you will not be able to submit to the play store**

##  How to customize channels?

The default number of channels is not enough, want more channels? In manifest.json \[source view\], add the `channel_list` field to the `root node`.

Note that the root node

```
{
	"channel_list":[
		{
			"id":"",
			"name":""
		}
	]
}
```

for example:

```
{
	"channel_list":[
		{
			"id":"chuizi",
			"name":"锤子应用市场"
		}，
               {
			"id":"meizu",
			"name":"魅族应用市场"
		}
	]
}
```

**After configuration, the custom j channel will be displayed on the cloud packaging interface above, and you need to check it when submitting cloud packaging to take effect**

##  Configuration method of offline packaging

Download the latest sdk and add the following content under the application node in the Androidmanifest.xml of the Android project

```
<meta-data android:name="DCLOUD_STREAMAPP_CHANNEL"  android:value="{applicationId}|{appid}|{adid}|{channel}"/>
```

The android:value value consists of four fields, which are separated by the '|' symbol. The description of each field:

-   applicationId package name, corresponding to applicationId in build.gradle in Android project
-   appid application ID, corresponding to appid in manifest.json of 5+ or uni-app project
-   Adid DCloud's advertisement logo, which can be obtained at dev.dcloud.net.cn after the advertisement is activated. If the advertisement is not activated, set the value to the value.
-   channel channel ID, **Note: When submitting to Google Play, be sure to set the channel ID to google**

E.g:

```
<meta-data
            android:name="DCLOUD_STREAMAPP_CHANNEL"
            android:value="io.dcloud.HBuilder|HBuilder|0123456789|google" />
```

[Related configuration of local offline packaging channel on Android platform](https://ask.dcloud.net.cn/article/508#channel) [iOS platform local offline packaging channel related configuration](https://ask.dcloud.net.cn/article/41#channel)

##  js api for obtaining channel information on the mobile phone

[Promotion channel identification](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.channel)

```
plus.runtime.channel 
```

Note: HBuilder 2.0 version has bugs in this API, please upgrade to a newer version

This API is mainly used for custom statistics. If you use DCloud statistics, you do not need to write an API. See below for details.

##  uni-app how to view channel data in uni statistics background

Log in to the official website of uni statistics [https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn) .

Click "Channel/Scenario Value Analysis - Channel (app)" in the left navigation to view.

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/android_channel_2.png)

In reports such as retention statistics, you can also filter channels to view.

##  5+How to view channel data in DCloud statistics background

If your App is not uni-app, but 5+ or wap2app. Then uni stats cannot be used. At this point, you can log in to the [DCloud Developer Center](http://dev.dcloud.net.cn) to view the basic statistics of the application.

The homepage will display a list of all created applications, click the application name to enter the application details, and click "5+APP operation" to view the "daily activity trend" of the application.

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/applist.png)

For apps that contain channel information, select a channel in the upper left corner to view the operation statistics of the corresponding channel.

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/qudao.png)

**Tips：**

-   5+App's basic statistics, the data of the day, the statistical results will be released the next day.
-   Only when there are users and valid data is collected, it can be distinguished by corresponding channels.
-   Currently, one channel and one channel are required for packaging, and cloud packaging cannot be packaged through multiple channels in batches for the time being.
-   The channel tag in this article deals with the DCloud statistics background. If you use Umeng statistics, you need to configure it separately in Umeng's sdk configuration
