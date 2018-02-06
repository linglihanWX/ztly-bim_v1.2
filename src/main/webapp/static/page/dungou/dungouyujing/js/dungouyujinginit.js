var allready = [];
var hiderings = []
var pmodel = null;
var isDalian = false;
var imgpos=[
	{
		id:"12440",
		min:"5189.197901017038000,-328.026238029900300,-4892.742752359810800",
		max:"5195.685522379063500,-313.402677829778550,-4877.742186805704500",
	},
	{
		id:"11576",
		min:"5280.340601656941500,-305.315640017153100,-4871.449833531169100",
		max:"5286.687161703946900,-290.047499738660580,-4856.208858760374800",
	},
	{
		id:"10280",
		min:"5416.021844604011700,-270.691141100810800,-4836.395482047534600",
		max:"5423.014156753695700,-256.330113726144990,-4822.534748824095000",
	},
	{
		id:"8822",
		min:"5568.328545268094800,-231.801649423052230,-4795.529333242547200",
		max:"5575.657954689659200,-219.566723245214290,-4782.656946367166700"
	},
]
$(function(){
	 //初始化地球
    FreedoApp.init("earth");
    cameraControl(FreedoApp.viewers["earth"]);//相机控制
    var pmodels = [];//存放模型的集合
    DungouViewer.initLeftClick(FreedoApp.viewers["earth"]);
    $.ajax({
        url: "../../PModel/getPmodel",
        type: "get",
        dataType: "json",
        success: function (data) {
            //解析json`
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
                    $("#resetview").click(function () {
                        FreedoApp.viewers["earth"].camera.setView({
                            destination : new FreeDo.Cartesian3.fromDegrees(model[key].cameralon, model[key].cameralat, model[key].cameraheight),
                            orientation : new FreeDo.HeadingPitchRoll(model[key].cameraheading,model[key].camerapitch,model[key].cameraroll)
                        });
                    })
                } else {
                    modelTile.readyPromise.then(function () {
                        FreedoApp.viewers["earth"].camera.flyToBoundingSphere(modelTile.boundingSphere,{
                            duration:0
                        });
                    });
                    $("#resetview").click(function () {FreedoApp.viewers["earth"].camera.flyToBoundingSphere(modelTile.boundingSphere,{
                        duration:0
                    });});
                }
               
                if(model[key].name=="dalian2"){
                	pmodel = modelTile;
                    //初始化模型的颜色，用来显示已经盾构的环和没有盾构的环
                    for (var i = 2; i <=9668; i+=18) {
                        allready.push(["${component} ~==  \'"+i+"\'", 'color("gray")'])
                    }
                    allready.push(['true', 'color("white",0.3)'])
                    //部分盾构环隐藏
                    for (var i = 8984; i <=9668; i+=18){
                        hiderings.push(["${component} ~==  \'"+i+"\'", 'false'])
                    }
                    hiderings.push(['true','true'])
                    pmodel.style = new FreeDo.FreedoPModelStyle({
                        color : {
                            conditions : allready
                        },
                        show :{
                            conditions : hiderings
                        }
                    });

                    //盾构机旋转                  var pitch = 0;
               /*     FreedoApp.viewers["earth"].scene.preRender.addEventListener(function(){
                        if(pitch>360)pitch=0;
                        pitch = pitch+1;
                        primitive.modelMatrix = FreeDoTool.getModelMatrix(121.62022781066331, 38.93872856969979,-23,287,pitch,0,1.2,1.2,1.2);

                    });*/
                    var fixedFrameTransform = Freedo.Transforms.localFrameToFixedFrameGenerator('north', 'west');
                    var hpRoll = new Freedo.HeadingPitchRoll();
                    hpRoll.heading = Freedo.Math.toRadians(340);
                    hpRoll.pitch = Freedo.Math.toRadians(5);
                    var deltaRadians = Freedo.Math.toRadians(3.0);
                    var daotouposition = new FreeDo.Cartesian3.fromDegrees(121.62022781066331, 38.93872856969979,-491.5)
                    //加盾构机和盾构机机身
                    daotou = FreedoApp.viewers["earth"].scene.primitives.add(FreeDo.Model.fromGltf(
                        {
                            id: "盾构机刀头",
                            url: "http://182.92.7.32:9000/ztly/jianmiandungou/daotou/1.gltf",
                            show: true,                     // default
                            modelMatrix:Freedo.Transforms.headingPitchRollToFixedFrame(daotouposition, hpRoll, Freedo.Ellipsoid.WGS84, fixedFrameTransform),
                            allowPicking: true,            // not pickable
                            debugShowBoundingVolume: false, // default
                            debugWireframe: false
                        }));

                    var cheshen = FreedoApp.viewers["earth"].scene.primitives.add(FreeDo.Model.fromGltf(
                        {
                            id: "盾构机车身",
                            url: "http://182.92.7.32:9000/ztly/jianmiandungou/cheshen/2.gltf",
                            show: true,                     // default
                            modelMatrix:FreeDoTool.getModelMatrix(121.62022781066331, 38.93872856969979,-491.5,249,6,0,1.2,1.2,1.2),
                            allowPicking: true,            // not pickable
                            debugShowBoundingVolume: false, // default
                            debugWireframe: false
                     }));

                }
                $('#tree').tree({
                    method:"get",
                    data:[{
                        id:"-1",
                        text:"构件树",
                        state:"closed"
                    }],
                    onBeforeExpand:function(node,param){
                        if(node.id=="-1"){
                            $('#tree').tree('options').url = "../../PModel/getModelTreeAsyn?uid=-1";
                        }else{
                            $('#tree').tree('options').url = "../../PModel/getModelTreeAsyn?uid=" + node.id+"&tablename="+node.tablename;
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
                            FreedoApp.viewers["earth"].camera.flyToBoundingSphere(boundingSphere,{duration:0})
                        }
                        DungouViewer.highlightmodel(node.id)},
                    onLoadSuccess:function (node,data) {
                        console.log(node);
                        if(node!=null){
                            if(node.id=="-1"){
                                $("#_easyui_tree_2 span:eq(1)").click()
                            }else if(node.id=="0"){
                                $("#_easyui_tree_539 span:eq(2)").click()
                            }else if(node.id=="9650"){
                                $(this).tree("select",node.target)
                                $(this).tree("scrollTo",node.target)
                            }
                        }
                    }
                });
                $("#_easyui_tree_1 span:eq(0)").click()
                var screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(FreedoApp.viewers["earth"].canvas);
            	screenSpaceEventHandler.setInputAction(function(movement){
            		var picked = FreedoApp.viewers["earth"].scene.pick(movement.position);//屏幕坐标
            		var cartesianWordPos = FreedoApp.viewers["earth"].scene.pickPosition(movement.position);//世界坐标
            		var cartographic = FreedoApp.viewers["earth"].scene.globe.ellipsoid.cartesianToCartographic(cartesianWordPos);//世界坐标转地理坐标（弧度）
            		if(picked){
            			if(picked instanceof FreeDo.FreedoPModelFeature){
            				var id = picked.getProperty('component');
            				 if (FreeDo.defined(id)) {
            					var style = new FreeDo.FreedoPModelStyle({
            							show: {
            						      conditions:[["${component} === '" + id + "'", 'false'],['true', 'true']]
            						    }
            							/*color: {
            								conditions: [["${component} === \'" + id + "\'", "color('gold')"],["true", "color('white')"]]
            							}*/
            						});	
            					pmodel.style = style;
            					console.log("id:"+id+"cameraposition"+FreedoApp.viewers["earth"].camera.position+FreedoApp.viewers["earth"].camera.heading+","+FreedoApp.viewers["earth"].camera.pitch+","+FreedoApp.viewers["earth"].camera.roll+","+"    pickedpos"+cartesianWordPos);
            				 }
            			}else{
            				
            			}
            		}
            	}, FreeDo.ScreenSpaceEventType.RIGHT_CLICK);
            	
                
            }
        }
    });
});

function setEntity (nodes){
	 if(pmodel){
     	pmodel.readyPromise.then(function () {
	            for(i in nodes){
	            	 var nowPos =  getSphereFromBoundsMinMax(imgpos[nodes[i].id-1].min,imgpos[nodes[i].id-1].max,pmodel);
	            	 var cartographic = Freedo.Cartographic.fromCartesian(nowPos.center);
	            	 var citizensBankPark =  FreedoApp.viewers["earth"].entities.add( {  
		                name : imgpos[nodes[i].id-1].id,  
		                position :  Freedo.Cartesian3.fromRadians(cartographic.longitude,cartographic.latitude,cartographic.height+16),
		                billboard : { //图标  
		                    image : '../../static/page/dungou/guanpianposui/img/lu_tanhao.png',  
		                    width : 30,  
		                    height : 47  
		                },  
		                verticalOrigin : Freedo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
		                pixelOffset : new Freedo.Cartesian2( 0, 9 )   //偏移量  
		            } );  
	            }
         });
/*     	allready=[]
         for (i in nodes) {
             allready.push(["${component} ~==  \'"+imgpos[nodes[i].id-1].id+"\'", 'color("red")'])
         }
         allready.push(['true', 'color("white")'])
         pmodel.style = new FreeDo.FreedoPModelStyle({
             color : {
                 conditions : allready
             }
         });*/
         DungouViewer.highlightmodel(imgpos[nodes[i].id - 1].id);
     }
}

function restAllEntity() {
	FreedoApp.viewers["earth"].entities.removeAll();
}

function getSphereFromBoundsMinMax(boundsMin, boundsMax, modelTile) {
    var index1 = boundsMax.indexOf(",", 0);
    var index2 = boundsMax.indexOf(",", index1 + 1);
    var xMax = parseFloat(boundsMax.substr(0, index1));
    var yMax = parseFloat(boundsMax.substr(index1 + 1, index2 - index1 - 1));
    var zMax = parseFloat(boundsMax.substr(index2 + 1, boundsMax.length - index2 - 1));
    var maxcorner = new FreeDo.Cartesian3(xMax, yMax, zMax);

    index1 = boundsMin.indexOf(",", 0);
    index2 = boundsMin.indexOf(",", index1 + 1);
    var xMin = parseFloat(boundsMin.substr(0, index1));
    var yMin = parseFloat(boundsMin.substr(index1 + 1, index2 - index1 - 1));
    var zMin = parseFloat(boundsMin.substr(index2 + 1, boundsMin.length - index2 - 1));
    var mincorner = new Freedo.Cartesian3(xMin, yMin, zMin);

    //局部坐标转全局坐标
    //var local2world = FreeDo.Transforms.eastNorthUpToFixedFrame(position);

    var t = mincorner.y;
    mincorner.y = -mincorner.z;
    mincorner.z = t;
    t = maxcorner.y;
    maxcorner.y = -maxcorner.z;
    maxcorner.z = t;
    //Freedo.Matrix4.multiplyByPoint(local2world, mincorner, mincorner);
    //Freedo.Matrix4.multiplyByPoint(local2world, maxcorner, maxcorner);

    Freedo.Matrix4.multiplyByPoint(modelTile._root.computedTransform, mincorner, mincorner);
    Freedo.Matrix4.multiplyByPoint(modelTile._root.computedTransform, maxcorner, maxcorner);

    var sphere = FreeDo.BoundingSphere.fromCornerPoints(mincorner, maxcorner);
    return sphere;
}