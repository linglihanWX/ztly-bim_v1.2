var DungouViewer=DungouViewer||{};
var pickedModels = [];
var unClickedColor = new FreeDo.Color(1,1,1,1);
var clickedColor = new FreeDo.Color(1,3,1,1);
var currentselectoldstyle = {};
var changecolorindex = null;
var lastgrandfatherid = null;
//存放变色后的实例
var attributearray = [];
DungouViewer.initLeftClick = function(viewer,callback) {
	screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){
/*		var pick= new FreeDo.Cartesian2(movement.position.x,movement.position.y);
		var cartesian = globalviewer.scene.globe.pick(globalviewer.camera.getPickRay(pick), globalviewer.scene);
		console.log(cartesian);*/
		var picked = viewer.scene.pick(movement.position);
		// console.log(picked);
/*		var pick= new FreeDo.Cartesian2(movement.position.x,movement.position.y);
		var cartesian = viewer.scene.globe.pick(viewer.camera.getPickRay(pick), viewer.scene);*/
/*        var cartesian = new FreeDo.Cartesian3(-2604248.177538355,4229798.269461045,3986719.5609140703)
		var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
		var point=[ cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];*/
		/*console.log(point);*/
        /*console.log(FreedoApp.viewers["earth"].camera)
        console.log(FreedoApp.viewers["earth"].camera.heading+","+FreedoApp.viewers["earth"].camera.pitch+","+FreedoApp.viewers["earth"].camera.roll)*/
        DungouViewer.changeColor(picked)
        if(picked==undefined){
			callback(undefined,undefined);
		}else{
			callback(picked,movement.position);
		}
	}, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
DungouViewer.initLeftDown = function(viewer,callback) {
	screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){
		callback();
	}, FreeDo.ScreenSpaceEventType.LEFT_DOWN);
}
DungouViewer.initLeftDbClick = function(viewer) {
	screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){
	}, FreeDo.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
}
//移除原有的监听事件
DungouViewer.removeListener = function(){
	screenSpaceEventHandler.removeInputAction(FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
var flag = false
DungouViewer.changeColor=function(picked){
    /*    if(picked instanceof FreeDo.FreedoPModelFeature) {	//如果picked为空则表示点击无模型处，使之前点变色的模型重置颜色并清空所选模型容器
            if (pickedModels.length != 0) {	//使之前点变色的模型重置颜色并清空所选模型容器
                for (var i = 0; i < pickedModels.length; i++) {
                    pickedModels[i].color = unClickedColor;
                    pickedModels = [];
                }
            }
                pickedModels.push(picked);	//缓存点选模型
                pickedModels[0].color = clickedColor; //变色
        }else {
            for (var i = 0; i < pickedModels.length; i++)
                pickedModels[i].color = unClickedColor;
            pickedModels = [];
            return;
        }*/


    if(picked instanceof FreeDo.FreedoPModelFeature){
        var componentId = picked.getProperty("component");
        console.log(componentId);
        $.ajax({
            url:"../../PModel/getGrandfatherUid/",
            data:{"uid":componentId},
            success:function(grandfatheruid){
                DungouViewer.highlightmodel(grandfatheruid)
            }
        })

    }
    else{
        DungouViewer.restorelasthighlightmodel()
        lastgrandfatherid = null;
        changecolorindex = null;
        pmodel.style = new FreeDo.FreedoPModelStyle({
            color : {
                conditions : allready
            },
            show :{
                conditions : hiderings
            }
        });
    }
}
DungouViewer.highlightmodel = function (grandfatheruid) {
    DungouViewer.restorelasthighlightmodel()
    for (var i = 2; i <=9668; i+=18) {
        if(i+""==grandfatheruid){
            changecolorindex = (grandfatheruid-2)/18;
            allready[changecolorindex] = ["${component} ~== \'"+grandfatheruid +"\'", 'color("red")']
            lastgrandfatherid = grandfatheruid;
            console.log(changecolorindex);
            pmodel.style = new FreeDo.FreedoPModelStyle({
                color : {
                    conditions : allready
                },
                show :{
                    conditions : hiderings
                }
            });
            return;
        }

    }
    if(flag){
        allready.splice(allready.length-2, 1);
        allready.splice(allready.length-1, 0, ["${component} ~== \'"+grandfatheruid +"\'", 'color("red")']);
    }else{
        allready.splice(allready.length-1, 0, ["${component} ~== \'"+grandfatheruid +"\'", 'color("red")']);
    }
    lastgrandfatherid = grandfatheruid;
    flag = true;

    pmodel.style = new FreeDo.FreedoPModelStyle({
        color : {
            conditions : allready
        },
        show :{
            conditions : hiderings
        }
    });
}
DungouViewer.restorelasthighlightmodel = function () {
    if(lastgrandfatherid!=null){
        for (var i = 2; i <=9668; i+=18) {
            if(i+""==lastgrandfatherid){
                allready[changecolorindex] = ["${component} ~== \'"+lastgrandfatherid +"\'", 'color("gray")']
                return;
            }
        }
        if(flag){
            allready.splice(allready.length-2, 1);
            flag = false;
        }
    }
}
DungouViewer.huoqushujuhuizhishiti=function(componentId){
	FreedoApp.viewers["earth"].entities.removeById("shuxin");
	$.ajax({
        url:"../../PModel/getNode4ZTreeByUid/",
        data:{"uid":componentId},
        success:function(grandfatheruid){
/*        	if(flag){
                allready.splice(allready.length-2, 1);
                allready.splice(allready.length-1, 0, ["${component} ~== \'"+grandfatheruid.pid +"\'", 'color("red")']);
			}else{
                allready.splice(allready.length-1, 0, ["${component} ~== \'"+grandfatheruid.pid +"\'", 'color("red")']);
			}
			flag = true;
            pmodel.style = new FreeDo.FreedoPModelStyle({
                color : {
                    conditions : allready
                },
                show :{
                    conditions : [
                        ["${component} ~==  \'9668\'", 'false'],
                        ['true','true']
                    ]}
            });*/

            var nowPos =  getSphereFromBoundsMinMax(grandfatheruid.boundsmin,grandfatheruid.boundsmax,pmodel);
       	 	var cartographic = Freedo.Cartographic.fromCartesian(nowPos.center);
       	 	var num = (parseInt(grandfatheruid.name)-2)/18
            var posinf1 = FreedoApp.viewers["earth"].entities.add({
            	id:"shuxin",
                name: '位置信息',
                show: true,
                position: new Freedo.Cartesian3.fromRadians(cartographic.longitude,cartographic.latitude,cartographic.height+8),
                label: { //文字标签
                    text: '数据信息\n————————————\n所在环数：第0'+num+'环\n所在土层：中风化板岩\n风险预警：前方110米出现溶洞\n安全提示：请提前做好注浆工作',
                    font: '13px sans-serif',
                    style: FreeDo.LabelStyle.FILL,
                    fillColor: FreeDo.Color.WHITE,
                    verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置
                    pixelOffset: new FreeDo.Cartesian2(0, -9),  //偏移量
                    backgroundColor: FreeDo.Color.BLACK,
                    showBackground: true,
                    distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
                },

            });
        }
    })
}