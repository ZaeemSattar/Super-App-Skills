---
title: "uni.onGyroscopeChange(CALLBACK)"
source_url: https://miniapp.neuxnet.com/api/system/gyroscope.html
---
###  uni.onGyroscopeChange(CALLBACK)

Listen for gyroscope data change events.

The frequency of Alipay applet is 500ms/time, and the frequency of WeChat applet is set according to the interval parameter of [uni.startGyroscope](./gyroscope.md#startgyroscope). Events will not start listening until [uni.startGyroscope](./gyroscope.md#startgyroscope) is called. Use [uni.stopGyroscope](./gyroscope.md#stopgyroscope) to stop listening.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet |
| --- | --- | --- | --- | --- | --- |
| x | x | √ | √ | x | x |

**CALLBACK parameter description**

| property | type | description |
| --- | --- | --- |
| res | Object | res = {x,y,x} |

**structure of res**

| Name | Type | Description |
| --- | --- | --- |
| x | number | Angular velocity in the x-axis direction |
| y | number | Angular velocity in the y-axis direction |
| z | number | Angular velocity in the z-axis direction |

###  uni.startGyroscope(OBJECT)

Start listening for gyroscope data.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet |
| --- | --- | --- | --- | --- | --- |
| x | x | √ | √ | x | x |

| Attribute | Type | Default | Required | Description | Platform Description |
| --- | --- | --- | --- | --- | --- |
| interval | string | normal | No | Monitor the execution frequency of the gyroscope data callback function: game (20ms/time), ui (60ms/time), normal (200ms/time) | WeChat applet |
| success | function |  | No | Callback function for successful interface call |  |
| fail | function |  | No | Callback function for interface call failure |  |
| complete | function |  | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |

###  uni.stopGyroscope(OBJECT)

Stop listening for gyroscope data.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet |
| --- | --- | --- | --- | --- | --- |
| x | x | √ | √ | x | x |

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| success | function | No | Callback function for successful interface call |
| fail | function | No | Callback function for interface call failure |
| complete | function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**CODE EXAMPLE**

```
<template>
    <view>
        <button @click="start">开始监听陀螺仪变化</button>
        <button @click="stop">停止监听陀螺仪变化</button>
    </view>
</template>
```

```
export default {
    methods: {
        start() {
            uni.onGyroscopeChange((res) => {
                console.log('gyroData.rotationRate.x = ' + res.x)
                console.log('gyroData.rotationRate.y = ' + res.y)
                console.log('gyroData.rotationRate.z = ' + res.z)
            });
            uni.startGyroscope({
                interval: "normal",
                success() {
                    console.log('success')
                },
                fail() {
                    console.log('fail')
                }
            })
        },
        stop(){
            uni.stopGyroscope({
                success() {
                    console.log('stop success!')
                },
                fail() {
                    console.log('stop fail!')
                }
            })
        }
    }
}
```

**Tips**

-   The gyroscope related API may be wrong when called in the applet development tool, please test it on the real machine
