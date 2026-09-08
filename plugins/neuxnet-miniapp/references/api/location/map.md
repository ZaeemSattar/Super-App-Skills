---
title: "uni.createMapContext(mapId,this)"
source_url: https://miniapp.neuxnet.com/api/location/map.html
---
###  uni.createMapContext(mapId,this)

Creates and returns a map context `mapContext` object. Under the custom component, the second parameter is passed in the component instance this to operate inside the component `<map>` component.

mapContext

`mapContext` by mapId followed by a `<map>` Component binding, through which you can operate the corresponding `<map>` component.

**List of methods of the mapContext object**

| Method | Parameters | Description |
| --- | --- | --- |
| getCenterLocation | OBJECT | Gets the latitude and longitude of the current map center, and returns the gcj02 coordinate system, which can be used for [uni.openLocation](./location.md#getlocation) |  |  |
| moveToLocation | OBJECT | Move the center of the map to the current positioning point, which needs to be used with the show-location of the map component |  |  |
| translateMarker | OBJECT | Translation marker with animation |  | app-nvue 2.1.5+, WeChat applet with animation, Jingdong applet |
| includePoints | OBJECT | Zoomed view to display all latitude and longitude |  | app-nvue 2.1.5+, WeChat applet, Jingdong applet |
| getRegion | OBJECT | Get the field of view of the current map |  |  |
| getScale | OBJECT | Get the zoom level of the current map |  |  |
| addCustomLayer | OBJECT | Add a personalized layer |  | WeChat applet |
| addGroundOverlay | OBJECT | Create a custom image layer, the image will zoom with the map zoom |  | App-nvue 3.1.0+, WeChat applet |
| addMarkers | OBJECT | Add marker |  | App-nvue 3.1.0+, WeChat applet |
| fromScreenLocation | OBJECT | Get the latitude and longitude corresponding to the point on the screen, the origin of the coordinates is the upper left corner of the map |  | WeChat applet |
| initMarkerCluster | OBJECT | The configuration of initialization point aggregation, the default configuration is used when it is not called |  | App-nvue 3.1.0+, WeChat applet |
| moveAlong | OBJECT | Move the marker along the specified path, used in scenarios such as track playback. The callback event is triggered when the animation is completed. If the animation is in progress, if the moveAlong method is called again on the same marker, the previous animation will be interrupted. | Support android does not support autoRotate attribute setting Default ture | App-nvue 3.1.0+, WeChat applet |
| openMapApp | OBJECT | Pull up the map app and select navigation. |  | App-nvue 3.1.0+, WeChat applet |
| removeCustomLayer | OBJECT | Remove a personalized layer |  | WeChat applet |
| removeGroundOverlay | OBJECT | Remove custom image layer |  | App-nvue 3.1.0+, WeChat applet |
| removeMarkers | OBJECT | Remove markers. |  | App-nvue 3.1.0+, WeChat applet |
| setCenterOffset | OBJECT | Set the offset of the center point of the map. It increases backwards and downwards. The screen scale range is (0.25~0.75), and the default offset is \[0.5, 0.5\] |  | WeChat applet |
| toScreenLocation | OBJECT | Gets the screen coordinates corresponding to the latitude and longitude. The origin of the coordinates is the upper left corner of the map. |  | WeChat Mini Program |
| updateGroundOverlay | OBJECT | Update a custom image layer. |  | App-nvue 3.1.0+, WeChat applet |
| on | Method | Listen to map events. |  | App-nvue 3.1.0+, WeChat applet |
| $getAppMap |  | Get the native map object [plus.maps.Map](https://www.html5plus.org/doc/zh_cn/maps.html#plus.maps.Map) | app-vue | 1.9.3 |

`$getAppMap()` Notes:

-   In the page, must be called in `onReady`.
-   In a component, must be called in `mounted`.
-   nvue doesn't have `$getAppMap()`, use `createMapContext`
-   There is no need to provide a placeholder div to use native maps in `Mini App`, and you can use js directly after getting `$getAppMap()`.
-   `openMapApp` iOS is not currently supported, and will be added later

**List of OBJECT parameters for getCenterLocation**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface call, res = { longitude: "longitude", latitude: "latitude"} |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**moveToLocation's OBJECT parameter list**

| Parameter | Type | Required |
| --- | --- | --- |
| longitude | Number | No | Longitude , App 2.6.8, H5, JD.com, WeChat applet 2.8.0+ only |
| latitude | Number | No | Latitude , App 2.6.8, H5, Jingdong applet, only WeChat applet 2.8.0+ support |
| success | Function | No | Callback function for successful interface call, res = { longitude: "longitude", latitude: "latitude"} |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**List of OBJECT parameters for translateMarker**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| markerId | Number | Yes | specified marker |
| destination | Object | Yes | Specifies the destination point to move the marker to |
| autoRotate | Boolean | No | Automatically rotate the marker during movement |
| rotate | Number | No | Rotation angle of marker |
| duration | Number | No | The duration of the animation, the default value is 1000ms, the translation and rotation are calculated separately |
| animationEnd | Function | No | Animation end callback function |
| fail | Function | No | Callback function for interface call failure |

**List of OBJECT parameters for includePoints**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| points | Array | Yes | a list of coordinate points to display in the viewable area, \[{latitude, longitude}\] |
| padding | Array | No | The distance from the edge of the rectangle formed by the coordinate points to the edge of the map, in pixels. The format is \[up, right, down, left\], only the first item of the array can be recognized on Android, and the padding of the upper, lower, left and right is the same. The developer tools do not support the padding parameter yet. |

**List of OBJECT parameters for getRegion**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | The callback function of the successful interface call, res = {southwest, northeast}, the latitude and longitude of the southwest and northeast corners |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**List of OBJECT parameters for getScale**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful interface call, res = {scale} |
| fail | Function | No | Callback function for interface call failure |
| complete | Function | No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |

**List of OBJECT parameters for addCustomLayer**

| property | type | default | required | description |
| --- | --- | --- | --- | --- |
| layerId | string |  | yes | personalized layer id |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for interface call failure |
| complete | function |  | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**List of OBJECT parameters for addGroundOverlay**

| property | type | default | required | description |
| --- | --- | --- | --- | --- |
| id | String |  | Yes | Image layer id |
| src | String |  | Yes | Image path, supports network image, temporary path, code package path |
| bounds | Object |  | Yes | The range of latitude and longitude covered by the image |
| visible | Boolean | true | No | Visible |
| zIndex | Number | 1 | No | Layer Draw Order |
| opacity | Number | 1 | No | Layer Opacity |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for interface call failure |
| complete | function |  | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

Structure of `object.bounds`

| property | type | default | required | description |
| --- | --- | --- | --- | --- |
| southwest | Object |  | Yes | Southwest latitude and longitude |
| northeast | Object |  | Yes | Northeast latitude and longitude |

Structure of `southwest`

| property | type | default | required | description |
| --- | --- | --- | --- | --- |
| longitude | number |  | Yes | longitude |
| latitude | number |  | yes | latitude |

The structure of `northeast`

| property | type | default | required | description |
| --- | --- | --- | --- | --- |
| longitude | number |  | Yes | longitude |
| latitude | number |  | yes | latitude |

**List of OBJECT parameters for addMarkers**

| property | type | default | required | description |
| --- | --- | --- | --- | --- |
| markers | Array |  | Yes | Same as the marker property of the incoming map component |
| clear | boolean | false | No | Whether to clear all markers on the map first |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for interface call failure |
| complete | function |  | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**List of OBJECT parameters for removeMarkers**

| property | type | default | required | description |
| --- | --- | --- | --- | --- |
| markerIds | Array |  | Yes | Array of id attributes of markers to be deleted |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for interface call failure |
| complete | function |  | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**moveAlong's OBJECT parameter list**

| property | type | default | required | description |
| --- | --- | --- | --- | --- |
| markerId | Number |  | Yes | Specify marker |
| path | Array |  | Yes | The coordinate string of the moving path, the coordinate point format {longitude, latitude} |
| autoRotate | boolean | true | No | Automatically change the rotation angle of the marker according to the path direction |
| duration | number |  | Yes | Time for smooth movement |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for interface call failure |
| complete | function |  | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**List of OBJECT parameters for setLocMarkerIcon**

| property | type | default | required | description |
| --- | --- | --- | --- | --- |
| iconPath | string |  | No | Icon path, support network path, local path, code package path |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for interface call failure |
| complete | function |  | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**mapContext (App platform map service provider difference)**

| Properties | Description | Whether AutoNavi supports | Does Google Maps support |
| --- | --- | --- | --- |
| setLocMarkerIcon | Set the anchor icon, support network path, local path, code package path | Supported | Not supported |
| moveAlong | Move the marker along the specified path for scenarios such as track playback | Supported (does not support the autoRotate property) | Supported |
| addCustomLayer | Adding a custom layer | Not supported | Not supported |
| removeVisualLayer | Remove a visualization layer | Not supported | Not supported |
| fromScreenLocation | Get the latitude and longitude corresponding to the point on the screen, the origin of the coordinates is the upper left corner of the map | Not supported | Not supported |
| removeCustomLayer | Remove a custom layer | Not supported | Not supported |
| setCenterOffset | Set the offset of the center point of the map, grow backwards and downwards, screen scale range (0.25~0.75) | Not supported | Not supported |
| toScreenLocation | Get the screen coordinates corresponding to the latitude and longitude. The origin of the coordinates is the upper left corner of the map. | Not supported | Not supported |

`markerClusterCreate` Triggered when zooming or dragging causes a new aggregate cluster to be created, and only returns information about the newly created aggregate cluster.

return parameter

| parameter | type | description |
| --- | --- | --- |
| clusters | Array&lt;ClusterInfo&gt; | Aggregate Cluster Data |

`markerClusterClick` The click event of the aggregated cluster.

return parameter

| parameter | type | description |
| --- | --- | --- |
| cluster | ClusterInfo | Cluster cluster |

`ClusterInfo` structure

| parameter | type | description |
| --- | --- | --- |
| clusterId | Number | The id of the aggregated cluster |
| center | LatLng | Coordinates of aggregated clusters |
| markerIds | Array&lt;Number&gt; | Array of point marker data in this aggregated cluster |

`initMarkerCluster(OBJECT)` structure

| property | type | default | required | description |
| --- | --- | --- | --- | --- |
| enableDefaultStyle | boolean | true | no | enable default aggregation style |
| zoomOnClick | boolean | true | no | Whether to implement aggregation separation when clicking on an already aggregated marker |
| gridSize | boolean | 60 | No | The aggregatable distance of the aggregation algorithm, that is, points with a distance less than this value will be aggregated together, in pixels |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for interface call failure |
| complete | function |  | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

sample code

```
  MapContext.on('markerClusterCreate', (res) => {})
  MapContext.on('markerClusterClick', (res) => {})
```

Map Aggregation API Example (nvue)

Zoom out on the map to see multiple markers merged into one and display the aggregated number, and restore it after zooming in on the map

```
<template>
  <view class="content">
    <map id="map" class="map" :show-location="true" :latitude="latitude" :longitude="longitude"></map>
  </view>
</template>

<script>
  const img = '/static/logo.png';

  export default {
    data() {
      return {
        latitude: 23.099994,
        longitude: 113.324520,
      }
    },
    onReady() {
      this._mapContext = uni.createMapContext("map", this);

      // On.("markerClusterCreate", (e) => {}) will be triggered only when initialization is called
      this._mapContext.initMarkerCluster({
        enableDefaultStyle: false,
        zoomOnClick: true,
        gridSize: 60,
        complete(res) {
          console.log('initMarkerCluster', res)
        }
      });

      this._mapContext.on("markerClusterCreate", (e) => {
        console.log("markerClusterCreate", e);
      });

      this.addMarkers();
    },
    methods: {

      addMarkers() {
        const marker = {
          id: 1,
          iconPath: img,
          width: 50,
          height: 50,
          label: {
            width: 50,
            height: 30,
            borderWidth: 1,
            borderRadius: 10,
            bgColor: '#ffffff'
          }
        };

        const positions = [{
          latitude: 23.099994,
          longitude: 113.324520,
        }, {
          latitude: 23.099994,
          longitude: 113.322520,
        }, {
          latitude: 23.099994,
          longitude: 113.326520,
        }, {
          latitude: 23.096994,
          longitude: 113.329520,
        }]

        const markers = []

        positions.forEach((p, i) => {
          const newMarker = Object.assign({},marker, p)
          newMarker.id = i + 1
          newMarker.label.content = `label ${i + 1}`
          markers.push(newMarker)
        })
        this._mapContext.addMarkers({
            markers,
            clear: false,
            complete(res) {
              console.log('addMarkers', res)
            }
        })
      }
    }
  }
</script>

<style>
  .content {
    flex: 1;
  }

  .map {
    flex: 1;
  }
</style>
```

##  mapSearch module (only supported by app-nvue, not supported by Goolge maps)

####  reverseGeocode(Object,callback);

> Reverse Geocoding

#####  Object

| property | type | default value | required | description |
| --- | --- | --- | --- | --- |
| point | Object |  | Yes | {latitude: latitude, longitude: longitude} |

#####  callback Returns Object Parameter description

| property | type | description |
| --- | --- | --- |
| type | String | "success" means success, "fail" means failure |
| code | Number | Returns 0 on success, and returns the corresponding code code on failure |
| message | String | Failure description |
| address | String | Address after query (returned on success) |

####  poiSearchNearBy（Object,callback);

> Surrounding search

#####  Object

| property | type | default value | required | description |
| --- | --- | --- | --- | --- |
| point | Object |  | yes | retrieved center point coordinates {latitude: latitude, longitude: longitude} |
| key | String |  | yes | search key |
| radius | Number | 3000 | No | Retrieved radius in meters |
| index | Number | 1 | No | The index of the page number to get the search results |
| offset | Number | 10 | No | Set the number of entries per page (default 10 entries per page). |

#####  callback Returns Object Parameter description

| property | type | description |
| --- | --- | --- |
| type | String | "success" means success, "fail" means failure |
| code | Number | Returns 0 on success, and returns the corresponding code code on failure |
| message | String | Failure description |
| totalNumber | Number | Number of POIs returned |
| currentNumber | Number | Number of POIs on the current page |
| pageNumber | Number | Number of pages |
| pageIndex | Number | Current page number index |
| poiList | Array.<poiObject> | POI information array |

#####  poiObject

| property | type | description |
| --- | --- | --- |
| location | Object | {latitude: latitude, longitude: longitude} |
| name | String | Name |
| type | String | Type |
| distance | Number | Distance (in meters) |
| address | String | Address |

####  poiKeywordsSearch（Object,callback);

> Keyword search

#####  Object

| property | type | default value | required | description |
| --- | --- | --- | --- | --- |
| key | String |  | yes | search key |
| index | Number | 1 | No | The index of the page number to get the search results (10 pieces of data per page) |
| city | String |  | No | Query city, optional values: cityname (Chinese or Chinese spelling), citycode, adcode.[code reference table](https://lbs.amap.com/api/webservice/download) |
| types | String |  | No | Type, multiple types are separated by "|" Optional values: text classification, classification code [code reference table](https://lbs.amap.com/api/webservice/download) |
| point | Object |  | No | After setting, the returned results will be sorted according to the distance from this point {latitude: latitude, longitude: longitude} |
| sortrule | Number | 0 | No | Sort rule, 0-distance sort; 1-comprehensive sort, default 0 |
| offset | Number | 10 | No | Set the number of entries per page (default 10 entries per page). |
| cityLimit | Boolean | false | No | Mandatory city limit function Default false, for example: search for Tiananmen in Shanghai, if citylimit is true, the POI related to Tiananmen in Beijing will not be returned. |

#####  callback Returns Object Parameter description

| property | type | description |
| --- | --- | --- |
| type | String | "success" means success, "fail" means failure |
| code | Number | Returns 0 on success, and returns the corresponding code code on failure |
| message | String | Failure description |
| totalNumber | Number | Number of POIs returned |
| currentNumber | Number | Number of POIs on the current page |
| pageNumber | Number | Number of pages |
| pageIndex | Number | Current page number index |
| poiList | Array.<poiObject> | POI information array |

**Tips**

-   The app side uses map, nvue is more powerful than vue, and there is no hierarchy problem.
-   The Vue page on the App side defaults to the AutoNavi map, and you can also choose the Baidu map. But app-nvue only has Gaode map, not Baidu map. And the map selection api (mapSearch), which only supports Gaode maps.
-   To obtain positioning information on the H5 side, it needs to be deployed on the **https** service. The local preview (localhost) can still use the http protocol.
-   When a PC device without a GPS module uses the Chrome browser, the location information is obtained by connecting to the Google server, and domestic users may fail to obtain the location information.
-   The use of maps on the H5 side is related to positioning. It is necessary to configure the secret key applied for by a third-party map service provider such as Tencent or Google in manifest.json( key).
-   `<map>` The component defaults to the coordinates of the National Bureau of Surveying and Surveying, and calling `uni.getLocation` returns the result and passes it to `<map>` When using the component, you need to specify the type as gcj02.
