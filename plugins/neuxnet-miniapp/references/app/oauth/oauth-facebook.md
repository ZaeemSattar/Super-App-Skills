---
title: "Activation conditions"
source_url: https://miniapp.neuxnet.com/app/oauth/oauth-facebook.html
---
###  Activation conditions

1.  Overseas network environment
2.  Facebook account ([Facebook login page](http://www.facebook.com) )

###  Create application

1.  Open [Facebook Developer Center](http://developers.facebook.com/)
    
2.  Click "My Apps" in the upper right corner
    

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/9e3ba994-95b0-46d6-9e40-0c18b9fac5d3.png)

3.  Enter the application management interface and click "Create Application"

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/0d96a58b-e31d-4f86-9372-dd84249a498b.png)

4.  Select the type of application product according to your needs (for application type, please refer to "Learn more about application type"), and then click Continue

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a940cfc2-8e8c-44cf-9334-56cb282d4f52.png)

5.  Fill in the application information

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/57f5f5c0-27ca-4aa7-9e68-fb051c8afccb.png)

6.  After the creation is completed, the application number (ie appID) of the application can be obtained
    
7.  Add login functionality to the app
    

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/4e7ad147-e4ce-40eb-a1b0-2381bdc53813.png)

###  Setup Login - iOS

1.  My app--Settings--Basic, select Add platform, select iOS

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/cebc70d2-da0e-4708-9d05-d5f5d80de1ca.png)

2.  Fill in the information and save it

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/70038074-8c3a-4db8-99ab-49e14b951c79.png)

###  Setup Login - Android

My application - settings - basic, select add platform

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a8fe2779-1142-452b-a4b0-f4bd61695770.png)

Select the android platform, and the app store select Google Play

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/afa346b7-a001-47b1-9c7e-914074153ac3.png)

Fill in the necessary package name and hash information, the class name is fixed. As shown

How to get the hash, refer to the documentation: https://developers.facebook.com/docs/facebook-login/android Section 6

If the obtained hash digits are wrong, you need to find a linux/mac computer. keytool -exportcert -alias hbuilder -keystore ./HBuilder.keystore | openssl dgst -sha1 -binary | openssl base64

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/4c59adf0-cb40-41d7-95d4-e26102aeacd9.png)

###  App permissions

Login with Facebook requires access to "public\_profile" and "email" Click "App Review" - "Permissions and Features" to enable advanced access to "public\_profile" and "email"

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/28dac1d2-f714-4477-a5c8-dd2e1b894894.png)
