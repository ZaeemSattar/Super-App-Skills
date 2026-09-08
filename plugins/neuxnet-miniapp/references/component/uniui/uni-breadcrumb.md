---
title: "Uni breadcrumb — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-breadcrumb.html
---
component name: uni-breadcrumb

> Code block: `uBreadcrumb`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-breadcrumb)

Display the path of the current page and quickly return to any previous page.

##  introduce

###  Installation method

This component complies with the [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) specification. From `HBuilderX 2.5.5`, you only need to import this component into the project, and in the page `template` Can be used directly without `import` and registering `components` in the page.

If you want to use the `uni-ui` component through `npm`, see also the documentation: \[https://ext.dcloud.net.cn/plugin?id=55\](https://ext.dcloud.net.cn /plugin?id=55)

###  Basic usage

Using components in `template`

```
<uni-breadcrumb separator="/">
  <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
    {{route.name}}
  </uni-breadcrumb-item>
</uni-breadcrumb>
```

```
export default {
  name: "uni-stat-breadcrumb",
  data() {
    return {
      routes: [
        {
          to: "/A",
          name: "A页面",
        },
        {
          to: "/B",
          name: "B页面",
        },
        {
          to: "/C",
          name: "C页面",
        },
      ],
    };
  },
};
```

##  API

###  Breadcrumb Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| separator | String | slash '/' | separator |
| separatorClass | String |  | Icon separator class |

###  Breadcrumb Item Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| to | String |  | Route jump page path |
| replace | Boolean |  | When using to for routing jumps, enabling replace will not add new records to history (only h5 support) |

##  example

attention

Copying the sample code directly will not work. The sample relies on multiple components such as `uni-card` `uni-section` `uni-scss`.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-breadcrumb) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

```
<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6"
        >面包屑导航显示当前页面的路径，快速返回之前的任意可跳转页面</text
      >
    </uni-card>
    <uni-section title="基础用法" type="line" padding>
      <uni-breadcrumb separator="/">
        <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
          {{route.name}}
        </uni-breadcrumb-item>
      </uni-breadcrumb>
    </uni-section>
    <uni-section title="自定义分隔符" type="line" padding>
      <uni-breadcrumb separator=">">
        <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
          {{route.name}}
        </uni-breadcrumb-item>
      </uni-breadcrumb>
    </uni-section>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        routes: [
          {
            to: "/pages/index/index",
            name: "首页",
          },
          {
            to: "",
            name: "菜单 A",
          },
          {
            to: "",
            name: "菜单 B",
          },
        ],
      };
    },
  };
</script>

<style lang="scss"></style>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/breadcrumb/breadcrumb)
