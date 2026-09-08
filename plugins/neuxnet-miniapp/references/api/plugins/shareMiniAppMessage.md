---
title: "uni.shareMiniAppMessage(OBJECT)3.0.0-3090920240624001"
source_url: https://miniapp.neuxnet.com/api/plugins/shareMiniAppMessage.html
---
###  uni.shareMiniAppMessage(OBJECT)3.0.0-3090920240624001

Share Mini App card to IM message.

Others can open the Mini App by tapping the Mini App card in an IM message

**Platform Difference Description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Parameter name | Type | Required | Default value | Description |
| --- | --- | --- | --- | --- |
| title | String | No | The Name of the current Mini App | Shared title. |
| path | String | No | The path of the current Page | Shared page path |
| imageUrl | String | No | Screenshot of the current page | Mini App card picture URL |
| extraData | Object | No | {} | Mini apps launched from a card can get this parameter using the referrerInfo parameter of App.onLaunch |
| success | Function | No |  | Callback function for interface call successful |
| fail | Function | No |  | Callback function for share failure or user cancelling share |
| complete | Function | No |  | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

> Successful and failed callback functions cannot be trusted
> 
> The **Dev** version of the Mini App cannot be shared
