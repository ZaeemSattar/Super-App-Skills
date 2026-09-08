---
title: "uni.request(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/request/request.html
---
###  uni.request(OBJECT)

Initiate a network request.

**OBJECT parameter description**

| Parameter name | Type | Required | Defaults | Instruction |
| --- | --- | --- | --- | --- |
| url | String | Yes |  | Developer server interface address |  |
| data | Object/String/ArrayBuffer | No |  | Requested parameters | The ArrayBuffer type is not supported under App 3.3.7 |
| header | Object | No |  | Set the request header, and Referer should not be used in it. | cookies will be automatically carried on the App and H5 sides, and the manual modification is disabled on H5 side |
| method | String | No | GET | See the description below for valid values |  |
| timeout | Number | No | 60000 | Timeout time, unit ms | H5(HBuilderX 2.9.9+), APP(HBuilderX 2.9.9+), WeChat applet (2.10.0), Alipay applet |
| dataType | String | No | json | If it is set to json, one JSON.parse will be applied to the returned data |  |
| responseType | String | No | text | Sets the data type of the response. Legal values: text, arraybuffer | Alipay applet does not support |
| sslVerify | Boolean | No | true | Verify ssl certificate | Only supported by App Android (HBuilderX 2.3.3+), offline packaging is not supported |
| withCredentials | Boolean | No | false | Whether to carry credentials (cookies) in cross domain requests | H5 only (HBuilderX 2.6.15+) |
| firstIpv4 | Boolean | No | false | ipv4 is used in priority for DNS resolving | App-Android only (HBuilderX 2.8.0 +) |
| success | Function | No |  | Receive the callback function successfully returned by the developer server |  |
| fail | Function | No |  | Callback function for failed interface calling |  |
| complete | Function | No |  | Callback function for closed interface calling (available both for successful and failed calling) |  |

**Valid values for method**

Note: The valid value of method must be capitalized. The valid value of method supported by each platform is different. For details, see the following table.

| method | Mini App | H5 |
| --- | --- | --- |
| GET | √ | √ |
| POST | √ | √ |
| PUT | √ | √ |
| DELETE | √ | √ |
| CONNECT | x | √ |
| HEAD | √ | √ |
| OPTIONS | √ | √ |
| TRACE | x | √ |

**success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| data | Object/String/ArrayBuffer | Data returned by the developer server |
| statusCode | Number | HTTP status code returned by the developer server |
| header | Object | HTTP Response Header returned by the developer server |
| cookies | `Array.<string>` | Cookies returned by the developer server, formatted as a string array |

**data description**

Finally, the data sent to the server is of String type, and if the incoming data is not of String type, it will be converted into String. The conversion rules are as follows:

-   For the `GET` method, the data will be converted to a query string. For example, the converted result of `{ name: 'name', age: 18 }` is `name=name&age=18`.
-   For the `POST` method and for the data whose `header['content-type']` is `application/json`, JSON serialization will be performed.
-   For the `POST` method and for the data whose `header['content-type']` is `application/x-www-form-urlencoded`, the data will be converted into a query string.

**Example**

```
uni.request({
    data: {
        text: 'uni.request'
    },
    header: {
    },
    success: (res) => {
        console.log(res.data);
        this.text = 'request success';
    }
});
```

**Return value**

If you want to return a `requestTask` object, at least one of the success/fail/complete parameters needs to be passed in. E.g.:

```
var requestTask = uni.request({
	complete: ()=> {}
});
requestTask.abort();
```

If the success/fail/complete parameter is not passed in, the encapsulated Promise object will be returned

The request task can be interrupted by `requestTask`.

**Method list of requestTask object**

| Method | Parameter | Instruction |
| --- | --- | --- |
| abort |  | Interrupt request task |

**Example**

```
const requestTask = uni.request({
	data: {
        name: 'name',
        age: 18
	},
	success: function(res) {
		console.log(res.data);
	}
});

//Interrupt request task
requestTask.abort();
```

**Tips**

-   In the requested `header`, `content-type` defaults to `application/json`.
-   The `Timeout` requested by the network can be uniformly configured in the `manifest.json` as [networkTimeout](../../collocation/manifest.md#networktimeout).
-   H5 side cookie are restricted in terms of cross-domain (like ordinary website development). The old version of uni.request does not support withCredentials configuration, and xhr objects or other class libraries can be used directly.
-   According to the W3C specification, the Set-Cookie and Set-Cookie2 fields in the response header cannot be obtained on the H5 side. For cross-domain requests, the allowed fields of the response header are only "simple response header" and "Access-Control-Expose-Headers" ([Details](https://www.w3.org/TR/cors/#access-control-allow-credentials-response-header) )
-   The lower version of the mobile phone does not support ipv6, and if the server only allows ipv6, the old mobile phone will not work normally or access the server at normal speed.
-   Server addresses such as host and 127.0.0.1 can only be run on the PC side, and cannot be accessed when the mobile phone side is connected. Please use standard IP and ensure that the mobile phone can connect to the PC network
-   In the debug mode, the Android is unable to obtain the response header temporarily, and the request will fail if the url contains illegal characters (such as spaces not encoded as %20)
-   For some Android devices, the network speed in mobile App Playground operation or debug mode is much lower than that in release mode.
-   The request for ssl certificates issued by some relatively small certificate institutions (such as CFCA OV OCA) will fail on Android devices because the root certificates of these institutions are not in the built-in root certificate library of the system. You can change to other certificates issued by other common institutions (such as Let's Encrypt), or configure sslVerify as false to turn off ssl certificate verification (not recommended).
-   Offline packaging does not support `sslVerify` configuration
-   It is recommended that the amount of data requested by a single network should be controlled below 50K (json data only, excluding images), and excessive data should be obtained in different pages to improve the application experience.
