---
title: "Application Lifecycle"
source_url: https://miniapp.neuxnet.com/collocation/App.html
---
`App.vue` is the main component of Mini App. All pages are switched under `App.vue`, which is the page entry file. But `App.vue` itself is not a page, you can't write view elements here, that is, there is no `<template>`.

The functions of this file include: calling application life cycle function, configuring global style, and configuring global storage globalData

The application life cycle can only be listened to in `App.vue`, and listening to on the page is invalid.

##  Application Lifecycle

`Mini App` supports the following application life cycle functions:

| Function name | Instruction |
| --- | --- |
| onLaunch | Triggerred when the initialization of `Mini App` is completed (only triggered once globally) |
| onShow | Displayed when `Mini App` starts or enters the foreground from the background |
| onHide | When `Mini App` enters the background from the foreground |
| onError | Triggered when `Mini App` reports an error |
| onUniNViewMessage | To monitor the data sent by the `nvue` page |
| onUnhandledRejection | Listening function for unprocessed Promise reject events (2.8.1+) |
| onPageNotFound | The listener function does not exist on the page |
| onThemeChange | listen to system theme changes |

**Sample code**

```
<script>
	// Only monitor the application life cycle in App.vue
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
```

**Notice**

-   **Application life cycle can only be listened in `App.vue`, and listening on other pages is invalid**.
-   Application launch parameters can be obtained from API `uni.getLaunchOptionsSync`
-   Page jump can be performed in onlaunch. In case of a white screen error,
-   `App.vue` cannot write template
-   The onPageNotFound page has actually been opened (for example, by sharing the card, the applet code) and it is found that the page does not exist, and the page will not be triggered if the api jumps to a page that does not exist (such as uni.navigateTo)

##  globalData

The Mini App has globalData, which is a simple global variable mechanism.

**The following is the relevant configuration of defining globalData in App.vue:**

```
<script>  
    export default {  
        globalData: {  
            text: 'text'  
        }
    }  
</script>  
```

`getApp().globalData.text = 'test'`

While applying onLaunch, the getApp object has not been obtained yet, so you can use this.globalData to obtain globalData temporarily.

If you need to bind the data of globalData to the page, you can reassign variables in the life cycle of the onShow page of the page.

globalData is a simple global variable. If you use state management, please use `vuex` (defined in main.js)

##  global styles

In `App.vue`, you can define some global common styles. For example, if you need to add a common background color, the animation rendered on the first page can be written in App.vue.

Please note that if there are both vue and nvue files under the project, all css of global style will be applied to all files, while the compiler will give an alarm at the console as the css supported by nvue is limited, indicating that some css cannot be supported in nvue.

```
<style>
    @import './common/uni.css';
</style>
```
