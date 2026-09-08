---
title: "uni.onThemeChange(CALLBACK)"
source_url: https://miniapp.neuxnet.com/api/system/theme.html
---
###  uni.onThemeChange(CALLBACK)

listen to system theme state changes.

**CALLBACK return parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| theme | String | Theme name (dark, light) | App2.6.5+ iOS only |

**Example**

```
uni.onThemeChange(function (res) {
	console.log(res.theme);
});
```
