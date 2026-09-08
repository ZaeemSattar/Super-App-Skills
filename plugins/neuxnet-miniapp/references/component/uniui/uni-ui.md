---
title: "uni-ui product features"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-ui.html
---
uni-ui is a cross-end UI library provided by DCloud. It is a cross-end UI framework based on vue components, flex layout, and no dom.

uni-ui does not include the base component, it is a complement to the base component.

####  uni-ui product features

1.  High performance

So far, uni-ui is the benchmark for performance in small programs and hybrid apps.

-   Automatic delta update data

Although uni-app supports applet custom components, all applet ui libraries can be used. However, the ui library of the custom component of the applet needs to use setData to manually update the data. When the amount of data is large, or when the data is updated frequently, it is easy to cause performance problems.

And uni-ui belongs to the vue component, and the bottom layer of the uni-app engine automatically diff updates the data. Of course, many vue components in the plugin market have this feature.

-   Optimize the communication loss of logic layer and view layer

Non-H5, whether it is a small program or an app, whether it is an app's webview rendering or native rendering, all are separated from the logic layer and the view layer. There is a loss of communication between the logic layer and the view layer. For example, dragging a followable component in the view layer, due to the loss of communication, it is difficult to follow the follower in real time with js monitoring.

At this time, you need to use css animation and technologies such as wxs and bindingx provided by the bottom layer of the platform. However, these technologies are relatively complex, so they are encapsulated in uni-ui, and these technologies are used at the bottom layer for ui components that need to be operated manually, such as the left sliding menu of swiperaction list items, to achieve a high-performance interactive experience.

-   background stop

Many ui components are always moving, such as carousels and marquees. Even if the window is blocked by the new window, it is still consuming hardware resources on the background layer. When the Android webview version is chrome66 or higher, the background operation of the UI will cause serious performance problems, causing the front-end interface to be obviously stuck.

The uni-ui component will automatically determine its own display state, and will not consume hardware resources when the component is no longer visible.

2、 Full end

The components of uni-ui are multi-terminal adaptive, and the bottom layer will smooth out the differences or bugs of many small program platforms.

For example, the navigation bar navbar component will automatically handle the status bar on different sides; For example, the swiperaction component will use the wxs technology with better interactive experience on the app and WeChat applet, but will use js to simulate similar effects on other applet terminals that do not support wxs.

uni-ui also supports nvue native rendering.

uni-ui also supports widescreen devices such as pc, which can be accessed through a PC browser \[https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge\](https://hellouniapp.dcloud.net.cn/ pages/extUI/badge/badge) experience

3、Style extension

The default style of uni-ui is medium, which is consistent with the style of the uni-app base components. But it supports [uni.scss](https://uniapp.dcloud.io/collocation/uni-scss) , which can easily extend and switch the style of the application.

ui is a product with very divergent demands, and DCloud officials have no intention to use uni-ui to suppress the space for third-party ui plug-ins, but the official is obliged to provide an open source benchmark for everyone in terms of performance and cross-end.

We welcome more excellent ui components to appear, and welcome more people to contribute uni-ui theme styles to meet the needs of more users.

4、Collaborate with uniCloud

Many components in uni-ui are connected with uniCloud, which can greatly improve development efficiency

5、Automatic integration with uni statistics to achieve free management

Uni Statistics is an excellent multi-terminal statistical platform, see [tongji.dcloud.net.cn](https://tongji.dcloud.net.cn) .

In addition to seeing the full end of a report, another important feature of it is that it is free of RBI. For example, using uni-ui's navbar title bar, collection, shopping cart and other components, can realize automatic management, statistical page title and other behavior data. Of course you can also turn off uni statistics, this is not mandatory.

6、uni-ui complies with the full set of DCloud component specifications

Including easycom, uni\_module, datacom, all follow.
