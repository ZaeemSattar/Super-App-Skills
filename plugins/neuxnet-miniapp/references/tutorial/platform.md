---
title: "Cross-platform compatibility"
source_url: https://miniapp.neuxnet.com/tutorial/platform.html
---
##  Cross-platform compatibility

Mini App has encapsulated commonly used components and JS API into the framework. Developers can ensure multi-platform compatibility by developing according to Mini App specification, and most businesses can be directly satisfied.

Each platform has its own characteristics, so there will be some situations that can not be cross-platform.

-   Writing a lot of if else may cause low performance in code execution and management confusion.
-   Second modification after compiling to different projects will make the subsequent upgrade troublesome.

In C language, different codes are compiled for windows , mac and other os, by means of #ifdef and #ifndef. `Mini App` refers to this idea, provides a conditional compilation method for `Mini App`, and elegantly completes the platform personalized realization in a project.

##  Conditional compilation

Conditional compilation is marked with special comments which are the basic of compiling the code inside these comments to different platforms during compilation.

\*\*Writing: \*\*Start with #ifdef or #ifndef plus **%PLATFORM%** and end with #endif.

-   #ifdef: if defined only exists on a certain platform.
-   #ifndef: if not defined exists except for a certain platform.
-   **%PLATFORM%**: platform name

| conditional compilation | illustrate |
| --- | --- |
| 
#ifdef **APP-PLUS**  
Conditionally compiled code  
#endif

 | Code that only appears under the App platform |
| 

#ifndef **H5**  
Conditionally compiled code  
#endif

 | Except for the H5 platform, the code that exists on other platforms |
| 

#ifdef **H5** || **MP-WEIXIN**  
Conditionally compiled code  
#endif

 | The code that exists on the H5 platform or the WeChat applet platform (there is only || here, and && cannot appear because there is no intersection) |

**%PLATFORM%** **The possible values are as follows:**

| Value | Effective conditions |
| --- | --- |
| APP-PLUS | App |

**Supported files**

-   .vue
-   .js
-   .css
-   pages.json
-   Precompiled language files, such as .scss, .less, .stylus, .ts, .pug

**Notice:**

-   Conditional compilation is realized by annotations. In different grammars, annotations are written differently. js uses `// Comments`, css uses `/* Comments */`, and vue/nvue template uses `<!-- Comments -->`;
-   Conditional compilation APP-PLUS includes APP-NVUE and APP-VUE, APP-PLUS-NVUE and APP-NVUE are no different, in order to abbreviate APP-NVUE later;
-   When using conditional compilation, please ensure the correctness of the `Pre-compilation` and `Post-compilation` files, for example, there should be no extra commas in the json file;
-   `VUE3` needs to configure `"vueVersion" : "3"` at the root node of the project's `manifest.json` file

###  Conditional compilation of API

```
// #ifdef  %PLATFORM%
...
// #endif
```

For example, the following codes only appear on App:

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/07834e90-4f3c-11eb-b680-7980c8a877b8.png)

For example, the following codes will not appear on the H5 platform:

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/06a79490-4f3c-11eb-b680-7980c8a877b8.png)

In addition to conditional compilation on a single platform, it also supports simultaneous compilation on **multiple platforms**. Use || to separate the platform names.

For example, the following codes will appear on App and H5 platforms:

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/05c1ef80-4f3c-11eb-b680-7980c8a877b8.png)

###  Conditional compilation of components

```
<!--  #ifdef  %PLATFORM% -->
...
<!--  #endif -->
```

###  Conditional Compilation of style

```
/*  #ifdef  %PLATFORM%  */
...
/*  #endif  */
```

**Notice:** For style conditional compilation, whether it is css or sass/scss/less/stylus and other pre-compiled languages, you must use the wording of `/*Comments*/`.

Correct writing

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/0bd78d80-4f3c-11eb-a16f-5b3e54966275.png)

Wrong writing

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/0c9c8b30-4f3c-11eb-8a36-ebb87efcf8c0.png)

###  Conditional compilation of pages.json

The following pages will only be compiled when running to App.

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/04ecec40-4f3c-11eb-97b7-0dc4655d6e68.png)

The unique functions under different platforms, as well as the subcontracting of the applet platform, can be better realized through the conditional compilation of pages.json. In this way, redundant resources will not be generated on other platforms, thereby reducing the package size.

For conditional compilation of json, if the key names of different platforms are the same, the verifiers installed by developers under cli project will report errors, and the verification rules of these verifiers for the same key of json need to be closed by themselves. If the verifier of HBuilderX is used, there is no need to care about this problem, because the syntax verifier of HBuilderX has been optimized for this purpose.

###  Conditional compilation of static directory

In different platforms, there may be differences in the referenced static resources. This problem can be solved by conditional compilation of static. Create a dedicated directory for different platforms under the static directory (the directory name is the same as the `%PLATFORM%` value range, but the letters are all lowercase)), the static resources in the dedicated directory will only be compiled on a specific platform.

As shown in the following directory structure, `a.png` will only be compiled in the WeChat applet platform, and `b.png` will be compiled in all platforms.

	
`┌─static                     │  └─b.png ├─main.js         ├─App.vue       ├─manifest.json  └─pages.json`
