---
title: "Native js — overview"
source_url: https://miniapp.neuxnet.com/tutorial/native-js.html
---
##  Overview

Native.js technology, or NJS for short, is a technology for escaping the native objects of the mobile phone operating system, mapping them to JS objects, and writing native code in JS. If Node.js extends js to the server world, then Native.js extends js to the native world of mobile apps. There are only more than 70,000 HTML/JS/Css grammars, and hundreds of thousands of native grammars. Native.js has greatly improved the capabilities of HTML5. NJS breaks through the functional limitations of browsers, and no longer requires plug-ins developed in native languages like Hybrid to make up for the lack of browser functions. The code written by NJS needs to be packaged and released as an App installation package in HBuilder, or run in a browser that supports Native.js technology. At present, Native.js technology cannot run directly in ordinary mobile phone browsers.

-   NJS greatly expands the capabilities of HTML5, and functions that were originally only available in native or native plugins of Hybrid App can now be implemented using JS.
-   NJS has greatly improved the efficiency of App development. The App that can be completed by a team of three engineers of iOS, Android, and Web can be completed by one web engineer.
-   NJS no longer needs to configure the native development and compilation environment, debugging and packaging are all carried out in HBuilder. No mac can develop iOS apps like xcode.
-   If you are not familiar with the native API, it does not matter, we have compiled a lot of NJS code examples, copy and paste can be used. [http://ask.dcloud.net.cn/article/114](http://ask.dcloud.net.cn/article/114)

Again, Native.js is not a js library. It does not need to download scripts introduced into the page, nor does it have a separate running environment like nodejs. The running environment of Native.js is integrated in 5+runtime and packaged with HBuilder. Your app or streaming app can use Native.js directly.

##  Precautions:

Uni-app does not support Native.js API calls for UI-related operations and webview-related API calls. will be invalid and cannot be used normally. Native.js is deprecated for Uni-app

###  skills requirement

Since NJS directly calls the Native API, you need to have a certain understanding of the Native API, know which native APIs are called by the required functions, and be able to understand the native code and refer to the native code to modify it into JS code. Otherwise, you can only directly copy the NJS code written by others.

##  start using

###  Judgment Platform

Native API is platform-dependent, so the current running platform needs to be judged in the following ways:

```
function judgePlatform(){
	switch ( plus.os.name ) {
		case "Android":
		// Android platform: plus.android.*
		break;
		case "iOS":
		// iOS platform: plus.ios.*
		break;
		default:
		// other platforms
		break;
	}
}
```

###  Type conversion

Data types are automatically converted when calling the Native API in NJS or returning data from the Native API to NJS.

####  Type conversion table

| Types | Objective-C | Java | JavaScript |
| --- | --- | --- | --- |
| basic data | byte/short/int/long/float/double/... | byte/short/int/long/float/double/... | Number |
| char | char | char | String |
| String | NSString/@"" | String/"" | String |
| Array | @\[1,2,3\]/NSArray | new XXX\[\] | InstanceObject |
| class | @interface | class | ClassObject |
| Object (Instance) | \* | \* | InstanceObject |
| empty object | nil | null | null |
| Others | Protocol | Interface | Object(JSON) |

###  Other conversions

-   The main Activity object of the Android native application is converted to plus.android.runtimeMainActivity() The main Activity object of Android is automatically created when the application is started, not created by code. At this time, the Activity object is obtained through the plus.android.runtimeMainActivity() method.
-   Objective-C method colon removal \[pos setPositionX:(int)x Y:(int)y;\] to pos.setPositionXY(x,y); The definition format of a method in OC syntax is: "(return value type) function name: (parameter 1 type) formal parameter 1 parameter 2 name: (parameter 2 type) formal parameter 2" The full name of the method is: "function name: parameter 2 name:". For example: "(void)setPositionX:(int)x Y:(int)y;", the full name of the method is "setPositionX:Y:", and the syntax is: "\[pos setPositionX:x Y:y\];" . In the JS syntax, the function name cannot contain the ":" character, so when the method name of the OC object is mapped to the method name of the NJS object, the ":" character is automatically deleted. The above method name is mapped to "setPositionXY". The syntax of the NJS call is: "pos.setPositionXY(x,y);".
-   file path conversion The image/1.png used in web development is the relative path of the web project, and the native API often needs to use an absolute path, such as /sdcard/apptest/image/1.png, at this time use this extension method to complete the conversion: plus.io.convertLocalFileSystemURL("image/1.png")

###  concept

####  class object

Since there is no concept of class in JavaScript, in order to use the class of the Native API layer, the concept of class object (ClassObject) is introduced in NJS, which is used to operate the class in Native, such as creating an instance object of a class, accessing the class object. Static properties, calling static methods of a class, etc. Its prototype is as follows:

```
Interface ClassObject {
    function Object plusGetAttribute( String name );
    function void plusSetAttribute( String name, Object value );
}
```

**Get class object** On the iOS platform, we can import the class object through the plus.ios.importClass(name) method, and the parameter name is the name of the class; on the Android platform, we can import the class object through the plus.android.importClass(name) method, and the parameter name is the class , which must contain the full namespace.

**Example:**

```
// Import NSNotificationCenter class for iOS platform
var NSNotificationCenter = plus.ios.importClass("NSNotificationCenter");

// The Android platform imports the Intent class
var Intent = plus.android.importClass("android.content.Intent");
```

After obtaining the class object, you can obtain the static constant attribute of the class and call the static method of the class through the class object "." operator. The static non-constant attribute of the class needs to be operated through the plusGetAttribute and plusSetAttribute methods.

####  instance object

In JavaScript, all objects are Objects. In order to operate the instance objects of the Native layer class, the concept of instance objects (InstanceObject) is introduced in NJS, which is used to operate objects in Native, such as operating the properties of objects, calling objects method etc. Its prototype is as follows:

```
Interface InstanceObject {
    function Object plusGetAttribute( String name );
    function void plusSetAttribute( String name, Object value );
}
```

**Get instance object** There are two ways to obtain the instance object of the class, one is to call the Native API to return the value, and the other is to create an instance of the imported class object through the new operator, as follows:

```
// Import NSDictionary class for iOS platform
var NSDictionary = plus.ios.importClass("NSDictionary");
// Create an instance object of NSDictionary
var ns = new NSDictionary();

// The Android platform imports the Intent class
var Intent = plus.android.importClass("android.content.Intent");
// Create an instance object of the Intent
var intent = new Intent();
```

After obtaining the instance object, you can use the instance object "." operator to obtain the constant attribute of the object and call the member method of the object. The non-const attribute of the instance object needs to be operated through the plusGetAttribute and plusSetAttribute methods.

####  Attribute methods of operation objects

-   constant properties After obtaining the object, you can obtain the constant attribute of the object through the "." operator. If it is a class object, it will obtain the static constant attribute of the class. If it is an instance object, it will obtain the member constant attribute of the object.
    
-   Non-constant properties If the attribute value of the native layer object is changed in the native environment, the attribute value of the corresponding NJS object obtained by using the "." operator may not be the real-time attribute value, but the native layer object is mapped to the NJS object. A moment's attribute value. In order to obtain the real-time attribute value of the native layer object, you need to call the plusGetAttribute(name) method of the NJS object, the parameter name is the name of the attribute, and the return value is the value of the attribute. Call the plusSetAttribute(name, value) method of the NJS object to set the non-constant attribute value of the Native layer object. The parameter name is the name of the attribute, and the value is the new attribute value to be set. `Note: You can also use the plusGetAttribute(name) method to obtain the constant attribute value of the Native layer object, but it is not as efficient as directly using the "." operator to obtain the value.`
    
-   method After obtaining the object, you can directly call the native layer method through the "." operator. If it is a class object, it calls the static method of the native layer class, and if it is an instance object, it calls the member method of the native layer object. `Note: Due to the JS syntax on the iOS platform, the ":" character in the Objective-C method name will be ignored after it is converted into the method name of the NJS object, so the method name called in NJS needs to remove all ":" character.`
    
-   class inheritance If there is a class in Objective-C and Java that inherits from the base class, the corresponding object in NJS will recursively replace all the public methods of the base class with the methods of the NJS object one by one according to the inheritance relationship, and all the public properties of the base class can also be passed through Its plusGetAttribute, plusSetAttribute method access.
    

###  Start writing NJS

Using NJS to call Native API is very simple, the basic steps are as follows:

1.  Import the class to be used;
2.  Create an instance object of the class (or call the static method of the class to create);
3.  Call the method of the instance object;

The following example uses NJS to call iOS and Android's native popup prompts (similar to but different from js's alert).

####  Android

The following code displays the system prompt box by calling the Native API on the Android platform. The first is the Android native Java code for comparison reference:

```
import android.app.AlertDialog;
//...
// Create a prompt box construction object, Builder is the inner class of AlertDialog. The parameter this refers to the main Activity object of Android, which is automatically generated when the application is started.
AlertDialog.Builder dlg = new AlertDialog.Builder(this);
// set the prompt box title
dlg.setTitle("自定义标题");
dlg.setTitle("custom title");
// set the prompt box content
dlg.setMessage("使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
dlg.setMessage("Using NJS's native popup box, you can customize the title and button of the popup box");
// set the prompt box button
dlg.setPositiveButton("确定(或者其他字符)", null);
dlg.setPositiveButton("OK (or other character)", null);
// show tooltip
dlg.show();
//...
```

Native.js code:

```
/**
 * 在Android平台通过NJS显示系统提示框
 * Display system prompt box through NJS on Android platform
 */
function njsAlertForAndroid(){
	// Import the AlertDialog class
	var AlertDialog = plus.android.importClass("android.app.AlertDialog");
	// Create a prompt box construction object. The constructor needs to provide the global environment object of the program, which is obtained through the plus.android.runtimeMainActivity() method
	var dlg = new AlertDialog.Builder(plus.android.runtimeMainActivity());
	// set the prompt box title
	dlg.setTitle("自定义标题");
	dlg.setTitle("custom title");
	// set the prompt box content
	dlg.setMessage("使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
	dlg.setMessage("Using NJS's native popup box, you can customize the title and button of the popup box");
	// set the prompt box button
	dlg.setPositiveButton("确定(或者其他字符)",null);
	dlg.setPositiveButton("OK (or other characters)",null);
	// show tooltip
	dlg.show();
}
//...
```

`Note: Creating a prompt box construction object in the NJS code requires passing in the program global environment object. You can obtain the main Activity object of the application through the plus.android.runtimeMainActivity() method, which is the program global environment object automatically created during the HTML5+ application runtime.`

Running renderings on Android devices: ![Android Native.js example running renderings](http://www.dcloud.io/docs/a/njs/android_alert.png) \`Note: In fact, the HTML5+ specification has encapsulated the native prompt box message API: plus.ui.alert( message, alertCB, title, buttonCapture). The example of NJS here is only for the convenience of developers to understand. In actual use, calling plus.ui.alert is simpler and has higher performance. \*\*

####  iOS

The following code shows calling the Native API to display the system prompt dialog box on the iOS platform. iOS native Objective-C code for comparison reference:

```
#import <UIKit/UIKit.h>
//...
// Create an instance object of the UIAlertView class
UIAlertView *view = [UIAlertView alloc];
// Set the content on the prompt dialog
[view initWithTitle:@"custom title" // prompt box title
    message:@"Using the native pop-up box of NJS, you can customize the title and button of the pop-up box" // The content displayed on the prompt box
    delegate:nil // The notification proxy object after clicking the prompt box, nil is similar to the null of js, which means not set
    cancelButtonTitle:@"OK (or other characters)" // The text of the cancel button on the prompt box
    otherButtonTitles:nil]; // The text of other buttons on the prompt box, set to nil means not displayed
// Call the show method to display the prompt dialog, and use the [] syntax to call the method of the object in OC
[view show];
//...
```

Native.js code:

```
/**
 * 在iOS平台通过NJS显示系统提示框
 * Display system prompt box through NJS on iOS platform
 */
function njsAlertForiOS(){
	// Import UIAlertView class
	var UIAlertView = plus.ios.importClass("UIAlertView");
	// Create an instance object of the UIAlertView class
	var view = new UIAlertView();
	// Set the content on the prompt dialog
	view.initWithTitlemessagedelegatecancelButtonTitleotherButtonTitles("Custom Title" //Title of the prompt box
	    , "Using the native popup box of NJS, you can customize the title and button of the popup box" // The content displayed on the prompt box
	    , null // The notification proxy object after the operation prompt box, not set yet
	    , "OK (or other characters)" // text of the cancel button on the tooltip
	    , null ); // The text of other buttons on the prompt box, set to null means not displayed
	// Call the show method to display the prompt dialog, and use the () syntax to call the method of the object in JS
	view.show();
}
//...
```

`Note: The definition format of methods in OC syntax is: "(return value type) function name: (parameter 1 type) formal parameter 1 parameter 2 name: (parameter 2 type) formal parameter 2" The full name of the method is: "function name: parameter 2 name:". For example: "(void)setPositionX:(int)x Y:(int)y;", the full name of the method is "setPositionX:Y:" The syntax for calling is: "[pos setPositionX:x Y:y];". In the JS syntax, the function name cannot contain the ":" character, so when the method name of the OC object is mapped to the method name of the NJS object, the ":" character is automatically deleted. The above method name is mapped to "setPositionXY". The syntax of the NJS call is: "pos.setPositionXY(x,y);".` Running renderings on iOS devices: ![iOS Native.js example running renderings](http://www.dcloud.io/docs/a/njs/ios_alert.png) \`Note: In fact, the HTML5+ specification has encapsulated the native prompt box message API: plus.ui.alert( message, alertCB, title, buttonCapture). The example of NJS here is only for the convenience of developers to understand. In actual use, calling plus.ui.alert is simpler and has higher performance.

The "Native.JS" (plus/njs.html) page in the Hello H5+ template application that comes with HBuilder has complete source code, which can be run on a real machine to view the effect.

##  Common API

###  API on Android

In order to better understand how NJS calls the Java Native API, we implement the following test classes in Java on the Android platform, which will be called with the examples in the API description later in the session. The code of the file NjsHello.java is as follows:

```
package io.dcloud;

// Define class NjsHello
public class NjsHello {
	// static constant
	public static final int CTYPE = 1;
	// static variable
	public static int count;
	// member constant
	public final String BIRTHDAY = "2013-01-13";
	// Member variables
	String name; //定义属性name
	NjsHelloEvent observer;
	public void updateName( String newname ) { //Define method updateName
		name = newname;
	}
	public void setEventObserver( NjsHelloEvent newobserver ) {
		observer = newobserver;
	}
	public void test() { //Define method test
		System.out.printf( "My name is: %s", name );
		observer.onEventInvoked( name );
	}
	public static void testCount() {
		System.out.printf( "Static count is:%d", count );
	}
	static{ // initialize the static variables of the class
		NjsHello.count = 0;
	}
}
```

The code of the file NjsHelloEvent.java is as follows:

```
package io.dcloud;

// Define the interface NjsHelloEvent
public interface NjsHelloEvent {
	public void onEventInvoked( String name );
}
```

`Note: This NjsHello example is only to illustrate the mapping relationship between native code and NJS code. The following sample code cannot be directly run in HBuilder on a real machine. The NjsHello class must be opened and packaged in HBuilder later. NJS calls. In actual use, this need is not necessary. In most cases, the operating system API can be called directly by writing NJS code, without the need for secondary encapsulation classes in the native language for JS to call.`

####  plus.android.importClass

Import the Java class object, the method prototype is as follows:

```
ClassObject plus.android.importClass( String classname );
```

After importing a class object, you can directly call the constants and methods of the object (class object/instance object) through the "." operator. classname: The name of the Java class to be imported, which must be a complete namespace (separated by "."). If the specified class name does not exist, the import of the class fails and null is returned.

`Note: Importing a class object can easily use the "." operator to call the properties and methods of the object, but it will also consume more system resources. Therefore, importing too many class objects will affect performance. In this case, you can use the methods provided in "Advanced API" to call the Native API without importing class objects.`

**Example:**

1.  Import the class object Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // create an instance of the object
    NjsHello hello = new NjsHello();
    //...
}
//...
}
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// Create an instance object of NjsHello
var hello = new NjsHello();
// ...
```

####  ClassObject

Call the plus.android.importClass() method to import the class and return the ClassObject class object, through which an instance object of the class can be created. In Java, the static method of the class will be converted into the method of the NJS class object, which can be called by the "." operator of the class object; the static constant of the class will be converted into the attribute of the NJS class object, which can be operated by the "." operator of the class object Character access; the static attributes of the class need to be operated through the plusGetAttribute and plusSetAttribute methods of the NJS class object. **Example:**

1.  After importing the class, get the static constant property of the class Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // Get the static constant property of the class
    int type = NjsHello.CTYPE;
		// print“NjsHello Final's value: 1”
    System.out.printf( "NjsHello Final's value: %d", type );
    //...
}
//...
}
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// Get the static constant property of the class
var type = NjsHello.CTYPE;
// print“NjsHello Final's value: 1”
console.log( "NjsHello Final's value: "+type );
// ...
```

2.  After importing the class, call the static method of the class Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // call the static method of the class
    NjsHello.testCount();
    //...
}
//...
}
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// call the static method of the class
NjsHello.testCount();
// ...
```

#####  ClassObject.plusGetAttribute

Get the static property value of the class object, the method prototype is as follows:

```
Object classobject.plusGetAttribute( String name );
```

After importing the class object, you can call its plusGetAttribute method to obtain the static attribute value of the class.

-   name: The name of the static property to be acquired. If the specified property name does not exist, the property acquisition fails and null is returned.

`Note: If there is a static method with the same name as "plusGetAttribute" in the imported class object, it must be called through the plus.android.invoke() method.`

Example:

1.  After importing the class, get the static property value of the class Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // Get the static properties of the class
    int count = NjsHello.count;
		// print“NjsHello Static's value: 0”
    System.out.printf( "NjsHello Static's value: %d", count );  
    //...
}
//...
}
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// Get the static properties of the class
var count = NjsHello.plusGetAttribute( "count" );
// print“NjsHello Static's value: 0”
console.log( "NjsHello Static's value: "+count ); 
// ...
```

#####  ClassObject.plusSetAttribute

Set the static property value of the class object, the method prototype is as follows:

```
void classobject.plusSetAttribute( String name, Object value );
```

After importing the class object, you can call its plusSetAttribute method to set the static attribute value of the class.

-   name: The name of the static property to be set. If the specified property name does not exist, setting the property fails and returns null.
-   value: The attribute value to be set, its type must be matched with the static attribute of the Native layer class object, otherwise the setting operation will not take effect and the previous value will be retained.

`Note: If there is a static method with the same name as "plusSetAttribute" in the imported class object, it must be called through the plus.android.invoke() method.`

Example:

1.  Set the static property value of the class after importing the class Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // Set the static property value of the class
    NjsHello.count = 2;
		// print“NjsHello Static's value: 2”
    System.out.printf( "NjsHello Static's value: %d", NjsHello.count );
    //...
}
//...
}
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// Set the static property value of the class
NjsHello.plusSetAttribute( "count", 2 );
// print“NjsHello Static's value: 2”
console.log( "NjsHello Static's value: "+NjsHello.plusGetAttribute( "count" ) );
// ...
```

####  InstanceObject

Instance objects in NJS correspond to objects in Java. After calling the plus.android.importClass() method to import a class, you can create an instance object of the class through the new operator, or directly call the plus.android.newObject method to create an instance object of the class , you can also return an instance object by calling the Native API. In Java, the method of the object will be converted into the method of the NJS instance object, which can be called by the "." operator of the instance object; the constant property of the object will be converted to the property of the NJS instance object, which can be accessed by the "." operator of the instance object . The non-constant attribute of the object must be operated through the plusGetAttribute and plusSetAttribute methods of the NJS instance object. Example:

1.  Import the class to create an instance object and call the method of the object Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // Create an instance object of NjsHello
    NjsHello hello = new NjsHello();
    // call the object's method
    hello.updateName( "Tester" );
    //...
}
//...
}
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// Create an instance object of NjsHello
var hello = new NjsHello();
// call the object's method
hello.updateName( "Tester" );
// ...
```

2.  Import the class to create an instance object and get the constant properties of the object Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // Create an instance object of NjsHello
    NjsHello hello = new NjsHello();
    // access the constant property of the object
    String birthday = hello.BIRTHDAY;
		// print“NjsHello Object Final's value: 2013-01-13”
    System.out.printf( "NjsHello Object Final's value: %s", birthday );
    //...
}
//...
}
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// Create an instance object of NjsHello
var hello = new NjsHello();
// access the constant property of the object
var birthday = hello.BIRTHDAY;
// print“NjsHello Object Final's value: 2013-01-13”
console.log( "NjsHello Object Final's value: "+birthday );
// ...
```

#####  InstanceObject.plusGetAttribute

Get the attribute value of the instance object, the method prototype is as follows:

```
Object instancebject.plusGetAttribute( String name );
```

After obtaining the instance object, you can call its plusGetAttribute method to obtain the attribute value of the object. name: To get the property name of the object, if the specified property name does not exist, the property acquisition fails and null is returned.

`Note: If there is a method with the same name as "plusGetAttribute" in the instance object, it must be called through the plus.android.invoke() method.`

Example:

1.  Import the class to create an instance object and get the attribute value of the object Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // create an instance of the object
    NjsHello hello = new NjsHello();
    hello.updateName( "Tester" );
    // Get the value of its name property
    String name = hello.name;
		// print“NjsHello Object's name: Tester”
    System.out.printf( "NjsHello Object's name: %s", name );
    //...
}
//...
}
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// create an instance of the object
var hello = new NjsHello();
hello.updateName( "Tester" );
// Get the value of its name property
var name = hello.plusGetAttribute( "name" );
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object's name: "+name );
// ...
```

#####  InstanceObject.plusSetAttribute

Set the static property value of the class object, the method prototype is as follows:

```
void instanceobject.plusSetAttribute( String name, Object value );
```

After importing the class object, you can call its plusSetAttribute method to set the static attribute value of the class.

-   name: The name of the static property to be set. If the specified property name does not exist, setting the property fails and returns null.
-   value: The attribute value to be set, its type must be matched with the static attribute of the Native layer class object, otherwise the setting operation will not take effect and the previous value will be retained.

`Note: If there is a static method with the same name as "plusSetAttribute" in the imported class object, it must be called through the plus.android.invoke() method.`

Example:

1.  Import the class to create an instance object and set the property value of the object Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // create an instance of the object
    NjsHello hello = new NjsHello();
    // Set the value of its name property
    hello.name = "Tester";
		// print“NjsHello Object's name: Tester”
    System.out.printf( "NjsHello Object's name: %s", hello.name );
    //...
}
//...
}
```

NJS code:

```
// Import the test class NjsHello
var Hello = plus.android.importClass("NjsHello");
// create an instance of the object
var hello = new NjsHello();
// Set the value of its name property
hello.plusSetAttribute( "name", "Tester" );
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object's name: "+hello.plusGetAttribute("name") );
// ...
```

####  plus.android.implements

Object plus.android.implements( String name, Object obj );

This method creates a Java interface implementation object in the Native layer as a parameter for calling other Native APIs.

-   name: The name of the interface, which must be a complete namespace (separated by "."). If the interface does not exist, the creation of the interface implementation object fails and null is returned.
-   obj: JSON object type, the definition of the interface implementation method, the key value in the JSON object is the name of the interface method; the value value is Function, and the method parameters must be matched with the parameters defined by the method in the interface.

Example:

1.  Implement the method of the interface NjsHelloEvent in the Test class, and call the test method of the NjsHello object to trigger the running of the function in the interface. Java code:

```
import io.dcloud.NjsHello;
import io.dcloud.NjsHelloEvent;
//...
// Test class implements NjsHelloEvent interface
public class Test implements NjsHelloEvent {
public static void main( String args[] ) {
    // create an instance of the object
    NjsHello hello = new NjsHello();
    // call the updateName method
    hello.updateName( "Tester" );
    // set the listener object
    hello.setEventObserver( this );
    // Call the test method to trigger the interface event
    hello.test(); // Trigger the onEventInvoked function to run
    //...
}
// Implement the onEventInvoked method of the interface NjsHelloEvent
@Override
public void onEventInvoked( String name ) {
	System.out.printf( "Invoked Object's name is: %s", name );
}
//...
}
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// Implement the interface "NjsHelloEvent" object
var hevent = plus.android.implements( "io.dcloud.NjsHelloEvent", {
    "onEventInvoked":function( name ){
        console.log( "Invoked Object’s name: "+name ); // 输出“Invoked Object’s name: Tester”
    }
} );
// create an instance of the object
var hello = new NjsHello();
// call the updateName method
hello.updateName( "Tester" );
// set the listener object
hello.setEventObserver( hevent );
// Call the test method to trigger the delegate event
hello.test(); // trigger the anonymous function defined above to run
// ...
```

####  plus.android.runtimeMainActivity

Get the main Activity instance object of the runtime environment. The method prototype is as follows:

```
InstanceObject plus.android.runtimeMainActivity();
```

This method will obtain the instance object of the main Activity of the program, which is the main component of the Html5+ runtime environment, used to process various events that interact with the user, and is also the implementation object of the application global environment android.app.Activity. android.app.Activity is a special class that needs to be registered in the native development environment before it can be used, so it is meaningless to use the new operator to create objects.

Example:

1.  Call the Activity's startActivity method to make a call Java code:

```
import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
//...
// Get an instance of the main Activity object
Activity main = context;
// create Intent
Uri uri = Uri.parse("tel:10086");
Intent call = new Intent("android.intent.action.CALL",uri);
// Call the startActivity method to make a call
main.startActivity(call);
//...
```

NJS code:

```
// Import Activity, Intent classes
var Intent = plus.android.importClass("android.content.Intent");
var Uri = plus.android.importClass("android.net.Uri");
// Get an instance of the main Activity object
var main = plus.android.runtimeMainActivity();
// create Intent
var uri = Uri.parse("tel:10086");
var call = new Intent("android.intent.action.CALL",uri);
// Call the startActivity method to make a call
main.startActivity( call );
// ...
```

####  plus.android.currentWebview

Get the native layer instance object of the current Webview window object. The method prototype is as follows:

```
InstanceObject plus.android.currentWebview();
```

The complete Java class name of the Android platform is android.webkit.Webview. For the complete API, please refer to the Android development document [android.webkit.Webview](http://developer.android.com/reference/android/webkit/WebView.html) .

Example:

1.  Call the loadUrl method of Webview to jump to the page Java code:

```
import android.webkit.Webview;
//...
// Get the Webview object
Webview wv = this;
// jump to the page
wv.loadUrl("http://www.dcloud.io/");
//...
```

NJS code:

```
// Import the Webview class
var Webview = plus.android.importClass("android.webkit.Webview");
// Instance of the current Webview object
var wv = plus.android.currentWebview();
// jump to the page
wv.loadUrl("http://www.dcloud.io/");
// ...
```

**Complete API documentation reference: [HTML5+ API - Native.js for Android](http://www.html5plus.org/doc/zh_cn/android.html)**

###  API on iOS

In order to better understand NJS calling Objective-C Native API, we use Objective-C to implement the following test classes on the iOS platform, which will be called in the following examples in the API description. The code of the header file njshello.h is as follows:

```
// define the protocol
@protocol NjsHelloEvent <NSObject>
@required
-(void) onEventInvoked:(NSString*)name;
@end
// -------------------------------------------------------------
// Define class NjsHello
@interface NjsHello : NSObject {
    NSString *_name;
    id<NjsHelloEvent > _delegate;
}
@property (nonatomic,retain) NSString *name;
@property (nonatomic,retain) id delegate;
-(void)updateName:(NSString*)newname;
-(void)setEventObserver:(id<NjsHelloEvent >)delegate;
-(void)test;
+(void)testCount;
@end
```

The source code of the implementation file njshello.m is as follows:

```
#import "njshello.h"
// Implement class NjsHello
@implementation NjsHello
@synthesize name=_name;
-(void)updateName:(NSString*)newname{
    _name = [newname copy];
}
-(void)setEventObserver:(id<NjsHelloEvent >)delegate{
    _delegate = delegate;
}
-(void)test{
    NSLog(@"My name is: %@",_name);
    [[self delegate]onEventInvoked:name];
}
-(void)dealloc{
    [_name release];
    [supper dealloc];
}
+(void)testCount{
	NSLog( @"Static test count" );
}
@end
```

####  plus.ios.importClass

Import the Objective-C class object, the method prototype is as follows:

```
ClassObject plus.ios.importClass( String classname );
```

After importing a class object, you can directly call the constants and methods of the object (class object/instance object) through the "." operator. When calling a method with the "." operator, there is no need to use ":" to separate the method name.

-   classname: The name of the Objective-C class to be imported. If the specified class name does not exist, the import of the class fails and null is returned.

`Note: Importing a class object can easily use the "." operator to call the properties and methods of the object, but it will also consume more system resources. Therefore, importing too many class objects will affect performance. In this case, you can use the methods provided in "Advanced API" to call the Native API without importing class objects.` Example:

1.  Import the class and create an instance object Objective-C code:

```
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // ...
}
// ...
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// create an instance of the object
var hello = new NjsHello();
// ...
```

####  ClassObject

Call the plus.ios.importClass() method to import the class and return the ClassObject class object, through which an instance object of the class can be created. In Objective-C, the static method of the class will be converted into the method of the NJS class object, which can be called by the "." operator of the class object;

`Note: Since classes in Objective-C do not have static variables, they are implemented by defining global variables. Currently, the value of global variables cannot be accessed in NJS. For global constants, it is also inaccessible in NJS. For primitive type constants, you can find its specific value in the document and assign it directly in the JS code; for non-primitive type constants, it is currently inaccessible.`

Example:

1.  After importing the class, call the static method of the class Objective-C code:

```
#import "njshello.h"
// ...
int main( int argc, char *argv[] )
{
    // call the static method of the class
    [NjsHello testCount];
    // ...
}
// ...
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// call the static method of the class
NjsHello.testCount();
// ...
```

####  InstanceObject

The instance object in NJS corresponds to the object in Objective-C. After calling the plus.ios.importClass() method to import the class, the new operator can be used to create an instance object of the class, or the plus.ios.newObject method can be called directly to create the class The instance object can also be returned by calling the Native API. In Objective-C, the method of the object will be converted into the method of the NJS instance object, which can be called through the "." operator of the instance object; the attributes of the object must be operated through the plusGetAttribute and plusSetAttribute methods of the NJS instance object.

Example:

1.  Import the class to create an instance object and call the method of the object Objective-C code:

```
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // ...
}
// ...
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// create an instance of the object
var hello = new NjsHello();
// ...
```

#####  InstanceObject.plusGetAttribute

Get the attribute value of the instance object, the method prototype is as follows:

```
Object instancebject.plusGetAttribute( String name );
```

After obtaining the instance object, you can call its plusGetAttribute method to obtain the attribute value of the object.

-   name: To get the property name of the object, if the specified property name does not exist, it fails to get the property and returns null.

`Note: If there is a method with the same name as "plusGetAttribute" in the instance object, it can only be called through the plus.ios.invoke() method.`

Example:

1.  Import the class to create an instance object and get the attribute value of the object Objective-C code:

```
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    [hello updateName:@"Tester"];
    // Get the value of its name property
    NSString* name = hello.name;
		// print“NjsHello Object's name: Tester”
    NSLog(@"NjsHello Object's name: %@",name);
    // ...
}
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// create an instance of the object
var hello = new NjsHello();
hello.updateName( "Tester" );
// Get the value of its name property
var name = hello.plusGetAttribute( "name" );
// print“NjsHello Object’s name: Tester”
console.log( "NjsHello Object’s name: "+name );
// ...
```

#####  InstanceObject.plusSetAttribute

Set the static property value of the class object, the method prototype is as follows:

```
void instanceobject.plusSetAttribute( String name, Object value );
```

After importing the class object, you can call its plusSetAttribute method to set the static attribute value of the class.

-   name: The name of the static property to be set. If the specified property name does not exist, setting the property fails and returns null.
-   value: The attribute value to be set, its type must be matched with the static attribute of the Native layer class object, otherwise the setting operation will not take effect and the previous value will be retained.

`Note: If there is a static method with the same name as "plusSetAttribute" in the imported class object, it can only be called through the plus.android.invoke() method.`

Example:

1.  Import the class to create an instance object and set the property value of the object Java code:

```
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // Set the value of its name property
    hello.name = @"Tester";
		// print“NjsHello Object's name: Tester”
    NSLog(@"NjsHello Object's name: %@",hello.name); 
    // ...
}
//...
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// create an instance of the object
var hello = new NjsHello();
// Set the value of its name property
hello.plusSetAttribute( "name", "Tester" );
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object’s name: "+hello.plusGetAttribute("name") );
// ...
```

####  plus.ios.implements

In Objective-C, you can define a new class and implement the Protocol protocol, and create a new class object as a proxy object. In NJS, you can quickly create a proxy object by implementing the protocol. The method prototype is as follows:

```
Object plus.ios.implements( String name, Object obj );
```

This method returns an NJS instance object, which is mapped to the proxy object in the Native layer, whose parent class is "NSObject", and implements the protocol method specified in obj. Usually used as a parameter to call other Native APIs.

-   name: The name of the protocol, which can also be a custom string name used to define a proxy.
-   obj: JSON object type, the definition of the proxy implementation method, the key value in the JSON object is the method name defined in the protocol, and the ":" character in the method name must be reserved; the value value is Function, and the method parameters must be the same as the method defined in the protocol. parameter area configuration.

Example:

1.  Implement an agent and call the test method to trigger the method of calling the agent Objective-C code:

```
#import "njshello.h"
// Define the proxy class NjsDelegate
@interface NjsDelegate: NSObject<NjsHelloEvent> {
    -(void) onEventInvoked:(NSString*)name;
}
@end
// -------------------------------------------------------------
// Implement the proxy class NjsDelegate
@implementation NjsDelegate
-(void) onEventInvoked:(NSString*)name{
    NSLog(@"Invoked Object's name:%@",name);  // 输出“Invoked Object’s name: Tester”
}
@end
// -------------------------------------------------------------
// main function
int main( int argc, char *argv[] )
{
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // call the updateName method
    [hello updateName:@"Tester"];
    // create proxy object
    NjsDelegate* delegate = [[NjsDelegate alloc] init];
    // set the listener object
    [hello setEventObserver:delegate];
    // Call the test method to trigger the delegate event
    [hello test]; // Trigger the onEventInvoked defined by the proxy object above to run
    // ...
}
```

There is no need to create a new class object in NJS, and a proxy object can be created by calling plus.ios.implements to implement the protocol interface. The code is as follows:

```
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// Proxy implementing protocol "NjsHelloEvent"
var hevent = plus.ios.implements( "NjsHelloEvent", {
    "onEventInvoked:":function( name ){
        console.log( "Invoked Object’s name: "+name ); // 输出“Invoked Object’s name: Tester”
    }
} );
// call the updateName method
hello.updateName( "Tester" );
// set the listener object
hello.setEventObserver( hevent );
// Call the test method to trigger the delegate event
hello.test(); // Trigger the anonymous function defined by the proxy object above to run
// ...
```

####  plus.ios.deleteObject

Release the Native object mapped in the instance object in NJS. The method prototype is as follows:

```
void plus.ios.deleteObject( Object obj );
```

All instance objects (InstanceObject) in NJS can be released through this method, which will release the resources used by the objects in the Native layer.

-   obj: The instance object to be released. If the obj object is not a valid instance object, the resource operation of the object is not performed.

`Note: This method is optional. If you do not call this method to release the instance object, all objects will be released automatically when the page is closed; if the object occupies a lot of system resources, this method should be actively called when the business logic processing is completed. The method releases resources to mention the efficiency of the program.`

Example:

1.  After the instance object is created and used, the object is destroyed by explicit operation Objective-C code:

```
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // call the updateName method
    [hello updateName:@"Tester"];
    // ...
    // Destroy the instance of the object after use
    [hello release];
}
```

NJS code:

```
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// create an instance of the object
var hello = new NjsHello();
// call the updateName method
hello.updateName( "Tester" );
// ...
// Destroy the instance of the object after use
plus.ios.deleteObject( hello );
```

####  plus.ios.currentWebview

Get the native layer UIWebview instance object of the current Webview window object. The method prototype is as follows:

```
InstanceObject plus.ios.currentWebview();
```

For the API of the UIWebview object, please refer to the Apple development documentation [UIWebview](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/)

Example:

1.  After the instance object is created and used, the object is destroyed by explicit operation Objective-C code:

```
// Get an instance of the current Webview object
UIWebview* wv=self;
// create request object
NSURLRequest *req = [NSURLRequest requestWithURL:[NSURL URLWithString:@"http://www.dcloud.io/"]];
// jump to the page
[web loadRequest:req];
// release the object
// ...
```

NJS code:

```
// Import UIWebview, NSURLRequest, NSURL classes
var Webview = plus.ios.importClass("UIWebview");
var NSURLRequest = plus.ios.import('NSURLRequest');
var NSURL = plus.ios.import('NSURL');
// Get an instance of the current Webview object
var wv = plus.ios.currentWebview();
// create request object
var req = NSURLRequest.requestWithURL(NSURL.URLWithString('http://www.dcloud.io/'));
// jump to the page
plus.ios.invoke(wv,"loadRequest:",req);
// release the object (optional)
plus.ios.deleteObject(req);
plus.ios.deleteObject(wv);
// ...
```

**Complete API documentation reference: [HTML5+ API - Native.js for iOS](http://www.html5plus.org/doc/zh_cn/ios.html)**

##  Complete business presentation

###  Android

Create a shortcut icon on the Android phone desktop, which is a function that only native programs can achieve. Even if the Hybrid solution is used, native engineers are required to cooperate with writing plug-ins. Below we demonstrate how to directly use js to create a shortcut on the Android phone desktop. You can view the running effect in "Shortcut (Android)" on the Native.JS page of the HelloH5+ application. This code is the code for creating shortcuts implemented in native Java for reference comparison:

```
import android.app.Activity;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.graphics.Bitmap;
// create desktop shortcut
void createShortcut(){
	// Get the main Activity
	Activity main = this;
	// create shortcut intent
	Intent shortcut = new Intent("com.android.launcher.action.INSTALL_SHORTCUT");
	// set the name of the shortcut
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_NAME, "HelloH5+");
	// set non-reproducible creation
	shortcut.putExtra("duplicate",false);
	// set shortcut icon
	Bitmap bitmap = BitmapFactory.decodeFile("/sdcard/icon.png");
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_ICON, bitmap);
	// Set the shortcut to start the execution action
	Intent action = new Intent(Intent.ACTION_MAIN);
	action.setComponent( main.getComponentName() );
	shortcut.putExtra( Intent.EXTRA_SHORTCUT_INTENT, action );
	// Broadcast create shortcut
	main.sendBroadcast(shortcut);
}
```

When using NJS to implement, first import the android.content.Intent and android.graphics.BitmapFactory classes that need to be used, and convert them into JavaScript code according to the method in the Java code. The shortcut icon is set by parsing the local png file. In JavaScript, the plus.io.\* API needs to be converted into a local path and passed to the Native API. The complete code is as follows:

```
var Intent=null,BitmapFactory=null;
var main=null;
document.addEventListener( "plusready", function() {//The method of executing the plus object when the "plusready" event is triggered
	// ...
	if ( plus.os.name == "Android" ) {
		// import the class object to be used
		Intent = plus.android.importClass("android.content.Intent");
		BitmapFactory = plus.android.importClass("android.graphics.BitmapFactory");
		// Get the main Activity
		main = plus.android.runtimeMainActivity();
	}
}, false);
/**
 * 创建桌面快捷方式
 * Create desktop shortcuts
 */
function createShortcut(){
	// create shortcut intent
	var shortcut = new Intent("com.android.launcher.action.INSTALL_SHORTCUT");
	// set the name of the shortcut
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_NAME, "测试快捷方式");
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_NAME, "Test Shortcut");
	// set non-reproducible creation
	shortcut.putExtra("duplicate",false);
	// set shortcut icon
	var iconPath = plus.io.convertLocalFileSystemURL("/icon.png"); // 将相对路径资源转换成系统绝对路径
	var bitmap = BitmapFactory.decodeFile(iconPath);
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_ICON,bitmap);
	// Set the shortcut to start the execution action
	var action = new Intent(Intent.ACTION_MAIN);
	action.setClassName(main.getPackageName(), 'io.dcloud.PandoraEntry');
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_INTENT,action);
	// Broadcast create shortcut
	main.sendBroadcast(shortcut);
	console.log( "桌面快捷方式已创建完成！" );
	console.log( "Desktop shortcut has been created!" );
}
```

Note: When submitting to the cloud platform for packaging, you need to add Android permissions to create shortcuts on the desktop. Double-click the "manifest.json" file of the application in the HBuilder project, switch to the "Code View" in plus->distribute->google-> Add permission data under the permissions node:

```
"google": {
	// ...
	"permissions": [
"<uses-permission android:name=\"com.android.launcher.permission.INSTALL_SHORTCUT\"/>"
	]
}
```

As shown below:

![Android permissions permissions in manifest.json](http://www.dcloud.io/docs/a/njs/android_permissions.png)

###  iOS

Log in to game center on an iOS phone, a game center service, which is a function that only native programs can achieve. Even if the Hybrid solution is used, native engineers are required to cooperate with writing plug-ins. Below we demonstrate how to directly use js to log in to the game center on an iOS phone. You can view the running effect in "Game Center (iOS)" in the Native.JS page of the HelloH5+ application. Note that you cannot log in if the mobile phone has not opened the game center. Please click the game center that comes with iOS to configure it. This code is the code for logging in to the game center implemented using native Objective-C for reference comparison. The code in the header file Test.h of the native Objective-C code is as follows:

```
@interface Test: NSObject
// Game player login status listener function
- (void)authenticationChanged:(NSNotification*)notification;
// Get game player status information
- (void)playerInformation:(GKPlayer *)player;
// Login to Game Center
- (void)loginGamecenter;
// Stop monitoring the login game state changes
- (void)logoutGamecenter;
@end

实现文件Test.m中代码如下：
@implementation Test
// Game player login status listener function
- (void)authenticationChanged:(NSNotification*)notification
{
    // Get the game player shared instance object
    GKLocalPlayer *player = notification.object;
    if ( player.isAuthenticated ) {
        // The player has logged in for authentication and obtains player information
        [self playerInformation:player];
    } else {
        // The player is not logged in for authentication, prompting the user to log in
        NSLog(@"请登录！");
        NSLog(@"Please log in!");
    }
    // release the used object
    [player release];
}
// Get game player status information
- (void)playerInformation:(GKPlayer *)player
{
    // Get the player's name
    NSLog(@"Name: %@",player.displayName);
}

// Login to Game Center
- (void)loginGamecenter
{
    // Listen for user login status change events
    NSNotificationCenter *nc = [NSNotificationCenter defaultCenter];
    [nc addObserver:self
           selector:@selector(authenticationChanged)
               name:@"GKPlayerAuthenticationDidChangeNotificationName"
             object:nil];
    // Get the game player shared instance object
    GKLocalPlayer *localplayer = [GKLocalPlayer localPlayer];
    // Determine if the player has logged in for authentication
    if ( localplayer.isAuthenticated ) {
        // The player has logged in for authentication and obtains player information
        [self playerInformation:localplayer];
    } else {
        // The player is not logged in for authentication and initiates an authentication request
        [localplayer authenticateWithCompletionHandler:nil];
        NSLog(@"登录中...");
        NSLog(@"Login...");
    }
	// release the used object
    [localplayer release];
    [nc release];
}

// Stop monitoring the login game state changes
- (void)logoutGamecenter
{
    // Cancel the monitoring of user login status changes
    NSNotificationCenter *nc = [NSNotificationCenter defaultCenter];
    [nc removeObserver:self
                  name:@"GKPlayerAuthenticationDidChangeNotificationName"
                object:nil];
	// release the used object
    [nc release];
}
@end
```

When implemented using NJS, it can be converted into JavaScript code according to the method in the Objective-C code. The most critical code is the monitoring of the user's login status in the loginGamecenter method. The "addObserver:selector:name:object" method of the NSNotificationCenter object needs to be called.

1.  addObserver: After that, an instance object is required to be used to find the method specified in the selector parameter. In Objective-C, the object itself (self) is usually passed in, but there is no such concept in NJS, so you need to use plus.ios .implements method to create a new object: var delegate = plus.ios.implements("NSObject",{"authenticationChanged:":authenticationChanged}); The first parameter "NSObject" indicates the type of the object, the JSON object in the second parameter indicates the method the object has, and the "authenticationChanged" method is the method of the delegate object.
2.  selector: After that, you need to pass in a class function pointer. In Objective-C, you can select a function pointer through the "@selector" instruction. In NJS, you need to use the plus.ios.newObject method to create a function object: plus.ios.newObject("@selector","authenticationChanged:") The first parameter needs to be fixed as "@selector", which means that a function-like pointer object is created, and the second parameter is. Import the GKLocalPlayer and NSNotificationCenter classes in the "plusready" event and call the login method longinGamecenter().

The complete JavaScript code is as follows:

```
// handle the "plusready" event
var bLogin=false;
document.addEventListener( "plusready", function() {
	// ...
	if ( plus.os.name == "iOS" ) {
		GKLocalPlayer  = plus.ios.importClass("GKLocalPlayer");
		NSNotificationCenter = plus.ios.importClass("NSNotificationCenter");
		longinGamecenter();
	} else {
		alert("欢迎您");
		bLogin = true;
		setTimeout( function(){
			plus.ui.toast( "此平台不支持Game Center功能！" );
			plus.ui.toast( "This platform does not support Game Center function!" );
		}, 500 );
	}
}, false);

var GKLocalPlayer=null,NSNotificationCenter=null;
var delegate=null;

// Game player login status listener function
function authenticationChanged( notification ){
	// Get the game player shared instance object
	var player = notification.plusGetAttribute("object");
	if ( player.plusGetAttribute("isAuthenticated") ) {
		// The player has logged in for authentication and obtains player information
		playerInformation(player);
		bLogin = true;
	} else {
		// The player is not logged in for authentication, prompting the user to log in
		alert("请登录");
		alert("Please login");
        bLogin = false;
	}
	// release the used object
	plus.ios.deleteObject(player);
}

// Get game player status information
function playerInformation( player ){
	var name = player.plusGetAttribute("displayName");
	alert( name+" 已登录！" );
	alert( name+" logged in!" );
}

// Login to Game Center
function longinGamecenter(){
	if ( bLogin ){
		return;
	}
    // Listen for user login status change events
    var nc = NSNotificationCenter.defaultCenter();
    delegate = plus.ios.implements("NSObject",{"authenticationChanged:":authenticationChanged});
    nc.addObserverselectornameobject(delegate,
    	plus.ios.newObject("@selector","authenticationChanged:"),
    	"GKPlayerAuthenticationDidChangeNotificationName",
    	null);
    // Get the game player shared instance object
    var localplayer = GKLocalPlayer.localPlayer();
    // Determine if the player has logged in for authentication
    if ( localplayer.isAuthenticated() ) {	// localplayer.plusGetAttribute("isAuthenticated")
        // The player has logged in for authentication and obtains player information
        playerInformation( localplayer );
        bLogin = true;
    } else {
        // The player is not logged in for authentication and initiates an authentication request
        localplayer.authenticateWithCompletionHandler(null);
        alert( "登录中..." );
        alert( "Login..." );
    }
    // release the used object
	plus.ios.deleteObject(localplayer);
	plus.ios.deleteObject(nc);
}

// Stop monitoring the login game state changes
function stopGamecenterObserver()
{
    // Cancel the monitoring of user login status changes
    var nc = NSNotificationCenter.defaultCenter();
    nc.removeObservernameobject(delegate,"GKPlayerAuthenticationDidChangeNotificationName",null);
    plus.ios.deleteObject(nc);
    plus.ios.deleteObject(delegate);
    delegate = null;
}
```

**Notice**

1.  When submitting to the cloud platform for packaging, you need to add the system library (framework) of the Game Center API to call it correctly. Double-click the "manifest.json" file of the application in the HBuilder project, switch to the "Code View", and click plus->distribute- Add the system Framework to be referenced under the >apple->frameworks node:

```
"apple": {
	"devices": "universal",
	"frameworks": [
		"GameKit.framework"
	]
}
```

![HBuilder frameworks](http://www.dcloud.io/docs/a/njs/ios_frameworks.png) 2. When the official release is submitted to the AppStore, the "Game Center" service needs to be selected when configuring the App ID on the Apple Developer website: ![Game Center](http://www.dcloud.io/docs/a/njs/ios_gamecenter.png)

##%E5%BC%80%E5%8F%91%E6%B3%A8%E6%84%8F%E5%92%8C%E5%BB%BA%E8%AE%AE%E7%94%A8 %E9%80%94 The running performance of Native.js is still not as good as that of pure native applications; the data exchange efficiency between JS and Native is not as efficient as that within js; for the above reasons, there are several development suggestions:

-   Mainly based on standard web code, when encountering insufficient web capabilities, call Native.js.
-   It is mainly based on standard web code. When encountering insufficient web performance, it needs to be analyzed. if ((the efficiency of native computing - the loss of js and native communication) > the efficiency of pure web) { }else{ 还应该使用纯js }
-   Programs designed to trigger Native.js code concurrently within a short period of time should be avoided

##%E8%B0%83%E8%AF%95 ![Chrome Debug](http://www.dcloud.io/docs/a/njs/chrome_debug.png) For how to debug HBuilder's 5+App in the browser console, please refer to HBuilder's 5+App Development Getting Started Tutorial.

##%E5%BC%80%E5%8F%91%E8%B5%84%E6%BA%90 iOS official online documentation: [https://developer.apple.com/library/ios/navigation/](https://developer.apple.com/library/ios/navigation/) Android official online documentation: [https://developer.android.com/reference/packages.html](https://developer.android.com/reference/packages.html) Lecture video: [http://v.youku.com/v\_show/id\_XNzYzNTcwNDI4.html](http://v.youku.com/v_show/id_XNzYzNTcwNDI4.html)

##%E9%AB%98%E7%BA%A7API With the aforementioned common APIs, various business development can be completed. The high-level API supplemented here is an API used to improve performance after being familiar with NJS. The advanced API cannot directly use the "." operator to use the methods of the native object, nor can it watch the native object during debugging, but the performance of the advanced API is higher than that of the conventional API. Although after importing class objects (plus.android.importClass and plus.ios.importClass), you can easily access the constants of the object and call the methods of the object through the "." operator, but importing the class object also requires more system consumption Therefore, in actual development, import class objects should be reduced as much as possible to improve program efficiency. Judgments can be made based on the following:

1.  If the imported class is particularly complex, inherits from many base classes, and has many methods and attributes, consider not importing the class;
2.  Whether frequent operations are required for the imported class, if the imported class is only for instantiation and as a parameter for calling other APIs, the class should not be imported;
3.  Are many classes imported in the same page? If you import too many you need to consider reducing the number of imported classes.

If we do not import the class object, we cannot instantiate the class object through the new operator. In this case, we can create the instance object through the plus.ios.newObject() and plus.android.newObject() methods, as follows:

```
// The iOS platform creates an instance object of NSDictionary
var ns = plus.ios.newObject( "NSDictionary" );

// Android platform creates an instance object of Intent
var intent = plus.android.newObject( "android.content.Intent" );
```

###  API on Android

####  plus.android.newObject

The instance object of the class is created directly without importing the class object. The method prototype is as follows:

```
InstanceObject plus.android.newObject( String classname, Object...args );
```

This method instantiates the class in the Native layer, creates a class entity and returns the instance object of the NJS layer. It is more efficient to use the new operator to create objects after importing class objects.

-   classname: To create the class name of the instance object, the class name must be a complete namespace, use the "." separator (such as "android.app.AlertDialog"), if you need to create an inner class object, you need to use the "$" separator (eg "android.app.AlertDialog$Builder"). If the specified class name does not exist, the object creation fails and null is returned.
-   args: The type and number of parameters for calling the class constructor must be matched with the native layer Java class constructor, otherwise the class object cannot be created, and null will be returned.

**Note**: Since the class object is not imported, the instance object created by this method cannot directly call the method of the object through the "." operator, but must use the plus.android.invoke method to call.

Example:

1.  Create an instance object without importing a class Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // create an instance of the object
    NjsHello hello = new NjsHello();
    //...
}
//...
}
```

NJS code:

```
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// create an instance of the object
var hello = plus.android.newObject( "io.dcloud.NjsHello" );
// ...
```

####  plus.android.getAttribute

If you do not import the class object, you cannot access the static properties of the class through the class object. You need to call the following method to obtain the static property value of the class. The method prototype is as follows:

```
Object plus.android.getAttribute( String|Object obj, String name );
```

This method can also get the property value of class object or instance object, if it is a class object, it is the static property of the class, if it is an instance object, it is the non-static property of the object.

-   obj: If it is of String type, it indicates the class name of the static property value to be obtained, and the class name must be a complete namespace (separated by "."); if it is of ClassObject type, it indicates the class object of which static property is to be obtained; if it is of InstanceObject type, Represents the instance object to get the property value from.
-   name: The property name to be acquired, if the specified property name does not exist, the property acquisition fails and null is returned.

**Note**: This method can also be called after importing the class object. When the obj parameter type is ClassObject, its function is the same as that of the ClassObject.plusSetAttribute method. When the parameter type of obj is InstanceObject, its function is the same as that of the InstanceObject.plusSetAttribute method.

Example:

1.  Get the static constant properties of the class without importing the class object Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // Get the static constant property of the class
    int type = NjsHello.CTYPE;
		// print“NjsHello Final's value: 1”
    System.out.printf( "NjsHello Final's value: %d", type );
    // Get the static properties of the class
    int count = NjsHello.count;
		// print“NjsHello Final's value: 0”
    System.out.printf( "NjsHello Static's value: %d", count );
    //...
}
//...
}
```

NJS code:

```
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// access the static constant property of the class
var type = plus.android.getAttribute( "io.dcloud.NjsHello", "CTYPE" );
// print“NjsHello Final's value: 1”
console.log( "NjsHello Final's value: "+type );
// ...
```

2.  Do not import the class object, create an instance object, and get the value of its name attribute Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // create an instance of the object
    NjsHello hello = new NjsHello();
    // Get the value of its name property
    String name = hello.name;
		// print“NjsHello Object's name: Tester”
    System.out.printf( "NjsHello Object's name: %s", name );
    //...
}
//...
}
```

NJS code:

```
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// create an instance of the object
var hello = plus.android.newObject( "io.dcloud.NjsHello" );
// Get the value of its name property
var name = plus.android.getAttribute( hello, "name" );
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object's name: "+name );
// ...
```

####  plus.android.setAttribute

If the class object is not imported, the static property value of the class cannot be set through the class object. The following method needs to be called to set the static property value of the class. The method prototype is as follows:

```
void plus.android.setAttribute( String|Object obj, String name, Object value );
```

This method can also set the property value of class object or instance object. If it is a class object, it is a static property of the class. If it is an instance object, it is a non-static property of the object.

-   obj: If it is of String type, it indicates the class name for which static property values are to be set, and the class name must be a complete namespace (separated by "."); if it is of ClassObject type, it indicates the class object whose static properties are to be set; if it is of InstanceObject type, Represents the instance object on which the property value is to be set.
-   name: The property name to be set. If the specified property name does not exist, setting the property fails and returns null.
-   value: The attribute value to be set, its type must match the attribute of the native layer obj object, otherwise the setting operation will not take effect and the previous value will be retained.

**Note**: This method can also be called after importing the class object. When the obj parameter type is ClassObject, its function is the same as that of the ClassObject.plusSetAttribute method. When the parameter type of obj is InstanceObject, its function is the same as that of the InstanceObject.plusSetAttribute method.

Example:

1.  Set the static property value of the class without importing the class object Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // Set the static property value of the class
    NjsHello.count = 2;
		// print“NjsHello Static's value: 2”
    System.out.printf( "NjsHello Static's value: %d", NjsHello.count );
    //...
}
//...
}
```

NJS code:

```
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// Set the static property value of the class
plus.android.setAttribute( "io.dcloud.NjsHello", "count", 2 );
// print“NjsHello Static's value: 2”
console.log( "NjsHello Static's value: "+plus.android.getAttribute("io.dcloud.NjsHello","count") );
// ...
```

2.  Import the class object, create an instance object, and set its name attribute value Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // create an instance of the object
    NjsHello hello = new NjsHello();
    // Set the value of its name property
    hello.name = "Tester";
		// print“NjsHello Object's name: Tester”
    System.out.printf( "NjsHello Object's name: %s", hello.name );
    //...
}
//...
}
```

NJS code:

```
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// create an instance of the object
var hello = plus.android.newObject( "io.dcloud.NjsHello" );
// Set the value of its name property
plus.android.setAttribute( hello, "name", "Tester" );
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object's name: "+hello.plusGetAttribute("name") );
// ...
```

####  plus.android.invoke

If the class object is not imported, its member method cannot be called through the "." operator of the instance object. The member method of the instance object needs to be called through the following methods. The method prototype is as follows:

```
Object plus.android.invoke( String|Object obj, String name, Object... args );
```

This method can also call the method of class object or instance object. If it is a class object, it will call the static method of the class, and if it is an instance object, it will call the ordinary member method of the object. The return value of the function is the return value after calling the native layer method to run, and the method of the native object returns undefined if there is no return value.

-   obj: If it is of type String, it means the class name of the static method to be called, and the class name must contain the complete package name; if it is of type ClassObject, it means the class object to which the static method is to be called; if it is of type InstanceObject, it means the instance object of which the member method is to be called .
-   name: the name of the method to be called. If the specified method does not exist, the method fails to be called and the return value is null.
-   args: the parameters of the calling method, whose type and number must be matched with the function of the native layer object method, otherwise the method of the object cannot be called, and null will be returned.

**Note**: This method can also be called after importing the class object, and its effect is the same as calling the method through the "." operator of the class object or instance object.

Example:

1.  Do not import the class object, call the static method of the class Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // call the static method of the class
    NjsHello.testCount();
    //...
}
//...
}
```

NJS code:

```
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// call the static method of the class
plus.android.invoke( "io.dcloud.NjsHello", "testCount" );
// ...
```

2.  Do not import the class object, create an instance object, and call its updateNmae method Java code:

```
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // create an instance of the object
    NjsHello hello = new NjsHello();
    // call the updateName method
    hello.updateName( "Tester" );
		// print“NjsHello Object's name: Tester”
    System.out.printf( "NjsHello Object's name: %s", name );
    //...
}
//...
}
```

NJS code:

```
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// create an instance of the object
var hello = plus.android.newObject( "io.dcloud.NjsHello" );
// call the updateName method
plus.android.invoke( hello, "updateName", "Tester" );
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object's name: "+hello.getAttribute("name") );
// ...
```

**Complete API documentation reference: [HTML5+ API - Native.js for Android](http://www.html5plus.org/doc/zh_cn/android.html)**

###  API on iOS

####  plus.ios.newObject

The instance object of the class is created directly without importing the class object. The method prototype is as follows:

```
InstanceObject plus.ios.newObject( String classname, Object..args );
```

This method will instantiate the class in the Native layer, create a class entity and return the class instance object of the NJS layer. It is more efficient to use the new operator to create objects after importing class objects.

-   classname: The class name of the instance object to be created. If the specified class name does not exist, the object creation fails and null is returned.
-   args: The type and number of parameters to call the class constructor must match with the native layer object constructor, otherwise the class object cannot be created and null will be returned.

**Note**: Since the class object is not imported, the instance object created by this method cannot directly call the method of the object through the "." operator, but must use the plus.ios.invoke method to call. The value of the classname parameter is "@selector", which means that a function pointer object needs to be created. Similar to the @selector instruction in Objective-C, the args parameter is the name of the function. In this case, the name of the function needs to contain the ":" character.

Example:

1.  Create an instance object without importing a class Objective-C code:

```
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // ...
}
```

NJS code:

```
// Class "NjsHello" is not imported
// create an instance of the object
var hello = plus.ios.newObject( "NjsHello" );
// ...
```

####  plus.ios.invoke

If the class object is not imported, its member method cannot be called through the "." operator of the instance object. The member method of the instance object needs to be called through the following methods. The method prototype is as follows:

```
Object plus.ios.invoke( String|Object obj, String name, Object... args );
```

This method can also call the method of class object or instance object. If it is a class object, it will call the static method of the class, and if it is an instance object, it will call the ordinary member method of the object. The return value of the function is the return value after calling the native layer method to run, and the method of the native object returns undefined if there is no return value.

-   obj: If it is of type String, it means the class name of the static method to be called, and the class name must contain the complete package name; if it is of type ClassObject, it means the class object to which the static method is to be called; if it is of type InstanceObject, it means the instance object of which the member method is to be called .
-   name: The name of the method to be called. The ":" character in the method name must be reserved. If the specified method does not exist, the method fails to be called and the return value is null.
-   args: the parameters of the calling method, whose type and number must be matched with the function of the native layer object method, otherwise the method of the object cannot be called, and null will be returned.

**Note**: This method can also be called after importing the class object, and its effect is the same as calling the method through the "." operator of the class object or instance object.

Example:

1.  Create an instance object without importing the class and call the updateName method Objective-C code:

```
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // call the updateName method
    [hello updateName:@"Tester"];
		// print“NjsHello Object's name: Tester”
    NSLog(@"NjsHello Object's name: %@",hello.name);
    // ...
}
```

NJS code:

```
// Class "NjsHello" is not imported
// create an instance of the object
var hello = plus.ios.newObject( "NjsHello" );
// call the updateName method
plus.ios.invoke( hello, "updateName", "Tester" );
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object's name: "+hello.getAttribute("name") );
// ...
```

**Complete API documentation reference: [HTML5+ API - Native.js for iOS](http://www.html5plus.org/doc/zh_cn/ios.html)**

##Performance optimization

###  Adjust code structure optimization

In the previous chapter, we introduced how to call the Native API through NJS to display the system prompt box. When the real machine is running, it will be found that there will be a delay of about 0.5s for the first call, and there will be no delay if the call is made again. This is because the operation of importing a class object in NJS will take a long time, and when it is called again, since the class object has been imported, it will be executed quickly. Therefore, you can adjust the code structure for optimization, and import the class object in the "plusready" event triggered after the page is opened, so as to avoid the delay of the first call.

The Android platform adjusts the NJS code structure as follows:

```
// Save Android import object and global environment object
var AlertDialog=null,mainActivity=null;
// H5+ event handling
document.addEventListener("plusready",function(){
	switch ( plus.os.name ) {
		case "Android":
		// Program global environment object, automatically import Activity class internally
		mainActivity = plus.android.runtimeMainActivity();
		// Import the AlertDialog class
		AlertDialog = plus.android.importClass("android.app.AlertDialog");
		break;
		default:
		break;
	}
},false);
//...
/**
 * 在Android平台通过NJS显示系统提示框
 * Display system prompt box through NJS on Android platform
 */
function njsAlertForAndroid(){
	// Create a prompt box construction object. The constructor needs to provide the global environment object of the program, which is obtained through the plus.android.runtimeMainActivity() method
	var dlg = new AlertDialog.Builder(mainActivity);
	// set the prompt box title
	dlg.setTitle("自定义标题");
	dlg.setTitle("custom title");
	// set the prompt box content
	dlg.setMessage("使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
	dlg.setMessage("Using NJS's native popup box, you can customize the title and button of the popup box");
	// set the prompt box button
	dlg.setPositiveButton("确定(或者其他字符)",null);
	dlg.setPositiveButton("OK (or other characters)",null);
	// show tooltip
	dlg.show();
}
//...
```

The iOS platform adjusts the NJS code structure as follows:

```
// Save the class object imported by the iOS platform
var UIAlertView=null;
// H5+ event handling
document.addEventListener("plusready",function(){
	switch ( plus.os.name ) {
		case "iOS":
		// Import UIAlertView class
		UIAlertView = plus.ios.importClass("UIAlertView");
		break;
		default:
		break;
	}
},false);
//...
/**
 * 在iOS平台通过NJS显示系统提示框
 * Display system prompt box through NJS on iOS platform
 */
function njsAlertForiOS(){
	// Create an instance object of the UIAlertView class
	var view = new UIAlertView();
	// Set the content on the prompt dialog
	view.initWithTitlemessagedelegatecancelButtonTitleotherButtonTitles("Custom Title" //Title of the prompt box
		, "Using the native popup box of NJS, you can customize the title and button of the popup box" // The content displayed on the prompt box
		, null // The notification proxy object after the operation prompt box, not set yet
		, "OK (or other characters)" // text of the cancel button on the tooltip
		, null ); // The text of other buttons on the prompt box, set to null means not displayed
	// Call the show method to display the prompt dialog
	view.show();
}
//...
```

###  Optimized using advanced API

In the previous chapter, we mentioned that importing class objects will consume more system resources, and importing too many class objects will affect performance. Providing a set of interfaces in the high-level API can call the Native API without importing the class object, thereby improving the performance of the code.

The Android platform uses the high-level API to optimize the code as follows:

```
// Save Android import object and global environment object
var mainActivity=null;
// H5+ event handling
document.addEventListener("plusready",function(){
	switch ( plus.os.name ) {
		case "Android":
		// Program global environment object, automatically import Activity class internally
		mainActivity = plus.android.runtimeMainActivity();
		break;
		default:
		break;
	}
},false);
//...
/**
 * 在Android平台通过NJS显示系统提示框
 * Display system prompt box through NJS on Android platform
 */
function njsAlertForAndroid(){
	// Since the Builder class is an inner class of the android.app.AlertDialog class, you need to use the $ symbol to separate
	var dlg = plus.android.newObject("android.app.AlertDialog$Builder",mainActivity);
	// set the prompt box title
	plus.android.invoke(dlg,"setTitle","自定义标题");
	plus.android.invoke(dlg,"setTitle","custom title");
	// set the prompt box content
	plus.android.invoke(dlg,"setMessage","使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
	plus.android.invoke(dlg,"setMessage","Using the native popup box of NJS, you can customize the title and button of the popup box");
	// set the prompt box button
	plus.android.invoke(dlg,"setPositiveButton","确定(或者其他字符)",null);
	plus.android.invoke(dlg,"setPositiveButton","OK (or other characters)",null);
	// show tooltip
	plus.android.invoke(dlg,"show");
}
//...
```

The iOS platform uses the high-level API to optimize the code as follows:

```
/**
 * 在iOS平台通过NJS显示系统提示框
 * Display system prompt box through NJS on iOS platform
 */
function njsAlertForiOS(){
	// Create an instance object of the UIAlertView class
	var view = plus.ios.newObject("UIAlertView");
	// Set the content on the prompt dialog, where the method name must contain the ':' character
	plus.ios.invoke(view,"initWithTitle:message:delegate:cancelButtonTitle:otherButtonTitles:"
	    ,"custom title" // prompt box title
	    , "Using the native popup box of NJS, you can customize the title and button of the popup box" // The content displayed on the prompt box
	    , null // The notification proxy object after the operation prompt box, not set yet
	    , "OK (or other characters)" // text of the cancel button on the tooltip
	    , null ); // The text of other buttons on the prompt box, set to null means not displayed
	// Call the show method to display the prompt dialog, and use the () syntax to call the method of the object in JS
	plus.ios.invoke(view,"show");
}
//...
```
