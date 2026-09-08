---
title: "Index"
source_url: https://miniapp.neuxnet.com/plugin/index.html
---
`uni-app` actively embraces the community, creating an open, compatible plugin system.

-   [uni-app plugin market](https://ext.dcloud.net.cn) , there are thousands of plugins, supporting front-end components, js sdk, page templates, project templates, native plugins and other types. It is far ahead of its competitors in ecological construction.
    
-   Compatible with WeChat Mini Program JS SDK
    

The rich ecological content of mini-programs can be directly introduced into `uni-app`, and can be used on the App side. The previous cross-platform development frameworks generally lacked third-party SDKs. Since a large number of SDK manufacturers maintain the original mini-program SDK, \`\`uni-app\`\`\` has become the most ecological platform in the cross-platform development framework \[Reference\](https: //ask.dcloud.net.cn/article/35070)

-   Compatible with WeChat Mini Program custom components

The applet custom component is a ui component. The uni-app can be compatible with the WeChat applet custom component in App, H5, WeChat applet, and QQ applet at the same time. \[Reference\](https://uniapp.dcloud.io /frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)

-   Compatible with NPM package management system
    
-   Compatible with weex plugin ecosystem
    

uni-app has built-in `weex`, and `weex` native plugins or ui libraries can be used. Note that the ecology of `weex` is not as rich as that of `uni-app`. In general, it is recommended to use the plugin market of `uni-app`.

-   Compatible with common web libraries

The H5 side of `uni-app` supports all browser APIs. But as we all know, because the js of the applet does not run in the browser, the HTML and DOM APIs are not supported in the applet.

Although the App side of `uni-app` has the same architecture as the applet, and the logic layer also runs in the independent `jscore` instead of the browser, there are still differences between the App side and the applet: On the one hand, HTML can be loaded through the web-view component, and web-related libraries can be introduced; On the other hand, [renderjs](../tutorial/renderjs.md) can be used to execute js in the rendering layer. At this time, complete web libraries such as `echart` and `threejs` can be used. (But for full-end use, it is still recommended to reduce the dependence on the dom library. In the plugin market of `uni-app`, you can find a full-end compatible library instead)

-   App supports various ways to invoke native capabilities

1.  Support native \[mixed development\] (hybrid)
2.  Support \[plus JSAPI\] (http://www.html5plus.org/doc/h5p.html) more capable than applet
3.  Support [Native.js](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/88) to directly call native api
4.  Support [Native Plugin Extension](https://ask.dcloud.net.cn/article/35428)
5.  Support [Cloud Packaging Native Plugin](https://ask.dcloud.net.cn/article/35412) .

-   App supports dual rendering engines The logic layer of `uni-app` is in independent jscore, and the rendering layer is optional for webview rendering and weex engine rendering.

1.  Using webview rendering, the entire architecture is the same as the applet, and the page suffix is vue file.
2.  Use the weex engine (modified) to render, the entire architecture is the same as the quick application, and the page suffix is nvue file. When using webview rendering, you can specify whether to render by the system webview or by the x5 engine.
