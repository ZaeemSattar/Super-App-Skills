---
title: "uni.onWindowResize(CALLBACK)"
source_url: https://miniapp.neuxnet.com/api/ui/window.html
---
###  uni.onWindowResize(CALLBACK)

listen to window size change events

> 1.6.0 New

**CALLBACK parameter description**

| Attribute | Type | Instruction |
| --- | --- | --- |
| size | Object | The size of the changed window, in px, {windowWidth,windowHeight} |

**Code example**

```
const windowResizeCallback = (res) => {
}
uni.onWindowResize(windowResizeCallback)
```

**TIPS**

-   If the App side sets the soft keyboard pop-up mode to adjustResize, this event will be triggered when the keyboard pops up.
-   This event will be triggered when the screen is switched between portrait and landscape.

###  uni.offWindowResize(CALLBACK)

Cancel listening to window size change events

> 1.6.0 New

**Tips**

-   `CALLBACK` is the `CALLBACK` passed in when calling `uni.onWindowResize`

**Code example**

```
uni.offWindowResize(windowResizeCallback)
```
