---
title: "Main"
source_url: https://miniapp.neuxnet.com/collocation/main.html
---
`main.js` is the entry file of Mini App. Its main function is to initialize the `vue` instance, define global components, and use required plugins such as vuex.

First, the `Vue` library and `App.vue` are introduced, a `vue` instance is created, and the `vue` instance is mounted.

Vue3

```
import App from './App'
import { createSSRApp } from 'vue'
export function createApp() {
    const app = createSSRApp(App)
    return {
        app
    }
}
```

`vue-router` cannot be used, and routing must be configured in `pages.json`.
