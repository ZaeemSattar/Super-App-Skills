---
title: "renderjs"
source_url: https://miniapp.neuxnet.com/tutorial/renderjs.html
---
##  renderjs

`renderjs` is a js that runs in the view layer.

`renderjs` has two main functions:

-   Greatly reduce the communication loss between the logic layer and the view layer, and provide high-performance view interaction capability
-   Operate dom in view layer and run js library for web

###  Usage mode

Set lang of script node to renderjs

```
<script module="test" lang="renderjs">
	export default {
		mounted() {
			// ...
		},
		methods: {
			// ...
		}
	}
</script>
```

###  Example

Template

Javascript

css

```
<template>
  <view class="content">
    
    <!-- 1. view layer call logical layer -->
    <view class="space-y-2">
      <view>1. view layer call logical layer</view>
      <view>
        renderjs layer can call the logical layer method through ownerInstance.callMethod method, and pass parameters to the called method during the call.
      </view>
      <button @click="myModule.clickAddBtn">Add Number</button>
      <view >
        Current Number:{{ number }}
      </view>
    </view>
    
    
    <!-- 2. The view layer (renderjs) listens for reactive state -->
    <view class="mt-4 space-y-2">
      <view>2. The view layer (renderjs) listens for reactive state</view>
      <view>
        2.1 Bind a reactive state of the logical layer to :prop
      </view>
      <view>
        2.2 Change: prop indicate when the view layer (renderjs) listening to: prop binding logic layer reactive state changes, call renderjs renderjsModuleName. MethodName method to deal with it
      </view>
      <!-- :prop >  Bind reactive state-->
      <!-- :change:prop >  listening to reactive state -->
      <slider :prop="currentSliderValue" :change:prop="myModule.onChangeSlider"  @change="sliderChange" />
      <view id="SliderValue"></view>
    </view>

    
  </view>
</template>
```

###  Function details

-   Greatly reduce the communication loss between the logic layer and the view layer, and provide high-performance view interaction capability

Separating the logic layer from the view layer has many benefits, but it also has the side effect of blocking communication between the two layers. In particular, the Android-side blocking problem of Mini App and apps affects the production of high-performance applications.

`renderjs` runs on the view layer and can be used to directly manipulate the elements of the view layer to avoid communication loss.

-   Operate dom in view layer and run js library for web The official does not recommend operating dom in Mini App, but if you want to use some libraries that operate dom and window, you can actually use `renderjs` to solve it.

In the default environment, the view layer is rendered by the webview, and `renderjs` runs on the view layer, which can naturally operate dom and window.

###  Precautions

-   Currently, only inline use is supported.
-   Don not reference large class libraries directly. It is recommended to refer to them by creating script dynamically.
-   You can use the life cycle of vue components but not the life cycle of App and Page
-   The ComponentDescriptor instance of the current component can be obtained through this.$ownerInstance.
-   The observation updated data can be directly accessed in the view layer.
-   The path of the page reference resource in the APP side view layer is computed relative to the root directory, for example:./static/test.js.
-   On the Mini App side, dom and bom APIs can be used, but the logic layer data cannot be directly accessed, and uni-related interfaces (such as uni.request) cannot be used
-   The logic layer and the view layer on the H5 side actually run in the same environment, which is equivalent to using a mixin method to directly access the logic layer data.
