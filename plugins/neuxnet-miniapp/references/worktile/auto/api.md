---
title: "API"
source_url: https://miniapp.neuxnet.com/worktile/auto/api.html
---
#  API

##  program

program is the global object automatically injected by uni-automator

###  method

####  program.pageStack

Get the page stack.

`program.pageStack(): Promise<Page[]>`

####  program.navigateTo

Keep the current page and jump to a page in the app, same as `uni.navigateTo`.

`program.navigateTo(url: string): Promise<Page>`

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| url | string | is | \- | The path of the non-tabBar page in the application to be jumped |

Sample code:

```
  const page = await program.navigateTo('/pages/index/index')
  console.log(page.path)// -> 'page/index/index'
```

####  program.redirectTo

Close the current page and jump to a page in the application, same as `uni.redirectTo`.

`program.redirectTo(url: string): Promise<Page>`

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| url | string | is | \- | The path of the non-tabBar page in the application to be jumped |

####  program.navigateBack

Close the current page and return to the previous page or multi-level pages, same as `uni.navigateBack`.

`program.navigateBack(): Promise<Page>`

####  program.reLaunch

Close all pages, open to a page within the app, same as `uni.reLaunch`.

`program.reLaunch(url: string): Promise<Page>`

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| url | string | is | \- | the in-app page path to jump to |

####  program.switchTab

Jump to the tabBar page and close all other non-tabBar pages, same as `uni.switchTab`.

`program.switchTab(url: string): Promise<Page>`

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| url | string | is | \- | path of the tabBar page to jump to |

####  program.currentPage

Get the current page.

`program.currentPage(): Promise<Page>`

####  program.systemInfo

Get system information, same as `uni.getSystemInfo`.

`program.systemInfo(): Promise<Object>`

Sample code:

```
	const systemInfo = await program.systemInfo()
	if (systemInfo.uniPlatform === 'devtools') {
		// Do something
	}
```

####  program.pageScrollTo

Scroll the page to the target position, same as `uni.pageScrollTo`.

`program.pageScrollTo(scrollTop: number): Promise<void>`

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| scrollTop | number | is | \- | scroll to the target position of the page, in px |

Sample code:

```
   const page = await program.currentPage()
   await program.pageScrollTo(20)
   console.log(await page.scrollTop())
```

####  program.callUniMethod

Call the specified method on the uni object.

`program.callUniMethod(method: string, ...args: any[]): Promise<any>`

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| method | string | Yes | \- | Name of the method to be called |
| ...args | `array<any>` | no | \- | method arguments |

There is no need to pass in the success and fail callback functions when calling an asynchronous method.

Sample code:

```
	await program.callUniMethod('setStorage', {
	  key: 'test',
	  data: '123456'
	})
	const data = await program.callUniMethod('getStorageSync', 'test')
	console.log(data) // -> '123456'
```

####  program.screenshot

The screenshot of the current page is currently only supported by the developer tool simulator, and the client cannot use it.

`program.screenshot(options?: Object): Promise<string | void>`

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| options | Object | No | \- | Screenshot Options |

If options are not passed, this method returns the base64 encoding of the image data.

The field of options is defined as follows:

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| path | string | Yes | \- | image save path |

```
	it('screenshot', async () => {
		await program.screenshot({
			path: "static/screenshot.png" // 默认项目根目录
		})
	});
```

####  program.mockUniMethod

Overrides the result of the invocation of the specified method on the uni object.

Using this interface, you can easily and directly specify the return result of calling system components such as `uni.chooseLocation`.

`program.mockUniMethod(method: string, result: any): Promise<void>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| method | string | Yes | \- | name of method to override |
| result | any | Yes | \- | specifies the result of the call |

`program.mockUniMethod(method: string, fn: Function | string, ...args: any[]): Promise<void>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| method | string | Yes | \- | name of method to override |
| fn | Function string | Yes | \- | processing return function |
| ...args | `array<any>` | No | \- | Incoming Arguments |

> fn Like the appFunction parameter of program.evaluate, closures cannot be used to refer to external variables. Also, you can use this.origin inside a method to call the original method.

Sample code:

```
	await program.mockUniMethod('showModal', {
		confirm: true,
		cancel: false
	})

	await program.mockUniMethod(
		'getStorageSync',
		function(key, defVal) {
			if (key === 'name') return 'redhoodsu'
			if (key === 'sex') return 'male'
			return defVal
		},
		'unknown',
  )
  // calling uni.getStorageSync('name') returns 'redhoodsu'

  // Change the platform field in getSystemInfo
	await program.mockUniMethod(
		'getSystemInfo',
		function(obj, platform) {
			return new Promise(resolve => {
				// origin points to the original method
				this.origin({
					success(res) {
						res.platform = platform
						resolve(res)
					},
				})
			})
		},
		'test',
	)
```

####  program.restoreUniMethod

Resets the uni-specified method, removing the effects of the mockUniMethod call.

`program.restoreUniMethod(method: string): Promise<void>`

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| method | string | Yes | \- | name of method to override |

Sample code:

```
	console.log(await program.callUniMethod('getStorageSync', 'test')) // -> ''
	await program.mockUniMethod('getStorageSync', 'mockValue')
	console.log(await program.callUniMethod('getStorageSync', 'test')) // -> 'mockValue'
	await program.restoreUniMethod('getStorageSync')
	console.log(await program.callUniMethod('getStorageSync', 'test')) // -> ''
```

####  program.evaluate

Inject code snippets and return execution results. (Only supported by WeChat applet)

`program.evaluate(appFunction: Function | string, ...args: any[]): Promise<any>`

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| appFunction | Function string | Yes | \- | code snippet |
| ...args | `array<any>` | No | \- | Parameters passed during execution |

> appFunction will eventually be serialized to the developer tools, so you can't use closures in functions to reference external variables. That is, passing a function () {} function is effectively equivalent to passing its string.

Sample code:

```
	let systemInfo = await program.evaluate(() => {
		return new Promise(resolve => {
			uni.getSystemInfo({
				success(result) {
					resolve(result)
				}
			})
		})
	})
	systemInfo = await program.evaluate(() => {
		return uni.getSystemInfoSync()
	})
	console.log(systemInfo)
	await program.evaluate(key => {
		uni.setStorageSync(key, 'test')
	}, 'test')
	const hasLogin = await program.evaluate(() => getApp().globalData.hasLogin)
	console.log(hasLogin)
```

####  program.testAccounts

Get the list of users added in multi-account debugging. (Only supported by WeChat applet)

`program.testAccounts(): Promise<Account[]>`

The Account field is defined as follows:

| Field | Type | Instruction |
| --- | --- | --- |
| nickName | string | User Nickname |
| openid | string | account openid |

Sample code:

```
	const testAccounts = await program.testAccounts()
	for (let i = 0, len = testAccounts.length; i < len; i++) {
		const miniProgram = await automator.launch({
			projectPath: 'path/to/project',
			account: testAccounts[i].openid
		})
		// Different applets that control multiple user logins
	}
```

####  program.exposeFunction

Expose the method globally for the applet side to call the method in the test script (only supported by WeChat applet)

`program.exposeFunction(name: string, bindingFunction: Function): Promise<void>`

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| name | string | Yes | \- | global method name |
| bindingFunction | Function | Yes | \- | script method |

> You can use this method to monitor events, but it is not supported to obtain the call result on the applet side.

Sample code:

```
	await program.exposeFunction('onAppShow', options => {
		// Do something... 
	})
	await program.evaluate(function() {
		uni.onAppShow(function(options) {
			onAppShow(options)
		})
	})
```

##  Page

Page module provides methods to control pages.

###  Attributes

####  page.path

Page path.

`page.path: string`

####  page.query

`page.query: Object`

###  method

####  page.$

Get the page element.

`page.$(selector: string): Promise<Element>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| selector | string | Yes | \- | Selector |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(element.tagName) // 'view'
```

####  page.$$

Get an array of page elements.

`page.$$(selector: string): Promise<Element[]>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| selector | string | Yes | \- | Selector |

Neither this method nor $ can select elements in custom components. Please use element.$.

Sample code:

```
  const page = await program.currentPage()
  const elements = await page.$$('.list-text')
  console.log(elements.length)
```

####  page.waitFor

Wait until the specified conditions are met.

`page.waitFor(condition: string | number | Function): Promise<void>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| condition | string number Function | Yes | \- | Waiting condition |

If the condition is of type `string`, then this parameter will be regarded as a selector. When the number of elements selected by this selector is not zero, the waiting will end.

If the condition is of type `number`, then this parameter will be regarded as the timeout period. When the specified time has passed, the waiting will end.

If the condition is of type `Function`, then the parameter will be treated as an assertion function. When the function returns a true value, the waiting will end.

Sample code:

```
  const page = await program.currentPage()
  await page.waitFor(5000) // 等待 5 秒
  await page.waitFor('picker') // 等待页面中出现 picker 元素
  await page.waitFor(async () => {
    return (await page.$$('picker')).length > 5
  }) // 等待页面中 picker 元素数量大于 5
```

####  page.data

Get the page rendering data.

`page.data(path?: string): Promise<Object>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| path | string | No | \- | Data path |

Sample code:

```
  const page = await program.currentPage()
  console.log(await page.data('list'))
```

####  page.setData

Set the page rendering data.

`page.setData(data: Object): Promise<void>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| data | Object | Yes | \- | Data to be changed |

Sample code:

```
  const page = await program.currentPage()
  await page.setData({
    text: 'changed data'
  })
```

####  page.size

Get the page size.

`page.size(): Promise<Object>`

Returned value description

| Field | Type | Instruction |
| --- | --- | --- |
| width | number | Page scrollable width |
| height | number | Page scrollable height |

Sample code:

```
  const page = await program.currentPage()
  const { width, height } = await page.size()
  console.log(width, height)
```

####  page.scrollTop

Get the scroll position of the page.

`page.scrollTop(): Promise<number>`

Sample code:

```
  const page = await program.currentPage()
  await program.pageScrollTo(20)
  console.log(await page.scrollTop())
```

####  page.callMethod

Call the page specified method.

`page.callMethod(method: string, ...args: any[]): Promise<any>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| method | string | Yes | \- | Name of the method to be called |
| ...args | array | No | \- | Method parameter |

Sample code:

```
  const page = await program.currentPage()
  await page.callMethod('onShareAppMessage')
```

##  Element

The Element module provides methods to control page elements.

###  Attributes

####  element.tagName

Tag name, lowercase.

`element.tagName: string`

###  method

####  element.$

Get the element within the element range.

`element.$(selector: string): Promise<Element>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| selector | string | Yes | \- | Selector |

Sample code:

```
  const page = await program.currentPage()
  let element = await page.$('.index-hd')
  element = await element.$('.index-desc')
  console.log(await element.text())
```

####  element.$$

Get the element array within the element range.

`element.$$(selector: string): Promise<Element[]>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| selector | string | Yes | \- | Selector |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('.index-bd')
  const elements = await element.$$('.list-text')
  console.log(await elements[0].text())
```

####  element.size

Get the element size.

`element.size(): Promise<Object>`

Returned value description

| Field | Type | Instruction |
| --- | --- | --- |
| width | number | Element width |
| height | number | Element height |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('.index-bd')
  const { width, height } = await element.size()
  console.log(width, height)
```

####  element.offset

Get the absolute position of the element.

`element.offset(): Promise<Object>`

Returned value description

| Field | Type | Instruction |
| --- | --- | --- |
| left | number | X coordinate in the upper left corner, in px |
| top | number | y coordinate in the upper left corner, in px |

The coordinate information is based on the upper left corner of the page as the origin.

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('.index-bd')
  const { left top } = await element.offset()
  console.log(left, top)
```

####  element.text

Get the element text.

`element.text(): Promise<string>`

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(await element.text())
```

####  element.attribute

Get element properties.

`element.attribute(name: string): Promise<string>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| name | string | Yes | \- | Feature name |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('.logo')
  console.log(await element.attribute('src')) // -> 'static/logo.png'
```

####  element.property

Get element attributes.

`element.property(name: string): Promise<any>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| name | string | Yes | \- | Attribute name |

The main differences between `element.property` and `element.attribute` are as follows:

`element.attribute` gets the value on the label, so its return type must be a string, but element.property is not necessarily.

`element.attribute` can get values such as class and id, but element.property cannot.

`element.property` can get most of the attribute values listed by the corresponding components in the document, such as the value of components such as form input.

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('input')
  console.log(await element.property('value'))
```

####  element.html

Get the element HTML.

`element.html(): Promise<string>`

####  element.outerHtml

Same as html, except that the element itself will be obtained.

`element.outerHtml(): Promise<string>`

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(await element.html())
  console.log(await element.outerHtml())
```

####  element.value

Get the element value.

`element.value(): Promise<string>`

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('.input')
  console.log(await element.value())
```

####  element.style

Get the element style value.

`element.style(name: string): Promise<string>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| name | string | Yes | \- | Style name |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(await element.style('color')) // -> 'rgb(128, 128, 128)'
```

####  element.tap

Click element.

`element.tap(): Promise<void>`

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('.list-item-hd')
  await element.tap()
```

####  element.longpress

Long press the element.

`element.longpress(): Promise<void>`

####  element.touchstart

Start touching the element with your finger.

`element.touchstart(options: Object): Promise<void>`

The field of options is defined as follows:

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| touches | array | Yes | \- | Touch event, an array of information about the touch points that are currently staying on the screen |
| changedTouches | array | Yes | \- | Touch events, an array of information about the touch points that are currently changing |

####  element.touchmove

Move after the finger touches the element.

`element.touchmove(options: Object): Promise<void>`

The field of options is the same as touchstart.

####  element.touchend

End touching the element with your finger.

`element.touchend(options: Object): Promise<void>`

The field of options is the same as touchstart.

```
  const page = await program.currentPage()
  const element = await page.$('.touch')
  await element.touchstart({
    touches: [
      {
        identifier: 1,
        pageX: 500,
        pageY: 500
      }
    ],
    changedTouches: [
      {
        identifier: 1,
        pageX: 500,
        pageY: 500
      }
    ]
  })
  await element.touchend({
    touches: [],
    changedTouches: [
      {
        identifier: 1,
        pageX: 500,
        pageY: 500
      }
    ]
  })
```

####  element.trigger

Trigger element events.

`element.trigger(type: string, detail?: Object): Promise<void>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| type | string | Yes | \- | Trigger event type |
| detail | Object | No | \- | The detail value passed when the event is triggered. |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('picker')
  await element.trigger('change', { value: 1 })
```

This method only triggers the response method, and can neither change the component state nor trigger user action events, namely `tap`, `longpress` and other events. Please call with other corresponding methods.

####  element.input

Enter the text, only available for the input and textarea components.

`element.input(value: string): Promise<void>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| value | string | Yes | \- | Text to be entered |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('input')
  await element.input('test')
```

####  element.callMethod

Call the specified method of component instance, only available for the custom components.

`element.callMethod(method: string, ...args: any[]): Promise<any>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| method | string | Yes | \- | Name of the method to be called |
| ...args | array | No | \- | Method parameter |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('set-tab-bar')
  await element.callMethod('navigateBack')
```

####  element.data

Get rendering data of component instance, only available for the custom components.

`element.data(path?: string): Promise<Object>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| path | string | No | \- | Data path |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('set-tab-bar')
  console.log(await element.data('hasSetTabBarBadge'))
```

####  element.setData

Set rendering data of component instance, only available for the custom components.

`element.setData(data: Object): Promise<void>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| data | Object | Yes | \- | Data to be changed |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('set-tab-bar')
  await page.setData({
    hasSetTabBarBadge: true
  })
```

####  element.callContextMethod

Call the Context object method, only available for the video component.

`element.callContextMethod(method: string, ...args: any[]): Promise<any>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| method | string | Yes | \- | Name of the method to be called |
| ...args | array | No | \- | Method parameter |

video component is only available for those having set the id's.

```
  const page = await program.currentPage()
  const element = await page.$('video')
  await element.callContextMethod('play')
```

####  element.scrollWidth

Get the scroll width, only available for the scroll-view component.

`element.scrollWidth(): Promise<number>`

####  element.scrollHeight

Get the scroll height, only available for the scroll-view component.

`element.scrollHeight(): Promise<number>`

####  element.scrollTo

Scroll to the specified location, only available for the scroll-view component.

`element.scrollTo(x: number, y: number): Promise<void>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| x | number | Yes | \- | Horizontal scroll location |
| y | number | Yes | \- | Vertical scroll location |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('scroll-view')
  const y = (await element.scrollHeight()) - 50
  await element.scrollTo(0, y)
```

####  element.swipeTo

Slide the slider to the specified position, only available for the swiper component.

`element.swipeTo(index: number): Promise<void>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| index | number | Yes | \- | index of the target slider |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('swiper')
  await element.swipeTo(2)
```

####  element.moveTo

Move the view container, only available for the movable-view component.

`element.moveTo(x: number, y: number): Promise<void>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| x | number | Yes | \- | Offset in the x-axis direction |
| y | number | Yes | \- | Offset in the y-axis direction |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('movable-view')
  await element.moveTo(40, 40)
```

####  element.slideTo

Slide to the specified value, only available for the slider component.

`element.slideTo(value: number): Promise<void>`

Parameter Description

| Field | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| value | number | Yes | \- | Value to be set |

Sample code:

```
  const page = await program.currentPage()
  const element = await page.$('slider')
  await element.slideTo(10)
```

##  Platform differences

###  program (global object)

| Method | APP-NVUE | APP-VUE | H5 | WeChat Mini Program | Baidu Mini Program | Instructions |
| --- | --- | --- | --- | --- | --- | --- |
| pageStack | √ | √ | √ | √ | √ | Get the applet page stack |
| navigateTo | √ | √ | √ | √ | √ | Keep the current page and jump to a page in the app, same as `uni.navigateTo` |
| redirectTo | √ | √ | √ | √ | √ | Close the current page and jump to a page in the app, same as `uni.redirectTo` |
| navigateBack | √ | √ | √ | √ | √ | Close the current page and return to the previous page, same as `uni.navigateBack` |
| reLaunch | √ | √ | √ | √ | √ | Close all pages, open to a page in the app, same as `uni.reLaunch` |
| switchTab | √ | √ | √ | √ | √ | Jumps to the tabBar page and closes all other non-tabBar pages, same as `uni.switchTab` |
| currentPage | √ | √ | √ | √ | √ | Get current page |
| systemInfo | √ | √ | √ | √ | √ | Get system info, same as `uni.getSystemInfo` |
| pageScrollTo | x | √ | √ | √ | √ | Scrolls the page to the target position, same as `uni.pageScrollTo` |
| callUniMethod | √ | √ | √ | √ | √ | Call the specified method on the uni object |
| screenshot | √ | √ | √ | √ | x | The screenshot of the current page is only supported by the developer tool simulator, and the client cannot use it |
| mockUniMethod | √ | √ | √ | √ | √ | Override the result of calling the specified method on the uni object |
| restoreUniMethod | √ | √ | √ | √ | √ | Reset the uni-specified method, eliminating the effects of mockUniMethod calls |
| testAccounts | x | x | x | √ | x | Get the list of users added in multi-account debugging |
| evaluate | x | x | x | √ | x | Inject code snippets and return execution results |
| exposeFunction | x | x | x | √ | x | Expose the method globally for the applet side to call the method in the test script |

###  Page

| Properties | APP-NVUE | APP-VUE | H5 | WeChat Mini Program | Baidu Mini Program | Description |
| --- | --- | --- | --- | --- | --- | --- |
| path | √ | √ | √ | √ | √ | Page Path |
| query | √ | √ | √ | √ | √ | Page Parameters |

| Method | APP-NVUE | APP-VUE | H5 | WeChat Mini Program | Baidu Mini Program | Instructions |
| --- | --- | --- | --- | --- | --- | --- |
| $ | √ | √ | √ | √ | √ | Get page element |
| $$ | √ | √ | √ | √ | √ | Get page element array |
| waitFor | √ | √ | √ | √ | √ | Wait until the specified condition is satisfied |
| data | √ | √ | √ | √ | √ | Get page rendering data |
| setData | √ | √ | √ | √ | √ | Set page rendering data |
| size | √ | √ | √ | √ | √ | Get page size (width,height) |
| scrollTop | √ | √ | √ | √ | √ | Get page scroll position |
| callMethod | √ | √ | √ | √ | √ | Call page specified method |

###  Element

| Properties | APP-NVUE | APP-VUE | H5 | WeChat Mini Program | Baidu Mini Program | Description |
| --- | --- | --- | --- | --- | --- | --- |
| tagName | √ | √ | √ | √ | √ | tag name, lowercase |

| Method | APP-NVUE | APP-VUE | H5 | WeChat Mini Program | Baidu Mini Program | Instructions |
| --- | --- | --- | --- | --- | --- | --- |
| $ | √ | √ | √ | √ | √ | Get element in element range |
| $$ | √ | √ | √ | √ | √ | Get element array in element range |
| size | √ | √ | √ | √ | √ | Get element size (width,height) |
| offset | √ | √ | √ | √ | √ | Get the absolute position of the element (left,top) |
| text | √ | √ | √ | √ | √ | Get element text |
| attribute | √ | √ | √ | √ | √ | Get element attribute |
| style | √ | √ | √ | √ | √ | Get element style value |
| tap | √ | √ | √ | √ | √ | Tap element |
| value | √ | √ | √ | √ | √ | Get element value |
| callMethod | √ | √ | √ | √ | √ | Call the specified method of the component instance, only custom components can use |
| html | √ | √ | √ | √ | √ | Get element HTML |
| outerHtml | √ | √ | √ | √ | √ | Same as html, but will get the element itself |
| data | √ | √ | √ | √ | √ | Get component instance rendering data, only custom components can use |
| setData | √ | √ | √ | √ | √ | Set component instance rendering data, only custom components can use |
| property | √ | √ | √ | √ | x | Get element property |
| touchstart | √ | √ | √ | √ | x | Finger starts touching element |
| touchmove | √ | √ | √ | √ | x | Move after the finger touches the element |
| touchend | √ | √ | √ | √ | x | finger ends touching element |
| longpress | √ | √ | √ | √ | x | long press |
| trigger | √ | √ | √ | √ | x | Trigger element event |
| input | √ | √ | √ | √ | x | Enter text, only input and textarea components can be used |
| callContextMethod | x | x | x | √ | x | Call context object method, only video component can use |
| scrollWidth | x | √ | √ | √ | x | Get the scroll width, only the scroll-view component can use |
| scrollHeight | x | √ | √ | √ | x | Get the scroll height, only the scroll-view component can use |
| scrollTo | x | √ | √ | √ | x | scroll to the specified position, only the scroll-view component can use |
| swipeTo | √ | √ | √ | √ | x | Slide to the specified slider, only the swiper component can be used |
| moveTo | √ | √ | √ | √ | x | Move view container, only movable-view component can be used |
| slideTo | √ | √ | √ | √ | x | Slide to the specified value, only the slider component can be used |

###  Test platform judgment

```
if (process.env.UNI_PLATFORM === "h5") {}
if (process.env.UNI_PLATFORM === "app-plus") {}
if (process.env.UNI_PLATFORM === "mp-weixin") {}
if (process.env.UNI_PLATFORM === "mp-baidu") {}
```
