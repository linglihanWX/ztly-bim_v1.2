$(function () {
    var h = $("#content").height();
    var h2 = $(".breadcrumb").height();
    $("#content .row-fluid").height(h - h2);
    FreedoApp.init("earth");
    DungouViewer.initLeftClick(FreedoApp.viewers["earth"],showtips);
    DungouViewer.initLeftDbClick(FreedoApp.viewers["earth"])
    DungouViewer.initLeftDown(FreedoApp.viewers["earth"],hidetips)
   // var surveymanager = new SurveyManager(FreedoApp.viewers["earth"],function(){});
    cameraControl(FreedoApp.viewers["earth"]);
    
    //	初始化地球
	 //	添加模型
	$.ajax({
		url:"/PModel/getPmodel",
		type: "get",
		dataType:"json",
        success: function(data){
        	//解析json
        	var model=eval(data);
        	for(var key in model){
        		//挖坑数据
        		var holeData=eval(model[key].hole);
        		//图层数据
        		var imgarray=eval(model[key].imagelayer);
        		console.log( model[key].url);
        		 //向场景中添加模型
        		var modelTile=FreedoApp.viewers["earth"].scene.primitives.add(new FreeDo.FreedoPModelset({
            		url: model[key].url
            	}));
        		//移动模型到坑里
        		modelTile.readyPromise.then(function() {
            		moveModel(modelTile,model[key].x,model[key].y,model[key].z,model[key].heading,model[key].pitch,model[key].roll,model[key].scalex,model[key].scaley,model[key].scalez);
            	});
        		//挖坑
            	FreeDoUtil.dig(FreedoApp.viewers["earth"],holeData,imgarray);
            	//镜头定位
            	FreedoApp.viewers["earth"].camera.setView({
                 	destination :new FreeDo.Cartesian3.fromDegrees(model[key].cameralon,model[key].cameralat, model[key].cameraheight),
         			orientation: {
         				heading : model[key].cameraheading,
         				pitch : model[key].camerapitch,
         				roll : model[key].cameraroll
         			}
         		});
            	if(model[key].name == "railway"){
            		//地铁对应的盾构机
            	}else if(model[key].name == "tunnel"){
            	//定位到2号坑盾构机的位置
                	FreedoApp.viewers["earth"].camera.setView({
                     	destination : new FreeDo.Cartesian3.fromDegrees(113.66039473378382, 22.782948633936098,-550),
             			orientation : new FreeDo.HeadingPitchRoll(5.437420397295509,-0.11731154719345604,6.281381851419862)
                	});
            		//海底隧道对应的盾构机
            		modelTile.style = new FreeDo.FreedoPModelStyle({
    					color : {
    						conditions : [
    								[ "${component} === \'盾构轮廓-1 盾构轮廓-1 [333451]@2\'","color('white',0.5)" ],
    								[ "${component} === \'内衬轮廓-1 内衬轮廓-1 [341109]@4\'","color('white',0.5)" ],
    								[ "true", "color('white')" ] ]
    					}
    				});
            		
            		var pitch = 0;
            		FreedoApp.viewers["earth"].scene.preRender.addEventListener(function() {
            			if (pitch > 360)
            				pitch = 0;
            			pitch = pitch + 1;
            			primitive.modelMatrix = FreeDoTool.getModelMatrix(113.6609628070344, 22.791190110267943, -502, 50, pitch, 0, 1.8, 1.8, 1.8);

            		});
            		var primitive = FreedoApp.viewers["earth"].scene.primitives.add(FreeDo.Model.fromGltf({
            			id : "盾构机",
            			url : "../../static/page/shigong/dungou/gltf/dun_gou_dao_tou.gltf",
            			show : true, // default
            			modelMatrix : FreeDoTool.getModelMatrix(113.6609628070344, 22.791190110267943, -502, 287, 0, 0, 1.8, 1.8, 1.8),
            			allowPicking : true, // not pickable
            			debugShowBoundingVolume : false, // default
            			debugWireframe : false
            		}));
            		
//            		//2号坑
//            		var hole2Data = [
//					            		[
//						            		{lon:113.64593380167418, lat:22.778770250966016,height:1},
//						            		{lon:113.6628310531113,  lat:22.79305705713331,height:1},
//						            		{lon:113.66723822667922, lat:22.78875008072337,height:1},
//						            		{lon:113.65076908372689, lat:22.774286257239158,height:1}
//					            		],
//					            		[
//					            			{lon:113.64593380167418, lat:22.778770250966016,height:-500},
//					            			{lon:113.6628310531113,  lat:22.79305705713331,height:-500},
//					            			{lon:113.66723822667922, lat:22.78875008072337,height:-500},
//						            		{lon:113.65076908372689, lat:22.774286257239158,height:-500}
//					            		],
//					            		[
//					            			{lon:113.64593380167418, lat:22.778770250966016,height:-600},
//					            			{lon:113.6628310531113,  lat:22.79305705713331,height:-600},
//					            			{lon:113.66723822667922, lat:22.78875008072337,height:-600},
//						            		{lon:113.65076908372689, lat:22.774286257239158,height:-600}
//					            		],
//					            		[
//					            			{lon:113.64593380167418, lat:22.778770250966016,height:-700},
//					            			{lon:113.6628310531113,  lat:22.79305705713331,height:-700},
//					            			{lon:113.66723822667922, lat:22.78875008072337,height:-700},
//					            			{lon:113.65076908372689, lat:22.774286257239158, height:-700}
//					            		],
//					            		[
//					            			{lon:113.64593380167418, lat:22.778770250966016,height:-800},
//					            			{lon:113.6628310531113,  lat:22.79305705713331,height:-800},
//				            				{lon:113.66723822667922, lat:22.78875008072337,height:-800},
//				            				{lon:113.65076908372689, lat:22.774286257239158, height:-800}
//					            		]
//					            	];
//            		var imgarray2 = [
//            			"/static/page/common/img/hole/water.jpg",
//            			"/static/page/common/img/hole/Land003.jpg",
//            			"/static/page/common/img/hole/Land004.jpg",
//            			"/static/page/common/img/hole/Land002.jpg"
//            			]
//            		FreeDoUtil.dig(FreedoApp.viewers["earth"],hole2Data,imgarray2);
            		//entity绘制的线路
            		var line1 = FreedoApp.viewers["earth"].entities.add({ 
            			id:1,
            		    name : '线', 
            		    type :"line",
            		    data:[60,130],
            		    polyline : {  
            		        positions : FreeDo.Cartesian3.fromDegreesArrayHeights(  
            		            [
            		            	113.64614940531897, 22.778576538826982, -630,
            		            	113.65482304242103, 22.78583487031061,-610
            		            	]  
            		        ),  
            		        width : 5,  
            		        material : new FreeDo.PolylineOutlineMaterialProperty({  
            		            color : FreeDo.Color.GREEN,  
            		            outlineWidth : 1,  
            		            outlineColor : FreeDo.Color.BLACK  
            		        })  
            		    }  
            		});
            		var line2 = FreedoApp.viewers["earth"].entities.add({  
            			id:2,
            			name : '线', 
            			type :"line",
            			data:[50,120],
            			polyline : {  
            				positions : FreeDo.Cartesian3.fromDegreesArrayHeights(  
            						[
            							113.65482304242103, 22.78583487031061, -610,
            							113.65713401517607, 22.787744674022917,-580
            							]  
            				),  
            				width : 5,  
            				material : new FreeDo.PolylineOutlineMaterialProperty({  
            					color : FreeDo.Color.BLUE,  
            					outlineWidth : 1,  
            					outlineColor : FreeDo.Color.BLACK  
            				})  
            			}  
            		});
            		var line3 = FreedoApp.viewers["earth"].entities.add({  
            			id:3,
            			name : '线',  
            			type :"line",
            			data:[40,110],
            			polyline : {  
            				positions : FreeDo.Cartesian3.fromDegreesArrayHeights(  
            						[
            							113.65713401517607, 22.787744674022917, -580,
            							113.66004961353387, 22.790307562206543,-490
            							]  
            				),  
            				width : 5,  
            				material : new FreeDo.PolylineOutlineMaterialProperty({  
            					color : FreeDo.Color.BLUEVIOLET,  
            					outlineWidth : 1,  
            					outlineColor : FreeDo.Color.BLACK  
            				})  
            			}  
            		});
            		var line4 = FreedoApp.viewers["earth"].entities.add({  
            			id:4,
            			name : '线',  
            			type :"line",
            			data:[30,100],
            			polyline : {  
            				positions : FreeDo.Cartesian3.fromDegreesArrayHeights(  
            						[
            							113.66004961353387, 22.790307562206543, -490,
            							113.66301755136372, 22.792709921496122,-380
            							]  
            				),  
            				width : 5,  
            				material : new FreeDo.PolylineOutlineMaterialProperty({  
            					color : FreeDo.Color.BLUE,  
            					outlineWidth : 1,  
            					outlineColor : FreeDo.Color.BLACK  
            				})  
            			}  
            		});
            		var verticaline = FreedoApp.viewers["earth"].entities.add({  
            			id:5,
            			name : '线',  
            			type :"verticaline",
            			polyline : {  
            				positions : FreeDo.Cartesian3.fromDegreesArrayHeights(  
            						[
            							113.65713401517607, 22.787744674022917, -580,
            							113.65713401517607, 22.787744674022917,-800
            							]  
            				),  
            				width : 5,  
            				material : new FreeDo.PolylineOutlineMaterialProperty({  
            					color : FreeDo.Color.ORANGE,  
            					outlineWidth : 1,  
            					outlineColor : FreeDo.Color.BLACK  
            				})  
            			}  
            		});
            		
            	}
        	}
        	

        }
	});
    
    
    
/*	*//**
	 *工具栏按钮点击 
	 *//*
	$("#appendTools i").each(function(){
		$(this).click(function(){
			$(".detailInfo").hide();
			if($(this).hasClass("active")){
			//设置方法为none
			surveymanager.setSurveyType(SurveyType.NONE);
			//移除原有的监听事件
			DungouViewer.removeListener();
			//初始化相应的监听事件
			switch ($(this).attr("id")) {
			//统计查询
			case "TJCX":
				$("#img").hide();
				surveymanager.setSurveyType(SurveyType.QUERY)
				break;
			//距离测量
			case "JLCL":
				$("#echartarea").hide();
				$("#img").hide();
				surveymanager.setSurveyType(SurveyType.LINE_DISTANCE);
				break;
			//方位测量
			case "FWCL":
				$("#echartarea").hide();
				$("#img").hide();						
				surveymanager.setSurveyType(SurveyType.Azimuth_DISTANCE);
				break;
			//面积测量
			case "MJCL":
				$("#echartarea").hide();
				$("#img").hide();					
				break;
			//地面刨切
			case "DMPQ":
				$("#echartarea").hide();					
				surveymanager.setSurveyType(SurveyType.Geology_SLICING);
				break;
			//其他
			default:
				break;
			}
		}else{
			//隐藏echarts和img窗口
			$("#echartarea").hide();
			$("#img").hide();
			//删除三维页面所有的线、标签
			
			//设置方法为none
			surveymanager.setSurveyType(SurveyType.NONE);
			//初始化原有的监听事件
			DungouViewer.initLeftClick(FreedoApp.viewers["earth"],function(){});
		}
		});
	});*/
});
/*var centerpoint = [];
*//**
 * 通过计算插入管道（管道无ID）
 * @param lon 经度
 * @param lat 纬度
 * @param height 高度
 * @param gdlength 管道长度
 * @param num 数量
 * @returns geometryInstances 数组
 *//*
function calculateZB1(longitude,latitude,height,gdlength,num){
	//地理坐标
	var cartographic1  = {longitude:2.0534816290463516,  latitude:0.6811787630410361,height:height};
	var cartographic2  = {longitude:2.053488770056539,  latitude:0.6811771826112164,height:height};
	//经度差值
	var amplitude1 = (cartographic1.longitude-cartographic2.longitude);
	//纬度差值
	var amplitude2 = (cartographic1.latitude-cartographic2.latitude);
	//地理坐标转世界坐标
	var cartesian1 = FreedoApp.viewers["earth"].scene.globe.ellipsoid.cartographicToCartesian (cartographic1);
	var cartesian2 = FreedoApp.viewers["earth"].scene.globe.ellipsoid.cartographicToCartesian (cartographic2);
	//两点距离的平方
	var dsquare = FreeDo.Cartesian3.distanceSquared(cartesian1,cartesian2);
	//gblength所对应的经度差值与纬度差值
	var proportion = Math.pow(gdlength,2)/dsquare;
	var gbamplitude1 = amplitude1*Math.sqrt(proportion);
	var gbamplitude2 = amplitude2*Math.sqrt(proportion);
	//geometryInstances
	var DTWL = [];
	//临时起始点
	var tempZB1 = {longitude:longitude,  latitude:latitude}
	//临时终止点
	var tempZB2 = {longitude:0,  latitude:0}
	for (var i = 1; i <=num; i++) {
		tempZB2.longitude = tempZB1.longitude-gbamplitude1;
		tempZB2.latitude = tempZB1.latitude-gbamplitude2;
		//centerpoint.push({lon:tempZB1.lon-d1/2,lat:tempZB1.lat-d2/2,height:height});
	       var obj = new Freedo.GeometryInstance({
	    	   geometry : new Freedo.PolylineVolumeGeometry({
	    		   //vertexFormat : Freedo.VertexFormat.DEFAULT,2.0534816290463516, latitude: 0.6811787630410361
	    		   polylinePositions : Freedo.Cartesian3.fromRadiansArrayHeights([
	    			   tempZB1.longitude,  tempZB1.latitude,  height,
	    			   tempZB2.longitude,  tempZB2.latitude,  height
	    			   ]),
	    			   shapePositions : computeCircle(5.0)
	    	   }),
	    	   attributes : {
	    		   color : Freedo.ColorGeometryInstanceAttribute.fromColor(Freedo.Color.DARKGRAY)
	    	   }
	       });
	     tempZB1.longitude=tempZB2.longitude;
	     tempZB1.latitude=tempZB2.latitude;
	     //console.log(tempZB1.longitude+","+tempZB1.latitude);
	     DTWL.push(obj);
	}
	return DTWL;
}
*//**
 * 通过计算插入管道
 * @param lon 经度
 * @param lat 纬度
 * @param height 高度
 * @param gdlength 管道长度
 * @param num 数量
 * @returns geometryInstances 数组
 *//*
function calculateZB2(longitude,latitude,height,gdlength,num){
	//地理坐标
	var cartographic1  = {longitude:2.0534816290463516,  latitude:0.6811787630410361,height:height};
	var cartographic2  = {longitude:2.053488770056539,  latitude:0.6811771826112164,height:height};
	//经度差值
	var amplitude1 = (cartographic1.longitude-cartographic2.longitude);
	//纬度差值
	var amplitude2 = (cartographic1.latitude-cartographic2.latitude);
	//地理坐标转世界坐标
	var cartesian1 = FreedoApp.viewers["earth"].scene.globe.ellipsoid.cartographicToCartesian (cartographic1);
	var cartesian2 = FreedoApp.viewers["earth"].scene.globe.ellipsoid.cartographicToCartesian (cartographic2);
	//两点距离的平方
	var dsquare = FreeDo.Cartesian3.distanceSquared(cartesian1,cartesian2);
	//gblength所对应的经度差值与纬度差值
	var proportion = Math.pow(gdlength,2)/dsquare;
	var gbamplitude1 = amplitude1*Math.sqrt(proportion);
	var gbamplitude2 = amplitude2*Math.sqrt(proportion);
	//geometryInstances
	var DTWL = [];
	//临时起始点
	var tempZB1 = {longitude:longitude,  latitude:latitude}
	//临时终止点
	var tempZB2 = {longitude:0,  latitude:0}
	for (var i = 1; i <=num; i++) {
		tempZB2.longitude = tempZB1.longitude-gbamplitude1;
		tempZB2.latitude = tempZB1.latitude-gbamplitude2;
		//centerpoint.push({lon:tempZB1.lon-d1/2,lat:tempZB1.lat-d2/2,height:height});
		var obj = new Freedo.GeometryInstance({
			id : "第"+i+"环",
			geometry : new Freedo.PolylineVolumeGeometry({
				//vertexFormat : Freedo.VertexFormat.DEFAULT,2.0534816290463516, latitude: 0.6811787630410361
				polylinePositions : Freedo.Cartesian3.fromRadiansArrayHeights([
					tempZB1.longitude,  tempZB1.latitude,  height,
					tempZB2.longitude,  tempZB2.latitude,  height
					]),
					shapePositions : computeCircle(5.0)
			}),
			attributes : {
				color : Freedo.ColorGeometryInstanceAttribute.fromColor(Freedo.Color.DARKGRAY)
			}
		});
		tempZB1.longitude=tempZB2.longitude;
		tempZB1.latitude=tempZB2.latitude;
		DTWL.push(obj);
	}
	return DTWL;
}
function computeCircle(radius) {
    var positions = [];
    for (var i = 0; i < 360; i++) {
        var radians = Freedo.Math.toRadians(i);
        positions.push(new Freedo.Cartesian2(radius * Math.cos(radians), radius * Math.sin(radians)));
    }
    return positions;
}
//显示标牌
function showlabel(id,position){
	$(".msgInfo").hide();
	var pick= new FreeDo.Cartesian2(position.x,position.y);
	cartesian = FreedoApp.viewers["earth"].scene.globe.pick(FreedoApp.viewers["earth"].camera.getPickRay(pick), FreedoApp.viewers["earth"].scene);
	if(id!=undefined&&id.indexOf("管道")>-1){
		removeFollowLisener();
		addFollowListener();
		$(".msgInfo").html(id).show();
	}
}
//标牌跟随移动
var cartesian= null;
var flag = false;
var htmlOverlay = document.getElementById('showmsg');
var addFollowListener=function(){
	flag = FreedoApp.viewers["earth"].scene.preRender.addEventListener(setScreenPostion);
}
var removeFollowLisener= function(){
	if(flag==true){
		FreedoApp.viewers["earth"].scene.preRender.removeEventListener(setScreenPostion);
		flag = false;
	}
}
var setScreenPostion=function (){	
	var canvasPosition = FreedoApp.viewers["earth"].scene.cartesianToCanvasCoordinates(cartesian);
	    if (FreeDo.defined(canvasPosition)) {
	        htmlOverlay.style.top = canvasPosition.y -150+ 'px';
	        htmlOverlay.style.left = canvasPosition.x +220+ 'px';
	    }
}
//加载坑和管道
var guandao2 = null;
function initPipingPit(){
	var userdata2 =[
		[				
			{lon:117.65370310938958,lat: 39.02934846731648,height:0},
			{lon:117.65616588189279,lat: 39.02878641322159,height:0},
			{lon:117.65606451946124,lat: 39.028480607240965,height:0},
			{lon:117.66036385771528,lat: 39.02753995829354,height:0},
			{lon:117.66010911739728,lat: 39.02689057245006,height:0},
			{lon:117.6533791730346,lat:  39.02839160339337,height:0}
		],

		[
			{lon:117.65370310938958,lat: 39.02934846731648,height:-15},
			{lon:117.65616588189279,lat: 39.02878641322159,height:-13},
			{lon:117.65606451946124,lat: 39.028480607240965,height:-20},
			{lon:117.66036385771528,lat: 39.02753995829354,height:-15},
			{lon:117.66010911739728,lat: 39.02689057245006,height:-22},
			{lon:117.6533791730346,lat:  39.02839160339337,height:-11}
		],

		[
			{lon:117.65370310938958,lat: 39.02934846731648,height:-27},
			{lon:117.65616588189279,lat: 39.02878641322159,height:-33},
			{lon:117.65606451946124,lat: 39.028480607240965,height:-26},
			{lon:117.66036385771528,lat: 39.02753995829354,height:-22},
			{lon:117.66010911739728,lat: 39.02689057245006,height:-32},
			{lon:117.6533791730346,lat:  39.02839160339337,height:-24}
		],
		[
			{lon:117.65370310938958,lat: 39.02934846731648,height:-50},
			{lon:117.65616588189279,lat: 39.02878641322159,height:-50},
			{lon:117.65606451946124,lat: 39.028480607240965,height:-50},
			{lon:117.66036385771528,lat: 39.02753995829354,height:-50},
			{lon:117.66010911739728,lat: 39.02689057245006,height:-50},
			{lon:117.6533791730346,lat:  39.02839160339337,height:-50}
		]
]
	var imgarray = [
		"static/page/shigongguanli/dungou/img/Land001.jpg",
		"static/page/shigongguanli/dungou/img/Land002.jpg",
		"static/page/shigongguanli/dungou/img/Land004.jpg"
	];
	FreeDoUtil.dig(FreedoApp.viewers["earth"],userdata2,imgarray);
    var pitch = 0;
    var matrix = null;
    //盾构机旋转
    FreedoApp.viewers["earth"].scene.preRender.addEventListener(function(){
    	if(pitch>360)pitch=0;
    	pitch = pitch+1;
    	primitive.modelMatrix = getModelMatrix(180*2.0534865154587263/Math.PI,180*0.6811776815929453/Math.PI,-23,287,pitch,0,1.2,1.2,1.2);
    	
    });
	var primitive = FreedoApp.viewers["earth"].scene.primitives.add(FreeDo.Model.fromGltf(
        {
            id: "盾构机",
            url: "static/page/shigongguanli/dungou/gltf/dun_gou_dao_tou.gltf",
            show: true,                     // default
            modelMatrix:getModelMatrix(180*2.0534865154587263/Math.PI,180*0.6811776815929453/Math.PI,-23,287,0,0,1.2,1.2,1.2),
            allowPicking: true,            // not pickable
            debugShowBoundingVolume: false, // default
            debugWireframe: false
        }));
    	console.log(primitive);
       
       var offsetwenli = new Freedo.Cartesian2(100, 1);
       
       
       var array1 = calculateZB1(2.0534816290463516,0.6811787630410361,-28,1.2,20);
       var array2 = calculateZB2(2.0534807581666916,0.6811761975379643,-28,1.2,344);
       var guandao1 = FreedoApp.viewers["earth"].scene.primitives.add(new Freedo.Primitive({
    	   geometryInstances : array1,
    	   appearance: new FreeDo.PerInstanceColorAppearance( {  
    		   flat : true,
    		   translucent : false
    	   })  
       })); 
       guandao2 = FreedoApp.viewers["earth"].scene.primitives.add(new Freedo.Primitive({
           geometryInstances : array2,
           appearance: new FreeDo.PerInstanceColorAppearance( {  
        		flat : true,
        		translucent : false
           })  
       })); 
       setInterval(function () {
           if (offsetwenli.x > 51) {
           	offsetwenli.x = 50;
           }
           offsetwenli.x += 0.005;
         }, 10);
}
function fanxuanTree(id){
 	var treeObj = $.fn.zTree.getZTreeObj("tree");
	var nodes = treeObj.getNodes()[0].children;
	if (nodes.length>0) {
		treeObj.selectNode(nodes[id-1]);
}
}
function getModelMatrix(lon,lat,height,heading,pitch,roll,scaleX,scaleY,scaleZ)
{
		var scaleCartesian3=new FreeDo.Cartesian3(scaleX,scaleY,scaleZ); //获得三元素，直接通过数字获得
		var scaleMatrix=FreeDo.Matrix4.fromScale(scaleCartesian3);//获得缩放矩阵
		var position = FreeDo.Cartesian3.fromDegrees(lon,lat,height);//根据经纬高获得位置三元素
 		var heading=FreeDo.Math.toRadians(heading);
 		var pitch=FreeDo.Math.toRadians(pitch);
 		var roll=FreeDo.Math.toRadians(roll);
		var hpr=new FreeDo.HeadingPitchRoll(heading,pitch,roll);
		var transform=FreeDo.Transforms.headingPitchRollToFixedFrame(position,hpr);//获得姿态矩阵
		var matrix4=new FreeDo.Matrix4();
		FreeDo.Matrix4.multiply(transform,scaleMatrix,matrix4);
		return matrix4;
}
*/
function showtips(picked,screenposition){
			if(picked!=undefined&&picked.id!=undefined&&picked.id.type!=undefined){				
				if(picked.id.type=="line"){
					$("#tipbox1").css({
						left:screenposition.x-150,
						top:screenposition.y-50
					}).show()
					$("#tipbox2").css({
						left:screenposition.x+150,
						top:screenposition.y-70
					}).show()
					$("#tipbox3").css({
						left:screenposition.x-150,
						top:screenposition.y+50
					}).show()
					$("#tipbox4").css({
						left:screenposition.x+150,
						top:screenposition.y+70
					}).show()
					$("#tipbox1 ul li span").text(picked.id.data[0]);
					$("#tipbox3 ul li span").text(picked.id.data[1]);
					$("#tipbox4 ul li span").text(picked.id.id);
				}else{
					hidetips();
				}
			}else{
				hidetips();
			}
}
function hidetips(){
	$("#tipbox1,#tipbox2,#tipbox3,#tipbox4").hide();
}