---
title: "uni.createLivePusherContext(livePusherId, this)"
source_url: https://miniapp.neuxnet.com/api/media/live-pusher-context.html
---
###  uni.createLivePusherContext(livePusherId, this)

Create the livePusherContext object of the live-pusher context.

**Platform difference description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet |
| --- | --- | --- | --- | --- | --- |
| See below | x | √ | x | x | x |

**Parameter Description**

Set the live-pusher address and live-pusher video mode of the live-pusher component.

| property | type | default value | required | description |
| --- | --- | --- | --- | --- |
| url | string |  | yes | The push stream address, which supports RTMP protocol. |
| mode | string |  | No | Push video mode, available values: SD (standard definition), HD (high definition), FHD (ultra-definition). |
| muted | Boolean | false | no | Whether to mute. |
| enable-camera | Boolean | true | no | Enable the camera. |
| auto-focus | Boolean | true | No | Auto-focus. |
| beauty | Number | 0 | No | Beauty, the value range is 0-9 (iOS value range is 1), 0 means off. |
| whiteness | Number | 0 | No | Whiteness, the value range is 0-9 (iOS value range is 1), 0 means off. |

**Notice:**

-   The app-nvue platform 2.2.5+ supports uni.createLivePusherContext(livePusherId, this)
-   On app-nvue platform 2.2.5, you need to set both the component attribute id and ref `<live-pusher id="livepusher1" ref="livepusher1"></live-pusher>`, or use ref directly, for example `this.$refs.livepusher1`

###  API

####  start(callback)

> Start live-pusher

#####  Parameter description of callback return object

| property | type | description |
| --- | --- | --- |
| type | String | "success" for success, "fail" for failure |

####  pause(callback)

> Pause live-pusher

#####  Parameter description of callback return object

| parameter | type | description |
| --- | --- | --- |
| type | String | "success" for success, "fail" for failure |

####  resume(callback)

> Restore live-pusher

#####  Parameter description of callback return object

| parameter | type | description |
| --- | --- | --- |
| type | String | "success" for success, "fail" for failure |

####  stop(callback)

> Stop live-pusher

#####  Parameter description of callback return object

| parameter | type | description |
| --- | --- | --- |
| type | String | "success" for success, "fail" for failure |

####  switchCamera(callback)

> Switch front and rear cameras

#####  Parameter description of callback return object

| parameter | type | description |
| --- | --- | --- |
| type | String | "success" for success, "fail" for failure |

####  snapshot(callback)

> Snapshot

#####  Parameter description of callback return object

#####  Callback on success

| parameter | type | description |
| --- | --- | --- |
| type | string | "success" means success, "fail" means failure |
| code | Number | corresponds to the code |
| message | object | {width:"Snapshot image width",height:"Snapshot image height",tempImagePath:"Snapshot image path"}. |

#####  Failed callback

| parameter | type | description |
| --- | --- | --- |
| code | Number |
| message | object |

####  startPreview(callback)

> Turn on camera preview

#####  Parameter description of callback return object

| parameter | type | description |
| --- | --- | --- |
| type | String | "success" for success, "fail" for failure |

####  stopPreview(callback)

> Turn off camera preview

#####  Parameter description of callback return object

| parameter | type | description |
| --- | --- | --- |
| type | String | "success" for success, "fail" for failure |

###  Event

####  statechange

> State change event

#####  Detailed description of return parameter (detail)

| parameter | type | description |
| --- | --- | --- |
| code | Number |
| message | string |

####  netstatus

> Network status notification event

#####  For Android, the detailed description of return parameter (detail)

| keyname | description |
| --- | --- |
| videoBitrate | The current output bit rate of the video encoder/encoder, in kbps |
| audioBitrate | The current output bit rate of the audio encoder/encoder, in kbps |
| videoFPS | current video frame rate |
| videoGOP | The current video GOP, that is, the interval between every two key frames (I frames), in s |
| netSpeed | current send/receive speed |
| netJitter | Network jitter situation, the greater the jitter, the more unstable the network is |
| videoWidth | The width of the video screen |
| videoHeight | The height of the video screen |

#####  For iOS, the detailed description of return parameter (detail)

| parameter | type | description |
| --- | --- | --- |
| code | Number | code |
| message | string | Specific network status information |

####  error

> Render error event

#####  Detailed description of return parameter (detail)

| parameter | type | description |
| --- | --- | --- |
| errCode | Number |
| errMsg | string |
