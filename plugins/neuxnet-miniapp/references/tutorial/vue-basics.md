---
title: "Vue basics — introduction"
source_url: https://miniapp.neuxnet.com/tutorial/vue-basics.html
---
##  Introduction

**What is Vue.js**

Vue (pronounced /vjuː/, similar to view) is a progressive framework for building user interfaces. Vue is designed to be applied layer by layer from the bottom up.

Vue.js uses HTML-based template syntax, allowing developers to declaratively bind the DOM to the data of the underlying Vue instance. All Vue.js templates are legal HTML, so they can be parsed by browsers and HTML parsers that follow the specification.

In the underlying implementation, Vue compiles the template into a virtual DOM rendering function. Combined with the response system, Vue can intelligently calculate how many components need to be re-rendered and minimize the number of DOM operations.

The core of Vue.js is a system that allows the use of concise template syntax to declaratively render data into the DOM. It only focuses on the view layer and is easy to use. Everything is responsive.

We provide a free video tutorial, while reading this document.

**Thanks**

Most of the content of this article comes from vue official website, but some adjustments have been made in conjunction with `Mini App` to make it easier for developers to get started quickly. Heartfelt thanks should be given to the Vue team!

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

-   Now `template`is a node for writing tag components, `script`and `style`is a node in parallel, that is, there are three-level node.

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

**js needs to come in and become an object** . There is a tool class `util.js` in the `common` directory of hello Mini App. You can search for this example in hello Mini App.

```
	<script>  
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
	// Import js and rename it to echarts, then use echarts. to continue executing the method. There are examples in hello Mini App
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

**In addition, Vue supports component import, which makes it easier to encapsulate a library that includes interface, js, and styles** [See](https://miniapp.neuxnet.com/vue-components).

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
		</body>  
	</html>  
```

-   The current practice is the binding mode of vue, bind a js variable to this DOM element, modify the value of the js variable in the script, the DOM will automatically change, and the page will automatically update the rendering.
    -   The front end uses the \[MVVM\](short for Model-View-ViewModel) mode. Simply put, Model: represents the data model, View: only focuses on view UI processing, and ViewModel: only processes business and data. Its core is the VM in MVVM, which is the ViewModel. ViewModel is responsible for connecting View and Model to ensure the consistency of views and data. This lightweight architecture makes front-end development more efficient and convenient, greatly reducing the number of lines of code, and better differential rendering performance.
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

`Mini App` supports all vue syntaxes when it is published to H5; when publishing to apps and applets, due to platform limitations, all vue syntaxes cannot be implemented, but `Mini App` is still the cross-platform with the highest support for vue syntax. end frame.

Compared with the Web platform, the differences in the use of Vue.js in `Mini App` are mainly concentrated in two aspects:

-   Added: `Mini App` In addition to supporting the life cycle of Vue instances, it also supports [Application life cycle](https://miniapp.neuxnet.com/collocation/frame/lifecycle#%E5%BA%94%E7%94%A8%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F) and [Page life cycle](https://miniapp.neuxnet.com/collocation/frame/lifecycle#%E9%A1%B5%E9%9D%A2%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F).
-   Restricted: Compared with the web platform, some functions on the applet and App are limited, [see details](https://miniapp.neuxnet.com/vue-api).
-   Mini App fully supports Vue template syntax

##  Template syntax

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

The content in will be replaced with the value of msg on the corresponding data object. Whenever the msg on the bound data object changes, the content at the interpolation point will be updated.

####  Using JavaScript Expressions

So far we’ve only been binding to simple property keys in our templates. But Vue.js actually supports the full power of JavaScript expressions inside all data bindings:

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

These expressions will be evaluated as JavaScript in the data scope of the owner Vue instance. One restriction is that each binding can only contain one single expression, so the following will NOT work:

```
<template>
  <view>
    <!-- *** -->
    <view>{{ var a = 1 }}</view>
    <!-- *** -->
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

> Template expressions are sandboxed and only have access to a whitelist of globals
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
> 
> You should not attempt to access user-defined globals in template expressions.

###  Directives

Directives are special attributes with the v- prefix.

-   The value of the directive attribute is expected to be a single JavaScript expression (v-for is an exception).
-   The function of the instruction is that when the value of the expression changes, the collateral effect produced by it will act on the DOM responsively.
-   Some commands can receive a "parameter", which is indicated by a colon (😃 after the command name.

####  v-bind

Dynamically bind one or more attributes, or a component `prop`to the expression.

-   v-bind is abbreviated as ':'
-   In binding `prop`upon, `prop`it must be declared in the sub-assembly.
-   You can specify different binding types with modifiers.

```
	<image v-bind:src="imgUrl"></image>
	<!-- abbreviations -->
	<image :src="imgUrl"></image>
	
	<!-- Prop binding. "Prop" must be declared in the my-component.-->
	<my-component :prop="someThing"></my-component>
	
	<button v-bind:disabled="isButtonDisabled">Button</button>
```

If the `isButtonDisabled`values are `null`, `undefined`or `false`, it `disabled`will not even be included in the rendered `button`elements.

####  v-on

The v-on instruction, which is used to monitor DOM events. v-on is abbreviated as'@'

```
	<!-- Complete syntax -->
	<!-- abbreviations -->
```

####  v-once

Only render elements and components once. Subsequent re-rendering, the element/component and all its child nodes will be treated as static content and skipped.

Unlike front-end framework in understanding the client in order to achieve a logical multiplexing state flag template node will be added to the `v-once`guarantee rendering node only once, but not necessarily be able to optimize the rendering performance, but might slow down the client Comparison efficiency when multiplexing nodes.

> h5, WeChat applet are not supported

```
	<view v-once>This will never change: {{msg}}</view>
	<!-- A child element -->
	<view v-once>
		<text>comment</text>
		<text>{{msg}}</text>
	</view>
```

####  v-html

Update elements `innerHTML`.

-   Note: The **content is inserted as normal HTML-it will not be compiled as a Vue template.**
-   If you try to use the v-html composite template, you can reconsider whether to replace it by using components.
-   App side and H5 side support `v-html` , WeChat applet will be converted to `rich-text`, other side does not support `v-html` .

##  data attribute

data must be declared as a function that returns an initial data object (note that the data object returned in the function should not directly reference objects outside the function); otherwise, the data will not be automatically destroyed when the page is closed, and the last data will be displayed when the page is opened again .

```
	//Properly used, using a function to return an object
	data() {
		return {
			title: 'Hello'
		}
	}

	//Incorrect notation that will cause the last data to be displayed when the page is reopened
	data: {
		title: 'Hello'
	}

	//Incorrect notation can also result in multiple component instance object data influencing each other
	const obj = {
		title: 'Hello'
	}
	data() {
		return {
			obj
		}
	}
```

##  Class and Style binding

To save performance, we hard-code the expressions of `Class` and `Style` into `Mini App` through `compiler`. The supported syntax and conversion effects are as follows:

###  Object syntax

An object can be passed to v-bind:class to switch classes dynamically.

You can also pass in more fields in the object to dynamically switch multiple classes. In addition, the v-bind:class instruction can also coexist with ordinary classes.

```
	<template>
		<view>
			<!-- class -->
			<view class="static" :class="{ active: isActive}">111</view>
			<view class="static" :class="{ active: isActive, 'text-danger': hasError }">222</view>
			<!-- style -->
			<view v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">333</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					isActive: true,
					hasError: false,
					activeColor:"green",
					fontSize:50
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
	}
	.text-danger{
		color: #DD524D;
	}
	</style>
```

The rendering result is

```
	<view class="static active"></view>
```

When `isActive`or `hasError`changes, class list will be updated accordingly. For example, if `hasError`the value `true`, class list becomes `static active text-danger`.

###  Array syntax

You can pass an array to v-bind:class to apply a class list.

```
<template>
	<view>
		<!-- class -->
		<view class="static" :class="[activeClass,errorClass]">111</view>
		<view class="static" v-bind:class="[{ active: isActive }, errorClass]">333</view>
		<!-- style -->
		<view v-bind:style="[{ color: activeColor, fontSize: fontSize + 'px' }]">444</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				isActive: true,
				activeClass: 'active',
				errorClass: 'text-danger',
				activeColor:"green",
				fontSize:50
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
      <!-- support -->
      <view class="container" :class="computedClassStr"></view>
      <view class="container" :class="{active: isActive}"></view>
      <!-- Does not support -->
      <view class="container" :class="computedClassObject"></view>
  </template>
  <script>
      export default {
          data () {
              return {
                  isActive: true
              }
          },
          computed: {
              computedClassStr () {
                  return this.isActive ? 'active' : ''
              },
              computedClassObject () {
                  return { active: this.isActive }
              }
          }
      }
  </script>
```

> The applet does not support the `classObject` and `styleObject` syntax.

The applet does not support examples:

```
	<template>
		<view>
			<view :class="activeClass">hello Mini App</view>
			<view :style="styleObject">hello Mini App</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					activeClass: {
						'active': true,
						'text-danger': false
					},
					styleObject: {
						color: 'red',
						fontSize: '20px'
					}
				}
			}
		}
	</script>
	<style>
		.active {
			background-color: #007AFF;
		}
		.text-danger {
			font-size: 60rpx;
			color: #DD524D;
		}
	</style>
```

##  Conditional rendering

###  v-if and v-else

`v-if`Instructions are used to conditionally render a piece of content. This content will only return instruction in an expression `truthy`is rendered value of the time. Use `v-else`instructions represent the v-if "else block."

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

`v-else-if`, As the name suggests, serves as the "else-if block" of v-if and can be used continuously:

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

Similarly `v-else`, `v-else-if`we must immediately bring `v-if`or `v-else-if`elements after.

###  Conditional rendering grouping

Because `v-if`a command, so it must be added to an element. But what if you want to switch multiple elements? At this time it can be a `template`element as invisible package elements, and using v-if above. The final rendering results will not contain `template`elements.

```
<template v-if="seen">
</template>
```

###  v-show

`v-show`It is an instruction to display element options based on conditions. Usage and roughly `v-if`the same:

```
	<view v-show="ok">Hello!</view>
```

The difference is that elements with v-show will always be rendered and kept in the DOM. v-show simply switching element `CSS`attributes `display`.

> Note that v-show does not support template elements, nor does v-else. The nvue page does not support v-show.

###  The difference between v-if and v-show

`v-if` It is a "real" conditional rendering, because it will ensure that the event listeners and subcomponents in the conditional block are properly destroyed and rebuilt during the switching process.

`v-if` It is also lazy: if the condition is false in the initial rendering, nothing is done, and the conditional block will not be rendered until the condition becomes true for the first time.

In contrast, `v-show`it is much simpler, no matter what the initial conditions are, the element will always be rendered, and it is simply switched based on CSS to control the display and hiding of the element.

**Choose according to application scenarios**

-   `v-if` There is a higher switching overhead. If the conditions rarely change during runtime, it is better to use v-if.
-   `v-show`There is a higher initial rendering overhead. If you need to switch very frequently, v-show is better.

**note**

-   Not recommended to use both `v-if`and `v-for`.
-   When `v-if`and `v-for`when used together, `v-for`than `v-if`a higher priority.

##  List rendering

###  Use arrays in v-for

The v-for instruction can render a list based on an array.

-   The v-for directive requires a special syntax in the form of item in items, where items is the source data array and item is an alias for the array element being iterated on.
    -   The first parameter `item`is the alias iterated array elements.
    -   The second parameter, the index of the current item `index`, is optional.

```
	<template>
		<view>
			<view v-for="(item, index) in items">
				{{ index }} - {{ item.message }}
			</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					items: [
						{ message: 'Foo' },
						{ message: 'Bar' }
					]
				}
			}
		}
	</script>
```

result:

```
	0 - Foo
	1 - Bar
```

###  Use objects in v-for

You can also use v-for to traverse an object `property`.

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
						publishedAt: '2020-04-10'
					}
				}
			}
		}
	</script>
```

result:

```
	0.title: How to do lists in Vue,
	1.author: Jane Doe,
	2.publishedAt: 2020-04-10
```

###  List rendering grouping

Like `v-if`, you can also use with `v-for`the `template`cyclically render some content that contain multiple elements. such as:

```
	<template v-for="item in items">
		<view>{{ item.message }}</view>
		<view class="divider" role="presentation"></view>
	</template>
```

###  key

When using Vue being updated `v-for`when the list elements rendered, it defaults to "place update" strategy. If the order of the data items is changed, Vue will not move the DOM elements to match the order of the data items, but instead update each element in place and ensure that they are rendered correctly at each index position.

If the position of items in the list will dynamically change or new items added to the list, and you want the list of projects to maintain its own identity and status (such as `input`input content, `switch`the selected state), you need `:key`to specify a list of items The unique identifier.

`:key` The value of is provided in two forms

-   Use `v-for`cycles `array`in `item`a a `property`, the `property`value needs to be unique list number or string, and can not be changed dynamically.
-   Use `v-for`cycle `item`itself, then the need `item`itself is a unique character string or a number

When the data change triggers the rendering layer to re-render, the components with keys will be corrected, and the framework will ensure that they are reordered, not recreated, to ensure that the components maintain their own state and improve the efficiency of the list rendering.

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

###  Precautions

-   Differences and other platforms when the platforms H5 integer v-for loop, as `v-for="(item, index) in 10"`in, item 1 from the start, other platforms item from zero, the second parameter may be used in index H5 platform consistent.
-   The third parameter is not supported in the non-cyclic object H5 platform, such as `v-for="(value, name, index) in object"`in, index parameter is not supported.
-   The data on the applet side is updated in a differential way. Since the applet does not support deleting object properties, the method of setting the value of null is used instead, which may cause unexpected situations during traversal. You need to filter the data with the value of null yourself.

###  Use v-for on components

On the custom component, you can use it like any ordinary element `v-for`.

```
	<my-component v-for="item in items" :key="item.id"></my-component>
```

**When using v-for on the component, the key is required.**

##  Event handler

###  Listen for events

You can listen to DOM events with v-on instruction, when triggered and run some `JavaScript`code.

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

###  Event handling method

However, many event processing logic is more complex, so directly to the `JavaScript`code is written in the `v-on`instructions is not feasible. So `v-on`you can also receive the name of a method needs to be called.

Example:

```
	<template>
		<view>
			<!-- 'greet' is the method name defined below -->
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
			// Define the methods in the 'methods' object
			methods: {
				greet(event){
					// 'event' is a native DOM event
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
					// ***
					if (event) {
						//***
					}
					uni.showToast({
						title: message
					});
				}
			}
		}
	</script>
```

###  Event modifier

The modifier is a special suffix specified by a period. It is used to indicate that an instruction should be bound in a special way. For example, `.prevent`modifier tells `v-on`instructions for event-triggered call `event.preventDefault()`:

v-on provides event modifiers:

-   `.stop`: Supported by all platforms, it will prevent the event from bubbling when used, and also prevent the default behavior of the event on the non-H5 side

```
	<!-- Prevents the click event from propagating further -->
	<view @click.stop="doThis"></view>
```

> When using modifiers, the order is important; the corresponding codes will be generated in the same order. Therefore, with the `v-on:click.prevent.self`blocks all clicks, and `v-on:click.self.prevent`will only prevent clicks on the element itself.

**note**

-   To be compatible with all terminals, events need to be bound by **@**, please do not use `bind` and `catch` on the applet side for event binding; also cannot use `event.preventDefault()` in JS and `event.stopPropagation()` method;
-   If you need to scroll down the page prohibiting mask, use `@touchmove.stop.prevent="moveHandle"`, `moveHandle`processing can be used to `touchmove`events, but also can be an empty function.

```
<view class="mask" @touchmove.stop.prevent="moveHandle"></view>
```

-   Key modifier: `Mini App` Run on the mobile phone, with no keyboard event. So the key modifier is not supported.

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

##  Form control binding

###  v-model

You can form a v-model command `input`, `textarea`and `select`create a two-way data binding on the element. It will automatically select the correct method to update the element based on the control type. While some magic, but `v-model`in essence merely syntactic sugar. It is responsible for monitoring the user's input events to update the data, and perform some special processing on some extreme scenarios.

> v-model ignores all form elements `value`, `checked`, `selected`the initial value of the attribute data while always Vue instance as a data source. You should declare the initial value in the data option of the component via JavaScript.

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

###  Mini App form component

It is recommended to use `Mini App`

#####  Usage examples:

-   The `select` tag on the H5 side is replaced with the `picker` component

```
	<template>
		<view>
			<picker @change="bindPickerChange" :value="index" :range="array">
				<view class="picker">
					{{array[index]}}
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
							value: 'USA'
						},
						{
							name: 'CHN',
							value: 'CHN',
							checked: 'true'
						},
						{
							name: 'BRA',
							value: 'BRA',
						},
						{
							name: 'JPN',
							value: 'JPN',
						},
						{
							name: 'ENG',
							value: 'ENG',
						},
						{
							name: 'TUR',
							value: 'TUR',
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

###  computed property

Each contains a calculated attribute `getter`and a `setter`default is to use `getter`to read. All `getter`and `setter`the `this`context is automatically bound instance Vue.

####  Getter of computed property

Binding expressions in templates is very convenient, but they are actually only used for simple operations. Putting too much logic in the template makes the template too heavy and difficult to maintain. E.g:

```
	<view>
		{{ message.split('').reverse().join('') }}
	</view>
```

Here are the variables you want to display `message`flip string. When you want to include more inverted strings here in the template, it will be more difficult to handle.

Therefore, for any complex logic, you should use **computed property** .

```
	<template>
		<view>
			<view>Original message: "{{ message }}"</view>
			<view>Computed reversed message: "{{ reversedMessage }}"</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					message: 'Hello'
				}
			},
			computed: {
				// getter
				reversedMessage(){
				  return this.message.split('').reverse().join('')
				}
			}
		}
	</script>
```

result:

```
	Original message: "Hello"
	Computed reversed message: "olleH"
```

You can bind as ordinary `property`as calculated binding properties in the template.

Vue know `reversedMessage`rely on `message`, so when `message`change occurs, all dependent `reversedMessage`binding will be updated. And best of all is that we have to declaratively create this dependency: the calculation of property `getter`functions are no side effects (side effect), making it easier to test and understand.

Calculated properties can also depend on the data of multiple Vue instances. As long as any of the data changes, the calculated properties will be re-executed and the view will be updated.

####  Setter of calculated property

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

We can achieve the same effect by calling methods in expressions:

```
	<template>
		<view>
			<view>Reversed message: "{{ reversedMessage() }}"</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					message: 'Hello'
				}
			},
			methods: {
				reversedMessage(){
					return this.message.split('').reverse().join('')
				}
			}
		}
	</script>
```

You can define the same function as a method instead of a calculated attribute. The final result of the two methods is indeed exactly the same. However, the difference is that **calculated attributes are cached based on their responsive dependencies** .

They will be re-evaluated only when the related reactive dependencies change. This means that as long as `message`no change, many visits to `reversedMessage`the calculation results before the property will return immediately to calculate, without having to perform functions again.

This also means that the following calculated properties will no longer be updated, because Date.now() is not a reactive dependency:

```
	computed: {
		now(){
			return Date.now()
		}
	}
```

In contrast, whenever a re-render is triggered, the **calling method will always execute the function again** .

Why do we need caching? Suppose we have a computational property A with a relatively large performance overhead, and it needs to traverse a huge array and do a lot of calculations. Then we may have other calculated properties that depend on A. If there is no cache, we will inevitably execute A's getter multiple times! If you do not want to have a cache, please use methods instead.

###  Computed attributes vs. listening attributes

Vue provides a more general way to observe and respond to data changes on Vue instances: **listening to properties** . When you have some data that needs to change with other data changes, you can easily abuse it `watch`. Often, however, a better practice is to use the calculation attribute rather than a command-style `watch`callback.

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

The above code is imperative and repetitive. Compare it with the version of the calculated attribute:

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

###  Listener watch

-   Type：{ \[key: string\]: string | Function | Object | Array }
    
-   For an object, the key is the expression to be observed, and the value is the corresponding callback function. The value can also be a method name, or an object containing options. Vue instance will be called upon instantiation `$watch()`, traversing `watch`each object `property`.
    
-   Example:
    

```
<template>
	<view>
		<input type="text" v-model="word">
	</view>
</template>
<script>
	export default {
		data() {
			return {
				word: 'word'
			}
		},
		watch: {
			// Watch is used to respond to changes in data
			word(newVal, oldVal) {
			}
		},
	}
</script>
```

Example:

```
<script>
	export default {
		data() {
			return {
				a: 1,
				b: 2,
				c: 3,
				d: 4,
				e: {
					f: {
						g: 5
					}
				}
			}
		},
		watch: {
			a: function(val, oldVal) {
				console.log('new: %s, old: %s', val, oldVal)
			},
			// the method name
			b: 'someMethod',
			// This callback is called whenever the property of any object being listened on changes, regardless of how deeply nested it is
			c: {
				handler: function(val, oldVal) { /* ... */ },
				deep: true
			},
			// This callback will be invoked immediately after the listening begins
			d: {
				handler: 'someMethod',
				immediate: true
			},
			// You can pass in an array of callbacks, and they'll be called one by one
			e: [
				'handle1',
				function handle2(val, oldVal) { /* ... */ },
				{
					handler: function handle3(val, oldVal) { /* ... */ },
					/* ... */
				}
			],
			// watch vm.e.f's value: {g: 5}
			'e.f': function(val, oldVal) { /* ... */ }
		}
	}
</script>
```
