---
title: "cover-view"
source_url: https://miniapp.neuxnet.com/component/cover-view.html
---
###  cover-view

Text view covered on native component.

Mini App framework, the rendering engine is webview. However, in order to optimize the experience, some components such as map, video, textarea, and canvas are implemented through native controls, and the native component level is higher than the front-end component (similar to the flash level higher than the div). In order to cover native components normally, cover-view is designed.

Supported events: `click`

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| scroll-top | number/string |  | Set the top scroll offset, which only takes effect when overflow-y: scroll is set to become a scrolling element | WeChat applet 2.1.0, Jingdong applet |
