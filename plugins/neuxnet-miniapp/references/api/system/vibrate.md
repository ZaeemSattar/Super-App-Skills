---
title: "uni.vibrate(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/system/vibrate.html
---
###  uni.vibrate(OBJECT)

Make the phone vibrate.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.vibrate({
	success: function () {
		console.log('success');
	}
});
```

###  uni.vibrateLong(OBJECT)

Lead to long time vibration of the phone (400ms).

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.vibrateLong({
	success: function () {
		console.log('success');
	}
});
```

###  uni.vibrateShort(OBJECT)

Lead to short time vibration of the phone (15ms).

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.vibrateShort({
	success: function () {
		console.log('success');
	}
});
```

**Notice**

-   There is only long vibration on iOS, no short vibration
-   On iOS, you need to turn on "Vibrate on Ring" or "Vibrate on Mute" on your mobile phone, or otherwise it will not vibrate
