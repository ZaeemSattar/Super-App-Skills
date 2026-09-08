---
title: "share"
source_url: https://miniapp.neuxnet.com/api/plugins/share.html
---
##  share

###  uni.share(OBJECT)

You can share text, pictures, and links to other Apps.

**Platform Difference Description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Parameter name | Type | Required | Description |
| --- | --- | --- | --- |
| type | Number | No | Share Content Type:  
0 text  
1 link  
2 Picture  
3 text & link |
| summary | String | Required when type is 0,3 | Summary of shared content |
| href | String | Required when type is 1,3 | Jump link |
| imageUrl | String | Required when type is 2 | Image URL. |
| success | Function | No | Callback for successful interface call, Not share successful callbacks |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

> The Mini App did not share a successful callback
