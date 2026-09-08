---
title: "Operation principle"
source_url: https://miniapp.neuxnet.com/tutorial/performance.html
---
####  Operation principle

#####  The logic layer and the view layer are separated, and there will be communication loss on non-H5 sides

When `uni-app` runs on the non-H5 side, it is divided into two parts: logic layer and view layer. The logic layer executes business logic, i.e., running js code, while the view layer executes page rendering.

Although developers write js and css in a vue page, they actually have been split while being compiled.

######  Logic layer details

The logic layer runs in an independent jscore instead of depending on the webview of the native computer. On the one hand, it does not have the problem of browser compatibility, and can run es6 code on Android4.4; on the other hand, it can't run browser-specific js API in browsers such as window, document, navigator and localstorage.

`jscore` is a standard js engine, standard js can run normally, such as if, for, various strings, date processing, etc. The difference between js and browser should be distinguished.

-   The so-called js engine of browser means to add a number of browser-specific API, such as dom, on the basis of jscore or v8.
-   node.js engine means to supplement some computer-specific API on the basis of v8, such as local io;
-   Then the js engine on the App side and the applet side of uni-app actually supplements jscore with a number of JS APIs commonly used on the mobile phone side, such as scanning code.

![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/jscore.jpg)

######  View layer details

h5 and applet platforms, as well as app-vue, the view layer is webview. The view layer of app-nvue is a native rendering view based on weex transformation.

With regard to webview, you can only use webview provided by iOS on iOS (the default value is WKWebview). It has some browser compatibility problems, and its performance is slightly different (generally negligible) due to different iOS versions.

Most small programs on Android come with a chromium webview of dozens of megabytes, and the App side cannot carry such a large three-party package, so the App side uses the Android system webview by default, and the system webview varies with the mobile phone. Of course, the App side also supports the use of the Tencent X5 engine. At this time, the view layer can be unified on the Android side.

Therefore, js of uni-app basically has no compatibility problem with different mobile phones (because the js engine comes with it), while the css in the view layer will have compatibility problems with the css of mobile browsers when using system webview on app-vue. At this time, either don not use too new css syntax or integrate Tencent x5 engine.

######  Pros and cons of separation of logic layer and view layer

The advantage of separating the logic layer from the view layer is that js operation does not stagnate rendering. The simplest and most direct feeling is that the window animation is stable.

If developers have used App, they should have the idea that if making the entry animation and rendering itself at the same time, the new webview window is very likely to stagnate animation. uni-app, on the other hand, does not need to write preload code, and the new window is rendered quickly and the animation is stable.

However, the separation of the two layers also brings a disadvantage, that is, it will cause loss while the two layers communicate with each other.

It is not so bad for iOS, but for Android low-end phones, every communication takes tens of milliseconds. The effect is usually not visible, but it is very obvious in some scenarios.

1.  If you draw canvas animation at high frame rate continuously, you will find that it is not as smooth as drawing inside webview
2.  The view layer scrolls, operates with hands, and feeds back to the logic layer continuously, then js processes the logic and informs the view layer to make corresponding updates. At this time, you may find that the interaction does not follow the hands or gets stuck

No matter the applet or the app, whether the app-vue or the app-nvue, there is the problem of this two-layer communication loss.

To solve this kind of problem, different methods are referenced in webview rendering and native rendering:

-   View layer of webview rendering

On app-vue and WeChat applet, a dedicated js running on the view layer is provided, and WeChat is called [wxs](https://uniapp.dcloud.io/tutorial/miniprogram-subject.html#wxs) .

Gestures can be monitored in wxs. Take the swiperAction component of uni ui as an example. When you drag your finger, the list menu items on the side must slide out with your hand. At this time, you need to use wxs to achieve a smooth effect. There are also some custom pull-to-refresh plug-ins in the plug-in market, which achieve a higher performance experience through wxs.

uni-app supports compiling wxs into WeChat applet, App and H5.

There are many restrictions on wxs in WeChat, and only limited functions can be realized. The app side provides a more powerful [renderjs](https://uniapp.dcloud.io/tutorial/renderjs.html) , which is compatible with the H5 platform.

For example, canvas animation, WeChat's canvas cannot be operated through wxs, and js keeps drawing canvas animation and cannot be smooth due to communication loss. The canvas object in the app-vue of uni-app is designed in the webview view layer. Through renderjs, you can directly operate the canvas animation in the view layer, there will be no communication loss, and a smoother effect will be achieved. For details, see: [renderjs](https://uniapp.dcloud.io/tutorial/renderjs.html)

-   View layer for native rendering

In app-nvue, loss exists in both logic layer and view layer. react native has this problem too. It can be seen that native rendering is not that advanced.

weex provides a set of [bindingx](https://uniapp.dcloud.io/tutorial/nvue-api?id=nvue-%e9%87%8c%e4%bd%bf%e7%94%a8-bindingx) Mechanism, you can pass an expression in js to the native layer at one time, after parsing by the native layer, operate the native view layer according to the instructions, avoiding repeated cross-layer communication. This technique can also be used in uni-app.

Bindingx, as a kind of expression, is not as powerful as js, but it can still implement gesture listening to and animation. For example, uni ui's swiperAction component will automatically enable bindingx when running under app-nvue to achieve smooth follow-hand experience.

######  App-vue and applet data update, page level and component level

For complex pages, when updating data in a certain area, you need to make this area a component, so that only this component is updated when updating data, otherwise the data of the entire page will be updated, causing click delays to be stuck.

For example, on the Weibo long list page, if you click a like icon, the number of likes should be +1 immediately. At this time, the like button must be made into a component. Otherwise this +1 will cause synchronization of all data at the page level from the js layer to the view layer.

app-nvue and h5 do not have this problem. The reason for the difference is that the applet currently only provides a mechanism for component delta update, and cannot automatically calculate all page deltas.

####  Optimization suggestion

#####  Avoid the use of large images

If a large number of large image resources are used in the page, the switching of pages will be stagnated, and the system memory will increase, even crash with a white screen.

In particular, do not display multiple large images on one screen after being reduced. For example, if you select a few megabytes of photos before uploading the images, and then zoom them out to display on one screen, it is very easy to crash the white screen.

Converting large-volume binary files to base64 is of extremely resource-consuming.

#####  Optimize data updates

In `uni-app`, every time the data defined in data changes, the view layer will be notified to re-render the page. Therefore, if it is not a variable needed by the view, it doesn’t have to be defined in data, it can be defined externally or mounted directly on the vue example to avoid wasting resources.

#####  Long list

-   If there is a like button for each item in the long list, click it and the number of like +1, at this time, the like component must be a single referenced component to update the variance data. Otherwise, it will result in the overload of the whole list data.
-   Each item in the long list does not necessarily need to be made into a component, depending on whether you need to update the data of a row of items by variance in your business. If there is no such requirement, it is not recommended to introduce a large number of components. (After clicking item, the background changes color, which belongs to css adjustment. If data and rendering are not updated, this problem will not exist)
-   When there is a large amount of data in a single component (such as a long list), it will take a lot of time to update the data on the App and applet side. It is recommended to use the component to paginate the data and limit the changes to a smaller scope. You can refer to: [Long List Optimization Example](https://ext.dcloud.net.cn/plugin?id=2863#detail)
-   The long list of nvue on the app side should use the list component, and there is an automatic rendering resource recycling mechanism. For vue pages, page scrolling provides better performance than area scrolling using scroll-view. uni ui encapsulates uList component, uses list component under app-nvue, and uses page scrolling and automatic adaptation in other environments. It is highly recommended for developers to use it to avoid performance problems caused by poor writing.
-   If you need a long list that slides left and right, please create a new uni-app project selecting news template in HBuilderX, which is a benchmark implementation. If it is built with swiper and scroll-view, performance problems are easy to cause.

#####  Reduce the number of nodes for one-time rendering

When the page is initialized, if the logic layer transmits a large amount of data to the view layer at one time, and the view layer renders a large number of nodes at one time, it may cause slow communication and page switching stagnation, so it is recommended to render the page by partially updating the page. For example, if the server returns 100 pieces of data, it can be loaded in batches, loading 50 pieces at a time, and loading the next batch after 500ms.

#####  **Reduce the number of components and the nesting level of nodes**

Deep nested nodes often need to occupy more memory when the page is initialized and built, and they will be slower when traversing nodes, so it is recommended to reduce deep nested nodes.

When some nvue pages are first rendered on Android low-end phones, they will see the rendering process from top to bottom, which is often caused by too many components. Communication will be triggered once when each component is rendered, and too many components will block communication.

#####  Avoid frequent communication between view layer and logic layer

-   Reduce the listening to of the scroll events of the scroll-view component, when listening to the scroll events of the scroll-view, the view layer will frequently send data to the logic layer;
-   Don't change scroll-top/scroll-left attribute in real time when listening to scroll-view component, because when listening to the scroll, the view layer communicates with the logic layer, and when changing scroll-top/scroll-left, the logic layer communicates with the view layer, which may cause communication stagnation.
-   Pay attention to the use of onPageScroll, when onPageScroll is listening to, the view layer will frequently send data to the logic layer;
-   It is recommended to use css animation instead of animation through the js timer interface
-   If you need to do follow-up operations in canvas, it is recommended to use renderjs on the app side, and the web-view component on the applet side. The pages in the web-view do not have the concept of separation of the logical layer and the view layer, and naturally there will be no communication loss.

#####  Optimize page switching animation

-   During the initialization of the page, if there are a lot of images or native component rendering and a lot of data communication, new page rendering and window entry animation will happen to grab resources, resulting in page switching stagnation and frame dropping. It is suggested to delay rendering images or complex native components for 100ms-300ms, and communicate data in batches to reduce the number of nodes rendered at one time.
-   The animation effect on the App side can be customized. Double-window linkage extrusion animation effect of popin/popout consumes more resources. If js is executed in the page during animation, it may cause the animation to drop frames. At this time, you can use animation effects that consume less resources, such as slide-in-right/slide-out-right.
-   App-nvue and H5 also support page preloading, [uni.preloadPage](https://uniapp.dcloud.io/api/preload-page) , which can provide a better user experience

#####  Optimize white flash of background

1.  If the background flashes when a new page enters

-   If the page background is dark in color, the new window might be grayish-white background at the beginning of animation in vue page, and then it becomes dark background at the end of animation, causing flicker. This is because the background of webview takes too long to become valid. At this time, you need to write the style in `App.vue` to speed up the page style rendering speed. `App.vue` The style inside is a global style. Every time a new page is opened, the style in `App.vue` will be loaded first, and then the style of the normal vue page will be loaded.
-   app side can also configure the page native background color separately in the style of pages.json page, for example, configure the global background color under globalStyle->style->app-plus->background

```
"style": {  
    "app-plus": {  
        "background":"#000000"
    }  
}
```

-   In addition, nvue page does not have this problem, and it can also be changed to nvue page.
-   Note: The above optimization scheme runs on HBuilderX 2.7.7 and is not effective on iOS12 or below, please wait for optimization.

2.  If the background flashes during the disappearing of old page when popin animation shows up on Android, the old form will have a translucent disappearing effect. The background color of this translucent effect can be adjusted to dark color as needed. In pages.json, under globalStyle or the specified page, configure the exclusive node of app-plus, and then configure the animationAlphaBGColor attribute.

#####  Use nvue instead of vue

The nvue page of `uni-app` on the App side is a native rendering engine based on weex upgrade and transformation, which realizes the native rendering capability of the page and improves the fluency of the page. If you have high requirements on page performance, you can use this method to develop, see: [nvue](./nvue-outline.md).

#####  Optimize startup speed

-   The more engineering codes, including the larger background images and local font files, will affect the startup speed of the applet, and you should pay attention to controlling the volume. The foreground image referenced by the  component does not affect performance.
-   The splash shutdown on the App side has a white screen detection mechanism. If the homepage is always blank or the homepage itself is an empty transit page, it may cause the splash to be closed for 10 seconds, which can be solved by referring to [https://ask.dcloud.net.cn/article/35565](https://ask.dcloud.net.cn/article/35565)
-   On the App side, when the home page is an nvue page, and set to [fast startup mode](https://ask.dcloud.net.cn/article/36749) , the App startup speed is the fastest at this time.
-   App is set as a pure nvue project (set the renderer:"native" of app-plus in manifest), this kind of project starts faster and startup can be finished in 2 seconds. Because it uses native rendering in the entire application, instead of loading the webview-based framework.

#####  Optimize package size

-   When uni-app is released to the applet, the built-in engine is only a few dozen K, mainly a customized vue.js core library. If you use the functions of es6 to es5 and css alignment, the code size may increase. You can configure whether these compilation functions are enabled.
-   The H5 side of uni-app comes with vue.js, vue-router and some es6 polyfill libraries. The volume of this part is only 92k after gzip, which is basically the same as the use of vue for web development. The built-in component ui library (such as picker, switch, etc.), the alignment js api of the applet, etc., is equivalent to a complete large-scale ui library. But most applications won't use all the built-in components and APIs. As a result, uni-app provides a tree-shaking optimization mechanism. The overall package size of uni-app before tree-shaking optimization is about 500k, and after the server is deployed with gzip, it is 162k. To enable tree shaking optimization, you need to configure it in the manifest, [Details](https://uniapp.dcloud.io/collocation/manifest?id=optimization) .
-   The App side of uni-app, because it comes with an independent v8 engine and applet framework, is larger than ordinary hybrid App engines such as HTML5Plus or mui. Android base engine is about 9M. The App also provides extension modules, such as maps, Bluetooth, etc. If these modules are not needed during packaging, they can be cut out to reduce the size of the distribution package. It is optional in manifest.json-App module permissions.
-   The App side supports that if the pure nvue project is selected (renderer:"native "under setting app-plus in manifest), the package size can be further reduced by about 2M.
-   App-Android side of uni-app has the concept of so library. The more so libraries that support different cpu types, the larger the package. Before HBuilderX 2.7, Android app included so libraries supported by arm32 and x86 cpu by default. The package is relatively large. If you care about size control, you can remove the support of X86 CPU in manifest (select cpu in manifest Visual Interface - Other Settings of App), which can reduce the package size to 9M. From HBuilderX 2.7+, X86 is no longer included by default. Please check it in manifest and then pack it f you need it. Most phones are generally arm-based and there are few x86 CPU scenarios, including the rare Android pad and x86 type in the as emulator.
