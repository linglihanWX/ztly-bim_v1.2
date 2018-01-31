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
/*		var pick= new FreeDo.Cartesian2(movement.position.x,movement.position.y);
		var cartesian = viewer.scene.globe.pick(viewer.camera.getPickRay(pick), viewer.scene);*/
/*        var cartesian = new FreeDo.Cartesian3(-2604248.177538355,4229798.269461045,3986719.5609140703)
		var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
		var point=[ cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];*/
		/*console.log(point);*/
        /*console.log(FreedoApp.viewers["earth"].camera)
        console.log(FreedoApp.viewers["earth"].camera.heading+","+FreedoApp.viewers["earth"].camera.pitch+","+FreedoApp.viewers["earth"].camera.roll)*/
        DungouViewer.changeColor(picked)
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
var flag = false
DungouViewer.changeColor=function(picked){
/*    if(picked instanceof FreeDo.FreedoPModelFeature) {	//如果picked为空则表示点击无模型处，使之前点变色的模型重置颜色并清空所选模型容器
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
    }*/


    if(picked instanceof FreeDo.FreedoPModelFeature){
        var componentId = picked.getProperty("component");
        console.log(componentId);
        $.ajax({
            url:"../../PModel/getGrandfatherUid/",
            data:{"uid":componentId},
            success:function(grandfatheruid){
            	if(flag){
                    allready.splice(allready.length-2, 1);
                    allready.splice(allready.length-1, 0, ["${component} ~== \'"+grandfatheruid +"\'", 'color("red")']);
				}else{
                    allready.splice(allready.length-1, 0, ["${component} ~== \'"+grandfatheruid +"\'", 'color("red")']);
				}
				flag = true;
                pmodel.style = new FreeDo.FreedoPModelStyle({
                    color : {
                        conditions : allready
                    },
                    show :{
                        conditions : hiderings }
                });
            }
        })

	}else{
        if(flag){
            allready.splice(allready.length-2, 1);
        }
        flag = false;
        pmodel.style = new FreeDo.FreedoPModelStyle({
            color : {
                conditions : allready
            },
            show :{
                conditions : [
                    ["${component} ~==  \'9668\'", 'false'],
                    ['true','true']
                ]}
        });
	}
}

