---
title: "OAuth"
source_url: https://miniapp.neuxnet.com/serverside/index.html
---
#  OAuth

> The login and authorization user info and Phone number process diagram is as follows

![](https://miniapp.neuxnet.com/2024-09-04_10-18-19/assets/img/login.d020884f.png)

Throughout the entire process, the following steps require interaction between the mini app backend and OpenAPI,as well as interaction between the mini app frontend and the client SDK

Step 1: User login, mini app frontend calls the `neu.login()` method; Authorizes user information mini app frontend calls `neu.getAuthCode()` method both methods return code

Step 7 mini app backend use the code request interface `https://{domain}/neuopenapi/oauth/mini/accessToken` to obtain the accessToken

Step 11 mini app backend use the accessToken request interface `https://{domain}/neuopenapi/oauth/mini/user/info` to obtain user information

Note: The method called by the mini app frontend is neu.getAuthCode(), and you will obtain the user info from the return value of the interface `https://{domain}/neuopenapi/oauth/mini/user/info`

INFO

See the [OpenAPI](./index.md#openapi) document for more details

Obtain user information by referring to the [code on the Mini App JAVA Server](https://superapp-qatar-poc.obs.cn-southwest-2.myhuaweicloud.com/doc/miniappserver.zip)

#  Payment

Based on checkout, the payment process diagram is as follows

![](https://miniapp.neuxnet.com/2024-09-04_10-18-19/assets/img/payment.ee9d9feb.png)

Throughout the entire process, the following steps require interaction between the mini app backend and OpenAPI,as well as interaction between the mini app frontend and the client SDK

Step 9, mini app backend request interface `https://{domain}/neuopenapi/pay/transactions/trade` to create an order

Step 13, mini app backend request interface `https://{domain}/neuopenapi/pay/transactions/`tradeclose to close the order

Step 16, mini app backend request interface `https://{domain}/neuopenapi/pay/transactions/trade` to create a new order

Step 22, mini app frontend calls the neu.requestPayment() method to pass tradeNo to the SuperApp client

Step 38, mini app backend request interface `https://{domain}/neuopenapi/pay/transactions/tradedetail` to proactively refresh transaction status

Note: Step 38, if the transactionStatus value is 1 in the returned result, it indicates that the payment is still in progress, you need to loop call the interface `https://{domain}/neuopenapi/pay/transactions/tradedetail` until the transactionStatus value is not 1

#  Push Message

##  Message push, application scenarios

When the payment in the mini app is successful, if you want to notify SuperApp, you can call the interface `https://{domain}/neuopenapi/notify/sendNotify`. The openId in the request parameter comes from the interface `https://{domain}/neuopenapi/oauth/mini/user/info`. Afterwards, you will receive a notification in SuperApp, as shown in the following figure:

![](https://miniapp.neuxnet.com/2024-09-04_10-18-19/assets/img/push_01.ec306ee2.png) ![](https://miniapp.neuxnet.com/2024-09-04_10-18-19/assets/img/push_02.61a66e4e.png)

##  Activity message push, application scenarios

If you have booked a ticket in the airport mini app and want to open the SuperApp to see the ticket information, you can call the interface `https://{domain}/neuopenapi/activity/sendActivity`. The openId in the request parameter comes from the interface `https://{domain}/neuopenapi/oauth/mini/user/info`. Afterwards, you will see relevant information on the SuperApp homepage, as shown in the following figure:

home page:

![](https://miniapp.neuxnet.com/2024-09-04_10-18-19/assets/img/Activity_01.1e179d0d.png)

After calling the interface, the view details are updated:

![](https://miniapp.neuxnet.com/2024-09-04_10-18-19/assets/img/Activity_02.b018e447.png)

#  OpenAPI

##  Security Mechanisms

###  Signature rules

**Users need to follow the following rules to connect with the open interface platform**

**Parameters:**

Parameters that the user needs to send

1.  appid (required)
2.  Timestamp (timestamp, required) --validate the request with a valid period, the default request valid period is 5 minutes
3.  Sign (encrypted data, required) -- SHA256 encryption
4.  fileData (when uploading a file, the parameter name of the file stream, optional)

**Signature rules:**

1.  When signing, all parameters (that is, strings in key = value format, excluding sign) need to be sorted in dictionary order and then directly concatenated. Special attention: no ampersand is added when concatenating
2.  Convert parameter values to strings, arrays and collections are concatenated with English commas, other objects use their toString method, files do not participate in signing, and then SHA256 encryption
3.  Send Post request according to Url and parameters, splicing the Request Sample: , similar to the format of key1 = value1 & key2 = value2 & key3 = value3

WARNING

Note: No need to encrypt files when uploading them

**SupperApp API request example**

**Java language call example:**

```
import okhttp3.*;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.digest.HmacAlgorithms;
import org.apache.commons.codec.digest.HmacUtils;

import javax.crypto.Mac;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

/**
 *  this util use jdk1.8
 *  use okhttp to send Http request  ,version 3.11.0
 * <groupId>com.squareup.okhttp3</groupId>
 * <artifactId>okhttp</artifactId>
 */
public class Client {

    /**
     * appid
     */
    private static final String APPID = "6364a1ec8754dd1a55d6b8f6";
    /**
     * app secret
     */
    private static final String SECRET = "6364a1ec8754dd1a55d6b8f76364a1ec8754dd1a55d6b8f8";
    /**
     * service host
     */
    private static final String HOST = "https://{domain}";

    private static final String FORM = "application/x-www-form-urlencoded";

    /**
     * demo
     */
    public static void main(String[] args) throws IOException {
        // request path
        String uri = "/neuopenapi/**";
        // params
        Map<String, Object> params = new HashMap<>();
        params.put("pageSize", "10");
        params.put("pageNo", "1");
        // send POST request
        String result = Client.post(uri, params);
        // sout result
        System.out.println(result);
        // 
        // {"responseHeader":{"status":200,"msg":"OK"},"response":{"total":1}}
    }

    /**
     * Send Post request based on Url and parameters
     * @param url request relative path
     * @param params params
     * @return result string
     * @throws IOException
     */
    public static String post(String url, Map<String, Object> params) throws IOException {
        return send(url, "POST", params).body().string();
    }

    /**
     * send request
     * @param uri request relative path
     * @param method request method
     * @param params business params
     * @return response
     * @throws IOException
     */
    private static Response send(String uri, String method, Map<String, Object> params) throws IOException {
        if (params == null) {
            params = new HashMap<>();
        }
        // Set the required parameters for the request
        params.put("appid", APPID);
        params.put("timestamp", System.currentTimeMillis());
        params.put("sign", sign(params));

        // Splice the request body in a format similar to key1=value1&key2=value2&key3=value3
        String bodyStr = params.entrySet().stream().map(e -> e.getKey() + "=" + transToStr(e.getValue())).collect(Collectors.joining("&"));

        // send request
        RequestBody body = RequestBody.create(MediaType.parse(FORM), bodyStr);
        Request request = new Request.Builder()
                .url(HOST + uri)
                .method(method, body)
                .addHeader("Content-Type", FORM)
                .build();
        OkHttpClient client = new OkHttpClient().newBuilder().build();
        return client.newCall(request).execute();
    }

    /**
     * Send request with file
     * @param uri request relative path
     * @param method request method
     * @param params 
     * @param file 
     * @return result string
     * @throws IOException
     */
    public static Response sendFile(String uri, String method, Map<String, Object> params, File file) throws IOException {
        if (params == null) {
            params = new HashMap<>();
        }

        // Set required parameters for request
        params.put("appid", APPID);
        params.put("timestamp", System.currentTimeMillis());
        params.put("sign", sign(params));

        MultipartBody.Builder builder = new MultipartBody.Builder()
                .setType(MediaType.parse("multipart/form-data"));
        for (Map.Entry<String, Object> entry: params.entrySet()) {
            builder.addFormDataPart(entry.getKey(), transToStr(entry.getValue()));
        }
        if (file != null)
        builder.addFormDataPart("fileData", file.getName()
                , RequestBody.create(MediaType.parse("application/octet-stream"), file));

        Request request = new Request.Builder()
                .method(method, builder.build())
                .url(HOST + uri)
                .build();

        OkHttpClient client = new OkHttpClient().newBuilder().build();
        return client.newCall(request).execute();
    }

    /**
     * To sign, all parameters (i.e. string in key=value format, excluding sign) need to be sorted in dictionary order before being directly concatenated. 
     * Please note that there is no&symbol added during concatenation
     * @param params Parameters in the request body
     * @return
     */
    private static String sign(Map<String, Object> params) throws UnsupportedEncodingException {
        params.put("secret", SECRET);
        Set<String> keys = new TreeSet<>(params.keySet());
        StringBuilder signStr = new StringBuilder();
        for (String key: keys) {
            if ("sign".equals(key) || "fileData".equals(key)) {
                //If uploading a file, the file does not need to be signed
                continue;
            }
            signStr.append(key).append("=").append(transToStr(params.get(key)));
        }
        return getSha256Str(signStr.toString());
    }

    /**
     * Convert parameter values to strings, connect arrays and collections with English commas, 
     * and use their toString method for other objects
     * @param obj
     * @return
     */
    private static String transToStr(Object obj) {
        if (obj == null) {
            return "";
        }
        if (obj.getClass().isArray()) {
            StringJoiner joiner = new StringJoiner(",");
            for (Object o : (Object[]) obj) {
                joiner.add(o.toString());
            }
            return joiner.toString();
        }
        if (obj instanceof Collection) {
            return ((Collection) obj).stream().collect(Collectors.joining(",")).toString();
        }
        return obj.toString();
    }

    public static String getSha256Str(String str) {
        MessageDigest messageDigest;
        String encodeStr = "";
        try {
            messageDigest = MessageDigest.getInstance("SHA-256");
            messageDigest.update(str.getBytes(StandardCharsets.UTF_8));
            encodeStr = byte2Hex(messageDigest.digest());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return encodeStr;
    }

    /**
     * Sha256 encryption to convert byte to hexadecimal
     *
     * @param bytes 
     * @return Encrypted string
     */
    private static String byte2Hex(byte[] bytes) {
        StringBuilder stringBuilder = new StringBuilder();
        String temp;
        for (byte aByte : bytes) {
            temp = Integer.toHexString(aByte & 0xFF);
            if (temp.length() == 1) {
                //Obtain one digit for zero filling operation
                stringBuilder.append("0");
            }
            stringBuilder.append(temp);
        }
        return stringBuilder.toString();
    }
}
```

##  API

###  OAuth Module

####  Exchange for accessToken (used by Mini App)

URL: `https://{domain}/neuopenapi/oauth/mini/accessToken`

Request method: POST

Request Sample:

```
curl --location --request POST 'https://{domain}/neuopenapi/oauth/mini/accessToken' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'appid=9cbq80y56cle71m' \
--data-urlencode 'code=ce5f098c-8ae8-4fc9-b20c-c022de39e7c9' \
--data-urlencode 'grantType=authorization_code' \
--data-urlencode 'scope=user.phone' \
--data-urlencode 'timestamp=1685613009705' \
--data-urlencode 'sign=4c3e89aac3f28ba9167f789b37acb7f0b284f6afbf9a639b1dd9f8dc215a9194'
```

Request Parameter:

| **parameter** | **Type** | **Required** | **Description** | **Example** |
| --- | --- | --- | --- | --- |
| appid | String | Yes | appid | xzpo3g02unycoyl |
| code | String | Yes | code | 9d77061e-47dc-498d-8c72-ef44a53cc8c9 |
| grantType | String | Yes | Tentative authorization\_code | authorization\_code |
| scope | String | Yes | Default user.info,If authorized user info and phone number: user.info,user.phone | user.info,user.phone |
| timestamp | Long | Yes | A millisecond timestamp, no more than 5 minutes away from the normal time | 1685613009705 |
| sign | String | Yes | Authenticated security key | 00d857bb9ae87de5913cf4d9a3e90108026817b6d524c1a30dc35a42b8718924 |

Response Result:

```
{
    "responseHeader": {
        "status": 200,
        "msg": "OK"
    },
    "response": {
        "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NzEwMDk1NDMsIm5iZiI6MTY3MTAwOTU0MywiZXhwIjoxNjcxNjE0MzQzLCJvcGVuSWQiOiIyMjEyZDRmMmYwYTBmNTUyOWYyYjVlYjgzMjQ2ODc5YyIsImNsaWVudElkIjoidG1meHpwbzNnMDJ1bnljb3lsIn0.pa54O9Da_W8TF4hEF7O3-UFVGWHNfMHyCJYcJKBMdcZoeAuqpktnMLPygnbsWbe_Q5MWQlYgp73i__h6-D3UBA",
        "expire": 604800,
        "tokenType": "bearer"
    }
}
```

Response Parameters

| **parameter** | **Description** | **Type** | **Example** |
| --- | --- | --- | --- |
| responseHeader | response header | Object |  |
| └status | HTTP corresponding status code | int | 200 |
| └msg | error \_ message | String | OK |
| response |  | Object |  |
| └accessToken | OAuth token | String | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MTc1NTc2MjAsIm5iZiI6MTcxNzU1NzYyMCwiZXhwIjoxNzE4MTYyNDIwLCJvcGVuSWQiOiIyYWNlNzU4MTJmNDAwNGE1Mzg1OWYwZmJhYmMxYzdhNSIsImNsaWVudElkIjoiX19VTklfX2psb2Jldnc1cTBucWMiLCJzY29wZSI6InVzZXIucGhvbmUifQ.QN7hLDyEfW3XAHU2KBxweZsFo5mziGiZQe75wSfRKx\_rfvCYOfZQnOT9g1RLqEaGstO9tewvkgOg\_O\_q2VCEeA |
| └expire | Expires in seconds | Long | 604800 |
| └tokenType | Token type | String | bearer |

####  accessToken in exchange for user information (used by Mini App)

URL: `https://{domain}/neuopenapi/oauth/mini/user/info?accessToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NzEwMDk1NDMsIm5iZiI6MTY3MTAwOTU0MywiZXhwIjoxNjcxNjE0MzQzLCJvcGVuSWQiOiIyMjEyZDRmMmYwYTBmNTUyOWYyYjVlYjgzMjQ2ODc5YyIsImNsaWVudElkIjoidG1meHpwbzNnMDJ1bnljb3lsIn0.pa54O9Da_W8TF4hEF7O3-UFVGWHNfMHyCJYcJKBMdcZoeAuqpktnMLPygnbsWbe_Q5MWQlYgp73i__h6-D3UBA`

Request method: GET

Request Sample:

```
curl --location --request GET 'https://{domain}/neuopenapi/oauth/mini/user/info?accessToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NzEwMDk1NDMsIm5iZiI6MTY3MTAwOTU0MywiZXhwIjoxNjcxNjE0MzQzLCJvcGVuSWQiOiIyMjEyZDRmMmYwYTBmNTUyOWYyYjVlYjgzMjQ2ODc5YyIsImNsaWVudElkIjoidG1meHpwbzNnMDJ1bnljb3lsIn0.pa54O9Da_W8TF4hEF7O3-UFVGWHNfMHyCJYcJKBMdcZoeAuqpktnMLPygnbsWbe_Q5MWQlYgp73i__h6-D3UBA'
```

Request Parameter:

| **parameter** | **Type** | **Required** | **Description** | **Example** |
| --- | --- | --- | --- | --- |
| accessToken | String | Yes | The obtained accessToken | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NzEwMDk1NDMsIm5iZiI6MTY3MTAwOTU0MywiZXhwIjoxNjcxNjE0MzQzLCJvcGVuSWQiOiIyMjEyZDRmMmYwYTBmNTUyOWYyYjVlYjgzMjQ2ODc5YyIsImNsaWVudElkIjoidG1meHpwbzNnMDJ1bnljb3lsIn0.pa54O9Da\_W8TF4hEF7O3-UFVGWHNfMHyCJYcJKBMdcZoeAuqpktnMLPygnbsWbe\_Q5MWQlYgp73i\_\_h6-D3UBA |

Response Result:

```
{
    "responseHeader": {
        "status": 200,
        "msg": "OK"
    },
    "response": {
        "openId": "2ace75812f4004a53859f0fbabc1c7a5",
        "nickName": "Zzzwww",
        "avatar": "https://nsuperapp-dev.obs.ap-southeast-3.myhuaweicloud.com/avatar/user/th_008ba4f3b59c5ab0af48efcec13b3957ac0869b17a7e5e5b71e64c8d74cd21d5.jpg",
        "email": null,
        "country": "+86",
        "phone": "18510538893",
        "unionId": "c2b22593ee71d0d39fd3b51d8f34259d"
    }
}
```

Response Parameters

| **parameter** | **Description** | **Type** | **Example** |
| --- | --- | --- | --- |
| responseHeader | response header | Object |  |
| └status | HTTP corresponding status code | int | 200 |
| └msg | error \_ message | String | OK |
| response |  | Object |  |
| └openId | openId | String | 2ace75812f4004a53859f0fbabc1c7a5 |
| └nickName | nickname | String | Zzzwww |
| └avatar | profile photo address | String | [https://nsuperapp-dev.obs.ap-southeast-3.myhuaweicloud.com/avatar/user/th\_008ba4f3b59c5ab0af48efcec13b3957ac0869b17a7e5e5b71e64c8d74cd21d5.jpg](https://nsuperapp-dev.obs.ap-southeast-3.myhuaweicloud.com/avatar/user/th_008ba4f3b59c5ab0af48efcec13b3957ac0869b17a7e5e5b71e64c8d74cd21d5.jpg) |
| └email | email | String |  |
| └country | country code | String | +86 |
| └phone | phone number | String | 18510538893 |
| └unionId | unionId Multiple openIDs for the same user under different Mini Apps are used in association | String | c2b22593ee71d0d39fd3b51d8f34259d |

TIP

Postman Example Export File： [Click to download](https://miniapp.neuxnet.com/static/OpenAPI-OAuth.postman_collection.json)

###  Payment Module

####  Place a transaction order \[Create a prepaid transaction order\]

URI: `https://{domain}/neuopenapi/pay/transactions/trade`

Request method: POST

Content-Type: application/x-www-form-urlencoded

Request Sample:

```
curl --location --request POST 'https://{domain}/neuopenapi/pay/transactions/trade' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'appid=4c91kjcx9d9jb5f' \
--data-urlencode 'timestamp=1671523398805' \
--data-urlencode 'sign=6306a65711351823c885e39af0a89fb033ca62cc95e2d64e742da7bbc9346dce' \
--data-urlencode 'merchantId=' \
--data-urlencode 'description=' \
--data-urlencode 'outTradeNo=test007' \
--data-urlencode 'timeExpire=' \
--data-urlencode 'notifyUrl=https://{domain}/superpay/notify' \
--data-urlencode 'amount=100' \
--data-urlencode 'currency=USD' \
--data-urlencode 'openId=358a2136a94a67b23631c67dfe386230'
```

Request Parameter:

| **Parameter** | **Type** | **Required** | **Description** | **Remark** |
| --- | --- | --- | --- | --- |
| merchantId | String | No | Merchant ID | Merchant ID, if it is empty, it will be searched according to the Mini App ID first, if it is still not, it will be automatically generated according to the Mini App ID |
| description | String | No | description |  |
| outTradeNo | String | Yes | merchant order number | \[Mini App\] The internal order number can only be numbers, uppercase and lowercase letters \_ - \* and unique under the same merchant number |
| timeExpire | Long | No | transaction expire time | Timestamp |
| notifyUrl | String | Yes | Notification address | The callback address to receive payment result notifications asynchronously. The notification url must be an extranet-accessible url without parameters. The public network Domain Name must be https. If you are accessing through a leased line, use a leased line NAT IP or a private callback Domain Name can use http |
| amount | Long | Yes | transaction amount | Amount in cents |
| currency | String | Yes | currency | Currency, CNY: RMB, SAR: Saudi Arabia |
| openId | String | Yes | user openId | Openid is the unique user ID of the superapp user under the appid (if the appid is different, the obtained openid will be different), which can be used to permanently mark a user |
| sign | String | Yes | Authenticated security key | c09636a3a529a386fdaa389228e36fac |
| timestamp | Long | Yes | Unix Epoch timestamp within 5 minutes of the current calling interface, unit: milliseconds | 1600140360000 |
| appid | String | Yes | appid | 6364a1ec8754dd1a55d6b8de |

Response Result:

```
{
    "responseHeader": {
        "status": 200,
        "msg": "OK"
    },
    "response": {
        "outTradeNo": "test003", // merchant order number
        "tradeNo": "cf6c814f886242ffa741a809924a9f41" // transaction number
    }
}
```

Response Parameters

| **parameter** | **Description** | **Type** | **Example** |
| --- | --- | --- | --- |
| responseHeader | response header | Object |  |
| └status | HTTP corresponding status code | int | 200 |
| └msg | error \_ message | String | OK |
| response |  | Object |  |
| └outTradeNo | outTradeNo | String |  |
| └tradeNo | tradeNo | String |  |

####  Get transaction by transaction number \[refresh the transaction status\]

URI: `https://{domain}/neuopenapi/pay/transactions/tradedetail`

Request method: GET

Request Sample:

```
curl --location --request GET 'https://{domain}/neuopenapi/pay/transactions/tradedetail?tradeNo=8bf6dfaad61d4206a1726a2cfec697af&timestamp=1671523502136&sign=ea34627c46e44eeecf99d31e1188fb832d9d6d9ad37ff2fefe90dd0d2ea12bfa&appid=tmf4c91kjcx9d9jb5f'
```

Request Parameter:

| **Parameter** | **Type** | **Required** | **Description** | **Remark** |
| --- | --- | --- | --- | --- |
| tradeNo | String | Yes | transaction number |  |
| sign | String | Yes | Authenticated security key | c09636a3a529a386fdaa389228e36fac |
| timestamp | Long | Yes | Unix Epoch timestamp within 5 minutes of the current calling interface, unit: milliseconds | 1600140360000 |
| appid | String | Yes | appid | 6364a1ec8754dd1a55d6b8de |

Response Result:

```
{
    "responseHeader": {
        "status": 200,
        "msg": "OK"
    },
    "response": {
        "tradeNo": "cf6c814f886242ffa741a809924a9f41", // transaction number
        "appId": "rha41wzp08ms3x9", // mini app id
        "merchantId": "4c39d791b37741108ff2b72684d2840b", // merchant number
        "merchantLogoUrl": "https://{domain}:30010/cdn/menu1669693827182", // merchant logo url
        "merchantName": "Menu", // merchant name
        "description": "", // Description
        "outTradeNo": "test003", // order number of merchant system
        "timeExpire": null, // expire time 
        "amount": 100, // amount  in cents
        "amountStrWithYuan": "1.00", // display amount with 'yuan' unit
        "currency": "USD", // currency (CNY; USD; SGD; SAR)
        "openId": "358a2136a94a67b23631c67dfe386230", // user openid 
        "payer": 8658707941847254, // payer uid
        "notifySuccess": null, // notify success status
        "payType": null, // pay type (1-Checkout; 2-Stripe; 3-PayTabs) 
        "payNo": null, // pay number
        "payMethod": null, // pay method (1-Google Pay; 2-Apple Pay; 3-Card)
        "transactionFlow": 2, // transaction flow (1-Income; 2-Expense)
        "transactionStatus": 1, // transaction status (1-processing; 2-succeeded; 3-failed; 4-expired; 5-canceled; 6-closed)
        "failReasonType": 20, // fail reason type, default value -1 have no meaning ,see FailReasonTypeEnum
        "ctime": 1670937859115, // create time 
        "mtime": 1670938076064 // update time
    }
}
```

####  FailReasonType Enum

| code | descript |
| --- | --- |
| 1 | Google Pay unready |
| 2 | Google Pay error |
| 3 | Google Pay token generate network error |
| 4 | Google Pay token generate error |
| 5 | PayTabs payment error |
| 6 | PayTabs 3D Secure authentication rejected |
| 10 | Apple Pay error |
| 11 | Apple Pay unsupport |
| 20 | out order is succeeded |
| 21 | transaction is expired |
| 22 | transaction is closed |
| 23 | out order is in payment |
| 24 | checkout failed |
| 25 | checkout request payment failed |
| 26 | stripe create payment failed |
| 27 | transaction failed |

####  Close transaction order

URI: `https://{domain}/neuopenapi/pay/transactions/tradeclose`

Request method: POST

Request Parameter:

| **Parameter** | **Type** | **Required** | **Description** | **Remark** |
| --- | --- | --- | --- | --- |
| tradeNo | String | Yes | transaction number |  |
| sign | String | Yes | Authenticated security key | c09636a3a529a386fdaa389228e36fac |
| timestamp | Long | Yes | Unix Epoch timestamp within 5 minutes of the current calling interface, unit: milliseconds | 1600140360000 |
| appid | String | Yes | appid | 6364a1ec8754dd1a55d6b8de |

Request Sample:

```
curl --location --request POST 'https://{domain}/neuopenapi/pay/transactions/tradeclose?tradeNo=8bf6dfaad61d4206a1726a2cfec697af&timestamp=1671523502136&sign=ea34627c46e44eeecf99d31e1188fb832d9d6d9ad37ff2fefe90dd0d2ea12bfa&appid=tmf4c91kjcx9d9jb5f'
```

Response Result:

```
{
    "responseHeader": {
        "status": 200,
        "msg": "OK"
    },
    "response": **true
**}
```

TIP

Postman Example Export File： [Click to download](https://miniapp.neuxnet.com/static/OpenAPI-Payment.postman_collection.json)

###  Push Notification Module

####  Send a message

URL: `https://{domain}/neuopenapi/notify/sendNotify`

Request method: POST

Request Sample:

```
curl --location 'https://{domain}/neuopenapi/notify/sendNotify' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'appid=rha41wzp08ms3x9' \
--data-urlencode 'language=en_US' \
--data-urlencode 'navigateType=2' \
--data-urlencode 'notifyType=1' \
--data-urlencode 'openIds=19d3c6832e63392331ff6dfe7b0d0f7b' \
--data-urlencode 'text=openid' \
--data-urlencode 'timestamp=1685608097842' \
--data-urlencode 'title=openid' \
--data-urlencode 'sign=908f8ca79a9ed8cc7d93b1dbe38936b1ea464baee79cb32935bf4b9783ac2418' \
--data-urlencode 'url=https://www.baidu.com' \
--data-urlencode 'link='
```

Request Parameter:

| **Parameter** | **Type** | **Required** | **Description** | **Example** |
| --- | --- | --- | --- | --- |
| sign | String | Yes | Authenticated security key | 6377f89b03c5714c4cd1a21bba0d3f576db9a37816fcaaa3b4a6bba19c7dff6d |
| timestamp | Long | Yes | Unix Epoch timestamp within 5 minutes of the current calling interface, unit: milliseconds | 1685607467876 |
| appid | String | Yes | appid | rha41wzp08ms3x9 |
| notifyType | int | Yes | message type; 1-plain text type | 1 |
| openIds | List\_<_String_\>\_ | Yes | Mini App user's openidFrom interface https://{domain}/neuopenapi/oauth/mini/user/info | 19d3c6832e63392331ff6dfe7b0d0f7b |
| title | String | Yes | topic | title |
| text | String | Yes | text content | text |
| navigateType | String | Yes | navigation type; 1- Mini App, 2-url | 2 |
| url | String | No | url; **Note**: When navigateType is 2 (that is, the navigation type is url), this value is required | [https://www.baidu.com](https://www.baidu.com) |
| link | String | No | mini program opens the page link |  |
| language | String | Yes | get the applet information in a language\*\* \*\* | zh\_CN；en\_US；ar\_SA； |

Response Result:

```
{
    "responseHeader": {
        "status": 200,
        "msg": "OK"
    },
    "response": true
}
```

Response Parameters

| **parameter** | **Type** | **Description** | **Example** |
| --- | --- | --- | --- |
| responseHeader | response header | Object |  |
| └status | HTTP corresponding status code | int | 200 |
| └msg | error \_ message | String | OK |
| response | Whether the sending of the message was successful; true means that the sending of the notification was successful and failed | Boolean | true |

####  Send an activity msg

URL: `https://{domain}/neuopenapi/activity/sendActivity`

Request method: POST

Request Sample:

```
curl --location 'https://{domain}/neuopenapi/activity/sendActivity' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'appid=rha41wzp08ms3x9' \
--data-urlencode 'language=en_US' \
--data-urlencode 'navigateType=2' \ 
--data-urlencode 'openIds=19d3c6832e63392331ff6dfe7b0d0f7b' \
--data-urlencode 'text=openid' \
--data-urlencode 'timestamp=1685608097842' \
--data-urlencode 'title=openid' \
--data-urlencode 'sign=908f8ca79a9ed8cc7d93b1dbe38936b1ea464baee79cb32935bf4b9783ac2418' \
--data-urlencode 'iconPath=https://www.xxx.com/xxx.png' \
```

Request Parameter:

| **Parameter** | **Type** | **Required** | **Description** | **Example** |
| --- | --- | --- | --- | --- |
| sign | String | Yes | Authenticated security key | 6377f89b03c5714c4cd1a21bba0d3f576db9a37816fcaaa3b4a6bba19c7dff6d |
| timestamp | Long | Yes | Unix Epoch timestamp within 5 minutes of the current calling interface, unit: milliseconds | 1685607467876 |
| appid | String | Yes | appid | tmfrha41wzp08ms3x9 |
| activityId | String | Yes | Generated by the sender itself, the sender must ensure uniqueness | asd3c6832e63392331ff6dfe7b0d0f7b |
| openIds | List\_<_String_\>\_ | Yes | Mini App user's openidFrom interface https://{domain}/neuopenapi/oauth/mini/user/info | 19d3c6832e63392331ff6dfe7b0d0f7b |
| color | String | Yes | Activity message color | FFFFFF |
| templateId | String | Yes | Template id | 1 |
| title | String | Yes | title | title |
| text | String | Yes | Message test | Hello , this is a activity message |
| iconUrl | String | Yes | mini program | http:xx.com/xxx.png |
| path | String | No | Jump when click | 1.pages/webview/webview?src=[www.google.com](http://www.google.com) will open google in Mini App via webview.2.pages/index/index will open page in Mini App |
| status | int | Yes | Status , message will be removed when you send a message with status 0 . | 1 display 0 not display |
| validityTime | long | Yes | The duration of the message, in seconds | 120 |
| language | String | Yes | get the applet information in a language\*\* \*\* | zh\_CN；en\_US；ar\_SA； |

Response Result:

```
{
    "responseHeader": {
        "status": 200,
        "msg": "OK"
    },
    "response": true
}
```

Response Parameters

| **parameter** | **Type** | **Description** | **Example** |
| --- | --- | --- | --- |
| responseHeader | response header | Object |  |
| └status | HTTP corresponding status code | int | 200 |
| └msg | error \_ message | String | OK |
| response | Whether the sending of the message was successful; true means that the sending of the activity message was successful | Boolean | true |

TIP

Postman Example Export File： [Click to download](https://miniapp.neuxnet.com/static/OpenAPI-push.postman_collection.json)
