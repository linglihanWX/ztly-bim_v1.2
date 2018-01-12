//存放盾构模型的数组
var dungouModels = [];
$(function () {
    //初始化地球
    FreedoApp.init("earth");
    var viewer = FreedoApp.viewers["earth"];
    //隐藏指北针
    $(".compassDiv").hide();
    //隐藏地球
    viewer.scene.globe.show=false;
    //加载盾构模型
    for (var i = 1; i < 9; i++) {
    dungouModels[i]= viewer.scene.primitives.add(FreeDo.Model.fromGltf({
            id : "盾构机"+i,
            url : "http://182.92.7.32:9000/ztly/glb/"+i+"/"+i+".glb",
            show : true, // default
            modelMatrix : FreeDoTool.getModelMatrix(113.6609628070344, 22.791190110267943, 10, 0, 0, 0, 1.8, 1.8, 1.8),
            allowPicking : true, // not pickable
            debugShowBoundingVolume : false, // default
            debugWireframe : false
        }))
    }
    var cheshen =viewer.scene.primitives.add(FreeDo.Model.fromGltf({
        id : "盾构机车身",
        url : "http://182.92.7.32:9000/ztly/glb/cheshen.glb",
        show : true, // default
        modelMatrix : FreeDoTool.getModelMatrix(113.6609628070344, 22.791190110267943, 10, 0, 0, 0, 1.8, 1.8, 1.8),
        allowPicking : true, // not pickable
        debugShowBoundingVolume : false, // default
        debugWireframe : false
    }))
    dungouModels.push(cheshen);
    console.log(dungouModels)
    //相机定位
    viewer.camera.setView({
        destination:new FreeDo.Cartesian3( -2361058.6072171926,  5388551.638713744,  2455422.8777892664),
        orientation:new FreeDo.HeadingPitchRoll(4.696915930562629,-0.1831326491911487,6.28059904781921)
        })
    //模型动画
    var readynum = 0;
    for (var i = 1; i < 9; i++) {
        FreeDo.when(dungouModels[i].readyPromise).then(function(model) {
            readynum=readynum+1;
            if(readynum==8){
                for (var j = 1; j < dungouModels.length; j++) {
                    var obj = dungouModels[j];
                    obj.activeAnimations.addAll({
                        loop : FreeDo.ModelAnimationLoop.REPEAT,
                        //这个半速是相对于FreeDo的clock来说的
                        speedup : 0.5,
                        reverse : true
                    });
                }
            }
        });
    }
    //模型高亮测试
    modelHighlight(3);
    //getcamera();
})

//模型变色
function modelHighlight(id){
    if(id==0){
        for (var i = 1; i < 10; i++) {
            dungouModels[i].color = new FreeDo.Color(1,1,1,1);
        }
    }else {
    for (var i = 1; i < 10; i++) {
        if(i==id){
        dungouModels[id].color = FreeDo.Color.RED
        }else{
        dungouModels[i].color = new FreeDo.Color(1,1,1,0.2);
        }
    }
    }
}
//得到相机位置
function getcamera() {
    var screenSpaceEventHandler = new FreeDo.ScreenSpaceEventHandler(FreedoApp.viewers["earth"].canvas);
    screenSpaceEventHandler.setInputAction(function(movement){
        console.log(FreedoApp.viewers["earth"].camera.position)
		console.log(FreedoApp.viewers["earth"].camera.heading+","+FreedoApp.viewers["earth"].camera.pitch+","+FreedoApp.viewers["earth"].camera.roll)
    }, FreeDo.ScreenSpaceEventType.LEFT_CLICK);
}