/**
 * @describe 深圳地铁飞渡框架
 * @date 2017-11-7 9:00
 */
/*
 * 框架初始化类
 */
function FdFramework(){
}

FdFramework.prototype = {
       /*
       * 加载飞渡地球
       */
		initFramework : function(sceneId,baseImageryProvider) {
			var viewer = new Freedo.Viewer(sceneId,{
				animation : false,
				baseLayerPicker : false,
				fullscreenButton : false,
				geocoder : false,
				homeButton : false,
				infoBox :false,
				sceneModePicker : false,
				selectionIndicator : false,
				timeline : false,
				navigationHelpButton : false,
				navigationInstructionsInitiallyVisible : false,
				selectedImageryProviderViewModel : false,
				scene3DOnly : true,
				clock : null,
				showRenderLoopErrors : false,
				automaticallyTrackDataSourceClocks:false,
				/*imageryProvider : baseImageryProvider || this.getTiandituGloble(),*/
			});
		this.viewer = viewer;
		//模型进入地下
		viewer.scene.globe.depthTestAgainstTerrain = true;
		this.FdViewerManager = new FdViewerManager(viewer);
		//this.FlyToCamera = new FlyToCamera(viewer);
		//this.EventHandler = new EventHandler(viewer);
		//点击鼠标左键取消相机动作
		//this.EventHandler.addScreenSpaceEventHandler("freedo1",this.FdViewerManager.cancelCameraFly.bind(this.EventHandler),Freedo.ScreenSpaceEventType.LEFT_DOWN);
}

}
/*
 * 给地球加载视图
 */
function FdViewerManager(viewer) {
	this.viewer = viewer;
	this.imageLayers = this.viewer.imageryLayers;
	/*this.compass = new FDPCompass(viewer);
	this.PModelSet = {};
	this.FDPLabelDivs = new FDPLabelDivs();*/
}

FdViewerManager.prototype = {
		addImageryProvider : function(options) {
			var a =this.imageLayers.addImageryProvider(new Freedo.WebMapTileServiceImageryProvider(options));
			return a;
		},
		addTerrainProvider : function(options){
			var scene = this.viewer.scene;
			scene.terrainProvider = new Freedo.FreedoTerrainProvider(options);
		},
		addPModel : function(options) { 
			var model = this.viewer.scene.primitives.add(new Freedo.FreedoPModelset(options));
			//this.PModelSet[options["id"]] = pm;
			/*model.readyPromise.then(function () {
				//freedoUtil.modelMove(model,0,0.000005, -50, 30, 0, 0, 1, 1, 1);
				freedoUtil.modelMove(model,0,0.000005, 50, 0, 0, 0, 1, 1, 1);
			  //  console.count("Success 转换位置的模型数量"+(++count));
			}).otherwise(function (error) {
				console.log(error);
			    throw (error);
			});*/
			return model;
		},
		addHtmlBox : function(domId,show,eventFun) {
			var boxDom = window.document.getElementById(domId);
			if(boxDom) {
				var targerNode = this.viewer.canvas.parentNode;
				boxDom.parentNode.removeChild(boxDom);
				
				boxDom.style.position = "absolute";
				targerNode.appendChild(boxDom);
				if(eventFun instanceof Function) {
					eventFun.call();
				}
				if(show!=false) {
					boxDom.style.display = "block";
				}
			}
		},
		addImgLabel : function(labelId,labelText,fontCss,imgPath,labelWorldPosition) {
			var viewer = this.viewer;
			var img = new Image();
			img.src = imgPath;
			img.width=32;
			img.height=32;
	        var imgLabel = this.viewer.entities.add({
		        id : labelId,   
		        name:labelText,
		    	position : labelWorldPosition,
	            billboard : {
	                position : labelWorldPosition,
	                image : img
	            },
	            label : {
	                text : labelText,
	                font : fontCss,
	                scale:0.5,
	                fillColor : Freedo.Color.WHITE,
	                backgroundColor:Freedo.Color.DODGERBLUE,
	                showBackground : true
	            }
	        });
	        if(0==img.height) {
	        	img.onload = function() {
	        		imgLabel.label.pixelOffset = new Freedo.Cartesian2(0.0, -img.height);
	        	}
	        }else {
	        	imgLabel.label.pixelOffset = new Freedo.Cartesian2(0.0, -img.height);
	        }
	        return imgLabel;
		},
		cancelCameraFly : function() {
			this.viewer.camera.cancelFlight();
		},
		hideCompnentByComponentId : function(pmodel,componentsIdArray) {
			var conditionsArray = [];
			for(var componentsIdArrayi=0;componentsIdArrayi < componentsIdArray.length;componentsIdArrayi++) {
				var condition = ["${component}===\'"+componentsIdArray[componentsIdArrayi]+"\'","false"];
				conditionsArray.push(condition);
			}
			conditionsArray.push(["true","true"]);
			
			console.dir(conditionsArray);
			var pmodelStyle = new Freedo.FreedoPModelStyle({
			    show: {
			      conditions:conditionsArray
			    },
			    color:{
			    	conditions:[
			    		["true","color('white')"]
			    	]
			    }
			});
			pmodel.style = pmodelStyle;
		}

	}
/**
 * 相机飞入动作
 */
function FlyToCamera(viewer){
	this.viewer = viewer;
	this.camera=this.viewer.camera;
}

FlyToCamera.prototype={
		/*
		 *飞入到经纬高 
		 */
		flyToLatLongHeight : function(long,lat,height){
			this.camera.flyTo({
				duration:2,
			    destination : Freedo.Cartesian3.fromDegrees(long, lat,height)
			});
			
		},/*
		飞到世界坐标
		*/
		flyToCartesian3 : function(xyz){
			this.camera.flyTo({
				duration:2,
			    destination : xyz
			});
		},
		/*
		 * 取消相机飞行
		 */
		cancelCameraFly : function() {
			this.viewer.camera.cancelFlight();
		}
}
/*
 * 点击事件处理
 */

function EventHandler(viewer){
	this.screenSpaceEventHandlersMap = {};
	this.viewer = viewer;
}

EventHandler.prototype={
		/*
		 * 增加事件
		 */
		addScreenSpaceEventHandler : function(handlerId,callFunc,type) {
			var func = this.screenSpaceEventHandlersMap[handlerId];
			func = func || function() {
				func = new Freedo.ScreenSpaceEventHandler(this.viewer.canvas);
				func.setInputAction(callFunc,type);
				this.screenSpaceEventHandlersMap[handlerId] = func;
				return func;
			}.bind(this)();
			return func;
		},
		/*
		 * 移出事件
		 */
		removeScreenSpaceEventHandler : function(handlerId) {
			var func = this.screenSpaceEventHandlersMap[handlerId];
			func = func && func.destroy();
			this.screenSpaceEventHandlersMap[handlerId] = func;
		}
}


