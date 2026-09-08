---
title: "Create a new page"
source_url: https://miniapp.neuxnet.com/tutorial/page.html
---
##  Create a new page

Pages in `Mini App` are usually stored in the `pages` directory located at the project root directory.

Every time you create a new page, you need to configure the `pages` list in `pages.json`; for pages that are not configured in `pages.json -> pages`, will be ignored by the `Mini App` in the compilation phase. For complete configuration reference of pages.json: refer to [global file](../collocation/pages.md).

##  Delete page

When you delete a page, you need to do two things:

-   delete `.vue` file
-   Remove the configuration from the `pages.json -> pages` list

##  Application homepage

The `Mini App` will use the first page in the `pages.json -> pages` configuration as the homepage (startup page) for the current project.

##  Page life cycle

![](https://miniapp.neuxnet.com/2024-09-04_10-18-19/assets/img/Pagelifecycle.747fdbbc.jpeg)

`Mini App` supports the following page life cycle functions:

| Function name | Description | Platform Supported |
| --- | --- | --- |
| onLoad | Listen for page loading, with parameters being data passed from the previous page. The parameter type is Object (used for passing parameters between pages), refer to[Example](../api/router.md#navigateto) |  |
| onShow | Listen for page display. This event is triggered every time the page appears on the screen, including when returning from a lower-level page to reveal the current page. |  |
| onReady | Listen for the first rendering completion of the page. Note that if the rendering speed is fast, it may trigger before the page entry animation is complete |  |
| onHide | Listen for the pagehide event |  |
| onUnload | Listen for the page unload event |  |
| onResize | Listen for window size changes | Mini App |
| onPullDownRefresh | Listen for user pull-down actions, commonly used for pull-down refresh, refer to[Example](../api/ui/pulldown.md) |  |
| onReachBottom | The event that a page is scrolled to the bottom (not scroll-view to the bottom) is often used to pull down the data on the next page. Refer to the notes below for details |  |
| onPageScroll | Listen for page scrolling, with parameters as an Objec | not supported by nvue temporarily |
| onNavigationBarButtonTap | Listen for the native title bar button click event, with parameters as an Object |  |
| onBackPress | Listen for page return events, return event = {from:backbutton, navigateBack} , where backbutton indicates the source is the top left corner back button or the android return key, and navigateBack indicates the source is uni.navigateBack. Fore detailed description and usage: \[onBackPress detailed\]. Note that Alipay Mini Apps can only be triggered by real functions, and can only listen to the return caused by non-navigateBack, and cannot prevent the default behavior. |  |
| onNavigationBarSearchInputChanged | Listen for changes in the input content of the native title bar search box |  |

##  onReachBottom

`onReachBottom` usage notes You can define the specific triggering distance from the bottom of a specific page in pages.json [onReachBottomDistance](../collocation/pages.md#globalstyle), for example, set it to 50, means that onReachBottom event will be triggered when scrolling the page to a distance of 50px from the bottom. If using scroll-view causes no scrolling in the page, the scrolling to the bottom event will not be triggered. Please refer to the documentation of scroll-view for the scrolling to the bottom event of scroll-view

##  onPageScroll

`onPageScroll` (scroll, scroll listener, scroll event) parameter description:

| Attribute | Type | Description |
| --- | --- | --- |
| scrollTop | Number | The distance that the page has been scrolled vertically, measured in pixels |

**Note**

-   In `onPageScroll` avoid writing complex JavaScript interactions, such as frequently modifying the page. This lifecycle is triggered in the rendering layer, and in non-h5 platforms, JavaScript is executed in the logic layer. Communication between these two layers involves some overhead. If there is frequent data exchange between the two layers during scrolling, it may cause lag.
-   To achieve a transparent gradient effect on the title bar during scrolling, you can configure the type under titleNView in pages.json as transparent for both App and H5 platforms.
-   If you need to make certain elements stick to the top while scrolling, it is recommended to use CSS sticky layout.
-   `async` is not available on `onBackPress`, which will prevent the default return

```
onPageScroll : function(e) { 
	console.log("The scrolling distance is：" + e.scrollTop);
},
```

Description of the json object returned by `onTabItemTap`:

| Attribute | Type | Description |
| --- | --- | --- |
| index | String | The index of the clicked tabItem, starting from 0 |
| index | String | The serial number of the clicked tabItem, starting from 0 |
| pagePath | String | The page path of the clicked tabItem |
| pagePath | String | The page path of the clicked tabItem |
| text | String | The text of the button on the clicked tabItem |
| text | String | The buttom text of the clicked tabItem |

**Note**

-   onTabItemTap is commonly used for handling the click event on the current tabItem, allowing actions such as scrolling or refreshing the current page. If a different tabItem is clicked, it will always trigger a page switch.

```
onTabItemTap : function(e) {
	console.log(e);
	// Return format of e is json object: {"index":0,"text":"Home page","pagePath":"pages/index/index"}
},
```

`onNavigationBarButtonTap` parameter description:

| Attribute | Type | Description |
| --- | --- | --- |
| index | Number | The index of the native title bar button array |

```
onNavigationBarButtonTap : function (e) {
	console.log(e);
	// Return format of e is json object：{"text":" testing","index":0}
	// The return format of e is a json object: {"text":"test","index":0}
}
```

Description of `onBackPress` callback parameter object:

| Attribute | Type | Description |
| --- | --- | --- |
| from | String | Source of the triggered return behavior：'backbutton'—— Left-top navigation bar button and the Android back key；'navigateBack'——uni.navigateBack() Method. |

```
export default {
	data() {
		return {};
	},
	onBackPress(options) {
		console.log('from:' + options.from)
	}
}
```

##  Component life cycle

The `Mini App` component supports the same lifecycle as the vue standard components. There is no page-level onLoad and other life cycles here:

| Function name | Instruction |  |
| --- | --- | --- |
| beforeCreate | is called before the instance is initialized. [See details](https://vuejs.org/api/options-lifecycle.html#beforeCreate) |  |  |
| created | Called immediately after the instance is created. [See details](https://vuejs.org/api/options-lifecycle.html#created) |  |  |
| beforeMount | Called before mounting begins. [See details](https://vuejs.org/api/options-lifecycle.html#beforemount) |  |  |
| mounted | Called after being mounted to the instance. [See details](https://vuejs.org/api/options-lifecycle.html#mounted) Note: It is not certain that all the sub-components are mounted here. If you need to perform operations after sub-components are fully mounted, you can use `$nextTick`[Vue official documents](https://vuejs.org/api/component-instance.html#nexttick) |  |  |
| beforeUpdate | Called when the data is updated, which occurs before the virtual DOM is patched. [See details](https://vuejs.org/api/options-lifecycle.html#beforeUpdate) | Only supported by H5 platform |  |
| updated | The virtual DOM is re-rendered and patched due to data changes, after which the hook will be called. [See details](https://vuejs.org/api/options-lifecycle.html#updated) | Only supported by H5 platform |  |
| beforeDestroy | Called before the instance is destroyed. At this step, the instance is still fully available. [See details](https://vuejs.org/api/options-lifecycle.html#beforeunmount) |  |  |
| destroyed | Call after the Vue instance is destroyed. After calling, everything indicated by Vue instance will be unbound. All event listeners will be removed, and all sub-instances will be destroyed. [See details](https://vuejs.org/api/options-lifecycle.html#unmounted) |  |  |

##  Calling an API from the page

###  getApp()

The `getApp()` function is used to get the current application instance, generally used to get globalData.

**Instance**

```
const app = getApp()
console.log(app.globalData) 
```

**Note:**

-   Do not call `getApp()` withing functions defined in `App()` or before calling `App`, you can access the corresponding app instance through `this.$scope`
-   After obtaining the instance through `getApp()`, do not arbitrarily call the life cycle functions.
-   When you use `getApp()` in the home page `nvue`, you may not necessarily get the real `App` object. For this reason, `const app = getApp({allowDefault: true})` is provided to obtain the original `App` object, which can be used to initialize `globalData` etc. on the homepage

###  getCurrentPages()

The \`\`getCurrentPages()\`\`\` function is used to get the current page stack instance, which is given in the order of the stack in the form of an array, the first element is the home page, and the last element is the current page.

**Note:** `getCurrentPages()` is only used to display the page stack, please do not modify the page stack to avoid page status errors.

List of method properties for each page instance:

| Methods | Description | Platform Description |
| --- | --- | --- |
| page.$getAppWebview() | Get the webview object instance of the current page | App |
| page.route | Get the route of the current page |  |

Tips：

-   `navigateTo`, `redirectTo` can only open non-tabBar pages.
-   -   `switchTab` can only open `tabBar` pages.
-   `reLaunch` can open any page.
-   The `tabBar` at the bottom of the page is determined by the page, that is, as long as it is a page defined as `tabBar`, there is a `tabBar` at the bottom.
-   You cannot perform page jumps in `App.vue`.

`getCurrentPages()` can get all page objects, and then according to the array, you can get the specified page webview object

```
var pages = getCurrentPages();
var page = pages[pages.length - 1];
// #ifdef APP-PLUS
var currentWebview = page.$getAppWebview();
console.log(currentWebview.id);// Get the ID of the current webview
console.log(currentWebview.isVisible());//Check if the current webview is visible
);
// #endif
```

The web-view component that comes with Mini App is a newly inserted sub-webview in the page. For the method of obtaining this object.

##  page communication

###  uni.$emit(eventName,OBJECT)

Trigger a global custom event. Additional parameters are passed to the listener callback.

| Attribute | Type | Describtion |
| --- | --- | --- |
| eventName | String | Event name |
| OBJECT | Object | Additional parameters carried by triggering events |

**Code example**

```
	uni.$emit('update',{msg:' Page Update '})
```

###  uni.$on(eventName,callback)

Listen to global custom events. Events can be triggered by uni.$emit, and the callback function receives all the additional parameters of the incoming event trigger function.

| Attribute | Type | Describe |
| --- | --- | --- |
| eventName | String | Event name |
| callback | Function | Event callback function |

**Code example**

```
	uni.$on('update',function(data){
		console.log('Listening to an event from the "update" source, carrying the parameter msg：' + data.msg);
	})
```

###  uni.$once(eventName,callback)

Listen to global custom events. Events can be triggered by uni.$emit, but only once. Remove the listener after the first trigger.

| Attribute | Type | Describe |
| --- | --- | --- |
| eventName | String | Event name |
| callback | Function | Event callback function |

**Code example**

```
	uni.$once('update',function(data){
		console.log('Listening to an event from the "update" source, carrying the parameter msg：' + data.msg);
	})
```

###  uni.$off(\[eventName, callback\])

Remove the global custom event listener.

| Attribute | Type | Describtion |
| --- | --- | --- |
| eventName | Array＜String＞ | Event name |
| callback | Function | Event callback function |

**Tips**

-   If no parameters are provided, remove all event listeners;
-   If only the event is provided, remove all listeners of the event;
-   If both event and callback are provided, only the listener of this callback will be removed;
-   The provided callback must be the same one as the callback of $on to remove the listener of this callback;

**Code example**

`$emit`, `$on` and `$off` are commonly used for cross-page and cross-component communication, and are placed on the same page for easy demonstration

```
	<template>
		<view class="content">
			<view class="data">
				<text>{{val}}</text>
			</view>
			<button type="primary" @click="comunicationOff">End
Listening</button>
		</view>
	</template>
	
	<script>
		export default {
			data() {
				return {
					val: 0
				}
			},
			onLoad() {
				setInterval(()=>{
					uni.$emit('add', {
						data: 2
					})
				},1000)
				uni.$on('add', this.add)
			},
			methods: {
				comunicationOff() {
					uni.$off('add', this.add)
				},
				add(e) {
					this.val += e.data
				}
			}
		}
	</script>
	
	<style>
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	
		.data {
			text-align: center;
			line-height: 40px;
			margin-top: 40px;
		}
	
		button {
			width: 200px;
			margin: 20px 0;
		}
	</style>
	
```

\*\* Considerations \*\*

-   The events triggered by uni.$emit, uni.$on, uni.$once and uni.$off are all at the App global level, spanning arbitrary component, page, nvue, vue, etc.
-   When using, remember to destroy event listening to in time, for example, if you register a listener using uni.$on in the onLoad of a page, remove it using uni.$off in onUnload. For one time events, you can directly use uni.$once to listen.

##  Routing

`Mini App` page routing is managed by the framework. Developers need to configure the path and page style of each routing page in [pages.json](../collocation/pages.md#pages). Similar to the configuring page routing in app.json. Therefore, the routing usage of `Mini App` is different from that of `Vue Router`. If you still want to use `Vue Router` to manage routing, you can search for Vue-Router.

###  Routing navigation

`Mini App` has two ways to jump to page routing: use [navigator](../component/navigator.md) component to jump, and call [API](../api/router.md) to jump.

##  page stack

The framework manages all current pages in the form of stack. When a route switch occurs, the page stack behaves as follows:

| Routing mode | Page stack performance | Trigger timing |
| --- | --- | --- |
| Initialization | Pushing a new page into the stack | The first page opened by Mini App |
| Open a new page | New page onto the stack | Call API [uni.navigateTo](../api/router.md#navigateto), use component [<navigator open-type="navigate"/>](../component/navigator.md#navigator) |
| Page redirection | The current page is popped from the stack, and a new page is pushed onto the stack | Calling API [uni.redirectTo](../api/router.md#redirectto)  、Using Components [<navigator open-type="redirectTo"/>](../component/navigator.md#navigator) |
| Page return | The page is constantly popped until the target returns to the page | Call API [uni.navigateBack](../api/router.md#navigateback) use component [<navigator open-type="navigateBack"/>](../component/navigator.md#navigator)&nbsp, user presses back button in the upper left corner, Android user presses back button |
| Tab switching | All the pages are out of the stack, leaving only the new Tab page | Call API [uni.switchTab](../api/router.md#switchtab) 、use component [<navigator open-type="switchTab"/>](../component/navigator.md#navigator)、User switches Tab |
| Reload | All the pages are out of the stack, leaving only the new page | Call API [uni.reLaunch](../api/router.md#relaunch) 、use component  [<navigator open-type="reLaunch"/>](../component/navigator.md#navigator) |

##  Page code specification introduction

`Mini App` supports nesting `<template/>` in templates and `<block/>` in the template, which is used for [listrendering](./vue3-basics.md#listrendering) and [conditional rendering](./vue3-basics.md#condition).

`<template/>` and `<block/>` is not a component, they are just a wrapper element that doesn't do any rendering on the page and only accepts control properties.

`<block/>` There are some differences in the performance of different platforms, it is recommended to use it uniformly`<template/>`.

**Code example**

```
<template>
	<view>
		<template v-if="test">
			<view>test is true display</view>
		</template>
		<template v-else>
			<view>test is false display </view>
		</template>
	</view>
</template>
```

```
<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view>{{item}} - {{index}}</view>
		</block>
	</view>
</template>
```
