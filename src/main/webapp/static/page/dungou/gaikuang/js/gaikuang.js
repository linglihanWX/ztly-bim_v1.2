$(function () {
    //初始化地球
    FreedoApp.init("earth1");
    getPoints(FreedoApp.viewers["earth1"])
    var array = initEntities(FreedoApp.viewers["earth1"])
    $(".compassDiv").hide();

    $(".icon-bqp").on("click",function () {
        if($("#earth1").hasClass("full-screen")){
            $(".compassDiv").hide();
            for (var i = 0; i < array.length; i++) {
                array[i].show = false;
            }
        }else{
            $(".compassDiv").show();
            for (var i = 0; i < array.length; i++) {
                array[i].show = true;
            }
        }
    });
    $(".icon-qp").on("click",function () {
        if($("#earth1").hasClass("full-screen")){
            $(".compassDiv").hide();
            for (var i = 0; i < array.length; i++) {
                array[i].show = false;
            }
        }else{
            $(".compassDiv").show();
            for (var i = 0; i < array.length; i++) {
                array[i].show = true;
            }
        }
    });


    $(".size").on("click",function () {
        $("#earth .size,#earth1 .size").toggleClass("icon-bqp icon-qp");
        $("#earth,#earth1").toggleClass("full-screen not-full-screen");
        if($("#earth").hasClass("full-screen")){
            $("#earth1 .icon-zxh,#earth1 .icon-zdh").show();
            $("#earth .icon-zxh,#earth .icon-zdh").hide();
        }else{
            $("#earth1 .icon-zxh,#earth1 .icon-zdh").hide();
            $("#earth .icon-zxh,#earth .icon-zdh").show();
        }
    });
    $(".icon-zxh,.icon-zdh").on("click",function () {
        $(this).toggleClass("icon-zxh icon-zdh");
        $(this).parent().parent().toggleClass("smallHeight");
    });
    // 三维窗口的大小改变
    $(".main-page").on("click",function () {
        console.log(1);
        $(".content-middle").css({"height":40+"%"});
        $(".content-bottom").show();
    });
    $(".three-page").on("click",function () {
        $(".content-middle").css({"height":100+"%"});
        $(".content-bottom").hide();
    });

    var chartOne = echarts.init(document.getElementById('chartOne'));
    var option1 = {
        title: {
            text: '检测信息',
            left: 'left',
            textStyle:{
                fontSize:14
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
            left: 'right',
            orient:"vertical",
            data: ['实际投资', '计划投资'],
        },
        xAxis: {
            type: 'category',
            name: 'x',
            splitLine: {show: false},
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
            name: 'y'
        },
        series: [
            {
                name: '实际投资',
                type: 'line',
                smooth:true,
                data: [1, 3, 5, 7, 4, 2]
            },
            {
                name: '计划投资',
                type: 'line',
                smooth:true,
                data: [1, 5, 3, 4, 7, 6 ]
            },
        ]
    };
    chartOne.setOption(option1);

    var chartTwo = echarts.init(document.getElementById('chartTwo'));
    var option2 = {
        title: {
            text: '进度情况',
            left: 'left',
            textStyle:{
                fontSize:14
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}',

        },
        legend: {
            left: 'right',
            orient:"vertical",
            data: ['按时', '按期']
        },
        xAxis: {
            type: 'category',
            name: 'x',
            splitLine: {show: false},
            data: ['本月']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            name: 'y'
        },
        series: [
            {
                name: '按时',
                type: 'bar',
                data: [10],
                barWidth: 30
            },
            {
                name: '按期',
                type: 'bar',
                data: [5],
                barWidth: 30
            },
        ]
    };
    chartTwo.setOption(option2); chartTwo.setOption(option2);

    var chartThree = echarts.init(document.getElementById('chartThree'));
    var option3 = {
        title: {
            text: '检测信息',
            left: 'left',
            textStyle:{
                fontSize:14
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['质量','安全'],
            orient:"vertical",
            left:"right"
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
                data : ['2017/01','2017/02','2017/03','2017/04','2017/05','2017/06','2017/07','2017/08','2017/09','2017/10','2017/11','2017/12']
            }
        ],
        yAxis : [
            {
                name:'y',
                type : 'value'
            }
        ],
        series : [
            {
                name:'质量',
                type:'bar',
                data:[10, 8, 6, 5, 6, 8,10, 8, 6, 5, 6, 8]
            },
            {
                name:'安全',
                type:'bar',
                data:[5, 9, 14, 6, 8, 5, 5, 9, 14, 6, 8, 5]
            }
        ]
    };
    chartThree.setOption(option3);


    var chartFour = echarts.init(document.getElementById('chartFour'));
    var option4 = {
        title : {
            text: '进度情况',
            x:'center',
            textStyle:{
                fontSize:14
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:['业主','PPP','总包','分包']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [

            {
                name:'面积模式',
                type:'pie',
                radius : [30, 110],
                center : ['50%', '50%'],
                roseType : 'area',
                data:[
                    {value:10, name:'业主'},
                    {value:5, name:'PPP'},
                    {value:15, name:'总包'},
                    {value:25, name:'分包'}
                ]
            }
        ]
    };
    chartFour.setOption(option4);


    FreedoApp.viewers["earth1"].camera.setView({
//    	 destination :  new FreeDo.Cartesian3.fromDegrees(121.61949402684546,38.94285250833841,1000),
    	destination :  new FreeDo.Cartesian3(-2605890.815905916,4232496.60280833,3990154.6100900965),
    	 orientation :  new FreeDo.HeadingPitchRoll(4.764935388409626,-1.5157381432489783,6.223528948721581)
    })
});
function getPoints(viewer){
	var screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	screenSpaceEventHandler.setInputAction(function(movement){
/*		var pick= new FreeDo.Cartesian2(movement.position.x,movement.position.y);
		var cartesian = globalviewer.scene.globe.pick(globalviewer.camera.getPickRay(pick), globalviewer.scene);
		console.log(cartesian);*/
//		var picked = viewer.scene.pick(movement.position);

		var pick= new FreeDo.Cartesian2(movement.position.x,movement.position.y);
		var cartesian = viewer.scene.globe.pick(viewer.camera.getPickRay(pick), viewer.scene);
		var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
		var point=[ cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
		console.log(point);
//		var camera = viewer.camera;
//		var cpos = camera.position;
//		console.log(cpos.x+","+cpos.y+","+cpos.z);
//		console.log(camera.heading+","+camera.pitch+","+camera.roll)
	}, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
function initEntities(viewer){
	var entityarray = []
	//线
	var suidao = viewer.entities.add({
	    name : '隧道',
	    polyline : {
	        positions : new Freedo.Cartesian3.fromDegreesArray(
	            [121.61974798399038, 38.96007026243973,
	            121.6169733685259, 38.95966656608986,
	            121.61382483293477, 38.958980777336876,
	            121.61243342605752, 38.957479607066205,
	            121.6115335400403, 38.9556454271757,
	            121.6131925520136, 38.95336864839285,
	            121.6146725350369, 38.952087457140124,
	            121.61601688421773, 38.950860081314396,
	            121.62115072655634, 38.93051301111516,
	            121.62116506064486, 38.92892853570932,
	            121.62186300364372, 38.926483139280485,
	            121.62340769083177, 38.924764989650456,
	            121.62539781330662, 38.922285712328474]),
	        width : 5,
	        material : FreeDo.Color.RED
	    }
	});
	var hangdaoletf = viewer.entities.add({
	    name : '航道左',
	    polyline : {
	        positions : new Freedo.Cartesian3.fromDegreesArray(
	            [121.61913775986976, 38.93819291323306,
	            	121.62049902027843, 38.94087844623272,
	            	121.6397957460026, 38.949188385501316]),
	        width : 2,
	        material : FreeDo.Color.WHITE
	    }
	});
	var hangdaoright = viewer.entities.add({
	    name : '航道右',
	    polyline : {
	        positions : new Freedo.Cartesian3.fromDegreesArray(
	            [121.61611584935584, 38.94278135499672,
	            	121.61929223758972, 38.942504460137705,
	            	121.63850361880273, 38.95117967187629]),
	        width : 2,
	        material : FreeDo.Color.WHITE
	    }
	});
	//字
	var label1 = viewer.entities.add({
		name : "香炉礁航道",
        show : false,
        position : FreeDo.Cartesian3.fromDegrees(121.62224889978843, 38.94270512602886,1),
		point : { // 点
			pixelSize : 5,
			color : FreeDo.Color.RED,
			outlineColor : FreeDo.Color.WHITE,
			outlineWidth : 2
		},
		label : { // 文字标签
			text : "香炉礁航道",
			font : '20pt monospace',
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,
			outlineWidth : 2,
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
			pixelOffset : new FreeDo.Cartesian2(0, -9)// 偏移量
		}
	});
	var label2 = viewer.entities.add({
		name : "军港码头",
        show:false,
		position : FreeDo.Cartesian3.fromDegrees(121.62016539515689, 38.931439734276786,1),
		point : { // 点
			pixelSize : 5,
			color : FreeDo.Color.RED,
			outlineColor : FreeDo.Color.WHITE,
			outlineWidth : 2
		},
		label : { // 文字标签
			text : "军港码头",
			font : '20pt monospace',
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,
			outlineWidth : 2,
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
			pixelOffset : new FreeDo.Cartesian2(0, -9)// 偏移量
		}
	});
	var label3 = viewer.entities.add({
		name : "航母制造区",
		show : false,
		position : FreeDo.Cartesian3.fromDegrees(121.61391282811357, 38.934625366453034,1),
		point : { // 点
			pixelSize : 5,
			color : FreeDo.Color.RED,
			outlineColor : FreeDo.Color.WHITE,
			outlineWidth : 2
		},
		label : { // 文字标签
			text : "航母制造区",
			font : '20pt monospace',
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,
			outlineWidth : 2,
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
			pixelOffset : new FreeDo.Cartesian2(0, -9)// 偏移量
		}
	});
	var label4 = viewer.entities.add({
		name : "梭渔湾南站",
		show : false,
		position : FreeDo.Cartesian3.fromDegrees(121.61347352273391, 38.953072774869725,1),
		point : { // 点
			pixelSize : 5,
			color : FreeDo.Color.RED,
			outlineColor : FreeDo.Color.WHITE,
			outlineWidth : 2
		},
		label : { // 文字标签
			text : "梭渔湾南站",
			font : '14pt monospace',
			style : FreeDo.LabelStyle.FILL_AND_OUTLINE,
			fillColor : FreeDo.Color.RED,
			outlineWidth : 2,
			verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
			pixelOffset : new FreeDo.Cartesian2(0, -9)// 偏移量
		}
	});
	var posinf1 = viewer.entities.add( {
	    name : '位置信息',
        show:false,
	    position : new FreeDo.Cartesian3.fromDegrees(121.61732581093031, 38.93832015839612,3),
	    label : { //文字标签
	        text : '位置信息\n——————\n北京十六号线\n二期(某河区)',
	        font : '13px sans-serif',
	        style : FreeDo.LabelStyle.FILL,
	        fillColor:FreeDo.Color.WHITE,
	        verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置
	        pixelOffset : new FreeDo.Cartesian2( 0, -9 ) ,  //偏移量
			backgroundColor:FreeDo.Color.BLACK.withAlpha(0.5),
			showBackground:true
	    },

	} );
	var posinf2 = viewer.entities.add( {
	    name : '掘进实时位置',
        show:false,
	    position : new FreeDo.Cartesian3.fromDegrees(121.61714484625392, 38.943851238986866,3),
	    label : { //文字标签
	        text : '掘进实时位置\n———————————————————\n经度：121.615833   纬度：38.9416654\n高度：240m         相对地面高度：120m',
	        font : '13px sans-serif',
	        style : FreeDo.LabelStyle.FILL,
	        fillColor:FreeDo.Color.WHITE,
	        verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置
	        pixelOffset : new FreeDo.Cartesian2( 0, -9 ) ,  //偏移量
			backgroundColor:FreeDo.Color.BLACK.withAlpha(0.5),
			showBackground:true
	    },

	} );
	var tuding = viewer.entities.add( {
	    name : '位置信息',
        show:false,
	    position : new FreeDo.Cartesian3.fromDegrees(121.61875369174274, 38.94000730931085,3),
        billboard:{
        	image:"../../static/page/dungou/gaikuang/img/tuding.png",
        	height:50,
        	width:50,
        	pixelOffset:new FreeDo.Cartesian2( 0, -15 )
        }

	});
	entityarray.push(label1);
	entityarray.push(label2);
	entityarray.push(label3);
	entityarray.push(label4);
	entityarray.push(posinf1);
	entityarray.push(posinf2);
	entityarray.push(tuding);
	return entityarray;
}