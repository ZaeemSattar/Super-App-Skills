---
title: "recycle-list"
source_url: https://miniapp.neuxnet.com/component/recycle-list.html
---
####  recycle-list

app side nvue specific component.

`<recycle-list>` is a new list container with the ability of recycling and reuse, which can greatly optimize memory usage and rendering perlistance. Its performance is higher than that of the list component, but its writing mode is limited. In addition to releasing the rendering resources in invisible areas, it also has more optimization on non-rendered data structures.

This component has been supported since HBuilderX 2.2.6+.

####  Sub-component

`<recycle-list>` can only use `<cell-slot>` as its direct child node, and it is invalid to use other nodes.

####  cell-slot

`<cell-slot>` represents the template of each item in the list. It is only used to describe the structure of the template and does not correspond to the actual node. `<cell-slot>` number indicates the number of template types only, and the number of real list items is determined by the data.

**Notice**

-   When `<cell-slot>` contains custom components, there are performance issues on Android
-   recycle-list runs in area scrolling, which will not trigger page scrolling, and cannot trigger the pull-down refresh configured by pages.json, onReachBottomDistance, and the transparent gradient of titleNView.

| Properties | Description |
| --- | --- |
| case | declares the type of the current template, which will only be rendered if the type in the data matches the current type. The semantics are the same as the case in the programming language. Only one item will be matched at most in all templates, which will be matched from top to bottom in the order of the templates. Once the match is successful, the next one will not be matched. |
| default | indicates that the current template is the default template type, and no value needs to be specified. If the data item does not match any case type, render with the default template. If multiple defaults exist, only the first default template will be used. |
| key | Optional attribute, used to specify a key value in the list data that can be used as a unique identifier, which can optimize rendering performance. |

-   Omission of warning attribute - If `switch` is not written, no matter if `case` or `default` is written or not, only the first template is used - If `switch` is written, either `case` or `default` must be written, otherwise the template will be ignored

Attribute

-   for Adding the for attribute to `<recycle-list>` can describe how to loop and expand the data in the list. The syntax is similar to the v-for instruction of Vue, but it loops its own internal child nodes, not the current node. Writing mode:
    -   `alias in expression`
    -   `(alias, index) in expression`
-   switch Adding the switch attribute to `<recycle-list>` can specify the field name of the area molecular template type in the data. The semantics are consistent with the switch in the programming language, and it is used together with the case and default attributes in `<cell-slot>`. If the switch attribute is omitted, only the first `<cell-slot>` will be regarded as a template, and the extra ones will be ignored.

```
<recycle-list for="(item, i) in longList" switch="type">
  <cell-slot case="A">
    <text>- A {{i}} -</text>
  </cell-slot>
  <cell-slot case="B">
    <text>- B {{i}} -</text>
  </cell-slot>
</recycle-list>
```

Note: The Android platform currently only supports placing it in the template root node, and this problem will be fixed in the future

Reusable components

Sub-components used in `<recycle-list>` will also be regarded as templates. When developing components, add recyclable attribute to `<template>` tags before they can be used in `<recycle-list>`.

```
<template recyclable>
  <div>
    <text>...</text>
  </div>
</template>
<script>
  // ...
</script>
```

> Adding recyclable attribute will not affect the function of the component itself, and it can still be used in other normal components.

Precautions

####  Binding of attribute and text

After binding to the attributes or text, only expressions are supported, but not for function call or filter. Please refer to the expressions supported by Implementation.md#.

For example, the following writing mode is not applicable:

```
<div :prop="capitalize(card.title)">
  <text>{{ card.title | capitalize }}</text>
</div>
```

For this scenario, it is recommended to use computed attribute to realize it. Because the value of the template is realized by client, and the definition of the function is at the front end (filter can be regarded as the syntactic sugar for calling the function in the template), the rendering performance will be greatly reduced if each fetching needs one communication.

####  `<slot>` unavailable

`<cell-slot>` is partially overlapped with `<slot>` in function, and is more radical. The two are in conceptual conflict and there are many boundary cases that cannot be fully supported. Do not use `<slot>` in `<cell-slot>` and its sub-components.

####  v-once will not optimize the rendering performance

Different from the understanding in the front-end framework, in order to realize the reuse logic in client, the status of template nodes will be marked. Adding v-once can ensure that the nodes are rendered only once, but it may not optimize the rendering performance. It may slow down the comparison efficiency during reusing the nodes on the client.

####  Limitations of style functionality

Program support. At present, the binding style class name (v-bind:class) is not supported in current version. Please refer to #14 for reasons and progress.

####  Two way binding

Program support. v-model has not been established, and is unavailable now.

####  Limitations of child components

There is no Virtual DOM! The component used in `<recycle-list>` does not have a Virtual DOM! Functions related Virtual DOM are also not supported. In the development process, try to process data only, and don't operate the generated nodes.

Please do not use the following attributes which no longer make sense:

-   vm.$el
-   vm.$refs.xxx
-   vm.$vnode
-   vm.#slots
-   vm.#scopedSlots

The values in `vm.$refs` may be arrays, instances of sub-components, DOM elements, which are commonly used in the front end. If they are not supported, it will also affect the functions of the `dom` module and `animation` module in Weex.

Technical solutions are currently being discussed. Some interfaces may be redesigned, or an interface specifically designed for `<recycle-list>` may be revealed on `vm`.

Component attributes. Functions are not currently supported by the attributes of the subcomponents. (The implementation scheme is under discussion now)

```
<sub-component :prop="item.xxx" />
```

Because the attribute values of the sub-components need to be passed between the front end and the client, only serializable values are supported. `item.xxx` types can be object, array, string, number, and Boolean value, etc. Functions are not supported.

Behavior differences of life cycle. Due to the recycling mechanism of list rendering, whether the nodes are rendered or not is also related to the user's scrolling behavior, so there will be some inconsistencies in the life cycle behavior of components.

Long recyclable list will not render all nodes immediately. Only start rendering when it is about to scroll into the visible area (and the scrollable safe area). The semantics of the component life cycle will not change, but be triggered delayed.

If there are 100 pieces of data, one piece of data will correspond to a component. When rendering the first screen, only 8 data nodes can be displayed. Namely, only the first 8 components are created and only their life cycles are triggered.

The `beforeCreate` and `created` of the component will only be triggered when the component is about to be created and created. Similarly, the `beforeMount` and `mounted` of a component will only be triggered when the page is actually rendered to the component, and will be triggered when it is about to be mounted or has been mounted. Component custom events Custom event plan support for components. `vm.$on` `vm.$once`, `vm.$emit`, `vm.$off` and other functions have not been fully tuned. The interface is available, but there may be some differences in behavior (missing required parameter), so do not use it temporarily.

####  Example

```
<recycle-list for="(item, i) in longList" switch="type">
  <cell-slot case="A">
    <text>- A {{i}} -</text>
  </cell-slot>
  <cell-slot case="B">
    <text>- B {{i}} -</text>
  </cell-slot>
</recycle-list>
```

If the following data is available:

```
const longList = [
  { type: 'A' },
  { type: 'B' },
  { type: 'B' },
  { type: 'A' },
  { type: 'B' }
]
```

The following equivalent nodes are generated:

```
<text>- A 0 -</text>
<text>- B 1 -</text>
<text>- B 2 -</text>
<text>- A 3 -</text>
<text>- B 4 -</text>
```

If the templates are merged into one, you can also omit `switch` and `case` to further simplify the example:

```
<recycle-list for="(item, i) in longList">
  <cell-slot>
    <text>- {{item.type}} {{i}} -</text>
  </cell-slot>
</recycle-list>
```
