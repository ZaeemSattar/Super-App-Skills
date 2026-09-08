---
title: "Android store — background"
source_url: https://miniapp.neuxnet.com/tutorial/android-store.html
---
###  background

In order to effectively manage the phenomenon of compulsory authorization of apps, excessive claims, and collection of personal information beyond the scope, implement the requirements of the "Network Security Law" and the "Consumer Rights Protection Law" to ensure the security of personal information. In January 2019, the Central Network Information Office, The Ministry of Industry and Information Technology, the Ministry of Public Security, and the State Administration for Market Regulation and other four ministries and commissions issued the "Announcement on Carrying out the Special Governance of the Illegal Collection and Use of Personal Information by Apps", organized and carried out the special governance of the illegal collection and use of personal information by Apps nationwide, and successively issued and improved " Approval methods for illegal collection and use of personal information, GB/T 35273-2020 Information Security Technology Personal Information Security Specifications and other standards.

According to the above specification requirements, all major application markets have strengthened the detection of applications, requiring applications to comply with relevant policies, otherwise the application will be at risk of being notified or removed from the shelves.

###  APP cannot be launched due to compliance issues

Please read the following steps carefully to test your APP! Effectively solve listing problems

-   APP is not packaged and produced by HbuilderX`3.5.3+`cloud, please hurry up and upgrade to HbuilderX`3.5.3+` version. Repack!
-   The APP is offline packaged, please upgrade the SDK to `3.5.3+` version to re-edit and package! [Download address](https://nativesupport.dcloud.net.cn/AppDocs/download/android)
-   Do not submit custom docks for platform review. Compliance issues are not handled in debug mode. requires attention!
-   The APP does not have a privacy and policy prompt box configured. Please read [Android platform privacy and policy prompt box configuration method](https://ask.dcloud.net.cn/article/36937) to configure your APP's privacy pop-up window.
-   Be sure to use `template` mode when configuring privacy popups. Otherwise, the application market will not be available. The privacy pop-up window implemented by the application itself does not work either. Be sure to use the privacy popup provided by uni and use the `template` mode remember!
    
    ```
    //androidPrivacy.json
    {  
      "version": "1",    
      "prompt": "template",  
      "title": "服务协议和隐私政策",  
      "message": "..."
     }
    ```
    
-   Fill in the privacy agreement must be combined with the actual module function. Fill in the relevant privacy terms! Can't be vague. All information collected by the module must be filled in completely. Otherwise, it will affect the listing! Please refer to the `Privacy Policy Notice` in the current document
-   Check if the uni native plugin is integrated. Some permissions or illegal acquisitions may be caused by uni native plugins. It is recommended to use the exclusion method to delete the plug-in and repackage the detection
-   Check whether fcm push (including fcm in unipush), google statistics, google push, google login module is integrated. Since these modules are integrated with google's gms service, the android id will be obtained in advance, which will not be able to be put on the shelves normally in China. Please exclude these function modules in the manifest.json configuration when packaging.
-   APP meets the above requirements. The listing still fails! Please provide the code call stack to the instrumentation platform. Please go to the [ASK Forum](https://ask.dcloud.net.cn/explore/) with the stack information to explain the problem and @administrator feedback

###  Privacy Policy Notice

-   Must ensure that the app has a "Privacy Policy", pop up a prompt and obtain user consent when the app is first launched.
    
-   Be sure to configure the privacy and policy prompt box using `template` mode [For details](https://ask.dcloud.net.cn/article/36937)
    
-   The purpose, method and scope of collecting user's personal information must be clearly and comprehensively explained in the "Privacy and Policy" (do not use vague and unclear words that may collect and understand user information). User personal information includes but is not limited to mac Address, device serial number, imei, imsi, software installation list, address book information, SMS information, etc.
    
-   If you report that you have violated regulations to obtain sensitive information, please check the [Privacy Compliance Agreement of Each Functional Module of the Android Platform](https://ask.dcloud.net.cn/article/39484) Privacy Agreement of each functional module. If you integrate related modules, you must write it into the app's privacy agreement.
    
-   You must inform users in the "Privacy Policy" that your app is developed based on DCloud uni-app (5+ App/Wap2App), and add the following protocol:
    
    `Our product is developed based on DCloud uni-app (5+ App/Wap2App), during the running of the application, you need to collect your device unique identification code (IMEI/android ID/DEVICE_ID/IDFA, SIM card IMSI information, OAID) to provide statistical analysis Service, and improve performance and user experience through application startup data and exception error log analysis, to provide users with better services.`
    

###  common problem

####  1. How to solve the problem of "mandatory, frequent, and excessively requesting permissions"

For permission issues, pay attention to the following aspects:

-   When there is no corresponding service or scene in the application, do not apply for the corresponding permission (for example, do not apply for the location permission when the location service is not used)
-   When the application applies for permission, if the user refuses, do not directly exit the APP and cannot use it. Do not set the permissions for "read and write mobile phone storage" and "access device information" to "always" when the app is started. For details, please refer to: \[https://ask.dcloud.net.cn/article/36549\](https: //ask.dcloud.net.cn/article/36549)
-   When calling the application permission related, if the user refuses, the user does not actively trigger the function, do not repeatedly call the API to trigger the pop-up application permission window, which affects the user's use
-   Do not call APIs that may trigger the permission prompt box in the page life cycle onShow, such as [uni.getLocation](https://uniapp.dcloud.io/api/location/location?id=getlocation) , [uni.chooseImage](https://uniapp.dcloud.io/api/media/image?id=chooseimage) `etc`.

####  2. Offline packaged apk! Submit market review and be reported to obtain user information in advance

For offline packaging, please use SDK version 3.5.3+. And configure the uni-app privacy agreement pop-up window. Do not implement the privacy pop-up window through native capabilities by yourself, otherwise the logic of obtaining user information inside the SDK will not be properly restricted. Resulting in non-compliance with compliance detection!

####  3. How to solve the problem of "Forcing users to use the directed push function"

In the "Privacy Policy", keywords such as "recommendation", "customization" and "personalization" are changed to "provide, display, notify, send,,," and other words. If it does involve personalized services, please use the app Add a personalized push switch in the settings

####  4. How to solve the problem before the user clicks "Agree" in the "Privacy Policy", the APP and SDK should not do anything, including that the SDK cannot be initialized, and the APP or SDK cannot collect user information (including but not limited to IMEI, IMSI, device MAC address, software list, device serial number, androidID)

-   Please make sure that the APK is produced based on version 3.5.3+!
-   Make sure the Privacy and Policy Toolbox is configured to use the "template" mode!
-   Private links cannot exist js codes such as obtaining user information and positioning information. If so, please remove it!
-   Available through Xiaomi phone system is MIUI12 device. Install your app. Then check whether `App Details`\-->`App Behavior Record` has obtained permission information before clicking "Agree".
-   If your app is packaged offline, be sure to turn off the debug switch, and modify syncDebug in the project dcloud\_control.xml to false
-   If the above conditions are met, then check whether the app integrates a third-party SDK or a uni native plug-in. Please consult the relevant SDK provider platform for compliance issues. Please update the SDK or find uni native plugins to update related SDK compliance operations.
-   All matches, please resubmit for platform testing.

####  5. How to solve the problem of "The user does not agree to force quit the application"

This problem may be caused by the user selecting the "Disagree" button after the privacy pop-up is displayed and the app exits. Please modify as follows.

-   Configure the second pop-up prompt second, refer to [https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
-   Secondary pop-up window configuration button information is "Agree and Continue" and "Exit Application"

####  6. Offline packaging and integration of third-party SDK

If you rewrite DCloudApplication, you need to pay attention to the compliance operation of the third-party SDK initialized in the Application. Prevent the user information obtained before the privacy pop-up window is activated and cannot be listed

####  7. The app is put on the application market, and the solution for detecting and integrating ads is rejected

-   Check whether the third-party advertisement is checked when using HX cloud package! If checked, please add the advertising privacy statement to the privacy agreement. Please remove it and repackage it on the shelf if you tick it by mistake.
-   Offline packaging to detect whether the relevant third-party advertising SDK is integrated! If integrated, please add an advertising privacy statement to the privacy agreement. Please remove and recompile the apk if it is wrongly integrated.

####  8. The app did not check the third-party advertising module, but it was rejected when it was put on the Huawei Market.

-   Please use HX3.5.3+ to repackage

####  9. The Huawei Market Detection app cannot be put on the market because it applies for obtaining the user's personal information before the user agrees to the privacy policy.

We have received a lot of feedback from developers, and other app markets have been successfully launched. However, when Huawei tested it, the listing was rejected. The guess is that Huawei AppGallery still detects the previously submitted apk after submitting the new apk test, resulting in the failure of the test. In this case, please contact Huawei AppGallery technical support, tell him that the new version has been modified, and have Huawei AppGallery re-test and review.

####  10. When the application is installed and run, a `Notification Authorization` application will pop up. How can there be such a pop-up window application without integrating related functions?

-   If you are a VIVO mobile device, just ignore it. This is a VIVO system mechanism problem. Apps not installed in the vivo app market will pop up a notification authorization pop-up window by default. Not app-initiated authorization. Does not affect the privacy policy
-   Check the integrated uni-app native plugin, it may be that the native plugin triggers the permission request. You can temporarily remove the plugin to troubleshoot this problem.

####  11. The Android application vulnerability caused the problem of not being able to be listed

-   Please use HX3.5.3+ to repackage the cloud
-   Reinforce the apk. Tencent Cloud is recommended

[Security Vulnerability Reference Document](https://ask.dcloud.net.cn/article/39020)

####  12. Your application has the behavior of obtaining sensitive information of the user's software installation list

-   Please use HX3.5.3+ to repackage the cloud
-   Check what modules your app uses. Then check the relevant agreements in the [Privacy Compliance Agreement of Each Functional Module of the Android Platform](https://ask.dcloud.net.cn/article/39484) . Add the agreement to the privacy agreement. Remember not to just fill in the link. It is clear in plain text that what information is obtained and what it is used for. The clearer the better.

####  13. There is an unreasonable behavior in the application to obtain relevant permissions for SMS records

-   Please use HX3.5.3+ package
-   Check if the "Messaging" module is used. Messaging will involve SMS-related permissions. Delete the configuration if it is not needed.
-   Check if uni native plugin is used. It may be the permissions carried by the native plugin. It is recommended to use the exclusion method to remove plugins during detection.

####  14. Your app obtains the user's MAC information in the background state, and it is not in the in-app privacy policy

-   Check if UniPush is integrated
-   If you integrate UniPush, please update the terms of the Getui Privacy Agreement! The focus is to supplement the description of MAC information [Reference](https://ask.dcloud.net.cn/article/39484)
-   If UniPush is not integrated, please obtain the java call stack from the testing platform. Get the java call stack and post a consultation on the [ask forum](https://ask.dcloud.net.cn/explore/)

####  15. Read personal information without permission to obtain ANDROID ID

-   Check whether fcm push (including fcm in unipush), google statistics, google push, google login module is integrated.
-   If it is integrated, it cannot be put on the domestic shelves! The reason is that integrating these modules will import Google's GMS service into the installation package. The startup will get the android id and it will not be listed.
-   Check the uni-app project to remove the above modules in manifest.json and repackage them
-   No integration of these modules to get the call stack from the instrumentation platform. Get the java call stack and post a consultation on the [ask forum](https://ask.dcloud.net.cn/explore/)

####  16. How to package custom DCloudApplication offline and initialize other third-party SDKs to deal with compliance issues

-   We recommend changing the third-party SDK integration method to native plug-in integration into offline packaging. By initializing the SDK through the UniAppHookProxy lifecycle callback, you don't need to care about compliance issues.
-   If you are a developer, you must initialize the third-party SDK in the Application. You can add initialization logic in the Application's onCreate callback. But the premise is that it needs to be called after super.onCreate(). And use SDK.isAgreePrivacy(Context) to get the current privacy agreement state special handling.

```
public class MyApplication extends DCloudApplication {
	@Override
	public void onCreate() {
		super.onCreate();
		if(SDK.isAgreePrivacy(getBaseContext())) {
			//Initialize the third-party SDK normally
		} else {
			//Initialize the third-party SDK to provide an initialization function to avoid privacy compliance. If not, do not initialize
		}
	}
}
```

####  17. Please provide the 64-bit version software package before submitting it for review

![](https://native-res.dcloud.net.cn/uni-app/doc/app/android/stroe/qa17-1.png)

-   If using uni native plugin. Need to see if the plugin supports `arm64-v8a`! Please check the plugin details page if it is supported. If there is no plugin details page, please consult the plugin developer to provide information or replace other plugins.

####  18. The application launch will actively apply for `mobile phone storage permission` and `access device information permission`, which will affect the application launch

-   Please read the document [Permission policies for reading and writing mobile phone storage and accessing device information (such as IMEI) when Android platform applications are started](https://ask.dcloud.net.cn/article/36549) . Configure the application mode for `storage permission` and `access device information permission`. `none` can be configured not to apply. Specific reference documents.
-   After configuring `none`, some functions require `mobile phone storage permission` and `access device information permission`. You can also call \[requestPermissions\](https://www.html5plus.org/doc/zh\_cn/android.html#plus .android.requestPermissions) to actively apply for permissions to support subsequent business logic.

####  19. Not agreeing to the privacy agreement chromium SDK obtains Wifi information and MAC address through GetConnectionInfo in advance

-   You can change the hrefLoader configuration of androidPrivacy.json system Provide system browser to display privacy terms and fix the problem Specific [Reference Document](https://uniapp.dcloud.io/tutorial/app-privacy-android.html)

####  Can't understand the document and don't know how to modify it?

Paid technical services can be activated. Reference: [https://ask.dcloud.net.cn/article/13015](https://ask.dcloud.net.cn/article/13015)

**There may be differences in the compliance review details of the major application markets. If developers encounter relevant problems, please give feedback in time, and we will summarize and organize them in time for your reference**

####  Related References

-   Android platform privacy and policy prompt box configuration method: [https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
-   Permission policies and prompt information such as reading and writing mobile phone storage and accessing device information (such as IMEI) when the Android platform application starts: \[https://ask.dcloud.net.cn/article/36549\](https://ask.dcloud .net.cn/article/36549)
-   Android platform configuration permission reference: [https://ask.dcloud.net.cn/article/36982](https://ask.dcloud.net.cn/article/36982)
