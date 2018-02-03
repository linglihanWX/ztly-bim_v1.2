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
		var picked = viewer.scene.pick(movement.position);
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