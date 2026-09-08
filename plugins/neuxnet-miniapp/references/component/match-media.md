---
title: "match-media"
source_url: https://miniapp.neuxnet.com/component/match-media.html
---
###  match-media

media query match detection node.

Similar to using media query to adapt to different screen sizes in web page development, match-media is a basic view component that can adapt to different screen sizes. You can specify a set of media query rules, and this component will be displayed only when the query conditions are met.

For example, if a sidebar is placed in the match-media component, and the media query rule is set to display only on wide screen, then the sidebar can be displayed on the PC wide screen, but not on the mobile narrow screen.

**Attribute description**

| Attribute name | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| min-width | number |  | No | Minimum page width (in px) |
| max-width | number |  | No | Maximum page width (in px) |
| width | number |  | No | Page width (in px) |
| min-height | number |  | No | Minimum page height (in px) |
| max-height | number |  | No | Maximum page height (in px) |
| height | number |  | No | Page height (in px) |
| orientation | string |  | No | Screen direction (landscape or portrait) |

**Example of match-media**

For the following sample code

```

<template>
    <view>
        <match-media :min-width="375" :max-width="800" >
        </match-media>

        <match-media :min-height="400" :orientation="landscape">
        </match-media>
    </view>
</template>
```
