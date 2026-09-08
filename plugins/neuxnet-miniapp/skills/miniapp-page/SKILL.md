---
name: miniapp-page
description: >-
  Use when adding, configuring, or navigating between pages in a Neuxnet Mini App
  — registering routes in pages.json, setting navigation bar or window style,
  configuring the bottom tabBar, page lifecycle hooks, passing parameters, pull-to-
  refresh, or splitting a large app into subPackages.
---

# Pages, routing and navigation

## Add a page

Two steps — creating the file is not enough.

1. Create `src/pages/detail.vue`:

   ```vue
   <script setup>
   import { ref } from 'vue'
   import { onLoad } from '@neuxnet/neu-app'

   const id = ref('')
   onLoad((options) => {
     id.value = options.id      // query parameters arrive here
   })
   </script>

   <template>
     <view class="page">
       <text>Detail {{ id }}</text>
     </view>
   </template>
   ```

2. Register it in `src/pages.json`. **The first entry in `pages` is the launch page.**

   ```json
   {
     "pages": [
       { "path": "pages/index", "style": { "navigationBarTitleText": "Home" } },
       { "path": "pages/detail", "style": { "navigationBarTitleText": "Detail" } }
     ]
   }
   ```

Paths are relative to `src/`, without the `.vue` extension.

## Window style

`globalStyle` sets defaults; a page's `style` overrides them.

```json
{
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  },
  "pages": [
    {
      "path": "pages/list",
      "style": {
        "navigationBarTitleText": "List",
        "enablePullDownRefresh": true,
        "onReachBottomDistance": 50
      }
    }
  ]
}
```

`navigationBarTextStyle` only accepts `black` or `white`. To hide the native bar and build your own, set `"navigationStyle": "custom"`.

## tabBar

```json
{
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#2071fa",
    "backgroundColor": "#ffffff",
    "list": [
      { "pagePath": "pages/index", "text": "Home",
        "iconPath": "static/tabbar/home.png",
        "selectedIconPath": "static/tabbar/home-active.png" },
      { "pagePath": "pages/list", "text": "List",
        "iconPath": "static/tabbar/star.png",
        "selectedIconPath": "static/tabbar/star-active.png" }
    ]
  }
}
```

Rules that bite:

- **At least 2 and at most 5** tabs.
- Every `pagePath` must also appear in `pages`.
- Icon paths are relative to `src/`, and the icons must live in `static/`.
- tabBar pages stay in memory: re-selecting a tab fires `onShow`, **not** `onLoad`. Put refresh logic in `onShow`.

## Navigation

| API | Behaviour |
| --- | --- |
| `uni.navigateTo` | Push a page; keeps the current one on the stack |
| `uni.redirectTo` | Replace the current page (no stack growth) |
| `uni.reLaunch` | Close all pages, open a new one |
| `uni.switchTab` | Jump to a tabBar page |
| `uni.navigateBack` | Pop `delta` pages |

```js
uni.navigateTo({ url: '/pages/detail?id=42' })
uni.switchTab({ url: '/pages/index' })
uni.navigateBack({ delta: 1 })
```

- **A tabBar page can only be opened with `switchTab`.** `navigateTo`/`redirectTo` silently fail on tab pages — this is the single most common routing bug.
- `url` is absolute from `src/` and starts with `/`.
- The page stack is capped (10 levels); use `redirectTo` or `reLaunch` in long flows instead of stacking `navigateTo` forever.
- Query values must be URL-encoded when they may contain `&`, `=` or spaces.

## Lifecycle

In `<script setup>`, import page hooks from `@neuxnet/neu-app`:

```js
import { onLoad, onShow, onReady, onPullDownRefresh, onReachBottom } from '@neuxnet/neu-app'

onLoad((options) => { /* once, with query params */ })
onShow(() => { /* every time the page appears */ })
onPullDownRefresh(async () => {
  await reload()
  uni.stopPullDownRefresh()      // required, or the spinner never stops
})
onReachBottom(() => loadNextPage())
```

`onPullDownRefresh` only fires when the page sets `"enablePullDownRefresh": true`.

## subPackages

Split large apps so the launch package stays small:

```json
{
  "pages": [{ "path": "pages/index" }],
  "subPackages": [
    { "root": "pkg-shop", "pages": [{ "path": "pages/cart" }] }
  ]
}
```

The full path becomes `/pkg-shop/pages/cart`. A subpackage's files must live under its `root` and must not also be listed in the main `pages` array.

## Reference

- [pages.json](../../references/collocation/pages.md)
- [Routing APIs](../../references/api/router.md)
- [Page lifecycle](../../references/tutorial/page.md)

## Verify

`npm run dev:h5`, then navigate to the new route and confirm the title, tab, and back behaviour.
