---
title: "pages.json"
source_url: https://miniapp.neuxnet.com/tutorial/adapt.html
---
####  Guide to widescreen adaptation

uni-app was born with the concept of mobile first. For uni-app 2.9+, the widescreen adaptation scheme for PC and other devices has been provided to achieve all-side unification.

There is slight difference between PC adaptation and screen adaptation. PC adaptation includes two aspects of work: `Widescreen adaptation` and `uni-app build-in component adaptive PC`.

PC adaptation of uni-app built-in components also includes two aspects: `UI adaption to the PC interaction habits` and `Non-webkit browser adaption`. However, this aspect is beyond the scope of this article. Especially, the developers can freely use the ordinary html elements and components at the PC side, not limited to the built-in components of uni-app. Therefore, this article focuses on the screen adaptation.

The screen adaptation scheme provided by uni-app consists of 3 parts:

####  1. Page and window level adaptation scheme: leftwindow, rightwindow and topwindow

With the current mobile phone screen as the main window, the new created leftWindow, rightWindow and topWindow on the left, right and top of the window can be set to appear or disappear automatically within a certain screen width range. These areas are independent. For page shifting, the respective windows, instead of the whole screen, can be refreshed.

Interactive communication among these windows are supported.

Here are two examples:

-   hello uni-app：[https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
-   Column-style news template: \[https://static-1fdf8972-67c0-42b4-8790-2021eb9134d1.bspapp.com/#/\](https://static-1fdf8972-67c0-42b4-8790-2021eb9134d1.bspapp .com/#/), the source code for this example is at: [https://github.com/dcloudio/uni-template-news](https://github.com/dcloudio/uni-template-news)

News sample project, preview address https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com/#/ shows The requested file was not found on this server.

It is suggested to use the latest version of Chrome, Safari, or Firefox to run the above examples. You can experience it in PC mode and mobile phone mode respectively. HBuilderX 2.9+ is required to run the above example source code

These examples have the following characteristics:

-   Hello uni-app provides the topWindow and leftWindow, which are divided into top, left and right columns. The news template provides the rightWindow, which is divided into left and right columns. Under the widescreen, the details are displayed on the right when you click on the item on the left list. While under the narrow screen, the details are displayed by a new page opened after clicking on the item on the left list.
-   Pages in leftWindow or rightWindow are reusable, so that there is no need to rewrite the news details page. It is supported to put the existing details page into the leftWindow or rightWindow pages as a component.

This scheme is known to be the most convenient adaptation scheme for column-based widescreen applications.

**Display and hiding of tabBar under H5 widescreen**

If you don not want to display a tabbar page on a PC, please refer to hello-uniapp, and jump to a non-tabbar page when the homepage of the app is loaded. The hidden tabbar of [hello-uniapp](https://hellouniapp.dcloud.net.cn/) is not realized by media query, and the current page is not tabbar page (it is pages/component/view/view page), so the tabbar is not displayed.

If you want to hide the tabbar on the tabBar page with the leftwindow displayed, the css can be used (the interaction with leftwindow and others is an advantage):

```
  .uni-app--showleftwindow + .uni-tabbar-bottom {
  	display: none;
  }
```

The leftWindow and others are configured in pages.json. See the document on: [https://uniapp.dcloud.net.cn/collocation/pages? id=topwindow](https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow)

Configuration example of pages.json

```
{
  "globalStyle": {
    
  },
  "topWindow": {
    "path": "responsive/top-window.vue", // 指定 topWindow 页面文件
    "style": {
      "height": "44px"
    }
  },
  "leftWindow": {
    "path": "responsive/left-window.vue", // 指定 leftWindow 页面文件
    "style": {
      "width": 300
    }
  },
  "rightWindow": {
    "path": "responsive/right-window.vue", // 指定 rightWindow 页面文件
    "style": {
      "width": "calc(100vw - 400px)" // 页面宽度
    },
    "matchMedia": {
      "minWidth": 768 //生效条件，当窗口宽度大于768px时显示
    }
  }
}
```

-   Tutorials of schemes for leftWindow and others

If there is a uni-app designed for small screen at hand and it is intended to use leftwindow and others to adapt to a large screen, you need to clarify which window the content of the existing small screen should be placed in?

If the parent page of the application is a list and the child page is the details, it is appropriate to use the original small-screen list as the main window and extend the rightWindow to display the details on the right.

Take the news sample project as an example, the preview address \[https://static-1fdf8972-67c0-42b4-8790-2021eb9134d1.bspapp.com/#/\](https://static-1fdf8972-67c0-42b4-8790-2021eb9134d1. bspapp.com/#/). The source code of this project has been built into HBuilderX 2.9, select the news/information template when creating a new uni-app project.

First, configure [`rightWindow`option](https://uniapp.dcloud.net.cn/collocation/pages?id=rightwindow) in the `pages.json` file of this project, and place a new page `right-window.vue`.

```
# pages.json
"rightWindow": {
    "path": "responsive/right-window.vue",
    "style": {
      "width": "calc(100vw - 450px)"
    },
    "matchMedia": {
      "minWidth": 768
    }
  }
```

The page corresponding to `rightWindow` does not need to rewrite the page logic of news details, but only needs to introduce the previous detail page component (details page `/pages/detail/detail` can be automatically converted into `pages-detail-detail` component).

```
<!--responsive/right-window.vue-->
<template>
  <view>
    <!-- Here, the /pages/detail/detail.nvue page is used as a component -->
    <!-- The path "/pages/detail/detail" is transformed to the component "pages-detail-detail" -->
    <pages-detail-detail ref="detailPage"></pages-detail-detail>
  </view>
</template>

<script>
  export default {
    created(e) {
      // listen to the custom event, which is triggered by the click on the list in details page
      uni.$on('updateDetail', (e) => {
        // Execute the detailPage component, i.e., the load method of :/pages/detail/detail.nvue page
        this.$refs.detailPage.load(e.detail);
      })
    },
    onLoad() {},
    methods: {}
  }
</script>
```

Then, on the news list page, deal with the logic of interactive communication with rightWindow after clicking the list.

```
// pages/news/news-page.nvue
goDetail(detail) {
	if (this._isWidescreen) { //若为宽屏，则触发右侧详情页的自定义事件，通知右侧窗体刷新新闻详情
		uni.$emit('updateDetail', {
			detail: encodeURIComponent(JSON.stringify(detail))
		})
	} else { // 若为窄屏，则打开新窗体，在新窗体打开详情页面
		uni.navigateTo({
			url: '/pages/detail/detail?query=' + encodeURIComponent(JSON.stringify(detail))
		});
	}
},

```

It can be seen that an application developed for narrow screen of mobile phone can be quickly adapted to PC widescreen application without too much workload. And the future code maintenance is conducted on the same one to streamline the future business iterates.

RightWindow is suitable for column application. What scene is the leftWindow usually used for?

LeftWindow is more suitable for placing the navigation page. If there are many tabs and grid navigation on the home page of your application, they can be reorganized and put in the leftWindow as navigation. For the scene relying on multi-level tabs and grid navigation on the portrait screen of mobile phone previously, the tree or folding panel in the leftWindow can be used instead.

LeftWindow is not only suitable for mobile phone applications to be adapted to larger screen, but also suitable for redeveloping the PC applications, especially PC Admin management console.

DCloud officially launched unicloud Admin based on the pc version of uni-app: [https://uniapp.dcloud.net.cn/uniCloud/admin](https://uniapp.dcloud.net.cn/uniCloud/admin)

The current leftWindow, rightWindow, and topWindow only support the web side. It is planned to implement this configuration on the Pad App in the future. The applet cannot support this configuration.

####  2. Component-level adaptation scheme: match-media component

For leftwindow and others, the page and window level adaptation scheme are used. Suitable for standalone pages. Whether one page is able to adapt to different screen widths? Yes, of course. Component-level adaptation scheme can be used in such case.

uni-app provides the [match-media component](https://uniapp.dcloud.net.cn/component/match-media) and the supporting method [uni.createMediaQueryObserver](https://uniapp.dcloud.net.cn/api/ui/media-query-observer) .

This is a media query and adaptation component that can be used for dynamic screen adaptation more easily.

Place content in the `match-media` component, and specify a set of media query rules for the component, such as screen width. At runtime, if the screen width meets the query criteria, this component will be displayed, or otherwise it will be hidden.

The `match-media` components has the following advantages:

1.  Developers can use Media Query more conveniently and explicitly, instead of being coupled in CSS files, less reusable.
2.  It can be used dynamically in the template with data binding, be able to be displayed or hidden as appropriate, and show higher plasticity in procedural API. For example, it can dynamically add class names and change styles according to size variation.
3.  The Media Query components can be implemented in a nested way, i.e., the partial layout style of the components can be adjusted.
4.  After componentization, the encapsulation is enhanced, able to isolate the styles, templates and interactive events bound to the templates, and provide higher reusability.

For its detailed documentation, please refer to: [https://uniapp.dcloud.net.cn/component/match-media](https://uniapp.dcloud.net.cn/component/match-media)

Certainly, developers can continue to use css media queries to adapt the screen, or use some css styles such as mobilehide and pcshow instead.

It is recommended to use the dynamic screen adaptation scheme at runtime for uni-app, rather than independent conditional compilation for PC version (although the latter is realizable with customized conditions). The advantage of such design is that you can easily switch between landscape and portrait screens of the browsers on the devices like iPad.

####  3. Processing of content scaling and stretching

In addition to dynamically displaying and hiding content based on the screen width, there is also a major requirement for screen adaptation, i.e.: content scaling and stretching other than dynamically displaying and hiding according to the screen width.

Specifically, there are two strategies for content adaptation:

1.  Partial stretching: the page content can be divided into fixed area and length-width dynamic adaptation area. The fixed area uses the fixed value in px to specify the width and height, while the length-width adaptation area uses flex for automatic adaption. While the screen size changes, the fixed area remains the same, but the length-width adaptation area changes accordingly
2.  Equal scale: scale according to the width of the page screen. rpx actually belongs to this type. On the widescreen, rpx becomes larger; and on the narrow screen, rpx becomes smaller.

Take a practical example: there is a list page with an icon on the left and 2 lines of text on the right.

-   If strategy 1, partial stretching, is applied, fixed width and height are specified to the icon on the left, as well as the size of the 2 lines of text on the right, but the width of the latter will be adaptive, occupying the space on the right side of the screen. It means that, after the screen width changes, only the width of the 2 lines of text will change, but all others remain the same.
-   If strategy 2, equal scaling, is applied, the whole list will use rpx. In that way, on the widescreen, the icon, the 2 lines of text on the right as well as the line height of the list item will become larger. On the narrow screen, all of them become smaller.

Strategy 2 saves trouble because it just requires the designer to produce drawing based on the screen width of 750px and the programmer to write the code directly by rpx. But the actual effect of strategy 2 is not as good as that of strategy 1. Programmers utilizes strategy 1 to analyze the lower interface and set the partial stretching area, which allows for a better user experience.

The use of rpx should be paid particular attention as follows.

There are many screen widths on the mobile devices, and designers usually only produce drawing by the screen width of 750px. The advantage of rpx in such cases is that the screen widths of various mobile devices do not differ greatly. The results after fine-tuning and scaling from 750px could restore the designer's design as much as possible.

However, once turning from the mobile device to the pc screen or pad landscape state, the screen width will be much larger than 750. Owing to that, the results of the rpx changed according to the screen width in such cases will be tremendously out of expectation.

Therefore, from uni-app 2.9+ onwards, the effective range of rpx with the reference screen width as 750px has been added, and the default maximum adaptation width of rpx has been set to 960 px.

That is, as for the design drawing in 750px produced by the designer, its adaptable maximum screen width is 960px within which the rpx can be scaled according to the screen width. Once exceeding 960, it turns meaningless for rpx to scale according to the screen width. In terms of the following configurations, on a screen over 960 wide, 375px will be used as the reference width, which is the strategy to keep the interface undistorted to the greatest extent.

Of course, you can define and adjust these configurations by yourself. The following parameters of rpx can be configured in the globeStyle of pages.json.

```
{
  "globalStyle": {
    "rpxCalcMaxDeviceWidth": 960, // rpx 计算所支持的最大设备宽度，单位 px，默认值为 960
    "rpxCalcBaseDeviceWidth": 375, // rpx 计算使用的基准设备宽度，设备实际宽度超出 rpx 计算所支持的最大设备宽度时将按基准宽度计算，单位 px，默认值为 375
    "rpxCalcIncludeWidth": 750 // rpx 计算特殊处理的值，始终按实际的设备宽度计算，单位 rpx，默认值为 750
  },
}
```

The first 2 of the above configurations, namely rpxCalcMaxDeviceWidth and rpxCalcBaseDeviceWidth, solved the problem that the interface becomes extremely large in widescreen after rpx is used. If you do not need to specifically define the values of these two parameters, do not configure them in `pages.json` and just keep the defaults of 960 and 375.

However, after the maximum adaptation width of rpx is limited, a new problem occurs: if 750rpx is used as 100% in your code (the official strongly deprecate such writing mode. Even if nvue does not support percentage, flex should be used to solve the problem of fullness), regardless of the screen width (even if it exceeds 960px), your expectation is still to occupy the entire screen width. However, the 375px strategy of rpxCalcBaseDeviceWidth can't meet this requirement.

In such case, there are two solutions: one is to modify the code to change the code deeming rpx as percentage; the other is to configure rpxCalcIncludeWidth and set a certain numerical value being not constrained by the rpxCalcMaxDeviceWidth. For example, "rpxCalcIncludeWidth": 750 in the above example means that if 750rpx is written, it will always be calculated as 100% of the full screen width.

-   About rpx to px

Many developers used rpx excessively before, but later, in order to adapt to the widescreen, they wanted to switch to the strategy of "partial stretching: divide the page content into fixed areas and length-width dynamic adaptation areas", back to px.

For example, neither [Example of widescreen adaptation in DCloud community](https://static-1afcc27f-ce2f-4a6d-9416-c65a6f87d24e.bspapp.com/#/) nor [News template](https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com) uses rpx.

If you want to convert rpx to px, you can replace it regularly in the source code, or use the unit conversion library written by the third party. The following describes the usage of the third party library.

Add files to project root directory `postcss.config.js`, with the content as following. During compiling, the compiler will automatically convert rpx to px unit.

\*\* Note: the usage of rpx as percentage needs to be handled manually

```
// postcss.config.js

const path = require('path')
module.exports = {
  parser: 'postcss-comment',
  plugins: {
    'postcss-import': {
      resolve(id, basedir, importOptions) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3))
        } else if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2))
        } else if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1))
        }
        return id
      }
    },
    'autoprefixer': {
      overrideBrowserslist: ["Android >= 4", "ios >= 8"],
      remove: process.env.UNI_PLATFORM !== 'h5'
    },
    // With the help of postcss-px-to-viewport plug-in, the conversion from rpx to px can be realized. Document: https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
    // With the following configuration, rpx can be converted into 1/2 px, such as 20rpx=10px. If you want to adjust the scale, you can adjust the viewportWidth to realize it.
    'postcss-px-to-viewport': {
      unitToConvert: 'rpx',
      viewportWidth: 200,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'px',
      fontViewportUnit: 'px',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false
    },
    '@dcloudio/vue-cli-plugin-uni/packages/postcss': {}
  }
}
```

####  Non-webkit browser adaptation

Theoretically, uni-app does not limit to any browser. Before the release of HBuilderX 2.9, the news example items were tested and passed on the latest editions of Chrome, Safari, Firefox and Edge browsers.

Generally, the browsers used mostly in China, such as 360 browser and Sogou browser, all support the Chrome kernel. As long as proper new versions are used, the pages should be accessible.

If your application appears abnormal in other PC browsers, please check the browser compatibility of your own code.

If you find that there are browser compatibility problems about framework level or built-in components in uni-app, please submit pr to us on github.

Generally speaking, if there is no browser compatibility problem in the basic framework, the problems at the component level can be solved by replacing the components. After compiling the uni-app into the PC browser side, it supports all vue components, including the ui libraries that operate the doms and windows, such as elementUI.

####  A scheme to make the mobile version of web page temporarily available for pc browser

If the development of h5 version has been completed but pc adaptation not, you can do the followings to use it on PC temporarily. Use iframe in the pc webpage, specify the width, and apply the narrow screen version of uni-app in it.

Of course, you can also place the QR code next to iframe to provide the scanning address of the mobile phone version. For example:

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/979f7940-12ba-11eb-b680-7980c8a877b8.png)

####  Package it as windows, mac and linux clients through electron

With widescreen adaptation, the applications of uni-app can be conveniently packaged as a PC client application through electron, which is supported by windows, mac and linux.

Developers can call electron's API at will to call more capabilities of the operating system (for multi-side compatibility, these special APIs can be written in custom conditional compilation).

Plug-ins have been encapsulated in the market. See: [https://ext.dcloud.net.cn/search? q=electron](https://ext.dcloud.net.cn/search?q=electron)

####  Responsive layout component: uni-row

Streaming rid system, divided into 24 parts as per the screen or viewport, able to quickly and easily create the layout.

The plug-in divides the screen into five parts: `<768px`, `>=768px`, `>=992px`, `>=1200px`, `>=1920px`.

Each corresponding part can control its display effect at different resolutions through `xs`, `sm`, `md`, `lg`, and `xl`. Details can be found on the plug-in market.

Plug-in address: https://ext.dcloud.net.cn/plugin?id=3958
