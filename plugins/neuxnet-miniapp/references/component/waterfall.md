---
title: "waterfall"
source_url: https://miniapp.neuxnet.com/component/waterfall.html
---
####  waterfall

app side nvue specific component.

The `<waterfall>` component is the core component that provides the waterfall layout. Waterfall flow, also known as waterfall flow layout, is a relatively popular page layout, and the visual performance is a jagged multi-column layout. This layout also continuously loads chunks of data and appends to the current tail as the page scroll bar scrolls down.

In nvue, using ordinary view as waterfall flow cannot achieve reuse and release of invisible rendering resources. After using the `<waterfall>` component and specifying `cell`, the native engine will automatically optimize the performance.

```
<template>
  <waterfall column-count="2" column-width="auto">
    <cell v-for="num in lists" >
      <text>{{num}}</text>
    </cell>
  </waterfall>
</template>
<script>
  export default {
    data () {
      return {
        lists: ['A', 'B', 'C', 'D', 'E']
      }
    }
  }
</script>

<style></style>
```

####  Sub-component

Similar to the `<list>` component, the sub-components of the `<waterfall>` component can only include the following four components or fixed components, and other forms of components will not be rendered correctly.

-   `<cell>`: Used to define the sub-list items in the list, similar to the ul to li in HTML.`<waterfall>` Efficient memory reclamation will be performed on `<cell>` to achieve better performance.
-   `<header>`: When `<header>` reaches the top of the screen, it snaps to the top of the screen.
-   `<refresh>`: Used to add a pull-down refresh function to the list.
-   `<loading>`: The usage and features of `<loading>` are similar to those of `<refresh>`, which are used to add pull-ups and load more functions to the list. ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/e6b5dbe0-4f2e-11eb-97b7-0dc4655d6e68.png)

####  Attribute

-   show-scrollbar: The optional values of `[Optional]` are true/false, and the default value is true. Control whether scroll bars appear.
-   column-count: `[Optional]` describes the number of columns in the waterfall flow
    -   auto: It means that the number of columns is determined by other attributes (such as column-width)
    -   `<integer>`: Optimal number of columns. If both column-width and column-count are specified as non-zero values, then column-count represents the maximum number of columns.
-   column-width: `[Optional]` describes the column width of each column of the waterfall flow
    -   `auto`: means that the column width is determined by other attributes (such as column-count)
    -   `<length>`: Optimal column width. The actual column width may be wider (the remaining space needs to be filled) or narrower (if the remaining space is smaller than the column width). The value must be greater than 0
-   column-gap: \[Optional\] Column-to-column gap. If `normal` is specified, it corresponds to 32.
-   left-gap: \[Optional\] Gap between the left cell and the list. If not specified, it corresponds to `0`
-   right-gap: \[Optional\] Gap between the right cell and the list. If it is not specified, it corresponds to `0` ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/e78b5450-4f2e-11eb-b680-7980c8a877b8.png)
-   always-scrollable-vertical : `[Optional]` The optional value is true/false, the default value is false, iOS platform, when the content is less than one screen and cannot trigger the pull-down refresh, it needs to be set to true, because the default subview height does not exceed The waterfall cannot slide when the parent view is high

See the `<list>` component attributes section for other supported attributes

####  Event

All generic events are supported:

-   click: used to listen to click events. (For example: it is generally bound to sub-components to trigger a jump).
-   longpress: used to listen to long-press events (generally bound to sub-components. For example, long press to delete).
-   appear: used to listen to the occurrence of sub-component events (generally bound to sub-components. For example, listen to the occurrence of the last element and load new data)
-   disappear: used to listen to the event that the child component slides out of the screen (generally bound to sub-components)

**Notice**

-   waterfall runs in area scrolling, which will not trigger page scrolling, and cannot trigger the pull-down refresh configured by pages.json, onReachBottomDistance, and the transparent gradient of titleNView.
