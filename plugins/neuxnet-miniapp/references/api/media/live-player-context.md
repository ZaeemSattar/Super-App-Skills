---
title: "uni.createLivePlayerContext(livePlayerId, this)"
source_url: https://miniapp.neuxnet.com/api/media/live-player-context.html
---
###  uni.createLivePlayerContext(livePlayerId, this)

Create a livePlayerContext object for live-player context. Note that it is live broadcast other than live-pusher.

**Platform difference description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| See below | x | √ | x | √ | x | √ | x | √ |

The App platform does not use its API for live broadcast, but directly uses the API of video.

**Parameter Description**

| Parameter | Instruction | Platform difference description |
| --- | --- | --- |
| livePlayerId | `<live-player>` component id |  |
| thYes | Under the custom component, the this of the current component instance to operate the `<live-player>` component in the component | WeChat applet |

**Method list of livePlayerContext object:**

| Method | Parameter | Instruction |
| --- | --- | --- |
| play | Object | Play |
| stop | Object | Stop |
| mute | Object | Mute |
| pause | Object | Pause |
| resume | Object | Restore |
| requestFullScreen | Object | Enter full screen |
| exitFullScreen | Object | Exit full screen |

**Parameter list of requestFullScreen Object:**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| direction | Number | Yes | Set full screen direction, valid values are 0 (normal vertical), 90 (when screen is 90 degrees counterclockwise), -90 (when screen is 90 degrees clockwise). |
| success | Function | No | Callback function for successful interface calling. |
| fail | Function | No | Callback function for failed interface calling. |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling). |

**Parameter list of Objects for other methods:**

| Parameter | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

###  uni.createLivePusherContext(livePusherId, this)

Create the livePusherContext object of the live-pusher context.

**Platform difference description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet |
| --- | --- | --- | --- | --- | --- | --- | --- |
| See below | x | √ | x | x | x | √ | x |

-   The app-nvue platform 2.2.5+ supports uni.createLivePusherContext(livePusherId, this)
-   For app-nvue platform 2.2.5-, you need to set both the component attribute id and ref `<live-pusher id="livepusher1" ref="livepusher1"></live-pusher>`, or use ref directly, for example `this.$refs.livepusher1`
-   For app-vue platform, you need to write conditional compilation code, use `plus.video.LivePusher`, [Business Guide](https://ask.dcloud.net.cn/article/13416) , \[Specification Document\](http: //www.html5plus.org/doc/en\_us/video.html#plus.video.LivePusher)

####  livePusherContext

####  start(OBJECT)

> Start live-pusher

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface call |  |
| fail | Function | No | Callback function for interface call failure |  |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |

####  pause(OBJECT)

> Pause live-pusher

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface call |  |
| fail | Function | No | Callback function for interface call failure |  |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |

####  resume(OBJECT)

> Restore live-pusher

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface call |  |
| fail | Function | No | Callback function for interface call failure |  |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |

####  stop(OBJECT)

> Stop live-pusher

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface call |  |
| fail | Function | No | Callback function for interface call failure |  |
| complete | Function | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |  |

####  switchCamera(OBJECT)

> Switch front and rear cameras

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface call |  |
| fail | Function | No | Callback function for interface call failure |  |
| complete | Function | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |  |

####  snapshot(OBJECT)

> Snapshot

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface call |  |
| fail | Function | No | Callback function for interface call failure |  |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |

####  startPreview(OBJECT)

> Turn on camera preview

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface call |  |
| fail | Function | No | Callback function for interface call failure |  |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |

####  stopPreview(OBJECT)

> Turn off camera preview

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface call |  |
| fail | Function | No | Callback function for interface call failure |  |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |  |
