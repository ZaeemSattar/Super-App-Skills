---
title: "Compiler config"
source_url: https://miniapp.neuxnet.com/tutorial/compiler-config.html
---
You can configure the `Mini App` compiler through the following entry:

**manifest.json**

In manifest.json, you can configure the version of Vue (Vue3), as well as the routing mode of the release H5 platform, see: [manifest.json](../collocation/manifest.md)

**vite.config.js**

In vue.config.js, you can modify the webpack configuration, including environment variables, please refer to [vue-config.js](../collocation/vite-config.md).

**package.json**

When customizing the conditional compilation platform, you can configure environment variables under the env node of the package.json file. For details, refer to [package.json](../collocation/package.md)

**.env**

In a project created by Vite, you can place a `.env` file in the root directory to specify environment variables. For details, refer to: [Environment Variables](https://vitejs.dev/guide/env-and-mode.html) .
