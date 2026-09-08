---
title: "npm"
source_url: https://miniapp.neuxnet.com/quickstart/index.html
---
## Build Super App  
Ecosystem,  
with Powerful Solutions

##### Welcome to the Mini App development documentation, we will help you quickly build a Mini App on Super App

  

##  Create Mini App

###  📦 Use

```
# npm
    npm create neu-miniapp@latest

# yarn
    yarn create neu-miniapp

# pnpm
    pnpm create neu-miniapp
```

> \[!TIP\] It is recommended to add the tag name (@latest), otherwise npm may resolve to the cached outdated package version.

###  📖 introduce

`create-neu-miniapp` is a lightweight scaffolding tool for quickly creating `Mini App` projects, it can help you quickly create a `Mini App` project, and provides some templates for you to choose from.

###  🚤 Quick create

```
npm create neu-miniapp <Project name>
```

##  Run and release Mini App

```
npm run dev:%ENVIRONMENT%
npm run build:%ENVIRONMENT%
```

The possible values of `%ENVIRONMENT%` are as follows:

| Value | environment |
| --- | --- |
| app | Mini App |
| h5 | H5 |
| app-preview | Mini App Preview |

**Others:**

-   Currently using `npm run dev:h5` will preview MiniApp in the browser environment, making it easier for developers to improve the efficiency of developing views, but some special apis are not available in the Web environment
    
-   Currently using `npm run build:app` `npm run build:app-preview`will generate app packaging resources under `/dist/build/app-plus`. And the `${appid}.wgt` file is generated in the `/release` directory, where `appid` is the `appid` specified in the `manifest.json` file. The `${appid}.wgt` file is the Mini App production package
    
-   Make sure your computer and phone are on the same LAN. When using `npm run build:app-preview`, a QR Code will be displayed in the terminal. After scanning with `Super App`, the `Mini App` will be opened directly in the `Super App`, which is convenient for developers to preview and debug the `Mini App`
    
-   The code compiled in build mode for each platform is stored in the `/dist/build/` directory under the root directory.
    

TIP

If you run `npm run build:app-preview` when a mobile phone in the same LAN cannot preview, you can specify the ip and port to run Modify package.json : `"build:app-preview":uni build -p app --preview --host 192.168.18.47 --port 5678"`
