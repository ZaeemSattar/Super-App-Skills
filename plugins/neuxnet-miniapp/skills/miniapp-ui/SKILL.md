---
name: miniapp-ui
description: >-
  Use when building or styling screens in a Neuxnet Mini App — laying out views,
  choosing built-in components (view, text, image, scroll-view, swiper, form
  inputs), sizing with rpx for multiple screens, writing component styles, using
  easycom auto-import, or handling images and static assets.
---

# Build Mini App UI

## Use Mini App components, not HTML

A Mini App renders its own component set. `<div>`, `<span>`, `<p>` and `<img>` are **not** valid — they may appear to work in `dev:h5` and then fail in the Super App.

| Instead of | Use |
| --- | --- |
| `div` | `view` |
| `span` / `p` | `text` |
| `img` | `image` |
| `a` | `navigator` |
| `input` | `input` (Mini App component) |

All text content must sit inside `<text>`; bare strings in a `<view>` are not reliably styleable.

```vue
<template>
  <view class="card">
    <image class="thumb" mode="aspectFill" src="/static/thumb.png" />
    <text class="title">{{ title }}</text>
  </view>
</template>
```

## Core components

- **Layout** — `view`, `scroll-view` (scrolling region; needs a fixed height), `swiper` + `swiper-item` (carousels)
- **Content** — `text`, `rich-text`, `icon`, `progress`
- **Form** — `form`, `input`, `textarea`, `button`, `checkbox`, `radio`, `picker`, `switch`, `slider`, `label`
- **Media** — `image`, `video`, `audio`, `camera`
- **Other** — `navigator`, `map`, `canvas`, `web-view`

Each component's page in the mirror lists its attributes and a **Mini App vs H5** support table.

`image` needs an explicit `mode` (`aspectFill`, `aspectFit`, `widthFix`, …); the default stretches and distorts.

## Sizing: rpx

`rpx` is relative to a **750rpx reference width**, so layouts scale across screens.

```
rpx = 750 * (element width in design) / (design width)
```

A 100px-wide element in a 375px design → `750 * 100 / 375` = `200rpx`.

Use `rpx` for widths and spacing that should scale. Use **`px` for anything that must not scale** — fixed heights, hairline borders, and usually font sizes, which otherwise grow uncomfortably large on tablets.

`transformPx` in `manifest.json` is `false` in the scaffold; leave it off and write `rpx` explicitly.

## Styles

Scoped styles behave as in Vue SFCs:

```vue
<style scoped>
.card { display: flex; flex-direction: column; padding: 24rpx; }
</style>
```

- **Flexbox is the layout tool.** Do not rely on `float`, and avoid CSS Grid — it is not supported by the app renderer.
- Put shared stylesheets in `src/common/` and import them; **never** in `src/static/` (see pitfalls).
- Global styles belong in `App.vue`'s non-scoped `<style>`.
- CSS selectors are limited on-device: `*`, attribute and sibling selectors are unreliable. Prefer plain classes.
- `sass` is already a devDependency — `<style lang="scss" scoped>` works.

## easycom

A component placed at `src/components/<name>/<name>.vue` is auto-imported — no `import`, no registration:

```
src/components/user-card/user-card.vue   →   <user-card />
```

The scaffold also uses plain imports (`import ChangeSize from '@/components/ChangeSize.vue'`); both styles work, but easycom requires that exact nested directory/filename match.

## Static assets

- Images referenced from a template may use `/static/...` or a relative path.
- `src/static/` is copied **verbatim, never compiled**: no `.js` there (untranspiled ES6 can crash older devices), and no CSS/SCSS — use `src/common/`.
- Assets outside `static/` are bundled only when imported.
- Keep images small; every file in `static/` ships inside the `.wgt`, whether referenced or not.

## Reference

- [Component index](../../references/component/index.md)
- [CSS syntax and rpx](../../references/tutorial/syntax-css.md)
- [easycom](../../references/collocation/pages.md)
- [uni-ui component library](../../references/component/uniui/uni-ui.md)

## Verify

`npm run dev:h5` for layout, then `npm run build:app-preview` and scan — confirm on-device that spacing, images and fonts render as intended.
