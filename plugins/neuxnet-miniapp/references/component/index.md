---
title: "Introductory tutorial for component usage"
source_url: https://miniapp.neuxnet.com/component/index.html
---
###  Introductory tutorial for component usage

-   Component is the basic unit of the view layer.
-   Component is the encapsulation of a single and reusable functional module.

Each component includes the following parts: start tag and end tag marked by component name, component content, component attribute and component attribute value.

-   The component name is wrapped in angle brackets, called tag, which has a start tag and an end tag. Use `/` after `<` of the end tag to indicate the end. An end tag is also called a closing tag. For example, in the following example, `<component-name>` is the start tag, and `</component-name>` is the end tag.
-   The content between the start tag and the end tag is called component content. For example, `content` in the example below
-   Attributes can be written on the start tag, and there can be multiple attributes, which are separated by spaces. For example, `property1` and `property2` in the following example. Note that attributes cannot be written on closing tags.
-   Each attribute is assigned a value by `=`. As in the example below, the value of the attribute `property1` is set to the string `value`.

> Note: All component and attribute names are lowercase, with hyphens between words connected by a hyphen `-`.

```
<component-name property1="value" property2="value">
	content
</component-name>
```

The following is an example of a basic component. Insert an `<button>` component under the root `<view>` component of a vue page. Write the text "button" in the content area of this component, and set an attribute "size" for this component, and the attribute value of "size" is set to "mini".

> Note: According to [vue single file component specification](https://vuejs.org/guide/scaling-up/sfc.html) , the root node of each vue file must be `<template>`, and there must be only one root `<view>` component under this `<template>`.

```
<template>
	<view>
	</view>
</template>
```

By understanding the documentation of [button component](./button.md), we can see that the above code will draw a button on the page, the text displayed on the button is "button", and the size of the button is small.

####  Attribute type of components

There are many types of attributes of components:

| Type | Describe | Annotation |
| --- | --- | --- |
| Boolean | Boolean value | The attribute is written on the component, no matter what the attribute is equal to, its value is `true`. Only when the attribute is not written on the component, the attribute value is `false`. If the attribute value is a variable, the value of the variable will be converted to the `Boolean` type. |
| Number | Digit | 1, 2.5 |
| String | String | "string" |
| Array | Array | \[ 1, "string" \] |
| Object | Object | { key: value } |
| EventHandler | Event handler function name | `handlerName` is the name of the event handling function defined in methods |
| Any | Arbitrary attribute |  |

The following example shows an example of setting boolean values and numbers to properties of a component. Note that `false` is used as a js variable. When using it in the properties of a component, the property needs to be prefixed with a `:` colon. The property value is still wrapped in quotation marks, but the quotation marks are not strings, but js.

```
<template>
	<view>
	</view>
</template>
```

####  Public attribute list

Each component has its own defined attributes, but all components of Mini App have the following attributes:

| Attribute name | Type | Describe | Annotation |
| --- | --- | --- | --- |
| id | String | Unique identifier for components | It is generally used to obtain the component context object (such as: [VideoContext](../api/media/video-context.md)), and the entire page needs to be unique |
| ref | String | Unique identifier of components in vue | It is used to register reference information for sub-components |
| class | String | Style class of components | Style class defined in the corresponding css |
| style | String | Inline styles of components | Inline style that can be set dynamically |
| hidden | Boolean | Whether components are hidden? | All components are displayed by default |
| data-\* | Any | Custom attributes | When event is triggered on component, it will be sent to the event handler. |
| @\* | EventHandler | Events of components | For details, please refer to the detailed documentation of each component. For event binding, refer to [Event Handler](../tutorial/vue3-basics.md#event-handling) |

In addition to the above public properties, there is also a special class of properties starting with `v-`, called vue directives, such as v-if, v-else, v-for, v-model. For details, see [vue command](../tutorial/vue3-api.md#directives)

####  Use js variables in components

js variables defined in the data of script can be used in the component, but the usage in the attributes of the component is different from that in the content area.

-   When used in the content area, use two curly braces to wrap, such as the following `buttonText`
-   When used in attribute values, the attribute name should be prefixed with a colon.

The following examples of button component are equivalent to the previous examples. Only that the static content is changed to dynamic js.

```
<template>
	<view>
		<button size="mini" :disabled="buttondisble" hover-start-time=20 >{{buttonText}}</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				"buttondisble":false
			}
		}
	}
</script>
```

####  Component events

Each component has an "event". Event is to trigger a js method under specified conditions.

For example, if button component has a click event, that means when the mobile phone user clicks the button component, this event will be triggered.

Events are also attributes of components, but such attributes are prefixed with `@`.

The attribute value of the event points to a js method defined in the methods of script, and you can also pass parameters to the method.

The following are examples of component events:

-   click is the click event of the button component, which is triggered when the user clicks the button
-   click points to the goto method defined in methods and passes the parameter '/pages/about/about'

```
<template>
	<view>
	</view>
</template>
<script>
    export default {
        methods: {
            goto(url) {
            }
        }
    }
</script>
```

###  Basic component

Mini App components are divided into basic components and extended components.

The basic components have been built in the Mini App framework. There is no need to import the files of the built-in components into the project or register the built-in components, which can be used directly at any time, such as the `<view>` component.

All components other than the basic components are called extended components. The extended components can be used only after they are imported into the project.

Mini App provides developers with a series of basic components, similar to the basic tag elements in HTML.

However, the components of Mini App are different from HTML, but are the same as small programs, which can better meet the usage habits of mobile phones.

Although HTML tags are not recommended, in fact, if developers write tags such as `div`, they will be converted to `view` tags by the compiler when they are compiled to a non-H5 platform. Similarly, `span` is converted to `text`, `A` is converted to `navigator`, etc., including the element selector in css. However, for the sake of convenient management and unified policies, it is still recommended to use components such as view when writing new code.

Developers can combine these basic components for quick development. It can be encapsulated as an extended component if reuse is needed.

```
	<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="bindDateChange">
		<view class="picker">
		</view>
	</picker>
```

####  List of basic components

Basic components are divided into the following ten categories:

**View Container:**

| Component name | Instruction |
| --- | --- |
| [view](./view.md) | View container, similar to div in HTML |
| [scroll-view](./scroll-view.md) | scrollable view container |
| [swiper](./swiper.md) | Slider view container, such as for carousel banner |
| [match-media](./match-media.md) | Dynamic screen adaptation component, such as some content not displayed on narrow screen |
| [movable-area](./movable-view.md#movable-area) | Dragable area |
| [movable-view](./movable-view.md#movable-view) | A movable view container that can be dragged, swiped or pinch-zoomed on the page. movable-view must be in movable-area component |
| [cover-view](./cover-view.md#cover-view) | A text component that can be covered on the native component |
| [cover-image](./cover-view.md#cover-image) | An image component that can be covered on the native component |

**Basic Content:**

| Component name | Instruction |
| --- | --- |
| [icon](./icon.md) | icon |
| [text](./text.md) | characters |
| [rich-text](./rich-text.md) | Rich Text Display Component |
| [progress](./progress.md) | Progress bar |

**Form:**

| Label name | Instruction |
| --- | --- |
| [button](./button.md) | Button |
| [checkbox](./checkbox.md) | Multiple selectors |
| [editor](./editor.md) | Rich text input box |
| [form](./form.md) | form |
| [input](./input.md) | Input Box |
| [label](./label.md) | label |
| [picker](./picker.md) | Popup Picker |
| [picker-view](./picker-view.md) | Form inline list selector |
| [radio](./radio.md) | Single selector |
| [slider](./slider.md) | Slide selector |
| [switch](./switch.md) | Switch selector |
| [textarea](./textarea.md) | Multi-line text input box |

**Routing and Page Navigation:**

| Component name | Instruction |
| --- | --- |
| [navigator](./navigator.md) | page link. Similar to the a tag in HTML |

**Media:**

| Component name | Instruction |
| --- | --- |
| [audio](./audio.md) | Audio |
| [image](./image.md) | Image |
| [video](./video.md) | Video |

**Map:**

| Component name | Instruction |
| --- | --- |
| [map](./map.md) | map |

**Canvas:**

| Component name | Instruction |
| --- | --- |
| [canvas](./canvas.md) | Canvas |

**webview（Web-view）：**

| Component name | Instruction |
| --- | --- |
| [web-view](./web-view.md) | web browser component |

**Page attribute configuration**

| Component name | Instruction |
| --- | --- |
| [custom-tab-bar](./custom-tab-bar.md) | Bottom tabbar custom component |
| [navigation-bar](./navigation-bar.md) | Top Navigation |
| [page-meta](./page-meta.md) | Page property configuration node |

###  Meaning of extending components

Although all business requirements can be met by basic components, but basic components alone are inefficient, and there will be many encapsulated components in actual development.

Import this uni-rate component into your Mini App project, refer to it in the required vue page, and you can display this five-pointed star component in the specified place.

```
	<!-- Refer the uni-rate component on the index.vue page -->
	<template>
		<view>
			<uni-rate></uni-rate> // show a rate
		</view>
	</template>
```

Advantages of encapsulated extended components:

-   Components can be reused arbitrarily.
-   Reasonable division of components is helpful to improve the application performance.
-   The code is more convenient for organization and management, and has stronger expansibility, which is convenient for collaborative development by many people.
-   Component-based development can greatly improve the efficiency, testability and reusability of application development.

###  Component categories

The components supported by Mini App are divided into vue components and small program custom components.

If the extension component conforms to the `easycom` component specification of Mini App, it can be used directly without registration.

For the components not conforming to the easycom specification, you need to manually import and register these components in the code before implementation.

Let us explain them one by one.

###  easycom component specification

Traditional vue components need to be installed, referenced and registered before they can be used.`easycom` Streamline it to one step.

As long as the components are installed in the components directory of the project or`uni_modules` directory, and conform to `components/ component name/ component name.vue` directory structure. You can use it directly in the page without reference or registration.

At the same time, its component is also called uni-rate, so that such a component does not need to be registered and referenced in script. As follows:

```
<template>
		<view>
		</view>
	</template>
<script>
	//There is no need to introduce by import or register uni-list components in components. You can use it directly in template
	export default {
		data() {
			return {
				
			}
		}
	}
</script>
```

No matter how many components are installed in the components directory, `easycom` will automatically remove unused components after packaging, which is particularly friendly to the use of component library.

`easycom` is automatically turned on instead of manually.

If your component name or path does not comply with easycom's default specification, you can personalize it in the `easycom` node of `pages.json` to customize the matching component strategy. [See also](../collocation/pages.md#easycom)

If you do not use easycom to manually reference and register vue components, you need to write the following code in 3 steps:

1.  Import components in import
2.  Registering components in components
3.  Use components in template

```
	<template>
		<view>
		</view>
	</template>
	<script>
		export default {
		}
	</script>
```
