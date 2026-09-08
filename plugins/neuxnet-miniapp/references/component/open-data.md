---
title: "open-data"
source_url: https://miniapp.neuxnet.com/component/open-data.html
---
####  open-data

It is used to display the open data of the platform.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Quick app | 360 applet | kuaishou applet | JD applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | x | √ | x | x | x | x |

**Tips**

This function provides open capabilities for each Mini Program platform. The App side and H5 side do not involve this concept.

Alipay and ByteDance do not have open-data components, but provide API methods to obtain relevant information. Alipay [Reference](https://docs.alipay.com/mini/api/ch8chh) , ByteDance \[Reference\](https://developer.toutiao.com/dev/cn/mini-app/develop/open -capacity/user-information/getuserinfo)

**Property description**

| property name | type | default value | description | platform difference description |
| --- | --- | --- | --- | --- |
| type | String |  | Open Data Type |  |
| open-gid | String |  | It takes effect when type="groupName", group id | WeChat applet, QQ applet |
| lang | String | en | It takes effect when type="user\*", in which language to display userInfo, valid values are: en, zh\_CN, zh\_TW | WeChat applet, QQ applet |

**type valid values**

| Value | Description | Platform Difference Description |
| --- | --- | --- |
| userNickName | User Nickname | WeChat Mini Program Basic Library `1.9.90+` Return `"WeChat User"` |
| userAvatarUrl | User Avatar | WeChat Mini Program Basic Library `1.9.90+` No longer returns, showing [Gray Avatar](https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0) |
| userGender | User gender | WeChat applet basic library `1.9.90+` no longer returns |
| groupName | Pull group name | WeChat applet, QQ applet |
| userCity | The city where the user is located | WeChat applet basic library `1.9.90+` no longer returns, QQ applet |
| userProvince | The province where the user is located | WeChat applet basic library `1.9.90+` no longer returns, QQ applet |
| userCountry | The country where the user is located | WeChat applet basic library `1.9.90+` no longer returns, QQ applet |
| userLanguage | User's language | WeChat applet basic library `1.9.90+` no longer returns, QQ applet |

**Notice**

-   The WeChat applet platform will recover the ability to display personal information through `<open-data>` from `24:00 on February 21, 2022`. \[Details\](https://developers.weixin.qq.com/community/ develop/doc/000e881c7046a8fa1f4d464105b001?blockType=1). If the Mini Program needs to collect information such as the user's nickname and avatar, it can be collected through the [Filling Function of Avatar Nickname](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html) . The specific recycling methods are:
    -   Avatar Display [Gray Avatar](https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0)
    -   User nickname display `WeChat user`
    -   User gender, region and language are displayed as empty `""`
-   The Mini Program retains the ability to display the group name through `<open-data>`, and the platform will prompt the user for the first time in the Mini Program's life cycle to call this component to display the group name: "The group name is only visible to you, and the Mini Program cannot obtain it."

**Example**

```
<open-data type="userNickName"></open-data>
<open-data type="userAvatarUrl"></open-data>
<open-data type="userGender"></open-data>
```
