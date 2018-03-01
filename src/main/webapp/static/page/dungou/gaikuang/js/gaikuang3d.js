$(function () {
});
var dungouhuanEntity=[];
//设置点击盾构后的页面跳转
function setLeftClickEvent(viewer) {
	 var screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	    screenSpaceEventHandler.setInputAction(function (movement) {
			var picked = viewer.scene.pick(movement.position);
			if(picked){
				if(picked.id){
					if(picked.id.isDungouji){
						window.location.href='./toJiankong';
					}
				}
			}
			console.log(picked);
	    }, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}

//设置移动到盾构机图标上后的标牌显示效果
function setMouseMoveEvent(viewer) {
	 var screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(viewer.canvas);
	    screenSpaceEventHandler.setInputAction(function (movement) {
			var picked = viewer.scene.pick(movement.endPosition);
			if(picked){
				if(picked.id){
					if(picked.id.isDungouji){
						
						if($("#zzz").css("display") == "block"){
							$("#zzz").css({
								"left":movement.endPosition.x + 10,
								"top":movement.endPosition.y + 10
							})
						}else{
							$("#earth").append("<div id='zzz'>大连地铁5号线大盾构区间<br>"+picked.id.freedoDes+"</div>");
							$("#zzz").css({
								"position":"absolute",
								"left":movement.endPosition.x + 10,
								"top":movement.endPosition.y + 10,
								"zIndex":99999,
								"background":"#fff",
								"border":"1px solid #e8e8e8"
							})
						}
						
						/*console.log($("#zzz").css("display"))
						console.log("移动到了盾构机图标上")*/
					}else{
						if($("#zzz").css("display") == "block"){
							$("#zzz").remove();
						}
						
					}
				}
			}
	    }, FreeDo.ScreenSpaceEventType.MOUSE_MOVE);
}

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

    /*entityarray.push(label1);
    entityarray.push(label2);
    entityarray.push(label3);
    entityarray.push(label4);
    entityarray.push(label5);
    entityarray.push(label6);
    entityarray.push(label7);
    entityarray.push(posinf1);
    entityarray.push(posinf2);
    entityarray.push(tuding);*/
    addDungoujiTubiaoEntity();
    addHuochezhanEntity();
    addWeixianyuanEntity();
    addDungoujisuidaoEntity();
    addDimianjianzhuPmodel();
    return entityarray;
}

//添加盾构机图标
function addDungoujiTubiaoEntity() {
	var viewer = FreedoApp.viewers["earth"];
	var DataArray = [
		{lon:121.61970220039244,lat:38.931296310449405,alt:30,img:"dungoujibeijingG.png",enable:false,freedoDes:"0506环/1606环;当前进度40%;正在穿越【军港码头】风险源"},
		{lon:121.61802811287265,lat:38.938963027673424,alt:3,img:"dungoujibeijingB.png",enable:true,freedoDes:"0536环/1606环;当前进度43%"}
	]
	for (var i = 0; i < DataArray.length; i++) {
		var tuding = viewer.entities.add({
	        name: '位置信息',
	        show: true,
	        freedoDes : DataArray[i].freedoDes,
	        isDungouji : true,
	        position: new FreeDo.Cartesian3.fromDegrees(DataArray[i].lon, DataArray[i].lat, DataArray[i].alt),
	        point: { // 点
	            pixelSize: 5,
	            color: FreeDo.Color.RED,
	            outlineColor: FreeDo.Color.WHITE,
	            outlineWidth: 2,
	            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
	        },
	        billboard: {
	            //image: "../../static/page/dungou/gaikuang/img/tuding.png",
	            image: "../../static/page/dungou/gaikuang/img/dungoujidaopan.png",
	            height: 40,
	            width: 40,
	            pixelOffset: new FreeDo.Cartesian2(0, -40),
	            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
	        }

	    });
	    viewer.entities.add({
	        name: '位置信息',
	        show: true,
	        freedoDes : DataArray[i].freedoDes,
	        isDungouji : true,
	        position: new FreeDo.Cartesian3.fromDegrees(DataArray[i].lon, DataArray[i].lat, DataArray[i].alt),
	        billboard: {
	            //image: "../../static/page/dungou/gaikuang/img/tuding.png",
	            image: "../../static/page/dungou/gaikuang/img/"+DataArray[i].img,
	            height: 70,
	            width: 50,
	            pixelOffset: new FreeDo.Cartesian2(0, -25),
	            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
	        }

	    });
	    if(!DataArray[i].enable){
	    	tuding.addProperty("imageClock");
	    	// 用计时器控制台风图标的转动
	    	var second=0;
	    	tuding.imageClock=setInterval(function () {
	    		if(tuding!=null){
	    			second+=0.05;
	    			tuding.billboard.rotation=second;
	    			if(second>10){
	    				second=0;
	    			}
	    		}
	    	}, 20);
	    }
	}
}

//添加火车站实体
function addHuochezhanEntity() {
	var viewer = FreedoApp.viewers["earth"];
	var DataAyyay = [
		{lon:121.61392275532712,lat:38.95323841740604,alt:50,des:"梭渔湾南站"},
		{lon:121.62378599839502,lat:38.922779514349656,alt:50,des:"火车站站"}
	]
	for (var i = 0; i < DataAyyay.length; i++) {
		viewer.entities.add({
			name: DataAyyay[i].des,
			show: true,
			position: FreeDo.Cartesian3.fromDegrees(DataAyyay[i].lon, DataAyyay[i].lat, DataAyyay[i].alt),
			label: { // 文字标签
				text: DataAyyay[i].des,
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
	}
}

//添加风险源实体
function addWeixianyuanEntity() {
	var viewer = FreedoApp.viewers["earth"];
	var DataArray = [
			{lon:121.62224889978843,lat:38.94270512602886,alt:50,des:"风险源：香炉礁航道"},
			{lon:121.61997619924065, lat:38.933427729468725,alt:50,des:"风险源：军港码头"},
			{lon:121.61391282811357,lat:38.934625366453034,alt:50,des:"风险源： 航母制造区"},
			{lon:121.61497425831845,lat:38.92570034025223,alt:50,des:"风险源：疏港货运铁路"},
			{lon:121.62682095605028,lat:38.92107920361492,alt:50,des:"风险源： 火车站"},
			{lon:121.61130812248769,lat:38.952837944195025,alt:50,des:"风险源： 居民住宅区"},
			{lon:121.62993526171284,lat:38.92870917585388,alt:50,des:"风险源： 居民住宅区"},
			{lon:121.6168459694273,lat:38.9490763774809,alt:50,des:"风险源： 海底溶洞"},
		]
	for (var i = 0; i < DataArray.length; i++) {
		viewer.entities.add({
			name: "风险源"+i,
			show: true,
			position: FreeDo.Cartesian3.fromDegrees(DataArray[i].lon, DataArray[i].lat, DataArray[i].alt),
			point: { // 点
				pixelSize: 5,
				color: FreeDo.Color.RED,
				outlineColor: FreeDo.Color.WHITE,
				outlineWidth: 2,
				distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
			},
			label: { // 文字标签
				text: DataArray[i].des,
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
	}
}

//添加盾构机隧道线实体
function addDungoujisuidaoEntity() {
	var viewer = FreedoApp.viewers["earth"];
	for (var i = 0; i < dungouhuanEntity.length; i++) {
		FreedoApp.viewers["earth"].entities.remove(dungouhuanEntity[i]);
	}
	dungouhuanEntity=[];
	var DataArray = [
		{
			id:"1",
			pos:[
		    	121.61244717632981, 38.955771730695204,
		        121.61419971201384, 38.952850605114364,
		        121.61488866358799, 38.95166932433065,
		        121.61582974911644, 38.95001415591204,
		        121.61778895588276, 38.940340985404355
		    ],
		    color:FreeDo.Color.LIGHTYELLOW
		},{
			id:"2",
			pos:[
				121.61778895588276, 38.940340985404355,
				121.61803402054308,38.93896078953926
				],
		    color:FreeDo.Color.GREEN
		},{
			id:"3",
			pos:[
            	121.61803402054308,38.93896078953926,
            	121.61969099020284, 38.93128693628762
            ],
		    color:FreeDo.Color.LIGHTSKYBLUE
		},{
			id:"4",
			pos:[
            	121.61969099020284, 38.93128693628762,
            	121.62002566548108, 38.929693477461875,
            ],
		    color:FreeDo.Color.GREEN
		},{
			id:"5",
			pos:[
		    	121.62002566548108, 38.929693477461875,
		    	121.62160412655557, 38.92595507253365,
		    	121.62492635481362, 38.921361564670754
		    ],
		    color:FreeDo.Color.LIGHTYELLOW
		},
		
	]
	for (var j = 0; j < DataArray.length; j++) {
		for(var i = 0; i<=DataArray[j].pos.length-4;i+=2){
	      var DungouEntity = viewer.entities.add({
	            name: DataArray[j].id,
	            polyline: {
	                positions: new Freedo.Cartesian3.fromDegreesArray(
	                    [
	                    	DataArray[j].pos[i],DataArray[j].pos[i+1],
	                    	DataArray[j].pos[i+2],DataArray[j].pos[i+3]
	                    ]),
	                width: 18.75,
	                translucent :true,
	                material:  new FreeDo.PolylineDashMaterialProperty({
	                    color : DataArray[j].color,
	                    gapColor : FreeDo.Color.BLACK,
	                    dashLength : 10.0,
	                    dashPattern: parseInt("1111111111111110", 2)
	                }),
	                distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
	            }
	        });
	    	dungouhuanEntity.push(DungouEntity);
	    }
	}
}

//
function changeanquanzhuangtaiEntity() {
	for (var i = 0; i < dungouhuanEntity.length; i++) {
		FreedoApp.viewers["earth"].entities.remove(dungouhuanEntity[i]);
	}
	dungouhuanEntity=[];
	var DataArray = [
		121.61244717632981, 38.955771730695204,
        121.61419971201384, 38.952850605114364,
        121.61488866358799, 38.95166932433065,
        121.61582974911644, 38.95001415591204,
        121.61778895588276, 38.940340985404355,
        121.61778895588276, 38.940340985404355,
		121.61803402054308,38.93896078953926,
		121.61803402054308,38.93896078953926,
    	121.61969099020284, 38.93128693628762,
    	121.61969099020284, 38.93128693628762,
    	121.62002566548108, 38.929693477461875,
    	121.62002566548108, 38.929693477461875,
    	121.62160412655557, 38.92595507253365,
    	121.62492635481362, 38.921361564670754
	]
	var DungouEntity = FreedoApp.viewers["earth"].entities.add({
        name: "dungousuidao",
        polyline: {
            positions: new Freedo.Cartesian3.fromDegreesArray(DataArray),
            width: 18.75,
            translucent :true,
            material:   new Freedo.PolylineDashMaterialProperty({
                color : Freedo.Color.GREEN,
                dashLength: 36.0
            }),
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        }
    });
	dungouhuanEntity.push(DungouEntity);
}

//施工功法对应实体
function changeshigonggongfaEntity() {
	for (var i = 0; i < dungouhuanEntity.length; i++) {
		FreedoApp.viewers["earth"].entities.remove(dungouhuanEntity[i]);
	}
	dungouhuanEntity=[];
	var DataArray = [
		121.61244717632981, 38.955771730695204,
		121.61419971201384, 38.952850605114364,
		121.61488866358799, 38.95166932433065,
		121.61582974911644, 38.95001415591204,
		121.61778895588276, 38.940340985404355,
		121.61778895588276, 38.940340985404355,
		121.61803402054308,38.93896078953926,
		121.61803402054308,38.93896078953926,
		121.61969099020284, 38.93128693628762,
		121.61969099020284, 38.93128693628762,
		121.62002566548108, 38.929693477461875,
		121.62002566548108, 38.929693477461875,
		121.62160412655557, 38.92595507253365,
		121.62492635481362, 38.921361564670754
		]
	var DungouEntity = FreedoApp.viewers["earth"].entities.add({
		name: "dungousuidao",
		polyline: {
			positions: new Freedo.Cartesian3.fromDegreesArray(DataArray),
			width: 18.75,
			translucent :true,
			material:   new Freedo.PolylineDashMaterialProperty({
				color : Freedo.Color.BLUE,
				dashLength: 36.0
			}),
			distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
		}
	});
	dungouhuanEntity.push(DungouEntity);
}

//添加地面建筑模型
function addDimianjianzhuPmodel() {
	var viewer = FreedoApp.viewers["earth"];
	var urlArray = [
		"http://182.92.7.32:9000/ztly/daliandimianjianzhu/dalian_chuan",
		"http://182.92.7.32:9000/ztly/daliandimianjianzhu/dalian_jianzhu01",
		"http://182.92.7.32:9000/ztly/daliandimianjianzhu/dalian_jianzhu02"
	]
	for (var i = 0; i < urlArray.length; i++) {
		viewer.scene.primitives.add(new FreeDo.FreedoPModelset({
			url: urlArray[i]
		}));
	}
}
