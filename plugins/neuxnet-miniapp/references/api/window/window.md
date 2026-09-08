---
title: "getCurrentPages()"
source_url: https://miniapp.neuxnet.com/api/window/window.html
---
###  getCurrentPages()

The `getCurrentPages()` function is used to get the current page stack instance, which is given in the order of the stack in the form of an array, the first element is the home page, and the last element is the current page.

**Notice:** `getCurrentPages()` is only used to display the page stack. Please do not modify the page stack to avoid page status errors.

Method attribute list of each page instance:

| Method | Describe | Platform description |
| --- | --- | --- |
| page.$getAppWebview() | Get the webview object instance of the current page | App |
| page.route | Get the route of the current page |  |

Tips：

-   `navigateTo` and `redirectTo` can only open non-tabBar pages.
-   `switchTab` can only open the `tabBar` page.
-   `reLaunch` can open any page.
-   The `tabBar` at the bottom of the page is determined by the page, i.e., as long as the page is defined as `tabBar`, there will be `tabBar` at the bottom.
-   You cannot jump to other pages in `App.vue`.

###  $getAppWebview()

`Mini App` There is a built-in method `$getAppWebview()` in the page obtained by `getCurrentPages()`, which can get the object instance of the current webview, so as to realize the update of the webview. Powerful controls. In html5Plus, plus.webview has powerful control ability, please refer to: [WebviewObject](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject) .

But the `Mini App` framework has its own window management mechanism, please don't create and destroy the webview yourself. If you need to cover the sub-form, please use [native sub-form subNvue](./subNVues.md).

**Note: This method is only supported by App-Vue**

**Example:**

Get the object instance of the current page webview

```
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {
    // #ifdef APP-PLUS
    const currentWebview = this.$scope.$getAppWebview(); 
    currentWebview.setBounce({position:{top:'100px'},changeoffset:{top:'0px'}}); 
    // #endif
  }
}
```

Get the object instance of the specified page webview

`getCurrentPages()` can get all page objects, and then according to the array, you can get the specified page webview object

```
var pages = getCurrentPages();
var page = pages[pages.length - 1];
// #ifdef APP-PLUS
var currentWebview = page.$getAppWebview();
console.log(currentWebview.id);
console.log(currentWebview.isVisible());
// #endif
```

The web-view component that comes with Mini App is a newly inserted sub-webview in the page.
