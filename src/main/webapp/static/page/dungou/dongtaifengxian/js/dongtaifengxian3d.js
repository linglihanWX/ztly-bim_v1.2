var pmodel = {}
var allready = [];
var hiderings = [];
$(function () {
    FreedoApp.init("earth");
    FreedoApp.viewers["earth"].scene.globe.depthTestAgainstTerrain =true;
    FreedoApp.viewers["earth"].scene._screenSpaceCameraController.enableCollisionDetection =false;
    DungouViewer.initLeftClick(FreedoApp.viewers["earth"],function(){})
    // var surveymanager = new SurveyManager(FreedoApp.viewers["earth"],function(){});
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
                        allready.push(["${component} ~==  \'"+i+"\'", 'color("gray")'])
                    }
                    allready.push(['true', 'color("white",0.3)'])
                    //部分盾构环隐藏
                    for (var i = 7868; i <=9668; i+=18){
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

                    //盾构机旋转
                    var pitch = 0;

                    FreedoApp.viewers["earth"].scene.preRender.addEventListener(function(){
                        if(pitch>360)pitch=0;
                        pitch = pitch+1;
                        daotou.modelMatrix = FreeDoTool.getModelMatrix(121.62022781066331, 38.93872856969979,-491.5,165,pitch,0,1.4,1.4,1.4);

                    });
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
/*                    modelTile.readyPromise.then(function(){
                    console.log(FreeDoTool.getSphereFromBoundsMinMax("5480.149836637288900,-255.272293286915470,-4820.024217262735900","5486.746820721270500,-240.645764969164760,-4805.037810776616400",pmodel));
                    })*/
                }
            }
        }
    });
    /*            	if(model[key].name == "railway"){
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
                            dungouprimitive.modelMatrix = FreeDoTool.getModelMatrix(113.65645654272778, 22.787376282848608, -637.5, 50, pitch, 0, 1.6, 1.6, 1.6);

                        });
                        //原位置113.6609628070344, 22.791190110267943
                        //113.65622654272778, 22.787366222848608
                        var dungouprimitive = FreedoApp.viewers["earth"].scene.primitives.add(FreeDo.Model.fromGltf({
                            id : "盾构机",
                            url : "../../static/page/shigong/dungou/gltf/dun_gou_dao_tou.gltf",
                            show : true, // default
                            modelMatrix : FreeDoTool.getModelMatrix(113.65645654272778, 22.787376282848608, -637.5, 287, 0, 0, 1.6, 1.6, 1.6),
                            allowPicking : true, // not pickable
                            debugShowBoundingVolume : false, // default
                            debugWireframe : false
                        }));*/
    //showhidelabels(dungouprimitive);
    $('#tree').tree({
        method:"get",
        data:[{
            id:"-1",
            text:"模型构件树",
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
            DungouViewer.highlightmodel(node.id)
            /*onCheck:function (node,checked) {
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
            },*/},
        onLoadSuccess:function (node, data) {
            // console.log(data);
        }
    });

    //entity绘制的线路
    var line1 = FreedoApp.viewers["earth"].entities.add({
        id: 1,
        name: '线',
        type: "line",
        data: [60, 130],
        polyline: {
            positions: FreeDo.Cartesian3.fromDegreesArrayHeights(
                [
                    121.60592745779262, 38.953991486827306, -180,
                    121.61385178949371, 38.948083100516946, -280
                ]
            ),
            width: 5,
            material: new FreeDo.PolylineOutlineMaterialProperty({
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
});