var SafeThreeViewer = SafeThreeViewer || {};
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
var ceshistate = false;
var globalModelTile=null;
var screenSpaceEventHandler = null;
window.obj = {};
var jianpiaokou1 = {};
var jianpiaokou1 = {};
var jianpiaokou1 = {};
var zhizhu = {};
var dianti = {};
var anjian = {}
var entitesarray=[];
SafeThreeViewer.initLabel = function (viewer) {
		jianpiaokou1 = viewer.entities.add( {  
		    name : '图标',  
		    position : new FreeDo.Cartesian3.fromDegrees(117.6549657186326, 39.028695707158185, -8.132962020111965),  
	        show : false,
		    label : { //文字标签  
		        text : '序号：1\nWBS名称：1号 检票口\n存在隐患：易燃物品堆放\n隐患等级：一级',  
		        font : '17px sans-serif', 
		        style : FreeDo.LabelStyle.FILL,  
		        fillColor:FreeDo.Color.BLACK,
		        verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
		        pixelOffset : new FreeDo.Cartesian2( 0, -9 ) ,  //偏移量 
				backgroundColor:FreeDo.Color.RED,
				showBackground:true
		    },
		 
		} );  
		jianpiaokou2 = viewer.entities.add( {  
			name : '图标',  
			position : new FreeDo.Cartesian3.fromDegrees(117.65485736335727, 39.0288385898898, -8.38655418030589),  
			show : false,
			label : { //文字标签  
				text : '序号：2\nWBS名称：2号 检票口\n存在隐患：易燃物品堆放\n隐患等级：一级',  
				font : '17px sans-serif',  
				style : FreeDo.LabelStyle.FILL,  
				fillColor:FreeDo.Color.BLACK,
				verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
				pixelOffset : new FreeDo.Cartesian2( 0, -9 ) ,  //偏移量 
				backgroundColor:FreeDo.Color.RED,
				showBackground:true
			},
			
		} );  
		jianpiaokou3 = viewer.entities.add( {  
			name : '图标',  
			position : new FreeDo.Cartesian3.fromDegrees(117.65457686483425, 39.02889521820999, -8.618923689085566), 
			show : false,
			label : { //文字标签  
				text : '序号：3\nWBS名称：3号 检票口\n存在隐患：易燃物品堆放\n隐患等级：一级',  
				font : '17px sans-serif', 
				style : FreeDo.LabelStyle.FILL,  
				fillColor:FreeDo.Color.BLACK,
				verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
				pixelOffset : new FreeDo.Cartesian2( 0, -9 ) ,  //偏移量 
				backgroundColor:FreeDo.Color.RED,
				showBackground:true
			},
			
		} );  
		zhizhu = viewer.entities.add( {  
			name : '图标',  
			position : new FreeDo.Cartesian3.fromDegrees(117.65469785633918, 39.02877723478264, -8.868876746473855),  
			show : false,
			label : { //文字标签  
				text : '序号：4\nWBS名称：1号 支柱\n存在隐患：支柱裂纹\n隐患等级：二级',  
				font : '17px sans-serif', 
				style : FreeDo.LabelStyle.FILL,  
				fillColor:FreeDo.Color.BLACK,
				verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
				pixelOffset : new FreeDo.Cartesian2( 0, -9 ) ,  //偏移量 
				backgroundColor:FreeDo.Color.ORANGE,
				showBackground:true
			},
			
		} );  
		dianti = viewer.entities.add( {  
			name : '图标',  
			position : new FreeDo.Cartesian3.fromDegrees(117.65492075292256, 39.028788237667136, -8.524780241824177), 
			show : false,
			label : { //文字标签  
				text : '序号：5\nWBS名称：1号 电梯\n存在隐患：电梯漏电\n隐患等级：三级',  
				font : '17px sans-serif',  
				style : FreeDo.LabelStyle.FILL,  
				fillColor:FreeDo.Color.BLACK,
				verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
				pixelOffset : new FreeDo.Cartesian2( 0, -9 ) ,  //偏移量 
				backgroundColor:FreeDo.Color.YELLOW,
				showBackground:true
			},
			
		} ); 
		anjian = viewer.entities.add( {  
			name : '图标',  
			position : new FreeDo.Cartesian3.fromDegrees(117.65502555728834, 39.02881290009245, -7.155497368460313), 
			show : false,
			label : { //文字标签  
				text : '序号：1\n整改编号：JRXM-JCHC\n整改情况：整改中\n整改日期：2016-09-09',  
				font : '17px sans-serif',  
				style : FreeDo.LabelStyle.FILL,  
				fillColor:FreeDo.Color.BLACK,
				verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
				pixelOffset : new FreeDo.Cartesian2( 0, -9 ) ,  //偏移量 
				backgroundColor:FreeDo.Color.BLUE,
				showBackground:true
			},
			
		} ); 
		entitesarray.push(jianpiaokou1);
		entitesarray.push(jianpiaokou2);
		entitesarray.push(jianpiaokou3);
		entitesarray.push(zhizhu);
		entitesarray.push(dianti);
		entitesarray.push(anjian);		
	}


var shuxingshuju = [
		{id:"4",componentId:"f9d881e3-914b-11e7-350c-41f03c953867",position:{x: -2194085.358357283, y: 4378020.501802686, z: 4073309.593950244,h:5.35265519096344,p:-0.957659926884252,r:6.278567474111711}},
		{id:"3",componentId:"ed72d504-914b-11e7-350c-41f03c953867",position:{x: -2195060.2573393, y: 4378576.951533875, z: 4073663.174259837,h:5.352722440967762,p:-0.9575901024379618,r:6.2785770863994745}},
		{id:"7",componentId:"ed779002-914b-11e7-350c-41f03c953867",position:{x: -2193793.6199775375, y: 4377914.767535423, z: 4073137.8297135117,h:5.630378750477897,p:-0.5528137024056186,r:6.280823088992896}},
		{id:"6",componentId:"edc8bd46-914b-11e7-350c-41f03c953867",position:{x: -2193708.6772762756, y: 4377904.534220799, z: 4073202.5056291255,h:1.994404289117547,p:-0.6097462455837199,r:0.0036707497876156125}},
		{id:"8",componentId:"f4af8dd0-914b-11e7-350c-41f03c953867",position:{x: -2193811.879911349, y: 4377879.3756989, z: 4073278.261950106,h:2.484639075410328,p:-0.7742439563807868,r:0.0028153183111001567}},
		{id:"9",componentId:"f71913d4-914b-11e7-350c-41f03c953867",position:{x: -2193752.736986991, y: 4377917.714569312, z: 4073448.8325745175,h:3.176375399572854,p:-0.8374943559959638,r:6.283014252876068}},
	];

SafeThreeViewer.changechoserow = function(row){
	if(ceshistate&&mglobalModelTile){
		for(i in shuxingshuju){
			if(shuxingshuju[i].id==row.id){
				var componentId = shuxingshuju[i].componentId;
				var redStyle = new FreeDo.FreedoPModelStyle({color: {conditions: [["${component} === \'" + componentId + "\'", "color('red')"],["true", "color('white')"]]}});
				mglobalModelTile.style=redStyle;
				this.viewer.camera.flyTo({
					destination : new FreeDo.Cartesian3(shuxingshuju[i].position.x, shuxingshuju[i].position.y, shuxingshuju[i].position.z),
					orientation: {
						heading : shuxingshuju[i].position.h,
						pitch : shuxingshuju[i].position.p,
						roll : shuxingshuju[i].position.r
					}
				});
			}
		}

	}
}




SafeThreeViewer.changeColorById =function(uid){

	var showhide = new FreeDo.FreedoPModelStyle({
	    color: {
	      conditions:uid                        		
	    }
	  });
	globalModelTile.style = showhide;
}

SafeThreeViewer.fly = function(x,y,z,heading,pitch,roll,labelleft,labeltop){
	FreedoApp.viewers["earth"].camera.setView({
		destination :new FreeDo.Cartesian3(x,y,z),
		orientation: {
			heading : heading,
			pitch : pitch,
			roll : roll
		}
	})
}
SafeThreeViewer.initLeftClick = function(viewer) {
	screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){
		/*var picked = viewer.scene.pick(movement.position);
		var pick = new FreeDo.Cartesian2(movement.position.x,movement.position.y);
		var cartesian = viewer.camera.pickEllipsoid(pick,viewer.scene.globe.ellipsoid);*/
        var cartesian = new FreeDo.Cartesian3(-2302786.784515869,4394540.396317855,3994816.9435913595);
		var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
		var point=[ cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180,cartographic.height];
		//var id = picked.getProperty('component');
		//console.log(point);
		//记录相机位置
		/*var x = viewer.camera.position.x
		var y = viewer.camera.position.y
		var z = viewer.camera.position.z
		var heading = viewer.camera.heading;
		var pitch = viewer.camera.pitch;
		var roll = viewer.camera.roll;
		console.log(x+","+y+","+z+","+heading+","+pitch+","+roll);*/
	}, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
	

}
//移除原有的监听事件
SafeThreeViewer.removeListener = function(){
	screenSpaceEventHandler.removeInputAction(FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
SafeThreeViewer.initWheel = function(viewer) {
	screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){
		
	}, FreeDo.ScreenSpaceEventType.WHEEL);
}
SafeThreeViewer.hideAll = function(){
	for ( var i in entitesarray) {
		entitesarray[i].show = false;
	}
};
