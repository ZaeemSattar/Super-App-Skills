---
title: "npm"
source_url: https://miniapp.neuxnet.com/worktile/CLI.html
---
The `uni-app` project supports two scaffolding tools, `uni cli` and `HBuilderX cli`:

-   `uni cli`: For non-HBuilderX users (such as developers who are accustomed to using vscode/webstorm), it provides the ability to create projects, compile and release, etc.; on the App platform, only supports generating offline packaged wgt resource packages, not cloud packaging Generate apk/ipa; if you need cloud packaging, you still need to install HBuilderX and use `HBuilderX cli`;
-   `HBuilderX cli`: an automation tool for HBuilderX users, providing continuous integration capabilities of `uni-app` projects; support for web packaging, applet packaging, App cloud packaging, deployment of uniCloud, etc. through `HBuilderX cli`; but pay attention to HBuilderX Linux platform is not supported yet. Also note that `HBuilderX cli` is not based on npm, it is `cli.exe` in the HBuilderX installation directory.

A complete `cli` scaffolding is provided to create, run, and distribute `uni-app` projects through `vue-cli`.

##  uni cli

###  [Environment installation](https://miniapp.neuxnet.com/quickstart-cli.html#install-vue-cli)

###  compile and run

####  App Platform

```
# npm
npm run build:app-plus
npm run dev:app-plus
# vue3项目
npm run build:app
npm run dev:app

# yarn
yarn build:app-plus
yarn dev:app-plus
# vue3项目
yarn build:app
yarn dev:app

# 监听文件变化且启用压缩
yarn build:app-plus --watch
# vue3项目
yarn build:app -w
```

Tips：

-   When vue2 is released to the App platform, the platform parameter is `app-plus`; when vue3 is released to the App platform, the platform parameter is `app`;
-   `uni cli` on the App platform only supports the generation of offline packaged wgt resource packages, and does not support cloud package generation of apk/ipa; if cloud package is required, you still need to install HBuilderX and use `HBuilderX cli`.

####  H5

```
# npm
npm run build:h5
npm run dev:h5

# yarn
yarn build:h5
yarn dev:h5

# 监听文件变化且启用压缩
yarn build:h5 --watch
# vue3项目
yarn build:h5 -w
```

####  WeChat Mini Program

```
# npm
npm run build:mp-weixin
npm run dev:mp-weixin

# yarn
yarn build:mp-weixin
yarn dev:mp-weixin

# 监听文件变化且启用压缩
yarn build:mp-weixin -watch
# vue3项目
yarn build:mp-weixin -w
```

####  Alipay applet

```
# npm
npm run build:mp-alipay
npm run dev:mp-alipay

# yarn
yarn build:mp-alipay
yarn dev:mp-alipay

# 监听文件变化且启用压缩
yarn build:mp-alipay -watch
# vue3项目
yarn build:mp-alipay -w
```

####  Baidu Mini Program

```
# npm
npm run build:mp-baidu
npm run dev:mp-baidu

# yarn
yarn build:mp-baidu
yarn dev:mp-baidu

# 监听文件变化且启用压缩
yarn build:mp-baidu -watch
# vue3项目
yarn build:mp-baidu -w
```

####  Byte Beat applet

```
# npm
npm run build:mp-toutiao
npm run dev:mp-toutiao

# yarn
yarn build:mp-toutiao
yarn dev:mp-toutiao

# 监听文件变化且启用压缩
yarn build:mp-toutiao -watch
# vue3项目
yarn build:mp-toutiao -w
```

####  Feishu Mini Program

```
# npm
npm run build:mp-lark
npm run dev:mp-lark

# yarn
yarn build:mp-lark
yarn dev:mp-lark

# 监听文件变化且启用压缩
yarn build:mp-lark -watch
# vue3项目
yarn build:mp-lark -w
```

####  QQ Mini Program

```
# npm
npm run build:mp-qq
npm run dev:mp-qq

# yarn
yarn build:mp-qq
yarn dev:mp-qq

# 监听文件变化且启用压缩
yarn build:mp-qq -watch
# vue3项目
yarn build:mp-qq -w
```

####  Kuaishou applet

```
# npm
npm run build:mp-kuaishou
npm run dev:mp-kuaishou

# yarn
yarn build:mp-kuaishou
yarn dev:mp-kuaishou

# 监听文件变化且启用压缩
yarn build:mp-kuaishou -watch
# vue3项目
yarn build:mp-kuaishou -w
```

####  Quick application (webview)

```
# npm
npm run build:quickapp-webview
npm run dev:quickapp-webview

# yarn
yarn build:quickapp-webview
yarn dev:quickapp-webview

# 监听文件变化且启用压缩
yarn build:quickapp-webview -watch
# vue3项目
yarn build:quickapp-webview -w
```

####  Quick Application Alliance

```
# npm
npm run build:quickapp-webview-union
npm run dev:quickapp-webview-union

# yarn
yarn build:quickapp-webview-union
yarn dev:quickapp-webview-union

# 监听文件变化且启用压缩
yarn build:quickapp-webview-union -watch
# vue3项目
yarn build:quickapp-webview-union -w
```

####  Quick application Huawei

```
# npm
npm run build:quickapp-webview-huawei
npm run dev:quickapp-webview-huawei

# yarn
yarn build:quickapp-webview-huawei
yarn dev:quickapp-webview-huawei

# 监听文件变化且启用压缩
yarn build:quickapp-webview-huawei -watch
# vue3项目
yarn build:quickapp-webview-huawei -w
```

####  360 applet

```
# npm
npm run build:mp-360
npm run dev:mp-360

# yarn
yarn build:mp-360
yarn dev:mp-360

# 监听文件变化且启用压缩
yarn build:mp-360 --watch
```

You can customize more conditional compilation platforms, such as DingTalk applet, refer to [package.json document](https://uniapp.dcloud.io/collocation/package) .

##  HBuilderX cli

Developers can instruct HBuilderX to start, package, and log in through the cli command line. For details, please refer to: \[https://hx.dcloud.net.cn/cli/README\](https://hx.dcloud.net.cn /cli/README)
