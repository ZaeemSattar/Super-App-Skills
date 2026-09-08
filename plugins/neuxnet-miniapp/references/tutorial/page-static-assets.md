---
title: "Introduce static resources into the template"
source_url: https://miniapp.neuxnet.com/tutorial/page-static-assets.html
---
###  Introduce static resources into the template

> When introducing static resources into `template`, such as `image`, `video` and other tags of the `src` attribute, you can use a relative path or an absolute path in the form as follows

```
<!-- /static refers to the static directory under the src directory -->
<image class="logo" src="/static/logo.png"></image>
<image class="logo" src="@/static/logo.png"></image>
<!-- Relative path -->
<image class="logo" src="../../static/logo.png"></image>
```

**Notice**

-   Absolute paths and relative paths starting with `@` will be checked by base64 conversion rules
-   The imported static resources are not converted to base64 on non-h5 platforms.
-   On the H5 platform, resources smaller than 4kb will be converted to base64, and the rest will not be converted.

###  css import static resources

> When importing a `css` file in a `css` file or a `style tag` (similar to scss and less files), you can use a relative path or an absolute path

```
/* Absolute Path */
@import url('/common/uni.css');
@import url('@/common/uni.css');
/* Relative path */
@import url('../../common/uni.css');
```

**Notice**

> The image path referenced in the `css` file or the `style tag` can use a relative path or an absolute path. It should be noted that some css files on the applet side are not allowed to refer to local files (please refer to the precautions).

```
/* Absolute Path */
background-image: url(/static/logo.png);
background-image: url(@/static/logo.png);
/* Relative path */
background-image: url(../../static/logo.png);
```

**Tips**

-   For the introduction of font icons, please refer to [Font Icons](./syntax-css.md#字体图标)
-   Absolute paths and relative paths starting with `@` will be checked by base64 conversion rules
-   For h5 platform, if it is less than 4kb, it will be converted to base64, and if it exceeds 4kb, it will not be converted.
