var allready = [];
var pmodel = null;
var isDalian = false;
var imgpos=[
	{
		id:"B5@9588",
		min:"5489.600200465208200,-247.221422102376720,-4806.149521772653300",
		max:"5493.119604917327700,-241.899883593426610,-4804.005918418181900",
	},
	{
		id:"B4@9514",
		min:"5496.820116776661100,-243.865454521406290,-4806.073331008618000",
		max:"5500.592065200245100,-238.815522258126440,-4801.205522666616200",
	},
	{
		id:"B2@9456",
		min:"5502.375534487294300,-240.975272496877270,-4804.996088229522700",
		max:"5506.193287055019000,-236.563403604370110,-4800.923768722427700",
	},
	{
		id:"L1@9682",
		min:"5480.149836637288900,-246.277557177497750,-4812.623457265139200",
		max:"5483.375929325748100,-240.702474560852210,-4807.598506441893700"
	},
]
$(function(){
	 //初始化地球
    FreedoApp.init("earth");
    cameraControl(FreedoApp.viewers["earth"]);
    var pmodels = [];
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
                        allready.push(["${component} ~==  \'"+i+"\'", 'color("aquamarine",0.5)'])
                    }
                    allready.push(['true', 'color("white")'])
                    pmodel.style = new FreeDo.FreedoPModelStyle({
                        color : {
                            conditions : allready
                        },
                        show :{
                            conditions : [
                                ["${component} ~==  \'9668\'", 'false'],
                                ['true','true']
                            ]
                        }
                    });

                    //盾构机旋转
/*                    var pitch = 0;
                    FreedoApp.viewers["earth"].scene.preRender.addEventListener(function(){
                        if(pitch>360)pitch=0;
                        pitch = pitch+1;
                        primitive.modelMatrix = FreeDoTool.getModelMatrix(121.62022781066331, 38.93872856969979,-23,287,pitch,0,1.2,1.2,1.2);

                    });*/
                    //加盾构机和盾构机机身
                    var daotou = FreedoApp.viewers["earth"].scene.primitives.add(FreeDo.Model.fromGltf(
                        {
                            id: "盾构机刀头",
                            url: "http://182.92.7.32:9000/ztly/glb/dungoujidaotou/dun_gou_dao_tou.gltf",
                            show: true,                     // default
                            modelMatrix:FreeDoTool.getModelMatrix(121.62022781066331, 38.93872856969979,-491.5,165,0,0,1.4,1.4,1.4),
                            allowPicking: true,            // not pickable
                            debugShowBoundingVolume: false, // default
                            debugWireframe: false
                    }));

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
                
                var screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(FreedoApp.viewers["earth"].canvas);
            	screenSpaceEventHandler.setInputAction(function(movement){
            		var picked = FreedoApp.viewers["earth"].scene.pick(movement.position);
            		var cartesianWordPos = FreedoApp.viewers["earth"].scene.pickPosition(movement.position);
            		var cartographic = FreedoApp.viewers["earth"].scene.globe.ellipsoid.cartesianToCartographic(cartesianWordPos);
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
            					console.log("id:"+id+"  cameraposition"+FreedoApp.viewers["earth"].camera.position+FreedoApp.viewers["earth"].camera.heading+","+FreedoApp.viewers["earth"].camera.pitch+","+FreedoApp.viewers["earth"].camera.roll+","+"    pickedpos"+cartesianWordPos);
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
		                position :  Freedo.Cartesian3.fromRadians(cartographic.longitude,cartographic.latitude,cartographic.height+3),  
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
     	allready=[]
         for (i in nodes) {
             allready.push(["${component} ~==  \'"+imgpos[nodes[i].id-1].id+"\'", 'color("red")'])
         }
         allready.push(['true', 'color("white")'])
         pmodel.style = new FreeDo.FreedoPModelStyle({
             color : {
                 conditions : allready
             }
         });
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