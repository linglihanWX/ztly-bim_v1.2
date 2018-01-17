$(function () {
    var h = $("#content").height();
    var h2 = $(".breadcrumb").height();
    $("#content .row-fluid").height(h - h2);
    //	初始化地球
    FreedoApp.init("earth");
    $.ajax({
        url: "../PModel/getPmodel",
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
                } else {
                    modelTile.readyPromise.then(function () {
                        FreedoApp.viewers["earth"].camera.flyToBoundingSphere(modelTile.boundingSphere);
                    });
                }
            }
        }
    });
//	添加模型结束
//	查询树列表

    var treedata = []
    treedata.push({
        uid: "-1",
        pid: "-2",
        name: "模型构件树",
        isParent:true
    })

    var zTreeObj;
    var setting = {
        async: {
            enable: true,
            type: "get",
            url: getUrl
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "uid",
                pIdKey: "pid",
                rootPId: "-2"
            }
        },
        callback: {
            onRightClick: OnRightClick,
            onAsyncSuccess:function (event, treeId, treeNode, msg) {
               // alert('success')
            },
            onAsyncError:function (event, treeId, treeNode, XMLHttpRequest, textStatus, errorThrown) {
                //alert('failed')
            },
            onClick:function (event, treeId, treeNode) {
               var boundsmax = treeNode.boundsmax;
                var boundsmin = treeNode.boundsmin;
                console.log(treeNode.getParentNode())
               // treeNode.getPath().getIndex();
                /* FreeDoTool.getSphereFromBoundsMinMax(boundsmax,boundsmin,)*/

            }
        }
    };

    /**
     *得到异步请求的路径
     * @param treeId
     * @param treeNode
     */
    function getUrl(treeId, treeNode) {
        var uid = treeNode.uid;
        if(treeNode.tablename==undefined){
            return "../PModel/getProjectModelTreeData?uid="+uid;
        }else{
            return "../PModel/getProjectModelTreeData?uid="+uid+"&tablename="+treeNode.tablename;
        }
    }

    /**
     * 树节点右键点击事件
     * @param event
     * @param treeId
     * @param treeNode
     * @constructor
     */
    function OnRightClick(event, treeId, treeNode) {
        $("#rMenu").show().css({
            "left": event.pageX,
            "top": event.pageY
        });
    }
    zTreeObj = $.fn.zTree.init($("#tree"), setting, treedata);


    //chart1
    var myChart = echarts.init(document.getElementById('chartAttr'));
    var option = {
        title: {
            text: '电梯运行时长图'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["1月", "2月", "3月", "4月", "5月", "6月"]
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
        title: {text: '实时数据'},
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: (function () {
                    var now = new Date();
                    var res = [];
                    var len = 7;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                        now = new Date(now - 2000);
                    }
                    return res;
                })(),
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '闸机次数',
                type: 'bar',
                barWidth: '60%',
                data: (function () {
                    var res = [];
                    var len = 0;
                    while (len < 7) {
                        res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                        len++;
                    }
                    return res;
                })()
            }
        ]
    };
    setInterval(function () {
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
        var data0 = option1.series[0].data;
        if (total == 0) {
            for (let i = 0; i < data0.length; i++) {
                total += data0[i];
            }
        } else {
            total += data0[6];
        }
        data0.shift();
        data0.push(Math.round(Math.random() * 20));
        option1.xAxis[0].data.shift();
        option1.xAxis[0].data.push(axisData);
        $("#timeNum").val(option1.series[0].data[6] + "次");
        $("#timeTotal").val(parseInt(total) + "次");
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
    $(document).click(function () {
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
            if ($(this).index() == 0) {
                $(".attrKey").show();
                $(".dKey").hide();
                $(".pic").hide();
                $("#chartAttr").hide();
            }
            if ($(this).index() == 1) {
                $(".attrKey").hide();
                $(".dKey").hide();
                $(".pic").hide();
                $("#chartAttr").show();
            }
            if ($(this).index() == 2) {
                $(".attrKey").hide();
                $(".pic").hide();
                $(".dKey").show();
                $("#chartAttr").hide();
            }
            if ($(this).index() == 3) {
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

    var surveymanager = new SurveyManager(FreedoApp.viewers["earth"], function () {
    });
    /**
     *工具栏按钮点击
     */
    $("#appendTools i").each(function () {
        $(this).click(function () {
            if ($(this).hasClass("active")) {
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
            } else {
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