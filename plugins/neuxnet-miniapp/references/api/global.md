---
title: "uniIDHasPermission"
source_url: https://miniapp.neuxnet.com/api/global.html
---
##  uniIDHasPermission

The application needs to be associated with the [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README) service space and use the [uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id) .

> You need to cache the role permissions in the token before using. Please refer to: [Cache role permissions](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)

**在模板内使用** **Use in templates**

```
<template>
  <view v-if="uniIDHasPermission('edit')">拥有编辑权限时可见</view>
</template>
```

**在页面/组件js代码中使用** **For use in page/component js codes**

```
<template>
  <view>xxx</view>
</template>
<script>
  export default {
    onLoad(){
      console.log('当前用户是否拥有编辑权限：', this.uniIDHasPermission('edit'))
    }
  }
</script>
```
