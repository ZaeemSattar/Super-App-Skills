---
title: "uni.openBluetoothAdapter(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/system/bluetooth.html
---
**Platform difference description for Bluetooth APIs**

| Mini App | H5 |
| --- | --- |
| √ | x |

###  uni.openBluetoothAdapter(OBJECT)

Initialize the Bluetooth module

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

####  Error

| Error code | Error message | Instruction |
| --- | --- | --- |
| 0 | ok | Normal |
| \-1 | already connect | connected |
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

**Notice**

-   Other Bluetooth-related APIs must be used after calling [`uni.openBluetoothAdapter`](./bluetooth.md#openbluetoothadapter). Otherwise, the API will return an error (errCode=10000).
-   If the Bluetooth of the user is disabled or the mobile phone does not support Bluetooth, calling [`uni.openBluetoothAdapter`](./bluetooth.md#openbluetoothadapter) will return an error (errCode=10001), indicating that the Bluetooth function of the mobile phone is unavailable. At this time, the Bluetooth module on the APP has been initialized. You can listen to the changes of Bluetooth status of mobile phone through [`uni.onBluetoothAdapterStateChange`](./bluetooth.md#onbluetoothadapterstatechange) or call all the APIs of the Bluetooth module.

**Sample code**

```
uni.openBluetoothAdapter({
  success(res) {
    console.log(res)
  }
})
```

###  uni.startBluetoothDevicesDiscovery(OBJECT)

Start to search for nearby Bluetooth peripherals. **Such an operation consumes system resources. Please call the [`uni.stopBluetoothDevicesDiscovery`](./bluetooth.md#stopbluetoothdevicesdiscovery) method to stop searching after searching and connecting to the device.**

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| services | Array<String> |  | No | List of uuids of the bluetooth device primary service to search for. Some bluetooth devices broadcast the uuid of their own primary service. If this parameter is set, only the bluetooth devices whose broadcast packets have the corresponding uuid's main service will be searched. It is recommended to mainly filter out other Bluetooth devices that do not need to be processed through this parameter. |
| allowDuplicatesKey | boolean | false | No | Whether to allow repeatedly reporting the same device. If repeated reporting is allowed, the `uni.onBlueToothDeviceFound` method will report the same device multiple times but with a different RSSI value each time. |
| interval | number | 0 | No | Interval for reporting devices. 0 means reporting immediately when a new device is found, and other values means reporting according to the transition intervals. |
| powerLevel | string | medium | No | Scanning mode, the higher the scanning speed, the more power consumption, only supported by Android. low: low, medium: medium, high: high. Only JD.com applet support |
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

**Sample code**

```
// Take the Bluetooth smart light of the WeChat hardware platform as an example, the UUID of the main service is FEE7. Pass in this parameter to only search for devices whose main service UUID is FEE7
uni.startBluetoothDevicesDiscovery({
  services: ['FEE7'],
  success(res) {
    console.log(res)
  }
})
```

###  uni.onBluetoothDeviceFound(CALLBACK)

listen to the event of finding a new device

**CALLBACK return parameter**

| Attribute | Type | Instruction |
| --- | --- | --- |
| devices | Array<Object> | List of newly searched devices |

**Structure of devices**

| Attribute | Type | Instruction |
| --- | --- | --- |
| name | string | Bluetooth device name. Some devices may not have a name |
| deviceId | string | Id used to distinguish the devices |
| RSSI | number | Signal strength of the current Bluetooth device |
| advertisData | ArrayBuffer | ManufacturerData segment in the broadcast data segment of the current Bluetooth device. |
| advertisServiceUUIDs | Array<String> | ServiceUUIDs data segment in broadcast data segment of the current Bluetooth device |
| localName | string | The LocalName data segment in the broadcast data segment of the current Bluetooth device |
| serviceData | Object | The ServiceData data segment in the broadcast data segment of the current Bluetooth device, the JD applet does not support |

**Notice**

-   If a device is called back in [`uni.onBluetoothDeviceFound`](./bluetooth.md#onbluetoothdevicefound), it will be added to the array obtained by the [`uni.getBluetoothDevices`](./bluetooth.md#getbluetoothdevices) interface.

**Sample code**

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
uni.onBluetoothDeviceFound(function (devices) {
  console.log('new device list has founded')
  console.dir(devices)
  console.log(ab2hex(devices[0].advertisData))
})
```

###  uni.stopBluetoothDevicesDiscovery(OBJECT)

Stop searching for nearby Bluetooth peripherals. If the required Bluetooth device that has been found needn't to continue searching, it is recommended to call this interface to stop Bluetooth searching.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
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

**Sample code**

```
uni.stopBluetoothDevicesDiscovery({
  success(res) {
    console.log(res)
  }
})
```

###  uni.onBluetoothAdapterStateChange(CALLBACK)

listen to Bluetooth adapter status change events

**CALLBACK return parameter**

| Attribute | Type | Instruction |
| --- | --- | --- |
| available | boolean | Is the Bluetooth adapter available? |
| discovering | boolean | Whether the Bluetooth adapter is in the searching state |

**Sample code**

```
uni.onBluetoothAdapterStateChange(function (res) {
  console.log('adapterState changed, now is', res)
})
```

###  uni.getConnectedBluetoothDevices(OBJECT)

Obtain the devices with connected status according to uuid.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| services | Array<String> |  | Yes | uuid list of Bluetooth device main service |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Success return parameter description:**

| Attribute | Type | Instruction |
| --- | --- | --- |
| devices | Array<Object> | List of searched devices |

**Structure of res.devices**

| Attribute | Type | Instruction |
| --- | --- | --- |
| name | string | Bluetooth device name. Some devices may not have a name |
| deviceId | string | Id used to distinguish the devices |

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

**Sample code**

```
uni.getConnectedBluetoothDevices({
  success(res) {
    console.log(res)
  }
})
```

###  uni.getBluetoothDevices(OBJECT)

Get all discovered Bluetooth devices during the Bluetooth module's effective period. Devices that are already connected to the local PC are included.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Success return parameter description:**

| Attribute | Type | Instruction |
| --- | --- | --- |
| devices | Array<Object> | List of connected devices corresponding to uuid |

**Structure of res.devices**

| Attribute| Type| Instruction| |---|---|---|---| | name| string| Bluetooth device name. Some devices may not have a name| | deviceId| string| Id used to distinguish the devices| | RSSI| number| Signal strength of the current Bluetooth device| | advertisData| ArrayBuffer| ManufacturerData segment in the broadcast data segment of the current Bluetooth device.| | advertisServiceUUIDs| Array<String>| ServiceUUIDs data segment in broadcast data segment of the current Bluetooth device| | localName| string| The LocalName data segment in the broadcast data segment of the current Bluetooth device| | serviceData| Object| ServiceData data segment in broadcast data segment of the current Bluetooth device|

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
| 10012 | operate time out | Connection timed out |
| 10013 | invalid\_data | The connection deviceId is empty or in an incorrect format |

**Sample code**

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
uni.getBluetoothDevices({
  success(res) {
    console.log(res)
    if (res.devices[0]) {
      console.log(ab2hex(res.devices[0].advertisData))
    }
  }
})
```

**Notice**

-   The list of devices obtained by this interface is **. For all searched Bluetooth devices during the effective period of Bluetooth module**, if [`uni.closeBluetoothAdapter`](./bluetooth.md#closebluetoothadapter) is not called to release resources in time after the end of the Bluetooth module use process, there will be a problem that calling this interface will return the Bluetooth devices searched in the previous Bluetooth usage process. At this point, such devices may no longer be with the user and cannot be connected.
-   When a Bluetooth device is searched, the name field returned by the system is usually the device name in the LocalName field in the broadcast packet. However, if a connection is established with the Bluetooth device, the name field returned by the system will be changed to `GattName` obtained from the Bluetooth device. If the device name needs to be dynamically changed and displayed, the `localName` field is recommended.

###  uni.getBluetoothAdapterState(OBJECT)

Obtain the local Bluetooth adapter status.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Success return parameter description:**

| Attribute | Type | Instruction |
| --- | --- | --- |
| discovering | boolean | Whether the device is being searched? |
| available | boolean | Is the Bluetooth adapter available? |

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

**Sample code**

```
uni.getBluetoothAdapterState({
  success(res) {
    console.log(res)
  }
})
```

###  uni.closeBluetoothAdapter(OBJECT)

Disable the Bluetooth module. Calling this method will disconnect all established connections and release the system resources. It is recommended to call in pairs with [`uni.openBluetoothAdapter`](./bluetooth.md#openbluetoothadapter) after using the Bluetooth process.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
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

**Sample code**

```
uni.closeBluetoothAdapter({
  success(res) {
    console.log(res)
  }
})
```
