/**
 * @author fanPeng
 * @Date   2018年2月1日上午11:01:08
 * @describe 飞渡核心控制类
 */

$(function(){
	
	//初始化框架
    window.FreedoOne=new FdFramework();
	
    //初始化地球
    FreedoOne.initFramework("freedo-earth-one");
    
    //加载指北针
    new Compass(FreedoOne.viewer);
    
    //隐藏cesium原生界面
    FreedoOne.viewer.bottomContainer.style.display = "none";
    FreedoOne.viewer._toolbar.style.display = "none";
	
	//加载天地图(覆盖3号卫星)
	tianDiTu=FreedoOne.FdViewerManager.addImageryProvider({
	    url: "http://t0.tianditu.com/cia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg",
	    layer: "cia",
	    style: "default",
	    format: "tiles",
	    tileMatrixSetID: "c",
	    maximumLevel: 18,
	    credit: new Freedo.Credit("全球影像中文注记服务"),
	    tilingScheme: new Freedo.GeographicTilingScheme(),
	    tileMatrixLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19']
	});
	
	//初始化按钮事件
	ButtonClick.init(FreedoOne.viewer);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//debug原生模式
	//new Freedo.Viewer("freedo-earth-one");
	
	//debug  几个瞬时脚本
	/*var action1 = new FDPAction_Camera_1( FreedoOne.viewer.scene.camera, 0, 119, 40, 100000, 0, -90, 0, 1000 );
	var action2 = new FDPAction_Camera_1( FreedoOne.viewer.scene.camera, 3010, 112, 45, 100, 0, -90, 0, 1000 );
	var action3 = new FDPAction_Camera_1( FreedoOne.viewer.scene.camera, 6010, 116, 34, 1000, 0, -90, 0, 1000 );
	FDPScript.AddAction( action1 );
	FDPScript.AddAction( action2 );
	FDPScript.AddAction( action3 );*/

	//debug 几个轨迹脚本
	//添加数据
   /* var route1 = new Array();
	route1.push(new FDPCameraRoute(2000,118,45,200000,0,-90,0));
	route1.push(new FDPCameraRoute(8000,116,45,200000,0,-90,0));
	var action4 = new FDPAction_Camera_2(FreedoOne.viewer.scene.camera,route1);
	FDPScript.AddAction(action4);*/	
	
	//debug  创建一组图片
	/*var img0 = new FDFAction_SpacePic_Create(FreedoOne.viewer,2000	,123,'./img/debug/debug.jpg',200,200,119,40,0,0,0,Freedo.Color.AQUA,true);
	var img1 = new FDFAction_SpacePic_Create(FreedoOne.viewer,4000	,456,'./img/debug/debug.jpg',200,500,119,40,0,0,0,Freedo.Color.BROWN,true);
	FDPScript.AddAction( img0 );
	FDPScript.AddAction( img1 );*/
	
	//debugger  设置图片一组图片的显隐
	/*var visible1 = new FDFAction_SpacePic_Visible(FreedoOne.viewer,6000,123,false);
	var visible2 = new FDFAction_SpacePic_Visible(FreedoOne.viewer,10000,456,false);
	FDPScript.AddAction( visible1 );
	FDPScript.AddAction( visible2 );*/
	
	//debug 设置三维图片闪烁
/*	var flicker0 = new FDFAction_SpacePic_flicker(FreedoOne.viewer,123,4000,8000,100,true);
	FDPScript.AddAction( flicker0 );*/
	
	
	
	
	
	//debug  创建一个容器
	var imgContaine0 = new FDFAction_SpaceImg_Init(Img,1000, 'app', 1740, 586);
	FDPScript.AddAction( imgContaine0 );
	
	//debug  增加一组图片
	var addImg0 = new FDFAction_SpaceImg_AddImg(Img,2000,'imgBg', './img/debug/debug.jpg', 0, 0, 1740, 100, 1);
	var addImg1 = new FDFAction_SpaceImg_AddImg(Img,3000,'imgBg1', './img/debug/debug.jpg', 0, 100, 1740, 446, 2);
	var addImg2 = new FDFAction_SpaceImg_AddImg(Img,4000,'imgBg2', './img/debug/debug.jpg', 0, 546, 1740, 40, 2);
	FDPScript.AddAction( addImg0 );
	FDPScript.AddAction( addImg1 );
	FDPScript.AddAction( addImg2 );
	
	//debug 裁剪图片
	var clip0 = new FDFAction_SpaceImg_clipImg(Img ,5000,'imgBg', 10, 10, 23, 200);
	FDPScript.AddAction( clip0 );
	
	//debug  高亮图片
	var heightLightImg0 = new FDFAction_SpaceImg_heightLightImg(Img ,6000,'imgBg1');
	FDPScript.AddAction( heightLightImg0 );
	
	//debug 隐藏图片
	var hideImg0 = new FDFAction_SpaceImg_HideImg(Img ,7000,'imgBg');
	FDPScript.AddAction( hideImg0 );
	
	//debug 显示图片
	var showImg0 = new FDFAction_SpaceImg_ShowImg(Img ,9000,'imgBg');
	FDPScript.AddAction( showImg0 );
	
	//debug 控制图片的位置
	var postition0 = new FDFAction_SpaceImg_positionPose(Img ,10000,'imgBg', 100, 0, 10);
	FDPScript.AddAction( postition0 );
	
	//debugger 控制图片的前后顺序
	var changeZindex0 = new FDFAction_SpaceImg_changeZIndex(Img ,11000,'imgBg',7);
	FDPScript.AddAction( changeZindex0 );
	
	//debug 取消高亮图片
	var removeHeightLightImg0 = new FDFAction_SpaceImg_RemoveHeightLightImg( Img ,12000,'imgBg1');
	FDPScript.AddAction( removeHeightLightImg0 );
	
	//debug  图片闪烁
	
	var flicker0 =   new FDFAction_SpaceImg_Flicker(Img,2000);
	FDPScript.AddAction( flicker0 );
	
})




