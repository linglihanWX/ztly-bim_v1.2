/**
 * freedoApp 应用中间层
 * Method：
 * 1.start3D 三维场景初始化
 */
var FreedoApp = window.freedoApp || {};
FreedoApp.des = "freedoApp 应用中间层";
FreedoApp.version = 0.1;
FreedoApp.viewers = {};
/**
 * 三维场景初始化
 */
FreedoApp.init = function(id) {
	var viewer = new Freedo.Viewer(
			id,
			{	
				animation : false,
				baseLayerPicker : false,
				fullscreenButton : false,
				geocoder : false,
				homeButton : false,
				infoBox :false,
				sceneModePicker : false,
				selectionIndicator : false,
				timeline : false,
				navigationHelpButton : false,
				navigationInstructionsInitiallyVisible : false,
				selectedImageryProviderViewModel : false,
				scene3DOnly : true,
				clock : null,
				showRenderLoopErrors : false,
				automaticallyTrackDataSourceClocks:false,
				/*terrainProvider:new FreeDo.FreeDoTerrainProvider({
				    url : 'http://182.92.7.32:9090/30.50.90.120.90/',
				    requestVertexNormals : true
				})*/
			}
	);
	$(".cesium-viewer-bottom,.cesium-viewer-toolbar").remove();
	//资源三号卫星影像
	var imageryProvider3 = new FreeDo.WebMapTileServiceImageryProvider({
		url: "http://192.168.30.50:7090/rest/wmts/",
		layer: "资源三号卫星影像",
		style: "default",
		format: "tiles",
		tileMatrixSetID: "资源三号卫星影像",
		credit: new FreeDo.Credit("FreeDo全球影像服务"),
		minimumLevel: 0,
		maximumLevel: 18,
		tilingScheme: new FreeDo.GeographicTilingScheme(),
	});
	//天地图影像
	var imageryProvider2 =  new FreeDo.WebMapTileServiceImageryProvider({
        url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
        layer: "tdtBasicLayer_yingxiang",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "tianditu",
        minimumLevel: 0,
		maximumLevel: 17,
        show: true
    })
	//中文标识影像
	var imageryProvider1 =  new Freedo.WebMapTileServiceImageryProvider({
	    url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg",
	    layer: "tdtAnnoLayer_biaoji",
	    style: "default",
	    format: "image/png",
	    tileMatrixSetID: "tianditu",
	    show: true
	})
	var imageLayers = viewer.imageryLayers;
	imageLayers.addImageryProvider(imageryProvider2);
	imageLayers.addImageryProvider(imageryProvider1);
	this.viewers[id] =  viewer;
	new Compass(viewer);
}

