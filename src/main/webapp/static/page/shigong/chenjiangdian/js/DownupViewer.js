var DownupViewer=DownupViewer||{};
var downuppoints = [];
var leftClickHandler = null;
var leftDownHandler = null;
/**
 * [init 地球容器ID]
 * @param  {[type]} earthId [description]
 * @return {[type]}         [description]
 */
DownupViewer.initDownup=function(viewer)
{
	//加载沉降点
	var downuppoint = [
		{"lon":"117.65493267761651","lat":"39.02886839380683"},
		{"lon":"117.65367088333899","lat":"39.0286955440859"},
		{"lon":"117.65369998250587","lat":"39.028783658883626"},
		{"lon":"117.65416379870284","lat":"39.02869887327398"},
		{"lon":"117.65386209988398","lat":"39.02888525363075"},
		{"lon":"117.65394149842251","lat":"39.02914251332972"},
		{"lon":"117.6543837414338","lat":"39.029044985518674"},
		{"lon":"117.65583099288868","lat":"39.02874696864712"},
		{"lon":"117.65601006053487","lat":"39.028716770649865"},
		{"lon":"117.65593015314758","lat":"39.028452384354985"},
		{"lon":"117.65555457406431","lat":"39.02847195063175"}
		];
	for ( var i in downuppoint) {
		downuppoints[i] = viewer.entities.add({  
			name : '沉降点'+i,  
			position : FreeDo.Cartesian3.fromDegrees(downuppoint[i].lon,downuppoint[i].lat,2),  
			 point : { //点  
			        pixelSize : 5,  
			        color : FreeDo.Color.RED,  
			        outlineColor : FreeDo.Color.WHITE,  
			        outlineWidth : 2  
			    }/*, 
			 ellipse : {  
				 	semiMinorAxis : 1,  
			        semiMajorAxis : 1,  
			        material : FreeDo.Color.RED,  
			        outline : true,  
			        outlineColor : FreeDo.Color.RED  
			    } */ 
		});
	}

    viewer.screenSpaceEventHandler.setInputAction(function(){},FreeDo.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
}

DownupViewer.initLeftClick = function(viewer,callback) {
	leftClickHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	leftClickHandler.setInputAction(function(movement){
		var picked = viewer.scene.pick(movement.position);
		//console.log(picked);FreeDo.defined(picked) && picked instanceof FreeDo.FreedoPModelFeature
		callback(picked,movement.position);
		/*var pick= new FreeDo.Cartesian2(movement.position.x,movement.position.y);
		var cartesian = viewer.camera.pickEllipsoid(pick, viewer.scene.globe.ellipsoid);
		var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
		var point=[cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];*/

		//输出相机位置
		//console.log(viewer.camera.position.x+","+viewer.camera.position.y+","+viewer.camera.position.z+","+viewer.camera.heading+","+viewer.camera.pitch+","+viewer.camera.roll);
		//输出点击位置的经纬度
		//console.log(point);
		
	}, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
DownupViewer.initLeftDown = function(viewer,callback){
	leftDownHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	leftDownHandler.setInputAction(function(movement){
		var picked = viewer.scene.pick(movement.position);
		if(picked==null||picked instanceof FreeDo.FreedoPModelFeature){
			callback();
		}
	}, FreeDo.ScreenSpaceEventType.LEFT_DOWN);
}
//移除原有的监听事件
DownupViewer.removeListener = function(){
	leftClickHandler.removeInputAction(FreeDo.ScreenSpaceEventType.LEFT_CLICK);
	leftDownHandler.removeInputAction(FreeDo.ScreenSpaceEventType.LEFT_DOWN);
}
