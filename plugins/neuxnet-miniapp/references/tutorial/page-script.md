---
title: "js file import"
source_url: https://miniapp.neuxnet.com/tutorial/page-script.html
---
###  js file import

> When importing a `js` file in a `js` file or a `script` tag (including renderjs, etc.), you can use a relative path and an absolute path in the following form

```
//Absolute path, @ points to the root directory of the project, and in cli projects @ points to the src directory
import add from '@/common/add.js';
// Relative path
import add from '../../common/add.js';
```

**Notice**

-   js files do not support importing with `/` at the beginning

##  Supported on NPM

Mini App supports the use of **npm** to install third-party packages.

This document requires developers to have a certain understanding of **npm**, so the basic functions of **npm** will not be introduced. If you do not have access to **npm** before, please refer to the [NPM official document](https://docs.npmjs.com/getting-started/what-is-npm) .

**Initialize npm project**

If the npm management dependency has not been used before in the project (no package.json file in the project root directory), please initialize the npm project by executing the command in the project root directory first:

```
npm init -y
```

cli project already has package.json by default. The project created by HBuilderX is not available by default and needs to be created by initialization command.

**Installation dependencies**

Execute the command to install npm package in the root directory of the project:

```
npm install packageName --save
```

**Usage**

You can use npm package after installation, and introduce npm package into js:

```
import package from 'packageName'
const package = require('packageName')
```

**Notice**

-   The node\_modules directory must be under the root directory of the project.
