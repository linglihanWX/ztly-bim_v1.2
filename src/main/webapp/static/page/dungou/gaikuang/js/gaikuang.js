$(function () {
    //初始化地球
    FreedoApp.init("earth");
    getPoints(FreedoApp.viewers["earth"])
    setLeftClickEvent(FreedoApp.viewers["earth"])
    setMouseMoveEvent(FreedoApp.viewers["earth"])
    var array = initEntities(FreedoApp.viewers["earth"])
    let scrWidth = window.screen.width;
    let state = "full-screen";
    let state1 = "not-full-screen";
    let smallStr = false;
    let timer = null;
    let smallStr1 = false;
    $(".icon-bqp").on("click", function () {
        if ($("#earth").hasClass("full-screen")) {
            $(".compassDiv").hide();
            for (var i = 0; i < array.length; i++) {
                array[i].show = false;
            }
        } else {
            $(".compassDiv").show();
            for (var i = 0; i < array.length; i++) {
                array[i].show = true;
            }
        }
    });
    $(".icon-qp").on("click", function () {
        if ($("#earth").hasClass("full-screen")) {
            $(".compassDiv").hide();
            for (var i = 0; i < array.length; i++) {
                array[i].show = false;
            }
        } else {
            $(".compassDiv").show();
            for (var i = 0; i < array.length; i++) {
                array[i].show = true;
            }
        }
    });

    $(".size").on("click", function () {
        $("#earth .size,#earth1 .size").toggleClass("icon-bqp icon-qp");

        changeIcon(state, smallStr, "earth");
        changeIcon(state1, smallStr1, "earth1");
        state = $("#earth").attr("class");
        state1 = $("#earth1").attr("class");
    });
    
    $("#chartFour>p>i").on("click", function () {
    	window.location.href = "../../ProSystem/dungou/toDaopanjiance";
    });

    /**
     * 改变图标
     * @param {*} state     当前的类名
     * @param {*} smallStr  前一次是否是最小高度
     * @param {*} el        元素
     */
    function changeIcon(state, smallStr, el) {
        if (state == "full-screen") {
            if (smallStr) {
                $("#" + el).toggleClass("full-screen smallHeight");
                $("#" + el + " .icon-zdh").show();
                $("#" + el + " .icon-zxh").hide();
            } else {
                $("#" + el).toggleClass("full-screen not-full-screen");
                $("#" + el + " .icon-zxh").show();
                $("#" + el + " .icon-zdh").hide();
            }
        } else if (state == "not-full-screen") {
            $("#" + el).toggleClass("not-full-screen full-screen");
            $("#" + el + " .icon-zdh,#" + el + " .icon-zxh").hide();
        } else if (state == "smallHeight") {
            $("#" + el).toggleClass("smallHeight full-screen");
            $("#" + el + " .icon-zdh,#" + el + " .icon-zxh").hide();
        }
    }
    $(".icon-zxh,.icon-zdh").on("click", function () {
        $(this).toggleClass("icon-zxh icon-zdh");
        $(this).parent().parent().toggleClass("smallHeight not-full-screen");
        state = $("#earth").attr("class");
        state1 = $("#earth1").attr("class");
        if ($(this).parent().parent().attr("id") == "earth") {
            smallStr = (state == "smallHeight") ? true : false;
        } else {
            smallStr1 = (state1 == "smallHeight") ? true : false;
        }
    });
    // 三维窗口的大小改变
    $(".main-page").on("click", function () {
        $(".content-middle").css({
            "height": 66 + "%"
        });
        $(".content-bottom").show();
    });
    $(".three-page").on("click", function () {
        $(".content-middle").css({
            "height": 100 + "%"
        });
        $(".content-bottom").hide();
    });
    $(".layerControl-page").on("click", function () {
    	$("#listBox1").stop().slideDown();
    	$(".content-bottom").hide();
    });
    var checkstr1 = ""
    checkstr1 += '<li><input type="radio" checked name="shuaige">盾构监控</li>';
    checkstr1 += '<li><input type="radio"  name="shuaige">安全状态</li>';
    checkstr1 += '<li><input type="radio"  name="shuaige">施工功法</li>';
    $("#listBox1 .list").append(checkstr1)
   
        $("#listBox1 .close").on("click", function () {
            $("#listBox1").stop().slideUp();
        });
        $("#listBox1 .list li input").each(function () {
            $(this).change(function () {
                if ($(this).prop("checked")) {
                	//console.log($(this).parent().text())
                    var index = $(this).parent().index();
                    /*$(".biaozhubox ul").eq(index).show().siblings().hide();*/
	                   switch (index) {
						case 0:
							$(".first").show();
							$(".second,.three").hide();
							addDungoujisuidaoEntity();
							
							break;
						case 1:
							$(".second").show();
							$(".first,.three").hide();
							changeanquanzhuangtaiEntity();
							
							break;
						case 2:
							$(".three").show();
							$(".first,.second").hide();
							changeshigonggongfaEntity();
							break;
						default:
							break;
						}
                    //var index = $("#listBox .list li input").index(this);
                    //layersarr[index].show = true;
                } else {
                    //var index = $("#listBox .list li input").index(this);
                    //layersarr[index].show = false;
                }
            })
        })
    if  (scrWidth <= 1366) {
        new Swiper('.swiper-container', {
            direction: 'vertical',
            //loop: true,
            autoplay: 5000,
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            //mousewheelControl: true
        });
    }
    // canvas画图
    renderDrilling();
    
    /**
     * canvas画图
     */
    function renderDrilling() {
        clearInterval(timer);
        var widthT = $("#chartFour").width();
        var heightT = $("#chartFour").height()-27;
        var i = 0;
        timer = setInterval(function () {
            i++;
            var options = {
                id: 1,
                width: widthT,
                height: heightT,
                sumGrouting: '数量100',
                pushSpeed: 100,
                knifeDishSpeed: 10,
                penetration: 10,
                knifeDishTorque: 10,
                sumPush: 1000000,
                thrustHydraulic: 10,
                KN: [i, i, i, i], //参数每秒更新
                mm: [3, 4, 5, 6],
                barRed: [0, 1, 2, 3, 4, 5, 6, 7],
                barBlue: [0, 1, 2, 3, 4, 5, 6, 7],
                m3: [0, 1, 2, 3, 4, 5, 6, 7],
                knifeDirection: '45°',
                knifeRotateTime: 0,
                cvs: document.getElementById('cvs'),
                ctx: document.getElementById('cvs').getContext('2d'),
            };
            canvas.drilling.clear(options);
            canvas.drilling.init(options);
        }, 1000);
    }


    let chartOne = echarts.init(document.getElementById('chartOne'));
    let option1 = {
        title: {
            text: '检测信息',
            left: 'left',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
            left: 'right',
            orient: "vertical",
            data: ['实际投资', '计划投资'],
        },
        xAxis: {
            type: 'category',
            name: '',
            splitLine: {
                show: false
            },
            data: ['2017/09', '2017/10', '2017/11', '2017/12', '2018/01']
        },
        grid: {
            show: true,
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            name: ''
        },
        series: [{
            name: '实际投资',
            type: 'line',
            smooth: true,
            data: [1, 3, 5, 7, 4, 2]
        },
            {
                name: '计划投资',
                type: 'line',
                smooth: true,
                data: [1, 5, 3, 4, 7, 6]
            },
        ]
    };
    chartOne.setOption(option1);

    let chartTwo = echarts.init(document.getElementById('chartTwo'));
    let option2 = {
            title: {
                text: '进度曲线'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['掘进进度','轨道铺设','电器安装']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['三月份','四月份','五月份','六月份','七月份','八月份','九月份']
            },
            yAxis: {
                type: 'value'
            },

            series: [
                {
                    name:'掘进进度',
                    type:'line',
                    smooth: true,
                    data:[10, 11, 13, 16, 17, 19, 21],
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#c23531'
                            }, {
                                offset: 1,
                                color: '#ffe'
                            }])
                        }
                    }
                },
                {
                    name:'轨道铺设',
                    type:'line',
                    smooth: true,
                    data:[4, 6, 9, 12, 15, 16, 20],
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#2f4554'
                            }, {
                                offset: 1,
                                color: '#ffe'
                            }])
                        }
                    }
                },
                {
                    name:'电器安装',
                    type:'line',
                    smooth: true,
                    data:[3, 5, 7, 10, 14, 15, 18],
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#61a0a8'
                            }, {
                                offset: 1,
                                color: '#ffe'
                            }])
                        }
                    }
                }
            ]
        };

    chartTwo.setOption(option2);

    let chartThree = echarts.init(document.getElementById('chartThree'));
    let option3 = {
        title: {
            text: '安全风险统计信息',
            left: 'left',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['质量', '安全'],
            orient: "vertical",
            left: "right"
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['2017/01', '2017/02', '2017/03', '2017/04', '2017/05', '2017/06', '2017/07', '2017/08', '2017/09', '2017/10', '2017/11', '2017/12']
        }],
        yAxis: [{
            name: '',
            type: 'value'
        }],
        series: [{
            name: '质量',
            type: 'bar',
            data: [10, 8, 6, 5, 6, 8, 10, 8, 6, 5, 6, 8]
        },
            {
                name: '安全',
                type: 'bar',
                data: [5, 9, 14, 6, 8, 5, 5, 9, 14, 6, 8, 5]
            }
        ]
    };
    chartThree.setOption(option3);

    FreedoApp.viewers["earth"].camera.setView({
//    	 destination :  new FreeDo.Cartesian3.fromDegrees(121.61949402684546,38.94285250833841,1000),
        destination: new FreeDo.Cartesian3(-2606029.8300439236, 4232695.952801313, 3989852.346352031),
        orientation: new FreeDo.HeadingPitchRoll(4.76493381044884, -1.515738147823087, 6.223530529077095)
    })
    //图层部分
    var layersarr = [];
    var layersname = [];
    var imageryLayers = FreedoApp.viewers["earth"].imageryLayers;
    $.ajax({
        url: "../../static/page/dungou/gaikuang/json/layers.json",
        type: "get",
        async: false,
        dataType: 'json',
        success: function (data) {

            for (var i = 0; i < data.length; i++) {
                layersname[i] = data[i].name;
                layersarr[i] = imageryLayers.addImageryProvider(new Freedo.WebMapServiceImageryProvider({
                    url: 'http://182.92.7.32:9510/geoserver/shenmao/wms',
                    layers: data[i].layers,
                    parameters: {
                        version: '1.1.1',
                        transparent: true,
                        format: 'image/png',
                        tiled: true,
                        gridSet: 'EPSG=3395'
                    }
                }));
            }

        }
    })
    imageryLayers.addImageryProvider(new Freedo.WebMapServiceImageryProvider({
                    url: 'http://182.92.7.32:9510/geoserver/shenmao/wms',
                    //layers: 'shenmao:dalian',
                    layers: 'shenmao:dalianDemsuidao',
                    parameters: {
                        version: '1.1.1',
                        transparent: true,
                        format: 'image/png',
                        //tiled: true,
                        //gridSet: 'EPSG=3395'
                    },
				    /*minimumLevel: 12,
					maximumLevel: 19,*/
                }));
    
  //中文标识影像
    imageryLayers.addImageryProvider( new Freedo.WebMapTileServiceImageryProvider({
	    url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg",
	    layer: "tdtAnnoLayer_biaoji",
	    style: "default",
	    format: "image/png",
	    tileMatrixSetID: "tianditu",
	    show: true
	}));
    var checkstr = ""
    for (var i = 0; i < 13; i++) {
        checkstr += '<li><input type="checkbox" checked name="">' + layersname[i] + '</li>';
    }
    $("#listBox .list").append(checkstr)
    $(".showCheckList").on("click", function () {
        $("#listBox").stop().slideDown();
    });
    $("#listBox .close").on("click", function () {
        $("#listBox").stop().slideUp();
    });
    $("#listBox .list li input").each(function () {
        $(this).change(function () {
            if ($(this).prop("checked")) {
                var index = $("#listBox .list li input").index(this);
                layersarr[index].show = true;
            } else {
                var index = $("#listBox .list li input").index(this);
                layersarr[index].show = false;
            }
        })
    })

    $.ajax({
        url: "../../PModel/getPmodel",
        type: "get",
        dataType: "json",
        success: function (data) {
            if(data[0].id==15){
                FreedoApp.viewers["earth"].camera.setView({
//    	 destination :  new FreeDo.Cartesian3.fromDegrees(121.61949402684546,38.94285250833841,1000),
                    destination: new FreeDo.Cartesian3(-2390504.2868196983,5437784.25207524,2461194.1877298946),
                    orientation: new FreeDo.HeadingPitchRoll(5.910423052387491,-1.2442322139759034,6.267673931457356)
                })
            }else{
                FreedoApp.viewers["earth"].camera.setView({
//    	 destination :  new FreeDo.Cartesian3.fromDegrees(121.61949402684546,38.94285250833841,1000),
                    destination: new FreeDo.Cartesian3(-2606029.8300439236, 4232695.952801313, 3989852.346352031),
                    orientation: new FreeDo.HeadingPitchRoll(4.76493381044884, -1.515738147823087, 6.223530529077095)
                })
            }
        }
    });
});

function pinjie(data) {
    var str = ""
    for (var i = 0; i < data.length; i++) {
        if (data[i] != "") {
            if (i != data.length - 1) {
                str = str + data[i] + ",";
            } else {
                str = str + data[i];
            }
        }

    }
    return str
}