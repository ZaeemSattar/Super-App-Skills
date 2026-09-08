---
title: "uni.getLocation(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/location/location.html
---
###  uni.getLocation(OBJECT)

Get the current geographical position and speed.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| type | String | No | The default is wgs84 to return gps coordinates, gcj02 to return to National Survey Bureau coordinates, which can be used for `uni.openLocation` and map component coordinates, App and H5 need to configure positioning SDK information to support gcj02. |  |
| altitude | Boolean | No | Passing in true will return the altitude information. Since the acquisition of altitude requires high accuracy, it will slow down the return speed of the interface | Byte Beat applet, Feishu applet, Alipay applet are not supported |
| geocode | Boolean | No | The default is false, whether to resolve the address information | Supported only by the App platform (Android needs to specify the type as gcj02 and configure the three-party positioning SDK) |
| highAccuracyExpireTime | Number | No | High Accuracy Positioning Timeout Time (ms), returns the highest accuracy within the specified time, this value is more than 3000ms and high accuracy positioning is effective | App (3.2.11+), H5 (3.2.11+), WeChat applet (basic library 2.9.0+) |
| timeout | String | No | The default is 5, the positioning timeout, in seconds | Only supported by Feishu applet |
| cacheTimeout | Number | No | Location cache timeout, in seconds; the current location data is cached each time, and the timestamp is recorded. When the next call is within cacheTimeout, the cached data will be returned | Only Feishu applet, Alipay applet Program Support |
| accuracy | String | No | The default is high, which specifies the expected accuracy. High, best are supported. When high is specified, the expected precision value is 100m, and when best is specified, the expected precision value is 20m. When the accuracy obtained from the positioning does not meet the conditions, the positioning will continue before the timeout, and try to obtain the positioning results that meet the requirements | Only supported by Feishu applet |
| isHighAccuracy | Boolean | No | Enable high-precision positioning | App (3.4.0+), H5 (3.4.0+), WeChat applet (basic library 2.9.0+) |
| success | Function | Yes | Callback function for successful interface calling. See the notices on returning parameter description for returning contents. |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**success return parameter description**

| Parameter | Instruction |
| --- | --- |
| latitude | Latitude, floating number, from -90 to 90. Negative number indicates south latitude |
| longitude | Longitude, floating number, from -180 to 180. Negative number indicates west longitude |
| speed | Speed, floating number, in m/s |
| accuracy | Position accuracy |
| altitude | Height, in m |
| verticalAccuracy | Vertical accuracy, in m (If Android can't get it, return 0) |
| horizontalAccuracy | Horizontal accuracy, in m |
| [address](./location.md#address) | Address information (only supported by App side, geocode needs to be configured to true) |

**address information description**

| Attribute | Type | Describe | Instruction |
| --- | --- | --- | --- |
| country | String | Nation | e.g. "China". undefined is returned if no information is obtained. |
| province | String | Province | e.g. "Beijing City". undefined is returned if no information is obtained. |
| city | String | City | e.g. "Beijing City". undefined is returned if no information is obtained. |
| district | String | District (county) name | e.g. "Chaoyang District". undefined is returned if no information is obtained. |
| street | String | Street | e.g. "Jiuxianqiao Road". undefined is returned if no information is obtained. |
| streetNum | String | Get street number information | e.g. "No. 3". undefined is returned if no information is obtained. |
| poiName | String | POI information | Such as "Electronic City. International Electronics Headquarters". undefined is returned if no information is obtained. |
| postalCode | String | Postal code | e.g. "100016". undefined is returned if no information is obtained. |
| cityCode | String | City code | e.g. "010". undefined is returned if no information is obtained. |

**Example**

```
uni.getLocation({
	type: 'wgs84',
	success: function (res) {
	}
});
```

####  Notice

-   `H5 Platform`
    -   On newer browsers, the H5 side obtains location information and requires deployment on the **https** service, and the local preview (localhost) can still use the http protocol.
    -   On a domestic Android phone, if the H5 cannot be positioned, check whether the phone has enabled location services, GPS, whether the ROM has given the browser location permission, and whether the browser has given a positioning query box to the web page pop-up request.
    -   `Android phone` cannot locate when the native app is embedded with H5, and the native app needs to process the Webview.
    -   `Mobile browser` generally only supports GPS positioning, and positioning may fail in places with weak GPS signals.
    -   When `PC device` uses the Chrome browser, the location information is obtained by connecting to the Google server, and domestic users may fail to obtain the location information.

###  uni.chooseLocation(OBJECT)

Open the map to select a location.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| latitude | Number | No | Destination latitude | WeChat applet (2.9.0+), H5-Vue3 (3.2.10+) |
| longitude | Number | No | Destination longitude | WeChat applet (2.9.0+), H5-Vue3 (3.2.10+) |
| keyword | String | No | Search keywords, only supported by App platform |  |
| success | Function | Yes | Callback function for successful interface calling. See the notices on returning parameter description for returning contents. |  |
| fail | Function | No | The callback function for the failure of the interface call (triggered when the positioning fails, the user cancels, etc.) |  |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |

**Notice**

-   `nvue` supports AutoNavi and Google Maps (3.4+)

**success return parameter description**

| Parameter | Instruction |
| --- | --- |
| name | Location name |
| address | Address |
| latitude | Latitude, floating number, from -90 to 90. Negative number indicates south latitude, using gcj02 coordinate of State Bureau of Surveying and Mapping of China. |
| longitude | Longitude, floating number, from -180 to 180. Negative number indicates west longitude, using gcj02 coordinate of State Bureau of Surveying and Mapping of China. |

**Example**

```
uni.chooseLocation({
	success: function (res) {
	}
});
```
