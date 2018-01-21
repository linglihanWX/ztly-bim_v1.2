$(function () {
    var h = $("#content").height();
    var h2 = $(".breadcrumb").height();
    $("#content .row-fluid").height(h - h2);
    FreedoApp.init("earth");
    DungouViewer.initLeftClick(FreedoApp.viewers["earth"],showtips);
    DungouViewer.initLeftDbClick(FreedoApp.viewers["earth"])
    DungouViewer.initLeftDown(FreedoApp.viewers["earth"],hidetips)
    //var surveymanager = new SurveyManager(FreedoApp.viewers["earth"],function(){});

    
    //	初始化地球
    //存放PMODEL的数组，PMODEL对应的构件表名为索引。
    var pmodels = [];
    $.ajax({
        url: "../PModel/getPmodel",
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
                    FreeDoUtil.dig(FreedoApp.viewers["earth"], holeData, imgarray);
                }
                console.log(model[key].url);
                //向场景中添加模型
                var modelTile = FreedoApp.viewers["earth"].scene.primitives.add(new FreeDo.FreedoPModelset({
                    url: model[key].url
                }));
                var index = model[key].unitname;
                pmodels[index] = modelTile;
                if (model[key].x != 0 || model[key].y != 0 || model[key].z != 0 || model[key].heading != 0 || model[key].pitch != 0 || model[key].roll != 0 || model[key].scalex != 1 || model[key].scaley != 1 || model[key].scalez != 1) {
                    //调整模型位置
                    modelTile.readyPromise.then(function (modeltile) {
                        moveModel(modeltile, model[key].x, model[key].y, model[key].z, model[key].heading, model[key].pitch, model[key].roll, model[key].scalex, model[key].scaley, model[key].scalez);
                    });
                }
                if (model[key].cameralon != null || model[key].cameralat != null || model[key].cameraheight != null || model[key].cameraheading != null || model[key].camerapitch != null || model[key].cameraroll != null) {

                    //镜头定位
                    FreedoApp.viewers["earth"].camera.setView({
                        destination: new FreeDo.Cartesian3.fromDegrees(model[key].cameralon, model[key].cameralat, model[key].cameraheight),
                        orientation: {
                            heading: model[key].cameraheading,
                            pitch: model[key].camerapitch,
                            roll: model[key].cameraroll
                        }
                    });
                } else {
                    modelTile.readyPromise.then(function () {
                        FreedoApp.viewers["earth"].camera.flyToBoundingSphere(modelTile.boundingSphere);
                    });
                }
            }
        }
    });
//	添加模型结束
   /* //	查询树列表

    var treedata = []
    treedata.push({
        uid: "-1",
        pid: "-2",
        name: "模型构件树",
        isParent: true
    })

    var zTreeObj;
    var setting = {
/!*        check: {
            enable: true
        },*!/
        async: {
            enable: true,
            type: "get",
            url: getUrl
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "uid",
                pIdKey: "pid",
                rootPId: "-2"
            }
        },
        callback: {
            onAsyncSuccess:function (event, treeId, treeNode, msg) {
                //console.log(msg);
            },
            onRightClick: OnRightClick,
            onClick: function (event, treeId, treeNode) {
                var boundsmax = treeNode.boundsmax;
                var boundsmin = treeNode.boundsmin;
                if (treeNode.tablename != undefined) {
                    //得到结点所存的表名，作为pmodels数组的索引找到对应的pmodel对象
                    var unitname = treeNode.tablename;
                    //根据最大最小包围盒定位
                    var boundingSphere = FreeDoTool.getSphereFromBoundsMinMax(boundsmax, boundsmin, pmodels[unitname])
                    FreedoApp.viewers["earth"].camera.flyToBoundingSphere(boundingSphere)
                }
                //模型高亮style
                var highlightmodelstyle = new FreeDo.FreedoPModelStyle({
                    color: {
                        conditions: [
                            ["${component} === \'" + treeNode.uid + "\'", 'color("red")'],
                            ['true', 'color("white")']
                        ]
                    }
                });
                //原色
                var originmodelstyle = new FreeDo.FreedoPModelStyle();
                for (var index in pmodels) {
                    if(index==treeNode.tablename){
                        pmodels[index].style = highlightmodelstyle;
                    }else{
                        pmodels[index].style = originmodelstyle;
                    }
                }
            },
            /!*onCheck: function (event, treeId, treeNode) {
                //得到所有未勾选的结点
                var nodes = zTreeObj.getCheckedNodes(false);
                //用于存放style的数组，第一个PMODEL模型对象一个style
                var models =[];
                //用unitname作为models数据的索引，不同结点根据所属PMODEL模型对象，放入相应的style中
                for(i in nodes){
                    var index = nodes[i].unitname;
                    var uid = ["${component} === \'" + nodes[i].uid + "\'", 'false'];
                    if(models[index]==null){
                    models[index]=[];
                    }
                    models[index].push(uid)
                }
                //最后给没有勾选的结点设置成显示
                for(var index in models){
                    models[index].push(['true', 'true'])
                }
                //遍历未勾选的结点
                for(i in nodes){
                //遍历模型对象
                for (var index in pmodels) {
                    //根据结点的表名对应模型数组的索引找到相应的模型对象，并设置对象的隐藏style
                    if(index==nodes[i].tablename){
                        pmodels[index].style = new FreeDo.FreedoPModelStyle({
                            show: {
                                conditions:models[index]
                            }
                        });
                    }
                }
                }
            }*!/
        }
    };

    /!**
     *得到异步请求的路径
     * @param treeId
     * @param treeNode
     *!/
    function getUrl(treeId, treeNode) {
        var uid = treeNode.uid;
        if (treeNode.tablename == undefined) {
            return "../PModel/getProjectModelTreeData?uid=" + uid;
        } else {
            return "../PModel/getProjectModelTreeData?uid=" + uid + "&tablename=" + treeNode.tablename;
        }
    }

    /!**
     * 树节点右键点击事件
     * @param event
     * @param treeId
     * @param treeNode
     * @constructor
     *!/
    function OnRightClick(event, treeId, treeNode) {
        $("#rMenu").show().css({
            "left": event.pageX,
            "top": event.pageY
        });
    }

    zTreeObj = $.fn.zTree.init($("#tree"), setting, treedata);
    var node = zTreeObj.getNodeByParam("uid", -1, null);
    zTreeObj.expandNode(node, true, true, true)
    zTreeObj.checkNode(node,true,true)*/

    $('#tree').tree({
        method:"get",
        //checkbox:true,
        data:[{
            id:"-1",
            text:"模型构件树",
            state:"closed",
            //checked:true
        }],
        onBeforeExpand:function(node,param){
            if(node.id=="-1"){
                $('#tree').tree('options').url = "../PModel/getModelTreeAsyn?uid=-1";
            }else{
                $('#tree').tree('options').url = "../PModel/getModelTreeAsyn?uid=" + node.id+"&tablename="+node.tablename;
            }

        },
        onClick:function (node) {
            var boundsmax = node.boundsmax;
            var boundsmin = node.boundsmin;
            if (node.tablename != undefined) {
                //得到结点所存的表名，作为pmodels数组的索引找到对应的pmodel对象
                var unitname = node.tablename;
                //根据最大最小包围盒定位
                var boundingSphere = FreeDoTool.getSphereFromBoundsMinMax(boundsmax, boundsmin, pmodels[unitname])
                FreedoApp.viewers["earth"].camera.flyToBoundingSphere(boundingSphere)
            }
            //模型高亮style
            var highlightmodelstyle = new FreeDo.FreedoPModelStyle({
                color: {
                    conditions: [
                        ["${component} === \'" + node.id + "\'", 'color("red")'],
                        ['true', 'color("white")']
                    ]
                }
            });
            //原色
            var originmodelstyle = new FreeDo.FreedoPModelStyle();
            for (var index in pmodels) {
                if(index==node.tablename){
                    pmodels[index].style = highlightmodelstyle;
                }else{
                    pmodels[index].style = originmodelstyle;
                }
            }
        },
        onCheck:function (node,checked) {
            //得到所有未勾选的结点
            var nodes = $('#tree').tree('getChecked', 'unchecked');
            //用于存放style的数组，第一个PMODEL模型对象一个style
            var models =[];
            //用unitname作为models数据的索引，不同结点根据所属PMODEL模型对象，放入相应的style中
            for(i in nodes){
                var index = nodes[i].tablename;
                var uid = ["${component} === \'" + nodes[i].uid + "\'", 'false'];
                if(models[index]==null){
                    models[index]=[];
                }
                models[index].push(uid)
            }
            //最后给没有勾选的结点设置成显示
            for(var index in models){
                models[index].push(['true', 'true'])
            }
            //遍历未勾选的结点
            for(i in nodes){
                //遍历模型对象
                for (var index in pmodels) {
                    //根据结点的表名对应模型数组的索引找到相应的模型对象，并设置对象的隐藏style
                    if(index==nodes[i].tablename){
                        pmodels[index].style = new FreeDo.FreedoPModelStyle({
                            show: {
                                conditions:models[index]
                            }
                        });
                    }
                }
            }
        },
        onLoadSuccess:function (node, data) {
            // console.log(data);
        }
    });
    
	/**
	 *工具栏按钮点击 
	 */
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
	});
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