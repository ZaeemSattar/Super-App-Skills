---
title: "Configure Baidu Speech Recognition"
source_url: https://miniapp.neuxnet.com/tutorial/app-speech.html
---
The App-side Speech (voice input) module encapsulates the mainstream three-party speech recognition SDK in the market, and provides JS API to call the speech recognition function uniformly.

**Notice**  
uni-app does not encapsulate speech-related APIs, and needs to call [plus.speech.\*](https://www.html5plus.org/doc/zh_cn/speech.html) of 5+ APIs.

![](https://native-res.dcloud.net.cn/images/uniapp/speech/modules.png)

> Tip: The parameter configuration of the three-party speech recognition module can only take effect after submitting the cloud package. Please use the \[custom base\] when running and debugging the real machine (http://ask.dcloud.net.cn/article/35115)

The basic process of using the voice function:

-   Apply to the third-party speech recognition platform for activation. After the application is successful, parameters such as AppId, API Key, and Secret Key will be obtained.
-   Configure the parameters of the application (such as AppId, etc.) in HBuilderX, and submit the cloud package to generate [custom base](http://ask.dcloud.net.cn/article/35115)
-   Call the API in the App project for speech recognition operations

Supported third-party login platforms:

-   Baidu speech recognition You need to apply for AppID, API Key and Secret Key from [Baidu Voice Open Platform](https://console.bce.baidu.com/ai/?fromai=1#/ai/speech/overview/index) . **Support custom speech recognition interface, refer to the "custom speech recognition" source code in the example below**
-   iFLYTEK voice recognition (not recommended) There is no need to configure the SDK parameters. Since the iFLYTEK speech recognition SDK is bound to the appid, the cloud package can only use the appid applied for by DCloud. Although there is no need for developers to apply for the application to the iFLYTEK Voice Open Platform, it also makes it impossible to automatically use the iFLYTEK Voice Open Platform. Defines advanced speech recognition parameter configuration for application personalization. **Note: Xunfei voice recognition has a limit on the number of recognitions, it is recommended to use Baidu voice recognition first**

###  Configure Baidu Speech Recognition

![](https://native-res.dcloud.net.cn/images/uniapp/speech/baidu-manifest.png) The following configuration parameters need to be applied to [Baidu Voice Open Platform](https://console.bce.baidu.com/ai/)

-   appid： AppID applied for by Baidu Voice Open Platform
-   apikey： API Key applied for by Baidu Voice Open Platform
-   secretkey： Secret Key applied for by Baidu Voice Open Platform

###  Using Baidu Speech Recognition

-   Use default speech recognition interface

```
	var options = {
		engine: 'baidu'
	};
	text.value = '';
	console.log('开始语音识别：');
	plus.speech.startRecognize(options, function(s){
		console.log(s);
		text.value += s;
	}, function(e){
		console.log('语音识别失败：'+JSON.stringify(e));
	} );
```

-   Custom voice recognition interface

```
<template>
  <view class="content">
	<textarea class="result" placeholder="语音识别内容" :value="result"></textarea>
	<view class="recogniz">
		<view style="color: #0000CC;">
			<text>{{title}}</text>
		</view>
		<view class="partial">
			<text>{{partialResult}}</text>
		</view>
		<view class="volume" :style="{width:valueWidth}"></view>
	</view>
	<button type="default" @touchstart="startRecognize" @touchend="endRecognize">按下开始&amp;松开结束</button>
  </view>
</template>
<script>
export default {
    data() {
      return {
		title: '未开始',
        text: '',
		partialResult: '...',
        result: '',
		valueWidth: '0px'
      }
    },
    onLoad() {
// #ifdef APP-PLUS
		// Listen for speech recognition events
		plus.speech.addEventListener('start', this.ontStart, false);
		plus.speech.addEventListener('volumeChange', this.onVolumeChange, false);
		plus.speech.addEventListener('recognizing', this.onRecognizing, false);
		plus.speech.addEventListener('recognition', this.onRecognition, false);
		plus.speech.addEventListener('end', this.onEnd, false);
// #endif
    },
	methods: {
		ontStart() {
			this.title = '...倾听中...';
			this.text = '';
			console.log('Event: start');
		},
		onVolumeChange(e) {
			this.valueWidth = 100*e.volume+'px';
			console.log('Event: volumeChange '+this.valueWidth);
		},
		onRecognizing(e) {
			this.partialResult = e.partialResult;			
			console.log('Event: recognizing');
		},
		onRecognition(e) {
			this.text += e.result;
			this.text?(this.text+='\n'):this.text='';
			this.result = this.text;
			this.partialResult = e.result;
			console.log('Event: recognition');
		},
		onEnd() {
			if(!this.text||this.text==''){
				plus.nativeUI.toast('没有识别到内容');
			}
			this.result = this.text;
			this.title = '未开始';
			this.valueWidth = '0px';
			this.partialResult = '...';
		},
		startRecognize() {
			console.log('startRecognize');
// #ifdef APP-PLUS
			plus.speech.startRecognize({
				engine: 'baidu',
				lang: 'zh-cn',
				'userInterface': false,
				'continue': true
			});
// #endif
		},
		endRecognize() {
			console.log('endRecognize');
// #ifdef APP-PLUS
			plus.speech.stopRecognize();
// #endif
		}
	}
}
</script>
<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
.recogniz {
    width: 200px;
    height: 100px;
    padding: 12px;
    margin: 50px auto;
    background-color: rgba(0,0,0,0.5);
    border-radius: 16px;
	text-align: center;
}
.partial {
    width: 100%;
    height: 40px;
    margin-top: 16px;
    font-size: 12px;
    color: #FFFFFF;
}
.volume {
	width: 10px;
	height: 6px;
	border-style:solid;
	display:inline-block;
	box-sizing:border-box;
	border-width:1px;
	border-color:#CCCCCC;
	border-radius: 50%;
    background-color: #00CC00;
}
.result {
	color: #CCCCCC;
	border: #00CCCC 1px solid;
	margin: 25px auto;
	padding: 6px;
	width: 80%;
	height: 100px;
}
</style>
```
