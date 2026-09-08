---
title: "Application Config"
source_url: https://miniapp.neuxnet.com/tutorial/vue3-api.html
---
##  Application Config

Every Vue application exposes a config object that contains the configuration settings for that application:

```
const app = Vue.createApp({})

app.config = {...}
```

| App Configuration | Description | H5 | Mini App |
| --- | --- | --- | --- |
| errorHandler | Specifies a handler function to handle uncaught errors thrown during the execution of the component's render method and by the listener. [Details](https://v3.cn.vuejs.org/api/application-config.html#errorhandler) | √ | √ | √ | √ |
| warnHandler | Specify a custom handler for `Vue`'s runtime warnings. [Details](https://v3.cn.vuejs.org/api/application-config.html#warnhandler) | √ | √ | √ | √ |
| globalProperties | Adds a global `property` that can be accessed in any component instance within the application. [Details](https://v3.cn.vuejs.org/api/application-config.html#globalproperties) | √ | √ | √ | √ |
| isCustomElement | Specifies a method to identify custom elements defined outside of `Vue`. [Details](https://v3.cn.vuejs.org/api/application-config.html#iscustomelement) | √ | √ | √ | √ |
| optionMergeStrategies | Define merge strategies for custom options. [Details](https://v3.cn.vuejs.org/api/application-config.html#optionmergestrategies) | √ | √ | √ | √ |
| performance | Set to `true` to enable performance tracking of component initialization, compilation, rendering and updates in the `performance/timeline` panel of the browser dev tools. [Details](https://v3.cn.vuejs.org/api/application-config.html#performance) | √ | x | x | Only supported in Web environment |

##  Application API

In Vue 3, APIs that globally mutate Vue's behavior are now moved to application instances created by the new `createApp` method. In addition, their effects are now scoped to that specific application's instance:

```
import { createApp } from 'vue'

const app = createApp({})
```

Calling `createApp` returns an application instance. This instance provides an application context. The entire component tree mounted by the application instance share the same context. In addition, since the `createApp` method returns the application instance itself, you can chain other methods after it which can be found in the following sections.

| Application API | Description | H5 | Mini App |
| --- | --- | --- | --- |
| component | Register or retrieve a global component. [Details](https://v3.cn.vuejs.org/api/application-api.html#component) | √ | √ | √ |
| config | An object containing the application configuration. [Details](https://v3.cn.vuejs.org/api/application-api.html#config) | √ | √ | √ |
| directive | Register or retrieve global directives. [Details](https://v3.cn.vuejs.org/api/application-api.html#directive) | √ | √ | x |
| mixin | Apply mixins across the application scope. [Details](https://v3.cn.vuejs.org/api/application-api.html#mixin) | √ | √ | √ |
| provide | Sets a value that can be injected into all components in the application scope. [Details](https://v3.cn.vuejs.org/api/application-api.html#provide) | √ | √ | √ |
| use | Install the `Vue.js` plugin. [Details](https://v3.cn.vuejs.org/api/application-api.html#use) | √ | √ | √ |

##  Global API

| Global API | Description | H5 | Mini App |
| --- | --- | --- | --- |
| createApp | Returns an application instance that provides the application context. The entire component tree mounted by an application instance shares the same context. [Details](https://v3.cn.vuejs.org/api/global-api.html#createapp) | √ | √ | √ |
| h | Returns a "virtual node", often abbreviated `VNode`: a plain object that contains information describing to `Vue` what kind of node it should render on the page, including descriptions of all child nodes. [Details](https://v3.cn.vuejs.org/api/global-api.html#h) | √ | x | x |
| defineComponent | By implementation, `defineComponent` only returns the object passed to it. However, in terms of type, the returned value has a synthetic type constructor for manual rendering functions, `TSX` and `IDE` tool support. [Details](https://v3.cn.vuejs.org/api/global-api.html#definecomponent) | √ | x | x |
| defineAsyncComponent | Creates an asynchronous component that is loaded only when needed. [Details](https://v3.cn.vuejs.org/api/global-api.html#defineasynccomponent) | √ | x | x |
| resolveComponent | Allows `component` to be resolved by name if available in the current application instance. Returns a `Component`. [Details](https://v3.cn.vuejs.org/api/global-api.html#resolvecomponent) | √ | x | x |
| resolveDynamicComponent | allows to resolve a `component` using the same mechanism as `component :is=""`. [Details](https://v3.cn.vuejs.org/api/global-api.html#resolvedynamiccomponent) | √ | x | x |
| resolveDirective | Allows a `directive` to be resolved by its name if available in the current application instance. Returns a `Directive`. [Details](https://v3.cn.vuejs.org/api/global-api.html#resolvedirective) | √ | x | x |
| withDirectives | allows directives to be applied to a `VNode`. Returns a `VNode` containing application instructions. [Details](https://v3.cn.vuejs.org/api/global-api.html#withdirectives) | √ | x | x |
| createRenderer | createRenderer function accepts two generic parameters: `HostNode` and `HostElement`, corresponding to the `Node` and `Element` types in the host environment. [Details](https://v3.cn.vuejs.org/api/global-api.html#createrenderer) | √ | x | x |
| nextTick | Defer callback execution until after the next `DOM` update cycle. Use it immediately after changing some data to wait for `DOM` to update. [Details](https://v3.cn.vuejs.org/api/global-api.html#nexttick) | √ | x | x |

##  Options/Data

| Data | Description | H5 | Mini App |
| --- | --- | --- | --- |
| data | A function that returns the `data` object of the component instance. [Details](https://v3.cn.vuejs.org/api/options-data.html) | √ | √ | √ |
| props | `props` can be an array or an object to receive data from the parent component. [Details](https://v3.cn.vuejs.org/api/options-data.html#props) | √ | √ | √ |
| computed | The computed property will be mixed into the component instance. The `this` context of all `getters` and `setter`s is automatically bound to the component instance. [Details](https://v3.cn.vuejs.org/api/options-data.html#computed) | √ | √ | √ |
| methods | methods will be mixed into the component instance. These methods can be accessed directly through the `VM` instance, or used in instruction expressions. `this` in a method is automatically bound to the component instance. [Details](https://v3.cn.vuejs.org/api/options-data.html#methods) | √ | √ | √ |
| watch | An object, the key is the expression to watch, and the value is the corresponding callback function. The value can also be a method name, or an object containing options. [Details](https://v3.cn.vuejs.org/api/options-data.html#watch) | √ | √ | √ |
| emits | emits can be an array or object to fire custom events from the component, `emits` can be a simple array, or an object instead, allowing configuration and event validation. [Details](https://v3.cn.vuejs.org/api/options-data.html#emits) | √ | √ | √ |

##  Options/DOM

| DOM | Description | H5 | Mini App |
| --- | --- | --- | --- |
| template | A string template to use as the identifier for the `component` instance. [Details](https://v3.cn.vuejs.org/api/options-dom.html#template) | √ | x | x | The vue used by Mini App is the version that only contains runtime |
| render | An alternative to string templates, allowing you to take full advantage of the programming capabilities of `JavaScript`. [Details](https://v3.cn.vuejs.org/api/options-dom.html#render) | √ | x | x | \- |

##  Options/Lifecycle hooks

| Lifecycle hooks | Description | H5 | Mini App |
| --- | --- | --- | --- |
| beforeCreate | Called after instance initialization, before data observer and event/watcher event configuration. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforecreate) | √ | √ | √ |
| created | Called immediately after the instance is created. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#created) | √ | √ | √ |
| beforeMount | Called before the mount starts: the associated `render` function is called for the first time. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforemount) | √ | √ | √ |
| mounted | Called after the instance is mounted, when `Vue.createApp({}).mount()` is replaced by the newly created `vm.$el`. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#mounted) | √ | √ | √ |
| beforeUpdate | Called when data is updated, before the virtual `DOM` is patched. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforeupdate) | √ | √ | √ |
| updated | This hook is called after the virtual `DOM` is re-rendered and patched due to data changes. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#updated) | √ | √ | √ |
| activated | Called when a component cached by `keep-alive` is activated. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#activated) | √ | √ | x |
| deactivated | Called when a component cached by `keep-alive` is deactivated. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#deactivated) | √ | √ | x |
| beforeUnmount | Called before the component instance is unmounted. At this stage, the instance is still completely normal. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforeunmount) | √ | √ | √ |
| unmounted | Called after the component instance is unmounted. When this hook is called, all directives of the component instance are unbound, all event listeners are removed, and all child component instances are unloaded. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#unmounted) | √ | √ | √ |
| errorCaptured | Called when an error from a descendant component is captured. This hook receives three parameters: the error object, the component instance where the error occurred, and a string containing information about the source of the error. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#errorcaptured) | √ | √ | √ |
| renderTracked | Called when the tracked virtual `DOM` is re-rendered. The hook receives `debugger event` as a parameter. This event tells you which action tracked the component and the target object and key for that action. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#rendertracked) | √ | √ | √ |
| renderTriggered | When the virtual `DOM` is re-rendered to `triggered.Similarly` to `renderTracked`, receive a `debugger event` as a parameter. This event tells you what action triggered the re-render, and the target object and key for that action. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#rendertriggered) | √ | √ | √ |

##  Options/Assets

| Resources | Description | H5 | Mini App |
| --- | --- | --- | --- |
| directives | A hash table containing the directives available to the component instance. [Details](https://v3.cn.vuejs.org/api/options-assets.html#directives) | √ | √ | x |
| components | Contains a hash table of components available for a component instance. [Details](https://v3.cn.vuejs.org/api/options-assets.html#components) | √ | √ | √ |

##  Options/Composition

| Combination | Description | H5 | Mini App |
| --- | --- | --- | --- |
| mixins | Receives an array of mixin objects. These mixins can contain instance options just like normal instance objects, and these options will be merged into the final option, using specific option merge logic. [Details](https://v3.cn.vuejs.org/api/options-composition.html#mixins) | √ | √ | √ |
| extends | allows a declaration to extend another component (can be a simple options object or a constructor). This is mainly to facilitate extending single-file components. [Details](https://v3.cn.vuejs.org/api/options-composition.html#extends) | √ | √ | √ |
| provide / inject | The pair of options needs to be used together to allow an ancestor component to inject a dependency into all its descendants, no matter how deep the component hierarchy is, and it will always take effect as long as the upstream and downstream relationships are established. [Details](https://v3.cn.vuejs.org/api/options-composition.html#provide-inject) | √ | √ | √ |
| setup | The `setup` function is a new component option. It acts as an entry point for using the composition `API` inside the component. [Details](https://v3.cn.vuejs.org/api/options-composition.html#setup) | √ | √ | √ |

##  Options/Misc

| Miscellaneous | Description | H5 | Mini App |
| --- | --- | --- | --- |
| name | allows the component template to call itself recursively. Note that when a component is registered globally with `Vue.createApp({}).component({})`, the global `ID` is automatically used as the component's `name`. [Details](https://v3.cn.vuejs.org/api/options-misc.html#name) | √ | √ | √ |
| delimiters | Sets the delimiters used for text insertion within templates. [Details](https://v3.cn.vuejs.org/api/options-misc.html#delimiters) | √ | x | x |
| inheritAttrs | By default parent-scoped `attribute` bindings (`attribute bindings`) that are not considered `props` will "fall back" and be applied to the root element of child components as normal `HTML attributes` superior. By setting `inheritAttrs` to `false` when writing components that wrap a target element or another component, these default behaviors will be removed. [Details](https://v3.cn.vuejs.org/api/options-misc.html#inheritattrs) | √ | √ | x |

##  Instance Properties

| Instance property | Description | H5 | Mini App |
| --- | --- | --- | --- |
| $data | The data object observed by the component instance. A component instance proxies access to its `data` object `property`. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#data) | √ | √ | √ |  |
| $props | The `props` object received by the current component. A component instance proxies access to its `props` object `property`. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#props) | √ | √ | √ |  |
| $el | The root `DOM` element used by the component instance. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#el) | √ | x | x |  |
| $options | Init options for the current component instance. Useful when you need to include custom `property` in options. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#options) | √ | √ | √ |  |
| $parent | Parent instance, if the current instance has one. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#parent) | √ | √ | √ | The built-in tags such as `view` and `text` on the H5 side are `Vue` Component implementation, `$parent` will get these to built-in components, the problem is that `this.$parent` is inconsistent with other platforms, the solution is to use `this.$parent.$parent` to get or customize the root node of the component Changed from `view` to `div` |
| $root | The root component instance of the current component tree. If the current instance has no parent, this instance will be itself. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#root) | √ | √ | √ |  |
| $slots | Used to access content distributed by slots. Each named slot has its corresponding `property` (eg: the contents of `v-slot:foo` will be found in `this.$slots.foo`). [Details](https://v3.cn.vuejs.org/api/instance-properties.html#slots) | √ | x | √ |  |
| $refs | An object holding all `DOM` element and component instances that have the `ref attribute` registered. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#refs) | √ | √ | √ | Non-H5 terminals can only be used to obtain custom components, not built-in Component instance (eg: `view`, `text`) |
| $attrs | Contains `props` or custom events that are not part of the parent scope. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#attrs) | √ | √ | x | \- |

##  Instance Methods

| Instance method | Description | H5 | Mini App |
| --- | --- | --- | --- |
| $watch | Listen to changes in reactive `property` or function evaluation results on component instances. [Details](https://v3.cn.vuejs.org/api/instance-methods.html#watch) | √ | √ | √ |
| $emit | Trigger an event on the current instance. Additional parameters are passed to the listener callback. [Details](https://v3.cn.vuejs.org/api/instance-methods.html#emit) | √ | √ | √ |
| $forceUpdate | Forces the component instance to re-render. Note that it only affects the instance itself and subcomponents that insert the contents of the slot, not all subcomponents. [Details](https://v3.cn.vuejs.org/api/instance-methods.html#forceupdate) | √ | √ | √ |
| $nextTick | Delay callback execution until after the next `DOM` update loop. Use it immediately after modifying the data, then wait for the `DOM` to update. [Details](https://v3.cn.vuejs.org/api/instance-methods.html#nexttick) | √ | √ | √ |

##  Directives

| Vue Directive | Description | H5 | Mini App |
| --- | --- | --- | --- |
| v-text | Update the element's `textContent`. [Details](https://v3.cn.vuejs.org/api/directives.html#v-text) | √ | √ | √ |  |
| v-html | Update the `innerHTML` of the element. [Details](https://v3.cn.vuejs.org/api/directives.html#v-html) | √ | √ | x | WeChat applet will be converted into `rich-text` |
| v-show | Toggles the element's `display CSS property` based on the true or false value of the expression. [Details](https://v3.cn.vuejs.org/api/directives.html#v-show) | √ | √ | √ |  |
| v-if | Conditionally render elements based on the true or false value of an expression. [Details](https://v3.cn.vuejs.org/api/directives.html#v-if) | √ | √ | √ |  |
| v-else | Adds `"else block"` for `v-if` or `v-else-if`. [Details](https://v3.cn.vuejs.org/api/directives.html#v-else) | √ | √ | √ |  |
| v-else-if | means the `“else if block”` of `v-if`. Can be chained. [Details](https://v3.cn.vuejs.org/api/directives.html#v-else-if) | √ | √ | √ |  |
| v-for | Renders an element or template block multiple times based on source data. [Details](https://v3.cn.vuejs.org/api/directives.html#v-for) | √ | √ | √ |  |
| v-on | Bind event listener. [Details](https://v3.cn.vuejs.org/api/directives.html#v-on) | √ | √ | √ |  |
| v-bind | Dynamically bind one or more `attribute`s, or a component `prop` to an expression. [Details](https://v3.cn.vuejs.org/api/directives.html#v-bind) | √ | √ | √ |  |
| v-model | Creates two-way bindings on form controls or components. [Details](https://v3.cn.vuejs.org/api/directives.html#v-model) | √ | √ | √ |  |
| v-slot | Provides a named slot or a slot that needs to receive `prop`. [Details](https://v3.cn.vuejs.org/api/directives.html#v-slot) | √ | √ | √ |  |
| v-pre | Skips compilation of this element and its children. [Details](https://v3.cn.vuejs.org/api/directives.html#v-pre) | √ | √ | x |  |
| v-cloak | This directive remains on the element until the associated component instance finishes compiling. [Details](https://v3.cn.vuejs.org/api/directives.html#v-cloak) | √ | x | x |  |
| v-once | Render elements and components only once. [Details](https://v3.cn.vuejs.org/api/directives.html#v-once) | √ | √ | x |  |
| v-Yes | Templates are subject to native `HTML` parsing rules when used within `DOM` templates. [Details](https://v3.cn.vuejs.org/api/directives.html#v-is) | √ | x | x | \- |

##  Special Attributes

| Special Properties | Description | H5 | Mini App |
| --- | --- | --- | --- |
| key | The special `attribute` of `key` is mainly used in `Vue`'s virtual `DOM` algorithm to identify `VNodes` when comparing old and new `nodes`. [Details](https://v3.cn.vuejs.org/api/special-attributes.html#key) | √ | √ | √ |  |
| ref | ref is used to register references to elements or subcomponents. [Details](https://v3.cn.vuejs.org/api/special-attributes.html#ref) | √ | √ | √ | Non-H5 platform can only get `vue` component instance but cannot get built-in component instance |
| Yes | Use [Dynamic Components](https://v3.cn.vuejs.org/guide/component-dynamic-async.html) . [Details](https://v3.cn.vuejs.org/api/special-attributes.html#is) | √ | √ | x | \- |

##  Built-In Components

| Built-in components | Description | H5 | Mini App |
| --- | --- | --- | --- |
| component | Renders a "meta-component" as a dynamic component. Depending on the value of `is`, which component is rendered. [Details](https://v3.cn.vuejs.org/api/built-in-components.html#component) | √ | √ | x |  |
| transition | Transition effect as a single element/component. [Details](https://v3.cn.vuejs.org/api/built-in-components.html#transition) | √ | x | x |  |
| transition-group | As a transition effect for multiple elements/components. [Details](https://v3.cn.vuejs.org/api/built-in-components.html#transition-group) | √ | x | x |  |
| keep-alive | When wrapping dynamic components, inactive component instances are cached instead of destroying them, mainly to preserve component state or avoid re-rendering. [Details](https://v3.cn.vuejs.org/api/built-in-components.html#keep-alive) | √ | x | x |  |
| slot | Distribute slots as content in component templates. The `slot` element itself will be replaced. [Details](https://v3.cn.vuejs.org/api/built-in-components.html#slot) | √ | √ | √ |  |
| teleport | Move part of the template to a different location in the `DOM` than the `Vue app`. [Details](https://v3.cn.vuejs.org/api/built-in-components.html#teleport) | √ | x | x | \- |

##  Reactivity API

###  Basic Reactivity APIs

| Responsive Basic API | Description | H5 | Mini App |
| --- | --- | --- | --- |
| reactive | Returns a reactive copy of the object. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive) | √ | √ | √ |
| readonly | Takes an object (reactive or plain) or `ref` and returns a read-only proxy for the original proxy. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#readonly) | √ | √ | √ |
| isProxy | Checks whether the object is a `reactive` or `readonly` created proxy. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#isproxy) | √ | √ | √ |
| isReactive | Checks if the object is a reactive `proxy` created by `reactive`. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#isreactive) | √ | √ | √ |
| isReadonly | Checks if the object is a read-only proxy created by `readonly`. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#isreadonly) | √ | √ | √ |
| toRaw | Returns the raw object of the `reactive` or `readonly` proxy. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#toraw) | √ | √ | √ |
| markRaw | Marks an object so that it will never be converted to a proxy. Return the object itself. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#markraw) | √ | √ | √ |
| shallowReactive | Creates a reactive proxy that tracks the reactivity of its own `property`, but does not perform deep reactive transformations of nested objects (exposing primitive values). [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#shallowreactive) | √ | √ | √ |
| shallowReadonly | Creates a proxy that makes its own `property` read-only, but does not perform deep read-only conversions of nested objects (exposing primitive values). [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#shallowreadonly) | √ | √ | √ |

###  Refs

| Refs | Description | H5 | Mini App |
| --- | --- | --- | --- |
| ref | Takes an internal value and returns a reactive and mutable `ref` object. `ref` objects have a single property `.value` that points to the internal value. [Details](https://v3.cn.vuejs.org/api/refs-api.html#ref) | √ | √ | √ |
| unref | Returns the internal value if the argument is `ref`, otherwise returns the argument itself. This is `val = isRef(val) ? val.value : val`. [Details](https://v3.cn.vuejs.org/api/refs-api.html#unref) | √ | √ | √ |
| toRef | can be used to create a `ref` for a `property` property on the source reactive object. The `ref` can then be passed out, maintaining a reactive connection to its source `property`. [Details](https://v3.cn.vuejs.org/api/refs-api.html#toref) | √ | √ | √ |
| toRefs | Converts a reactive object to a normal object, where each `property` of the resulting object is a `ref` pointing to the corresponding `property` of the original object. [Details](https://v3.cn.vuejs.org/api/refs-api.html#torefs) | √ | √ | √ |
| isRef | Check if the value is a `ref` object [details](https://v3.cn.vuejs.org/api/refs-api.html#isref) | √ | √ | √ |
| customRef | Create a custom `ref` with explicit control over its dependency tracking and update triggering. [Details](https://v3.cn.vuejs.org/api/refs-api.html#customref) | √ | √ | √ |
| shallowRef | Creates a `ref` that tracks its own `.value` changes, but does not make its value responsive. [Details](https://v3.cn.vuejs.org/api/refs-api.html#shallowref) | √ | √ | √ |
| triggerRef | Manually execute any effects associated with `shallowRef`. [Details](https://v3.cn.vuejs.org/api/refs-api.html#triggerref) | √ | √ | √ |

###  Computed and watch

| Computed and watch | Description | H5 | Mini App |
| --- | --- | --- | --- |
| computed | Use the `getter` function and return an immutable reactive `ref` object for the value returned from the `getter`. [Details](https://v3.cn.vuejs.org/api/computed-watch-api.html#computed) | √ | √ | √ |
| watchEffect | Runs a function as soon as its dependencies are tracked reactively, and re-runs it when dependencies are changed. [Details](https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect) | √ | √ | √ |
| watch | The `watch` API is exactly equivalent to the option API `this.$watch` (and the corresponding `watch` option). `watch` needs to listen to a specific `data` source and has side effects in a separate callback function. [Details](https://v3.cn.vuejs.org/api/computed-watch-api.html#watch) | √ | √ | √ |

##  Composition API

| Combined API | Description | H5 | Mini App |
| --- | --- | --- | --- |
| setup | A component option that is executed before the component is created, once the `props` are resolved, and serves as the entry point to the composite `API`. [Details](https://v3.cn.vuejs.org/api/composition-api.html#setup) | √ | √ | √ |
| Lifecycle Hooks | Lifecycle hooks can be registered using the directly imported `onX` function. [Details](https://v3.cn.vuejs.org/api/composition-api.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90) | √ | √ | √ |
| Provide / Inject | provide and inject enable dependency injection. Both can only be called during `setup()` using the currently active instance. [Details](https://v3.cn.vuejs.org/api/composition-api.html#provide-inject) | √ | √ | √ |
| getCurrentInstance | Allows access to internal component instances useful for advanced use or library creators. [Details](https://v3.cn.vuejs.org/api/composition-api.html#getcurrentinstance) | √ | √ | √ |

##  Global variable

The way to implement global variables needs to follow the development specifications of Vue single file mode.

```
export default {
	props: ['data'],
	data(){ return { } },
	options: {
		// options option in WeChat applet
	}
}
```

##  Common problem

###  1. How to get the data passed on the previous page

Obtained in onLoad, the parameter of onLoad is the data passed by other pages to open the current page.

###  2. How to set global data and global methods

`Mini App` has built-in \[Vuex\] for use in `app`, please refer to `hello-uniapp` `store/index.js` .

```
	//store.js
	import {createStore} from 'vuex'
	const store = createStore({
		state: {...},
		mutations: {...},
		actions: {...}
	})
	export default store

	//main.js
	import App from './App'
	import {createSSRApp} from 'vue'
	import store from './store'
	export function createApp() {
		const app = createSSRApp(App)
		app.use(store)
		return {
			app
		}
	}

	//test.vue When using:
	import {mapState,mapMutations} from 'vuex'
```

###  3. How to catch onError of app

Since `onError` is not a complete life cycle, only a method of catching errors is provided, and a callback function named onError can be added to the root component of the app. as follows:

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

When some properties are repeatedly set to the same value, they are not synchronized to the View layer. For example, every time you set the scroll-top property of a `scroll-view` component to 0, it only gets back to the top the first time. This is due to the props unidirectional data flow feature. When the actual value of scroll top inside the component changes, the binding properties do not change with it.

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
