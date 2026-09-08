---
title: "uni.onAccelerometerChange(CALLBACK)"
source_url: https://miniapp.neuxnet.com/api/system/accelerometer.html
---
###  uni.onAccelerometerChange(CALLBACK)

listen to the acceleration data at a frequency of 5 times/second. The listening to will automatically start after the interface is called. You can use `uni.offAccelerometer` to cancel the listening to.

**CALLBACK return parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| x | Number | X axis |
| y | Number | Y axis |
| z | Number | Z axis |

**Tips**

-   To obtain acceleration information on the H5 side, it must be deployed on the **https** service. For local preview (localhost), the http protocol can still be used.

**Example**

```
uni.onAccelerometerChange(function (res) {
	console.log(res.x);
	console.log(res.y);
	console.log(res.z);
});
```

###  uni.offAccelerometerChange(CALLBACK)

Remove listening to the acceleration data.

###  uni.startAccelerometer(OBJECT)

Start listening to the acceleration data.

**OBJECT parameter description**

| Parameter name | Type | Default | Required | Instruction |
| --- | --- | --- | --- | --- |
| interval | String | normal | No | Monitor the execution frequency of the acceleration data callback function | WeChat applet, Baidu applet, QQ applet, Kuaishou applet, Jingdong applet |
| success | Function |  | No | Callback for successful interface calling |  |
| fail | Function |  | No | Callback function for failed interface calling |  |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

Legal value of `interval`

| Value | Instruction |
| --- | --- |
| game | The callback frequency for updating the game, approx. 20ms/time |
| ui | The callback frequency for updating the UI, approx. 60ms/time |
| normal | Ordinary callback frequency, approx. 200ms/time. |

**Example**

```
uni.startAccelerometer();
```

###  uni.stopAccelerometer(OBJECT)

Stop listening to the acceleration data.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.stopAccelerometer();
```
