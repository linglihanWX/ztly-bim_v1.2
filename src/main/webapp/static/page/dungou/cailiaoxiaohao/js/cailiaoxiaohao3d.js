var pmodel = {}
var allready = [];
//存放盾构模型的数组
var dungouModels = [];
var shuju = [
	{
		id:"1",
		des:"5489.600200465208200,-247.221422102376720,-4806.149521772653300",
	},
	{
		id:"2",
		des:"5496.820116776661100,-243.865454521406290,-4806.073331008618000",
	},
	{
		id:"3",
		des:"5502.375534487294300,-240.975272496877270,-4804.996088229522700",
	},
	{
		id:"4",
		des:"5480.149836637288900,-246.277557177497750,-4812.623457265139200",
	},
	{
		id:"5",
		des:"5502.375534487294300,-240.975272496877270,-4804.996088229522700",
	},
	{
		id:"6",
		des:"5480.149836637288900,-246.277557177497750,-4812.623457265139200",
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
                pmodel = modelTile;
                if(model[key].name=="dalian2"){
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
                    
                    //加载盾构模型
                    for (var i = 1; i < 10; i++) {
                        dungouModels[i] = FreedoApp.viewers["earth"].scene.primitives.add(FreeDo.Model.fromGltf({
                            id: i,
                            url: "http://182.92.7.32:9000/ztly/glb/" + i + "/" + i + ".glb",
                            show: true, // default
                            modelMatrix: FreeDoTool.getModelMatrix(121.62022781066331, 38.93872856969979,-491.5,255,0,0,1.4,1.4,1.4),
                            allowPicking: true, // not pickable
                            debugShowBoundingVolume: false, // default
                            debugWireframe: false
                        }))
                    }
                    
                    
                    
                 /*   //加盾构机和盾构机机身
                    var daotou = FreedoApp.viewers["earth"].scene.primitives.add(FreeDo.Model.fromGltf(
                        {
                            id: "盾构机刀头",
                            url: "http://182.92.7.32:9000/ztly/glb/dungoujidaotou/dun_gou_dao_tou.gltf",
                            show: true,                     // default
                            modelMatrix:FreeDoTool.getModelMatrix(121.62022781066331, 38.93872856969979,-491.5,165,0,0,1.4,1.4,1.4),
                            allowPicking: true,            // not pickable
                            debugShowBoundingVolume: false, // default
                            debugWireframe: false
                    }));*/

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
                   // cheshen.color = FreeDo.Color.RED;
/*                    modelTile.readyPromise.then(function(){
                    console.log(FreeDoTool.getSphereFromBoundsMinMax("5480.149836637288900,-255.272293286915470,-4820.024217262735900","5486.746820721270500,-240.645764969164760,-4805.037810776616400",pmodel));
                    })*/
                }
            }
        }
    });
});

function setEntity (nodes){
	 if(dungouModels){
		 var cartographic=null;
        for(i in nodes){
        	dungouModels[nodes[i].id].color = FreeDo.Color.RED;
        	// var nowPos =  getSphereFromBoundsMinMax(shuju[nodes[i].id-1].min,shuju[nodes[i].id-1].max,pmodel);
        	 var ccccc = new Freedo.Cartesian3(dungouModels[nodes[i].id].modelMatrix[12],dungouModels[nodes[i].id].modelMatrix[13],dungouModels[nodes[i].id].modelMatrix[14])
        	cartographic = Freedo.Cartographic.fromCartesian(ccccc);
        }
        var citizensBankPark =  FreedoApp.viewers["earth"].entities.add( {  
            name : 1,  
            position :  Freedo.Cartesian3.fromRadians(cartographic.longitude,cartographic.latitude,cartographic.height+3),  
            label : { //文字标签  
                text : '消耗程度'+Math.round(Math.random()*100)+'%',  
                font : '14pt monospace',  
                style : Freedo.LabelStyle.FILL_AND_OUTLINE,  
                outlineWidth : 2,  
                verticalOrigin : Freedo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
                pixelOffset : new Freedo.Cartesian2( 0, -9 )   //偏移量  
            }   
        } );  
    }
}

function restAllEntity() {
	FreedoApp.viewers["earth"].entities.removeAll();
	for(i in dungouModels){
		dungouModels[i].color = FreeDo.Color.WHITE
	}
}