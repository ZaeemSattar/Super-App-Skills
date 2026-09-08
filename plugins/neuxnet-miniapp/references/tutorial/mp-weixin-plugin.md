---
title: "What is an applet plugin"
source_url: https://miniapp.neuxnet.com/tutorial/mp-weixin-plugin.html
---
> This document is intended to introduce how to reference and use Mini Program plug-ins in uni-app. If you want to know how to compile a uni-app project into a Mini Program plug-in, please refer to the document: \[Publish as Mini Program Plug-in\](https://miniapp.neuxnet.com/collocation/miniprogram -plugin)

####  What is an applet plugin

The applet plug-in is different from the applet custom component.

The applet custom component is to import the component source code into the project and release it as a whole.

Mini Program plug-ins are independent plug-ins developed by third-party plug-in authors in accordance with the specifications of small program manufacturers such as WeChat, and are directly published to the plug-in platform of Mini Programs. The developer only configures the plug-in id in his applet project, and does not import the plug-in source code into the project. During runtime, it is dynamically loaded by the applet engine. The developer cannot obtain the source code of the imported third-party applet plug-in.

It may be called slightly differently in different Mini Programs. WeChat applet and Alipay applet are called `plug-in`, and Baidu applet is called `dynamic library`. For convenience, they are collectively referred to as plugins below.

**Reference Documentation**

-   [WeChat Mini Program Plugin](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)
-   [Alipay Mini Program Plugin](https://opendocs.alipay.com/mini/plugin/plugin-usage)
-   [Baidu Mini Program Dynamic Library](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)
-   [QQ Mini Program Plugin](https://q.qq.com/wiki/develop/miniprogram/frame/plugins/)

####  Introducing plugins in uni-app

Declare the plug-ins used in the fields corresponding to each platform in `manifest.json`. For specific configuration, refer to the development documents of the plug-ins used.

**CODE EXAMPLE**

```
// WeChat applet
"mp-weixin": {
  "plugins": {
    "myPlugin": {
      "version": "1.0.0",
      "provider": "wxidxxxxxxxxxxxxxxxx",
      "export": "index.js"
    }
  }
}

// Alipay applet
"mp-alipay": {
  "plugins": {
    "myPlugin": {
      "version": "*",
      "provider": "2019235609092837",
      "export": "index.js"
    }
  }
}

// Baidu applet
"mp-baidu": {
  "dynamicLib": {
    "myPlugin": {
      "provider": "TheUniqueNameOwnedByThisDynamicLib"
    }
  }
}
```

**Notice**

-   `HBuilder X 3.2.13+` supports the `export` field, that is, the applet is exported to the plugin. Currently only WeChat applet and Alipay applet are supported

####  use in the page

To use the components contained in the plugin in the page, you need to configure the `usingComponents` or `usingSwanComponents` of the corresponding platform under the `style` node of the corresponding page in `pages.json`, for example:

Take `"hello-component": "plugin://myPlugin/hello-component"` as an example, `key` (`hello-component` before the colon) is the component name used in the page.

`value` is divided into three sections, `plugin` is the protocol (`dynamicLib` in the Baidu applet), `myPlugin` is the name of the plugin, that is, the name when the plugin is introduced, and `hello-component` is the name of the component exposed by the plugin.

```
// WeChat applet
{
  "path": "pages/index/index",
  "style": {
    "mp-weixin": {
      "usingComponents": {
        "hello-component": "plugin://myPlugin/hello-component"
      }
    }
  }
}

// Alipay applet
{
  "path": "pages/index/index",
  "style": {
    "mp-alipay": {
      "usingComponents": {
        "hello-component": "plugin://myPlugin/hello-component"
      }
    }
  }
}

// Baidu applet note that usingSwanComponents is not usingComponents (HBuilder 3.1.0+ can be written as usingComponents)
{
  "path": "pages/index/index",
  "style": {
    "mp-baidu": {
      "usingSwanComponents": {
        "my-special-list": "dynamicLib://myDynamicLib/special-list"
      }
    }
  }
}

```

####  Introduce plugin code package into subpackage

Alipay applet and Baidu applet do not support the introduction of plug-ins into subcontracts. In addition, if the project uses subcontracting, plug-ins cannot be used in the Alipay applet. The content in this section is only for WeChat Mini Programs.

If the plugin is only used in one sub-package (the same plugin cannot be referenced by multiple sub-packages at the same time), it can be configured into the sub-package separately, so that the plugin will not be loaded with the main package, the developer can add it in \`\`pages.jsonDeclare plugins in [subPackages](../collocation/pages.md#subpackages)

**CODE EXAMPLE**

```
"subPackages": [{
    "root": "pagesA",
    "pages": [{
        "path": "list/list"
    }]
    "plugins": {
        "pluginName": {
            "version": "1.0.0",
            "provider": "wxidxxxxxxxxxxxxxxxx"
        }
    }
}]
```

**Restrictions on using plugins in subpackages**

-   The plugin can only be used within this subpackage;
-   The same plugin cannot be referenced by multiple subpackages at the same time;
-   You cannot jump directly to the plug-in page in the sub-contract from the page outside the sub-contract. You need to jump to the non-plug-in page in the sub-contract first, and then jump to the plug-in page in the same sub-contract.

####  Possible problems

-   Some plugins may require some permissions to run properly, please configure `permission` in `mp-weixin` in `manifest.json` \[see details\](https://developers.weixin.qq.com/miniprogram /dev/reference/configuration/app.html#permission)
-   The WeChat development tool prompts "plug-in version does not exist", it may be that the version used in the sample code of the plug-in development documentation does not exist, please change the version at the declaration of the plug-in
