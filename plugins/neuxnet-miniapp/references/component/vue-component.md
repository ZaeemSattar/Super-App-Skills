---
title: "component"
source_url: https://miniapp.neuxnet.com/component/vue-component.html
---
###  component

Render a "meta-component" as a dynamic component. Which component is rendered depends on the value of `is`. [See details](https://cn.vuejs.org/v2/api/#component)

###  template

`<template/>` and `<block/>` are not a component but just a packaging element. They will not be rendered on the page and only accept control attributes.

`<block/>` has certain differences in performance on different platforms. It is recommended to use `<template/>` uniformly.

**Code example**

```
<template>
    <view>
        <template v-if="test">
            <view>
                test </view>
        </template>
        <template v-else>
            <view>
                test1
                </view>
        </template>
    </view>
</template>
<script>
    export default {
        data() {
            return {
				test:true
            }
        }
    }
</script> 
```

```
<template>
    <view>
        <block v-for="(item,index) in list" :key="index">
            <view>{{item}} - {{index}}</view>
        </block>
    </view>
</template>
```

###  transition

`<transition>` element serves as a transition effect of a single element/component. `<transition>` Only the transition effect will be applied to its wrapped content, without extra rendering of DOM elements. It will not appear in the component level that can be checked.

###  transition-group

`<transition-group>` element serves as a transition effect of multiple elements/components.`<transition-group>` Render a real DOM element. The default rendering is `<span>`. You can configure which element should be rendered by tag attribute.

###  keep-alive

When `<keep-alive>` wraps dynamic components, inactive component instances are cached instead of destroyed. Similar to `<transition>`, `<keep-alive>` is an abstract component that does not render a DOM element by itself, nor does it appear in the parent component chain of the component. [See details](https://cn.vuejs.org/v2/api/#keep-alive)

###  slot

`<slot>` element serves as a content distribution slot in the component template.`<slot>` The element itself will be replaced.

For detailed usage, please refer to the links of the following tutorials. [Distribute content through slots](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9)
