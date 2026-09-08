---
name: miniapp-create
description: >-
  Use when starting a new Neuxnet Super App Mini App — scaffolding a project with
  create-neu-miniapp, understanding the generated project structure, setting the
  appid in manifest.json, or explaining what each file in a Mini App project does.
---

# Create a Neuxnet Mini App

## When to use this

Starting a new Mini App, or orienting yourself in an existing one.

## Scaffold

```bash
npm create neu-miniapp@latest <project-name>
cd <project-name>
npm install
```

`yarn create neu-miniapp` and `pnpm create neu-miniapp` also work. Keep `@latest` — npm otherwise resolves a cached, outdated `create-neu-miniapp`.

The scaffolder is non-interactive when you pass a project name.

## Generated structure

Application source lives under **`src/`**:

```
<project>/
├── index.html            # H5 host page
├── vite.config.js        # Vite + @neuxnet/vite-plugin-neu
├── jsconfig.json
├── package.json
└── src/
    ├── main.js           # createSSRApp entry — exports createApp()
    ├── App.vue           # global styles + app lifecycle hooks
    ├── manifest.json     # app identity: name, appid, version
    ├── pages.json        # routes, window style, tabBar
    ├── pages/            # one .vue file per page
    ├── components/       # reusable components
    ├── common/           # shared CSS/SCSS  (NOT static/)
    └── static/           # images and assets copied verbatim
```

Use the `@` alias for imports — it points at `src/`:

```js
import ChangeSize from '@/components/ChangeSize.vue'
```

## Set the appid — required before building

A fresh `src/manifest.json` has `"appid": ""`. Set it to the appid issued for your Mini App by the Super App platform:

```json
{
  "name": "my-app",
  "appid": "your-appid-here",
  "versionName": "1.0.0",
  "versionCode": "100",
  "transformPx": false,
  "vueVersion": "3"
}
```

The release package is named `${appid}.wgt`, so an empty appid produces an unusable build.

## Pitfalls

- **`src/static/` is copied verbatim, never compiled.** Do not put `.js` there (ES6 ships untranspiled and can break on older devices) and do not put CSS/SCSS there — use `src/common/` for stylesheets. Files outside `static/` are bundled only when actually imported.
- Pages are **not** auto-registered. Every new page must be added to `pages.json` — see [miniapp-page](../miniapp-page/SKILL.md).
- Vue 3 with `<script setup>` is the default; `main.js` uses `createSSRApp`, so do not replace it with `createApp` from `vue`.

## Reference

- [Quick start](../../references/quickstart/index.md)
- [Project structure](../../references/tutorial/project.md)
- [manifest.json](../../references/collocation/manifest.md)

## Verify

```bash
npm run dev:h5     # opens the app in a browser
```

You should see the starter "Hello Mini App" page.
