---
title: "uni.makePhoneCall(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/system/phone.html
---
###  uni.makePhoneCall(OBJECT)

Dial number.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| phoneNumber | String | Yes | Phone number to call |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Example**

```
uni.makePhoneCall({
	phoneNumber: '114' 
});
```

Note: App-side extended documentation on phone text messages

-   Android needs to add permission in manifest.json `<uses-permission android:name="android.permission.CALL_PHONE"/>`
-   Android does not pop up a question box to make a call directly
-   Send SMS: [http://www.html5plus.org/doc/zh\_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html) Note that you need to grant relevant permissions.
