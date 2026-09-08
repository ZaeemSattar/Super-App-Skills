---
title: "editor"
source_url: https://miniapp.neuxnet.com/component/editor.html
---
####  editor

Rich text editor, which can edit and mix images and text formats.

In web development, you can use `contenteditable` to implement content editing. But this is a dom API and cannot be used on non-H5 platforms. So the Mini App provide the `editor` component to realize this function, and also provide compatibility on the H5 platform of Mini App. Technically speaking, this component still runs in the view layer webview, using the browser's `contenteditable` feature.

The export content of the editor supports tagged `html` and plain text `text`, and the editor uses the `delta` format for storage.

When setting content through the `setContents` interface, parse the inserted `html` may cause parsing errors due to some illegal tags. It is recommended that developers insert them through delta when using them in the app.

Some basic styles are introduced into the rich text component to display the content correctly, and it can be overridden during development. It should be noted that when using html exported by rich-text components in other components or environments, you need to additionally introduce and maintain the structure of `<ql-container><ql-editor></ql-editor></ql-container>`

The setting of image controls is valid only during initiation.

Related api: [editorContext](../api/media/editor-context.md)

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| read-only | boolean | false | No | Set the editor to read-only |
| placeholder | string |  | No | Prompt information |
| show-img-size | boolean | false | No | Display image size controls when clicking the image |
| show-img-toolbar | boolean | false | No | Display toolbar controls when clicking the image |
| show-img-resize | boolean | false | No | Display modified size controls when clicking the image |
| @ready | eventhandle |  | No | Trigger when the editor is initialized |
| @focus | eventhandle |  | No | Triggered when the editor getting focus, event.detail = {html, text, delta} |
| @blur | eventhandle |  | No | Triggered when the editor losing focus, detail = {html, text, delta} |
| @input | eventhandle |  | No | Triggered when the editor content changing, event.detail, detail = {html, text, delta} |
| @statuschange | eventhandle |  | No | Trigger when styles in the editor are changing by the Context method, and return the styles that have been set on the selection |

The editor internally supports some HTML tags and inline styles, but does not support **class** and **id**

####  Supported tags

Unsatisfactory tags will be ignored and `<div>` will be transferred to `<p>` and stored.

| Type | Node |
| --- | --- |
| inline element | `<ins><del> <span><strong><b><em><i><u><a><s><sub><sup><img>` | where`</sup></sub></s></a></u></i></em></b></strong></span><ins><del> <span><strong><b>`Baidu applet does not support |  |
| block-level elements | `<br><p><h1><h2><h3><h4><h5><h6><hr><ol><ul><li>` | where`<br>`Only Baidu applet supports,`<p>`Baidu applet does not support |

####  Supported inline styles

Inline styles can only be set on inline elements or block-level elements, but not both. For example, font-size is classified as an inline element attribute, so that setting it on the p tag is invalid.

| Type | Style |
| --- | --- |
| Block-level styles | `text-align` `direction` `margin` `margin-top` `margin-left` `margin-right` `margin-bottom` `padding` `padding-top` `padding-left` `padding-right` `padding-bottom` `line-height` `text-indent` | Baidu applet only supports `text-align, direction` |
| Inline styles | `font` `font-size` `font-style` `font-variant` `font-weight` `font-family` `letter-spacing` `text-decoration` `color` `background-color` | Baidu applet only supports `color, background-color` |

**Precautions**

-   Event binding in inserted html event will be removed
-   color attribute in formats will be returned in hex format
-   Only plain text content will be copied into the editor when pasting
-   When html is inserted into the editor, the editor will delete some unnecessary tags to ensure the unity of content. For example, `<p><span>xxx</span></p>` will be rewritten as `<p>xxx</p>`
-   When the editor is focused, the page will be pushed up, and the system behavior will ensure that the editing area is visible
-   The H5 side will dynamically introduce the dependency [quill.min.js](https://unpkg.com/quill@1.3.7/dist/quill.min.js) , [image-resize.min.js](https://unpkg.com/quill-image-resize-mp@3.0.1/image-resize.min.js) , and the dependency will be loaded from [unpkg.com](https://unpkg.com) . If the dependency is slow to load, you can download it and put it on your own server or CDN service provider, and then import it in the [custom template](../collocation/manifest.md#h5-template) head.
-   Videos can't be inserted directly. When editing, use video covers as placeholders, save the video information in the image attributes, and then restore it to video during previewing.

Template

Script

Style

```
<template>
	<view class="container">
		<editor id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady"></editor>
		<button type="warn" @tap="undo">
		</button>
	</view>
</template>
```
