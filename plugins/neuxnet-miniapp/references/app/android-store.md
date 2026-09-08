---
title: "uni-app default integrated function module"
source_url: https://miniapp.neuxnet.com/app/android-store.html
---
###  uni-app default integrated function module

| SDK name | package name information | purpose of usage | Permission to use | involving personal information | Privacy Policy Link |
| --- | --- | --- | --- | --- | --- |
| com.taobao | android.permission.WRITE\_EXTERNAL\_STORAGE  
android.permission.READ\_EXTERNAL\_STORAG | [http://doc.weex.io/zh](http://doc.weex.io/zh/) |
| com.facebook.fresco | android.permission.WRITE\_EXTERNAL\_STORAGE  
android.permission.READ\_EXTERNAL\_STORAG | [https://www.fresco-cn.org/](https://www.fresco-cn.org/) |
| com.bumptech.glide | android.permission.WRITE\_EXTERNAL\_STORAGE  
android.permission.READ\_EXTERNAL\_STORAG | [http://bumptech.github.io/glide/](http://bumptech.github.io/glide/) |
| gif-drawable | pl.droidsonroids.gif | android.permission.WRITE\_EXTERNAL\_STORAGE  
android.permission.READ\_EXTERNAL\_STORAG | [https://github.com/alibaba/fastjson](https://github.com/alibaba/fastjson) |
| fastjson | com.alibaba.fastjson | none | [https://github.com/alibaba/fastjson](https://github.com/alibaba/fastjson) |
| com.bun.miitmdid、com.zui.opendeviceidlibrary | none | [http://www.msa-alliance.cn/col.jsp?id=105](http://www.msa-alliance.cn/col.jsp?id=105) |

**About Mobile Security Alliance OAID**

Mobile smart terminal supplementary device identification system and SDK privacy compliance issues

­

-   Device manufacturer, device model, and device brand, which are used to determine the terminal calling interface
-   The name of the network operator of the device, which is used to determine the virtual machine environment
-   APP package name, used to verify the signature

###  UniPush

UniPush is an integrated unified push service launched by DCloud and Getui Company. It uses the SDK provided by Getui. Therefore, it is necessary to add a description of "Geetui Message Push SDK" in the "Privacy Policy". It is recommended to add the "Share with Authorized Partners" clause in the Privacy Policy, add the user privacy policy of Getui to it, and make clear to end users the purpose, method and scope of the collection and use of personal information by your embedded SDK one by one. The reference content is as follows:

`Message push service provider: Daily Interaction Co., Ltd. provides push technology services. We may send your device information such as device platform, device manufacturer, device brand, device identification code, application list information, network information and location-related information The information is provided to Daily Interaction Co., Ltd., which is used to provide you with news push technical services. When we push messages to you, we may authorize Daily Interactive Co., Ltd. to adjust the link, and mutually promote the closed SDK push process to ensure that you can receive the messages we push to you in a timely manner. For details, please visit the "Gitui User Privacy Policy" (the "Gitui User Privacy Policy" needs to be hyperlinked to: http://docs.getui.com/privacy)`.

Three-party SDK description for UniPush module integration

| SDK name | package name information | purpose of usage | Permission to use | involving personal information | Privacy Policy Link |
| --- | --- | --- | --- | --- | --- |
| com.igexin | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.READ\_PHONE\_STATE  
android.permission.VIBRATE  
android.permission.GET\_TASKS | [http://docs.getui.com/privacy](http://docs.getui.com/privacy) |

####  HMS push

Push Kit is a message push platform provided by Huawei, which establishes a message push channel from the cloud to the terminal. By integrating the push service, you can push messages to client applications in real time, so you need to add "HMS push" instructions in the Privacy Policy.

| SDK name | package name information | purpose of usage | Permission to use | involving personal information | Privacy Policy Link |
| --- | --- | --- | --- | --- | --- |
| com.huawei.hms | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.REQUEST\_INSTALL\_PACKAGES  
android.permission.FOREGROUND\_SERVICE  
android.permission.READ\_PHONE\_STATE | Device Information (IMEI, ANDROID\_ID, DEVICE\_ID, IMSI), App Installed List, Network Information | [Push Privacy Statement](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/privacy-statement-0000001050042021) |

###  Statistic

HX3.1.14+ Umeng SDK has been upgraded to version 9.3.8 for compliance issues

-   When you integrate the statistics module. You need to ensure that the App has a "Privacy Policy", and when the user starts the App for the first time, the "Privacy Policy" will pop up to obtain the user's consent! ! !
-   You must inform the user that you choose the Umeng+SDK service, please add the following reference to the Privacy Policy: "Our product integrates Umeng+SDK, Umeng+SDK needs to collect your device's Mac address, unique device identification code (IMEI/android ID/IDFA/OPENUDID/GUID, SIM card IMSI information) to provide statistical analysis services, and to calibrate the accuracy of report data through geographic location to provide basic anti-cheating capabilities.”
-   You must ensure that the user agrees to the "Privacy Policy". Then call the relevant api! ! ! !

Three-party SDK description for Statistic module integration

| SDK name | package name information | purpose of usage | Permission to use | involving personal information | Privacy Policy Link |
| --- | --- | --- | --- | --- | --- |
| com.uc.crashsdk、com.efs、com.umeng | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.READ\_PHONE\_STATE | [https://docs.getui.com/privacy/](https://docs.getui.com/privacy/) |

###  OAuth、Share、Payment

The same SDK is introduced for login, sharing, and payment. Here is a unified description:

| SDK name | package name information | purpose of usage | Permission to use | involving personal information | Privacy Policy Link |
| --- | --- | --- | --- | --- | --- |
| com.tencent.mm | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE | Stored personal files, network information | [WeChat Privacy Agreement](https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy) |
| com.sina.weibo | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE | Stored personal files, network information | [Sina Privacy Policy](https://weibo.com/signup/v5/privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1) |
| com.tencent.open | android.permission.MODIFY\_AUDIO\_SETTINGS  
android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE | Stored personal files, read phone status and identity, network information | [qq privacy agreement](https://ti.qq.com/agreement/qqface.html?appname=mqq_2019) |
| com.alipay | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE | Internet Information | [Alipay Privacy Policy](https://render.alipay.com/p/c/k2cx0tg8) |
| com.g.elogin、com.g.gysdk | android.permission.READ\_PHONE\_STATE  
android.permission.READ\_EXTERNAL\_STORAGE  
android.permission.WRITE\_EXTERNAL\_STORAGE  
android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.CHANGE\_NETWORK\_STATE | [https://docs.getui.com/privacy/](https://docs.getui.com/privacy/) |

###  Speech

The description of the three-party SDK integrated with the Speech module

####  Baidu Voice

| SDK name | package name information | purpose of usage | Permission to use | involving personal information | Privacy Policy Link |
| --- | --- | --- | --- | --- | --- |
| com.baidu.speech | android.permission.RECORD\_AUDIO  
android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.CHANGE\_NETWORK\_STATE  
android.permission.READ\_PHONE\_STATE  
android.permission.WRITE\_EXTERNAL\_STORAGE | [https://ai.baidu.com/ai-doc/REFERENCE/Qkdykq1r3](https://ai.baidu.com/ai-doc/REFERENCE/Qkdykq1r3) |

###  Map & Geolocation

Three-party SDK description for Map & Geolocation module integration

| SDK name | package name information | purpose of usage | Permission to use | involving personal information | Privacy Policy Link |
| --- | --- | --- | --- | --- | --- |
| com.amap.api, com.loc, com.autonavi | android.permission.ACCESS\_COARSE\_LOCATION  
android.permission.ACCESS\_FINE\_LOCATION  
android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.CHANGE\_WIFI\_STATE  
android.permission.READ\_PHONE\_STATE  
android.permission.WRITE\_EXTERNAL\_STORAGE  
android.permission.ACCESS\_LOCATION\_EXTRA\_COMMANDS | [https://lbs.amap.com/agreement/compliance](https://lbs.amap.com/agreement/compliance) |
| com.baidu | android.permission.ACCESS\_COARSE\_LOCATION  
android.permission.ACCESS\_FINE\_LOCATION  
android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.CHANGE\_WIFI\_STATE  
android.permission.READ\_PHONE\_STATE  
android.permission.WRITE\_EXTERNAL\_STORAGE  
android.permission.ACCESS\_LOCATION\_EXTRA\_COMMANDS  
android.permission.READ\_LOGS  
android.permission.WRITE\_SETTINGS  
android.permission.MOUNT\_UNMOUNT\_FILESYSTEM | [https://map.baidu.com/zt/client/privacy/index.html](https://map.baidu.com/zt/client/privacy/index.html) |

###  uni-AD

Three-party SDK description for uni-AD advertising module integration

| SDK name | SDK package name/URL | SDK usage | Types of personal information that may be obtained | Invoked Device Permissions | Information use | SDK Privacy Policy Link/Purpose |
| --- | --- | --- | --- | --- | --- | --- |
| uni-AD |  | basic advertising | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.READ\_PHONE\_STATE  
android.permission.ACCESS\_COARSE\_LOCATION | Advertising cooperation, advertising attribution, anti-cheating, security | [Privacy Agreement](https://doc.dcloud.net.cn/markdown-share-docs/1d821cdd3cdf2681045ec4be94bc8404/) |
| engine.tuifish.com | basic advertising | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.READ\_PHONE\_STATE  
android.permission.ACCESS\_COARSE\_LOCATION | Identify ads, campaign cheating; improve SDK crash rate, push personalized ads; ad serving. | [Push Ah Privacy Policy](https://yun.tuia.cn/tuia/sdk/agreement/index.html) |
| com.kwad.sdk | Enhanced 1111 Advertising | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.INTERNET  
android.permission.READ\_PHONE\_STATE  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.REQUEST\_INSTALL\_PACKAGES  
android.permission.VIBRATE | Ad serving, ad attribution, anti-fraud, security | [Kuaishou Privacy Agreement](https://www.kuaishou.com/about/policy) |
| com.kwad.sdk | Enhanced Ads | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.INTERNET  
android.permission.READ\_PHONE\_STATE  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.REQUEST\_INSTALL\_PACKAGES  
android.permission.VIBRATE  
android.permission.SET\_WALLPAPER  
android.permission.READ\_EXTERNAL\_STORAGE  
android.permission.WRITE\_EXTERNAL\_STORAGE  
android.permission.ACCESS\_COARSE\_LOCATION  
android.permission.BLUETOOTH | Ad serving, ad attribution, anti-fraud, security | [Kuaishou Content Alliance Privacy Policy](https://www.kuaishou.com/about/policy) |
| com.qq.e | Enhanced Ads | android.permission.INTERNET  
android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.REQUEST\_INSTALL\_PACKAGES  
android.permission.CHANGE\_NETWORK\_STATE  
android.permission.QUERY\_ALL\_PACKAGES  
android.permission.REORDER\_TASKS  
android.permission.VIBRATE  
android.permission.ACCESS\_COARSE\_LOCATION | Ad serving and monitoring attribution, advertisers' statistics on serving results, reducing App crashes, ensuring normal server operation, improving scalability and performance | [Youlianghui Privacy Agreement](https://imgcache.qq.com/gdt/cdn/adn/uniondoc/ylh_sdk_privacy_statement.html) |
| com.bytedance.sdk.openadsdk | Enhanced Ads | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.READ\_PHONE\_STATE  
android.permission.WRITE\_EXTERNAL\_STORAGE | Advertising cooperation, advertising attribution, anti-fraud | [Pangolin Privacy Policy](https://www.pangle.cn/privacy/partner) |
| Sigmob | com.sigmob.windad | Enhanced Ads | android.permission.ACCESS\_NETWORK\_STATE  
android.permission.INTERNET  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.CHANGE\_WIFI\_STATE  
android.permission.READ\_PHONE\_STATE  
android.permission.REQUEST\_INSTALL\_PACKAGES  
android.permission.QUERY\_ALL\_PACKAGES | Ad placement, advertiser attribution, anti-fraud | [Sigmob Privacy Agreement](https://support.sigmob.com/#/%E9%9A%90%E7%A7%81%E6%9D%A1%E6%AC%BE/) |

###  Tencent x5 kernel

| SDK name | package name information | purpose of usage | Permission to use | involving personal information | Privacy Policy Link |
| --- | --- | --- | --- | --- | --- |
| com.tencent.tbs、com.tencent.smtt | android.permission.WRITE\_EXTERNAL\_STORAGE  
android.permission.ACCESS\_NETWORK\_STATE  
android.permission.ACCESS\_WIFI\_STATE  
android.permission.READ\_PHONE\_STATE | [https://x5.tencent.com/docs/privacy.html](https://x5.tencent.com/docs/privacy.html) |

###  Contacts

Manage the system address book, which can be used to add, delete, modify, check and other operations on the system address book. Obtain the system address book management object through plus.contacts.

| SDK name | package name information | purpose of usage | Permission to use | involving personal information | Privacy Policy Link |
| --- | --- | --- | --- | --- | --- |
| Contacts | io.dcloud.feature.contacts | android.permission.GET\_ACCOUNTS  
android.permission.WRITE\_CONTACTS  
android.permission.READ\_CONTACTS | Get contact information | (The host fills in the relevant privacy policy information according to the APP's own logic) |

###  Messaging

| SDK name | package name information | purpose of usage | Permission to use | involving personal information | Privacy Policy Link |
| --- | --- | --- | --- | --- | --- |
| Messaging | io.dcloud.feature.messagings | android.permission.RECEIVE\_SMS  
android.permission.SEND\_SMS  
android.permission.WRITE\_SMS  
android.permission.READ\_SMS | Read and write SMS, MMS, email | (The host fills in the relevant privacy policy information according to the APP's own logic) |

If your app uses modules that rely on third-party SDKs, you also need to add their compliance clauses to the Privacy Policy

####  uni native plugin

If the application uses the uni native plugin, you need to pay attention to the following points:

-   Please check the `Privacy and Permission Statement` in the plugin details page when using the plugin. (What sdk does the plugin use? What user information is obtained? All should be provided by the plugin author and filled in `Privacy, Permission Statement`)
-   Add the third-party SDK information used in the plugin to the user privacy agreement. For example, `Baidu positioning` is integrated. It is necessary to describe the integration of Baidu positioning SDK in the privacy agreement. Obtained xxx user information! Used for xxx.
-   If you find that the plug-in obtains user information but the plug-in details page does not provide a `Privacy and Permission Statement`, please contact the plug-in developer or feedback with us to supervise and supplement.

####  Other

The "Privacy Policy" must be very clear and comprehensive (do not use vague and unclear words that may collect and understand user information) the purpose, method and scope of collecting users' personal information. If the application uses related functions such as "Address Book" and "SMS", please describe it according to the application business scenario.
