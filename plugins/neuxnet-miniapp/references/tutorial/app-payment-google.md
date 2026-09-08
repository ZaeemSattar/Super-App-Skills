---
title: "Apply for Google Pay"
source_url: https://miniapp.neuxnet.com/tutorial/app-payment-google.html
---
####  Apply for Google Pay

1.  Register a Google account.
    
2.  Open [Google Pay | Google Developers](https://developers.google.com/pay) and log in to your Google account.
    
3.  Go to the console [Sign up: Google Pay's Business Console](https://pay.google.com/business/console/?pli=1) and set the business name. As shown in the figure: ![image-20220110010505156](https://native-res.dcloud.net.cn/images/uniapp/payment/googlepay_register_business.png)
    
4.  After the setting is complete, go to the console page and set the corresponding business information. ![image-20220110011030589](https://native-res.dcloud.net.cn/images/uniapp/payment/googlepay_merchants_setup.png)
    
5.  When the official version needs to be launched, the signature key fingerprint of the app needs to be consistent with the release key fingerprint registered with `Google Play`.
    

* * *

####  Pay with Google

**Environmental requirements**

1.  Overseas network environment.
2.  Make sure your Android device has Google Play services version 18.0.0 or higher.

**Payment parameters** ​ Google Pay is divided into two types: `CARD`, `PAYPAL` payment methods, and the configuration of different payment methods is not the same, please refer to \[Google Pay Official Field Description\](https://developers.google.com/pay /api/android/reference/request-objects?authuser=1#PaymentMethod)

1.  `CARD` payment

| Parameter Name | Parameter Description | Required |
| --- | --- | --- |
| environment | environment(1:production 3:test) | yes |
| paymentMethodType | Payment Method (CARD, PAYPAL) | Yes |
| existingPaymentMethodRequired | If set to true, the isReadyToPay method will return true. | No |
| currencyCode | Unit of currency (ISO 4217) | Yes |
| countryCode | Unit of currency used in the EEA | Required in the EEA |
| transactionId | Transaction id | Required when you want to receive googlepay callback |
| totalPriceStatus | Price Status (NOT\_CURRENTLY\_KNOWN, ESTIMATED, FINAL) | Yes |
| totalPrice | Total Price | Yes |
| totalPriceLabel | Price displayed | No |
| checkoutOption | Configurations that affect payment button display (DEFAULT, COMPLETE\_IMMEDIATE\_PURCHASE) | No |
| merchantName | Merchant Name | No |
| emailRequired | Email Required | No |
| shippingAddressRequired | Required address | No |
| shippingPhoneNumberRequired | Does the shipping address require a phone number | No |
| allowedCountryCodes | Allowed country codes. | No |
| allowedAuthMethods | Supported Authentication | Yes |
| allowedCardNetworks | Supported Card Types (AMEX, DISCOVER, INTERAC, JCB, MASTERCARD, VISA) | Yes |
| allowPrepaidCards | Whether Prepaid Cards Are Supported | No |
| allowCreditCards | Whether credit cards are supported | no |
| assuranceDetailsRequired | Required Payment Credentials | No |
| billingAddressRequired | Required Billing Address | No |
| billingAddressParametersFormat | Billing Address Format (MIN, FULL) | No |
| phoneNumberRequired | Phone number is required to process transaction | No |
| tokenizationSpecificationType | The token type of the payment method (PAYMENT\_GATEWAY and DIRECT are supported when the payment method is CARD. Only DIRECT is supported when the payment method is PayPal) | Yes |
| gateway | Payment Gateway[Details](https://developers.google.com/pay/api/android/reference/request-objects?authuser=1#PaymentDataRequest) | Required when `tokenizationSpecificationType` is `PAYMENT_GATEWAY` |
| gatewayMerchantId | The merchant id of the payment gateway | Required when `tokenizationSpecificationType` is `PAYMENT_GATEWAY` |
| protocolVersion | Encryption protocol version | Required when `tokenizationSpecificationType` is `DIRECT` |
| publicKey | Public key | Required when `tokenizationSpecificationType` is `DIRECT` |
| buildTokenizationSpecification | Customize the constructed tokenizationSpecification parameter. When this field is set, the `tokenizationSpecificationType`, `gateway`, `gatewayMerchantId`, `protocolVersion`, `publicKey` fields will be overwritten. (HBuilderX 3.5.1+ support) | No |

2.  `PAYPAL` payment

| Parameter Name | Parameter Description | Required |
| --- | --- | --- |
| environment | environment(1:production 3:test) | yes |
| paymentMethodType | Payment Method (CARD, PAYPAL) | Yes |
| existingPaymentMethodRequired | If set to true, the isReadyToPay method will return true. | No |
| currencyCode | Unit of currency (ISO 4217) | Yes |
| countryCode | Unit of currency used in the EEA | Required in the EEA |
| transactionId | Transaction id | Required when you want to receive googlepay callback |
| totalPriceStatus | Price Status (NOT\_CURRENTLY\_KNOWN, ESTIMATED, FINAL) | Yes |
| totalPrice | Total Price | Yes |
| totalPriceLabel | Price displayed | No |
| checkoutOption | Configurations that affect payment button display (DEFAULT, COMPLETE\_IMMEDIATE\_PURCHASE) | No |
| merchantName | Merchant Name | No |
| emailRequired | Email Required | No |
| shippingAddressRequired | Required address | No |
| shippingPhoneNumberRequired | Does the shipping address require a phone number | No |
| allowedCountryCodes | Allowed country codes. | No |
| merchant | PayPal's merchant id | yes |

####  Example

```

plus.payment.getChannels((providers) => {
					let provider = providers.find(function(e) {
						return e.id === "google-pay";
					});

					let paymentMethodType = "CARD";
					
					let cardPaymentMethodConfig = {
						environment: 3, // 必填 1 是product  3是test
						paymentMethodType: paymentMethodType, //必填 CARD、PAYPAL
						existingPaymentMethodRequired: false, //可选 如果设置为true同时已经准备好了支付allowedPaymentMethods中的付款方式，isReadyToPay就会返回true。
					
						currencyCode: "USD", //必填
						countryCode: "US", //在欧洲经济区必填
						transactionId: "", //当你想要接收googlepay回调的时候必填
						totalPriceStatus: "FINAL", //必填  NOT_CURRENTLY_KNOWN、ESTIMATED、FINAL
						totalPrice: "111.00", //必填 满足正则格式^[0-9]+(\.[0-9][0-9])?$
						totalPriceLabel: "100heelo", //可选
						checkoutOption: "DEFAULT", //可选 DEFAULT、COMPLETE_IMMEDIATE_PURCHASE
					
						merchantName: "Example Merchant", //可选
						emailRequired: true, //可选
						shippingAddressRequired: true, //可选
						shippingPhoneNumberRequired: false, //可选
						allowedCountryCodes: ["US", "GB"], //可选
						allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"], //必填
						allowedCardNetworks: ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"], //必填
						// allowCreditCards: false, // optional
						assuranceDetailsRequired: false, //可选
						billingAddressRequired: true, //可选
						billingAddressParametersFormat: "FULL", //可选 MIN
						phoneNumberRequired: false, //可选
						tokenizationSpecificationType: "PAYMENT_GATEWAY", //必填 PAYMENT_GATEWAY、DIRECT
						gateway: "example", //PAYMENT_GATEWAY时必填
						gatewayMerchantId: "exampleGatewayMerchantId", //PAYMENT_GATEWAY时必填
						protocolVersion: "", //DIRECT时必填
						publicKey: "", //DIRECT时必填
            buildTokenizationSpecification:{//可选，此字段是为了方便开发者自定义构造tokenizationSpecification参数,设置此字段时，会覆盖掉`tokenizationSpecificationType`、`gateway`、`gatewayMerchantId`、`protocolVersion`、`publicKey`字段。(HBuilderX 3.5.1+支持)
							"type":"PAYMENT_GATEWAY",
							"parameters":{
								"gateway":"custom-gateway",
								"gatewayMerchantId":"mock-gatewayMerchantId"
							}
						}
					};
					

					let paypalPaymentMethodConfig = {
						environment: 3, // 必填 1 是product  3是test
						paymentMethodType: paymentMethodType, //必填 CARD、PAYPAL
						existingPaymentMethodRequired: false, //可选 如果设置为true同时已经准备好了支付allowedPaymentMethods中的付款方式，isReadyToPay就会返回true。

						currencyCode: "USD", //必填
						countryCode: "US", //在欧洲经济区必填
						transactionId: "", //当你想要接收googlepay回调的时候必填
						totalPriceStatus: "FINAL", //必填  NOT_CURRENTLY_KNOWN、ESTIMATED、FINAL
						totalPrice: "111.00", //必填 满足正则格式^[0-9]+(\.[0-9][0-9])?$
						totalPriceLabel: "100heelo", //可选
						checkoutOption: "DEFAULT", //可选 DEFAULT、COMPLETE_IMMEDIATE_PURCHASE

						merchantName: "Example Merchant", //可选
						emailRequired: true, //可选
						shippingAddressRequired: true, //可选
						shippingPhoneNumberRequired: false, //可选
						allowedCountryCodes: ["US", "GB"], //可选
						merchantId: "MVHSBANAS6KSE", //必填
					};

					let statement;

					if (paymentMethodType === "CARD") {
						statement = {
							...cardPaymentMethodConfig
						};
					} else {
						statement = {
							...paypalPaymentMethodConfig
						};
					}

					console.log(JSON.stringify(statement));

					plus.payment.request(provider, statement, (result) => {
						console.log("支付成功 :" + JSON.stringify(result));
					}, (e) => {
						console.log("支付失败： " + JSON.stringify(e));
					})
				});

```
