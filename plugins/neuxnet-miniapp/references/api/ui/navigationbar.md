---
title: "uni.setNavigationBarTitle(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/ui/navigationbar.html
---
###  uni.setNavigationBarTitle(OBJECT)

Set the title of the current page dynamically.

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| title | String | Yes | Page title |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.setNavigationBarTitle({
});
```

**Notice**

-   If the title needs to be set when the page is entered, it can be done in the `onReady` to avoid being overwritten by changes within the frame. A short delay is required if execution must be performed within `onShow`

###  uni.setNavigationBarColor(OBJECT)

Set the color for the page navigation bar. **If the color needs to be set right after entering the page, please delay the execution to prevent it from being covered by the logic of setting the color in the frame**

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| frontColor | String | Yes | Foreground color value, including button, title, status bar color, only supports #ffffff and #000000 | App, H5, WeChat applet, Baidu applet, ByteDance applet, QQ applet , Kuaishou applet, Jingdong applet |
| backgroundColor | String | Yes | Background color value, valid value is hexadecimal color |  |
| animation | Object | No | Animation effect, {duration, timingFunc} | WeChat applet, Baidu applet, QQ applet, Kuaishou applet, Jingdong applet |
| success | Function | No | Callback function for successful interface calling |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**Notice**

-   The backgroundColor parameter of Android is limited with black larger than rgb(30,30,30) and white smaller than rgb(235,235,235)
-   If the title needs to be set when the page is entered, it can be done in the `onReady` to avoid being overwritten by changes within the frame. A short delay is required if execution must be performed within `onShow`

**animation structure**

| property | type | default value | required | description |
| --- | --- | --- | --- | --- |
| duration | number | 0 | No | Animation change time, unit ms |
| timingFunc | String | 'linear' | No | Animation Variation |

**animation.timingFunc valid values**

| value | description |
| --- | --- |
| linear | The speed of the animation is the same from start to finish. |
| easeIn | Animation starts at slow speed |
| easeOut | The animation ends at a slow speed. |
| easeInOut | The animation starts and ends at a slow speed. |

**Success return parameter description**

| Parameter name | Type | Instruction |
| --- | --- | --- |
| errMsg | String | Call result |

**Example**

```
uni.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#ff0000',
    animation: {
        duration: 400,
        timingFunc: 'easeIn'
    }
})
```

###  uni.showNavigationBarLoading(OBJECT)

Display navigation bar loading animation on the current page.

When the App platform calls this API, loading will be suspended in the middle of the screen

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.showNavigationBarLoading()
```

###  uni.hideNavigationBarLoading(OBJECT)

Hide the navigation bar and load animation on the current page.

When the App platform calls this API, loading suspended in the middle of the screen will be closed

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.hideNavigationBarLoading()
```

###  uni.hideHomeButton(OBJECT)

Hide the back to home button.

**OBJECT parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.hideHomeButton()
```

**illustrate**

-   When the bottom page of the applet opened by the user is not the home page, the "Back to Home" button is displayed by default, and the developer can call `hideHomeButton` in the page `onShow` to hide it.
