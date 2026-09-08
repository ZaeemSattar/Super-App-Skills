---
title: "uni.navigateTo(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/router.html
---
###  uni.navigateTo(OBJECT)

Keep the current page, jump to a page in the application, and return to the original page using `uni.navigateBack`.

**OBJECT parameter description**

| Parameter | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| url | String | Yes |  | The path of non-tabBar pages in the application that to be jumped to, with optional parameters affixed. Parameters and path are separated with "?", parameter keys and parameter values are connected with "=", and different parameters are separated with "&". For example, 'path?key=value&key2=value2', the "path" is the path of the next page, and the onLoad function of the next page can get the passed parameters |  |
| animationType | String | No | pop-in | For the animation effect displayed in the window, please see: [Window animation](./router.md#animation) | App |
| animationDuration | Number | No | 300 | Window animation duration, in ms | App |
| events | Object | No |  | The inter-page communication interface is used to listen to the data sent from the opened page to the current page. Supported in 2.8.9+. |  |
| success | Function | No |  | Callback function for successful interface calling |  |
| fail | Function | No |  | Callback function for failed interface calling |  |
| complete | Function | No |  | Callback function for closed interface calling (available both for successful and failed calling) |  |

**object.success callback function**

**Parameter**

**Object res**

| Attribute | Type | Instruction |
| --- | --- | --- |
| eventChannel | [EventChannel](./router.md#event-channel) | Communicate with opened pages |

**Example**

```
//Jump to the test.vue page at the start page and pass the parameters
uni.navigateTo({
	url: 'test?id=1&name=MiniApp'
});
```

```
//Accept the parameters on the test.vue page
export default {
	onLoad: function (option) {
		console.log(option.id); 
		console.log(option.name); 
	}
}
```

```
// Jump to the test.vue page on the start page, and listen to the event data sent by test.vue
uni.navigateTo({
  url: 'pages/test?id=1',
  events: {
    //Add a listener for the specified event to obtain the data transmitted from the opened page to the current page
    acceptDataFromOpenedPage: function(data) {
      console.log(data)
    },
    someEvent: function(data) {
      console.log(data)
    }
    ...
  },
  success: function(res) {
    //Transfer data to the opened page through eventChannel
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'data from starter page' })
  }
})

// On the test.vue page, pass data to the start page through events
onLoad: function(option) {
  // #ifdef APP-NVUE
  const eventChannel = this.$scope.eventChannel; 
  // #endif
  // #ifndef APP-NVUE
  const eventChannel = this.getOpenerEventChannel();
  // #endif
  eventChannel.emit('acceptDataFromOpenedPage', {data: 'data from test page'});
  eventChannel.emit('someEvent', {data: 'data from test page for someEvent'});
  //listen to the acceptDataFromOpenerPage event to obtain the data transmitted from the previous page to the current page through eventChannel
  eventChannel.on('acceptDataFromOpenerPage', function(data) {
    console.log(data)
  })
}
```

The url has a length limit. A string that is too long will fail to be delivered. In addition, when special characters such as spaces appear in the parameters, the parameters need to be encoded. The following is an example of using `encodeURIComponent` to encode the parameters.

```
<navigator :url="'/pages/test/test?item='+ encodeURIComponent(JSON.stringify(item))"></navigator>
```

```
//Accept the parameters on the test.vue page
onLoad: function (option) {
	const item = JSON.parse(decodeURIComponent(option.item));
}
```

**Notice:**

-   The page jump path has hierarchical restrictions, and unboundedly jumping to new pages is impossible
-   Jumping to the tabBar page is only possible with switchTab
-   The target page of the routing API must be the vue page registered in pages.json. If you want to open the web url, you can use [plus.runtime.openURL](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.openURL) or web-view component on the App platform; H5 The platform uses window.open;
-   The APP-NVUE platform does not currently support the method of obtaining `eventChannel` by `this.getOpenerEventChannel()`, please obtain it with `this.$scope.eventChannel`. Please refer to the above example for the specific method.

###  uni.redirectTo(OBJECT)

Close the current page and jump to a page in the application.

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| url | String | Yes | The path of non-tabBar pages in the application that to be jumped to, with optional parameters affixed. Parameters and path are separated with "?", parameter keys and parameter values are connected with "=", and different parameters are separated with "&". For example, 'path?key=value&key2=value2' |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.redirectTo({
	url: 'test?id=1'
});
```

**Notice:**

-   Jumping to the tabBar page is only possible with switchTab

###  uni.reLaunch(OBJECT)

Close all pages and open a page in the application.

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| url | String | Yes | In-app page path to jump, which can be followed by parameters. Parameters and path are separated with "?", parameter keys and parameter values are connected with "=", and different parameters are separated with "&". For example, 'path?key=value&key2=value2', if the jump page path is the tabBar page, no parameter can be used. |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.reLaunch({
	url: 'test?id=1'
});
```

```
export default {
	onLoad: function (option) {
		console.log(option.id);
	}
}
```

Tips：

-   After calling `uni.reLaunch` on the H5 side, the previous page stack will be destroyed, but the previous history of the browser cannot be cleared. At this time, `navigateBack` cannot return. If there is a history, you can still navigate to other history records of the browser by clicking the back button of the browser or calling `history.back()`.

###  uni.switchTab(OBJECT)

Jump to the tabBar page and close all other non tabbar pages.

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| url | String | Yes | The path of the tabBar page to jump to (the page to be defined in the tabBar field of pages.json), with no parameter affixed to the path. |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

pages.json

```
{
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
    },{
      "pagePath": "pages/other/other",
    }]
  }
}
```

other.vue

```
uni.switchTab({
	url: '/pages/index/index'
});
```

###  uni.navigateBack(OBJECT)

Close the current page and return to the one or more levels of previous page. You can obtain the current page stack through `getCurrentPages()` and decide how many layers to return.

**OBJECT parameter description**

| Parameter | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| delta | Number | No | 1 | The number of returned pages. If the delta is greater than the number of existing pages, return to the home page. |  |
| animationType | String | No | pop-out | For the animation effect of window closing, please refer to [Window animation](./router.md#animation) | App |
| animationDuration | Number | No | 300 | Duration of window closing animation, in ms | App |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
//Note: At calling the navigateTo for jumping, the page calling this method will be added to the stack, but the redirectTo method will not. See the sample code below

//Here is the page A
uni.navigateTo({
	url: 'B?id=1'
});

//Here is the page B
uni.navigateTo({
	url: 'C?id=1'
});

//navigateBack in page C will return to page A.
uni.navigateBack({
	delta: 2
});
```

###  uni.navigateToMiniProgram(OBJECT)

Jump to the specified Mini App.

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| appId | String | Yes | The Mini App appId |
| path | String | No | The path of the Mini App |
| extraData | Object | No | The data that needs to be passed to the target Mini App can be obtained by the target Mini App in the `onLaunch` or `onShow` of `App.vue`. |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.navigateToMiniProgram({
  appId: 'f8b4f85f3a794e77',
  path: 'pages/index/index',
  extraData: {
    foo: 'bar'
  }
});
```

###  EventChannel

2.8.9+ supports the event communication channel between pages.

**Method**

####  EventChannel.emit(string eventName, any args)

Trigger an event

string eventName event name

any args event parameter

####  EventChannel.off(string eventName, function fn)

Cancel listening to an event. When the second parameter is given, only the specified listening to functions are cancelled, or otherwise all listening to functions are cancelled.

string eventName event name

function fn event listen to function

any args triggers the event parameter

####  EventChannel.on(string eventName, function fn)

Keep listening to an event

string eventName event name

function fn event listen to function

any args triggers the event parameter

####  EventChannel.once(string eventName, function fn)

listen to an event once, and it will fail after triggering.

string eventName event name

function fn event listen to function

any args triggers the event parameter

Tips：

-   `navigateTo` and `redirectTo` can only open non-tabBar pages.
-   `switchTab` can only open the `tabBar` page.
-   `reLaunch` can open any page.
-   The `tabBar` at the bottom of the page is determined by the page, i.e., as long as the page is defined as `tabBar`, there will be `tabBar` at the bottom.
-   You cannot jump to other pages in `App.vue`.
-   The page stack will disappear after the page on the H5 side is refreshed. At this time, `navigateBack` cannot be returned. If you must return, you can use `history.back()` to navigate to other history records of the browser.

**References**

-   Many encapsulated tools for page route interception and management are available in the plug-in market

###  Window animation

> This API is only supported by the App. The form animation of H5 can use the conventional single-page animation processing scheme

The display/close animation effect of a window can be configured in API, component, or pages.Json, and the priority is `API = component > pages.json`.

####  API

A valid routing API

-   navigateTo
-   navigateBack

```
uni.navigateTo({
	url: '../test/test',
	animationType: 'pop-in',
	animationDuration: 200
});
uni.navigateBack({
	delta: 1,
	animationType: 'pop-out',
	animationDuration: 200
});
```

####  Components

open-type valid value

-   navigateTo
-   navigateBack

```
<navigator animation-type="pop-in" animation-duration="300" url="../test/test">navigator</navigator>
<navigator animation-type="pop-out" animation-duration="300" open-type="navigateBack" >navigator</navigator>
```

####  pages.json

pages.json is configured with the animation of window display.

```
"style": {
	"app-plus": {
		"animationType": "fade-in",
		"animationDuration": 300
	}
}
```

There will be default corresponding rules for turning on/off the animation. However, if the animation type of window closing is configured through API or component, the default type will not be used.

| Show animation | Close animation | Description of animation on (animation off on the contrary) |
| --- | --- | --- |
| slide-in-right | slide-out-right | The new window enters from the right |
| slide-in-left | slide-out-left | The new window enters from the left |
| slide-in-top | slide-out-top | The new window enters from the top |
| slide-in-bottom | slide-out-bottom | The new window enters from the bottom |
| pop-in | pop-out | The new window enters from the left to squeeze out the old window |
| fade-in | fade-out | The new window is gradually displayed from transparent to opaque |
| zoom-out | zoom-in | The new window is scaled from small to large. |
| zoom-fade-out | zoom-fade-in | The new window is gradually enlarged from small to large and gradually displayed from transparent to opaque. |
| none | none | No animation |

For detailed window animation instructions, please refer to:

-   Window display animation: [AnimationTypeShow](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeShow)
-   Window closing animation: [AnimationTypeClose](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeClose)

**Notice**

-   For pure nvue project (rendered as native), the default entry animation of window is pop-in, and the return animation is pop-out. If you want to modify the animation type, you can only modify it through uni.navigateTo API, and the animation type configured in the component or pages.json is invalid.
-   For non-pure nvue project on the App side, the default entry animation of window animation is slider-in-right, and the return animation is pop-out.
-   Use uni.webView.navigateTo ... to jump to the page after embedding the Mini App H5 in webview.
