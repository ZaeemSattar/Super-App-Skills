---
title: "uni.createMediaQueryObserver(\\[this\\])"
source_url: https://miniapp.neuxnet.com/api/ui/media-query-observer.html
---
MediaQueryObserver object, which is used to listen to the change of the status of the page media query, such as whether the width and height of the interface are within a specified range.

###  uni.createMediaQueryObserver(\[this\])

Create and return a `MediaQueryObserver` object instance.

###  Method list of MediaQueryObserver object

> tips: UI-related api will be executed after the component is mounted

| Method| Instruction| |:-|:-|:-| | MediaQueryObserver.observe(Object descriptor, function callback)| Start listening to the changes of the page media query| | MediaQueryObserver.disconnect()| Stop listening to, and the callback function will no longer be triggered|

**Object descriptor**

| Attribute name | Type | Defaults | Required | Instruction |
| --- | --- | --- | --- | --- |
| minWidth | number |  | No | Page Minimum Width (in px) |
| maxWidth | number |  | No | Maximum page width (in px) |
| width | number |  | No | Page width (in px) |
| minHeight | number |  | No | Minimum page height (in px) |
| maxHeight | number |  | No | Maximum page height (in px) |
| height | number |  | No | Page height (in px) |
| orientation | string |  | No | Screen direction (landscape or portrait) |

**The observe callback function contains one parameter**

| Parameter | Type | Instruction |
| --- | --- | --- |
| matches | boolean | Whether the current status of the page meets the specified media query |

###  Code example

For the following sample code

```
<template>
    <view class="content">
        <view class="">
        </view>
        <view>
        </view>
    </view>
</template>

<script>
    let landscapeOb
    export default {
        data() {
            return {
                matches: false,
                landscape: false,
                mediaQueryOb: null
            }
        },
        onLoad() {

        },
        
        //UI-related api will be executed after the component is mounted
        mounted() {
            this.testMediaQueryObserver()
            this.landscapeObserver()
        },

        methods: {
            testMediaQueryObserver() {
                this.mediaQueryOb = uni.createMediaQueryObserver(this)

                this.mediaQueryOb.observe({
                    minWidth: 375,  
                    maxWidth: 500  
                }, matches => {
                    this.matches = matches;
                })
            },
            landscapeObserver() {
                landscapeOb = uni.createMediaQueryObserver(this)
                landscapeOb.observe({
                    orientation: 'landscape'  
                }, matches => {
                        this.landscape = matches
                })
            },
            destroyed () {
                this.mediaQueryOb.disconnect()  
                landscapeOb.disconnect()
            }
        }
    }
</script>

<style>
    .content {
        text-align: center;
        height: 400upx;
    }
</style>
```
