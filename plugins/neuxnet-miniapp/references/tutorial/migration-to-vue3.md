---
title: "main.js"
source_url: https://miniapp.neuxnet.com/tutorial/migration-to-vue3.html
---
The following are the points that must be adapted for migration to vue3, so that the vue2 project can run normally on vue3. For more inlistation, see the complete [List of non-compatible features](https://github.com/vuejs/vue-next/tree/master/packages/vue-compat#incompatible)

##  main.js

Create an application instance

Vue2

Vue3

```
// Nomae - Vue 2
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false    // vue3 不再需要
App.mpType = 'app'    // vue3 不再需要
const app = new Vue({
...App
})
app.$mount()
```

##  global properties

For example: global network request

```
// Nomae - Vue 2
Vue.prototype.$http = () => {};

// after - Vue 3
const app = createApp({});
app.config.globalProperties.$http = () => {};
```

##  plugin usage

For example: store using vuex

```
// Nomae - Vue 2
import store from "./store";
Vue.prototype.$store = store;

// after - Vue 3
import store from "./store";
const app = createApp(App);
app.use(store);
```

##  The project root directory must create an index.html file

Paste and copy the following:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <title></title>
    <!--preload-links-->
    <!--app-context-->
  </head>
  <body>
    <div id="app"><!--app-html--></div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

##  Only supports using ES6 module specification

commonJS needs to be changed to ES6 module specification

###  module import

```
// Before - Vue 2, using commonJS
var utils = require("../../../common/util.js");

// After - Vue 3, only supports ES6 modules
import utils from "../../../common/util.js";
```

###  module export

```
// Before - Vue 2, dependencies are exported using commonJS
module.exports.X = X;

// After - Vue 3, only supports ES6 modules
export default { X };
```

##  vuex usage

Vue2

Vue3

```
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {},
});
export default store;
```

##  Avoid using both v-if and v-for on the same element

In Vue3, v-if always takes precedence over v-for. The above writing method will not meet expectations in Vue3. Due to ambiguity in syntax, it is recommended to avoid using both on the same element at the same time (\[more\](https://v3.cn.vuejs.org/guide/migration/ v-if-v-for.html#%E6%A6%82%E8%A7%88)).

##  Life cycle adaptation

Component unload lifecycle is renamed in Vue3

-   `destroyed` changed to `unmounted`
-   `beforeDestroy` changed to `beforeUnmount`

##  Event adaptation

Vue3 now provides an `emits` option, similar to the existing `props` option. This option can be used to define events that a component can emit to its parent, [more](https://v3.cn.vuejs.org/guide/migration/emits-option.html#overview)

\*\*It is strongly recommended to use `emits` to log all events emitted by each component. \*\*

This is especially important because the `.native` modifier is removed. `emits` will now be included in the component's `$attrs` when not using any listeners for declared events, which by default will be bound to the component's root node.

```
<template>
  <button @click="onClick">OK</button>
</template>
<script>
  export default {
    emits: ["click"],
    methods: {
      onClick() {
        this.$emit("click", "OK");
      },
    },
  };
</script>
```

##  v-model adaptation

Compared with Vue2, the v-model of Vue3 has undergone major changes. Multiple `model` can be used, and the corresponding syntax changes. [More](https://v3.cn.vuejs.org/guide/migration/v-model.html#%E6%A6%82%E8%A7%88)

###  Modify modelValue

Vue3 v-model prop and event default names have been changed when used for custom components `props.value` to `props.modelValue` , `event.value` to `update:modelValue`

```
export default {
  props: {
    // value:String,
    // replace value with modelValue
    modelValue: String,
  },
};
```

##  event return

Change the previous `this.$emit('input')` to `this.$emit('update:modelValue')` , this step will be omitted in vue3

A v-model on a custom component is equivalent to passing the modelValue prop and receiving the thrown update:modelValue event:

```
<ChildComponent v-model="pageTitle" />

<!-- is shorthand for: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```

If we need to change the model name, as an alternative to the model option inside the component, we can now pass an argument to v-model:

```
<ChildComponent v-model:title="pageTitle" />

<!-- is shorthand for: -->

<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
```

##  slot adaptation

Vue3 will not support the usage of `slot="xxx"`, please use the usage of `v-slot:xxx`. [More](https://v3.cn.vuejs.org/guide/component-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD)

Vue2

Vue3

```
<!-- Vue2 supported usage -->
<uni-nav-bar>
  <view slot="left" class="city">
    <!-- ... -->
  </view>
</uni-nav-bar>
```

##  Filters are no longer supported

As of Vue 3.0, filters have been removed and are no longer supported, it is recommended to replace them with method calls or computed properties. [More](https://v3.cn.vuejs.org/guide/migration/filters.html#%E6%A6%82%E8%A7%88)

##  API `Promise` the way to call the result

In Vue3, the way the result of an API `Promise` call is handled is different than in Vue2. [more](https://uniapp.dcloud.io/api/#api-promise-%E5%8C%96)

-   In Vue3, if the call is successful, it will enter the then method, and if the call fails, it will enter the catch method.
-   In Vue2, whether the call succeeds or fails, it will enter the then method, the first parameter of the returned data is the error object, and the second parameter is the returned data

###  Conversion method

Vue2

Vue3

```
// Vue 2 to Vue 3, write the following code in main.js
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise((resolve, reject) => {
      res.then((res) => {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  },
});
```

##  Composition API usage of lifecycle hooks

In the Vue3 composite API, it is also necessary to follow the uni-app life cycle hook specification. For example, the application life cycle such as onLaunch can only be monitored in App.vue. Please pay attention to the scope of application of the life cycle hook when using it. [View all lifecycle hooks](https://uniapp.dcloud.net.cn/collocation/frame/lifecycle)

You can only use life cycle hooks in the `<script setup>` single-file syntax sugar or the `setup()` method. Take page A jumping to page B and passing parameters as an example:

Method 1

Method 2

```
//uni.navigateTo({
//  url: 'xxx?id=1&name=uniapp'
//})

// Method 1: On page B<script setup>
<script setup>
  import {
    onLoad,
    onShow
  } from "@dcloudio/uni-app";

  // onLoad accepts the parameters passed by the A page
  onLoad((option) => {
    console.log("B 页面 onLoad:", option); //B 页面 onLoad: {id: '1', name: 'uniapp'}
  });

  onShow(() => {
    console.log("B 页面 onShow");
  });
</script>
```

##  `$mp` adjusted to `$scope`

In Vue3, `$mp` under this object is adjusted to `$scope`

##  Using Vuex in nvue

In Vue3, if nvue uses the related API of Vuex, you need to return the Vuex example in the return value of createApp in main.js:

```
import Vuex from "vuex";
export function createApp() {
  const app = createSSRApp(App);
  app.use(store);
  return {
    app,
    Vuex, // 如果 nvue 使用 vuex 的各种map工具方法时，必须 return Vuex
  };
}
```

##  Need to actively open sourcemap

App, applet-side source code debugging, you need to actively open sourcemap in vite.config.js

```
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

/**
 * @type {import('vite').UserConfig}
 */

export default defineConfig({
  build: {
    sourcemap: true,
  },

  plugins: [uni()],
});
```

##  Listen for native click events in the applet platform

In the applet platform of vue3, you can use tap first to listen for native click events. In vue3, the .native modifier is removed, so the compiler cannot predict whether click is going to trigger a native event or a custom event of the component, so it is not converted into a tap event of the applet.

##  What is the minimum mobile phone version supported by vue3?

> The range supported by vue3 is: Android > 4.4 (depending on the version of the system webview, the native Android system has been upgraded to the system webview generally 5.0, and the domestic Android system generally needs 7.0 or more when the x5 kernel is not used), ios >= 10

> Android < 4.4, configure X5 kernel support, it needs to be downloaded online for the first time, you can configure to start the application after downloading the X5 kernel successfully, [Details](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)

##  vue3 nvue does not support the recycle-list component

vue3 nvue does not support the recycle-list component

##  When the h5 platform is released, tree shaking will be enabled by default

When vue3 is released on the h5 platform, in order to optimize the size of the package, tree shaking will be started by default, and only the explicitly used api will be packaged. If you want to turn off tree shaking, you can configure it in manifest.json:

```
"h5": {
    "optimization": {
        "treeShaking": {
            "enable": false
        }
    }
}
```

##  Get page parameters through props

New in vue3 platform: use props to get page parameters

```
<script setup>
  // The page can directly receive the parameters passed in by the url by defining props
  // As：uni.navigateTo({ url: '/pages/index/index?id=10' })
  const props = defineProps({
    id: String,
  });
  console.log("id=" + props.id); // id=10
</script>
```

```
<script>
  // The page can directly receive the parameters passed in by the url by defining props
  // As：uni.navigateTo({ url: '/pages/index/index?id=10' })
  export default {
    props: {
      id: {
        type: String,
      },
    },
    setup(props) {
      console.log("id=" + props.id); // id=10
    },
  };
</script>
```

##  The applet and the App do not support the interpolation method to define internationalization

Due to the limitation of the operating platform, the interpolation method is currently not supported on the applet and App side to define internationalization. Messages Functions need to be used to define internationalization information. \[Reference Document\](https://vue-i18n.intlify.dev/guide/advanced/ function.html)

Example:

```
const messages = {
  en: {
    greeting: ({ named }) => `hello, ${named('name')}!`
  }
}
```
