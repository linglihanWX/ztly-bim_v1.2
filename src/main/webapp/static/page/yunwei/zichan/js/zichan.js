$(function () {
    var h = $("#content").height();
    var h2 = $(".breadcrumb").height();
    $("#content .row-fluid").height(h - h2);
            //	初始化地球
	FreedoApp.init("earth");
	 //	添加模型
	$.ajax({
		url:"/yunwei/getPmodel",
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
        		 //向场景中添加模型
        		var modelTile=FreedoApp.viewers["earth"].scene.primitives.add(new FreeDo.FreedoPModelset({
            		url: model[key].url
            	}));
        		//移动模型到坑里
        		modelTile.readyPromise.then(function() {
            		moveModel(modelTile,model[key].x,model[key].y,model[key].z,model[key].heading,model[key].pitch,model[key].roll,model[key].scalex,model[key].scaley,model[key].scalez);
            	});
        		//挖坑
            	FreeDoUtil.dig(FreedoApp.viewers["earth"],holeData,imgarray);
        	}
        	//镜头定位
        	FreedoApp.viewers["earth"].camera.setView({
             	destination :new FreeDo.Cartesian3(-2302923.868697135,4394881.466502352,3995119.1300424132),
     			orientation: {
     				heading : 3.4103115877496184,
     				pitch : FreeDo.Math.toRadians(-90),
     				roll : 3.1249876427485663
     			}
     		});

        }
	});
            //	添加模型结束
//	查询树列表
    $.ajax({
        url: "/yunwei/getProjectModelTreeData",
        type: "get",
        dataType:"json",
        success: function (data) {
        	if(null==data){
        		window.confirm(data);
        	}else{
            var zTreeObj;
            var setting = {
                data: {
                    simpleData: {
                        enable: true,
                        idKey: "uid",
                        pIdKey: "pid",
                        rootPId: "-1"
                    }
                },
                callback : {
                    onRightClick : OnRightClick
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
        }
    });

    //chart1
    var myChart = echarts.init(document.getElementById('chartAttr'));
    var option = {
        title: {
            text: '电梯运行时长图'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["1月","2月","3月","4月","5月","6月"]
        },
        yAxis: {},
        series: [{
            name: '运行时长(小时)',
            type: 'bar',
            data: [150, 176, 143, 158, 163, 149]
        }]
    };
    myChart.setOption(option);


    var total = 0;
    //chart2
    var currChart = echarts.init(document.getElementById('currData'));
    var option1 = {
        title:{text: '实时数据'},
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : (function (){
                    var now = new Date();
                    var res = [];
                    var len = 7;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                        now = new Date(now - 2000);
                    }
                    return res;
                })(),
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'闸机次数',
                type:'bar',
                barWidth: '60%',
                data:(function (){
                    var res = [];
                    var len = 0;
                    while (len < 7) {
                        res.push((Math.random()*10 + 5).toFixed(1) - 0);
                        len++;
                    }
                    return res;
                })()
            }
        ]
    };
    setInterval(function (){
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
        var data0 = option1.series[0].data;
        if(total == 0){
            for (let i = 0; i < data0.length; i++) {
                     total+=data0[i];
            }
        }else{
            total+=data0[6];
        }
        data0.shift();
        data0.push(Math.round(Math.random() * 20));
        option1.xAxis[0].data.shift();
        option1.xAxis[0].data.push(axisData);
        $("#timeNum").val(option1.series[0].data[6]+"次");
        $("#timeTotal").val(parseInt(total)+"次");
        currChart.setOption(option1);
    }, 2100);


    // 右击菜单
    //    $("#init").contextmenu(function(event){
    //        var event = event || window.event;
    //        event.preventDefault();
    //        window.event.returnValue = false;
    //        $("#menu").css({
    //            "display":"block",
    //            "left":event.pageX+"px",
    //            "top":event.pageY+"px"
    //        });
    //        return false;
    //    });
    $(document).click(function() {
        $("#menu").hide();
    });

    // 关键信息
    $(".r1").click(function () {
        $(".keyDetailInfo").stop().fadeOut("fast");
        $(".keyInfo").stop().slideDown("fast");
        $(".currData").stop().fadeOut("fast");
        $("#menu").hide();
    });
    $(".keyInfo .keyClose").click(function () {
        $(".keyInfo").stop().slideUp("fast");
    });

    // 详细信息
    $(".r2").click(function () {
        $(".keyInfo").stop().slideUp("fast");
        $(".keyDetailInfo").stop().fadeIn("fast");
        $(".currData").stop().slideUp("fast");
        $("#menu").hide();
    });
    $(".keyDetailInfo .keyClose").click(function () {
        $(".keyDetailInfo").stop().fadeOut("fast");
    });
    $(".keyDetailInfo button").each(function () {
        $(this).click(function () {
            $(this).addClass("ac").siblings().removeClass("ac");
            if($(this).index() == 0){
                $(".attrKey").show();
                $(".dKey").hide();
                $(".pic").hide();
                $("#chartAttr").hide();
            }
            if($(this).index() == 1){
                $(".attrKey").hide();
                $(".dKey").hide();
                $(".pic").hide();
                $("#chartAttr").show();
            }
            if($(this).index() == 2){
                $(".attrKey").hide();
                $(".pic").hide();
                $(".dKey").show();
                $("#chartAttr").hide();
            }
            if($(this).index() == 3){
                $(".attrKey").hide();
                $(".dKey").hide();
                $(".pic").show();
                $("#chartAttr").hide();
            }
        })
    });
    $(".pic input").click(function () {
        $(".keyDetailInfo").stop().fadeOut("fast");
    });

    $(".r3").click(function () {
        $(".keyDetailInfo").stop().fadeOut("fast");
        $(".keyInfo").stop().slideUp("fast");
        $(".currData").stop().slideDown("fast");
        $("#menu").hide();
    });
    $(".currData .keyClose").click(function () {
        $(".currData").stop().fadeOut("fast");
    });



    $(".r4").click(function () {
        console.log(4);
        $("#menu").hide();
    });
    $(".r5").click(function () {
        console.log(4);
        $("#menu").hide();
    });
    $(".r6").click(function () {
        console.log(4);
        $("#menu").hide();
    });
    $(".r7").click(function () {
        console.log(4);
        $("#menu").hide();
    });
  //    AssetmgmtViewer.init("earth"); // 加载球模型
      AssetmgmtViewer.initRightClick(FreedoApp.viewers["earth"]);
    //AssetmgmtViewer.initLeftClick(FreedoApp.viewers["earth"]);

    var surveymanager = new SurveyManager(FreedoApp.viewers["earth"],function(){});
    /**
	 *工具栏按钮点击 
	 */
	$("#appendTools i").each(function(){
		$(this).click(function(){
			if($(this).hasClass("active")){
			//设置方法为none
			surveymanager.setSurveyType(SurveyType.NONE);
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
		}
		});
	});
           
});