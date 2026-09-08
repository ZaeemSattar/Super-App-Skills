---
title: "uni.launchApp(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/other/launchApp.html
---
###  uni.launchApp(OBJECT)3.0.0-3090920240624001

Mini App Opens the tripartite App

**Platform Difference Description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Parameter name | Type | Required | Description |
| --- | --- | --- | --- |
| url | String | Yes | The URl to be opened |
| identity | String | No | Specifies the name of the program that opens the URL address.  
On the iOS platform, this parameter is ignored. On the Android platform, it is the package name. If the specified package name does not exist, the URL fails to be opened. |
| fail | Function | No | Failed to open the URL callback |

> Unable to get callback for successful Url opening due to operating system restrictions. Developers can use the failure callback function to determine whether the third-party App is installed

**Example**

```

// Android opens the URL with the specified App. Open facebook from google play
uni.launchApp({
    url: "market://details?id=com.facebook.katana", // facebook Url
    identity: "com.android.vending" // google play
})

// Open the Chrome browser by URL Scheme 
uni.launchApp({
    url: "googlechrome://",
    fail: function () {
        // The startup failed, possibly because Chrome was not installed
        // Open the browser
        uni.launchApp({
            url: "https://www.google.com/chrome/"
        })
    }
})

// Open the App by applink/neuversal Link,If startup fails, the URL is opened using the browser
uni.launchApp({
    url: "https://apps.apple.com/us/app/facebook/id284882215"
})

// Open the URL using your phone's default browser
uni.launchApp({
    url: 'https://www.facebook.com/'
});
```
