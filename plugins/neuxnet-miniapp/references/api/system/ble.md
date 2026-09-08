---
title: "uni.setBLEMTU(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/system/ble.html
---
**Platform difference description for low power Bluetooth APIs**

| Mini App | H5 |
| --- | --- |
| √ | x |

###  uni.setBLEMTU(OBJECT)

2.8.4+

Set the Bluetooth maximum transmission unit. It needs to be called after the successful invocation of uni.createBLEConnection with the mtu setting range of (22,512). Valid for Android 5.1 and above.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| deviceId | string |  | Yes | Id used to distinguish the devices |
| mtu | number |  | Yes | Within the maximum transmission unit (22,512) interval, in byte. |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

###  uni.writeBLECharacteristicValue(OBJECT)

Write binary data into the characteristic value of the low power Bluetooth devices. Note: Successful invocation requires the characteristic value of the device supporting write.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| deviceId | string |  | Yes | Bluetooth device id |
| serviceId | string |  | Yes | uuid of the service corresponding to Bluetooth characteristic value |
| characteristicId | string |  | Yes | uuid of Bluetooth characteristic value |
| value | ArrayBuffer |  | Yes | Binary value corresponding to the characteristic value of Bluetooth device |
| writeType | string |  | is the writing mode setting of | Bluetooth eigenvalues. There are two modes, iOS prioritizes write, and Android prioritizes writeNoResponse . |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**writeType**

| Properties | Description |
| --- | --- |
| write | Forcibly reply writing, an error is reported when it is not supported |
| writeNoResponse | Force no reply write, report an error if not supported |

####  Error

| Error code | Error message | Instruction |
| --- | --- | --- |
| 0 | ok | Normal |
| 10000 | not init | Bluetooth is not initialized |
| 10001 | not available | The bluetooth adapter is currently unavailable. |
| 10002 | no device | Specified device not found |
| 10003 | connection fail | Connection failed |
| 10004 | no service | Specified service not found |
| 10005 | no characteristic | Specified feature value not found |
| 10006 | no connection | The current connection is disconnected |
| 10007 | property not support | The current characteristic value does not support this operation. |
| 10008 | system error | Exceptions reported by all other systems |
| 10009 | system not support | Android system-specific. BLE is not available on system version lower than 4.3. |
| 10010 | already connect | Connected |
| 10011 | need pin | Pairing device requires pairing code |
| 10012 | operate time out | Connection timed out |
| 10013 | invalid\_data | The connection deviceId is empty or in an incorrect format |

####  Notice

-   There is the possibility of write failure when calling in parallel for many times.
-   APP does not limit the size of written data packets, but the system and Bluetooth devices will limit the size of data transmitted in Bluetooth 4.0 in a single time. If the maximum number of bytes is exceeded, writing errors will occur. It is recommended that no more than 20 bytes be written each time.
-   If the write-once data is too long, there is a situation that the system will not have any callback (including error callback) on iOS.
-   On the Android platform, the `writeBLECharacteristicValue` interface will be called immediately after the successful call of `notifyBLECharacteristicValueChange`, and the system error 10008 will occur on some models

####  Sample code

```
//Send a 0x00 hexadecimal data to the Bluetooth device
const buffer = new ArrayBuffer(1)
const dataView = new DataView(buffer)
dataView.setUint8(0, 0)
uni.writeBLECharacteristicValue({
  //The deviceId here needs to be obtained in the getBluetoothDevices or onBluetoothDeviceFound interface.
  deviceId,
  //The serviceId here needs to be obtained in the getBLEDeviceServices interface.
  serviceId,
  //The characteristicId here needs to be obtained in the getBLEDeviceCharacteristics interface.
  characteristicId,
  //The value here is of type ArrayBuffer
  value: buffer,
  success(res) {
    console.log('writeBLECharacteristicValue success', res.errMsg)
  }
})
```

###  uni.readBLECharacteristicValue(OBJECT)

Read the binary data value of the characteristic value of the low power Bluetooth devices. Note: Successful invocation requires the characteristic value of the device supporting read.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| deviceId | string |  | Yes | Bluetooth device id |
| serviceId | string |  | Yes | uuid of the service corresponding to Bluetooth characteristic value |
| characteristicId | string |  | Yes | uuid of Bluetooth characteristic value |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

####  Error

| Error code | Error message | Instruction |
| --- | --- | --- |
| 0 | ok | Normal |
| 10000 | not init | Bluetooth is not initialized |
| 10001 | not available | The bluetooth adapter is currently unavailable. |
| 10002 | no device | Specified device not found |
| 10003 | connection fail | Connection failed |
| 10004 | no service | Specified service not found |
| 10005 | no characteristic | Specified feature value not found |
| 10006 | no connection | The current connection is disconnected |
| 10007 | property not support | The current characteristic value does not support this operation. |
| 10008 | system error | Exceptions reported by all other systems |
| 10009 | system not support | Android system-specific. BLE is not available on system version lower than 4.3. |
| 10010 | already connect | Connected |
| 10011 | need pin | Pairing device requires pairing code |
| 10012 | operate time out | Connection timed out |
| 10013 | invalid\_data | The connection deviceId is empty or in an incorrect format |

####  Notice

-   There is the possibility of read failure when calling in parallel for many times.
-   The information read by the interface needs to be obtained in the callback registered by the `onBLECharacteristicValueChange` method.

####  Sample code

```
//Only callbacks here can be obtained.
uni.onBLECharacteristicValueChange(function (characteristic) {
  console.log('characteristic value comed:', characteristic)
})
uni.readBLECharacteristicValue({
  //The deviceId here needs to have established a link with the corresponding device through createBLEConnection.
  deviceId,
  //The serviceId here needs to be obtained in the getBLEDeviceServices interface.
  serviceId,
  //The characteristicId here needs to be obtained in the getBLEDeviceCharacteristics interface.
  characteristicId,
  success(res) {
    console.log('readBLECharacteristicValue:', res.errCode)
  }
})
```

###  uni.onBLEConnectionStateChange(CALLBACK)

listen to the change events of low power Bluetooth connection status. Include developers actively connecting or disconnecting, device loss, abnormal disconnection and so on.

**CALLBACK return parameter**

| Attribute | Type | Instruction |
| --- | --- | --- |
| deviceId | string | Bluetooth device ID |
| connected | boolean | Is it connected? |

####  Sample code

```
uni.onBLEConnectionStateChange(function (res) {
  //The callback of this method can be used to handle abnormal situations such as unexpected disconnection and so on.
  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
})
```

###  uni.onBLECharacteristicValueChange(CALLBACK)

listen to the characteristic value change events of the low power Bluetooth devices. You must first enable the `notifyBLECharacteristicValueChange` interface to receive notification pushed by the device.

**CALLBACK return parameter**

| Attribute | Type | Instruction |
| --- | --- | --- |
| deviceId | string | Bluetooth device id |
| serviceId | string | uuid of the service corresponding to Bluetooth characteristic value |
| characteristicId | string | uuid of Bluetooth characteristic value |
| value | ArrayBuffer | Latest value of the eigenvalue |

####  Sample code

```
// Example for ArrayBuffer transformed to hexadecimal string
function ab2hex(buffer) {
  const hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('')
}
uni.onBLECharacteristicValueChange(function (res) {
  console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)
  console.log(ab2hex(res.value))
})
```

###  uni.notifyBLECharacteristicValueChange(OBJECT)

Enable the notify function when the characteristic values of low power Bluetooth device changes, and subscribe to the characteristic values. Notice: Only when the characteristic value of the necessary device supports notify or indicate can it be called successfully. In addition, you must first enable `notifyBLECharacteristicValueChange` to listen to device `characteristicValueChange` events

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| deviceId | string |  | Yes | Bluetooth device id |
| serviceId | string |  | Yes | uuid of the service corresponding to Bluetooth characteristic value |
| characteristicId | string |  | Yes | uuid of Bluetooth characteristic value |
| state | boolean |  | Yes | Enable notify or not |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

####  Error

| Error code | Error message | Instruction |
| --- | --- | --- |
| 0 | ok | Normal |
| 10000 | not init | Bluetooth is not initialized |
| 10001 | not available | The bluetooth adapter is currently unavailable. |
| 10002 | no device | Specified device not found |
| 10003 | connection fail | Connection failed |
| 10004 | no service | Specified service not found |
| 10005 | no characteristic | Specified feature value not found |
| 10006 | no connection | The current connection is disconnected |
| 10007 | property not support | The current characteristic value does not support this operation. |
| 10008 | system error | Exceptions reported by all other systems |
| 10009 | system not support | Android system-specific. BLE is not available on system version lower than 4.3. |
| 10010 | already connect | Connected |
| 10011 | need pin | Pairing device requires pairing code |
| 10012 | operate time out | Connection timed out |
| 10013 | invalid\_data | The connection deviceId is empty or in an incorrect format |

####  Notice

-   After the subscription is successful, the device needs to actively update the value of the characteristic value to trigger the [`uni.onBLECharacteristicValueChange`](./ble.md#onblecharacteristicvaluechange) callback.
-   On the Android platform, the `writeBLECharacteristicValue` interface will be called immediately after the successful call of `notifyBLECharacteristicValueChange`, and the system error 10008 will occur on some models

####  Sample code

```
uni.notifyBLECharacteristicValueChange({
  //The deviceId here needs to have established a link with the corresponding device through createBLEConnection.
  deviceId,
  //The serviceId here needs to be obtained in the getBLEDeviceServices interface.
  serviceId,
  //The characteristicId here needs to be obtained in the getBLEDeviceCharacteristics interface.
  characteristicId,
  success(res) {
    console.log('notifyBLECharacteristicValueChange success', res.errMsg)
  }
})
```

###  uni.getBLEDeviceServices(OBJECT)

Obtain all services of the Bluetooth devices.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| deviceId | string |  | Yes | Bluetooth device id |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Success return parameter description:**

| Attribute | Type | Instruction |
| --- | --- | --- |
| services | Array<Object> | Equipment service list |

**Structure of res.services**

| Attribute | Type | Instruction |
| --- | --- | --- |
| uuid | string | uuid of Bluetooth device service |
| isPrimary | boolean | Whether the service is a primary service |

####  Error

| Error code | Error message | Instruction |
| --- | --- | --- |
| 0 | ok | Normal |
| 10000 | not init | Bluetooth is not initialized |
| 10001 | not available | The bluetooth adapter is currently unavailable. |
| 10002 | no device | Specified device not found |
| 10003 | connection fail | Connection failed |
| 10004 | no service | Specified service not found |
| 10005 | no characteristic | Specified feature value not found |
| 10006 | no connection | The current connection is disconnected |
| 10007 | property not support | The current characteristic value does not support this operation. |
| 10008 | system error | Exceptions reported by all other systems |
| 10009 | system not support | Android system-specific. BLE is not available on system version lower than 4.3. |
| 10010 | already connect | Connected |
| 10011 | need pin | Pairing device requires pairing code |
| 10012 | operate time out | Connection timed out |
| 10013 | invalid\_data | The connection deviceId is empty or in an incorrect format |

####  Sample code

```
uni.getBLEDeviceServices({
  //The deviceId here needs to have established a link with the corresponding device through createBLEConnection.
  deviceId,
  success(res) {
    console.log('device services:', res.services)
  }
})
```

###  uni.getBLEDeviceRSSI(OBJECT)

2.8.4+

Get the signal strength of Bluetooth device.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| deviceId | string |  | Yes | Bluetooth device id |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

###  uni.getBLEDeviceCharacteristics(OBJECT)

Obtain all characteristic values of a certain service of that Bluetooth device.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| deviceId | string |  | Yes | Bluetooth device id |
| serviceId | string |  | Yes | Bluetooth service uuid needs to be obtained using `getBLEDeviceServices` |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Success return parameter description:**

| Attribute| Type| Instruction| |---|---|---|---| | characteristics| Array<Object>| Equipment service list|

**Structure of res.characteristics**

| Attribute | Type | Instruction |
| --- | --- | --- |
| uuid | string | uuid of Bluetooth device's characteristic value |
| properties | Object | Operation types supported by this characteristic value |

**Structure of properties**

| Attribute | Type | Instruction |
| --- | --- | --- |
| read | boolean | Does this characteristic value support read operation |
| write | boolean | Does this characteristic value support write operation |
| notify | boolean | Does this characteristic value support notify operation |
| indicate | boolean | Does this characteristic value support indicate operation |

####  Error

| Error code | Error message | Instruction |
| --- | --- | --- |
| 0 | ok | Normal |
| 10000 | not init | Bluetooth is not initialized |
| 10001 | not available | The bluetooth adapter is currently unavailable. |
| 10002 | no device | Specified device not found |
| 10003 | connection fail | Connection failed |
| 10004 | no service | Specified service not found |
| 10005 | no characteristic | Specified feature value not found |
| 10006 | no connection | The current connection is disconnected |
| 10007 | property not support | The current characteristic value does not support this operation. |
| 10008 | system error | Exceptions reported by all other systems |
| 10009 | system not support | Android system-specific. BLE is not available on system version lower than 4.3. |

####  Sample code

```
uni.getBLEDeviceCharacteristics({
  //The deviceId here needs to have established a link with the corresponding device through createBLEConnection.
  deviceId,
  //The serviceId here needs to be obtained in the getBLEDeviceServices interface.
  serviceId,
  success(res) {
    console.log('device getBLEDeviceCharacteristics:', res.characteristics)
  }
})
```

###  uni.createBLEConnection(OBJECT)

Connect low power Bluetooth devices.

If the APP has searched for a Bluetooth device beforehand and successfully connected, you can directly transmit the deviceId obtained by the previous search and directly try to connect to the device without searching again.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| deviceId | string |  | Yes | Id used to distinguish the devices |
| timeout | number |  | No | Timeout time in ms |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

####  Error

| Error code | Error message | Instruction |
| --- | --- | --- |
| 0 | ok | Normal |
| 10000 | not init | Bluetooth is not initialized |
| 10001 | not available | The bluetooth adapter is currently unavailable. |
| 10002 | no device | Specified device not found |
| 10003 | connection fail | Connection failed |
| 10004 | no service | Specified service not found |
| 10005 | no characteristic | Specified feature value not found |
| 10006 | no connection | The current connection is disconnected |
| 10007 | property not support | The current characteristic value does not support this operation. |
| 10008 | system error | Exceptions reported by all other systems |
| 10009 | system not support | Android system-specific. BLE is not available on system version lower than 4.3. |
| 10010 | already connect | Connected |
| 10011 | need pin | Pairing device requires pairing code |
| 10012 | operate time out | Connection timed out |
| 10013 | invalid\_data | The connection deviceId is empty or in an incorrect format |

####  Notice

-   Make sure to call the `createBLEConnection` and `closeBLEConnection` interfaces in pairs as much as possible. If Android calls `createBLEConnection` multiple times to create a connection, the system may hold multiple connection instances of the same device, resulting in the failure to truly disconnect from the device when calling `closeBLEConnection`.
-   Bluetooth connection may be disconnected at any time. It is recommended to listen to the [`uni.onBLEConnectionStateChange`](./ble.md#onbleconnectionstatechange) callback event and perform reconnect operation as needed when Bluetooth device is disconnected
-   If the interface of data read-write operation is called for the unconnected or disconnected devices, it will return 10006 error, and recommend to reconnect again.

####  Sample code

```
uni.createBLEConnection({
  //The deviceId here needs to have established a link with the corresponding device through createBLEConnection.
  deviceId,
  success(res) {
    console.log(res)
  }
})
```

###  uni.closeBLEConnection(OBJECT)

Disconnect from low power Bluetooth devices.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| deviceId | string |  | Yes | Id used to distinguish the devices |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

####  Error

| Error code | Error message | Instruction |
| --- | --- | --- |
| 0 | ok | Normal |
| 10000 | not init | Bluetooth is not initialized |
| 10001 | not available | The bluetooth adapter is currently unavailable. |
| 10002 | no device | Specified device not found |
| 10003 | connection fail | Connection failed |
| 10004 | no service | Specified service not found |
| 10005 | no characteristic | Specified feature value not found |
| 10006 | no connection | The current connection is disconnected |
| 10007 | property not support | The current characteristic value does not support this operation. |
| 10008 | system error | Exceptions reported by all other systems |
| 10009 | system not support | Android system-specific. BLE is not available on system version lower than 4.3. |
| 10010 | already connect | Connected |
| 10011 | need pin | Pairing device requires pairing code |
| 10012 | operate time out | Connection timed out |
| 10013 | invalid\_data | The connection deviceId is empty or in an incorrect format |

####  Sample code

```
uni.closeBLEConnection({
  deviceId,
  success(res) {
    console.log(res)
  }
})
```
