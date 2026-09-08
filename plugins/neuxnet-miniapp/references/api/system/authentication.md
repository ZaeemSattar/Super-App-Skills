---
title: "Biometric authentication instructions"
source_url: https://miniapp.neuxnet.com/api/system/authentication.html
---
###  Biometric authentication instructions

Biological authentication, also known as in vivo detection. It includes fingerprint recognition and face recognition. That is, carry on the identity authentication recognition through human body characteristics.

###  uni.startSoterAuthentication(OBJECT)

Start the SOTER biometric authentication.

**Platform difference description**

| App | H5 |
| --- | --- |
| √ | x |

**OBJECT parameter description**

| Properties | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| requestAuthModes | Array |  | Yes | Acceptable biometric authentication methods used by the request | Mini App |
| authContent | String | '' | No | Authentication description, that is, the dialog prompt content displayed on the interface during the recognition process | Mini App |
| success | Function |  | No | Callback function for successful interface call |  |
| fail | Function |  | No | Callback function for interface call failure |  |
| complete | Function |  | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |  |

**OBJECT.requestAuthModes description**

| Value | Instruction |
| --- | --- |
| fingerPrint | Fingerprint identification |
| facial | Face identification |

**Description of return value of OBJECT.success**

| Properties | Type | Description |
| --- | --- | --- |
| authMode | string | Biometric authentication method |
| errCode | number | Error code |
| errMsg | string | Error message |

**resultJSON description**

This data is JSON assembled from the incoming challenge and other security information in the TEE in the device TEE. The following table explains the following fields. Examples are as follows:

| Field Name | Description |
| --- | --- |
| raw | challenge passed in by the caller |
| fid | (Only supported by Android) The biometric information number of this biometric authentication (for fingerprint recognition, the fingerprint information is the internal number of the device) |
| counter | Anti-replay feature parameter |
| tee\_n | TEE name (such as Qualcomm or trustonic, etc.) |
| tee\_v | TEE version number |
| fp\_n | Fingerprint and related logic module providers (such as FPC, etc.) |
| fp\_v | fingerprint and related module version numbers |
| cpu\_id | Machine Unique ID |
| uid | The concept is the same as the Android system definition uid, that is, the application number |

**Error code description**

| Error code | Error code description |
| --- | --- |
| 0 | Identification successful |
| 90001 | This device does not support biometric authentication. |
| 90002 | The user is not authorized to use the biometric authentication interface |
| 90003 | The requested biometric authentication method is not supported |
| 90004 | No challenge was passed in or the length of the challenge is too long (the maximum length is 512 characters) |
| 90005 | auth\_content length exceeds the limit (the maximum is 42 characters) |
| 90007 | Internal error |
| 90008 | User authorization cancellation |
| 90009 | Identification failed |
| 90010 | Blocked due to too many retries |
| 90011 | User has not entered the selected identification method. |

###  uni.checkIsSupportSoterAuthentication(OBJECT)

Obtain the supported SOTER biometric authentication mode

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Description of return value of OBJECT.success**

| Attribute | Type | Instruction |
| --- | --- | --- |
| supportMode | Array | Biometrics supported by this device that can be recognized by SOTER |

###  uni.checkIsSoterEnrolledInDevice(OBJECT)

Interface for requesting whether biological information such as fingerprints are entered in the device

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| checkAuthMode | string |  | Yes | Verification method |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**OBJECT.checkAuthMode legal values**

| Value | Instruction |
| --- | --- |
| fingerPrint | Fingerprint identification |
| facial | Face identification |

**Description of return value of OBJECT.success**

| Attribute | Type | Instruction |
| --- | --- | --- |
| isEnrolled | boolean | Whether the information has been entered |
| errMsg | string | Error message |

####  Code example

```

<template>
	<view class="content">
		<button type="primary" @click="checkIsSupportSoterAuthentication">检查支持的认证方式</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFingerPrint">检查是否录入指纹</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFaceID">检查是否录入FaceID</button>
		<button type="primary" @click="startSoterAuthenticationFingerPrint">开始指纹认证</button>
		<button type="primary" @click="startSoterAuthenticationFaceID">开始FaceID认证</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
			checkIsSupportSoterAuthentication() {
				uni.checkIsSupportSoterAuthentication({
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			},
			checkIsSoterEnrolledInDeviceFingerPrint() {
				uni.checkIsSoterEnrolledInDevice({
					checkAuthMode: 'fingerPrint',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			},
			checkIsSoterEnrolledInDeviceFaceID() {
				uni.checkIsSoterEnrolledInDevice({
					checkAuthMode: 'facial',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			},
			startSoterAuthenticationFingerPrint() {
				uni.startSoterAuthentication({
					requestAuthModes: ['fingerPrint'],
					challenge: '123456',
					authContent: '请用指纹解锁',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			},
			startSoterAuthenticationFaceID() {
				uni.startSoterAuthentication({
					requestAuthModes: ['facial'],
					challenge: '123456',
					authContent: '请用FaceID解锁',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style>
	button {
		width: 200px;
		margin: 20px auto;
	}
</style>

```
