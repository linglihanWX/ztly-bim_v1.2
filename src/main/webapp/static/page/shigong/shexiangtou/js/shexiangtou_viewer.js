var CameraViewer=CameraViewer||{};
var camera = [];
var leftClickHandler = null;
var leftDownHandler = null;
/**
 * [init 地球容器ID]
 * @param  {[type]} earthId [description]
 * @return {[type]}         [description]
 */
CameraViewer.initCamera=function(viewer)
{

	var camera1 = viewer.entities.add( {  
		name : '摄像头1',  
		position : FreeDo.Cartesian3.fromDegrees(117.65375541701634, 39.02874722501288,1),    
		label : { //文字标签  
			text : '南门1',  
			font : '14pt monospace',  
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,  
			outlineWidth : 2,  
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
			pixelOffset : new FreeDo.Cartesian2( 0, -18 )   //偏移量  
		},  		 
		billboard : { //图标  
			image : "../static/page/shigong/shexiangtou/img/camera.svg",  
			width : 50,  
			height : 50  
		}
	} );
	var camera2 = viewer.entities.add( {  
		name : '摄像头2',  
		position : FreeDo.Cartesian3.fromDegrees(117.65429737156501, 39.02880876433644,-2),    
		label : { //文字标签  
			text : '南门2',  
			font : '14pt monospace',  
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,  
			outlineWidth : 2,  
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
			pixelOffset : new FreeDo.Cartesian2( 0, -18 )   //偏移量  
		},  		 
		billboard : { //图标  
			image : "../static/page/shigong/shexiangtou/img/camera.svg",  
			width : 50,  
			height : 50  
		}
	} );
	var camera3 = viewer.entities.add( {  
		name : '摄像头3',  
		position : FreeDo.Cartesian3.fromDegrees(117.65447907157001, 39.028964593410294,-2),    
		label : { //文字标签  
			text : '三门',  
			font : '14pt monospace',  
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,  
			outlineWidth : 2,  
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
			pixelOffset : new FreeDo.Cartesian2( 0, -18 )   //偏移量  
		},  		 
		billboard : { //图标  
			image : "../static/page/shigong/shexiangtou/img/camera.svg",  
			width : 50,  
			height : 50  
		}
	} );
	var camera4 = viewer.entities.add( {  
		name : '摄像头4',  
		position : FreeDo.Cartesian3.fromDegrees(117.65491829534002, 39.02880064474932,-2),    
		label : { //文字标签  
			text : '站厅扶梯口',  
			font : '14pt monospace',  
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,  
			outlineWidth : 2,  
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
			pixelOffset : new FreeDo.Cartesian2( 0, -18 )   //偏移量  
		},  		 
		billboard : { //图标  
			image : "../static/page/shigong/shexiangtou/img/camera.svg",  
			width : 50,  
			height : 50  
		}
	} );
	var camera5 = viewer.entities.add( {  
		name : '摄像头5',  
		position : FreeDo.Cartesian3.fromDegrees(117.65520604234463, 39.028678589254206,-2),    
		label : { //文字标签  
			text : '土体口',  
			font : '14pt monospace',  
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,  
			outlineWidth : 2,  
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
			pixelOffset : new FreeDo.Cartesian2( 0, -18 )   //偏移量  
		},  		 
		billboard : { //图标  
			image : "../static/page/shigong/shexiangtou/img/camera.svg",  
			width : 50,  
			height : 50  
		}
	} );
	camera.push(camera1);
	camera.push(camera2);
	camera.push(camera3);
	camera.push(camera4);
	camera.push(camera5);
}

/**
 * 左键点击事件
 */
CameraViewer.initLeftClick = function(viewer,callback) {
	leftClickHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	leftClickHandler.setInputAction(function(movement){
		
		var picked = viewer.scene.pick(movement.position);
		callback(picked,movement.position);
		
		/*var pick= new FreeDo.Cartesian2(movement.position.x,movement.position.y);
		var cartesian = viewer.camera.pickEllipsoid(pick, viewer.scene.globe.ellipsoid);
		var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
		var point=[cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];*/
		//输出相机位置
/*		var cartesian = new FreeDo.Cartesian3(viewer.camera.position.x, viewer.camera.position.y, viewer.camera.position.z)
		var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
		console.log(cartographic.longitude +","+cartographic.latitude+","+viewer.camera.heading+","+viewer.camera.pitch+","+viewer.camera.roll);*/
		//输出点击位置的经纬度
		//console.log(point);
		
	}, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
//移除原有的监听事件
CameraViewer.removeListener = function(){
	leftClickHandler.removeInputAction(FreeDo.ScreenSpaceEventType.LEFT_CLICK);
	leftDownHandler.removeInputAction(FreeDo.ScreenSpaceEventType.LEFT_DOWN);
}
CameraViewer.initLeftDown = function(viewer,callback){
	leftDownHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	leftDownHandler.setInputAction(function(movement){
		var picked = viewer.scene.pick(movement.position);
		if(picked==null||picked instanceof FreeDo.FreedoPModelFeature){
			callback();
		}
	}, FreeDo.ScreenSpaceEventType.LEFT_DOWN);
}