var ShowViewer = ShowViewer || {};
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
var water = [];
var environment =[];
var pickedModels = [];
var unClickedColor = new FreeDo.Color(1,1,1,1);
var clickedColor = new FreeDo.Color(1,3,1,0.9);
var screenSpaceEventHandler = null;
window.obj = {};


ShowViewer.fly=function(viewer,lon,lat,height,callback){
	$(".msgInfo").hide();
	var camera = viewer.camera;
	 camera.flyTo({  
	        destination : FreeDo.Cartesian3.fromDegrees( lon, lat-0.0014,height ),  
	        orientation : {  
	            heading : FreeDo.Math.toRadians( 0 ),  
	            pitch : FreeDo.Math.toRadians( -15 ),  
	            roll : FreeDo.Math.toRadians( 0 )  
	        },  
	        duration : 1,//动画持续时间
	        complete : function(){
	        	callback(viewer.canvas);
	        }
	 });
	 
}
ShowViewer.initLeftClick = function(viewer,callback) {
	screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){
		//记录相机位置
		var x = viewer.camera.position.x;
		var y = viewer.camera.position.y;
		var z = viewer.camera.position.z;
		var heading = viewer.camera.heading;
		var pitch = viewer.camera.pitch;
		var roll = viewer.camera.roll;
		//console.log(x+","+y+","+z+","+heading+","+pitch+","+roll);
		$(".msgInfo").hide();
		//$(".msgInfo").hide();
		var picked = viewer.scene.pick(movement.position);
		if(picked==undefined){
			ShowViewer.changeColor(picked);
			callback(undefined,undefined)
		}else{
			if(picked.primitive.boundingSphere != undefined){
				ShowViewer.changeColor(picked);
			}
			callback(movement.position,picked);
		}
	}, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
	

}
//移除原有的监听事件
ShowViewer.removeListener = function(){
	screenSpaceEventHandler.removeInputAction(FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
ShowViewer.changeColor=function(picked){
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
