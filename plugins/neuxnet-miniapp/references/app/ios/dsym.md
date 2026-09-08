---
title: "Dsym — overview"
source_url: https://miniapp.neuxnet.com/app/ios/dsym.html
---
##  Overview

###  What is a symbol table

The symbol table is a mapping table between memory addresses and source file names, function names, and line numbers. The symbol table usually includes the following information:

```
<内存起始地址><内存结束地址><源码函数名称>[<源码文件名称:源码行号>]
```

After the application is officially released, the binary code no longer contains the source code information. When the application crashes (crash), the stack information when the exception occurs can be captured, but the information is represented by the memory address. At this time, it can be parsed and restored to the source code stack information through the symbol table. , so as to facilitate developers to locate and solve abnormal problems.

###  What is a dsym file

On the iOS platform, a dSYM file refers to an object file with debugging information, which stores source file name, function name, line number, and other information, and corresponds to the function memory address in the executable file one-to-one. The xcarchive file published in XCode contains the dysm file by default, usually: xxxx.app.dSYM, where xxxx is the package name of the application, as shown below:

![](https://img-cdn-aliyun.dcloud.net.cn/client/doc/ios/dsym-xcarchive.png)

The contents of the dSYM file are:

![](https://img-cdn-aliyun.dcloud.net.cn/client/doc/ios/dsym-content.png)

###  Purpose of dsym file

When the application is released online, the application crash error cannot be visually seen in XCode. At this time, the crash report file needs to be analyzed. There will be a log file in the iOS device to save the function memory address when each application crashes. The DeviceLog in the iOS device is exported as a crash file. At this time, the corresponding function name and source code file name can be found in the dsym file through the function memory address.

Most statistics platforms will capture the function memory address when the application crashes and submit it to the statistics server. In order to better analyze the crash log, the dysm file is also required to find the crashed function name and source file name. Therefore, the statistical platform also requires developers to upload dsym files.

##  The cloud package configuration in HBuilderX generates the symbol table file

> HBuilderX3.2.23+ version adds support for cloud packaging to generate iOS symbol table dsym files

Open the manifest.json file of the project in the cloud package in HBuilderX, and check the "Generate iOS symbol table (dsym) file" in the "App common other settings" interface:

![](https://img-cdn-aliyun.dcloud.net.cn/client/doc/ios/dsym-hx.png)

Submit to the cloud after saving.

After the cloud package is successful, the dsym file download address will be output in the HBuilderX console:

![](https://img-cdn-aliyun.dcloud.net.cn/client/doc/ios/dsym-download.png)

###  Precautions

-   The download file format is zip, and the dsym file can be obtained after decompression
-   The generation of the symbol table dsym file needs to consume the cloud package CDN resources, and the use of this function requires separate billing
-   The generated dsym file download address is valid for two days. After expiration, it is automatically deleted and cannot be restored. Please download it to a local backup as soon as possible after it is generated.
