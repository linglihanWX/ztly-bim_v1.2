$(function () {
    var h = $("#content").height();
    var h2 = $(".breadcrumb").height();
    $("#content .row-fluid").height(h - h2);

    var h1 = $("#dailog").height();
    $(".dialogContent").height(h1-284);
    FreedoApp.init("earth");
    DownupViewer.initDownup(FreedoApp.viewers["earth"]);
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
        		var modelTile=FreedoApp.viewers["earth"].scene.primitives.add(new FreeDo.FreedoPModelset({
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
    $.ajax({
        url: "../static/page/shigong/chenjiangdian/downup.json",
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
                		
                		if(treeNode.id>0&&treeNode.id<=10)
							FreedoApp.viewers["earth"].zoomTo(downuppoints[treeNode.id]);

						
                	}
                }
            };
            function OnRightClick(event, treeId, treeNode) {
                $("#rMenu").show().css({
                    "left" :event.pageX,
                    "top":event.pageY
                });
            }
            zTreeObj = $.fn.zTree.init( $("#tree"), setting, data);
        }
    });

    
    //初始化
    var myChart = echarts.init(document.getElementById('chart'));
    option = {
        title: {
            text: '沉降监测数据'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: {
            show: false,
            start: 0,
            end: 100
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                data: [10.01,10.02,10.03,10.04,10.05,10.06,10.07]
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                name: '沉降量',
                max: 0,
                min: -15,
                boundaryGap: [0.2, 0.2]
            },
        ],
        series: [
            {
                name:'沉降量',
                type:'line',
                data:[-1,-2,-4,-9,-10,-11,-10]
            }
        ]
    };
    myChart.setOption(option);
    DownupViewer.initLeftClick(FreedoApp.viewers["earth"],showDiv);
    DownupViewer.initLeftDown(FreedoApp.viewers["earth"],hideDiv);

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
			DownupViewer.removeListener();
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
		    DownupViewer.initLeftClick(FreedoApp.viewers["earth"]);
		    DownupViewer.initLeftDown(FreedoApp.viewers["earth"],hideDiv);
		}
		});
		
	});
    function hideDiv(){
    	$("#chart").hide();
    }
    function showDiv(picked,position){
    	if(picked){
			if(picked instanceof FreeDo.FreedoPModelFeature){
				$("#chart").hide();
			}else{
				
				if(picked.id!=undefined&&picked.id.name.indexOf("沉降点")>-1){
					$("#chart").css({
						"display":"block",
						"left":position.x - 300,
						"top":position.y - 300,
					});	
				}else{
					$("#chart").hide();
				}
			}
			
		}else{
			$("#chart").hide();
		}
    }
});