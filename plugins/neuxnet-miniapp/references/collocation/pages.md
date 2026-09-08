---
title: "list of configuration items"
source_url: https://miniapp.neuxnet.com/collocation/pages.html
---
The `pages.json` file is used to configure Mini App globally, and determine the path of the page file, window style, native navigation bar, native tabbar at the bottom, etc.

#  list of configuration items

| Attribute | Type | Required | Describe | Platform |
| --- | --- | --- | --- | --- |
| [globalStyle](./pages.md#globalstyle) | Object | No | Set the window representation of the default page |  |
| [pages](./pages.md#pages) | Object Array | Yes | Set the page path and window representation |  |
| [easycom](./pages.md#easycom) | Object | No | Rules for automatic import of components |  |
| [tabBar](./pages.md#tabbar) | Object | No | Set the representation of the bottom tab |  |
| [condition](./pages.md#condition) | Object | No | Start mode configuration |  |
| [subPackages](./pages.md#subPackages) | Object Array | No | Subcontract loading configuration |  |
| [leftWindow](./pages.md#leftwindow) | Object | No | Large screen left window | H5 |
| [topWindow](./pages.md#topwindow) | Object | No | Large screen top window | H5 |
| [rightWindow](./pages.md#rightwindow) | Object | No | Large screen right window | H5 |

The following is a `pages.json` that includes all configuration options:

```
{
	"pages": [{
		"path": "pages/component/index",
		"style": {
		}
	}, {
		"path": "pages/API/index",
		"style": {
		}
	}, {
		"path": "pages/component/view/index",
		"style": {
			"navigationBarTitleText": "view"
		}
	}],
		"list": [{
		}]
	},
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8",
		"usingComponents":{
			"collapse-tree-item":"/components/collapse-tree-item"
		},
		"rpxCalcMaxDeviceWidth": 960,
		"rpxCalcBaseDeviceWidth": 375,
		"rpxCalcIncludeWidth": 750
	},
	"tabBar": {
		"color": "#7A7E83",
		"selectedColor": "#3cc51f",
		"borderStyle": "black",
		"backgroundColor": "#ffffff",
		"height": "50px",
		"fontSize": "10px",
		"iconWidth": "24px",
		"spacing": "3px",
		"list": [{
			"pagePath": "pages/component/index",
			"iconPath": "static/image/icon_component.png",
			"selectedIconPath": "static/image/icon_component_HL.png",
        "text": "\ue102",
        "selectedText": "\ue103",
        "fontSize": "17px",
        "color": "#000000",
        "selectedColor": "#0000ff"
      }
		}, {
			"pagePath": "pages/API/index",
			"iconPath": "static/image/icon_API.png",
			"selectedIconPath": "static/image/icon_API_HL.png",
		}],
		"midButton": {
			"width": "80px",
			"height": "50px",
			"iconPath": "static/image/midButton_iconPath.png",
			"iconWidth": "24px",
			"backgroundImage": "static/image/midButton_backgroundImage.png"
		}
	},
  "easycom": {
      "^uni-(.*)": "@/components/uni-$1.vue"
    }
  },
  "topWindow": {
    "path": "responsive/top-window.vue",
    "style": {
      "height": "44px"
    }
  },
  "leftWindow": {
    "path": "responsive/left-window.vue",
    "style": {
      "width": "300px"
    }
  },
  "rightWindow": {
    "path": "responsive/right-window.vue",
    "style": {
      "width": "300px"
    },
    "matchMedia": {
      "minWidth": 768
    }
  }
}
```

##  globalStyle

Used for setting the applied status bar, navigation bar, title, window background color, etc.

| Attribute | Type | Defaults | Describe | Platform Difference Description |
| --- | --- | --- | --- | --- |
| navigationBarBackgroundColor | HexColor | #F7F7F7 | The background color of the navigation bar (same as the background color of the status bar) |  |
| navigationBarTextStyle | String | white | The title color of navigation bar and foreground color of status bar can only be black/white |  |
| navigationBarTitleText | String |  | Navigation bar title text content |  |
| navigationStyle | String | default | Navigation bar style, only supports default/custom. custom means to cancel the default native navigation bar |  |
| enablePullDownRefresh | Boolean | false | Whether to enable pull-down refresh, see [page life cycle](../tutorial/page.md#lifecycle). |  |
| onReachBottomDistance | Number | 50 | The distance from the bottom of the page when the bottom of the page is triggered, the unit only supports px, see [page life cycle](../tutorial/page.md#lifecycle) |  |
| titleImage | String |  | Navigation bar image address (replace the current text title) |  |
| transparentTitle | String | none | The overall (foreground, background) transparency setting of the navigation bar. Support always transparent / auto sliding adaptive / none opaque |  |
| titlePenetrate | String | NO | Click to penetrate the navigation bar | H5 |
| pageOrientation | String | portrait | Landscape configuration, screen rotation setting, only supports auto / portrait / landscape. For details, see \[Respond to display area changes\](https://developers.weixin.qq.com/miniprogram/dev/framework/view /resizable.html) | Mini App |
| animationType | String | pop-in | The animation effect displayed by the window, see: [Window animation](../api/router.md#animation) | Mini App |
| animationDuration | Number | 300 | Window animation duration, in ms | Mini App |
| app-plus | Object |  | Set the specific style compiled to the Mini App platform. For configuration items | App |
| h5 | Object |  | Set the specific style compiled to H5 platform. For configuration items, please refer to the following [H5](./pages.md#h5) | H5 |
| leftWindow | Boolean | true | Whether or not to display the leftWindow by default when the leftWindow is present | H5 |
| topWindow | Boolean | true | Whether or not to display the topWindow by default when the topWindow is present | H5 |
| rightWindow | Boolean | true | Whether or not to display the rightWindow by default when the rightWindow is present | H5 |
| rpxCalcMaxDeviceWidth | Number | 960 | rpx Calculate the maximum device width supported by px | H5 |
| rpxCalcBaseDeviceWidth | Number | 375 | rpx Calculates the base device width used in the calculation. When the actual width of the device exceeds the maximum device width supported by rpx calculation, it will be calculated according to the base width. The unit is px | H5 |
| rpxCalcIncludeWidth | Number | 750 | rpx Calculates the value for special handling, always based on the actual device width, in rpx | H5 |
| maxWidth | Number |  | In px, when the width of the visible area of the browser is greater than maxWidth, both sides are left blank; when less than or equal to maxWidth, the pages are covered; different pages support maxWidth with different configurations; maxWidth = leftWindow(optional)+page(page body)+rightWindow(optional) | H5 |

**Notice**

-   `titleImage` set in `globalStyle` will also overwrite the set text title in `pages`\->`style`
-   When using `maxWidth`, fixed elements in the page need to use --window-left, --window-right to ensure the correct layout position

##  topWindow

With the existing mobile phone application as mainwindow, new page display windows can be added on the left, top and right sides.

For the overall widescreen adaptation idea | Attribute| Type| Defaults| Describe| |:-|:-|:-|:-| | path| String| | Configure page path| | style| Object| | Configure the performance of the page window. For configuration items, refer to the following [pageStyle](./pages.md#style)| | matchMedia| Object| | Configure the rules for displaying this window. For configuration items, refer to [matchMedia](./pages.md#matchmedia)|

**Notice**

-   At present, the style node only supports configuring related attributes of css styles such as width and height
-   If you need to automatically hide the navigationBar of the page when there is a topwindow, configure the following css in `App.vue` according to different requirements:
    -   Just hide the navigationBar of a certain page
        
        ```
        .Mini App--showtopwindow [data-page="pages/component/view/view"] uni-page-head {
        	display: none;
        }
        ```
        
    -   Need to hide the navigationBar of most pages and display the navigationBar of a certain page
        
        ```
        .Mini App--showtopwindow uni-page-head {
        	display: none;
        }
        
        .Mini App--showtopwindow [data-page="pages/component/view/view"] uni-page-head {
        	display: block;
        }
        ```
        

####  matchMedia

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| minWidth | Number | 768 | This window is displayed when the width of the visible area of the device is > = minWidth |

With the adjustment of matchMedia, it can adaptively display the specified window on different screens.

```
{
  "pages": [
    {
      "path": "pages/login/login",
      "style": {
      }
    }
  ],
  "topWindow": {
    "style": {
      "height": "44px"
    }
  },
  "leftWindow": {
    "style": {
      "width": "300px"
    }
  },
  "rightWindow": {
    "style": {
    },
    "matchMedia": {
    }
  }
}
```

##  leftWindow

Same as [topWindow](./pages.md#topwindow)

##  rightWindow

Same as [topWindow](./pages.md#topwindow)

##  pages

`Mini App` configures which pages the application consists of through the pages node. The pages node receives an array, each item of the array is an object, and its attribute values are as follows:

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| path | String |  | Configure page path |
| style | Object |  | Configure the performance of the page window. For configuration items, refer to the following [pageStyle](./pages.md#style) |  |

**Tips：**

-   The first item of the pages node is the application entry page (i.e. the home page)
-   **Add/reduce pages in the application**, all need to modify the pages array
-   The file name **does not need to write the suffix** , the framework will automatically find the page resources under the path

**Code example:**

The development directory is:

```

┌─pages
│  ├─index
│  │  └─index.vue
│  └─login
│     └─login.vue
├─static
├─main.js
├─App.vue
├─manifest.json
└─pages.json
```

Then you need to fill it in pages.json

```
{
    "pages": [
        {
            "path": "pages/index/index",
            "style": { ... }
        }, {
            "path": "pages/login/login",
            "style": { ... }
        }
    ]
}
```

##  style

Used for setting the status bar, navigation bar, title, window background color, etc. for each page.

The configuration items on the page will override the same configuration items in [globalStyle](./pages.md#globalstyle)

| Attribute | Type | Defaults | Describe | Platform Difference Description |
| --- | --- | --- | --- | --- |
| navigationBarBackgroundColor | HexColor | #000000 | Navigation bar background color (same as status bar background color), such as "#000000" |  |
| navigationBarTextStyle | String | white | The title color of navigation bar and foreground color of status bar can only be black/white |  |
| navigationBarTitleText | String |  | Navigation bar title text content |  |
| navigationBarShadow | Object |  | For the configuration of the shadow of the navigation bar, please refer to the following [Shadow of the navigation bar](./pages.md#navigationBarShadow) |  |
| navigationStyle | String | default | Navigation bar style, only supports default/custom. custom means to cancel the default native navigation bar, you need to see [use note](./pages.md#customnav) |  |
| backgroundTextStyle | String | dark | The style of pull-down loading, can only be dark/light |  |
| enablePullDownRefresh | Boolean | false | Whether to enable pull-down refresh, see [page life cycle](../tutorial/page.md#lifecycle). |  |
| onReachBottomDistance | Number | 50 | The distance from the bottom of the page when the bottoming event is triggered, the unit only supports px, see [page life cycle](../tutorial/page.md#lifecycle) |  |
| disableSwipeBack | Boolean | false | Whether to disable SwipeBack | Mini App-iOS |
| titleImage | String |  | The image address of the navigation bar (replace the current text title) | H5 |
| transparentTitle | String | none | The navigation bar transparency setting. Support always transparent / auto sliding adaptive / none opaque | H5, Mini APP |
| titlePenetrate | String | NO | Click to penetrate the navigation bar | H5 |
| app-plus | Object |  | Set the specific style compiled to the App platform. For configuration items, please refer to the following [app-plus](./pages.md#app-plus) | Mini APP |
| h5 | Object |  | Set the specific style compiled to H5 platform. For configuration items, please refer to the following [H5](./pages.md#h5) | H5 |
| leftWindow | Boolean | true | Whether or not to display the leftWindow on the current page when the leftWindow is present | H5 |
| topWindow | Boolean | true | Whether or not to display the topWindow on the current page when the topWindow is present | H5 |
| rightWindow | Boolean | true | Whether or not to display the rightWindow on the current page when the rightWindow is present | H5 |
| maxWidth | Number |  | In px, when the width of the visible area of the browser is greater than maxWidth, both sides are left blank; when less than or equal to maxWidth, the pages are covered; different pages support maxWidth with different configurations; maxWidth = leftWindow(optional)+page(page body)+rightWindow(optional) | H5 |

**Notice**

-   When using `maxWidth`, fixed elements in the page need to use --window-left, --window-right to ensure the correct layout position

**Code example:**

```
{
  "pages": [{
      "path": "pages/index/index",
      "style": {
      }
    },
    ...
  ]
}
```

###  Pay attention to

When navigationStyle is set to custom or titleNView is set to false, the native navigation bar will not be displayed. At this time, several issues should be noted:

-   For non-H5 terminals, the status bar area at the top of the mobile phone will be covered by the page content. This is because the form is immersive, i.e. full screen writable content. Mini App provides a css variable for the height of the status bar [\--status-bar-height](../tutorial/syntax-css.md#css-变量), if you need to put the status The position of the bar is set aside from the foreground part, and a placeholder div can be written, and the height is set as a css variable.

```
<template>
    <view>
        <view class="status_bar">
            <!-- Here is the status bar -->
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

-   Problems may occur when front-end navigation bar is used with the native navigation pull-down refresh, including
    -   Under App and H5 sides, the native pull-down refresh provides [circle style](./pages.md#app-pullToRefresh), which can be used to specify the offset (configuration under app-plus in pages.json) and customize the location where the drop-down circle appears. There are examples in the extension component of hello Mini App.
-   For non-H5 terminals, front-end navigation cannot cover native components. If the page has \[native components\] (/component/native-component) such as video, map, etc., the navigation bar will be covered when scrolling
    -   If it is a small program, you can use cover-view as the navigation bar to avoid coverage problems
    -   If it is on Mini App side, it is recommended to use [titleNView](./pages.md#app-titleNView) or [subNVue](./pages.md#app-subNVues) for better experience
-   The front-end component is inferior to the native navigation bar in rendering speed, and the native navigation bar can render during the animation to ensure that there is no blank screen during the animation. However, using the front-end navigation bar may lead to the whole page being blank during the animation once the new window enters. The more low end the mobile phone is, the more obvious this phenomenon is.
-   The above discussion is about the front-end custom navigation bar, but on the App side, the native navigation bar also provides richer customization than the applet navigation
    -   titleNView: Provides more configurations for the native navigation bar, including custom buttons, scrolling gradient effects, search boxes, etc., see [titleNView](./pages.md#app-titleNView) for details
    -   subNVue: use nvue native rendering, all layouts are developed by ourselves, can be flexibly customized to a very large extent. See [subNVue](./pages.md#app-subNVues) for details
-   After the native navigation bar is disabled on the page, if you want to change the foreground font style of the status bar, you can still set the navigationBarTextStyle property of the page (it can only be set to black or white). Note that some low-end Android phones (4.4) do not support setting the foreground color of the status bar.

In view of the above problems, when native navigation can solve business needs, try to use native navigation. Sometimes even less important needs need to be sacrificed. Under App and H5, Mini App provides flexible processing solutions: [titleNView](./pages.md#app-titleNView), [subNVue](./pages.md#app-subNVues), or whole The page uses nvue. But under the applet, because of its own limitations, there is no good solution. Conditional compilation can also be used to split end processing if necessary.

###  app-plus (Mini App)

Configure a specific style when compiling to the Mini App platform, and some commonly used configurations are also supported by the H5 platform.

| Attribute | Type | Default | Description | Platform compatibility |
| --- | --- | --- | --- | --- |
| background | HexColor | #FFFFFF | window background color. Both for vue pages and nvue pages, there is a parent native window on App side. The effective time of the background color of the window is faster than that of the css in the page | Mini App |
| titleNView | Object |  | Navigation bar, see details: [Navigation bar](./pages.md#app-titleNView) | Mini App, H5 |
| subNVues | Object |  | Native subwindow, see details: [Native subwindow](./pages.md#app-subNVues) | Mini App |
| softinputMode | String | adjustPan | Soft keyboard pop-up mode, supporting two modes, adjustResize and adjustPan | Mini App |
| pullToRefresh | Object |  | Pull to refresh | Mini App |
| scrollIndicator | String |  | Scroll bar display strategy. Hide scroll bar if set to "none". | Mini App |
| animationType | String | pop-in | The animation effect displayed by the window, see: [Window animation](../api/router.md#animation). | Mini App |
| animationDuration | Number | 300 | Duration of window display animation, in ms. | Mini App |
| **Tips** |

-   The `.nvue` page only supports `titleNView、pullToRefresh、scrollIndicator` configuration, and other configuration items are temporarily not supported

####  Navigation bar

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| backgroundColor | String | #F7F7F7 | Background color, the color value format is "#RRGGBB". You can also set rgba format when using translucent title bar |
| buttons | Array |  | For custom buttons, see [buttons](./pages.md#app-titlenview-buttons) for details |  |
| titleColor | String | #000000 | Title text color |  |
| titleOverflow | String | ellipsis | Method of handling the text when it exceeds the display area." clip"-content clipping when it exceeds the display area; "ellipsis"-ellipsis marker (...) is displayed at the end when it exceeds the display area. |  |
| titleText | String |  | Title text content |  |
| titleSize | String |  | Title text font size |  |
| searchInput | Object |  | For the configuration of the search box on the native navigation bar, see [searchInput](./pages.md#app-titlenview-searchinput) for details |  |
| homeButton | Boolean | false | Whether the title bar control displays the Home button |  |
| autoBackButton | Boolean | true | Whether the title bar control displays the return button on the left | App 2.6.3+ |
| backButton | Object |  | Return button style, see: [backButton](./pages.md#app-titleNView-backButtonStyles) | App 2.6.3 |
| backgroundImage | String |  | The following types are supported: Background image path - such as "/static/img.png", only supports the absolute path of local files, and draws according to the actual title bar width and height; Gradient - only supports linear gradient and gradient of two colors, such as "linear-gradient(to top, #a80077, #66ff00)", in which the first parameter is the gradient direction. Options include: "to right" means the gradient is from left to right, "to left" means the gradient is from right to left, "to bottom" means the gradient is from top to bottom, "to bottom right" means the gradient is from top left to bottom right, and "to top left" means the gradient is from bottom right to top left | 2.6.3 |
| backgroundRepeat | String |  | Valid only when backgroundImage is set to the image path. Options: "repeat" - the background image is tiled vertically and horizontally; "repeat-x" - the background image is tiled horizontally and stretched vertically; "repeat-y" - the background image is tiled vertically and stretched horizontally; "no-repeat" - the background image is stretched vertically and horizontally. Use "no-repeat" by default | 2.6.3 |
| titleAlign | String | "auto" | Options: "center"-center aligned; "left"-left aligned; "auto"-automatically selected according to the platform (Android platform is left aligned, and iOS platform is center aligned) | 2.6.3 |
| blurEffect | String | "none" | This effect will Gaussian blur the content behind the title bar, and it is only valid when the type is "transparent" or "float". Options: "dark" - dark style blur, corresponding to the iOS native UIBlurEffectStyleDark effect; "extralight" - extralight style blur, corresponding to the iOS native UIBlurEffectStyleExtraLight effect; "light" – light style blur, corresponding to the iOS native UIBlurEffectStyleLight effect; "none" - no blurring effect. Note: Avoid setting background color when using blur effect, setting background color may override the blur effect. | 2.4.3 |
| coverage | String | "132px" | Title bar control change scope is only valid when the type value is transparent, and the background transparency of the title bar will change when the page scrolls. When the page scrolls to the specified offset, the title bar background becomes completely opaque. Support percentage, pixel value |  |
| splitLine | Boolean | false | If the bottom split line of the title bar ([SplitLineStyles](./pages.md#app-titleNView-splitLineStyles)) is set, the split line will be display at the bottom of the title bar control, where the color value and height can be configure. Setting this attribute value to undefined or null will hide the separator. The bottom separator is not displayed by default | 2.6.6 |
| subtitleColor | String |  | The subtitle text color, the color value format is "#RRGGBB" and "rgba(R,G,B,A)", for example, "#FF0000" means that the title text color is red. The default value is consistent with the main title text color | 2.6.6 |
| subtitleSize | String | "auto" | The font size of subtitle text, font size is in pixels, for example, "14px" means that the font size is 14 pixels, with 12 pixels as default. | 2.6.6 |
| subtitleOverflow | String | "ellipsis" | Method of handling the text when it exceeds the display area. Options include: "clip"-content clipping when it exceeds the display area; "ellipsis"-ellipsis marker (...) is displayed at the end when it exceeds the display area. | 2.6.6 |
| subtitleText | String |  | The text content of subtitle, after setting the subtitle, two lines of titles will be displayed, and the subtitle will be displayed below the main title (titleText). Note: After setting the subtitle, it will be displayed left-aligned | 2.6.6 |
| titleIcon | String |  | The title icon, icon path is like "./img/t.png", only supports local file path and relative path, relative to the host position of the current page, the fixed width and height is the logical pixel value of "34px". The width and height of the image are required to be the same. Note: After setting the title icon, the title will be displayed on the left. | 2.6.6 |
| titleIconRadius | String | No rounded corner | The value of the title icon's round corners is in the format of "XXpx", where XX is the pixel value (logical pixel), for example, "10px" means the corner radius is 10 pixels. | 2.6.6 |

####  SplitLineStyles

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| color | String | #CCCCCC | Color of bottom separator, Options include: "#RRGGBB" format string, for example "#FF0000" means drawing red separator; "rgba(R,G,B,A)", where R/G/B represents red value/green value/blue value, positive integer type, with the value range of 0-255, A as transparency, floating point type, with the value range of 0-1(0 is fully transparent and 1 is opaque), for example "rgba(255,0,0,0.5) ", means red semi-opaque |
| height | String | "1px" | Options include: pixel value (logical pixel), supports decimal point, for example "1px" means 1 pixel high; Percentage, for example "1%", relative to the height of the title bar control. |

**Tips**

-   The page supports disabling native navigation bars by configuring navigationStyle to custom or titleNView to false. Once native navigation is disabled, please read the [Notes on Custom Navigation](./pages.md#customnav).
-   When the `type` value of `titleNView` is `transparent`, the navigation bar is a scrolling transparent gradient navigation bar, only the button by default, and the title bar background color and title text will gradually appear after scrolling; When `type` is `float`, the navigation bar is a floating title bar. At this time, the content of the page reaches the top of the screen, including the status bar, but the navigation bar is floating above the page. Generally, in this scenario, the background color of the navigation bar will be set to rgba translucent color at the same time.
-   Configurable via `[<navigation-bar>(/component/navigation-bar)]`
-   If font icons are used for the buttons in the native navigation bar under App, please check whether the default iconfont is used for the font-family name of the font library, which is a reserved word and cannot be used as the name of the font library introduced from outside, and it needs to be adjusted to a custom name, or otherwise it cannot be displayed.

#####  Custom button

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| type | String | none | For the available values of button style, see [buttons style](./pages.md#app-titlenview-buttons-type) |
| color | String | The color is the same as the title text by default | Text color on the button |
| background | String | The default value is gray translucent color | The background color of the button, which is valid only when the title bar type=transparent |
| colorPressed | String | The default value is color attribute value automatic adjustment with the transparency of 0.3 | Text color after clicking the status button |
| float | String | right | The display position of the button on the title bar. Options include "left" and "right" |
| fontWeight | String | normal | Text thickness on the button. Options include "normal"-standard font and "bold"-bold font. |
| fontSize | String |  | Text size on the button |
| fontSrc | String |  | The font file path for the text of the button. Network address is not supported. Please use local address in any case. |
| select | String | false | Whether to display the selection indicator icon (down arrow), which is often used in city selection |
| text | String |  | Text displayed on the button. When using the font icon, the unicode character representation must start with' \\u', such as "\\ue123" (please note that it cannot be coded as "\\e123"). |
| width | String | 44px | The width of the button. Options include: "\*px" - logical pixel values, for example "10px" indicates 10 logical pixel values, and rpx is not supported. The contents of the button are displayed in the center; "auto" - automatically calculate the width and automatically adjust the button width according to the content |

#####  Custom the style of the return button

Valid when autoBackButton is set to true. This attribute allows you to custom the style of the return button, such as icon size, red dot, corner marker, and title, etc.

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| background | String | none | Background color is valid only when the title bar type=transparent, and it is the displayed background color of the button when the title bar is transparent. Values can be #RRGGBB and rgba format color strings, with gray translucent as default. |
| badgeText | String |  | corner marker text, displaying up to 3 characters, and trimmed as ... if longer than that |
| color | String | The title text color of the window title bar control. | Icon and title color. Options include: "#RRGGBB" format string, for example "#FF0000" means red; "rgba(R,G,B,A)", where R/G/B represents red value/green value/blue value, positive integer type, with the value range of 0-255, A as transparency, floating point type, with the value range of 0-1(0 is fully transparent and 1 is opaque), for example "rgba(255,0,0,0.5) ", means red semi-opaque. |
| colorPressed | String |  | Text color after clicking the status button. Options include: "#RRGGBB" format string, for example "#FF0000" means red; "rgba(R,G,B,A)", where R/G/B represents red value/green value/blue value, positive integer type, with the value range of 0-255, A as transparency, floating point type, with the value range of 0-1(0 is fully transparent and 1 is opaque), for example "rgba(255,0,0,0.5) ", means red semi-opaque. The default value is color attribute value automatic adjustment with the transparency of 0.3. |
| fontWeight | String | "normal" | The stroke weight of the return icon. Options include: "normal"-standard font; "bold"-bold font. |
| fontSize | String |  | The text size of the return icon. Options include: font height pixel value, number and "px" format string, such as "22px". When the title bar of the window is transparent (type="transparent"), with "22px" as default. When the title bar of the window is the default style (type="default"), with "27px" as default. |
| redDot | Boolean | false | Whether to display red dot, with true to display and false to hide. The default value is false. Note: The red dot will not be displayed when the superscript text is set. |
| title | String |  | The title of the return button is displayed after the return icon (font icon), and it is an empty string by default. |
| titleWeight | String | "normal" | Returns the weight of the title on the button, the possible values are: "normal" - standard font; "bold" - bold font. |

#####  Button type

When using the type value to set the style of the button, the fontSrc and text attributes will be ignored.

| Value | Instruction |
| --- | --- |
| forward | Forward button |
| back | Backward button |
| share | Sharing button |
| favorite | Favorite button |
| home | Home button |
| menu | Menu button |
| close | Close button |
| none | If there is no style, you need to set the content to be displayed on the button through the text attribute and set the font library to be used through the fontSrc attribute. |

#####  The configuration of the search box

searchInput can place a search box on the native navigation bar of titleNView. Its width automatically adapts to surrounding elements.

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| autoFocus | Boolean | false | Whether to get focus automatically? |
| align | String | center | The alignment of the text in the non-input status. Options: "left" - left-aligned; "right" – right aligned; "center" - center aligned. |
| backgroundColor | String | rgba(255,255,255,0.5) | Background color |
| borderRadius | String | 0px | The corner radius of the input box, with the value format of "XXpx", where XX is the pixel value (logical pixel), and rpx is not supported. |
| placeholder | String |  | Prompt text. |
| placeholderColor | String | #CCCCCC | Prompt text color |
| disabled | Boolean | false | Is it inputable? |

**searchInput Tips**

The life cycle of searchInput's click input box onNavigationBarSearchInputClicked, text change onNavigationBarSearchInputChanged, click search button onNavigationBarSearchInputConfirmed, etc., see the document [page life cycle](../tutorial/page.md#lifecycle).

-   Get the contents of the input box with the parameter e.text in the lifecycle. See the example in template-top navigation bar in hello Mini App for details
-   If you need to dynamically modify searchInput, or get the placehold of searchInput,

**Example of common titleNView configuration code**

Some configurations are listed below. Regarding the comprehensive navigation bar configuration, here is a perfect demonstration project that demonstrates various effects of the navigation bar.

```
{
	"pages": [{
			"path": "pages/index/index", 
			"style": {
				"app-plus": {
					"titleNView": false 
				}
			}
		}, {
			"path": "pages/log/log", 
			"style": {
				"app-plus": {
					"bounce": "none", 
					"titleNView": {
						"buttons": [ 
							{
							}
						],
						"backButton": { 
							"background": "#00FF00"
						}
					}
				}
			}
		}, {
			"path": "pages/detail/detail", 
			"style": {
				"app-plus": {
					"titleNView": {
						"type": "transparent"
					}
				}
			}
		}, {
			"path": "pages/search/search", 
			"style": {
				"app-plus": {
					"titleNView": {
						"type": "transparent",
						"searchInput": {
							"backgroundColor": "#fff",
							"borderRadius": "6px",
							"disabled": true 
						}
					}
				}
			}
		}
		...
	]
}
```

**Tips**

-   It is recommended to use the same font icons as button text. If Chinese or English characters are used, it is recommended to make the font smaller, or otherwise the length of the text will be too close to the right of the screen.
-   For the dynamic modification of buttons on the App platform
-   App platform, buttons corner logo dynamic modification. See navigation title bar-navigation bar with red dot and corner logo in hello Mini App
-   App platform, set the text dynamic modification of searchInput. Note that the text cannot be set in the disable state, and the placehold does not support dynamic settings for the time being
-   H5 platform, if you want to realize the above dynamic modification, you need to modify it through dom operation in conditional compilation.

####  Native subwindow

`subNVues` is the native subwindow of the vue page. It is used to solve the hierarchical coverage and flexible customization of native interface in vue page in App.

It's not a full screen page, it's not a component, it's a native child form. It is an nvue page, rendered using the weex engine, which provides more powerful native typesetting capabilities than cover-view and plus.nativeObj.view, which is convenient for customizing native navigation or overlaying native maps, videos, etc.

`subNVue` can also be used in the nvue page. However, it is currently not supported under pure nvue (rendered as native).

| Attribute | Type | Describe |
| --- | --- | --- |
| id | String | Identification of native subwindow |
| path | String | Configure the nvue file path, and the nvue file needs to be placed in the page file directory using subNvue |
| type | String | Native sub-form internal style. Options include: 'popup', pop-up layer; "navigationBar", navigation bar |
| style | Object | For the configuration items of the subNVue native subwindow style, please refer to the following [subNVuesStyle](./pages.md#app-subNVuesStyle) |

**Tips**

-   `id` of `subNVues` is globally unique and cannot be duplicated
-   An instance of obtaining `subNVues` through [uni.getSubNVueById('id')](../api/window/subNVues.md#app-getsubnvuebyid)
-   The `path` attribute of `subNVues` can only be `nvue` file path

#####  Native subwindow style

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| position | String | absolute | The layout position of the native subwindow determines the positioning mode of the native subwindow in the parent window. Options include: "static", the native subwindow is positioned normally in the page, and if there is a scroll bar on the page, it will scroll with the content of the window; "absolute", the native subwindow is absolutely positioned in the page. If there is a scroll bar on the page, it will not scroll with the content of the window; "dock", the native subwindow is docked in the page, and the location of the docking is determined by the value of the dock attribute. The default value is "absolute". |
| dock | String | bottom | The docking mode of the native subwindow will only take effect when the attribute value of "position" of the native subwindow is set to "dock". Options include: "top", the native subwindow will be docked at the top of the page. "bottom", the native subwindow will be docked at the bottom of the page; "right", the native subwindow will be docked on the right side of the page; "left", the native subwindow will be docked on the left side of the page. The default value is "bottom". |
| mask | HexColor | rgba(0,0,0,0.5) | The mask layer of the native subwindow is valid only when the attribute value of "type" of the native subwindow is set to "popup", and the Options include: rgba format string, which defines the style of solid color mask layer, such as "rgba(0,0,0,0.5)", means black and semitransparent; |
| width | String | 100% | The width of the native subwindow, supports percentage and pixel value, with 100% as default. When the width attribute value is not set, the left and right attribute values can be set at the same time to change the default width of the window. |
| height | String | 100% | The height of the native subwindow, supports percentage and pixel value, with 100% as default. When the height attribute value is not set, the top and bottom attribute values are used to calculate the height of the native subwindow first. |
| top | String | 0px | The vertical downward offset of the native subwindow, supporting percentage and pixel value, with 0px as default. When the top attribute value is not set, the bottom and height attribute values are used to calculate the top position of the native subwindow first. |
| bottom | String |  | The vertical upward offset of the native subwindow supports percentage and pixel values, with null as default (calculated automatically according to the top and height attribute values). Ignore this attribute value when both top and height values are set; When the height value is not set, the height of the native subwindow can be determined by the top and bottom attribute values. |
| left | String | 0px | The horizontal leftward offset of the native subwindow, supporting percentage and pixel value, with 0px as default. When the left attribute value is not set, the right and width attribute values are used to calculate the left position of the native subwindow first. |
| right | String |  | The horizontal right offset of the native subwindow, supports percentage and pixel value, with null as default (calculated automatically according to the left and width attribute values). Ignore this attribute value when left and width values are set. When the width value is not set, the width of the native subwindow can be determined by the left and bottom attribute values. |
| margin | String |  | The margin of the native subwindow is used to locate the location of the native subwindow. auto (centered) is supported. If left, right, top and bottom values are set, the corresponding margin values will be invalid. |
| zindex | Number |  | The stacking order value of the windows of the native subwindow, the window with higher stacking order is always in front of the window with lower stacking order, after the windows are set with the same stacking order and the show method is applied, the windows shall be positioned in the front. |
| background | String | #FFFFFF | The background color of the window. The "transparent" background transparent style is only supported by Android platform 4.0 or above. For example, if subnvue uses rounded corner, it needs to be set to transparent to see the correct effect |

**Code example**

```
{
	"pages": [{
		"style": {
			"app-plus": {
						"width": "50%"
					}

					"id": "popup",
					"path": "pages/index/popup",
					"style": {
						"position": "popup",
						"margin":"auto",
						"width": "150px",
						"height": "150px"
					}

					"id": "nav",
					"path": "pages/index/nav",
					"style": {
						"position": "dock",
						"height": "44px"
					}

				}]
			}
		}
	}]
}
```

####  Pull down to refresh

Under the App platform, you can customize some of the pull-down refresh configurations `page->style->app-plus->pullToRefresh`.

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| support | Boolean | false | Whether to turn on the pull-down refresh function of the window |
| color | String | #2BD009 | The color format is "#RRGGBB", which is only supported under the "circle" style to pull-down refresh. |
| style | String | Circle for Android platform and default for IOS platform. | Options include: "default" - classic pull-down refresh style (page content follows when pulling down); "circle" - circle style for pull-down refresh control (only refresh control follows when pulling down). |
| height | String |  | The window pull-down refresh control enters the pull height in the refresh state. Support percentage, such as "10%" and Pixel values, such as "50px", but not rpx. |
| range | String |  | Ranges that window can be pulled down and dragged. Support percentage, such as "10%" and Pixel values, such as "50px", but not rpx. |
| offset | String | 0px | The starting position of the pull-down refresh control. Available only for the pull-down refresh control under the "circle" style, which is used to define the starting position when the refresh control is pulled down. Support percentage, such as "10%" and Pixel values, such as "50px", but not rpx. If a non-native title is used and a native pull-down refresh is required, the circle method is generally used and the offset is adjusted to the height of the custom title |
| contentdown | Object |  | At present, one attribute is supported: caption-the caption content displayed on the pull-down refresh control when it is avaliable to refresh state by pullling down. Only valid for the "default" style pull-down refresh control. |
| contentover | Object |  | At present, one attribute is supported: caption-the caption content displayed on the pull-down refresh control when it is avaliable to refresh state by releasing. Only valid for the "default" style pull-down refresh control. |
| contentrefresh | Object |  | At present, one attribute is supported: caption-the caption content displayed on the pull-down refresh control when it is in refresh state. Only valid for the "default" style pull-down refresh control. |

**Note for use of drop-down refresh**

-   When both `enablePullDownRefresh` and `pullToRefresh->support` are set at the same time, the latter has a higher priority.
-   If you want to enable pull-to-refresh on both the app and the applet, please configure the `enablePullDownRefresh` property of the page to true.
-   If you only want to enable pull-down refresh on the App, do not configure the `enablePullDownRefresh` attribute of the page, but configure `pullToRefresh->support` to true.
-   When the native pull-down refresh is turned on, scroll-view with full screen height should not be used in the page. When the content is dragged down, the pull-down refresh will be triggered first instead of scroll-view scrolling
-   The starting position of native pull-down refresh is below the native navigation bar. If you cancel the native navigation bar and use the custom navigation bar, the location of native pull-down refresh will be at the top of the screen. If you want to pull under the custom navigation bar, you can only use the circle pull-down refresh method, and set the offset parameter to adjust the starting position of the circle below the custom navigation bar. There are examples in the extension component of hello Mini App.
-   On iOS, the default mode pull-down refresh and bounce are bound together. If bounce:none is set, the default pull-down refresh cannot be used

**Code example**

```
{
    "pages": [
        {
            "style": {
                "app-plus": {
                    "pullToRefresh": {
                        "support": true,
                        "color": "#ff3333",
                        "style": "default",
                        "contentdown": {
                        },
                        "contentover": {
                        },
                        "contentrefresh": {
                        }
                    }
                }
            }
        }
    ]
}
```

###  h5

The specific style when the configuration compiles to H5 platform

| Attribute | Type | Describe |
| --- | --- | --- |
| titleNView | Object | Navigation bar |
| pullToRefresh | Object | Pull down to refresh |

####  Navigation bar

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| backgroundColor | String | #F7F7F7 | Background color, the color value format is "#RRGGBB". |  |
| buttons | Array |  | Custom buttons, refer to [buttons](#h5-titlenview-buttons) |  |
| titleColor | String | #000000 | Title text color |  |
| titleText | String |  | Title text content |  |
| titleSize | String |  | Title text font size |  |
| type | String | default | Navigation bar style. " "default" - default style; " Transparent" - transparent gradient. |  |
| searchInput | Object |  | Search box style on the navigation bar, see: [searchInput](#h5-searchinput) | 1.6.5 |

#####  Custom button

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| type | String | none | Button style, available values: [buttons style](#app-titlenview-buttons-type) |
| color | String | The color is the same as the title text by default | Text color on the button |
| background | String | The default value is gray translucent color | The background color of the button, which is valid only when the title bar type=transparent |
| badgeText | String |  | corner marker text, displaying up to 3 characters at the button, and trimmed as ... if longer than that |
| colorPressed (temporarily not supported) | String | The default value is color attribute value automatic adjustment with the transparency of 0.3 | Text color after clicking the status button |
| float | String | right | The display position of the button on the title bar. Options include "left" and "right" |
| fontWeight | String | normal | Text thickness on the button. Options include "normal"-standard font and "bold"-bold font. |
| fontSize | String |  | Text size on the button |
| fontSrc | String |  | The font file path for the text of the button. |
| select | String | false | Whether to display the selection indicator icon (down arrow) |
| text | String |  | Text displayed on the button. When using the font icon, the unicode character representation must start with' \\u', such as "\\ue123" (please note that it cannot be coded as "\\e123"). |
| width | String | 44px | The width of the button. Options include: "\*px" - logical pixel values, for example "10px" indicates 10 logical pixel values, and rpx is not supported. The contents of the button are displayed in the center; "auto" - customize the calculated width and automatically adjust the button width according to the content |

#####  Button type

When using the type value to set the style of the button, the fontSrc and text attributes will be ignored.

| Value | Instruction |
| --- | --- |
| forward | Forward button |
| back | Backward button |
| share | Sharing button |
| favorite | Favorite button |
| home | Home button |
| menu | Menu button |
| close | Close button |
| none | If there is no style, you need to set the content to be displayed on the button through the text attribute and set the font library to be used through the fontSrc attribute. |

####  Pull down to refresh

Pull-down refresh animation on the h5 platform, and only circle type is available .

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| color | String | #2BD009 | The color format is "#RRGGBB" |
| offset | String | 0px | The starting position of the pull-down refresh control. Support percentage, such as "10%" and Pixel values, such as "50px", but not rpx. |

#####  Search box style

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| autoFocus | Boolean | false | Whether to get focus automatically? |
| align | String | center | The alignment of the text in the non-input status. Options: "left" - left-aligned; "right" – right aligned; "center" - center aligned. |
| backgroundColor | String | rgba(255,255,255,0.5) | Background color |
| borderRadius | String | 0px | The corner radius of the input box, with the value format of "XXpx", where XX is the pixel value (logical pixel), and rpx is not supported. |
| placeholder | String |  | Prompt text |
| placeholderColor | String | #CCCCCC | Prompt text color |
| disabled | Boolean | false | Is it inputable? |

**Notes:**

-   If the `h5` node is not configured, the configuration under `app-plus` will be used by default.
-   If the `h5` node is configured, the configuration under `app-plus` will be overwritten.

####  navigationBarShadow

| Attribute | Type | Describe |
| --- | --- | --- |
| colorType | String | Color of shadow. Supported options: grey, blue, green, orange, red, yellow |

##  easycom

Traditional vue components need to be installed, referenced and registered before they can be used.`easycom` Streamline it to one step. As long as the components are installed in the components directory of the project and conform to the `components/ component name/ component name.vue` directory structure. You can use it directly in the page without reference or registration. As follows:

```
<template>
	<view class="container">
		<uni-list>
		</uni-list>
	</view>
</template>
<script>
	//There is no need to introduce by import or register uni-list components in components. You can use it directly in template
	export default {
		data() {
			return {

			}
		}
	}
</script>
```

No matter how many components are installed in the components directory, `easycom` will automatically remove unused components after packaging, which is particularly friendly to the use of component library.

`easycom` is automatically turned on instead of manually. You can perform personalized settings on the `easycom` node of `pages.json` when needed, such as turning off automatic scanning, or customizing the strategy of scanning matching components. The setting parameters are as follows:

| Attribute | Type | Defaults | Describe |
| --- | --- | --- | --- |
| autoscan | Boolean | true | Whether to enable automatic scanning. After enabling, it will automatically scan components that conform to the `components/ component name/ component name.vue` directory structure |
| custom | Object | \- | Customize component matching rules in a regular way. If `autoscan` cannot meet the demand, you can use `custom` to customize the matching rules |

**Example of custom easycom configuration**

If you need to match the vue file in node\_modules, you need to use a matching rule of the form of `packageName/path/to/vue-file-$1.vue`, where `packageName` is the name of the installed package, and `/path/to/vue-file-$1.vue` is the path of the vue file in the package.

```
"easycom": {
  "autoscan": true,
  "custom": {
  }
}
```

**Instruction**

-   Components imported in the way of `easycom` can be used on any page without `import` or declaration in `components`
-   Components imported in the way of `easycom` are not introduced globally but locally. For example, only the corresponding page has been loaded on H5 before loading the corresponding components
-   Components imported in the way of `easycom` have lower priority than those imported manually (distinguish between hyphenation form and hump form), provided they have exactly the same name.
-   Considering the compilation speed, directly modifying `easycom` within `pages.json` will not trigger recompilation, but will trigger when the page content is changed.
-   `easycom` only handles vue components, not small program-specific components (such as WeChat's wxml format components). Components suffixed with .nvue are not processed. But vue components can also run on full end, including applets and app-nvue. You can refer to uni ui, use the vue suffix, and be compatible with nvue pages.
-   The components with the suffix `.vue` in the `nvue` page will use native rendering according to the nvue method, and the unsupported css will be ignored. In this case, `easycom` is also supported

##  tabBar

If the application is a multi-tab application, you can specify the first-level navigation bar and the corresponding page displayed when the tab is switched through the tabBar configuration item.

Providing tabBar configuration in pages.json is not only to facilitate rapid development and navigation, but also to improve performance on the Mini App. On these platforms, the underlying native engine can directly read the tabBar information configured in pages.json and render native tabs without waiting for the js engine to initialize at startup.

**Tips**

-   When position is set to top, icon will not be displayed
-   The list in tabBar is an array, which can only be configured with at least 2 tabs and at most 5 tabs. Tabs are sorted in the order of array.
-   tabbar switching may not render in time when it is loaded for the first time, so a waiting snowflake can pop up first in the onLoad lifecycle of each tabbar page
-   tabbar pages are displayed once and then kept in memory. Switching tabbar pages again will only trigger onShow of each page, not onLoad.

**Attribute description:**

| Attribute | Type | Required | Defaults | Describe |
| --- | --- | --- | --- | --- |
| color | HexColor | Yes |  | Default color of text on tab |  |
| selectedColor | HexColor | Yes |  | Color when the text on the tab is selected |  |
| backgroundColor | HexColor | Yes |  | tab background color |  |
| borderStyle | String | No | black | Color of top border of tabbar. Options include black and white | Other color values supported by App 2.3.4+ and H5 3.0.0+ |
| blurEffect | String | No | none | iOS Gaussian blur effect, with optional values of dark/extralight/light/none |
| list | Array | Yes |  | tab list. See the list attribute description for details, with at least 2 tabs and at most 5 tabs |  |
| <!-- | position | String | No | bottom | Optional value bottom, top | top value is only supported by WeChat applet | \--> |
| fontSize | String | No | 10px | Default text size | App 2.3.4+, H5 3.0.0+ |
| iconWidth | String | No | 24px | Default width of icon (height scales in equal proportion) | App 2.3.4+, H5 3.0.0+ |
| spacing | String | No | 3px | Spacing between icon and text | App 2.3.4+, H5 3.0.0+ |
| height | String | No | 50px | tabBar default height | App 2.3.4+, H5 3.0.0+ |
| midButton | Object | No |  | The middle button is only valid when the number of list items is even | App 2.3.4+, H5 3.0.0+ |

The list receives an array, and each item in the array is an object with the following attribute values:

| Attribute| Type| Required| |:-|:-|:-|:-| | pagePath| String| Yes| Page path, that must be defined in pages first| | | text| String| Yes| Button text on tab, optional on App and H5 platform. For example, a + icon without text can be placed in the middle| | | iconPath| String| No| Path of the image, the size of icon is limited to 40kb, and the recommended size is 81px \* 81px. For position = top, this parameter is invalid and does not support network image or font icon| | | selectedIconPath| String| No| Path of the selected image, the size of icon is limited to 40kb, and the recommended size is 81px \* 81px. For position = top, this parameter is invalid| | | visible| Boolean| No| This item is displayed or not, with displayed as default| App (3.2.10+), H5 (3.2.10)+| |iconfont|Object|No|Font icon, which takes precedence over iconPath|App (3.4.4+)|

**midButton attribute description**

| Attribute | Type | Required | Defaults | Describe |
| --- | --- | --- | --- | --- |
| width | String | No | 80px | Width of the middle button. Other items of tabBar are divided equally after subtracting this middle button width. The default value is the width which is divided equally with other items |
| height | String | No | 50px | The height of the middle button can be greater than the tabBar height to achieve the effect of middle convex |
| text | String | No |  | Text of the middle button |
| iconPath | String | No |  | Image path of the middle button |
| iconWidth | String | No | 24px | Image width (height scales in equal proportion) |
| backgroundImage | String | No |  | Background image path of the middle button |
| iconfont | Object | No |  | Font icon, which takes precedence over iconPath | App (3.4.4+) |

There is no pagePath on midButton, so you need to listen to click events and handle the behavior logic after clicking by yourself. listen to click events to call API: uni.onTabBarMidButtonTap

**iconfont parameter description:**

| property | type | description |
| --- | --- | --- |
| text | String | Font Unicode Code |
| selectedText | String | The Unicode code of the selected font |
| fontSize | String | Font icon font size (px) |
| color | String | Font icon color |
| selectedColor | String | Font icon selected color |

####  **tabbar FAQ**

-   For the js api of the tabbar, see \[Interface-Interface-tabbar\], which can realize the functions of dynamic display hiding (for example, the pop-up layer cannot the cover tabbar), content modification (for example, internationalization), item adding corner mark and so on. There are also examples in hello Mini App.
    
-   For the item click event of the tabbar, see \[onTabItemTap of the page life cycle\]
    
-   For the code to jump to the tabbar page, you can only use \[uni.switchTab\] in the api instead of uni.navigateTo or uni.redirectTo; You must set \[open-type="switchTab"\] when using the navigator component to jump
    
-   The default height of the tabbar is different on different platforms. The default height of the App side has been adjusted from 56px to 50px, which is unified with the H5 side. Developers can also set the height by themselves, back to 56px.
    
-   tabbar is simulated by div on the H5 side, which is a part of the front screen window. If you want to use the bottom localization method, you should use the css variable `--window-bottom`, such as a button floating 10px above the tabbar, the style is as follows `bottom: calc(var(--window-bottom) + 10px)`
    
-   An example of a tabbar template with a + sign in the middle. cross-platform is possible, but the + sign is not convex. If the middle convex is required, configure the midButton of tabbar.
    
-   If you need to log in first and then enter the tab page, you don't need to set the login page as the home page, the home page is still the tabbar page,
    
-   The front-end pop-up mask layer cannot block the tabbar problem, and the tabbar is dynamically hidden when the cross-end processing method is used.
    
-   On the PC widescreen, if you want to change the display position of tabbar when there are multi-window structures such as topwindow, leftwindow or rightwindow on the page, please use \[custom-tab-bar component\] configuration. If you want to hide tabbar, you can use the following css (the advantage is that it can be linked with windows such as leftwindow):
    
    ```
      .Mini App--showleftwindow + .uni-tabbar-bottom {
      	display: none;
      }
    ```
    

**Code example**

```
"tabBar": {
	"color": "#7A7E83",
	"selectedColor": "#3cc51f",
	"borderStyle": "black",
	"backgroundColor": "#ffffff",
	"list": [{
		"pagePath": "pages/component/index",
		"iconPath": "static/image/icon_component.png",
		"selectedIconPath": "static/image/icon_component_HL.png",
	}, {
		"pagePath": "pages/API/index",
		"iconPath": "static/image/icon_API.png",
		"selectedIconPath": "static/image/icon_API_HL.png",
	}]
}
```

####  Custom tabbar

Native tabBar is a relatively fixed configuration method which may not satisfy all scenarios, but involve the custom tabBar.

But note that in addition to the H5 side, the performance experience of the custom tabBar will be lower than the native tabBar. The Mini App are not necessary and should not be customized.

-   Custom tabBar component on H5 side: There is no concept of higher performance of native tabBar on H5 side, and the common tabBar in widescreen is at the top instead of the bottom.
-   Ordinary custom tabBar: tabBar drawn by developer with view. For multi-page mode, switching tabBar will not keep the bottom tabBar displayed all the time. Therefore, it is recommended to use single page mode in this case. Single-page mode. For complex page, the application performance will drop significantly. Then the page complexity needs to be reduced. If it is in the App side, the performance of nvue single page will be significantly higher than that of vue page
-   There is one and only one native tabbar on the home page. If the secondary page needs the tab, draw by developer with view.

##  condition

The startup mode configuration, which only takes effect during development, is used to simulate a direct page scenario, such as: after the applet is forwarded, the user clicks on the opened page.

**Attribute description:**

| Attribute | Type | Required or not | Describe |
| --- | --- | --- | --- |
| current | Number | Yes | The current active mode, with index values of the list node |
| list | Array | Yes | Start mode list |

**list description:**

| Attribute | Type | Required or not | Describe |
| --- | --- | --- | --- |
| name | String | Yes | Start mode name |
| path | String | Yes | Start page path |
| query | String | No | Startup parameter, available in the [onLoad](../tutorial/page.md#lifecycle) function of the page |

**Code example:**

```
	"list": [{
		},
		{
			"name": "test",
			"path": "pages/component/switch/switch"
		}
	]
}
```
