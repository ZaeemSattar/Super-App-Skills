---
title: "Vue config"
source_url: https://miniapp.neuxnet.com/collocation/vue-config.html
---
vue.config.js is an optional configuration file. If this file exists in the root directory of the project, it will be automatically loaded. It is generally used to configure compilation options such as webpack. For specific specifications, please refer to [vue.config.js](https://cli.vuejs.org/zh/config/#vue-config-js)

**Supported or not**

-   CLI project
-   HBuilderX 2.1.5 and above

**Precautions**

-   Valid only on vue pages

Part of configuration items will be overwritten by compilation configuration, for example:

-   publicPath does not support, if you need to configure, please configure in manifest.json->h5->router->base, refer to the document: [h5-router](./manifest.md#h5-router)
-   outputDir, not supported
-   assetsDir, fixed to static
-   pages, not supported
-   runtimeCompiler, fixed to false
-   productionSourceMap, fixed to false
-   css.extract, H5 platform fixed to false, and other platforms fixed to true
-   Parallel, fixed to false
-   When using cli projects, babel-loader ignores all files in node\_modules by default. If you want to explicitly translate a dependency through Babel, you can list it in transpileDependencies. [Detail reference](https://cli.vuejs.org/zh/config/#transpiledependencies)

**Usage example**

**Custom static resource directory**

```
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin') //最新版本copy-webpack-plugin插件暂不兼容，推荐v5.0.0

module.exports = {
	configureWebpack: {
		plugins: [
			new CopyWebpackPlugin([
				{
					from: path.join(__dirname, 'src/images'),
					to: path.join(__dirname, 'dist', process.env.NODE_ENV === 'production' ? 'build' : 'dev', process.env.UNI_PLATFORM, 'images')
				}
			])
		]
	}
}
```

**Inject global dependencies**

```
// Example download mp-storage from plugin market
const webpack = require('webpack')

module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				'localStorage': ['mp-storage', 'localStorage'],
				'window.localStorage': ['mp-storage', 'localStorage']
			})
		]
	}
}
```

**Configure environment variables**

```
const webpack = require('webpack')

module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env'].VUE_APP_TEST = '"test"'
        return args
      })
  }
}
```

**Delete console at release**

Supported in `HBuilderX 2.6.8+`

```
module.exports = {
	chainWebpack: (config) => {
		// Valid when compression is enabled at release or runtime.
		config.optimization.minimizer('terser').tap((args) => {
			const compress = args[0].terserOptions.compress
			// Non-App platforms remove the console code (including all console methods, such as log, debug, info...)
			compress.drop_console = true
			compress.pure_funcs = [
				// 'console.debug' // Specified console method can be removed
			]
			return args
		})
	}
}
```

**Dynamically modify manifest.json at release**

```
// Read manifest.json, modify it and rewrite it
const fs = require('fs')

const manifestPath = './src/manifest.json'
let Manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' })
function replaceManifest(path, value) {
  const arr = path.split('.')
  const len = arr.length
  const lastItem = arr[len - 1]

  let i = 0
  let ManifestArr = Manifest.split(/\n/)

  for (let index = 0; index < ManifestArr.length; index++) {
    const item = ManifestArr[index]
    if (new RegExp(`"${arr[i]}"`).test(item)) ++i;
    if (i === len) {
      const hasComma = /,/.test(item)
      ManifestArr[index] = item.replace(new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`), `"${lastItem}": ${value}${hasComma ? ',' : ''}`)
      break;
    }
  }

  Manifest = ManifestArr.join('\n')
}
// Usage
replaceManifest('app-plus.usingComponents', false)
replaceManifest('app-plus.splashscreen.alwaysShowBeforeRender', false)
replaceManifest('mp-baidu.usingComponents', false)
fs.writeFileSync(manifestPath, Manifest, {
  "flag": "w"
})

module.exports = {
	// ...
}
```

Ways to enable compression:

-   Check Run for the project created by HBuilderX-->Run to Mini Program Simulator-->Whether to compress the code at runtime
-   Projects created by cli can add parameter `--minimize` in `package.json`, example: `"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni -build --watch --minimize"`
