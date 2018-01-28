var DungouViewer=DungouViewer||{};
var pickedModels = [];
var unClickedColor = new FreeDo.Color(1,1,1,1);
var clickedColor = new FreeDo.Color(1,3,1,1);

//存放变色后的实例
var attributearray = [];
DungouViewer.initLeftClick = function(viewer,callback) {
	screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){

		var picked = viewer.scene.pick(movement.position);
	
        DungouViewer.changeColor(picked);
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
DungouViewer.changeColor=function(picked){
    if(picked instanceof FreeDo.FreedoPModelFeature) {	//如果picked为空则表示点击无模型处，使之前点变色的模型重置颜色并清空所选模型容器
        if (pickedModels.length != 0) {	//使之前点变色的模型重置颜色并清空所选模型容器
            for (var i = 0; i < pickedModels.length; i++) {
                pickedModels[i].color = unClickedColor;
                pickedModels = [];
            }
        }
        pickedModels.push(picked);	//缓存点选模型
        pickedModels[0].color = clickedColor; //变色
    }else {
        for (var i = 0; i < pickedModels.length; i++)
            pickedModels[i].color = unClickedColor;
        pickedModels = [];
        return;
    }
}
