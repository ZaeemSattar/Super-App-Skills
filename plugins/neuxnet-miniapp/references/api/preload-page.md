---
title: "uni.preloadPage(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/preload-page.html
---
####  uni.preloadPage(OBJECT)

Page pre-loading is a performance optimization technology. The preloaded pages can be opened faster.

| Attribute | Type | Required | Instruction |
| --- | --- | --- | --- |
| url | string | Yes | Url of the preload page |
| complete | Function | No | Preload successfully completed callback |
| fail | Function | No | Preload failed callback |

####  H5 platform

Pre-load the js file corresponding to /pages/test/test without performing the page pre-rendering logic.

```
uni.preloadPage({url: "/pages/test/test"});
```

####  App-nvue platform

Pre-load nvue page /pages/test/test

```
uni.preloadPage({url: "/pages/test/test"});
```

Precautions

1.  App platform only supports preloading nvue pages, performing page pre-rendering, and triggering life cycles `onLoad` and `onReady` without triggering `onShow`
2.  When a new page is opened with exactly same url (including parameters), the preloaded page is preferentially used, triggering the life cycle onShow
3.  The tabbar page only supports preloading pages that have not yet been displayed, otherwise it will return fail, prompting already exists
4.  preloadPage is applied to the same url only once at a time
5.  If the same preloaded page was opened (in the routing stack), and when the same url is opened again, a new non-preloaded page will be opened other than the preloaded page
6.  When switching the pages of `uni.reLanuch`, `uni.switchTab` and `uni.navigateBack` (including Android return key), the preloaded pages will not be destroyed, and the life cycle `onHide` will be triggered only
7.  When using `uni.redirectTo` on the preloaded page, the preload page will be destroyed, triggering the life cycle `onUnload`

Example

####  uni.unPreloadPage(OBJECT)

Cancel the preload page.

1.  Only supported in App-nvue
2.  When the preloaded page is not opened, the page will be destroyed when using `unPreloadPage`, and the life cycle `onUnload` will be triggered
3.  When the preloaded page has been opened, the page will not be destroyed when using `unPreloadPage`. However, the preloaded page will no longer exist and will be destroyed as the route changes
