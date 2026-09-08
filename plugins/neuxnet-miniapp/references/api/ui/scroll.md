---
title: "uni.pageScrollTo(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/ui/scroll.html
---
###  uni.pageScrollTo(OBJECT)

Scroll the page to the target location.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| scrollTop | Number | No | Scroll to the target location on the page (in px) |
| selector | String | No | Selector, App, H5, WeChat applet 2.7.3+, Alipay applet 1.20.0+ support |
| duration | Number | No | The duration of scrolling animation with the default of 300ms, in ms |
| success | function | No | Callback function for successful interface calling |
| fail | function | No | Callback function for failed interface calling |
| complete | function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**selector syntax** selector is similar to a CSS selector, but only the following syntax is supported.

-   ID selector: #the-id
-   class selector (you can specify more than one in a row): `.a-class.another-class`
-   Child element selector: `.the-parent > .the-child`
-   Descendant selector: `.the-ancestor .the-descendant`
-   Descendant selectors across custom components: `.the-ancestor >>> .the-descendant`
-   Union of multiple selectors: `#a-node, .some-other-nodes`

**Example**

```
uni.pageScrollTo({
	scrollTop: 0,
	duration: 300
});
```
