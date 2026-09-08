---
title: "SocketTask.onMessage(CALLBACK)"
source_url: https://miniapp.neuxnet.com/api/request/socket-task.html
---
**SocketTask** is created by the [uni.connectSocket()](./websocket.md#connectsocket) interface.

###  SocketTask.onMessage(CALLBACK)

listen to the message events that WebSocket receives and send to the server.

**Callback function**

`Function`

WebSocket receives the callback function of the message event from the server

**Parameters in the callback function**

`Object`

| Attribute | Type | Instruction |
| --- | --- | --- |
| data | String/ArrayBuffer | Message returned by the server |

###  SocketTask.send(OBJECT)

Send data through WebSocket connection

**Parameter**

| Attribute | Type | Required or not | Instruction |
| --- | --- | --- | --- |
| data | String/ArrayBuffer | Yes | Content to be sent |
| success | Function | No | Callback function for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

###  SocketTask.close(OBJECT)

Close WebSocket connection

**Parameter**

| Attribute | Type | Defaults | Required or not | Instruction |
| --- | --- | --- | --- | --- |
| code | Number | 1000 (indicates normal connection closure) | No | A numeric value indicates the status number of the closed connection and the corresponding reason. |
| reason | String |  | No | A readable string indicating the reason why the connection was closed. |
| success | Function |  | No | Callback function for successful interface calling |
| fail | Function |  | No | Callback function for failed interface calling |
| complete | Function |  | No | Callback function for closed interface calling (available both for successful and failed calling) |

###  SocketTask.onOpen(CALLBACK)

listen to WebSocket connection opening event

**Callback function**

`Function`

Callback function of WebSocket connection open event

**Parameters in the callback function**

`Object`

| Attribute | Type | Instruction |
| --- | --- | --- |
| data | String/ArrayBuffer | Message returned by the server |

###  SocketTask.onClose(CALLBACK)

listen to WebSocket connection closing event

**Callback function**

`Function`

Callback function of WebSocket connection close event

###  SocketTask.onError(CALLBACK)

listen to WebSocket error event

**Callback function**

`Function`

Callback function of WebSocket error event

**Parameters in the callback function**

`Object`

| Attribute | Type | Instruction |
| --- | --- | --- |
| errMsg | String | Error message |
