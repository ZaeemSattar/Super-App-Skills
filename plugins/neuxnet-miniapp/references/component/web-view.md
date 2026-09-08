---
title: "web-view"
source_url: https://miniapp.neuxnet.com/component/web-view.html
---
####  web-view

`web-view` is a web browser component that can be used as a container for hosting web pages, and will automatically cover the whole page (you need to manually specify the width and height when using nvue).

**Attribute description**

| Attribute name | Type | Instruction | Platform |
| --- | --- | --- | --- |
| src | String | webview links to web pages |  |
| allow | String | Used to specify its [feature strategy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy) for [iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe) | H5 |
| sandbox | String | This attribute enables some additional restrictions on the content presented in the [iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe) frame. | H5 |
| fullscreen | Boolean | Whether to fill the entire page, default: `true`. | H5 |
| webview-styles | Object | Style of webview | Mini App |
| update-title | Boolean | Whether to automatically update the current page title. Default: `true` | Mini App |
| @message | EventHandler | When a web page sends `postMessage` to an application, it triggers and receives a message at a specific time (back, component destruction, sharing). | not supported by H5 temporarily (you can use [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) directly) |
| @onPostMessage | EventHandler | Web page sends real-time `postMessage` to application | Mini App-nvue |

**webview-styles**

| Attribute | Type | Instruction |
| --- | --- | --- |
| progress | Object/Boolean | Progress bar style. Only takes effect when web HTML is loaded. When set to `false`, the progress bar is disabled. |
| width | String | The width of the web-view component. |
| height | String | The height of the web-view component. |

**progress**

| Attribute | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| color | String | #00FF00 | Progress bar color |

```
<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="https://google.com/"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		}
	}
</script>

<style>

</style>
```

Notice:

-   Web pages and local pages are simultaneously supported on the Mini App platform. However, local web pages and related resources (js, css and other files) must be placed under the `Mini Appproject root directory->hybrid->html` folder or under the `static` directory. The following is an example of a `uni-app` project file directory that loads a local web page:
-   nvue `web-view` must specify the style width and height
-   App web page sends `postMessage` as real-time message to the application
-   mini app-nvue `web-view` has no size by default. You can set the size by style. If you want to fill the entire window, just set `flex: 1`. The title bar will not automatically display the title in the `web-view` page. If you want to fill the whole window and display the title, the `web-view` of the vue page is recommended (the default is to fill the screen with no controllable size); If you want to customize the size of the `web-view`, nvue `web-view` is recommended.

	
`┌─components ├─hybrid │  └─html │     ├─css │     │  └─test.css │     ├─img │     │  └─icon.png │     ├─js │     │  └─test.js │     └─local.html ├─pages │  └─index │     └─index.vue ├─static ├─main.js ├─App.vue ├─manifest.json └─pages.json`
	

The webpage loaded by `<web-view>` supports calling some uni interfaces:

| Method name | Instruction |
| --- | --- |
| uni.navigateTo | [navigateTo](../api/router.md#navigateto) |  |
| uni.redirectTo | [redirectTo](../api/router.md#redirectto) |  |
| uni.reLaunch | [reLaunch](../api/router.md#relaunch) |  |
| uni.switchTab | [switchTab](../api/router.md#switchtab) |  |
| uni.navigateBack | [navigateBack](../api/router.md#navigateback) |  |
| uni.postMessage | Send a message to the app | ByteDance applet does not support, H5 does not currently support (you can directly use \[window.postMessage\](https://developer.mozilla.org/zh-CN/docs/Web/ API/Window/postMessage)) |
| uni.getEnv | Get the current environment | ByteDance applet and Feishu applet are not supported |

#####  uni.postMessage(OBJECT)

The web page sends a message to the application, and receives the message in the `message`Event callback`event.detail.data` of `<web-view>`.

**Tips**

-   The message and information passed by must be written in the data object.
-   The data in `event.detail.data` to receive the message of each post in the form of an array.

#####  uni.getEnv(CALLBACK)

**The object returned by callback**

| Attribute | Type | Instruction |
| --- | --- | --- |
| plus | Boolean | Mini App |
| nvue | Boolean | Mini App-nvue |

**Example**

In the HTML loaded by `<web-view>`, add the following code:

#####  **App-side web-view extension**

The webview on the App side is very powerful and can be controlled more flexibly and has a richer API.

Each vue page is actually a webview, and the web-view component in the vue page is actually a sub-webview in the webview. This child webview is appended to the parent webview.

```
<template>
	<view>
		<web-view src="https://www.baidu.com"></web-view>
	</view>
</template>
<script>
export default {
	onReady() {
		// #ifdef APP-PLUS
		var currentWebview = this.$scope.$getAppWebview() 
		setTimeout(function() {
			wv = currentWebview.children()[0]
			wv.setStyle({top:150,height:300})
		}, 1000); 
		// #endif
	}
};
</script>
```

You can even create a child webview directly in js to load html without using the `web-view` component. For example, if you do not want the remote web page to use the plus API, whether it is for security reasons or because of back monitoring conflicts, you can use the following code:

```
<template>
	<view>
	</view>
</template>
<script>
export default {
	onLoad() {
		// #ifdef APP-PLUS
		wv = plus.webview.create("","custom-webview",{
			plusrequire:"none", 
      'uni-app': 'none', 
			top:uni.getSystemInfoSync().statusBarHeight+44 
		})
		wv.loadURL("https://www.baidu.com")
		var currentWebview = this.$scope.$getAppWebview(); 
		currentWebview.append(wv);
		setTimeout(function() {
			console.log(wv.getStyle())
		}, 1000);
		// #endif
	}
};
</script>
```

If you want to set the web-view component to be pinch-zoomable, you can refer to the following code:

```
export default {
	onReady() {
		// #ifdef APP-PLUS
		var currentWebview = this.$scope.$getAppWebview() 
		setTimeout(function() {
			wv = currentWebview.children()[0]
			wv.setStyle({scalable:true})
		}, 1000); 
		// #endif
	}
};
```

#####  Browser kernel description of the web-view component

-   The web-view on the H5 side is actually converted to an iframe to run with the current browser
    
-   On the App side, Android, the browser kernel that comes with os is used by default. In Settings - All Apps, system services are displayed, and you can view the version of Android System Webview. In Android5+, the system webview supports installation and upgrade.
    
-   On the App side, Android supports the configuration and selection of Tencent X5 browser kernel in the manifest.
    
-   On the App side, iOS is divided into UIWebview and WKWebview. From 2.2.5+, the default is WKWebview. For the previous version,
    

**Precautions**

-   The `<web-view>` component fills the full screen by default and is higher than the front-end component. If you want to adjust the size or overlay content on the App side, you need to use the plus specification, and the H5 side can directly use iframe instead.
-   The title of the window where the `<web-view>` component is located will change with the change of the `<title>` value of the page (excluding the H5 side).
-   The html page loaded by the `web-view` of App-vue can run the plus API, but note that if the page calls the plus.key API to monitor the back button (or uses the mui package), it will cause a back monitoring conflict. The html page needs to remove the monitor for back. Or disallow web pages from using plus objects as per the sample code above. The `web-view` component of the app-nvue page cannot run the plus API.

Example of nvue webview communication

```
<template>
	<view>
		<web-view ref="webview" class="webview" @onPostMessage="handlePostMessage"></web-view>
		<button class="button" @click="evalJs">
    </button>
	</view>
</template>

<script>
	export default {
		data: {
		},
		methods: {
			//webview sends messages to the outside
			handlePostMessage: function(data) {
			},
			//Call internal logic of webview
			evalJs: function() {
				this.$refs.webview.evalJs("document.body.style.background ='#00FF00'");
			}
		}
	}
</script>
```
