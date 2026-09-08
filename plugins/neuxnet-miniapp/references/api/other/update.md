---
title: "uni.getUpdateManager()"
source_url: https://miniapp.neuxnet.com/api/other/update.html
---
###  uni.getUpdateManager()

This API returns a **globally unique** version update manager object: updateManager, which is used to manage applet updates.

App updates do not use this API, see also the documentation:

-   Whole package update: [https://ask.dcloud.net.cn/article/34972](https://ask.dcloud.net.cn/article/34972)
-   Hot update of resource files (wgt upgrade): [https://ask.dcloud.net.cn/article/35667](https://ask.dcloud.net.cn/article/35667)

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | √ | √ | √ | √ | √ | √ |

**List of methods of the updateManager object:**

| Method | Parameters | Description |
| --- | --- | --- |
| onCheckForUpdate | callback | When the new version information is requested from the applet background, a callback will be made |
| onUpdateReady | callback | When the new version is downloaded, it will call back |
| onUpdateFailed | callback | When the download of the new version fails, a callback will be made |
| applyUpdate |  | When the new version is downloaded, calling this method will force the current applet to apply the new version and restart |

**onCheckForUpdate(callback) callback result description:**

| property | type | description |
| --- | --- | --- |
| hasUpdate | Boolean | Is there a new version |

**CODE EXAMPLE**

```
const updateManager = uni.getUpdateManager();

updateManager.onCheckForUpdate(function (res) {
  // Callback for requesting new version information
  console.log(res.hasUpdate);
});

updateManager.onUpdateReady(function (res) {
  uni.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success(res) {
      if (res.confirm) {
        // The new version has been downloaded, call applyUpdate to apply the new version and restart
        updateManager.applyUpdate();
      }
    }
  });

});

updateManager.onUpdateFailed(function (res) {
  // Failed to download new version
});
```
