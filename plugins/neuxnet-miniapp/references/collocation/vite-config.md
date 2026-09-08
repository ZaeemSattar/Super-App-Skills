---
title: "Vite config"
source_url: https://miniapp.neuxnet.com/collocation/vite-config.html
---
vite.config.js is an optional configuration file. If this file exists in the root directory of the project, it will be loaded automatically. It is generally used to configure the compilation options of vite. For specific specifications, please refer to: [vite.config.js](https://vitejs.dev/)

Some configuration items will be overridden by the build configuration, for example:

-   base: support
-   root: not supported
-   mode: not supported
-   publicDir: not supported, fixed as static
-   build.outDir: not supported
-   build.assetsInlineLimit: only h5 support
-   build.cssCodeSplit: not supported, fixed to true
-   build.lib: not supported
-   build.manifest: not supported
-   build.ssrManifest: not supported
-   build.ssr: not supported

**Basic content**

> must reference '@neuxnet/vite-plugin-uni' and add it to plugins

```
import { defineConfig } from 'vite';
import uni from '@neuxnet/vite-plugin-uni';

export default defineConfig({
	plugins: [uni()],
});
```

**Use example**

**Custom static resource directory**

```
import path from 'path';
import fs from 'fs-extra';
import { defineConfig } from 'vite';
import uni from '@neuxnet/vite-plugin-uni';

function copyFile() {
	return {
		enforce: 'post',
		async writeBundle() {
			await fs.copy(
				path.resolve(__dirname, 'images'),
				path.join(
					__dirname,
					'unpackage/dist',
					process.env.NODE_ENV === 'production' ? 'build' : 'dev',
					process.env.UNI_PLATFORM,
					'images'
				)
			);
		},
	};
}

export default defineConfig({
	plugins: [uni(), copyFile()],
});
```

**Inject global dependencies**

```
t
import path from 'path';
import { defineConfig } from 'vite';
import uni from '@neuxnet/vite-plugin-uni';
import inject from '@rollup/plugin-inject';

const mpStoragePath = path.resolve(__dirname, './js_sdk/mp-storage/mp-storage');

export default defineConfig({
	plugins: [
		uni(),
		inject({
			localStorage: [mpStoragePath, 'localStorage'],
			'window.localStorage': [mpStoragePath, 'localStorage'],
		}),
	],
	define: {
		'process.env.VUE_APP_TEST': JSON.stringify('test'),
	},
});
```

**Configure environment variables**

```
import { defineConfig } from 'vite';
import uni from '@neuxnet/vite-plugin-uni';

export default defineConfig({
	plugins: [uni()],
	define: {
		'process.env.VUE_APP_TEST': JSON.stringify('test'),
	},
});
```

**Remove console when publishing**

```
import { defineConfig } from 'vite';
import uni from '@neuxnet/vite-plugin-uni';

export default defineConfig({
	plugins: [uni()],
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
			},
		},
	},
});
```

**Dynamic modification of manifest.json when publishing**

```
// Read manifest.json , rewrite after modification
const fs = require('fs');

const manifestPath = './src/manifest.json';
let Manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' });
function replaceManifest(path, value) {
	const arr = path.split('.');
	const len = arr.length;
	const lastItem = arr[len - 1];

	let i = 0;
	let ManifestArr = Manifest.split(/\n/);

	for (let index = 0; index < ManifestArr.length; index++) {
		const item = ManifestArr[index];
		if (new RegExp(`"${arr[i]}"`).test(item)) ++i;
		if (i === len) {
			const hasComma = /,/.test(item);
			ManifestArr[index] = item.replace(
				new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`),
				`"${lastItem}": ${value}${hasComma ? ',' : ''}`
			);
			break;
		}
	}

	Manifest = ManifestArr.join('\n');
}
// use
replaceManifest('app-plus.usingComponents', false);
replaceManifest('app-plus.splashscreen.alwaysShowBeforeRender', false);
fs.writeFileSync(manifestPath, Manifest, {
	flag: 'w',
});

export default defineConfig({
	// ...
});
```
