---
title: "Development specification"
source_url: https://miniapp.neuxnet.com/tutorial/index.html
---
##  Development specification

In order to achieve multi-terminal compatibility, considering factors such as compilation speed and running performance, `Mini App` stipulates the following development specifications:

-   The page file follows the [Vue Single File Component (SFC) specification](https://vue-loader.vuejs.org/spec.html)
-   The component label is close to the applet specification, see [Mini App component specification](../component/index.md)
-   Data binding and event handling are the same as `Vue.js` specification, and supplement the life cycle of App and page
-   To be compatible with multi-side operation, it is recommended to use flex layout for development

##  Separation of logic layer and rendering layer

On the web platform, the logic layer (js) and rendering layer (html, css) all run in a unified webview.

But on the MiniApp side, the logic layer and rendering layer are separated.

The core reason for separation is performance. In the past, many developers complained about the poor performance of webview-based apps. The main reason was the lag caused by js operations and interface rendering.

On the MiniApp side, the logic layer is independent as a separate js engine, and the rendering layer is still webview.

So note that the logic layer of MiniApp does not support browser-specific window, dom and other APIs. The app can only operate window and dom in the rendering layer, namely renderjs.

For the precautions brought by the separation of logic layer and rendering layer, please read in [detail](./renderjs.md)
