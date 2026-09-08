---
title: "Preparation conditions"
source_url: https://miniapp.neuxnet.com/tutorial/app-push-fcm.html
---
####  Preparation conditions

-   Access to Google servers Note: Google servers cannot be accessed within China
-   Register a Google account
-   Learn what `Firebase Cloud Messaging` is and decide if you need it
    -   [Introduction](https://firebase.google.com/docs/cloud-messaging)
    -   [Android Setup Documentation](https://firebase.google.com/docs/cloud-messaging/android/client)
    -   [iOS setup documentation](https://firebase.google.com/docs/cloud-messaging/ios/client)

####  Apply for FCM

1.  Open the [Firebase Bootstrap Page](https://firebase.google.com)
    
2.  Create a new project ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_1.jpg)  
    ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_2.jpg)  
    ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_3.jpg)
    
3.  Create the `iOS` platform configuration ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_1.jpg) ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_2.jpg) ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_3.jpg) Download `GoogleService-Info.plist` to the local, this file is required for cloud packaging in HBuilderX
    
4.  Create `Android` platform configuration (if you have already created a project, you don't need to create a new project, you can directly configure the Android platform) ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_1.jpg)  
    ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_2.jpg)  
    ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_3.jpg)  
    ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_start.png)  
    ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_package.png)  
    ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_download_config_file.png) Download `google-services.json` locally, this file is required for cloud packaging in HBuilderX
    

####  Android platform FCM background push message

![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_1.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_2.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_3.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_4.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_5.jpg)

####  iOS platform FCM background push message

1.  Upload APNS certificate ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_ios_upload_profile.jpg)
    
2.  The web page implements the push client function ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_1.jpg)  
    ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_2.jpg)  
    ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_3.jpg)  
    ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_4.jpg)  
    ![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_5.jpg)
