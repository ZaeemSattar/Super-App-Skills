---
title: "Conditional compilation calls HTML5+"
source_url: https://miniapp.neuxnet.com/tutorial/use-html5plus.html
---
The `uni-app` App has a built-in [HTML5+](https://www.html5plus.org/doc/) engine, allowing js to directly call rich native capabilities.

####  Conditional compilation calls HTML5+

Platforms such as Applet and H5 do not have HTML5+ extension specification, so when `uni-app` calls HTML5+ extension specification, you need to pay attention to using conditional compilation. Otherwise, the `plus is not defined` error will appear when running to h5, applet and other platforms.

```
// #ifdef APP-PLUS
var appid = plus.runtime.appid;
console.log('应用的 appid 为：' + appid);
// #endif
```

####  `uni-app` does not need `plus ready`

To use the plus api in html, you need to wait for plus ready. And `uni-app` does not need to wait and can be used directly. And if you call plus ready, it will not trigger.

####  Event listeners in `uni-app`

In ordinary H5+ projects, you need to use `document.addEventListener` to listen to native extension events.

In `uni-app`, there is no document. This can be done using `plus.globalEvent.addEventListener`.

```
// #ifdef APP-PLUS
// Listen for new intent events
plus.globalEvent.addEventListener('newintent', function(){});
// #endif
```

Similarly, when using Native.js in `uni-app`, some native event monitoring in Native.js also needs to be implemented according to the above method.
