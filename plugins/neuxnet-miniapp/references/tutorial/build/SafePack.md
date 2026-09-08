---
title: "Safe packing guide"
source_url: https://miniapp.neuxnet.com/tutorial/build/SafePack.html
---
#  Safe packing guide

In the past, when an App was packaged in the cloud, it was necessary to submit the application code, packaging certificate, etc. to the DCloud cloud packager, and the installation package apk/ipa was generated in the cloud packager's native development environment. Although the DCloud cloud server does not save the developer's application code and certificate and other information, the developer may still be worried or worry about the risk of interception and leakage during network transmission.

Offline packaging is not only inconvenient, but also has two important functions that cannot be used:

1.  Native obfuscation to protect js code (because of the security of the secret key, offline packaging cannot be used)
2.  Paid native plug-ins in the plug-in market (due to plug-in copyright issues, offline packaging cannot be used)

> HBuilderX 2.9.9 version adds the Android platform **safe packaging** function, no longer submit application code and packaging certificate to the cloud server, but also reduce the pressure on the cloud packager and shorten the cloud packaging waiting time during peak hours. HBuilderX3.0.7 version adds iOS platform support **safe packaging** function (only supports MacOS)

##  Safe packaging principle

-   first packing
    1.  HBuilderX will submit the module configuration information of the App to the cloud, and generate the native code package (excluding application code and certificate information) in the cloud packager
    2.  HBuilderX downloads the native code package, adds the application code to the native code package on the local computer, and generates an unsigned installation package
    3.  Cache the native code package for the next package reuse
    4.  Use the packaging certificate to sign the unsigned installation package on the local computer and generate the installation package
-   Not first time packing
    
    1.  HBuilderX determines whether the cached native code package can be reused. If the App module configuration is not modified or the native code package configuration operation is not affected, continue to the next step. Otherwise, go to the `first package` process. The following conditions will also trigger the `first package` process:
    
    -   The uni native plugin is used, and it is impossible to determine whether the native plugin has been updated locally, so as long as the uni native plugin is included in the project, it will go through the `first packaging` process
    -   HBuilderX update, the local cache native code package needs to be updated, you need to go through the `first packaging` process to generate a new version of the native code package
    
    2.  Add the modified application code to the native code package to generate an unsigned installation package
    3.  Use the packaging certificate to sign the unsigned installation package on the local computer to generate the installation package

Because most packages do not change the native part (mainly manifest.json), only the front-end code is modified. At this point, there is no need to download the native package from the cloud packager, and the packaging speed will be very fast.

##  Peace of mind packaging advantages

-   More secure: do not submit application code, certificate and other information when packaging
-   Faster: no need to submit the cloud packer to wait in line when not packing for the first time, and the package will be delivered directly locally
-   Save traffic: reduce the submission of packaging resources when packaging, and do not need to download the native code package when not packaging for the first time
-   Cheaper: Unless you use a large native plug-in, it will be difficult to break the 40M free package size threshold. Costs for developers and DCloud drop

##  Pack with peace of mind

The new version of HBuilderX does not require additional operations when packaging in the cloud. By default, "Packaging with peace of mind" will be checked, as shown in the following figure:

![](https://hx.dcloud.net.cn/static/snapshots/app/pack/pack_app_safe.png)

If the Anxin package plug-in is not installed, the following prompt box will pop up, click "Install" to continue

![](https://hx.dcloud.net.cn/static/snapshots/app/pack/pack_app_safe_box.png)

After the plugin is installed, you need to click the "Package" button again to submit the package.

**Automatically save to the "unpackage/release/apk/" directory of the project after packaging**

If this directory is cleared, the next packaging will execute the first packaging logic.

##  Precautions

-   Windows environment: only Android platform supports peace of mind packaging, iOS does not support it; MacOSX environment: Android and ios support peace of mind packaging.
-   Custom debug bases do not support peace of mind packaging
-   Using DCloud old certificate does not support peace of mind packaging
-   When using native obfuscation, the configured js files to be encrypted need to be submitted to the cloud packager (these js files are automatically cleared after the package is completed)
-   Anxin packaging is not purely offline packaging. Although the certificate and front-end code are no longer submitted to the cloud packager, the module configuration, local native plug-ins, and front-end files of native obfuscation configuration in the project's manifest still need to be submitted before the package can be released.
-   Anxin packaging for iOS platform is not compatible with swift. If the uni native plugin is developed with swift, submit the appstore prompt "ITMS-90426: Invalid Swift Support - The SwiftSupport folder is missing. Rebuild your app using the current public (GM) version of Xcode and resubmit it." error, use traditional packaging instead

##  FAQ

-   Is there a limit to the number of free packages that can be packaged with peace of mind? The limit on the number of packages is a current-limiting measure to prevent some developers from occupying too many cloud packaging resources. When using 'Safe Packaging', the installation package generated by the 'non-first-time packaging' mechanism does not occupy cloud packaging resources, so it will not be used. It will occupy the **free package times in the cloud**, which can also be understood as the `non-first package` of `safety package` without the limit on the number of packages.

##  `Summary of Android peace of mind packaging issues`

###  Q1: Windows: The console prompts that the packaging is successful, and there is no apk file in the corresponding directory

**Question:** Some users have reported that the Windows computer and the console prompt that Android Anxin has been packaged successfully, enter the corresponding directory (unpackage/release/apk), and the apk file cannot be found in the directory. **Cause**: Unpackage/release/apk directory, no write permission, failed to move apk file.

**Solution:**

1.  Grant write permission to the unpackage/release/apk directory
2.  Restart the computer and try

###  Q2: fakeLogOpen(/dev/log\_crash) failed

In some cases, when submitting a peace of mind package for the first time, you may encounter the following errors:

```
[Error] W: fakeLogOpen(/dev/log_crash) failed
[Error] W: fakeLogOpen(/dev/log_stats) failed
[Error] W: fakeLogOpen(/dev/log_stats) failed
[Info] I: Copying libs... (/lib)
[Info] I: Building apk file...
[Info] I: Copying unknown files/dir...
[Info] I: Built apk...
[Error] Apk tool compile package to apk failed
[Info] 制作结果：Failed. Reason:
```

\*\* Workaround: \*\* Resubmit peace of mind

###  Q3: Problems with startup image.9.png format

In the error log, the following log appears:

```
[Error] W: ERROR: 9-patch image C:\xxxxx\res\drawable-hdpi\splash.9.png malformed.
[Error] W: No marked region found along edge.
[Error] W: Found along top edge.
```

\*\* Reason: \*\* `Startup image xxx.9.png` is not a `valid 9.png` image, which is caused by a format error. \*\* Workaround: \*\* Regenerate a valid `9.png image`

\*\* Remarks: \*\* Some users may ask questions. For the same .9.png project, why does the traditional package succeed and the peace package fails? Because: Anxin packaging and verification mechanism is more strict. \*\* Documents:\*\* [.9.png image related documents](https://ask.dcloud.net.cn/article/35527)

###  Q4: Error occurred during initialization of VM

In the error log, the following log appears:

```
[Info] Error occurred during initialization of VM
[Info] Could not reserve enough space for 1048576KB object heap
[Error] 制作结果：Failed.    Reason:
```

\*\* Solution:\*\*

1.  Find the app-safe-pack.ini file in the app-safe-pack directory
2.  Change the file content from -Xmx1024M to -Xmx512M
3.  Resubmit packaging

\*\* Remarks: \*\* HBuilderX 3.1.10 and above versions take effect

##  `Summary of ios peace of mind packaging issues`

###  Q1: Packaging failed, signature failed errSecInternalComponent error

In the error log, the following log appears:

```
[Error] HBuilder.xcarchive/Payload/HBuilder.app: replacing existing signature
[Error] Warning: unable to build chain to self-signed root for signer  "xxxxxxxxxx“”
[Error] HBuilder.xcarchive/Payload/HBuilder.app: errSecInternalComponent
```

**Cause:** It may be that the user manually clicks to install the certificate, which causes the package signature to fail.

\*\* Solution: \*\* Open Keychain Access, delete the certificates manually installed by relevant users, and then repackage them (the figure below is for reference only, and developers need to determine which certificates are manually installed certificates).

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/iossafepackcertinstall.jpeg)

##  Feedback on packaging problems with peace of mind

If you encounter peace of mind packaging problems and cannot solve it, please add QQ group 827137391.

To enter the group, you need to provide the information of `operating system` and `HBuilderX version number`. For questions, please submit `error log` or `screenshot`.

This group is only for feedback on peace of mind packaging issues, please do not publish irrelevant information.
