//存放盾构模型的数组
var dungouModels = [];
//高亮模型数量
var highListModels = 0;
//高亮颜色
var highlight = FreeDo.Color.RED;
//半透颜色
var membranes = new FreeDo.Color(1, 1, 1, 0.2);
//原色
var origin = new FreeDo.Color(1, 1, 1, 1);
$(function () {
    //初始化地球
    FreedoApp.init("earth");
    var viewer = FreedoApp.viewers["earth"];
    viewer.scene.skyBox = new Freedo.SkyBox({
        sources : {
            positiveX : '../../static/page/dungou/daopanjiance/img/skybox.png',
            negativeX : '../../static/page/dungou/daopanjiance/img/skybox.png',
            positiveY : '../../static/page/dungou/daopanjiance/img/skybox.png',
            negativeY : '../../static/page/dungou/daopanjiance/img/skybox.png',
            positiveZ : '../../static/page/dungou/daopanjiance/img/skybox.png',
            negativeZ : '../../static/page/dungou/daopanjiance/img/skybox.png'
        }
    });

    //隐藏指北针
    $(".compassDiv").hide();
    //隐藏地球
    viewer.scene.globe.show = false;
    //加载盾构模型
    for (var i = 1; i < 10; i++) {
        dungouModels[i] = viewer.scene.primitives.add(FreeDo.Model.fromGltf({
            id: i,
            url: "http://182.92.7.32:9000/ztly/glb/" + i + "/" + i + ".glb",
            show: true, // default
            modelMatrix: FreeDoTool.getModelMatrix(113.6609628070344, 22.791190110267943, 10, 0, 0, 0, 1.8, 1.8, 1.8),
            allowPicking: true, // not pickable
            debugShowBoundingVolume: false, // default
            debugWireframe: false
        }))
    }
    var cheshen = viewer.scene.primitives.add(FreeDo.Model.fromGltf({
        id: "盾构机车身",
        url: "http://182.92.7.32:9000/ztly/glb/cheshen.glb",
        show: true, // default
        modelMatrix: FreeDoTool.getModelMatrix(113.6609628070344, 22.791190110267943, 10, 0, 0, 0, 1.8, 1.8, 1.8),
        allowPicking: true, // not pickable
        debugShowBoundingVolume: false, // default
        debugWireframe: false
    }))
    dungouModels.push(cheshen);
    console.log(dungouModels)
    //相机定位
    viewer.camera.setView({
        destination: new FreeDo.Cartesian3(-2361061.773916838,5388540.165346061,2455448.1596130435),
        orientation: new FreeDo.HeadingPitchRoll(3.9860794109915956,-0.2521178744248991,6.281444640249074)
    })
    //模型动画
    var readynum = 0;
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
    }
    click2DChange3D()
    getcamera()
})

//模型高亮
function modelHighlight(id) {
    //没有高亮的模型情况。
    if (highListModels == 0) {
        for (var i = 1; i < 11; i++) {
            if (i == id) {
                //该模型高亮
                dungouModels[i].color = highlight;
                highListModels += 1;
            } else {
                //其它模型半透
                dungouModels[i].color = membranes;
            }
        }
    } else {//有高亮模型的情况下，该模型高亮其他不变
        for (var i = 1; i < 11; i++) {
            if (i == id) {
                dungouModels[i].color = highlight;
                highListModels += 1;
            }
        }
    }
}

//模型恢复原色
function restoreColor(id) {
    for (var i = 0; i < 11; i++) {
        if (i == id) {
            //高亮的模型仅有一个的情况
            if(highListModels==1){
            //该模型恢复原色
            dungouModels[i].color = origin;
                highListModels-=1;
            //其它模型也恢复原色
                for (var j = 1; j < 11; j++) {
                    if(j!=i){
                        dungouModels[j].color = origin;
                    }
                }
                break;
            }else{//高亮模型不唯一的情况
                //仅使该模型半透
                dungouModels[i].color = membranes;
                highListModels-=1;
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

function click2DChange3D() {
    for (let i = 0; i < 4; i++) {
        $("#part" + i + " .right-span").click(function () {
            if($(this).attr("data-mao")=="false"){
                modelHighlight(i + 3);
                $(this).attr("data-mao","true");
            }else{
                restoreColor(i + 3);
                $(this).attr("data-mao","false");
            }
        })
        $("#part" + i + " .left-span").click(function () {
            if($(this).attr("data-mao")=="false"){
                modelHighlight(i + 3);
                $(this).attr("data-mao","true");
            }else{
                restoreColor(i + 3);
                $(this).attr("data-mao","false");
            }
        })
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            $("#part" + i + " .right-span" + j).click(function () {
                if($(this).attr("data-mao")=="false"){
                    modelHighlight(i + 3);
                    $(this).attr("data-mao","true");
                }else{
                    restoreColor(i + 3);
                    $(this).attr("data-mao","false");
                }
            })
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 7; j++) {
            if (i == 0 || i == 2) {
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
    $(".span-box span").click(function () {
        console.log($(this).attr("data-mao"))
        if($(this).attr("data-mao")=="false"){
            modelHighlight(7);
            $(this).attr("data-mao","true");
        }else{
            restoreColor(7);
            $(this).attr("data-mao","false");
        }
    })
}