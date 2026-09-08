---
title: "form"
source_url: https://miniapp.neuxnet.com/component/form.html
---
####  form

Form, submit the `<switch>` `<input>` `<checkbox>` `<slider>` `<radio>` `<picker>` input by the user in the component.

When you click on the `<button>` component with the formType of submit in the `<form>` form, the value in the form component will be submitted, and the name must be added to the form component as the key.

**Attribute description**

| Attribute name | Type | Instruction |
| --- | --- | --- |
| @submit | EventHandle | Carrying the data in the form will trigger the submit event, event.detail = {value : {'name': 'value'} , formId: ''}, formId will only be returned when report-submit is true |  |
| @reset | EventHandle | The reset event will be triggered when the form is reset |  |

Template

Script

Style

```
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello Mini App project -->
<template>
	<view>
		<view>
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title">switch</view>
					<view>
						<switch name="switch" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">radio</view>
					<radio-group name="radio">
						<label>
							<radio value="radio1" /><text>
								1
								</text>
						</label>
						<label>
							<radio value="radio2" /><text>
								2x
								</text>
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">checkbox</view>
					<checkbox-group name="checkbox">
						<label>
							<checkbox value="checkbox1" /><text>1</text>
						</label>
						<label>
							<checkbox value="checkbox2" /><text>1</text>
						</label>
					</checkbox-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">slider</view>
					<slider value="50" name="slider" show-value></slider>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">input</view>
					<input class="uni-input" name="input" placeholder="test" />
				</view>
				<view class="uni-btn-v">
					<button form-type="submit">Submit</button>
					<button type="default" form-type="reset">Reset</button>
				</view>
			</form>
		</view>
	</view>
</template>
```
