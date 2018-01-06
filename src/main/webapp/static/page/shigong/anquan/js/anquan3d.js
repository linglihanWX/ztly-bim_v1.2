$(function () {
    var hh = $("body").height();
    var h1 = $(".navbar").height();
    var h2 = $("#content>.breadcrumb").height();

    $(".container-fluid-full").height(hh - h1);
    $("#content>.row-fluid").height(hh - h1 - h2 - 17);


    $("#div1").click(function () {
        if ($("#div1").hasClass("open1")) {
            $("#div1").removeClass("open1").addClass("close1");
            $(".twoThree").html("2D");
            window.location.href ="toAnquan";
        } else {
            $("#div1").removeClass("close1").addClass("open1");
            $(".twoThree").html("3D");
        }

        if ($("#div2").hasClass("open2")) {
            $("#div2").removeClass("open2").addClass("close2");
        } else {
            $("#div2").removeClass("close2").addClass("open2");
        }
    });
    $("#return").click(function () {
        window.location.href = "toAnquan";
    });
    FreedoApp.init("earth");
    SafeThreeViewer.initLabel(FreedoApp.viewers["earth"]);
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
        		globalModelTile = modelTile;
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

    SafeThreeViewer.initLeftClick(FreedoApp.viewers["earth"]);
    SafeThreeViewer.initWheel(FreedoApp.viewers["earth"]);
    var surveymanager = new SurveyManager(FreedoApp.viewers["earth"],function(){});
    $(".table tbody tr").each(function(){
    	$(this).click(function(){
    		 var content = $(this).children().eq(1).text();
    		 switch (content) {
			case "1号 检票口":
				SafeThreeViewer.hideAll();
				SafeThreeViewer.changeColorById([["${component} === \'" + "e1d4b546-afe3-11e7-46c2-5ebc1b3c3ce2" + "\'", "color('red')"],["true","color('white')"]]);
				SafeThreeViewer.fly(-2302781.210462128,4394527.465339555,3994786.3773927097,4.9481761281998295,-0.32295882697450473,6.279817679450293);
				jianpiaokou1.show = true;
				break;
			case "2号 检票口":
				SafeThreeViewer.hideAll();
				SafeThreeViewer.changeColorById([["${component} === \'" + "e1cff9f0-afe3-11e7-46c2-5ebc1b3c3ce2" + "\'", "color('red')"],["true","color('white')"]]);
				SafeThreeViewer.fly(-2302761.9001590554,4394525.5047848765,3994805.2561517092,2.9085377702397195,-1.0744022576651129,0.0015829053559963668);
				jianpiaokou2.show = true;
				break;
			case "3号 检票口":
				SafeThreeViewer.hideAll();
				SafeThreeViewer.changeColorById([["${component} === \'" + "e153ec20-afe3-11e7-46c2-5ebc1b3c3ce2" + "\'", "color('red')"],["true","color('white')"]]);
				SafeThreeViewer.fly(-2302741.4530094187,4394529.079408744,3994807.0568853244,4.154261415377306,-0.4556864318007472,6.280086267404272);
				jianpiaokou3.show = true;
				break;
			case "1号 支柱":
				SafeThreeViewer.hideAll();
				SafeThreeViewer.changeColorById([["${component} === \'" + "e1de51d2-afe3-11e7-46c2-5ebc1b3c3ce2" + "\'", "color('orange')"],["true","color('white')"]]);
				SafeThreeViewer.fly(-2302744.3035816317,4394539.631661994,3994794.7172497814,1.5327119344899538,-0.2340259547101724,0.0033731774571332807);
				zhizhu.show = true;
				break;
			case "1号 电梯":
				SafeThreeViewer.hideAll();
				SafeThreeViewer.changeColorById([["${component} === \'" + "e1990b72-afe3-11e7-46c2-5ebc1b3c3ce2" + "\'", "color('yellow')"],["true","color('white')"]]);
				SafeThreeViewer.fly(-2302764.0824318035,4394530.02625459,3994794.7799485787,1.4083403432488222,-0.348331131411735,0.003447906856028027);
				dianti.show = true;
				break;
			case "JRXM-JCHC":
				SafeThreeViewer.hideAll();
				SafeThreeViewer.changeColorById([["${component} === \'" + "e1d4b4e0-afe3-11e7-46c2-5ebc1b3c3ce2" + "\'", "color('blue')"],["true","color('white')"]]);
				SafeThreeViewer.fly(-2302788.2561917696,4394521.5585276205,3994801.234994364,4.809505009659519,-0.7253428677923317,6.278816722205928);
				anjian.show = true;
				break;
			default:
				break;
			}
    	});
    });
	/**
	 *工具栏按钮点击 
	 */
	$("#appendTools i").each(function(){
		$(this).click(function(){
			if($(this).hasClass("active")){
			//设置方法为none
			surveymanager.setSurveyType(SurveyType.NONE);
			//移除原有的监听事件
			SafeThreeViewer.removeListener();
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
			SafeThreeViewer.initLeftClick(FreedoApp.viewers["earth"]);
		}
		});
	});
    
});