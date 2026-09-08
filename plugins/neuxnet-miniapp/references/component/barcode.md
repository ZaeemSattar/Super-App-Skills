---
title: "Barcode"
source_url: https://miniapp.neuxnet.com/component/barcode.html
---
####  Barcode

Scanning component specific to the app-side nvue.

-   This component is used for the nvue page on the app side to realize the scanning embedded in the interface. For other scenes and other platforms, please use the full-screen scanning API: [uni.scanCode](https://uniapp.dcloud.io/api/system/barcode)
-   For the pure nvue project of App (rendered as native in manifest), the uni.scanCode API is temporarily not supported, and only the barcode component can be used instead.
-   This component has been supported since HBuilderX 2.1.5+.

**Attribute description** Set the attributes of Barcode scanning control, such as the color of the scanning box and the barcode scanning bar.

| property | type | default value | required | description |
| --- | --- | --- | --- | --- |
| autostart | boolean | false | No | Whether to automatically start scanning code |
| background | string |  | No | The barcode identifies the background color of the control, and the color value supports (refer to CSS color specification): color name (refer to CSS Color Names)/hexadecimal value/rgb value, the default value is black. |
| frameColor | string |  | No | Scan frame color, color value support (refer to CSS color specification): color name (refer to CSS Color Names)/hexadecimal value/rgb value/rgba value, the default value is red. |
| scanbarColor | string |  | No | Scan bar color, color value support (refer to CSS color specification): color name (refer to CSS Color Names)/hexadecimal value/rgb value/rgba value, the default value is red. |
| filters | Array\[Number\] | \[0,1,2\] | No | Barcode type filter, barcode type constant array, by default, QR, EAN13, EAN8 types are supported. This parameter can be used to set the barcode types supported by scanning code recognition (note: the more barcode types supported by the setting, the scanning recognition speed may be reduced). |

**Code type constant**

-   QR: QR code, with a value of 0
-   EAN13: EAN barcode standard version, with a value of 1
-   EAN8: EAN barcode short version, with a value of 2
-   AZTEC: Aztec QR code, with a value of 3
-   DATAMATRIX: Data Matrix QR code, with a value of 4
-   UPCA: UPC barcode standard version, with a value of 5
-   UPCE: UPC barcode short version, with a value of 6
-   CODABAR: Codabar barcode, with a value of 7
-   CODE39: Code39 barcode, with a value of 8
-   CODE93: Code93 barcode, with a value of 9
-   CODE128: Code128 barcode, with a value of 10
-   ITF: ITF barcode, with a value of 11
-   MAXICODE: MaxiCode QR code, with a value of 12
-   PDF417: PDF 417 QR barcode, with a value of 13
-   RSS14: RSS 14 combined barcode, with a value of 14
-   RSSEXPANDED: Expanded RSS combined barcode, with a value of 15

#####  start(object)

> Start scan code recognition

######  Object object

| Attribute | Description | Type | Required | Remarks |
| --- | --- | --- | --- | --- |
| conserve | Whether to save the screenshot when the code is scanned successfully | Boolean | No | If set to true, the image will be saved when the code is scanned successfully, and the path to save the file will be returned through the file parameter of the onmarked callback function. The default value is false, which does not save screenshots. |
| filename | The image save path when the scan code is saved successfully | String | No | You can set the path and name of the screenshot to save through this parameter. If you set the image file name, you must specify the suffix of the file (must be .png), otherwise it is considered to be specified directory, and the file name is automatically generated. |
| vibrate | Do you need to vibrate when the code is scanned successfully | Boolean | No | If it is set to true, the device will vibrate when the code is scanned successfully, and if it is false, it will not vibrate. The default value is true. |
| sound | The prompt sound to be played when the code is scanned successfully | String | No | Available values: "none" - do not play the prompt sound; "default" - play the default prompt sound (built-in 5+ engine). The default value is "default". |

#####  cancel()

> Cancel scan code recognition

| Parameters | Type | Required | Description |
| --- | --- | --- | --- |
| None | None | None | End the barcode recognition operation on the image data obtained by the camera, and close the video capture of the camera at the same time. After the end, you can call the start method to restart the recognition. |

#####  setFlash(boolean)

> Operating the flash

######  Boolean boolean

| Type | Required | Description | Remarks |
| --- | --- | --- | --- |
| Boolean | Yes | Whether to turn on the flash | The value can be true or false, true means turn on the flash, false means turn off the flash. |

#####  Event

#####  marked

> Barcode identification successful event {event.detail}

######  Return parameter description

| parameter | type | description |
| --- | --- | --- |
| type | string | "success" means success |
| message | string | The barcode data recognized, the data content recognized by scanning the code, and the string type, in UTF8 encoding format. |
| The barcode type recognized by code | Number | is consistent with the barcode type constant of the Barcode component. |
| file | string | The file path of the screenshots that have been scanned successfully, the screenshots identified by the scanning, and the png format files. If it is set to not save the screenshots, it will return undefined. |

#####  error

> Barcode recognition error event

######  Return parameter description

| parameter | type | description |
| --- | --- | --- |
| type | string | "fail" means failure |
| code | number | corresponding code |
| message | string | Failure description |

**Example:**

```
<template>
	<view>
		<barcode id='1' class="barcode" autostart="true" ref="barcode" background="rgb(0,0,0)" frameColor="#1C86EE" scanbarColor="#1C86EE" :filters="fil" @marked="success1" @error="fail1"></barcode>
		<button class="btn" @click="toStart">开始扫码识别</button>
		<button class="btn" @click="tocancel">取消扫码识别</button>
		<button class="btn" @click="toFlash">开启闪光灯</button>
		<button class="btn" @click="toscan">预览</button>
	</view>
</template>

<script>
	export default {
		onLoad() {
			
		},
		data() {
			return {
				fil: [0, 2, 1]
			}
		},

		methods: {
			success1(e) {
				console.log("success1:" + JSON.stringify(e));
			},
			fail1(e) {
				console.log("fail1:" + JSON.stringify(e));
			},
			toStart: function() {
				this.$refs.barcode.start({
					conserve: true,
					filename: '_doc/barcode/'
				});
			},
			tocancel:function(){
				this.$refs.barcode.cancel();
			},
			toFlash: function() {
				this.$refs.barcode.setFlash(true);
			},

			toscan: function() {
				console.log("scan:");				
				const barcodeModule = uni.requireNativePlugin('barcodeScan');
				barcodeModule.scan("/static/barcode1.png"
				,(e)=>{
					console.log("scan_error:"+JSON.stringify(e));
				});
			}
		}
	}
</script>

<style>
	.barcode {
		width: 750rpx;
		height: 700rpx;
		background-color: #808080;
	}

	.btn {
		top: 20rpx;
		width: 730rpx;
		margin-left: 10rpx;
		margin-top: 10rpx;
		background-color: #458B00;
		border-radius: 10rpx;
	}
</style>
```
