---
title: "uni.createMediaContainer()"
source_url: https://miniapp.neuxnet.com/api/media/media-container.html
---
###  uni.createMediaContainer()

Create an audio and video processing container, and finally combine the tracks in the container into a video and return a `MediaContainer` object

**Platform Difference Description**

| Mini App | H5 | WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kaishou applet | Jingdong applet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | 2.9.0+ | x | x | x | x | x | x |

####  MediaContainer.addTrack(track)

Add an audio or video track to a container

**Parameter Description**

| Parameters | Description |
| --- | --- |
| track | Audio or video track to add |

####  MediaContainer.destroy()

Destroy the container and release resources

####  MediaContainer.export()

Merge the tracks inside the container and export the video file

####  MediaContainer.extractDataSource(object)

Merge the tracks in the container and export the video file, returning a `MediaTrack` object

**Parameter Description**

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| source | String | Yes | Video source address, only supports local files |

####  MediaContainer.removeTrack(track)

Add an audio or video track to a container

**Parameter Description**

| Parameters | Description |
| --- | --- |
| track | Audio or video track to remove |

###  MediaTrack

Returned by `MediaContainer.extractDataSource`.

`MediaTrack` audio or video track, you can perform some operations on the track

**Parameter Description**

| property | type | description |
| --- | --- | --- |
| kind | String | track type, read only ,audio:audio track;video:video track |
| duration | Number | Track length, read only |
| volume | Number | Volume, valid under audio track, writable |
