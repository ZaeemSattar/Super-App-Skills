---
title: "uni.connectSocket(OBJECT)"
source_url: https://miniapp.neuxnet.com/api/request/websocket.html
---
###  uni.connectSocket(OBJECT)

Create a [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) connection.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| url | String | yes | server interface address | must be `wss://` protocol in applet |
| header | Object | No | HTTP Header , Referer cannot be set in the header | Applet, App 2.9.6+ |
| protocols | Array<String> | No | Subprotocol Array | App, H5, WeChat applet, Baidu applet, ByteDance applet, Feishu applet |
| success | Function | No | Callback function for successful interface calling |  |
| fail | Function | No | Callback function for failed interface calling |  |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |  |

**Sample code**

```
uni.connectSocket({
	url: 'wss://www.example.com/socket',
	data() {
		return {
			x: '',
			y: ''
		};
	},
	header: {
		'content-type': 'application/json'
	},
	protocols: ['protocol1'],
	method: 'GET'
});
```

**Return value**

If you want to return a [socketTask](./socket-task.md) object, at least one of the success/fail/complete parameters needs to be passed in. E.g.:

```
var socketTask = uni.connectSocket({
	complete: ()=> {}
});
```

If the success/fail/complete parameter is not passed in, the encapsulated Promise object will be returned: [Promise encapsulation](../index.md#promise-封装)

**Precautions**

-   The `Timeout` requested by the network can be uniformly configured in the `manifest.json` as [networkTimeout](../../collocation/manifest.md#networktimeout).

###  uni.onSocketOpen(CALLBACK)

listen to WebSocket connection opening event.

**CALLBACK return parameter**

| Attribute | Type | Instruction |
| --- | --- | --- |
| header | Object | HTTP response Header for successful connection |

**Sample code:**

```
uni.connectSocket({
  url: 'wss://www.example.com/socket'
});
uni.onSocketOpen(function (res) {
});
```

###  uni.onSocketError(CALLBACK)

listen to WebSocket error.

**Sample code**

```
uni.connectSocket({
  url: 'wss://www.example.com/socket'
});
uni.onSocketOpen(function (res) {
});
uni.onSocketError(function (res) {
});
```

###  uni.sendSocketMessage(OBJECT)

Sending data over a WebSocket connection requires [uni.connectSocket](./websocket.md#connectsocket) and [uni.onSocketOpen](./websocket.md#onsocketopen) callback before sending.

**OBJECT parameter description:**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| data | String/ArrayBuffer | Yes | Content to be sent |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**Sample code**

```
var socketOpen = false;
var socketMsgQueue = [];

uni.connectSocket({
  url: 'wss://www.example.com/socket'
});

uni.onSocketOpen(function (res) {
  socketOpen = true;
  for (var i = 0; i < socketMsgQueue.length; i++) {
    sendSocketMessage(socketMsgQueue[i]);
  }
  socketMsgQueue = [];
});

function sendSocketMessage(msg) {
  if (socketOpen) {
    uni.sendSocketMessage({
      data: msg
    });
  } else {
    socketMsgQueue.push(msg);
  }
}
```

###  uni.onSocketMessage(CALLBACK)

listen to the message events that WebSocket receives and send to the server.

**CALLBACK return parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| data | String/ArrayBuffer | Message returned by the server |

**Sample code:**

```
uni.connectSocket({
  url: 'wss://www.example.com/socket'
});

uni.onSocketMessage(function (res) {
});
```

###  uni.closeSocket(OBJECT)

Close WebSocket connection.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| code | Number | No | A numeric value indicates the status number of the closed connection and the corresponding reason. If this parameter is not specified, with 1000 as default (indicating normal connection closure) |
| reason | String | No | A readable string indicating the reason why the connection was closed. This string must be UTF-8 text (not characters) no longer than 123 bytes |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

###  uni.onSocketClose(CALLBACK)

listen to WebSocket closing.

```
uni.connectSocket({
  url: 'wss://www.example.com/socket'
});

//Note that there is a timing problem,
//If uni.connectSocket calls uni.closeSocket before calling uni.onSocketOpen, closing WebSocket is impossible.
//To close WebSocket, uni.closeSocket should be called under opened WebSocket.
uni.onSocketOpen(function () {
  uni.closeSocket();
});

uni.onSocketClose(function (res) {
});
```
