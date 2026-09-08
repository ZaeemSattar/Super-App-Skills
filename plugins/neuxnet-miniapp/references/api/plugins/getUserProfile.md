---
title: "uni.getUserProfile(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/plugins/getUserProfile.html
---
###  uni.getUserProfile(OBJECT)

Function description

Get user information. An authorization window will pop up for each request, and userInfo will be returned after the user agrees.

**Platform Difference Description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Parameter Name | Type | Required |
| --- | --- | --- |
| desc | String | No | Describe the purpose of obtaining the user's personal information, no more than 30 characters |
| success | Function | No | Callback for successful interface call |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**success return parameter description**

| Parameter Name | Type | Description |
| --- | --- | --- |
| userInfo | Object | user information object |
| errMsg | String | Description Information |

**userInfo parameter description**

| Parameter Name | Type | Description |
| --- | --- | --- |
| nickName | String | The nickname of the user |
| avatarUrl | String | The avatar of the user |
