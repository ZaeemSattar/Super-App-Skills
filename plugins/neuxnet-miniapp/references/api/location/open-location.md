---
title: "uni.openLocation(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/location/open-location.html
---
###  uni.openLocation(OBJECT)

Use the built-in map to view locations.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| latitude | Float | Yes | Latitude, from -90 to 90. Negative number indicates south latitude, using gcj02 coordinate of State Bureau of Surveying and Mapping of China |  |
| longitude | Float | Yes | Longitude, from -180 to 180. Negative number indicates west longitude, using gcj02 coordinate of State Bureau of Surveying and Mapping of China. |  |
| scale | Int | No | Scale, the range is 5~18, the default is 18 | WeChat applet |
| name | String | No | Location Name | Alipay Required |
| address | String | No | Detailed description of the address | Alipay required |
| success | Function | No | Callback function for successful interface calling |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**Example**

```
uni.getLocation({
	success: function (res) {
		const latitude = res.latitude;
		const longitude = res.longitude;
		uni.openLocation({
			latitude: latitude,
			longitude: longitude,
			success: function () {
				console.log('success');
			}
		});
	}
});
```
