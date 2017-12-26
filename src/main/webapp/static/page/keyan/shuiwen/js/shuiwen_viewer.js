var WaterViewer = WaterViewer || {};
var index = 0;
var indexReal = 0;
var arr = [];
var arrReal = [];
var newObj = {};
var newObjReal = {};
var currArr = [];
var currArrReal = [];
var first = true;
var firstReal = true;
var water = [];
var screenSpaceEventHandler = null;
window.obj = {};

WaterViewer.positionToWater = function(id) {
	this.viewer.zoomTo(water[id]);
}

WaterViewer.changeShowHide = function(id) {
	this.viewer.zoomTo(water[id]);
}

//鼠标左键点击水文区域出标牌
WaterViewer.initLeftClick = function(viewer,callback) {
	screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){
			var picked = viewer.scene.pick(movement.position);
			if(picked==undefined){
				callback(undefined)
			}else{
			callback(picked);
			}
		}, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
//移除原有的监听事件
WaterViewer.removeListener = function(){
	screenSpaceEventHandler.removeInputAction(FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}

//初始化大桥
WaterViewer.initModels = function () {
    $.ajax({
        url: "pm/selectAll",
        dataType: "JSON",
        success: function (content) {
            var node = null;
            var modelNode = null;
            var modelParentNode = null;//模型缓存中的父节点
            var container = WaterViewer.modelContainer;

            for (var i = 0; i < content.length; i++) {
                node = content[i];

                modelParentNode = container[node.parentId];
                if (modelParentNode == undefined) {
                    modelParentNode = container[node.parentId] = { children: [] };
                }

                //非叶子节点
                if (node.leaf == 0) {
                    modelNode = new WaterViewer.GroupObj(node.id, node.parentId, node.text, node.type);

                    if (container[node.id] != undefined) {
                        modelNode.children = container[node.id].children;
                    }
                } else {
                    var parameter = JSON.parse(node.attributes.parameter);
                    modelNode = new WaterViewer.ModelObj(node.id, node.parentId, node.text, node.type, "static/model/" + parameter.filePath, parameter.lon, parameter.lat, parameter.height-46, parameter.course, parameter.alpha, parameter.roll, parameter.scaleX, parameter.scaleY, parameter.scaleZ);
                }

                container[node.id] = modelNode;

                modelParentNode.children.push(modelNode.id);
               
            }
        }

    });
}
