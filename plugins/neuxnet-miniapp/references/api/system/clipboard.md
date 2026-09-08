---
title: "uni.setClipboardData(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/system/clipboard.html
---
###  uni.setClipboardData(OBJECT)

Set the contents of the system clipboard.

**OBJECT parameter description**

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| data | String | Yes | what needs to be set |  |
| showToast | Boolean | No | Configure whether to pop up a prompt, the default popup prompt | App (3.2.13+), H5 (3.2.13+) |
| success | Function | No | Callback for successful interface call |  |
| fail | Function | No | Callback function for interface call failure |  |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |

**Example**

```
uni.setClipboardData({
	data: 'hello',
	success: function () {
		console.log('success');
	}
});
```

###  uni.getClipboardData(OBJECT)

Get the contents of the system clipboard.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| data | String | Contents of the clipboard |

**Example**

```
uni.getClipboardData({
	success: function (res) {
		console.log(res.data);
	}
});
```
