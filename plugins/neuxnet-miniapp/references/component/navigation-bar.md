---
title: "navigation-bar"
source_url: https://miniapp.neuxnet.com/component/navigation-bar.html
---
####  navigation-bar

The page navigation bar configuration node is used to specify some attributes of the navigation bar.

**Attribute description**

| property | type | default value | required | description |
| --- | --- | --- | --- | --- |
| title | string |  | No | Navigation bar title | WeChat Basic Library 2.9.0 |
| title-icon | string |  | No | Title icon, icon path such as "./img/t.png", only supports local file path, relative path, relative to the host position of the current page, fixed width and height are logical pixel values "34px". The images are required to be the same width and height. Note: After setting the title icon, the title will be displayed on the left. | App 2.6.7+ |
| title-icon-radius | string | No rounded corners | No | Title icon rounded corners, the value format is "XXpx", where XX is the pixel value (logical pixel), such as "10px" means 10 pixel radius rounded corners. | App 2.6.7+ |
| subtitle-text | string |  | No | Subtitle text content, after setting the subtitle, two lines of titles will be displayed, and the subtitle will be displayed below the main title (titleText). Note: After setting the subtitle, it will be displayed on the left | App 2.6.7+ |
| subtitle-size | string | "auto" | No | Subtitle text font size, the font size unit is pixels, such as "14px" means the font size is 14 pixels, the default value is 12 pixels. | App 2.6.7+ |
| subtitle-color | string |  | No | Subtitle text color, the color value format is "#RRGGBB" and "rgba(R,G,B,A)", such as "#FF0000" means the title text color is red. The default value is the same as the main title text color | App 2.6.7+ |
| subtitle-overflow | string | "ellipsis" | No | The processing method when the title text exceeds the display area, the possible values are: "clip" - the content is clipped when it exceeds the display area; ...). | App 2.6.7+ |
| title-align | string | "auto" | No | Available values: "center" - center alignment; "left" - left alignment; "auto" - automatically selected according to the platform (Android platform is left-aligned, iOS platform is center-aligned) | App 2.6.7+ |
| background-image | string |  | No | The following types are supported: Background image path - such as "./img/t.png", only supports local file path, relative path, relative to the host location of the current page, according to the actual title bar Width and height stretched drawing; Gradient color - only supports linear gradient, two-color gradient, such as "linear-gradient(to top, #a80077, #66ff00)", where the first parameter is the gradient direction, which can take values: "to right" means gradient from left to right, "to left" means gradient from right to left, "to bottom" means gradient from top to bottom, "to top" means gradient from bottom to top, "to bottom right" means gradient From the upper left corner to the lower right corner, "to top left" means from the lower right corner to the upper left corner | App 2.6.7+ |
| background-repeat | string |  | no | Only valid when backgroundImage is set to image path. Possible values: "repeat" - the background image is tiled vertically and horizontally; "repeat-x" - the background image is tiled horizontally and stretched vertically; "repeat-y" - the background image is flattened vertically Pave, stretch horizontally; "no-repeat" - the background image is stretched both vertically and horizontally. Use "no-repeat" by default | App 2.6.7+ |
| blur-effect | string | "none" | no | This effect will Gaussian blur to show the content behind the title bar, only available when type is "transparent" or "float". Possible values: "dark" - dark style blur, corresponding to iOS native UIBlurEffectStyleDark effect; "extralight" - highlight style blur, corresponding to iOS native UIBlurEffectStyleExtraLight effect; "light" - light style blur, corresponding to iOS native UIBlurEffectStyleLight effect; "none" - No blur effect. Note: Avoid setting the background color when using the blur effect, setting the background color may override the blur effect. | App 2.6.7+ |
| loading | string | false | No | Whether to display the loading prompt in the navigation bar | WeChat Basic Library 2.9.0 |
| front-color | string |  | No | Navigation bar foreground color value, including button, title, status bar color, only supports #ffffff and #000000 | WeChat Basic Library 2.9.0 |
| background-color | string |  | No | Navigation bar background color value, valid value is hexadecimal color | WeChat Basic Library 2.9.0 |
| color-animation-duration | number | 0 | No | The animation duration when changing the color of the navigation bar, the default is 0 (that is, no animation effect) | WeChat Basic Library 2.9.0 |
| color-animation-timing-func | string | "linear" | No | The animation mode when changing the color of the navigation bar, supports linear , easeIn , easeOut and easeInOut | WeChat Basic Library 2.9.0 |

Attribute description [/collocation/pages?id=app-titlenview](../collocation/pages.md#app-titlenview)

**Notice**

-   `navigation-bar` currently supports only the configurations listed in the table above, and does not support all the configurations of the navigation bar in page.json
-   When `navigation-bar` conflicts with the settings of pages.json, the settings of page.json will be overwritten

####  Sample code

```
<template>
  <page-meta>
    <navigation-bar
      :title="nbTitle"
      :title-icon="titleIcon"
      :title-icon-radius="titleIconRadius"
      :subtitle-text="subtitleText"
      :subtitle-color="nbFrontColor"
      :loading="nbLoading"
      :front-color="nbFrontColor"
      :background-color="nbBackgroundColor"
      :color-animation-duration="2000"
      color-animation-timing-func="easeIn"
    />
  </page-meta>
  <view class="content"></view>
</template>

<script>
  export default {
    data() {
      return {
        nbTitle: '',
        titleIcon: '/static/logo.png',
        titleIconRadius: '20px',
        subtitleText: 'subtitleText',
        nbLoading: false,
        nbFrontColor: '#000000',
        nbBackgroundColor: '#ffffff'
      }
    },
    onLoad() {
    },
    methods: {
    }
  }
</script>
```
