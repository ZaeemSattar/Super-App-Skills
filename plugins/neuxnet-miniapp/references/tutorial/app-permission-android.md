---
title: "Default permissions used"
source_url: https://miniapp.neuxnet.com/tutorial/app-permission-android.html
---
According to the Ministry of Industry and Information Technology's special rectification requirements for APP infringing user rights and interests, the application's privacy policy needs to describe in detail the purpose of the use permission. In order not to prevent the application from using too many permissions, the HBuilderX 2.6.3+ version simplifies the permissions required by the application by default, and configures the permission provision method required by the third-party SDK according to the actual needs.

###  Default permissions used

After submitting the cloud package, the following permissions will be automatically added:

```
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="com.asus.msa.SupplementaryDID.ACCESS" />
<uses-permission android:name="com.huawei.android.launcher.permission.CHANGE_BADGE" />
<uses-permission android:name="android.permission.INSTALL_PACKAGES" />
<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
```

Permission description:

-   android.permission.INTERNET  
    Use network permissions, apply basic permissions
-   android.permission.READ\_EXTERNAL\_STORAGE and android.permission.WRITE\_EXTERNAL\_STORAGE  
    Read and write SD card permissions, the system authorization prompt does not "access photos, media content and files on the device", you can refer to here to configure the application startup \[Apply for read and write mobile phone storage policy\](https://ask.dcloud.net.cn /article/36549#externalstorage)
-   android.permission.READ\_PHONE\_STATE、ACCESS\_NETWORK\_STATE、ACCESS\_WIFI\_STATE  
    Read the device ID for use in [uni statistics service](https://tongji.dcloud.net.cn/) , you can refer to here to configure the \[Apply for access device information permission policy\](https://ask. dcloud.net.cn/article/36549#phonestate)
-   android.permission.INSTALL\_PACKAGES、android.permission.REQUEST\_INSTALL\_PACKAGES  
    Permission required to install apk. This permission is required to upgrade the application using [plus.runtime.install](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.install) in the application **Note: Goog Play channel does not add this permission by default since HBuilder2.6.3+, because GooglePlay audit rules prohibit apps from downloading apk updates, you must upload GooglePlay audit updates**

Description of specific permissions:

-   com.asus.msa.SupplementaryDID.ACCESS  
    Permissions required to obtain device identification information oaid on ASUS devices
-   com.huawei.android.launcher.permission.CHANGE\_BADGE  
    Set the permissions required for the app icon function on Huawei devices
-   com.android.launcher.permission.INSTALL\_SHORTCUT  
    The permission to create desktop shortcuts is required for creating desktop shortcuts using [plus.navigator.createShortcut](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.createShortcut) in applications
-   com.android.launcher.permission.UNINSTALL\_SHORTCUT  
    Delete the desktop shortcut permission, this permission is required to delete the desktop shortcut using [native.js](https://www.html5plus.org/doc/zh_cn/android.html) in the application

###  Android automatically adds the permissions required by the third-party SDK (or module)

When submitting the cloud package, if you check the function modules related to the third-party SDK, all the permissions required by the third-party SDK will be automatically added by default. In order to ensure that the functions of the third-party SDK (or module) are complete, all permissions that may be required will be added by default. If the application only uses some functions provided by the third-party SDK and does not want to automatically add all the permissions required by the third-party SDK, you can uncheck the "Android" Automatically add permissions required by third-party SDKs". **In order to be backward compatible, the cloud package will add the "Geolocation (location)" -> "system location" module by default, so the location permission will be added by default. If you don't need the location permission, please uncheck "Android" in the App permission configuration interface. Customize the permissions required to add third-party SDKs"**

**Note: After removing the permissions required to automatically add the third-party SDK, please be sure to check the permissions required by the third-party SDK in "Android Permission Configuration" as required. For details of the permissions required by the third-party SDK, please refer to "Requirements for the Third-party SDK (or Module)" List of Permissions" chapter** After saving, submit the cloud package to take effect.

####  Visual interface configuration

![](https://native-res.dcloud.net.cn/images/uniapp/permission/android-sdk.png)

####  Code view configuration

Open your project's manifest.json file and switch to "Code View".

-   uni-app project Add autoSdkPermissions under "app-plus" -> "distribute" -> "android" as follows:

```
  "app-plus": {
    "distribute": {
      "android": {
        //...
      },
      //...
  },
  //...
```

-   5+ APP (WAP2APP) project Add autoSdkPermissions under "plus" -> "distribute" -> "google" as follows:

```
  "plus": {
    "distribute": {
      "google": {
        //...
      },
      //...
  },
  //...
```

###  Android permission configuration

![](https://native-res.dcloud.net.cn/images/uniapp/permission/android.png)

**If the required permissions are not listed, you can manually add them as follows** On the manifest.json page, switch to "Code View"

-   uni-app project Add the required permissions under "app-plus" -> "distribute" -> "android" -> "permissions" as follows:

```
  "app-plus": {
    "distribute": {
      "android": {
        "permissions": [   //这里添加需要的Android权限
            "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>"
        ]
        //...
      },
      //...
  },
  //...
```

-   5+ APP (WAP2APP) project Add the required permissions under "plus" -> "distribute" -> "google" -> "permissions" as follows:

```
  "app-plus": {
    "distribute": {
      "google": {
        "permissions": [   //这里添加需要的Android权限
            "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>"
        ]
        //...
      },
      //...
  },
  //...
```

###  List of permissions required by the third-party SDK (or module)

####  Bluetooth (Bluetooth Low Energy)

```
	"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH\" />"
```

####  Contact

```
	"<uses-permission android:name=\"android.permission.GET_ACCOUNTS\"/>",
	"<uses-permission android:name=\"android.permission.WRITE_CONTACTS\"/>",
	"<uses-permission android:name=\"android.permission.READ_CONTACTS\"/>"
```

####  Fingerprint

```
	"<uses-permission android:name=\"android.permission.USE_FINGERPRINT\"/>"
```

####  iBeacon

```
	"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH\" />"
```

####  Maps (location and maps)

-   Gaode map

```
	"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.INTERNET\" />",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_LOCATION_EXTRA_COMMANDS\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />"
```

-   Baidu map

```
	"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
	"<uses-permission android:name=\"android.permission.INTERNET\"/>",
	"<uses-permission android:name=\"android.permission.MOUNT_UNMOUNT_FILESYSTEMS\" />",
	"<uses-permission android:name=\"android.permission.READ_LOGS\" />",
	"<uses-permission android:name=\"android.permission.WRITE_SETTINGS\"/>"
```

####  Messaging

```
	"<uses-permission android:name=\"android.permission.RECEIVE_SMS\"/>",
	"<uses-permission android:name=\"android.permission.SEND_SMS\"/>",
	"<uses-permission android:name=\"android.permission.WRITE_SMS\"/>",
	"<uses-permission android:name=\"android.permission.READ_SMS\"/>"
```

####  OAuth (login authentication)

-   WeChat login

```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```

-   QQ login

```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```

-   Sina Weibo login none
-   Xiaomi login none

####  Payment

-   pay by AliPay

```
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
	<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
```

-   WeChat Pay

```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```

####  Push (message push)

-   uniPush

```
	<!--Required permissions for each push channel Permission description: https://docs.getui.com/getui/question/sdk/ -->
	"<uses-permission android:name=\"android.permission.INTERNET\" />",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.RECEIVE_BOOT_COMPLETED\" />",
	"<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
	"<uses-permission android:name=\"android.permission.VIBRATE\" />",
	"<uses-permission android:name=\"android.permission.GET_TASKS\" />",
	<!--One push channel optional permission for electronic fence -->
	"<uses-permission android:name=\"android.permission.BLUETOOTH\" />（可选）",
	"<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />（可选）",
	"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />（可选）",
	"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />（可选）",
	<!--Manufacturer channel required permissions Xiaomi -->
	"<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_ADDED\" />",
	"<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_CHANGED\" />",
	"<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_INSTALL\" />",
	"<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_REPLACED\" />",
	"<uses-permission android:name=\"android.permission.RESTART_PACKAGES\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\" />",
	<!--Manufacturer channel required permissions Meizu-->
	"<uses-permission android:name=\"android.permission.WRITE_SETTINGS\" />",
	<!--Vendor channel required permissions Huawei -->
	"<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\" />"
```

**A push push is the same as uniPush**

####  Share

-   WeChat sharing

```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```

-   QQ sharing

```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```

-   Share on Sina Weibo

```
	"<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.INTERNET\" />",
	"<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
```

####  Speech (speech recognition)

-   Baidu speech recognition

```
	"<uses-permission android:name=\"android.permission.RECORD_AUDIO\" />",
	"<uses-permission android:name=\"android.permission.INTERNET\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission  android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
```

-   iFLYTEK voice recognition

```
	"<uses-permission android:name=\"android.permission.RECORD_AUDIO\" />",
	"<uses-permission android:name=\"android.permission.INTERNET\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
```

####  Static (statistics)

-   Umeng statistics

```
	"<uses-permission android:name=\"android.permission.READ_LOGS\" />",
	"<uses-permission android:name=\"android.permission.RECEIVE_BOOT_COMPLETED\" />",
	"<uses-permission android:name=\"android.permission.RECEIVE_USER_PRESENT\" />"
```

####  uni-AD

-   Today's Toutiao Pangolin Advertising Alliance

```
	"<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission android:name=\"android.permission.GET_TASKS\"/>"
```

-   Tencent Youlianghui Advertising Alliance

```
      "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>",
      "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />"
```

-   Kuaishou Advertising Alliance

```
      "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>",
      "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
      "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
      "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />"
```

###  Related References

-   Android official permission description, refer to: \[https://developer.android.google.cn/guide/topics/permissions/overview\](https://developer.android.google.cn/guide/topics/permissions/overview? hl=en\_cn)
-   Android official permission constant document, reference: \[https://developer.android.google.cn/reference/android/Manifest.permission\](https://developer.android.google.cn/reference/android/Manifest.permission ?hl=en\_cn)
