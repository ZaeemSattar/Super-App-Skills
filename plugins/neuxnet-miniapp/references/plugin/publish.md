---
title: "front-end components"
source_url: https://miniapp.neuxnet.com/plugin/publish.html
---
DCloud has an active plugin market, [https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/) , and provides mechanisms such as monetization and evaluation. Developers are welcome to provide plugins for the plugin marketplace. Many excellent plug-in authors can sell tens of thousands of plug-ins every month. (Only uniCloud plug-ins and native plug-ins support payment, other types of plug-ins cannot set prices)

When creating plugins, plugin authors should pay attention to the following points:

-   It is recommended to use scss preprocessing on the front end and refer to the variable definitions in [uni.scss](https://github.com/dcloudio/uni-ui/blob/master/uni.scss) to keep the style of each plugin uniform and facilitate plugins Users develop apps with the same overall style by building blocks
-   Follow the plugin directory specification, the most important of which is to determine the plugin ID, which is explained in detail below.
-   The plugin package does not need to include the unpackage directory
-   The plugin package should not contain version control related files and directories such as .git, .svn, etc.

Plugin ID (original "plugin usage name") naming convention:

1.  The format is: 'author ID-plugin name', example: 'xiaoming-tag', where author ID and plugin name can only contain English and numbers
2.  The author ID is customized by the plugin author. Keywords such as 'DCloud' and 'uni' cannot be used. The length must be at least 2 characters.
3.  The plug-in name needs to express the function of the plug-in intuitively, such as: tag, button, etc.

Since HBuilderX 3.1, `uni_modules` has been added, which is an important modular solution for the uni ecosystem. For details, see: [https://uniapp.dcloud.net.cn/uni\_modules](https://uniapp.dcloud.net.cn/uni_modules)

The plugin market is divided into various plugins:

##  front-end components

Let's take the tag component developed by Xiaoming (plugin ID: xiaoming-tag) as an example, when uploading the plugin market, the directory structure requirements are as follows:

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-01.png)

In order to keep the code concise, only the necessary files and directories need to be included when uploading the plugin.

If the component depends on the third-party components, the three-party components need to be packaged and uploaded together; if "xiaoming-tag" depends on the icon component (xiaohong-icon) developed by Xiaohong, when publishing the "xiaoming-tag" plugin, the directory structure requirements are as follows:

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-02.png)

Tips：

-   Common components, nvue components, and directory structure requirements are the same
-   The first-level directory of the applet component, the name needs to be changed from components to wxcomponents , other structure requirements are the same
-   Cannot include manifest.json, pages.json, App.vue, main.js and other files in the root directory

##  uni-app front-end template

###  vue/nvue page template

Let's take the setting template (xiaoming-setting) developed by Xiaoming as an example. When uploading the plugin market, the directory structure requirements are as follows:

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-03.png)

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-04.png)

When HBuilderX 3.5.0+ supports plug-ins to import projects, it supports to merge pages and route them to the project's pages.json. [See details](uni_modules#pages-init)

Tips：

-   Vue page template and nvue page template directory structure requirements are the same.
-   When packaging a page template, you need to include manifest.json, pages.json and other files.

###  uni-app front-end project template

Tips：

-   The `unpackage` directory does not need to be included when the project template is packaged;
-   The manifest.json file needs to be included when the project template is packaged. Appid is not allowed in manifest.json, including third-party appid such as DCloud appid or WeChat;
-   If the template contains uniCloud-related cloud function directories, such as cloudfunctions-aliyun and cloudfunctions-tcb, please select "uniCloud" -> "Integrated Project Template". If you don't use cloud functions, you should remove the cloudfunctions related directory from the plugin package.

##  JS SDK

When developing the JS SDK, there is no special requirement for the directory structure, just name the js file as the plugin ID, for example: xiaoming-md5.js

Tips：

-   Cannot include manifest.json, pages.json, App.vue, main.js and other files in the root directory

##  Native SDK

Native SDK, that is, uni native plug-in, needs to be developed and implemented in the Andorid/iOS native environment. Please refer to the following tutorials:

-   [uni native plugin development guide](https://nativesupport.dcloud.net.cn/NativePlugin/README)
-   \[Android platform uni native plug-in development\] (http://nativesupport.dcloud.net.cn/NativePlugin/course/android)
-   [iOS platform uni native plugin development](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios)

Compressed package format requirements: After opening the zip, the root directory must be the plugin id directory, and the secondary directory is the ios, android subdirectory and package.json. For details, refer to \[uni native plugin package format\](https://nativesupport.dcloud.net. cn/NativePlugin/course/package)

##  HBuilderX plugin

The HBuilderX plugin is installed in the HBuilderX tool. It is a plug-in for the editor, not a plug-in for the mobile app. For detailed development tutorials, see: [http://hx.dcloud.net.cn/](http://hx.dcloud.net.cn/)

##  uniCloud

###  Cloud function template

Cloud function templates have no special requirements for file naming, but when creating a plug-in zip package, you need to pay attention to the following points:

-   When the template contains one or more cloud functions, you cannot just put the cloud function directory in the plug-in, but need to start from the project root directory completely. Such as uniCloud/cloudfunctions/cf123. uniCloud can accept -aliyun or -tcb suffix (the two directories of Aliyun and Tencent Cloud can also exist at the same time);
-   The valid entry file for cloud functions is index.js, and the plugin package must contain at least one file named after this.
-   For account management, please use [uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)

If you upload a paid cloud function plugin, you must select the cloud function you want to encrypt, otherwise plugin trial users can use your plugin indefinitely through the trial process without paying.

Define the encrypted cloud function. In order to unify the standard with uni\_modules and discard the original encryptlist.json, you need to add package.json to the root directory of the plugin, and configure the files to be encrypted in uni\_modules->encrypt, such as:

```
{
	"uni_modules": {
		"encrypt": [ // 配置要加密的文件，为插件包中真实存在且相对根目录的文件路径，需注意uniCloud目录的后缀需与项目一致
			"uniCloud-aliyun/cloudfunctions/function/index.js" 
		],
	}
}
```

The js files of cloud functions and public modules under uniCloud/cloudfunctions can be flexibly configured in the encrypt array, which is more flexible than configuring the entire cloud function or public module in the original encryptlist.json file.

After defining the cloud function content to be encrypted, upload the plug-in, and the DCloud plug-in market will automatically encrypt these cloud functions. When the plug-in user tries the plug-in, he cannot view the source code of these cloud functions, and only during the trial period (usually 7 days), these encrypted cloud functions can be run on the service space he deployed. After the trial period, these cloud functions will be Automatically lapse.

Even if the plug-in user purchases the normal authorized version of the plug-in, he cannot see the source code of these encrypted cloud functions, but these cloud functions can run normally on the service space bound when he purchased them. and cannot be uploaded to other service spaces.

If the author of the plug-in uploads the plug-in, and the authorized version of the source code is provided at the same time, and the user of the plug-in has purchased the authorized version of the source code, all the source code of the plug-in can be obtained.

If the plug-in author provides an authorized version of the source code, it is necessary to pay attention to the notice of pending contract signing in time. When the intended buyer signs the electronic contract, DCloud will notify the plug-in author via SMS, reminding the plug-in author to also sign the electronic contract.

For the difference between the ordinary authorized version and the source code authorized version, please refer to: [https://ask.dcloud.net.cn/article/38040](https://ask.dcloud.net.cn/article/38040)

> Starting from HBuilderX 3.2.0, when a paid plug-in for cloud-integrated project template or cloud-integrated page template is released, the front-end js file also supports encryption. The setting method is similar to the cloud function. Define the file path in uni\_modules->encrypt, like:

```
{
	"uni_modules": {
		"encrypt": [
			"js_sdk/index.js",
			"components/demo/demo.js"
		],
	}
}
```

\*\*Currently, only the js file encryption of paid plug-ins is supported, vue and nvue files cannot be encrypted, and the core business logic is recommended to be written in js. \*\* \*\*If the cloud-integrated project is published and includes uni\_modules, the files in the uni\_modules directory will not be encrypted. The uni\_modules directory should be published as an independent plug-in, and encryption configuration should be performed separately. \*\*

> If your plugin configuration contains confidential information, you want to protect these configurations from uploading. Reference: [uni\_modules plugin upload auxiliary script example](https://ext.dcloud.net.cn/plugin?id=5256)

###  Cloud integrated page template

Cloud integrated page template, if not `uni_modules`, it is a single-page template, and only one page can be placed. In the case of `uni_modules`, any number of pages can be placed.

In order to prevent conflicts with the existing code of the project when importing, pay attention to the following naming conventions:

-   Must include cloud function related directories (uniCloud/cloudfunctions), can include js\_sdk, pages, components, static and other directories
-   The name of cloud functions and public modules needs to contain "-", that is, there is a plugin ID prefix.
-   Subdirectories and file names under js\_sdk, components, static and other directories need to contain "-"
-   Cannot include manifest.json, App.vue, main.js and other files in the root directory
-   To register pages into the project's pages.json, refer to [uni\_modules documentation](uni_modules#pages-init)

###  Front and back project template

It is basically the same as the uni-app front-end project template directory structure, but must include uniCloud related directories (uniCloud-aliyun, uniCloud-tcb)

###  uniCloud admin plugin

After using the [uniCloud admin basic framework](https://ext.dcloud.net.cn/plugin?id=3268) , you can further integrate the admin plugin written by the plugin author to enrich the functions of your own admin system. Plugin authors can also submit plugins according to this document, and select `Admin Plugins` in the `uniCloud` category on the upload and release page of the Plugin Marketplace.

Due to the long document, please refer to: \[uniCloud admin Plugin Development Guide\](https://uniapp.dcloud.net.cn/uniCloud/admin?id=admin-%e6%8f%92%e4%bb%b6% e5%bc%80%e5%8f%91)

###  DB Schema and validation functions

It is mainly used to submit data table schema and verification function, so it must include uniCloud-aliyun/database or uniCloud-tcb/database directory

##  pages\_init

Documentation migrated to [uni\_modules documentation](uni_modules#pages-init)

##  Notice

-   Plug-ins under the two categories of uni-app native SDK and web projects need to be reviewed before they take effect.
-   The plugin cannot be removed by itself. If you want to remove it, please send an email to service@dcloud.io.

**Note that the compressed package is in standard zip format, do not rename other formats such as rar to zip**
