---
title: "Handling principles of security vulnerability risk issues"
source_url: https://miniapp.neuxnet.com/tutorial/app-sec-android.html
---
Recently, we received feedback from developers that the uni-app/5+ App project was packaged as an Android platform App and submitted to security platforms such as Tencent Cloud, Baidu Cloud, and Ai Encryption. The vulnerability risk was detected. We have been continuously following up on the feedback vulnerability risk. And actively looking for solutions to fix.

First of all, we need to understand that the vulnerability risk does not mean that there is a real security vulnerability, such as [WebView remote code execution vulnerability](#webview_jsinterface), which only exists in Android4.2 and below versions. At present, HBuilderX found that the minimum required version of the App is Android4.4; for example [Export risk of Activity, Service, Receiver and other components](#export), some function-dependent components must be set to be exported, in fact, there is no security problem. The security platform will list all possible vulnerabilities or risks, and many security issues may be false positives or exaggerated hidden dangers of security vulnerabilities.

**Therefore, the basic solution to the problem of vulnerability risk is to use `APK reinforcement`, and Tencent reinforcement platform is recommended in the domestic market**

If the hardening still cannot solve the problem, or the security platform requires testing before hardening, please post feedback on the [official forum ask](https://ask.dcloud.net.cn/explore/) , and add the topics as "Security Vulnerability", "Security Test", upload the complete security test report and the tested apk file.

###  Handling principles of security vulnerability risk issues

**For the feedback of security vulnerabilities, we will give priority to solving high-risk and medium-risk problems according to the risk level** For low-risk issues, in theory, the security quality of the application will not be affected, so low-risk security vulnerabilities are usually not addressed.

![](https://native-res.dcloud.net.cn/images/uniapp/security/android/dcloud.png) ![](https://native-res.dcloud.net.cn/images/uniapp/security/android/third.png)

-   Problems with DCloud code We will solve such problems as soon as possible, or provide relevant configuration
-   Problems with 3rd party SDK code Since there is no source code of the third-party SDK, we cannot modify the risks and vulnerabilities of the third-party SDK. It is recommended to choose whether to use the corresponding function module to avoid it according to the actual situation. At the same time, developers are also required to actively feedback to relevant platforms to provide SDKs to fix vulnerability risks. We will pay attention to the updates of the third-party SDKs and update the corresponding functional modules in time.
-   Problems with uni native plugin code The source code of the uni native plug-in is maintained by the plug-in author, and you need to contact the plug-in author to solve it

####  HBuilderX 3.1.14 version fixes security related issues

-   Fixed known `WebView File Domain Same Origin Policy Bypass Vulnerability` issue
-   Fixed the known `Android platform WebView control cross-domain access high-risk vulnerability` problem
-   Fixed the known `Webview bypass certificate verification vulnerability` problem, it needs to be configured to take effect
-   Fixed the known `Android hostname\certificate weak verification risk` problem, which needs to be configured to take effect

###  Solutions to common security breach risks

The following are some common risk vulnerability solutions

####  Webview bypass certificate verification vulnerability and Android hostname\\certificate weak verification risk

**Repair plan** HBuilderX 3.1.14+ version adds untrustedca node configuration whether to allow the use of untrusted certificates. In the project manifest.json, configure "untrustedca" as "refuse" under the "app-plus"->"ssl" node. The example is as follows:

```
 "app-plus": {  //5+ App项目对应节点名称为"plus"  
        "ssl": {  
            "untrustedca": "refuse"  
        },  
        // ...  
    }

```

Untrustedca attribute value range description:

-   "accept"  
    Accept this untrusted certificate to continue access;
-   "refuse"  
    Reject this untrusted certificate and stop access;
-   "warning"  
    A warning prompt box pops up to remind the user that it is up to the user to determine whether to continue the access, only for internal webview requests.

####  Activity, Service, Receiver and other components export risks

**Risk description** APP's Activity, Service, Receiver and other components can be set in AndroidManifest.xml through the configuration attribute android:exported It is private (false) or public (true). When it is set to public, the component is considered to be exported and can be accessed by any component of any other program. The exported components may be maliciously called by third-party apps, may return private information to malicious apps, and cause data leakage; may cause app crashes, resulting in denial of service and other vulnerabilities.

**Repair plan** HBuilderX 3.1.14+ has set all the components in the code managed by DCloud that do not need to be accessed externally as private (that is, the android:exported attribute value is set to false), and only the components that need to be accessed externally, such as the App entry Activity ( io.dcloud.PandoraEntry) is set to public.

In addition, it should be noted that some third-party SDKs will set their components to be exported because of their functions, as follows:

-   WeChat SDK When using WeChat sharing, login, and payment modules, components such as WXEntryActivity and WXPayEntryActivity will be set to be exported due to SDK functions.
-   Gentui SDK The UniPush module uses a push SDK, and the internal functions involve components such as CustomGTService, PushReceiver, GActivity, and NotificationServic, which all require external export.

> Tip: If your project fails the security check due to the export risk of the third-party SDK components, you can only use the related modules

####  Application signature unverified risk

**Risk description** The signature certificate is the only identifier for the identity of the app developer. If the program does not verify the signature certificate, it may be decompiled and repackaged and re-signed with another signature certificate. If the re-signed app can be started normally, it may cause the app to be counterfeited and pirated, affecting its legitimate income, and may even be added with phishing code, virus code, and malicious code, resulting in the leakage of user sensitive information or malicious attacks.

**Repair plan** HBuilderX3.0.0+ version adds [plus.navigator.getSignature](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature) method to obtain the SHA-1 fingerprint of the Android platform signature certificate information, and verify the judgment when the application starts or runs.

It can be checked regularly during the running of the application. The following is the application life cycle of the uni-app project in App.vue \[onLaunch\](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba% 94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f), for example:

```
  onLaunch: function(inf) {
      console.log('App Launch');
// #ifdef APP-PLUS
      // signature certificate fingerprint verification
      var sha1 = 'baad093a82829fb432a7b28cb4ccf0e9f37dae58';  //修改为自己应用签名证书SHA-1值，是全小写并且中间不包含“:”符号
      if(sha1!=plus.navigator.getSignature()){
        //Exit the application if the certificate is incorrect
        plus.runtime.quit();
      }
// #endif
  }

```

> Tip: In order to prevent the js verification code from being decompiled and tampered with, it is recommended to put the signature verification code in a separate js file and configure [js/nvue file native confusion encryption](app-sec-confusion), or use apk for reinforcement processing

####  APK can be decompiled to obtain source code risk

**Risk description** The native APK packaged as an App can be decompiled to obtain the Java source code.

**Repair plan** To reinforce the APK, it is recommended to use the Tencent reinforcement platform.

####  WebView Remote Code Execution Vulnerability

**Risk description** This vulnerability can be used to achieve remote arbitrary code execution attacks based on client capabilities. WebView remote code execution vulnerability triggering prerequisites:

1.  Use the addJavascriptInterface method to register a Java object that can be called by JavaScript
2.  Use WebView to load external web pages or local web pages
3.  The Android system version is lower than 4.2.

**Repair plan** The Android platform that HBuilderX publishes to the App supports at least Android 4.4, that is, minSdkVersion is greater than or equal to 19. That is to say, this vulnerability does not exist in Android4.4 and above. If your project is configured with minSdkVersion lower than 19, please refer to \[https://ask.dcloud.net.cn/article/193\](https:/ /ask.dcloud.net.cn/article/193) modified.

####  Key Hardcoding Vulnerability

**Risk description** When the application encrypts and decrypts, it uses the key hard-coded in the program. The attacker can easily decrypt the APP communication data by obtaining the key through decompilation.

**Repair plan** This problem has been fixed in HBuilderX 3.1.14+ version, and all the keys used in the internal logic have been obfuscated and encrypted.

####  SO file crack risk vulnerability

**Risk description** The SO file is the dynamic link library file contained in the APK. Android uses the NDK technology to compile the core code implemented by the C/C++ language into the SO library file for the Java layer to call. The cracked SO file may lead to the disclosure of the core functional codes and algorithms of the application. Using core functions and algorithms, attackers can easily capture sensitive client data and decrypt it, resulting in user privacy leakage or direct property loss

**Repair plan** It is recommended to use a professional security hardening platform to harden and protect the SO file in the APK

####  Strandhogg exploit

**Risk description** What makes StrandHogg unique is that it doesn't require rooting to enable sophisticated attacks, it exploits a weakness in Android's multitasking system to carry out a powerful attack that allows malicious apps to masquerade as any other app on the device program. The exploit is based on an Android control called "taskAffinity" that allows any application, including malicious applications, to freely adopt any identity it desires in the multitasking system.

**Repair plan** The vulnerability has been fixed in the 2020.4.1 security patch (covering Android 8.0/8.1/9.0+). Because it has been blocked by the system patch. In theory, this vulnerability will not pose a threat to mobile devices with higher version systems. However, there is no solution to completely circumvent this vulnerability in app client development. It is recommended to configure `android:taskAffinity=""` for each testing platform, but it is only a temporary solution. However, this solution will cause the problem that the task stack window becomes two when the application runs to the android11+ system device. Due to a bug in the `android:taskAffinity=""` configuration! So we don't configure it this way by default. But there are cloud packaging configuration options for developers. It is up to the developer to decide whether to temporarily block the vulnerability. details as follows:

-   Please use HX3.3.10+ version. Configure `hasTaskAffinity` in the project's manifest.json according to the app type. true means to configure `android:taskAffinity=""`, false not to configure. Default is false
-   **uni-app** Please fill in the manifest.json of the project as follows.

```
 "app-plus" : {
	 "distribute" : {
		 "android" : {
			 ...
			 ...
			 "hasTaskAffinity": true
		 }
	 }
 }
```

-   **5+/web2app** Please fill in the manifest.json of the project as follows.

```
"plus" : {
	"distribute" : {
		"google" : {
			...
			...
			"hasTaskAffinity": true
		}
	}
}
```
