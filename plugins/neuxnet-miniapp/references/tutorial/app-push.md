---
title: "App push — overview"
source_url: https://miniapp.neuxnet.com/tutorial/app-push.html
---
##  Overview

HBuilder|HBuilderX integrates common push platforms, including personal push push and Xiaomi push. From HBuilderX 1.7.2 version, it supports UniPush push service (supports Huawei, Xiaomi, OPPO, Meizu manufacturer push channels), to solve the problem that the APP cannot be pushed due to the killing of the three-party push process when the APP is offline, refer to \[UniPush User Guide\](http: //ask.dcloud.net.cn/article/35622).

**Push push function needs to configure the SDK parameters and submit the cloud package to take effect. If you want the real machine to take effect, please use the [custom base](http://ask.dcloud.net.cn/article/35115)**

###  usage notice

push is a usable but not dependable feature.

-   Android platform The Push channel cannot be relied upon. To save power, Android rom manufacturers will prohibit the push process from starting automatically, and the third-party cleaning software will kill the push process. It's not just a push, all apps from non-big manufacturers, apps that have not entered the whitelist of rom manufacturers and third-party cleanup software, may be killed no matter which push scheme is used. Of course, after integrating Xiaomi push, it will definitely not be killed on Xiaomi mobile phones, but the probability of being killed on other platforms may be higher. In essence, push is a function that is beneficial to developers but can easily cause user harassment and power consumption. Therefore, the actual use of push in most mainstream apps is pull-activated non-real-time activity push. If necessary, supplement the way of sending SMS notification. Regarding the third-party push service providers, in fact, after many years of development, the gap between technology and services is not large, and the core lies in the number of users, because the more SDKs are integrated, the more effective the keep-alive and nursing mechanisms will be. Judging from the data disclosed by companies such as Getui and Jiguang at the IPO, Getui still has the advantage.
-   iOS platform Mobile phone users have the right to close APP push voluntarily. If it is closed, they will not be able to receive push. **You can refer to [iOS platform to check whether to close the notification message and remind the user to turn on the notification message](https://ask.dcloud.net.cn/article/35727)**

###  Overall structure

![](http://www.dcloud.io/docs/a/push/architecture.png)

###  Push message type

There are usually two types of push messages:

-   Notification bar messages (push notifications) The push style and the push method of the follow-up action defined by the UniPush push service are displayed on the system notification bar after the client receives it. The user clicks the message in the notification bar to start the APP (activated to the foreground).
    
-   Transparent message That is, a custom message. The UniPush push service is only responsible for message delivery and does not do any processing. After receiving a transparent message, the client needs to handle the display method or follow-up action of the message by itself.
    

##  Handle push messages using 5+ APIs

Reference for using push service in uni-app applications: [http://ask.dcloud.net.cn/article/35726](http://ask.dcloud.net.cn/article/35726) .

###  Get the APP terminal ID

The [plus.push.getClientInfo](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.getClientInfo) method of the 5+ API should be called when the app is installed and run for the first time to get the client The terminal ID is submitted to the developer's business server to register the device, so that the device can be bound when the user logs in, and exclusive messages can be pushed to the logged-in user. The sample code is as follows:

```
document.addEventListener('plusready', function(){
	// Fired when the page loads
	var pinf = plus.push.getClientInfo();
	var cid = pinf.clientid;//客户端标识
}, false );
```

\*\*If the obtained cid is empty, it means that the client's registration with the push server has not been completed, and you can use setTimeout to delay retry. \*\*

###  Listen for push message events

Usually, the [plus.push.addEventListener](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.addEventListener) method of the 5+ API is called on the application entry page (home page) to listen for message events , process the response business logic of the message in the callback function, as shown in the following example:

```
//Listen to the system notification bar message click event
plus.push.addEventListener('click', function(msg){
	//The business logic code that handles the click message
}, false);
//Listen to receive transparent message event
plus.push.addEventListener('receive', function(msg){
	//Business logic code for processing transparent messages
}, false);
```

The parameter msg to start the callback function is the [PushMessage](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) object, which saves the title, content, Custom data (payload), etc.

Push messages include the following event types:

-   click When the user clicks the message in the system notification bar, the APP starts or activates to run in the foreground, triggering the click event.
-   receive When the client receives a transparent message (the message is not displayed in the system notification bar), the receive event is triggered.

**NOTE: SPECIAL CASE**

-   Android platform The transparent transmission message sent by the push server conforms to the following json format:

```
{title:"标题",content:"内容",payload:"自定义数据"}
```

, it will be processed as a normal push notification, create a message in the system notification bar, click the message to activate the APP and trigger the "click" event.

-   iOS platform If the application is running in the foreground and listens to the "receive" event, the "receive" event will be triggered when it receives a message from the APNs channel. At this time, you can obtain the aps attribute value in the callback parameter PushMessage object to determine whether it is a message sent by APNs.

```
// Listen for online message events
plus.push.addEventListener( "receive", function( msg ) {
	if ( msg.aps ) {  // Apple APNS message
		//The message sent by APNS is applied in the foreground
	} else {
		//Other cases receive messages
	}
	//other logic
}, false );
```

###  Notification bar message operation

The 5+ Push module also provides a series of API operating system notification bars to meet the needs of relatively rare business scenarios.

-   clear message The 5+ API provides the plus.push.clear method, which can be used to clear all messages belonging to the current application in the system notification bar. The sample code is as follows:

```
plus.push.clear();
```

-   Create local messages If the developer needs to create a local message in the business logic, he can call the [plus.push.createMessage](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.createMessage) interface, and can specify the message The title of the message, the time to display the message, or the use of delay time. The sample code is as follows:

```
var options = {cover:false};  
var str = dateToStr(new Date());  
str += ": 欢迎使用Html5 Plus创建本地消息！";  
plus.push.createMessage(str, "LocalMSG", options);  
```

\*\*The creation of a local message on the iOS platform will also trigger the monitored "receive" event. In this case, special parameters need to be added to identify the locally created message. \*\* \`\`\` // Listen for online message events plus.push.addEventListener( "receive", function( msg ) { if ( msg.aps ) { // Apple APNS message //The message sent by APNS is applied in the foreground } else if ( 'LocalMSG' == msg.payload ) { // special payload identifies locally created messages // Locally created messages, usually do not need to be processed //Note: Do not call plus.push.createMessage again in this case, causing a loop to create local messages } else { //Receive the online transparent transmission message } //other logic }, false ); \`\`\`

-   Get all messages You can call [plus.push.getAllMessage](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.getAllMessage) to get all the messages belonging to the current application in the system notification bar. The sample code is as follows:

```
var msgs = plus.push.getAllMessage();
for(var i in msgs){  
    var msg = msgs[i];  
    console.log( i+": "+msg.title+" - "+msg.content );  
}
```

\*\*The iOS platform does not support getting system notification bar messages and returns an empty array. \*\*

##  Push platform application

Before using push, you need to apply for an application to the push platform and obtain push parameters (which need to be configured when submitting cloud packaging), such as appid, appkey, etc.

###  Tweets

Log in to Getui [Message Push Open Platform](https://dev.getui.com/) : If you have already applied for a Getui message push application, open the "Gitui·Message Push" page, find the applied application in the application list, click "App Configuration" to open the application information page, and you can get the AppID, AppKey, AppSecret of Getui and other information. If you have not applied for an app before, open the "[App Management](https://dev.getui.com/dev/#/appManage) " page and select "Create App" to apply for a new app. After the application is successful, you can obtain the AppID through the above method. , AppKey, AppSecret and other parameters.

**For questions related to the push platform, you can directly consult the customer service of the push platform, corporate QQ: 2880983159. You can also ask @[getui\_johny](http://ask.dcloud.net.cn/people/getui_johny)**

###  Xiaomi push

Log in to the [Xiaomi Open Platform](https://dev.mi.com/console/) , go to the "[Management Console](https://dev.mi.com/console/man/) " page, in the "Application In the "Service" column, select "Message Push" and open the [Push Operation Platform](http://admin.xmpush.xiaomi.com/zh_CN/app/nav) : If you have applied for an application on the Xiaomi Open Platform, click the "App Information" button of the corresponding application in the application list to open the application information page to view the AppID, AppKey, AppSecret and other information pushed by Xiaomi; if the application does not have the push service enabled, click "Enable Push" button to apply for activation. If you have not applied for an app, click the "Create App" button in the upper left corner of the page to create a new app. After the creation is successful, he will use the above method to "enable the push" function and obtain the AppID, AppKey, AppSecret and other parameters pushed by Xiaomi. **Xiaomi push needs to create two apps for Android and iOS platforms respectively**

##  Cloud package configuration

Before submitting cloud packaging in HBuilder|HBuilderX, you need to configure the parameters of the Push module in the manifest.json file.

###  1. Module configuration,

Open the manifest.json file of the application, select the "Module Permission Configuration" item, and check "Push (message push)", as shown in the following figure: ![Push (message push)-module permission configuration](http://www.dcloud.io/docs/a/push/x_s1.png)

###  2. SDK parameter configuration

Open the manifest.json file of the application, select the "SDK Configuration" item, select the push platform used by the application, and enter the configuration parameters obtained from the application for this push platform, as shown in the following figure: ![Push (message push)-SDK configuration](http://www.dcloud.io/docs/a/push/x_s2.png)

**When the Android platform is packaged in the cloud, you need to confirm that the app package name filled in is the same as the package name filled in when the app was created on the push platform** **When packaging the iOS platform in the cloud, the Bundle ID (Apple AppID) filled in by the packaging person must be consistent with the AppID contained in the APS certificate submitted to the push platform**

##  common problem

**1\. Why can't I receive the push message when the real machine is running** A: If you need to test the push function, you need to use the HBuilder cloud package to generate the installation package for testing.

**2\. Why is the push message to Android platform not displayed in the message center** A: If the message pushed to the Android platform is a transparent message, and the format does not conform to the specification, the receive event of the monitoring page will be triggered, and the message will not enter the message center.

\*\*3. The "receive" event is triggered when a local message is created locally on the IOS platform, how to distinguish it from the message sent by the server. \*\* Answer: When creating IOS local messages, users can add special tags to the "payload" node to distinguish the messages

**4\. How to configure push message icon on Android platform** Answer: Refer to [https://ask.dcloud.net.cn/article/35537](https://ask.dcloud.net.cn/article/35537)
