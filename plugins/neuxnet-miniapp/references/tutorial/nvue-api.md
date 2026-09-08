---
title: "dom"
source_url: https://miniapp.neuxnet.com/tutorial/nvue-api.html
---
##  dom

For those native functions that do not depend on UI interaction, nvue encapsulates them into modules, which is a method of calling native capabilities through javascript.

-   mini-app has built-in integrated native modules by default, such as BindingX, animation, DOM.addRule, etc. Introduce native App plug-ins through `uni.requireNativePlugin`

```
// Usage mode
	const PluginName = uni.requireNativePlugin(PluginName); // PluginName 为原生插件名称
```

-   nvue also supports js API interface of mini-app. Unless otherwise specified, it means that both vue file and nvue file support it. [See details.](../api/index.md)

###  addRule

Weex provides DOM.addRule to **load custom fonts**. Developers can load iconfont and custom font by specifying font-family. Developers can use the following code to load custom fonts:

```
	<template>
		<view>
			<text class="my-iconfont">&#xe85c;</text>	
		</view>
	</template>
	<script>
		export default{
			beforeCreate() {
				const domModule = uni.requireNativePlugin('dom')
				domModule.addRule('fontFace', {
					'fontFamily': "myIconfont",
					'src': "url('http://at.alicdn.com/t/font_2234252_v3hj1klw6k9.ttf')"
				});
			}
		}
	</script>
	<style>
		.my-iconfont {
			font-family:myIconfont;
			font-size:60rpx;
			color: #00AAFF;
		}
	</style>
	
	
```

**addRule(type, contentObject)**

-   @fontFace You should not change this as this is the name of the font rule
-   @fontFamily You should provide the name of your font-family there, the valid name should be a string.
-   @src The src of your custom font, and url('') is reserved for protocol reason, the supported parameters are listed below:
    -   `http`. Read from http, e.g. `url('http://at.alicdn.com/t/font_1469606063_76593.ttf')`
    -   `https`. Read from https, e.g. `url('https://at.alicdn.com/t/font_1469606063_76593.ttf')`
    -   `local`, _Android ONLY_. Read from assets directory e.g. `url('local://foo.ttf')`, the **foo.ttf** is in your android assets directory.
    -   `file`. Read from a local file, e.g. `url('file://storage/emulated/0/Android/data/com.alibaba.weex/cache/http:__at.alicdncom_t_font_1469606063_76593.ttf')`
    -   `data`. Read from a base64 data source, e.g. `url('data:font/truetype;charset=utf-8;base64,AAEAAAALAIAAAwAwR1NVQrD+....')`, the above data field is only a part of the actual data.

**Notice**

> You can name `fontFamily` in `addRule` as you wish in your page, any string is OK. But this is not the real font-family name of the font file. The real name or system name for the font is stored in binrary data of ttf file. You must ensure that the real font-family name of font file is unique. Or your font may not be successfully registered to device and your text may display as a '?'. Specially, if you are using http://www.iconfont.cn/ to build your iconfont. Make sure that you set a unique enough font-family name for your font in project settings. Calling `addRule` in `beforeCreate` is recommended.

###  scrollToElement

Scroll the scrollable component to the referenced component. This API should only be used in the children components of a scrollable component, such as in a `<scroller>` or `<list>` component.

**scrollToElement(ref, options)**

-   @options
    -   `offset`, an space on top of the ref component, which is also scrolling down to the visual viewport. Default is `0`.
    -   `animated`, a boolean indicates whether a scroll animation should be played. If set to false, the ref component will jump into the view without any transition animation. Default is true.

```
  <template>
    <view class="wrapper">
      <scroller class="scroller">
        <view class="row" v-for="(name, index) in rows" :ref="'item'+index">
          <text class="text" :ref="'text'+index">{{name}}</text>
        </view>
      </scroller>
      <view class="group">
        <text @click="goto10" class="button">Go to 10</text>
        <text @click="goto20" class="button">Go to 20</text>
      </view>
    </view>
  </template>
  <script>
    const dom = uni.requireNativePlugin('dom')
    export default {
      data() {
        return {
          rows: []
        }
      },
      created() {
        for (let i = 0; i < 30; i++) {
          this.rows.push('row ' + i)
        }
      },
      methods: {
        goto10(count) {
          const el = this.$refs.item10[0]
          dom.scrollToElement(el, {})
        },
        goto20(count) {
          const el = this.$refs.item20[0]
          dom.scrollToElement(el, {
            offset: 0
          })
        }
      }
    }
  </script>
  <style scoped>
    .scroller {
      width:700rpx;
      height:500px;
      border-width: 3px;
      border-style: solid;
      border-color: rgb(162, 217, 192);
      margin:0 25rpx;
    }
    .row {
      height: 100rpx;
      flex-direction: column;
      justify-content: center;
      padding-left: 30rpx;
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-bottom-color: #DDDDDD;
    }
    .text {
      font-size: 45rpx;
      color: #666666;
    }
    .group {
      flex-direction: row;
      justify-content: center;
      margin-top: 60rpx;
    }
    .button {
      width: 200rpx;
      padding-top: 20rpx;
      padding-bottom: 20rpx;
      font-size: 40rpx;
      margin-left: 30rpx;
      margin-right: 30rpx;
      text-align: center;
      color: #41B883;
      border-width: 2px;
      border-style: solid;
      border-color: rgb(162, 217, 192);
      background-color: rgba(162, 217, 192, 0.2);
    }
  </style>

```

###  getComponentRect

You can get the bounding rect of the referenced component using this API.

**getComponentRect(ref, callback)**

-   @ref, the referenced component.
-   @callback, the callback function after executing this action.

An example callback result should be like:

```
  {
    result: true,
    size: {
        bottom: 60,
        height: 15,
        left: 0,
        right: 353,
        top: 45,
        width: 353
    }
  }
```

> This method needs to be called after the node rendering to obtain the correct information, it can be called in mounted or updated after updating data
> 
> If you want to get the bounding rect of outside viewport of the nvue container, you can specify the `ref` as a literal string `'viewport'`, like `getComponentRect('viewport', callback)`.

##  animation

The `animation` module can be used to perform animations on components. JS-Animation can perform a series of simple transformations on components (position, size, rotation, background color and opacity).

For example, if you have a `image` component, you can move, rotate, grow, or shrink it by animation.

```
  <template>
    <view class="box">
      <view ref="test" @click="move" class="box-item"></view>
    </view>
  </template>
  <script>
      const animation = uni.requireNativePlugin('animation')
      export default {
          methods: {
              move() {
                  var testEl = this.$refs.test;
                  animation.transition(testEl, {
                      styles: {
                          backgroundColor: '#007AFF',
                          transform: 'translate(100px, 80px)',
                          transformOrigin: 'center center'
                      },
                      duration: 800, //ms
                      timingFunction: 'ease',
                      delay: 0 //ms
                  },()=>{
                      uni.showToast({
                          title: 'finished',
                          icon:'none'
                      });
                  })
              }
          }
      }
  </script>
  <style scoped>
    .box{
        width:750rpx;
        height:750rpx;
    }
    .box-item{
      width: 250rpx;
      height: 250rpx;
      background-color: #00aaff;
    }
  </style>
```

###  transition

-   @ref, the element that will be animated. For example, if the value of `ref` for an element is `test`, you can start an animation with `this.$refs.test`.
-   @options, animation properties such as keys, duration.

The following table lists all legal parameters of options:

| Property | Describe |
| --- | --- |
| styles | specifies the names and values of styles to which a transition effect should be applied. |
| duration | specifies the duration of animation execution, the default value is `0`, meaning that the component get the desired property immediately. |
| delay | specifies the waiting time before the animation starts. The default value is `0`. |
| needLayout | Specifies whether the change to layout(width/height/etc..) is persistence and takes affect after the animation. Default value is `false` |
| timingFunction | describes how the intermediate values are calculated for the CSS properties being affected by the animation effect. default value is `linear` |

The supported styles are listed below:

| Property | Describe |
| --- | --- |
| width | Indicate the width value applied to the component after the animation is executed. Set needLayout to true if you need to influence the layout. The default value is computed width. |
| height | Indicate the height value applied to the component after the animation is executed. Set needLayout to true if you need to influence the layout. The default value is computed width. |
| backgroundColor | The background color applied to the component after the animation is executed, the default value is computed backgroundColor. |
| opacity | Indicate the opacity value applied to the component after the animation is executed, the default value is computed opacity. |
| transformOrigin | `transformOrigin` defines the central point of the change process, such as transformOrigin: x-axis y-axis parameter x-axis can be left, center, right, length or percentage, and parameter y-axis can be top, center, bottom, length or percentage. The default value is center center. |
| transform | The transformation type of `transform` may include rotate, translate, scale and other attributes. The default value is null. See details below |

**transform**

| Property | Describe |
| --- | --- |
| translate/translateX/translateY | Specify the location to which the element is to be moved. In length or percentage, and the default value is 0. |
| rotate/rotateX/rotateY | v0.16+ specifies the angle at which the element will be rotated. In degree, and the default value is 0 |
| scale/scaleX/scaleY | Enlarge or reduce the element in proportion. In number, and the default value is 1 |
| perspective | v0.16+ the distance from the observer to the z=0 plane, which is valid in Android 4.1 and above. In number, and the default value is positive infinity. |

**timingFunction**

| Property | Describe |
| --- | --- |
| linear | The animation speed is the same from beginning to end |
| ease-in | Animation speed from slow to fast |
| ease-out | Animation speed from fast to slow |
| ease-in-out | The animation first accelerates to the middle point and then decelerates to the end point |
| cubic-bezier(x1, y1, x2, y2) | Define the change process in cubic Bessel function, and the parameter value of the function must be between 0 and 1. For more information about cubic bezier, please refer to cubic-bezier and Bézier curve. |

-   @callback, callback is a function called after the completion of animation. In iOS platform, you can use function to get information of animation execution.

**Notice**

-   On iOS platform you can get animation's message about completion, there are two types of parameters with `result`, is `Success`and `Fail`, Android can not support until now.
-   Android doesn't support the result parameter.

> If you need to use CSS animation, refer to [transition](./nvue-css.md#transition) and [transform](./nvue-css.md#transform).

##  nvue and vue communicate with each other

In mini-app, nvue and vue pages can be mixed and used.

It is recommended to use `uni.$on` and `uni.$emit` for page communication

#####  Communication implementation method

```
	// $on(eventName, callback)  
	uni.$on('page-popup', (data) => {  
	    console.log('title' + data.title)
	    console.log('content' + data.content)
	})  
	
	// $emit(eventName, data)  
	uni.$emit('page-popup', {  
	    title: 'I am title',  
	    content: 'I am content'  
	});
```

\*\*Note when communicating with this page: To remove the event listener using uni.$off before the page is unloaded. \*\*

##  Variables and data shared between vue and nvue

In addition communication events, variables and storage can also be shared between vue and nvue pages. The scheme of sharing variables and data provided by `mini-app` is as follows:

1.  **vuex:** nvue supports `vuex`. This is vue's official state management tool.

> Note: Direct introduction of `store` is not supported, you can use auxiliary methods such as `mapState`, `mapGetters`, `mapMutations` or use `this.$store`

2.  **uni.storage:** -vue and nvue pages can use the same `uni.storage` for storage. This storage is persistent. For example, the login status can be saved here.
    
3.  The **globalData:** mini app has a `globalData``` mechanism. Define`globalData\`\`\`\` in the App.vue file, as follows:
    

```
	<script>  
	    export default {  
	        globalData: {  
	            text: 'text'  
	        },  
	        onLaunch: function() {  
	            console.log('App Launch')  
	        },  
	        onShow: function() {  
	            console.log('App Show')  
	        },  
	        onHide: function() {  
	            console.log('App Hide')  
	        }  
	    }  
	</script>
```

-   The way to operate `globalData` in js is as follows: `getApp().globalData.text = 'test'`
-   If you need to bind the data of \`\`globalData\`\`\`\` to the page, you can reassign the variable in the onShow life cycle of the page.

##  Unsupported mini-app API in nvue

nvue supports most mini-app APIs. The following only lists the **APIs** that are not currently supported.

#####  Animation

| API | Describe | Solution |
| --- | --- | --- |
| uni.createAnimation() | Create an animation instance | [animation](./nvue-api.md#animation) |

#####  Scroll

| API | Describe | Solution |
| --- | --- | --- |
| uni.pageScrollTo() | Scroll the page to the target position | [scrollToElement](#scrolltoelement) |

#####  Node layout interaction

| API | Describe |
| --- | --- |
| uni.createIntersectionObserver() | Create and return an example of the IntersectionObserver object |

#####  Painting

For the usage of canvas API, please refer to [canvas document](../api/canvas/createCanvasContext.md).
