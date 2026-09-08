---
title: "uni.addPhoneContact(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/system/contact.html
---
###  uni.addPhoneContact(OBJECT)

After calling, the user can choose to write the form into the address book of the mobile phone system in the way of "Add Contact" or “Add to Existing Contact" (there is no selection step on the APP side at present, and it will be written directly) so as to complete the addition of contacts and contact information in the mobile phone address book.

**Platform difference description**

| Mini App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| photoFilePath | String | No | Local file path of the avatar |
| nickName | String | No | Nick name |
| lastName | String | No | Last name |
| middleName | String | No | Middle name |
| firstName | String | Yes | First name |
| remark | String | No | Remark |
| mobilePhoneNumber | String | No | Phone number |
| weChatNumber | String | No | WeChat |
| addressCountry | String | No | Contact address country |
| addressState | String | No | Contact address province |
| addressCity | String | No | Contact address city |
| addressStreet | String | No | Contact address street |
| addressPostalCode | String | No | Contact address postal code |
| organization | String | No | Company |
| title | String | No | Position |
| workFaxNumber | String | No | Office fax |
| workPhoneNumber | String | No | Office phone |
| hostNumber | String | No | Company phone |
| email | String | No | e-mail |
| url | String | No | Website |
| workAddressCountry | String | No | Work address country |
| workAddressState | String | No | Work address province |
| workAddressCity | String | No | Work address city |
| workAddressStreet | String | No | Work address street |
| workAddressPostalCode | String | No | Work address postal code |
| homeFaxNumber | String | No | Home fax |
| homePhoneNumber | String | No | Home phone |
| homeAddressCountry | String | No | Residential address country |
| homeAddressState | String | No | Residential address province |
| homeAddressCity | String | No | Residential address city |
| homeAddressStreet | String | No | Residential address street |
| homeAddressPostalCode | String | No | Residential address postal code |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Callback result**

| Callback type | errMsg | Instruction |
| --- | --- | --- |
| success | ok | Addition successful |
| cancel | fail cancel | User cancellation operation |
| fail | fail ${detail} | If calling failed, add the detailed error information. |

**Example**

```
uni.addPhoneContact({
	nickName: 'nickName',
	lastName: 'lastName',
	firstName: 'firstName',
	remark: 'remark',
	mobilePhoneNumber: '114',
	weChatNumber: 'wx123',
	success: function () {
		console.log('success');
	},
	fail: function () {
		console.log('fail');
	}
});
```
