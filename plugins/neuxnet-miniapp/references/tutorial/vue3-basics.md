---
title: "Vue3 basics — introduction"
source_url: https://miniapp.neuxnet.com/tutorial/vue3-basics.html
---
##  Introduction

**What is Vue.js?**

Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.

The core of `Vue.js` is a system that allows the use of concise template syntax to declaratively render data into `DOM`. **Focus on the view layer only, quick start**. Everything is responsive.

**Thanks**

Most of the content of this article comes from [vue3 document official website](https://vuejs.org/guide/introduction.html) , but some adjustments have been made in combination with `Mini App` to make it easier for developers to get started quickly. Thanks to the Vue team!

**Advantages of vue3:**

-   Responsive system enhancements
-   Virtual DOM rewriting
-   Faster, performance 1.2~2 times faster than Vue2 (diff method optimization, static boost, time listener cache
-   Smaller, compiled on demand, smaller than Vue2
-   Combined API, strengthen the consistency of API design for logical modularity and reuse
-   Enhance TypeScript support
-   Expose the custom rendering API
-   Improve its own maintainability

##  Vue development advantages over traditional js

In traditional development, when the native JavaScript DOM manipulation function is used to frequently manipulate the DOM, the browser must constantly render the new DOM tree, causing the page to look very stuck.

Vue is a single-page application, which makes the page partially refresh, without having to request all the data and DOM every time you jump to the page, which greatly speeds up the access speed and improves the user experience.

**Advantages of Vue:**

-   Lightweight Progressive Framework
-   Separation of view, data and structure
-   Responsive two-way data binding
-   Componentization
-   Virtual DOM
-   Runs fast and easy to get started
-   Easy to integrate with third-party libraries or existing projects

###  File type changes

-   It used to be .html files, development was also html, and running was also html.
-   Now it is a .vue file, and development is a vue. After compilation, the runtime has become a js file.
-   Modern front-end development rarely uses HTML directly, but basically develops, compiles, and runs. So 'Mini App' has the concept of compiler, runtime.

###  Changes in the code structure within the file

-   Before a `html`large node, there `script`and `style`nodes;

```
	<!DOCTYPE html>  
	<html>  
		<head>  
			<meta charset="utf-8" />  
			<title></title>  
			<script type="text/javascript">  
			</script>  
			<style type="text/css">  
			</style>  
		</head>  
		<body>  
		</body>  
	</html>
```

```
	<template>  
		<view>  
		</view>  
	</template>  
	<script>  
		export default {  
		}  
	</script>  
	<style>  
	</style>
```

###  Changes in the way external files are cited

-   In the past, external js and css were introduced through script src and link href;

```
	<script src="js/jquery-1.10.2.js" type="text/javascript"></script>  
	<link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
```

-   Now it is written in es6, `import`import external js module (note that it is not a file) or css;

**js needs to come in and become an object** .

There is a tool class `util.js` in the `common` directory of hello Mini App. You can search for this example in hello Mini App.

```
	<script>  
		var util = require('../../../common/util.js');  
		var formatedPlayTime = util.formatTime(playTime); 
	</script>
```

In this `util.js`, the prior should `function`method for encapsulating as an object

```
	function formatTime(time) {  
	}  
	module.exports = {  
		formatTime: formatTime  
	}
```

Of course, there are some advanced usages

```
	// Directly use the properties of the js module. There are examples in hello Mini App
	var dateUtils = require('../../../common/util.js').dateUtils; 
	// Import and rename js to echarts, and then use echarts to continue executing the method. There are examples in hello Mini App
	import * as echarts from '/components/echarts/echarts.simple.min.js'; 
```

**css external file import**. Global styles are written in `app.vue` in the root directory, and every page will load the styles in `app.vue`.

```
	<style>  
		@import "./common/uni.css";  
		.uni-hello-text{  
			color:#7A7E83;  
		}  
	</style>
```

**In addition, Vue supports component import, which makes it easier to encapsulate a library that includes interface, js, and styles** [See](https://miniapp.neuxnet.com/vue3-components).

###  Component/label changes

It used to be html tags like `<div>` , now applet components like `<view>` .

So what is the difference between a label and a component, isn't it all surrounded by angle brackets in English?

-   In fact, tags are an old concept. Tags are built-in browsers.
-   But the components can be freely expanded. Similarly, you can encapsulate a piece of js into a function or module, and you can also encapsulate a ui control into a component.

###  js changes

-   In the previous DOM operation, if you want to change the display content of a DOM element, such as the display text of a view: set the id to the view, then get the DOM element through the selector in js, and then perform assignment operations through js to modify the DOM element Attribute or value.

```
	<html>  
		<head>  
			<script type="text/javascript">  
				document.addEventListener("DOMContentLoaded",function () {  
					document.getElementById("spana").innerText="456"  
				})  
				function changetextvalue () {  
					document.getElementById("spana").innerText="789"  
				}  
			</script>  
		</head>  
		<body>  
			<span id="spana">123</span>  
			<button type="button" onclick="changetextvalue()">789</button>  
		</body>  
	</html>  
```

-   The current practice is the binding mode of vue, bind a js variable to this DOM element, modify the value of the js variable in the script, the DOM will automatically change, and the page will automatically update the rendering.
    -   The front end uses the MVVM (short for Model-View-ViewModel) mode. Simply put, Model: represents the data model, View: only focuses on view UI processing, and ViewModel: only processes business and data. Its core is the VM in MVVM, which is the ViewModel. ViewModel is responsible for connecting View and Model to ensure the consistency of views and data. This lightweight architecture makes front-end development more efficient and convenient, greatly reducing the number of lines of code, and better differential rendering performance.
    -   `Mini App` solves the problem of interaction between js and DOM interface by using data binding method of vue.

```
	<template>  
		<view>  
		</view>  
	</template>  
	<script>  
		export default {  
			data() {  
				return {  
					textvalue:"123",  
					buttontype:"primary"  
				};  
			},  
			onLoad() {  
			},  
			methods: {  
				changetextvalue() {  
				}  
			}  
		}  
	</script>
```

##  Use differences in Mini App

`Mini App` supports all vue syntaxes when it is published to H5; when it is published to apps and applets, due to platform limitations, all vue syntaxes cannot be implemented, but `Mini App` is still the cross-platform with the highest support for vue syntax. end frame.

Compared with the Web platform, the differences in the use of Vue.js in `Mini App` are mainly concentrated in two aspects:

-   Added: `Mini App` In addition to supporting the life cycle of Vue instances.
-   Restricted: Compared with the web platform, some functions on the applet and App are limited.
-   Mini App fully supports Vue template syntax
-   Supported by H5/PC Web platform, compiler upgraded to `vite`.

**Precautions**

-   vue3 responsive is based on `Proxy` implementation, and does not support `iOS9` and `ie11`.
-   The newly added `Teleport`,`Suspense` components are not supported temporarily.

##  Template syntax

Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance's data. All Vue.js templates are valid HTML that can be parsed by spec-compliant browsers and HTML parsers.

Under the hood, Vue compiles the templates into Virtual DOM render functions. Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.

###  Interpolations

####  Text

The most common form of data binding is text interpolation:

```
	<template>
		<view>
			<view>Message: {{ msg }}</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					msg: 'Hello Vue!'
				}
			}
		}
	</script>
```

The content in `msg` will be replaced with the value of msg on the corresponding data object. Whenever the msg on the bound data object changes, the content at the interpolation point will be updated.

####  Using JavaScript Expressions

So far we've only been binding to simple property keys in our templates. But Vue.js actually supports the full power of JavaScript expressions inside all data bindings:

**Example**

```
	<template>
		 <view>
			<view>{{ number + 1 }}</view>
			<view>{{ ok ? 'YES' : 'NO' }}</view>
			<!-- Split a string into a string array, reverse the order of the elements, and put all the elements in the array into a string -->
			<view>{{ message.split('').reverse().join('') }}</view>
		 </view>
	</template>
	<script>
	  export default {
		 data() {
			return {
			  number:1,
			  ok:true,
			  message: 'Hello Vue!'
			}
		 }
	  }
	</script>
```

**Example**

```
	<template>
	  <view>
			<view v-for="(item,index) in 10">
			<!-- Calculate the remainder through the % operator to achieve the effect of zebra list -->
			<view :class="'list-' + index%2">{{index%2}}</view>
		 </view>
	  </view>
	</template>
	<script>
	  export default {
		 data() {
			return { }
		 }
	  }
	</script>
	<style>
	  .list-0{
		 background-color: #aaaaff;
	  }
	  .list-1{
		 background-color: #ffaa7f;
	  }
	</style>
```

These expressions will be evaluated as JavaScript in the data scope of the current active instance. One restriction is that each binding can only contain one single expression, so the following will NOT work:

**Error example**

```
	<template>
	  <view>
		 <!-- this is a statement, not an expression: -->
		 <view>{{ var a = 1 }}</view>
		 <!-- flow control won't work either, use ternary expressions -->
		 <view>{{ if (ok) { return message } }}</view>
	  </view>
	</template>
	<script>
	  export default {
		 data() {
			return {
			  ok:true,
			  message: 'Hello Vue!'
			}
		 }
	  }
	</script>
```

> Template expressions are sandboxed and only have access to a restricted list of globals:
> 
> -   `Infinity`
> -   `undefined`
> -   `NaN`
> -   `isFinite`
> -   `isNaN`
> -   `parseFloat`
> -   `parseInt`
> -   `decodeURI`
> -   `decodeURIComponent`
> -   `encodeURI`
> -   `encodeURIComponent`
> -   `Math`
> -   `Number`
> -   `Date`
> -   `Array`
> -   `Object`
> -   `Boolean`
> -   `String`
> -   `RegExp`
> -   `Map`
> -   `Set`
> -   `JSON`
> -   `Intl`
> -   `BigInt`
> 
> You should not attempt to access user defined globals in template expressions.

###  Directives

Directives are special attributes with the v- prefix.

-   Directive attribute values are expected to be a **single JavaScript expression** (with the exception of v-for and v-on, which will be discussed later).
-   A directive's job is to reactively apply side effects to the `DOM` when the value of its expression changes.
-   Some directives can take an "argument", denoted by a colon after the directive name.

####  v-bind

To dynamically bind one or more attributes, `v-bind` is abbreviated to `: ', and can be used to update`HTML attributes\` responsively:

```
	<!-- full -->
	<image v-bind:src="imgUrl"></image>
	<!-- short -->
	<image :src="imgUrl"></image>
	
	<button v-bind:disabled="isButtonDisabled">Button</button>
```

Here src is the argument, which tells the v-bind directive to bind the element's src attribute to the value of the expression url.

The disabled attribute will be included if isButtonDisabled has a truthy value. It will also be included if the value is an empty string, maintaining consistency with `<button disabled="">`. For other falsy values the attribute will be omitted.

####  v-on

v-on directive, which listens to DOM events。v-on is abbreviated as '@':

```
	<!-- full -->
	<!-- short -->
```

####  v-once

Render the element and component once only. On subsequent re-renders, the element/component and all its children will be treated as static content and skipped. This can be used to optimize update performance.

Unlike front-end framework in understanding the client in order to achieve a logical multiplexing state flag template node will be added to the `v-once`guarantee rendering node only once, but not necessarily be able to optimize the rendering performance, but might slow down the client Comparison efficiency when multiplexing nodes.

```
	<!-- A single element -->
	<view v-once>This will never change: {{msg}}</view>
	<!-- Contains child elements -->
	<view v-once>
		<text>comment</text>
		<text>{{msg}}</text>
	</view>
```

####  v-html

Updates the element's [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) .

-   Note that the contents are inserted as plain HTML - they will not be compiled as Vue templates.
-   If you find yourself trying to compose templates using v-html, try to rethink the solution by using components instead.
-   App side and H5 side support `v-html` .

```
	<template>
		<view>
			<view v-html="rawHtml"></view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
				}
			}
		}
	</script>
```

##  Data options

The `data` option has been standardized to only accept **a function that returns an initial data object** (note that the data object returned in the function should not directly refer to the object outside the function); Otherwise, when the page is closed, the data will not be destroyed automatically. When the page is opened again, the last data will be displayed.

```
	//Correct usage, use function to return object
	data() {
		return {
			title: 'Hello'
		}
	}

	//Wrong writing will cause the last data to be displayed when the page is opened again
	data: {
		title: 'Hello'
	}

	//Error writing, which will also lead to mutual influence of object data of multiple component instances.
	const obj = {
		title: 'Hello'
	}
	data() {
		return {
			obj
		}
	}
```

##  Class and Style Bindings

###  Binding HTML Classes

**Object Syntax**

We can pass an object to :class (short for v-bind:class) to dynamically toggle classes:

You can have multiple classes toggled by having more fields in the object. In addition, the `:class` directive can also co-exist with the plain class attribute. So given the following template:

```
	<template>
		<view>
			<view class="static" :class="{ active: isActive}">hello Mini App</view>
			<view class="static" :class="{ active: isActive, 'text-danger': hasError }">hello Mini App</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					isActive: true,
					hasError: false
				}
			}
		}
	</script>
	<style>
	.static{
		color: #2C405A;
	}
	.active{
		background-color: #007AFF;
		font-size:30px;
	}
	.text-danger{
		color: #DD524D;
	}
	</style>
```

It will render:

```
	<view class="static active"></view>
```

When `isActive` or `hasError` changes, the class list will be updated accordingly. For example, if `hasError` becomes true, the class list will become `"static active text-danger"`.

**Array Syntax**

We can pass an array to `:class` to apply a list of classes:

```
	<template>
		 <view>
			<view :class="[activeClass,errorClass]">hello Mini App</view>
		 </view>
	</template>
	<script>
		 export default {
			  data() {
					return {
						 activeClass: 'active',
						 errorClass: 'text-danger'
					}
			  }
		 }
	</script>
	<style>
		.active{
			background-color: #007AFF;
		}
		.text-danger{
			font-size:60rpx;
			color:#DD524D;
		}
	</style>
```

Which will render:

```
	<view class="active text-danger"></view>
```

If you would like to also toggle a class in the list conditionally, you can do it with a ternary expression:

```
	<view :class="[isActive ? activeClass : '', errorClass]"></view>
```

This will always apply errorClass, but activeClass will only be applied when isActive is truthy.

> In JavaScript, truthy means that the converted value is true in the context of Boolean values. All values are true values unless they are defined as false values (that is, all true values except false, 0, "", null, undefined, and NaN).

However, this can be a bit verbose if you have multiple conditional classes. That's why it's also possible to use the object syntax inside array syntax:

```
	<template>
		<view>
			<view class="static" :class="[{ active: isActive }, errorClass]">hello Mini App</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					isActive: true,
					errorClass: 'text-danger'
				}
			}
		}
	</script>
	<style>
		.static{
			font-size:30rpx;
		}
		.active{
			background-color: #007AFF;
		}
		.text-danger{
			font-size:60rpx;
			color:#DD524D;
		}
	</style>
```

**Note: Set the px pixel value in the way: style="". The value is the actual pixel and will not be converted by the compiler.**

Further it may also be used `computed`to generate a method `class`or a `style`string, inserted into the page, illustrated:

```
	<template>
		<view>
			<view class="container" :class="computedClassStr">hello Mini App</view>
			<view class="container" :class="{active: isActive}">hello Mini App</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					isActive: true
				}
			},
			computed: {
				computedClassStr() {
					return this.isActive ? 'active' : ''
				}
			}
		}
	</script>
	<style>
		.active {
			background-color: #007AFF;
			font-size:30px;
		}
	</style>
```

###  Binding Inline Styles

**Object Syntax**

The object syntax for `:style` is intuitive - it looks very CSS-like, but is actually a `JavaScript` object. CSS property names can be named using camelCase (`camelCase`) or dash-separated (`kebab-case`, remember to enclose them in quotes):

```
	<template>
		<view :style="{ color: activeColor, fontSize: fontSize + 'px' }">hello Mini App</view>
	</template>
	<script>
		export default {
			data() {
				return {
					activeColor: 'red',
					fontSize: 30
				}
			}
		}
	</script>
```

It is often a good idea to bind to a style object directly so that the template is cleaner:

```
	<template>
		<view :style="styleObject">hello Mini App</view>
	</template>
	<script>
		export default {
			data() {
				return {
					styleObject: {
					  color: 'red',
					  fontSize: '13px'
					}
				}
			}
		}
	</script>
```

Again, the object syntax is often used in conjunction with computed properties that return objects.

**Array Syntax**

The array syntax for `:style` allows you to apply multiple style objects to the same element:

```
	<template>
		<view>
			<view :style="[baseStyles, overridingStyles]">hello Mini App</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					baseStyles: {
						color: 'green',
						fontSize: '30px'
					},
					overridingStyles: {
						'font-weight': 'bold'
					}
				}
			}
		}
	</script>
```

**Auto-prefixing**

When you use a CSS property that requires a [vendor prefixesa](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) (opens new window)in `:style`, Vue will automatically add the appropriate prefix. Vue does this by checking at runtime to see which style properties are supported in the current browser. If the browser doesn't support a particular property then various prefixed variants will be tested to try to find one that is supported.

**Multiple Values**

You can provide an array of multiple (prefixed) values to a style property, for example:

```
	<view :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></view>
```

This will only render the last value in the array which the browser supports. In this example, it will render `display: flex` for browsers that support the unprefixed version of `flexbox`.

##  Conditional Rendering

###  v-if and v-else

The directive v-if is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value. Use the `v-else` directive to indicate an "else block" for `v-if`: A `v-else` element must immediately follow a `v-if` or a `v-else-if` element - otherwise it will not be recognized.

> In JavaScript, truthy means that the converted value is true in the context of Boolean values. All values are true values unless they are defined as false values (that is, all true values except false, 0, "", null, undefined, and NaN).

```
	<template>
		<view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					seen: true
				}
			}
		}
	</script>
```

The `v-else-if`, as the name suggests, serves as an "else if block" for `v-if`. It can also be chained multiple times:

```
	<template>
		<view>
			<view v-if="type === 'A'">
				A
			</view>
			<view v-else-if="type === 'B'">
				B
			</view>
			<view v-else-if="type === 'C'">
				C
			</view>
			<view v-else>
				Not A/B/C
			</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					type:'B'
				}
			}
		}
	</script>
```

Similar to `v-else`, a `v-else-if` element must immediately follow a `v-if` or a `v-else-if` element.

###  Conditional rendering grouping

Because v-if is a directive, it has to be attached to a single element. But what if we want to toggle more than one element?

In this case we can use v-if on a `<template>` element, which serves as an invisible wrapper. The final rendered result will not include the `<template>` element.

```
	<template v-if="seen">
	</template>
```

###  v-show

Another option for conditionally displaying an element is the `v-show` directive. The usage is largely the same:

```
	<view v-show="ok">Hello!</view>
```

The difference is that an element with `v-show` will always be rendered and remain in the DOM; `v-show` only toggles the display CSS property of the element.

> v-show doesn't support the `<template>` element, nor does it work with v-else

###  v-if vs v-show

`v-if` is "real" conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.

`v-if` is also lazy: if the condition is false on initial render, it will not do anything - the conditional block won't be rendered until the condition becomes true for the first time.

In comparison, `v-show` is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.

**Choose according to application scenarios**

-   `v-if` There is a higher switching overhead. If the conditions rarely change during runtime, it is better to use v-if.
-   `v-show`There is a higher initial rendering overhead. If you need to switch very frequently, v-show is better.

**Note**

-   Not recommended to use both `v-if`and `v-for`.
-   When `v-if`and `v-for`when used together, `v-if`than `v-for`a higher priority.

##  List Rendering

###  v-for with an Array

The v-for directive to render a list of items based on an array.

-   The v-for directive requires a special syntax in the form of item in items, where items is the source data array and item is an alias for the array element being iterated on.
    -   Inside `v-for` blocks we have full access to parent scope properties.
    -   The first parameter `item`is the alias iterated array elements.
    -   The second parameter, the index of the current item `index`, is optional.

```
	<template>
		<view>
			<view v-for="(item, index) in items">
				 {{ parentMessage }} - {{ index }} - {{ item.message }}
			</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					parentMessage: 'Parent',
					items: [
						{ message: 'Foo' },
						{ message: 'Bar' }
					]
				}
			}
		}
	</script>
```

Result:

```
	Parent - 0 - Foo
	Parent - 1 - Bar
```

###  v-for with an Object

You can also use v-for to iterate through the properties of an object.

-   The first parameter `value`is an alias iterated array elements.
-   The second parameter is the `property`name (that is, the key name).
-   The third parameter serves as an index.

```
	<template>
		<view>
			<view v-for="(value, name, index) in object">
				 {{ index }}. {{ name }}: {{ value }}
			</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					object: {
						title: 'How to do lists in Vue',
						author: 'Jane Doe',
						publishedAt: '2021-05-10'
					}
				}
			}
		}
	</script>
```

Result:

```
	0.title: How to do lists in Vue,
	1.author: Jane Doe,
	2.publishedAt: 2021-05-10
```

> When iterating over an object, the order is based on the enumeration order of `Object.keys()`, which isn't guaranteed to be consistent across `JavaScript` engine implementations.

###  List rendering group

Similar to template `v-if`, you can also use a `<template>` tag with v-for to render a block of multiple elements. For example:

```
	<template v-for="item in items">
		<view>{{ item.message }}</view>
		<view class="divider" role="presentation"></view>
	</template>
```

###  Maintaining State

When Vue is updating a list of elements rendered with `v-for`, by default it uses an "in-place patch" strategy. If the order of the data items has changed, instead of moving the DOM elements to match the order of the items, Vue will patch each element in-place and make sure it reflects what should be rendered at that particular index.

This default mode is efficient, but **only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values)**.

To give Vue a hint so that it can track each node's identity, and thus reuse and reorder existing elements, you need to provide a unique `key` attribute for each item:

```
	<view v-for="item in items" :key="item.id">
	  <!-- content -->
	</view>
```

It is recommended to provide a key attribute with v-for whenever possible, unless the iterated DOM content is simple, or you are intentionally relying on the default behavior for performance gains.

-   Without keys, Vue uses an algorithm that minimizes element movement and tries to patch/reuse elements of the same type in-place as much as possible.
-   With keys, it will reorder elements based on the order change of keys, and elements with keys that are no longer present will always be removed/destroyed.
-   Children of the same common parent must have unique keys. Duplicate keys will cause render errors.

> Don't use non-primitive values like objects and arrays as v-for keys. Use string or numeric values instead.
> 
> If you do not provide: key, one will be reported `warning`. If you know that the list is static or you don't need to pay attention to its order, you can choose to ignore it.

Example:

```
	<template>
		<view>
			<!-- Some property of item in Array -->
			<view v-for="(item,index) in objectArray" :key="item.id">
				{{index +':'+ item.name}}
			</view>
			<!-- When item itself is a unique string or number, we can use item itself -->
			<view v-for="(item,index) in stringArray" :key="item">
				{{index +':'+ item}}
			</view>
		</view>
	</template>
	<script>
	export default {
		data () {
			return {
				objectArray:[{
					id:0,
					name:'li ming'
				},{
					id:1,
					name:'wang peng'
				}],
				stringArray:['a','b','c']
			}
		}
	}
	</script>
```

###  Integrate `<template v-for>`

In `Vue3`, `key` should be set on the `<template>` tag

```
	<template v-for="item in list" :key="item.id">
		<view>...</view>
		<text>...</text>
	</template>
```

Similarly, if there are child nodes that use `v-if` when using `<template v-for>`, `key` should be set on the `<template>` tag instead.

```
	<template v-for="item in list" :key="item.id">
		<view v-if="item.isVisible">...</view>
		<view v-else>...</view>
	</template>
```

###  Use v-for on components

On the custom component, you can use it like any ordinary element `v-for`.

```
	<my-component v-for="item in items" :key="item.id"></my-component>
```

**When using v-for on the component, the key is required.**

###  v-if with v-for

> Note that it's not recommended to use v-if and v-for together.

When they exist on the same node, `v-if` has a higher priority than `v-for`. That means the `v-if` condition will not have access to variables from the scope of the `v-for`:

```
	<!-- This will throw an error because property "todo" is not defined on instance. -->
	<view v-for="todo in todos" v-if="!todo.isComplete">
	  {{ todo }}
	</view>
```

This can be fixed by moving v-for to a wrapping `<template>` tag:

```
	<template v-for="todo in todos">
	  <view v-if="!todo.isComplete">
		 {{ todo }}
	  </view>
	</template>
```

##  Event Handling

###  Listening to Events

We can use the `v-on` directive, which we typically shorten to the @ symbol, to listen to DOM events and run some JavaScript when they're triggered. The usage would be `v-on:click="methodName`" or with the shortcut, `@click="methodName"`

```
	<template>
		<view>
			<button @click="counter += 1">Add 1</button>
			<text>The button above has been clicked {{ counter }} times.</text>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					counter:0
				}
			}
		}
	</script>
```

###  Method Event Handlers

The logic for many event handlers will be more complex though, so keeping your JavaScript in the value of the `v-on` attribute isn't feasible. That's why `v-on` can also accept the name of a method you'd like to call.

Example:

```
	<template>
		<view>
			<!-- `greet` is the name of a method defined below -->
			<button @click="greet">Greet</button>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					name: 'Vue.js'
				}
			},
			// `this` inside methods points to the current active instance
			methods: {
				greet(event){
					// `event` is the native DOM event
					console.log(event);
					uni.showToast({
						title: 'Hello ' + this.name + '!'
					});
				}
			}
		}
	</script>
```

###  Methods in Inline Handlers

Instead of binding directly to a method name, we can also use methods in an inline JavaScript statement:

```
	<template>
		<view>
			<button @click="say('hi')">Say hi</button>
			<button @click="say('what')">Say what</button>
		</view>
	</template>
	<script>
		export default {
			methods: {
				say(message) {
					uni.showToast({
						title: message
					});
				}
			}
		}
	</script>
```

Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special `$event` variable:

```
	<template>
		<view>
			<button @click="warn('Form cannot be submitted yet.', $event)">
			  Submit
			</button>
		</view>
	</template>
	<script>
		export default {
			methods: {
				warn(message, event) {
					// now we have access to the native event
					if (event) {
						//You can access native event objects such as event.target
						console.log("event: ",event);
					}
					uni.showToast({
						title: message
					});
				}
			}
		}
	</script>
```

###  Multiple Event Handlers

You can have multiple methods in an event handler separated by a comma operator like this:

```
	<template>
		<view>
			<!-- both one() and two() will execute on button click -->
			<button @click="one($event), two($event)">
			  Submit
			</button>
		</view>
	</template>
	<script>
		export default {
			methods: {
				one(event) {
					// first handler logic...
					console.log("event1: ",event);
				},
				two(event) {
					// second handler logic...
					console.log("event2: ",event);
				}
			}
		}
	</script>
```

###  Event Modifiers

The modifier is a special suffix specified by a period. It is used to indicate that an instruction should be bound in a special way. For example, `.prevent`modifier tells `v-on`instructions for event-triggered call `event.preventDefault()`:

v-on provides event modifiers:

```
	<!-- Prevents the click event from propagating further -->
	<view @click.stop="doThis"></view>
```

> Order matters when using modifiers because the relevant code is generated in the same order. Therefore using @click.prevent.self will prevent all clicks while @click.self.prevent will only prevent clicks on the element itself.

**Note**

-   To be compatible with all terminals, events need to be bound by **@**, please do not use `bind` and `catch` on the applet side for event binding; also cannot use `event.preventDefault()` in JS and `event.stopPropagation()` method;
-   If you need to scroll down the page prohibiting mask, use `@touchmove.stop.prevent="moveHandle"`, `moveHandle`processing can be used to `touchmove`events, but also can be an empty function.

```
	<view class="mask" @touchmove.stop.prevent="moveHandle"></view>
```

-   Key modifier: `Mini App` Run on the mobile phone, with no keyboard event. So the key modifier is not supported.

**there are several benefits in using v-on or @:**

1.  It's easier to locate the handler function implementations within your JS code by skimming the `HTML` template.
    
2.  Since you don't have to manually attach event listeners in JS, your `ViewModel` code can be pure logic and DOM-free. This makes it easier to test.
    
3.  When a `ViewModel` is destroyed, all event listeners are automatically removed. You don't need to worry about cleaning it up yourself.
    

###  Event mapping table

```
//Event mapping table, with WEB events on the left and corresponding events of ``Mini App`` on the right
	{
		click: 'tap',
		touchstart: 'touchstart',
		touchmove: 'touchmove',
		touchcancel: 'touchcancel',
		touchend: 'touchend',
		tap: 'tap',
		input: 'input',
		change: 'change',
		submit: 'submit',
		blur: 'blur',
		focus: 'focus',
		reset: 'reset',
		confirm: 'confirm',
		columnchange: 'columnchange',
		linechange: 'linechange',
		error: 'error',
		scrolltoupper: 'scrolltoupper',
		scrolltolower: 'scrolltolower',
		scroll: 'scroll'
	}
```

##  Form Input Bindings

###  v-model

You can use the `v-model` directive to create two-way data bindings on form `input`, `textarea`, and `select` elements. It automatically picks the correct way to update the element based on the input type. Although a bit magical, `v-model` is essentially syntax sugar for updating data on user input events, plus special care for some edge cases.

> v-model will ignore the initial `value`, `checked` or `selected` attributes found on any form elements. It will always treat the current active instance data as the source of truth. You should declare the initial value on the JavaScript side, inside the data option of your component.

```
	<template>
		<view>
			<input v-model="message" placeholder="edit me">
			<text>Message is: {{ message }}</text>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					message:""
				}
			}
		}
	</script>
```

#####  Usage examples:

-   The `select` tag on the H5 side is replaced with the `picker` component

```
	<template>
		<view>
			<picker @change="bindPickerChange" :value="index" :range="array">
				<view class="picker">
				</view>
			</picker>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					index: 0,
					array: ['A', 'B', 'C']
				}
			},
			methods: {
				bindPickerChange(e) {
					console.log(e)
					this.index = e.detail.value
				}
			}
		}
	</script>
```

-   Form element `radio` is replaced with `radio-group` component

```
	<template>
		<view>
			<radio-group class="radio-group" @change="radioChange">
				<label class="radio" v-for="(item, index) in items" :key="item.name">
					<radio :value="item.name" :checked="item.checked" /> {{item.value}}
				</label>
			</radio-group>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					items: [{
							name: 'USA',
						},
						{
							name: 'CHN',
							checked: 'true'
						},
						{
							name: 'BRA',
						},
						{
							name: 'JPN',
						},
						{
							name: 'ENG',
						},
						{
							name: 'TUR',
						}
					]
				}
			},
			methods: {
				radioChange(e) {
				}
			}
		}
	</script>
```

##  Computed Properties and Watchers

###  Computed Properties

Each computed property contains a `getter` function and a `setter` function, which is read by default using the `getter` function. The `this` context of all `getter` and `setter` functions is automatically bound to the Vue instance.

####  Getter of Calculated attribute

In-template expressions are very convenient, but they are meant for simple operations. Putting too much logic in your templates can make them bloated and hard to maintain. For example, if we have an object with a nested array:

```
	data() {
		return {
			author: {
				name: 'John Doe',
				books: [
					'Vue 2 - Advanced Guide',
					'Vue 3 - Basic Guide',
					'Vue 4 - The Mystery'
				]
			}
		}
	}
```

And we want to display different messages depending on if `author` already has some books or not

```
	<view>
		<view>Has published books:</view>
		<view>{{ author.books.length > 0 ? 'Yes' : 'No' }}</view>
	</view>
```

At this point, the template is no longer simple and declarative. You have to look at it for a second before realizing that it performs a calculation depending on `author.books`. The problem is made worse when you want to include this calculation in your template more than once.

That's why for complex logic that includes reactive data, you should use a **computed property**.

**Example:**

```
	<template>
		<view>
			<view>OHas published books:</view>
			<view>{{ publishedBooksMessage }}</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					author: {
						name: 'John Doe',
						books: [
							'Vue 2 - Advanced Guide',
							'Vue 3 - Basic Guide',
							'Vue 4 - The Mystery'
						]
					}
				}
			},
			computed: {
				// a computed getter
				publishedBooksMessage() {
					// `this` points to the vm instance
					return this.author.books.length > 0 ? 'Yes' : 'No'
				}
			}
		}
	</script>
```

Here we have declared a computed property `publishedBooksMessage`.

Try to change the value of books array in the application data and you will see how `publishedBooksMessage` is changing accordingly.

You can data-bind to computed properties in templates just like a normal property. Vue is aware that `publishedBooksMessage` depends on `author.books`, so it will update any bindings that depend on `publishedBooksMessage` when `author.books` changes. And the best part is that we've created this dependency relationship declaratively: the computed getter function has no side effects, which makes it easier to test and understand.

Computed properties can also depend on the data of multiple Vue instances. As long as any of the data changes, the calculated properties will be re-executed and the view will be updated.

####  Setter of computed property

When you need it can also provide a `setter`function, when manually modify the calculated value of the property, it will trigger `setter`function, perform some custom actions.

```
	<template>
		<view>
			<view>{{ fullName }}</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					firstName: 'Foo',
					lastName: 'Bar'
				}
			},
			computed: {
				fullName: {
					// getter
					get(){
						return this.firstName + ' ' + this.lastName
					},
					// setter
					set(newValue){
						var names = newValue.split(' ')
						this.firstName = names[0]
						this.lastName = names[names.length - 1]
					}
				}
			}
		}
	</script>
```

Now run `fullName = 'John Doe'`time, `setter`will be called `firstName`and `lastName`will be updated accordingly.

####  The difference between getter and setter

-   get: The new value of fullName can be obtained by setting the get method.
-   set: Set a value (newValue) to change the value associated with fullName through the set method, causing the fullName to be recalculated, and the fullName on the corresponding page will also be changed to new content.

###  Computed Caching vs Methods

We can achieve the same result by invoking a method in the expression:

```
	<template>
		<view>
			<view>{{ calculateBooksMessage() }}</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					author: {
						name: 'John Doe',
						books: [
							'Vue 2 - Advanced Guide',
							'Vue 3 - Basic Guide',
							'Vue 4 - The Mystery'
						]
					}
				}
			},
			methods: {
				calculateBooksMessage() {
				   return this.author.books.length > 0 ? 'Yes' : 'No'
				}
			}
		}
	</script>
```

Instead of a computed property, we can define the same function as a method. For the end result, the two approaches are indeed exactly the same. However, the difference is that **computed properties are cached based on their reactive dependencies**.

A computed property will only re-evaluate when some of its reactive dependencies have changed. This means as long as `author.books` has not changed, multiple access to the `publishedBooksMessage` computed property will immediately return the previously computed result without having to run the function again.

This also means the following computed property will never update, because `Date.now()` is not a reactive dependency:

```
	computed: {
		now(){
			return Date.now()
		}
	}
```

In comparison, a method invocation will always run the function whenever a re-render happens.

Why do we need caching?

Imagine we have an expensive computed property `list`, which requires looping through a huge array and doing a lot of computations. Then we may have other computed properties that in turn depend on `list`. Without caching, we would be executing list’s `getter` many more times than necessary! In cases where you do not want caching, use a `method` instead.

###  Watchers

While computed properties are more appropriate in most cases, there are times when a custom watcher is necessary. That's why Vue provides a more generic way to react to data changes through the watch option. This is most useful when you want to perform asynchronous or expensive operations in response to changing data.

When you have some data that needs to change with other data changes, you can use `Watch` to listen to the changes between them.

An object where keys are reactive properties to watch — examples include data or computed properties — and values are the corresponding callbacks. The value can also be a string of a method name, or an Object that contains additional options. The `Vue` instance will call `$watch()` when it is instantiated, and traverse each `property` of the `watch` object.

####  listen to value change of variables

Example:

```
	<template>
		<view>
			<input type="number" v-model="a" style="border: red solid 1px;" />
			<input type="number" v-model="b" style="border: red solid 1px;" />
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					a:1,
					b:1,
					sum: ""
				}
			},
			watch: {
				//Use watch to respond to data changes, the first parameter is the new value of newVal, and the second parameter oldVal is the old value
				a: function(newVal, oldVal) {
					console.log("a--newVal: ", newVal, "a--oldVal: ",oldVal);
				},
				b: function(newVal, oldVal) {
					console.log("b--newVal: ", newVal, "b--oldVal: ",oldVal);
				}
			},
			methods: {
				add() {
					this.sum = parseInt(this.a) + parseInt(this.b)
				}
			}
		}
	</script>
```

One problem with the above example is that it will not be executed when the page is just being loaded because there is no change. Use `immediate` to solve the following problems.

####  Option: immediate

Passing in `immediate: true` in the option will trigger the callback immediately with the current value of the expression:

The `watch` method defaults to `handler`, and when `immediate:true`, the `handler` method will be executed first.

```
	<template>
		<view>
			<input type="number" v-model="a" style="border: red solid 1px;" />
			<input type="number" v-model="b" style="border: red solid 1px;" />
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					a:1,
					b:1,
					sum: ""
				}
			},
			watch: {
				a: {
					handler(newVal, oldVal) {
						console.log("a------: ", newVal, oldVal);
					},
				},
				b: {
					handler(newVal, oldVal) {
						console.log("b------: ", newVal, oldVal);
					},
				}
			},
			methods: {
				add() {
					this.sum = parseInt(this.a) + parseInt(this.b)
				}
			}
		}
	</script>
```

####  Option: deep

To also detect nested value changes inside Objects, you need to pass in `deep: true` in the options argument. This option also can be used to watch array mutations.

```
	<template>
		<view>
			<input type="number" v-model="obj.a" style="border: red solid 1px;" />
			<input type="number" v-model="obj.b" style="border: red solid 1px;" />
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					obj: {
						a: 1,
						b: 1,
					},
					sum:""
				}
			},
			watch: {
				obj: {
					handler(newVal, oldVal) {
						console.log('obj-newVal:' + JSON.stringify(newVal), 'obj-oldVal:' + JSON.stringify(oldVal), );
					},
				}
			},
			methods: {
				add() {
					this.sum = parseInt(this.obj.a) + parseInt(this.obj.b)
				}
			}
		}
	</script>
```

####  listen to the single attribute in an object

If you don't want to listen to other values in `obj`, just want to listen to the change of the value of `obj.a`, you can write it as a string to listen.

```
	export default {
		data() {
			return {
				obj: {
					a: 1,
					b: 1,
				}
			}
		},
		watch: {
				handler(newVal, oldVal) {
					console.log('obj-newVal:' + newVal, 'obj-oldVal:' + oldVal);
				}
			}
		}
	}
```

###  Computed vs Watched Property

Vue does provide a more generic way to observe and react to data changes on a current active instance: **watch properties**. When you have some data that needs to change based on some other data, it is tempting to overuse watch. However, it is often a better idea to use a computed property rather than an imperative watch callback. Consider this example:

```
	export default {
		data() {
			return {
				firstName: 'Foo',
				lastName: 'Bar',
				fullName: 'Foo Bar'
			}
		},
		watch: {
			firstName: function(val) {
				this.fullName = val + ' ' + this.lastName
			},
			lastName: function(val) {
				this.fullName = this.firstName + ' ' + val
			}
		}
	}
```

The above code is imperative and repetitive. Compare it with a computed property version:

```
	export default {
		data() {
			return {
				firstName: 'Foo',
				lastName: 'Bar'
			}
		},
		computed: {
		    fullName(){
				return this.firstName + ' ' + this.lastName
		    }
		}
	}
```
