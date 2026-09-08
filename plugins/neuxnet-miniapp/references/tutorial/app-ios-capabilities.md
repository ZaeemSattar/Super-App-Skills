---
title: "Universal Link"
source_url: https://miniapp.neuxnet.com/tutorial/app-ios-capabilities.html
---
![](https://native-res.dcloud.net.cn/images/uniapp/ios/xcode-capabilities.png)

After configuration, the .entitlements and Info.plist files of the XCode project will be updated. The content of the above files can be converted into json format data and configured in the manifest.json file, so that the HBuilderX cloud packaging project can set the corresponding Capabilities.

Open the manifest.json file of the project and configure it in the source view

-   5 APP items Add "capabilities" node in "plus" -> "distribute" -> "apple"
-   uni-app project Add "capabilities" node in "app-plus" -> "distribute" -> "ios"

```
	"capabilities": {
		"entitlements": {	// 合并到工程entitlements文件的数据（json格式）
		},
		"plists": {			// 合并到工程Info.plist文件的数据（json格式）
		}
	},
```

The entitlements data (json) will be converted into the data (dictionary format) of the entitlements file in the XCode project The plists node data will be converted into the data of the Info.plist file in the XCode project (dictionary format)

###  Universal Link

**In order to simplify the configuration and use universal links, it is recommended to use UniCloud to quickly generate universal links. For details, please refer to: [Generate iOS Universal Links with One Click](https://uniapp.dcloud.io/api/plugins/universal-links)**

Universal Link is one of the new features of iOS 9 that Apple presented at WWDC 2015. This feature is similar to deep linking, and can easily launch your client application (the mobile phone has an installed app) by opening an Https link. Compared with the URL Sheme used in the past, this new feature can provide an excellent user experience when implementing seamless web-app links. Please read [Apple's official documentation](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1) before use **Using Universal Link (Universal Link) must have a domain name, which will be used in the following configuration**

####  Step 1: Open the Associated Domains service

![](https://native-res.dcloud.net.cn/images/uniapp/ios/apple-capabilities.png)

**After enabling the Associated Domains service, you need to regenerate the profile file and use it when submitting the cloud package**

####  Step 2: Configure Associated Domains

**Configuration using HBuilderX visual interface** ![](https://native-res.dcloud.net.cn/images/uniapp/ios/hx-ass-domains.png)

**Use HBuilderX source view configuration** Open the manifest.json file of the project, switch to the "Source View" item, and add it under the "app-plus" -> "distribute" -> "ios" -> "capabilities" -> "entitlements" node in the uni-app project "com.apple.developer.associated-domains" field, the field value is an array of strings, each string is the domain name to be associated:

```
	"capabilities": {
		"entitlements": {
			"com.apple.developer.associated-domains": [
				"applinks:demo.dcloud.net.cn"
			]
		}
	}
```

\*\* where demo.dcloud.net.cn is the domain name of the application universal link (do not include path here), please modify it to the domain name to be used by your own application\*\*

> 5+ App project source view configuration nodes are: "plus" -> "distribute" -> "apple" -> "capabilities" -> "entitlements"

After saving, submit the cloud package to take effect.

**Local offline packaging configuration** ![](https://native-res.dcloud.net.cn/images/uniapp/ios/xcode-ass-domains1.png)

![](https://native-res.dcloud.net.cn/images/uniapp/ios/xcode-ass-domains2.png)

**The general link for HBuilderX registration on the default real machine running base that comes with HBuilderX is: https://demo.dcloud.net.cn/ulink/**

####  Step 3: Server configuration apple-app-site-association file

You need to put the apple-app-site-association file on the server corresponding to the above domain name. The apple-app-site-association file is configured as follows:

```
{
    "applinks": {
        "apps": [],
        "details": [
            {
                "appID": "G56NU654TV.io.dcloud.HBuilder",
                "paths": [ "/ulink/*"]
            }
        ]
    }
}
```

-   apps must correspond to an empty array
-   appID It consists of a prefix and an ID. You can log in to the Apple developer website and select the corresponding App ID in the "Identifiers" page of the "Certificates, Identifiers & Profiles" page to view
-   paths The path in the corresponding domain name is used to filter the links that can jump to the App. Wildcards \*, ? and NOT are supported for matching. The matching priority is descended from left to right.

**Note: Do not copy and use the above example directly, you must modify it according to the configuration of your own application** Upload the configured apple-app-site-association file to your own server and make sure it is accessible via https://demo.dcloud.net.cn/.well-known/apple-app-site-association.

**Where demo.dcloud.net.cn is the domain name configured above** After the application is installed, it will register the universal link of the application with the system by visiting the above url.

> Recommended solution: Deploy the apple-app-site-association file to the free Aliyun version of unicloud's \[front-end web hosting\](https://uniapp.dcloud.io/uniCloud/hosting?id=%e7%ae% 80%e4%bb%8b)

###  Client Handling Universal Links

The application startup source can be judged through the [plus.runtime.launcher](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.launcher) of the 5+ API, if its value is "uniLink" It means to start the application through the universal link. At this time, the startup parameters can be obtained through [plus.runtime.arguments](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.arguments) of the 5+ API. Returns the full Universal Link address.

###  Precautions

-   apple-app-site-association files do not need .json suffix
-   The request for the apple-app-site-association file is only made when the app is launched for the first time. If there is a problem with the network connection at this time, Apple will cache the request, and then request it when there is a network connection. If the file is not requested, it is common connection will fail
-   Starting from iOS 9.2, Universal Links does not take effect within the same domain, it must be cross-domain to take effect
