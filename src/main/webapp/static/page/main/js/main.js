$(function () {
    var h1 = $(document).height();
    var h2 = $(".navbar").height();
    var h3 = $("footer").height();
    $("#aaa").height(h1-h2-h3-20);
    $("footer").show();
    
    /* ---->>>>>>>>>>>>>> 2018-2-27王鑫修改项目选择地球的div窗口布局*/
    initEarth();
    /* ----<<<<<<<<<<<<<<<<< 2018-2-27王鑫修改项目选择地球的div窗口布局*/
});

/* ---->>>>>>>>>>>>>> 2018-2-27王鑫修改项目选择地球的div窗口布局*/
function initEarth() {
	 FreedoApp.init("cx");
	    $.ajax({
			url : "./mainGetPrjData",
			type : "get",
			// async:false,
			dateType : "json",
			success : function(data) {// 获得后台查询数组数据
				console.log(data);
				for (var i = 0; i < data.length; i++) {
					addPrjEntity(data[i].id,data[i].positionLon,data[i].positionLat,data[i].name);
				}
			},
			error : function() {
				console.log("数据加载失败！请检查数据链接是否正确");
			}
		});
	    var screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(FreedoApp.viewers["cx"].canvas);
	    screenSpaceEventHandler.setInputAction(function (movement) {
	    	var viewer = FreedoApp.viewers["cx"];
	    	var picked = viewer.scene.pick(movement.position);
	    	if(picked){
	    		if(picked.id){
	    			//window.location.href='./keyan/toGaikuang?projectid='+picked.id.id;
	    			window.location.href='./ProSystem/dungou/toGaikuang?projectid='+picked.id.id;
	    		}
	    	}
	    }, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
	    FreedoApp.viewers["cx"].camera.setView({
	        destination : Freedo.Cartesian3.fromDegrees(110.82638325193702, 30.638479824475862, 13093551.638748227)
	    });
}
function addPrjEntity(id,lon,lat,des) {
	var viewer = FreedoApp.viewers["cx"];
	var citizensBankPark = viewer.entities.add( {  
			id:id,
			name: id,
	        show: true,
	        position: FreeDo.Cartesian3.fromDegrees(lon, lat, 10),
	        point: { // 点
	            pixelSize: 5,
	            color: FreeDo.Color.RED,
	            outlineColor: FreeDo.Color.WHITE,
	            outlineWidth: 2,
	            //distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
	        },
	        label: { // 文字标签
	            text: des,
	            font: '12pt monospace',
	            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
	            outlineWidth: 2,
	            backgroundColor: FreeDo.Color.DARKBLUE,
	            showBackground: true,
	            fillColor: FreeDo.Color.YELLOW,
	            verticalOrigin: FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
	            pixelOffset: new FreeDo.Cartesian2(0, -9),// 偏移量
	            //distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
	        }
	} );
}
function dayinshuju() {
	 var screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(FreedoApp.viewers["cx"].canvas);
	    screenSpaceEventHandler.setInputAction(function (movement) {
	    	var viewer = FreedoApp.viewers["cx"];
	    	//打印相机位置（世界坐标）
	        console.log(viewer.camera.position.x+","+viewer.camera.position.y+","+viewer.camera.position.z)

	        var x = viewer.camera.position.x
	        var y = viewer.camera.position.y
	        var z = viewer.camera.position.z
	        var cartesian = new FreeDo.Cartesian3(x,y,z);
	       /* var pick = new FreeDo.Cartesian2(movement.position.x,movement.position.y);
	        var cartesian = viewer.scene.globe.pick(viewer.camera.getPickRay(pick), viewer.scene);*/
	        var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
	        var point=[ cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180,cartographic.height];

	        console.log(point)
	        //打印相机姿态
	        var heading = viewer.camera.heading/Math.PI * 180
	        var pitch = viewer.camera.pitch/ Math.PI * 180
	        var roll = viewer.camera.roll/ Math.PI * 180
	        console.log(heading+","+pitch+","+roll)

	    }, FreeDo.ScreenSpaceEventType.RIGHT_CLICK);
}
/* ----<<<<<<<<<<<<<<<<< 2018-2-27王鑫修改项目选择地球的div窗口布局*/