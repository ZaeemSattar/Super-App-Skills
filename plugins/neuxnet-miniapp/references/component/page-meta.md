---
title: "page-meta"
source_url: https://miniapp.neuxnet.com/component/page-meta.html
---
####  page-meta

The page attribute configuration node, used to specify some page attributes and listen to page events. It can partially replace the functions of pages.json.

In a sense, `page-meta` has a certain substitution effect on pages.json, allowing the page configuration and page content code to be written in a vue file. It can also realize the control of page configuration through variable binding. However, its performance is not as good as that of pages.json, when a new page is loaded, the rendering speed with the writing mode of pages.json is faster.

`page-meta` can only be the first node in the page.

**Attribute description**

| Properties | Type | Default Value | Required |
| --- | --- | --- | --- |
| scroll-top | string | "" | No | The scroll position can be in px or rpx. When set, the page will scroll to the corresponding position | WeChat Basic Library 2.9.0 |
| page-style | string | "" | No | The style of the page root node, the page root node is the ancestor node of all page nodes, which is equivalent to the body node in HTML | WeChat Basic Library 2.9.0, H5 2.6.7, App- vue 2.6.7 |
| root-font-size | string | "" | No | The root font size of the page, all rem units in the page, will use this font size as a reference value, that is, 1rem is equal to this font size | WeChat Basic Library 2.9.0, H5 2.6.7, App-vue 2.6.7 |
| enable-pull-down-refresh | Boolean | "" | No | Whether to enable pull-down refresh? | App 2.6.7 |

**Notice**

-   `<page-meta>` currently supports only the configurations listed in the table above, and does not support all page.json configurations
-   When `<page-meta>` conflicts with the settings of pages.json, the settings of page.json will be overwritten

####  head tag

```
<template>
  <page-meta
    :background-text-style="bgTextStyle"
    :background-color="bgColor"
    :background-color-top="bgColorTop"
    :background-color-bottom="bgColorBottom"
    :scroll-top="scrollTop"
    page-style="color: green"
    root-font-size="16px"
  >
		<head> 
			<meta name="keyword" :content="title" />
		</head>
  </page-meta>
  <view class="content">
  </view>
</template>

<script>
  export default {
    data() {
      return {
				keyword: '',
      }
    },
			this.keyword = "ServerKeyword"
		},
    onLoad() {
    },
    methods: {
    }
  }
</script>
```

####  Sample code

```
<template>
  <page-meta
    :background-text-style="bgTextStyle"
    :background-color="bgColor"
    :background-color-top="bgColorTop"
    :background-color-bottom="bgColorBottom"
    :scroll-top="scrollTop"
    page-style="color: green"
    root-font-size="16px"
  >
    <navigation-bar
      :title="nbTitle"
      :loading="nbLoading"
      :front-color="nbFrontColor"
      :background-color="nbBackgroundColor"
    />
  </page-meta>
  <view class="content">
  </view>
</template>

<script>
  export default {
    data() {
      return {
        bgTextStyle: 'dark',
        scrollTop: '200rpx',
        bgColor: '#ff0000',
        bgColorTop: '#00ff00',
        bgColorBottom: '#0000ff',
        nbLoading: false,
        nbFrontColor: '#000000',
        nbBackgroundColor: '#ffffff'
      }
    },
    onLoad() {
    },
    methods: {
    }
  }
</script>
```
