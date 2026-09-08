---
title: "Uni transition — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-transition.html
---
component name: uni-transition

> Code block: `uTransition`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-transition)

Element transition animation

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   The component needs to depend on the `sass` plugin, please install it manually
-   The rotate animation does not need to fill in the deg unit. Filling in the unit animation on the applet will not execute
-   Modify the width and height animation under NVUE, cannot locate the center point
-   Modify the width and height under the Baidu applet, which may affect other animations, please pay attention
-   nvue does not support custom-class , please use styles

###  Basic usage

```
<template>
	<view>
		<button type="primary" @click="open">fade</button>
		<uni-transition mode-class="fade" :styles="{'width':'100px','height':'100px','backgroundColor':'red'}" :show="show" @change="change" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
		}
	},
	onLoad() {},
	methods: {
		open(mode) {
			this.show = !this.show
		},
		change() {
			console.log('触发动画')
		}
	}
}
</script>
```

###  style override

**Note: `nvue` does not support the `custom-class` attribute, you need to use the `styles` attribute for compatibility**

Use the `custom-class` attribute to bind styles to customize the style of `uni-transition`

```
<template>
	<view class="content">
		<uni-transition custom-class="custom-transition" mode-class="fade" :duration="0" :show="true" />
	</view>
</template>

<style>
/* 常规样式覆盖  */
.content >>> .custom-transition {
	width:100px;
	height:100px;
	background-color:red;
}
</style>
<style lang="scss">
/* 如果使用 scss 需要使用 /deep/  */
.content /deep/ .custom-transition {
	width:100px;
	height:100px;
	background-color:red;
}
</style>
```

If you use `styles` note that properties with '-' connectors need to use small camel case such as: `backgroundColor:red`

```
<template>
	<view class="content">
		<uni-transition :styles="styles" mode-class="fade" :duration="0" :show="true" />
	</view>
</template>
<script>
export default {
	data() {
		return {
			styles:{
				'width':'100px',
				'height':'100px',
				'backgroundColor':'red'
			}
		}
	}
}
</script>
```

###  custom animation

When the built-in animation type cannot meet the requirements, you can use `step()` and `run()` to customize the animation. For parameters and specific usage, please refer to the property description below

The `init()` method can override the default configuration

```
<template>
	<view>
		<button type="primary" @click="run">执行动画</button>
		<uni-transition ref="ani" :styles="{'width':'100px','height':'100px','backgroundColor':'red'}" :show="show"  />
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: true,
		}
	},
	onReady() {
		this.$refs.ani.init({
			duration: 1000,
			timingFunction: 'linear',
			transformOrigin: '50% 50%',
			delay: 500
		})
	},
	methods: {
		run() {
			// At the same time pan right to 100px, rotate 360 to read
			this.$refs.ani.step({
				translateX: '100px',
				rotate: '360'
			})
			// After the above animation is executed, wait for 200 milliseconds to translate to 0px, rotate to 0 to read
			this.$refs.ani.step({
				translateX: '0px',
				rotate: '0'
			},
			{
				timingFunction: 'ease-in',
				duration: 200
			})
			// start the animation
			this.$refs.ani.run(()=>{
				console.log('动画支持完毕')
			})
		}
	}
}
</script>
```

##  API

###  Transition Props

| property name | type | default value | description |
| --- | --- | --- | --- |
| show | Boolean | false | Control component show or hide |
| mode-class | Array/String | \- | Built-in transition animation type |
| custom-class | String | \- | custom-class name |
| duration | Number | 300 | Transition Animation Duration |
| styles | Object | \- | Component styles, the same as css styles, note that properties with '-' connectors need to be written in small camel case, such as: `backgroundColor:red` |

####  mode-class built-in transition animation type description

**Format is**: `'fade'` or `['fade','slide-top']`

| property name | description |
| --- | --- |
| fade | Fade out transition |
| slide-top | Transition from top to bottom |
| slide-right | Transition from right to left |
| slide-bottom | Transition from bottom to top |
| slide-left | Transition from left to right |
| zoom-in | Transition from small to large |
| zoom-out | Transition from big to small |

**Notice**

When used in combination, when the same type of opposite transition animations (slide-top, slide-bottom) are used at the same time, only the last one will take effect

###  Transition Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| click | Click component triggers | \- |
| change | Triggered when transition animation ends | e = {detail:true} |

###  Transition Methons

| method name | description | parameters |
| --- | --- | --- |
| init() | Manually initialize the configuration | Function(OBJECT:config) |
| step() | Animation Queue | Function(OBJECT:type,OBJECT:config) |
| run() | Execute animation | Function(FUNCTION:callback) |

###  init(OBJECT:config)

**Calling methods by ref**

Manually set the animation configuration, which needs to be called after the page is rendered

```
this.$refs.ani.init({
	duration: 1000,
	timingFunction:'ease',
	delay:500,
	transformOrigin:'left center'
})
```

###  step(OBJECT:type,OBJECT:config) animation queue

**Calling methods by ref**

Call `step()` to indicate that a group of animations is completed. The first parameter of `step` can be passed to any number of animation methods. All animations in a group of animations will start at the same time, and the next animation will be performed after a group of animations is completed. Group animation. The second parameter of `step` can be passed a configuration parameter same as `uni.createAnimation()` to specify the configuration of the current group animation.

Tips

-   The animations supported by the first parameter refer to `Supported animations` below
-   The second parameter refers to the following `animation configuration`, which can be omitted, if the configuration of inheriting `init` is omitted

```
this.$refs.ani.step({
	translateX: '100px'
},{
	duration: 1000,
	timingFunction:'ease',
	delay:500,
	transformOrigin:'left center'
})
```

###  run(FUNCTION:callback) execute animation

**Calling methods by ref**

After executing `step()`, you need to call `run()` to run the animation, otherwise the animation will wait forever

The `run()` method can be passed a `callback` function, which will be called after all animations are executed

```
this.$refs.ani.step({
	translateX: '100px'
})
this.$refs.ani.run(()=>{
	console.log('动画执行完毕')
})

```

###  Animation configuration

Animation configuration, `init()` is the same as the second parameter configuration of `step()`, if the second parameter of `step()` is configured, it will override the configuration of `init()`

| PropertyName | Value | Required | Default | Description | Platform Difference |
| --- | --- | --- | --- | --- | --- |
| duration | Number | No | 400 | Animation duration, in ms | \- |
| timingFunction | String | No | "linear" | Defines the effect of the animation | \- |
| delay | Number | No | 0 | Animation delay time, unit ms | \- |
| needLayout | Boolean | No | false | Does the animation affect the layout | Only supported by nvue |
| transformOrigin | String | No | "center center" | Set [transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin) | \- |

###  timingFunction property description

| Value | Description | Platform Difference |
| --- | --- | --- |
| linear | The speed of the animation is the same from beginning to end | \- |
| ease | The animation starts at a slow speed, then speeds up and slows down before the end | \- |
| ease-in | Animation starts at slow speed | \- |
| ease-in-out | Animation starts and ends at low speed | \- |
| ease-out | Animation ends at slow speed | \- |
| step-start | The first frame of the animation jumps to the end state until the end | nvue does not support |
| step-end | The animation keeps the start state, and the last frame jumps to the end state | nvue does not support |

```
// init configuration
this.$refs.ani.init({
	duration: 1000,
	timingFunction:'ease',
	delay:500,
	transformOrigin:'left center'
})
// step configuration
this.$refs.ani.step({
	translateX: '100px'
},{
	duration: 1000,
	timingFunction:'ease',
	delay:500,
	transformOrigin:'left center'
})
```

###  Supported animations

animation method

If the same animation method has multiple values, use an array to separate the multiple values

```
this.$refs.ani.step({
	width:'100px',
	scale: [1.2,0.8],
})
```

**style:**

| property name | value | description | platform difference |
| --- | --- | --- | --- |
| opacity | value | transparency, the parameter range is 0~1 | \- |
| backgroundColor | color | Color value | \- |
| width | length | Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units | \- |
| height | length | Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units | \- |
| top | length | Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units | nvue does not support |
| left | length | Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units | nvue does not support |
| bottom | length | Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units | nvue does not support |
| right | length | Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units | nvue does not support |

```
this.$refs.ani.step({
	opacity: 1,
	backgroundColor: '#ff5a5f',
	widht:'100px',
	height:'50rpx',
})
```

**Rotation:**

The value of the rotation attribute does not need to fill in the unit

| property name | value | description | platform difference |
| --- | --- | --- | --- |
| rotate | deg | The range of deg is -180~180, which is rotated one deg angle clockwise from the origin | \- |
| rotateX | deg | The range of deg is -180~180, rotate a deg angle on the X axYes | \- |
| rotateY | deg | The range of deg is -180~180, and rotate a deg angle on the Y axYes | \- |
| rotateZ | deg | deg range -180~180, rotate a deg angle on the Z axYes | nvue does not support |
| rotate3d | x,y,z,deg | Same as [transform-function rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d\(\)) | nvue does not Support |

```
this.$refs.ani.step({
	rotateX: 45,
	rotateY: 45
})
```

**Zoom:**

| property name | value | description | platform difference |
| --- | --- | --- | --- |
| scale | sx,\[sy\] | When one parameter is used, it means to scale the sx multiple on the X-axis and Y-axis at the same time; when there are two parameters, it means to scale the sx multiple on the X-axis and the sy multiple on the Y-axYes | \- |
| scaleX | sx | Scale sx times on the X axYes | \- |
| scaleY | sy | Scale the sy factor on the Y axYes | \- |
| scaleZ | sz | Scale sy times in Z axYes | Not supported by nvue |
| scale3d | sx,sy,sz | Scale the sx multiplier on the X axis, the sy multiplier on the Y axis, and the sz multiplier on the Z axYes | nvue does not support |

```
this.$refs.ani.step({
	scale: [1.2,0.8]
})
```

**Offset:**

| property name | value | description | platform difference |
| --- | --- | --- | --- |
| translate | tx,\[ty\] | When one parameter is used, it means the offset tx on the X-axis, the unit is px; when there are two parameters, it means that the offset is tx on the X-axis and ty on the Y-axis, and the unit is px. | \- |
| translateX | tx | Offset tx on the X axis, in px | \- |
| translateY | ty | Offset tx on the Y axis, in px | \- |
| translateZ | tz | Offset tx in Z axis, unit px | nvue does not support |
| translate3d | tx,ty,tz | Offset tx on the X axis, ty on the Y axis, tz on the Z axis, the unit is px | nvue does not support |

```
this.$refs.ani.step({
	translateX: '100px'
})
```

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-transition) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">过渡动画，通常用于元素的过渡效果，例如淡隐淡出效果，遮罩层的效果、放大缩小的效果等</text>
		</uni-card>
		<uni-section title="示例" type="line">
			<view class="example">
				<uni-transition ref="ani" custom-class="transition" :mode-class="modeClass" :styles="styles"
					:show="show"><text class="text">示例元素</text></uni-transition>
			</view>
		</uni-section>

		<uni-section title="操作" subTitle="点击按钮 ,切换动画效果" type="line">
			<view class="example-body">
				<button class="transition-button" type="primary" @click="handle('fade')">淡隐淡出</button>
				<button class="transition-button" type="primary" @click="handle(['fade', 'slide-top'])">由上至下</button>
				<button class="transition-button" type="primary" @click="handle(['fade', 'slide-right'])">由右至左过</button>
				<button class="transition-button" type="primary" @click="handle(['fade', 'zoom-in'])">由小到大过</button>
				<button class="transition-button" type="primary" @click="custom">自定义动画</button>
			</view>
		</uni-section>

	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/transition/transition)
