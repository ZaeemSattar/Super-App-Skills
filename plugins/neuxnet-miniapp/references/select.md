---
title: "uni-app selection evaluation 23 questions"
source_url: https://miniapp.neuxnet.com/select.html
---
####  uni-app selection evaluation 23 questions

If you care about competing products, here are a few detailed comparisons:

1.  Comparison of multi-terminal development frameworks, reference: [https://juejin.im/post/5e8e8d5a6fb9a03c6d3d9f42](https://juejin.im/post/5e8e8d5a6fb9a03c6d3d9f42)
2.  Only do App, cross-platform framework comparison of apps such as flutter and react native, refer to: \[https://ask.dcloud.net.cn/article/36083\](https://ask.dcloud.net.cn/article /36083)
3.  Only do small programs, native wxml development, wepy, mpvue, taro comparison, \[https://ask.dcloud.net.cn/article/35867\](https://ask.dcloud.net.cn/article /35867)
4.  Detailed comparative evaluation of uni-app and WeChat native development, refer to: [https://ask.dcloud.net.cn/article/36484](https://ask.dcloud.net.cn/article/36484)

**What are the success stories of uni-app that have gone live?**

uni-app is the mainstream development framework today. DCloud has 9 million developers, and uni counts 1 billion monthly active users on mobile phones. Huawei, Alibaba, Tencent, ByteDance, Meituan, JD.com, Kuaishou, and vivo are all using them. Case reference [uni-app application case](http://uniapp.dcloud.io/case)

**Does uni-app charge?**

`uni-app` is a free product under the Apache 2.0 open source license. DCloud officially promises that regardless of HBuilderX or uni-app, it will be permanently free for programmers around the world. Everyone can use it with confidence.

DCloud is profitable by helping developers to monetize traffic (uni-AD) and provide valuable cloud services (uniCloud), instead of charging for development tools.

**Will cross-side cause function limitation?**

`uni-app` In the process of cross-platform, it does not sacrifice platform features and does not limit the use of platform capabilities.

In application development, 90% of routine development, such as interface components, networking and other APIs, are encapsulated as APIs that can span multiple terminals.

And the characteristic functions of each end, `uni-app```` introduces [conditional compilation](http://uniapp.dcloud.io/tutorial/platform). It is possible to elegantly invoke the special capabilities of different platforms in one project. For example, push is not supported in the WeChat applet, but it can be used in the app. There are also many native SDKs, which are inevitably involved in the app. These can be used normally under the`uni-app\`\`\` framework.

The following figure is the product function framework diagram of `uni-app`, `uni-app` can also realize the unique platform capabilities of each platform under the premise of maintaining the uni specification and cross-platform (such as WeChat small The program platform can continue to call WeChat-specific business APIs such as WeChat cards).

![](https://miniapp.neuxnet.com//img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-app-frame-0310.png)

When making an applet, all the APIs of the applet can be used; when outputting to the app, the native rendering engine, native sdk integration and mixing are all supported, so that all the native APIs can be used.

Also note that conditional compilation is different from if logic judgment in code. The code or specified file in the conditional compilation block will only be compiled in a specific platform, and the unusable code of other platforms will not be mixed in a package. If if judgment is used extensively, it will increase the volume and affect the performance. In contrast, conditional compilation does not have these problems, which can reduce packet size and reduce mutual interference.

**How is the user experience on the mobile side of uni-app?**

The WeChat applet developed with `uni-app`, because of the intelligently processed data diff, has better performance than the native applet written by most people. Detailed data evaluation reference: [https://juejin.im/post/5ca1736af265da30ae314248](https://juejin.im/post/5ca1736af265da30ae314248)

`uni-app`打包成App后，支持webview渲染和weex原生渲染这2种引擎，可以任由开发者切换使用。 After \`\`uni-app\`\`\` is packaged into an App, it supports two engines: webview rendering and weex native rendering, which can be switched by developers.

-   The rendering method of the webview is the same as the WeChat applet. The Hybrid application framework of WeChat Mini Programs is the benchmark for experience in the industry. Practice has proved that this experience is enough to carry first-line Internet developers to gain hundreds of millions of users. The app-side experience of uni-app is the same as that of WeChat mini-programs, surpassing mini-programs on other platforms and exceeding the general hybrid framework.
-   The native rendering method is that DCloud transforms the weex engine and implements the components and APIs of uni-app on the native rendering engine. achieve a better user experience.

Due to the rich plug-in market and the support for the use of all Mini Program SDKs on the App side, \`\`uni-app\`\`\` has a larger application ecosystem.

\*\*Only develop small programs, do you need uni-app? \*\*

Yes, to develop small programs independently, you should also use uni-app. It has advantages over other applet frameworks or native applet development. The reasons are as follows:

1.  uni-app does not need to follow the WeChat upgrade, and can use all the current or future APIs of wx in conditional compilation without restriction
2.  The performance of uni-app is higher than that of WeChat native code written by ordinary people. Just like the vue operation is more performant than the average person writing js to operate the dom. The underlying automatic diff delta update data, which is more performant than manual setData. Evaluation data see below
3.  uni-app is pure vue syntax, no need to learn another dsl. When developing different projects, there is no need to switch thinking
4.  The components and templates of uni-app are very rich, and there are thousands of plug-ins in the plug-in market. Such as rich text parsing, charts, custom pull-down refresh and other components, the performance of the uni-app version of the plug-in exceeds that of the WeChat applet components such as wxparse and wx-echart
5.  HBuilderX is more powerful than WeChat tools and has higher development efficiency. Even if you use tools such as vscode, since these tools support vue stronger than wxml, the development effect will be higher
6.  Wechat native development does not support many functions such as webpack, precompiled language, and engineering process management. Large companies rarely use Wechat native development, but are using frameworks to improve development efficiency
7.  uni-app supports two-way data binding and vuex state management, which is much more convenient than the native development of small programs
8.  Sooner or later there will be multi-end requirements, and there is no follow-up concern when using `uni-app`
9.  uni-app is not only used for cross-end, but only for small programs, only for web, and only for apps. There are as many cases. For details, see: [https://uniapp.dcloud.io /case](https://uniapp.dcloud.io/case) For a detailed comparative evaluation of uni-app and WeChat development, please refer to: [https://ask.dcloud.net.cn/article/36484](https://ask.dcloud.net.cn/article/36484)

-   Evaluation 1. Comparison of uni-app and native wxml development, wepy, mpvue, and taro, \[https://ask.dcloud.net.cn/article/35867\](https://ask.dcloud.net.cn/ article/35867)
-   Evaluation 2, detailed comparative evaluation of uni-app and WeChat native development, refer to: \[https://ask.dcloud.net.cn/article/36484\](https://ask.dcloud.net.cn/article/ 36484)

**Is uni-app needed for App-only development?**

`uni-app` is a better cross-platform development framework, both iOS and Android can be developed once. Good experience and high development efficiency.

`uni-app` On the App side, based on the architecture design of the capability layer/rendering layer separation (see the figure below), the rendering layer is a choice between webview and weex, and the capability calls are all common plus apis, such as Bluetooth , scan code and other capabilities; that is, weex is built into \`\`uni-app\`\`\` and is enhanced.

![](https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/frame_app.png)

A big problem of weex in the past was that there were too few APIs and the development had to be done collaboratively by 3 teams: iOS, Android native and front-end. In fact, the same is true of react native, because their core is just a high-performance renderer.

uni-app solves this problem by providing a large number of extended APIs, and has developed a mature and diverse plug-in ecology. Most developments of App no longer requires native intervention, thus realizing the core purpose of cross-platform development to save costs.

`uni-app` On the App side, you can use rich applet SDKs, such as NetEase Yunxin, Huanxin, Qiniu and many other SDK manufacturers maintain their original applet SDK versions, and these SDKs can be directly App for uni-app and published as iOS, Android.

`uni-app`的插件市场里有非常多的ui库、组件、模板，可以大幅提升开发效率。 There are many ui libraries, components and templates in the plugin market of `uni-app`, which can greatly improve development efficiency.

Compared with pure native development, the `uni-app` experience can be used for commercial use and will not limit function calls, but the development efficiency and development cost are better than native development.

If you already have a native app, you can use `uni-app` locally, embed the uni applet SDK, make some columns into applet, or directly create your own applet platform.

**Is uni-app written on multiple ends in one project for unified upgrade and maintenance, or is it a different project on each end and only part of the code is reused?**

`uni-app` is multi-terminal written under a base project, and differences are managed using conditional compilation.

It has a huge advantage that a set of engineering codes can be updated at the same time when upgrading.

If the projects on different sides are separated, it is very troublesome for maintenance and upgradation, and it is not easy to upgrade synchronously.

**Is uni-app costly to learn? What technology stack is it based on?**

`uni-app` is simply the syntax of vue + the api of the applet.

It follows the `Vue.js` syntax specification, components and API follow the `WeChat applet naming``, these belong to the general technology stack, learning them is a necessary front-end skills,`uni-app \`\`\`\`There is not much extra learning cost.

Developers with some experience in Vue.js and WeChat applet development can quickly get started with `uni-app`.

Novices who have never learned vue do not need to master all of vue, they only need to learn about are the basic syntax of vue, virtual dom, data binding, components and vuex. Others such as routing, loader, cli, node.js, webpack are not within the scope of learning.

There are official introductory training videos, and there are many training channels to join the \`\`uni-app\`\`\` ecology, you can refer to [Training Tutorial Resource Summary](http://uniapp.dcloud.io/resource) .

**How is the development experience of uni-app? Does it support modern front-end development process?**

`uni-app` actively embraces the community's existing modern development processes, including but not limited to:

-   built-in webpack/vite
-   NPM package management system, see [Reference](http://uniapp.dcloud.io/tutorial/page-script#npm%E6%94%AF%E6%8C%81)
-   es6+ syntax (automatically compiled to es5 when released), see [Reference](http://uniapp.dcloud.io/tutorial/syntax-js#es6-%E6%94%AF%E6%8C%81)
-   Various preprocessors (less, scss, stylus, typescript)
-   Official ide of uni-app: HBuilderX, has obvious advantages in vue, json, markdown, code prompt and operation efficiency, which can greatly improve the productivity of developers
-   uni-app also provides the cli mode, which can be developed by using other development tools such as vscode. Certainly, the development efficiency is not as good as that of HBuilderX. For comparison, see [https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
-   HBuilder also provides cli, [Reference](https://hx.dcloud.net.cn/cli/README)

**How open is the uni-app ecosystem? Can the existing front-end community resources be directly utilized?**

`uni-app` provides an open ecosystem:

-   Rich plug-in market provides developers with thousands of ready-made wheels, [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
-   Compatible with WeChat applet JS SDK, rich applet ecological content can be directly imported into uni-app, and can be used on the App side, [Reference](http://ask.dcloud.net.cn/article/35070)
-   Compatible with WeChat Mini Program custom components, and common to App and web side, \[Reference\](http://uniapp.dcloud.io/tutorial/miniprogram-subject#%E5%B0%8F%E7%A8%8B%E5 %BA%8F%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)
-   App and web provide renderjs, so that browser-specific libraries can also be used in App and web, [Reference](https://uniapp.dcloud.io/tutorial/renderjs)
-   Support NPM package management system, [Reference](http://uniapp.dcloud.io/tutorial/page-script#npm%E6%94%AF%E6%8C%81)
-   Support mpvue projects and components, [Reference](http://ask.dcloud.net.cn/article/34945)
-   Support native plug-ins, see plug-in market: [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
-   Support for embedding uni applet sdk in App native project.

**What is the minimum mobile phone version supported by uni-app?**

1.  Web side: uni-app has no restrictions, the same browser version that vue2 and vue3 can support themselves
2.  Mini program side: uni-app has no restrictions, the same as the minimum platform that the applet itself can support
3.  App side:
    -   Vue2: Android4.4+, iOS9+. Android 4.4 is already a mobile phone released in 2013.
    -   Vue3: The supported range is: Android >=5 (There is a difference between using nvue and vue. Some old domestic Android5 roms cannot dynamically upgrade the Android system webview. If you use the vue page at this time, you need to use the x5 kernel) , iOS >= 10

**Is uni-app mature?**

`uni-app` was launched in the summer of 2018. The current version is mature and the ecological resources are rich. It is the mainstream development framework today. There are many cases, and the monthly activity of the mobile engine has exceeded 1 billion!

**Is the community of uni-app active?**

Join the \`\`uni-app\`\`\`\` group to know that there are dozens of QQ/WeChat groups with tens of thousands of chat records every day, which are very active. Hundreds of posts every day in the forum.

The plug-in market is also very rich in content, and various wheels are easily available. [https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/) , and the uni-app version of many wheels has stronger performance functions than the WeChat applet version.

There are also many tripartite training based on `uni-app`. Tencent Classroom officials have personally produced courses for uni-app, and all major training websites have uni-app training courses.

**What company is DCloud and is it trustworthy**

`DCloud` started HBuilder in 2013. Currently, 9 million front-end developers are using `DCloud` development tools. HBuilder Baidu index exceeds that of sublime, webstorm and other world-renowned tools. It is the only successful development tool manufacturer in China.

\`\`\`\`DCloud\`\`\` is a star startup company, and the financing has passed the C round, and all of them are well-known VC or strategic investors.

\`\`\`\`DCloud\`\`\` is the initiator and secretary of the HTML5 China Industry Alliance. The alliance is affiliated to the Standards Institute of the Ministry of Industry and Information Technology.

`DCloud`产品中使用的HTML5Plus规范，为联盟的标准规范而非私有api。 The HTML5Plus specification used in the \`\`DCloud\`\`\` product is a standard specification of the alliance rather than a private API.

`DCloud`的产品技术一直引领业内，2015年就上线业内第一个"小程序"：DCloud流应用。随后DCloud广泛推动业内各大公司上线"小程序"，普及该技术广泛应用。 The product technology of `DCloud` has always been leading the industry. In 2015, the industry's first "mini program" was launched: DCloud streaming application. Subsequently, DCloud widely promoted major companies in the industry to launch "mini programs" and popularized the widespread application of this technology.

Alibaba Mini Program IDE officially embeds `uni-app`, Tencent Classroom officially recorded `uni-app` training videos, Huawei, Tencent, Alibaba, ByteDance, JD.com and many other first-tier companies use uni-app. uni-app did not disappoint them, and Will not disappoint you.

**Does App packaging have to be uploaded to DCloud Cloud Service? Will the code be leaked out?**

Code can be packaged in the cloud or locally.

There are two modes when using cloud packaging:

1.  Pack with ease Pack with ease does not upload the developer's certificate and code, [See details](https://ask.dcloud.net.cn/article/37979) .
2.  Traditional cloud packaging Traditional cloud packaging is only suitable for developers who don't have mac computers but need iOS packaging. In this case, codes and certificates will be uploaded to the mac packaging server of DCloud, but will be deleted immediately after packaging. DCloud will not persistently save them.

DCloud is a regular company and has passed the third-level certification of the guarantee (certificate number: 11010813802-20001), cherishing its own reputation. The reason why cloud packaging is provided is to facilitate the direct generation of App installation packages by front-end engineers who are not familiar with native. Including allowing engineers without a Mac computer to type iOS packages.

**What technical support does DCloud provide? What if encountering framework bugs that affects the business?**

`uni-app` is a key product that DCloud strives to build, not a KPI project for non-professional companies. The framework will not be unfinished due to the flow of some responsible persons. `uni-app` 的github上的dev分支是频繁更新的，可随时修复bug。并且作为开源产品，开发者也可以修改源码。 The dev branch on github of \`\`uni-app\`\`\`\` is updated frequently and bugs can be fixed at any time. And as an open source product, developers can also modify the source code. `uni-app`'s app engine supports native extensions. As long as you can natively extend, you are not afraid of the limitations of the app engine. It's a big deal to add a native plug-in. `uni-app` Develop small programs without relying on platform upgrades such as WeChat. After they are upgraded, the uni-app can be used directly, and there is no need to wait for the uni-app upgrade to use the new features of WeChat.

If developers encounter problems, they can provide feedback through the following channels:

-   ask community: [https://ask.dcloud.net.cn/explore/category-12](https://ask.dcloud.net.cn/explore/category-12)
-   QQ group: refer to the list of QQ groups displayed in the left navigation of the official website

In addition, if you really need commercial protection for peace of mind, you can also apply for paid technical support. [Reference](https://ask.dcloud.net.cn/article/13015)

**Are the open source frameworks released by large Internet companies more influential?**

When a large Internet company uses a certain project for itself, it solves a certain problem and strips it out to open source. This is the source and original intention of many large companies' open source projects.

The reason why the internal self-use framework is open-sourced is basically to shape the image and prestige in the technical circle. For the team, it is helpful for recruitment; for the person in charge, it is helpful for promotion and promotion.

Such open source projects are dubbed KPI projects, and often cannot escape four curses:

1.  Once many projects are open-sourced, once they have achieved results, the person in charge will be promoted or transferred, or the person in charge of the initial project resignation for other reasons, so the previous open-source projects will gradually cool down.
2.  The original intention of its design is for the company's internal use, not from the perspective of a wide range of developers' needs. Other developers will encounter various problems when using it.
3.  The main business of large Internet companies is toC, not to developers. It is not the company's goal to invest a lot of resources in maintaining these open source projects on an ongoing basis, and it will not pay off.
4.  Excellent programmers and excellent development framework designers are two-level problems. It is not that the front-end technical personnel of some large Internet companies are insufficient, but that they lack experience in designing products for developers. This experience requires Only teams that provide services to developers for a long time can have it. Products designed by inexperienced people will not work well.

And `DCloud` is a company born for developers. Excellent talents and resources are all for developers. At the beginning of the product project, the needs of different developers were extensively investigated. After the product was released, it continued to iterate. Make it easier for developers to use.
