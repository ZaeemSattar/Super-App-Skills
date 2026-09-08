---
title: "uni.getLocale()"
source_url: https://miniapp.neuxnet.com/api/ui/locale.html
---
###  uni.getLocale()

Get the currently set language

If the current application has set the language, it will get the previously set language, and if it is not set, it will return to the language automatically selected according to the system language type.

###  uni.setLocale(locale)

Set current language

**Parameter Description**

| Parameter name | Type | Required |
| --- | --- | --- |
| locale | String | Yes |

###  uni.onLocaleChange(callback)

Used to listen to the application language switching

**Description of callback return parameter**

| Parameter name | Type | Instruction |
| --- | --- | --- |
| locale | String | Current language |
