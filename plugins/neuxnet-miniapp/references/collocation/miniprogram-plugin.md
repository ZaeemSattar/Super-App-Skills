---
title: "Plugin directory structure"
source_url: https://miniapp.neuxnet.com/collocation/miniprogram-plugin.html
---
> This document is intended to introduce how to compile a Mini App project into an applet plugin. If you want to know how to reference and use applet plugins in Mini App, please refer to the document: \[Using applet plugins\](https://miniapp.neuxnet.com/tutorial/mp- weixin-plugin)

The applet plug-in specification is defined by the applet manufacturer. A plug-in is a package of a set of js interfaces, custom components or pages, and is used to be embedded in the applet.

Mini App can not only develop a complete applet, but also compile it into a applet plug-in.

**Platform Difference Description**

| WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kuaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- |
| √ | √ ( `3.2.9+` ) | x | x | x | x | x |

**Notice**

1.  When developing `WeChat applet plugin`, the basic library version `1.9.6` began to support. (If the plugin includes pages, the base library version `2.1.0` is required.)
2.  When developing the `Alipay applet plug-in`, the Alipay IDE version is required to be 0.60 and above

####  Plugin directory structure

> Compile to WeChat applet plugin result

```
plugin
├── components               // 插件提供的自定义组件（可以有多个）
│   ├── hello-component.js
│   ├── hello-component.json
│   ├── hello-component.wxml
│   └── hello-component.wxss
├── pages
│   ├── hello-page.js        // 插件提供的页面（可以有多个）
│   ├── hello-page.json
│   ├── hello-page.wxml
│   └── hello-page.wxss
├── index.js                 // 插件的 js 接口
└── plugin.json              // 插件配置文件
```

####  plugin configuration file

> plugin.json is at the same level as pages.json in the Mini App project. All components, pages and js interfaces open to third-party applets must be declared in plugin.json

-   `mp-weixin`
    
    ```
    {
    	"publicComponents": {
    		"hello-component": "components/hello-component"
    	},
    	"pages": {
    		"hello-page": "pages/hello-page"
    	},
    	"main": "index.js"
    }
    ```
    
    The meaning of each configuration is as follows:
    
    -   `publicComponents`: List all custom components open to the applet.
    -   `pages`: List all pages open to the applet.
    -   `main`: The plugin's js interface for third-party applets.
-   `mp-alipay`
    
    ```
    {
       "publicComponents": {
         "hello-component": "components/hello-component"
       },
       "publicPages": {
         "hello-pages": "pages/hello-page"
       },
       "pages": [
         "pages/hello-page"
         "pages/index"
       ],
       "main": "index.js"
    }
    ```
    
    The meaning of each configuration is as follows:
    
    -   `publicComponents`: List all custom components open to the applet.
    -   `publicPages`: List all pages open to the applet.
    -   `pages`: List all the pages of the plugin (including pages that are open to Mini Programs and those that are not open to Mini Programs).
    -   `main`: The plugin's js interface for third-party applets.

**Notice**

1.  The `pages` item in `mp-weixin` has the same function as the `publicPages` item in `mp-alipay`
2.  The pages in `mp-alipay` for external use need to be declared in `pages`, array type

####  Compilation steps

-   Install the latest alpha version of the cli or the latest stable version. The latest version at the time of publication is: `2.0.0-alpha-32120210809004`.
-   Execute the command line: `yarn dev:mp-weixin -- --plugin test-plugin`.
-   Where `test-plugin` is the name of the compiled plugin package. `Project root directory\dist\dev\mp-weixin\test-plugin` is the executable applet plug-in code.
-   The `mp-alipay` platform plugin will be compiled and released later, please pay attention to the update log.

####  How to use plugins in your project

1.  宿主小程序是 `Mini App项目`，在 `manifest.json` 中配置相关信息即可，
2.  The host applet is the `Mini App project`. You can configure relevant information in `manifest.json`.
3.  宿主为原生小程序，在项目的 `app.json` 中配置即可：
4.  The host is a native applet, which can be configured in the `app.json` of the project:
    -   [mp-weixin configuration](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)
    -   \[mp-alipay config\](https://opendocs.alipay.com/mini/plugin/plugin-development#app.json%20%E9%BB%98%E8%AE%A4%E9%85%8D% E7%BD%AE)

####  Using conditional compilation in plugins

> Sometimes the project not only needs to be compiled into a plug-in, but also needs to be run as a normal applet, but some APIs are not applicable to both ends. In this case, you can use custom conditional compilation to distinguish them.

1.  To customize conditional compilation ([details](./package.md)), add the following configuration to `package.json`:
    
    ```
    "Mini App": {
      "scripts": {
        "mp-wx-plugin": {
          "title": "微信小程序插件",
          "env": {
            "UNI_PLATFORM": "mp-weixin"
          },
          "define": {
            "MP-WX-PLUGIN": true
          }
        },
        "mp-ali-plugin": {
          "title": "阿里小程序插件",
          "env": {
            "UNI_PLATFORM": "mp-alipay"
          },
          "define": {
            "MP-ALI-PLUGIN": true
          }
        },
      }
    }
    ```
    
2.  Use conditional compilation:
    
    ```
    // #ifdef MP-WX-PLUGIN
    /**
     * CODE
     */
    // #endif
    ```
    
3.  Execute the command when compiling: `yarn dev:custom mp-wx-plugin --plugin test-plugin`, you can write the script into `script`, and each execution is more simplified.
    
    ```
    {
    	"dev:mp-wx-plugin": "yarn dev:custom mp-wx-plugin --plugin",
    	"dev:mp-ali-plugin": "yarn dev:custom mp-ali-plugin --plugin"
    }
    ```
    

**Notice**

1.  The component is not used inside the plug-in. When it needs to be used in the host applet, it should be introduced and used in main.js, otherwise the unused plug-in will be lost after compilation. E.g:
    
    ```
    import helloList from '.../helloList';
    Vue.component('hello-list', helloList);
    ```
    
2.  The pages written in the plugin need to be filled in `pages.json`.
3.  If there are multiple `plugins` compiled by `Mini App` that need to run in the same applet, **do not have the same name**.
4.  Do not have special characters in the name, such as `\`. This name will be used to mount a method.
5.  `-` has been manually replaced with `_`, do not write other special characters.
6.  Each applet plugin has different support for each `api`. For details, please refer to the relevant description of the official applet documentation
