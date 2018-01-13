var DungouViewer=DungouViewer||{};
var pickedModels = [];
var unClickedColor = new FreeDo.Color(1,1,1,1);
var clickedColor = new FreeDo.Color(1,3,1,1);

//存放变色后的实例
var attributearray = [];
DungouViewer.initLeftClick = function(viewer,callback) {
	screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){
/*		var pick= new FreeDo.Cartesian2(movement.position.x,movement.position.y);
		var cartesian = globalviewer.scene.globe.pick(globalviewer.camera.getPickRay(pick), globalviewer.scene);
		console.log(cartesian);*/
		var picked = viewer.scene.pick(movement.position);
		// console.log(picked);
		// var pick= new FreeDo.Cartesian2(movement.position.x,movement.position.y);
		// var cartesian = viewer.scene.globe.pick(viewer.camera.getPickRay(pick), viewer.scene);
		// var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
		// var point=[ cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
		// console.log(point);
//		console.log(FreedoApp.viewers["earth"].camera)
//		console.log(FreedoApp.viewers["earth"].camera.heading+","+FreedoApp.viewers["earth"].camera.pitch+","+FreedoApp.viewers["earth"].camera.roll)
		if(picked==undefined){
			callback(undefined,undefined);
		}else{
			callback(picked,movement.position);
		}
	}, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
DungouViewer.initLeftDown = function(viewer,callback) {
	screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){
		callback();
	}, FreeDo.ScreenSpaceEventType.LEFT_DOWN);
}
DungouViewer.initLeftDbClick = function(viewer) {
	screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){
	}, FreeDo.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
}
//移除原有的监听事件
DungouViewer.removeListener = function(){
	screenSpaceEventHandler.removeInputAction(FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
DungouViewer.changeColor=function(pickedid){
	if(attributearray.length>0){
		for (var i = 0; i < attributearray.length; i++) {
			attributearray[i].color = FreeDo.ColorGeometryInstanceAttribute.toValue(FreeDo.Color.DARKGRAY);
		}
		attributearray = [];
	}
	 var attributes = guandao2.getGeometryInstanceAttributes(pickedid);//获取某个实例的属性集  
	 //FreeDoTool.flyToModel(globalviewer.camera,attributes)
	 attributes.color = FreeDo.ColorGeometryInstanceAttribute.toValue(FreeDo.Color.FIREBRICK);
	 attributearray.push(attributes);
	 globalviewer.camera.viewBoundingSphere(attributes.boundingSphere, new Freedo.HeadingPitchRange(Freedo.Math.toRadians(23) , 0, 30))

}

