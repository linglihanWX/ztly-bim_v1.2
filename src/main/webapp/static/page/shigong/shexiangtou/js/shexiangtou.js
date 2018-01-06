$(function () {
    var h = $("#content").height();
    var h2 = $(".breadcrumb").height();
    $("#content .row-fluid").height(h - h2);

    var h1 = $("#dailog").height();
    $(".dialogContent").height(h1-284);
    FreedoApp.init("earth");
    $.ajax({
        url: "../static/page/shigong/shexiangtou/camera.json",
        type: "get",
        dataType:"json",
        success: function (data) {
            var zTreeObj;
            var setting = {
                data: {
                    simpleData: {
                        enable: true,
                        idKey: "id",
                        pIdKey: "pId",
                        rootPId: "0"
                    }
                },
                callback : {
                	onClick:function(event, treeId, treeNode){
                		var key =treeNode.id
                		$("#detailInfo").hide();
                		switch (key) {
						case 1:
							FreedoApp.viewers["earth"].camera.setView({
							    destination : FreedoApp.viewers["earth"].scene.globe.ellipsoid.cartographicToCartesian(new FreeDo.Cartographic(2.053439098657361,0.6811791843221437, 10)),
							    orientation : {
							        heading :1.2567987776128948,
							        pitch : -0.3319190858811829,
							        roll : 0.003304353957359396
							    }
							});
							break;
						case 2:
							FreedoApp.viewers["earth"].camera.setView({
							    destination : FreedoApp.viewers["earth"].scene.globe.ellipsoid.cartographicToCartesian(new FreeDo.Cartographic(2.053456086084953,0.6811843728487439, -7)),
							    orientation : {
							        heading :3.260955832051345,
							        pitch : 0.16918822318419835,
							        roll : 6.282788427829956
							    }
							});
							break;
						case 3:
							FreedoApp.viewers["earth"].camera.setView({
							    destination : FreedoApp.viewers["earth"].scene.globe.ellipsoid.cartographicToCartesian(new FreeDo.Cartographic(2.0534524337193343, 0.6811844859656465, -8)),
							    orientation : {
							        heading :1.5933147377869714,
							        pitch : 0.12883743281155224,
							        roll : 0.003310086046881544
							    }
							});
							break;
						case 5:
							FreedoApp.viewers["earth"].camera.setView({
							    destination : FreedoApp.viewers["earth"].scene.globe.ellipsoid.cartographicToCartesian(new FreeDo.Cartographic(2.053461477036838,0.6811808031108124, -7)),
							    orientation : {
							        heading :1.2958212837675998,
							        pitch : 0.17771974998978846,
							        roll : 0.003210361782742588
							    }
							});
							break;
						case 6:
							FreedoApp.viewers["earth"].camera.setView({
							    destination : FreedoApp.viewers["earth"].scene.globe.ellipsoid.cartographicToCartesian(new FreeDo.Cartographic(2.0534670873600227,0.6811801630728863, -6)),
							    orientation : {
							        heading :1.812169405041602,
							        pitch : 0.14355738002814977,
							        roll : 0.0032214481282588636
							    }
							});
							break;

						default:
							break;
						}
							
                },
                
               OnRightClick:function OnRightClick(event, treeId, treeNode) {
                $("#rMenu").show().css({
                    "left" :event.pageX,
                    "top":event.pageY
                });
            }
            }
            }
            zTreeObj = $.fn.zTree.init( $("#tree"), setting, data);
        }
    });

    CameraViewer.initCamera(FreedoApp.viewers["earth"]); // 加载球模型
    CameraViewer.initLeftClick(FreedoApp.viewers["earth"],showDiv);
    CameraViewer.initLeftDown(FreedoApp.viewers["earth"],hideDiv);

    $.ajax({
		url:"/PModel/getPmodel",
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
        		console.log( model[key].url);
        		 //向场景中添加模型
        		var modelTile=FreedoApp.viewers["earth"].scene.primitives.add(new FreeDo.FreedoPModelset({
            		url: model[key].url
            	}));
        		if(model[key].x!=0||model[key].y!=0||model[key].z!=0||model[key].heading!=0||model[key].pitch!=0||model[key].roll!=0||model[key].scalex!=1||model[key].scaley!=1||model[key].scalez!=1){
        			//调整模型位置
        			modelTile.readyPromise.then(function() {
        				moveModel(modelTile,model[key].x,model[key].y,model[key].z,model[key].heading,model[key].pitch,model[key].roll,model[key].scalex,model[key].scaley,model[key].scalez);
        			});
        		}
        		if(holeData!=null&&imgarray!=null){
        			//挖坑
        			FreeDoUtil.dig(FreedoApp.viewers["earth"],holeData,imgarray);
        		}
        		if(model[key].cameralon!=null||model[key].cameralat!=null||model[key].cameraheight!=null||model[key].cameraheading!=null||model[key].camerapitch!=null||model[key].cameraroll!=null){        			

        			//镜头定位
        			FreedoApp.viewers["earth"].camera.setView({
        				destination :new FreeDo.Cartesian3.fromDegrees(model[key].cameralon,model[key].cameralat, model[key].cameraheight),
        				orientation: {
        					heading : model[key].cameraheading,
        					pitch : model[key].camerapitch,
        					roll : model[key].cameraroll
        				}
        			});
        		}else{
        			modelTile.readyPromise.then(function() {
        				FreedoApp.viewers["earth"].camera.flyToBoundingSphere(modelTile.boundingSphere);
        			});
        		}
        	}
        }
	});

    var surveymanager = new SurveyManager(FreedoApp.viewers["earth"],function(){});
    /**
	 *工具栏按钮点击 
	 */
	$("#appendTools i").each(function(){
		$(this).click(function(){
			if($(this).hasClass("active")){
			//设置方法为none
			surveymanager.setSurveyType(SurveyType.NONE);
			//移除原有的监听事件
			CameraViewer.removeListener();
			//初始化相应的监听事件
			switch ($(this).attr("id")) {
			//统计查询
			case "TJCX":
				$("#img").hide();
				surveymanager.setSurveyType(SurveyType.QUERY)
				break;
			//距离测量
			case "JLCL":
				$("#echartarea").hide();
				$("#img").hide();
				surveymanager.setSurveyType(SurveyType.LINE_DISTANCE);
				break;
			//方位测量
			case "FWCL":
				$("#echartarea").hide();
				$("#img").hide();						
				surveymanager.setSurveyType(SurveyType.Azimuth_DISTANCE);
				break;
			//面积测量
			case "MJCL":
				$("#echartarea").hide();
				$("#img").hide();					
				break;
			//地面刨切
			case "DMPQ":
				$("#echartarea").hide();					
				surveymanager.setSurveyType(SurveyType.Geology_SLICING);
				break;
			//其他
			default:
				break;
			}
		}else{
			//隐藏echarts和img窗口
			$("#echartarea").hide();
			$("#img").hide();
			//删除三维页面所有的线、标签
			
			//设置方法为none
			surveymanager.setSurveyType(SurveyType.NONE);
			//初始化原有的监听事件
		    CameraViewer.initLeftClick(FreedoApp.viewers["earth"]);
		    CameraViewer.initLeftDown(FreedoApp.viewers["earth"],hideDiv);
		}
		});
	});
	function hideDiv(){
		$("#detailInfo").hide();
	}
    function showDiv(picked,position){
    	if(picked){
			if(picked instanceof FreeDo.FreedoPModelFeature){
				$("#detailInfo").hide();
			}else{
				if(picked.id!=undefined&&picked.id.name.indexOf("摄像头")>-1){
					$("#detailInfo").css({
						"display":"block",
						"left":position.x - 500,
						"top":position.y - 200,
					});	
				}else{
					$("#detailInfo").hide();
				}
			}
			
		}else{
			$("#detailInfo").hide();
		}
    }
});