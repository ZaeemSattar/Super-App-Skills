---
title: "tabBar uses Gaussian blur effect"
source_url: https://miniapp.neuxnet.com/tutorial/app-blureffect.html
---
###  tabBar uses Gaussian blur effect

> HBuilderX from version 2.4.4, uni-app iOS side TabBar supports Gaussian blur effect (frosted glass effect) Since HBuilderX version 3.4.10, the uni-app Android TabBar supports Gaussian blur effect (frosted glass effect)

Here's how to use the Gaussian blur effect, and some precautions.

####  Implementation principle

The implementation principle is very simple. After enabling the Gaussian blur effect, the page will become taller (increase the height of the tabBar), the page layout will extend below the tabBar, and the framework will automatically add a Gaussian blur effect view on the tabBar, and then look through this view. The following content will see the blur effect.

**Notes when using the Gaussian Blur effect:**

-   After enabling the Gaussian blur effect, it is not recommended to set the backgroundColor of the tabBar. If you have to set it, you need to use `rgba` to set the transparency, otherwise the blur effect will not be seen;
    
-   Since the page height has changed, some precautions should be taken in the page layout (very simple). The following will explain how `vue` and `nvue` pages are adapted; and a demo will be provided for your reference;
    
-   After enabling the Gaussian blur effect, do not dynamically set the hiding of the tabBar, otherwise it will affect the page layout;
    
-   In order to facilitate developers to adapt to multiple platforms, the framework has provided a method to obtain the height of the tabBar, and will return different values `windowBottom` according to different platforms; the usage method is as follows
    
    ```
    // use it directly in css in vue
    .fixed1{
    	position: fixed;
    	left: 0;
    	bottom: var(--window-bottom);
    }
    
    // nvue does not support css writing, please use js method to get
    uni.getSystemInfoSync().windowBottom
    ```
    

####  Enable Gaussian Blur effect

First, you need to add the configuration of `safearea` under the `app-plus` node of `manifest.json`, and set the `offset` of `bottom` to `none`, so that the platform will automatically handle the height adaptation of iPhoneX and other full-screen models. Otherwise, the page may be blocked on the full-screen model.

```
// manifest.json
"app-plus": {
	...
	"safearea" : {
		 "bottom" : {
		      "offset" : "none"
		 }
	}
	...
}
```

Then add the configuration information of `tabBar` in `pages.json` and configure the value of `blurEffect`

```
{
	...
	...
	
	"tabBar": {
		"blurEffect":"extralight",
		"color": "#999999",
		"borderStyle": "#000000",
		// "backgroundColor": "rgba(0,255,51,0.3)",
		"spacing": "5px",
		"height": "50px",
		"selectedColor": "#0062cc",
		"list": [
		{
		    "text" : "HELLO",
		    "iconPath" : "static/ic_tabbar_home_nor.png",
		    "selectedIconPath" : "static/ic_tabbar_home_sel.png",
			"pagePath": "pages/index/index"
		},
		{
		    "text" : "WORLD",
		    "iconPath" : "static/ic_tabbar_group_nor.png",
		    "selectedIconPath" : "static/ic_tabbar_group_sel.png",
			"pagePath": "pages/index/page"
		}]
	}
}

```

blurEffect corresponds to the configuration of Gaussian blur, which can take values:

-   "dark" - dark style blur, corresponding to iOS native UIBlurEffectStyleDark effect;
-   "extralight" - the highlight style is blurred, corresponding to the iOS native UIBlurEffectStyleExtraLight effect;
-   "light" - light style blur, corresponding to iOS native UIBlurEffectStyleLight effect;
-   "none" - no blur effect.

#####  vue page adaptation

-   Add a placeholder view: Since the height of the page becomes higher, the page will be blocked by the tabBar, so you need to add a placeholder view at the bottom of the page, with the height set to the height of the tabBar, so that the elements of the page will not be blocked by the tabBar ( Enable the Gaussian blur effect, the framework will automatically handle the offset at the bottom of the scroll bar and will not be obscured by the tabBar);
-   Absolute positioning precautions: Also because the height of the page has changed, the absolute positioning view needs to consider the occlusion of the tabBar. For example, if you want a view to be fixed at the bottom of the page, you need to set the bottom value to the height of the tabBar;

Example (for source code, please refer to index.vue of the example project)

```
<template>
	<view class="content">
		<image v-for="index in 3" :key='index' src="../../static/test.png" style="width: 750rpx; height: 1136rpx;" mode="scaleToFill"></image>
		<!-- Add a placeholder view at the bottom of the page, the height is equal to the height of the tabBar -->
		<view class="edgeInsetBottom"></view>
		<!-- Absolutely positioned views need to consider the issue of tabBar occlusion, bottom should add the height of tabBar -->
		<view class="fixedView"></view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				tabbarHeight:0
			}
		},
		onReady() {
			// Get the height of the tabBar
			this.tabbarHeight = uni.getSystemInfoSync().windowBottom;
		}
	}
</script>
<style>
	.content {
		background-color: #FFFFFF;
		line-height: 0;
	}
	
	.edgeInsetBottom {
		width: 750rpx;
height: var(--window-bottom);
		background-color: #FFFFFF;
	}
	
	.fixedView{
		position: fixed;
		width: 750rpx;
		height: 30px;
		background-color: #4CD964;
		bottom: var(--window-bottom);
	}
</style>
```

#####  nvue page adaptation

> Because the nvue page is a pure native layout, when the frosted glass effect is enabled, the native frame can automatically adjust the contentInset bottom value of the scroll view, which is equivalent to offsetting the height of the tabbar at the bottom of the page, so that the original elements of the page are not will be occluded, and the position of the scrollbar will be handled automatically. Note: The offset position shows the background color of the scroll view;

-   Add adjustBottom="true" to the scroll view: Only the frame with adjustBottom="true" will automatically adjust the contentInset bottom value of the scroll view. **Here is a point to note**, if your page is scrolled as a whole, then You need the **root node of your page to be a scroll view** and then add adjustBottom="true", if the page part is scrollable, then add the adjustBottom="true" attribute to the scroll view at the bottom of the page; (the trick is to Add property to scroll view occluded by tabBar)
-   Absolute positioning precautions: Like vue pages, absolute positioning views need to consider the occlusion of the tabBar. For example, if you want a view to be fixed at the bottom of the page, you need to set the bottom value to the height of the tabBar;

**Note** android does not support adjustBottom temporarily

Example

```
<template>
	<!-- The root node of the page is the scroll view, and add adjustBottom="true" -->
	<scroll-view class="content" scroll-y="true" adjustBottom="true">
		<image v-for="index in 3" :key='index' src="../../static/test.png" style="width: 750rpx; height: 1136rpx;" mode="scaleToFill"></image>
		<!-- Absolutely positioned views need to consider the issue of tabBar occlusion, bottom should add the height of tabBar -->
		<view class="fixedView" :style="{ bottom : tabbarHeight + 'px'}"></view>
	</scroll-view>
</template>
<script>
	export default {
		data() {
			return {
				tabbarHeight: 0
			}
		},
		onReady() {
			// Get the height of the tabBar
			this.tabbarHeight = uni.getSystemInfoSync().windowBottom;
		}
	}
</script>
<style>
	.content {
		background-color: #FFFFFF;
		line-height: 0;
	}

	.fixedView{
		position: fixed;
		width: 750rpx;
		height: 30px;
		background-color: #4CD964;
	}
</style>
```

###  navigation-bar Use Gaussian Blur

> Since HBuilderX version 2.4.4, the uni-app iOS navigationBar supports Gaussian blur effect (frosted glass effect) Since HBuilderX version 3.4.10, the uni-app Android navigationBar supports Gaussian blur effect (frosted glass effect)

####  Instructions

Add the `blurEffect` attribute to the page style --> app-plus --> titleNView to enable the Gaussian blur effect

-   "dark" - dark style blur, corresponding to iOS native UIBlurEffectStyleDark effect;
-   "extralight" - the highlight style is blurred, corresponding to the iOS native UIBlurEffectStyleExtraLight effect;
-   "light" - light style blur, corresponding to iOS native UIBlurEffectStyleLight effect;
-   "none" - no blur effect.

Example

```
{
	"pages": [ 
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "vue",
				"app-plus":{
					"bounce":"vertical",
					"titleNView": {
						"blurEffect":"extralight",
						"backgroundColor": "#00ffffff",
						"type" : "float"
					}
				}
			}
		}
}
```

Note: backgroundColor needs to be set with a transparent color to see the Gaussian blur effect. You can't see the Gaussian blur effect without setting the backgroundColor!

###  nvue view component uses Gaussian blur effect

> Since HBuilderX version 2.4.8+, the nvue view component on iOS supports Gaussian blur effect (frosted glass effect) The Android platform is not currently supported

####  Instructions

Add the `blurEffect` property to the view component to enable the Gaussian blur effect, the value is the same as the TabBar

-   "dark" - dark style blur, corresponding to iOS native UIBlurEffectStyleDark effect;
-   "extralight" - the highlight style is blurred, corresponding to the iOS native UIBlurEffectStyleExtraLight effect;
-   "light" - light style blur, corresponding to iOS native UIBlurEffectStyleLight effect;
-   "none" - no blur effect.

**Precautions**

-   After enabling the Gaussian blur effect, it is not recommended to set the background-color. If you have to set it, you need to use `rgba` to set the transparency, otherwise the blur effect will not be seen;
-   After the Gaussian blur effect is enabled, the view corresponding to the view component becomes frosted glass, and the content below will be blurred through the view, and the view added on the view will not be affected;

Example

```
<template>
	<view class="container">
		<image src="../../static/3.jpg" class="img" mode="aspectFill"></image>
		<view class="blur" blurEffect="light">
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>
<style>
	.container{
		flex: 1;
	}
	.img {
		flex: 1;
	}
	
	.blur{
		position: fixed;
		top: 300rpx;
		bottom: 300rpx;
		left: 20px;
		right: 20px;
		/* background-color: rgba(152,245,255,0.3); */
	}
</style>
```
