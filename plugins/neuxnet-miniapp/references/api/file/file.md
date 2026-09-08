---
title: "uni.saveFile(OBJECT) @savefile"
source_url: https://miniapp.neuxnet.com/api/file/file.html
---
###  uni.saveFile(OBJECT)

Save the file to a local directory.

**Note: saveFile will move the temporary file, so the tempFilePath passed in after the call is successful will not be available**

**OBJECT parameter description:**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| tempFilePath | String | Yes | Temporary path of files to be saved |
| success | Function | No | Return the saving path of the file, res = {savedFilePath: 'File saving path'} |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Success return parameter description:**

| Parameter | Instruction |
| --- | --- |
| savedFilePath | File saving path |

**Sample code:**

```
uni.chooseImage({
  success: function (res) {
    var tempFilePaths = res.tempFilePaths;
    uni.saveFile({
      tempFilePath: tempFilePaths[0],
      success: function (res) {
        var savedFilePath = res.savedFilePath;
      }
    });
  }
});
```

###  uni.getSavedFileList(OBJECT)

Get the list of locally saved files.

**OBJECT parameter description:**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | For callback function for successful interface calling, see the success return parameter description for the return result. |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Success return parameter description:**

| Parameter | Type | Instruction |
| --- | --- | --- |
| errMsg | String | Interface call result |
| fileList | Array<Object> | Document list |

**Item description in fileList:**

| Key | Type | Instruction |
| --- | --- | --- |
| filePath | String | Local path of the file |
| createTime | Number | Timestamp when the file is saved: the number of seconds from `1970/01/01 08:00:00` to this moment. |
| size | Number | File size, in bytes. |

**Sample code:**

```
uni.getSavedFileList({
  success: function (res) {
    console.log(res.fileList);
  }
});
```

###  uni.getSavedFileInfo(OBJECT)

Get the file information of the local file. This interface can only be used to get files that have been saved locally.

**OBJECT parameter description:**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| filePath | String | Yes | File path |
| success | Function | No | For callback function for successful interface calling, see the success return parameter description for the return result. |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Success return parameter description:**

| Parameter | Type | Instruction |
| --- | --- | --- |
| errMsg | String | Interface call result |
| size | Number | File size, in bytes. |
| createTime | Number | Timestamp when the file is saved: the number of seconds from `1970/01/01 08:00:00` to this moment. |

**Sample code:**

```
uni.getSavedFileInfo({
  success: function (res) {
    console.log(res.size);
    console.log(res.createTime);
  }
});
```

###  uni.removeSavedFile(OBJECT)

Delete locally stored files.

**OBJECT parameter description:**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| filePath | String | Yes | Path of the file to be deleted |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Sample code:**

```
uni.getSavedFileList({
  success: function (res) {
    if (res.fileList.length > 0) {
      uni.removeSavedFile({
        filePath: res.fileList[0].filePath,
        complete: function (res) {
          console.log(res);
        }
      });
    }
  }
});
```

###  uni.getFileInfo(OBJECT)

Get file information

**OBJECT parameter description:**

| Parameter name | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| filePath | String |  | Yes | Local file path |  |
| digestAlgorithm | String | md5 | No | The algorithm for calculating the digest of the file, which can be md5, sha1. | WeChat applet, Jingdong applet, App 2.9.0+ |
| success | Function |  | No | Callback function for successful interface calling |  |
| fail | Function |  | No | Callback function for failed interface calling |  |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**Success return parameter description:**

| Parameter | Type | Instruction |
| --- | --- | --- |
| errMsg | String | Interface call result |  |
| size | Number | File size, in bytes. |  |
| digest | String | The file digest calculated according to the incoming digestAlgorithm | WeChat applet, Jingdong applet, App 2.9.0+ |

###  uni.openDocument(OBJECT)

Open the document on the new page. Supported formats: doc, xls, ppt, pdf, docx, xlsx, pptx.

**OBJECT parameter description:**

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| filePath | String | is | file path, available via downFile |  |
| success | String | No | Callback function for successful interface call |  |
| complete | String | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |  |

**Sample code:**

```
uni.downloadFile({
  url: 'https://example.com/somefile.pdf',
  success: function (res) {
    var filePath = res.tempFilePath;
    uni.openDocument({
      filePath: filePath,
      success: function (res) {
      }
    });
  }
});
```

**Tips**

-   On the App side, the io operation can also use the more powerful plus.io API. [https://www.html5plus.org/doc/zh\_cn/io.html](https://www.html5plus.org/doc/zh_cn/io.html)
-   On the App side, open files in various formats, such as office and pdf
-   Select file upload, Mini App has its own api: If you need to select non-media files on the App side, and Native.js can be used on the Android side, no native plug-ins, while the iOS side requires native plug-ins.
