---
title: "App Platform Debugging Guide debug"
source_url: https://miniapp.neuxnet.com/tutorial/debug/debug-app.html
---
##  App Platform Debugging Guide debug

In conventional development, when you run the app in the run menu of HBuilderX, the errors or console.log log information on the mobile phone will be directly printed to the console.

If you need more functionality, such as inspecting elements, breaking point debug, you need to enable debug mode. Since `HBuilderX 2.0.3+` version, `App` side debugging has been supported.

###  Open debug window

In `HBuilderX`, run the project correctly: `Run --> Run to phone or emulator --> Select device`, after the project starts, select the `debug` icon in the console below.

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/55245430-4f34-11eb-97b7-0dc4655d6e68.png)

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/50f7e890-4f34-11eb-b680-7980c8a877b8.png)

###  Elements

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/5433b2a0-4f34-11eb-8a36-ebb87efcf8c0.png)

###  console.log log

`console.log` is the most commonly used debugging method in our daily development, and of course `HBuilderX` is indispensable.

-   The App side provides the `console.log` log output running on the real machine. When running to the real machine or simulator, you don't need to click the `debug` button to operate the mobile phone, and the log will be output directly on the `HBuilderX` console.
    
-   If it is more complex logic, it is recommended to use the `console` in the debugging tool. According to the previous step, after starting the `debug` window, execute the `console.log` method to see the printed content.
    

The method of viewing `console.log` in the `debug` window is as follows:

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/53673ae0-4f34-11eb-a16f-5b3e54966275.jpg)

###  Debug page

In the `Sources` (indicated 1 in the figure) column of the debug window console, you can breakpoint debugging for `js`.

Find the page that needs to be debugged under `uniapp` (indicated by 2 in the figure), click Open , and you can see the content we need to debug on the right (indicated by 3 in the figure). Click to place a breakpoint at the position of the line of code that needs to be debugged (indicated by 4 in the figure).

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/58f09e70-4f34-11eb-8a36-ebb87efcf8c0.png)

After that, operate on the device and enter the breakpoint position, which is convenient for us to trace and debug the code.

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/5839d190-4f34-11eb-8a36-ebb87efcf8c0.png)

###  Synchronize breakpoints to debugger

It is quite troublesome to find the code to be debugged among the many codes in the console. The debugging of `HBuilderX` also provides a convenient function, which can directly break the breakpoint in the editor, and the breakpoint will be automatically synchronized to the debugging tool .

Operation steps: Right-click on the line number of the target line in the HBuilderX editor, select "Synchronize breakpoint to debugger" in the right-click menu, and then the debugging console will automatically open the corresponding code and mark the breakpoint at the specified line . The demo is as follows:

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/55de5560-4f34-11eb-8a36-ebb87efcf8c0.gif)

###  Precautions

-   Both `vue` and `nvue` pages support breakpoint debugging
-   Currently only supports `nvue` page review elements, `vue` pages are not currently supported, and `nvue` review elements on the `Android` platform do not currently support viewing `style`
-   The App side provides the `console.log` log output running on the real machine. When running to the real machine or simulator, you don't need to click the `debug` button to run the mobile app, and the log will be output directly on the `HBuilderX` console.
-   If you are debugging the interface and general API of `App`, it is recommended to compile to the H5 side, click the preview in the upper right corner of `HBuilderX`, and call `Dom` in the built-in browser. You can see the results immediately after saving, which makes debugging more convenient. And the H5 side also supports various complex settings of `titleNView`. The only thing to pay attention to is the compatibility of `css`. Using too new `css` to preview on `pc` may be normal, but it is abnormal on low-end `Android`. For details, please check `caniuse` and other websites.
-   The common development mode is to use the built-in browser preview on `pc` to adjust the dom, and run it on the real machine to see `console.log`. Only use `debug` if it is a very complex problem.
-   The webkit remote debug on the App side of uni-app can only debug the view layer, but not the logic layer. Because the js of uni-app is not running in webview, but in independent jscore.
-   Some manifest configurations, such as third-party sdk configurations, need to be packaged to take effect, and a custom runtime base can be packaged. After packaging the custom base and running this custom base, you can also run and debug the real machine. Packaging the official package will not be able to run and debug the real machine.
