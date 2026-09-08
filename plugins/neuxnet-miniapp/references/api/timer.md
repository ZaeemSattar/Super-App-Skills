---
title: "setTimeout(callback, delay, rest)"
source_url: https://miniapp.neuxnet.com/api/timer.html
---
##  setTimeout(callback, delay, rest)

Set a timer. Execute the registered callback function after the timer timeout

**Parameter Description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| callback | Function | Yes | Callback function |
| delay | Number | No | Delayed time, after which the function call will occur, in ms |
| rest | Any | No | param1, param2, ..., paramN and other additional parameters will be passed to the callback function as parameters |

**Return value**

| Return value | Type | Instruction |
| --- | --- | --- |
| timeoutID | Number | The number of the timer, which can be passed to [clearTimeout](./timer.md#cleartimeout) to cancel the timing |

##  clearTimeout(timeoutID)

Cancel the timer set by setTimeout.

**Parameter Description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| timeoutID | Number | Yes | ID of the timer to cancel |

##  setInterval(callback, delay, rest)

Set a timer. Executes the registered callback function at the specified period (in ms)

**Parameter Description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| callback | Function | Yes | Callback function |
| delay | Number | No | Time interval between executing the callback function, in ms |
| rest | Any | No | param1, param2, ..., paramN and other additional parameters will be passed to the callback function as parameters |

**Return value**

| Return value | Type | Instruction |
| --- | --- | --- |
| intervalID | Number | The number of the timer, which can be passed to [clearInterval](./timer.md#clearinterval) to cancel the timing |

**CODE EXAMPLE**

```
this.timer = setInterval(() => {
    //TODO 
}, 1000);
```

##  clearInterval(intervalID)

Cancel the timer set by setInterval.

**Parameter Description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| intervalID | Number | Yes | ID of the timer to cancel |

##  Precautions

-   The timer number returned by the App side may be of String type, so it is not necessary to actively convert to Number type when using it
