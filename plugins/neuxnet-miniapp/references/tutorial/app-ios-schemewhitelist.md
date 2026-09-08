---
title: "Set application access whitelist list"
source_url: https://miniapp.neuxnet.com/tutorial/app-ios-schemewhitelist.html
---
Since iOS9, the system security policy has been updated, adding controls on user privacy and prohibiting scanning of system information, limiting the application's access to the scheme protocol. The schemes registered by other apps need to be added to the application access whitelist (LSApplicationQueriesSchemes) to achieve the following functions:

-   Check whether other apps are installed through the scheme, if not added to the whitelist, the detection result is not installed (even if the app is already installed)
-   Call other apps through the scheme protocol. If they are not added to the whitelist, a prompt box will pop up. The app can be launched only after the user confirms it. After adding to the whitelist, the app can be launched directly without user confirmation.

**Notice**  
For iOS15 and above, each application can only be configured with a maximum of 50 whitelists. If the whitelist exceeds 50, the whitelist will be invalid. When configuring the whitelist, you need to pay attention to the following issues:

-   The third-party SDK (such as WeChat login) used by some modules needs to add a whitelist. The whitelist added by the third-party SDK has a higher priority than the whitelist configured in manifest.json
-   The uni native plugin may also add a whitelist. The whitelist added by the uni native plugin has a higher priority than the whitelist configured in manifest.json

###  Set application access whitelist list

####  Visual interface configuration

![](https://native-res.dcloud.net.cn/images/uniapp/ios/chemewhitelist.png)

**Note: Multiple whitelists are separated by ","**

> Tip: If the visual interface cannot be edited, please switch to the "source view" configuration

####  Source view configuration

Open your project's manifest.json file and switch to "Code View"

-   uni-app project Add the urlschemewhitelist node data under "app-plus"->"distribute"->"ios" in the manifest.json file as follows:

```
"plus": {  
"distribute": {  
    "ios": {  
        "urlschemewhitelist": "baidumap,iosamap",  
        //...  
    },  
    //...  
},  
//...  
},  
//... 
```

-   5+ App/Wap2App projects Put the above urlschemewhitelist node data under the "plus"->"distribute"->"apple" node of manifest.json

**hint**

> ```
> "urlschemewhitelist": ["baidumap","iosamap"]
> ```
> 
> Cloud packaging is also compatible and effective, but cannot be edited in the visual interface.

**Notice**

-   After configuration, the cloud package must be submitted to take effect. Please use the \[custom debugging base\] when the real machine is running (https://ask.dcloud.net.cn/article/35115)
-   For offline packaging, please modify the value of the `LSApplicationQueriesSchemes` field in the Info.plist file directly in the XCode project

###  Cloud packaging adds application access whitelist by default

In order to facilitate developers to call some commonly used third-party applications, cloud packaging has added the following whitelists by default

```
weixin
wechat
mqq
weibosdk2.5
weibosdk
mqqapi
mqzone
sinaweibo
sinaweibohd
mqqopensdkapiV3
mqqwpa
mqqopensdkapiV2
mqqOpensdkSSoLogin
qqmap
baidumap
iosamap
openApp.jdMobile
taobao
hbuilder
pinduoduo
imeituan
tmall
dianping
vipshop
yanxuan
suning
kaola
snssdk32
shark.video
wbmain
cydia
streamapp
kwai
pptv
bilibili
kugouURL
qqnews
zhihu
doubanradio
wccbyihaodian
ctrip
kuaikanmanhua
ntesopen
yddict
shanbay
gugutouchmanga
bobo
wtloginmqq2
qrxs
mailmaster
jcnhers
lightsky
gaeagj
yixin
ydcourse
awemesso'
```

**Notice**  
The application access whitelist added by default will not affect any function of the application. When the number of whitelists configured by the developer exceeds 50, the whitelist added by default will become invalid.
