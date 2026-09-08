---
title: "Configure the js/nvue file to be obfuscated"
source_url: https://miniapp.neuxnet.com/tutorial/app-sec-confusion.html
---
The installation package of the app can be decompressed. Front-end resources are generally stored in clear text in the installation package. In order to prevent the leakage of sensitive information after decompression, security processing is required.

As a result, DCloud provides native obfuscation of js/nvue files on the App side. 5+ App/Wap2App supports native obfuscation of specified js. uni-app supports native obfuscation of specified nvue files.

The original obfuscated installation package, after decompression, sees garbled characters.

But need to pay attention:

1.  There is no absolute security, very important information should be stored on the server instead of the front end
2.  Decryption of resource code at runtime affects execution performance. All-inclusive obfuscation is not recommended, just select individual files that need to be protected for processing
3.  The wgt package produced by the uni-app project does not support native obfuscation encryption (even if the configuration does not take effect), it is supported after HBuilderX 3.1.0+
4.  In order to ensure the security of encrypted data, the encryption algorithm and key are not disclosed to the public, so offline packaging cannot support native obfuscation encryption, nor does the standard base or custom base run on a real machine. support)

The specific usage is as follows:

###  Configure the js/nvue file to be obfuscated

Open the manifest.json file, switch to the "source view", and configure according to different project types.

####  uni-app project

The js of uni-app runs in the independent jscore, not in the webview, so it is not limited by the native obfuscation that the iOS platform WKWebview does not support. The js in the vue page of uni-app is compiled into a large js file as a whole. After it is compiled, it is no longer the vue source code, but it is not garbled. Obfuscation of this uniform large file can affect performance. So uni-app only supports independent obfuscation of nvue/js files.

-   vue page HBuilderX2.6.3+ version [v3 compiler](https://ask.dcloud.net.cn/article/36599) supports native obfuscation of independent js files, developers can write the js code to be protected into independent js In the file, use the import reference in the vue page; if this js is also referenced by the nvue page import, the nvue page also needs to configure native obfuscation to be effective. In addition, main.js can also be natively obfuscated. The old version does not support the native obfuscation of vue pages, and developers can only write the js code to be protected into the nvue file for protection.
-   nvue page HBuilderX 2.3.4+ version supports native obfuscation of nvue files. If the nvue page introduces external js files, it will be obfuscated natively. But if the js is also referenced by other unencrypted files, the js will still be exposed in the installation package.
-   Vue page and nvue page use data or methods in encrypted js at the same time (HBuilderX2.6.3+ version v3 compiler) Configure the js encryption, reference the js in App.vue, and assign the data or methods in the js to the global object, such as globalData, in vue and nvue, you can access the shared data or methods by accessing getApp, no need to configure the nvue page encryption.

If you want to publish multiple terminals, the js to be protected is best written in the conditional compilation of app-plus, otherwise it will not be natively obfuscated if it is published to other terminals.

**HBuilderX2.3.4 version, the uni-app project supports native obfuscation of nvue files**

Add a list of nvue files to confuse under the "app-plus" -> "confusion" -> "resources" node:

```
    "app-plus": { 
        "confusion": {  
            "description": "NVUE原生混淆",  
            "resources": {  
                "pages/barcode/barcode.nvue": {   
                },   
                "pages/map/map.nvue": {   
                }   
            }   
        },  
        // ...  
    }
```

The key under resource is the nvue file path (relative to the application root directory), and the value is an empty JSON object (curly brackets).

**Starting from HBuilderX2.6.3+, the uni-app project uses [v3 compiler](https://ask.dcloud.net.cn/article/36599) to support native obfuscation of js files referenced in vue pages**

Add a list of js files to obfuscate in manifest.json file:

```
    "app-plus": { 
        "confusion": {  
            "description": "原生混淆",  
            "resources": {  
                "common/test.js" : {}
            }   
        },  
        // ...  
    }
```

Reference the obfuscated js file in the vue file:

```
import test from '../common/test.js';
//test.join(); //Call the method in the reference js
```

\*\*Note: The webview component of the vue page in uni-app supports loading js files in the hybrid and static directories that are obfuscated with encryption, but the webview component of the nvue page does not support it. \*\*

####  5+ App/Wap2App projects

During the running of the application, it takes more time to restore the obfuscated files when the page is opened. To reduce the impact on the running speed, 5+App/wap2app only supports native obfuscation of js files. Add a list of js files to confuse under the "plus" -> "confusion" -> "resources" node:

```
    "plus": { 
        "confusion": {  
            "description": "JS原生混淆",  
            "resources": {  
                "js/common.js": {   
                },   
                "js/immersed.js": {   
                }   
            }   
        },  
        // ...  
    }
```

The key under resource is the js file path (relative to the application root directory), and the value is an empty JSON object (curly brackets).

**Starting from HBuilderX2.6.11+, using WKWebview on iOS11+ devices can also support JS native obfuscation** WKWebview uses a stricter security mechanism, using native obfuscated js files in html pages must use custom protocol header plus-confusion:// to refer to:

```
<script type="text/javascript" src="plus-confusion://../js/common.js"></script>
<!-- plus-confusion:// is followed by the js file path, relative to the path of the current html page -->
```

Add a list of js files to confuse under the "plus" -> "confusion" -> "resources" node of manifest.json. Add "supportWKWebview": true under the "confusion" node to support WKWebview. Since the custom protocol is only supported on iOS11 and above devices, it is recommended to configure the minimum version [deploymentTarget](https://ask.dcloud.net.cn/article/94#deploymentTarget) supported by the app to 11.0:

```
    "plus": { 
        "confusion": {  
            "description": "JS原生混淆", 
            "supportWKWebview": true, 
            "resources": {  
                "js/common.js": {   
                }
            }   
        },
        "distribute": {
            "apple": {
                //...
            }
        }
        // ...  
    }
```

**Note: WKWebview on iOS platform requires iOS11+ system to support native obfuscation. For the 5+App/wap2app project, if you want to be compatible with devices below iOS11, you can only force the use of UIWebview kernel, but Apple will abandon UIWebview ([Details](https://ask.dcloud.net.cn/article/36348) ). If you attach great importance to native confusion, in the long run, it is recommended to transform and upgrade uni-app**

###  Submit cloud package

![](https://native-res.dcloud.net.cn/images/uniapp/security/confusion.png)

\*\*Emphasis again: In order to ensure the security of encrypted data, the encryption algorithm and key are not disclosed to the public, so offline packaging cannot support native obfuscation. \*\* Developers who are familiar with native can store sensitive information in native code, and then interact with js.

For developers with high security requirements, in addition to encrypting the front-end js, they should also reinforce the entire apk again. There are many reinforcement services available on the market, such as 360 reinforcement, love encryption, etc.
