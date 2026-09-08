---
title: "cell"
source_url: https://miniapp.neuxnet.com/component/cell.html
---
####  cell

app side nvue specific component. Its important value lies in letting the native engine know which parts are reusable.

`<cell>` cell must exist in `list recycler waterfall` as a first-level sub-component.

####  Sub-component

Cell supports adding any type of component as its own sub-component, but please don't add scroll containers to the inner content.

####  Attribute

-   insert-animation string, the insertion animation of cell. Currently, only `none` and `default` are supported.
    
-   delete-animation string, the delete animation of cell. Currently, only `none` and `default` are supported.
    
-   recycle boolean, with true as default. This attribute controls whether the view and sub-views of this Cell are reused when the list is scrolled. It is normally specified as true on iOS (for the default is true, it is generally unnecessary to write this attribute). If it is set to false, the page will occupy very high memory as the list scrolls. On Android, the default is true, and setting it to false can prevent data rebinding on Image and Text.
    

####  Style

-   Universal style.

> TIP
> 
> -   Do not specify the `flex` value of `<cell>`. The width of Cell is determined by its parent container, and there is no need to specify its height.
> -   The layout location of Cell is controlled by the parent container, so generally do not specify the `margin` style for it

####  Event

-   General events.
