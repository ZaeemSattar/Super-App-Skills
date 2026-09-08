---
title: "Tag code block"
source_url: https://miniapp.neuxnet.com/tutorial/snippet.html
---
In order to improve development efficiency, HBuilderX encapsulates the common code of `uni-app` into code blocks starting with `u`. For example, enter `ulist` in the `template` tag and press Enter, the following code will be automatically generated:

```
<uni-list>
	<uni-list-item title="" note=""></uni-list-item>
	<uni-list-item title="" note=""></uni-list-item>
</uni-list>
```

Note: Make sure the `uni-list` component is saved in the `components` directory of the project. A simpler way is to select the `uni-ui` project template when creating a new project, and you can type all the code blocks starting with u in it. If your project is not a `uni-ui` project template, then you need to go to the plugin market to manually download [uni ui components](https://ext.dcloud.net.cn/plugin?id=55) into the project.

Code blocks are divided into `Tag` code blocks and `JS` code blocks. If you enter `uShowToast` in the `script` tag and press Enter, the following code will be automatically generated:

```
uni.showToast({
	title: '',
	mask: false,
	duration: 1500
});
```

`uni-app` supports code blocks as listed below.

###  Tag code block

-   uButton
-   uCheckbox
-   uGrid: grid, need to refer to uni ui
-   uListMedia
-   uRadio
-   uSwiper
-   ......

Almost all components, whether they are built-in components or `uni-ui` components, have been encapsulated as code blocks; use `HBuilderX` to open the `.vue` file in the `uni-app` project, and type `in the`template`area u`, Code Assistant prompts for a list of all visible code blocks.

You can also view all supported code blocks in the left list of HBuilderX menu - Tools - Code Block Settings - Vue Code Blocks.

In addition to components, other common code blocks include:

-   viewfor: generate a view code block with v-for loop structure
-   vbase: generate a basic vue code structure

###  JS code block

####  uni api code block

-   uRequest
-   uGetLocation
-   uShowToast
-   uShowLoading
-   uHideLoading
-   uShowModal
-   uShowActionSheet
-   uNavigateTo
-   uNavigateBack
-   uRedirectTo
-   uStartPullDownRefresh
-   uStopPullDownRefresh
-   uLogin
-   uShare
-   uPay
-   ......

Almost all common js apis have been encapsulated as code blocks. Type u in the js code of HBuilderX, and the code assistant will prompt all visible lists. You can also view all of them in the left list of HBuilderX menu-tools-code block settings-js code block.

####  vue js code block

-   ed：export default
-   vData: output data(){return{}}
-   vMethod: Output methods:{}
-   vComponents: output components: {}

####  Other common js code blocks

-   iff: simple if
-   forr: for loop structure
-   fori: for loop structure and contains i
-   funn: function
-   rt：return true
-   clog: output: "console.log ()"
-   clogvar: enhanced log output, which can print out the names of variables at the same time
-   varcw: output: "var currentWebview = this.$scope.page.$getAppWebview()"
-   ifios: platform judgment of iOS
-   ifAndroid: platform judgment of Android

If the preset code block does not meet the requirements, you can customize the code block. Refer to the tutorial [https://ask.dcloud.net.cn/article/35924](https://ask.dcloud.net.cn/article/35924)
