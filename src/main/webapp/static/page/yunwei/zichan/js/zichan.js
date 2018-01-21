$(function () {
    var h = $("#content").height();
    var h2 = $(".breadcrumb").height();
    $("#content .row-fluid").height(h - h2);
    //	初始化地球
    FreedoApp.init("earth");
    //存放PMODEL的数组，PMODEL对应的构件表名为索引。
    var pmodels = [];
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
                var index = model[key].unitname;
                pmodels[index] = modelTile;
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
/*
    var treedata = []
    treedata.push({
        uid: "-1",
        pid: "-2",
        name: "模型构件树",
        isParent: true
    })

    var zTreeObj;
    var setting = {
        /!*check: {
            enable: true
        },*!/
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
            onAsyncSuccess:function (event, treeId, treeNode, msg) {
                //console.log(msg);
            },
            onRightClick: OnRightClick,
            onClick: function (event, treeId, treeNode) {
                var boundsmax = treeNode.boundsmax;
                var boundsmin = treeNode.boundsmin;
                if (treeNode.tablename != undefined) {
                    //得到结点所存的表名，作为pmodels数组的索引找到对应的pmodel对象
                    var unitname = treeNode.tablename;
                    //根据最大最小包围盒定位
                    var boundingSphere = FreeDoTool.getSphereFromBoundsMinMax(boundsmax, boundsmin, pmodels[unitname])
                    FreedoApp.viewers["earth"].camera.flyToBoundingSphere(boundingSphere)
                }
                //模型高亮style
                var highlightmodelstyle = new FreeDo.FreedoPModelStyle({
                    color: {
                        conditions: [
                            ["${component} === \'" + treeNode.uid + "\'", 'color("red")'],
                            ['true', 'color("white")']
                        ]
                    }
                });
                //原色
                var originmodelstyle = new FreeDo.FreedoPModelStyle();
                for (var index in pmodels) {
                    if(index==treeNode.tablename){
                        pmodels[index].style = highlightmodelstyle;
                    }else{
                        pmodels[index].style = originmodelstyle;
                    }
                }
            },
            /!*onCheck: function (event, treeId, treeNode) {
                //得到所有未勾选的结点
                var nodes = zTreeObj.getCheckedNodes(false);
                //用于存放style的数组，第一个PMODEL模型对象一个style
                var models =[];
                //用unitname作为models数据的索引，不同结点根据所属PMODEL模型对象，放入相应的style中
                for(i in nodes){
                    var index = nodes[i].unitname;
                    var uid = ["${component} === \'" + nodes[i].uid + "\'", 'false'];
                    if(models[index]==null){
                    models[index]=[];
                    }
                    models[index].push(uid)
                }
                //最后给没有勾选的结点设置成显示
                for(var index in models){
                    models[index].push(['true', 'true'])
                }
                //遍历未勾选的结点
                for(i in nodes){
                //遍历模型对象
                for (var index in pmodels) {
                    //根据结点的表名对应模型数组的索引找到相应的模型对象，并设置对象的隐藏style
                    if(index==nodes[i].tablename){
                        pmodels[index].style = new FreeDo.FreedoPModelStyle({
                            show: {
                                conditions:models[index]
                            }
                        });
                    }
                }
                }
            }*!/
        }
    };

    /!**
     *得到异步请求的路径
     * @param treeId
     * @param treeNode
     *!/
    function getUrl(treeId, treeNode) {
        var uid = treeNode.uid;
        if (treeNode.tablename == undefined) {
            return "../PModel/getProjectModelTreeData?uid=" + uid;
        } else {
            return "../PModel/getProjectModelTreeData?uid=" + uid + "&tablename=" + treeNode.tablename;
        }
    }

    /!**
     * 树节点右键点击事件
     * @param event
     * @param treeId
     * @param treeNode
     * @constructor
     *!/
    function OnRightClick(event, treeId, treeNode) {
        $("#rMenu").show().css({
            "left": event.pageX,
            "top": event.pageY
        });
    }

    zTreeObj = $.fn.zTree.init($("#tree"), setting, treedata);
    var node = zTreeObj.getNodeByParam("uid", -1, null);
    zTreeObj.expandNode(node, true, true, true)
    zTreeObj.checkNode(node,true,true)*/

    $('#tree').tree({
        method:"get",
        //checkbox:true,
        data:[{
            id:"-1",
            text:"模型构件树",
            state:"closed",
            //checked:true
        }],
        onBeforeExpand:function(node,param){
            if(node.id=="-1"){
                $('#tree').tree('options').url = "../PModel/getModelTreeAsyn?uid=-1";
            }else{
                $('#tree').tree('options').url = "../PModel/getModelTreeAsyn?uid=" + node.id+"&tablename="+node.tablename;
            }

        },
        onClick:function (node) {
            var boundsmax = node.boundsmax;
            var boundsmin = node.boundsmin;
            if (node.tablename != undefined) {
                //得到结点所存的表名，作为pmodels数组的索引找到对应的pmodel对象
                var unitname = node.tablename;
                //根据最大最小包围盒定位
                var boundingSphere = FreeDoTool.getSphereFromBoundsMinMax(boundsmax, boundsmin, pmodels[unitname])
                FreedoApp.viewers["earth"].camera.flyToBoundingSphere(boundingSphere)
            }
            //模型高亮style
            var highlightmodelstyle = new FreeDo.FreedoPModelStyle({
                color: {
                    conditions: [
                        ["${component} === \'" + node.id + "\'", 'color("red")'],
                        ['true', 'color("white")']
                    ]
                }
            });
            //原色
            var originmodelstyle = new FreeDo.FreedoPModelStyle();
            for (var index in pmodels) {
                if(index==node.tablename){
                    pmodels[index].style = highlightmodelstyle;
                }else{
                    pmodels[index].style = originmodelstyle;
                }
            }
        },
        onCheck:function (node,checked) {
            //得到所有未勾选的结点
            var nodes = $('#tree').tree('getChecked', 'unchecked');
            //用于存放style的数组，第一个PMODEL模型对象一个style
            var models =[];
            //用unitname作为models数据的索引，不同结点根据所属PMODEL模型对象，放入相应的style中
            for(i in nodes){
                var index = nodes[i].tablename;
                var uid = ["${component} === \'" + nodes[i].uid + "\'", 'false'];
                if(models[index]==null){
                    models[index]=[];
                }
                models[index].push(uid)
            }
            //最后给没有勾选的结点设置成显示
            for(var index in models){
                models[index].push(['true', 'true'])
            }
            //遍历未勾选的结点
            for(i in nodes){
                //遍历模型对象
                for (var index in pmodels) {
                    //根据结点的表名对应模型数组的索引找到相应的模型对象，并设置对象的隐藏style
                    if(index==nodes[i].tablename){
                        pmodels[index].style = new FreeDo.FreedoPModelStyle({
                            show: {
                                conditions:models[index]
                            }
                        });
                    }
                }
            }
        },
        onLoadSuccess:function (node, data) {
           // console.log(data);
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