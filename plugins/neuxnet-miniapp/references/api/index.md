---
title: "Difference between standard js and browser js"
source_url: https://miniapp.neuxnet.com/api/index.html
---
The js API of `Mini App` consists of two parts: the standard ECMAScript js API and the uni extension API.

The js of standard ECMAScript is only the most basic js. The browser extends window, document, navigator and other objects based on it.

Mini App extends the uni object based on ECMAScript.

##  Difference between standard js and browser js

The js code of `Mini App`, the web side runs in the browser. For the non-web side , the Android platform runs in the v8 engine, the iOS platform runs in the jscore engine that comes with iOS, and neither runs in the browser or webview.

On the non-web side, although it does not support the js API of browsers such as window, document, and navigator, it also supports standard ECMAScript.

Be careful not to equate in-browser js with standard js.

Therefore, the web side of Mini App also supports standard js, supports syntax such as if and for, and supports variable types such as strings, numbers, time, Boolean values, arrays, custom objects, and various processing methods. It's just that browser-specific objects such as window, document, and navigator are not supported.

##  Instruction

-   The APIs beginning with uni.on are used as API interfaces to listen to certain events and accept a CALLBACK function as a parameter. When that event is triggered, the CALLBACK function is called.
-   Unless otherwise specified, other API interfaces accept an OBJECT as a parameter.
-   In the OBJECT, success, fail and complete can be specified in the reception of the interface call result.
-   Async APIs will return the `errMsg` field, synchronous APIs will not. For example: `getSystemInfoSync` will not have `errMsg` in the returned result.

##  API `Promisify`

1.  Specific strategy of API `Promisify`:
    
    -   For the asynchronous method, if no callback parameter such as success, fail or complete is passed in, the data will be returned as Promise. E.g.: `uni.getImageInfo()`
        
    -   For asynchronous method with return object, at least one callback parameter of success, fail or complete should be passed in to obtain the return object. E.g.:
        
        ```
         // Normal use
         const task = uni.connectSocket(
          success(res){
           console.log(res)
          }
         )
        
         // Promise
         uni.connectSocket().then(res => {
           // Here is the res of the success callback in normal use
           // uni.connectSocket() will return the task object when used normally. If you want to get the task, don't use Promise
           console.log(res)
         })
        ```
        
2.  API that does not proceed `Promisify`:
    
    -   Synchronization method (ended with sync). E.g.: `uni.getSystemInfoSync()`
    -   Method beginning with create. E.g.: `uni.createMapContext()`
    -   Method ending with manager. E.g.: `uni.getBackgroundAudioManager()`

####  Vue 3 API `promise`

-   Vue3 encapsulates some APIs with promises, and the call will enter the `then method` callback if the call is successful. If the call fails, it will enter the `catch method` callback

**Use example:**

Vue 3

```
// default method
uni.request({
  url: "https://www.example.com/request",
  success: (res) => {
    console.log(res.data);
  },
  fail: (err) => {
    console.error(err);
  },
});

// call using Promise then/catch
uni
  .request({
    url: "https://www.example.com/request",
  })
  .then((res) => {
    // The res parameter here is the same as the res parameter in the success callback when the default method is used
    console.log(res.data);
  })
  .catch((err) => {
    // The err parameter here is the same as the err parameter in the fail callback when the default method is used
    console.error(err);
  });

// use Async/Await method to call
async function request() {
  try {
    var res = await uni.request({
      url: "https://www.example.com/request",
    });
    // The res parameter here is the same as the res parameter in the success callback when the default method is used
    console.log(res);
  } catch (err) {
    // The err parameter here is the same as the err parameter in the fail callback when the default method is used
    console.error(err);
  }
}
```

-   Convert between return formats

Vue3

```
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    const returnValue = [undefined, undefined];
    return res
      .then((res) => {
        returnValue[1] = res;
      })
      .catch((err) => {
        returnValue[0] = err;
      })
      .then(() => returnValue);
  },
});
```

##  API list

####  Base

#####  log print

| API | Description |
| --- | --- |
| [Log print](log) | Print log information to the console |
| [timer](timer) | Execute the registered callback function after the timer expires |
| [uni.base64ToArrayBuffer](base64ToArrayBuffer) | Convert Base64 string to ArrayBuffer object |
| [uni.arrayBufferToBase64](arrayBufferToBase64) | Convert ArrayBuffer object to Base64 string |
| [Interceptor](interceptor) | Intercept calls such as Api and execute callbacks |

####  Network

#####  Initiating request

| API | Description |
| --- | --- |
| [uni.request](request/request#request) | Initiate a network request |

#####  WebSocket

| API | Description |
| --- | --- |
| [uni.connectSocket](request/websocket#connectsocket) | Create a WebSocket connection |
| [uni.onSocketOpen](request/websocket#onsocketopen) | Listen for WebSocket open |
| [uni.onSocketError](request/websocket#onsocketerror) | Listen for WebSocket errors |
| [uni.sendSocketMessage](request/websocket#sendsocketmessage) | Send WebSocket message |
| [uni.onSocketMessage](request/websocket#onsocketmessage) | Accept WebSocket messages |
| [uni.closeSocket](request/websocket#closesocket) | Close WebSocket connection |
| [uni.onSocketClose](request/websocket#onsocketclose) | Listen for WebSocket close |

#####  SocketTask

| API | Description |
| --- | --- |
| [SocketTask.send](./request/socket-task.md#sockettasksend) | Send data via WebSocket connection |
| [SocketTask.close](./request/socket-task.md#sockettaskclose) | Close WebSocket connection |
| [SocketTask.onOpen](./request/socket-task.md#sockettaskonopen) | Listen for WebSocket connection open events |
| [SocketTask.onClose](./request/socket-task.md#sockettaskonclose) | Listen for WebSocket connection close events |
| [SocketTask.onError](./request/socket-task.md#sockettaskonerror) | Listen for WebSocket error events |
| [SocketTask.onMessage](./request/socket-task.md#sockettaskonmessage) | Listen for the message event received by the WebSocket server |

####  Media

#####  Image

| API | Description |
| --- | --- |
| [uni.chooseImage](media/image#chooseimage) | Choose an image from the album, or take a photo |
| [uni.previewImage](media/image#unipreviewimageobject) | Preview image |
| [uni.closePreviewImage](media/image#closepreviewimage) | Close preview image |
| [uni.getImageInfo](media/image#getimageinfo) | Get image information |
| [uni.saveImageToPhotosAlbum](media/image#saveimagetophotosalbum) | Save image to system album |

#####  Document

| API | Description |
| --- | --- |
| [uni.chooseFile](media/file#chooseFile) | Choose file from local |

#####  Recording Management

| API | Description |
| --- | --- |
| [uni.getRecorderManager](media/record-manager) | Recording management |

#####  Background audio playback management

| API | Description |
| --- | --- |
| [uni.getBackgroundAudioManager](media/background-audio-manager) | Background audio playback management | \--> |

#####  Audio component management

| API | Description |
| --- | --- |
| [uni.createInnerAudioContext](media/audio-context) | Audio component management |

#####  Video

| API | Description |
| --- | --- |
| [uni.chooseVideo](media/video#choosevideo) | Choose video from album, or shoot |
| [uni.chooseMedia](media/video#choosemedia) | Capture or select a picture or video from your phone's camera roll. |
| [uni.saveVideoToPhotosAlbum](media/video#savevideotophotosalbum) | Save video to system album |
| [uni.createVideoContext](./media/video-context.md#createvideocontext) | Video component management |

####  Document

| API | Description |
| --- | --- |
| [uni.saveFile](file/file#savefile) | save file | \--> |
| [uni.getSavedFileList](file/file#getsavedfilelist) | Get the list of saved files | \--> |
| [uni.getSavedFileInfo](file/file#getsavedfileinfo) | Get saved file information | \--> |
| [uni.removeSavedFile](file/file#removesavedfile) | Delete saved file information | \--> |
| [uni.getFileInfo](./file/file.md#getfileinfo) | Get file information |
| [uni.openDocument](file/file#opendocument) | Open file |

####  Data cache

| API | Description |
| --- | --- |
| [uni.getStorage](storage/storage#setstorage) | Get local data cache |
| [uni.getStorageSync](storage/storage#setstoragesync) | Get local data cache |
| [uni.setStorage](storage/storage#getstorage) | Set local data cache |
| [uni.setStorageSync](storage/storage#getstoragesync) | Set local data cache |
| [uni.getStorageInfo](storage/storage#getstorageinfo) | Get information about local cache |
| [uni.getStorageInfoSync](storage/storage#getstorageinfosync) | Get information about local cache |
| [uni.removeStorage](storage/storage#removestorage) | Remove local cache content |
| [uni.removeStorageSync](storage/storage#removestoragesync) | Delete local cache content |
| [uni.clearStorage](storage/storage#clearstorage) | Clear local data cache |
| [uni.clearStorageSync](storage/storage#clearstoragesync) | Clear local data cache |

####  Location

#####  Get location

| API | Description |
| --- | --- |
| [uni.getLocation](location/location#getlocation) | Get current location |
| [uni.chooseLocation](location/location#chooselocation) | Open the map and choose the location |

#####  View location

| API | Description |
| --- | --- |
| [uni.openLocation](location/open-location#openlocation) | Open built-in map |

#####  Map component control

| API | Description |
| --- | --- |
| [uni.createMapContext](location/map#createmapcontext) | Map component control |

####  Device

#####  System message

| API | Description |
| --- | --- |
| [uni.getSystemInfo](system/info#getsysteminfo) | Get system information |
| [uni.getSystemInfoSync](system/info#getsysteminfosync) | Get system information |
| [uni.getDeviceInfo](./system/getDeviceInfo.md) | Get basic device information |
| [uni.getWindowInfo](./system/getWindowInfo.md) | Get window information |
| [uni.getAppBaseInfo](./system/getAppBaseInfo.md) | Get base information |
| [uni.getAppBaseInfo](./system/getAppBaseInfo.md) | Get base information |
| [uni.getHostLanguage](./system/getAppBaseInfo.md#uni-gethostlanguage) | Get the host App language |
| [uni.getHostFontSize](./system/getAppBaseInfo.md#uni-getHostFontSize) | Get the host App font size |

| [uni.canIUse](./system/info.md#caniuse) | Determine whether the application's API, callback, parameters, components, etc. are available in the current version |

#####  Network status

| API | Description |
| --- | --- |
| [uni.getNetworkType](system/network#getnetworktype) | Get network type |
| [uni.onNetworkStatusChange](system/network#onnetworkstatuschange) | Monitor network status changes |
| [uni.offNetworkStatusChange](system/network#offnetworkstatuschange) | Cancel monitoring network status changes |

#####  Accelerometer

| API | Description |
| --- | --- |
| [uni.onAccelerometerChange](system/accelerometer#onaccelerometerchange) | Monitor acceleration data |
| [uni.offAccelerometerChange](system/accelerometer#offaccelerometerchange) | Cancel monitoring acceleration data |
| [uni.startAccelerometer](system/accelerometer#startaccelerometer) | Start monitoring acceleration data |
| [uni.stopAccelerometer](system/accelerometer#stopaccelerometer) | Stop monitoring acceleration data |

#####  Compass

| API | Description |
| --- | --- |
| [uni.onCompassChange](system/compass#oncompasschange) | Monitor compass data |
| [uni.offCompassChange](system/compass#offcompasschange) | Cancel monitoring compass data |
| [uni.startCompass](system/compass#startcompass) | Start listening for compass data |
| [uni.stopCompass](system/compass#stopcompass) | Stop monitoring compass data |

#####  Dial number

| API | Description |
| --- | --- |
| [uni.makePhoneCall](system/phone#makephonecall) | make a call |

#####  Scan code

| API | Description |
| --- | --- |
| [uni.scanCode](system/barcode#scancode) | Scan code | \--> |

#####  Clipboard

| API | Description |
| --- | --- |
| [uni.setClipboardData](system/clipboard#setclipboarddata) | Set clipboard content |
| [uni.getClipboardData](system/clipboard#getclipboarddata) | Get clipboard content |

#####  Screen brightness

| API | Description |
| --- | --- |
| [uni.setScreenBrightness](system/brightness#setscreenbrightness) | Set screen brightness |
| [uni.getScreenBrightness](system/brightness#getscreenbrightness) | Get screen brightness |
| [uni.setKeepScreenOn](system/brightness#setkeepscreenon) | Set whether to keep the always-on state |

#####  Vibration

| API | Description |
| --- | --- |
| [uni.vibrate](system/vibrate#vibrate) | Vibrate phone |
| [uni.vibrateLong](system/vibrate#vibratelong) | Make the phone vibrate for a long time |
| [uni.vibrateShort](system/vibrate#vibrateshort) | Make the phone vibrate for a short time |

#####  Mobile phone contact

| API | Description |
| --- | --- |
| [uni.addPhoneContact](system/contact#addphonecontact) | Add phone contacts |

#####  Bluetooth

| API | Description |
| --- | --- |
| [uni.openBluetoothAdapter](./system/bluetooth.md#openbluetoothadapter) | Initialize the Bluetooth module |
| [uni.startBluetoothDevicesDiscovery](./system/bluetooth.md#startbluetoothdevicesdiscovery) | Discover nearby Bluetooth peripherals |
| [uni.onBluetoothDeviceFound](./system/bluetooth.md#onbluetoothdevicefound) | Listen for new device found events |
| [uni.stopBluetoothDevicesDiscovery](./system/bluetooth.md#stopbluetoothdevicesdiscovery) | stop discovery |
| [uni.onBluetoothAdapterStateChange](./system/bluetooth.md#onbluetoothadapterstatechange) | Listen for bluetooth adapter state change events |
| [uni.getConnectedBluetoothDevices](./system/bluetooth.md#getconnectedbluetoothdevices) | Get connected devices by uuid |
| [uni.getBluetoothDevices](./system/bluetooth.md#getbluetoothdevices) | Get discovered bluetooth devices |
| [uni.getBluetoothAdapterState](./system/bluetooth.md#getbluetoothadapterstate) | Get the state of the native Bluetooth adapter |
| [uni.closeBluetoothAdapter](./system/bluetooth.md#closebluetoothadapter) | Close the bluetooth module |

#####  Bluetooth Low Energy

| API | Description |
| --- | --- |
| [uni.writeBLECharacteristicValue](./system/ble.md#writeblecharacteristicvalue) | Write binary data to Bluetooth low energy device characteristic value |
| [uni.readBLECharacteristicValue](./system/ble.md#readblecharacteristicvalue) | Read the binary data value of the characteristic value of the Bluetooth low energy device |
| [uni.onBLEConnectionStateChange](./system/ble.md#onbleconnectionstatechange) | Listen for Bluetooth Low Energy connection state change events |
| [uni.onBLECharacteristicValueChange](./system/ble.md#onblecharacteristicvaluechange) | Monitor the characteristic value change event of Bluetooth low energy devices |
| [uni.notifyBLECharacteristicValueChange](./system/ble.md#notifyblecharacteristicvaluechange) | Enable the notify function when the characteristic value of a Bluetooth low energy device changes, subscribe to the characteristic |
| [uni.getBLEDeviceServices](./system/ble.md#getbledeviceservices) | Get all Bluetooth device services (service) |
| [uni.getBLEDeviceCharacteristics](./system/ble.md#getbledevicecharacteristics) | Get all the characteristic values (characteristic) in a service of a Bluetooth device |
| [uni.createBLEConnection](./system/ble.md#createbleconnection) | Connect to a Bluetooth Low Energy device |
| [uni.closeBLEConnection](./system/ble.md#closebleconnection) | Disconnect from a Bluetooth Low Energy device |

#####  iBeacon

| API | Description |
| --- | --- |
| [uni.onBeaconServiceChange](./system/ibeacon.md#onbeaconservicechange) | Listen for iBeacon service status change events |
| [uni.onBeaconUpdate](./system/ibeacon.md#onbeaconupdate) | Listen for iBeacon device update events |
| [uni.getBeacons](./system/ibeacon.md#getbeacons) | Get all searched iBeacon devices |
| [uni.startBeaconDiscovery](./system/ibeacon.md#startbeacondiscovery) | Stop searching for nearby iBeacon devices |
| [uni.stopBeaconDiscovery](./system/ibeacon.md#stopbeacondiscovery) | Start searching for iBeacon devices nearby |

#####  Biometric authentication

| API | Description |
| --- | --- |
| [uni.startSoterAuthentication](./system/authentication.md#startsoterauthentication) | Start biometric authentication |
| [uni.checkIsSupportSoterAuthentication](./system/authentication.md#checkissupportsoterauthentication) | Get the supported biometric authentication methods |
| [uni.checkIsSoterEnrolledInDevice](./system/authentication.md#checkissoterenrolledindevice) | The interface to obtain whether biometric information such as fingerprints is entered in the device | \--> |

####  Interface

#####  Interactive feedback

| API | Description |
| --- | --- |
| [uni.showToast](ui/prompt#showtoast) | Show prompt box |
| [uni.showLoading](ui/prompt#showloading) | Show loading prompt |
| [uni.hideToast](ui/prompt#hidetoast) | Hide the prompt box |
| [uni.hideLoading](ui/prompt#hideloading) | Hide loading prompt box |
| [uni.showModal](ui/prompt#showmodal) | Show modal popup |
| [uni.showActionSheet](ui/prompt#showactionsheet) | Show menu list |

#####  Set navigation bar

| API | Description |
| --- | --- |
| [uni.setNavigationBarTitle](ui/navigationbar#setnavigationbartitle) | Set the current page title |
| [uni.setNavigationBarColor](./ui/navigationbar.md#setnavigationbarcolor) | Set page navigation bar color |
| [uni.showNavigationBarLoading](ui/navigationbar#shownavigationbarloading) | Show navigation bar loading animation |
| [uni.hideNavigationBarLoading](ui/navigationbar#hidenavigationbarloading) | Hide navigation bar loading animation |

#####  Setting TabBar

| API | Description |
| --- | --- |
| [uni.setTabBarItem](./ui/tabbar.md#settabbaritem) | Dynamically set the content of a tabBar item |
| [uni.setTabBarStyle](./ui/tabbar.md#settabbarstyle) | Dynamically set the overall style of the tabBar |
| [uni.hideTabBar](./ui/tabbar.md#hidetabbar) | hide tabBar |
| [uni.showTabBar](./ui/tabbar.md#showtabbar) | Show tabBar |
| [uni.setTabBarBadge](./ui/tabbar.md#settabbarbadge) | Add text to the upper right corner of a tabBar item |
| [uni.removeTabBarBadge](./ui/tabbar.md#removetabbarbadge) | Remove the text in the upper right corner of a tabBar item |
| [uni.showTabBarRedDot](./ui/tabbar.md#showtabbarreddot) | Show the red dot in the upper right corner of a tabBar item |
| [uni.hideTabBarRedDot](./ui/tabbar.md#hidetabbarreddot) | Hide the red dot in the upper right corner of a tabBar item |

#####  Animation

| API | Description |
| --- | --- |
| [uni.createAnimation](./ui/animation.md#createanimation) | Create an animation instance animation. Call the instance's method to describe the animation. Finally, the animation data is exported through the export method of the animation instance and passed to the animation property of the component. |

#####  Scroll

| API | Description |
| --- | --- |
| [uni.pageScrollTo](./ui/scroll.md#pagescrollto) | Scroll the page to the target position. |

#####  Painting

| API | Description |
| --- | --- |
| [uni.createCanvasContext](./canvas/createCanvasContext.md) | Create drawing context |
| [uni.canvasToTempFilePath](./canvas/canvasToTempFilePath.md) | Save the canvas content to a file |
| [uni.canvasGetImageData](./canvas/canvasGetImageData.md) | Get canvas image data |
| [uni.canvasPutImageData](./canvas/canvasPutImageData.md) | Set canvas image data |

#####  Pull down to refresh

| API | Description |
| --- | --- |
| [onPullDownRefresh](./ui/pulldown.md#onpulldownrefresh) | Listen to the page user pull down refresh event |
| [uni.startPullDownRefresh](./ui/pulldown.md#startpulldownrefresh) | Start pull down refresh |
| [uni.stopPullDownRefresh](./ui/pulldown.md#stoppulldownrefresh) | Stop pull-down refresh of the current page |

#####  Node information

| API | Description |
| --- | --- |
| [uni.createSelectorQuery](ui/nodes-info#createselectorquery) | Create query request |
| [selectorQuery.select](./ui/nodes-info.md#selectorquery-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8) | Select a single node based on selector |
| [selectorQuery.selectAll](./ui/nodes-info.md#selectorquery-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8) | Select all nodes according to selector |
| [selectorQuery.selectViewport](./ui/nodes-info.md#selectorquery-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8) | Select display area |
| [selectorQuery.exec](./ui/nodes-info.md#selectorquery-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8) | Execute query request |
| [nodesRef.boundingClientRect](./ui/nodes-info.md#nodesref-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8) | Get layout position and size |
| [nodesRef.scrollOffset](./ui/nodes-info.md#nodesref-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8) | Get scroll position |
| [nodesRef.fields](./ui/nodes-info.md#nodesref-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8) | Get any field |

#####  Node layout intersection state

| API | Description |
| --- | --- |
| [uni.createIntersectionObserver](ui/intersection-observer#createintersectionobserver) | Create IntersectionObserver object |
| [intersectionObserver.relativeTo](./ui/intersection-observer.md#intersectionobserver-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8) | Specify reference node |
| [intersectionObserver.relativeToViewport](./ui/intersection-observer.md#intersectionobserver-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8) | Specify the page display area as the reference area |
| [intersectionObserver.observe](./ui/intersection-observer.md#intersectionobserver-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8) | Specify the target node and start listening |
| [intersectionObserver.disconnect](./ui/intersection-observer.md#intersectionobserver-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8) | stop listening |

####  Routing

| API | Description |
| --- | --- |
| [uni.navigateTo](./router.md#navigateto) | Keep the current page, jump to a page in the app, use uni.navigateBack to return to the original page |
| [uni.redirectTo](./router.md#redirectto) | Close the current page and jump to a page in the app |
| [uni.reLaunch](./router.md#relaunch) | Close all pages, open to a page in the app |
| [uni.switchTab](./router.md#switchtab) | Jump to the tabBar page and close all other non-tabBar pages |
| [uni.navigateBack](./router.md#navigateback) | Close the current page and return to the previous page or multi-level page |

####  keyboard

| API | Description |
| --- | --- |
| [uni.hideKeyboard](./key.md#hidekeyboard) | Hide the displayed soft keyboard. If the soft keyboard is not displayed, do nothing. |
| [uni.onKeyboardHeightChange](./key.md#onkeyboardheightchange) | Monitor keyboard height changes | \--> |
| [uni.offKeyboardHeightChange](./key.md#offkeyboardheightchange) | Cancel listening for keyboard height change events | \--> |
| [uni.getSelectedTextRange](./key.md#getselectedtextrange) | After input, textarea, etc. focus, get the cursor position of the input box |

####  Open API

| API | Description |
| --- | --- |
| [uni.login](./plugins/login.md#login) | Register |
| [uni.getUserProfile](./plugins/getUserProfile.md) | Get User Info |
| [uni.getAuthCode](./plugins/getAuthCode.md) | Get Auth Code |
| [uni.share](./plugins/share.md#share) | share |
| [uni.shareMiniAppMessage](./plugins/shareMiniAppMessage.md) | share MiniApp to Message |
| [uni.requestPayment](./plugins/payment.md) | Pay |

####  Other

| API | Description |
| --- | --- |
| [uni.setEnableDebug](./other/set-enable-debug.md) | Open the debug switch |
| [uni.launchApp](./other/launchApp.md) | Open Other Apps |
| [uni.restartMiniProgram](./other/restartMiniProgram.md) | Restart Mini App |
| [uni.exitMiniProgram](./other/exitMiniProgram.md) | Exit Mini App |

Due to document synchronization reasons, the APIs listed on this page may not be complete. If you do not find the relevant API in this article, you can find it in the tree on the left or use the search function in the upper right corner of the document.
