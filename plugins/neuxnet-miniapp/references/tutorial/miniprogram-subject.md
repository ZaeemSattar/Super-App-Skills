---
title: "Mini Program Custom Component Support"
source_url: https://miniapp.neuxnet.com/tutorial/miniprogram-subject.html
---
##  Mini Program Custom Component Support

`uni-app` supports the use of **Mini Program Custom Components** in App and Mini Programs. From HBuilderX2.4.7, H5 can also run WeChat Mini Program components.

The applet component is not a vue component, and each applet has its own component specification. For example, the component of the WeChat applet is in wxml format.

**Platform difference description**

| Platform | Support | Mini Program Components Storage Directory |
| --- | --- | --- |
| H5 | Support WeChat Mini Program Components (2.4.7+) | wxcomponents |
| App (excluding nvue) | Support WeChat applet components | wxcomponents |
| WeChat applet | Support WeChat applet components | wxcomponents |
| Alipay Mini Program | Support Alipay Mini Program Components | mycomponents |
| Baidu applet | Support Baidu applet components | swancomponents |
| ByteDance applet, Feishu applet | Support ByteDance applet, Feishu applet components | ttcomponents |
| QQ applet | Support QQ applet components | wxcomponents |
| Kuaishou applet | Support Kuaishou applet components | kscomponents |
| JD Mini Programs | Support JD Mini Program Components | jdcomponents |

This document requires developers to have a certain understanding of the **custom components** of the applet at each end. Those who have not touched the **custom components** of the applet can refer to:

-   [WeChat Mini Program Custom Component](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)
-   [Baidu Mini Program Custom Component](https://smartprogram.baidu.com/docs/develop/framework/custom-component/)
-   [Alipay Mini Program Custom Component](https://docs.alipay.com/mini/framework/custom-component-overview)
-   [Byte Beat Mini Program Custom Component](https://developer.toutiao.com/docs/framework/custom_component_intro.html)
-   [Feishu Mini Program Custom Components](https://open.feishu.cn/document/uYjL24iN/ugTOugTOugTO)
-   [QQ Mini Program Custom Components](https://q.qq.com/wiki/develop/miniprogram/frame/diy_components/)
-   [Custom Component of Kuaishou Mini Program](https://mp.kuaishou.com/docs/develop/frame/custom_comp/component_temp_style.html)
-   [JD Mini Program Custom Component](https://mp-docs.jd.com/framework/customcomponent/)

**Directory Structure**

	
`┌─wxcomponents                  微信小程序自定义组件存放目录 │   └──custom                   微信小程序自定义组件 │		├─index.js │		├─index.wxml │		├─index.json │		└─index.wxss ├─mycomponents                  支付宝小程序自定义组件存放目录 │   └──custom                   支付宝小程序自定义组件 │		├─index.js │		├─index.axml │		├─index.json │		└─index.acss ├─swancomponents                百度小程序自定义组件存放目录 │   └──custom                   百度小程序自定义组件 │		├─index.js │		├─index.swan │		├─index.json │		└─index.css ├─pages │  └─index │		└─index.vue │ ├─static ├─main.js ├─App.vue ├─manifest.json └─pages.json`
	

**How to use**

Introduce components in the style -> usingComponents of the corresponding page in `pages.json`:

```
{
	"pages": [{
		"path": "index/index",
		"style": {
			// #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
			"usingComponents": {
				"custom": "/wxcomponents/custom/index"
			},
			// #endif
			// #ifdef MP-BAIDU
			"usingComponents": {
				"custom": "/swancomponents/custom/index"
			},
			// #endif
			// #ifdef MP-ALIPAY
			"usingComponents": {
				"custom": "/mycomponents/custom/index"
			},
			// #endif
			"navigationBarTitleText": "uni-app"
		}
	}]
}

```

use in the page

```
<!-- Page Template (index.vue) -->
<view>
    <!-- Reference the custom component in the page -->
    <custom name="uni-app"></custom>
</view>
```

**CODE EXAMPLE**

The following uses the WeChat Mini Program official custom component example [miniprogram-slide-view](https://github.com/wechat-miniprogram/slide-view) as an example to demonstrate how to use the Mini Program custom component. See GitHub for other component usage examples: [wxcomponents-template](https://github.com/dcloudio/uni-app/tree/master/examples/wxcomponents-template) . The plugin market has a complete `vant weapp` referenced example project, see \[https://ext.dcloud.net.cn/plugin?id=302\](https://ext.dcloud.net. cn/plugin?id=302).

Directory Structure

```

┌─components
├─wxcomponents
│   └──miniprogram-slide-view
│		├─index.js
│		├─index.wxml
│		├─index.json
│		└─index.wxss
│
├─pages
│  └─slide-view
│		└─slide-view.vue
│
├─static
├─main.js
├─App.vue
├─manifest.json
└─pages.json
```

pages.json

```
{
    "pages": [
        {
        	"path": "slide-view/slide-view",
        	"style": {
        		"navigationBarTitleText": "slide-view",
        		"usingComponents": {
        			"slide-view": "/wxcomponents/miniprogram-slide-view/index"
        		}
        	}
        }
    ]
}
```

slide-view.vue

```
<template>
	<view class='slide'>
		<slide-view width="750" height="110" slide-width="500">
			<view slot="left" class="l">
				<image src="/static/file_transfer.jpg" class="img"></image>
				<view class='text'>
					<view class='title'>文件传输助手</view>
					<view class='time'>7:00 PM</view>
				</view>
			</view>
			<view slot="right" class="r">
				<view class='read'>标为已读</view>
				<view class='delete'>删除</view>
			</view>
		</slide-view>
	</view>
</template>
<script>
	export default {}
</script>
<style>
	.slide {
		border-bottom: 1px solid #DEDEDE;
	}
	.l {
		background-color: white;
		height: 110rpx;
		width: 750rpx;
		display: flex;
		flex-direction: row;
	}
	.r {
		height: 110rpx;
		display: flex;
		direction: row;
		text-align: center;
		vertical-align: middle;
		line-height: 110rpx;
	}
	.read {
		background-color: #ccc;
		color: #fff;
		width: 350rpx;
	}
	.delete {
		background-color: red;
		color: #fff;
		width: 150rpx;
	}
	.img {
		width: 90rpx;
		height: 90rpx;
		border-radius: 10rpx;
		margin: 10rpx 15rpx;
	}
	.text {
		display: flex;
		flex-direction: row;
	}

	.title {
		margin-top: 15rpx;
		font-size: 33rpx;
	}
	.time {
		margin-top: 15rpx;
		color: #ccc;
		font-size: 25rpx;
		margin-left: 330rpx;
	}
</style>
```

**Precautions**

-   The applet components need to be placed in the project special folder `wxcomponents` (or mycomponents, swancomponents). The `wxcomponents` folder of the project created by HBuilderX is in the project root directory. The `wxcomponents` folder of the project created by vue-cli is in the `src` directory. Additional directories can be customized in vue.config.js
-   The performance of the applet component is not as good as that of the vue component. Using the applet component, you need to manually setData yourself, and it is difficult to automatically manage differential data updates. Using the vue component will automatically diff update the difference data. So if there is no obvious need, it is recommended to use the vue component instead of the applet component. For example, some small program ui components can be completely replaced by higher-performance uni ui.
-   When you need to use applet components in `vue` components, pay attention to configure `usingComponents` in `globalStyle` of `pages.json`, not page-level configuration.
-   Pay attention to the difference between data and event binding, components should be used according to the data and event binding method of `vue`
    -   Attribute binding changed from `attr=""` to `:attr="a"`; from `title="checkbox"` to `:title=" 'checkbox' + item"`
    -   Changed event binding from `bind:click="toggleActionSheet1"` to `@click="toggleActionSheet1"`. Currently Alipay applet does not support `vue` event binding method, please refer to: [Alipay applet component event monitoring Example](https://github.com/dcloudio/uni-app/issues/917#issuecomment-653329693)
    -   Stop event bubbling changed from `catch:tap="xx"` to `@tap.native.stop="xx"`
    -   `wx:if` changed to `v-if`
    -   `wx:for="" wx:key=""` was changed to `v-for="(item,index) in list"`

For details on the syntax differences between Mini Program and uni-app, please refer to the document [https://ask.dcloud.net.cn/article/35786](https://ask.dcloud.net.cn/article/35786) .

##  WXS

WXS is a scripting language that runs on the view layer. [For details on WeChat, see details](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxs/) .

It is characterized by running in the view layer. When it is necessary to avoid the loss of interactive communication between the logic layer and the rendering layer, wxs can be used.

uni-app can compile wxs code to WeChat applet, QQ applet, app-vue, H5 (`uni-app 2.2.5` and above)

Similar to wxs, Baidu applet provides Filter, Alibaba applet provides SJS, uni-app also supports these functions, and compiles them into Baidu and Alibaba applet. But they are not as powerful as wxs. In addition, the Toutiao applet itself does not support similar functions.

**Platform difference description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet |
| --- | --- | --- | --- | --- | --- | --- |
| √(nvue not supported) | √ | √ | SJS | Filter | x | √ |

App-side nvue to solve such needs, should not use wxs, but use bindingx.

**wxs example**

The following are some simple examples of using WXS. For a complete understanding of WXS syntax, please refer to [WXS Syntax Reference](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/) . This example uses wxs to respond to the `touchmove` event, reducing the communication between the view layer and the logic layer, and making the sliding smoother.

```
<template>
	<view>
		<view class="area">
			<view @touchstart="test.touchstart" @touchmove="test.touchmove" class="movable">{{test.msg}}</view>
		</view>
	</view>
</template>
<script module="test" lang="wxs">
	var startX = 0
	var startY = 0
	var lastLeft = 50; var lastTop = 50
	function touchstart(event, ins) {
		console.log("touchstart")
	  var touch = event.touches[0] || event.changedTouches[0]
	  startX = touch.pageX
	  startY = touch.pageY
	}
	function touchmove(event, ins) {
	  var touch = event.touches[0] || event.changedTouches[0]
	  var pageX = touch.pageX
	  var pageY = touch.pageY
	  var left = pageX - startX + lastLeft
	  var top = pageY - startY + lastTop
	  startX = pageX
	  startY = pageY
	  lastLeft = left
	  lastTop = top
	  ins.selectComponent('.movable').setStyle({
	    left: left + 'px',
	    top: top + 'px'
	  })
		return false
	}
	module.exports = {
		msg: 'Hello',
	  touchstart: touchstart,
	  touchmove: touchmove
	}
</script>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style>
.area{
	position: absolute;
	width: 100%;
	height: 100%;
}
.movable{
	position: absolute;
	width: 100px;
	height: 100px;
	left: 50px;
	top: 50px;
	color: white;
	text-align: center;
	line-height: 100px;
	background-color: red;
}
</style>
```

Alipay applet and Baidu applet do not officially support event response, but you can also use the corresponding SJS and Filter filters to implement some data processing operations. The following code shows a small function of time formatting

`index.vue`

```
<template>
	<view>
		<view>
			{{timestr}} 是
		</view>
		<view>
			{{utils.friendlyDate(timestamp)}}
		</view>
	</view>
</template>
<script module="utils" lang="filter" src="./utils.filter.js"></script>
<script module="utils" lang="sjs" src="./utils.sjs"></script>

<script>
	export default {
		data() {
			return {
				timestr: '2019/08/22 10:10:10',
				timestamp: 0
			}
		},
		created() {
			this.timestamp = new Date(this.timestr).getTime()
		},
		methods: {
		}
	}
</script>
```

`utils.sjs` is the same as `utils.filter.js`

```
export default {
	friendlyDate: (timestamp) => {
		var formats = {
			'year': '%n% 年前',
			'month': '%n% 月前',
			'day': '%n% 天前',
			'hour': '%n% 小时前',
			'minute': '%n% 分钟前',
			'second': '%n% 秒前',
		};
		var now = Date.now();
		var seconds = Math.floor((now - parseInt(timestamp)) / 1000);
		var minutes = Math.floor(seconds / 60);
		var hours = Math.floor(minutes / 60);
		var days = Math.floor(hours / 24);
		var months = Math.floor(days / 30);
		var years = Math.floor(months / 12);

		var diffType = '';
		var diffValue = 0;
		if (years > 0) {
			diffType = 'year';
			diffValue = years;
		} else {
			if (months > 0) {
				diffType = 'month';
				diffValue = months;
			} else {
				if (days > 0) {
					diffType = 'day';
					diffValue = days;
				} else {
					if (hours > 0) {
						diffType = 'hour';
						diffValue = hours;
					} else {
						if (minutes > 0) {
							diffType = 'minute';
							diffValue = minutes;
						} else {
							diffType = 'second';
							diffValue = seconds === 0 ? (seconds = 1) : seconds;
						}
					}
				}
			}
		}
		return formats[diffType].replace('%n%', diffValue);
	}
}
```

**Notice**

introduction method

```
<!-- inline -->
<script module="test" lang="wxs">
  //...code
</script>
<script module="utils" lang="filter">
  //...code
</script>

<!-- External import -->
<script module="utils" lang="wxs" src="./utils.wxs"></script>
<script module="utils" lang="filter" src="./utils.filter.js"></script>
<script module="utils" lang="sjs" src="./utils.sjs"></script>
```

-   **\[Important\]** When writing the content of wxs, sjs, filter.js, you must follow the corresponding syntax specifications
-   **\[Important\]** The module name specified by `module` cannot have the same name as the attributes in `data`, `methods`, and `computed`
-   `setup script` usage is not supported in vue3 projects
-   At present, the relevant specifications of each applet are being improved, and there may be major changes. Please read the documentation of the corresponding platform carefully
-   Please use sjs specification for Alipay applet, [see details](https://docs.alipay.com/mini/framework/sjs)
-   Alipay applet sjs can only be defined in the .sjs file, and then imported using the `<script>` tag
-   The tag attributes `name` and `from` of the Alipay applet `script` have been unified into `module` and `src`, so as to realize the unified writing method on multiple platforms in the future
-   Please use Filter specification in Baidu applet, [see details](https://smartprogram.baidu.com/docs/develop/framework/view_filter/)
-   Baidu applet Filter can only export `function` function
-   It is not supported to call other files of the same type in wxs, sjs, filter.js
-   wxs and filter.js can be used both inline and externally, while sjs can only be imported externally
-   QQ applet currently does not support inline wxs well, some writing methods may lead to compilation errors, try to use externally imported methods
-   `wxcomponents` can also use wxs in WeChat custom components
-   `nvue` page does not support wxs, sjs, filter.js
-   Each `script` tag will be packaged to the corresponding supported platform, no additional conditional compilation is required
-   Since `HBuilderX 2.2.5`, it is not recommended to use the import method of each applet, and it is recommended to use the `script` tag to import
-   App and H5 side, provide an upgraded version of wxs, more powerful, see the following [renderjs](./renderjs.md) chapter
