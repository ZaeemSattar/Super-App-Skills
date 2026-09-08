---
title: "demo experience"
source_url: https://miniapp.neuxnet.com/uni-stat-v2.html
---
Uni Statistics 2.0 is an open source, full-end, cloud-integrated statistics platform that is more suitable for uni-app.

> `HBuilderX 3.4.10+` is supported

##  demo experience

Experience system: [https://hellouniadmin.dcloud.net.cn/](https://hellouniadmin.dcloud.net.cn/)

Note: uni statistics are built in [uni-admin](https://miniapp.neuxnet.com/uniCloud/admin), and the data of the experience system will be reset periodically.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/28ddae77-dda6-448f-86aa-7e59bb7c4f8d.png)

##  feature of product

There is no need to develop, just tick and publish in the `uni statistics` of `manifest`, deploy [uni-admin](https://miniapp.neuxnet.com/uniCloud/admin) in the [uniCloud](https://miniapp.neuxnet.com/uniCloud/) service space, and you can view the report.

At the same time, developers can also customize the management data and customize the display report.

**1\. Full end**

Full-end traffic statistics, one report can view the operation data of all devices (iOS, Android, Web and various mini programs).

There is no need to connect different SDKs at each end, and there is no need to view data in different reports. At present, there is only one solution known in the market that can see the business panorama in one report.

**2\. Open source, free, free to customize**

Regardless of the SDK that collects data in the front-end, the cloud function that receives data in the cloud, the cloud function that runs batch statistics in the cloud, or the report that displays the statistical results, all these codes are all open source.

Front-end custom management, back-end custom statistical dimensions, free custom reports, everything can be flexibly customized.

**3\. Private deployment, data automatic control**

Using traditional saas statistical products, all data are reported to statistical service providers.

`uni Statistics 2.0` is implemented based on `uniCloud`, cloud functions and statistical data are all hosted in the developer's own service space (Alibaba Cloud or Tencent Cloud optional), and developers have complete control over their own statistical data.

**4\. The default function is rich**

-   Device Statistics
-   Registered user statistics (based on [uni-id](https://uniapp.dcloud.io/uniCloud/uni-id.html) )
-   Page Statistics
-   New, active, retained, bounce rate analysis
-   Channel analysis: auxiliary channel promotion
-   Error statistics and reporting: auxiliary product quality improvement
-   Native App crash statistics, view crash rate by version
-   Custom management, open source and extensible reports

**5\. Effective Error Analysis**

Traditional statistical platforms do not have js error statistics. Developers cannot know on which devices their js code will report errors.

The error information of uni statistics is more comprehensive, including js front-end errors and app native layer crashes. Help developers make applications better.

**6\. More suitable for uni-app and uniCloud**

uni statistics goes deep into the bottom layer of uni-app and uniCloud framework, and provides many functions that other statistics platforms cannot provide:

-   uni-app full-end recognition, no need to connect to different sdk, no need to switch between different reports and accumulate data by yourself
-   Automatically identify uni-app routes and automatically capture page titles (navigationBar or uni-nav-bar components based on pages.json)
-   Automatically capture js errors and report native crash logs on the app side
-   Compatible with the uni-app channel package packaging system, automatically identifying the channel package
-   Based on the uni-id account system, automatically issue new, active and retained reports of registered users (not devices)
-   Compatible with uniCloud [opendb specification](https://miniapp.neuxnet.com/uniCloud/opendb), statistics various data from the server

**7\. Open Ecosystem**

The open source of uni statistics and based on the [uni-admin](https://miniapp.neuxnet.com/uniCloud/admin) plug-in specification provides a plug-in mechanism, and more plug-in authors will provide a variety of rich statistical plug-ins (such as e-commerce statistics, content statistics, etc.). See [Plugin Market](https://ext.dcloud.net.cn/?cat1=7&cat2=74&type=HotList)

\*\*DCloud attaches great importance to the growth of data-driven developer business, and recently cooperated with professional big data service providers [Shence](https://www.sensorsdata.cn/) and [Aladdin](https://tj.aldwx.com/) to jointly improve the product modules and ecological construction of Uni Statistics 2.0. If you have any demand for data analysis, you are welcome to fill in the [demand survey questionnaire](https://sdmarketing.wjx.cn/vj/h2UFHnx.aspx) . We will complete the iterative update based on the original Uni statistical products based on your valuable suggestions. \*\*

##  uni statistics old version upgrade suggestion

For developers using uni stats 1.0, it is recommended to upgrade to uni stats 2.0 as soon as possible. uni stats 1.0 will no longer be updated and maintained.

| Functions | uni stats 1.0 | uni stats 2.0 |
| --- | --- | --- |
| Whether Open Source | No | Yes |
| Deployment | Central Deployment | Private Deployment |
| Customization | Cannot be customized | Free customization |
| uni-id user statistics | excludes | included by default |
| Error Analysis Effectiveness | Lower | Higher |

##  Environmental requirements

-   uni statistics 2.0 only supports uni-app on the client side, non-uni-app cannot be used.
-   uni Statistics 2.0 relies on uniCloud in the cloud, but does not require developers to develop all applications based on uniCloud. The main business of the application can be connected to the traditional server, and uniCloud can be used for statistical management and report presentation.

##  Usage tutorial

`uni stats 2.0` includes two modules:

-   Front-end collection module: built in the `uni-app` framework and configured in the `manifest.json` of the business app;
-   Cloud statistics module: built in the `uni-admin` project template, reuses the same uniCloud service space as the business app;

###  Front-end collection configuration

In the `manifest.json` of the business app project, select the `uni statistics configuration` item, select to enable `uni statistics` as required, and check `2.0` to enable the new version of statistics.

![Open statistics](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/14b2b045-3d8e-4535-acad-2e745441c816.png)

The above visualization operations actually correspond to the `uniStatistics` node of the manifest source view. The manifest specification is detailed in the following document. **If you don't care about the specification details, you can skip this section and continue to read the next section "Mini Program Domain Name Whitelist"**.

The `enable` field under `uniStatistics` is set to `true|false` to enable and disable `uni statistics`

Set the `version` property to `"2"` to enable new version statistics

```
//...
"uniStatistics": {
	"enable": true,//全局开启
	"version": "2" // 开启新版uni统计，值为字符串
},
//...
```

**uniStatistics description**

| Field | Type | Default Value | Optional Value | Description |
| --- | --- | --- | --- | --- |
| enable | Boolean | false | true ， false | Enable or disable statistics globally, the sub-platform configuration will override the current configuration |
| version | String | "1" | "1" , "2" | Statistical version, if not filled in, the default version 1.0 is used, and the 2.0 version is recommended |
| debug | Boolean | false | true , false | Enable the statistical debugging mode, which will generate a lot of logs, and will report data during the development stage, please turn off this item when the application is released |
| reportInterval | Number | 10 | true ， false | Front-end data reporting cycle **HBuilderX 3.5.4+ support** |

`uniStatistics` supports sub-platform settings. For example, to enable `uni statistics` of the WeChat applet platform, you can set `uniStatistics ->enable` under the `mp-weixin` node, as follows:

```
//...
"mp-weixin":{
    "uniStatistics": {
        "enable": true //微信平台开启统计
    }
}
```

**uniStatistics description**

| Field | Type | Default Value | Optional Value | Description |
| --- | --- | --- | --- | --- |
| enable | Boolean | false | true ， false | Enable or disable statistics by platform, the configuration of each platform will override the global configuration, uniStatistics needs to be under the platform configuration |

attention

-   If there is a `uniStatistics -> enable` field under a sub-platform, the configuration under the sub-platform will be used first, otherwise, the global statistics setting will be used
-   There is no need to set the `version` and `debug` properties on different platforms, and the two properties only take effect globally
-   There is no need to set the `debug` attribute on different platforms, this attribute only takes effect globally
-   The data will be reported normally only after the debug mode is turned on or the code is released

####  Mini Program Domain Name Whitelist

Because each applet needs to configure a whitelist for accessible domain names, otherwise it will not be able to connect to the Internet. Therefore, when the applet needs to be released, it is necessary to configure the domain name whitelist in the applet management background of each manufacturer.

When deploying uni statistics, you can choose to use the Alibaba Cloud version or Tencent Cloud version of uniCloud. The domain names corresponding to different cloud vendors are different (there will be service space related configurations in the later chapters of the article)

| uniCloud service provider | request legal domain name |
| --- | --- |
| Alibaba Cloud | api.bspapp.com |
| Tencent Cloud | tcb-api.tencentcloudapi.com |

According to the selected uniCloud cloud vendor, you can configure the corresponding domain name in the domain name whitelist configuration of the applet.

####  debug mode

Set the `debug` field under `manifest.json -> uniStatistics` to `true|false` to enable and disable the `uni statistics` debug mode

In debug mode, the key information of the reported data will be printed to the console, which is convenient to observe whether the collected information is correct. It is mostly used when customizing extensions.

**Log format**

`===` indicates statistics log related logs

```
// mark statistics on
=== uni统计开启,version:2.0

// Collect logs, see collection type: Description of reported data
=== 统计数据采集：{采集类型} ===
// here is the raw data collected
{
	fvts: 1647313662
	lang: "zh"
	lt: "1"
	lvts: 1650857441
	md: "PC"
	t: 1650857461
	ttpj: "view"
	tvc: 14
	url: "pages/component/view/view"
	usv: "0.0.1"
	ut: "h5"
	// ...
} 
=== 采集结束 ===

// data reported successfully
=== 统计队列数据上报 ===
// here is the report data
{usv: '0.0.1', t: 1650857765, requests: '["lt=11&ut=h5&url=/pages/component/view/view&tt=&u…&ch=&usv=0.0.1&t=1650857765&ttn=&ttpj=view&ttc="]'}
=== 上报结束 ===

```

For the description of log fields, see [Front-end Collection SDK](#web-sdk)

###  Background report configuration

####  Create admin project

The background statistics report of `uni statistics 2.0` is a built-in plugin of [uni-admin](https://uniapp.dcloud.io/uniCloud/admin.html) .

[uni-admin](https://uniapp.dcloud.io/uniCloud/admin.html) is an open source management background. That is, to use `uni statistics 2.0`, you need to install this background system, find the menu of uni statistics and use it.

Please refer to \[uni-admin\](https://uniapp.dcloud.io/uniCloud/admin.html#uni-admin-%E6%A1%86%E6%9E%B6-%E5%8E%9F%E5% 90%8D-unicloud-admin) document, complete the following operations:

1.  Create a new `uni-admin` project (select the uni-admin template in the HBuilderX new project interface)
2.  In the pop-up cloud service space initialization wizard, associate the service space (if your business app has used uniCloud, select the same service space; otherwise, create a new service space and associate the same service space in the business app)
3.  Deploy cloud resources: upload and deploy cloud functions, public modules, and initialize database tables through `db_init.json`. If the previous table already has conflicting data, you need to manually merge it yourself
4.  Complete other initialization configurations in the cloud configuration center, such as: fill in your own passwordSecret field in the `uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json` file (used for encrypted password storage key) and tokenSecret fields (to generate the secret key required for token generation, you can skip this item during the test), then right-click on the `uni-config-center` public module to upload the update. Note: When the `business-side App project` and the `report-side uni-admin project` are associated with the same service space, the mutual coverage problem of `uni-config-center` may occur. In this case, it is recommended to maintain a single point. [See details](https://uniapp.dcloud.net.cn/uni-stat-v2.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98) .
5.  Run the uni-admin project, usually to the browser
6.  Set up an administrator account
7.  Add a record of "Applied to Statistics" (appid, etc.) in the "App Management" on the left
8.  After the configuration is complete, start the business app, and you will see the data of the business app in the uni statistics menu on the left side of the `uni-admin` page after running (if you can't see the data, see the FAQ section below)
9.  After passing the test, issue the `uni-admin` project in the HBuilder issue menu, and choose to deploy it to the front-end web hosting of the uniCloud service space. You can customize the domain name in the [uniCloud web console](https://unicloud.dcloud.net.cn/) .

attention

-   To run "Connect Local Cloud Functions", right-click on the database folder of uni-admin and click "Download all DB schemas and extended validation functions". If the `db_init` initialization data was missed in the service space initialization wizard before, right-click on `uniCloud/database/db_init.json` to initialize

**uni-admin old project upgrade**

If the business you need to count has used `uni-admin` before, you can upgrade `uni-admin`. Right-click `package.json` under the project and select "Update from Plugin Marketplace".

The newly added files of uni statistics mainly include:

-   Cloud functions: `uniCloud/cloudfunctions/uni-stat-cron` (run and batch cloud functions regularly), `uniCloud/cloudfunctions/uni-stat-receiver` (receive cloud objects processed by the front end)
-   Cloud functions common module: `uniCloud/cloudfunctions/common/uni-stat`
-   Data table: several `schema` files at the beginning of `uni-stat` in the `uniCloud/database` directory
-   Statistics pages: several pages under the `pages/uni-stat` folder

When updating, please merge pages.json to ensure that all new pages are registered successfully. Otherwise, after running, clicking on the left menu will report that the xxx file cannot be found.

When `db_init.json` initializes the database, the menu table `opendb-admin-menus` of the old project already has data. At this time, the data with conflicting keys cannot be inserted and need to be merged manually.

1.  If the old project has not changed the menus and permissions, you can delete the old table and reinitialize it
2.  If the menu menu of the old project has been changed, several pages of uni statistics need to be merged into the menu data table.

####  Set the trigger period of the scheduled task cloud function

In `uni statistics 2.0`, the default trigger period of the `timed task cloud function (uni-stat-cron)` is to trigger once every hour (ie: every 1 hour, the system will automatically trigger the `uni-stat-cron` cloud function ).

You can modify the trigger period of the `Scheduled Task Cloud Function (uni-stat-cron)` to the minute level (that is, every n minutes) as needed, but pay attention to the modification of the trigger period, you need to ensure that [Scheduled Task Configuration Item](#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E) whether the number of minutes set in ) will be triggered, for example, your configuration item is set to trigger on the 10th minute of every hour (expression: `* * * 10`), while the timing trigger is set to trigger every 20 minutes 1 time (`0 1/20 * * * * *`), then this configuration item will never be triggered.

attention

1.  At this stage, Alibaba Cloud only supports hourly scheduled tasks (that is, the minimum interval of timed triggering of Alibaba Cloud cloud functions can only be set to be triggered once an hour). -stat-cron)\`'s trigger period is set to minute level. You must apply to DCloud before enabling it. [How to apply](https://uniapp.dcloud.io/uniCloud/price.html#aliyun)
2.  Since the cloud function can run for a maximum of 10 minutes at a time, if you want to reset the trigger time in the scheduled task after enabling the minute-level scheduled task, it is best to ensure that the trigger interval between the scheduled tasks is greater than or equal to 10 minutes. , to prevent the problem of running timeout. The default scheduled task type and trigger time can refer to the following \[Scheduled Task Configuration Description\](#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E9%85%8D%E7 %BD%AE%E8%AF%B4%E6%98%8E).

-   Here we take the example of modifying the batch running cycle to trigger once every 10 minutes. The correct steps are:

1.  Modify \[uni statistics configuration item\](#%E5%85%AC%E5%85%B1%E6%A8%A1%E5%9D%97%E9%85%8D%E7%BD%AE%E9% A1%B9%E8%AF%B4%E6%98%8E) Change the value of the `cronMin` parameter to `true`.
2.  Modify the timing trigger configuration item in the `package.json` file under the `Scheduled Task Cloud Function (uni-stat-cron)`. For the specific description of the timing trigger, please refer to the official document \[Timing Trigger\](https 😕/uniapp.dcloud.io/uniCloud/trigger.html).

```
"cloudfunction-config": {
	"concurrency": 1,
	"memorySize": 256,
	"timeout": 600,
	"triggers": [
		{
			"name": "uni-stat-cron",
			"type": "timer",
			"config": "0 1/10 * * * * *"//每隔10分钟触发1次的cron表达式，如需复制此项请务必删除该注释
		}
	]
}
```

3.  Check whether the options set in the `cron` parameter in the configuration file (`config.json`) will be triggered.
4.  Re-upload and deploy the `Scheduled Task Cloud Function (uni-stat-cron)` and `Configuration Center (uni-config-center)`.

####  Enable redis cache

After enabling the redis cache, it can reduce the database query pressure and improve the uni statistical performance. You can decide whether to enable it on demand.

attention

Before enabling the redis cache, you need to confirm whether the redis service has been purchased in the service space where uni statistics are deployed. If not, you need to purchase the redis service first.

**Open steps:**

1.  Modify \[uni statistics configuration item\](#%E5%85%AC%E5%85%B1%E6%A8%A1%E5%9D%97%E9%85%8D%E7%BD%AE%E9% A1%B9%E8%AF%B4%E6%98%8E) Change the value of the `redis` parameter to `true`.
2.  Add the redis extension library to the `package.json` file under the data `Report data receiver (uni-stat-receiver)` and `Scheduled task cloud function (uni-stat-cron)` respectively.
3.  Re-upload the deployment data `Report data receiver (uni-stat-receiver)`, `Scheduled task cloud function (uni-stat-cron)` and `Configuration center (uni-config-center)`.

Configure the redis extension library of uni-stat-receiver

Configure the redis extension library of uni-stat-cron

```
{
	"name": "uni-stat-receiver",
	"dependencies": {
		"uni-id": "file:../../../../uni-id/uniCloud/cloudfunctions/common/uni-id",
		"uni-stat": "file:../common/uni-stat"
	},
	"extensions": {
		"uni-cloud-jql": {},
		"uni-cloud-redis": {} // 配置为此云函数开启redis扩展库，值为空对象留作后续追加参数，暂无内容。如拷贝此配置项到package.json文件，切记去除注释。
	}
}
```

###  Associated service space

In order for the data collected by the client app to be correctly received and counted by the cloud function in `uni-admin`, it is necessary to ensure that the client project and the admin project are associated with the same service space.

1.  Select the client project (the project that needs to collect user data)
2.  If `uniCloud` has not been enabled before, right click and select `Create uniCloud cloud development environment -> Alibaba Cloud|Tencent Cloud`; otherwise, go to step 3;

![Associated front and back data](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/b2ad84ed-a69a-43dc-b8d1-6efaafd96a14.png)

3.  Right-click on the `uniCloud` directory and select `Associate cloud service space or project`, and select the service space associated with the `uni-admin` project in the opened window

![Associated front and back data](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/14744bf3-c88e-4408-b2fa-0ecf0dcf4fe1.png)

###  Error parsing uni-admin 1.9.4+

> This function only supports web platform, App platform, WeChat applet platform

In order to facilitate developers to use sourceMap files to locate code problems, the error analysis function of using sourceMap in statistics has been added.

####  Usage environment

1.  Using Tencent Cloud Service Space, Alibaba Cloud Service Space is not supported
2.  HBuiderX 3.5.3+
3.  uni-admin 1.9.4+
4.  Does not support IE

####  Generate sourceMap

-   Generate sourceMap file in HBuiderX
    
    -   For the web platform, check the `Generate sourceMap` option in `Release -> Website`.
        
        ![Web platform generates sourceMap](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/c9872cf7-39b1-4c00-9fe6-afc5939b3b31.jpg)
        
    -   When the App platform is `Release -> Native App-Cloud Packaging`, check the `Generate sourceMap` option.
        
        ![app platform generates sourceMap](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/5366655c-0ba3-4f5a-b5fc-e80289ed1a17.jpg)
        
    -   When the WeChat applet platform is `Issue -> Mini Program - WeChat`, check the `Generate sourceMap` option.
        
        ![WeChat applet platform generates sourceMap](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/85c3eed9-e1b3-41c6-888f-bc1e2cb21a46.jpg)
        
-   cli project generates sourceMap file
    
    Vue2
    
    Vue3
    
    ```
    yarn build:h5 --sourcemap
    
    yarn build:app-plus --sourcemap
    
    yarn build:mp-weixin --sourcemap
    ```
    

1.  After the project is compiled, you can view the generated sourceMap files for each platform in `/unpackage/dist/build/.sourcemap`.
    
    ![generated sourceMap path](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/52e1a71d-a6f2-4458-9213-186dd78684de.jpg)
    
2.  After the WeChat applet platform is uploaded and released, it will be compressed and packaged again, so an additional step is required:
    
    1.  Download the online version sourceMap file in `Development Management/Operation and Maintenance Center/Error Log` of [WeChat Public Platform](https://mp.weixin.qq.com/) .
    2.  Unzip the downloaded file into the generated .sourcemap folder: `/unpackage/dist/build/.sourcemap/mp-weixin/__WEIXIN__/` (**WEIXIN** is the newly created directory, and the parsing error will be based on this name lookup)
    
    ![WeChat download sourceMap](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/2e4d0e4f-5be6-4a72-adf0-697a576dd3fa.png)
    
    **Precautions**
    
    1.  If there is only `__FULL__` folder in the downloaded sourceMap file, please rename it to `__APP__`
    2.  Only support `release mode` sourceMap file error parsing

####  upload sourceMap

1.  Configure `uni-stat` related information in `uni-admin project/admin.config.js`:
    
    1.  Search `uploadSourceMapCloudSpaceId` to supplement Tencent Cloud Service Space SpaceID
    2.  Search for `cloudSourceMapUrl` to supplement the access address of Tencent Cloud cloud storage (eg: https://xx-xx-xx.tcb.qcloud.la/\_\_UNI\_\_/uni-stat/sourcemap)
    
    ![cloudSpaceId](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/f1dee8fc-dfb5-49b1-b905-22f8fa733eca.jpg)
    
2.  Run the uni-admin project into the browser, and on the `uni statistics / error statistics / js error report` page, there is an `upload sourceMap` button in the upper right corner of the error message list table. After clicking, it will display as follows:
    
    ![Upload sourceMap](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/50878ced-c415-4d8d-923d-f3127e4a1add.png)
    
3.  Please fill in the complete information before uploading: `Application`, `Platform`, `Version`
    
4.  Click the `Choose file and upload` button, after the `Select Folder` box pops up, please select the compiled sourceMap corresponding to the platform version. For example: **Project root directory/unpackage/dist/build/.sourcemap/h5**, select the `h5` directory and click upload. If the upload fails in the middle, without refreshing the page, you can skip the uploaded file by re-selecting the folder to upload.
    
5.  The contents of the folder will be uploaded to the `cloud storage/__UNI__/uni-stat/sourcemap/application appId/platform (eg web, mp-weixin, ios)/version/` directory
    

**Precautions**

1.  Cloud storage requires configuration permissions: `Readable by all users`
2.  If there is cross-domain, you need to bind the security domain name in `cross-domain configuration`
3.  The upload failure may be due to the following reasons:
    1.  If the file name, folder name contains `ad` or an advertisement field, please close the browser ad blocking extension and upload it again
    2.  If there is a file with the same name in this directory in the cloud storage, the upload may also fail. Therefore, before uploading the same platform and the same version of the sourceMap file again, please refer to the corresponding directory in the cloud storage (eg: `cloud storage/__UNI__/uni-stat/sourcemap/appId/platform (eg: web, mp-weixin, ios)) /version/`) delete

####  Parse error

On the `uni statistics / error statistics / js error report` page, in the error information list table, click the `details button` on the right side of the table row to view the parsed error information in the pop-up window.

**Example**

Original error message:

![Original error:](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1a8f0fcc-9bbf-4563-9c33-ebe4c7e14800.jpg)

Parsed error message:

![Original error:](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/300b16e0-bfea-4dd5-ba95-e06dc1b75b51.jpg)

-   Parsing errors are parsed line by line. If a line fails to parse, the original error message will be returned
-   `runtime error` Below the separation line is the runtime error stack information of the platform framework, you don't need to care about it

##  Open source code interpretation

-   Front-end collection SDK source address, [View](https://github.com/dcloudio/uni-app/tree/next/packages/uni-stat)
-   Cloud statistics module and source address of statistics background, [View](https://github.com/dcloudio/uni-admin)

###  Front-end collection SDK

####  Data reporting logic

The default data reporting interval is 10s. During the reporting interval, the data of each reporting node will be added to the statistics data queue. After 10s, the next reporting node will uniformly process the data queue and report it.

To save server-side resources, the data collected by the front-end is reported on a regular basis. So the escalation request does not happen in real time.

`HBuilderX 3.5.4` or higher version can adjust the reporting period according to your own business needs, you can modify it in `uni statistics configuration -> front-end data reporting period`, in order to save server resources, it is recommended to fill in the range of `5- between 20`.

When will the data be reported?

-   After the code is released, run the project report `(HBuiderX -> Release -> Select the platform to open statistics)`
-   Run the code with debug mode enabled and report `(manifest.json -> uniStatistics -> debug:true)`

In addition to the above two cases, data reporting will not occur in other cases, including App real machine runtime (including custom dock), crash and error data

####  Collection Type

**App launch**

The program starts at the beginning of the visit, and the end of the visit is as follows: entering the background for more than 5 minutes, no operation in the foreground for more than 30 minutes, and a new source program

| Reporting Fields | Description |
| --- | --- |
| lt | Statistical data type, the default value is 1, `type see below` |
| ut | Platform type, `type see below` |
| mpsdk | Applet sdk version |
| mpv | Mini program platform version, such as WeChat, Alipay, etc. |
| mpn | Native platform package name, applet appid |
| v | Application version. Native application |
| p | Mobile phone system, `type see below` |
| net | Network type, `type see below` |
| brand | Mobile phone brand |
| md | Mobile phone model |
| lang | language |
| lat | Latitude |
| lng | Longitude |
| pr | pixelRatio Device pixel ratio |
| ww | windowWidth can use window width |
| wh | windowHeight can use the window height |
| sw | screenWidth screen width |
| sh | screenHeight screen height |
| url | The full url of the current page, including parameters. Up to 255 characters |
| ch | Channel Information |
| fvts | First Visit Timestamp |
| lvts | Last Access Timestamp |
| en | Country |
| pn | province |
| ct | City |
| sc | Scene Value |
| tvc | The total number of visits by the user up to this visit |
| usv | stats sdk version |
| t | Timestamp when data was reported |

**App goes to background**

When the application enters the background, it is triggered by the application's onHide life cycle in the SDK

| Reporting Fields | Description |
| --- | --- |
| lt | Statistical data type, the default value is 3, `type see below` |
| ut | Platform type, `type see below` |
| p | Mobile system, `type see below` |
| urlref | Page where the app exits |
| urlref\_ts | The duration of the last page when the app exits |
| ch | Channel Information |
| usv | stats sdk version |
| t | Timestamp when data was reported |

**Page switch**

Report when the page jumps. In the SDK, it is triggered by the onHide life cycle of the page.

| Reporting Fields | Description |
| --- | --- |
| lt | Statistical data type, the default value is 11, `type see below` |
| ut | Platform type, `type see below` |
| p | Mobile phone system, `type see below` |
| url | The full url of the current page, including parameters. Up to 255 characters |
| ttpj | title of the page defined in pages.json |
| ttn | title set via API uni.setnavigationbartitle |
| ttc | The title of the page reported via uni.report |
| ttct | The title set in the title component |
| urlref | Page where the app exits |
| urlref\_ts | The duration of the last page when the app exits |
| ch | Channel Information |
| usv | stats sdk version |
| t | Timestamp when data was reported |

**Event trigger**

When the user triggers some business logic

-   Default event
    -   Login: User Information
    -   Payment: product name, amount
    -   share:
-   User defined events

| Reporting Fields | Description |
| --- | --- |
| lt | Statistical data type, the default value is 21, `type see below` |
| ut | Platform type, `type see below` |
| p | Mobile phone system, `type see below` |
| url | The full url of the current page, including parameters. Up to 255 characters |
| e\_n | Event Name |
| e\_v | Event Parameters |
| ch | Channel Information |
| usv | stats sdk version |
| t | Timestamp when data was reported |

**Application error**

Report an error in the application

| Reporting Fields | Description |
| --- | --- |
| lt | Statistical data type, the default value is 21, `type see below` |
| ut | Platform type, `type see below` |
| p | Mobile phone system, `type see below` |
| ch | Channel Information |
| mpsdk | Mini Program SDK Version |
| mpv | Mini program platform version, such as WeChat, Alipay, etc. |
| v | Application version. Native application |
| em | Error message |
| usv | stats sdk version |
| t | Timestamp when data was reported |

**`lt`: Statistics type**

| value | description |
| --- | --- |
| 1 | The application starts, corresponding to the `onLaunch` event |
| 3 | The application enters the background, corresponding to the application `onHide` event |
| 11 | Page jump, corresponding to page `onHide` event |
| 21 | Event Trigger |
| 31 | Application Error |

**`ut`: platform type**

| value | description |
| --- | --- |
| h5 | h5 |
| wx | WeChat |
| ali | Ali |
| bd | Baidu |
| qq | qq |
| qn | Quick Application |
| ks | Kuaishou |
| lark | Feishu |
| qw | Quick Application |
| dt | DingTalk |

**`p`: phone system**

| value | description |
| --- | --- |
| a | Android |
| i | iOS |

**`net`: network type**

| value | description |
| --- | --- |
| wifi | wifi network |
| 2g | 2g network |
| 3g | 3g network |
| 4g | 4g network |
| 5g | 5g network |
| none | No Internet |
| cable | cable |

###  Cloud Statistics

####  Statistical report display page

In order to highlight the goal, only the folders and files related to uni statistics are commented out, and the rest are the same as ordinary uni-app projects. For new pages, please refer to similar pages in uni-stat.

```
├── cloudfunctions
├── common                             # 样式
│   │── uni.css                        # 公共样式
│   └── uni-icons.css                  # icon样式
├── components                         # 自定义组件
├── js_sdk                             # js sdk
│   └── uni-stat                       # uni统计相关工具方法
│       └── util.js                      
├── pages                              # 页面
│   └── uni-stat                       # uni统计页面
│       │── channel                    # 渠道（app）
│       │   │── channel.vue            # 页面（下同）
│       │   └── fieldsMap.js           # 字段配置（下同）
│       │── device                     # 设备统计
│       │   │── activity               # 渠道/场景分析
│       │   │   │── activity.vue      
│       │   │   └── fieldsMap.js    
│       │   │── comparison             # 平台对比
│       │   │   │── comparison.vue      
│       │   │   └── fieldsMap.js    
│       │   │── overview               # 今日概览
│       │   │   │── overview.vue      
│       │   │   └── fieldsMap.js    
│       │   │── retention              # 留存
│       │   │   │── retention.vue      
│       │   │   └── fieldsMap.js    
│       │   │── stickiness             # 粘性
│       │   │   │── stickiness.vue      
│       │   │   └── fieldsMap.js    
│       │   └── trend                  # 趋势分析
│       │       │── trend.vue           
│       │       └── fieldsMap.js        
│       │── error                      # 错误分析
│       │   │── error.vue             
│       │   └── fieldsMap.js            
│       │── event                       # 事件分析
│       │   │── event.vue             
│       │   └── fieldsMap.js            
│       │── index                       # 统计首页
│       │   │── index.vue             
│       │   └── fieldsMap.js            
│       │── page-ent                    # 入口页
│       │   │── page-ent.vue             
│       │   └── fieldsMap.js            
│       │── page-res                    # 受访页
│       │   │── page-res.vue             
│       │   └── fieldsMap.js            
│       │── scene                       # 场景值（小程序）
│       │   │── scene.vue             
│       │   └── fieldsMap.js            
│       └── user                        # 用户统计
│           │── activity                # 渠道/场景分析
│           │   │── activity.vue      
│           │   └── fieldsMap.js    
│           │── comparison              # 平台对比
│           │   │── comparison.vue      
│           │   └── fieldsMap.js    
│           │── overview                # 今日概览
│           │   │── overview.vue      
│           │   └── fieldsMap.js    
│           │── retention               # 留存
│           │   │── retention.vue      
│           │   └── fieldsMap.js    
│           │── stickiness              # 粘性
│           │   │── stickiness.vue      
│           │   └── fieldsMap.js    
│           └── trend                   # 趋势分析
│               │── trend.vue           
│               └── fieldsMap.js        
├── static
├── store
├── admin.config.js
├── App.vue
├── main.js
├── mainfest.json
├── pages.json
├── postcss.config.js
└── uni.scss
```

####  Cloud function, general module description

**1\. Composition of uni statistics server**

-   `uni-config-center/uni-stat configuration module`: Provides the necessary configuration parameters for uni stats to run.
-   `uni-stat public module`: data processing module, including the processing and storage of the collected and reported data and the data processing of timed tasks.
-   `uni-stat-receiver report data receiver`: Receive the data reported by the client and forward it to the public module for processing. Note: This cloud object depends on the `uni-id` public module.
-   `uni-stat-cron timed task cloud function`: triggers timed tasks and forwards them to public modules for processing.

**2\. Description of public modules**

attention

Note: The uni statistics common module depends on the uniCloud configuration center (uni-config-center)

```
├── shared                              # 公共模块，提供公共函数库等支持。
│   │── create-api.js                   # 用来创建对外访问的实例
│   │── error.js                   		# 错误处理模块
│   │── index.js                   		# 入口文件，提供对外访问的基础模块
│   └── utils.js                     	# 工具函数库文件
├── stat                                # uni统计实际业务处理模块
│   │── lib                             # 工具类类库，提供日期计算、数据加密等额外功能支持。
│   │   │── date.js                     # 日期计算类文件
│   │   │── index.js                    # 入口文件，提供对外访问模块
│   │   └── uni-crypto.js               # 数据加密类文件，提供AES/MD5加密
│   │── mod                             # 数据模型，提供具体业务实现。
│   │   │── activeDevices.js            # 活跃设备模型，给周月维度的设备基础统计和留存统计提供数据，每日跑批合并，仅添加本周/本月首次访问的设备。
│   │   │── activeUsers.js              # 活跃用户模型，给周月维度的用户基础统计和留存统计提供数据，每日跑批合并，仅添加本周/本月首次访问的用户。
│   │   │── appCrashLogs.js             # 原生应用崩溃日志模型，记录原生应用的崩溃日志
│   │   │── base.js                     # 基类模型，提供基础服务支持
│   │   │── channel.js                  # 渠道模型，提供渠道和场景值数据
│   │   │── errorLog.js                 # 错误日志模型，记录上报的应用运行错误日志
│   │   │── errorResult.js              # 错误结果统计模型，统计汇总错误日志中的数据
│   │   │── event.js                    # 事件统计模型，提供应用的事件字典
│   │   │── eventLog.js                 # 事件日志模型，记录上报的事件日志
│   │   │── eventResult.js              # 事件结果统计，统计汇总事件日志中的数据
│   │   │── index.js                    # 入口文件，提供对外访问模块
│   │   │── loyalty.js                  # 设备/用户忠诚度（粘性）统计模型，统计设备/用户的粘性，粘性判断依据为：访问时长和访问页面数量
│   │   │── page.js                     # 页面模型，提供应用的页面字典
│   │   │── pageLog.js                  # 页面日志模型，记录上报的页面访问日志
│   │   │── pageResult.js               # 页面结果统计模型，统计汇总页面访问日志中的数据
│   │   │── platform.js                 # 应用平台模型，提供应用的平台字典
│   │   │── runErrors.js                # 运行错误日志，记录数据统计时运行出错的日志
│   │   │── scenes.js                   # 场景值模型，提供应用渠道和小程序场景值的数据字典
│   │   │── sessionLog.js               # 基础会话日志模型，记录设备访问时产生的会话日志
│   │   │── shareLog.js                 # 分享日志模型，记录触发分享事件的日志
│   │   │── statResult.js               # 基础数据结果统计模型，统计汇总会话数据包括不限于设备/用户的数量、访问量、活跃度（日活、周活、月活）、留存率（日留存、周留存、月留存）、跳出率、访问时长等数据
│   │   │── uniIDUsers.js               # uni-id 用户模型，提供uni-id用户数据查询
│   │   │── userSessionLog.js           # 用户会话日志模型，记录登录用户的会话日志
│   │   └── version.js                  # 应用版本模型，提供应用的版本号字典
│   │── receiver.js                     # 上报数据接收器，数据上报功能的分发入口文件
│   └── stat.js                         # 数据统计调度处理模块，数据统计及日志清理功能的分发入口文件
└── index.js                            # 代理入口文件，提供对外访问的uni-stat对象
```

####  Common module configuration item description

The uni statistics configuration items are stored in the `uni-stat/config.json` file under the uniCloud configuration center (`uni-config-center`). Users can customize the value of each configuration item according to their own system needs.

attention

Note: After modifying the uni statistics configuration items, you need to re-upload the public module `uni-config-center` to take effect.

**Basic parameters**

| Configuration | Default | Description |
| --- | --- | --- |
| debug | false | Enable debug mode true: enable, false: disable, a lot of logs will be generated after opening, please disable the production environment. |
| redYes | false | Enable the redis cache, which can reduce database query pressure and improve uni statistics performance. You can decide whether to enable it on demand. [Open method](#%E5%BC%80%E5%90%AFredis%E7%BC%93%E5%AD%98) |
| cachetime | 604800 | Redis cache validity period, in seconds. |
| sessionExpireTime | 1800 | Session expiration time, this configuration is used to determine whether the current session has expired. Generally, it is not necessary to modify this item. |
| realtimeStat | true | Enable real-time statistics, true: enabled, false: disabled. After it is enabled, statistics will be counted every hour, and the number of database reads and writes will increase. You can decide whether to enable it as needed. |
| cronMin | false | Enable minute-level scheduled tasks, true: enable, false: disable. After opening, the scheduled tasks will be subdivided into minute-level execution to distribute the data calculation pressure, which is suitable for user groups with large daily activities or special needs. For the specific opening method, see \[Set the trigger period of the cloud function of the scheduled task\](#%E8%AE%BE%E7%BD%AE%E5%AE%9A%E6%97%B6%E4%BB%BB%E5% 8A%A1%E4%BA%91%E5%87%BD%E6%95%B0%E7%9A%84%E8%A7%A6%E5%8F%91%E5%91%A8%E6%9C% 9F). |
| cron | \- | is used to configure the trigger time of scheduled tasks. For details, see the following \[Scheduled Task Configuration Instructions\](#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E9 %85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E). |
| batchInsertNum | 5000 | When there are batch write operations, limit the maximum number of records written to the database at one time. To prevent write timeouts, the maximum value is 5000 entries. |
| errorCheck | \- | Error detection, this item is used to limit the same error log to be written to the database within a specified time, to prevent a large number of database write operations caused by high-frequency errors. \[Details\](#%E9%94%99%E8%AF%AF%E6%A3%80%E6%B5%8B%E9%85%8D%E7%BD%AE%E8%AF%B4%E6% 98%8E) |
| cleanLog | \- | Log cleaning, this item is used to configure regular cleaning of expired logs, reduce the storage capacity of database data, and improve uni statistics performance. \[Details\](#%E6%97%A5%E5%BF%97%E6%B8%85%E7%90%86%E9%85%8D%E7%BD%AE%E8%AF%B4%E6% 98%8E) |

####  Scheduled task configuration instructions

The `cron` parameter is used to configure the trigger time of the scheduled task. Generally, you do not need to modify this item.

| Parameters | Description |
| --- | --- |
| type | Scheduled task type: such as `stat`: basic data statistics |
| time | Trigger time expression: `* * * *` There are four digits in total, representing from left to right: week (1-7 represents Monday to Sunday)/day/hour/minute. Example: Triggered at 0:00 every night, it should be written as `* * 0 0` |

The current types of scheduled tasks are (`The content in brackets below indicates the trigger time of the scheduled task after the minute-level statistics are enabled`):

-   `stat`: basic data statistics, statistical dimensions include:
    
    -   Real-time statistics, triggered by default `every hour (0 minutes)`, statistics of basic data for the last hour
    -   Daily statistics, the default is triggered at 1:00 a.m. (10 minutes) every day, and the basic data of the previous day is counted
    -   Weekly statistics, triggered by `every Monday at 1:00 am (20 minutes)` by default, statistics the basic data of the previous week
    -   Monthly statistics, the default `triggered at 3:00 am (30 minutes) on the 1st of each month`, statistics the basic data of the previous month
-   `retention-device`: Device retention data statistics, statistical dimensions include:
    
    -   Daily statistics, the default is triggered by `every day at 2:00 am (20 minutes)`, and the daily retained data of the device is counted (the initial statistics of the retention status from the day before yesterday to yesterday, so it takes at least three days to have data)
    -   Weekly statistics, triggered by `every Monday at 2:00 am (30 minutes)` by default, to count the weekly retained data of the equipment (the initial statistics of the retention from the last week to the last week, so it takes at least three weeks to have data)
    -   Monthly statistics, triggered by the default `4:00 am (30 minutes) on the 1st of each month`, to count the monthly retained data of the device (the initial statistics are about the retention of the previous month to the previous month, so it will take at least three months to have data)
-   `retention-user`: User retention data statistics, statistical dimensions include:
    
    -   Daily statistics, triggered by `every day at 3:00 a.m. (40 minutes)` by default, to count the daily retained data of users (the initial statistics of retention from the day before yesterday to yesterday, so it takes at least three days to have data)
    -   Weekly statistics, triggered by `every Monday at 5:00 am (30 minutes)` by default, and statistics the user's weekly retention data (the initial statistics of the retention status from the last week to the last week, so there will be data after at least three weeks of operation)
    -   Monthly statistics, triggered by default at 6:00 am (40 minutes) on the 1st of each month, to count the monthly retention data of users (the retention status from the previous month to the previous month is initially counted, so it takes at least three months to have data)
-   `active-device`: Active device data archive, statistical dimensions include:
    
    -   Daily archiving, triggered by `every day at 0:00 am (10 minutes)` by default, and archives the active device data of the previous day. Note: this data should be kept in `basic data statistics`, `device retention data statistics`, `user retention data` Executed before the weekly statistics and monthly statistics in Statistics\` are triggered.
-   `active-user`: Active user data archive, statistical dimensions include:
    
    -   Daily archiving, triggered by `every day at 0:00 am (20 minutes)` by default, and archives the active user data of the previous day. Note: this data must be kept in `basic data statistics`, `device retention data statistics`, `user retention data` Executed before the weekly statistics and monthly statistics in Statistics\` are triggered.
-   `page`: page data statistics, statistical dimensions include:
    
    -   Daily statistics, the default is triggered at 3:00 a.m. (20 minutes) every day, and the page data of the previous day is counted
-   `event`: Event data statistics, statistical dimensions include:
    
    -   Daily statistics, the default is triggered at 4:00 a.m. (20 minutes) every day, and the event data of the previous day is counted
-   `error`: Error data statistics, statistical dimensions include:
    
    -   Daily statistics, the default `triggered at 5:00 a.m. (20 minutes) every day`, statistics the error data of the previous day
-   `clean`: Error data statistics, statistical dimensions include:
    
    -   Log cleanup, triggered by default `every day at 5:00 am (30 minutes)`, to clean up expired log data

####  Error detection configuration instructions

The `errorCheck` parameter is used to limit the same error log to be written to the database within a specified time to prevent a large number of database write operations caused by high-frequency errors. It can be turned on or off as needed.

| Parameters | Description |
| --- | --- |
| needCheck | Need to check: true: yes; false: no |
| checkTime | Error check interval time, in `minutes`. |

####  Log cleaning configuration instructions

The `cleanLog` parameter is used to configure regular cleaning of expired logs, reduce the storage capacity of database data, and improve uni statistics performance.

| Parameters | Description |
| --- | --- |
| open | Whether to enable log cleaning: true: yes; false: no |
| reserveDays | Retention days configuration for each log, parameter format: `log type: retention days`, for example: `sessionLog: 31` means to reserve session logs for 31 days, and if the retention days is set to 0, it means permanent retention (this will Accumulate a lot of useless data, not recommended) |

The currently configurable log types are:

-   `Basic session log: sessionLog`, keep logs for `31` days by default. Note: Because the device retention statistics need to count the retained data after 30 days at the longest, the basic session logs must be kept for at least `31` days, otherwise, the device retention statistics will be affected.
-   `User session log: userSessionLog`, keep logs for `31` days by default. Note: Because the user retention statistics need to count the retained data after 30 days at the longest, the user session log must be kept for at least `31` days, otherwise it will affect the user retention statistics.
-   `Page log: pageLog`, keep logs for `7` days by default.
-   `Event log: eventLog`, keep logs for `7` days by default.
-   `Share log: shareLog`, keep logs for `7` days by default.
-   `Error log: errorLog`, keep logs for `7` days by default.

Notes

-   The two projects of the client and the statistics background must be associated with the same service space, and all cloud functions, public templates, etc. in uni-admin have been uploaded and deployed to the service space
-   To use uni statistics, APPID must be configured for normal use. [What is the use of DCloud's Appid, how to transfer the application](https://ask.dcloud.net.cn/article/35907)
-   The application will not report statistical data during running and debugging. It will only report data after launching the new version of the app, h5, and applet.
-   CLI projects are not supported

##  Extensions and customizations

uni statistics provides basic data reports. If the expected data collection cannot be achieved, you can freely report data through `uni.report(eventKey,param)` on the client side, and add pages through uni-admin to collect statistics yourself.

###  Basic usage of front-end uni.report

The basic usage of `uni.report(eventKey,param)` is listed here, the complete `API` view: [Details](https://uniapp.dcloud.io/api/other/report.html)

`uni.report(eventKey,param)` takes two parameters.

-   eventKey custom event name
-   param custom event parameter

```
// parameter supports string
uni.report('购买','购买成功')

// parameter support object
uni.report('购买',{
	id:'1000',
	name:'上衣',
	price:'998',
	msg:'购买成功'
	// ...
})
```

###  Data reported using custom events in uni-admin

Add new page in uni-admin, use [uniCloud API](https://uniapp.dcloud.io/uniCloud/clientdb#clientdb%E7%AE%80%E4%BB%8B) to get all `uni-report` The reported raw data is stored in the [uni-stat-event-logs](https://gitee.com/dcloud/opendb/tree/master/collection/uni-stat-event-logs) table.

-   After getting the data, you can expand the required business logic by yourself

```
const db = uniCloud.database()
db.collection('uni-stat-event-logs')
```

Whether it is the newly reported data, the data of [opendb](https://uniapp.dcloud.net.cn/uniCloud/opendb.html) , or the data in the developer's own business database, you can write your own report Statistical Analysis.

Like ordinary uni-app pages, create a new page and write code.

When registering the left menu in `uni-admin`, you need to refer to the document: \[uni-admin left window - menu bar\](https://uniapp.dcloud.io/uniCloud/admin.html#%E5%B7% A6%E4%BE%A7%E7%AA%97%E5%8F%A3-%E8%8F%9C%E5%8D%95%E6%A0%8F)

##  Version upgrade

`uni-admin1.9.0` version starts (corresponding to `HBuilderX 3.5.1`), `uni statistics` and `uni upgrade center` reuse the same application version table (ie `opendb-app-versions` table), discard the original The `uni-stat-app-versions` table.

If you have enabled `uni stats 2.0` but are using an older version of `uni-admin`, you need to pay attention to the migration and upgrade of the version table, otherwise the version-based statistics may be inaccurate.

Upgrade steps:

1.  Update the `uni-admin` project from the plugin market
2.  Upload overlay `uni-stat` public module
3.  Re-upload overwriting all `DB Schema`
4.  Import the data in the original `uni-stat-app-versions` table into the `opendb-app-versions` table; a code snippet is provided below, you can create a cloud function and copy the sample code to the cloud function , right-click to execute "Run - Local Cloud Function" to automatically complete the migration of data content;

```
'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const oldVersionDataRes = await db.collection('uni-stat-app-versions')
		.aggregate()
		.lookup({
			from: 'uni-stat-app-platforms',
			localField: 'platform_id',
			foreignField: '_id',
			as: 'platform'
		})
		.limit(500)
		.end()

	if (oldVersionDataRes.data.length) {
		for (let oldKey in oldVersionDataRes.data) {
			// data of the old version table
			const oldVersionData = oldVersionDataRes.data[oldKey]
			
			//Assemble data
			const newVersionData = {
				appid: oldVersionData.appid,//appid
				platform: [],//默认为空数组即可
				uni_platform: oldVersionData.platform[0].code,//平台代码
				type: 'native_app',//类型 默认为native_app即可
				version: oldVersionData.version,
				create_env: 'uni-stat',//创建来源，设置为uni-stat
				create_date: oldVersionData.create_time//创建时间
			}
			await db.collection('opendb-app-versions').add(newVersionData)
		}
	}
	
	return true
};
```

##  common problem

\*\*1. After starting uni statistics, when can the report data be viewed? \*\*

A: It is related to the configuration of timed tasks. By default, data such as `Statistics Home` and `Today's Overview` are visible after 1 hour, and the rest of the data are visible the next day. To learn more about the statistical time of various types of data, please refer to \[Scheduled Task Configuration Instructions\](#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E9%85%8D% E7%BD%AE%E8%AF%B4%E6%98%8E).

**2\. Statistics have been turned on, and the scheduled task configuration is normal, but the data is still not visible in the background**

answer:

-   Make sure to distinguish clearly, business app and admin are 2 projects. The business app is the collection end, and the admin is the report end
-   Make sure to use HBuilderX 3.4.14+. If it is a project created by cli, you need to upgrade cli to uni-app 3.4.14+
-   Make sure that Enable uni Statistics 2.0 is checked in the manifest of the business App project that needs statistics, and associate with the correct uniCloud service space
-   Make sure that the business app has been re-issued (you can issue it in HBuilder, you don't need to put it on the App Store or Mini Program Store). Data reporting only happens after the project is released or the debug mode is enabled for running the project. In other cases, data will not be reported. [Details](#report-time)
-   Make sure that the cloud functions in the `uniCloud` directory of the `uni-admin` project are uploaded to the same uniCloud service space as the App
-   In the cloud function log of [uniCloud web console](https://unicloud.dcloud.net.cn/) , you can see that the `uni-stat-receiver` cloud function has the correct request log
-   In the cloud function log of [uniCloud web console](https://unicloud.dcloud.net.cn/) , you can see that the `uni-stat-cron` cloud function has a regular execution log, and the log shows that the execution is successful ;If `Not Found the cofnig file` is displayed in the log, check the sixth question below;
-   If you want to see the statistics of the management side of `uni-admin`, you need to configure `uni statistics 2.0` in the `manifest` of the `uni-admin` project and issue it again. Again, don't confuse business App and admin

\*\*3. How to determine whether a minute-level scheduled task needs to be configured? \*\*

Answer: Generally, you do not need to configure it yourself, but if the time-out occurs in the `Scheduled Task Cloud Function (uni-stat-cron)`, you should consider enabling the minute-level scheduled task.

**4\. How to create or authorize `uni statistics` operation administrator account**

A: Refer to [uni-admin creates multiple login accounts for the system and sets different permissions](https://uniapp.dcloud.net.cn/uniCloud/admin.html#mutiladmin)

\*\*5. Why is the total device count less than the active device count? \*\*

Answer: The calculation formula of the total number of devices is: total number of devices = number of original devices + number of new devices, and the basis for judging whether a device is a new device is whether the last time the device accessed an application has been stored in the client SDK. , if it is not stored, it is considered as a new device of the application (that is, when lvts=0, it is a new device, and if lvts>0, it is an old device). Therefore, if a device has accessed an application before, even if the data in the database is cleared at this time, since the last time the device accessed the application (ie lvts > 0) has been stored in the client SDK, the device It will no longer be considered a new device for the application and will no longer be counted in the total number of devices for the application, but only in the number of active devices. At this time, there may be cases where the total number of devices is less than the number of active devices. Happening.

**6\. The uni-stat-cron log shows Not Found the cofnig file**

Business App and admin are 2 projects. The business app is the collection end, and the admin is the report end; both projects contain `uni-config-center`; if these two projects are associated (multiplexed) with the same service space, it is easy to appear `uni-config-center` \`The mutual coverage problem; at this time, it is recommended to maintain a single point, there are 2 solutions:

-   Focus on business apps: copy the `uni-stat` folder under `uni-config-center` in the `uni-admin` project to the `uni-config-center` directory under the business app project, and then Just re-upload the `uni-config-center` public module under the business App project.
-   Mainly based on `uni-admin`: Manually merge the configuration items under the `uni-config-center` under the business App project into the `uni-config-center` under the `uni-admin` project (Note: manual Merge the configuration items, do not overwrite the file as a whole), and then re-upload the `uni-config-center` public module under the `uni-admin` project.

##  References

Without mastering the following documents, it is difficult to understand and do secondary development of `uni statistics 2.0`

-   uni-admin documentation: [see details](https://uniapp.dcloud.net.cn/uniCloud/admin.html)
-   uni-id documentation: [see details](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html)
-   opendb documentation: [see details](https://uniapp.dcloud.net.cn/uniCloud/opendb.html)
