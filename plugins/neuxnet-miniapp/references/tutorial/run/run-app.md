---
title: "Run entry"
source_url: https://miniapp.neuxnet.com/tutorial/run/run-app.html
---
Due to the large differences in mobile phones, HBuilder does not provide an App simulator. Regardless of uni-app or 5+App/wap2app projects, you need to connect a real mobile phone or mobile phone emulator to run the test, which is called "real machine running".

-   Android platform HBuilder supports the adb protocol. On the computer that HBuilder runs, you can use the usb cable to connect to the Android device, or you can use the Android emulator installed on the computer (including the official Google emulator, and third-party emulators such as "Thunderbolt" and "Night God"). Wait)
-   iOS platform HBuilder supports the itunes protocol. On the computer running HBuilder, use a usb cable to connect to the iPhone or iPad; if it is a Mac computer, you can connect to the iOS simulator that comes with xocde. If it is an arm architecture cpu, you can also directly start the real machine to run the base.

The purpose of running the real machine is to realize the hot refresh of code modification and avoid packaging to see the effect. Edit the code in HBuilder, see the modification effect in real time on the mobile phone, and you can see the log in the HBuilder console.

###  Run entry

The run entry can be activated through the run menu at the top of HBuilder, the run button on the toolbar, or a shortcut key.

1.  HBuilder top run menu ![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/c4d3c057-40dc-4dea-9277-be1c33a252ed.png)
    
2.  Toolbar run button ![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1f9bb269-0534-4562-ba90-a96c01a6f221.png)
    

Menu items can be quickly selected by number. For example, press "4" to select "Run to Android App Dock". You can also press the up and down keys and then enter to select.

Compared with the run menu at the top of HBuilder, the run menu under the run button on the toolbar has less content, and only the most common runs are reserved.

3.  Shortcut key【Ctrl+r】

Actually activates the toolbar run button. You can continue to match the number keys to achieve quick operation without a mouse.

###  Connect the device

When you click Run to iOS or Android device, a selection interface will pop up, and you need to select the mobile device or emulator to be connected.

It can run on multiple devices, and each running device will open a new independent window in the console at the bottom of HBuilder without interfering with each other. But a device can only run one project at the same time, and when different projects run to the same mobile phone, only the last project takes effect.

> If you can't find your phone during the process of connecting the device, you can try to click the "Refresh" button. If you still can't find your phone, please refer to [Real Phone Running FAQs](run-app-faq)

####  Android Device Selection

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/51434ff0-fff6-4006-a1a0-9db800393d60.jpg)

**Precautions**

-   If there is an emulator installed on the computer (the Android emulator needs to be started first), HBuilder will directly detect the device and display it in the candidate list. You can refer to [How to install the simulator](installSimulator)
-   Make sure the `USB debugging` mode is turned on in the Android phone settings. Usually in the \[Settings\] \[Developer Options\] of the mobile phone, some mobile phones can also be set in the system notification bar after plugging in the data cable. Note that it cannot be set to U disk mode. If it is charging mode, you must set the charging time at the same time. `Allow usb debugging`.

####  iOS Device Selection

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/04b9d6fa-51f5-4ca7-8301-9200cbe935eb.jpg)

**Precautions**

-   Make sure that the usb cable is connected smoothly (some data cables are of poor quality, you need to use a high-voltage usb port, if you can't recognize it, please try to replace the data cable)
-   If the Windows computer is connected to the iOS device, the computer needs to install the iTunes software, and ensure that the apple mobile device service is turned on and iTunes can find the phone
-   After the phone is connected to the computer, make sure to click the "Trust" button in the "Do you want to trust this computer?" prompt box that pops up on the phone

![](https://native-res.dcloud.net.cn/images/hx/run/ios-sim.png)  
![](https://native-res.dcloud.net.cn/images/hx/run/ios-sim-select.png)  
The above interface will additionally display a search box. Because there are many iOS simulators in XCode, you can quickly select the simulator you need to use through the search box filter.

###  Run the process

When you run it for the first time, you will be prompted to install the "real machine running plug-in".

The plugin has a built-in "Standard Run Dock", which uses DCloud's package name, certificate and third-party SDK configuration. If you want to customize, you need to use [custom playground](#customplayground)

Select the mobile device or simulator to run in the run menu, click the run button, and the following process will be performed:

1.  uni-app project compilation (5+ App/Wap2App projects do not need to be compiled)
2.  Install the real machine running base on the mobile phone through the data cable (need to highlight the mobile phone screen and click Allow on the mobile phone)
3.  The compiled code is synchronized to the mobile device
4.  Start the real machine running base on the mobile phone and load the code synchronized to the mobile phone (the iPhone needs to manually click the desktop icon to start it)

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/ac78ba4d-16c2-4ca0-8cf8-2c8bb7260052.jpg)

###  Standard Pedestals and Custom Pedestals

The standard operating base is provided by DCloud to facilitate the low-threshold debugging of developers. This base App uses DCloud's package name, certificate and third-party SDK configuration.

Under the condition that the native layer remains unchanged, dynamic codes such as js can be dynamically loaded on the running base to realize hot reload operation.

If you want to customize the native layer, you need to go through the packaging process of iOS or Android, and compile and package by XCode or Android studio to generate an ipa or apk installation package.

However, after packaging, it cannot be easily debugged, and cannot be hot reloaded and console logs displayed. So HBuilder provides a special option when packaging, packaging a "custom run base".

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/9429d3a0-2223-41a7-9914-73037ad85aa5.jpg)

> The entry of the packaged App is in the release menu at the top of HBuilder, or the shortcut key \[Ctrl+u\]

The custom runtime base can take effect with all configurations (mainly the configuration of manifest.json), including:

-   App name, icon, cover splash, package name, certificate
-   App module configuration, third-party sdk configuration (such as WeChat, push, map, voice recognition, etc. third-party sdk configuration)
-   App permission configuration
-   uni native plugin
-   Configurations mentioned in other manifest.json documents that need to be packaged to take effect

After packaging the custom runtime base, HBuilder will automatically store the generated apk and ipa packages in the project directory/unpackage/debug directory, and the file names are `android_debug.apk` and `iOS_debug.ipa` respectively.

Only one custom pedestal can be generated for a project, and multiple generation only keeps the last result.

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20181228/9a4abc6fc3b72b2ede0393cfaab6a890.png)

After ticking the above options, and then performing the above-mentioned running process, the custom base will be used instead of the standard base to run.

Note: The custom running base is a beta version and cannot be directly commercialized (using the custom running base to overwrite the installation of the apk will not update the application resources, and there is a toast warning). When the official version is released, it needs to be repackaged according to the normal packaging method.

###  Offline packaging to generate custom running base

You can use the offline SDK to package and generate a custom running base. After generation, store the apk and ipa packages in the project directory /unpackage/debug directory, and the file names are android\_debug.apk and iOS\_debug.ipa respectively.

-   [Offline generation of custom debugging base for Android platform](https://ask.dcloud.net.cn/article/35482)
-   \[Offline Generation of Custom Debugging Dock for iOS Platform\](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e5%a6%82%e4%bd%95%e7%94% a8%e7%a6%bb%e7%ba%bf%e6%89%93%e5%8c%85%e5%b7%a5%e7%a8%8b%e5%88%b6%e4%bd%9c% e8%87%aa%e5%ae%9a%e4%b9%89%e5%9f%ba%e5%ba%a7)
