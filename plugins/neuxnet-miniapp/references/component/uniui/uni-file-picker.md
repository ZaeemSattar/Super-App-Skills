---
title: "Uni file picker — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-file-picker.html
---
component name: uni-file-picker

> Code block: `uFilePicker`

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-file-picker)

File selection upload component, you can select any files such as pictures, videos, etc. and upload them to the currently bound service space

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   The component needs to depend on the `sass` plugin, please install it manually
-   If the service space is not bound, `autoUpload` defaults to `false` and cannot be changed
-   The choice file currently only supports `H5` and `WeChat applet platform`, and the `WeChat applet platform` uses `wx.chooseMessageFile()`
-   The v-model value needs to be automatically uploaded before the value is bound. Generally, it is only used to echo data

###  Basic usage

```
<uni-file-picker 
	v-model="imageValue" 
	fileMediatype="image" 
	mode="grid" 
	@select="select" 
	@progress="progress" 
	@success="success" 
	@fail="fail" 
/>
<script>
	export default {
		data() {
			return {
				imageValue:[]
			}
		},
		methods:{
			// Get upload status
			select(e){
				console.log('选择文件：',e)
			},
			// Get upload progress
			progress(e){
				console.log('上传进度：',e)
			},
			
			// upload successfully
			success(e){
				console.log('上传成功')
			},
			
			// upload failed
			fail(e){
				console.log('上传失败：',e)
			}
		}
	}
</script>
```

###  Select the specified suffix picture, and limit the number of choices

Configure the `file-mediatype` property to `image` to limit the selection to only images

Configure the `file-extname` property to `'png,jpg'`, limit the selection of only pictures with `png` and `jpg` suffixes

Configure the `limit` property to 1 to select at most one image

Configure the `mode` property to `grid` , you can use the nine-square grid style to select pictures

```
<uni-file-picker 
	v-model="imageValue"  
	file-mediatype="image"
	mode="grid"
	file-extname="png,jpg"
	:limit="1"
	@progress="progress" 
	@success="success" 
	@fail="fail" 
	@select="select"
/>
```

###  Manual upload

Configure the `auto-upload` property to `false`, you can stop automatic upload, and choose the upload time by calling the `upload` method through `ref`

```
<template>
	<view>
		<uni-file-picker  ref="files" :auto-upload="false"/>
		<button @click="upload">上传文件</button>
	</view>
</template>
<script>
	export default {
		data() {},
		methods:{
			upload(){
				this.$refs.files.upload()
			}
		}
	}
</script>

```

###  Radio select image and click to select again

Configure the `disable-preview` property to `true` to disable the click preview image function

Configure the `del-icon` property to `false` to hide the delete button

Configure the `return-type` attribute to `object`, set the `value` type, if you need to bind the `array` type, set `limit: 1` to achieve the same effect

```
<uni-file-picker 
	disable-preview
	:del-icon="false"
	return-type="object"
>选择头像</uni-file-picker>
```

###  custom style

Configure the `image-styles` property to customize the echo style of `mode:image`

Configure the `list-styles` property to customize the echo style of `mode:video|| mode:all`

```
<template>
	<view>
		<uni-file-picker fileMediatype="image" :image-styles="imageStyles"/>
		<uni-file-picker fileMediatype="all" :list-styles="listStyles"/>
	</view>
</template>
<script>
	export default {
		data() {
			imageStyles:{
				width:64,
				height:64,
				border:{
					color:"#ff5a5f",
					width:2,
					style:'dashed',
					radius:'2px'
				}
			},
			listStyles:{
				// whether to show the border
				border: true,
				// whether to show the divider
				dividline: true,
				// line style
				borderStyle: {
					width:1,
					color:'blue',
					radius:2
				}
			}
		}
	}
</script>

```

###  Using slots

Use the default slot to customize the select file button style

```
<uni-file-picker 
	v-model="value" file-mediatype="all">
	<button>选择文件</button>
</uni-file-picker>
```

##  API

###  FilePicker Props

| property name | type | default value | optional value | description |
| --- | --- | --- | --- | --- |
| v-model/value | Array\\Object | \- | \- | Component data, usually used for echoing, the type is determined by the `return-type` attribute, **format see below** |
| disabled | Boolean | false | \- | component disabled |
| readonly | Boolean | false | \- | The component is read-only, not selectable, no progress, no delete button |
| return-type | String | array | array/object | Restricts the `value` format. When it is `object`, the component can only be single-selected, and it will override |
| disable-preview | Boolean | false | \- | Disable image preview, only `mode:grid` works |
| del-icon | Boolean | true | \- | Whether to display the delete button |
| auto-upload | Boolean | true | \- | Whether to upload automatically, if the value is `false`, it will only trigger @select, you can upload by yourself |
| limit | Number\\String | 9 | \- | Maximum number of choices, h5 will automatically ignore the part of multiple choices |
| title | String | \- | \- | Component title, upload count displayed on the right |
| mode | String | list | list/grid | File list style after file selection |
| file-mediatype | String | image | image/video/all | Select the file type, all only supports H5 and WeChat applet platforms |
| file-extname | Array\\String | \- | \- | Select the file suffix. In the case of a string, it needs to be separated by commas (strings are recommended), which varies according to the `file-mediatype` attribute |
| list-styles | Object | \- | \- | Styles when `mode:list` |
| image-styles | Object | \- | \- | Styles when `mode:grid` |

###  value format

Three properties are required, otherwise the component display will be affected

```
[
	{
		"name":"file.txt",
		"extname":"txt",
		"url":"https://xxxx",
		// ...
	}
]

```

###  list-styles 格式

###  list-styles format

```
{
	"borderStyle":{
		"color":"#eee",		// 边框颜色
		"width":"1px",		// 边框宽度
		"style":"solid", 	// 边框样式
		"radius":"5px" 		// 边框圆角，不支持百分比
	},
	"border":false, // 是否显示边框
	"dividline":true // 是否显示分隔线
}
```

###  image-styles format

```
{
	"height": 60,	// 边框高度
	"width": 60,	// 边框宽度
	"border":{ // 如果为 Boolean 值，可以控制边框显示与否
		"color":"#eee",		// 边框颜色
		"width":"1px",		// 边框宽度
		"style":"solid", 	// 边框样式
		"radius":"50%" 		// 边框圆角，支持百分比
	}
}
```

###  FilePicker Events

|事件称名|说明|返回值| |Event Name|Description|Return Value| |:-😐:-😐 :-: | |@select| 选择文件后触发| 见下文| |@select| Fired when a file is selected | see below | |@progress|文件上传时触发| 见下文| |@progress| Triggered when a file is uploaded| See below| |@success|上传成功触发| 见下文| |@success|Upload successfully triggered|See below| |@fail|上传失败触发| 见下文| |@fail|Triggered by upload failure|See below| |@delete|文件从列表移除时触发| 见下文| |@delete| Fired when a file is removed from the list | see below|

####  Callback Params

`**注意**：如果绑定的是腾讯云的服务空间 ，tempFilePaths 将返回 fileID` `**Note**: If the service space of Tencent Cloud is bound, tempFilePaths will return fileID`

```
{
	"progress"			: Number, 		// 上传进度 ，仅 @progress 事件包含此字段
	"index"				: Number, 		// 上传文件索引 ，仅 @progress 事件包含此字段
	"tempFile"			: file, 		// 当前文件对象 ，包含文件流，文件大小，文件名称等，仅 @progress 事件包含此字段
	"tempFiles"			: files, 		// 文件列表,包含文件流，文件大小，文件名称等
	"tempFilePaths"		: filePaths, 	// 文件地址列表，@sucess 事件为上传后的线上文件地址
}

```

###  FilePicker Methods

通过 `$ref` 调用 Called via `$ref`

| 方法称名| 说明|参数| | method name | description | parameters | | :-😐 :-😐:-😐 | upload()| 手动上传 ，如`autoUpload`为`false` ，必须调用此方法| - | | upload()| Manual upload, if `autoUpload` is `false`, this method must be called | - | | clearFiles(index:Number) | 清除选择结果| 传入 Number　为删除指定下标的文件 ，不传为删除所有| | clearFiles(index:Number) | Clear the selection result| Pass in Number to delete the files with the specified index, not to delete all files|

###  FilePicker Slots

插槽可定义上传按钮显示样式 Slot to define upload button display style

|插槽名|说明 | |Slot Name |Description | | :-😐 :-: | |default|默认插槽| |default|default slot|

##  示例

##  Example

注意

attention

示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。 The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-file-picker) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间。</text>
		</uni-card>
		<uni-section title="只选择图片" type="line">
			<view class="example-body">
				<uni-file-picker limit="9" title="最多选择9张图片"></uni-file-picker>
			</view>
		</uni-section>
		<uni-section title="只选择视频" type="line">
			<view class="example-body">
				<uni-file-picker limit="9" file-mediatype="video" title="最多选择9个视频"></uni-file-picker>
			</view>
		</uni-section>

		<!-- #ifdef H5 || MP-WEIXIN -->
		<uni-section title="选择任意文件" type="line">
			<view class="example-body">
				<uni-file-picker limit="5" file-mediatype="all" title="最多选择5个文件"></uni-file-picker>
			</view>
		</uni-section>
		<!-- #endif -->

		<uni-section title="自定义图片大小" type="line">
			<view class="example-body custom-image-box">
				<uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
					file-mediatype="image">选择</uni-file-picker>
			</view>
		</uni-section>

		<uni-section title="自定义图片大小" type="line">
			<view class="example-body ">
				<uni-file-picker readonly :value="fileLists" :imageStyles="imageStyles" file-mediatype="image">
				</uni-file-picker>
				<uni-file-picker readonly :value="fileLists" :listStyles="listStyles" file-mediatype="all">
				</uni-file-picker>
			</view>
		</uni-section>

	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/file-picker/file-picker)
