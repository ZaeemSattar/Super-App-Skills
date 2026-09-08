---
title: "Set targetSdkVersion"
source_url: https://miniapp.neuxnet.com/tutorial/app-android-targetsdkversion.html
---
targetSdkVersion is used to specify the target Android version (API level) of the application, the default value is 28 (ie Android9.0).

> -   HBuilderX3.2.13 cloud package adjustment targetSdkVersion default value is 28
> -   HBuilderX cloud package targetSdkVersion default value is 26

Setting the targetSdkVersion value indicates the Android version (API level) that the app is adapted to. Setting a lower version of targetSdkVersion will make the APP run in compatibility mode, so it may not be able to use the features of the new system, and even running in compatibility mode may have security vulnerabilities and other issues . With the upgrade of the Android system, some application markets will require a higher targetSdkVersion to be submitted, which can be configured in the manifest.json of the project in HBuilderX.

\*\*️Note: When an app is upgraded, the targetSdkVersion can only be increased but not decreased, that is to say, apps with high targetSdkVersion cannot be overwritten and installed by apps with low targetSdkVersion, developers need to pay attention! \*\*

###  Set targetSdkVersion

The targetSdkVersion value is of type Number and must be a positive integer. For the range of values, refer to `API level` in `Android version list`.

**Visual interface configuration** ![](https://native-res.dcloud.net.cn/images/uniapp/others/targetsdkversion.png)

**Source view configuration** Open the manifest.json file of the project, switch to the "source view", and configure it according to the project type.

-   uni-app project Configure the targetSdkVersion attribute of the "app-plus" -> "distribute" -> "android" node, the example is as follows:

```
  "app-plus": {
    "distribute": {
      "android":{
        "targetSdkVersion": 30
      }
    }
  }
```

-   5+App/Wap2App project items Configure the targetSdkVersion attribute of the "plus" -> "distribute" -> "google" node, the example is as follows:

```
  "plus": {
    "distribute": {
      "google":{
        "targetSdkVersion": 30
      }
    }
  }
```

**Note: After configuring targetSdkVersion, save and submit the App cloud package to take effect**

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
