---
title: "voice"
source_url: https://miniapp.neuxnet.com/api/plugins/voice.html
---
###  voice

voice includes two parts: language recognition and voice reading.

It is only supported by the Baidu Mini Program platform and the App platform. The development methods of each platform are not unified yet. When using it, you should pay attention to using \[conditional compilation\] (https://uniapp.dcloud.io/platform) to call the code of different platforms.

Baidu applet platform supports speech recognition, refer to: [specification details](https://smartprogram.baidu.com/docs/develop/api/ai_voice/)

App platform implementation reference:

-   Speech recognition: Support iFLYTEK speech recognition and Baidu speech recognition. For cloud packaging, you need to check the module and App SDK configuration in the manifest. For the development specification, see: [https://www.html5plus.org/doc/zh\_cn/speech .html](https://www.html5plus.org/doc/zh_cn/speech.html) , see the difference between configuration documents and iFLYTEK Baidu: \[https://ask.dcloud.net.cn/article/35059\] (https://ask.dcloud.net.cn/article/35059)
-   Voice reading: call iFLYTEK for speech synthesis and tts reading, refer to [https://ask.dcloud.net.cn/article/1081](https://ask.dcloud.net.cn/article/1081)
