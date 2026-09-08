---
title: "uni.setScreenBrightness(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/system/brightness.html
---
###  uni.setScreenBrightness(OBJECT)

Set screen brightness.

**Platform difference description**

|Mini App|H5| |Mini App|H5| |:-😐:-😐 |√|x|

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| value | Number | Yes | Screen brightness value, ranging from 0 to 1, and 0 is the darkest and 1 is the brightest |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.setScreenBrightness({
	value: 0.5,
	success: function () {
		console.log('success');
	}
});
```

> _Tips:_ Avoid using setScreenBrightness() in onshow(). The brightness change will trigger onShow() again, causing an endless loop

###  uni.getScreenBrightness(OBJECT)

Get screen brightness.

**Platform difference description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| value | Number | Screen brightness value, ranging from 0 to 1, and 0 is the darkest and 1 is the brightest. |

**Example**

```
uni.getScreenBrightness({
	success: function (res) {
		console.log('屏幕亮度值：' + res.value);
	}
});
```

###  uni.setKeepScreenOn(OBJECT)

Set whether to stay on or not. The setting will be valid only in the current application, and it will be invalid after leaving the application.

**Platform difference description**

|Mini App|H5| |Mini App|H5| |:-😐:-😐 |√|x|

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| keepScreenOn | Boolean | Yes | Whether to keep the screen always on? |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| errMsg | String | Call result |

**Example**

```
//Keep the screen always on
uni.setKeepScreenOn({
	keepScreenOn: true
});
```
