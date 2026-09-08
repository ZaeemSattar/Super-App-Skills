---
title: "uni.uploadFile(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/request/network-file.html
---
###  uni.uploadFile(OBJECT)

Upload the local resources to the developer server, and the client side initiates one `POST` request, in which `content-type` is `multipart/form-data`.  
If the page obtains the temporary file path of a local resource through an interface such as [uni.chooseImage](../media/image.md#chooseimage), the local resource can be uploaded to the designated server via this interface.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| url | String | Yes | Developer server url |  |
| files | Array | Yes (choose files or filepath) | List of files to be uploaded. **filePath and name will not take effect if using files.** | App, H5( 2.6.15+) |
| file | File | No | File object to be uploaded. | Only supported by H5 (2.6.15+) |
| filePath | String | Yes (choose files or filepath) | Path of the file resource to be uploaded. |  |
| name | String | Yes | The key corresponding to the file, through which the developer can obtain the binary content of the file on the server side. |  |
| header | Object | No | HTTP request Header and Referer should not be used in it. |  |
| timeout | Number | No | Timeout, in ms | H5(HBuilderX 2.9.9+), APP(HBuilderX 2.9.9+) |
| formData | Object | No | Additional form data in HTTP request |  |
| success | Function | No | Callback function for successful interface calling |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**Notice**:

-   The `Timeout` requested by the network can be uniformly configured in the `manifest.json` as [networkTimeout](../../collocation/manifest.md#networktimeout).

**Files parameter description**

The files parameter is an array of file object whose structure is as follows:

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| name | String | No | Item names of the form at the submission of multipart, with file as default |
| file | File | No | File object to be uploaded, only supported by H5 |
| uri | String | Yes | Local address of the file |

Tip:

-   If `name` is left blank or has the same value, the server may read only one file when it reads the file.

**success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| data | String | Data returned by the developer server |
| statusCode | Number | HTTP status code returned by the developer server |

**Example**

```
uni.chooseImage({
	success: (chooseImageRes) => {
		const tempFilePaths = chooseImageRes.tempFilePaths;
		uni.uploadFile({
			url: 'https://www.example.com/upload',
			filePath: tempFilePaths[0],
			name: 'file',
			formData: {
				'user': 'test'
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes.data);
			}
		});
	}
});
```

**Return value**

If you want to return a `uploadTask` object, at least one of the success/fail/complete parameters needs to be passed in. E.g.:

```
var uploadTask = uni.uploadFile({
	complete: ()=> {}
});
uploadTask.abort();
```

If the success/fail/complete parameter is not passed in, the encapsulated Promise object will be returned: [Promise encapsulation](../index.md#promise-封装)

You can listen to upload progress change events and cancel upload tasks with `uploadTask`.

**Method list of uploadTask object**

| Method | Parameter | Instruction |
| --- | --- | --- |
| abort |  | Interrupt upload task |
| onProgressUpdate | callback | listen to upload progress changes |

**OnProgressUpdate return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| progress | Number | Upload progress percentage |
| totalBytesSent | Number | Length of uploaded data, in Bytes |
| totalBytesExpectedToSend | Number | Total length of expected data to be uploaded, in Bytes |

**Example**

```
uni.chooseImage({
	success: (chooseImageRes) => {
		const tempFilePaths = chooseImageRes.tempFilePaths;
		const uploadTask = uni.uploadFile({
			url: 'https://www.example.com/upload', 
			filePath: tempFilePaths[0],
			name: 'file',
			formData: {
				'user': 'test'
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes.data);
			}
		});

		uploadTask.onProgressUpdate((res) => {

			//Testing condition, to cancel the upload task.
			if (res.progress > 50) {
				uploadTask.abort();
			}
		});
	}
});
```

###  uni.downloadFile(OBJECT)

Download the file resources locally, and the client directly initiates the HTTP GET request to return the local temporary path of the file.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| url | String | Yes | url of the downloaded resource |  |
| header | Object | No | HTTP request Header and Referer should not be used in it. |  |
| timeout | Number | No | Timeout, in ms | H5(HBuilderX 2.9.9+), APP(HBuilderX 2.9.9+) |
| success | Function | No | After downloading successfully, it will be sent to the page in the form of tempfilepath, res = {tempfilepath: 'Temporary path of the file'} |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |
| filePath | string | No | Specify the path to save the file after downloading (local path) | WeChat applet (IOS applet needs to add this field to save it to the album before it can be saved normally) |

**Note: The temporary path of the file can be used normally during this startup of the application. To save it for a long time, you need to call [uni.saveFile](../file/file.md#savefile) actively, which will not be accessible until the next startup of the application.**

**success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| tempFilePath | String | Temporary file path, and the downloaded file will be stored in a temporary file |
| statusCode | Number | HTTP status code returned by the developer server |

**Notice**

-   The `Timeout` requested by the network can be uniformly configured in the `manifest.json` as [networkTimeout](../../collocation/manifest.md#networktimeout).

**Example**

```
uni.downloadFile({
	url: 'https://www.example.com/file/test', 
	success: (res) => {
		if (res.statusCode === 200) {
		}
	}
});
```

**Return value**

If you want to return a `downloadTask` object, at least one of the success/fail/complete parameters needs to be passed in. E.g.:

```
var downloadTask = uni.downloadFile({
	complete: ()=> {}
});
downloadTask.abort();
```

If the success/fail/complete parameter is not passed in, the encapsulated Promise object will be returned: [Promise encapsulation](../index.md#promise-封装)

You can listen to download progress change events and cancel upload download tasks with `downloadTask`.

**Method list of downloadTask object**

| Method | Parameter | Instruction | Minimum version |
| --- | --- | --- | --- |
| abort |  | Interrupt download task | \* |
| onProgressUpdate | callback | listen to download progress changes | \* |

**OnProgressUpdate return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| progress | Number | Download progress percentage |
| totalBytesWritten | Number | Length of downloaded data, in Bytes |
| totalBytesExpectedToWrite | Number | Total length of expected data to be downloaded, in Bytes |

**Example**

```
const downloadTask = uni.downloadFile({
	success: (res) => {
		if (res.statusCode === 200) {
		}
	}
});

downloadTask.onProgressUpdate((res) => {

	// If the test conditions are met, cancel the download task.
	if (res.progress > 50) {
		downloadTask.abort();
	}
});
```
