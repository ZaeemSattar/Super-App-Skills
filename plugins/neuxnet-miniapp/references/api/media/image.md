---
title: "uni.chooseImage(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/media/image.html
---
###  uni.chooseImage(OBJECT)

Select images from local album or take photos with the camera.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction | platform |
| --- | --- | --- | --- | --- |
| count | Number | No | The default of the maximum number of selected images is 9. | See the instructions below |
| sizeType | Array<String> | No | original original image, compressed compressed image, both are available by default | Mini App |
| extension | Array<String> | No | Filter by file extension. No empty string is allowed in any item. No filtering by default. | H5 |
| sourceType | Array<String> | No | album refers to selecting images from album, and camera refers to using camera. Both exist by default. If you want to open the camera or select from the album directly, please use only one option. |  |
| crop | Object | No | Image cropping parameter. sizeType will be invalid after enabling. | Mini App |
| success | Function | Yes | If success, it returns the list of local file paths tempFilePaths. |  |
| fail | Function | No | Callback function for interface call failure | Mini App |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**crop parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| quality | Number | No | The value range is 1-100, the smaller the value, the lower the quality (only valid for jpg format). The default value is 80. |  |
| width | Number | is the width of the | crop, in px, used to calculate the crop aspect ratio. |  |
| height | Number | Yes | the height of the crop, in px, used to calculate the crop aspect ratio. |  |
| resize | Boolean | No | Whether to use width and height as crop to save the real pixel value of the image. The default value is true. Note: When set to false, the pixel value of the picture is displayed in the crop editing interface. When set to true, it is not displayed |  |

**Tips**

-   The performance of the count value on H5 platform is based on the specification of the browser. As seen from the resent testing result, only single/multiple selection can be specified, and the amount limitation is unavailable. Moreover, there are few real mobile browsers that support multiple choices.
-   The value of sourceType varies according to different browsers on the H5 platform. Generally, it is not restricted to use only the photo album, and some browsers cannot restrict whether to use the camera.
-   The user authorization API can be used to determine whether the user authorizes the application the access to the photo album or camera
-   If you need to select non-media files on the App side, you can search for \[File Selection\] in the plugin market , in which Native.js can be used on the Android side without native plugins, while the iOS side requires native plugins.

**Note: The temporary path of the file can be used normally during this startup of the application. To save it for a long time, you need to call [uni.saveFile](../file/file.md#savefile) actively, which will not be accessible until the next startup of the application.**

**success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| tempFilePaths | Array<String> | List of local file path of image. |
| tempFiles | Array<Object>, Array<File> | List of local images. Each item is a file object. |

**The structure of File object is as follows.**

| Parameter | Type | Instruction |
| --- | --- | --- |
| path | String | Local file path |
| size | Number | Local file size, in: B |
| name | String | File names with extensions, only supported by H5. |
| type | String | Types of files, only supported by H5. |

**Example**

```
uni.chooseImage({
	success: function (res) {
		console.log(JSON.stringify(res.tempFilePaths));
	}
});
```

###  uni.previewImage(OBJECT)

Preview image.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| current | String/Number | See the instructions below | See the instructions below |  |
| urls | Array<String> | Yes | List of links to preview images |  |
| indicator | String | No | Image indicator style. Options include: "default" - bottom dot indicator; "number" - top number indicator; "none" - no indicator displayed. | Mini App |
| loop | Boolean | No | Whether to preview circularly, with false as default. | Mini App |
| longPressActions | Object | No | Long press the picture to display the operation menu. If left blank, the default is **Save album** | Mini App |
| success | Function | No | Callback function for successful interface calling |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**current parameter description**

current is the link/index value of the currently displayed image. If the value is not filled or invalid, the first image of urls will be displayed.

Note! When urls have duplicate image links :

-   Upload the link. The preview results always show where the link firstly appears in urls.

For example:

A group of pictures `[A, B1, C, B2, D]`, where B1 and B2 have the same picture link.

-   If upload B2 link, the preview result is B1, the previous one is A, and the next one is C.
-   Pass the index value of B2 as 3, the preview result is B2, the previous one is C, the next one is D. At this time, on the WeChat/Baidu/ByteDance applet platform, the final incoming urls is `[A, C, B2, D]`, filtering out the B1 that duplicates B2.

**LongPressActions parameter description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| itemList | Array<String> | Yes | Text array of buttons |
| itemColor | String | No | Button text color, in string format. The default is "#000000". |
| success | Function | No | Callback function for successful interface calling. See the notices on returning parameter description. |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| index | Number | User holds down the index value of the image. |
| tapIndex | Number | User press the index value of the button list |

**Example**

```
// Select 6 images from album
uni.chooseImage({
	count: 6,
	sizeType: ['original', 'compressed'],
	sourceType: ['album'],
	success: function(res) {
		//Preview image
		uni.previewImage({
			urls: res.tempFilePaths,
			longPressActions: {
				success: function(data) {
				},
				fail: function(err) {
					console.log(err.errMsg);
				}
			}
		});
	}
	});
```

**TIPS**

-   On the non-H5 side, previewImage is implemented natively with low flexibility of interface customization.

###  uni.closePreviewImage(OBJECT)

Close the preview image.

| Mini App | H5 |
| --- | --- |
| √ | √ | x | x | x | x | x | x | x | x |

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

###  uni.getImageInfo(OBJECT)

Get image information.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| src | String | Yes | Image path. Relative path, temporary file path, storage file path and network image path are applicable |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**success return parameter description**

| Parameter name | Type | Instruction |
| --- | --- | --- |
| width | Number | Image width, in px |  |
| height | Number | Image height, in px |  |
| path | String | Return the local path of the image |  |
| orientation | String | Returns the orientation of the image, the valid values are shown in the following table | App, Mini Program, JD Mini Program |
| type | String | The format of the returned image | App, Mini Program, JD Mini Program |

**Orientation parameter description**

| Enumerated value | Instruction |
| --- | --- |
| up | Default |
| down | 180° rotation |
| left | Rotate 90° counterclockwise |
| right | Rotate 90° clockwise |
| up-mirrored | Same as up, but flipped horizontally |
| down-mirrored | Same as down, but flipped horizontally. |
| left-mirrored | Same as left, but flipped vertically. |
| right-mirrored | Same as right, but flipped vertically. |

**Example**

```
uni.chooseImage({
	count: 1,
	sourceType: ['album'],
	success: function (res) {
		uni.getImageInfo({
			src: res.tempFilePaths[0],
			success: function (image) {
				console.log(image.width);
				console.log(image.height);
			}
		});
	}
});
```

###  uni.saveImageToPhotosAlbum(OBJECT)

Save the image to the system album.

**Platform difference description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| filePath | String | Yes | Image path, Temporary file path and permanent file path are allowed but not network image path. |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**success return parameter description**

| Parameter name | Type | Instruction |
| --- | --- | --- |
| path | String | Path of image saved to album, only supported in Mini App |
| errMsg | String | Call result |

**Notice**

-   There is no API for H5 to trigger save to album action. When downloading images, the browser will ask for the save path of images.

**Sample code:**

```
uni.chooseImage({
	count: 1,
	sourceType: ['camera'],
	success: function (res) {
		uni.saveImageToPhotosAlbum({
			filePath: res.tempFilePaths[0],
			success: function () {
				console.log('save success');
			}
		});
	}
});
```

###  uni.compressImage(OBJECT)

Image compressing interface, to choose compression quality.

**Platform difference description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| src | String |  | Yes | Image path, which can be relative path, temporary file path and storage file path |  |
| quality | Number | 80 | No | Compression quality ranges from 0 to 100, and the smaller the value, the lower the quality, the higher the compression rate (only for JPG). |  |
| width | String | auto | No | Scale the width of the image, support pixel value (such as "100px"), percentage (such as "50%"), automatic calculation (such as "auto", that is, the zoom according to the width and the width of the source image Scale calculation, if width is not set, the width of the source image is used) | Mini App |
| height | String | auto | No | Height of the image to be scaled, in pixel (e.g., "100px"), percentage (e.g., "50%") or automatic calculation (e.g., "auto", based on the scaling ratio of height to the height of the source image. If height is not set, use the height of the source image). | Mini App |
| rotate | Number | 0 | No | Rotation degree, range 0～360 | Mini App |
| success | Function |  | No | Callback function for successful interface calling |  |
| fail | Function |  | No | Callback function for failed interface calling |  |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**success return parameter description**

| Attribute | Type | Instruction |
| --- | --- | --- |
| tempFilePath | String | Temporary file path of compressed image |

**Sample code:**

```
uni.compressImage({
  src: '/static/logo.jpg',
  quality: 80,
  success: res => {
    console.log(res.tempFilePath)
  }
})
```
