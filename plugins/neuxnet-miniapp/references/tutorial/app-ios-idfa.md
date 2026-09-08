---
title: "How to determine whether to turn on the advertising identification (IDFA)"
source_url: https://miniapp.neuxnet.com/tutorial/app-ios-idfa.html
---
iOS6 was released in September 2012, and IDFA was launched. It is mainly used for developers to track the effect of advertisements in applications. However, many applications (or third-party SDKs) will obtain IDFA as the unique identifier of the device. After the release of iOS 14.5, when Apple requires an app to obtain IDFA, it needs to pop up an authorization box for the user's permission to collect tracking data. If the authorization box does not pop up, it may be rejected by the App Store review, indicating that it violates the rules of 5.1.2:

```
Guideline 5.1.2 - Legal - Privacy - Data Use and Sharing

We noticed you do not use App Tracking Transparency to request the user's permission before tracking their activity across apps and websites. The app privacy information you provided in App Store Connect indicates you collect data in order to track the user, including Device ID and Precise Location.

Starting with iOS 14.5, apps on the App Store need to receive the user’s permission through the AppTrackingTransparency framework before collecting data used to track them. This requirement protects the privacy of App Store users.

Next Steps

Here are two ways to resolve this issue:

- You can remove the tracking functionality from your app and update your app privacy information in App Store Connect.
- If you decide to continue tracking users, you must implement App Tracking Transparency and request permission before collecting data used to track the user or device.

Resources

- See Frequently Asked Questions about the new requirements for apps that track users.
- Learn more about designing appropriate permission requests.
```

**If you encounter the above problems when launching the App Store, please follow the steps in this article to configure and enable IDFA, repackage and submit for review**

-   Make sure to update to HBuilderX3.2.9 or above, the latest version is recommended
-   If it is a project created by the cli command, you need to upgrade the cli to the latest version, refer to [cli command line](https://uniapp.dcloud.io/quickstart-cli?id=cliversion)

###  How to determine whether to turn on the advertising identification (IDFA)

-   The enhanced advertisements in `uni-AD` (Youlianghui, Pangolin, or Kuaishou) are used in the App, IDFA needs to be turned on
-   HBuilderX version is lower than `3.2.15`, the App uses one or more function modules in `Sina Weibo login and sharing`, `One-click login`, `Youmeng statistics`, you need to enable IDFA (3.2.15 and above versions have updated the three-party SDK of these modules, you can not open IDFA)
-   HBuilderX version is greater than or equal to `3.5.3`, and the App uses one or more function modules in `Baidu Map`, `Baidu Location`, and IDFA needs to be enabled
-   The uni native plug-in may also read IDFA. It is recommended to submit the APP Store review and fail, prompting that the 5.1.2 rules are violated and the content contains `App Tracking Transparency`, which can be solved by enabling IDFA through configuration.

> Note: Basic advertisements in uni-AD do not need to access IDFA. If the third-party enhanced advertisement SDK is not checked, the advertisement identification (IDFA) can be disabled. For the non-advertising third-party SDK, we will pay close attention to its official version update, and we will adapt and upgrade as soon as the official version that does not include IDFA is released

###  Set to open the advertising identification (IDFA)

![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-manifest.png)

####  Set NSUserTrackingUsageDescription privacy description

After enabling the Advertising Identity (IDFA), the default privacy description of Cloud Packing is "Please rest assured, opening the permission will not obtain your private information on other sites. This permission is only used to identify the device and ensure service security and prompt browsing experience". ![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-privacy.png)

The privacy description is to tell the user why the application should track the user and access the device's IDFA. The configured description will be displayed on the authorization box. Refer to the following recommended descriptions:

-   When uni-AD function is included "Please rest assured that turning on the permission will not obtain your private information on other sites. This permission is only used to identify devices, third-party advertisements, and to ensure service security and prompt browsing experience"
-   When uni-AD function is not included "Please rest assured that turning on the permission will not obtain your private information on other sites. This permission is only used to identify the device and ensure the security of the service and prompt the browsing experience"

![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-tips.png)

Offline packaging configuration reference document: \[iOS configuration IDFA\](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e5%a6%82%e4%bd%95%e9%85%8d %e7%bd%aeidfa)

###  Configure App Privacy

![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-appstoreconnect-1.png)

![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-appstoreconnect-2.png)

After saving, edit the collected data usage separately:

####  Device ID

![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-appstoreconnect-id.png)

> If `uni-AD` is used, "Third Party Ads" must also be checked

####  Ad Data

![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-appstoreconnect-ad.png)

####  crash data

![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-appstoreconnect-app.png)

> If `uni-AD` is used, "Third Party Ads" must also be checked

###  Get IDFA ID from App

Obtained through [plus.device.getInfo](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getInfo) :

```
plus.device.getInfo({//需要勾选IDFA
	success:function(e){
		console.log('idfa =  '+JSON.stringify(e.idfa));
	},
	fail:function(e){
		console.log('getDeviceInfo failed: '+JSON.stringify(e));
	}
});
```

也可通过native.js获取： Also available via native.js:

```
var idfa = '';
var manager = plus.ios.invoke('ASIdentifierManager', 'sharedManager');
if(plus.ios.invoke(manager, 'isAdvertisingTrackingEnabled')){
	var identifier = plus.ios.invoke(manager, 'advertisingIdentifier');
	idfa = plus.ios.invoke(identifier, 'UUIDString');
	plus.ios.deleteObject(identifier);
}
plus.ios.deleteObject(manager);
console.log('idfa = '+idfa);
```

Refer to Uni plugin example: [https://ext.dcloud.net.cn/plugin?id=726](https://ext.dcloud.net.cn/plugin?id=726)

###  Precautions

####  The configuration of NSUserTrackingUsageDescription still fails the audit, indicating that the 5.1.1 rule is violated:

If the Open Advertising Identification (IDFA) is configured and the NSUserTrackingUsageDescription privacy description is also configured, but the application is still rejected by App Stroe review, and it is prompted to violate the rules of 5.1.1:

```
Guideline 5.1.1 - Legal - Privacy - Data Collection and Storage  

We noticed that your app requests the user's consent to access the AppTrackingTransparency framework, but doesn't sufficiently explain the use of the AppTrackingTransparency framework in the purpose string.

To help users make informed decisions about how their data is used, all permission request alerts need to specify how your app will use the requested information.  

Next Steps  

Please revise the relevant purpose string in your app's Info.plist file to specify why your app needs access to the user's AppTrackingTransparency framework.

You can modify your app's Info.plist file using the property list editor in Xcode.

Resources  

- See example of helpful, informative purpose strings.
- Review a list of relevant property list keys.
```

It may be that the description content is too simple and does not accurately explain why the application should track the user and access the IDFA of the device. You can refer to the above suggestions to update the description content of NSUserTrackingUsageDescription

####  The configuration of NSUserTrackingUsageDescription still fails the audit, indicating that the 2.1 rule is violated:

If the Open Advertising Identification (IDFA) is configured and the NSUserTrackingUsageDescription privacy description is also configured, but the application is still rejected by App Stroe review, and it is prompted to violate the rules of 2.1:

```
Guideline 2.1 - Information Needed

We're looking forward to completing the review of your app, but we need more information to continue. Specifically, we noticed that your app uses the AppTrackingTransparency framework, but we haven't been able to locate the App Tracking Transparency permission request.

Next Steps

Please indicate where in your app we can find the AppTrackingTransparency permission request. The request should appear before any data is collected that could be used to track the user.

Apps that track user's activity must implement App Tracking Transparency and request permission before collecting data used to track.

Resources

See Frequently Asked Questions about the new requirements for apps that track users.

Since your App Store Connect status is Metadata Rejected, we do NOT require a new binary. To revise the metadata, visit App Store Connect to select your app and revise the desired metadata values. Once you’ve completed all changes, reply to this message in Resolution Center and we will continue the review.
```

It may be that App Store Connect configures the "App Privacy" option incorrectly. Please refer to the above to reconfigure the "App Privacy" option.

####  After configuring NSUserTrackingUsageDescription, the real machine will not pop up the authorization prompt box

If IDFA is checked and NSUserTrackingUsageDescription is configured according to the above description, but the authorization prompt box does not pop up when the app is started on the real machine, the possible reason is that the system version of the mobile phone is below iOS14, or it is a mobile phone with iOS14.5. However, in the "Settings-Privacy-Tracking" of the mobile phone, the system turns off the "Tracking Options" by default and cannot be set in gray; at present, it is uncertain whether it is an iOS bug or a special treatment for the region. Switch to a US region, then the "Tracking Options" can be operated; or restore the phone settings to the default settings, and the authorization prompt box can also pop up when the app starts, but it will only pop up once.
