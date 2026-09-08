---
title: "Uni tooltip — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-tooltip.html
---
Component name: uni-tooltip

> Code block: `utooltip`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-tooltip)

It is often used to display the prompt information when the mouse hovers.

> Can't block native components

##  introduce

###  Installation method

This component complies with the [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) specification. From `HBuilderX 2.5.5`, you only need to import this component into the project, and in the page `template` Can be used directly without `import` and registering `components` in the page.

If you want to use the `uni-ui` component through `npm`, see also the documentation: \[https://ext.dcloud.net.cn/plugin?id=55\](https://ext.dcloud.net.cn /plugin?id=55)

###  Basic usage

Using components in `template`

```
<uni-tooltip :content="tooltip显示的内容">
  <button>被包裹的组件</button>
</uni-tooltip>
```

##  API

###  Tooltip Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| content | String |  | The content displayed by the popup layer |
| placement | String | left | Tooltip's appearance position, currently only supports left |

###  Tooltip Slots

| Name | Description |
| --- | --- |
| default | Component wrapped by Tooltip |
| content | Popup slot |

##  Example

attention

Copying the sample code directly will not work. The sample relies on multiple components such as `uni-card` `uni-section` `uni-scss`.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-tooltip) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

```
<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">常用于展示鼠标 hover 时的提示信息，注意：无法覆盖原生组件</text>
    </uni-card>
    <uni-section title="基础用法" type="line" padding>
      <uni-tooltip content="提示文字" />
    </uni-section>
    <uni-section title="插槽用法" type="line" padding>
      <uni-tooltip content="提示文字">一段文字</uni-tooltip>
    </uni-section>
    <uni-section title="自定义弹层宽度" type="line" padding>
      <uni-tooltip content="提示文字">一段文字</uni-tooltip>
    </uni-section>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
  };
</script>

<style lang="scss"></style>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/tooltip/tooltip)
