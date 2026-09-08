---
title: "Native component description"
source_url: https://miniapp.neuxnet.com/component/native-component.html
---
####  Native component description

The main body of the Vue page of the applet and the app is rendered by the webview. In order to improve performance, some UI elements in the lower part of the Vue page of the applet and App, such as the navigation bar, tabbar, video, and map, use native controls. This approach is called hybrid rendering.

Although the performance is improved, native components bring in other problems:

1.  Layer problem that the front-end components fail to cover the native controls
2.  Native component fails to be embedded into special front-end components (such as scroll-view).
3.  Native control ui fails to be flexibly customized
4.  On Android, the fonts of native control will be rendered as the theme fonts of rom, while webview will not use the theme fonts of rom without additional modification

There exists no hybrid rendering on nvue pages of H5 and App. They are either all front-end rendering or all native rendering, and no layer problem is involved.

The list of native components in `uni-app` is as follows:

-   [map](./map.md)
-   [video](./video.md)
-   [camera](./camera.md) (only supported by WeChat applet and Baidu applet)
-   [canvas](./canvas.md) (only in WeChat applet and Baidu applet as a native component)
-   [input](./input.md) (Only in WeChat applet, Alipay applet, ByteDance applet, Feishu applet, QQ applet, and the input is in focus, it behaves as a native component, among which the Alipay applet The input is only text and it behaves as a native component when it is focused)
-   [textarea](./textarea.md) (Only in WeChat applet, Baidu applet, ByteDance applet, Feishu applet as a native component)
-   [live-player](./live-player.md) (only supported by WeChat applet and Baidu applet, and the video component can be used directly on the App side to simultaneously pull streams)
-   [cover-view](./cover-view.md)
-   [cover-image](./cover-view.md#cover-image)
-   [ad](./ad.md) (only supported by app, WeChat applet, Baidu applet, ByteDance applet, and QQ applet)

####  Restrictions on the use of native components in hybrid rendering mode

Since native components are detached from the WebView rendering process, there are the following restrictions when using them:

-   The level of native components is **highest**, so other components on the page cannot be overlaid on native components no matter how much z-index is set. The inserted subsequent native components can cover the previous native components.
-   Native components cannot be used in scroll-view, swiper, picker-view, and movable-view.
-   Same-layer rendering support: Wechat base library 2.4.4 supports same-layer rendering of video, and WeChat base library 2.8.3 supports same-layer rendering of map. After supporting the same layer rendering, there is no longer a hierarchy problem when related components are used, no need to use cover-view to cover, and components such as swiper can also be embedded. app-nvue does not involve hierarchical issues, and naturally all components are rendered in the same layer.
-   It should be noted that the "same-layer rendering" capability of WeChat native components may fail under certain circumstances. On the one hand, you need to pay a little attention during development. On the other hand, the failure of the same-layer rendering will trigger the `bindrendererror` event , the UI can be rolled back according to the callback when necessary.

Judgement can be made by listening to the same layer failure callback bindrendererror in the component

-   Some CSS styles cannot be applied to the native components. For example:
    -   Unable to set CSS animation for native components;
    -   Unable to define native assembly as position: fixed;
    -   overflow cannot be used in parent node: hidden for cropping the display area of native components.
-   On the real device of the applet, the native component will block the debug panel popped up by vConsole.

####  Other native interface elements

In addition to native components, uni-app has other native interface elements on the non-H5 side, which are listed as follows:

-   Native navigationBar and tabbar (configured in pages.json).
-   Although the web-view component is not native, this component is equivalent to a native webview overlaid on the page, and the web-view component on the applet is forced to be full-screen and cannot overlay front-end elements on it
-   Pop-up box: Pop-up elements such as picker, showModal, showToast, showLoading, showActionSheet, previewImage, chooseImage, chooseVideo and so on cannot be covered by front-end components.
-   plus.nativeObj.view, plus.video.LivePusher, plus.nativeUI, plus.webview under plus are all higher than front-end elements

Note: Although the components on the nvue page of the app do not involve the layer mask problem of map, video and other native components, the native tabbar and native navigationBar configured in pages.json cannot be covered by the components in nvue either.

####  Solution to vue page layer cover

In order to solve the limitation of the highest level of native components in webview rendering, uni-app provides [cover-view](./cover-view.md) and [cover-image](./cover-view.md#cover-image) components to cover the native components.

In addition to the cross-end cover-view, the App side also provides 3 solutions: plus.nativeObj.view, subNVue, and the newly opened translucent nvue page. Details are as follows

-   [cover-view](https://uniapp.dcloud.io/component/cover-view?id=cover-view)

`cover-view` can only cover native components, not other native interface elements. For example, cover-view can cover video and map, but not native navigation bar, tabbar and web-view.

The WeChat applet has supported the same-layer rendering of the video component since the base library 2.4.0, and the same-layer rendering of the map component since 2.7.0. It can be occluded by front-end elements by adjusting zindex, and it also supports embedding these two native components in components such as scroll-view. But when the video is full screen, the cover-view overlay is still required.

The `cover-view` of app-vue has some limitations compared to the applet, 1) it cannot be nested, 2) it cannot scroll internally, that is, the cover-view cannot have scroll bars inside, 3) it cannot cover the full-screen interface of the video . App-nvue's `cover-view` does not have these restrictions.

In addition, cover-view cannot solve the coverage of native navigation bar, tabbar, and web-view components anyway. To this end, two levels of coverage schemes plus.nativeObj.view and subNVue are added to the App side.

-   [plus.nativeObj.view](https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View)

Referred to as nview, it is a native canvas-like control. In fact, cover-view is also encapsulated with plus.nativeObj.view. See the API documentation for details: \[https://www.html5plus.org/doc/zh\_cn/nativeobj.html#plus.nativeObj.View\](https://www.html5plus.org/doc/zh\_cn/nativeobj.html#plus .nativeObj.View)

The API of plus.nativeObj.view is relatively native and can draw any interface, but plus.nativeObj.view has 3 problems: 1. The API is very low-level and the development is more complicated; 2. It does not support animation; 3. It does not support internal scrolling.

-   [subNVue](https://ask.dcloud.net.cn/article/35948)

subNVue is a natively rendered nvue sub-form, which overlays an nvue page on the vue page in a half-screen manner. It solves the shortcomings of plus.nativeObj.view and provides a powerful solution to the hierarchical problem. For a detailed introduction of subNVue, see: [https://ask.dcloud.net.cn/article/35948](https://ask.dcloud.net.cn/article/35948)

-   [A partially transparent nvue page pops up](https://ext.dcloud.net.cn/plugin?id=953)

uni-app supports the semi-transparent nvue window popped up at the app side. That is to say, it seems that an element pops up on this window, but actually a new window with partial areas being gray and transparent pops up. Such window has an advantage over subnvue in that it can be reused globally. For details, please refer to this [plug-in](https://ext.dcloud.net.cn/plugin?id=953)

subNVue or pop-up nvue pages with transparent parts will take up more memory than plus.nativeObj.view. So if the content you want to cover is very simple, and cover-view or plus.nativeObj.view can be easily implemented, there is no need to use subNVue or nvue.

Therefore, if you have a simple layer cover problem, without requirement for nesting but cross-ending, the cover-view is applicable.

If the cover-view on the App side cannot meet the requirements and the native interface to be covered is relatively simple, you can use plus.nativeObj.view. Otherwise, use subnvue or partially transparent nvue.

**On the level of subNVue and Webview** SubNVue has a higher level than the front-end element, but there is also a level relationship between several subNVue and Webview.

The default rule is that the subNVue or webview created first is at the bottom, and the one created subsequently will cover the previous one.

Both subNVue and webview, of course, support Style parameter configuration, which has a zindex attribute to adjust their layers.

####  The layer problems of nvue page in App

nvue pages are all of native components, and there is no layer problem among them.

However, if the native navigation bar and tabbar are registered in pages.json, the interface elements in nvue cannot cover these by default, and plus.nativeObj.view or subNVue is also required.

If you develop App only without cross-ending or layer problems, you can skip the native navigation bar and tabbar in pages.json. nvue pages do not need these to enhance performance.

####  Influence of Android system theme fonts on native components rendering

On Android phone, if the system theme fonts is adjusted, the fonts of all native rendered controls will change, while those rendered by webview will not necessarily change. The system webview of some roms will change accordingly, while others will not.

For the case that the webview fonts will not change with rom, once the native rendering and the webview rendering appear on the same page, you will find the fonts inconsistent.

Some small programs have modified the built-in webview kernel to realize that the webview can also use rom theme fonts, such as WeChat, QQ, Alipay.

app-nvue has no fonts inconsistency because it is native rendering. While under app-vue, the webview fonts is inconsistent with system fonts under some roms.

There are two solutions for inconsistent font on app side:

1.  Use nvue directly. nvue provides pure native rendering without inconsistency problem between webview rendering and native fonts.
2.  The app side does not use system webview, but the x5 browser engine, which has been optimized and can change along with the font of the system. For details, please see: [https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/36806)
