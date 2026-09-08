---
title: "uni.createSelectorQuery()"
source_url: https://miniapp.neuxnet.com/api/ui/nodes-info.html
---
##  uni.createSelectorQuery()

Return a `SelectorQuery` object instance. On this instance, methods such as `select` can be used to select nodes and methods such as `boundingClientRect` can be used to select information to be queried.

**Tips:**

-   `uni.createSelectorQuery()` can only be called for use after the life cycle is `mounted`.
-   The `selectorQuery.in` method is required by default.

##  SelectorQuery

Object to query node information

###  selectorQuery.in(component)

Change the selection range of the selector to within the custom component `component` and return a `SelectorQuery` object instance. (Initially, the selector only selects nodes in the page range, and does not select nodes in any custom components).

**Code example**

```
const query = uni.createSelectorQuery().in(this);
query.select('#id').boundingClientRect(data => {
}).exec();
```

**Notice**

-   Alipay applet does not support in(component), use it without effect

###  selectorQuery.select(selector)

Select the node of the first match selector `selector` on the current page, and return a `NodesRef` object instance that can be used to get node information.

**selector description:**

`selector` is similar to a CSS selector, but only the following syntax is supported.

-   ID selector: `#the-id`
-   class selector (you can specify more than one in a row): `.a-class.another-class`
-   Child element selector: `.the-parent > .the-child`
-   Descendant selector: `.the-ancestor .the-descendant`
-   Descendant selectors across custom components: `.the-ancestor >>> .the-descendant`
-   Union of multiple selectors: `#a-node, .some-other-nodes`

###  selectorQuery.selectAll(selector)

Select all nodes of the match selector `selector` on the current page, and return a `NodesRef` object instance that can be used to get node information.

###  selectorQuery.selectViewport()

Select the display area to get information such as the size and scrolling location of the display area, and return a `NodesRef` object instance.

###  selectorQuery.exec(callback)

Perform all requests. The results of the requests form an array in the order of requests and are returned in the first parameter of callback.

##  NodesRef

Object used to obtain node information

###  nodesRef.fields(object,callback)

Obtain information about the nodes. The first parameter is node related information configuration (required); The second parameter is the callback function of the method, and the parameter is the specified related node information.

**object parameter description**

| Field name | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| id | Boolean | false | No | Whether to return the node `id` |  |
| dataset | Boolean | false | No | return node `dataset` | App, WeChat applet, H5 |
| rect | Boolean | false | No | Whether to return the node layout location (`left` `right` `top` `bottom`) |  |
| size | Boolean | false | No | Whether to return the node size (`width` `height`) |  |
| scrollOffset | Boolean | false | No | Whether to return `scrollLeft` `scrollTop` of the node, and the node must be `scroll-view` or `viewport` |  |
| properties | Array < string > | \[\] | No | Specify a list of property names, and return the current property value of the property name corresponding to the node (only the general property values marked in the component document, id class style and event binding property values can be obtained Not available) | App and WeChat applet only support |
| computedStyle | Array< string > | \[\] | No | Specify a list of style names and return the current value of the style name corresponding to the node | Only supported by App and WeChat applet |
| context | Boolean | false | No | Whether to return the Context object corresponding to the node | Only supported by App and WeChat applet |

###  nodesRef.boundingClientRect(callback)

Add a query request for the layout position of the node. Relative to the display area, in pixels. Its function is similar to DOM's `getBoundingClientRect`. Return `SelectorQuery` corresponding to `NodesRef`.

**callback return parameter**

| Attribute | Type | Instruction |
| --- | --- | --- |
| id | String | Node ID |
| dataset | Object | dataset of nodes |
| left | Number | Coordinates of the left boundary of the node |
| right | Number | Coordinates of the right boundary of the node |
| top | Number | Coordinates of the upper boundary of the node |
| bottom | Number | Coordinates of the lower boundary of the node |
| width | Number | Node width |
| height | Number | Node height |

###  nodesRef.scrollOffset(callback)

Add a query request for the scroll position of the node. In pixels. The node must be `scroll-view` or `viewport`. Return `SelectorQuery` corresponding to `NodesRef`.

**callback return parameter**

| Attribute | Type | Instruction |
| --- | --- | --- |
| id | String | Node ID |
| dataset | Object | dataset of nodes |
| scrollLeft | Number | Horizontal scrolling location of the node |
| scrollTop | Number | Vertical scroll location of the node |

###  nodesRef.context(callback)

Add a query request for the Context object of the node. Support the access of [`VideoContext`](../media/video-context.md), [`CanvasContext`](../canvas/CanvasContext.md), and [`MapContext`](../location/map.md).

**callback return parameter**

| Attribute | Type | Instruction |
| --- | --- | --- |
| context | Object | Context object corresponding to the node |

###  nodesRef.node(callback)

Get the `Node` node instance. Currently supports fetching of `Canvas`.

**callback return parameter**

| Attribute | Type | Instruction |
| --- | --- | --- |
| node | Object | Node instance corresponding to the node |

**Notice**

-   Currently only works with `canvas`
-   `canvas` needs to be set with `type="webgl"` for normal use

###  Code example

```
uni.createSelectorQuery().selectViewport().scrollOffset(res => {
}).exec();

let view = uni.createSelectorQuery().in(this).select(".test");

view.fields({
  size: true,
  scrollOffset: true
}, data => {
}).exec();

view.boundingClientRect(data => {
}).exec();
```

**Notice**

-   nvue temporarily does not support uni.createSelectorQuery, and the following plan is used temporarily.

````
<template>
  <view class="wrapper">
    <view ref="box" class="box">
      <text class="info">Width: {{size.width}}</text>
      <text class="info">Height: {{size.height}}</text>
      <text class="info">Top: {{size.top}}</text>
      <text class="info">Bottom: {{size.bottom}}</text>
      <text class="info">Left: {{size.left}}</text>
      <text class="info">Right: {{size.right}}</text>
    </view>
  </view>
</template>

```javascript
<script>
  // #ifdef APP-NVUE
  const dom = weex.requireModule('dom')
  // #endif

  export default {
    data () {
      return {
        size: {
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    },
    onReady() {
    	 setTimeout(()=> {
	        const result = dom.getComponentRect(this.$refs.box, option => {
		    console.log('getComponentRect:', option)
		    this.size = option.size
		})
		console.log('return value:', result)
		console.log('viewport:', dom.getComponentRect('viewport'))
	 }, 100);
     }
  }
</script>
````
