---
title: "uni.addInterceptor(STRING, OBJECT)"
source_url: https://miniapp.neuxnet.com/api/interceptor.html
---
###  uni.addInterceptor(STRING, OBJECT)

Add interceptor

**STRING parameter description**

Name of the `api` that needs to be intercepted, such as `uni.addInterceptor('request', OBJECT)`, which will intercept `uni.request()`

Note: Only asynchronous interfaces are supported, such as: `uni.setStorage(OBJECT)`, synchronous interfaces such as: `uni.setStorageSync(KEY, DATA)` are not currently supported

**OBJECT parameter description**

| Parameter Name | Type | Required | Default Value | Description |
| --- | --- | --- | --- | --- |
| invoke | Function | No |  | Invoke before interception |  |
| success | Function | No |  | Success callback interception |  |
| fail | Function | No |  | Fail callback interception |  |
| complete | Function | No |  | Complete callback interception |  |

**Example**

```
uni.request({
    success: (res) => {
        console.log(res.data);
        //Print: {code:1,...}
    }
});

uni.addInterceptor('request', {
  invoke(args) {
    //Splice url before triggering request 
    args.url = 'https://www.example.com/'+args.url
  },
  success(args) {
    //After a successful request, modify the code value to 1
    args.data.code = 1
  }, 
  fail(err) {
    console.log('interceptor-fail',err)
  }, 
  complete(res) {
    console.log('interceptor-complete',res)
  }
})

```

###  uni.removeInterceptor(STRING)

Remove interceptor

**STRING parameter description**

Name of `api` that needs to delete the interceptor

**Example**

```

uni.removeInterceptor('request')

```

#####  Interceptors can be used in many scenarios including route interception, authority booting and so on.
