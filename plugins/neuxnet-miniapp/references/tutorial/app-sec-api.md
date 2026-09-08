---
title: "getSignature"
source_url: https://miniapp.neuxnet.com/tutorial/app-sec-api.html
---
In order to improve the security of the app, it is recommended to strengthen the installation package (such as Tencent, 360 and other reinforcement platforms). For apps with higher security requirements, it is recommended to use a commercial reinforcement solution. At the same time, you can also use the following security APIs to detect during the application runtime to enhance the security of the application.

###  getSignature

[plus.navigator.getSignature](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature) is used to obtain the signature of the app, which can determine whether the app has been re-signed.

The signature certificate is the only identifier for the identity of the app developer. If the program does not verify the signature certificate, it may be decompiled and repackaged and re-signed with another signature certificate. If the re-signed app can be started normally, it may cause the app to be counterfeited and pirated, affecting its legitimate income, and may even be added with phishing code, virus code, and malicious code, resulting in the leakage of user sensitive information or malicious attacks.

The uni-app project can be found in App.vue's application lifecycle \[onLaunch\](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7% 94%9f%e5%91%bd%e5%91%a8%e6%9c%9f) for verification, the example is as follows:

```
  onLaunch: function(inf) {
      console.log('App Launch');
// #ifdef APP-PLUS
      // signature certificate check
      var platform = uni.getSystemInfoSync.platform;
      var sign = plus.navigator.getSignature();
      if('android'==platform){   //Android平台
        var sha1 = 'baad093a82829fb432a7b28cb4ccf0e9f37dae58';  //修改为自己应用签名证书SHA-1值，是全小写并且中间不包含“:”符号
        if(sha1!=sign){
          //Exit the application if the certificate is incorrect
          plus.runtime.quit();
        }
      }else{    //iOS平台
        var md5 = 'a2e629f0ea915b4ed11e296a059c9a12';   //修改为自己应用Apple Bunld ID(AppID)的md5值
        if(md5!=sign){
          // Do not enter the application or loop pop-up prompt box
          console.log('应用被破坏，无法正常运行！');
          uni.showModal({
            title:'错误',
            content: '应用被破坏，无法正常运行！',
          });
        }
      }
// #endif
  }

```

> Tip: In order to prevent the js verification code from being decompiled and tampered with, it is recommended to put the signature verification code in a separate js file and configure [js/nvue file native confusion encryption](app-sec-confusion), or use apk for reinforcement processing

###  isSimulator

[plus.navigator.isSimulator](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator) is used to determine whether the current application is running in the simulator.

Because the iOS system cannot run on the simulator after being officially packaged by Apple, this situation generally does not exist; the Android system is open source, and the underlying code is open, so there are many Android simulators on the market, and this problem is more serious.

The emulator usually runs on a PC and can use some automated tools to automatically operate and use apps. In addition, the emulator is a virtual operating system, which may damage the security of the native system and lead to the leakage of user sensitive information.

The following example is in App.vue's application lifecycle \[onLaunch\](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f %e5%91%bd%e5%91%a8%e6%9c%9f) for verification, as follows:

```
  onLaunch: function(inf) {
      console.log('App Launch');
// #ifdef APP-PLUS
      // emulator check
      if(plus.navigator.isSimulator()){
          // pop up prompt box
          uni.showModal({
            title:'错误',
            content: '应用被不能运行到模拟器！',
            complete: ()=>{
              plus.runtime.quit();
            }
          });
      }
// #endif
  }
```

In actual projects, this information can be submitted to the business server for judgment. For example, login is not allowed in the simulator environment, etc., multiple attempts to log in in the simulator can temporarily block the account, and the manual customer can contact the user for verification, etc., which can be adjusted according to the business situation.

> Tip: In order to prevent the js verification code from being decompiled and tampered with, it is recommended to put the signature verification code in a separate js file and configure [js/nvue file native confusion encryption](app-sec-confusion), or use apk for reinforcement processing

###  isSetProxy

[plus.networkinfo.isSetProxy](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy) is used to determine whether a proxy is set in the current application network environment.

After the proxy is set, all data transmitted over the network will pass through the proxy server, which means that the proxy server may see all incoming content, resulting in leakage of user sensitive information and malicious attacks on business servers. Of course, in some enterprise internal network environments, in order to ensure security, it may be necessary to set up a proxy to access the public network. Developers need to consider this requirement to decide whether to restrict the normal operation of the application.

You can submit whether the current network environment uses a proxy when the user logs in. The sample code is as follows:

```
  function login() {
      //...
      //Get network proxy status
      var isProxy = plus.networkinfo.isSetProxy();
      if(isProxy){
        console.log("当前网络环境设置了代理!");
      }
      //...
  }

```

###  isRoot

[plus.navigator.isRoot](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot) is used to determine whether the device running the current application is rooted.

> Note: Only supported by iOS platform, not supported by Android platform

Root cracking (also called jailbreaking) is to use the vulnerabilities of the iOS system to crack the system security mechanism, so that any application can obtain system-level permissions, so that more flexible custom modifications can be made to the system, such as modifying fonts, modifying themes, and using some plug-ins etc. The iOS system has designed a sandbox mechanism to limit the application to only use its own data. After root cracking, the application can read and modify the data of any other application, which may lead to the leakage of user sensitive information, or even modify the data or code of other applications, malicious attacks. Normal App.

It is recommended to judge when the application is started. If it is running in a root cracked environment, it will prompt the user that it cannot be used normally. The uni-app project can be used in the application life cycle of App.vue \[onLaunch\](https://uniapp.dcloud.io/collocation/frame /lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f), for example:

```
  onLaunch: function(inf) {
      console.log('App Launch');
// #ifdef APP-PLUS
      //ROOT test
      if(plus.navigator.isRoot()){
          // pop up prompt box
          uni.showModal({
            title:'错误',
            content: '应用被不能运行到越狱或ROOT环境！',
            complete: ()=>{
              //The loop pops up the prompt box or the infinite loop causes the application to exit
            }
          });
      }
// #endif
  }
```

> Tip: In order to prevent the js verification code from being decompiled and tampered with, it is recommended to put the signature verification code in a separate js file and configure [js/nvue file native confusion encryption](app-sec-confusion), or use apk for reinforcement processing
