---
title: "addTemplate"
source_url: https://miniapp.neuxnet.com/api/other/template.html
---
###  addTemplate

Combine templates and add to your personal template gallery under your account.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | x | x | x | x |

**Request address**

```
/* 微信小程序 */
POST https://api.weixin.qq.com/cgi-bin/wxopen/template/add?access_token=ACCESS_TOKEN

/* 百度小程序 */
POST https://openapi.baidu.com/rest/2.0/smartapp/template/templateadd?access_token=ACCESS_TOKEN
```

**Request Parameters**

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| access\_token | string | Yes | API call credentials, WeChat applet reference [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html) , Baidu applet reference [verify](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/) |
| id | string | yes | template title id |
| keyword\_id\_list | Array.<number> | Yes | A template keyword list composed by the developer, the keyword order can be freely matched (for example \[3,5,4\] or \[4,5,3\]), up to 10 Keyword Combinations |

**Return value(Object)**

| Properties | Type | Description | Platform |
| --- | --- | --- | --- |
| errcode | number | Error code |  |
| errmsg | string | error message |  |
| template\_id | string | Template id added to the account, required when sending APP template messages | WeChat applet |
| data | Object | {template\_id} | Baidu Mini Program |

**Tips**

-   POST data format: JSON.
-   access\_token should be written on the url.
-   This interface should be called on the backend server.

**Request data example**

```
{
  "id": "xxx",
  "keyword_id_list": [3, 4, 5]
}
```

**Return data example**

```
{
    "errcode": 0,
    "errmsg": "ok",
    /* "template_id": "wDYzYZVxobJivW9oMpSCpuvACOfJXQIoKUm0PY397Tc" //微信小程序 */
    "data": { // 百度小程序
        "template_id": "f34178cd598201d9dc8d5c88cd87b44cf7cd0e62NwmP" 
    }
}
```

###  deleteTemplate

Delete a template under the account.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | x | x | x | x |

**Request address**

```
/* 微信小程序 */
POST https://api.weixin.qq.com/cgi-bin/wxopen/template/del?access_token=ACCESS_TOKEN

/* 百度小程序 */
POST https://openapi.baidu.com/rest/2.0/smartapp/template/templatedel?access_token=ACCESS_TOKEN
```

**Request Parameters**

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| access\_token | string | Yes | API call credentials, WeChat applet reference [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html) , Baidu applet reference [verify](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/) |
| template\_id | string | yes | template id to delete |

**Return value(Object)**

| property | type | description |
| --- | --- | --- |
| errcode | number | error code |
| errmsg | string | error message |

**Tips**

-   POST data format: JSON.
-   access\_token should be written on the url.
-   This interface should be called on the backend server.

**Request data example**

```
{
  "template_id": "wDYzYZVxobJivW9oMpSCpuvACOfJXQIoKUm0PY397Tc"
}
```

**Return data example**

```
{
  "errcode": 0,
  "errmsg": "ok"
}
```

###  getTemplateLibraryById

Get the keyword library under a template title of the template library.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | x | x | x | x |

**Request address**

```
/* 微信小程序 */
POST https://api.weixin.qq.com/cgi-bin/wxopen/template/library/get?access_token=ACCESS_TOKEN

/* 百度小程序 */
POST https://openapi.baidu.com/rest/2.0/smartapp/template/libraryget?access_token=ACCESS_TOKEN
```

**Request Parameters**

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| access\_token | string | Yes | API call credentials, WeChat applet reference [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html) , Baidu applet reference [verify](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/) |
| id | string | yes | template title id |

**Return value(Object)**

| Properties | Type | Description | Platform |
| --- | --- | --- | --- |
| errcode | number | Error code | WeChat applet |
| errmsg | string | Error message | WeChat applet |
| id | string | Template title id | WeChat Mini Program |
| title | string | Template title | WeChat applet |
| keyword\_list | Array.<Object> | keyword list | WeChat applet |
| errno | number | Error code | Baidu Mini Program |
| msg | string | Error message | Baidu Mini Program |
| data | Object | {id,title,keyword\_count,keyword\_list} | Baidu Mini Program |

**The structure of the keyword\_list**

| property | type | description |
| --- | --- | --- |
| keyword\_id | string | keyword id, required when adding templates |
| name | string | Keyword content |
| example | string | The example corresponding to the keyword content |

**Tips**

-   POST data format: JSON.
-   access\_token should be written on the url.
-   This interface should be called on the backend server.

**Request data example**

```
{
  "id": "xxx"
}
```

**WeChat applet return data example**

```
{
    "errcode": 0,
    "errmsg": "ok",
    "id": "AT0002",
    "title": "购买成功通知",
    "keyword_list": [
        {
            "keyword_id": 3,
            "name": "购买地点",
            "example": "TIT造舰厂"
        },
        {
            "keyword_id": 4,
            "name": "购买时间",
            "example": "2016年6月6日"
        }
    ]
}
```

**Baidu applet return data example**

```
{
    "errno": 0,
    "msg": "success",
    "data": {
        "id": "BD0016",
        "title": "取票成功通知",
        "keyword_count": 13,
        "keyword_list": [
            {
                "keyword_id": 1,
                "name": "金额",
                "example": "300元"
            },
            {
                "keyword_id": 2,
                "name": "订单号",
                "example": "321254555"
            }
        ]
    }
}
```

###  getTemplateLibraryList

Get the list of APP template library titles

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | x | x | x | x |

**Request address**

```
/* 微信小程序 */
POST https://api.weixin.qq.com/cgi-bin/wxopen/template/library/list?access_token=ACCESS_TOKEN

/* 百度小程序 */
POST https://openapi.baidu.com/rest/2.0/smartapp/template/librarylist?access_token=ACCESS_TOKEN
```

**Request Parameters**

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| access\_token | string | Yes | API call credentials, WeChat applet reference [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html) , Baidu applet reference [verify](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/) |
| offset | number | Yes | is used for pagination, it means start from offset. Counting from 0. |
| count | number | Yes | is used for pagination, which means to pull count records. The maximum is 20. |

**Return value(Object)**

| Properties | Type | Description | Platform |
| --- | --- | --- | --- |
| errcode | number | Error code | WeChat applet |
| errmsg | string | Error message | WeChat applet |
| list | Array.<Object> | Returns the list of template library titles | WeChat applet |
| total\_count | number | The total number of template library titles | WeChat Mini Program |
| errno | number | Error code | Baidu Mini Program |
| msg | string | Error message | Baidu Mini Program |
| data | Object | {total\_count,list} | Baidu Mini Program |

**list structure description**

| property | type | description |
| --- | --- | --- |
| id | string | Template title id (required to get the keyword library under the template title) |
| title | string | Template title content |

**Tips**

-   POST data format: JSON.
-   access\_token should be written on the url.
-   This interface should be called on the backend server.

**Request data example**

```
{
  "offset": 0,
  "count": 5
}
```

**WeChat applet return data example**

```
{
    "errcode": 0,
    "errmsg": "ok",
    "list": [
        {"id": "AT0002", "title": "购买成功通知"},
        {"id": "AT0003", "title": "交易提醒"}
    ],
    "total_count": 100
}
```

**Baidu applet return data example**

```
{
    "errno": 0,
    "msg": "success",
    "data": {
        "total_count": 100,
        "list": [
            {"id": "AT0002", "title": "购买成功通知"},
            {"id": "AT0003", "title": "交易提醒"}
        ]
    }
}
```

###  getTemplateList

Get a list of templates that already exist under the account.

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | x | x | x | x |

**Request address**

```
/* 微信小程序 */
POST https://api.weixin.qq.com/cgi-bin/wxopen/template/list?access_token=ACCESS_TOKEN

/* 百度小程序 */
POST https://openapi.baidu.com/rest/2.0/smartapp/template/templatelist?access_token=ACCESS_TOKEN
```

**Request Parameters**

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| access\_token | string | Yes | API call credentials, WeChat applet reference [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html) , Baidu applet reference [verify](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/) |
| offset | number | Yes | is used for pagination, it means start from offset. Counting from 0. |
| count | number | Yes | is used for pagination, which means to pull count records. The maximum is 20. |

**Return value(Object)**

| Properties | Type | Description | Platform |
| --- | --- | --- | --- |
| errcode | number | Error code | WeChat applet |
| errmsg | string | Error message | WeChat applet |
| list | Array.<Object> | Return to template list | WeChat applet |
| errno | number | Error code | Baidu Mini Program |
| msg | string | Error message | Baidu Mini Program |
| data | Object | {total\_count, list} | Baidu Mini Program |

**list structure description**

| property | type | description |
| --- | --- | --- |
| template\_id | string | Template id added to the account, required when sending APP template messages |
| title | string | Template title |
| content | string | Template content |
| example | string | Template content example |

**Tips**

-   POST data format: JSON.
-   access\_token should be written on the url.
-   This interface should be called on the backend server.

**Request data example**

```
{
  "offset": 0,
  "count": 1
}
```

**WeChat applet return data example**

```
{
    "errcode": 0,
    "errmsg": "ok",
    "list": [
        {
          "template_id": "wDYzYZVxobJivW9oMpSCpuvACOfJXQIoKUm0PY397Tc",
          "title": "购买成功通知",
          "content": "购买地点{{keyword1.DATA}}\n购买时间{{keyword2.DATA}}\n物品名称{{keyword3.DATA}}\n",
          "example": "购买地点：TIT造舰厂\n购买时间：2016年6月6日\n物品名称：咖啡\n"
        }
    ]
}
```

**Baidu applet return data example**

```
{
    "errno": 0,
    "msg": "success",
    "data": {
        "total_count": 1,
        "list": [
            {
                "template_id": "e4313219538c4b0262e3a14a0507000e8bd79e9PTPAz",
                "title": "续费成功通知",
                "content": "购买时间{{keyword1.DATA}}\n物品名称{{keyword2.DATA}}",
                "example": "购买时间: 2016年6月6日\n物品名称: 奶茶"
            }
        ]
    }
}
```

###  sendTemplateMessage

Send template message

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | √ | x | √ | x | x | x | x |

**Request address**

```
/* 微信小程序 */
POST https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=ACCESS_TOKEN

/* 百度小程序 */
POST https://openapi.baidu.com/rest/2.0/smartapp/template/templatedel?access_token=ACCESS_TOKEN
```

**Request Parameters**

| Properties | Type | Required | Description | Supported Platforms |
| --- | --- | --- | --- | --- |
| access\_token | string | Yes | API call credentials, WeChat applet reference [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html) , Baidu applet reference [verify](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/) |  |
| touser | string | yes | openid/swan\_id of the recipient (user) |  |
| template\_id | string | yes | the id of the template message to be sent |  |
| page | string | No | Click the template card to jump to the page, only pages in this APP. Support with parameters, (example index?foo=bar). If this field is not filled, the template will not jump. |  |
| data | Object | No | Template content, if not filled, an empty template will be sent. Please refer to the example for the specific format. |  |
| form\_id | string | Yes | In the form submission scenario, the [formId](../../component/form.md) on the submit event; in the payment scenario, the \[prepay\_id\](../plugins/payment.md# requestpayment) | WeChat applet |
| emphasis\_keyword | string | No | The keyword that needs to be enlarged in the template, if not filled, the default is not enlarged | WeChat Mini Program |
| touser\_openId | string | Yes | Receiver open\_id | Baidu Mini Program |
| scene\_id | string | Yes | string | Baidu Mini Program |
| scene\_type | number | Yes | scene type, 1: form; 2: Baidu cashier order; 3: direct order. | Baidu Mini Program |
| ext | jsonString | No | '{"xzh\_id":111,"category\_id":15}' | Baidu Mini Program |

**Return value(Object)**

| Properties | Type | Description | Platform |
| --- | --- | --- | --- |
| errcode | number | Error code | WeChat applet |
| errmsg | string | Error message | WeChat applet |
| errno | number | Error code | Baidu Mini Program |
| msg | string | Error message | Baidu Mini Program |
| data | Object | {msg\_key} | Baidu Mini Program |

**legal value of errcode**

| Value | Description |
| --- | --- |
| 40037 | Incorrect template\_id |
| 41028 | The form\_id is incorrect or expired |
| 41029 | form\_id is already used |
| 41030 | The page is incorrect |
| 45009 | The API call exceeds the limit (currently, the default daily call limit for each account is 1 million) |

**legal values for errno**

| value | description |
| --- | --- |
| 2002 | Parameter error |
| 4001 | template\_id is incorrect |
| 4002 | The message push interface call failed |
| 4003 | The form is invalid |
| 4004 | The scene id is invalid |
| 6001 | No push permission |

**Tips**

-   POST data format: JSON.
-   access\_token should be written on the url.
-   This interface should be called on the backend server.

**WeChat applet request data example**

```
{
    "touser": "OPENID",
    "template_id": "TEMPLATE_ID",
    "page": "/pages/index/index",
    "form_id": "FORMID",
    "data": {
        "keyword1": {
            "value": "339208499"
        },
        "keyword2": {
            "value": "2015年01月05日 12:30"
        }
    },
    "scene_type": 1,
    "emphasis_keyword": "keyword1.DATA"
}
```

**WeChat applet return data example**

```
{
    "errcode": 0,
    "errmsg": "ok"
}
```

**Baidu applet request data example**

```
{
    "touser": "SWAN_ID",
    "template_id": "TEMPLATE_ID",
    "page": "/pages/index/index",
    "data": {
        "keyword1": {
            "value": "339208499"
        },
        "keyword2": {
            "value": "2015年01月05日 12:30"
        }
    },
    "scene_id": "123456"
}
```

**Baidu applet return data example**

```
{
    "errno": 0,
    "msg": "success",
    "data": {
        "msg_key": 158
    }
}
```

###  alipay.open.app.mini.templatemessage.send

The applet sends messages to users through openapi, mainly after payment (through consumption id) and after the user submits the form (through formId).

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | x | √ | x | x | x | x | x |

**Request address**

```
https://openapi.alipay.com/gateway.do
```

**Public request parameters**

| Name | Type | Required | Description | Example Value |
| --- | --- | --- | --- | --- |
| app\_id | String | Yes | App ID assigned to the developer by Alipay | 2014072300007148 |
| method | String | Yes | InterfaceName | alipay.open.app.mini.templatemessage.send |
| format | String | Yes | JSON only | JSON |
| charset | String | Yes | The encoding format used by the request, such as utf-8, gbk, gb2312, etc. | utf-8 |
| sign\_type | String | Yes | The type of signature algorithm used by the merchant to generate the signature string, currently supports RSA2 | RSA2 |
| sign | String | Yes | Signature string of merchant request parameters, see signature for details | See example |
| timestamp | String | Yes | The time when the request was sent, in the format `yyyy-MM-dd HH:mm:ss` | `2014-07-24 03:07:50` |
| version | String | yes | The version of the interface called, fixed as: 1.0 | 1.0 |
| app\_auth\_token | String | No | See [App Authorization Overview](https://doc.open.alipay.com/doc2/detail.htm?treeId=216&articleId=105193&docType=1) |  |
| biz\_content | String | Yes | A collection of request parameters, the maximum length is unlimited. All request parameters except public parameters must be passed in this parameter. For details, please refer to the quick access documentation of each product |  |
