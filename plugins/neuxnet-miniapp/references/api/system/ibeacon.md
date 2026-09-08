---
title: "uni.onBeaconServiceChange(CALLBACK)"
source_url: https://miniapp.neuxnet.com/api/system/ibeacon.html
---
**Platform difference description for iBeacon APIs**

| Mini App | H5 |
| --- | --- |
| √ | x |

###  uni.onBeaconServiceChange(CALLBACK)

listen to iBeacon service status change events

**CALLBACK return parameter**

| Attribute | Type | Instruction |
| --- | --- | --- |
| available | boolean | Is the service is currently available? |
| discovering | boolean | Whether it is in the searching state currently |

###  uni.onBeaconUpdate(CALLBACK)

listen to iBeacon device update events

**CALLBACK return parameter**

| Attribute | Type | Instruction |
| --- | --- | --- |
| beacons | Array<[IBeaconInfo](./ibeacon.md#ibeaconinfo)\> | List of all iBeacon devices that are searched currently |

###  uni.getBeacons(OBJECT)

Obtain all searched iBeacon devices.

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Success return parameter description:**

| Attribute | Type | Instruction |
| --- | --- | --- |
| beacons | Array<[IBeaconInfo](./ibeacon.md#ibeaconinfo)\> | iBeacon device list |

####  Error

| Error code | Error message | Instruction |
| --- | --- | --- |
| 0 | ok | Normal |
| 11000 | unsupport | Not supported by the system or device |
| 11001 | bluetooth service unavailable | Bluetooth service is unavailable |
| 11002 | location service unavailable | Location service is unavailable |
| 11003 | already start | Search started |

###  uni.startBeaconDiscovery(OBJECT)

Start searching for nearby iBeacon devices

**OBJECT parameter description**

| Attribute | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| uuids | Array＜String＞ |  | Yes | uuid list broadcast by iBeacon device |
| ignoreBluetoothAvailable | boolean | false | No | Whether to check the Bluetooth on/off, valid only on iOS |
| success | function |  | No | Callback function for successful interface calling |
| fail | function |  | No | Callback function for failed interface calling |
| complete | function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

####  Error

| Error code | Error message | Instruction |
| --- | --- | --- |
| 0 | ok | Normal |
| 11000 | unsupport | Not supported by the system or device |
| 11001 | bluetooth service unavailable | Bluetooth service is unavailable |
| 11002 | location service unavailable | Location service is unavailable |
| 11003 | already start | Search started |

####  Sample code

```
uni.startBeaconDiscovery({
  success(res) { }
})
```

###  uni.stopBeaconDiscovery(OBJECT)

Stop searching for nearby iBeacon devices

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
| 11000 | unsupport | Not supported by the system or device |
| 11001 | bluetooth service unavailable | Bluetooth service is unavailable |
| 11002 | location service unavailable | Location service is unavailable |
| 11003 | already start | Search started |

###  IBeaconInfo

| Attribute | Type | Instruction |
| --- | --- | --- |
| uuid | string | uuid broadcast by iBeacon device |
| major | string | Primary id of iBeacon device |
| minor | string | Secondary id of iBeacon device |
| proximity | number | Enumeration value representing device distance |
| accuracy | number | Distance of iBeacon device |
| rssi | number | Indicate the signal strength of the device |

###  Precautions

-   Disabling localization will affect the normal use of iBeacon.
