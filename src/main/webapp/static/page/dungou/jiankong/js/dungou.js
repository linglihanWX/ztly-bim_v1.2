var pmodel = {}
var allready = [];
$(function () {
    var h = $("#content").height();
    var h2 = $(".breadcrumb").height();
    $("#content .row-fluid").height(h - h2);
    FreedoApp.init("earth");
    FreedoApp.viewers["earth"].scene.globe.depthTestAgainstTerrain =true;
    FreedoApp.viewers["earth"].scene._screenSpaceCameraController.enableCollisionDetection =false;
    DungouViewer.initLeftClick(FreedoApp.viewers["earth"], showtips);
    DungouViewer.initLeftDbClick(FreedoApp.viewers["earth"])
    DungouViewer.initLeftDown(FreedoApp.viewers["earth"], hidetips)
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
                    for (var i = 2; i <=9668; i+=18) {
                        allready.push(["${component} ~==  \'"+i+"\'", 'color("green")'])
                    }
                    allready.push(['true', 'color("white")'])
                    pmodel.style = new FreeDo.FreedoPModelStyle({
                        color : {
                            conditions : allready
                        }
                    });
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


    //entity绘制的线路
    var line1 = FreedoApp.viewers["earth"].entities.add({
        id: 1,
        name: '线',
        type: "line",
        data: [60, 130],
        polyline: {
            positions: FreeDo.Cartesian3.fromDegreesArrayHeights(
                [
                    121.60592745779262, 38.953991486827306, -250,
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
/*            FreedoApp.viewers["earth"].camera.setView({
                destination : new FreeDo.Cartesian3.fromDegrees(113.65726697957768, 22.78663303799991,-620),
                orientation : new FreeDo.HeadingPitchRoll(5.437420397295509,-0.11731154719345604,6.281381851419862)
            });*/
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
/*            FreedoApp.viewers["earth"].camera.setView({
                destination : new FreeDo.Cartesian3.fromDegrees(113.65726697957768, 22.78663303799991,-620),
                orientation : new FreeDo.HeadingPitchRoll(5.437420397295509,-0.11731154719345604,6.281381851419862)
            });*/
        }else{
            $("#tipbox6").children().remove().hide();
        }
    })

}