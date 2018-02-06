//存放盾构模型的数组
var dungouModels = [];
//高亮模型数量
var highListModels = 0;
//高亮颜色
var highlight = FreeDo.Color.YELLOW;
//半透颜色
var membranes = new FreeDo.Color(1, 1, 1, 0.2);
//原色
var origin = new FreeDo.Color(1, 1, 1, 1);
$(function () {
    //初始化地球
    FreedoApp.init("earth");
    var viewer = FreedoApp.viewers["earth"];
    viewer.imageryLayers.removeAll(false);
    viewer.scene.globe.baseColor =  viewer.scene.backgroundColor = Freedo.Color.fromCssColorString('#E6E6FA');
    viewer.scene.globe.show = false;
    viewer.scene.skyBox.show = false;
    viewer.scene.moon.show = false;
    viewer.scene.sun.show = false;


    //隐藏指北针
    $(".compassDiv").hide();
    //加载刀盘
    var daopan = viewer.scene.primitives.add(FreeDo.Model.fromGltf({
        id: "盾构机刀盘",
        url: "http://182.92.7.32:9000/ztly/dungoujiglb/daopan/daopan.glb",
        show: true, // default
        modelMatrix: FreeDoTool.getModelMatrix(113.6609628070344, 22.791190110267943, 10, 0, 0, 0, 1.8, 1.8, 1.8),
        allowPicking: true, // not pickable
        debugShowBoundingVolume: false, // default
        debugWireframe: false
    }))
    dungouModels.push(daopan);
    dungouModels.push(viewer.scene.primitives.add(FreeDo.Model.fromGltf({
        id: 1,
        url: "http://182.92.7.32:9000/ztly/dungoujiglb/daopian1/daoju_1.gltf",
        show: true, // default
        modelMatrix: FreeDoTool.getModelMatrix(113.6609628070344, 22.791190110267943, 10, 0, 0, 0, 1.8, 1.8, 1.8),
        allowPicking: true, // not pickable
        debugShowBoundingVolume: false, // default
        debugWireframe: false
    })))
    //加载盾构机刀片
    for (var i = 2; i < 6; i++) {
        dungouModels[i] = viewer.scene.primitives.add(FreeDo.Model.fromGltf({
            id: i,
            url: "http://182.92.7.32:9000/ztly/dungoujiglb/daopian" + i + "/daoju_" + i + ".glb",
            show: true, // default
            modelMatrix: FreeDoTool.getModelMatrix(113.6609628070344, 22.791190110267943, 10, 0, 0, 0, 1.8, 1.8, 1.8),
            allowPicking: true, // not pickable
            debugShowBoundingVolume: false, // default
            debugWireframe: false
        }))
    }
    //加载盾构机车身
    var cheshen = viewer.scene.primitives.add(FreeDo.Model.fromGltf({
        id: "盾构机车身",
        url: "http://182.92.7.32:9000/ztly/jingmodungou/DP-HB/DP-HB_jishen.gltf",
        show: true, // default
        modelMatrix: FreeDoTool.getModelMatrix(113.6629528070344, 22.791190110267943, 10, 180, 0, 0, 1.8, 1.8, 1.8),
        allowPicking: true, // not pickable
        debugShowBoundingVolume: false, // default
        debugWireframe: false
    }))
    dungouModels.push(cheshen);
    console.log(dungouModels)
    //高亮测试
    //dungouModels[3].color = highlight

    //相机定位
    viewer.camera.setView({
        destination: new FreeDo.Cartesian3(-2361253.5947712236,5388460.664476279,2455456.610708957),
        orientation: new FreeDo.HeadingPitchRoll(3.9860917599780463,-0.25215735048608234,6.2814420831405045)
    })
    //模型动画
/*    var readynum = 0;
    for (var i = 1; i < 10; i++) {
        FreeDo.when(dungouModels[i].readyPromise).then(function (model) {
            readynum = readynum + 1;
            if (readynum == 9) {

                var center = new FreeDo.Cartesian3.fromDegrees(113.6609628070344, 22.791190110267943, 10)
                var bs=new FreeDo.BoundingSphere(center, 10)
                console.log(viewer.camera.screenSpaceCameraController);
                viewer.scene.screenSpaceCameraController.bimTrackByBoundingSphere(bs)
                console.log(model.boundingSphere)
                for (var j = 1; j < dungouModels.length; j++) {
                    var obj = dungouModels[j];
                    obj.activeAnimations.addAll({
                        loop: FreeDo.ModelAnimationLoop.REPEAT,
                        //这个半速是相对于FreeDo的clock来说的
                        speedup: 0.5,
                        reverse: true
                    });
                }
            }
        });
    }*/
    click2DChange3D()
    getcamera()
})

//模型高亮
function modelHighlight(id) {
    //没有高亮的模型情况。
    if (highListModels == 0) {
        for (var i = 0; i < 7; i++) {
            if (i == id) {
                //该模型高亮
                if(dungouModels[i].color !== highlight){
                    dungouModels[i].color = highlight;
                    highListModels += 1;
                }
            } else {
                //其它模型半透
                dungouModels[i].color = membranes;
            }
        }
    } else {//有高亮模型的情况下，该模型高亮其他不变
        for (var i = 0; i < 7; i++) {
            if (i == id) {
                if(dungouModels[i].color !== highlight){
                    dungouModels[i].color = highlight;
                    highListModels += 1;
                }

            }
        }
    }
}

//模型恢复原色
function restoreColor(id) {
    for (var i = 0; i < 7; i++) {
        if (i == id) {
            //高亮的模型仅有一个的情况
            if(highListModels==1){
                if(id>0&&id<6){
                    var flag = intersect(bujians[id])
                    if(flag){
                        highListModels-=1;
                        //其它模型也恢复原色
                        for (var j = 0; j < 7; j++) {
                                dungouModels[j].color = origin;
                        }
                        break;
                    }
                    }

            }else{//高亮模型不唯一的情况
                //仅使该模型半透
                var flag = intersect(bujians[id])
                if(flag){
                    highListModels-=1;
                    dungouModels[i].color = membranes;
                }
            }
        }
    }
}

//得到相机位置
function getcamera() {
    var screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(FreedoApp.viewers["earth"].canvas);
    screenSpaceEventHandler.setInputAction(function (movement) {
        console.log(FreedoApp.viewers["earth"].camera.position)
        console.log(FreedoApp.viewers["earth"].camera.heading + "," + FreedoApp.viewers["earth"].camera.pitch + "," + FreedoApp.viewers["earth"].camera.roll)
    }, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}
var bujians = [];
function click2DChange3D() {
    /**
     * 四个刀片
     */
    for (var i = 1; i < 5; i++) {
        bujians[i]=[];
    }
    for (let i = 0; i < 4; i++) {
        bujians[3].push($("#part" + i + " .right-span"))
/*        $(".span-box span").each(function () {
            bujians[3].push($(this))
        })*/


        $("#part" + i + " .right-span").click(function () {
            if($(this).attr("data-mao")=="false"){
                modelHighlight(3);
                $(this).attr("data-mao","true");
            }else{
                restoreColor(3);
                $(this).attr("data-mao","false");
            }
        })
        $("#part" + i + " .left-span").each(function () {
            bujians[3].push($(this));
        })
        $("#part" + i + " .left-span").click(function () {
            if($(this).attr("data-mao")=="false"){
                modelHighlight(3);
                $(this).attr("data-mao","true");
            }else{
                restoreColor(3);
                $(this).attr("data-mao","false");
            }
        })
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            bujians[3].push($("#part" + i + " .right-span" + j))
            $("#part" + i + " .right-span" + j).click(function () {
                if($(this).attr("data-mao")=="false"){
                    modelHighlight(3);
                    $(this).attr("data-mao","true");
                }else{
                    restoreColor(3);
                    $(this).attr("data-mao","false");
                }
            })
        }
    }
    /**
     * 两个棍
     */
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 8; j++) {
            if (i == 0 || i == 2) {
                bujians[1].push($("#part" + i + " .middle-span" + j))
                $("#part" + i + " .middle-span" + j).click(function () {
                    if($(this).attr("data-mao")=="false"){
                        modelHighlight(1);
                        $(this).attr("data-mao","true");
                    }else{
                        restoreColor(1);
                        $(this).attr("data-mao","false");
                    }
                })
            } else {
                bujians[2].push($("#part" + i + " .middle-span" + j))
                $("#part" + i + " .middle-span" + j).click(function () {
                    if($(this).attr("data-mao")=="false"){
                        modelHighlight(2);
                        $(this).attr("data-mao","true");
                    }else{
                        restoreColor(2);
                        $(this).attr("data-mao","false");
                    }
                })
            }
        }
    }
    bujians[1].push($(".center-span"))
    $(".center-span").click(function(){
        if($(this).attr("data-mao")=="false"){
            modelHighlight(1);
            $(this).attr("data-mao","true");
        }else{
            restoreColor(1);
            $(this).attr("data-mao","false");
        }
    })
    /**
     * 四个角
     */
    $(".span-box span").each(function () {
        bujians[4].push($(this));
    })
    $(".span-box span").click(function () {
        console.log($(this).attr("data-mao"))
        if($(this).attr("data-mao")=="false"){
            modelHighlight(4);
            $(this).attr("data-mao","true");
        }else{
            restoreColor(4);
            $(this).attr("data-mao","false");
        }
    })
    console.log(bujians);
}

/**
 *
 * @param JQueryObjArr
 */
function intersect(JQueryObjArr) {
    var sum = 0
    for (var i = 0; i < JQueryObjArr.length; i++) {
        if(JQueryObjArr[i].attr("data-mao")=="true") {
            sum+=1;
            if(sum>1){
                break;
            }
        }
    }
    if(sum==1){
        return true;
    }else{
        return false;
    }
}
