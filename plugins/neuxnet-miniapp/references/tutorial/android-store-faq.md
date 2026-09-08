---
title: "common problem"
source_url: https://miniapp.neuxnet.com/tutorial/android-store-faq.html
---
###  common problem

####  1. How to solve the problem of "mandatory, frequent, and excessively requesting permissions"

For permission issues, pay attention to the following aspects:

-   When there is no corresponding service or scene in the application, do not apply for the corresponding permission (for example, do not apply for the location permission when the location service is not used)
-   When the application applies for permission, if the user refuses, do not directly exit the APP and cannot use it. Do not set the permissions for "read and write mobile phone storage" and "access device information" to "always" when the app is started. For details, please refer to: \[https://ask.dcloud.net.cn/article/36549\](https: //ask.dcloud.net.cn/article/36549)
-   When calling the application permission related, if the user refuses, the user does not actively trigger the function, do not repeatedly call the API to trigger the pop-up application permission window, which affects the user's use
-   Do not call APIs that may trigger the permission prompt box in the page life cycle onShow, such as [uni.getLocation](https://uniapp.dcloud.io/api/location/location?id=getlocation) , [uni.chooseImage](https://uniapp.dcloud.io/api/media/image?id=chooseimage) `etc`.

####  2. Offline packaged apk! Submit market review and be reported to obtain user information in advance

For offline packaging, please use SDK version 3.2.15+. And configure uniapp's privacy agreement pop-up window. Do not implement the privacy pop-up window through native capabilities by yourself, otherwise the logic of obtaining user information inside the SDK will not be properly restricted. Resulting in non-compliance with compliance detection!

####  3. How to solve the problem of "Forcing users to use the directed push function"

In the "Privacy Policy", keywords such as "recommendation", "customization" and "personalization" are changed to "provide, display, notify, send,,," and other words. If it does involve personalized services, please use the app Add a personalized push switch in the settings

####  4. How to solve the problem before the user clicks "Agree" in the "Privacy Policy", the APP and SDK should not do anything, including that the SDK cannot be initialized, and the APP or SDK cannot collect user information (including but not limited to IMEI, IMSI, device MAC address, software list, device serial number, androidID)

-   Please make sure that the APK is produced based on version 3.2.15+!
-   Make sure the Privacy and Policy Toolbox is configured to use the "template" mode!
-   Private links cannot exist js codes such as obtaining user information and positioning information. If so, please remove it!
-   Available through Xiaomi phone system is MIUI12 device. Install your app. Then check whether `App Details`\-->`App Behavior Record` has obtained permission information before clicking "Agree".
-   If your app is packaged offline, be sure to turn off the debug switch, and modify syncDebug in the project dcloud\_control.xml to false
-   If the above conditions are met, then check whether the app integrates a third-party SDK or uni native plug-in. Please consult the relevant SDK provider platform for compliance issues. Please update the SDK or find uni native plugins to update related SDK compliance operations.
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

-   Please use HX3.2.15+ to repackage

####  9. The Huawei Market Detection app cannot be put on the market because it applies for obtaining the user's personal information before the user agrees to the privacy policy.

We have received a lot of feedback from developers, and other app markets have been successfully launched. However, when Huawei tested it, the listing was rejected. The guess is that Huawei AppGallery still detects the previously submitted apk after submitting the new apk test, resulting in the failure of the test. In this case, please contact Huawei AppGallery technical support, tell him that the new version has been modified, and have Huawei AppGallery re-test and review.

####  10. When the application is installed and run, a `Notification Authorization` application will pop up. How can there be such a pop-up window application without integrating related functions?

-   If you are a VIVO mobile device, just ignore it. This is a VIVO system mechanism problem. Apps not installed in the vivo app market will pop up a notification authorization pop-up window by default. Not app-initiated authorization. Does not affect the privacy policy
-   Check the integrated uniapp native plugin, it may be that the native plugin triggers the permission request. You can temporarily remove the plugin to troubleshoot this problem.

####  11. The Android application vulnerability caused the problem of not being able to be listed

-   Please use HX3.2.15+ to repackage the cloud
-   Reinforce the apk. Tencent Cloud is recommended

[Security Vulnerability Reference Document](https://ask.dcloud.net.cn/article/39020)

####  12. Your application has the behavior of obtaining sensitive information of the user's software installation list

-   Please use HX3.2.15+ to repackage the cloud
-   Check what modules your app uses. Then check the relevant agreements in the [Privacy Compliance Agreement of Each Functional Module of the Android Platform](https://ask.dcloud.net.cn/article/39484) . Add the agreement to the privacy agreement. Remember not to just fill in the link. It is clear in plain text that what information is obtained and what it is used for. The clearer the better.

####  13. There is an unreasonable behavior in the application to obtain relevant permissions for SMS records

-   Please use HX3.2.15+ package
-   Check if the "Messaging" module is used. Messaging will involve SMS-related permissions. Delete the configuration if it is not needed.
-   Check if uni native plugin is used. It may be the permissions carried by the native plugin. It is recommended to use the exclusion method to remove plugins during detection.

####  Can't understand the document and don't know how to modify it?

Paid technical services can be activated. Reference: [https://ask.dcloud.net.cn/article/13015](https://ask.dcloud.net.cn/article/13015)

**There may be differences in the compliance review details of the major application markets. If developers encounter relevant problems, please give feedback in time, and we will summarize and organize them in time for your reference**

####  Related References

-   Android platform privacy and policy prompt box configuration method: [https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
-   Permission policies and prompt information such as reading and writing mobile phone storage and accessing device information (such as IMEI) when the Android platform application starts: \[https://ask.dcloud.net.cn/article/36549\](https://ask.dcloud .net.cn/article/36549)
-   Android platform configuration permission reference: [https://ask.dcloud.net.cn/article/36982](https://ask.dcloud.net.cn/article/36982)
