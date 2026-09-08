---
title: "Page style and layout"
source_url: https://miniapp.neuxnet.com/tutorial/syntax-css.html
---
##  CSS support

-   [css preprocessor](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS_preprocessor)

#  Page style and layout

The css of Mini App is basically the same as the css of web. This article does not explain the usage of css. Based on your understanding of css for the web, this article describes some style-related considerations.

This article focuses on styling considerations for vue pages.

##  measurement unit

Common css units supported by `Mini App` include px, rpx

The vue page supports the following common H5 units:

-   rem root font size can be configured through [page-meta](../component/page-meta.md#page-meta) ByteDance applet and Feishu applet: screen width/20, Baidu applet: 16px, Alipay Mini Program: 50px
-   vh viewpoint height, the height of the viewport, 1vh is equal to 1% of the height of the viewport
-   vw viewpoint width, the width of the viewport, 1vw is equal to 1% of the width of the viewport

-   px:, a dynamically calculated length unit based on a 750-wide screen, the same concept as rpx in vue pages.
-   wx: a length unit independent of the screen width of the device, is the same concept as that of px in the vue page

The following is a detailed description of `rpx`:

Designers generally only provide drawing with one resolution while providing design drawing.

If you develop strictly according to the px marked by the design icon, the interface is easily deformed on mobile phones of different widths.

Width deformation is dominant. Generally, the height is not easy to go wrong on account of the scroll bar. As a result, a strong demand for dynamic width unit is triggered.

rpx is a unit relative to the reference width, which can be adapted to the screen width. `Mini App` The specified screen reference width is 750rpx.

Developers can calculate the rpx value of page elements based on the reference width of design draft. The conversion formula between design draft 1px and frame style 1rpx is as follows:

`Design draft 1px / Design draft base width = Frame style 1rpx / 750rpx`

In other words, the formula for calculating the width of the page element width in `Mini App` is as follows:

`750 * The width of the element in the design draft / the base width of the design draft`

**For example:**

1.  If the width of the design draft is 750px and the width of element A on the design draft is 100px, then the width of element A in `Mini App` should be set to: `750 * 100 / 750`, the result is: 100rpx.
2.  If the width of the design draft is 640px and the width of element A on the design draft is 100px, then the width of element A in `Mini App` should be set to: `750 * 100 / 640`, the result is: 117rpx.
3.  If the width of the design draft is 375px and the width of element B on the design draft is 200px, then the width of element B in `Mini App` should be set to: `750 * 200 / 375`, the result is: 400rpx.

**Tips**

-   Note that rpx is a unit related to the width. The wider the screen, the larger the actual pixels. If you do not want to zoom according to the screen width, you should use px as the unit.
-   If the developer also uses rpx in font or height, this writing mode means that as the screen becomes wider, the font and height will become larger. If you need a fixed height, you should use px.
-   rpx does not support dynamic horizontal and vertical screen switching calculation, it is recommended to use rpx to lock the screen orientation
-   Designers can take iPhone6 as the standard of visual drafts.

##  style import

Use the `@import` statement to import the external style sheet, `@import` is followed by the relative path of the external style sheet to be imported, and `;` indicates the end of the statement.

**Sample code:**

```
<style>
    @import "../../common/uni.css";

    .uni-card {
        box-shadow: none;
    }
</style>
```

##  inline styles

Frame components support the use of style and class attributes to control the style of components.

-   style: static styles are uniformly written into class. style receives dynamic styles, which will be parsed at runtime. Please try to avoid writing static styles into style so as not to affect the rendering speed.

```
<view :style="{color:color}" />
```

-   class: used to specify a style rule. Its attribute value is a collection of class selector names (style class names) in the style rule. Style class names do not need to be marked with. The style class names are separated by spaces.

```
<view class="normal_view" />
```

##  Selector

Currently supported selectors are:

| selector | sample | sample description |
| --- | --- | --- |
| .class | .intro | Select all components with class="intro" |
| #id | #firstname | Select the component with id="firstname" |
| element | view | Select all view components |
| element, element | view, checkbox | Selects all document view components and all checkbox components |
| ::after | view::after | Insert content after the view component, **only valid for vue pages** |
| ::before | view::before | Insert content before the view component, **only valid for vue pages** |

**Notice:**

-   The `*` selector cannot be used in `Mini App`.
    
-   `page` is equivalent to the `body` node, for example:
    
    ```
      page {
    	background-color: #ccc;
    }
    ```
    

##  Global and local styles

The styles defined in App.vue are global styles, which act on every page. The styles defined in the vue file in the pages directory are local styles, which only act on the corresponding pages and will cover the same selectors in App.vue.

**Notice:**

-   In App.vue, the external style can be imported through the `@import` statement, which also applies to each page.
-   nvue pages do not currently support global styles

##  CSS variables

Mini App provides built-in CSS variables

| CSS Variables | Description | Mini App | H5 |
| --- | --- | --- | --- |
| \--status-bar-height | system status bar height | system status bar height | 0 |
| \--window-top | Distance of content area from top | 0 | Height of NavigationBar |
| \--window-bottom | Distance of content area from bottom | 0 | Height of TabBar |

**Notice:**

-   When setting `"navigationStyle":"custom"` to cancel the native navigation bar, because the form is immersive, it occupies the position of the status bar. At this point, you can use a view with a height of `var(--status-bar-height)` at the top of the page to avoid the page content from appearing in the status bar.
-   Since there is no native navigation bar and tabbar on the H5 side, it is also a front-end div simulation. If a bottomed view with a fixed position is set, it will be above the tabbar on the applet and app side, but it will overlap the tabbar on the H5 side. At this point, you can use `--window-bottom`, whichever side is fixed above the tabbar.

**Code block**

The quick way to write css variables is: type hei in css, and you can see 3 css variables in the candidate assistant. (HBuilderX 1.9.6 and above are supported)

Example 1 - normal page using css variables:

```
<template>
	<page-meta>
		<navigation-bar />
	</page-meta>
	<view>
		<view class="status_bar">
			<!-- Here is the status bar -->
		</view>
		<view>
			Text under the status bar
			</view>
	</view>
</template>
<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
```

```
<template>
	<view>
		<view class="toTop">
			<!-- An up arrow can be put here, which shifts up 10px from the bottom tabbar-->
		</view>
	</view>
</template>
<style>
	.toTop {
		bottom: calc(var(--window-bottom) + 10px);
	}
</style>
```

##  Fixed value

The height of the following components in `Mini App` is fixed and cannot be modified:

| Components | Description | App | H5 |
| --- | --- | --- | --- |
| NavigationBar | Navigation Bar | 44px | 44px |
| TabBar | Bottom Tab | 50px | 50px |

##  Flex layout

In order to support cross-platform, the framework recommends using Flex layout. For Flex layout, please refer to the external document [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and so on.

##  Background picture

`Mini App` supports setting a background image in css. The usage method is basically the same as that of a normal `web` project, but the following points should be noted:

-   Support base64 format images.
-   Support web path images.
-   The applet does not support the use of local files in css, including local background images and font files. It needs to be used in base64 mode.
-   Note when using background images from local path:
    
    1.  For the convenience of developers, when the background image is less than 40kb, when `Mini App` is compiled to a platform that does not support local background images, it will be automatically converted to base64 format;
    2.  If the image is greater than or equal to 40kb, there will be performance problems. It is not recommended to use a background image that is too large. If developers must use it, they need to convert it into base64 format for use, or move it to the server and refer to it from the network address. .
    3.  The reference path of the local background image is recommended to use an absolute path starting with ~@.
    
    ```
    .test2 {
    	background-image: url('~@/static/logo.png');
    }
    ```
    

##  font icon

`Mini App` supports the use of font icons in the same way as normal `web` projects. Note the following:

-   Support base64 format font icons.
-   Support network path font icons.
-   The network path must add the protocol header `https`.
-   Note when using local path icon font:
    
    1.  For the convenience of developers, when the font file is less than 40kb, `Mini App` will automatically convert it to base64 format;
    2.  If the font file is greater than or equal to 40kb, and it is still converted to base64, there may be performance problems. If the developer must use it, he needs to convert it into base64 format for use, or move it to the server and refer to it from the network address;
    3.  It is recommended to use an absolute path starting with ~@ for the reference path of the font file.
    
    ```
    @font-face {
    	font-family: test1-icon;
    	src: url('~@/static/iconfont.ttf');
    }
    ```
    

```
var domModule = weex.requireModule('dom');
domModule.addRule('fontFace', {
	fontFamily: 'fontFamilyName',
	src: "url('https://...')",
});
```

**Example:**

```
<template>
	<view>
		<view>
			<text class="test">&#xe600;</text>
			<text class="test">&#xe687;</text>
			<text class="test">&#xe60b;</text>
		</view>
	</view>
</template>
<style>
	@font-face {
		font-family: 'iconfont';
		src: url('https://at.alicdn.com/t/font_865816_17gjspmmrkti.ttf') format('truetype');
	}
	.test {
		font-family: iconfont;
		margin-left: 20rpx;
	}
</style>
```
