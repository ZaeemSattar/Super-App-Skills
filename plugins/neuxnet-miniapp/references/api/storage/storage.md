---
title: "uni.setStorage(OBJECT) @setstorage"
source_url: https://miniapp.neuxnet.com/api/storage/storage.html
---
###  uni.setStorage(OBJECT)

Storing data in the key specified in the local cache will overwrite the original content corresponding to the key, which is an asynchronous interface.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| key | String | Yes | key specified in the local cache |
| data | Any | Yes | Content to be stored, only supporting native types and objects that can be serialized through JSON.stringify. |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.setStorage({
	key: 'storage_key',
	data: 'hello',
	success: function () {
		console.log('success');
	}
});
```

**Notice**

-   `uni-`, `uni_`, are prefixed keys, and key prefixes are reserved for the system. For example, `uni_deviceId`, `uni_id_token`, please avoid these prefixes when naming keys.

###  uni.setStorageSync(KEY,DATA)

Storing data in the key specified in the local cache will overwrite the original content corresponding to the key, which is a synchronous interface.

**Parameter Description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| key | String | Yes | key specified in the local cache |
| data | Any | Yes | Content to be stored, only supporting native types and objects that can be serialized through JSON.stringify. |

```
try {
	uni.setStorageSync('storage_key', 'hello');
} catch (e) {
	// error
}
```

###  uni.getStorage(OBJECT)

Get the content corresponding to the specified key asynchronously from the local cache.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| key | String | Yes | key specified in the local cache |
| success | Function | Yes | callback function called by the interface, res = {data: Content corresponding to the key} |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| data | Any | Content corresponding to the key |

**Example**

```
uni.getStorage({
	key: 'storage_key',
	success: function (res) {
		console.log(res.data);
	}
});
```

###  uni.getStorageSync(KEY)

Get the content corresponding to the specified key synchronously from the local cache.

**Parameter Description**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| key | String | Yes | key specified in the local cache |

**Example**

```
try {
	const value = uni.getStorageSync('storage_key');
	if (value) {
		console.log(value);
	}
} catch (e) {
	// error
}
```

###  uni.getStorageInfo(OBJECT)

Get information about the current storage asynchronously.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | Yes | Callback function for interface calling. See the notices on returning parameter description. |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| keys | Array＜String＞ | All keys in the current storage |
| currentSize | Number | Size of the space currently occupied, in kb |
| limitSize | Number | Limited size of the space, in kb |

**Example**

```
uni.getStorageInfo({
	success: function (res) {
		console.log(res.keys);
		console.log(res.currentSize);
		console.log(res.limitSize);
	}
});
```

###  uni.getStorageInfoSync()

Get information about the current storage synchronously.

**Example**

```
try {
	const res = uni.getStorageInfoSync();
	console.log(res.keys);
	console.log(res.currentSize);
	console.log(res.limitSize);
} catch (e) {
	// error
}
```

###  uni.removeStorage(OBJECT)

Removes the specified key asynchronously from the local cache.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| key | String | Yes | key specified in the local cache |
| success | Function | Yes | Callback function for interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.removeStorage({
	key: 'storage_key',
	success: function (res) {
		console.log('success');
	}
});
```

###  uni.removeStorageSync(KEY)

Removes the specified key synchronously from the local cache.

**Parameter Description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| key | String | Yes | key specified in the local cache |

**Example**

```
try {
	uni.removeStorageSync('storage_key');
} catch (e) {
	// error
}
```

###  uni.clearStorage()

Clean up the local data cache.

**Example**

```
uni.clearStorage();
```

###  uni.clearStorageSync()

Clean up the local data cache synchronously.

**Example**

```
try {
	uni.clearStorageSync();
} catch (e) {
	// error
}
```

**Notice**

Mini App Storage is implemented differently at different sides:

-   H5 side uses the localStorage, which, as a cache concept, is limited up to 5M, and may be cleaned up.
-   App side is native plus.storage, no size limit, not cache, but persistent

In addition, other data storage schemes:

-   H5 side also supports websql, indexedDB and sessionStorage.
-   App side also supports [SQLite](https://www.html5plus.org/doc/zh_cn/sqlite.html) , [IO file](https://www.html5plus.org/doc/zh_cn/io.html) and other local storage schemes.
