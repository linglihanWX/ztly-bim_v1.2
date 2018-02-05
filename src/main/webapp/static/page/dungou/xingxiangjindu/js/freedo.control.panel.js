/**
 * @author fanPeng
 * @Date   2018年2月3日下午3:31:40
 * @describe 飞渡平面二维控制类
 */

$(function(){
	
	//初始化按钮事件
	ButtonClick.init();
	
	
	//debug  创建一个容器
	var imgContaine0 = new FDFAction_SpaceImg_Init(Img,0, 'app', 1740, 586);
	FDPScript.AddAction( imgContaine0 );
	
	
	
	
	//debug  增加一组图片
	
	/** 图层优先级
	 * 底图   0
	 * 文字   3
	 * 
	 */
	
	var addImg1 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg1', './img/debug/debug.jpg', 0, 0, 1740, 100, 1);
	var addImg2 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg2', './img/access/PNG/sanwei/ditu.png', 0, 100, 1740, 446, 0);
	var addImg3 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg3', './img/access/PNG/sjz.png', 0, 546, 1740, 40, 0);
	var addImg4 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg4', './img/access/PNG/weiWa.png', 0, 216, 1740, 300, 3);
	
	var addImg10 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg10', './img/access/PNG/sanwei/huoCheZhan.png', 24, 104, 78, 44, 2);
	var addImg11 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg11', './img/access/PNG/sanwei/zhongJianFengJing2.png', 0, 163, 16, 118, 2);
	var addImg12 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg12', './img/access/PNG/sanwei/fu0Dian2BaiFenHao.png', 40, 194, 78, 27, 2);
	var addImg13 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg13', './img/access/PNG/sanwei/danDongDanXianDunGouFa.png', 5, 271, 175, 29, 3);
	var addImg14 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg14', './img/access/PNG/sanwei/zhongJianFengJingDiTu.png', 188, 160, 58, 218, 2);
	var addImg15 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg15', './img/access/PNG/sanwei/zhongJianFengJingWenZi.png', 199, 175, 30, 102, 2);
	var addImg16 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg16', './img/access/PNG/sanwei/zhongFengHuaBanYan.png', 199, 477, 125, 27, 2);
	var addImg17 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg17', './img/access/PNG/sanwei/10Dian5Gang11Dian4Mi.png', 256, 262, 125, 27, 2);
	var addImg18 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg18', './img/access/PNG/sanwei/fu2Dian8BaiFenHao.png', 256, 320, 78, 25, 3);
	var addImg19 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg19', './img/access/PNG/sanwei/junGangMaTou.png', 399, 125, 104, 28, 3);
	var addImg20 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg20', './img/access/PNG/sanwei/10Dian5Gang11Dian4MiJianTou.png', 432, 272, 17, 63, 3);
	var addImg21 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg21', './img/access/PNG/sanwei/quanQiangFengHuaBanYan.png', 445, 296, 152, 29, 3);
	var addImg22 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg22', './img/access/PNG/sanwei/fu1Dian5BanFenHao.png', 519, 395, 77, 24, 3);
	var addImg23 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg23', './img/access/PNG/sanwei/12Dian4MiJianTou.png', 589, 266, 22, 126, 3);
	var addImg24 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg24', './img/access/PNG/sanwei/12Dian4Mi.png', 642, 322, 89, 31, 3);
	var addImg25 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg25', './img/access/PNG/sanwei/danDongShuangXianDunGouFa.png', 642, 430, 175, 29, 3);
	var addImg26 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg26', './img/access/PNG/sanwei/haiDiBengFang.png', 823, 489, 105, 30, 3);
	var addImg27 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg27', './img/access/PNG/sanwei/lingYuWanHaiYu.png', 904, 223, 129, 29, 3);
	var addImg28 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg28', './img/access/PNG/sanwei/yuNiLuanShiJiNianTuCeng.png', 904, 302, 227, 29, 3);
	var addImg29 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg29', './img/access/PNG/sanwei/quanQiangFengHuaBaiYunYan.png', 1052, 359, 189, 28, 3);
	var addImg30 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg30', './img/access/PNG/sanwei/0Dian8BaiFenHao.png', 1052, 440, 62, 25, 3);
	var addImg31 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg31', './img/access/PNG/sanwei/zhongFengHuaBaiYunYanYanRongFaYu.png', 1296, 488, 273, 28, 3);
	var addImg32 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg32', './img/access/PNG/sanwei/2Dian6BaiFenHao.png', 1502, 368, 64, 25, 3);
	var addImg33 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg33', './img/access/PNG/sanwei/12Dian2Mi.png', 1539, 258, 89, 30, 3);
	var addImg34 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg34', './img/access/PNG/sanwei/12Dian2MiJianTou.png', 1619, 232, 19, 75, 3);
	var addImg35 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg35', './img/access/PNG/sanwei/suoYuWanNanZhan.png', 1600, 100, 127, 44, 3);
	
	var addImg37 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg37', './img/access/PNG/dungou02.png', 1722, 280, 17, 58, 1);
	
	
	
	
	//FDPScript.AddAction( addImg0 );
	FDPScript.AddAction( addImg2 );  //中间地图
	FDPScript.AddAction( addImg3 );  //底部地图
	FDPScript.AddAction( addImg4 );  //中间以挖
	FDPScript.AddAction( addImg10 );  //火车站
	FDPScript.AddAction( addImg11 );  //中间风景2
	FDPScript.AddAction( addImg12 );  //-0.2%
	FDPScript.AddAction( addImg13 );  //单洞单线盾构法
	FDPScript.AddAction( addImg14 );  //中间风景地图
	FDPScript.AddAction( addImg15 );  //中间风景文字
	FDPScript.AddAction( addImg16 );  //中风化板岩
	FDPScript.AddAction( addImg17 );  //10.5-11.4米
	FDPScript.AddAction( addImg18 );  //-2.8%
	FDPScript.AddAction( addImg19 );  //军港码头
	FDPScript.AddAction( addImg20 );  //10.5-11.4米箭头
	FDPScript.AddAction( addImg21 );  //全强风化板岩
	FDPScript.AddAction( addImg22 );  //-1.5%
	FDPScript.AddAction( addImg23 );  //12.4箭头
	FDPScript.AddAction( addImg24 );  //12.4米
	FDPScript.AddAction( addImg25 );  //单洞单线盾构法
	FDPScript.AddAction( addImg26 );  //海底泵房
	FDPScript.AddAction( addImg27 );  //梭鱼湾海域
	FDPScript.AddAction( addImg28 );  //淤泥、卵石及粘土层
	FDPScript.AddAction( addImg29 );  //全强风化，白云岩
	FDPScript.AddAction( addImg30 );  //0.8%
	FDPScript.AddAction( addImg31 );  //中风化白云岩，岩溶发育
	FDPScript.AddAction( addImg32 );  //2.6%
	FDPScript.AddAction( addImg33 );  //12.2米
	FDPScript.AddAction( addImg34 );  //12.2米箭头
	FDPScript.AddAction( addImg35 );  //梭鱼湾南站
	FDPScript.AddAction( addImg37 );  //盾构机
	
	//debug 小车移动
	var animateArray = new Array();
	animateArray.push({x:1699,y:287,s:1000});
	animateArray.push({x:1453,y:382,s:3000});
	animateArray.push({x:887,y:453,s:3000});
	animateArray.push({x:857,y:453,s:1000});
	animateArray.push({x:370,y:339,s:3000});
	var addImg36 = new FDFAction_SpaceImg_changePosition(Img,0,'imgBg37',animateArray);
	FDPScript.AddAction( addImg36 ); 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*//debug 裁剪图片
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
	*/
	//debug  图片闪烁
	
	var flicker0 =   new FDFAction_SpaceImg_Flicker(Img,2000);
	FDPScript.AddAction( flicker0 );
	
})




