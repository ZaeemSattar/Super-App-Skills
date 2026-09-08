---
title: "Real machine running FAQ"
source_url: https://miniapp.neuxnet.com/tutorial/run/run-app-faq.html
---
#  Real machine running FAQ

> About real machine operation, iOS: First make sure `iTunes` can connect to iPhone; Android: `Mobile Assistant` (such as 360 Mobile Assistant) can connect to the mobile phone normally with Android.

> If you still have problems, please check whether the following problems are the same as yours!

**pay attention**:

-   `iOS13 real machine running, need to upgrade to HBuilderX 2.2.5+ version.`
-   itunes `12.10.9.3` version, connected to `ios 14+` iphone, there may be problems; please download the version before 12.9.4.102
-   Some Android 11 mobile phones failed to synchronize files when running on real devices. HBuilderX 3.1.19 has solved this problem. Please upgrade HBuilderX to version 3.1.19+.
-   HBuilderX, \[Settings - Run Settings\], customize the adb path. If customized, please check if the adb path is valid. If unsure, please clear. Then restart HBuilderX.

When there is a problem, the mobile phone analyzes the problem clearly. From the HBuilder/HBuilderX menu, click the real machine to run, the program will perform the following steps:

1.  The mobile phone hardware is connected to the computer where HBuilder is located through the usb cable. At this time, the connection may fail due to various problems such as the `mobile phone driver`, the usb port, the data cable, and the mobile phone hardware.
2.  HBuilderX detects the mobile phone through adb or itunes service. At this time, it may not be detected due to mobile phone channels, usb connection settings, adb settings or adb conflicts, and itunes settings.
3.  HBuilderX installs the debugging base to the mobile phone. At this time, the installation may fail because the mobile phone prohibits usb installation, the Android mobile phone does not have an sd card, and the iOS mobile phone does not have a trust certificate.
4.  HBuilderX synchronizes the code in the ide to the phone and starts the debug base. This step is generally not a problem.

A variety of common FAQs are listed below, and you can follow the chart to find out.

##  1. Not running to the phone's menu

> The real machine can only run the App project, select the App project or focus on the file of the App project to be run

HBuilderX supports web projects and app projects. There is an icon in front of the project, W represents the web project, and A represents the App project. where only `App project can run`.

HBuilderX supports many project types, only `uni-app`, `5+app`, `wap2app` can run on real machine. They will all have a `manifest.json` file in the project root directory (uni-cli projects will have a manifest.json in the src directory).

##  2. Check phone settings

Special attention: Windows is connected to an Android phone, and you must ensure that the computer has installed the corresponding phone driver.

1.  Make sure that the data cable or USB port is normal, you can replace a different cable or port to verify.
2.  Make sure the `USB debugging` mode is enabled in the Android phone settings. This setting is generally in \[Settings\] \[Developer Options\]. Some mobile phones can also be set in the push notification bar after plugging in the data cable. Note that it cannot be set to U disk mode. If it is charging mode, you must also set `Allow usb debugging` during charging.
3.  If the mobile phone screen pops up a request to trust this computer, please `agree to the authorization`. And it's best to tick Always agree to this device debugging. If you accidentally refuse, you need to replug the phone or restart the computer.
4.  For Android 5.0 and above systems, do not use guest mode. It will not work successfully in this mode.
5.  Some mobile phones, such as Xiaomi, have permission settings for installing applications via usb, and it is necessary to allow installation of applications through usb on the mobile phone. The interface of different roms is different, please Baidu your mobile phone to open the usb installation method.

##  3. Mac connection phone/emulator instructions

###  3.1 Mac: iOS real machine

1.  Make sure the phone is connected to the computer via a data cable
2.  Confirm that the Mac computer can connect to the mobile phone normally
3.  If the mobile phone screen pops up a request to trust this computer, please agree to the authorization

###  3.2 Mac: iOS Simulator

1.  Xcode must be installed in the application (Application)
2.  First confirm that Xcode (version must be 6.0 and above) is installed and can start the simulator normally
3.  If it still cannot be detected, open Xcode, then open Xcode's `Preferences --> Locations`, set the `Command Line Tools` item in the interface, and select the correct `Xcode` version.

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/ios_simulator.png)

###  3.2 Mac: Connect Android phone

1.  About the machine (referring to the Mac system about this machine, not the mobile phone) --> system report -> usb -> your connected device --> manufacturer ID or vendor ID (Vendor ID)
2.  Execute the following command in the terminal: echo xxxxxx >> ~/.android/adb\_usb.ini (“xxxxxx” is the vendor ID or vendor ID (Vendor ID). In some systems, the echo command cannot write the file correctly. Modify or create adb\_usb.ini in the ~/.android/ directory to add xxxxxx)
3.  Restart HBuilderX.
4.  If restarting HBuilderX still does not work, please use the command line (terminal.app) to switch to the adb directory that comes with HBuilderX.
5.  The location of the adb directory of the official version of HBuilderX: tools/adbs directory (HBuilderX.app/Contents/tools/adbs directory under MAC)
6.  The location of the adb directory of HBuilderX Alpha version: plugins/launcher/tools/adbs directory (`/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs` directory under MAC)
7.  Run `./adb kill-server` in the adbs directory to try again.
8.  Restart the computer and try again.

##  4. Windows connection phone/emulator instructions

###  4.1 Windows: Connecting to an Android phone

####  4.1.1 Driver:

> Make sure the Android phone driver is installed.

If there is no response from the mobile phone connection or a driver problem is prompted, you can solve it in the following ways:

1.  Install the `Driver Wizard` programs and use them to install the driver
2.  The best way to install the driver is to use various mobile assistants, such as `360, Tencent's various mobile assistants`, if there is any problem, try to upgrade the version of the assistant.

####  4.1.2 Notes:

-   Windows Android: If it is a Huawei mobile phone, after trying all the following methods, it still does not work, please install \[Huawei Mobile Assistant\](https://consumer.huawei.com/cn/support/content/zh-cn00731203/?ivk\_sa= 1024320u)
-   HBuilderX, \[Settings - Run Settings\], whether you have customized the adb path. If customized, please check if the adb path is valid. If you are not sure, try clearing it. Then restart HBuilderX
-   Close HBuilderX, open the task manager to see if there is an adb process, if so, kill all adb processes

1.  If the driver is installed and connected to the phone after HBuilderX is started, it may be necessary to restart HBuilderX.
2.  Run HBuilderX with `administrator privileges`.
3.  Turn off the WebView debug mode, restart HBuilderX and try again.
4.  If other software can connect to the mobile phone, but HBuilderX cannot detect the mobile phone, it may be that other software has exclusive access to Google's ADB service channel.
5.  Android's `ADB service` has been abused by a large number of software. In addition to various mobile phone assistants that come with adb, other software such as QQ, Sogou input method, Baofengyingyin, Kugou Music, Aliwangwang and many other software have their own `adb`. The version of `adb` of some tools is low and the mobile phone channel is exclusive, which will cause HBuilderX to fail to connect to the mobile phone.
6.  Find the `adb.exe` related process (including `kadb.exe`, etc.) in the task manager, right-click the process in the task manager, open the file location, and check what software started the process.
7.  It is forbidden for these software to monitor the insertion of the mobile phone (usually in the settings of the software) and prohibit automatic startup.
8.  Some software will start automatically after ending the adb process, so you have to rename the `adb.exe` file, it is impossible to uninstall these rogue software.
9.  Close all mobile assistants and various `adb.exe` (including `kadb.exe`, etc.) in the process and try again.

####  4.1.3 adb occupation problem

If you can't find who is occupied, you can also use the following methods to detect and find the culprit:

1.  Open a command line window
2.  Confirm the startup process of adb: To find a `tcp connection` with port `5037`, enter in the command line: `netstat -ano | findstr 5037`

TCP 127.0.0.1:5037 0.0.0.0:0 **LISTENING** **5816** \*If the content is empty, there may be no program occupying the adb port. \*

Or use netstat -ano | findstr 5037>d:/1.txt output to the file to find. According to the query result, it is confirmed that the connection whose port is 5037 is occupied by that process. The "5816" displayed in the result indicates the PID of the process occupying the adb port.

3.  The specific process can be found according to the PID of the process.

Type in the command line: `tasklist | findstr 5816` Find a line similar to the following in the output:

```
adb.exe                     5816 Console                 0      4,440 K
```

adb.exe (the name is generally not adb.exe, take adb.exe as an example) as the started adb process. Or manually locate the process in the task manager, open the task manager, go to the process tab, if there is a PID in the list, look for it directly; if there is no PID in the list, click the menu to view - select a column, and tick the PID.

####  4.1.4 Other issues

If the above method still does not work, there is another possibility that the mobile phone has specific requirements for the adb version (some Meizu mobile phones have this problem), and the adb version of HBuilder needs to be replaced at this time.

-   There are multiple versions of adb in the HBuilder installation directory.
-   HBuilder's adb directory location: tools/adbs directory (HBuilder.app/Contents/tools/adbs directory under MAC)
-   HBuilderX's adb directory location: plugins/launcher/tools/adbs directory (`/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs` directory under MAC) Before replacing the version, backup the default version of adb.exe. Then copy the adb.exe of version 1.0.31 to replace the exe in the main directory.

###  4.2 Windows: Connecting to an iOS phone

####  4.2.1 iTunes Download Instructions

\[Windows 32-bit itunes\][download link](https://pc.qq.com/detail/9/detail_609.html) , \[all versions of itunes download link\](https://mydown.yesky.com/pcsoft /445423/versions/)

\[Windows 64-bit itunes\][download link](https://pc.qq.com/detail/3/detail_2683.html) , \[all versions of itunes download link\](https://mydown.yesky.com/pcsoft /33491427/versions/)

-   It is recommended to download iTunes from the above address; if it is the first time to install itunes, it is recommended to restart the computer
-   do not download itunes from `Microsoft App Store`;
-   If your computer is `64-bit`, and the version of HBuilderX is lower than 3.4.0, please download iTunes before `12.9.4.102`.
-   If your computer is `32bit`, please download iTunes before `12.9.4.102`.

**Special attention**: `If the mobile phone screen pops up a request to trust this computer, please agree to the authorization`

####  4.2.2 Troubleshooting

1.  After the itunes installation is complete, please confirm that itunes can connect to the phone `normally`. If itunes cannot connect to the phone, please solve the problem of itunes connecting to the phone first.
2.  If the above solutions cannot be solved, it may be because the local library conflicts with the library brought by iTunes, usually the iTunes library directory (32-bit system directory is: C:\\Program Files\\Common Files\\Apple\\Apple Application Support, The 64-bit system directory is: C:\\Program Files (x86)\\Common Files\\Apple\\Apple Application Support) under the dll file and system library directory (32-bit system directory is: C:\\WINDOWS\\system32, 64-bit system directory It is the same name as the dll under C:\\Windows\\SysWOW64), you can copy the dll file with the same name in the iTunes library directory to the system library directory, or rename or delete the dll file with the same name in the system directory, and then restart HBuilder Or retry the real machine to run
3.  It is possible that the dependent library is missing when iTunes is installed, try reinstalling iTunes to solve the problem

####  4.2.3 itunes cannot detect phone

iTunes cannot detect the phone, and itunes pop-up window prompts: `iTunes has detected incompatible Bluetooth software on your computer and may not run properly`.

Please disable or update some bluetooth drivers. Or refer to [Apple forum solution](https://discussionschinese.apple.com/thread/140142495?page=2)

##  5. Other questions

####  Q1: The mobile phone can be detected, but it is grayed out and cannot be clicked

This situation usually occurs when the mobile phone is detected, and the connection of other software is disconnected in the middle, and the mobile phone needs to be re-plugged or restarted or HBuilderX needs to be restarted.

####  Q2: The mobile phone can be detected, but the real machine of HBuilder fails to install and debug the base

1.  Some Android roms, such as Xiaomi, have the permission to install apk via usb, which may be turned off. In this case, you need to find the permission to install apk via usb in the settings such as the phone manager, and turn it on.
2.  Some Android phones will pop up a box on the phone interface when installing apk on the usb. If the popup box cannot be clicked in time, the installation will fail due to timeout. Please pay attention to the display of the mobile phone screen. When the HBuilder console prompts `"Failed to install the HBuilder base app, please use the mobile assistant to manually install xxx\android_base.apk."`, this is basically the case.
3.  The iOS version occasionally reports an error. You also need to manually install iPhone\_base.ipa according to the prompts. The installation method recommends itools, you can use itunes without itools. After installation, there will be an HBuilder application on the phone. After you click the real machine to run, you can deploy the project to the mobile phone, and then manually click the HBuilder application to see the results of the project.

####  Q3: The solution to the problem that the HBuilder console does not output logs

Reference [http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)

####  Q4: When the Android phone runs on the real machine, it prompts that the app is installed successfully, but there is no HBuilder app on the phone.

1.  Make sure that the USB debugging mode is turned on. If it is not turned on, please turn on the USB debugging mode and run the real machine debugging again.
2.  If HBuilder has detected the mobile phone, there may be a conflict with the mobile assistant, please close all mobile assistants and re-run the real device debugging.
3.  Use the mobile assistant to manually install android\_base.apk to the mobile phone, and then re-run the real device debugging.

####  Q5: Permission denied for Android real machine joint debugging report file operation

Please try the following solutions:

1.  Unplug the data cable
2.  Re-`turn on USB debugging mode`
3.  Re-plug the data cable. At this time, authorization confirmation may be required on the mobile phone. Click OK.
4.  Re-run the real machine debugging to see if there is any problem
5.  Restart the phone, and then re-run the real machine debugging to see if the problem is solved
6.  If there is still a problem, restart HBuilder, repeat steps 1-4, and then re-run the real machine debugging to see if the problem is solved
7.  If the problem is still not resolved, reinstall the phone driver:
    1.  My Computer---Right Click---Properties---Hardware---Device Manager---Delete USB Driver
    2.  Open the mobile phone assistant and reinstall the driver; at this time, authorization confirmation may be required on the mobile phone, click confirm, and then re-run the real machine debugging
8.  If none of the above solutions can be solved, it may be that when the phone is rooted, the permissions of the sdcard directory are wrong, resulting in the inability to run on the real machine. At this time, you can restore the factory settings, or re-root, or brush the machine to solve this problem.

####  Q6: Android real machine joint debugging report: open '/dev/hwlog\_switch' fail -1, 13. Permission denied

Please try the following solutions:

1.  Reference [http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)
2.  Unplug the data cable and try again
3.  Re-open the USB debugging mode and try again
4.  Restart the phone and try again
5.  Restart HBuilder and try again
6.  If none of the above solutions can be solved, it may be that when the phone is rooted, the permissions of the sdcard directory are wrong, resulting in the inability to run on the real machine. At this time, you can restore the factory settings, or re-root, or brush the machine to solve this problem.

####  Q7: Why can't the real device debug the Android phone without SDCard?

Android phones without root only have access to SDCard. However, this SDCard does not have to be inserted into a physical SD card, it is a root directory called SDCard in the mobile phone. If you are using an Android emulator, you can configure the existence and size of the SDCard in the emulator. This situation has expired, and normal mobile phones currently have SDCard directories.

####  Q8: The console shows that the mobile application has been launched, but it does not appear on the mobile screen?

When the base application is installed on an Android phone for the first time, most of the antivirus software on the mobile phone needs to be detected for a while before it is released, and it needs to wait for a while.

####  Q9: After the 5+App is running, the mobile terminal stays on the startup screen and cannot enter

This is a problem with the js code of the app, the closing of the splash screen is configurable. Reference [http://ask.dcloud.net.cn/article/110](http://ask.dcloud.net.cn/article/110)

####  Q10: Why is my iphone not plugged into my computer, but HBuilder detects an iOS device?

iTunes supports wifi synchronization. If the iOS device starts wifi synchronization, iTunes on the computer can detect it, and then HBuilder can also detect it.

####  Q11: The real machine is successfully started, but the software displayed on the mobile phone is not the running project after it is started.

In this case, the adb connection to the mobile phone is successful, but the copying of the project file to the mobile phone fails. Rerun the real machine debugging. Or check whether the directory name and file name of the project to be run have special symbols or are too long to cause Android to not recognize them.

####  Q12: After the real machine is started, the HBuilder real machine operation (log) interface is displayed {#synchronous}

1.  Re-run real device debugging to try to solve the problem
2.  The Android device may conflict with the mobile assistant, please close all mobile assistants and re-run the real device to debug
3.  If step 2 cannot solve the problem, please change to another mobile assistant, and re-run the real device debugging to try to solve the problem.
4.  Confirm the installation location of the HBuilder application on the mobile phone. If there is an external sdcard on the mobile phone, do not install the HBuilder base app on the external sdcard. If it is installed on the external sdcard, uninstall the HBuilder base app on the external sdcard, and Do not set the default installation location of the application to the external sdcard in the settings, or transfer the application to the phone memory or built-in sdcard, and re-run the real machine debugging

####  Q13: Use genymotion emulator to run on real machine, install apk and report INSTALL\_FAILED\_CPU\_ABI\_INCOMPATIBLE

See [The solution to the genymotion simulator report INSTALL\_FAILED\_CPU\_ABI\_INCOMPATIBLE](http://blog.csdn.net/wjr2012/article/details/16359113) The adaptation of other simulators can be searched in the forum.

####  Q14: How to run the real machine through wifi without plugging in the data cable?

Reference [http://ask.dcloud.net.cn/article/565](http://ask.dcloud.net.cn/article/565)
