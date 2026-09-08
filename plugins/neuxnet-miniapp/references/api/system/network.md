---
title: "uni.getNetworkType(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/system/network.html
---
###  uni.getNetworkType(OBJECT)

Get the network type.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | Yes | Interface was successfully called. Return the network type networkType |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**success return parameter description**

| Parameter | Instruction |
| --- | --- |
| networkType | Network type |

**networkType valid value**

| Value | Instruction |
| --- | --- |
| wifi | Wifi network |  |
| 2g | 2g network |  |
| 3g | 3g network |  |
| 4g | 4g network |  |
| 5g | 5g network |  |
| ethernet | Wired network | App |
| unknown | Unusual network types under Android |  |
| none | Wireless network |  |

**Example**

```
uni.getNetworkType({
	success: function (res) {
		console.log(res.networkType);
	}
});
```

###  uni.onNetworkStatusChange(CALLBACK)

listening to network status change. You can use `uni.offNetworkStatusChange` to cancel listening to.

**CALLBACK return parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| isConnected | Boolean | Is there a current network connection | Not supported by the ByteDance applet |
| networkType | String | Network type |  |

**Example**

```
uni.onNetworkStatusChange(function (res) {
	console.log(res.isConnected);
	console.log(res.networkType);
});
```

###  uni.offNetworkStatusChange(CALLBACK)

Cancel listening to network status change.

**Tips**

-   `CALLBACK` must be the `CALLBACK` passed in when calling `uni.onNetworkStatusChange`

E.g.:

```
var CALLBACK = function(res) {
    //... Write your business logic here
}
uni.offNetworkStatusChange(CALLBACK)
uni.onNetworkStatusChange(CALLBACK);
```
