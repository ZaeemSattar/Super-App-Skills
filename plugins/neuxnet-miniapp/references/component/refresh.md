---
title: "refresh"
source_url: https://miniapp.neuxnet.com/component/refresh.html
---
####  refresh

app side nvue specific component.

`<refresh>` provides a pull-down refresh function for the container. On nvue, flexible, customized and high-performance pull-down refresh can be realized with this component.

> Notice
> 
> -   `<refresh>` is a sub-component of `<scroll-view>`, `<list>`, and `<waterfall>`, which can only be rendered correctly when they are included.

```
<scroll-view>
  <refresh>
    <text>Refreshing...</text>
  </refresh>
  <view v-for="num in lists">
    <text>{{num}}</text>
  </view>
</scroll-view>
```

####  Sub-component

-   Any components such as `<text>` and `<image>` can be rendered in `<loading>`.
-   Special sub-component `<loading-indicator>`: Can only be used as a sub-component of `<refresh>` and `<loading>`, with default animation effect.

```
<refresh>
  <text>Refreshing</text>
  <loading-indicator></loading-indicator>
</refresh>
```

####  Attribute

`display` controls the display and hiding of the `<refresh>` component. The settings of `display` must appear in pairs, i.e., to set `display="show"`, there must be a corresponding `display="hide"`. The optional value is `show / hide`, and the default value is `show`.

####  Event

-   refresh event: triggered when `<scroll-view>`, `<list>`, `<waterfall>` are pulled down.
-   pullingdown event: triggered when `<scroll-view>`, `<list>`, `<waterfall>` are pulled down. The following data can be obtained from the `event` parameter object:
    -   `dy`: the difference of sliding distance between two callbacks.
    -   `pullingDistance`: pull-down distance
    -   `viewHeight`: refresh component height
    -   `type`: "pullingdown" constant string

```
<refresh @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
  <text>Refreshing ...</text>
  <loading-indicator></loading-indicator>
</refresh>
```
