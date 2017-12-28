var GeologyViewer = GeologyViewer || {};
var index = 0;
var indexReal = 0;
var arr = [];
var arrReal = [];
var newObj = {};
var newObjReal = {};
var currArr = [];
var currArrReal = [];
var first = true;
var firstReal = true;
var pickedModels = [];
var unClickedColor = new FreeDo.Color(1,1,1,1);
var clickedColor = new FreeDo.Color(1,3,1,0.9);
var screenSpaceEventHandler = null;
window.obj = {};

GeologyViewer.initLeftClick = function(viewer,callback){
	screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){
		var picked = viewer.scene.pick(movement.position);
		console.log(picked);
		GeologyViewer.changeColor(picked);
			if(picked==undefined){
				callback(undefined);
			}else{
				callback(picked);
			}
		
	}, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
//移除原有的监听事件
GeologyViewer.removeListener = function(){
	screenSpaceEventHandler.removeInputAction(FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
GeologyViewer.fly=function(viewer,lon,lat,height){
	var camera = viewer.camera;
	 camera.flyTo({  
	        destination : FreeDo.Cartesian3.fromDegrees( lon, lat-0.0014,height ),  
	        orientation : {  
	            heading : FreeDo.Math.toRadians( 0 ),  
	            pitch : FreeDo.Math.toRadians( -15 ),  
	            roll : FreeDo.Math.toRadians( 0 )  
	        },  
	        duration : 1,//动画持续时间
	 });
	 
}
GeologyViewer.changeColor=function(picked){
	if(picked==undefined){	//如果picked为空则表示点击无模型处，使之前点变色的模型重置颜色并清空所选模型容器
		
		for(var i=0;i<pickedModels.length;i++)
			pickedModels[i].primitive.color=unClickedColor;
		
		pickedModels=[];
		
		return ;
	}
	
	if(pickedModels.length!=0){	//使之前点变色的模型重置颜色并清空所选模型容器
	
	
		for(var i=0;i<pickedModels.length;i++)
			pickedModels[i].primitive.color=unClickedColor;
		
		pickedModels=[];
	}
			
	pickedModels.push(picked);	//缓存点选模型
	
	pickedModels[0].primitive.color=clickedColor; //变色
	
	 
}
GeologyViewer.initModels = function () {
    $.ajax({
        url: "pm/selectAll",
        dataType: "JSON",
        success: function (content) {
            var node = null;
            var modelNode = null;
            var modelParentNode = null;//模型缓存中的父节点
            var container = GeologyViewer.modelContainer;

            for (var i = 0; i < content.length; i++) {
                node = content[i];

                modelParentNode = container[node.parentId];
                if (modelParentNode == undefined) {
                    modelParentNode = container[node.parentId] = { children: [] };
                }

                //非叶子节点
                if (node.leaf == 0) {
                    modelNode = new GeologyViewer.GroupObj(node.id, node.parentId, node.text, node.type);

                    if (container[node.id] != undefined) {
                        modelNode.children = container[node.id].children;
                    }
                } else {
                    var parameter = JSON.parse(node.attributes.parameter);
                    modelNode = new GeologyViewer.ModelObj(node.id, node.parentId, node.text, node.type, "static/model/" + parameter.filePath, parameter.lon, parameter.lat, parameter.height-46, parameter.course, parameter.alpha, parameter.roll, parameter.scaleX, parameter.scaleY, parameter.scaleZ);
                }

                container[node.id] = modelNode;

                modelParentNode.children.push(modelNode.id);
               
            }
        }

    });
}