---
title: "Uni swipe action — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-swipe-action.html
---
component name: uni-swipe-action

> Code blocks: `uSwipeAction`, `uSwipeActionItem`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-swipe-action)

Container for triggering options by swiping

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   The hand-to-hand linkage of swipeAction is a very test of performance. In order to improve the interactive experience, this component uses the wxs technology on the app-side vue page, h5, and WeChat applet, and the nvue page uses the bindingx technology, which can achieve a smooth experience. In other small program platforms, because the bottom layer does not support optimization technology, only ordinary js can be used, and the performance is average at this time.
-   `uni-swipe-action` and `uni-swipe-action-item` need to be used together
-   `uni-swipe-action` cannot be used inside `swiper`
-   It is not recommended to use the autoClose attribute for long lists, which will affect the performance of the component and cause lag. The reason is that after opening it, other open components must be notified to close, which will cause multiple components to re-render
-   Pass `$event` in the event to get additional parameters
-   For backward compatibility, you need to replace the `options` attribute with `right-options`

###  Basic usage

```
<uni-swipe-action>
	<!-- Basic usage -->
	<uni-swipe-action-item :right-options="options" :left-options="options" @click="onClick" @change="change">
		<view>SwipeAction 基础使用场景</view>
	</uni-swipe-action-item>
	<!-- Use a slot (please specify the width of the slot content) -->
	<uni-swipe-action-item>
		<template v-slot:left>
			<view><text>置顶</text></view>
		</template>
		<view>
			<text >使用插槽</text>
		</view>
		<template v-slot:right>
			<view><text>删除</text></view>
		</template>
	</uni-swipe-action-item>
	<!-- mixed usage -->
	<uni-swipe-action-item :right-options="options">
		<template v-slot:left>
			<view><text>置顶</text></view>
		</template>
		<view><text>混合使用</text></view>
	</uni-swipe-action-item>
</uni-swipe-action>

<!-- No swiping -->
<uni-swipe-action>
	<uni-swipe-action-item :disabled="true" :right-options="options">
		<view>SwipeAction 基础使用场景</view>
	</uni-swipe-action-item>
</uni-swipe-action>

<!-- Use by group -->
<uni-swipe-action>
    <uni-swipe-action-item :right-options="options"  @click="bindClick" @change="swipeChange($event, index)">
		<view >item1</view>
    </uni-swipe-action-item>
    <uni-swipe-action-item :right-options="options"  @click="bindClick" @change="swipeChange($event, index)">
		<view>item2</view>
    </uni-swipe-action-item>
    <uni-swipe-action-item :right-options="options"  @click="bindClick" @change="swipeChange($event, index)">
		<view>item3</view>
    </uni-swipe-action-item>
</uni-swipe-action>

```

```
export default {
  data(){
    return {
      options:[
        {
            text: '取消',
            style: {
                backgroundColor: '#007aff'
            }
        }, {
            text: '确认',
            style: {
                backgroundColor: '#dd524d'
            }
        }
      ]
    }
  },
  methods:{
    onClick(e){
      console.log('点击了'+(e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
    },
    swipeChange(e,index){
      console.log('当前状态：'+ e +'，下标：' + index)
    }
  }
}

```

##  API

###  SwipeAciton Props

| Attribute Name | Type | Optional Value | Default Value | Required | Description |
| --- | --- | --- | --- | --- | --- |
| show | String | left/right/none | none | No | Enables and closes the component, effective when auto-close = false |
| threshold | Number | \- | 20 | No | Sliding Threshold |
| disabled | Boolean | \- | false | No | Disable sliding |
| autoClose | Boolean | \- | true | No | When other components are enabled, whether the current component is automatically closed, **Note: There will be performance problems when using a long list** |
| left-options | Array/Object | \- | \- | No | Left option content and style |
| right-options | Array/Object | \- | \- | No | Right option content and style |

####  LeftOptions & RightOptions Options

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| text | String | Yes | the text of the button |
| style | Object | No | Button style {backgroundColor,color,fontSize}, the default backgroundColor is: #C7C6CD, the default color is: #FFFFFF, the default fontSize is: 14px |

###  SwipeAction Events

| Event Name | Description | Return Value |
| --- | --- | --- |
| @click | Trigger an event when the option button is clicked | e = {content,index}, content (click content), index (subscript), position (position information) |
| @change | Fired when the component is opened or closed | left: left, right: right, none: closed |

###  SwipeAction Methods

method is called by ref

| Method Name | Description |
| --- | --- |
| resize() | After dynamically adding data, if you cannot slide normally, you need to call this method actively, WeChat applet, h5, app-vue will not take effect |
| close-all() | Close all open components |

###  SwipeAction Slots

| Name | Description |
| --- | --- |
| \- | Default slot custom display content |
| default | Default Content Slot |
| left | Sliding the content on the left will overwrite the content of leftOptions |
| right | Sliding the content on the right will overwrite the content of rightOptions |

prompt

-   Due to the bounce effect on the iOS side, the sliding experience is slightly poor. It is recommended to prohibit the bounce effect. The prohibition method is as follows:

```
{
	"path": "swipe-action/swipe-action",
	"style": {
		"navigationBarTitleText": "SwipeAction 滑动操作",
		"disableScroll":true,
		"app-plus":{
			"bounce":"none"
		}
	}
}
```

###  Q&A

\*\* Q: Dynamically loading data, what's the matter with the component sliding failure\*\*

-   A: It is because the component will obtain the corresponding node information data when loading, and obtain the distance that needs to be slid, so sometimes after the data is dynamically loaded, it may be a timing problem, which causes the failure to obtain the node information, then the component cannot slide normally. .
-   A: If the uni-swipe-action data of other pages is updated by means of vuex or uni.$emit on other pages, the phenomenon of inability to slide will also occur. The reason is that the page information cannot be obtained after the page is hidden, so After returning to the uni-swipe-action page, the newly added component node information acquisition is definitely wrong, so it cannot be swiped.
-   A: I am happy that the component sliding logic has been reconstructed in version 1.2.2, and wxs is used in WeChat applet, h5, and app-vue to optimize the sliding performance, and there is no need to worry about dynamically adding components that cause components to fail. The problem of sliding, the node information is obtained in real time when sliding.
-   A: Because other platforms cannot use wxs, so there is still a problem of not being able to slide. How to deal with it? Version 1.2.2 provides the resize() method. When you cannot slide, you can call the resize() method to re-render the component. When calling the method, make sure that the node has been rendered.

\*\* Q: There is no style when running to nvue\*\*

-   A: Because the styles under nvue cannot use complex css selectors by default, you need to configure the "nvueStyleCompiler" property in manifest.json
    
    ```
    // manifest.json
    {
    	 "nvueStyleCompiler" : "uni-app",
    }
    ```
    

##  Example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-swipe-action) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">通过滑动触发选项的容器，容器内可放置列表等组件，通过左右滑动来触发一些操作。</text>
		</uni-card>
		<uni-section
		    title="基本用法"
		    type="line"
		></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item
			    :left-options="options2"
			    :threshold="0"
			    :right-options="options1"
			    @click="bindClick"
			>
				<view class="content-box" @click="contentClick">
					<text class="content-text">使用数据填充</text>
				</view>
			</uni-swipe-action-item>
			<uni-swipe-action-item @click="bindClick">
				<template v-slot:left>
					<view class="slot-button">
						<text
						    class="slot-button-text"
						    @click="bindClick({position:'left',content:{text:'置顶'}})"
						>置顶</text>
					</view>
				</template>
				<view class="content-box" @click="contentClick">
					<text class="content-text">使用左右插槽</text>
				</view>
				<template v-slot:right>
					<view class="slot-button" @click="bindClick({position:'right',content:{text:'删除'}})"><text class="slot-button-text">删除</text></view>
				</template>
			</uni-swipe-action-item>
			<uni-swipe-action-item
			    :right-options="options1"
			    @click="bindClick"
			>
				<template v-slot:left>
					<view class="slot-button"><text
						    class="slot-button-text"
						    @click="bindClick({position:'left',content:{text:'置顶'}})"
						>置顶</text></view>
				</template>
				<view class="content-box" @click="contentClick">
					<text class="content-text">数据与插槽混合使用</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<uni-section
		    title="禁止滑动"
		    type="line"
		></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item :disabled="true">
				<view class="content-box">
					<text class="content-text">禁止左右滚动</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<uni-section
		    title="使用变量控制开关"
		    type="line"
		></uni-section>
		<view class="example-body">
			<view
			    class="button"
			    @click="setOpened"
			>
				<text class="button-text">当前状态：{{ isOpened }}</text>
			</view>
		</view>
		<uni-swipe-action>
			<uni-swipe-action-item
			    :left-options="options2"
			    :right-options="options2"
			    :show="isOpened"
			    :auto-close="false"
			    @change="change"
			    @click="bindClick"
			>
				<view class="content-box">
					<text class="content-text">使用变量控制SwipeAction的开启状态</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>

		<uni-section
		    title="swipe-action 列表"
		    type="line"
		></uni-section>
		<uni-swipe-action ref="swipeAction">
			<uni-swipe-action-item
			    v-for="(item, index) in swipeList"
			    :right-options="item.options"
			    :key="item.id"
			    @change="swipeChange($event, index)"
			    @click="swipeClick($event, index)"
			>
				<view class="content-box">
					<text class="content-text">{{ item.content }}</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/swipe-action/swipe-action)
