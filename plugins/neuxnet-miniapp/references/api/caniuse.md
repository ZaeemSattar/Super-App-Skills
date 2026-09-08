---
title: "uni.canIUse(String)"
source_url: https://miniapp.neuxnet.com/api/caniuse.html
---
###  uni.canIUse(String)

Determine whether the application's API, callbacks, parameters, components, etc. are available in the current version.

Platform Difference Description

| App | Web |
| --- | --- |
| √ | √ |

**String parameter description**

Use `${API}.${method}.${param}.${options}` or `${component}.${attribute}.${option}` to call, for example:

-   `${API}` represents the API name
-   `${method}` represents the calling method, valid values are return, success, object, callback
-   `${param}` represents a parameter or return value
-   `${options}` represents the optional value of the parameter
-   `${component}` represents the component name
-   `${attribute}` represents component attributes
-   `${option}` represents the optional value of the component property

**Example**

```
uni.canIUse('getSystemInfoSync.return.screenWidth');
uni.canIUse('getSystemInfo.success.screenWidth');
uni.canIUse('showToast.object.image');
uni.canIUse('request.object.method.GET');

uni.canIUse('live-player');
uni.canIUse('text.selectable');
uni.canIUse('button.open-type.contact');
```

**Tips**

-   App and web terminal do not support `${API}.${method}.${param}.${options}` call, only `${API}`
