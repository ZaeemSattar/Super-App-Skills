---
title: "navigator"
source_url: https://miniapp.neuxnet.com/component/navigator.html
---
####  navigator

Page jump.

This component is similar to the `<a>` component in HTML, but it can only jump to local pages. The target page must be registered in pages.json.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| url | String |  | The jump link in the application is a relative path or an absolute path, such as "../first/first", "/pages/first/first", please note that you cannot add the suffix `.vue` |  |
| open-type | String | navigate | Goto method |  |
| delta | Number |  | Valid when open-type is 'navigateBack', indicating the number of returned layers |  |
| hover-class | String | navigator-hover | Specify the style class when clicking. For hover-class="none", there is no click state |  |
| hover-start-time | Number | 50 | How long does the click state appear after pressing, in milliseconds |  |
| hover-stay-time | Number | 600 | Retention time of the click state after finger release, in milliseconds |  |

**open-type valid value**

| Value | Instruction |
| --- | --- |
| navigate | Function corresponding to uni.navigateTo |  |
| redirect | Function corresponding to uni.redirectTo |  |
| switchTab | Function corresponding to uni.switchTab |  |
| reLaunch | Corresponding to the function of uni.reLaunch |  |
| navigateBack | Function corresponding to uni.navigateBack |  |

**Notice**

-   Switch to tabbar page and open-type="switchTab" must be set
-   navigator-hover defaults to {background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}, `<navigator>` the background color of the child nodes should be transparent.
-   If the navigator-`open-type` attribute uses the corresponding value, the function of the corresponding value will be higher than the corresponding jump path.
-   The app-nvue platform only supports `<navigator>` for pure nvue projects (render is native). If not rendered as native, nvue temporarily does not support navigator component. Please use API to redirect.

```
<template>
	<view>
		<view class="page-body">
			<view class="btn-area">
				<navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
					<button type="default">
						</button>
				</navigator>
				<navigator url="redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
					<button type="default">
						</button>
				</navigator>
				<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default">
						</button>
				</navigator>
			</view>
		</view>
	</view>
</template>
<script>
//navigate.vue page reception parameters
export default {
	}
}
</script>
```

The url has a length limit. Too long strings will fail to be delivered. You can use `encodeURIComponent` and other solutions, the following is an example of `encodeURIComponent`.

```
<navigator :url="'/pages/navigate/navigate?item='+ encodeURIComponent(JSON.stringify(item))"></navigator>
```

```
//navigate.vue page reception parameters
onLoad: function (option) {
	const item = JSON.parse(decodeURIComponent(option.item));
}
```
