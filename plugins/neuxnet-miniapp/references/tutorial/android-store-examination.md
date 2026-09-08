---
title: "Privacy Policy Self-Check Guide"
source_url: https://miniapp.neuxnet.com/tutorial/android-store-examination.html
---
#  Privacy Policy Self-Check Guide

##  background

In order to effectively manage the phenomenon of compulsory authorization of apps, excessive claims, and collection of personal information beyond the scope, implement the requirements of the "Cybersecurity Law" and the "Consumer Rights Protection Law" to ensure the security of personal information. In January 2019, the Central Cyberspace Administration of China, The Ministry of Industry and Information Technology, the Ministry of Public Security, and the State Administration for Market Regulation and other four ministries and commissions issued the "Announcement on Carrying out the Special Governance of the Illegal Collection and Use of Personal Information by Apps", organized and carried out the special governance of the illegal collection and use of personal information by Apps nationwide, and successively issued and improved " Approval methods for illegal collection and use of personal information, GB/T 35273-2020 Information Security Technology Personal Information Security Specifications and other standards. According to the above specifications, all major application markets have strengthened the detection of applications, requiring that applications must comply with relevant policies, otherwise the applications will be at risk of being notified or removed from the shelves.

In order to help developers avoid compliance risks, a privacy protocol self-inspection guide is provided. Developers can check themselves in the following order:

####  1. [Upgrade the latest version of HbuilderX or offline package SDK](#update)

####  2. [Privacy pop-up configuration detection](#check)

####  3. [Privacy Policy Display Content](#content)

####  4. [View uni-app (5+ App/Wap2App) integrated function module supplementary privacy agreement](#feature)

##  1. Select the latest version of HbuilderX or SDK according to your own APP production environment

| Packaging | Recommended Version | Download |
| --- | --- | --- |
| HbuilderX packaging | `HbuilderX3.2.15+` | \[[HbuilderX download address](https://www.dcloud.io/hbuilderx.html) \] |
| Offline packaging | `3.2.15+` | \[[Offline packaging SDK download address](https://nativesupport.dcloud.net.cn/AppDocs/download/android) \] |

##  2. Privacy pop-up configuration detection

####  1. Check whether there is an androidPrivacy.json file in the uni-app project directory. If not, please check the [Reference Document](https://ask.dcloud.net.cn/article/36937) to add the configuration!

####  2. Check whether the `prompt` configuration value field in the androidPrivacy.json file is `template`. [Reference document](https://ask.dcloud.net.cn/article/36937)

```
	```
	//androidPrivacy.json  
	{    
	"version": "1",      
	"prompt": "template",    
	"title": "服务协议和隐私政策",    
	"message": "..."  
	}
	```
```

##  3. Privacy Policy Display Content

###  Be sure to inform users in the APP "Privacy Policy" that your app is developed based on DCloud uni-app (5+ App/Wap2App)

Please fill in the following information in the "Privacy Policy":

`Our products are developed based on DCloud uni-app (5+ App/Wap2App). During the running of the application, you need to collect your device unique identification code (IMEI/android ID/DEVICE_ID/IDFA, SIM card IMSI information) to provide statistical analysis services, And improve performance and user experience through application startup data and abnormal error log analysis to provide users with better services.`

###  Integrating other functional modules involves privacy policy

The catalog list of personal information collected and used by the SDK disclosed in the "Third-Party Information Sharing" clause of the App Privacy Policy should clearly indicate to the user the purpose, method and scope of the current SDK's collection and use of personal information, and correctly disclose the relevant platform privacy agreement link, terms The content can refer to the following methods, and obtain the consent of the end user within the scope of laws and regulations:

####  Method 1 List to the user in text:

**Use SDK name:** a push message push

**Purpose of use:** Push message (please fill in according to the specific purpose of use)

**Permissions used:**

```
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
android.permission.READ_PHONE_STATE
android.permission.VIBRATE
android.permission.GET_TASKS
```

**Involving personal information:** Device information (IMEI, ANDROID\_ID, DEVICE\_ID, IMSI), application installed list, network information

**隐私权政策链接:** [http://docs.getui.com/privacy](http://docs.getui.com/privacy)

* * *

####  Method 2 Present to the user in a form:

| SDK name | package name information | purpose of usage | Permission to use | involving personal information | Privacy Policy Link |
| --- | --- | --- | --- | --- | --- |
| com.igexin | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.READ\_PHONE\_STATE  
android.permission.VIBRATE  
android.permission.GET\_TASKS | [http://docs.getui.com/privacy](http://docs.getui.com/privacy) |

##  4. View uni-app (5+ App/Wap2App) integrated module supplementary privacy agreement

####  View uni-app (5+ App/Wap2App) application function module

Use HBuilder X to view the `App module configuration` of manifest.json to see which module configurations are checked. Check the [Privacy Compliance Agreement of Each Functional Module of the Android Platform](https://ask.dcloud.net.cn/article/39484) according to the configured modules and supplement the privacy compliance agreement to your Privacy Policy.

####  View uni-app (5+ App/Wap2App) application permission configuration

Use HBuilder X to view the `App permission configuration` of manifest.json to see which permission configurations are checked. See the document [Android Platform Cloud Packaging Permission Configuration](https://ask.dcloud.net.cn/article/36982) which permissions are used by each functional module. Please delete unnecessary permissions in time to avoid rejection!

###  Offline packaging

####  Three-party sdk privacy compliance

Offline packaging currently only supports the configuration of privacy pop-ups provided by uni-app (5+ App/Wap2App). Custom natively written privacy pop-ups cannot avoid privacy protocol issues.

The integration is the dependency library provided by the offline packaging SDK. View the [Privacy Compliance Agreement of Each Functional Module of the Android Platform](https://ask.dcloud.net.cn/article/39484) according to the actual module division. The supplementary "Privacy Policy" agreement is Can.

If it is a third-party SDK integrated by the host itself:

-   Go to the third-party platform to obtain privacy agreement information. Supplement to the Privacy Policy.
-   Call API methods provided by SDK. SDK.isAgreePrivacy gets the privacy agreement status. Call the initialization logic of the third-party SDK.

####  App permissions configuration

View `AndroidManifest.xml` in the APP module of the native project, and check the permissions required by the App according to the actual situation. What permissions are used by each functional module can be viewed in the document [Android Platform Cloud Packaging Permission Configuration](https://ask.dcloud.net.cn/article/36982) . Please delete unnecessary permissions in time to avoid rejection!

###  uni native plugin

1、If the app integrates uni native plugins, you need to pay attention to whether the plugin documentation involves user privacy acquisition or sensitive permissions. Accordingly, the compliance agreement should be supplemented to the "Privacy Policy".

2、The uni native plugin may obtain user privacy or sensitive permissions. As a result, the user's App cannot be launched. In this case, the host cannot check. Exclusion can be used. Delete the plugin and check again.
