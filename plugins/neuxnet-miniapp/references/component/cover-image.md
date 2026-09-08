---
title: "cover-image"
source_url: https://miniapp.neuxnet.com/component/cover-image.html
---
###  cover-image

Image view overlaid on native component. Overridable native components are the same as `cover-view`, support nesting in `cover-view`.

**Property description**

| property name | type | default value | description |
| --- | --- | --- | --- |
| src | String |  | The icon path. Support local path, network path. The base64 format is not supported. |  |
| @load | eventhandle |  | Triggered when the image is loaded successfully | WeChat applet 2.1.0, Jingdong applet |
| @error | eventhandle |  | Triggered when the image fails to load | WeChat applet 2.1.0, Jingdong applet |

Overridable native components on app-vue: `<video>`,`<map>`

Supported events: `click`

**Unsupported CSS**

-   position: fixed
-   opacity
-   overflow
-   padding
-   linebreak
-   white-space

Note: nvue's cover-view is not in the above restrictions, it only supports and fully supports all css of nvue.

**Tips**

-   Nesting of other components in `cover-view` and `cover-image` on the app-side vue page, including nesting `cover-view` again, can only cover `video`, `map`. App-side nvue pages do not have these restrictions since 2.1.5.
-   If `cover-image` on the App side uses a local image, you need to set the resource to release mode before packaging. Add a runmode node to app-plus in the manifest file, and set the value to liberate.
-   The App side also provides a more flexible and powerful `subNvue`, refer to [Native subform subNvue](../api/window/subNVues.md)
-   On the App side, if video and map are heavily used, nvue page is recommended.
