---
title: "The supported styles is listed below, and some component may support custom style, which you can check in the component's doc. Except for this, other styles are not supported."
source_url: https://miniapp.neuxnet.com/tutorial/nvue-css.html
---
####  The supported styles is listed below, and some component may support custom style, which you can check in the component's doc. Except for this, other styles are not supported.

###  Notes

-   nvue's css **only supports flex layout**, which is a subset of webview's css syntax. This is because the native layout of the operating system does not support web layouts other than flex. Of course, flex is enough to lay out all kinds of pages, but the writing needs to adapt.
-   Only array syntax is supported when binding class.
-   Media queries are not supported
-   Font files cannot be introduced into style
-   Percentage layout, such as `width：100%`, cannot be used
-   Writing background pictures `background-image` in css is not supported, but image components and layers can be used to achieve background effects similar to those in the web. Because in native development, there is no such concept of background map like web.
-   Use the `image` tag, support the use of base64, but not svg format images
-   Each component of nvue is transparent by default on Android. If `background-color` is not set, it may cause ghosting problems
-   The text content must only be under the `text` component. In the `text` component, the content cannot be written in a new line, or otherwise there will be irremovable peripheral margins.
-   Only the `text` tag can set the font size and font color

##  Box model

Weex box model based on the CSS box model, all of weex elements can be considered as boxes.

The term "box model" is used when talking about design and layout. The box model is essentially a box that wraps around every HTML element. It consists of margins, borders, paddings, and the actual content.

![](data:image/png;base64,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)

> nvue only supports `box-sizing:border-box`, in which box size includes `content`, `padding` and `border-width` and excludes `margin`.

> On Android, nvue only supports `overflow:hidden`.

> On iOS, nvue supports `overflow:hidden` and `overflow:visible` and by default, it is `overflow:visible`.

#####  basic usage

```
	<template>
		<view>
			<image style="width: 400rpx; height: 200rpx; margin-left: 20rpx;" src="https://example.com/image.png"></image>
		</view>
	</template>
```

| Property | Describe |
| --- | --- |
| width {length} | width, default value 0 |
| height {length} | height, default value 0 |

#####  padding

`padding` specifies the space between element content and the element border. One can use shorthand for four edges or specify the padding for one edge:

| Property | Describe |
| --- | --- |
| padding {length} | padding for four edges, default value 0 |
| padding-left {length} | default value 0 |
| padding-right {length} | default value 0 |
| padding-top {length} | default value 0 |
| padding-bottom {length} | default value 0 |

#####  border

`border-style` Set the border style. If the border styles in the four directions are different, you can set them separately:

| Property | Describe |
| --- | --- |
| border-left-style {string} | values `solid` / `dashed` / `dotted`, default value `solid` |
| border-top-style {string} | values `solid` / `dashed` / `dotted`, default value `solid` |
| border-right-style {string} | values `solid` / `dashed` / `dotted`, default value `solid` |
| border-bottom-style {string} | values `solid` / `dashed` / `dotted`, default value `solid` |

| Property | Describe |
| --- | --- |
| solid | The default value of the solid border is `solid` |
| dashed | Square dashed border |
| dotted | Dotted dashed border |

#####  border-width

`border-width`: Set the border width, non-negative value, the default value is 0, if the border widths in the four directions are different, you can set them separately:

| Property | Describe |
| --- | --- |
| border-width {length} | non-negative, default value 0 |
| border-left-width {length} | non-negative, default value 0 |
| border-top-width {length} | non-negative, default value 0 |
| border-right-width {length} | non-negative, default value 0 |
| border-bottom-width {length} | non-negative, default value 0 |

#####  border-color

\`\`\`\`border-color`: Set the border color, the default value is`#000000\`\`\`, if the border colors in the four directions are different, you can set them separately:

| Property | Describe |
| --- | --- |
| border-color {color} | default value #000000 |
| border-left-color {color} | default value #000000 |
| border-top-color {color} | default value #000000 |
| border-right-color {color} | default value #000000 |
| border-bottom-color {color} | default value #000000 |

#####  border-radius

`border-radius`: Set the rounded corners of the border, the default value is 0. If the rounded corners in the four directions are different, you can set them separately:

| Property | Describe |
| --- | --- |
| border-radius {length} | default value 0 which means the corner is a right angle. |
| border-bottom-left-radius {length} | non-negative, default value 0 |
| border-bottom-right-radius {length} | non-negative, default value 0 |
| border-top-left-radius {length} | non-negative, default value 0 |
| border-top-right-radius {length} | non-negative, default value 0 |

> `border-radius` and \`\`\`\`border-width`define the size of the major and semi-major axes of an elliptical arc with a central angle of 90 degrees. If the adjacent two sides`border-radius`(or`border-width\`\`\` are inconsistent, the border curve drawn by nvue may not be smooth enough.

#####  margin

margin specifies the space around elements which is outside the border. One can use shorthand for four edges or specify the margin for one edge:

| Property | Describe |
| --- | --- |
| margin {length} | margin for four edges, default value 0 |
| margin-left {length} | margin for left edge, default value 0 |
| margin-right {length} | margin for left edge, default value 0 |
| margin-top {length} | margin for left edge, default value 0 |
| margin-bottom {length} | margin for bottom edge, default value 0 |

#####  Only for Android

Although `overflow:hidden` is default on Android, a view will not clip its children according to `border-radius` unless all the following conditions meet.

-   The view type is `div`, `A`, `cell`, `refresh` or `loading`.
-   OS version is Android 4.3 or higher.
-   OS version is not Android 7.0
-   A view does not have `background-image` property nor OS version is Android 5.0 or higher.

##  Flexbox

###  Flexbox

Flex is the abbreviation of Flexible Box, meaning "flexible layout", which is used to provide maximum flexibility for box model.

Weex box style model based on the CSS flexbox, ensures that elements behave predictably and the page layout can accommodates to different screen sizes and different display devices.

> Only styles listed below is supported, other style like `order` and `flex-flow` are not supported.

**Flexbox is the default and only style model in Weex, so you don't have to add display: flex; in a container.**

###  flex-direction

The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

| Property | Describe |
| --- | --- |
| column | The flex container's main-axis is vertical. The main-start and main-end points is top and bottom. |
| column-reverse | Behaves the same as column but the main-start and main-end are permuted. |
| row | The flex container's main-axis is horizontal and defined to be the same as direction. The main-start and main-end points are the same as the direction. |
| row-reverse | Behaves the same as row but the main-start and main-end points are permuted |

###  flex-wrap

The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. The default value is nowrap

| Property | Describe |
| --- | --- |
| nowrap | The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is either equivalent to start or before depending flex-direction value. This is the default value. |
| wrap | The flex items break into multiple lines. The cross-start is either equivalent to start or before depending flex-direction value and the cross-end is the opposite of the specified cross-start. |
| wrap-reverse | Behaves the same as wrap but cross-start and cross-end are permuted. |

###  justify-content

The CSS justify-content property defines how Weex distributes space between and around content items along the main-axis of a flex container. The default value is `flex-start`.

| Property | Describe |
| --- | --- |
| flex-start | The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-start side. |
| flex-end | The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-end side. |
| center | The items are packed flush to each other toward the center of the alignment container along the main axis. |
| space-between | The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge. |
| space-around | It indicates equal intervals on both sides of flex member items, so the interval between member items is twice as large as the interval between member items and borders |

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9610d190-2f17-11eb-97b7-0dc4655d6e68.png)

###  align-items

The CSS align-items property sets the align-self value on all direct children as a group. It controls the alignment of items on the cross Axis. The default value is `stretch`.

| Property | Describe |
| --- | --- |
| stretch | Flex items are stretched such that the cross-size of the item's margin box is the same as the line while respecting width and height constraints. |
| flex-start | The cross-start margin edges of the flex items are flushed with the cross-start edge of the line. |
| flex-end | The cross-end margin edges of the flex items are flushed with the cross-end edge of the line. |
| center | The flex items' margin boxes are centered within the line on the cross-axis. |

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/ad305030-2f17-11eb-b680-7980c8a877b8.png)

###  flex

The flex property specifies the length of the flex item, relative to the rest of the flex items inside the same container.

-   If all of the flex items set flex: 1, they will have equal width or height on direction of flex container's flex-direction.
-   If there are two flex items, with one setting flex: 1, and the other setting flex: 2, the first one will take 1/3 container space, and the second one will take 2/3 container space.
-   If all of flex items don't set flex, they will be aligned depending on the container's justify-content property.

**Notes**

**Flex member item does not support `flex-shrink`, `flex-basis`, `align-content` attributes** temporarily.

**That attribute does not support flex: Abbreviation for flex-grow | flex-shrink | flex-basis.**

```
	<!-- Grid layout -->
	<template>
		<view>
			<view v-for="(v, i) in list" class="row">
				<view v-for="(text, k) in v" class="item">
					<view>
						<text>{{text}}</text>
					</view>
				</view>
			</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					list: [
						['A', 'B', 'C'],
						['D', 'E', 'F'],
						['G', 'H', 'I']
					]
				}
			}
		}
	</script>
	<style scoped>
	.row {
		flex-direction: row;
		height: 80px;
	}
	.item {
		flex: 1;
		justify-content: center;
		align-items: center;
		border-width: 1;
		border-style: solid;
		border-color: #FFFFFF;
		background-color: #00AAFF;
	}
	</style>
```

```
	<!-- Contour module -->
	<template>
	  <view>
	    <view style="width:300px; height:100px;">
	      <view style="flex: 1;background-color:blue"></view>
	      <view style="flex: 1;background-color:red"></view>
	      <view style="flex: 1;background-color:yellow"></view>
	    </view>
	  </view>
	</template>
```

##  position localization

Set the positioning type. The default value is `relative`.

| Property | Describe |
| --- | --- |
| relative | is the default value and refers to relative localization |
| absolute | Absolute localization, with the container of the element as the reference system |
| fixed | Fixed localization, ensure that the element is displayed in the corresponding position in the page window, even if the window is scrolling, it will not move |
| sticky | It means that only when the element is scrolled out of the page, the element will be fixed at the top of the page window, achieving sticky effect/sticky localization (layout). |

> Use position:sticky or position: fixed can fix the head navigation bar (sticky effect)

```
	<!-- Center horizontally and vertically -->
	<template>
		<view class="wrapper">
			<view class="box"></view>
		</view>
	</template>
	<style scoped>
		.wrapper{
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: #cccccc;
			justify-content: center;
			align-items: center;
		}
		.box{
			width: 200px;
			height: 200px;
			background-color: #fc0000;
		}
	</style>
```

> Only for Android

If your component is bigger than its parent, it will be partial invisible as Weex on Android only supports `overflow:hidden`.

##  Transition

`transition` allows CSS property values to transition smoothly within a certain time interval.

####  transition-property

Allows the name of the transitional animation to set the value of the different styles transition effect, the default value is empty, that does not perform any transition, the following table lists all the legitimate parameters of the property:

| Property | Describe |
| --- | --- |
| width | The transition is performed when the width of the component is involved in the animation |
| height | The transition is performed when the height of the component is involved in the animation |
| top | The transition is performed when the top of the component is involved in the animation |
| bottom | The transition is performed when the bottom of the component is involved in the animation |
| left | The transition is performed when the left of the component is involved in the animation |
| right | The transition is performed when the right of the component is involved in the animation |
| background-color | The transition is performed when the backgroundColor of the component is involved in the animation |
| opacity | The transition is performed when the opacity of the component is involved in the animation |
| transform | The transition is performed when the transform of the component is involved in the animation |

####  transition-duration

Specifies the duration of the transition (in milliseconds). The default value is 0, indicating that there is no animation.

####  transition-delay

Specifies the time interval (in milliseconds or seconds) between the request transition and the transition. The default value is 0, indicating that there is no delay, and the transition is performed immediately after the request.

####  transition-timing-function

Describes the velocity curve of the transition, which is used to make the transition smoother. The default is ease. The following table lists all the valid attributes:

| Property | Describe |
| --- | --- |
| ease | The transition gradually slow down the transition effect |
| ease-in | The transition starts slowly and then becomes faster for the transition effect |
| ease-out | The transition starts quickly and then slows the transition effect |
| ease-in-out | The transition starts slowly, then goes fast and then slowly ends the transition effect |
| linear | The transition changes at constant speed |
| cubic-bezier(x1, y1, x2, y2) | Using the custom transition in the third-order Bessel function, the parameter values of the function must be between 0 and 1. For more information on three times Bessel, see [cubic-bezier](http://cubic-bezier.com/) and [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) . |

####  Example

```
<template>
	<view class="row">
		<view class="box" :class="{'active':isActive}" @click="isActive = !isActive">
			<image class="img" src="https://example.com/img.png" mode="aspectFill"></image>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				"isActive":false
			}
		}
	}
</script>
<style scoped>
	.row{
		align-items: center;
		justify-content: center;
	}
	.box{
		margin:20px;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		width:200rpx;
		height:200rpx;
		background-color: #007AFF;
		transition-property: width, height, background-color;
		transition-duration:0.3s;
		transition-delay:0.1s;
		transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
	}
	.active{
		width:300rpx;
		height:300rpx;
		background-color: #6bd8ff;
	}
	.img{
		width:80rpx;
		height:80rpx;
	}
</style>
```

##  Transform

Applied in the 2D or 3D transformation of elements. This attribute allows the rotation, scaling, moving, tilting and so on of the element.

| Property | Describe |
| --- | --- |
| `translateX({<length/percentage>})` | X-axis direction panning, length unit or percentage is supported. |
| `translateY({<length/percentage>})` | Y-axis direction panning, length unit or percentage is supported. |
| `translate({<length/percentage>} {<length/percentage>})` | X-axis and y-axis directions are simultaneously translated, `translateX` + `translateY` abbreviation. |
| `scaleX(<number>)` | X-axis direction scaling, in numeric value, indicates scaling ratio. Percentage is supported. |
| `scaleY(<number>)` | Y-axis direction scaling, in numeric value, indicates scaling ratio. Percentage is supported. |
| `scale(<number>)` | X-axis and Y-axis directions are zoomed simultaneously, `scaleX` + `scaleY` abbreviation. |
| `rotate(<angle/degree>)` | The transformation that rotates the element around a fixed point (specified by the `transform-origin` attribute) without deformation. The specified angle defines the measure of rotation. If the angle is positive, rotate clockwise; Otherwise, rotate counterclockwise. |
| `rotateX(<angle/degree>)` | Rotation in the X-axis direction. |
| `rotateY(<angle/degree>)` | Rotation in the Y-axis direction. |
| `rotateZ(<angle/degree>)` | Rotation in the Z-axis direction. |
| `perspective(<length>)` | Specify the distance between the observer and the z=0 plane, which makes the elements with three-dimensional position transformation produce perspective effect. The three-dimensional elements with z>0 are larger than the normal ones, and those with z<0 are smaller. The size is determined by the value of this attribute. Supported by Android 4.1+. |
| `transform-origin {length/percentage/keyword (top/left/right/bottom)}:` | Set the origin of an element deformation, which only supports 2D coordinates. |

> Consider use `transition` instead, which supports all the style that `transform` supports except for `transform-origin` and `perspective` `rotate` is the same as `rotateZ`.

####  Example

```
<template>
	<view class="card">
		<view class="box">
			<view class="row-box">
				<view @click="isRotate = !isRotate" class="fill row-rotate " :class="{'rotate':isRotate}"></view>
			</view>
			<text>rotate(45deg) </text>
		</view>
		<view class="box">
			<view class="row-box">
				<view @click="isScale = !isScale" class="fill row-scale" :class="{'scale':isScale}"></view>
			</view>
			<text>scale(2)</text>
		</view>
		<view class="box">
			<view class="row-box">
				<view @click="isTranslateX = !isTranslateX" class="fill row-translateX" :class="{'translateX':isTranslateX}"></view>
			</view>
			<text>translateX(45px)</text>
		</view>
		<view class="box">
			<view class="row-box">
				<view @click="isTranslateY = !isTranslateY" class="fill row-translateY" :class="{'translateY':isTranslateY}"></view>
			</view>
			<text>translateY(45px)</text>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				"isRotate": false,
				"isScale":false,
				"isTranslateX":false,
				"isTranslateY":false
			}
		},
	}
</script>
<style>
	.card {
		width:710rpx;
		margin:20rpx;
		flex-direction:row;
		flex-wrap: wrap;
	}
	.box{
		width:355rpx;
		height:355rpx;
		justify-content: center;
		align-items: center;
	}
	.row-box{
		width:200rpx;
		height:200rpx;
		margin:10rpx;
		background-color: #DDDDDD;
	}
	.fill{
		width:200rpx;
		height:200rpx;
		position: relative;
		background-color: #03A9F4;
		opacity: 0.5;
	}
	.row-rotate{
		transition-duration:0.3s;
		transform:rotate(0deg);
	}
	.rotate{
		transition-duration:0.3s;
		transform:rotate(45deg);
	}
	.row-scale{
		transition-duration:0.3s;
		transform:scale(1);
	}
	.scale{
		transform:scale(2);
	}
	.row-translateX{
		transition-duration:0.3s;
		transform:translateX(0px);
	}
	.translateX{
		transform:translateX(45px);
	}
	.row-translateY{
		transition-duration:0.3s;
		transform:translateY(0px);
	}
	.translateY{
		transform:translateY(45px);
	}
</style>
```

##  Pseudo class

| Property | Describe |
| --- | --- |
| active | All components are supported |
| focus | Only the `input` component and `textarea` component are supported |
| disabled | Only the `input` component and `textarea` component are supported |
| enabled | Only the `input` component and `textarea` component are supported |

**Notes**

> the high priority override low priority when rules take effect at the same time. such as: "input:active:enabled" will override "input:active".

-   the interconnection rule as follow

##  Linear-gradient

Weex support linear-gradient background, You can see [W3C description of the gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients) . You can use linear gradient by `background-image` property.

```
	background-image:linear-gradient(to bottom right,#AD18F9,#05DFC7);
```

Weex currently supports two color gradients. The direction of the gradient is as follows:

| Value | Describe |
| --- | --- |
| to right | From left to right |
| to left | From right to left |
| to bottom | From top to bottom |
| to top | From bottom to top |
| to bottom right | From the upper left corner to the lower right corner |
| to top left | From the lower right corner to the upper left corner |

**Notes**

> `background-image` takes precedence over `background-color`, which means setting both `background-image` and `background-color`, \` \`\`background-color`is overridden.`background\`\`\`\` does not support shorthand.
> 
> **`radial-gradient` is not currently supported, do not use it.**

##  Box-shadow

###  Shadow `box-shadow`

```
{box-shadow:inset offset-x offset-y blur-radius color}
{box-shadow:inset offset-x offset-y blur-radius color}
```

| Property | Describe |
| --- | --- |
| inset (optional) | Shadow is outside the border by default. After using `inset`, the shadow is inside the border (even if it is a transparent border), and below the content above the background. |
| offset-x | Set the horizontal offset, if it is negative, the shadow is located to the left of the element. |
| offset-y | Set the vertical offset, if it is negative, the shadow is located above the element. |
| blur-radius | Set the blur radius, px unit length value, the larger the value, the larger the blur area, and the bigger and lighter the shadow. Cannot be negative. The default value is 0, and the shadow edge is sharp at this value. |
| color | Set shadow color |

Example

```
	.box4 {
	    box-shadow: inset 3px 5px 20px rgb(255, 69, 0);
	}
```

**Notes**

-   Each element only supports setting one shadow effect, and does not support multiple shadows acting on one element at the same time.
-   On the Android platform, the component that sets the \`\`box-shadow\`\`\` needs to give up the shadow rendering position, otherwise there will be a problem of incomplete shadow display.

###  Android: Shadow

####  shadow \`\`\`box-shadow\`\`\`\`

Example

```
<template>
	<view class="wrapper">
		<view>
			<view class="box">
				<text class="title" style="text-align: center">Hello World</text>
			</view>
		</view>
	</view>
</template>
<style>
	.box {
		width: 300px;
		height: 100px;
		background-color: #FFE4C4;
		border-radius: 10px;
		box-shadow: 3px 5px 2px rgb(255, 69, 0);
		margin: 10px;
	}
</style>

```

####  shadow `elevation`

At present, the Android platform's support for the shadow style (box-shadow) is not perfect, and there are problems such as abnormal display of the shadow style when setting a rounded border, and occupying the rendering area of the component view.

To solve these problems, the elevation attribute ( **attribute of the component, not css style**) is added to set the level of the component and the Number type. The larger the level value, the more obvious the shadow. The shadow effect is also related to the position of the component, the closer to the bottom of the page, the more obvious the shadow effect

Usage

```
	<view elevation="5px"></view>
```

####  Notes

-   The color of the shadow created by setting the `elevation` attribute cannot be modified temporarily
-   After setting `elevation`, the level of the current component will be higher than that of other components without elevation. The larger the value range of `elevation`, the higher the level! Be aware of component coverage scenarios
-   To avoid conflict between the shadow effect of the `elevation` attribute and the shadow style (`box-shadow`), the `box-shadow` style becomes invalid after setting the `elevation` attribute
-   To use `elevation`, the parent element of the shadow element needs to be larger than the shadow range, or otherwise the shadow will be clipped
-   IOS does not support the `elevation` attribute, please use `box-shadow` to set the shadow
-   Setting `box-shadow` requires the current component to yield the shadow position. Otherwise, the shadow cannot be seen normally

##  Text style

###  color

`color`: <colors> this property set the foreground color of an component's text content.. The property color support multiple formats of values.

-   RGB（ rgb(255, 0, 0) ）
-   RGBA（ rgba(255, 0, 0, 0.5) ）
-   Hexadecimal ( #ff0000 );
-   Simplified hexadecimal notation ( #f00 )
-   Color value keyword (red)

> Only `text` tags can set the font color

###  font-size

`font-size`: <length> this property specifies the size of the font.

###  font-style

`font-style`: <enum> `normal` | `italic`. This property lets you select italic or normal faces within a font-family. Default value is `normal`.

###  font-weight

This property indicate the weight of the text.

-   values: `normal`, `bold`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
-   `normal` is equivalent to 400, `bold` is equivalent to 700;
-   ios support showing 9 kind of font-weight.android support showing 2 kind of font-weight:400,700, other value will map to 400 or 700.
-   Some standard values like `lighter`, `bolder`, number unit are not supported.

###  text-decoration

`text-decoration {string}`: Font decoration. The default value is `none`.

| Property | Describe |
| --- | --- |
| none | Default. Define standard text |
| underline | Define a line below the text |
| line-through | Define a line through the text |

> Only `text` and `richtext` are supported
> 
> `text-decoration:overline` not supported

###  text-align

`text-align {string}`: The alignment. The default value is `left`.

| Property | Describe |
| --- | --- |
| left | Align the text to the left |
| center | Align the text to the middle |
| right | Align the text to the right |

> `text-align:justify` not supported

###  font-family

\`\`\`font-family {string}\`\`\`\`: Set the font. This setting does not guarantee consistency between devices on different platforms. If the specified font cannot be found at the device, a typeface fallback will occur and the default typeface will be load. The fallback mechanism may vary in different devices.

###  text-overflow

\`\`\`text-overflow {string}\`\`\`\`: Set the omission style when the content is too long.

| Property | Describe |
| --- | --- |
| clip | Trimmed text |
| ellipsis | Display ellipsis to represent the trimmed text |

> Only `text` and `richtext` are supported

###  lines

`lines {number}`: A positive integer, specifying the maximum number of text lines, the default `lines` value is 0, which means that the maximum number of lines is not limited `lines`. If the text is not long enough, the actual number of displayed lines will be less than the specified number of lines.

###  line-height

`line-height`: <length> The line height of every line in the text. `line-height` is the space between top and bottom. `line-height``` has nothing to do with`font-size`, because`line-height`is limited by top and bottom,`font-size`is parsed by glyph. Equal ``line-height` and `font-size` will generally cause text to be truncated.

###  word-wrap

`word-wrap:<string>` For nvue, `anywhere` means that the character is the smallest element to truncate and wrap the line. Other values or not specifying this attribute are performed in English words. newline.

| Property | Describe |
| --- | --- |
| break-word | Line feed inside long words or URL addresses |
| normal | Line feed only at allowed hyphenation points |
| anywhere | Use characters as the smallest element to do truncation and line feed |

> Not currently supported on Android platform
