---
title: "The concept of components"
source_url: https://miniapp.neuxnet.com/component/component-selection.html
---
###  The concept of components

Components are an important milestone in modern development. The component reconstructs the division of labor model, allowing a large number of wheels to appear, allowing developers to use the wheels directly, greatly improving the efficiency of the entire industry.

uni-app has [built-in components](https://uniapp.dcloud.io/component/README) . This is not the same as web development. Basically, web development does not require basic components, and is all looking for a third-party ui library, which includes a full set of components. That's because the default style of html's basic components does not adapt to the mobile phone style. But this is not the case with the uni-app system, the built-in components are optimized for mobile phones.

However, the built-in components can only meet the basic needs, and more scenarios require extended components. The extension component is a secondary encapsulation based on the built-in component. In terms of performance, the performance of the extension component is slightly lower than that of the built-in component. Therefore, developers should not abandon the built-in component and directly use the third-party UI component library.

\[Plugin Market\] (https://ext.dcloud.net.cn/) of uni-app, there are many extension components, some are separate, some are complete sets. Some developers like the complete set of components, but note that the complete set of extension components may not cover all needs, and many scenarios still need to download professional components separately.

###  Selection of extension components

How to choose among the many extension components? We must first figure out the classification of components. Components are divided into two categories: 1. Vue components (the file suffix is vue); 2. Mini Program custom components (the file suffix is wxml or other small program platform-specific suffix names)

-   The vue component is divided into 2 sub-items: only for web, full end compatibility
-   The applet components are further divided into: WeChat/QQ applet components, Ali applet components, Baidu applet components, and ByteDance applet components. These components are all supported by uni-app, but due to the technical characteristics of the components themselves, there are different degrees of support at different ends. The following table can clearly express the compatibility of different types of components.

![Selection of extension components](https://img-cdn-tc.dcloud.net.cn/uploads/article/20200422/2b0f69a305534929951ef7b1bea847e6.jpg)

It is obvious from the table that it is more recommended to use fully end compatible uni specification components.

Many people are prone to make two mistakes:

1.  The same is a vue component, what is the difference between only for web and full-end? Traditional vue components, such as elementUI, are only for web, and there are a lot of dom and window object operations in it. However, Mini Programs and Apps do not have APIs such as dom, and naturally cannot be used across terminals. If you want to cross-end, it is actually not difficult, just make a set of DOM-free vue components. This is the case with the official uni-ui. There are many more developers submitting more libraries of this type in the plugin marketplace.
2.  vant is divided into web version and weapp version, don't confuse it The web version of vant operates on the dom, so it can only be used on the web side; while vant weapp is a WeChat applet component specification, which can be used for WeChat, App, and H5; vant itself does not provide a dom-free vue component that is available on all sides.

In addition to compatibility, what are the differences between different types of components in terms of performance and ecological integrity?

1.  Performance:

-   The performance of the vue component is better than that of the applet custom component. This is because uni-app uses an automatic differential update mechanism for vue data updates at the bottom. For small program custom components, the default setData writing method is that there is no differential data update, and you need to write code to manually implement differential update to achieve the same performance.

2.  Ecological perfection

-   First of all, except for WeChat Mini Programs, there are almost no third-party components and template ecosystems for Mini Programs on other platforms. The development of other small programs depends on the ecology of uni-app
-   Speaking of WeChat applet ecology, some well-known libraries (such as wxParse, wx-Echart) on the WeChat applet platform before, in fact, in terms of performance, functions, and technical support, most of them are not as good as the new libraries under the uni-app ecosystem it is good. And the weapp version of vant and iview, its performance is not as good as uni ui.

3.  Other indicators

-   vue doc: HBuilderX supports [vue doc](https://hx.dcloud.net.cn/Tutorial/Language/vuedoc) , component authors write vue doc in the vue component source code, so that component users can get the Good code hints.
-   easycom: uni-app supports [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) , which can greatly simplify the use of components
-   nvue support: If you develop an app, it may involve nvue's native rendering of pages. This rendering method supports limited CSS. At this time, it is necessary to check whether the components are compatible with nvue.

Let’s take a look at the advantages and disadvantages of various complete sets of UI

####  uni ui

DCloud officially released a set of extension components, namely [uni-ui](https://uniapp.dcloud.io/component/uniui/uni-ui) These extension components support downloading a single component from the plugin market, and also support [npm import](https://ext.dcloud.net.cn/plugin?id=55) uni ui, of course, it is more convenient to directly create a new project in HBuilderX Select `uni ui project template` uni ui has the following advantages:

1.  Optimize the communication loss between the logic layer and the view layer: each platform on the non-H5 side, including apps and various small programs, the logic layer and the view layer are separated, and the communication interaction between the two layers will be compromised, resulting in such as The sliding with the hand is not smooth. uni ui will use wxs and other technologies at the bottom layer to run the appropriate js code in the view layer, reduce communication loss, and ensure smooth and smooth follow-up operations such as swiperAction left sliding menu
2.  Automatic differential diff data: Under uni-app, when developing apps and small programs, you do not need to manually setData, and the underlying layer will automatically update the data differentially. However, if the applet component is used, the data needs to be updated according to the setData method of the applet, and it is difficult to automatically diff update the data.
3.  Background stop: Many UI components will keep moving, such as carousel and marquee. Even if the window is blocked by the new window, it is still consuming hardware resources on the background layer. When the Android webview version is chrome66 or higher, the background operation of the UI will cause serious performance problems, causing the front-end interface to be obviously stuck. The uni ui component will automatically determine its own display state, and when the component is no longer visible, it will not consume hardware resources by doing animations.
4.  Pure vue syntax: The reference and development of uni ui are all pure vue methods. The reference registration and development of the applet components are all applet syntax. The two syntaxes are mixed in one project, which is uncomfortable to write and troublesome to maintain.
5.  Automatic integration with \[uni statistics\] (https://tongji.dcloud.net.cn): For example, if you use the navigation bar component of uni ui, you do not need to write custom events for statistics to trigger page title reporting. uni stats automatically recognizes the title of the navbar component. Similarly, the collection component and the shopping cart component can be used directly without management.
6.  uni ui is compatible with low-end webviews such as Android 4.4, and there is no browser compatibility problem.
7.  uni ui supports nvue: On the App side, uni-app supports both webview rendering and native rendering, while uni ui can support both webview rendering and native rendering with a set of code. In order to be compatible with native rendering, uni ui also implements pure flex layout.
8.  uni ui has built-in vue doc, good code hints when using components
9.  Support [easycom](https://uniapp.dcloud.net.cn/collocation/pages?id=easycom) specification, very easy to use
10.  Support [datacom specification](https://uniapp.dcloud.net.cn/component/datacom) , all cloud integration is packaged
11.  Support [uni\_module specification](https://uniapp.dcloud.net.cn/uni_modules) , which is convenient for plug-in update

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20200424/dc948a41cd85a418e84cde325c055a75.jpg) ![](http://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-ui-snippet.jpg)

####  Plugin Market more components

The plugin market, [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn) , has various components and templates. The complete set of full-end compatible ui libraries include:

-   [uViewUI](https://www.uviewui.com) : It integrates a lot of components, with rich functions and clear documentation, but does not support nvue (2.x already supports nvue)
-   [colorUI css library](http://ext.dcloud.net.cn/plugin?id=239) : The appearance is very high, the css library is not a component
-   [unify UI](https://ext.dcloud.net.cn/plugin?id=2251) : A fully supported component library, focusing on nvue (the mall has been removed)
-   [mypUI](https://ext.dcloud.net.cn/plugin?id=2190) : A full-end supported component library, focusing on nvue
-   [ThorUI Component Library](https://ext.dcloud.net.cn/plugin?id=556)
-   [graceUI commercial library](http://grace.hcoder.net/)

###  other

-   If you still insist on using the custom component ui of WeChat applet, there are also many integration examples of vant weapp version in the plugin market \[https://ext.dcloud.net.cn/search?q=vant\](https://ext .dcloud.net.cn/search?q=vant). At the same time, it should be noted that the performance of the applet custom component is not as good as the vue component.
-   If your nvue file uses weex compilation mode, weex ui is also supported. The third-party commercial ui library has the graceUI weex version. However, the weex compilation mode is an outdated technology and no technical support is provided. For nvue development, please use the uni-app compilation mode.

In summary, the official recommendations for the use of components are:

1.  Use built-in components first
2.  Then use the uni ui extension component
3.  Other needs are flexibly supplemented by other components in the plug-in market
