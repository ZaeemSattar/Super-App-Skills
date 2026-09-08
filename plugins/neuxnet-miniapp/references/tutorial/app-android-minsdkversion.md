---
title: "Set minSdkVersion"
source_url: https://miniapp.neuxnet.com/tutorial/app-android-minsdkversion.html
---
minSdkVersion is used to specify the minimum Android version (API level) compatible with the application, and the default value is 19 (that is, the minimum support Android4.4). If some functions of the APP cannot support devices with a lower version of Android system, you can configure minSdkVersion to ensure that the APP can only be installed on devices with a specified Android version and above. In HBuilderX, minSdkVersion can be configured in manifest.json.

\*\*️Note: When the app is upgraded, the minSdkVersion can only be increased and not decreased, that is to say, the app with high minSdkVersion cannot be overwritten and installed by the app with low minSdkVersion, developers need to pay attention! \*\*

###  Set minSdkVersion

The value of minSdkVersion is of type Number and must be a positive integer. For the range of values, refer to `API level` in `Android version list`.

**Visual interface configuration** ![](https://native-res.dcloud.net.cn/images/uniapp/others/minsdkversion.png)

**Source view configuration** Open the manifest.json file of the project, switch to the "source view", and configure it according to the project type.

-   uni-app project Configure the minSdkVersion attribute of the "app-plus" -> "distribute" -> "android" node, the example is as follows:

```
  "app-plus": {
    "distribute": {
      "android":{
        "minSdkVersion": 21
      }
    }
  }
```

-   5+App/Wap2App project items Configure the minSdkVersion attribute of the "plus" -> "distribute" -> "google" node, the example is as follows:

```
  "plus": {
    "distribute": {
      "google":{
        "minSdkVersion": 21
      }
    }
  }
```

####  Precautions

After configuring minSdkVersion, save and submit the App cloud package to take effect, and pay attention to the following issues:

-   Some functions in the App module configuration use the third-party SDK. The third-party SDK may have requirements for minSdkVersion. In this case, the maximum minSdkVersion value will be taken.
-   The uni native plugin may also have requirements for minSdkVersion, in which case the maximum minSdkVersion value will be taken

**Note: If other modules or plugins set minSdkVersion during cloud packaging, the final maximum minSdkVersion value will take effect**

###  Android version list

The corresponding list of API levels and Android versions is as follows:

| API level | Android version number | Android version name |
| --- | --- | --- |
| 19 | Android4.4 | Kitkat |
| 20 | Android4.4W | Kitkat Watch |
| 21 | Android5.0 | Lollipop |
| 22 | Android5.1 | Lollipop |
| 23 | Android6.0 | Marshmallow |
| 24 | Android7.0 | Nougat |
| 25 | Android7.1 | Nougat |
| 26 | Android8.0 | Oreo |
| 27 | Android8.1 | Oreo |
| 28 | Android9.0 | Pie |
| 29 | Android10.0 | Android Q |
| 30 | Android11.0 | Android R |
| 31 | Android12.0 | Android S |
