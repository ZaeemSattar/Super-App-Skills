---
title: "Set UrlSchemes"
source_url: https://miniapp.neuxnet.com/tutorial/app-android-schemes.html
---
The url scheme in Android is a page jump protocol. By defining your own scheme protocol, you can easily implement other three-party apps to call your app.

**The UrlSchemes of the standard real machine running base of HBuilderX is "hbuilder://"**, which is convenient for developers to debug.

###  Set UrlSchemes

**Visual interface configuration** ![](https://native-res.dcloud.net.cn/images/uniapp/others/urlschemes-android.png)

> Note: It is recommended to use lowercase letters for strings (do not use special characters, Chinese, etc.), if it is set to "test", then the scheme protocol of other apps calling your app is "test://"; Multiple schemes are separated by ",", each string is a scheme; If the visual interface cannot be edited, please switch to the "source view" to delete the `schemes` node data and re-operate.

**Source view configuration** Open the manifest.json file of the project, switch to the "source view", and configure according to the project type

-   uni-app project Configure UrlSchemes in the schemes attribute of the "app-plus"->"distribute"->"android" node, for example:

```
  "app-plus": {
    "distribute": {
      "android": {
        "schemes": "hbuilder,myuniapp"
        //...
      },
      //...
    },
    //...
  },
  //...
```

-   5+App/Wap2App项目
-   5+App/Wap2App projects 在 "plus"->"distribute"->"google" 节点的 schemes 属性配置UrlSchemes，示例如下： Configure UrlSchemes in the schemes property of the "plus"->"distribute"->"google" node, for example:

```
  "plus": {
    "distribute": {
      "google": {
        "schemes": "hbuilder,myuniapp"
        //...
      },
      //...
    },
    //...
  },
  //...
```

> Note: For backward compatibility, the `schemes` property value supports a string array when configuring the HBuilderX source view. The value in the above example can also be configured like this \["hbuilder","myuniapp"\]

**Submit the App cloud package to take effect after saving**

###  Start the application via href in the browser

After installing the application, we can directly call the application through href in the H5 page:

```
<a href="test://abc">test:<a><br/>
```

###  App handles parameters passed by scheme startup

When other third-party apps start the app through scheme, the complete urlscheme string can be obtained through plus.runtime.arguments.

-   uni-app project It is recommended to obtain it in the `onshow` event of the application life cycle app.vue. The sample code is as follows:

```
onShow: function() {
	var args= plus.runtime.arguments;
	if(args){
		// Process args parameters, such as until a new page is reached, etc.
	}
}
```

-   5+App/Wap2App项目
-   5+App/Wap2App projects 在HTML页面的js中监听'plusready'和'newintent'事件回调中获取，示例代码如下： Obtained by listening to the 'plusready' and 'newintent' event callbacks in the js of the HTML page. The sample code is as follows:

```
document.addEventListener('plusready',function(){
	checkArguments();
},false);
// Determine the startup method
function checkArguments(){
	console.log("plus.runtime.launcher: "+plus.runtime.launcher);
	var args= plus.runtime.arguments;
	if(args){
		// Process args parameters, such as until a new page is reached, etc.
	}
}
// handle resuming from background
document.addEventListener('newintent',function(){
	console.log("addEventListener: newintent");
	checkArguments();
},false);
```
