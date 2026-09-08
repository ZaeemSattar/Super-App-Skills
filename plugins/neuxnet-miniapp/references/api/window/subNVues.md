---
title: "uni.getSubNVueById(subNvueId)"
source_url: https://miniapp.neuxnet.com/api/window/subNVues.html
---
subNvue, the native subwindow of vue page, covers the native interface rendered by weex as a sub-subwindow of vue page on the page. It is not a full-screen page. It provides a more powerful and flexible solution for hierarchical coverage and native interface custom in the vue page of App platform. It is just a native subwindow, not a component.

> subNvue only supported since 1.9.10 on app platform

###  uni.getSubNVueById(subNvueId)

An instance of obtaining the `subNVues` native subwindow by `ID`. [subNVues configuration](../../collocation/pages.md#app-subNVues)

| Parameter | Type | Instruction |
| --- | --- | --- |
| subNvueId | String | ID of the native subwindow |

**Code example**

```
const subNVue = uni.getSubNVueById('popup');
```

####  Return value

Return a [subNVue](./subNVues.md#subnvue) object

###  uni.getCurrentSubNVue()

An instance of obtaining the current `subNVues` native subwindow in the nvue page code of a subnvue window.

**Examples of codes (remember execute is in the nvue page)**

```
const subNVue = uni.getCurrentSubNVue();
```

####  Return value

Return a [subNVue](./subNVues.md#subnvue) object

####  Method list of subNVue object

| Method | Instruction |
| --- | --- |
| show | Display native subwindow |
| hide | Hide native subwindow |
| setStyle | Set the style of the native subwindow |

###  subNVue.show (aniShow,duration,showedCB)

Display native subwindow

| Parameter | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| aniShow | String | auto | Display the animation effect of the native subwindow. If the window animation type is not specified, the default value of "auto" will be used, i.e., the animation effect of the last displayed window will be automatically selected. If it has not been displayed before, the animation effect of "none" will be used. [See animation type for details](./subNVues.md#%E5%8A%A8%E7%94%BB%E7%B1%BB%E5%9E%8B) |
| duration | Number | 600 | Display the animation duration of the native subwindow, in ms. If it is not set, the default window animation time will be 600 ms. |
| showedCB | Function |  | Display the finished callback function. The displayed callback function will be triggered when the specified native subwindow display animation is finished, and this callback will also be triggered when the window has no animation effect (such as "none" animation effect). |

**Code example**

```
subNVue.show('slide-in-left',200,()=>{
})
```

###  subNVue.hide (aniShow,duration)

Hide native subwindow

| Parameter | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| aniShow | String | auto | Hide the animation effect of the native subwindow. If the window animation type is not specified, the default value of "auto" will be used, i.e., the animation effect of the last displayed window will be automatically selected. If it has not been displayed before, the animation effect of "none" will be used. [See animation type for details](./subNVues.md#%E5%8A%A8%E7%94%BB%E7%B1%BB%E5%9E%8B) |
| duration | Number | 600 | Hide the animation duration of the native subwindow, in ms. If it is not set, the default window animation time will be 600 ms. |

**Code example**

```
subNVue.hide('slide-out-left',200);
```

###  subNVue.setStyle (style)

Set the style of the native subwindow

| Parameter | Type | Instruction |
| --- | --- | --- |
| style | Object | Style of the native subwindow |

**Style of the native subwindow**

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

**Code example**

```

subNVue.setStyle({
	"width": "50%",
	"height": "50%",
	"left":"20px",
	"top":"100px"
})
```

###  subNVue.postMessage(OBJECT)

Send messages, this communication method is outdated, please use `uni.$emit` for communication. [Refer to](https://miniapp.neuxnet.com/collocation/frame/communication#emit)

**Code example**

```

const subNVue = uni.getSubNVueById('subNvue');
subNvue.postMessage({
	id:'1'
	name:'subNvues'
})
```

###  subNVue.onMessage(CallBack)

listen to messages, this communication method is outdated, please use `uni.$on` for communication. [Refer to](https://miniapp.neuxnet.com/collocation/frame/communication#on)

**Code example**

```

const subNVue = uni.getSubNVueById('subNvue');
subNvue.onMessage(function(data){
})
```

###  Animation type

There will be default corresponding rules for turning on/off the animation. However, if the closing animation type of the native subwindow is generated through API, the default type will not be used.

| Show animation | Close animation | Description of animation on (animation off on the contrary) |
| --- | --- | --- |
| slide-in-right | slide-out-right | The new window enters from the right |
| slide-in-left | slide-out-left | The new window enters from the left |
| slide-in-top | slide-out-top | The new window enters from the top |
| slide-in-bottom | slide-out-bottom | The new window enters from the bottom |
| fade-in | fade-out | The new window is gradually displayed from transparent to opaque |
| zoom-out | zoom-in | The new window is scaled from small to large. |
| zoom-fade-out | zoom-fade-in | The new window is gradually enlarged from small to large and gradually displayed from transparent to opaque. |
| pop-in | pop-out | The new window enters from the left to squeeze out the old window |
| none | none | No animation |

For detailed window animation instructions, please refer to:

-   Window display animation: [AnimationTypeShow](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeShow)
-   Window closing animation: [AnimationTypeClose](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeClose)

**Precautions**

-   To learn more about the purpose of `subNVue` native subwindows
-   In the port-interface-native child list of hello Mini App, there are complete examples of subNVue, including native navigation bar with gradient color, sideslip menu that can cover the map, popup that can pop out from the top, and message list that can scroll on the video
-   Each `subNVue` page must be registered in pages.json. If a global pop-up window is needed, you can also pop up the nvue page directly
-   `subNVue` is more powerful than cover-view and plus.nativeObj.view, and it also takes up more memory. In order to ensure a better performance experience, one vue page should not load too many `subNVue` sub-forms, it is recommended to control it in three within
