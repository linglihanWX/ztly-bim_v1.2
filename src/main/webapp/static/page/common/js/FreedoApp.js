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
				sceneModePicker : false,//是否显示3d/2d选择器
				selectionIndicator : false, //是否显示选取指示器组件
				timeline : false,//是否显示时间轴
				navigationHelpButton : false, //是否显示右上角的帮助按钮
				navigationInstructionsInitiallyVisible : false,
				selectedImageryProviderViewModel : false,
				scene3DOnly : true,//如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
				clock : null,
				showRenderLoopErrors : false,
				automaticallyTrackDataSourceClocks:false,
				//加载自定义地图瓦片需要指定一个自定义图片服务器//URL 为瓦片数据服务器地址
				imageryProvider : new Freedo.WebMapTileServiceImageryProvider({
					url : "http://{s}.tianditu.com/img_c/wmts?service=WMTS&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet={TileMatrixSet}&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style={style}&format=tiles",
					style:"default",
					tileMatrixSetID:"c",
					tilingScheme:new Freedo.GeographicTilingScheme(),
					tileMatrixLabels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"],
					maximumLevel:17,
					subdomains : ["t0","t1","t2","t3","t4","t5","t6","t7"]
				})
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
	//imageLayers.addImageryProvider(imageryProvider2);
	imageLayers.addImageryProvider(imageryProvider1);
	this.viewers[id] =  viewer;
    var freedoTerrainProviderMeshes = new FreeDo.FreedoTerrainProvider({
        url : 'http://assets.agi.com/stk-terrain/v1/tilesets/world/tiles',
        requestWaterMask : true,
        requestVertexNormals : true
    });
    viewer.terrainProvider = freedoTerrainProviderMeshes;
/*    var cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
        url : 'https://assets.agi.com/stk-terrain/v1/tilesets/world/tiles

        ',
        requestWaterMask : true,
        requestVertexNormals : true
});*/
	new Compass(viewer);
}

