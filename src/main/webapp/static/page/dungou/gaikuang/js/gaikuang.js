$(function () {
    //初始化地球
    FreedoApp.init("earth");
    getPoints(FreedoApp.viewers["earth"])
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

/*    let arr = [];
    if  (scrWidth > 1366)
        arr = [30, 110];
    else {
        arr = [10, 60];
    }
    let chartFour = echarts.init(document.getElementById('chartFour'));
    let option4 = {
        title: {
            text: '进度情况',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: 'center',
            y: 'bottom',
            data: ['业主', 'PPP', '总包', '分包']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: false,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [

            {
                name: '面积模式',
                type: 'pie',
                radius: arr,
                center: ['50%', '50%'],
                roseType: 'area',
                data: [{
                    value: 10,
                    name: '业主'
                },
                    {
                        value: 5,
                        name: 'PPP'
                    },
                    {
                        value: 15,
                        name: '总包'
                    },
                    {
                        value: 25,
                        name: '分包'
                    }
                ]
            }
        ]
    };
    chartFour.setOption(option4);*/


    FreedoApp.viewers["earth"].camera.setView({
//    	 destination :  new FreeDo.Cartesian3.fromDegrees(121.61949402684546,38.94285250833841,1000),
        destination: new FreeDo.Cartesian3(-2606029.8300439236, 4232695.952801313, 3989852.346352031),
        orientation: new FreeDo.HeadingPitchRoll(4.76493381044884, -1.515738147823087, 6.223530529077095)
    })
/*    FreedoApp.viewers["earth"].clock.onTick.addEventListener(function (clock) {
        var camera = FreedoApp.viewers["earth"].camera;
        var scene = FreedoApp.viewers["earth"].scene;
        var cameraHeight = scene.globe.ellipsoid.cartesianToCartographic(camera.position).height;
        if (cameraHeight < 0) {
            var cartesian = camera.position;
            var cartographic = scene.globe.ellipsoid.cartesianToCartographic(cartesian);
            cartographic.height = 0;
            var newcartesian =  scene.globe.ellipsoid.cartographicToCartesian (cartographic);
            camera.setView({
                destination:newcartesian
            })
        }

    });*/
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
    $(".list").append(checkstr)
    $(".showCheckList").on("click", function () {
        $(".list-box").stop().slideDown();
    });
    $(".close").on("click", function () {
        $(".list-box").stop().slideUp();
    });
    $(".list li input").each(function () {
        $(this).change(function () {
            if ($(this).prop("checked")) {
                var index = $(".list li input").index(this);
                layersarr[index].show = true;
            } else {
                var index = $(".list li input").index(this);
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

function getPoints(viewer) {
    var screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
    screenSpaceEventHandler.setInputAction(function (movement) {
        /*		var pick= new FreeDo.Cartesian2(movement.position.x,movement.position.y);
                var cartesian = globalviewer.scene.globe.pick(globalviewer.camera.getPickRay(pick), globalviewer.scene);
                console.log(cartesian);*/
//		var picked = viewer.scene.pick(movement.position);

        var pick = new FreeDo.Cartesian2(movement.position.x, movement.position.y);
        var cartesian = viewer.scene.globe.pick(viewer.camera.getPickRay(pick), viewer.scene);
        var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
        var point = [cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
        console.log(point);
        var camera = viewer.camera;
        var cpos = camera.position;
        console.log(cpos.x + "," + cpos.y + "," + cpos.z);
        console.log(camera.heading + "," + camera.pitch + "," + camera.roll)
    }, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}

function initEntities(viewer) {
    var entityarray = []
    //线
    var suidao = viewer.entities.add({
        name: '隧道',
        polyline: {
            positions: new Freedo.Cartesian3.fromDegreesArray(
                [
                    121.6174590015098, 38.95874455713569,
                    121.61620866389461, 38.95850677314042,
                    121.61540662903757, 38.958213704595344,
                    121.61434819575115, 38.95757077980332,
                    121.6135457552831, 38.95697455120128,
                    121.61290596157349, 38.956174751834915,
                    121.61286001141309, 38.955303559050506,
                    121.61311573725642, 38.95458901085754,
                    121.61419971201384, 38.952850605114364,
                    121.61488866358799, 38.95166932433065,
                    121.61504611872272, 38.95062460623984,
                    121.6175697749288,38.94028519822586
                ]),
            width: 25,
            material:  new FreeDo.PolylineDashMaterialProperty({
                color : FreeDo.Color.LIGHTYELLOW,
                gapColor : FreeDo.Color.BLACK,
                dashLength : 10.0,
                dashPattern: parseInt("1111111111111110", 2)
            }),
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var suidao2 = viewer.entities.add({
    	name: '隧道',
    	polyline: {
    		positions: new Freedo.Cartesian3.fromDegreesArray(
    				[
    					121.6175697749288,38.94028519822586,
    					121.61803402054308,38.93896078953926
    					]),
    					width: 25,
    					material:  new FreeDo.PolylineDashMaterialProperty({
    						color : FreeDo.Color.GREEN,
    						gapColor : FreeDo.Color.BLACK,
    		                dashLength : 10.0,
    		                dashPattern: parseInt("1111111111111110", 2)
    		            }),
    					distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
    	}
    });
    var suidao3 = viewer.entities.add({
    	name: '隧道',
    	polyline: {
    		positions: new Freedo.Cartesian3.fromDegreesArray(
    				[
    					121.61803402054308,38.93896078953926,
    					121.62024154952725, 38.93020774283203,
    					121.62079840051048, 38.92833355870257,
    					121.6211754421881, 38.927660591537894,
    					121.62203768455467, 38.92672914057143,
    					121.62259337661449, 38.92564313453812,
    					121.62330218345369, 38.92434019585824,
    					121.62374838697704, 38.92305321084292,
    					121.62404269310349, 38.92168051864768,
    					]),
    					width: 25,
    					material:  new FreeDo.PolylineDashMaterialProperty({
    		                color : FreeDo.Color.LIGHTSKYBLUE,
    		                gapColor : FreeDo.Color.BLACK,
    		                dashLength : 10.0,
    		                dashPattern: parseInt("1111111111111110", 2)
    		            }),
    					distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
    	}
    });
    var hangdaoletf = viewer.entities.add({
        name: '航道左',
        polyline: {
            positions: new Freedo.Cartesian3.fromDegreesArray(
                [121.61913775986976, 38.93819291323306,
                    121.62049902027843, 38.94087844623272,
                    121.6397957460026, 38.949188385501316]),
            width: 2,
            material: FreeDo.Color.WHITE,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var hangdaoright = viewer.entities.add({
        name: '航道右',
        polyline: {
            positions: new Freedo.Cartesian3.fromDegreesArray(
                [121.61611584935584, 38.94278135499672,
                    121.61929223758972, 38.942504460137705,
                    121.63850361880273, 38.95117967187629]),
            width: 2,
            material: FreeDo.Color.WHITE,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    //字
    var label1 = viewer.entities.add({
        name: "香炉礁航道",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.62224889978843, 38.94270512602886, 50),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "危险源：香炉礁航道",
            font: '12pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            backgroundColor: FreeDo.Color.ORANGERED,
            showBackground: true,
            fillColor: FreeDo.Color.YELLOW,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var label2 = viewer.entities.add({
        name: "军港码头",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.61997619924065, 38.933427729468725, 50),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "危险源：军港码头",
            font: '12pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            backgroundColor: FreeDo.Color.ORANGERED,
            showBackground: true,
            fillColor: FreeDo.Color.YELLOW,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var label3 = viewer.entities.add({
        name: "航母制造区",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.61391282811357, 38.934625366453034, 50),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "危险源： 航母制造区",
            font: '12pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            backgroundColor: FreeDo.Color.ORANGERED,
            showBackground: true,
            fillColor: FreeDo.Color.YELLOW,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var label4 = viewer.entities.add({
        name: "危险源： 疏港货运铁路",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.61497425831845, 38.92570034025223, 50),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "危险源：疏港货运铁路",
            font: '12pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            backgroundColor: FreeDo.Color.ORANGERED,
            showBackground: true,
            fillColor: FreeDo.Color.YELLOW,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var label5 = viewer.entities.add({
        name: "中间风井（接收）",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.6207361838563, 38.92834465015816, 50),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "中间风井（接收）",
            font: '12pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            backgroundColor: FreeDo.Color.MEDIUMBLUE,
            showBackground: true,
            fillColor: FreeDo.Color.YELLOW,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var label6 = viewer.entities.add({
        name: "梭渔湾南站",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.61392275532712, 38.95323841740604, 50),
        label: { // 文字标签
            text: "梭渔湾南站",
            font: '16pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            fillColor: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        billboard: {
            image: "../../static/page/dungou/gaikuang/img/star.png",
            width: 25,
            height: 25,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var label7 = viewer.entities.add({
        name: "火车站站",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.62378599839502, 38.922779514349656, 50),
        label: { // 文字标签
            text: "火车站站",
            font: '16pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            fillColor: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        billboard: {
            image: "../../static/page/dungou/gaikuang/img/star.png",
            width: 25,
            height: 25,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    var posinf1 = viewer.entities.add({
        name: '位置信息',
        show: true,
        position: new FreeDo.Cartesian3.fromDegrees(121.61732581093031, 38.93832015839612, 3),
        label: { //文字标签
            text: '位置信息\n——————\n地铁5号线\n海底隧道',
            font: '13px sans-serif',
            style: FreeDo.LabelStyle.FILL,
            fillColor: FreeDo.Color.WHITE,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),  //偏移量
            backgroundColor: FreeDo.Color.BLACK.withAlpha(0.5),
            showBackground: true,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },

    });
    var posinf2 = viewer.entities.add({
        name: '掘进实时位置',
        show: true,
        position: new FreeDo.Cartesian3.fromDegrees(121.61714484625392, 38.943851238986866, 3),
        label: { //文字标签
            text: '掘进实时位置\n———————————————————\n经度：121.615833   纬度：38.9416654\n高度：240m         相对地面高度：120m',
            font: '13px sans-serif',
            style: FreeDo.LabelStyle.FILL,
            fillColor: FreeDo.Color.WHITE,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),  //偏移量
            backgroundColor: FreeDo.Color.BLACK.withAlpha(0.5),
            showBackground: true,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },

    });
    var tuding = viewer.entities.add({
        name: '位置信息',
        show: true,
        position: new FreeDo.Cartesian3.fromDegrees(121.617802483274261, 38.93972348307097, 3),
        billboard: {
            image: "../../static/page/dungou/gaikuang/img/tuding.png",
            height: 50,
            width: 50,
            pixelOffset: new FreeDo.Cartesian2(0, -15),
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }

    });
    viewer.entities.add({
        name: "危险源1",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.62682095605028, 38.92107920361492, 50),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "危险源： 火车站",
            font: '12pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            backgroundColor: FreeDo.Color.ORANGERED,
            showBackground: true,
            fillColor: FreeDo.Color.YELLOW,
            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
    viewer.entities.add({
    	name: "危险源3",
    	show: true,
    	position: FreeDo.Cartesian3.fromDegrees(121.61130812248769, 38.952837944195025, 50),
    	point: { // 点
    		pixelSize: 5,
    		color: FreeDo.Color.RED,
    		outlineColor: FreeDo.Color.WHITE,
    		outlineWidth: 2,
    		distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
    	},
    	label: { // 文字标签
    		text: "危险源： 居民住宅区",
    		font: '12pt monospace',
    		style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
    		outlineWidth: 2,
    		backgroundColor: FreeDo.Color.ORANGERED,
    		showBackground: true,
    		fillColor: FreeDo.Color.YELLOW,
    		verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
    		pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
    		distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
    	}
    });
    viewer.entities.add({
    	name: "危险源5",
    	show: true,
    	position: FreeDo.Cartesian3.fromDegrees(121.62993526171284, 38.92870917585388, 50),
    	point: { // 点
    		pixelSize: 5,
    		color: FreeDo.Color.RED,
    		outlineColor: FreeDo.Color.WHITE,
    		outlineWidth: 2,
    		distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
    	},
    	label: { // 文字标签
    		text: "危险源： 居民住宅区",
    		font: '12pt monospace',
    		style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
    		outlineWidth: 2,
    		backgroundColor: FreeDo.Color.ORANGERED,
    		showBackground: true,
    		fillColor: FreeDo.Color.YELLOW,
    		verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
    		pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
    		distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
    	}
    });
    viewer.entities.add({
    	name: "危险源4",
    	show: true,
    	position: FreeDo.Cartesian3.fromDegrees(121.6168459694273, 38.9490763774809, 50),
    	point: { // 点
    		pixelSize: 5,
    		color: FreeDo.Color.RED,
    		outlineColor: FreeDo.Color.WHITE,
    		outlineWidth: 2,
    		distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
    	},
    	label: { // 文字标签
    		text: "危险源： 海底溶洞",
    		font: '12pt monospace',
    		style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
    		outlineWidth: 2,
    		backgroundColor: FreeDo.Color.ORANGERED,
    		showBackground: true,
    		fillColor: FreeDo.Color.YELLOW,
    		verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
    		pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量,
    		distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
    	}
    });
    entityarray.push(label1);
    entityarray.push(label2);
    entityarray.push(label3);
    entityarray.push(label4);
    entityarray.push(label5);
    entityarray.push(label6);
    entityarray.push(label7);
    entityarray.push(posinf1);
    entityarray.push(posinf2);
    entityarray.push(tuding);
    viewer.scene.primitives.add(new FreeDo.FreedoPModelset({
        url: "http://182.92.7.32:9000/ztly/daliandimianjianzhu/dalian_chuan"
    }));
    viewer.scene.primitives.add(new FreeDo.FreedoPModelset({
    	url: "http://182.92.7.32:9000/ztly/daliandimianjianzhu/dalian_jianzhu01"
    }));
    viewer.scene.primitives.add(new FreeDo.FreedoPModelset({
    	url: "http://182.92.7.32:9000/ztly/daliandimianjianzhu/dalian_jianzhu02"
    }));
    return entityarray;
}

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