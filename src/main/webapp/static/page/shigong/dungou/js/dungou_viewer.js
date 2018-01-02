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
		var pick= new FreeDo.Cartesian2(movement.position.x,movement.position.y);
		var cartesian = viewer.scene.globe.pick(viewer.camera.getPickRay(pick), viewer.scene);
		var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
		var point=[ cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
		console.log(point);
		if(picked!==undefined&&picked.id!==undefined&&typeof picked.id == "string"){
			var pickedid = picked.id;
			var id = parseInt(pickedid.slice(1,pickedid.length-1));
			DungouViewer.changeColor(pickedid);
			fanxuanTree(id);
			$(".detailInfo ul").html("<li><span>名称</span><input type='text' value='"+pickedid+"'/></li><li><span>推力（N）</span><input type='text' value='"+(id+5)*3+"'/></li> <li><span>刀盘转速（rpm）</span><input type='text' value='"+parseInt((id+3.7)*100)+"'/></li><li><span>旋转方向</span><input type='text'value='顺时针'/></li>");
			$(".detailInfo").show();
		}else{
			$(".detailInfo").hide();
		}
	}, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
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

