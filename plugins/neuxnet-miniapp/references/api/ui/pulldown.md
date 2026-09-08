---
title: "onPullDownRefresh"
source_url: https://miniapp.neuxnet.com/api/ui/pulldown.html
---
###  onPullDownRefresh

Define the onPullDownRefresh processing function (at the same level as the lifecycle functions such as onLoad) in js to listen to the user's pull-down refresh event of this page.

-   You need to find the pages node of the current page in `pages.json` and enable `enablePullDownRefresh` in the `style` option.
-   When the data refresh is finished, `uni.stopPullDownRefresh` can stop the pull-down refresh of the current page.

###  uni.startPullDownRefresh(OBJECT)

Start pull-down refresh which triggers the pull-down refresh animation after calling, and the effect is consistent with user's manual pull-down refresh.

**OBJECT parameter description**

| Parameter name | Type | Required | Instruction |
| --- | --- | --- | --- |
| success | Function | No | Callback for successful interface calling |
| fail | Function | No | Callback function for failed interface calling |
| complete | Function | No | Callback function for closed interface calling (available both for successful and failed calling) |

**success return parameter description**

| Parameter | Type | Instruction |
| --- | --- | --- |
| errMsg | String | Interface call result |

###  uni.stopPullDownRefresh()

Stop the current page pull-down refresh.

**Example**

pages.json

```
{
    "pages": [
        {
        	"path": "pages/index/index",
        	"style": {
        		"navigationBarTitleText": "Mini App",
        		"enablePullDownRefresh": true
        	}
        }
    ],
    "globalStyle": {
    	"navigationBarTextStyle": "white",
    	"navigationBarBackgroundColor": "#0faeff",
    	"backgroundColor": "#fbf9fe"
    }
}
```

index.vue

```
// Only for example, the delay is used as required in actual development.
export default {
	data() {
		return {
			text: 'Mini App'
		}
	},
	onLoad: function (options) {
		setTimeout(function () {
			console.log('start pulldown');
		}, 1000);
		uni.startPullDownRefresh();
	},
	onPullDownRefresh() {
		console.log('refresh');
		setTimeout(function () {
			uni.stopPullDownRefresh();
		}, 1000);
	}
}
```

###  FAQ

Q: How to place pull-down refresh under title with custom title A: The App and H5 sides use the circle method to pull down to refresh, and set the offset below the title height. Template for hello Mini App - there are examples in the navigation bar.
