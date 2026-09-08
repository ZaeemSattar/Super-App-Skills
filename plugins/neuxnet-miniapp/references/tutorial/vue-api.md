---
title: "Global configuration"
source_url: https://miniapp.neuxnet.com/tutorial/vue-api.html
---
##  Global configuration

| Vue Global Configuration | Description | H5 | App | Mini Program | Description |
| --- | --- | --- | --- | --- | --- |
| Vue.config.silent | Cancel all Vue logs and warnings [Details](https://cn.vuejs.org/v2/api/#silent) | √ | √ | √ |  |
| Vue.config.optionMergeStrategies | Options for custom merge strategy [details](https://cn.vuejs.org/v2/api/#optionMergeStrategies) | √ | √ | √ |  |
| Vue.config.devtools | Configure whether to allow vue-devtools to check code [Details](https://cn.vuejs.org/v2/api/#devtools) | √ | x | x | Only supported in web environment |
| Vue.config.errorHandler | Specifies the handler for uncaught errors during rendering and observation of components [Details](https://cn.vuejs.org/v2/api/#errorHandler) | √ | √ | √ |  |
| Vue.config.warnHandler | Assign a custom handler to Vue's runtime warnings [Details](https://cn.vuejs.org/v2/api/#warnHandler) | √ | √ | √ |  |
| Vue.config.ignoredElements | Make Vue ignore custom elements outside Vue [Details](https://cn.vuejs.org/v2/api/#ignoredElements) | √ | √ | √ | Strongly not recommended , which overrides the built-in components configured by the uni-app framework |
| Vue.config.keyCodes | Custom key aliases for v-on [Details](https://cn.vuejs.org/v2/api/#keyCodes) | √ | x | x |  |
| Vue.config.performance | Set to true to enable performance tracking of component initialization, compilation, rendering, and patching in the browser dev tools' performance/timeline panel \[details\](https://cn.vuejs.org /v2/api/#performance) | √ | x | x | Only supported in Web environment |
| Vue.config.productionTip | Set to false to prevent vue from generating production tips on startup [details](https://cn.vuejs.org/v2/api/#productionTip) | √ | √ | √ | \- |

##  Global API

| Vue Global API | Description | H5 | App-side | Mini Program | Description |
| --- | --- | --- | --- | --- | --- |
| Vue.extend | Use the basic Vue constructor to create a "subclass" [Details](https://cn.vuejs.org/v2/api/#Vue-extend) | √ | √ | x | Not available as a component use |
| Vue.nextTick | Execute delayed callback after the end of the next DOM update loop [details](https://cn.vuejs.org/v2/api/#Vue-nextTick) | √ | x | x |  |
| Vue.set | Add a property to the reactive object, and make sure this new property is also reactive and triggers view updates \[details\](https://cn.vuejs.org/v2/api/#Vue- set) | √ | √ | √ |  |
| Vue.delete | Delete a property of an object. If the object is reactive, make sure delete triggers update view [Details](https://cn.vuejs.org/v2/api/#Vue-delete) | √ | √ | √ |  |
| Vue.directive | Register or get global directives [Details](https://cn.vuejs.org/v2/api/#Vue-directive) | √ | √ | x |  |
| Vue.filter | Register or get global filter [Details](https://cn.vuejs.org/v2/api/#Vue-filter) | √ | √ | x |  |
| Vue.component | Register or get a global component. Registration also automatically sets the name of the component with the given id [details](https://cn.vuejs.org/v2/api/#Vue-component) | √ | √ | √ |  |
| Vue.use | Install Vue.js plugin [Details](https://cn.vuejs.org/v2/api/#Vue-use) | √ | √ | √ |  |
| Vue.mixin | Register a mixin globally, affecting every Vue instance created after registration [Details](https://cn.vuejs.org/v2/api/#Vue-mixin) | √ | √ | √ |  |
| Vue.version | Provides the version number of Vue installed as a string [Details](https://cn.vuejs.org/v2/api/#Vue-version) | √ | √ | √ |  |
| Vue.compile | Compile a template string into a render function. Only available in the full version. [Details](https://cn.vuejs.org/v2/api/#Vue-compile) | √ | x | x | Vue used by uni-app is the version that only contains runtime |

##  Options

| Vue Options | Description | H5 | App | Mini Program | Description |
| --- | --- | --- | --- | --- | --- |
| data | The data object of the Vue instance [Details](https://cn.vuejs.org/v2/api/#data) | √ | √ | √ |  |
| props | props can be an array or an object to receive data from the parent component [Details](https://cn.vuejs.org/v2/api/#props) | √ | √ | √ |  |
| propsData | Pass props when creating an instance. The main function is to facilitate testing [Details](https://cn.vuejs.org/v2/api/#propsData) | √ | √ | √ |  |
| computed | Computed properties will be mixed into the Vue instance [Details](https://cn.vuejs.org/v2/api/#computed) | √ | √ | √ |  |
| methods | methods will be mixed into the Vue instance [Details](https://cn.vuejs.org/v2/api/#methods) | √ | √ | √ |  |
| watch | An object, the key is the expression to be observed, and the value is the corresponding callback function [Details](https://cn.vuejs.org/v2/api/#watch) | √ | √ | √ |  |
| el | Provide an existing DOM element on the page as the mount target of the Vue instance [Details](https://cn.vuejs.org/v2/api/#el) | √ | x | x |  |
| template | A string template is used as the identifier of a Vue instance [Details](https://cn.vuejs.org/v2/api/#template) | √ | x | x | Vue used by uni-app only contains runtime version |
| render | An alternative to string templates, the render function accepts a createElement method as the first argument to create the VNode. [Details](https://cn.vuejs.org/v2/api/#render) | √ | x | x |  |
| renderError | When the render function encounters an error, provide another rendering output, which only works in the developer environment [Details](https://cn.vuejs.org/v2/api/#renderError) | √ | x | x |  |
| directives | Hash table containing the directives available to the Vue instance [details](https://cn.vuejs.org/v2/api/#directives) | √ | √ | x |  |
| filters | Hash table containing available filters for Vue instances [details](https://cn.vuejs.org/v2/api/#filters) | √ | √ | √ |  |
| components | A hash table containing the components available for a Vue instance [details](https://cn.vuejs.org/v2/api/#components) | √ | √ | √ |  |
| parent | Specifies the parent instance of the created instance, and establishes a parent-child relationship between the two [Details](https://cn.vuejs.org/v2/api/#parent) | √ | √ | √ | Not recommended |
| mixins | option to receive an array of mixin objects [details](https://cn.vuejs.org/v2/api/#mixins) | √ | √ | √ |  |
| extends | Allows declarations to extend another component [Details](https://cn.vuejs.org/v2/api/#extends) | √ | √ | √ |  |
| provide/inject | Allows an ancestor component to inject a dependency into all its descendants, no matter how deep the component level is, and it will always take effect when its upstream and downstream relationships are established \[Details\](https://cn.vuejs.org /v2/api/#provide-inject) | √ | √ | √ |  |
| name | Allow component template to call itself recursively [Details](https://cn.vuejs.org/v2/api/#name) | √ | √ | √ |  |
| delimiters | Change plain text insertion delimiter [Details](https://cn.vuejs.org/v2/api/#delimiters) | √ | x | x |  |
| functional | Make a component stateless (no data) and instanceless (no this context) [details](https://cn.vuejs.org/v2/api/#functional) | √ | x | x |  |
| model | Allows a custom component to customize props and events when using v-model [Details](https://cn.vuejs.org/v2/api/#model) | √ | √ | x |  |
| inheritAttrs | The default value of the inheritAttrs attribute is true, which means that the root node of the component is allowed to inherit the attributes contained in $attrs [Details](https://cn.vuejs.org/v2/api/#inheritAttrs) | √ | √ | x |  |
| comments | When set to true, HTML comments in templates will be preserved and rendered [Details](https://cn.vuejs.org/v2/api/#comments) | √ | x | x | \- |

##  Lifecycle Hooks

| Lifecycle hooks | Description | H5 | App-side | Mini Programs | Description |
| --- | --- | --- | --- | --- | --- |
| beforeCreate | Called after instance initialization [Details](https://cn.vuejs.org/v2/api/#beforeCreate) | √ | √ | √ |  |
| created | Called immediately after the instance is created [Details](https://cn.vuejs.org/v2/api/#created) | √ | √ | √ |  |
| beforeMount | Called before the mount starts [Details](https://cn.vuejs.org/v2/api/#beforeMount) | √ | √ | √ |  |
| mounted | Call [Details](https://cn.vuejs.org/v2/api/#mounted) after mounting on the instance After mounting, you can use $nextTick [details](https://cn.vuejs.org/v2/api/#Vue-nextTick) | √ | √ | √ |  |
| beforeUpdate | Called when data is updated, before the virtual DOM is patched [Details](https://cn.vuejs.org/v2/api/#beforeUpdate) | √ | √ | √ |  |
| updated | This hook will be called after the virtual DOM is re-rendered and patched due to data changes [Details](https://cn.vuejs.org/v2/api/#updated) | √ | √ | √ |  |
| activated | Called when a component cached by keep-alive is activated [Details](https://cn.vuejs.org/v2/api/#activated) | √ | √ | x |  |
| deactivated | Called when a component cached by keep-alive is deactivated [Details](https://cn.vuejs.org/v2/api/#deactivated) | √ | √ | x |  |
| beforeDestroy | Called before the instance is destroyed. At this step, the instance is still fully available [Details](https://cn.vuejs.org/v2/api/#beforeDestroy) | √ | √ | √ |  |
| destroyed | Called after the Vue instance is destroyed. After the call, everything indicated by the Vue instance will be unbound, all event listeners will be removed, and all child instances will be destroyed \[details\](https://cn.vuejs.org/v2/api/ #destroyed) | √ | √ | √ |  |
| errorCaptured | Called when an error from a descendant component is captured [Details](https://cn.vuejs.org/v2/api/#errorCaptured) | √ | √ | √ | \- |

##  Instance attributes

| Vue instance properties | Description | H5 | App-side | Mini Program | Description |
| --- | --- | --- | --- | --- | --- |
| vm.$data | Data object observed by Vue instance [Details](https://cn.vuejs.org/v2/api/#vm-data) | √ | √ | √ |  |
| vm.$props | The props object received by the current component [Details](https://cn.vuejs.org/v2/api/#vm-props) | √ | √ | √ |  |
| vm.$el | The root DOM element used by the Vue instance [details](https://cn.vuejs.org/v2/api/#vm-el) | √ | x | x |  |
| vm.$options | Initialization options for the current Vue instance [details](https://cn.vuejs.org/v2/api/#vm-options) | √ | √ | √ |  |
| vm.$parent | Parent instance, if the current instance exists [Details](https://cn.vuejs.org/v2/api/#vm-parent) | √ | √ | √ | H5 `view` , `text` and other built-in tags are implemented in Vue components, `$parent` will get these to the built-in components, the problem is that `this.$parent` is inconsistent with other platforms, the solution is to use `this.$parent. $parent` Get or customize the component root node from `view` to `div` |
| vm.$root | The root Vue instance of the current component tree [Details](https://cn.vuejs.org/v2/api/#vm-root) | √ | √ | √ |  |
| vm.$children | The direct child component of the current instance [details](https://cn.vuejs.org/v2/api/#vm-children) | √ | √ | √ | H5 side `view`, `text` and other built-in tags are implemented as Vue components, `$children` will get these built-in components, the problem is that `this.$children` is inconsistent with other platforms, the solution is to use `this.$children.$children` Get or customize the component root node from `view` to `div` |
| vm.$slots | Used to access content distributed by slots [details](https://cn.vuejs.org/v2/api/#vm-slots) | √ | x | √ |  |
| vm.$scopedSlots | Used to access scoped slots [details](https://cn.vuejs.org/v2/api/#vm-scopedSlots) | √ | √ | √ |  |
| vm.$refs | An object that holds all DOM elements and component instances registered with the ref attribute [details](https://cn.vuejs.org/v2/api/#vm-refs) | √ | √ | √ | Non-H5 terminal can only be used to obtain custom components, not to obtain built-in component instances (such as: view, text) |
| vm.$isServer | Whether the current Vue instance is running on the server [Details](https://cn.vuejs.org/v2/api/#vm-isServer) | √ | √ | x | App always returns false |
| vm.$attrs | Contains attribute bindings that are not recognized (and obtained) as props in the parent scope [details](https://cn.vuejs.org/v2/api/#vm-attrs) | √ | √ | x |  |
| vm.$listeners | Contains the v-on event listeners in the parent scope (without the .native decorator) [details](https://cn.vuejs.org/v2/api/#vm-listeners) | √ | √ | x | \- |

##  Instance method

| Instance Method | Description | H5 | App | Mini Program | Description |
| --- | --- | --- | --- | --- | --- |
| vm.$watch() | Watch the changes of an expression or a function calculation result on a Vue instance [Details](https://cn.vuejs.org/v2/api/#vm-watch) | √ | √ | √ |  |
| vm.$set() | This is an alias for the global Vue.set [Details](https://cn.vuejs.org/v2/api/#vm-set) | √ | √ | √ |  |
| vm.$delete() | This is an alias for global Vue.delete [Details](https://cn.vuejs.org/v2/api/#vm-delete) | √ | √ | √ |  |
| vm.$on() | Listen to custom events on the current instance [Details](https://cn.vuejs.org/v2/api/#vm-on) | √ | √ | √ |  |
| vm.$once() | Listen to a custom event, but only trigger once [Details](https://cn.vuejs.org/v2/api/#vm-once) | √ | √ | √ |  |
| vm.$off() | Remove custom event listener [Details](https://cn.vuejs.org/v2/api/#vm-off) | √ | √ | √ |  |
| vm.$emit() | Trigger an event on the current instance [Details](https://cn.vuejs.org/v2/api/#vm-emit) | √ | √ | √ |  |
| vm.$mount() | Manually mount an unmounted instance [Details](https://cn.vuejs.org/v2/api/#vm-mount) | √ | x | x |  |
| vm.$forceUpdate() | Force Vue instance to re-render [details](https://cn.vuejs.org/v2/api/#vm-forceUpdate) | √ | √ | √ |  |
| vm.$nextTick() | Delay the callback until after the next DOM update loop [Details](https://cn.vuejs.org/v2/api/#vm-nextTick) | √ | √ | √ |  |
| vm.$destroy() | Completely destroy an instance [Details](https://cn.vuejs.org/v2/api/#vm-destroy) | √ | √ | √ | \- |

##  Template directive

| Vue Directive | Description | H5 | App | Mini Program | Description |
| --- | --- | --- | --- | --- | --- |
| v-text | Update element's textContent [details](https://cn.vuejs.org/v2/api/#v-text) | √ | √ | √ |  |
| v-html | Update the innerHTML of the element [Details](https://cn.vuejs.org/v2/api/#v-html) | √ | √ | x | WeChat applet will be converted to `rich-text` |
| v-show | Switch the display CSS property of an element according to the true or false value of the expression [Details](https://cn.vuejs.org/v2/api/#v-show) | √ | √ | √ |  |
| v-if | Conditionally render elements based on the truthiness of the value of the expression [details](https://cn.vuejs.org/v2/api/#v-if) | √ | √ | √ |  |
| v-else | Add "else block" to v-if or v-else-if [Details](https://cn.vuejs.org/v2/api/#v-else) | √ | √ | √ |  |
| v-else-if | means the "else if block" of v-if. Can be chained [Details](https://cn.vuejs.org/v2/api/#v-else-if) | √ | √ | √ |  |
| v-for | Render elements or template blocks multiple times based on source data [Details](https://cn.vuejs.org/v2/api/#v-for) | √ | √ | √ |  |
| v-on | Binding event listeners [Details](https://cn.vuejs.org/v2/api/#v-on) | √ | √ | √ |  |
| v-bind | Dynamically bind one or more attributes, or a component prop to an expression [details](https://cn.vuejs.org/v2/api/#v-bind) | √ | √ | √ |  |
| v-model | Create two-way binding on form controls or components [Details](https://cn.vuejs.org/v2/api/#v-model) | √ | √ | √ |  |
| v-pre | Skip the compilation process of this element and its children [Details](https://cn.vuejs.org/v2/api/#v-pre) | √ | √ | x |  |
| v-cloak | This directive remains on the element until the associated instance finishes compiling [details](https://cn.vuejs.org/v2/api/#v-cloak) | √ | x | x |  |
| v-once | Render elements and components only once [Details](https://cn.vuejs.org/v2/api/#v-once) | √ | √ | x | \- |

##  Special attributes

| Special Properties | Description | H5 | App | Mini Program | Description |
| --- | --- | --- | --- | --- | --- |
| key | Mainly used in Vue's virtual DOM algorithm to identify VNodes when comparing old and new nodes [Details](https://cn.vuejs.org/v2/api/#key) | √ | √ | √ |  |
| ref | ref is used to register reference information for elements or subcomponents [Details](https://cn.vuejs.org/v2/api/#ref) | √ | √ | √ | Non-H5 platforms can only get vue The component instance cannot get the built-in component instance |
| Yes | Used for dynamic components and works based on the constraints of templates in the DOM [Details](https://cn.vuejs.org/v2/api/#is) | √ | √ | x | \- |

##  Built-in components

| Built-in Components | Description | H5 | App | Mini Programs | Description |
| --- | --- | --- | --- | --- | --- |
| component | Renders a "meta-component" as a dynamic component. Determine which component is rendered according to the value of is [Details](https://cn.vuejs.org/v2/api/#component) | √ | √ | x |  |
| transition | Transition effect as a single element/component [Details](https://cn.vuejs.org/v2/api/#transition) | √ | x | x |  |
| transition-group | Transition effects as multiple elements/components [Details](https://cn.vuejs.org/v2/api/#transition-group) | √ | x | x |  |
| keep-alive | When wrapping dynamic components, inactive component instances are cached instead of destroying them [Details](https://cn.vuejs.org/v2/api/#keep-alive) | √ | x | x |  |
| slot | As a content distribution slot in a component template [Details](https://cn.vuejs.org/v2/api/#slot) | √ | √ | √ | \- |
| template | is not a component, it is just a wrapper element, it will not do any rendering in the page, it only accepts control properties \[details\](https://uniapp.dcloud.io/component/vue-component?id= template) | √ | √ | √ | \- |

##  Global variable

The way to implement global variables needs to follow the development specifications of Vue single file mode.

##  Other configuration

When Vue components are compiled to the applet platform, they will be compiled into components of the corresponding platform. Some applet platforms support the options option (for specific options, please refer to the custom components section of the corresponding applet platform documentation). Generally, the default can be used, if there are special requirements The options property can be added to the Vue component.

```
export default {
  props: ['data'],
  data(){ return { } },
  options: {
    // options option in WeChat applet
    multipleSlots: true, //  在组件定义时的选项中启动多slot支持，默认启用
    styleIsolation: "isolated",  //  启动样式隔离。当使用页面自定义组件，希望父组件影响子组件样式时可能需要配置。具体配置选项参见：微信小程序自定义组件的样式
    addGlobalClass: true, //  表示页面样式将影响到自定义组件，但自定义组件中指定的样式不会影响页面。这个选项等价于设置 styleIsolation: apply-shared
    virtualHost: true,  //  将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等，而是希望自定义组件内部的第一层节点能够响应 flex 布局或者样式由自定义组件本身完全决定
  }
}
```

##  Common problem

###  1. How to get the data passed on the previous page

Obtained in onLoad, the parameter of onLoad is the data passed by other pages to open the current page.

###  2. How to set global data and global methods

uni-app has built-in [Vuex](https://uniapp.dcloud.io/vue-vuex) . For use in the app, please refer to `hello-uniapp` `store/index.js`.

```
	//store.js
	import Vue from 'vue'
	import Vuex from 'vuex'
	Vue.use(Vuex)
	const store = new Vuex.Store({
		state: {...},
		mutations: {...},
		actions: {...}
	})

	export default store

	//main.js
	...
	import store from './store'
	Vue.prototype.$store = store
	const app = new Vue({
		store,...
	})
	...

	//test.vue When using:
	import {mapState,mapMutations} from 'vuex'
```

###  3. How to catch onError of app

Since onError is not a complete life cycle, only a method of catching errors is provided, and a callback function named onError can be added to the root component of the app. as follows:

```
	export default {
		// Only apps have an onLaunch lifecycle
		onLaunch () {
		   // ...
		},

		// capture app error
		onError (err) {
		   console.log(err)
		}
	}
```

###  4. Component property settings do not take effect

When some properties are repeatedly set to the same value, they are not synchronized to the View layer. For example, every time you set the `scroll-top` property of a `scroll-view` component to 0, it only gets back to the top the first time. This is due to the props unidirectional data flow feature. When the actual value of scroll top inside the component changes, the binding properties do not change with it.

There are two solutions (take the `scroll-view` component as an example):

1.  Monitor the scroll event, record the value of the internal change of the component, and set the current value of the record before setting the new value

```
	<scroll-view scroll-y="true" :scroll-top="scrollTop" @scroll="scroll"></scroll-view>
```

```
export default {
    data() {
        return {
            scrollTop: 0,
            old: {
                scrollTop: 0
            }
        }
    },
    methods: {
        scroll: function(e) {
            this.old.scrollTop = e.detail.scrollTop
        },
        goTop: function(e) {
            this.scrollTop = this.old.scrollTop
            this.$nextTick(function() {
                this.scrollTop = 0
            });
        }
    }
}

```

2.  Monitor the scroll event, get the value of the internal change of the component, and update its binding value in real time

```
	<scroll-view scroll-y="true" :scroll-top="scrollTop" @scroll="scroll"></scroll-view>
```

```
	export default {
		data() {
			return {
				scrollTop: 0,
			}
		},
		methods: {
			scroll: function(e) {
				// If you use this method, please add debounce by yourself
				this.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = 0
			}
		}
	}
```

The second solution may cause jitter in some components, and the **first solution is recommended** .
