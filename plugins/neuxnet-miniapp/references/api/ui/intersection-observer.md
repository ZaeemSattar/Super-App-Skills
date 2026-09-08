---
title: "uni.createIntersectionObserver(\\[this\\], \\[options\\])"
source_url: https://miniapp.neuxnet.com/api/ui/intersection-observer.html
---
The node layout intersection status API can be used to listen to the intersection status of two or more component nodes in the layout position. This set of APIs can often be used to deduce whether or to what extent certain nodes are visible to users.

###  uni.createIntersectionObserver(\[this\], \[options\])

Create and return a `IntersectionObserver` object instance.

**Optional parameters of options are:**

| Field name | Type | Instruction |
| --- | --- | --- |
| thresholds | Array | An numeric array, containing all thresholds. The default is `[0]`. |
| initialRatio | Number | In terms of initial intersection ratio, if the intersection ratio detected when calling is not equal to this value and reaches the threshold, the callback function of the listener will be triggered once. The default is `0`. |
| observeAll | Boolean | Whether to observe multiple reference nodes (instead of one) simultaneously. If it is set to `true`, the `targetSelector` of `observe` will select multiple nodes (note: selecting too many nodes simultaneously will affect rendering performance) |

###  Method list of IntersectionObserver object

| Method | Instruction |
| --- | --- |
| IntersectionObserver.relativeTo(selector,\[margins\]) | Use the selector to specify a node as one of the reference areas. |
| IntersectionObserver.relativeToViewport(\[margins\]) | Specify the page display area as one of the reference areas |
| IntersectionObserver.observe(selector,\[callback\]) | Specify the target node and start listening to the change of intersection status. The callback function `callback` contains a parameter `result` |
| IntersectionObserver.disconnect() | Stop listening. The callback function will no longer be triggered. |

**margins parameter:** Used to expand (or shrink) the bound of the layout area of the reference node.

| Attribute | Type | Defaults | Required or not | Instruction |
| --- | --- | --- | --- | --- |
| left | number |  | No | Left bound of node layout area |
| right | number |  | No | Right bound of node layout area |
| top | number |  | No | Upper bound of node layout area |
| bottom | number |  | No | Lower bound of node layout area |

In the following sample code, if the target node `".test"` enters 100px below the `".scroll"` area, the callback function will be triggered.

```
uni.createIntersectionObserver(this).relativeTo('.scroll',{bottom: 100}).observe('.test', (res) => {
  console.log(res);
})
```

**Fields contained in the observe callback function result**

| Field name | Type | Instruction |
| --- | --- | --- |
| intersectionRatio | Number | Intersection ratio |
| intersectionRect | Object | The boundary of the intersection area, including four items: `left`, `right`, `top`, and `bottom` |
| boundingClientRect | Object | The boundary of the target node layout area, including four items: `left`, `right`, `top`, and `bottom` |
| relativeRect | Object | The boundary of the reference area, including four items: `left`, `right`, `top`, and `bottom` |
| time | Number | Timestamp of intersection detection |

**Tips**

-   The area intersect with the display area of the page does not accurately represent the area visible to the user, because the area involved in the calculation is the "layout area", and the layout area may be cropped and hidden by other nodes (such as the node whose overflow style is hidden in the ancestor node) or covered (such as the node located by fixed) when drawing.
-   It is recommended to listen to the node interaction status `API` in the `onReady` life cycle. The reason is that `API` needs to find page elements, and the page has already been rendered primarily at `onReady`, and the corresponding elements can already be found.

###  Code example

```
<template>
	<view class="container">
		<view class="page-section">
			<scroll-view class="scroll-view" scroll-y>
				<view class="scroll-area">
					<view class="ball"></view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	let observer = null;
	export default {
		data() {
			return {
				appear: false
			}
		},
		onReady() {
			observer = uni.createIntersectionObserver(this);
            observer.relativeTo('.scroll-view').observe('.ball', (res) => {
              if (res.intersectionRatio > 0 && !this.appear) {
                this.appear = true;
              } else if (!res.intersectionRatio > 0 && this.appear) {
                this.appear = false;
              }
            })
		},
		onUnload() {
			if (observer) {
				observer.disconnect()
			}
		}
	}
</script>
<style>
	view,page {
		display: flex;
		flex-direction: column;
	}

	.scroll-view {
		height: 400rpx;
		background: #fff;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}

	.scroll-area {
		height: 1300rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: .5s;
	}

	.notice {
		margin-top: 150rpx;
		margin: 150rpx 0 400rpx 0;
	}

	.ball {
		width: 200rpx;
		height: 200rpx;
		background: #1AAD19;
		border-radius: 50%;
	}
</style>

```
