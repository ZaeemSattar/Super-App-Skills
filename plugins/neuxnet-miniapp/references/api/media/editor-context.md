---
title: "editorContext"
source_url: https://miniapp.neuxnet.com/api/media/editor-context.html
---
##  editorContext

The editorContext instance corresponding to the editor component can be accessed through [uni.createSelectorQuery](../ui/nodes-info.md#createselectorquery).

```
	onEditorReady() {
		uni.createSelectorQuery().select('#editor').context((res) => {
			this.editorCtx = res.context
		}).exec()
	}
```

`editorContext` is bound to a [`<editor>`](../../component/editor.md) component through `id`, and operates the corresponding [`<editor>`](../../component/editor.md) component.

##  editorContext.format(name, value)

Modify style

| Parameter | Type | Instruction |
| --- | --- | --- |
| name | String | Attribute |
| value | String | Value |

**List of supported styles**

| name | value | | name | value | | --- | --- | | bold | || | italic | || | underline | || | strike | || | ins | || | script | sub / super || | header | H1 / H2 / h3 / H4 / h5 / H6 || | direction | rtl || | indent | -1 / +1 || | list | ordered / bullet / check || | color | hex color || | backgroundColor | hex color || | margin/marginTop/marginBottom/marginLeft/marginRight | css style |Baidu applet does not support| | padding/paddingTop/paddingBottom/paddingLeft/paddingRight | css style |Baidu applet does not support| | font/fontSize/fontStyle/fontVariant/fontWeight/fontFamily | css style | Baidu applet does not support | | lineHeight | css style | Baidu applet does not support | | letterSpacing | css style | Baidu applet does not support | | textDecoration | css style | Baidu applet does not support | | textIndent | css style | Baidu applet does not support | | wordWrap | css style | Baidu applet does not support | | wordBreak | css style | Baidu applet does not support | | whiteSpace | css style | Baidu applet does not support |

If applying to the selected area with style, the current style will be canceled. css style represents the allowable values specified in css.

##  editorContext.insertDivider(OBJECT)

Insert dividing line

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

##  editorContext.insertImage(OBJECT)

Insert image.

Developers can choose to upload images to the server during the submission stage, and replace them after obtaining the network address. When replacing, the html content should be replaced with `<img> The src value of`, which should be substituted for the `insert { image: abc }` value for delta content.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| src | String |  | Yes | Image address |
| alt | String |  | No | Alternative text when the image cannot be displayed. |
| width | String |  | No | Width of image (pixels/percentage). Supported in 2.6.5+. |
| height | String |  | No | Height of image (pixels/percentage). Supported in 2.6.5+. |
| extClass | String |  | No | Class name that added to img tags. Supported in 2.6.5+. |
| data | Object |  | No | data area serialized to name=value;name1=value2 and mounted to the attribute data-custom. Supported in 2.6.5+. |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

##  editorContext.insertText(OBJECT)

Override the current selected area and set a paragraph.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| text | String |  | No | Text content |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

##  editorContext.setContents(OBJECT)

Initialize the editor content, only delta takes effect when html and delta exist at the same time

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| html | String |  | No | HTML content with tags |
| delta | Object |  | No | Delta object that represents the content |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

##  editorContext.getContents(OBJECT)

Get editor content

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**object.success callback function**

| property | type | description |
| --- | --- | --- |
| html | string | Tagged HTML content |
| text | string | Plain text content |
| delta | Object | A delta object representing the content |

##  editorContext.clear(OBJECT)

Clear editor content

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

##  editorContext.removeFormat(OBJECT)

Clear the style of the current selection

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

##  editorContext.undo(OBJECT)

Revoke

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

##  editorContext.redo(OBJECT)

Restore

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

##  editorContext.blur(OBJECT)

The editor is out of focus and the keyboard is retracted at the same time.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

##  editorContext.scrollIntoView(OBJECT)

Make the editor cursor scroll to the visible area of the window.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

##  editorContext.getSelectionText(OBJECT)

Get the plain text content within the selected area of the editor. When the editor is out of focus or no interval is selected, noting is returned.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Success return parameter description:**

| Parameter | Type | Instruction |
| --- | --- | --- |
| errMsg | String | Interface call result |
| text | String | Plain text content |
