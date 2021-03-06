$(function () {
    var h = $("#content").height();
    var h2 = $(".breadcrumb").height();
    $("#content .row-fluid").height(h - h2);
    FreedoApp.init("init");
    var sss = new SurveyManager(FreedoApp.viewers["init"],creatEntity);
    sss.setSurveyType(SurveyType.LINE_DISTANCE);
    $.ajax({
		url:"../PModel/getPmodel",
		type: "get",
		dataType:"json",
        success: function(data){
        	//解析json
        	var model=eval(data);
        	for(var key in model){
        		//挖坑数据
        		var holeData=eval(model[key].hole);
        		//图层数据
        		var imgarray=eval(model[key].imagelayer);
        		//挖坑
                if(holeData!=null&&imgarray!=null){
                //获取地址栏地址
        		var path = window.location.pathname;
        		//截取字符串
        		var patharray = path.split("/");
        		//拼接文件地址
        		for (var i = 0; i < imgarray.length; i++) {
        			var str ="";
        			for (var j = 0; j < patharray.length-3; j++) {
        				 str = str+"../"
					}
        			imgarray[i] = str+imgarray[i] ;
				}
				//调用挖坑方法
				FreeDoUtil.dig(FreedoApp.viewers["init"],holeData,imgarray);
                }
        		console.log( model[key].url);
        		 //向场景中添加模型
        		var modelTile=FreedoApp.viewers["init"].scene.primitives.add(new FreeDo.FreedoPModelset({
            		url: model[key].url
            	}));
        		if(model[key].x!=0||model[key].y!=0||model[key].z!=0||model[key].heading!=0||model[key].pitch!=0||model[key].roll!=0||model[key].scalex!=1||model[key].scaley!=1||model[key].scalez!=1){
        			//调整模型位置
        			modelTile.readyPromise.then(function(modeltile) {
        				moveModel(modeltile,model[key].x,model[key].y,model[key].z,model[key].heading,model[key].pitch,model[key].roll,model[key].scalex,model[key].scaley,model[key].scalez);
        			});
        		}
        		if(model[key].cameralon!=null||model[key].cameralat!=null||model[key].cameraheight!=null||model[key].cameraheading!=null||model[key].camerapitch!=null||model[key].cameraroll!=null){        			

        			//镜头定位
        			FreedoApp.viewers["init"].camera.setView({
        				destination :new FreeDo.Cartesian3.fromDegrees(model[key].cameralon,model[key].cameralat, model[key].cameraheight),
        				orientation: {
        					heading : model[key].cameraheading,
        					pitch : model[key].camerapitch,
        					roll : model[key].cameraroll
        				}
        			});
        		}else{
        			modelTile.readyPromise.then(function() {
        				FreedoApp.viewers["init"].camera.flyToBoundingSphere(modelTile.boundingSphere);
        			});
        		}
        	}
        }
	});
});
var creatEntity = function(firstPoint,lastPoint) {
	console.log(FreedoApp.viewers["init"].camera);
	var road1 = FreedoApp.viewers["init"].entities.add( {  
		name : '道路1',  
		position : FreeDo.Cartesian3.fromDegrees(117.6601106774757, 39.0278397440452,15 ),  
		point : { //点  
			pixelSize : 5,  
			color : FreeDo.Color.RED,  
			outlineColor : FreeDo.Color.WHITE,  
			outlineWidth : 2  
		},  
		label : { //文字标签  
			text : '解放北路东方华尔街',  
			font : '14pt monospace',  
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,  
			outlineWidth : 2,  
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
			pixelOffset : new FreeDo.Cartesian2( 0, -18 )   //偏移量  
		},
		polygon : {  
	        hierarchy : FreeDo.Cartesian3.fromDegreesArray([
	        	117.63658156506864, 39.03320978417418,  
	        	117.63663657280595, 39.03337380796097,  
	        	117.6720856828493, 39.02536903471689,  
	        	117.6720403445534, 39.02521646994533
	        	]),  
	        material : 	FreeDo.Color.BLANCHEDALMOND.withAlpha(0.8)
	    }
	} );
	var road2 = FreedoApp.viewers["init"].entities.add( {  
		name : '道路2',  
		position : FreeDo.Cartesian3.fromDegrees(117.65717660285547, 39.029622371574646,15 ),  
		point : { //点  
			pixelSize : 5,  
			color : FreeDo.Color.RED,  
			outlineColor : FreeDo.Color.WHITE,  
			outlineWidth : 2  
		},  
		label : { //文字标签  
			text : '估衣街',  
			font : '14pt monospace',  
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,  
			outlineWidth : 2,  
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
			pixelOffset : new FreeDo.Cartesian2( 0, -18 )   //偏移量  
		}, 
		polygon : {  
	        hierarchy : FreeDo.Cartesian3.fromDegreesArray([117.65974723500142,39.0371200384198,  
	        	117.66011027202251,39.0370471463995,  
	        	117.65481825563658,39.022534013171935,  
	        	117.6543818169068,39.02263156515081]),  
	        material : 	FreeDo.Color.BLANCHEDALMOND.withAlpha(0.8)
	    }
	} );
	var river1 = FreedoApp.viewers["init"].entities.add( {  
		name : '水系1',  
		position : FreeDo.Cartesian3.fromDegrees(117.65443147101222, 39.02762212630358,15 ),  
		point : { //点  
			pixelSize : 5,  
			color : FreeDo.Color.RED,  
			outlineColor : FreeDo.Color.WHITE,  
			outlineWidth : 2  
		},  
		label : { //文字标签  
			text : '北运河',  
			font : '14pt monospace',  
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,  
			outlineWidth : 2,  
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
			pixelOffset : new FreeDo.Cartesian2( 0, -18 )   //偏移量  
		},  
		polygon : {  
	        hierarchy : FreeDo.Cartesian3.fromDegreesArray([
	        	117.65421292746433, 39.028569363412515,
	        	117.65532530051337, 39.02833453426626,
	        	117.65496936189291, 39.02740497284379,
	        	117.65387741882599, 39.02763956354831]),  
	        material : 	FreeDo.Color.DEEPSKYBLUE.withAlpha(0.8)
	    }
	} );
	var river2 = FreedoApp.viewers["init"].entities.add( {  
		name : '水系2',  
		position : FreeDo.Cartesian3.fromDegrees(117.65066204707234, 39.02692651335879,15 ),  
		point : { //点  
			pixelSize : 5,  
			color : FreeDo.Color.RED,  
			outlineColor : FreeDo.Color.WHITE,  
			outlineWidth : 2  
		},  
		label : { //文字标签  
			text : '海河',  
			font : '14pt monospace',  
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,  
			outlineWidth : 2,  
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置  
			pixelOffset : new FreeDo.Cartesian2( 0, -18 )   //偏移量  
		},  
		polygon : {  
	        hierarchy : FreeDo.Cartesian3.fromDegreesArray([117.65066927457492, 39.02795259702767,
	        	117.65147178875964, 39.02776766347203,
	        	117.6505447513961, 39.025518921564206,
	        	117.64983000414954, 39.025622293822636,
	        	117.6496401353364, 39.02545125718353,
	        	117.64809849977627, 39.02572863893886,
	        	117.64835503758722, 39.02636789492214,
	        	117.64976244099792, 39.025852710459255]),  
	        material : 	FreeDo.Color.DEEPSKYBLUE.withAlpha(0.8)
	    }
	} );
}