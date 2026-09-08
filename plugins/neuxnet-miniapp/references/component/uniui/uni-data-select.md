---
title: "Uni data select — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-data-select.html
---
component name: uni-data-select

> Code block: `uDataSelect`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-data-select)

When there are too many options, use the drop-down menu to display and select content

##  introduce

Problems to be solved by this component include:

1.  Data-bound component: Bind a data to this component, and a set of candidate content will be automatically rendered. In the past, developers need to write a lot of code to achieve similar functions
2.  Automatic form verification: The component is bound with data and conforms to the form verification specification of the [uni-forms](https://ext.dcloud.net.cn/plugin?id=2773) component. Automatically implement form validation

In the development of uniCloud, after configuring the enum enumeration and other types in `DB Schema`, in the [Auto Generate Form](https://uniapp.dcloud.io/uniCloud/schema?id=autocode) function of the web console , will automatically generate the `uni-data-select` component and bind the data

> **Notes** In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
> 
> -   The component needs to depend on the `sass` plugin, please install it manually
> -   This component is data-driven and aims to be put into use quickly. It can only override limited styles through style, and does not support customizing more styles
> -   If you have any problems during use, or you have some good suggestions for uni-ui, welcome to join the uni-ui exchange group: 871950839
> -   The component supports nvue , you need to configure `"nvueStyleCompiler" : "uni-app"` under the `manifest.json > app-plus` node
> -   If there is a problem with the component display, please upgrade `HBuilderX` to `v3.1.0` or above

###  Installation method

This component complies with the [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) specification. From `HBuilderX 2.5.5`, you only need to import this component into the project, in the page `template` Can be used directly without `import` and registering `components` in the page.

If you need to use the `uni-ui` component through `npm`, please refer to the separate document: \[https://ext.dcloud.net.cn/plugin?id=55\](https://ext.dcloud.net.cn/ plugin?id=55)

###  Basic usage

After setting the `localdata` attribute, the component will render the corresponding content through the data

```
<template>
  <view>
    <uni-data-select
      v-model="value"
      :localdata="range"
      @change="change"
    ></uni-data-select>
  </view>
</template>
```

```
export default {
  data() {
    return {
      value: 0,
      range: [
        { value: 0, text: "篮球" },
        { value: 1, text: "足球" },
        { value: 2, text: "游泳" },
      ],
    };
  },
  methods: {
    change(e) {
      console.log("e:", e);
    },
  },
};
```

###  Cloud data example

```
<template>
  <view>
    <!-- Cloud data -->
    <uni-data-select
      collection="opendb-app-list"
      field="appid as value, name as text"
      label="应用选择"
      v-model="appid"
      :clear="false"
    />
  </view>
</template>
```

##  API

###  DataSelect Props

| property name | type | optional value | default value | description |
| --- | --- | --- | --- | --- |
| value/v-model | String/Number | \- | \- | value of selected data |
| localdata | Array | \- | \- | local rendering data |
| clear | Boolean | \- | \- | Whether to clear the selected options |
| label | String |  |  | Left title |
| placeholder | String | \- | Please select | Prompt text for input box |
| emptyText | String | \- | No data | Text displayed when there is no data, local data is invalid |

####  DataCom Props

More attributes supported by DataCom \[more\](https://uniapp.dcloud.net.cn/component/datacom.html#%E8%AF%AD%E6%B3%95%E6%89%8B%E5 %86%8C)

####  Localdata Options

The format of the `localdata` attribute is an array, and each item in the array is an object, which needs to strictly follow the following format

| attribute name | description |
| --- | --- |
| text | Display text |
| value | Selected value |
| disable | Whether to disable |

###  DataSelect Events

| Event name | Event description | Return parameter |
| --- | --- | --- |
| @change | Trigger an event when the selected state changes | \- |

##  Example

attention

Copying the sample code directly will not work. The sample relies on multiple components such as `uni-card` `uni-section` `uni-scss`.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-data-select) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

```
<template>
  <view>
    <uni-card is-full>
      <text class="uni-h6"
        >通过数据驱动的单选框和复选框，可直接通过连接 uniCloud
        获取数据，同时可以配合表单组件 uni-forms 使用</text
      >
    </uni-card>
    <uni-section title="本地数据" type="line">
      <uni-data-select
        v-model="value"
        :localdata="range"
        @change="change"
      ></uni-data-select>
    </uni-section>
    <uni-section
      title="云端数据"
      subTitle="连接云服务空间, 且存在相关的数据表才能生效(此处演示, 未连接云服务空间, 故不生效, 且有报错)"
      type="line"
    >
      <uni-data-select
        collection="opendb-app-list"
        field="appid as value, name as text"
        v-mode="value"
      />
    </uni-section>
    <uni-section title="是否可清除已选项" type="line">
      <uni-data-select
        v-model="value"
        :localdata="range"
        @change="change"
        :clear="false"
      ></uni-data-select>
    </uni-section>
    <uni-section title="配置左侧标题" type="line">
      <uni-data-select
        v-model="value"
        :localdata="range"
        @change="change"
        label="应用选择"
      ></uni-data-select>
    </uni-section>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        value: 0,
        range: [
          { value: 0, text: "篮球" },
          { value: 1, text: "足球" },
          { value: 2, text: "游泳" },
        ],
      };
    },
    methods: {
      change(e) {
        console.log("e:", e);
      },
    },
  };
</script>

<style lang="scss">
  .text {
    font-size: 12px;
    color: #666;
    margin-top: 5px;
  }

  .uni-px-5 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .uni-pb-5 {
    padding-bottom: 10px;
  }
</style>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/data-select/data-select)
