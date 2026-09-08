---
title: "vite-config.js"
source_url: https://miniapp.neuxnet.com/tutorial/env.html
---
There are three main ways to configure environment variables in Mini App project:

###  vite-config.js

The webpack configuration can be modified in vue.config.js, including environment variables. For details, please refer to [vue-config.js](../collocation/vite-config.md).

###  package.json

When customizing the conditional compilation platform, you can configure environment variables under the env node of the package.json file. For details, please refer to [package.json](../collocation/package.md)

###  .env

In the project created by CLI, you can place a `.env` file in the root directory to specify environment variables. For details, please refer to: [Environment Variables](https://vitejs.dev/guide/env-and-mode.html) .
