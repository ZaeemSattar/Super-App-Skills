---
title: "CPU type"
source_url: https://miniapp.neuxnet.com/tutorial/app-android-abifilters.html
---
The Android platform configures the CPU type for the so library developed and generated using the C/C++ language in order to improve the operating efficiency. It is necessary to compile and generate the corresponding instruction so library for each CPU type platform separately. The code developed in the Java language runs in the virtual machine, and the virtual machine adapts the CPU type, which does not involve this problem.

Functions (modules) using the so library in HBuilder/HBuilderX

-   Audio (recording): supports mp3 format
-   Geolocation: Baidu
-   LivePush (live streaming)
-   Maps: Gaode, Baidu
-   OAuth (login authentication): Sina Weibo
-   Push (message push): individual push, UniPush
-   Share: Sina Weibo
-   Speech (voice input): Baidu, **Note: iFLYTEK does not support 64-bit**
-   Weex (native rendering): uni-app (custom component mode, nvue page), **Note: HBuilderX2.1.5 and above versions support**

> HBuilderX2.7.0+ adjustment Cloud package no longer includes x86 CPU type library by default, reducing the size of apk package [Details](id=nox86) HBuilderX2.1.5+ began to support the new 64-bit CPU type for Android platform, and cloud package supports configuration of CPU types supported by App Meet the requirement that apps uploaded on Google Play from August 1, 2019 must support 64-bit CPU.

###  CPU type

HBulderX has been adapted to support the following mainstream CPU types:

-   armeabi-v7a 7th generation and above ARM processors (ARM32-bit), most mobile phones on the market use this CPU type.
-   arm64-v8a The 8th generation, 64-bit ARM processor (ARM64-bit), the newly released devices in the last two years use this CPU type, which is compatible with the so library of armeabi-v7a.
-   x86 A small number of tablets use x86, when intel x86 is selected in the AS simulator, the x86 processor is used, and other commonly used third-party simulators usually use x86

**Note: If x86 is not checked, it may not work properly on the emulator. The following are common emulators that need to include x86**

-   Thunderbolt Simulator: 3.x must include x86 or it will not work properly; 4.x does not need to include x86.
-   NoxPlayer: Must include x86 or it won't work
-   MuMu Simulator: No need to include x86
-   MEmu Emulator: No need to include x86
-   BlueStacks (BlueStacks Simulator): No need to include x86
-   Tencent Simulator (Mobile Game Assistant): Must include x86 or it won't work
-   Other emulators: Not tested and verified, it is recommended to include x86 to ensure normal operation in the simulator

###  Configure supported CPU types

**Visual interface configuration** ![](https://native-res.dcloud.net.cn/images/uniapp/others/abifilters-manifest.png)

**Source view configuration** Open the manifest.json file of the project, switch to the "source view", and configure according to the project type

-   uni-app project Configure the supported CPU types in the abiFilters attribute of the "app-plus"->"distribute"->"android" node, for example:

```
  "app-plus": {
    "distribute": {
      "android": {
        "abiFilters": [
          "armeabi-v7a",
          "arm64-v8a"
        ]
        //...
      },
      //...
    },
    //...
  },
  //..
```

####  离线打包配置

####  Offline packaging configuration

使用Android studio打开Android原生项目，打开对应项目的build.gradle文件。 Use Android studio to open the Android native project and open the build.gradle file of the corresponding project. 在Android -> defaultConfig下添加支持的CPU类型，如下示例： Add the supported CPU types under Android -> defaultConfig, as shown in the following example:

```
defaultConfig{
	ndk {
            abiFilters 'arm64-v8a','armeabi-v7a'
        }
}
```

**注意：离线打包仅支持arm64-v8a、armeabi-v7a、x86三种类型，建议根据自己需求选择打包的CPU类型** **Note: Offline packaging only supports three types: arm64-v8a, armeabi-v7a, and x86. It is recommended to choose the type of CPU packaged according to your needs**

###  CPU类型选择建议

###  CPU type selection suggestion

ARM64位（arm64-v8a）CPU可以兼容ARM32的指令，也就是说只选择armeabi-v7a类型的so库也可以在64位手机上运行，只是没有完全发挥CPU的性能。 ARM64-bit (arm64-v8a) CPU is compatible with ARM32 instructions, that is to say, only the so library of type armeabi-v7a can also run on 64-bit mobile phones, but it does not fully utilize the performance of the CPU. 选择支持的CPU类型时请参考以下建议： Please refer to the following suggestions when choosing a supported CPU type:

-   如果不在意apk大小，三种CPU类型都勾选
-   If you don't care about apk size, check all three CPU types
-   如果在意apk大小，选择ARM32位即可（几乎在所有ARM指令的所有设备上都可正常运行）
-   If you care about the apk size, just choose ARM32 bit (it works fine on almost all devices with all ARM instructions)
-   如果要兼容一些平板和模拟器，选择ARM32位和X86
-   If you want to be compatible with some tablets and emulators, choose ARM32bit and X86 不是所有模拟都仅支持x86指令，如雷电（4.x）、MuMu等模拟器也是支持ARM指令。 Not all simulations only support x86 instructions, such as Raiden (4.x), MuMu and other simulators also support ARM instructions.

###  查看apk支持的CPU类型

###  Check the CPU types supported by apk

使用解压工具打开apk，在lib目录下可以查看到支持的CPU类型，如下图所示：  
![](https://native-res.dcloud.net.cn/images/uniapp/others/abifilters-apk.png)

###  常见问题

###  common problem

####  上架Google Play市场对CPU类型的要求

####  CPU type requirements for listing on Google Play Market

提交Google Play时要求支持64位，建议选择"armeabi-v7a"和"arm64-v8a"两个即可，也可以只选择"arm64-v8a"。  
When submitting to Google Play, it is required to support 64-bit. It is recommended to select "armeabi-v7a" and "arm64-v8a", or you can only select "arm64-v8a".

**注意：不要勾选"x86"** **Note: Do not check "x86"**

####  CPU类型错误安装提示

####  CPU type error installation prompt

如果打包选择的CPU类型与设备不兼容，会导致无法正常安装。 If the CPU type selected by the package is not compatible with the device, it will not be installed normally. 通过adb命令安装通常会提示如下错误： Installation through adb command usually prompts the following error:

```
Performing Streamed Install
adb: failed to install android_debug.apk: Failure [INSTALL_FAILED_NO_MATCHING_ABIS: Failed to extract native libraries, res=-113]
```

使用Android Studio自带的x86模拟器，将不包含x86 cpu类型的apk拖到模拟器安装时会弹出如下提示框：  
![](https://native-res.dcloud.net.cn/images/uniapp/others/abifilters-error.png)

####  HBuilderx2.7.0+ 云端打包默认CPU类型不再包含x86

####  HBuilderx2.7.0+ cloud package default CPU type no longer includes x86

目前市面上常见的手机都是使用ARM处理器，很少有设备使用x86处理器，因此从HBuilderX2.7.0开始云端打包调整为默认不再包含x86的CPU类型，减少apk包大小： At present, common mobile phones on the market use ARM processors, and few devices use x86 processors. Therefore, starting from HBuilderX2.7.0, cloud packaging is adjusted to no longer contain x86 CPU types by default, reducing the size of the apk package:

-   uni-app项目
-   uni-app project 基础功能apk减少5M+，使用的三方SDK及uni原生插件越多，减少的包尺寸越大，具体值取决于其包含的x86类型的so库大小 The basic function apk is reduced by 5M+. The more third-party SDKs and uni native plug-ins are used, the larger the package size will be reduced. The specific value depends on the size of the x86 type so library it contains.
-   5+App、Wap2App项目
-   5+App, Wap2App project 基础功能apk减少100K+，如果使用的三方SDK中存在so库则减少的尺寸较大，具体值取决于其包含的x86类型的so库大小 The basic function apk is reduced by 100K+. If there is a so library in the third-party SDK used, the reduced size will be larger. The specific value depends on the size of the x86 type so library it contains.

**注意：大多数模拟器（如夜神）必须包含x86，否则应用启动时可能会白屏，请根据上面教程进行配置** **Note: Most emulators (like Nox) must include x86, otherwise the app may start with a white screen, please configure it according to the tutorial above**
