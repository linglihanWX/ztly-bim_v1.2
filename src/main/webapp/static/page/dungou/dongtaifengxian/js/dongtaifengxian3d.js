$(function () {
    //初始化地球
    FreedoApp.init("earth");
    getPoints(FreedoApp.viewers["earth"])
    var array = initEntities(FreedoApp.viewers["earth"])

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
                    121.62024154952725, 38.93020774283203,
                    121.62079840051048, 38.92833355870257,
                    121.6211754421881, 38.927660591537894,
                    121.62203768455467, 38.92672914057143,
                    121.62259337661449, 38.92564313453812,
                    121.62330218345369, 38.92434019585824,
                    121.62374838697704, 38.92305321084292,
                    121.62404269310349, 38.92168051864768,
                ]),
            width: 5,
            material: FreeDo.Color.RED,
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
        position: FreeDo.Cartesian3.fromDegrees(121.62224889978843, 38.94270512602886, 1),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "香炉礁航道",
            font: '20pt monospace',
            style: FreeDo.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            backgroundColor: FreeDo.Color.MEDIUMBLUE,
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
        position: FreeDo.Cartesian3.fromDegrees(121.61997619924065, 38.933427729468725, 1),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "军港码头",
            font: '20pt monospace',
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
    var label3 = viewer.entities.add({
        name: "航母制造区",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.61391282811357, 38.934625366453034, 1),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "航母制造区",
            font: '20pt monospace',
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
    var label4 = viewer.entities.add({
        name: "疏港货运铁路",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.61497425831845, 38.92570034025223, 1),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "疏港货运铁路",
            font: '20pt monospace',
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
    var label5 = viewer.entities.add({
        name: "中间风井（接收）",
        show: true,
        position: FreeDo.Cartesian3.fromDegrees(121.6207361838563, 38.92834465015816, 1),
        point: { // 点
            pixelSize: 5,
            color: FreeDo.Color.RED,
            outlineColor: FreeDo.Color.WHITE,
            outlineWidth: 2,
            distanceDisplayCondition: new FreeDo.DistanceDisplayCondition(0.0, 10000)
        },
        label: { // 文字标签
            text: "中间风井（接收）",
            font: '20pt monospace',
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
        position: FreeDo.Cartesian3.fromDegrees(121.61392275532712, 38.95323841740604, 1),
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
        position: FreeDo.Cartesian3.fromDegrees(121.62378599839502, 38.922779514349656, 1),
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
            text: '位置信息\n——————\n北京十六号线\n二期(某河区)',
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