---
title: "uni.scanCode(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/system/barcode.html
---
###  uni.scanCode(OBJECT)

Call the client scanning interface, and return the corresponding results after successful scanning.

**Platform difference description**

|Mini App|H5| |Mini App|H5| |:-😐:-😐 |√|x|

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| onlyFromCamera | Boolean | No |  |
| scanType | Array | No | Scan code type, refer to the legal value of `scanType` below |  |
| autoDecodeCharset | Boolean | No | Enable the automatic character encoding function, the default is No | Mini App |
| success | Function | No | Callback for successful interface calling. See the notices on returning parameter description for returning contents. |  |
| fail | Function | No | Callback function for failed interface calling (triggered when identification failed, or being cancelled by user, etc.) |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**legal values for scanType**

| value | description |
| --- | --- |
| barCode | One-dimensional code |
| qrCode | QR Code |
| datamatrix | Data Matrix Code |
| pdf417 | PDF417 Barcode |

**success return parameter description**

| Parameter | Instruction | Platform difference description |
| --- | --- | --- |
| result | Content scanned |  |
| scanType | Type of scanned code | Mini App |
| charSet | The character set of the scanned code | Mini App |

**Example**

```
//Allow scanning codes from cameras and photo albums
uni.scanCode({
	success: function (res) {
		console.log('Type：' + res.scanType);
		console.log('Result：' + res.result);
	}
});

// Allow scanning codes from cameras only.
uni.scanCode({
	onlyFromCamera: true,
	success: function (res) {
		console.log('Type：' + res.scanType);
		console.log('Result：' + res.result);
	}
});

//Call up scanning
uni.scanCode({
	scanType: ['barCode'],
	success: function (res) {
		console.log('Type：' + res.scanType);
		console.log('Result：' + res.result);
	}
});
```
