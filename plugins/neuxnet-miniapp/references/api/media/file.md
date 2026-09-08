---
title: "uni.chooseFile(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/media/file.html
---
###  uni.chooseFile(OBJECT)

Select files from the local directory.

This API is mainly used to select non-media files. For media files, there are three specialized APIs:

-   If you want to download files to the plus.io-controlled directories such as `_doc`, `_downloads`, `_documents`, etc. on the Mini App side, you can use [plus.io Api](https://www.html5plus.org/doc/zh_cn/io.html) , make the selection box yourself.

**OBJECT parameter description**

| Parameter name | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| count | Number | 100 | No | Maximum number of files that can be selected | See the instructions below |
| type | String | 'all' | No | Type of selected file | See the instructions below |
| extension | Array<String> |  | No | Filter by file extension. No empty string is allowed in any item. No filtering by default. | See the instructions below |
| sourceType | Array<String> | \['album','camera'\] | No | (Available only when the type is `image` or `video`) `album` refers to selecting images from album, and `camera` refers to using camera. Both exist by default. If you want to open the camera or select from the album directly, please use only one option. |  |
| success | Function |  | Yes | If success, it returns the list of local file paths of the image `tempFilePaths` |  |
| fail | Function |  | No | Callback function for failed interface calling |  |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**Tips**

-   The performance of the count value on H5 platform is based on the specification of the browser. As seen from the resent testing result, only single/multiple selection can be specified, and the amount limitation is unavailable. Moreover, there are few real mobile browsers that support multiple choices.
-   The sourceType value behaves differently on the H5 platform depending on the browser. Generally, it is not restricted to use only the photo album, and some browsers cannot restrict the use of the camera.
-   extension only supports file extensions temporarily, such as `['.zip','.exe','.js']`, instead of `application/msword` and similar values

**Note: The temporary path of the file can be used normally during this startup of the application. To save it for a long time, you need to call [uni.saveFile](../file/file.md#savefile) actively, which will not be accessible until the next startup of the application.**

**Legal values of OBJECT.type.**

| Value | Instruction |
| --- | --- |
| all | Select from all files |
| video | Only video files can be selected |
| image | Only image files can be selected |

**Tips**

-   If both the type attribute and the extension exist, such as `{type:'image',extension:['.png','.jpg']}`, the `image/png,image/jpg` file will be selected
-   If only the extension attribute is configured, such as `{extension:['.doc','.xlsx','.docx']}`, the `.doc,.xlsx,.docx` file will be selected. See [`accept attribute`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/accept) for details
-   In the WeChat environment, if `type="all"`, the `extension` attribute is invalid

**success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| tempFilePaths | Array<String> | List of local file paths for files. |
| tempFiles | Array<Object>, Array<File> | List of local files. Each item is a file object. |

**The structure of File object is as follows.**

| Parameter | Type | Instruction |
| --- | --- | --- |
| path | String | Local file path |
| size | Number | Local file size, in: B |
| name | String | File names with extensions, only supported by H5. |
| type | String | Types of files, only supported by H5. |

**Example**

```
uni.chooseFile({
  extension:['.zip','.doc'],
	success: function (res) {
		console.log(JSON.stringify(res.tempFilePaths));
	}
});

//Select image file
uni.chooseFile({
  count: 10,
  type: 'image',
  success (res) {
    // tempFilePath can display images as the src attribute of the img tags.
    const tempFilePaths = res.tempFiles
  }
})
```
