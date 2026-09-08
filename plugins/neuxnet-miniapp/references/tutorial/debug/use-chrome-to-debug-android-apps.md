---
title: "Chrome to debug H5+ Android applications"
source_url: https://miniapp.neuxnet.com/tutorial/debug/use-chrome-to-debug-android-apps.html
---
#  Chrome to debug H5+ Android applications

> Note that this document only applies to 5+Apps. uni-app debugging see also [https://uniapp.dcloud.io/tutorial/run-and-debug.html](https://uniapp.dcloud.io/tutorial/run-and-debug.html)

There are three ways to debug the front-end code in HBuilder: watching while changing, running on real machine, and webkit remote debug debugging on real machine. The webkit remote debug is actually a service provided by google and apple. This article mainly introduces how to debug the web page running in the webview on the Android phone under the chrome of google. _Series Article Directory Navigation:_

-   [Introduction to debugging methods while changing them](http://ask.dcloud.net.cn/article/483)
-   [Introduction to Debugging Mode 2 Real Machine Operation](http://ask.dcloud.net.cn/article/484)
-   \[Introduction to three webkit remote debug debugging methods: Chrome debug Android phone\]
-   [Introduction to four webkit remote debug Safari debugging iOS mobile phone](http://ask.dcloud.net.cn/article/143)

##  Overview of Chrome debugging Android phone

Debugging is a very important link in the software development process, which can help developers quickly locate and solve problems encountered in the development process. For HTML5 development, we all know that Chrome's DevTools has powerful functions and a friendly user experience. It can not only quickly and easily debug JavaScript, check the DOM structure of HTML pages, update CSS styles of elements synchronously in real time, but also track and analyze page resource loading performance. And other issues. For developers of mobile platforms, starting from Android 4.4, you can also use Chrome's DevTools to connect devices to debug applications.

The debugging effect is shown in the figure:

![Android debugging renderings](http://www.dcloud.io/docs/a/adebug/1.1.png)

**Software Requirements**

-   The system version of the Android device or emulator is 4.4 and above;

##  Real machine debugging environment

If you have an Android device and the system is version 4.4 or above, you can directly use the Chrome connection to debug.

###  Detect device version

Open the system "Settings" -> "About" to check the Android version:

![](http://www.dcloud.io/docs/a/adebug/3.1.png)

The Android version must be 4.4 and above, otherwise application debugging cannot be performed. Please refer to the "Emulator Debugging Environment" chapter to use the emulator to debug applications.

###  Show developer options

The default "Developer Options" on Android devices is hidden, you need to open the "Settings" -> "About" page, click the "Version Number" item several times (7 times), and return to the "Settings" page to display the "Developer Options" :

![](http://www.dcloud.io/docs/a/adebug/3.2.png)

Click "Developer Options" to open the "Developer Options" settings page.

###  Enable USB debugging

![](http://www.dcloud.io/docs/a/adebug/3.3.png)

###  Connect to PC

The Android device is connected to the PC through a USB data cable. If the system cannot recognize it correctly, a driver needs to be installed, which can usually be downloaded and installed from the official website of the device manufacturer. You can also use third-party mobile assistant software to install, such as "360 Mobile Assistant", "App Store" and so on.

After the PC recognizes the device, it can connect and install the HBuilder application through the real machine running function of HBuilder.

##  Debugging with HBuilder

In the latest version of HBuilder, click the Run menu, or the View menu of HBuilderX, and click "Open Webview Debugging Mode". Make sure the phone is connected properly, make sure the debuggable app is launched, then the debuggable page will be listed on the right or bottom. Click debug/inspect to open the chrome console for debugging.

**Note: The protocol has been adjusted since chrome83. HBuilderX2.8 adapts to the new protocol. If your chrome is upgraded to version 83 or above, you need to update HBuilderX to 2.8+ for normal use**

#  ================================================ **Under normal circumstances, the developer reads this to the end. The follow-up documents are the installation tutorial of the Android emulator and the tutorial of debugging with chrome without debugging with HBuilder**

\================================================

##  Appendix: Android Emulator Debugging Environment

If you don't have an Android phone and want to debug Android applications, then you need to install Google's official Android emulator. Note that the third-party simulators such as genymotion, hippocampus, Bluestacks and other simulators can only run on real machines and cannot be debugged.

The following only introduces the installation method of Google's official emulator. Since Google updates frequently, developers are also advised to keep an eye on other updated tutorials online.

If there is no Android 4.4 and above device, you can configure the Android emulator to debug. The Android emulator has always been known for its slow running speed. In fact, the official solution has been provided to use Intel HAXM technology to accelerate, which greatly improves the running speed of the emulator. **Hardware requirements**

-   CPU supports Intel VT technology (AMD CPU cannot use HAXM acceleration);
-   Recommended 4G memory;
-   Window XP/Vista/7/8 (32/64-bit), Windows 7/8 (64-bit) recommended.

**Network Requirements** The price you have to pay for using Google's services is to be prepared with tools to circumvent the wall. The simulator must be over the wall when installing updates and debugging initialization. **Students who are unconditional over the wall can try to modify the local host method to access Google related services. For the host content, refer to [google-hosts](https://github.com/txthinking/google-hosts/blob/master/hosts) , pay attention to timely update 😃**

###  ADT Tools

To configure the emulator debugging environment, you need to install the ADT tool. If you have already configured the android development environment, you can skip this chapter.

**Download ADT Tools**

The Android emulator development environment needs to be installed through the ADT tool. There is no need to download the complete ADT Bundle here, just use the independent ADT tool:

-   Go to the official website to download Android SDK Tools

![](http://www.dcloud.io/docs/a/adebug/2.1.1.1.png)

Select the independent ADT plug-in installation package under the Windows platform.

-   Agree to terms and conditions of use

![](http://www.dcloud.io/docs/a/adebug/2.1.1.2.png)

Click the download button.

-   save the installation package The current version is 22.6.2, which is saved locally as: installer\_r22.6.2-windows.exe.

**Install ADT Tools**

-   Double-click to run the saved ADT installation file (install\_r22.6.2-windows.exe) to start the installation

![](http://www.dcloud.io/docs/a/adebug/2.1.2.1.png)

Select the next step "Next".

-   Configure JDK environment If the JDK environment is already installed, you will be prompted to confirm:

![](http://www.dcloud.io/docs/a/adebug/2.1.2.2.png)

Directly select the next step "Next". If the JDK has not been installed, it will prompt that it is not found:

![](http://www.dcloud.io/docs/a/adebug/2.1.2.3.png)

You need to install JDK, set the JAVA\_HOME environment variable, and re-run the ADT installation file after completion.

-   select user

![](http://www.dcloud.io/docs/a/adebug/2.1.2.4.png)

Select the default value, only the current user can use it, and select the next step "Next".

-   Select installation directory

![](http://www.dcloud.io/docs/a/adebug/2.1.2.5.png)

Select a non-system disk directory (such as "D:\\AndroidSDK"), and ensure that there is enough disk space to install SDK and emulator files (at least 1G of space is required). Select the next step "Next".

-   Select start menu directory

![](http://www.dcloud.io/docs/a/adebug/2.1.2.6.png)

Keep the default values and select Next.

-   Unzip installation

![](http://www.dcloud.io/docs/a/adebug/2.1.2.7.png)

When done, select the next step "Next":

![](http://www.dcloud.io/docs/a/adebug/2.1.2.8.png)

-   finish installation

![](http://www.dcloud.io/docs/a/adebug/2.1.2.9.png)

Select to start the SDK Manager (Android SDK Manager) immediately, and select the next step "Next" to complete the installation of the ADT tool. If it does not start immediately, you can double-click to run the "SDK Manager.exe" program in the root directory of the Android SDK (such as "D:\\AndroidSDK").

###  Download SDK and emulator

After installing the ADT tool, start the SDK management program to manage the compilation tools, SDKs, simulators, and plug-ins of each version, such as upgrade, installation, and uninstallation. If you have already downloaded the SDK and emulator, you can skip this chapter.

-   Update SDK list After starting the SDK management program, it will automatically obtain the latest list of tools, SDKs, simulators and extension plug-ins.

![](http://www.dcloud.io/docs/a/adebug/2.2.1.png)

-   List update complete After the update is complete, the log is displayed:

![](http://www.dcloud.io/docs/a/adebug/2.2.2.png)

-   Select download items To use the Intel HAXM accelerated emulator, the following must be selected to download:

| Contents | Items | Purpose |
| --- | --- | --- |
| Tools | Android SDK Platform-tools | Android platform tools, basic components |
| Android 4.4.2 (API19) | SDK Platform | Android4.4.2 SDK, Emulator Basic Components |
| Android 4.4.2 (API19) | Intel x86 Atom System Image | Android4.4.2 emulator image file for Inter x86 platform |
| Extras | Intel x86 Emulator Accelerator (HAXM installer) | Inter x86 Platform Android Emulator Hardware Accelerator |

After selecting the download item, as shown in the following figure:

![](http://www.dcloud.io/docs/a/adebug/2.2.3.png)

Select "Intall 4 Packages..." to start the download and installation.

-   Accept the license agreement

![](http://www.dcloud.io/docs/a/adebug/2.2.4.png)

After selecting the items in the packages list on the right, select "Accept License" to accept the license agreement. Then click "Install" to start the download.

-   start download

![](http://www.dcloud.io/docs/a/adebug/2.2.5.png)

Because the SDK and simulator image files are relatively large, the download time will be relatively long, and the domestic access to the google official website is not stable, and the download failure is often prompted:

![](http://www.dcloud.io/docs/a/adebug/2.2.6.png)

Close the prompt dialog and download again, or **over the wall and try to download**.

###  Install Intel X86HAXM

After downloading the Intel X86 HAXM plug-in, you need to run the installation program to the download directory to install it. The directory is: "%ADT installation directory%\\extras\\intel\\Hardware\_Accelerated\_Execution\_Manager". Double-click to run intelhaxm.exe to install, the current new version is 1.0.8, if you have installed a lower version, it is recommended to upgrade.

-   start installation

![](http://www.dcloud.io/docs/a/adebug/2.3.1.png)

Select the next step "Next".

-   Configure HAXM to use max memory

![](http://www.dcloud.io/docs/a/adebug/2.3.2.png) The installer will automatically calculate the recommended values, use the default values and select Next.

-   Confirm configuration

![](http://www.dcloud.io/docs/a/adebug/2.3.3.png) Select the next step "Next".

-   finish installation

![](http://www.dcloud.io/docs/a/adebug/2.3.4.png)

###  Create emulator

The ADT tool comes with the Android emulator management program (Android Virtual Device Manager), which can be double-clicked to run the "AVD Manager.exe" program in the root directory of the Android SDK (such as "D:\\AndroidSDK").

![](http://www.dcloud.io/docs/a/adebug/2.4.1.png)

Since no emulator has been created, no emulator is available in the list, click "New..." to start a new emulator.

-   New simulator

![](http://www.dcloud.io/docs/a/adebug/2.4.2.png)

| Item | Description |
| --- | --- |
| AVD Name | Emulator name, input according to your preference |
| Device | Simulate device, choose according to your hobbies, it is recommended to choose according to the display resolution, if you choose a large display, a high score ratio simulator |
| Target | Select "Android 4.4.2 - API Level 19" |
| CPU/ABI | Select "Intel Atom (x86)" |
| Skin | Simulator skin, choose according to your hobbies, WVGA800 is recommended |
| Front Camera | For the front camera, select "None" if it is not used, select "Emulated" for analog camera, and select "WebCam0" for PC camera |
| Back Camera | The rear camera, similar to the front camera selection |
| Memory Options | Memory size, set according to PC memory size, recommended RAM: 512; Heap: 64 |
| Internal Storage | The size of the internal memory, set according to the size of the PC system disk space, 200M is recommended |
| SD Card | SD card storage size, set according to the size of the PC system disk space, 200M is recommended |

\*\*Be sure to set up the SD Card, otherwise it will not work on the real machine. \*\* After the setting is complete, click "OK".

-   Confirm configuration

![](http://www.dcloud.io/docs/a/adebug/2.4.3.png)

-   Show in simulator list after creation

![](http://www.dcloud.io/docs/a/adebug/2.4.4.png)

###  Start the emulator

After creating the emulator, it can be displayed in the list every time you start the Android Emulator Manager:

![](http://www.dcloud.io/docs/a/adebug/2.5.1.png)

-   start the emulator

![](http://www.dcloud.io/docs/a/adebug/2.5.2.png) Select "Android4.4.2" emulator, click "Start..." to start.

-   Set startup configuration information

![](http://www.dcloud.io/docs/a/adebug/2.5.3.png)

| Item | Description |
| --- | --- |
| Scale Display to real size | Whether to scale to the set emulator resolution, used when the PC resolution is low |
| Wipe user data | Whether to wipe user data, used when resetting the simulator |

Click "Launch" to start.

-   Wait for the emulator to load

![](http://www.dcloud.io/docs/a/adebug/2.5.4.png)

The configuration of the PC determines the speed, patiently wait for the emulator to start.

-   Finished launching the emulator

![](http://www.dcloud.io/docs/a/adebug/2.5.5.png)

After the simulator is configured, you can connect it through the real machine running function of HBuilder. Please refer to the "Application Debugging" chapter below.

##  Addendum: Debug webview with chrome {#chromedebug}

After configuring the emulator or real machine debugging environment, you can quickly debug the mobile application developed by HBuilder through Chrome's DevTools tool.

###  Install HBuilder application

After starting HBuilder, the device (simulator or real machine) connected to the PC will be automatically detected. After creating a "mobile app", you can install the HBuilder application on the device for debugging in the following ways: The shortcut key to run is Ctrl+R. It can also be operated with the mouse (note that the button of run in device in the picture below no longer exists in the new version, just click on the phone)

-   Launch via the "Run" menu

![](http://www.dcloud.io/docs/a/adebug/4.1.1.png)

-   Launch via toolbar

![](http://www.dcloud.io/docs/a/adebug/4.1.2.png) After the HBuilder application is installed on the device, the application resources will be synchronized and run automatically.

-   Simulator

![](http://www.dcloud.io/docs/a/adebug/4.1.3.png)

-   real machine

![](http://www.dcloud.io/docs/a/adebug/4.1.4.png) After the application is launched, it can be debugged through Chrome's DevTools tool connection.

###  Debugging with Chrome

We recommend developers to use HBuilder directly for debugging, see above for details. This can avoid overturning the wall. If you don't use HBuilder's debugging, but want to use chrome debugging yourself, you can read the tutorial here, pay attention to overcoming the wall. **Detect Chrome version number** Only Chrome 30 and above versions support Android device debugging. Open Chrome's About page to view:

![](http://www.dcloud.io/docs/a/adebug/4.2.1.png) A minimum version of Chrome 30 or above is required. If the version is too low, an updated version is required. The latest version is recommended.

**Open Device Check Page** In the Chrome address bar, enter "chrome://inspect" or open the device inspection page via "Menu" -> "Tools" -> "Inspect Device":

![](http://www.dcloud.io/docs/a/adebug/4.2.2.png) The DevTools tool will automatically detect the list of debuggable pages running on the connected device, and click the "inspect" link of the corresponding page to open the debug page. If the above interface does not display a debuggable phone, please re-check the phone's usb debugging mode or driver installation according to the methods mentioned above. At the same time, note that mobile phones below Android 4.4 cannot be debugged, and that emulators such as hippocampus cannot be debugged. If there is a mobile phone in the interface above, but there is no debuggable app, the possible reasons are as follows:

1.  The HBuilder base or other app that needs to be debugged on the mobile phone does not start or run any html page;
2.  The app to be debugged rejected the debug request. The HBuilder debug base opens debug requests by default, but for cloud packaged or locally packaged apps, debug requests are closed by default. Cloud packaging is to configure whether debugging is allowed in the manifest. For details, please refer to the [manifest configuration guide](http://ask.dcloud.net.cn/article/94) . The local packaging should also be configured with debug="true". See the local packaging configuration environment.

**When you click "inspect", if you encounter a white screen interface, it means you are blocked. Because this service needs to connect to google's server** In general, you only need to overturn the wall when you use "inspect" for the first time, and it will be cached locally in the future. Developers can use three-party circumvention services, but note that it is not possible to use chrome to debug by visiting google.com, and some circumvention software does not support all DNS. The key is to ping chrometophone.appspot.com (this url may change as google tweaks the service).

Another simple and easy way is to modify the local host. Here are some host lists. [https://github.com/racaljk/hosts](https://github.com/racaljk/hosts) , please update in time. It is feasible to test on July 25, 2016. Note that there are many foreign domain names involved in this host file, and unnecessary DNS resolution can be deleted) Note that the modification of the host file requires administrator privileges under the window. The specific method is not described in this article, please Baidu.

**Page debugging** After the debug page is opened, DevTools will automatically load related resources, and the operation mode of the debug page is exactly the same as that of the normal html debug page.

-   View DOM structure under Elements

![](http://www.dcloud.io/docs/a/adebug/4.2.3.png)

After the DOM element is selected, it will be highlighted on the device. Modifying the CSS properties under Styles on the right will take effect immediately:

![](http://www.dcloud.io/docs/a/adebug/4.2.4.png)

-   Debug JavaScript with breakpoints under Sources

![](http://www.dcloud.io/docs/a/adebug/4.2.5.png)

Press F5 to reload the page and start debugging again.

\*\*Note: Each Webview is a different list in the chrome candidate debugging list and needs to be inspected separately. When you inspect WebviewA, click a button to open WebviewB. To debug B, you need to go back to chrome://inspect/#devices%E9%A1%B5%E9%9D%A2, find WebviewB, and click inspect. \*\*
