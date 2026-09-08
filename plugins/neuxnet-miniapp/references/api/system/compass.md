---
title: "uni.onCompassChange(CALLBACK)"
source_url: https://miniapp.neuxnet.com/api/system/compass.html
---
###  uni.onCompassChange(CALLBACK)

listen to the compass data at a frequency of 5 times/second. The listening to will automatically start after calling the interface. You can use `uni.offCompassChange` to cancel the listening to.

**CALLBACK return parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| direction | Number | Degree of the direction facing |

**Tips**

-   To obtain compass information on the H5 side, it must be deployed on the **https** service. For local preview (localhost), the http protocol can still be used.

**Example**

```
const callback = function (res) {
	console.log(res.direction);
}
uni.onCompassChange(callback);
```

###  uni.offCompassChange(CALLBACK)

Cancel listening to compass data.

**Example**

```
const callback = function (res) {
	console.log(res.direction);
}
uni.onCompassChange(callback);
// Pass in the same function as onCompassChange
uni.offCompassChange(callback);
```

**Tips**

-   `CALLBACK` is the `CALLBACK` passed in when calling `uni.onCompassChange`

###  uni.startCompass(OBJECT)

Start listening to compass data.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.startCompass();
```

###  uni.stopCompass(OBJECT)

Stop listening to compass data.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.stopCompass();
```
