---
title: "uni.createAnimation(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/ui/animation.html
---
###  uni.createAnimation(OBJECT)

Create an animation instance [animation](#animation). Call the instance's method to describe the animation. Finally, the animation data is exported through the export method of the animation instance and passed to the animation property of the component.

**Notice:**

-   The export method will clear the previous animation operation after each call
-   nvue does not currently support

**OBJECT parameter description:**

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| duration | Integer | No | 400 | Animation duration, in ms |
| timingFunction | String | No | "linear" | Define the effect of the animation |
| delay | Integer | No | 0 | Animation delay time, unit ms |
| transformOrigin | String | No | "50% 50% 0" | Set transform-origin |  |

**timingFunction Valid values:**

| value | description |
| --- | --- |
| linear | The speed of the animation is the same from beginning to end |
| ease | The animation starts at a slow speed, then speeds up, and slows down before the end |
| ease-in | Animation starts at slow speed |
| ease-in-out | Animation starts and ends at low speed |
| ease-out | Animation ends at slow speed |
| step-start | The first frame of the animation jumps to the end state until the end |
| step-end | The animation remains in the start state, and the last frame jumps to the end state |

```
var animation = uni.createAnimation({
  transformOrigin: "50% 50%",
  duration: 1000,
  timingFunction: "ease",
  delay: 0
})
```

**animation**

The animation instance can call the following methods to describe the animation. After the call ends, it will return itself, which supports the writing method of chain call.

**List of methods for animation objects:**

style:

| method | parameters | description |
| --- | --- | --- |
| opacity | value | transparency, parameter range 0~1 |
| backgroundColor | color | color value |
| width | length | Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units |
| height | length | Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units |
| top | length | Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units |
| left | length | Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units |
| bottom | length | Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units |
| right | length | Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units |

Rotate:

| method | parameters | description |
| --- | --- | --- |
| rotate | deg | The range of deg is -180~180, and it rotates a deg angle clockwise from the origin |
| rotateX | deg | deg range -180~180, rotate a deg angle on the X axYes |
| rotateY | deg | deg range -180~180, rotate a deg angle on the Y axYes |
| rotateZ | deg | deg range -180~180, rotate a deg angle on the Z axYes |

Zoom:

| method | parameters | description |
| --- | --- | --- |
| scale | sx,\[sy\] | With one parameter, it means to scale the sx multiple on the X-axis and Y-axis at the same time; with two parameters, it means to scale the sx multiple on the X-axis and the sy multiple on the Y-axYes |
| scaleX | sx | Scale sx times on the X axYes |
| scaleY | sy | Scale the sy factor on the Y axYes |
| scaleZ | sz | Scales the z-axis by a factor of sz |
| scale3d | (sx,sy,sz) | Scale the sx multiplier on the X axis, the sy multiplier on the Y axis, and the sz multiplier on the Z axYes |

Offset:

| method | parameters | description |
| --- | --- | --- |
| translate | tx,\[ty\] | When one parameter is used, it means the offset tx on the X axis, the unit is px; when there are two parameters, it means the offset is tx on the X axis and ty on the Y axis, the unit is px. |
| translateX | tx | Offset tx on the X axis, in px |
| translateY | ty | Offset ty on the Y axis, in px |
| translateZ | tz | Offset tz on the Z axis, in px |
| translate3d | (tx,ty,tz) | Offset tx on the X axis, ty on the Y axis, tz on the Z axis, unit px |

tilt:

| method | parameters | description |
| --- | --- | --- |
| skew | ax,\[ay\] | The parameter range is -180~180; when there is one parameter, the Y-axis coordinate remains unchanged, and the X-axis coordinate is inclined by ax degrees clockwise; when there are two parameters, the X-axis is inclined by ax degrees, respectively. Y-axis tilt ay degrees |
| skewX | ax | The parameter range is -180~180; the Y-axis coordinates remain unchanged, and the X-axis coordinates extend clockwise by ax degrees |
| skewY | ay | The parameter range is -180~180; the X-axis coordinates remain unchanged, and the Y-axis coordinates extend clockwise by ay degrees |

Matrix deformation:

| method | parameters | description |
| --- | --- | --- |

**Animation queue**

After calling the animation operation method, call `step()` to indicate that a group of animations is completed. You can call any number of animation methods in a group of animations. All animations in a group of animations will start at the same time, and a group of animations will start at the same time. The next set of animations will not proceed until it is complete. `step```` can pass a configuration parameter same as ``uni.createAnimation()` to specify the configuration of the current group animation.

**Sample code**

```
<view :animation="animationData" style="background:red;height:100rpx;width:100rpx"></view>
```

```
export default{
  data() {
    return {
      animationData: {}
    }
  },
  onShow: function(){
    var animation = uni.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2,2).rotate(45).step()

    this.animationData = animation.export()

    setTimeout(function() {
      animation.translate(30).step()
      this.animationData = animation.export()
    }.bind(this), 1000)
  },
  methods:{
    rotateAndScale: function () {
      // Rotate while zooming in
      this.animation.rotate(45).scale(2, 2).step()
      this.animationData = this.animation.export()
    },
    rotateThenScale: function () {
      // first rotate and then zoom in
      this.animation.rotate(45).step()
      this.animation.scale(2, 2).step()
      this.animationData = this.animation.export()
    },
    rotateAndScaleThenTranslate: function () {
      // Rotate and zoom in first, then translate
      this.animation.rotate(45).scale(2, 2).step()
      this.animation.translate(100, 100).step({ duration: 1000 })
      this.animationData = this.animation.export()
    }
  }
}
```
