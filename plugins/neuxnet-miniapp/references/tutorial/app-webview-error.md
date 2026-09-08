---
title: "Set custom error page"
source_url: https://miniapp.neuxnet.com/tutorial/app-webview-error.html
---
![](https://native-res.dcloud.net.cn/images/uniapp/others/error-default.jpg)

If you need to modify the default error page style, you can customize the 404 and other error pages of Webview through the following methods.

###  Set custom error page

**Visual interface configuration**

![](https://native-res.dcloud.net.cn/images/uniapp/others/error-manifest.png)

> Note: It is recommended to use html files and put them in the hybrid/html folder in the project root directory

**Source view configuration** Open the manifest.json file of the project, switch to the "source view", and configure the error page path according to the project type. It is recommended to use the local address, which is relative to the application root directory; setting the url attribute value to "none" means to disable the custom error page function , the system default error page content is displayed when the page is loaded with errors.

-   uni-app project Configure the custom error page path in the url attribute of the "app-plus" -> "error" node, for example:

```
  "app-plus": {
    "error": {
      "url": "hybrid/html/error.html"
    },
    //...
  },
  //...
```

-   5+App/Wap2App项目
-   5+App/Wap2App projects 在 "plus" -> "error" 节点的 url 属性配置自定义错误页面路径，示例如下： Configure the custom error page path in the url attribute of the "plus" -> "error" node, for example:

```
  "plus": {
    "error": {
      "url": "error.html"
    },
    //...
  },
  //...
```

其中url地址推荐使用本地地址，相对于应用根目录。 The url address is recommended to use a local address, relative to the application root directory. 设置为“none”则关闭跳转到错误页面功能，此时页面显示Webview默认的错误页面内容。 Set to "none" to turn off the function of jumping to the error page. At this time, the page displays the default error page content of Webview.

###  错误页面中监听事件

###  Listen for events in the error page

自定义404错误页面时，可能需要在 error.html 页面中获取错误原因，可以通过以下方法监听 "error" 事件获取完整错误信息，示例如下：  
When customizing the 404 error page, you may need to get the error cause in the error.html page. You can listen to the "error" event to get the complete error information through the following methods. The example is as follows:

```
// get error message
document.addEventListener("error", function(e){
	var url = e.url;  // 错误页面的url地址
 	var href = e.href; // 错误页面的完整路径（包括完整的协议头）
},false);
```

###  运行时动态设置自定义错误页面

###  Dynamically set custom error pages at runtime

If you need to customize the error page of a Webview window separately, you need to pass the [WebviewStyle](http://www.dcloud.io/docs/api/zh_cn/webview.html#plus.webview.WebviewStyle) object when creating The errorPage property controls:

```
var webview = plus.webview.create("url", "id", styles);   
webview.show();
```

> 注：仅5+App/Wap2App项目支持  
> Note: Only 5+App/Wap2App project support

###  常见问题

###  common problem

-   Android平台使用iframe时如果无法加载页面在不同版本系统上存在差异：
-   When the Android platform uses iframe, if the page cannot be loaded, there are differences on different versions of the system:
    -   Android5.0及以上版本：Webview窗口对象不会加载错误页面，仅iframe节点显示无法加载页面；
    -   Android5.0 and above: The Webview window object will not load the error page, only the iframe node shows that the page cannot be loaded;
    -   5.0以下版本：Webview窗口对象会加载错误页面。
    -   Below 5.0: The Webview window object loads the error page.
