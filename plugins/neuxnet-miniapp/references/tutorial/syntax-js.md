---
title: "Difference between standard js and browser js"
source_url: https://miniapp.neuxnet.com/tutorial/syntax-js.html
---
The js API of `Mini App` consists of standard ECMAScript js API and Mini App extension API.

Standard ECMAScript js is only the most basic js. The browser extends window, document, navigator and other objects based on it.

Mini App extends uni objects based on ECMAScript

##  Difference between standard js and browser js

The js code of `Mini App`, the h5 side runs in the browser. For non-h5 terminals (including apps), the Android platform runs in the v8 engine, and the iOS platform runs in the jscore engine that comes with iOS, and neither runs in the browser or webview.

On the non-H5 side, although it does not support the js API of browsers such as window, document, and navigator, it also supports standard ECMAScript.

Be careful not to equate js extension objects in browsers with standard js.

Therefore, the non-H5 side of Mini App also supports standard js, syntax such as if and for, variable types such as strings, numbers, time, Boolean values, arrays, custom objects, and various processing methods. It's just that browser-specific objects such as window, document, and navigator are not supported.

##  Supported on ES6

Mini App supports not only most ES6 API, but also await/async of ES7.

For the support of ES6 API, see the following table for details (`x` means no support, and no special instructions means support):

-   Differences can be seen among Android versions of various sides:
    -   The data on the App side is shown in the table below;
    -   See caniuse for H5 data;

| String | iOS8 | iOS9 | iOS10 | Android |
| --- | --- | --- | --- | --- |
| codePointAt |  |  |  |  |
| includes |  |  |  |  |
| startsWith |  |  |  |  |
| endsWith |  |  |  |  |
| repeat |  |  |  |  |
| String.fromCodePoint |  |  |  |  |

| Array | iOS8 | iOS9 | iOS10 | Android |
| --- | --- | --- | --- | --- |
| copyWithin |  |  |  |  |
| find |  |  |  |  |
| findIndex |  |  |  |  |
| fill |  |  |  |  |
| entries |  |  |  |  |
| keys |  |  |  |  |
| values | x |  |  | x |
| includes | x |  |  |  |
| Array.from |  |  |  |  |
| Array.of |  |  |  |  |

| Number | iOS8 | iOS9 | iOS10 | Android |
| --- | --- | --- | --- | --- |
| isFinite |  |  |  |  |
| isNaN |  |  |  |  |
| parseInt |  |  |  |  |
| parseFloat |  |  |  |  |
| isInteger |  |  |  |  |
| EPSILON |  |  |  |  |
| isSafeInteger |  |  |  |  |

| Math | iOS8 | iOS9 | iOS10 | Android |
| --- | --- | --- | --- | --- |
| trunc |  |  |  |  |
| sign |  |  |  |  |
| cbrt |  |  |  |  |
| clz32 |  |  |  |  |
| imul |  |  |  |  |
| fround |  |  |  |  |
| hypot |  |  |  |  |
| expm1 |  |  |  |  |
| log1p |  |  |  |  |
| log10 |  |  |  |  |
| log2 |  |  |  |  |
| sinh |  |  |  |  |
| cosh |  |  |  |  |
| tanh |  |  |  |  |
| asinh |  |  |  |  |
| acosh |  |  |  |  |
| atanh |  |  |  |  |

| Object | iOS8 | iOS9 | iOS10 | Android |
| --- | --- | --- | --- | --- |
| is |  |  |  |  |
| assign |  |  |  |  |
| getOwnPropertyDescriptor |  |  |  |  |
| keys |  |  |  |  |
| getOwnPropertyNames |  |  |  |  |
| getOwnPropertySymbols |  |  |  |  |

| Other | iOS8 | iOS9 | iOS10 | Android<5 |
| --- | --- | --- | --- | --- |
| Symbol |  |  |  |  |
| Set |  |  |  |  |
| Map |  |  |  |  |
| Proxy | x | x |  | x |
| Reflect |  |  |  |  |
| Promise |  |  |  |  |

**Notice**

-   On the App side, Android supports less dependence on the Android version number. The data in the above table is applicable even on Android 4.4. Because js code of Mini App runs in its own independent jscore, there is no browser compatibility problem of js. The vue page of Mini App only has css browser compatibility problem on Android low-end device, because vue page is still rendered in webview. Affected by the Android version, too new css syntax is not supported in lower versions.
