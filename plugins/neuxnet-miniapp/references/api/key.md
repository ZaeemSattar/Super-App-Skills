---
title: "uni.hideKeyboard()"
source_url: https://miniapp.neuxnet.com/api/key.html
---
###  uni.hideKeyboard()

Hide soft keyboard

Hide the displayed soft keyboard. If not displayed, no action occurs.

###  uni.onKeyboardHeightChange(CALLBACK)

listen to keyboard height changes

**CALLBACK return parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| height | Number | Keyboard height |

**Sample code**

```
uni.onKeyboardHeightChange(res => {
  console.log(res.height)
})
```

###  uni.offKeyboardHeightChange(CALLBACK)

Cancel listening to the height variation event of the keyboard

**Sample code**

```
uni.offKeyboardHeightChange(callback)
```

###  uni.getSelectedTextRange(OBJECT)

Get the cursor position of the input box after focusing on input or textarea, etc. Note: This interface is valid only if being called at focus. Currently, only vue pages are supported

**OBJECT parameter description:**

| Parameter name | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Success return parameter description:**

| Attribute | Type | Instruction |
| --- | --- | --- |
| start | Number | Initial position of the cursor in the input box |
| end | Number | End position of the cursor in the input box |

**Sample code**

```
uni.getSelectedTextRange({
  success: res => {
    console.log('getSelectedTextRange res', res.start, res.end)
  }
})
```
