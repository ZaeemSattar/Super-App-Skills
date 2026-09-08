---
title: "Uni forms — introduce"
source_url: https://miniapp.neuxnet.com/component/uniui/uni-forms.html
---
component name: uni-forms

> Code blocks: `uForms`, `uni-forms-item` Associated components: `uni-forms-item`, `uni-easyinput`, `uni-data-checkbox`, `uni-group`.

[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-forms)

The built-in components of uni-app already have `<form>`Component for submitting form content.

However, almost every form requires form validation. In order to facilitate form validation and reduce repetitive development, `uni-ui` is based on `<form>`Component encapsulates`<uni-forms>`Component, with built-in form validation.

`<uni-forms>` provides `rules` attribute to describe validation rules, `<uni-forms-item>` sub-component to wrap specific form items, and `onFieldChange()` for native or third-party components to validate form values.

Each form item to be verified, regardless of input or checkbox, must be placed in the `<uni-forms-item>` component, and a `<uni-forms-item>` component can only place one form item.

The `<uni-forms-item>` component reserves an area for displaying error messages, which is at the bottom of the form item by default.

In addition, each form item under the `<uni-forms>` component can be wrapped into different groups by `<uni-group>`. Different form items under the same `<uni-group>` will be grouped together, maintaining vertical spacing with other groups. `<uni-group>` only affects visual effects.

##  introduce

Notes

> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.

-   The component needs to depend on the `sass` plugin, please install it manually
-   The component supports nvue, you need to configure `"nvueStyleCompiler" : "uni-app"` under the `manifest.json > app-plus` node
-   `uni-forms` does not contain other form components, if you need to use `uni-easyinput`, `uni-data-checkbox` and other components, you need to import them yourself
-   `uni-forms version 1.4.0` released, please pay attention to the compatibility problem description in the document

###  Basic usage

The `uni-forms` component is often used for form validation and submission. Each `uni-forms-item` is a form field component of it, which is used to carry the specific content of the form. `uni-easyinput`, `uni-data-checkbox` and `uni-easyinput` can be nested in `uni-forms-item` uni-app\` built-in form components

```
<template>
	<view class="">
		<uni-forms :modelValue="formData">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="年龄" name="name">
				<input type="text" v-model="formData.age" placeholder="请输入年龄" />
			</uni-forms-item>
			<uni-forms-item required name="hobby" label="兴趣爱好">
				<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
			</uni-forms-item>
		</uni-forms>
		<button @click="submitForm">Submit</button>
	</view>
</template>
```

###  Alignment

Use the `label-position` property to set the position of all form fields, the default is on the left

```
<template>
	<view class="">
		<uni-forms :modelValue="formData" label-position="top">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item required name="hobby" label="兴趣爱好">
				<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
			</uni-forms-item>
		</uni-forms>
	</view>
</template>
```

##  form validation

Form validation can also directly use the `uniCloud web console` to automatically generate a form maintenance interface based on `schema`, such as creating new pages and editing pages, and automatically processing validation rules. For more reference \[DB Schema\](https://uniapp .dcloud.io/uniCloud/schema)

###  how to use

1.  `uni-forms` needs to pass in the agreed validation rules through the `rules` attribute, which is described in detail below `Validation rules description`.

```
<!-- For details of rules, see the complete example below -->
<uni-forms ref="form" :rules="rules">
	...
</uni-forms>
```

2.  `uni-forms` needs to bind the `model` property, which is an object composed of the key\\value of the form.

```
<!-- For details of formData and rules, please refer to the complete example below -->
<uni-forms ref="form" :model="formData" :rules="rules">
	...
</uni-forms>
```

3.  `uni-forms-item` needs to set the `name` property to the current field name, and the field is of type `String|Array`.

```
<!-- For details of formData and rules, please refer to the complete example below -->
<uni-forms :modelValue="formData" :rules="rules">
	<uni-forms-item label="姓名" name="name">
		<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
	</uni-forms-item>
	<uni-forms-item required :name="['data','hobby']" label="兴趣爱好">
		<uni-data-checkbox multiple v-model="formData.data.hobby" :localdata="hobby"/>
	</uni-forms-item>
</uni-forms>
```

4.  As long as the components used are built-in components or third-party components, you only need to bind v-model, and you can participate in the verification without other operations.
5.  If you use native checkboxes or third-party components that do not support v-model, etc., you only need to bind the `binddata` method to the component to trigger form validation, without binding events to `methods`, see the complete example below.
6.  The `binddata('name',$event.detail.value,'form')"` method accepts three values,
    -   The first parameter passes in the name of the current form component, which is bound to the value of the property `name` with the current parent component `uni-forms-item`
    -   The second parameter passes in the value that needs to be verified. The built-in component can get the return value of the component through `$event.detail.value`, and the custom component can pass in the value to be verified.
    -   The third parameter passes in the value of the `uni-forms` component binding attribute `ref`, which is usually required when there are multiple forms to distinguish the form. For example, there is only one `uni-forms` in the page, which can be ignored
7.  If the built-in `binddata` method cannot meet the requirements, you can override this method in the `methods` of the current page. To override this method, you need to call the `setValue` of `uni-forms` to trigger the form validation, see `setValue` below \`Method description

attention

-   After uni-forms version 1.4.0, the binddata method is no longer recommended, please use the onFieldChange method on uni-forms-item instead

**full example**

Template

Script

```
<template>
	<view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="邮箱" name="email">
				<input class="input" v-model="formData.email" type="text" placeholder="请输入用户名" @input="binddata('email',$event.detail.value)" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">Submit</button>
	</view>
</template>
			 
```

Note (this restriction is not used after 1.4.0, the name can be supported by using the array type)

The `modelValue` object currently has strict format requirements:

-   Try not to use nested data structures, because the `name` value specified by the form field corresponds to the key of modeValue one-to-one. There is only one exception, that is, the dynamic verification form, see `Dynamic verification form` below chapter

###  Validation rule description

The validation rule accepts a value of type `Object`, by passing in different rules to indicate how the value of each form field should be validated

The `key` of the object represents the field name of the current form field, and the `value` is the specific validation rule

Here's what `value` contains:

| property name | type | description |
| --- | --- | --- |
| rules | Array | Validation rules, see below `rules attribute description` |
| validateTrigger | String | Form validation timing \[1.4.0 deprecated\] |
| label | String | The field Chinese name of the current form field, which is mostly used for the display of `errorMessage`, can be left blank |

```
rules: {
	// Required validation for the name field
	name: {
		// Validation rules for the name field
		rules:[
			// Verify that name cannot be empty
			{
				required: true,
				errorMessage: '请填写姓名',
			},
			// Validate the length of the name field
			{
				minLength: 3,
				maxLength: 5,
				errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符',
			}
		],
		// The field Chinese name of the current form field can be left blank
		label:'姓名',
		validateTrigger:'submit'
	}
}

```

###  rules attribute description

In each validation rule, multiple attributes can be configured. The following are some common rule attributes. Actually the specification here is the same as uniCloud's [DB Schema](https://uniapp.dcloud.io/uniCloud/schema?id=validator) specification.

| property name | type | default value | optional value | description |
| --- | --- | --- | --- | --- |
| required | Boolean | \- | \- | is required, configuring this parameter will not display the required asterisk on the left side of the input box, if necessary, please configure the required of the `uni-forms-item` component to true |
| range | Array | \- | \- | Arrays must have at least one element, and each element in the array is unique. |
| format | String | \- | \- | Built-in validation rules, if these rules cannot meet the requirements, you can use regular matching or custom rules |
| pattern | RegExp | \- | \- | Regular expression, please refer to the note below |
| maximum | Number | \- | \- | Check the maximum value (greater than) |
| minimum | Number | \- | \- | Check the minimum value (less than) |
| maxLength | Number | \- | \- | Maximum length of check data |
| errorMessage | String | \- | \- | Verification failure prompt message, attribute placeholders can be added, and all attributes in the current table can be used as placeholders |
| validateFunction | Function | \- | \- | Custom validation rules |

**format attribute value description**

| property name | description |
| --- | --- |
| string | must be of type string, default type |
| number | must be of type number |
| boolean | must be of type boolean |
| array | must be of type array |
| object | must be of type object |
| url | must be of type url |
| email | must be of type email |

pattern attribute description

-   In the applet, regular objects cannot be used in json, such as: `/^\S+?@\S+?\.\S+?$/`, the use of regular objects will be serialized by WeChat, resulting in regular invalidation.
-   So it is recommended to use the regular method in a unified way, such as `'^\\S+?@\\S+?\\.\\S+?$'`, it should be noted that `\` needs to use `\\` to translate .
-   Such as verification email: /^\\S+?@\\S+?.\\S+?$/ (note no quotation marks), or use "^\\S+?@\\S+?\\.\\S+?$" (note that quotes need to be escaped with `\`)

###  validateFunction Custom Validation Rules Instructions

The `rules` basic rules of `uni-forms` sometimes cannot meet all the usage scenarios of the project. In this case, you can use `validateFunction` to customize the validation rules

The `validateFunction` method returns four parameters `validateFunction:function(rule,value,data,callback){}` , of course, the returned parameter name can be customized by developers:

-   rule : the validation rule corresponding to the current validation field in rules
-   value : the value of the current validation field
-   data : object of fields and values of all validation fields
-   callback : The callback when the verification is completed. Generally, there is no need to execute the callback. Return true (verification passed) or false (verification failed). If you need to display a different `errMessage`, if the verification fails, you need to execute the callback( 'Prompt error message'), if the verification passes, execute callback()

attention

-   It should be noted that if you need to use `validateFunction` to customize the validation rules, you cannot use the `rules` attribute of `uni-forms` to configure the validation rules. In this case, you need to pass `ref` and call it in the `onReady` life cycle Component's `setRules` method binds validation rules
-   Variables cannot be passed through props, because the WeChat applet will filter out the methods in the object, resulting in invalid custom validation rules.
-   If `validateFunction` is used and `request` is `false`, it means that the content will not be verified, and the content will be verified, so `validateFunction` will not be executed when the content is empty

```
<template>
	<view>
		<uni-forms ref="form" :modelValue="formData">
			<uni-forms-item label="兴趣爱好" required name="hobby">
				<uni-data-checkbox v-model="formData.hobby" multiple :localdata="hobbys" />
			</uni-forms-item>
		</uni-forms>
		<button class="button" @click="submit">校验表单</button>
	</view>
</template>
<script>
export default {
	data() {
		return {
			formData:{
				
			},
			rules: {
				hobby: {
					rules: [{
						required: true,
						errorMessage: '请选择兴趣',
					},{
						validateFunction:function(rule,value,data,callback){
							if (value.length < 2) {
								callback('请至少勾选两个兴趣爱好')
							}
							return true
						}
					}]
				}
			}
		}
	},
	onReady() {
		// Need to set rules in onReady
		this.$refs.form.setRules(this.rules)
	},
	methods: {
		submit(form) {
			this.$refs.form.validate().then(res=>{
				console.log('表单数据信息：', res);
			}).catch(err =>{
				console.log('表单错误信息：', err);
			})
		}
	}
}
</script>
```

###  validateFunction asynchronous validation

The above custom verification method is synchronous verification. If asynchronous verification is required, `validateFunction` needs to return a `Promise`, and the verification does not return the corresponding error by executing `reject(new Error('error message'))` information, if the verification is passed, just execute `resolve()` directly. In the asynchronous verification method, you do not need to use `callback`.

```
<template>
	<view>
		<uni-forms :modelValue="formData" ref="form">
			<uni-forms-item name="age" label="年龄">
				<uni-easyinput v-model="formData.age" type="text" placeholder="请输入年龄" />
			</uni-forms-item>
		</uni-forms>
		<button class="button" @click="submit">校验表单</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			formData:{
				age:''
			},
			rules: {
				age: {
					rules: [{
						required: true,
						errorMessage: '请输入年龄',
					},{
						validateFunction: (rule, value, data, callback) => {
							// Async needs to return a Promise object
							return new Promise((resolve, reject) => {
								setTimeout(() => {
									if (value > 10 ) {
										// by returning resolve
										resolve()
									} else {
										// not by returning reject(new Error('error message'))
										reject(new Error('年龄必须大于十岁'))
									}
								}, 2000)
							})
						}
					}]
				}
			}
		}
	},
	onReady() {
		// Need to set rules in onReady
		this.$refs.form.setRules(this.rules)
	},
	methods: {
		/**
		 * 表单提交
		 * @param {Object} event
		 */
		submit() {
			uni.showLoading()
			this.$refs.form.validate().then(res => {
				uni.hideLoading()
				console.log('表单数据信息：', res);
			}).catch(err => {
				uni.hideLoading()
				console.log('表单错误信息：', err);
			})
		}
	}
}
</script>
```

###  Dynamic form validation

attention

-   After `uni-forms 1.4.0`, the way of using dynamic form validation has been updated, please distinguish and be compatible with the previous version of dynamic form validation.

It is mostly used in scenarios where the same field needs to be added multiple times, such as the need to dynamically create multiple domain names to participate in the verification.

1.  Define a variable in `formData` to accept multiple results for the same field.

```
dynamicFormData: {
	email: '',
	// There will be multiple results under the domains field
	domains: []
}
```

2.  Use the `rules` property of `uni-forms-item` to define validation rules for a single form field.

```
<uni-forms-item :label="item.label+' '+index" required
	:rules="[{'required': true,errorMessage: '域名项必填'}]" :key="item.id">
	...
</uni-forms-item>
```

3.  `name` needs to be specified dynamically. It is recommended to use the Array type for dynamic forms. The content is the call chain of the bound value from left to right. `['domains',index,'value']` is equivalent to `dynamicFormData.domains[index].value`

```
<uni-forms-item 
	required
	:label="item.label+' '+index" 
	:name="['domains',index,'value']"
	:rules="[{'required': true,errorMessage: '域名项必填'}]" 
	:key="item.id"
	>
	...
</uni-forms-item>
```

4.  The v-model of the component that needs to bind the value also needs to dynamically specify `dynamicFormData.domains[index].value`

```
<uni-forms-item 
	required
	:label="item.label+' '+index" 
	:name="['domains',index,'value']"
	:rules="[{'required': true,errorMessage: '域名项必填'}]" 
	:key="item.id"
	>
	<uni-easyinput v-model="dynamicFormData.domains[index].value" placeholder="请输入域名" />
</uni-forms-item>
```

**full example**

Template

Script

```
<uni-forms ref="dynamicForm" :rules="dynamicRules" :model="dynamicFormData">
	<uni-forms-item label="邮箱" required name="email">
		<uni-easyinput v-model="dynamicFormData.email" placeholder="请输入姓名" />
	</uni-forms-item>
	<template v-for="(item,index) in dynamicFormData.domains">
		<uni-forms-item :label="item.label+' '+index" required
			:rules="[{'required': true,errorMessage: '域名项必填'}]" :key="item.id"
			:name="['domains',index,'value']">
			<view class="form-item">
				<uni-easyinput v-model="dynamicFormData.domains[index].value" placeholder="请输入域名" />
				<button class="button" size="mini" type="default" @click="del(item.id)">删除</button>
			</view>
		</uni-forms-item>
	</template>

</uni-forms>
<view class="button-group">
	<button type="primary" size="mini" @click="add">新增域名</button>
	<button type="primary" size="mini" @click="submit('dynamicForm')">提交</button>
</view>

```

###  Form validation timing description

After `uni-forms 1.4.0`, `validateTrigger` can only be configured on `uni-forms`, and no longer supports independent control of the validation timing of each subform

If you need a separate validation timing for subforms, you can use the `rules` attribute of `uni-forms-item` in conjunction with `onFieldChange`

```

<template>
	<view>
		<uni-forms  ref="form" :modelValue="formData" validate-trigger="bind">
			<uni-forms-item name="age" label="年龄">
				<!-- The verification timing of uni-easyinput is when the data changes, that is, when the input is triggered -->
				<uni-easyinput v-model="formData.age" type="text" placeholder="请输入年龄" />
			</uni-forms-item>
			<uni-forms-item ref="input"  name="email" label="邮箱">
			 <!-- Input validation timing -->
				<input v-model="formData.email"  @blur="(e)=>$refs.input.onFieldChange($event.detail.value)" />
			</uni-forms-item>
			<button class="button" @click="submit">校验表单</button>
		</uni-forms>
	</view>
</template>

```

\[This rule no longer takes effect after 1.4.0\] For form validation timing, only one `validateTrigger` will work at the same time, and its effect weight is

**`rules > uni-forms-item > uni-forms`**

-   If `validateTrigger` is configured in the rule, the `validateTrigger` attribute in the rule will be used first to determine the timing of form validation
-   If `validateTrigger` is not configured in the rule, the `validateTrigger` attribute of `uni-forms-item` will be used first to determine the form validation timing
-   If `validateTrigger` is not configured in the `uni-forms-item` component, the `validateTrigger` attribute of `uni-forms` will be used first to determine the form validation timing
-   By analogy, if the `validateTrigger` attribute is not used, the default value of the `validateTrigger` attribute of `uni-forms` will be used to determine the form validation timing

##  API

###  Forms Props

| property name | type | default value | optional value | description | compatible description |
| --- | --- | --- | --- | --- | --- |
| model | Object | \- | \- | FormData | New in 1.4.0 |
| rules | Object | \- | \- | Form validation rules |  |
| validateTrigger | String | submit | bind/submit/blur | Form validation timing, blur is only valid in uni-easyinput | 1.4.0 added blur value |
| label-position | String | left | top/left | label position |  |
| label-width | String/Number | 75 | \- | label width in px |  |
| label-align | String | left | left/center/right | label centering |  |
| err-show-type | String | undertext | undertext/toast/modal | Form error message prompt method |  |
| border | Boolean | false | \- | Whether to display the grid line |  |
| value | Object | \- | \- | form data, compatible with vue2 | will be deprecated, please use model instead |
| modelValue | Object | \- | \- | form data, compatible with vue3 | will be deprecated, please use model instead |

###  Forms Events

| Event Name | Description |
| --- | --- |
| @validate | Triggered after any form item is validated, returns form validation information |

###  Forms Methods

| Method Name | Description | Compatibility Description |
| --- | --- | --- |
| setRules | Set form rules dynamically |  |
| validate | The method that validates the entire form will return a promise |  |
| validateField | Part of the form is validated |  |
| clearValidate | Remove the validation result of the form |  |
| submit | The method that validates the entire form will return a promise | will be deprecated, please use validate instead |
| setValue | Set the corresponding value of the name of an item in the form, usually used in uni-forms-item and custom form components | will be deprecated, please use onFieldChange to be compatible with related functions |
| resetFields | Reset the form, you need to change the `modelValue` property of `uni-forms` to `v-model` , and may not take effect for built-in components | 1.4.0 Deprecated |

###  validate(keepItem:Array,callback:Function) method description

The `validate` method is to verify the entire form, the method accepts two parameters

| parameter name | type | description |
| --- | --- | --- |
| keepItem | Array | Reserve fields that do not participate in validation |
| callback | Function | Verification complete return function |

After the verification is successful, the verification object only retains the field specified with `name` (as long as `uni-forms-item` binds `name`, it will return even if it is not verified), if you need to retain other fields, then Requires the `keepItem` attribute

```

<template>
	<view>
		<uni-forms  ref="form" :modelValue="formData">
			<uni-forms-item name="age" label="年龄">
				<uni-easyinput v-model="formData.age" type="text" placeholder="请输入年龄" />
			</uni-forms-item>
			
			<button class="button" @click="submit">校验表单</button>
		</uni-forms>
	</view>
</template>
<script>
export default {
	data() {
		return {
			formData:{
				age:''
			},
			rules: {
				// ...
			}
		}
	},
	onLoad(){
		this.formData.id = 'testId'
	},
	methods: {
		submit() {
			// In the onLoad life cycle, formData adds an id field. At this time, this field is checked without parameters, so it is not returned in the result.
			// In the validate(['id']) method, specify the first parameter to return the id field
			this.$refs.form.validate(['id'],(err,formData)=>{
				if(!err){
					console.log('success',formData)
				}
			})
		}
	}
}
</script>

```

The `validate` method can also return a `Promise` object. If `callback` is used, `Promise` returns `null`, and the `validate` method will take precedence over `callback`.

The `callback` method returns two return values:

-   The first return value is the verification result, if the verification fails, return the failure information, if successful, return `null`
-   The second return value check data

```

// use callback
// If you don't need the keepItem parameter, you can omit it
this.$refs.form.validate((err,formData)=>{
	// If the verification is successful, err returns null
	if(!err){
		console.log('success',formData)
		return
	}
	console.log('error',err)
}).then(res=>{
	// res returns null
})

// use Promises
// Validate the entire form and return a Promise
this.$refs.form.validate().then((res)=>{
	// Successfully returned, res is form data
	// ...
}).catch((err)=>{
	// Form validation failed, err is the specific error message
	// ...
})

```

###  setValue(name:String,value:any) method description

attention

-   Deprecated since uni-forms 1.4.0, use `onFieldChange` instead

The `setValue` method is usually used to verify the return value of built-in components or third-party components. Because components starting with uni such as `uni-esayinput` have built-in support for `uni-forms`, the values returned by these components can be used directly. However, for example, if the value of built-in components such as `input` changes, it cannot notify `uni-forms` in time, so it cannot be properly verified. At this time, we need to manually add these values to the verification of `uni-forms`.

The `setValue` method accepts two parameters:

-   name: the name corresponding to the form field
-   value: the value corresponding to the form field

```

<template>
	<view>
		<uni-forms  ref="form" :modelValue="formData">
			<uni-forms-item name="age" label="年龄">
				<input v-model="formData.age" @input="setValue('age',formData.age)">
			</uni-forms-item>
			<button class="button" @click="submit">校验表单</button>
		</uni-forms>
	</view>
</template>

<script>
export default {
	data() {
		return {
			formData:{
				age:''
			},
			rules: {
				// ...
			}
		}
	},
	methods: {
		setValue(name,value){
			// Set the corresponding value of a form item to trigger form validation
			// accepts two parameters, the first parameter is the name of the form field, and the second parameter is the value of the form field
			this.$refs.form.setValue(name,value)
		},
		submit() {
			this.$refs.form.validate(['id'],(err,formData)=>{
				if(!err){
					console.log('success',formData)
				}
			})
		}
	}
}
</script>

```

###  Other method description

```
// set the rules
this.$refs.form.setRules({
	//...
})

// Part of the form is verified, accepting a parameter, the type is String or Array, only the value of the incoming name form field is verified
this.$refs.form.validateField(['name', 'email']).then((res)=>{
	// Successfully returned, res is the corresponding form data
	// ...
}).catch((err)=>{
	// Form validation failed, err is the specific error message
	// ...
})

// Remove form validation, accept one parameter, the type is String or Array, only remove the value passed in the name form field, if no parameter is passed in, remove all
this.$refs.form.clearValidate(['name', 'email'])

```

###  FormsItem Props

| property name | type | default value | optional value | description | compatible description |
| --- | --- | --- | --- | --- | --- |
| name | String/Array | \- | \- | The attribute name of the form field, which is required when using the validation rule |  |
| rules | Object | \- | \- | Form validation rules |  |
| required | Boolean | false | \- | The right side of the label displays a red "\*" sign, the style display will not have an effect on the validation rules |  |
| label | String | \- | \- | Text prompt on the left side of the input box |  |
| label-width | Number | 70 | \- | The width of the label, in px |  |
| error-message | String | \- | \- | Display the error message content, if it is an empty string or false, the error message will not be displayed |  |
| label-align | String | left | left/center/right | label text alignment |  |
| label-position | String | left | top/left | label's text position | Deprecated in 1.4.0, the alignment of uni-forms is used uniformly |
| validateTrigger | String | submit | bind/submit | Form validation timing | Deprecated in 1.4.0, uniformly use uni-forms validation timing |
| left-icon | String | \- | \- | The icon on the left of the label, the name of the icon for uni-ui only | Deprecated in 1.4.0, please use the #label slot to realize the related function |
| icon-color | String | #606266 | \- | The color of the icon configured by icon on the left | Deprecated in 1.4.0, please use the #label slot for related functions |

###  FormsItem Methods

| Method Name | Description | Compatibility Description |
| --- | --- | --- |
| setRules | Set form rules dynamically |  |
| onFieldChange | Validator form | New in 1.4.0 |

###  FormsItem Slots

| Slot Name | Description |
| --- | --- |
| default | default slot |
| label | label slot, custom label display content |

##  example

attention

The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-forms) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.

Template

Script

Style

```
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-forms 组件一般由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<view class="example">
				<!-- Basic usage, excluding validation rules -->
				<uni-forms ref="baseForm" :modelValue="baseFormData">
					<uni-forms-item label="姓名" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required>
						<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="性别" required>
						<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label="兴趣爱好" required>
						<uni-data-checkbox v-model="baseFormData.hobby" multiple :localdata="hobbys" />
					</uni-forms-item>
					<uni-forms-item label="自我介绍">
						<uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
					<uni-forms-item label="日期时间">
						<uni-datetime-picker type="datetime" return-type="timestamp" v-model="baseFormData.datetimesingle"/>
					</uni-forms-item>
				</uni-forms>
			</view>
		</uni-section>

		<uni-section title="对齐方式" type="line">
			<view class="example">
				<view class="segmented-control">
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button">
					</uni-segmented-control>
				</view>
				<!-- show different arrangements -->
				<uni-forms ref="baseForm" :modelValue="alignmentFormData" :label-position="alignment">
					<uni-forms-item label="姓名" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required>
						<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</uni-section>

		<uni-section title="表单校验" type="line">
			<view class="example">
				<!-- Basic form validation -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
					<uni-forms-item label="姓名" required name="name">
						<uni-easyinput v-model="valiFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required name="age">
						<uni-easyinput v-model="valiFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="自我介绍" name="introduction">
						<uni-easyinput type="textarea" v-model="valiFormData.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('valiForm')">提交</button>
			</view>
		</uni-section>

		<uni-section title="自定义校验规则" type="line">
			<view class="example">
				<!-- Custom form validation -->
				<uni-forms ref="customForm" :rules="customRules" :modelValue="customFormData">
					<uni-forms-item label="姓名" required name="name">
						<uni-easyinput v-model="customFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required name="age">
						<uni-easyinput v-model="customFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="兴趣爱好" required name="hobby">
						<uni-data-checkbox v-model="customFormData.hobby" multiple :localdata="hobbys" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('customForm')">提交</button>
			</view>
		</uni-section>

		<uni-section title="动态表单" type="line">
			<view class="example">
				<!-- Dynamic form validation -->
				<uni-forms ref="dynamicForm" :rules="dynamicRules" :modelValue="dynamicFormData">
					<uni-forms-item label="邮箱" required name="email">
						<uni-easyinput v-model="dynamicFormData.email" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item v-for="(item,index) in dynamicLists" :key="item.id" :label="item.label+' '+index"
						required :rules="item.rules" :name="'domains[' + item.id + ']'">
						<view class="form-item">
							<uni-easyinput v-model="dynamicFormData.domains[item.id]" placeholder="请输入域名" />
							<button class="button" size="mini" type="default" @click="del(item.id)">删除</button>
						</view>
					</uni-forms-item>
				</uni-forms>
				<view class="button-group">
					<button type="primary" size="mini" @click="add">新增域名</button>
					<button type="primary" size="mini" @click="submit('dynamicForm')">提交</button>
				</view>
			</view>
		</uni-section>
	</view>
</template>
```

[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/forms/forms)
