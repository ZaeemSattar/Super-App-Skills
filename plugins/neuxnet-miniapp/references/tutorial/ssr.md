---
title: "What is server-side rendering (SSR)?"
source_url: https://miniapp.neuxnet.com/tutorial/ssr.html
---
`uni-app` has supported `vue 3.0` development, see [https://ask.dcloud.net.cn/article/37834](https://ask.dcloud.net.cn/article/37834)

`uni-app` officially provides simple and easy-to-use SSR support based on `vue 3.0 & uniCloud`.

[news.dcloud.io](https://news.dcloud.io) is a news system based on `uni-app & uniCloud`. You can view the source code through a browser, which is an example of a server-side rendering (SSR) site.

####  What is server-side rendering (SSR)?

By default, uni-app outputs Vue components in the client to generate DOM and operate DOM. However, it is also possible to render the same component as HTML strings on the server side, send them directly to the browser, and finally "activate" these static markers as fully interactive applications on the client.

The uni-app application rendered by the server can also be considered as "homogeneous" or "universal", because most of the application code can run on the server and the clients.

####  Why use server-side rendering (SSR)?

The advantages of server-side rendering (SSR) over traditional SPA (Single-Page Application) mainly lie in:

-   Better SEO, searching engine crawling tool can directly view the fully rendered page.
    
-   Faster time-to-content, especially for slow network conditions or slow running devices. No need to wait for all JavaScript to be downloaded and executed before displaying the marker rendered by the server, so your users will see the fully rendered page more quickly. Generally, it can produce better user experience, and as far as those applications where "time-to-content is directly related to conversion rate" are concerned, server-side rendering (SSR) is of great significance.
    

There are some trade-offs when using server-side rendering (SSR):

-   Limited by development conditions. Browser-specific code can only be used in some lifecycle hook functions. Some external library may require special handling to run in the server rendering application.
    
-   More requirements related to build settings and deployment. Unlike the fully static single page application (SPA) that can be deployed on any static file server, the server rendering application needs to be in the Node.js server running environment.
    
-   More server-side load. The fully rendered application in Node.js obviously takes up more CPU resources (CPU-intensive) than the server that only provides static files. Therefore, if you expect to use it in a high traffic environment, please prepare the corresponding server load and use the caching strategy wisely.
    

Fortunately, [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README) provides you with solutions for the above problems.

-   The [unicloud-db](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db) component is a database query component provided by uniCloud, with built-in support for SSR, and developers do not need any additional development.
-   The uniCloud cloud function and static hosting provide the world's top IT infrastructure with flexible capacity expansion, large concurrent load and anti-DDoS attack. Through HBuilderX, uni-app project can be deployed as an h5 website supporting SSR with one click.

####  Write generic code

Before further introduction, let's take a moment to discuss the constraints when writing "generic" code - i.e., the code running on the server and the clients. Because of the differences between use cases and platform APIs, our code will not be exactly identical when running in different environments. So here we will lay out the key points you need to understand.

#####  Data response on the server

In the client-only apps, each user will use a new application instance in their respective browser. For server-side rendering, we also hope that each request should be a brand-new and independent application instance, so that there will be no cross-request state pollution caused by cross-requests.

Because the actual rendering process requires certainty, we will also "pre-fetch" data on the server - this means our application has already finished parsing its state by the time we start rendering. In other words, it is unnecessary to make the data responsive on the server, so that it is disabled by default. Disabling responsive data can also avoid the performance overhead of converting "data" into "responsive objects".

#####  Component lifecycle hook functions

Since there is no dynamic update, among all lifecycle hook functions, only beforeCreate and created will be called in the process of server-side rendering (SSR). That is to say, the code in any other lifecycle hook functions (such as beforeMount or mounted) will only be executed on the client.

In addition, it is noteworthy that you should avoid the code that generates global side effects during the lifecycles of beforeCreate and created, such as using setInterval to set the timer in them. In the pure client-side only code, we can set a timer and then destroy it during the lifecycle of beforeUnmount or unmounted. However, considering that the destroy hook function will not be called during SSR, the timer will remain forever. To avoid this situation, please move the side-effect code to the beforeMount or mounted lifecycle.

#####  Access the Platform-Specific APIs

Common code cannot accept the APIs of specific platform, so if the browser-only global variables like window or document are directly applied in your code, errors may be thrown when executed in Node.js, and vice versa.

For browsers-only APIs, the usual way is to lazily access them in the "client-only" lifecycle hook functions.

Please note that it can be tricky to integrate a third-party library into the server-rendered application if it is not written in the common usage above. You may have to mock some global variables to make it work, but this is just what hack does and may interfere with the environment detection codes of other libraries.

####  Data prefetching and status

During server-side rendering (SSR), we are essentially rendering a "snapshot" of our application, so if the application depends on some asynchronous data, we need to prefetch and parse these data before starting the rendering process.

Another concern is that on the client, it is necessary to get the same data as the server-side application before mounting to the client application - otherwise, the mixing may fail because the client application uses a different state from the server-side application.

To solve this problem, the obtained data needs to be located outside the view component, i.e., being placed in a special prefetch data store or "state container". First, on the server side, we can prefetch data before rendering and fill the data into the store. In addition, we will serialize and inline the states in HTML. In this way, before mounting to the client application, the inline status can be obtained directly from the store.

-   For simple applications, we can directly use `ssrRef` (equivalent to [ref](https://v3.cn.vuejs.org/api/refs-api.html#ref) of vue3) and `shallowSsrRef` (equivalent to [shallowRef](https://v3.cn.vuejs.org/api/refs-api.html#shallowref) of vue3)) provided by `@dcloudio/uni-app` to ensure the consistency between server data and client data.
    -   When using `ssrRef` and `shallowSsrRef` in the non-component lifecycle, the data will be stored globally
    -   Both `ssrRef` and `shallowSsrRef` support the second parameter as the key of the data

Example:

```
import { ssrRef } from '@dcloudio/uni-app'
const categories = ssrRef([], 'categories'); // 在非组件生命周期中使用时，为全局数据，可以跨组件跨页面使用
export default {
	setup (){
		const items = ssrRef([]); // 在生命周期中使用时，为组件级别作用域，不指定第二个参数key的情况下，编译器会自动补充(默认，以文件+函数位置做base64生成key)
		return { items, categories }
	}
}
```

-   For complex applications, we can use the official state management library [Vuex](https://github.com/vuejs/vuex/)

Example:

1.  We shall create a store/index.js file first, which will simulate some logic of obtaining the item according to id:

```
import { createStore } from 'vuex'

// Simulate the interface to acquire data
function fetchItem(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        title: 'title' + id,
      })
    }, 300)
  })
}

export default () => {
  return createStore({
    state() {
      return {
        items: {},
      }
    },
    actions: {
      fetchItem({ commit }, id) {
        return fetchItem(id).then((item) => {
          commit('setItem', { id, item })
        })
      },
    },
    mutations: {
      setItem(state, { id, item }) {
        state.items[id] = item
      },
    },
  })
}

```

2.  Then modify main.js
    
    ```
    import { createSSRApp } from 'vue'
    import App from './App.vue'
    import createStore from './store'
    export function createApp() {
      const app = createSSRApp(App)
      
      const store = createStore() // 创建 store
      app.use(store)
      
      return {
    	app,
    	store,// 必须返回 store
      }
    }
    
    ```
    
3.  Use in pages or components
    
    ```
    <template>
      <text v-if="item">{{ item.title }}</text>
      <text v-else>...</text>
    </template>
    
    <script>
    const id = 1;// 模拟ID
    export default {
      computed: {
    	item() {
    	  return this.$store.state.items[id]
    	}
      },
      serverPrefetch() {// 服务端预取数据的生命周期
    	return this.fetchItem()
      },
      mounted() { // 仅客户端执行的生命周期
    	if (!this.item) { // 判断服务端是否已正常获取，若未获取，重新调用加载数据
    	  this.fetchItem()
    	}
      },
      methods: {
    	fetchItem() {
    	  return this.$store.dispatch('fetchItem', id)
    	}
      }
    }
    </script>
    ```
    

####  Release and deploy

Releasing ssr will get two parts: the cloud part and the static resource part. To deploy in uniCloud needs to deploy the cloud part into the cloud function, and the static resource part into the front-end web hosting.

#####  Deploy to `uniCloud`

**Pre-step**

> **Be sure to complete the pre-step before proceeding with the subsequent operation**

1.  Open [uniCloud](https://unicloud.dcloud.net.cn) and [Front-end web hosting](https://uniapp.dcloud.net.cn/uniCloud/hosting)
2.  Cloud function binding custom urlized domain name, refer to the document: [Cloud Function Urlization](https://uniapp.dcloud.net.cn/uniCloud/http) , Alibaba Cloud will download directly if the custom domain name is not bound The html page returned by the cloud function cannot be displayed in the browser
3.  For front-end web hosting binding custom domain name, please refer to the document [Front-end web hosting configuration domain name](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=domain)
4.  Configure the domain names deployed in the first two steps in the cross-domain configuration, that is to say, cross-domain access from cloud functions to resources in front-end web hosting as well as cross-domain access from front-end web hosting to cloud functions are both allowed. Refer to the document [Cross-domain processing using uniCloud in H5](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)
5.  Import [uni-ssr](https://ext.dcloud.net.cn/plugin?id=5338) from the plug-in market into the project

**Compile and release**

**Use HBuilderX to release and deploy automatically**

HBuilderX version `3.2.7` and above are required, currently only supports the deployment of static resources to the service space of Alibaba Cloud

1.  By `Release Menu -> website PC-Web or mobile phone H5` of `HBuilderX`, check `ssr`, check `Deploy the compiled resource at uniCloud front-end website hosting`
    
    ![Automatic deployment](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/a57a589e-4193-497f-ac89-d33c1208d3e1.png)
    
2.  To configure the URL path of the cloud function of `uni-ssr`, please refer to the document [URL normalization of cloud function](https://uniapp.dcloud.net.cn/uniCloud/http)
    

**Manual release and deployment**

1.  Configure `base` in `vite.config.js` as `Front-end website hosting` address
    
    ```
    import {
    	defineConfig
    } from 'vite'
    import uni from '@dcloudio/vite-plugin-uni'
    // https://vitejs.dev/config/
    export default defineConfig({
    	base: 'https://static-xxxx.bspapp.com/', // uniCloud 前端网页托管资源地址（主要是应用编译后的js，图片等静态资源，可以配置为二级目录）
    	plugins: [
    		uni(),
    	],
    })
    ```
    
2.  Compilation:
    

cli project: `npm run build:h5:ssr` or by `HBuilderX 3.1.16 and above` of `Release Menu -> website PC-Web or mobile phone H5`, check `ssr`

Non-cli project: by `Release Menu -> website PC-Web or mobile phone H5` of `HBuilderX 3.1.16 and above`, check `ssr`

![Release in ssr mode](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/d7574ced-e253-4b73-8187-86d6a8811364.jpg)

3.  Deploy static resources to [Front-end web hosting](https://uniapp.dcloud.net.cn/uniCloud/hosting)

Upload the compiled resources in `dist/build/h5/client` to the front-end web hosting. The free Alibaba Cloud service space is recommended.

4.  Deploy `uni-ssr` cloud function

Copy the compiled `dist/build/h5/server` directory to the `uni-ssr` cloud function root directory and upload it.

5.  To configure the URL path of the cloud function of `uni-ssr`, please refer to the document [URL normalization of cloud function](https://uniapp.dcloud.net.cn/uniCloud/http)

####  Precautions

-   The browser console prompts the following warning, indicating that the results of server and client rendering are inconsistent. Check whether the template-bound properties use `ssrRef`

```
[Vue warn]: Hydration node mismatch:
- Client ***
- Server ***
```
