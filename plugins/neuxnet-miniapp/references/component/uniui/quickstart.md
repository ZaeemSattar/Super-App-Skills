---
title: "In the template of the new uni-app project in HBuilderX, select the uni-ui template"
source_url: https://miniapp.neuxnet.com/component/uniui/quickstart.html
---
uni-ui supports HBuilderX to directly create a new project template, npm installation and separate import of individual components, etc.

###  In the template of the new uni-app project in HBuilderX, select the uni-ui template

![Create uni-ui project in HBuilderX](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/create-uni-ui-project.jpg)

Due to the unique [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) technology of uni-app, you can directly use various Vue components that meet the rules without reference and registration.

Type `u` in the code area, pull up a list of various built-in or uni-ui components, and select one to use the component.

Place the cursor on the component name and press F1 to view the component's documentation.

![uni-ui code block](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-ui-snippet.jpg)

###  Install components individually via uni\_modules

If you have not created a uni-ui project template, you can also install a required component separately in your project through uni\_modules. The following table is the list of extension components of uni-ui. Click each component on the details page to import the components to the project. After importing, you can use it directly without import and registration.

| Component Name | Component Description |
| --- | --- |
| uni-badge | [digital badge](https://ext.dcloud.net.cn/plugin?name=uni-badge) |
| uni-calendar | [Calendar](https://ext.dcloud.net.cn/plugin?name=uni-calendar) |
| uni-card | [card](https://ext.dcloud.net.cn/plugin?name=uni-card) |
| uni-collapse | [Collapse Panel](https://ext.dcloud.net.cn/plugin?name=uni-collapse) |
| uni-combox | [combo box](https://ext.dcloud.net.cn/plugin?name=uni-combox) |
| uni-countdown | [Countdown](https://ext.dcloud.net.cn/plugin?name=uni-countdown) |
| uni-data-checkbox | [data selector](https://ext.dcloud.net.cn/plugin?name=uni-data-checkbox) |
| uni-data-picker | [Data-driven picker picker](https://ext.dcloud.net.cn/plugin?name=uni-data-picker) |
| uni-dateformat | [date format](https://ext.dcloud.net.cn/plugin?name=uni-dateformat) |
| uni-datetime-picker | [date picker](https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker) |
| uni-drawer | [Drawer](https://ext.dcloud.net.cn/plugin?name=uni-drawer) |
| uni-easyinput | [Enhanced Input Box](https://ext.dcloud.net.cn/plugin?name=uni-easyinput) |
| uni-fab | [floating button](https://ext.dcloud.net.cn/plugin?name=uni-fab) |
| uni-fav | [Favorite button](https://ext.dcloud.net.cn/plugin?name=uni-fav) |
| uni-file-picker | [File selection and upload](https://ext.dcloud.net.cn/plugin?name=uni-file-picker) |
| uni-forms | [Forms](https://ext.dcloud.net.cn/plugin?name=uni-forms) |
| uni-goods-nav | [Commodities Navigation](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav) |
| uni-grid | [Gongge](https://ext.dcloud.net.cn/plugin?name=uni-grid) |
| uni-group | [group](https://ext.dcloud.net.cn/plugin?name=uni-group) |
| uni-icons | [icon](https://ext.dcloud.net.cn/plugin?name=uni-icons) |
| uni-indexed-list | [indexed list](https://ext.dcloud.net.cn/plugin?name=uni-indexed-list) |
| uni-link | [Hyperlink](https://ext.dcloud.net.cn/plugin?name=uni-link) |
| uni-list | [list](https://ext.dcloud.net.cn/plugin?name=uni-list) |
| uni-load-more | [Load More](https://ext.dcloud.net.cn/plugin?name=uni-load-more) |
| uni-nav-bar | [custom navigation bar](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar) |
| uni-notice-bar | [Notice Bar](https://ext.dcloud.net.cn/plugin?name=uni-notice-bar) |
| uni-number-box | [number input box](https://ext.dcloud.net.cn/plugin?name=uni-number-box) |
| uni-pagination | [Pagination](https://ext.dcloud.net.cn/plugin?name=uni-pagination) |
| uni-popup | [popup layer](https://ext.dcloud.net.cn/plugin?name=uni-popup) |
| uni-rate | [rating](https://ext.dcloud.net.cn/plugin?name=uni-rate) |
| uni-row | [layout-row](https://ext.dcloud.net.cn/plugin?name=uni-row) |
| uni-search-bar | [search bar](https://ext.dcloud.net.cn/plugin?name=uni-search-bar) |
| uni-segmented-control | [segmented-control](https://ext.dcloud.net.cn/plugin?name=uni-segmented-control) |
| uni-steps | [step bar](https://ext.dcloud.net.cn/plugin?name=uni-steps) |
| uni-swipe-action | [Swipe Action](https://ext.dcloud.net.cn/plugin?name=uni-swipe-action) |
| uni-swiper-dot | [Carousel indicator dot](https://ext.dcloud.net.cn/plugin?name=uni-swiper-dot) |
| uni-table | [table](https://ext.dcloud.net.cn/plugin?name=uni-table) |
| uni-tag | [tag](https://ext.dcloud.net.cn/plugin?name=uni-tag) |
| uni-title | [Chapter Title](https://ext.dcloud.net.cn/plugin?name=uni-title) |
| uni-transition | [Transition Animation](https://ext.dcloud.net.cn/plugin?name=uni-transition) |

Use the `uni_modules` method to install the component library, which can be imported directly through the plug-in market, and the components can be quickly updated through the right-click menu. No reference or registration is required, and the `uni-ui` component can be used directly in the page. [Click to install uni-ui component library](https://ext.dcloud.net.cn/plugin?id=55)

**Note: Downloading the latest components currently only supports uni\_modules , and the non-uni\_modules version supports up to the 1.2.10 version of the component**

If you cannot upgrade to the `uni_modules` version, you can use `uni_modules` to install the corresponding components and copy the components to the corresponding directory.

For example, to update `uni-list` and `uni-badge`, copy all the directories under `uni_modules>uni-list>components` and `uni_modules>uni-badege>components` to the following directory:

**Directory example**

```
┌─components              组件目录
│  ├─uni-list             list 列表目录
│  │  └─uni-list.vue      list 组件文件
│  ├─uni-list-item        list-item 列表目录
│  │  └─uni-list-item.vue list 组件文件
│  ├─uni-badge         	  badge 角标目录
│  │  └─uni-badge.vue     badge 组件文件
│  └─ //....              更多组件文件
├─pages                   业务页面文件存放的目录
│  ├─index
│  │  └─index.vue         index示例页面
├─main.js                 Vue初始化入口文件
├─App.vue                 应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json           配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json              配置页

```

###  Import all components via `uni_modules`

If you want to import all uni-ui components into the project at once, you only need to import one `uni-ui` component [click to import](https://ext.dcloud.net.cn/plugin?id=55) .

If other components are not automatically imported, you can right-click on the uni-ui component directory and select `Install third-party plug-in dependencies`.

###  npm install

You can use `npm` to install the `uni-ui` library in the `vue-cli` project, or use `npm` directly in the `HBuilderX` project.

> **Note** The cli project does not compile the components under `node_modules` by default, resulting in the failure of functions such as conditional compilation, resulting in component exceptions
> 
> ```
> // vue.config.js
> module.exports = {
> 		transpileDependencies:['@dcloudio/uni-ui']
> }
> ```

**Prepare for sass**

For the `vue-cli` project, please install sass and sass-loader first. If you use it in HBuliderX, you can skip this step.

-   install sass

```
 npm i sass -D   或   yarn add sass -D  
```

-   install sass-loader

```
npm i sass-loader@10.1.1 -D   或   yarn add sass-loader@10.1.1 -D
```

> If `node` version is less than 16, sass-loader please use a version lower than @11.0.0, \[sass-loader@11.0.0 does not support vue@2.6.12\](https://stackoverflow.com/questions/ 66082397/typeerror-this-getoptions-is-not-a-function) If `node` version is greater than 16, `sass-loader` recommends `v8.x` version

**Anso uni-ui**

```
npm i @dcloudio/uni-ui   或   yarn add @dcloudio/uni-ui
```

**Configure easycom**

After using `npm` to install `uni-ui`, you need to configure `easycom` rules, so that the components installed by `npm` support `easycom`

Open `pages.json` in the project root directory and add the `easycom` node:

```
// pages.json
{
	"easycom": {
		"autoscan": true,
		"custom": {
			// uni-ui rules are configured as follows
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
		}
	},
	
	// Other content
	pages:[
		// ...
	]
}

```

Use components in `template`:

```
<uni-badge text="1"></uni-badge>
<uni-badge text="2" type="success" @click="bindClick"></uni-badge>
<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
```

**Notice**

-   uni-ui now only recommends using `easycom` , if you refer to the component yourself, there may be a problem that the component cannot be found
-   For components installed using npm, babel-loader will ignore all files in node\_modules by default, which will cause conditional compilation to fail. It needs to be solved by configuring `vue.config.js`:
    
    ```
    // Create a vue.config.js file in the root directory and configure it as follows
    module.exports = {
       transpileDependencies: ['@dcloudio/uni-ui']
    }
    ```
    
-   uni-ui is an extension to the built-in components of uni-app. Note that unlike web development, uni-ui does not include base components, it is a complement to base components. Some developers in web development are accustomed to using a ui library to complete all development, but in the uni-app system, it is recommended that developers use basic components with higher performance first, and then introduce necessary extension components as needed.
-   `uni-ui` does not support installing using `Vue.use()`
