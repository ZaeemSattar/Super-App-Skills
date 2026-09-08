---
title: "App disagreemode — overview"
source_url: https://miniapp.neuxnet.com/tutorial/app-disagreemode.html
---
###  Overview

In order to implement the "[Network Security Law of the People's Republic of China](http://www.cac.gov.cn/2016-11/07/c_1119867116.htm) ", "Network operators shall collect and use personal information in accordance with the law. , the principle of justification and necessity", "Network operators shall not collect personal information irrelevant to the services they provide", etc. The Cyberspace Administration of China, the Ministry of Industry and Information Technology, the Ministry of Public Security, and the State Administration for Market Regulation jointly formulated the "\[\[ Provisions on the Scope of Necessary Personal Information for Common Types of Mobile Internet Applications\] (http://www.cac.gov.cn/2021-03/22/c\_1617990997054277.htm) (Guoxin Ban Mi Zi \[2021\] No. 14, hereinafter referred to as "" "Regulations"), it is clear that mobile Internet application (App) operators shall not refuse users to use the basic functions of the App because users do not agree to collect non-essential personal information.

Article 3 of the "Regulations" defines 'essential personal information', and Article 4 of the "Regulations" clarifies the basic requirements, that is, "Apps shall not refuse users to use their basic functions and services because users do not agree to provide non-essential personal information"; " Article 5 of the Regulations defines 39 common types of apps, their basic functional services and necessary personal information. Developers are requested to read the Regulations carefully to determine the type of apps they develop, and to clarify basic functional services and necessary personal information. . The key here is to understand 'essential personal information' and 'non-essential personal information', and describe all the information collected and its uses in detail in the "Privacy Policy" of the App, in the following situations:

-   For apps that require 'essential personal information' (such as map navigation apps), the content and purpose of the 'essential personal information' used by the app must be clearly described in the "Privacy Policy", including the information collected by the third-party SDK used . If the "Privacy Policy" only describes the collection of `non-essential personal information`, the user does not agree and should continue to provide basic functional services
-   It is classified as an app that does not require 'essential personal information' (such as a webcast app), the app should not collect 'essential personal information', the information described in the "Privacy Policy" is 'non-essential personal information', and the user Do not agree with the "Privacy Policy" should continue to provide basic functions

That is to say, according to the requirements of the "Regulations", many apps need to support running even if the user does not agree to the "Privacy Policy", and provide basic functional services. "Privacy Policy Mode" (hereinafter referred to as "disagreeMode"), after configuring to support disagreeMode, the user can continue to use the App after clicking the reject button in the "Privacy Policy" prompt box. In this mode, uni-app(5+ App/Wap2App) The internal logic will do special processing:

-   Will not actively apply for permissions to read and write mobile phone storage, access device information, etc.
-   Will not actively read any device information
-   App launch stats request will still be sent, but without device info
-   Exception crash statistics request will still be submitted, but without any device information

**The iOS platform does not support disgreeMode at the moment, it needs to be adapted to the original privacy policy box**

At the same time, users are required to not read any personal information (including device identification information and personal information entered by users) when using basic functional services, and cannot call the disagreeMode mode restriction API. In particular, it is necessary to pay attention to whether the uni native plug-in used is compliant.

**Note: To support disagreeMode, the App needs to be adapted according to the business**

> -   **Prerequisite: HBuilderX is updated to version 3.3.1 and above**
> -   **First step: Native privacy policy prompt box [Configure support disagreeMode](#disagree)**
> -   **Step 2: [Adapt the basic functional services of the App](#basic-services), make sure not to call any API that may involve "Privacy Policy" compliance**
> -   **Step 3: Adapt to business functions that require the use of `non-essential personal information`, before calling the function [guide the user to agree to the "Privacy Policy" agreement](#showPrivacy)**

###  Configure to support disagreeMode

```
{
	"prompt": "template",
	"buttonAccept": "同意并接受",  
	"buttonRefuse": "基础功能模式",
	"disagreeMode": {
	    "support": true,
	    "loadNativePlugins": true
	}
}

```

-   support  
    Boolean type, true means to open disagreeMode; false means not to open (the user does not agree to the "Privacy Policy" and exits the application). The default value is false.
-   loadNativePlugins  
    Boolean type, indicating whether to load the uni native plugin in disagreeMode mode, true means loading; false means not loading (in this case, calling uni.requireNativePlugin to load the plugin extension Module returns undefined, and the extension component Component of the plugin cannot be used). The default value is true. Usage scenario: In disagreeMode mode, if the use of uni native plugins does not comply with the "Privacy Policy" compliance detection and cannot determine which plugin is causing it, you can simply configure loadNativePlugins to false to not load all native plugins. Note: Configuring to false requires restarting the app after instructing the user to agree to the "Privacy Policy".

###  Adapt to the basic functional services of the App

disagreeMode means that the user does not agree to the "Privacy Policy". At this time, the App only provides basic functional services. In this mode, APIs related to privacy compliance cannot be called. If it is called, the App may fail the compliance detection due to reading privacy information. See [disagreeMode mode limits uni APIs and components](#limit-uni) and [disagreeMode mode limits 5+ APIs](#limit-plus). If the page of the basic function service needs to call the restriction API, you must first [judg whether it is running in disagreeMode mode](#judge), if so, you must first [guide the user to agree to the "Privacy Policy" agreement](#showPrivacy), the user agrees Call the restriction API after the privacy policy.

####  Determine whether to run in disagreeMode mode

You can use [plus.runtime.isAgreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.isAgreePrivacy) to check whether the user agrees to the privacy policy of the current application, and can determine whether it is running in disagreeMode mode. The sample code is as follows:

```
if(plus.runtime.isAgreePrivacy()) {
	// plus.device.getInfo();
}else{
  // Running in disagreeMode mode, cannot call restriction API
  // Here you can guide the user to agree to the privacy policy
}
```

plus.runtime.isAgreePrivacy() returns true to indicate that the user has agreed to the privacy policy and calls the relevant restricted APIs; returns false to indicate that the user does not agree to the privacy policy, runs in disagreeMode mode, and cannot call restricted APIs.

####  disagreeMode restricts uni APIs and components

Do not use the following uni APIs and components in disagreeMode mode, otherwise it will affect the compliance detection of the app store!

#####  API

-   uni.getSystemInfo uni.getSystemInfoSync
-   uni.getRecorderManager
-   uni.scanCode
-   uni.chooseImage
-   uni.chooseVideo
-   uni.addPhoneContact
-   uni.startSoterAuthentication
-   uni.checkIsSupportSoterAuthentication
-   uni.checkIsSoterEnrolledInDevice
-   uni.saveImageToPhotosAlbum
-   uni.saveVideoToPhotosAlbum
-   uni.getLocation
-   uni.chooseLocation
-   uni.openLocation
-   uni.createMapContext
-   uni.getFileInfo
-   uni.getSavedFileInfo
-   uni.getSavedFileList
-   uni.removeSavedFile
-   uni.saveFile
-   uni.getImageInfo
-   uni.getVideoInfo
-   uni.getProvider
-   uni.login
-   uni.getUserInfo
-   uni.preLogin
-   uni.getUniverifyManager
-   uni.share
-   uni.requestPayment

#####  Components

-   ad
-   barcode
-   map

####  disagreeMode mode limit plus API

Do not use the following 5+ APIs in disagreeMode mode, otherwise it will affect the compliance detection of the app store!

| module name | restricted API calls |
| --- | --- |
| Device | plus.device.imei、plus.device.imsi、plus.device.uuid、plus.device.dial、plus.device.getInfo、plus.device.getOAID、plus.device.getVAID、plus.device.getAAID |
| Audio | plus.audio.getRecorder |
| Barcode | plus.barcode.scan、plus.barcode.getBarcodeById、plus.barcode.create |
| Bluetooth | plus.bluetooth.xxx Bluetooth related APIs are restricted and cannot be called |
| Camera | plus.camera.xxx Camera-related APIs are restricted and cannot be called |
| Contacts | plus.contacts.xxx Contact API is restricted and cannot be called |
| Fingerprint | plus.fingerprint.xxx Fingerprint identification related APIs are restricted and cannot be called |
| Gallery | plus.gallery.xxx Album related APIs are restricted and cannot be called |
| Geolocation | plus.geolocation.xxx Location-related APIs are restricted and cannot be called |
| Ibeacon | plus.ibeacon.xxx ibeacon related APIs are restricted and cannot be called |
| Io | plus.io.xxx io related APIs are restricted and cannot be adjusted |
| Maps | plus.maps.xxx Map-related APIs are restricted and cannot be called |
| Navigator | plus.navigator.createShortcut、plus.navigator.hasShortcut、plus.navigator.isSimulator、plus.navigator.isRoot |
| Oauth | plus.oauth.xxx Login-related APIs are restricted and cannot be called |
| Share | plus.oauth.xxx Login-related APIs are restricted and cannot be called |
| Payment | plus.payment.xxx Payment related APIs are restricted and cannot be called |
| Runtime | plus.runtime.install |
| Speech | plus.speech.xxx Speech recognition related APIs are restricted and cannot be called |
| Statistic | plus.statistic.xxx Statistics related APIs are restricted and cannot be called |
| Video | plus.video.createLivePusher, plus.video.LivePusher APIs related to push streaming are restricted and cannot be used |

###  Instruct the user to agree to the "Privacy Policy" agreement

When the user uses the basic function service in disagreeMode mode, the link may open the business function that uses the restricted API. At this time, you can call \[plus.runtime.showPrivacyDialog\](https://www.html5plus.org/doc/zh\_cn/runtime. html#plus.runtime.showPrivacyDialog) pops up a privacy policy agreement box, guiding users to agree to the privacy policy before using related business functions. The sample code is as follows:

```
var options = {
	success:function(response){
		console.log("success  " + JSON.stringify(response));
		if(response.code == 1) {
			// plus.runtime.restart();
		}else{
      // ...
    }
	},
	fail:function(response){
		console.log("fail  " + JSON.stringify(response));
	}
};
//Pop up the privacy policy agreement box to guide the user to agree to the privacy policy
plus.runtime.showPrivacyDialog(options);
```

\*\*Note: If map, push, Statistic is used in the project, or when loadNativePlugins is set to false, the user needs to call `plus.runtime.restart` to restart the application to take effect after choosing to agree to the privacy policy agreement! \*\*

###  common problem

####  How to deal with compliance issues after disagreeing with the privacy agreement

-   The project globally detects whether the restricted API is called. For the specific API, please refer to the current document. If the calling time needs to be restricted, the call can only be made after the privacy consent!
-   The uni native plug-in is used, this situation can be checked by the troubleshooting method, and a uni native plug-in is temporarily deleted! Packaged and re-launched for testing. You can also configure `loadNativePlugins` to not load uni native plugins when you disagree with the privacy policy.
-   Restricted components are used and cannot be used without agreeing to the privacy policy. Please solve by yourself to avoid the display of restricted components.
-   Using NJS to call the native API leads to non-compliance. Need to check on your own. Or provide a java call stack for customer service troubleshooting
-   If you use components, JS SDK, templates, etc. provided by the plugin market, you need to pay attention to whether restricted APIs are involved. Otherwise, it may not be available on the shelves.
-   Other unknown environments. Get the java call stack through the audit platform. Provided to customer service to determine the cause of the problem and solve the problem
