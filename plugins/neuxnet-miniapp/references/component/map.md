---
title: "map"
source_url: https://miniapp.neuxnet.com/component/map.html
---
####  map

Map component.

Map components are used to display the map, while positioning API is just to get the coordinates. Pay attention not to mixing them up.

**Attribute description**

| Attribute name | Type | Defaults | Instruction |
| --- | --- | --- | --- |
| longitude | Number |  | Center longitude |  |
| latitude | Number |  | Center latitude |  |
| scale | Number | 16 | Zoom level, the value range is 3-20 |  |
| min-scale | Number | 3 | Minimum zoom level |  |
| max-scale | Number | 20 | Maximum zoom level |  |
| layer-style | Number/String | 1 | Personalized map |  |
| markers | Array |  | Mark point |  |
| polyline | Array |  | Route |  |
| circles | Array |  | Circle |  |
| controls | Array |  | Control |  |
| include-points | Array |  | Zooms the field of view to include all given coordinate points |  |
| enable-3D | Boolean | false | Whether to display 3D building blocks |  |
| show-compass | Boolean | false | Whether to show the compass |  |
| enable-zoom | Boolean | true | Whether to support zoom |  |
| enable-scroll | Boolean | true | Whether to support dragging |  |
| enable-rotate | Boolean | false | Whether to support rotation |  |
| enable-overlooking | Boolean | false | Whether to enable Overlooking |  |
| enable-satellite | Boolean | false | Whether to enable satellite images |  |
| enable-traffic | Boolean | false | Whether to enable real-time traffic conditions |  |
| enable-poi | Boolean | false | Whether to show POI points |  |
| enable-building | Boolean | false | Whether to display the building? | (**Abolish the original enable-3D attribute. The default open building of AutoNavi is that 3D cannot be set**) |
| show-location | Boolean |  | Show the current location point with direction |  |
| polygons | Array.`<polygon>` |  | Polygon |  |
| enable-indoorMap | Boolean | false | Whether to display the indoor map? |  |
| @markertap | EventHandle |  | Triggered when a marker is clicked, e.detail = {markerId} |  |
| @callouttap | EventHandle |  | Triggered when click on the bubble according to the marker, e.detail = {markerId} |  |
| @controltap | EventHandle |  | Triggered when click on the control, e.detail = {controlId} |  |
| @regionchange | EventHandle |  | Triggered when the field of view changes | H5 |
| @tap | EventHandle |  | Triggered when the map is clicked; App-nvue, WeChat applet 2.9 support returning latitude and longitude |  |
| @updated | EventHandle |  | Triggered when the map rendering update is completed | H5 |
| @anchorpointtap | EventHandle |  | Triggered when the anchor is clicked, e.detail = {longitude, latitude} | Mini App |

**Notice**

-   The width/height of the `<map>` component is recommended to be written directly, such as 750rpx. Do not set a percentage value.
-   Google Maps use `wgs84` coordinates.

###  Recently added features

1.  Marker Cluster is supported, suitable for scenes with overmuch marker.
2.  Rainbow earthworm line is supported, often used in route planning scenes.
3.  The covers support adjusting the overlapping relationship with other map elements.
4.  marker (trolley) translation animation is supported, suitable for scenes of trajectory playback.

**markers**

Markers are used to show the location of markers on the map

| Attribute | Instruction | Type | Required | Remark |
| --- | --- | --- | --- | --- |
| id | Marker id | Number | Yes | Callback marker click event will return this id. It is recommended to set the Number type id for each marker to ensure better performance when updating the marker. Maximum limit is 9 digits |  |
| latitude | Latitude | Number | Yes | Floating number, ranging from -90 ~ 90 |  |
| longitude | Longitude | Number | Yes | Floating number, ranging from -180 ~ 180 |  |
| title | Mark Callout | String | No | Display when clicked, and will be ignored when callout exists | Mini App |
| iconPath | The displayed icon | String | No | is the image path under the project directory, which supports relative path writing. Starting with '/' means relative to the applet root directory; it also supports temporary path |
| rotate | Rotation angle | Number | No | Clockwise rotation angle, the range is 0 ~ 360, the default is 0 | Mini App |
| alpha | The transparency of the label | Number | No | Default 1, no transparency, range 0 ~ 1 | Mini App |
| width | The width of the label icon | Number | No | The default is the actual width of the picture |  |
| height | The height of the label icon | Number | No | The default is the actual height of the picture |  |
| callout | Bubble window above the custom marker | Object | No | The supported properties are shown in the table below, which recognizes line breaks. | Mini App |
| label | Add a label next to the marker | Object | No | The supported properties are shown in the following table, which can recognize line breaks. |  |
| anchor | The latitude and longitude is the anchor point of the label icon. The default bottom edge midpoint | Object | No | {x, y}, x means horizontal (0-1), y means vertical (0-1). {x: .5, y: 1} represents the midpoint of the bottom edge |  |
| clusterId | Use | Number | No |  | Mini App |
| customCallout | Custom Bubble Window | Object | No |  | Mini App |
| aria-label | Accessibility, additional description of (attribute) element | String | No |  | Mini App |

**callout on marker**

| Attribute | Instruction | Type |
| --- | --- | --- |
| content | Text | String |  |
| color | Text color | String |  |
| fontSize | Text Size | Number |  |
| borderRadius | callout border rounded corners | Number |  |
| bgColor | Background Color | String |  |
| padding | Leave the text margins | Number |  |
| display | 'BYCLICK':Click to display; 'ALWAYS':Always display | String |  |
| textAlign | Text alignment. Valid values: left, right, center | String | Mini App |

**label on marker**

| Attribute | Instruction | Type |
| --- | --- | --- |
| content | Text | String |  |
| color | Text color | String |  |
| fontSize | Text Size | Number |  |
| x | The coordinates of label, the origin is the latitude and longitude corresponding to the marker | Number | H5 |
| y | The coordinates of label, the origin is the latitude and longitude corresponding to the marker | Number | H5 |
| anchorX | The coordinates of label, the origin is the latitude and longitude corresponding to the marker | Number | Mini App |
| anchorY | The coordinates of label, the origin is the latitude and longitude corresponding to the marker | Number | Mini App |
| borderRadius | Border rounded corners | Number | Mini App |
| bgColor | Background Color | String | Mini App |
| padding | Leave the text margins | Number | Mini App |
| textAlign | Text alignment. Valid values: left, right, center | String | Mini App |
| aria-label | Accessibility, additional description of (attribute) element | String | Mini App |
| joinCluster | Whether to participate in point aggregation | Boolean | Mini App |

###  Point aggregation

Too much markers to be displayed on the map may lead to the overlapping of markers on the interface, incomplete display and deteriorative overall performance. To address these problems, we introduced the Marker Cluster feature.

The use process is as follows:

[MapContext.initMarkerCluster](../api/location/map.md#createmapcontext) Initialize and configure aggregation points (optional); [MapContext.addMarkers](../api/location/map.md#createmapcontext) specifies the markers participating in the aggregation; When MapContext.on('markerClusterCreate', callback) is triggered, update the style of the aggregation cluster through [MapContext.addMarkers](../api/location/map.md#createmapcontext) (optional); [MapContext.removeMarkers](../api/location/map.md#createmapcontext) remove markers participating in aggregation;

**polyline**

Specify a series of coordinate points, connecting from the first item to the last item of the array

| Attribute | Instruction | Type | Required | Remark |
| --- | --- | --- | --- | --- |
| points | Latitude and longitude array | Array | Yes | \[{latitude: 0, longitude: 0}\] |  |
| color | Line color | String | No | Expressed in 8-bit hexadecimal digits, with the last two digits representing the alpha value. For example: #0000AA |  |
| width | Line width | Number | No |  |  |
| dottedLine | Dotted Line | Boolean | No | Default false |  |
| arrowLine | Line with arrows | Boolean | No | The default is false | Mini App |
| arrowIconPath | Replace arrow icon | String | No | Effective when arrowLine is true | Mini App |
| borderColor | Line border color | String | No |  | H5 |
| borderWidth | Line thickness | Number | No |  | H5 |
| colorList | Rainbow line | Array | false | Ignore color value when it exists | Mini App |

**Precautions**

-   App-nvue. When arrowLine is true, the color value of the spliced line of pictures with arrows will be ignored. For the method of replacing the arrow image

**polygon**  
specifies a series of coordinate points, and generates closed polygons according to the coordinate data of points.

| Attribute | Instruction | Type | Required | Remark |
| --- | --- | --- | --- | --- |
| points | Latitude and longitude array | array | Yes | \[{latitude: 0, longitude: 0}\] |
| strokeWidth | Stroke width | Number | No |  |
| strokeColor | Stroke color | String | No | Hexadecimal |
| fillColor | Fill color | String | No | Hexadecimal |
| zIndex | Set the polygon Z-axis value | Number | No |  |

**circles**

Display circle on the map

| Attribute | Instruction | Type | Required | Remark |
| --- | --- | --- | --- | --- |
| latitude | Latitude | Number | Yes | Floating number, ranging from -90 ~ 90 |
| longitude | Longitude | Number | Yes | Floating number, ranging from -180 ~ 180 |
| color | The color of the stroke | String | No | 8-digit hexadecimal representation, the last two digits represent the alpha value, such as: #000000AA; #00000%E4%B8%BA%E5%8D%81%E5%85 %AD%E8%BF%9B%E5%88%B6 |
| fillColor | Fill Color | String | No | 8-digit hexadecimal representation, the last two digits represent the alpha value, such as: #000000AA; #00000%E4%B8%BA%E5%8D%81%E5%85%AD %E8%BF%9B%E5%88%B6 |
| radius | Radius | Number | Yes |  |
| strokeWidth | Stroke width | Number | No |  |
| level | overlapping relationship, the default is abovelabels | String | false | WeChat applet |

**controls**

Display controls on the map, and the controls do not move with the map

| Attribute | Instruction | Type | Required | Remark |
| --- | --- | --- | --- | --- |
| id | Control id | Number | No | Callback control click event will return this id |
| position | Location of the control on the map | Object | Yes | Location of the control relative to the map |
| iconPath | Icon displayed | String | Yes | The image path in the project directory, supporting the relative path writing, and the beginning with '/' indicates relative project root directory; temporary paths are also supported |
| clickable | Whether it is clickable? | Boolean | No | Not clickable by default |

**position**

| Attribute | Instruction | Type | Required | Remark |
| --- | --- | --- | --- | --- |
| left | How far from the left edge of the map | Number | No | 0 as default |
| top | How far from the upper boundary of the map | Number | No | 0 as default |
| width | Control width | Number | No | The default is the image width |
| height | Control height | Number | No | The default is the image height |

The latitude and longitude of the map component are required. If they are not filled in, the default value will be the latitude and longitude of Beijing.

> Template

```
<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>
```

> Script

```
<script>
export default {
	data() {
		return {
			id:0, 
			title: 'map',
			latitude: 39.909,
			longitude: 116.39742,
			covers: [{
				latitude: 39.909,
				longitude: 116.39742,
				iconPath: '../../../static/location.png'
			}, {
				latitude: 39.90,
				longitude: 116.39,
				iconPath: '../../../static/location.png'
			}]
		}
	},
	methods: {

	}
}
</script>
```

:::

##  App platform map service provider differences

###  Map map component

| Properties | Description | Whether AutoNavi supports | Does Google Maps support |
| --- | --- | --- | --- |
| subkey | Key used for personalized map | Not supported | Not supported |
| show-scale | Show scale | Supported | Not supported |
| enable-poi | Whether to display POI points | Supported | Not supported |
| labeltap | Triggered when the label is clicked | Supported | Android supported iOS not supported |
| poitap | Triggered when the map poi point is clicked | Supported | Android not supported iOS supported |

###  marker

| Properties | Description | Whether AutoNavi supports | Does Google Maps support |
| --- | --- | --- | --- |
| label | Add a label next to a marker | Supported | Android Supported iOS Not Supported |

###  Bubble callout on marker

| Properties | Description | Whether AutoNavi supports | Does Google Maps support |
| --- | --- | --- | --- |
| display | 'BYCLICK':Click to display; 'ALWAYS':Always display | Supported | Android supports iOS only supports 'BYCLICK' |

###  custom bubble on marker customCallout

| Properties | Description | Whether AutoNavi supports | Does Google Maps support |
| --- | --- | --- | --- |
| display | 'BYCLICK':Click to display; 'ALWAYS':Always display | Supported | Android supports iOS only supports 'BYCLICK' |

###  polyline

| Properties | Description | Whether AutoNavi supports | Does Google Maps support |
| --- | --- | --- | --- |
| colorList | Rainbow Lines | Supported | Android Not Supported iOS Supported |
| dottedLine | Dotted Line | Supported | Android Supported iOS Not Supported |
| arrowLine | Line with Arrows | Supported | Android Not Supported iOS Supported |
| arrowIconPath | Change Arrow Icons | Supported | Android Not Supported iOS Supported |

**Precautions**

-   Mini App, `<map>` The component is a native component created by the engine, its level is the highest, and the level cannot be controlled by z-index. in `<map>`To draw the content on the top, you can use the attributes such as markers and controls that come with the component, or you can use `<cover-view>`Component. The Mini App can also use plus.nativeObj.view or subNVue to draw native content. In addition, there is no hierarchy problem in the nvue file on the App side.
-   The map and applet of the nvue file on the App side are more aligned. The map in vue is the same as the plus.map function, which is slightly different from the map of the applet. \*\*It is recommended to use nvue when using map on the App side. \*\*
-   If the local image is used on the App side, it needs to set the resource to release mode before packaging, and add a runmode node into the app-plus in the manifest file, with the setting value of liberate.
-   Do not use `in scroll-view, swiper, picker-view, movable-view in applet and app-vue that involve hierarchical issues<map>` component.
-   In Mini App, css animation pair `<map>` The component is invalid.
-   `<map>` The underlying engine of components on different platforms is different: WeChat applet is Tencent Map; H5 is Tencent Map or Google Map; App and Alipay (Mainland China version) applet are AutoNavi Map; Baidu applet and Quick App are Baidu map. App-vue can also use Baidu map, configure it in the manifest, and take effect after packaging, but app-nvue only supports Gaode map. In addition, the API for selecting a map and viewing the map location only supports AutoNavi maps. If there is no special need on the App side, it is recommended to use the AutoNavi map.
-   If you need to use plus.map, you can obtain the native map object through `$getAppMap`, [see details](../api/location/map.md). Note that nvue's map component is not a plus.map object and cannot use `$getAppMap`
-   To obtain location information on the H5 side, it must be deployed on the **https** service. For local preview (localhost), the http protocol can still be used.
-   Location is obtained by connecting to Google server when the PC devices without GPS module or GPS signal use Chrome browser
-   The use of maps on the H5 side is related to positioning. You need to configure the secret key (key) applied for by a third-party map service provider such as Tencent or Google in [manifest.json](../collocation/manifest.md#h5sdkconfig).
-   ios nvue Color does not support ARGB hexadecimal, and rgba(r,g,b,a) is used for instead
