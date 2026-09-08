---
title: "Window style related APIs"
source_url: https://miniapp.neuxnet.com/api/ui/adapt.html
---
##  Window style related APIs

On the web, topWindow, LeftWindow, and RightWindow will appear on the widescreen interface.

This document lists these window-related APIs.

Get the style of the corresponding window and return a css attribute value object; Set the style of the corresponding window and pass in a css attribute value object

###  uni.getTopWindowStyle()

Get the style of topWindow

> 3.1.0 New

**Code example**

```
uni.getTopWindowStyle()
```

###  uni.getLeftWindowStyle()

Get the style of leftWindow

> 3.1.0 New

**Code example**

```
uni.getLeftWindowStyle()
```

###  uni.getRightWindowStyle()

Get the style of rightWindow

> 3.1.0 New

**Code example**

```
uni.getRightWindowStyle()
```

###  uni.setTopWindowStyle(OBJECT)

Set the style of topWindow

> 3.0.5 New

**OBJECT parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| OBJECT | Object | Css style object. Camel css attribute is required to write, {height: '100px', backgroundColor: 'red'} |

**Code example**

```
uni.setTopWindowStyle({
    height: '100px', 
    backgroundColor: 'red'
})
```

###  uni.setLeftWindowStyle(OBJECT)

Set the style of leftWindow

> 3.0.5 New

**OBJECT parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| OBJECT | Object | Css style object. Camel css attribute is required to write, {width: '500px', backgroundColor: 'blue'} |

**Code example**

```
uni.setLeftWindowStyle({
    width: '500px', 
    backgroundColor: 'blue'
})
```

###  uni.setRightWindowStyle(OBJECT)

Set the style of rightWindow

> 3.0.5 New

**OBJECT parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| OBJECT | Object | Css style object. Camel css attribute is required to write, {width: '500px', backgroundColor: 'blue'} |

**Code example**

```
uni.setRightWindowStyle({
    width: '500px', 
    backgroundColor: 'blue'
})
```
