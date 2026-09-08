---
title: "uni\\_modules"
source_url: https://miniapp.neuxnet.com/plugin/uni_modules.html
---
#  uni\_modules

###  What is uni\_modules

`uni_modules` is the plug-in modular specification of uni-app (supported by HBuilderRX 3.1.0+), which is usually the encapsulation of a group of js sdk, components, pages, uniCloud cloud functions, public modules, etc. It is used for embedding in uni-app projects, and also supports direct encapsulation as project templates.

Plug-in developers can write a `uni_modules` plug-in just like developing a uni-app project, and upload it directly to the [plug-in market](https://ext.dcloud.net.cn/) in HBuilderX.

Plug-in users can find the `uni_modules` plugin that meets their needs in [Plugin Market](https://ext.dcloud.net.cn/) , and use HBuilderX 3.1.0+ to directly import it into their uni-app project. You can also directly right-click in HBuilderX to upgrade the plug-in later.

Compared with ordinary plug-ins, the `uni_modules` plug-in has stronger independence and independent directory structure, and can be released, updated and uninstalled more conveniently (HBuilderX 3.1.0+ provides a right-click menu for the `uni_modules` plug-in, and supports publishing, updating, installation dependency, etc.)

Compared with node\_modules (node.js module), the third party dependency of `uni_modules` defaults to the latest version during installation. Plug-ins are directly installed in the `uni_modules` directory without nesting. Of course, if developers want to fix a version of dependencies, they can include the third-party dependencies in their plug-in packages.

Why do we need to invent another `uni_modules` wheel after having `node_modules`?

1.  `node_modules` does not meet the needs of cloud integration. UniCloud's cloud functions, public modules, schema and various js\_sdk, components, pages and projects in the front end cannot be effectively integrated in the `node_modules` mode.
2.  `uni_modules` is provided in the form of paid and commercial plug-ins, and the DCloud plug-in market provides copyright protection. But `node_modules` does not support payment and copyright protection.
3.  `node_modules` is a developer-friendly mode that affects the performance of end users. To save trouble, developers nested `node_modules` layer by layer, resulting in an astonishing number of files. `uni_modules` Module nesting is not supported, and developers are encouraged to optimize package’s size
4.  `uni_modules` encourages developers to always use the latest version. And tools for version content comparison are provided in HBuilderX
5.  `node_modules` placing is also supported in `uni_modules`, without forced rejection.

What are the advantages of `uni_modules` compared with ordinary plugins in the plugin market?

1.  Support direct release, update and deletion in HBuilderX
2.  Support dependencies (configured in package.json)
3.  If the location of the plug-in file is uniform, it will not cause the problem of downloading a plug-in but not knowing how many files are written to the number of directories under the project. When deleting the plug-in, you can delete it with one click

###  Directory structure

####  uni\_modules for project plugins

If the `uni_modules` plugin is a project type plugin, you only need to put a package.json that conforms to the `uni_modules` specification in the root directory of the project.

Right-click on the package.json to update the project plugin or publish it to the plugin marketplace.

For example [uni-admin](https://ext.dcloud.net.cn/plugin?id=3268) , [uni-starter](https://ext.dcloud.net.cn/plugin?id=5057) , can be updated in this way.

####  uni\_modules for non-project plugins

If it is a plug-in of non-project type, such as component, js sdk, page template and cloud function, it needs to be placed in the `uni_modules` directory of the project.

At this time, the directory structure under the `uni_modules` directory is the same as the project structure of uni-app, as follows:

	
``uni_modules                                项目根目录下 └── [plugin_id] // 插件 ID     ├── uniCloud                           插件内的uniCloud内容会被虚拟合并到项目根目录的uniCloud中（注意：插件内的uniCloud目录，没有-aliyun,-tcb后缀）     ├── components                         符合vue组件规范的uni-app组件目录，支持easycom规范     ├── hybrid                             存放本地网页的目录，[详见](../component/web-view.md)     ├── pages                              业务页面文件存放的目录      ├── static                             存放应用引用静态资源（如图片、视频等）的目录，**注意：**静态资源只能存放于此     ├── wxcomponents                       存放小程序组件的目录，[详见](https://miniapp.neuxnet.com/frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)     ├── license.md                         插件使用协议说明     ├── package.json                       插件配置，必选(除此之外均`可选`)                               ├── readme.md                          插件文档     ├── changelog.md                       插件更新日志     ├── menu.json                          如果是uniCloud admin插件，可以通过menu.json注册动态菜单，[详见 menu.json 配置](https://miniapp.neuxnet.com/uniCloud/admin?id=admin-%e6%8f%92%e4%bb%b6%e5%bc%80%e5%8f%91)``
	

That is, the `uni_modules` directory is equivalent to duplicating the project structure of uni-app.

**Tips**

-   Files of pages.json, App.vue, main.js, manifest.json and uni.scss are not supported in the plug-in directory. If plug-in users need to modify the contents of these files, please elaborate in detail in the plug-in document (readme.md).
-   The plugin directory supports `pages_init.json`, which can easily register pages to the project's pages.json, [see below](#pages-init)
-   When referencing resources or jumping pages inside plug-ins, please use relative paths as much as possible.
-   The components directory in the plug-in also supports easycom specification. Plugin users can directly use the components meeting the easycom specification in the plug-in in the project. When there is an easycom component conflict in the project or plug-in, a prompt will be given during compilation and you can resolve the conflict by modifying the component directory and component file name.

In HBuilderX, if `uni_modules` contains the contents of the uniCloud directory, it will be displayed in uniCloud in the root directory of the main project by way of reference. A shortcut arrow will appear in the lower left corner of the icon in front of the file.

As shown in the figure below, there is a `uni_modules` named `uni-config-center` in the project, which contains a public module named `uni-config-center`. Therefore, under the common module directory common in the project root directory, there will also be an additional `uni-config-center`.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/576ee0d7-a473-4ee9-bd9e-f1afcbcbff6d.jpg)

Opening a file indicated by a reference icon in HBuilderX will open the original address.

###  Use uni\_modules plug-in

####  Download uni\_modules plugin

1.  Find the uni\_modules plugin in [Plugin Market](https://ext.dcloud.net.cn/)
2.  On the plug-in details page, the right side will indicate whether the plug-in supports uni\_modules, click`Use HBuilderX to import the plug-ins` ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/3f6e2c00-622c-11eb-bdc1-8bd33eb6adaa.png)
3.  Select the uni-app project to import ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/eb6722a0-622c-11eb-a16f-5b3e54966275.png)

**Tips**

-   uni\_modules supports the component easycom, and users can directly use the components meeting the easycom specification in the plug-in
-   Other resources, such as images and js, can be directly introduced and used according to the directory structure in the project. For example:

```
import {test} from '@/uni_modules/xx-yy/js_sdk/test.js'
```

-   If you want to use pages from uni\_modules, [see below](#pages-init)

####  Install uni\_modules plug-in dependencies

1.  When importing a plug-in, HBuilderX will automatically install all third-party dependencies of the current plug-in.
2.  You can also perform `Dependency of third-party plug-in installation` ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/eef13280-62d6-11eb-918d-3d24828c498c.png)

####  Update uni\_modules plug-in

1.  You can check and update the currently used plug-ins by right-clicking the `Update from the plug-in market` ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/ccb42320-622d-11eb-8ff1-d5dcf8779628.png)
2.  Compare plug-ins and confirm the updated content ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9069d370-62d6-11eb-a16f-5b3e54966275.png)

####  Uninstall uni\_modules plug-in

The uni\_modules plug-in directory is standalone. If you no longer need the plug-in, you can delete it directly.

**Tips**

-   Importing the uni\_modules specification plug-in requires HBuilderX 3.1.0+

###  Configuration

####  package.json

package.json must exist in every `uni_modules` plug-in and contains the basic information of plug-ins. The following is a detailed configuration description of package.json

```
{
    //Note that you cannot directly copy this code into the editor, and package.json currently does not support comments. The comments added in this paragraph are only used to explain the code.
    "id": "作者ID-插件英文名称", // 必填，插件ID，格式为：'作者ID-插件英文名称'，例如：'xx-yy'，其中作者ID和插件名称只能包含英文、数字，作者ID不能使用'DCloud'、'uni'等关键字
    "displayName": "插件显示名称", // 必填，用于展示在插件市场的显示名称
    "version": "1.0.0", // 必填，插件版本
    "description": "插件描述", // 必填，插件描述
    "keywords": [], // 必填，插件标签关键词，最多5个
    "repository": "github:user/repo", // 仓库地址
    "engines": { // HBuilderX/cli 最低兼容版本
        "HBuilderX": "^3.1.0"
    },
    "dcloudext": { // DCloud插件市场配置
      "category": ["前端组件", "通用组件"], // 必填， 插件市场分类
      "sale": { // 销售 （目前仅限uniCloud类插件）
          "regular": { // 普通授权版价格，单位为元，如果为免费插件，设置普通授权版价格为 0 即可。
              "price": "0.00"
          },
          "sourcecode": { // 源码授权版价格，单位为元
              "price": "0.00"
          }
      },
      "contact": { // 插件作者 QQ，方便管理员审核时与作者快速沟通。
          "qq": ""
      },
      "declaration": { // 隐私、权限及商业化声明
          "ads": "", //  必填，本插件是否包含广告，如包含需详细说明广告表达方式、展示频率，请如实填写，如不包含，可填“无”
          "data": "", // 必填，本插件采集的数据、发送的服务器地址、以及数据用途说明，请如实填写，如不采集任何数据，可填写“插件不采集任何数据”，如果使用的三方SDK需要采集数据，可填写“插件使用的 XX SDK会采集数据，详情可参考：https://other-sdk.com/"
          "permissions": "" // 必填，本插件需要申请的系统权限列表，请如实填写，如不需要任何权限，可填“无”
      },
      "npmurl":"" // npm 地址
    },
    "uni_modules": { // uni_modules配置
        "dependencies": [], // 依赖的 uni_modules 插件ID列表
        "encrypt": [ // 配置云函数，公共模块，clientDB Action加密
            "uniCloud/cloudfunctions/uni-admin/controller/permission.js" // 注意这里是真实的文件路径，uni_modules下的uniCloud不带-aliyun、-tcb后缀，但是项目根目录下的uniCloud是带有后缀的
        ],
        "platforms": { // 平台兼容性：y 表示 Yes，支持；n 表示 No，不支持；u 表示 Unknown，不确定；默认为 u
            "cloud": { // 云端平台兼容性
                "tcb": "y",
                "aliyun": "y"
            },
            "client": { // 前端平台兼容性
                "App": {
                    "app-vue": "y",
                    "app-nvue": "n"
                },
                "H5-mobile": {
                    "Safari": { // 当需要指定最小版本才支持时，可以配置minVersion
                        "minVersion": "14.0.2"
                    },
                    "Android Browser": "y",
                    "微信浏览器(Android)": "u",
                    "QQ浏览器(Android)": "u"
                },
                "H5-pc": {
                    "Chrome": "y",
                    "IE": "u",
                    "Edge": "u",
                    "Firefox": "u",
                    "Safari": "u"
                },
                "小程序": {
                    "微信": "y",
                    "阿里": "y",
                    "百度": "y",
                    "字节跳动": "y",
                    "QQ": "y"
                },
                "快应用": {
                    "华为": "u",
                    "联盟": "u"
                }
            }
        }
    }
}
```

**Tips**

-   The above configuration is based on the npm [package.json](https://docs.npmjs.com/cli/v6/configuring-npm/package-json) specification extension, so the standard package.json attribute is also supported. For example, the plug-in package content to be uploaded can be controlled by files.

####  uni\_modules.config.json

`uni_modules.config.json` In the root directory of the project, you can configure the trigger script updated by the plug-in (usually used to perform customized automation tasks) and the service space supported by the plug-in uniCloud. The following is a detailed configuration description of `uni_modules.config.json`

```
{
	"scripts": {
		"postupdate": "node scripts/upgrade.js", // 更新插件后执行该脚本，可从process.env.UNI_MODULES_ID获取当前被更新的插件ID，如果存在多个，以,隔开
		"preupload": "node scripts/preupload.js", // 上传插件之前执行该脚本，可从process.env.UNI_MODULES_ID获取当前被更新的插件ID，如果存在多个，以,隔开
		"postupload": "node scripts/postupload.js" // 上传插件之后(无论上传成功还是失败)执行该脚本，可从process.env.UNI_MODULES_ID获取当前被更新的插件ID，如果存在多个，以,隔开
	},
	"uni_modules": {
		"uni-id": { // 插件ID
			"uniCloud": ["aliyun", "tcb"] // 当项目同时存在aliyun，tcb时可手动指定该插件所属的服务空间
		}
	}
}
```

**Tips**

-   When only one service space is associated with the project, the uniCloud-related resources in the uni\_modules plugin will be automatically attributed to this service space, so there is no need to configure the service space to which uniCloud belongs in uni\_modules.config.json
-   When there are two service spaces in the project (Alibaba Cloud and Tencent Cloud exist at the same time)
    -   If the platform is not configured in uni\_modules.config.json, then when uploading the uniCloud resources of this plug-in, you will be prompted to select which service space to upload to
    -   If the platform has been configured in uni\_modules.config.json, the configuration will prevail when uploading and it will be automatically attributed to the specified service space

####  npmignore

When uni\_modules plug-in is released to plug-in market, it is usually necessary to ignore some directories or files, such as `unpackage`, `.hbuilderx`, `node_modules` and so on, then the file can be ignored by npmignore file.

File name: **.npmignore**. Note that there is a dot at the beginning. Contents of a typical npmignore file are as follows:

```
.hbuilderx
unpackage
node_modules
package-lock.json
```

**Notice**

-   The `.npmignore` in the project root directory is effective for publishing projects and plug-in templates. `uni_modules/Plug-in Id/.npmignore` Effective for published plug-ins

####  pages\_init page registration

> Added in HBuilderX 3.5.0+

In the past, when plugin authors provided page class plugins, they needed to manually inform users in the documentation which pages to register in pages.json. like:

```
{
  "pages":[{
    "path":"uni_modules/xx-yy/pages/demo/demo" // 按插件所在目录引入对应的页面
  }]
}
```

`pages_init.json` solves this annoyance.

When the `pages_init.json` file exists in the root directory of the uni\_modules plugin, when the plugin imports the project, a pages.json modification interface for merging page routes will pop up. Plug-in users click the Confirm button to complete the registration of the plug-in page to the project pages.json.

Example plugin: [Problem Feedback Page Admin Template](https://ext.dcloud.net.cn/plugin?id=4992)

The sample code is as follows:

```
{
    "pages": [{
            "path": "uni_modules/uni-feedback-admin/pages/uni-feedback-admin/add",
            "style": {
                "navigationBarTitleText": "新增"
            }
        },
        {
            "path": "uni_modules/uni-feedback-admin/pages/uni-feedback-admin/edit",
            "style": {
                "navigationBarTitleText": "编辑"
            }
        },
        {
            "path": "uni_modules/uni-feedback-admin/pages/uni-feedback-admin/list",
            "style": {
                "navigationBarTitleText": "列表"
            }
        }
    ]
}
```

Complete pages parameters [details view](https://uniapp.dcloud.io/collocation/pages.html#pages)

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/23fc53b6-3000-4d2b-a033-22e561c236a5.png)

**Notice**

-   The `pages_init.json` file will not eventually be imported into the project.
-   `pages_init.json` does not support annotations (including: conditional compilation).
-   If the HBuilderX version is lower than 3.5, or the plugin author does not provide `pages_init.json`, you still need to manually edit the pages.json registration page.

###  Develop uni\_modules plug-in

####  Create new uni\_modules directory

In the root directory of the uni-app project, create the uni\_modules directory, and you can click `Create uni_modules directory` on the right-click menu of the project.

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/de27eb20-6217-11eb-8a36-ebb87efcf8c0.png)

**Tips:**

-   In case of vue-cli project, the uni\_modules directory is located under `src`, which is `src/uni_modules`

####  Create uni\_modules plug-in

1.  Right-click the uni\_modules directory in HBuilderX `Create uni_modules plug-in`

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/dd758b10-6217-11eb-8a36-ebb87efcf8c0.png)

2.  Fill in the correct plug-in ID and select the plug-in classification

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/dcc6d480-6217-11eb-8a36-ebb87efcf8c0.png)

Plugin ID naming specification:

-   In the format of: 'Author ID - English name of plug-in'. For example, xx-yy, where the author ID and English name of plug-in can only contain English and numbers
-   Author ID is defined by the plug-in author, and cannot use 'DCloud', 'uni' and other keywords. Its length is required at least 2 characters
-   The plug-in name should visually express the function of the plug-in. For example: tag, button, etc.

**Tips**

-   The `uni_modules` plug-in can be configured with three-party dependencies in the `uni_modules->dependencies` node of package.json (the dependent plug-in must also be the `uni_modules` plug-in). If it is an npm plug-in that relies on three parties, you can use the standard dependencies node configuration.

####  Release to plug-in market

When your plug-in is developed, you can publish it directly to the [plug-in market](https://ext.dcloud.net.cn/) for free or paid use by others. The plug-in market provides mechanisms such as realization and evaluation. Excellent plug-in authors can earn tens of thousands of dollars a month.

Release process:

1.  Right-click the plug-in directory in HBuilderX `Release to plug-in market` ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/5a4b97a0-6219-11eb-8ff1-d5dcf8779628.png)
2.  Fill in the plug-in information ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9cbc6970-6219-11eb-b997-9918a5dda011.png) **Tips**

-   If you need to release it as a project template, please create package.json in the root directory of the project, and then right-click the menu to release to the plug-in market.
-   When releasing the plug-ins, you can choose to upload the current project as an example project. A complete example project helps users get started quickly.

####  Modify plug-in basic information

When your plug-in is released to the plug-in market, if you need to adjust some basic information in the plug-in market, such as Chinese name, description, keywords, and readme.md, you can right-click the `Modify the plug-in basic information` directly in the plug-in directory.

1.  Right-click the plug-in directory in HBuilderX `Modify the plug-in basic information` ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/451fb530-6225-11eb-918d-3d24828c498c.png)
2.  Modify plug-in basic information ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/345b6910-6225-11eb-8ff1-d5dcf8779628.png)

####  Release new version

When your plug-in has added new functions or fixed bugs, and a new version needs to be released, the operation is the same as that of the first release, and you can right-click the `Release to plug-in market` directly in the plug-in directory.

**Tips**

-   The update log filled in the releasing window will automatically be synchronized with changelog.md in the root directory

###  Guide to migrating existing plugins to uni\_modules plug-ins

1.  Migrate the plug-in content to the directory named after the plug-in ID under the root directory of your uni-app sample project `uni_modules`. For example, if your existing plug-in ID is `xx-yy`, the directory structure is: `uni_modules/xx-yy`
2.  Run your own sample project to verify that if all functions are normal after the plug-in migrates to the directory

-   When migrating directories, you will usually encounter problems with resource reference paths. So all path references should be modified as relative paths as much as possible.
-   If the plug-in has a cloud function or database of uniCloud, please note that uniCloud in the plug-in directory cannot have suffixes of the vendor when migrating. You can specify the cloud service provider supported by the plug-in when releasing the plug-in.
-   Files of pages.json, App.vue, main.js, manifest.json and uni.scss are not supported in the plug-in directory. If plug-in users need to modify the contents of these files, please elaborate in detail in the plug-in document (readme.md).

3.  When all the functions of the migrated plug-ins are normal, you can release a new version of the plug-in that supports uni\_modules to the plug-in market (the plug-in market will keep your last version of the non-uni\_modules plug-in at the same time)

-   Create package.json in the root directory of plug-in, you can simply fill in one plug-in ID temporarily, and fill in other information through the release window (it will be automatically synchronized back to package.json)

```
{
  "id":"您的插件ID"
}
```

-   Plug-in document, migrate to readme.md in the root directory of plug-in
-   Right-click package.json and click `Release to plug-in market`, select the classification, and fill in the plug-in information (consistent with the existing information in the plug-in market as much as possible)
-   After the release is successful, you can view on the right side of the plugin details page of the plugin market that your plugin has both the `uni_modules` version and the non-`uni_modules` version (only the last non-`uni_modules` version is kept) ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/47c2a2f0-62db-11eb-a16f-5b3e54966275.png)
