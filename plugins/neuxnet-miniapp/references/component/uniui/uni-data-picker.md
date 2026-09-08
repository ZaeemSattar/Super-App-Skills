---
title: "Uni data picker — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-data-picker.html
---
component name: uni-data-picker

> Code block: `uDataPicker` Associated components: `uni-data-pickerview`, `uni-load-more`.

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-data-picker)

`<uni-data-picker>` is a selection class [datacom component](https://uniapp.dcloud.net.cn/component/datacom) .

Single-column and multi-column cascade selections are supported. There is no limit to the number of columns. If the screen is not fully displayed, the top tab area will scroll left and right.

The candidate data supports one-time loading, and also supports lazy loading. For example, in the example picture, after selecting "Beijing", the district/county data of Beijing is dynamically loaded.

The `<uni-data-picker>` component is especially useful for selection classes such as address selection, category selection, etc.

`<uni-data-picker>` supports local data, cloud static data (json), and uniCloud cloud database data.

`<uni-data-picker>` can directly connect to uniCloud cloud database through JQL, supporting [DB Schema](https://uniapp.dcloud.net.cn/uniCloud/schema) , can automatically generate front-end pages in schema2code, Server-side validation is also supported.

Create new tables "uni-id-address" and "opendb-city-china" in the uniCloud data table. The schemas of these two tables are associated with foreignKey. On the table structure page of the "uni-id-address" table, use schema2code to generate the front-end page. The maintenance page for address management will be automatically generated, and addresses will be automatically selected from the information of all provinces and cities in China contained in the "opendb-city-china" table.

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   The component needs to depend on the `sass` plugin, please install it manually
-   `<uni-data-picker>` contains the popup layer component `<uni-data-pickerview>` The outer layout may affect the popup layer, \[Details\](https://developer.mozilla.org/en -CN/docs/Web/CSS/Common\_CSS\_Questions)
-   Cloud data requires associated service space
-   The table `opendb-city-china` used in the following example (the data of cities, provinces and cities in China, including Hong Kong, Macao and Taiwan), is created using opendb in the [uniCloud console](https://unicloud.dcloud.net.cn/) , [details](https://gitee.com/dcloud/opendb)

###  Cloud data

```
<template>
  <view>
    <uni-data-picker placeholder="请选择地址" popup-title="请选择城市" collection="opendb-city-china" field="code as value, name as text" orderby="value asc" :step-searh="true" self-field="code" parent-field="parent_code"
 @change="onchange" @nodeclick="onnodeclick">
    </uni-data-picker>
  </view>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      onchange(e) {
        const value = e.detail.value
      },
      onnodeclick(node) {}
    }
  }
</script>

```

###  local data

```
<template>
  <view>
    <uni-data-picker :localdata="items" popup-title="请选择班级" @change="onchange" @nodeclick="onnodeclick"></uni-data-picker>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
          text: "一年级",
          value: "1-0",
          children: [
            {
              text: "1.1班",
              value: "1-1"
            },
            {
              text: "1.2班",
              value: "1-2"
            }
          ]
        },
        {
          text: "二年级",
          value: "2-0"
        },
        {
          text: "三年级",
          value: "3-0"
        }]
      }
    },
    methods: {
      onchange(e) {
        const value = e.detail.value
      },
      onnodeclick(node) {
      }
    }
  }
</script>

```

###  Custom Solt

```
<uni-data-picker v-slot:default="{data, error, options}" popup-title="请选择所在地区">
  <view v-if="error" class="error">
    <text>{{error}}</text>
  </view>
  <view v-else-if="data.length" class="selected">
    <view v-for="(item,index) in data" :key="index" class="selected-item">
      <text>{{item.text}}</text>
    </view>
  </view>
  <view v-else>
    <text>请选择</text>
  </view>
</uni-data-picker>
```

> **Notes** When `localdata` and `collection` are configured at the same time, `localdata` takes precedence

##  API

###  DataPicker Props

| property name | type | optional value | default value | description |
| --- | --- | --- | --- | --- |
| v-model | String/ Number | \- | \- | Bind Data |
| spaceInfo | Object | \- | \- | Service space configuration, [Details](https://uniapp.dcloud.net.cn/uniCloud/init) |
| localdata | Array | \- | \- | data, [details](https://gitee.com/dcloud/datacom) |
| preload | Boolean | true/false | false | Preload data |
| readonly | Boolean | true/false | false | Disabled |
| clear-icon | Boolean | true/false | true | whether to show clear button |
| ellipsYes | Boolean | true/false | true | whether to hide the long text of the tab label |
| step-searh | Boolean | true/false | true | During step-by-step query, click the node to request data |
| step-search-url | String | \- | \- | Dynamic loading of cloud data url format during step-by-step query, `https://xxx.com/{parentValue}` (current version does not support, the next version supports) |
| self-field | String | \- | \- | Current field name during step-by-step query |
| parent-field | String | \- | \- | Parent field name during step-by-step query |
| collection | String | \- | \- | Table name. Supports input of multiple table names, separated by `,` |
| field | String | \- | \- | Query field, multiple fields are separated by `,` |
| where | String | \- | \- | Query conditions, more content, see also the jql documentation: [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery) |
| orderby | String | \- | \- | Order field and reverse order setting |
| popup-title | String |  |  | popup layer title |
| map | Object | \- | {text:'text',value:'value'} | Field mapping, map text/value to other fields in the data |

attention

The usage of `collection/where/orderby` and `<unicloud-db>` is the same, [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)

###  DataPicker Events

| EventName | Type | Description |
| --- | --- | --- |
| @change | EventHandle | Triggered when selection is complete {detail: {value}} |
| @nodeclick | EventHandle | Fired when a node is clicked |
| @stepsearch | EventHandle | Triggered before dynamically loading node data (not supported in the current version, supported in the next version) |
| @popupopened | EventHandle | Triggered when the popup layer pops up |
| @popupclosed | EventHandle | Fired when the popup layer is closed |

###  DataPicker Methods

| method name | description | parameters |
| --- | --- | --- |
| show | Open popup layer | \- |
| hide | Close the popup layer | \- |
| clear | Clear selected options | \- |

**Instructions:**

```
this.$refs.picker.show() // `picker` 为组件的 ref 名称
```

###  DataPicker Slots

| Name | Description |
| --- | --- |
| default | Override Display Box Contents |

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-data-picker) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">标签组件多用于商品分类、重点内容显示等场景。</text>
		</uni-card>
		<uni-section title="本地数据" type="line" padding style="height: calc(100vh - 100px);">
			<uni-data-picker placeholder="请选择班级" popup-title="请选择所在地区" :localdata="dataTree" v-model="classes"
				@change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened" @popupclosed="onpopupclosed">
			</uni-data-picker>
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/data-picker/data-picker)
