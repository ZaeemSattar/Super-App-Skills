---
title: "Nvue outline — introduction"
source_url: https://miniapp.neuxnet.com/tutorial/nvue-outline.html
---
##  Introduction

The `mini-app` has a built-in native rendering engine based on weex, which provides native rendering capabilities.

On the Mini App side, if you use vue pages, use webview rendering; if you use nvue pages (abbreviation for native vue), use native rendering. Two kinds of pages can be used at the same time in an App. For example, the first page uses nvue, and the second page uses vue page.

Although nvue can also compile multi-terminally, output H5 and applet, but nvue's css writing is limited, so if you don't develop an app, you don't need to use nvue.

##  Applicable scene

The components and API of nvue are written in the same way as the vue page, and its built-in components are more than the built-in components of the vue page.

If you are familiar with weex or react native development, then nvue is your better choice, which can effectively improve your development efficiency and reduce costs.

If you are a web front-end and are not familiar with native typesetting, it is recommended that you still use vue pages as the mainstay, and use nvue as a supplement in scenarios where some vue pages on the app side perform poorly. These scenarios are as follows:

1.  Area long list or waterfall scrolling that requires high performance. The page-level long list scrolling of webview has no performance problems (that is, the scroll bar covers the overall height of the webview), but to scroll a long list in a certain area of the page, you need to use nvue's `list`, `recycle-list`, `waterfall` and other components. The performance of these components is higher than the area scrolling component `scroll-view` in vue pages.
2.  Complex and high-performance custom pull-down refresh.
3.  Long list by dragging left and right. In webview, the long list of dragging left and right is realized through `swiper`+`scroll-view`, and the front-end simulates pull-down refresh. The performance of this scheme is not good. At this time, it is recommended to use nvue.
4.  Realize the complex typesetting effect of area scrolling long list + left and right dragging list + ceiling suction.
5.  If you want to change the button text in the lower right corner of the soft keyboard to "Send", you need to use nvue. For example, in the chat scene, in addition to the button word processing in the lower right corner of the soft keyboard, it also involves scrolling a long list in the chat record area, which is suitable for nvue.
6.  Solve the level problem that front-end controls cannot cover native controls. When you use native components such as `map`, `video`, etc., you will find that the `view` and other components written in the front end cannot cover the native components, and it is more troublesome to deal with hierarchical problems. In this case, it is better to use nvue.
7.  If you deeply use the `map` component, it is recommended to use nvue. In addition to the level problem, the map function of the nvue file on the app side is more complete, the alignment with the applet is higher.

But note that in some scenarios, nvue is not as good as vue page, as follows:

1.  `canvas`. The canvas performance of nvue is not high, especially the Android App platform, so this component is not built-in at all, but needs to be introduced separately. To manipulate canvas animations, the most performant way is to use the renderjs technology of the vue page.
2.  Dynamic horizontal and vertical screen. The CSS of the nvue page does not support media queries, so it is very difficult to dynamically switch between horizontal and vertical screens and dynamically adapt to the screen.

##  Pure native rendering mode

On the Mini App side, mini app supports the mashup of vue pages and nvue pages, and jumps to each other. Pure nvue native rendering is also supported.

Configure `"renderer":"native"` under `"app-plus"` in the manifest.json source view, which means that the pure native rendering mode is enabled on the App side. At this point, the vue page registered in pages.json will be ignored, and the vue component will also be rendered by the native rendering engine.

If this value is not specified, pure native rendering will not be started by default.

```
	// manifest.json
	{
	   // ...
		// App platform specific configuration
	   "app-plus": {
	      "renderer": "native", 
	   }
	}
```

##  Quick Start

###  1. Create a new nvue page

Whether it is a vue page or an nvue page, it needs to be registered in `pages.json`.

If there is both a vue page and an nvue page under a page route, the vue and nvue files with the same name will appear. Then on the Mini App side, only the nvue page will be used, and the vue file with the same name will not be compiled to the Mini App side. On the non-MiniApp side, the vue page will be used first.

###  2. Develop nvue page

`nvue` page structure is the same as `vue`, which consists of `template`, `style`, `script`.

-   style: Due to the native rendering, **not all browsers' css support, the layout model only supports flex layout**, although it will not cause some interface layouts to be impossible to achieve, but you should pay attention to the writing method. See: [style](./nvue-css.md)

##  render-whole

-   When render-whole="true" is set, the view layer communicates the information structure of components and sub-components with the native layer at one time, and improves the layout rendering performance by redrawing the entire node.
-   When set render-whole="false", the view layer will communicate with the native layer one by one with child nodes and then redraw. The overall render time may be longer.

Enable `render-whole` as a component list of `true` by default

-   `text`
-   `cell`
-   `header`
-   `cell-slot`
-   `recycle-list`

**Usage**

```
<swiper :render-whole="true"></swiper>
```

##  Common differences between nvue development and vue development

Rendering based on native engine is still a front-end technology stack, but it is definitely different from web development.

1.  nvue page control display and hide can only use `v-if` but not `v-show`
2.  The nvue page only supports the `flex` layout and does not support any other layout methods. Before developing the page, you should first figure out what the vertical content of this page is and which contents are to be scrolled, then what is the horizontal axis arrangement of each vertical content, and design the interface according to flex layout.
3.  The default layout direction of the nvue page is vertical (`column`). If you need to change the layout direction, you can modify it under the node `manifest.json` -> `app-plus` -> `nvue` -> `flex-direction`.
4.  When the nvue page is compiled into H5 and applet, it will do a work of aligning the default css values. Because the weex rendering engine only supports flex, and the default flex direction is vertical. The H5 and applet side, using web rendering, is not flex by default, and after setting `display:flex`, its flex direction is horizontal instead of vertical by default. Therefore, when nvue is compiled into H5 and applet, it will automatically set the default layout of the page to flex and the direction to be vertical. Of course, the default settings will be overwritten by the developer after manual settings.
5.  The text content must and can only be under the `<text>` component. You cannot write text directly in the `text` area of `<div>` and `<view>`. Otherwise, even if rendered, the variables in js cannot be bound.
6.  Only the `text` tag can set the font size and font color.
7.  Layout cannot use percentage and there is no media query.
8.  When nvue switches the landscape and portrait screens, it may cause style problems, it is recommended to lock the direction of the mobile phone of the page when there is nvue.
9.  The supported css is limited, but it does not affect the layout of the interface you need. `flex` is still very powerful. [See details](https://miniapp.neuxnet.com/nvue-css#flex)
10.  Background images are not supported. But you can use `image` components and levels to achieve background effects similar to those in the web. Because in native development, there is no such concept of background map like web.
11.  Fewer styles are supported by the css selector, and only the class selector can be used. [See details](https://miniapp.neuxnet.com/nvue-css)
12.  Each component of nvue is transparent by default on the Android side. If `background-color` is not set, ghosting problems may occur.
13.  `class` only supports array syntax when binding.
14.  Using a large number of border-radius in a page of the Android side will cause performance problems, especially if the styles of multiple borders are not the same, which will consume more performance. Such use should be avoided.
15.  The nvue page does not have the `bounce` rebound effect, only a few list components have the `bounce` effect, including `list`, `recycle-list`, and `waterfall`.
16.  There is no concept of page scrolling in native development. The page content will not scroll automatically if it is higher than the screen height. Only some components can be scrolled (`list`, `waterfall`, `scroll-view /scroller`), the content to be scrolled needs to be wrapped under the scrollable component. This is not in line with the habit of front-end development, so when nvue is compiled into mini app mode, a `scroller` is automatically placed on the outer layer of the page, and the page content is too high and it will scroll automatically. (The component will not be nested, and the page will not be nested when there is a `recycle-list`).
17.  The global js variables defined in App.vue will not take effect on the nvue page. `globalData` and `vuex` are effective.
18.  The global css defined in App.vue takes effect on both nvue and vue pages. If some CSS in the global CSS is not supported under nvue, the console will alarm when compiling.
19.  The font file cannot be imported in `style`
20.  `typescript/ts` is currently not supported on the nvue page.
