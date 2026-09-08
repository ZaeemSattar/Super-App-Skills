---
title: "What is cross domain"
source_url: https://miniapp.neuxnet.com/tutorial/CORS.html
---
#  What is cross domain

Cross-domain is a browser-specific concept, which means that js code accesses sites other than its own origin site. For example, the js code in the webpage of site A requests the data of site B, which is cross-domain. For A and B to be considered the same domain, they must have the same protocol (such as http and https not), the same domain name, and the same port number (port).

If you are working on non-H5 platforms such as apps and small programs, cross-domain issues are not involved. A slight exception is wkWebview of iOS. In 5+App, or the web-view component of uni-app and renderjs, cross-domain will also occur due to the limitation of WKWebview. See also the special article in this regard: [https://ask.dcloud .net.cn/article/36348](https://ask.dcloud.net.cn/article/36348) . The ordinary js code of uni-app in the App does not run under the Webview, and there is no cross-domain problem.

Since uni-app is a standard front-end and back-end separation mode, if the front-end code and back-end interface are not deployed on the same domain server when developing h5 applications, they will be reported by the browser to cross domains.

#  If the front end wants to call function to connect to unicloud cloud function

In the h5 page, the call function will be cross-domain. At this time, you need to configure the domain name whitelist in the web console of unicloud. The whitened domain name can be cross-domain call function. For details, see: [https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)

In addition, there is no cross-domain in the built-in browser of HBuilderX during operation.

#  If the front end wants to connect to the traditional backend server

The cross-domain solution during deployment and the cross-domain solution during debugging are as follows:

##  Cross domain solution when deploying

-   Option 1: The most agile, of course, is to deploy the front-end code and back-end interface on the web server of the same domain
-   Option 2: The background server configures the policy to allow cross-domain access.

For example, the front-end page is deployed in the front-end page hosting of uniCloud, but it needs to access the interface of its own server. At this time, it is necessary to allow cross-domain access of the domain name hosted by the front-end page on the server side. Different server-side frameworks allow different cross-domain configurations. We will not list them one by one here, but only take eggjs as an example.

(1) Install the egg-cors package

```
npm i egg-cors --save
```

(2) Set up cors in plugin.js

```
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
```

(3) Configure in config.default.js

```
config.security = {
  domainWhiteList: [ '前端网页托管的域名' ],
};
```

##  Cross domain solution when debugging

When the front-end engineer is debugging, the front-end code that runs is in the web server that comes with the uni-app, instead of being deployed on the back-end business server. At this time, cross-domain will be encountered. In addition to coordinating the back-end configuration to allow cross-domain, you can actually solve the cross-domain problem yourself. A total of 3 options are available.

###  Option 1 Use HBuilderX built-in browser

This built-in browser has been officially processed, there is no cross-domain problem, it is easy to use, and it is recommended to use. (Requires HBuilderX 2.6 or above) ![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20190721/601e3f94838c1623afe0c42a2355136c.png)

###  Scheme 2 Configure webpack-dev-server proxy

The following is a more detailed configuration guide than the uni official website document. The address is directly posted here: [https://juejin.im/post/5e43b2645188254902765766](https://juejin.im/post/5e43b2645188254902765766)

###  Option 3 Install a cross-domain plug-in for the browser to prohibit the browser from reporting cross-domain

> This plug-in is not a panacea, please read and learn the relevant knowledge of browser security policy carefully. If you don’t understand this knowledge and spray it in the comments, the official will not reply.

When we use Google Chrome to debug ajax requests, we may encounter these two problems:

-   Cross-domain resource sharing See: [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
-   Cross-origin read blocking See: [CORB](https://www.chromestatus.com/feature/5629709824032768)

The most common one is about **cross-domain resource sharing**, which is what we usually call cross-domain. When we preview the page on the local server and use ajax to access the content of the remote server, the request will fail. For example, the address of the local preview is: http://localhost:8080/, and the interface address of the access is http://dcloud.io/ api.

For local preview only, a Chrome browser plugin can be used to assist with debugging. **!!!** This plugin can only solve the cross-domain debugging of **simple request** (\[click to search what is a simple request\](https://www.baidu.com/s?wd=%E7%AE %80%E5%8D%95%E8%AF%B7%E6%B1%82&tn=84053098\_3\_dg&ie=utf-8)). OPTION preflight for non-simple requests (\[click to search what is a preflight request\](https://www.baidu.com/s?ie=utf-8&f=3&rsv\_bp=1&tn=84053098\_3\_dg&wd=%E9%A2%84% E6%A3%80%E8%AF%B7%E6%B1%82&oq=OPTION%25E9%25A2%2584%25E6%25A3%2580&rsv\_pq=a0831c7c0000a93c&rsv\_t=0313nBZdJJqdOJUR7zNSs%2BMXe8O6I0B9hizxu4eiVIV%2BBy5DUc%2FsouJj%2BQH2dyTBn%2BfLQg&rqlang=cn&rsv\_enter=1&inputT= 2653&rsv\_sug3=3&rsv\_sug1=2&rsv\_sug7=100&rsv\_sug2=1&prefixsug=%25E9%25A2%2584%25E6%25A3%2580&rsp=1&rsv\_sug4=2654)) and users who also have cross-domain requirements on the online server can \[the server cooperate to solve\](https:/ /www.baidu.com/s?wd=%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%B7%A8%E5%9F%9F&tn=84053098\_3\_dg&ie=utf-8).

####  Chrome plugin name: Allow-Control-Allow-Origin: \*

####  Installation method:

-   Online installation

> Directly open the plugin address using Google Chrome \[https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi\](https://chrome.google.com/webstore/detail/allow -control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) can be installed

-   Offline installation
    
    > If domestic users cannot install online, they can download the attachment at the bottom of this page and install offline
    
    1.  Download: Allow-Control-Allow-Origin.crx
    2.  Click the menu button in the upper right corner of the browser to open the extension management page of Google Chrome
    3.  Drag the downloaded extension into the extension management page
    
    ![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20181120/29a90981041d78630895a124b123254d.png)
    
    ![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20181120/c706b1b4247f8e14862c86040348d832.png)
    

####  How to use

1.  Open the page to be debugged
2.  Find the installed plug-in in the extension column, click to open the plug-in configuration
3.  Enter the address of the interface you want to perform cross-domain debugging, and click Add.

####  Precautions

-   This plug-in is suitable for local debugging. If the online deployment is in a different domain from the interface, the server needs to cooperate.
-   If the content of the actual response is different from the content expected by the browser, it may also be blocked by the [CORB](https://www.chromestatus.com/feature/5629709824032768) policy.

####  firefox cross domain plugin

[firefox cross-domain plugin (pay attention to firefox css compatibility issues)](https://addons.mozilla.org/zh-CN/firefox/addon/access-control-allow-origin/)

##  Other historical issues

HBuilderX version 2.3.0 will report cross-domain in some cases, please upgrade to 2.3.1+ to solve
