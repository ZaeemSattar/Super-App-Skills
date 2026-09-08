---
title: "uni-app automated testing"
source_url: https://miniapp.neuxnet.com/worktile/auto/quick-start.html
---
#  uni-app automated testing

uni-app provides a batch of [API](https://miniapp.neuxnet.com/collocation/auto/api), these APIs can control the uni-app application, including running, jumping pages, triggering clicks, etc., and can obtain the status of page elements and take screenshots, so as to To achieve the purpose of automated testing of uni-app projects.

This function uses the common test libraries in the industry such as jest (MIT protocol).

Recommended usage: after R&D submits the source code to the version library, the continuous integration system automatically pulls the source code and automatically runs the automated test.

###  Features

Developers can use [API](https://miniapp.neuxnet.com/collocation/auto/api) to do the following:

-   Control the jump to a specified page
-   Get page data
-   Get page element status
-   Trigger element binding event
-   Call any interface on uni object

**Platform difference description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Quick application | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| √(ios only supports simulator) | √ | √ | x | x | x | x | x | x | x |

###  CLI

If you want to automate testing in `terminal command line`, or use continuous integration for testing, please use uni-app \[CLI\](https://uniapp.dcloud.net.cn/quickstart?id=\_2-via vue- cli command line) project, [CLI project automation test tutorial](https://miniapp.neuxnet.com/collocation/auto/uniapp-cli-project)

###  Test plugin

In order to facilitate everyone to perform uni-app automated testing in `HBuilderX`, [HBuilderX uni-app automated testing plugin](https://ext.dcloud.net.cn/plugin?id=5708) was developed.

The plugin supports automated testing of `uni-app common projects` and `CLI projects` in HBuilderX.

Plugins simplify the steps of test environment installation, test case creation, test running, test device selection, etc. [Plugin usage documentation](https://miniapp.neuxnet.com/collocation/auto/hbuilderx-extension/)

###  jest.config.js

The jest.config.js file is the test configuration file. The details are as follows:

```
module.exports = {
	globalTeardown: '@dcloudio/uni-automator/dist/teardown.js',
	testEnvironment: '@dcloudio/uni-automator/dist/environment.js',
	testEnvironmentOptions: {
		compile: true,
			url: "http://192.168.x.x:8080/h5/",
			options: {
				headless: false // 配置是否显示 puppeteer 测试窗口
			}
		},
		"app-plus": { // 需要安装 HBuilderX
			android: {
				appid: "", //自定义基座测试需配置manifest.json中的appid
				package: "", //自定义基座测试需配置Android包名
				executablePath: "HBuilderX/plugins/launcher/base/android_base.apk" // apk 目录或自定义调试基座包路径
			},
			ios: {
				// uuid must be configured, currently only the simulator is supported, you can (xcrun simctl list) view the simulator uuid to be used
				id: "",
				executablePath: "HBuilderX/plugins/launcher/base/Pandora_simulator.app" // ipa 目录
			}
		},
		"mp-weixin": {
			port: 9420, // 默认 9420
			account: "", // 测试账号
			args: "", // 指定开发者工具参数
			cwd: "", // 指定开发者工具工作目录
			launch: true, // 是否主动拉起开发者工具
			teardown: "disconnect", // 可选值 "disconnect"|"close" 运行测试结束后，断开开发者工具或关闭开发者工具
			remote: false, // 是否真机自动化测试
			executablePath: "", // 开发者工具cli路径，默认会自动查找,  windows: C:/Program Files (x86)/Tencent/微信web开发者工具/cli.bat", mac: /Applications/wechatwebdevtools.app/Contents/MacOS/cli
		},
		"mp-baidu": {
			port: 9430, // 默认 9430
			args: "", // 指定开发者工具参数
			cwd: "", // 指定开发者工具工作目录
			launch: true, // 是否主动拉起开发者工具
			teardown: "disconnect", // 可选值 "disconnect"|"close" 运行测试结束后，断开开发者工具或关闭开发者工具
			remote: false, // 是否真机自动化测试
			executablePath: "", // 开发者工具cli路径，默认会自动查找
		}
	},
	testTimeout: 15000,
	reporters: [
		'default'
	],
	watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
	moduleFileExtensions: ['js', 'json'],
	rootDir: __dirname,
	testMatch: ['<rootDir>/src/**/*test.[jt]s?(x)'], // 测试文件目录
	testPathIgnorePatterns: ['/node_modules/']
}

```

**Precautions**

1.  If the page involves sub-contracting loading, there may be a problem with the page path obtained by `reLaunch`. The solution is as follows:

```
// ReLaunch to the home page and get the page object (where program is the global object automatically injected by uni-automator)
page = await program.reLaunch('/pages/extUI/calendar/calendar')
// If the WeChat applet is a subcontracted page, it needs to be delayed for more than 7s to ensure that the page object can be obtained correctly
await page.waitFor(7000)
page = await program.currentPage()
```

2.  The WeChat applet element cannot select elements across components. First, you must obtain the current component, and then continue to search.

```
<uni-tag>
  <view class="test"></view>
</uni-tag>
```

```
// error, can't get element
await page.$('.test')

// get the element
let tag = await page.$('uni-tag')
await tag.$('.test')
```

3.  WeChat applet does not support parent-child selectors
4.  The Baidu applet selection element must have an event element to be selected, otherwise the prompt element does not exist
5.  For the pages in the subcontract, the delay time should be longer after opening, otherwise the page information cannot be obtained correctly
6.  App-android custom base test needs to configure appid (appid in manifest.json), package (package name), executablePath (custom debugging base package path) under the android node of the `jest.config.js` file

###  Test example

GitHub： [https://github.com/dcloudio/hello-uniapp](https://github.com/dcloudio/hello-uniapp)
