var pmodel=[];
var allready=[];
var pmodels=[];
$(function(){
	var h=$("#content").height();
	var h2=$(".breadcrumb").height();
	$("#content.row-fluid").height(h-h2);
	FreedoApp.init("earth");
    FreedoApp.viewers["earth"].scene.globe.depthTestAgainstTerrain =true;
    FreedoApp.viewers["earth"].scene._screenSpaceCameraController.enableCollisionDetection =false;
	   DungouViewer.initLeftClick(FreedoApp.viewers["earth"], showtips);
	DungouViewer.initLeftDbClick(FreedoApp.viewers["earth"])
	DungouViewer.initLeftDown(FreedoApp.viewers["earth"], hidetips)
	   cameraControl(FreedoApp.viewers["earth"]);//相机控制
	 $.ajax({
	        url: "../../PModel/getPmodel",
	        type: "get",
	        dataType: "json",
	        success: function (data) {
	            //解析json
	            var model = eval(data);
	            for (var key in model) {
	                //挖坑数据
	                var holeData = eval(model[key].hole);
	                //图层数据
	                var imgarray = eval(model[key].imagelayer);
	                //挖坑
	                if (holeData != null && imgarray != null) {
	                    //获取地址栏地址
	                    var path = window.location.pathname;
	                    //截取字符串
	                    var patharray = path.split("/");
	                    //拼接文件地址
	                    for (var i = 0; i < imgarray.length; i++) {
	                        var str = "";
	                        for (var j = 0; j < patharray.length - 3; j++) {
	                            str = str + "../"
	                        }
	                        imgarray[i] = str + imgarray[i];
	                    }
				   //调用挖坑方法
				   FreeDoUtil.dig(FreedoApp.viewers["earth"],holeData,imgarray);
			   }
			   console.log(model[key].url);
			   //向场景中增加模型
			   var modelTile = FreedoApp.viewers["earth"].scene.primitives.add(new FreeDo.FreedoPModelset({
				   url:model[key].url
			   }));
			   var index = model[key].unitname;
               pmodels[index] = modelTile;
               if (model[key].x != 0 || model[key].y != 0 || model[key].z != 0 || model[key].heading != 0 || model[key].pitch != 0 || model[key].roll != 0 || model[key].scalex != 1 || model[key].scaley != 1 || model[key].scalez != 1) {
                   //调整模型位置
                   modelTile.readyPromise.then(function (modeltile) {
                       moveModel(modeltile, model[key].x, model[key].y, model[key].z, model[key].heading, model[key].pitch, model[key].roll, model[key].scalex, model[key].scaley, model[key].scalez);
                   });
			   }
			   if(model[key].cameralon != null || model[key].cameralat != null || model[key].cameraheight != null || model[key].cameraheading != null || model[key].camerapitch != null || model[key].cameraroll != null)
				   {
				   //镜头定位
				   FreedoApp.viewers["earth"].camera.setView({
					   destination:new FreeDo.Cartesian3.fromDegrees(model[key].cameralon,model[key].cameralat,model[key].cameraheight),
					   orientation: {
                           heading: model[key].cameraheading,
                           pitch: model[key].camerapitch,
                           roll: model[key].cameraroll
                       }
				   });
				   $("#resetview").click(function(){
					   FreedoApp.viewers["earth"].camera.setView({
						   destination : new FreeDo.Cartesian3.fromDegrees(model[key].cameralon, model[key].cameralat, model[key].cameraheight),
                           orientation : new FreeDo.HeadingPitchRoll(model[key].cameraheading,model[key].camerapitch,model[key].cameraroll)
					   });
				   });
				   }else{
					   modelTile.readyPromise.then(function () {
	                        FreedoApp.viewers["earth"].camera.flyToBoundingSphere(modelTile.boundingSphere,{
	                            duration:0
	                        });
	                    });
	                    $("#resetview").click(function () {FreedoApp.viewers["earth"].camera.flyToBoundingSphere(modelTile.boundingSphere,{
	                        duration:0
	                       });
	                    });
				   }
			   pmodel = modelTile;
			   if(model[key].name=="dalian2"){
				   //初始化模型的颜色，用来显示已经盾构的环和没有盾构的环
				   for(var i = 2;i<=9668;i+=18){
					   allready.push(["${component} ~==  \'"+i+"\'", 'color("aquamarine",0.5)'])
				   }
				   allready.push(['true','color("white")'])
				   pmodel.style = new FreeDo.FreedoPModelStyle({
					   color:{
						   conditions:[
							   ["${component}~==\'9668\'",'false'],
							   ['true','true']
						   ]
					   }
				   });
				   
				    //盾构机旋转
                   var pitch = 0;
                   FreedoApp.viewers["earth"].scene.preRender.addEventListener(function(){
                       if(pitch>360)pitch=0;
                       pitch = pitch+1;
                       daotou.modelMatrix = FreeDoTool.getModelMatrix(121.62022781066331, 38.93872856969979,-491.5,165,pitch,0,1.4,1.4,1.4);
                   });
				   //加盾构机刀头
				   var daotou = FreedoApp.viewers["earth"].scene.primitives.add(FreeDo.Model.fromGltf(
				  {
					id:"盾构机刀头",
					url: "http://182.92.7.32:9000/ztly/glb/dungoujidaotou/dun_gou_dao_tou.gltf",
					show:true,
					modelMatrix:FreeDoTool.getModelMatrix(121.62022781066331, 38.93872856969979,-491.5,165,0,0,1.4,1.4,1.4),
					allowPicking:true,
					debugShowBoundingVolume:false,
					debugWireframe:false
				   }));
				   
				   //加盾构机机身
				   var cheshen = FreedoApp.viewers["earth"].scene.primitives.add(FreeDo.Model.fromGltf(
	                        {
	                            id: "盾构机车身",
	                            url: "http://182.92.7.32:9000/ztly/glb/cheshen.glb",
	                            show: true,                     // default
	                            modelMatrix:FreeDoTool.getModelMatrix(121.62022781066331, 38.93872856969979,-491.5,249,6,0,1.2,1.2,1.2),
	                            allowPicking: true,            // not pickable
	                            debugShowBoundingVolume: false, // default
	                            debugWireframe: false
	                     }));
	                    cheshen.color = FreeDo.Color.RED;
			   }
		   }
	   }
	});
	 
	//entity绘制线路
	var line1 = FreedoApp.viewers["earth"].entities.add({
		id:1,
		name:'线',
		type:"line",
		data:[60,130],
		polyline:{
			position:FreeDo.Cartesian3.fromDegreesArrayHeights(
				[
					 121.60592745779262, 38.953991486827306, -180,
	                  121.61385178949371, 38.948083100516946, -280
				]	
			),
			width:5,
			material:new FreeDo.PolylineOutlineMaterialProperty({
				  color: FreeDo.Color.GREEN,
	                outlineWidth: 1,
	                outlineColor: FreeDo.Color.BLACK
			})
		}
	});
	 var line2 = FreedoApp.viewers["earth"].entities.add({
	        id: 2,
	        name: '线',
	        type: "line",
	        data: [50, 120],
	        polyline: {
	            positions: FreeDo.Cartesian3.fromDegreesArrayHeights(
	                [
	                    121.61385178949371, 38.948083100516946, -280,
	                    121.61758807016263, 38.943420806881576, -350
	                ]
	            ),
	            width: 5,
	            material: new FreeDo.PolylineOutlineMaterialProperty({
	                color: FreeDo.Color.BLUE,
	                outlineWidth: 1,
	                outlineColor: FreeDo.Color.BLACK
	            })
	        }
	    });
	    var line3 = FreedoApp.viewers["earth"].entities.add({
	        id: 3,
	        name: '线',
	        type: "line",
	        data: [40, 110],
	        polyline: {
	            positions: FreeDo.Cartesian3.fromDegreesArrayHeights(
	                [
	                    121.61758807016263, 38.943420806881576, -350,
	                    121.62004836953294, 38.9385202916514, -400
	                ]
	            ),
	            width: 5,
	            material: new FreeDo.PolylineOutlineMaterialProperty({
	                color: FreeDo.Color.BLUEVIOLET,
	                outlineWidth: 1,
	                outlineColor: FreeDo.Color.BLACK
	            })
	        }
	    });
	    var line4 = FreedoApp.viewers["earth"].entities.add({
	        id: 4,
	        name: '线',
	        type: "line",
	        data: [30, 100],
	        polyline: {
	            positions: FreeDo.Cartesian3.fromDegreesArrayHeights(
	                [
	                    121.62004836953294, 38.9385202916514, -400,
	                    121.62410255554124, 38.930786875534515, -500
	                ]
	            ),
	            width: 5,
	            material: new FreeDo.PolylineOutlineMaterialProperty({
	                color: FreeDo.Color.BLUE,
	                outlineWidth: 1,
	                outlineColor: FreeDo.Color.BLACK
	            })
	        }
	    });
	    var verticaline = FreedoApp.viewers["earth"].entities.add({
	        id: 5,
	        name: '线',
	        type: "verticaline",
	        polyline: {
	            positions: FreeDo.Cartesian3.fromDegreesArrayHeights(
	                [
	                    121.62004836953294, 38.9385202916514, -400,
	                    121.62004836953294, 38.9385202916514, -800
	                ]
	            ),
	            width: 5,
	            material: new FreeDo.PolylineOutlineMaterialProperty({
	                color: FreeDo.Color.ORANGE,
	                outlineWidth: 1,
	                outlineColor: FreeDo.Color.BLACK
	            })
	        }
	    });
	    showhidelabels()
});
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
	$(".tipbox").hide();
    $("#tipbox5").children().remove()
    $("#tipbox6").children().remove()
	$("#sanwei4").prop("checked",false);
	$("#sanwei5").prop("checked",false);
}
function showhidelabels() {
    $("#sanwei4").change(function(){
        var str = "<p>泡沫系统</p><ul>"+$(".info-middle #4 ul").html()+"</ul>";
        if ($(this).prop('checked')){
            $("#tipbox5").append(str).css({
                left : "35%",
                top : "20%"
            }).show();
        }else{
            $("#tipbox5").children().remove().hide();
        }
    })
     $("#sanwei5").change(function(){
        var str = "<p>掘进实时位置监控</p><ul>"+$(".info-middle #5 ul").html()+"</ul>";
        if ($(this).prop('checked')){
            $("#tipbox6").append(str).css({
                left : "70%",
                top  : "20%"
            }).show();
        }else{
            $("#tipbox6").children().remove().hide();
        }
    }) 
}
/*$(function () {
    //初始化地球
    FreedoApp.init("earth");
    getPoints(FreedoApp.viewers["earth"])
    var array = initEntities(FreedoApp.viewers["earth"])

        FreedoApp.viewers["earth"].clock.onTick.addEventListener(function (clock) {
            var camera = FreedoApp.viewers["earth"].camera;
            var scene = FreedoApp.viewers["earth"].scene;
            var cameraHeight = scene.globe.ellipsoid.cartesianToCartographic(camera.position).height;
            if (cameraHeight < 0) {
                var cartesian = camera.position;
                var cartographic = scene.globe.ellipsoid.cartesianToCartographic(cartesian);
                cartographic.height = 0;
                var newcartesian =  scene.globe.ellipsoid.cartographicToCartesian (cartographic);
                camera.setView({
                    destination:newcartesian
                })
            }

        });
    $.ajax({
        url: "../../PModel/getPmodel",
        type: "get",
        dataType: "json",
        success: function (data) {
            if(data[0].id==15){
                FreedoApp.viewers["earth"].camera.setView({
//    	 destination :  new FreeDo.Cartesian3.fromDegrees(121.61949402684546,38.94285250833841,1000),
                    destination: new FreeDo.Cartesian3(-2390504.2868196983,5437784.25207524,2461194.1877298946),
                    orientation: new FreeDo.HeadingPitchRoll(5.910423052387491,-1.2442322139759034,6.267673931457356)
                })
            }else{
                FreedoApp.viewers["earth"].camera.setView({
//    	 destination :  new FreeDo.Cartesian3.fromDegrees(121.61949402684546,38.94285250833841,1000),
                    destination: new FreeDo.Cartesian3(-2606029.8300439236, 4232695.952801313, 3989852.346352031),
                    orientation: new FreeDo.HeadingPitchRoll(4.76493381044884, -1.515738147823087, 6.223530529077095)
                })
            }
        }
    });
    //图层部分
    var layersarr = [];
    var layersname = [];
    var imageryLayers = FreedoApp.viewers["earth"].imageryLayers;
    $.ajax({
        url: "../../static/page/dungou/gaikuang/json/layers.json",
        type: "get",
        async: false,
        dataType: 'json',
        success: function (data) {

            for (var i = 0; i < data.length; i++) {
                layersname[i] = data[i].name;
                layersarr[i] = imageryLayers.addImageryProvider(new Freedo.WebMapServiceImageryProvider({
                    url: 'http://182.92.7.32:9510/geoserver/shenmao/wms',
                    layers: data[i].layers,
                    parameters: {
                        version: '1.1.1',
                        transparent: true,
                        format: 'image/png',
                        tiled: true,
                        gridSet: 'EPSG=3395'
                    }
                }));
            }

        }
    })
    var checkstr = ""
    for (var i = 0; i < 13; i++) {
        checkstr += '<li><input type="checkbox" checked name="">' + layersname[i] + '</li>';
    }
    $(".list").append(checkstr)
    $(".showCheckList").on("click", function () {
        $(".list-box").stop().slideDown();
    });
    $(".close").on("click", function () {
        $(".list-box").stop().slideUp();
    });
    $(".list li input").each(function () {
        $(this).change(function () {
            if ($(this).prop("checked")) {
                var index = $(".list li input").index(this);
                layersarr[index].show = true;
            } else {
                var index = $(".list li input").index(this);
                layersarr[index].show = false;
            }
        })
    })
});

function getPoints(viewer) {
    var screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
    screenSpaceEventHandler.setInputAction(function (movement) {
        		var pick= new FreeDo.Cartesian2(movement.position.x,movement.position.y);
                var cartesian = globalviewer.scene.globe.pick(globalviewer.camera.getPickRay(pick), globalviewer.scene);
                console.log(cartesian);
//		var picked = viewer.scene.pick(movement.position);

        var pick = new FreeDo.Cartesian2(movement.position.x, movement.position.y);
        var cartesian = viewer.scene.globe.pick(viewer.camera.getPickRay(pick), viewer.scene);
        var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
        var point = [cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
        console.log(point);
        var camera = viewer.camera;
        var cpos = camera.position;
        console.log(cpos.x + "," + cpos.y + "," + cpos.z);
        console.log(camera.heading + "," + camera.pitch + "," + camera.roll)
    }, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}

function initEntities(viewer) {
    var entityarray = []
    //线
    var suidao = viewer.entities.add({
        name: '隧道',
        polyline: {
            positions: new Freedo.Cartesian3.fromDegreesArray(
                [
                    121.6174590015098, 38.95874455713569,
                    121.61620866389461, 38.95850677314042,
                    121.61540662903757, 38.958213704595344,
                    121.61434819575115, 38.95757077980332,
                    121.6135457552831, 38.95697455120128,
                    121.61290596157349, 38.956174751834915,
                    121.61286001141309, 38.955303559050506,
                    121.61311573725642, 38.95458901085754,
                    121.61419971201384, 38.952850605114364,
                    121.61488866358799, 38.95166932433065,
                    121.61504611872272, 38.95062460623984,
                    121.62024154952725, 38.93020774283203,
                    121.62079840051048, 38.92833355870257,
                    121.6211754421881, 38.927660591537894,
                    121.62203768455467, 38.92672914057143,
                    121.62259337661449, 38.92564313453812,
                    121.62330218345369, 38.92434019585824,
                    121.62374838697704, 38.92305321084292,
                    121.62404269310349, 38.92168051864768,
                ]),
            width: 5,
            material: FreeDo.Color.RED,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var hangdaoletf = viewer.entities.add({
        name: '航道左',
        polyline: {
            positions: new Freedo.Cartesian3.fromDegreesArray(
                [121.61913775986976, 38.93819291323306,
                    121.62049902027843, 38.94087844623272,
                    121.6397957460026, 38.949188385501316]),
            width: 2,
            material: FreeDo.Color.WHITE,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var hangdaoright = viewer.entities.add({
        name: '航道右',
        polyline: {
            positions: new Freedo.Cartesian3.fromDegreesArray(
                [121.61611584935584, 38.94278135499672,
                    121.61929223758972, 38.942504460137705,
                    121.63850361880273, 38.95117967187629]),
            width: 2,
            material: FreeDo.Color.WHITE,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    //字
    var label1 = viewer.entities.add({
        name: "香炉礁航道",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.62224889978843, 38.94270512602886, 1),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "香炉礁航道",
            font: '20pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            backgroundColor: FreeDo.Color.MEDIUMBLUE,
            showBackground: true,
            fillColor: FreeDo.Color.YELLOW,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var label2 = viewer.entities.add({
        name: "军港码头",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.61997619924065, 38.933427729468725, 1),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "军港码头",
            font: '20pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            backgroundColor: FreeDo.Color.MEDIUMBLUE,
            showBackground: true,
            fillColor: FreeDo.Color.YELLOW,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var label3 = viewer.entities.add({
        name: "航母制造区",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.61391282811357, 38.934625366453034, 1),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "航母制造区",
            font: '20pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            backgroundColor: FreeDo.Color.MEDIUMBLUE,
            showBackground: true,
            fillColor: FreeDo.Color.YELLOW,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var label4 = viewer.entities.add({
        name: "疏港货运铁路",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.61497425831845, 38.92570034025223, 1),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "疏港货运铁路",
            font: '20pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            backgroundColor: FreeDo.Color.MEDIUMBLUE,
            showBackground: true,
            fillColor: FreeDo.Color.YELLOW,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var label5 = viewer.entities.add({
        name: "中间风井（接收）",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.6207361838563, 38.92834465015816, 1),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "中间风井（接收）",
            font: '20pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            backgroundColor: FreeDo.Color.MEDIUMBLUE,
            showBackground: true,
            fillColor: FreeDo.Color.YELLOW,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var label6 = viewer.entities.add({
        name: "梭渔湾南站",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.61392275532712, 38.95323841740604, 1),
        label: { // 文字标签
            text: "梭渔湾南站",
            font: '16pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            fillColor: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        billboard: {
            image: "../../static/page/dungou/gaikuang/img/star.png",
            width: 25,
            height: 25,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var label7 = viewer.entities.add({
        name: "火车站站",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.62378599839502, 38.922779514349656, 1),
        label: { // 文字标签
            text: "火车站站",
            font: '16pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            fillColor: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        billboard: {
            image: "../../static/page/dungou/gaikuang/img/star.png",
            width: 25,
            height: 25,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var posinf1 = viewer.entities.add({
        name: '位置信息',
        show: true,
        position: new FreeDo.Cartesian3.fromDegrees(121.61732581093031, 38.93832015839612, 3),
        label: { //文字标签
            text: '位置信息\n——————\n地铁5号线\n海底隧道',
            font: '13px sans-serif',
            style: FreeDo.LabelStyle.FILL,
            fillColor: FreeDo.Color.WHITE,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),  //偏移量
            backgroundColor: FreeDo.Color.BLACK.withAlpha(0.5),
            showBackground: true,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },

    });
    var posinf2 = viewer.entities.add({
        name: '掘进实时位置',
        show: true,
        position: new FreeDo.Cartesian3.fromDegrees(121.61714484625392, 38.943851238986866, 3),
        label: { //文字标签
            text: '掘进实时位置\n———————————————————\n经度：121.615833   纬度：38.9416654\n高度：240m         相对地面高度：120m',
            font: '13px sans-serif',
            style: FreeDo.LabelStyle.FILL,
            fillColor: FreeDo.Color.WHITE,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),  //偏移量
            backgroundColor: FreeDo.Color.BLACK.withAlpha(0.5),
            showBackground: true,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },

    });
    var tuding = viewer.entities.add({
        name: '位置信息',
        show: true,
        position: new FreeDo.Cartesian3.fromDegrees(121.617802483274261, 38.93972348307097, 3),
        billboard: {
            image: "../../static/page/dungou/gaikuang/img/tuding.png",
            height: 50,
            width: 50,
            pixelOffset: new FreeDo.Cartesian2(0, -15),
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }

    });
    entityarray.push(label1);
    entityarray.push(label2);
    entityarray.push(label3);
    entityarray.push(label4);
    entityarray.push(label5);
    entityarray.push(label6);
    entityarray.push(label7);
    entityarray.push(posinf1);
    entityarray.push(posinf2);
    entityarray.push(tuding);
    return entityarray;
}

function pinjie(data) {
    var str = ""
    for (var i = 0; i < data.length; i++) {
        if (data[i] != "") {
            if (i != data.length - 1) {
                str = str + data[i] + ",";
            } else {
                str = str + data[i];
            }
        }

    }
    return str
}*/