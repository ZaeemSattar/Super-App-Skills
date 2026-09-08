---
title: "Concept"
source_url: https://miniapp.neuxnet.com/tutorial/vue-components.html
---
##  Concept

-   Components are the basic building blocks of the view layer.
-   The component is an encapsulation of a single functional module.
-   A component includes a start tag and an end tag. Attributes can be written on the label and assigned values to the attributes. The content is written in two labels.
    -   Root is `<template>`, this `<template>`case can only and must have a root `<view>`component. This is the [vue single file component specification](https://cn.vuejs.org/v2/guide/single-file-components.html) .
    -   The data option of a component must be a function.

The following is an example of a basic component. Introduce a `<view>` component again under the root `<view>` component, and bind a data to the text area of the component.

```
	<template>
		<view>
			<view>{{userName}}</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					"userName":"foo"
				}
			}
		}
	</script>
```

##  Advantage

-   The components can be reused any number of times.
-   Reasonable division of components helps improve application performance.
-   The code is more convenient to organize and manage, and it is more extensible, facilitating collaborative development by multiple people.
-   Component development can greatly improve application development efficiency, testability, reusability, etc.

##  Registered

When registering a component, we always need to give it a name. There are two ways to define component names:

-   With kebab-case

When using kebab-case (name separated by dashes) to define a component, you must also use kebab-case when referencing this custom element, for example `<my-component-name>`.

-   With PascalCase

When defining a component using PascalCase (name with initial capital letters), you can use both nomenclatures when referencing this custom element. Both `<my-component-name>`and `<MyComponentName>`are acceptable.

Create and store custom components in the `components` directory under the root directory of the Mini App project:

```
│─components            	符合vue组件规范的Mini App组件目录
│  └─componentA         	符合‘components/组件名称/组件名称.vue’目录结构，easycom方式可直接使用组件
│  		└─componentA.vue    可复用的componentA组件
│  └─component-a.vue      可复用的component-a组件
```

###  Global registration

`Mini App` supports the configuration of global components. Global registration is required in `main.js`, and the component can be used in all pages after registration.

**note**

-   The first parameter of Vue.component must be a static string.
-   The nvue page does not currently support global components.

1.  Global import and registration in `main.js`

```
	import Vue from 'vue'
	import pageHead from './components/page-head.vue'
	Vue.component('page-head',pageHead)
```

2.  Components can be used directly in`index.vue`

```
	<template>
		<view>
			<page-head></page-head>
		</view>
	</template>
```

###  Partial registration

Before partial registration, import the component you want to use on the page that needs to reference the component.

**The way the page introduces components**

1.  **Traditional vue specifications:** On the index.vue page, import the component as `import` ,and define the `components`you want to use in the Components option.

```
	<!-- Introduce the uni-badge component in index.vue -->
	<template>
		<view>
			<uni-badge text="1"></uni-badge><!-- 3.使用组件 -->
		</view>
	</template>
	<script>
		import uniBadge from '@/components/uni-badge/uni-badge.vue';//1.导入组件（这步属于传统vue规范，但在Mini App的easycom下可以省略这步）
		export default {
			components:{uniBadge }//2.注册组件（这步属于传统vue规范，但在Mini App的easycom下可以省略这步） 
		}
	</script>
```

For the `components`object of each property, its property name is the name of the custom elements, objects whose property value is the option of this component.

Putting a variable name similar to uniBadge in the object is actually uniBadge: short for uniBadge, that is, the variable name is also:

-   The name of the custom element used in the template
-   The variable name that contains this component option (Only hump naming is supported)

```
	<!-- Introduce the uni-badge component in index.vue -->
	<template>
		<view>
			<uni-badge text="1"></uni-badge><!-- 3.使用组件 -->
		</view>
	</template>
	<script>
		// There is no need to import or register a uni-badge component in Components. Template can be used directly
		export default {
			data() {
				return {
				}
			}
		}
	</script>
```

-   **[Easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) is automatically turned on** , you do not need to manually open ,when there is a demand `pages.json`of `easycom`nodes personalize .
    
-   No matter how many components are installed in the components directory, easycom will automatically remove unused components after packaging, which is particularly friendly to the use of component libraries.
    

Component is a very important part of the technology in `vue`.Components allow UI-related wheels to be easily manufactured and shared, which in turn makes development efficiency for `vue`users significantly higher.

> `Mini App` only supports vue single file components (.vue components). Others such as: dynamic components, custom `render` , and `<script type="text/x-template">` String template, are not supported at non-H5 sides.

##  props

`props`Can be an array or object, used to receive data from the parent component. `props`It can be a simple array, or use an object as an alternative. The object allows configuration of advanced options such as type detection, custom validation, and setting default values.

| Options | Types of | Description |
| --- | --- | --- |
| type | `String`, `Number`, `Boolean`, `Array`, `Object`, `Date`, `Function`, `Symbol`Array, any custom constructor, or the above composition | A checks `prop`whether the given type, otherwise throws a warning |
| default | any | For `prop`a default value specified. If this `prop`is not passed, then the change to do with this value. The default value of the object or array must be returned from a factory function. |
| required | Boolean | The definition of `prop`whether it is required |
| validator | Function | The custom authentication function `prop`value as the only parameter is substituted. In a non-production environment, if the function returns a `falsy`value (that is, authentication fails), a warning will be thrown console |

#####  Example

```
	<template>
		<view>
			<!-- I am the child component componentA -->
			<view>{{age}}</view>
		</view>
	</template>
	<script>
		export default {
			props: {
				// Detection type + other validation
				age: {
					type: Number,
					default: 0,
					required: true,
					validator: function(value) {
						return value >= 0
					}
				}
			}
		}
	</script>
```

```
	<template>
		<view>
			<!-- I am the parent component -->
			<componentA :age="10"></componentA>
		</view>
	</template>
```

###  Pass static or dynamic Prop

-   You can give like this `prop`passed in a static value:

```
	<blog-post title="My journey with Vue"></blog-post>
```

-   Can be `v-bind`assigned dynamically

```
	<!-- To assign a value to a variable dynamically -->
	<blog-post v-bind:title="post.title"></blog-post>
	
	<!-- This means' true 'even if the prop has no value.-->
	<blog-post is-published></blog-post>
	
	<blog-post v-bind:is-published="post.isPublished"></blog-post>
```

-   Pass all `property` of an object (WeChat applet does not support this usage, ie: <blog-post v-bind="post"(error)>)

If you want to pass in all `property`of an object as a prop, you can use without parameters `v-bind`(replace v-bind: prop-name) . For example, for a given object `post`:

```
	post: {
		id: 1,
		title: 'My Journey with Vue'
	}
```

```
	<blog-post v-bind="post"></blog-post>
	<!-- The above template is equivalent to: -->
	<blog-post
		v-bind:id="post.id"
		v-bind:title="post.title"
	></blog-post>
```

###  Unidirectional data flow

All props form a one **\-line downward binding** between their parent and child props : updates to the parent prop will flow down to the child components, but the reverse is not possible. This will prevent accidental changes to the state of the parent component from the child component, which will make the data flow of your application difficult to understand.

> Every time the parent component changes, all props in the child component will be refreshed to the latest value. This means that you should not change props inside a subcomponent. If you do, Vue will issue a warning in the browser console.

-   This `prop`is used to pass an initial value; the desired sub-assembly to the next as a local `prop`used data.

```
	<template>
		<view>
			<!-- I am the child component componentA -->
			<view>{{myTitle}}</view>
		</view>
	</template>
	<script>
		export default {
			props: ['title'],
			data() {
				return {
					myTitle:this.title
				}
			}
		}
	</script>
```

```
	<template>
		<view>
			<!-- I am the parent component -->
			<componentA :title="title"></componentA>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					title:"hello"
				}
			}
		}
	</script>
```

-   This `prop`with a primitive values passed and the need for conversion. In this case, it is preferable to use the `prop`value of a calculated attribute to define:

```
	<template>
		<view>
			<!-- I am the child component componentA -->
			<view>{{normalizedSize}}</view>
		</view>
	</template>

	<script>
		export default {
			props: ['size'],
			computed: {
				normalizedSize: function () {
					return this.size.toLowerCase()
				}
			}
		}
	</script>
```

```
	<template>
		<view>
			<!-- I am the parent component -->
			<componentA :size="size"></componentA>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					size:"M"
				}
			}
		}
	</script>
```

##  ref

ref is used to register a reference to an element or a child component. The reference will be registered under the parent component’s $refs object.

If used on a plain DOM element, the reference will be that element; if used on a child component, the reference will be component instance:

```

<!-- Non-H5 client does not support getting view instance through this.$refs.content -->
<view ref="content">hello</view>

<!-- Support to get child-component instance through this.$refs.child -->
<child-component ref="child"></child-component>

```

When used on elements/components with v-for, the registered reference will be an Array containing DOM nodes or component instances.

\*\*An important note about the ref registration timing: \*\*

because the refs themselves are created as a result of the render function, you cannot access them on the initial render - they don’t exist yet! $refs is also non-reactive, therefore you should not attempt to use it in templates for data-binding.

####  Child Component Refs

Despite the existence of props and events, sometimes you might still need to directly access a child component in `JavaScript`. To achieve this you can assign a reference ID to the child component using the `ref attribute`. For example:

```
	<base-input ref="usernameInput"></base-input>
```

Now in the component where you’ve defined this ref, you can use:`this.$refs.usernameInput`

#####  Example

```
<!-- base-input subcomponent page -->
<template>
	<view>
		<input :focus="isFocus" type="text" placeholder="请输入内容" />
	</view>
</template>
<script>
	export default {
		name:"base-input",
		data() {
			return {
				"isFocus":false
			};
		},
		methods:{
			focus(){
				this.isFocus = true
			}
		}
	}
</script>
```

Thus allowing the parent component to focus the input inside `<base-input>` with:

```
<!-- index parent component page -->
<template>
	<view>
		<base-input ref="usernameInput"></base-input>
		<button type="default" @click="getFocus">获取焦点</button> 
	</view>
</template>
<script>
	export default {
		methods:{
			getFocus(){
				//Method of calling focus through the ref defined by the component
				this.$refs.usernameInput.focus()
			}
		}
	}
</script>
```

**note**

> Non-H5 sides can only be used to obtain custom components, but not built-in component instances (for example: view and text).

##  Custom event

###  Binding Native Events to Components

here may be times when you want to listen directly to a native event on the root element of a component. In these cases, you can use the `.native` modifier for `v-on`:

-   Note: Inconsistent performance on the app, applet and h5 side, the h5 side gets the browser's native events.

```
	<template>
		<view>
			<!-- I am the parent component -->
			<componentA @click.native="clickComponentA" style="height: 200px;"></componentA>
		</view>
	</template>
	<script>
		export default {
			methods: {
				clickComponentA(){
					console.log("clickComponentA");
				}
			}
		}
	</script>
```

```
	<template>
		<view>
			<!-- I am a child component -->
			<view type="default" @click.stop="open" style="height: 30px;">点击</view>
		</view>
	</template>
	<script>
		export default {
			methods:{
				open(){
					console.log("open");
				}
			}
		}
	</script>
```

###  .sync Modifier

When a child component changes the value of a `prop`, the change is synchronized with the binding in the parent component. `.sync`It is extended as a `v-on` listener that automatically updates the properties of the parent component.

```
	<!-- The parent component -->
	<template>
		<view>
			<syncA :title.sync="title"></syncA>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					title:"hello vue.js"
				}
			}
		}
	</script>
```

```
	<!-- Child components -->
	<template>
		<view>
			<view @click="changeTitle">{{title}}</view>
		</view>
	</template>
	<script>
		export default {
			props: {
				title: {
					default: "hello"
				},
			},
			methods:{
				changeTitle(){
					//An update event is fired
					this.$emit('update:title',"Mini App")
				}
			}
		}
	</script>
```

##  Slot

Vue implements a content distribution API, using `slot`elements as outlets for hosting content distribution.

It allows you to synthesize components like this:

```
	<template>
		<view>
			<componentA>
				Your Profile
			</componentA>
		</view>
	</template>
```

In the `<componentA>`template may be written as:

```
	<template>
		<view>
			<!-- I am the child component componentA -->
			<view >{{title}}</view>
			<slot></slot>
		</view>
	</template>
```

When the component is rendered, it `<slot></slot>`will be replaced with "Your Profile". The slot can contain any template code, including `HTML`:

```
	<template>
		<view>
			<!-- I am the parent component -->
			<componentA>
				<view>Your Profile</view>
				<!-- Add a uni-icons icon-->
				<uni-icons type="contact" size="30"></uni-icons>
			</componentA>
		</view>
	</template>
```

If `<componentA>`a `template`does not contain an `<slot>`element, then anything between the start tag and an end tag assembly is discarded.

###  Compilation scope

When you want to use data in a slot, for example:

```
	<navigation-link url="/profile">
		Logged in as {{ user.name }}
	</navigation-link>
```

This slot has access to the same instance`property` (that is, the same "scope") as the rest of the template, but not to the scope of `<navigation-link>`.For example, `url`a visit of less than:

```
	<navigation-link url="/profile">
		Clicking here will send you to: {{ url }}
	<!--
		这里的 `url` 会是 undefined，
		因为其 (指该插槽的) 内容是_传递给_ <navigation-link> 的
		而不是在 <navigation-link> 组件*内部*定义的。
	-->
	</navigation-link>
```

> Remember the rule: **everything in the parent template is compiled in the parent scope; everything in the child template is compiled in the child scope.**

###  Default content

Sometimes it is useful to set a specific fallback (that is, the default) content for a slot, which will only be rendered when no content is provided. In one example, `<submit-button>`component:

```
	<button type="submit">
		<slot></slot>
	</button>
```

We may hope that `<button>`the vast majority of cases are rendered within the text "Submit". In order to "Submit" content as a backup, we can put it `<slot>`in the label:

```
	<button type="submit">
		<slot>Submit</slot>
	</button>
```

-   When I use a parent component `<submit-button>`when slot and does not provide any content:

```
	<!-- Parent component: No slot content is provided -->
	<submit-button></submit-button>
	
	<!-- Subcomponent: Backup content "Submit" will be rendered: -->
	<button type="submit">
		Submit
	</button>
```

-   When I use a parent assembly `<submit-button>`time and provides a slot content:

```
	<!-- Parent component: Provides slot content -->
	<submit-button>
		Save
	</submit-button>
	
	<!-- Subcomponent: then the supplied content will be rendered in place of the backup content: -->
	<button type="submit">
		Save
	</button>
```

###  Named slot

When multiple slots are required, you can define named slots using a special feature of the `<slot>` element: `name`

-   `<base-layout>` Subcomponent template:

```
	<template>
		<view  class="container">
			<header>
				<!-- We want to put the header here -->
				<slot name="header"></slot>
			</header>
			<main>
				<!-- We want to put the main thing here -->
				<slot></slot>
			</main>
			<footer>
				<!-- We want to put the footer here -->
				<slot name="footer"></slot>
			</footer>
		</view>
	</template>
```

-   When providing content to a named slot, We can use `v-slot` directive on a `<template>`element, and provide their name as a parameter of v-slot:

```
	<template>
		<view>
		<!-- The parent component uses the child component '<base-layout>', and the node uses the slot feature: -->
			<base-layout>
				<template v-slot:header>
					<view>Here might be a page title</view>
				</template>
				<template v-slot:default>
					<view>A paragraph for the main content.</view>
					<view>And another one.</view>
				</template>
				<template v-slot:footer>
					<view>Here's some contact info</view>
				</template>
			</base-layout>
		</view>
	</template>
```

Now `<template>`all the content elements will have to be passed in the appropriate slot. Any not been wrapped with the v-slot in`<template>`is considered the default slot content in the content .

> v-slot can be added only in the `<template>`
> 
> A `<slot>`exit without a name carries the implied name "default".

####  Abbreviation for named slot

Like v-on and v-bind, `v-slot`it also has abbreviations, that is, replace everything before the parameter (v-slot:) with the character **#** . For example, `v-slot:header`it can be rewritten as `#header`:

```
	<template>
		<view>
		<!-- The parent component uses the child component '<base-layout>', and the node uses the slot feature: -->
			<base-layout>
				<template #header>
					<view>Here might be a page title</view>
				</template>
				
				<view>A paragraph for the main content.</view>
				<view>And another one.</view>
				
				<template #footer>
					<view>Here's some contact info</view>
				</template>
			</base-layout>
		</view>
	</template>
```

###  Scope slot

In the scope slot, the parent component can get the data of the child component. Subassembly may be `slot`bound label on the attribute value.

Sometimes it is useful to allow the contents of the slot to access data that is only available in the subcomponent.

```
	<!-- Child components <current-user>-->
	<template>
		<view>
			<slot>{{ user.lastName }}</slot>
		</view>
	</template>
```

We may want to change the default content and display it by first name instead of last name. as follows:

```
	<template>
		<view>
			<current-user>
				{{ user.firstName }}
			</current-user>
		</view>
	</template>
```

However, the above code does not work properly, because only `<current-user>`components can access the user and the content we provide is in the parent rendering.

To make user available in the parent slot contents, we can bind user as an `attribute` of the `<slot>` element:

```
	<!-- Child components <current-user>-->
	<template>
		<view>
			<slot :user="user">{{user.lastName}}</slot>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					user:{
						"lastName":"bar",
						"firstName":"foo"
					}
				}
			}
		}
	</script>
```

Binding `<slot>`on the element `attribute`is called **slot prop** .Now in the parent scope, we can use the valued `v-slot` to define the name of the `prop` we provide:

```
	<template>
		<view>
			<current-user>
				<template v-slot:default="slotProps">
					{{ slotProps.user.firstName }}
				</template>
			</current-user>
		</view>
	</template>
```

In this example, we select will contain all the slots `prop`object name `slotProps`, but you can use any name you like.

####  Abbreviated syntax for exclusive default slot

Like assume unspecified content corresponding slot as the default, with no arguments `v-slot`is assumed to correspond to the default slot:

```
<template>
	<view>
		<current-user>
			<template v-slot="slotProps">
				{{ slotProps.user.firstName }}
			</template>
		</current-user>
	</view>
</template>
```

**The abbreviated syntax of the default slot cannot be mixed with the named slot** , because it will cause the scope to be ambiguous:

```
	<template>
		<view>
			<!-- Invalid and will result in a warning -->
			<current-user v-slot="slotProps">
				{{ slotProps.user.firstName }}
				<template v-slot:other="otherSlotProps">
					slotProps is NOT available here
				</template>
			</current-user>
		</view>
	</template>
```

Always use the full `<template>`\-based syntax for all slots whenever multiple slots are present:

```
	<template>
		<view>
			<current-user>
				<template v-slot:default="slotProps">
					{{ slotProps.user.firstName }}
				</template>
			
				<template v-slot:other="otherSlotProps">
					...
				</template>
			</current-user>
		</view>
	</template>
```

####  Deconstruct Slot Prop

The internal working principle of scoped slots is to wrap the contents of your slot in a function with a single parameter:

```
	function (slotProps) {
		// Content of the slot
	}
```

This means that the value of a `v-slot` can actually be any`JavaScript` expression that can be used as a parameter in a function definition. So with the support of the environment ( single file component ), you can also use the ES2015 deconstructed to pass specific slot `prop`, as follows:

```
	<current-user v-slot="{ user }">
		{{ user.firstName }}
	</current-user>
```

This makes the template more compact, especially if the slot provides more than one `prop`.It also opens up other possibilities, such as`prop` renaming,for example, `user`rename `person`:

```
	<current-user v-slot="{ user: person }">
		{{ person.firstName }}
	</current-user>
```

You can even define a backup for the case where `prop` in the slot is `undefined`:

```
	<current-user v-slot="{ user = { firstName: 'Guest' } }">
		{{ user.firstName }}
	</current-user>
```

##  applet does not support list

-   Scoped slots (HBuilderX 3.1.19 and below only supports destructuring slots and cannot use out-of-scope data and complex expressions)
-   Dynamic components
-   `inline-template`
-   `X-Templates`
-   `transition` (can be replaced with `animation` or CSS animation)

##  Naming restrictions

The following are reserved keywords and can not be used as component names.

-   `a`
-   `canvas`
-   `cell`
-   `content`
-   `countdown`
-   `datepicker`
-   `div`
-   `element`
-   `embed`
-   `header`
-   `image`
-   `img`
-   `indicator`
-   `input`
-   `link`
-   `list`
-   `loading-indicator`
-   `loading`
-   `marquee`
-   `meta`
-   `refresh`
-   `richtext`
-   `script`
-   `scrollable`
-   `scroller`
-   `select`
-   `slider-neighbor`
-   `slider`
-   `slot`
-   `span`
-   `spinner`
-   `style`
-   `svg`
-   `switch`
-   `tabbar`
-   `tabheader`
-   `template`
-   `text`
-   `textarea`
-   `timepicker`
-   `transition-group`
-   `transition`
-   `video`
-   `view`
-   `web`

Tips

-   In addition to the names in the above list, standard HTML and SVG tag names cannot be used as component names.
-   Methods cannot use a method name with the same name as a lifecycle.
