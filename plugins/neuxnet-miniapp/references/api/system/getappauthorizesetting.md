---
title: "uni.getAppAuthorizeSetting()"
source_url: https://miniapp.neuxnet.com/api/system/getappauthorizesetting.html
---
###  uni.getAppAuthorizeSetting()

Get APP authorization settings

**Platform Difference Description**

|Mini App|H5| |Mini App|H5| |:-😐:-😐 |√|x| |√|x|

**Return parameter description**

| Properties | Type | Description | Platform Difference Description |
| --- | --- | --- | --- |
| albumAuthorized | 'authorized'/'denied'/'not determined' | Album switch | Album only iOS support |
| bluetoothAuthorized | 'authorized'/'denied'/'not determined'/'config error' | The switch that allows the use of Bluetooth | App only supports iOS |
| cameraAuthorized | 'authorized'/'denied'/'not determined'/'config error' | Switch to allow camera use |  |
| locationAuthorized | 'authorized'/'denied'/'not determined'/'config error' | Located switch allowed |  |
| locationAccuracy | String | Location accuracy. `"reduced"` means fuzzy positioning; `"full"` means precise positioning; `"unsupported"` means not supported | Only iOS supports on the App side |
| microphoneAuthorized | 'authorized'/'denied'/'not determined'/'config error' | Switch to allow microphone use |
| notificationAuthorized | 'authorized'/'denied'/'not determined'/'config error' | Allow notification switch |  |
| notificationAlertAuthorized | 'authorized'/'denied'/'not determined'/'config error' | Allow notification switch with reminder | App side only supported by iOS (10.0+) |
| notificationBadgeAuthorized | 'authorized'/'denied'/'not determined'/'config error' | Allow notification of flagged switches | App-side only supported on iOS (10.0+) |
| notificationSoundAuthorized | 'authorized'/'denied'/'not determined'/'config error' | Allow notifications with sound switch | App side only supported by iOS (10.0+) |
| phoneCalendarAuthorized | 'authorized'/'denied'/'not determined' | The switch that allows reading and writing the calendar | Not supported on the App side |

####  Deprecated return parameter, reserved for compatibility only

|locationReducedAccuracy|boolean|Ambiguous location. true means fuzzy positioning, false means precise positioning |App only supports iOS|

**Tips：**

-   `'authorized'`: indicates that authorization has been obtained, and there is no need to request authorization again;
-   `'denied'`: Indicates that the request for authorization is denied, and the authorization cannot be requested again; (in this case, the user needs to be guided to open the system settings and open the permissions in the settings page)
-   `'non determined'`: Indicates that authorization has not been requested, and will be requested when the App next calls the system for the corresponding permission; (appears only on iOS. In this case, the user is guided to open the system settings, and the switch is not displayed)
-   `'config error'`: only returned on the App side
    -   bluetoothAuthorized：
        -   Android platform will not return `config error`
        -   iOS platform: indicates that the `BlueTooth (Bluetooth Low Energy)` module is not configured in `manifest.json -> App module configuration`
    -   cameraAuthorized：
        -   Android platform: indicates that the `android.permission.CAMERA` permission is not granted
        -   iOS platform will not return `config error`
    -   locationAuthorized：
        -   Android platform: indicates that the `android.permission.ACCESS_COARSE_LOCATION` permission is not granted
        -   iOS platform: indicates that the `Geolocation (location)` module is not configured in `manifest.json -> App module configuration`
    -   microphoneAuthorized：
        -   Android platform: indicates that the `android.permission.RECORD_AUDIO` permission is not granted
        -   iOS platform will not return `config error`
    -   notificationAuthorized、notificationAlertAuthorized、notificationBadgeAuthorized、notificationSoundAuthorized：
        -   Android platform not supported
        -   iOS platform: Indicates that the `Push' module is not configured in`manifest.json -> App module configuration\`

**Example**

```
const appAuthorizeSetting = uni.getAppAuthorizeSetting()

console.log(appAuthorizeSetting.albumAuthorized)
console.log(appAuthorizeSetting.bluetoothAuthorized)
console.log(appAuthorizeSetting.cameraAuthorized)
console.log(appAuthorizeSetting.locationAuthorized)
console.log(appAuthorizeSetting.locationReducedAccuracy)
console.log(appAuthorizeSetting.microphoneAuthorized)
console.log(appAuthorizeSetting.notificationAlertAuthorized)
console.log(appAuthorizeSetting.notificationAuthorized)
console.log(appAuthorizeSetting.notificationBadgeAuthorized)
console.log(appAuthorizeSetting.notificationSoundAuthorized)
console.log(appAuthorizeSetting.phoneCalendarAuthorized)
```
