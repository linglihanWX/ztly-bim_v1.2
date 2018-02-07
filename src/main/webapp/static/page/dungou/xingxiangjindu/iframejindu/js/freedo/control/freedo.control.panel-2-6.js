/**
 * @author fanPeng
 * @Date  2018年2月6日下午1:02:24
 * @describe 飞渡平面二维控制类---天津实际项目开发
 */

$(function(){
	
	//初始化按钮事件
	ButtonClick.init();
	
	
	//debug  创建一个容器
	var imgContaine0 = new FDFAction_SpaceImg_Init(Img,0, 'app', 1740, 904);
	FDPScript.AddAction( imgContaine0 );
	
	
	
	
	//debug  增加一组图片
	
	/** 图层优先级
	 * 底图   0
	 * 文字   3
	 * 
	 */
	
	var addImg1 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg1', './img/debug/debug.jpg', 0, 0, 1740, 100, 1);
	var addImg2 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg2', './img/access/PNG/sanwei/ditu.png', 0, 100+288, 1740, 446, 0);
	var addImg3 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg3', './img/access/PNG/sjz.png', 0, 546+288, 1740, 40, 0);
	var addImg4 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg4', './img/access/PNG/weiWa.png', 0, 216+288, 1740, 300, 1);
	
	var addImg5 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg5', './img/access/PNG/1.png', 0, 0, 725, 715, -1);
	var addImg6 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg6', './img/access/PNG/2.png', 0, 0, 1012, 715, -1);
	
	/*var addImg5 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg5', './img/access/PNG/gongQi/01.png', 0, 0, 725, 100, 0);
	var addImg5_02 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg5-02', './img/access/PNG/gongQi/02.png', 0, 100, 725, 100, 0);
	var addImg5_03 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg5-03', './img/access/PNG/gongQi/03.png', 0, 200, 725, 100, 0);
	var addImg5_04 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg5-04', './img/access/PNG/gongQi/04.png', 0, 300, 725, 100, -1);*/
	
	/*var addImg6 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg6', './img/access/PNG/jinDu/01.png', 727, 0, 1012, 100, 0);
	var addImg6_02 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg6-02', './img/access/PNG/jinDu/02.png', 727, 100, 1012, 100, 0);
	var addImg6_03 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg6-03', './img/access/PNG/jinDu/03.png', 727, 200, 1012, 100, 0);
	var addImg6_04 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg6-04', './img/access/PNG/jinDu/04.png', 727, 300, 1012, 100, -1);*/
	
	
	var addImg7 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg7', '', 0, 100, 1740, 288, 0);
	
	
	
	
	var addImg10 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg10', './img/access/PNG/sanwei/huoCheZhan.png', 24, 104+288, 78, 44, 2);
	var addImg11 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg11', './img/access/PNG/sanwei/zhongJianFengJing2.png', 0, 163+288, 16, 118, 2);
	var addImg12 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg12', './img/access/PNG/sanwei/fu0Dian2BaiFenHao.png', 40, 194+288, 78, 27, 9);
	var addImg13 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg13', './img/access/PNG/sanwei/danDongDanXianDunGouFa.png', 5, 271+288, 175, 29, 9);
	var addImg14 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg14', './img/access/PNG/sanwei/zhongJianFengJingDiTu.png', 188, 160+288, 58, 218, 2);
	var addImg15 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg15', './img/access/PNG/sanwei/zhongJianFengJingWenZi.png', 199, 175+288, 30, 102, 2);
	var addImg16 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg16', './img/access/PNG/sanwei/zhongFengHuaBanYan.png', 199, 477+288, 125, 27, 2);
	var addImg17 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg17', './img/access/PNG/sanwei/10Dian5Gang11Dian4Mi.png', 256, 262+288, 125, 27, 2);
	var addImg18 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg18', './img/access/PNG/sanwei/fu2Dian8BaiFenHao.png', 256, 320+288, 78, 25, 9);
	var addImg19 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg19', './img/access/PNG/sanwei/junGangMaTou.png', 399, 125+288, 104, 28, 3);
	var addImg20 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg20', './img/access/PNG/sanwei/10Dian5Gang11Dian4MiJianTou.png', 432, 272+288, 17, 63, 3);
	var addImg21 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg21', './img/access/PNG/sanwei/quanQiangFengHuaBanYan.png', 445, 296+288, 152, 29, 3);
	var addImg22 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg22', './img/access/PNG/sanwei/fu1Dian5BanFenHao.png', 519, 395+288, 77, 24, 9);
	var addImg23 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg23', './img/access/PNG/sanwei/12Dian4MiJianTou.png', 589, 266+288, 22, 126, 3);
	var addImg24 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg24', './img/access/PNG/sanwei/12Dian4Mi.png', 642, 322+288, 89, 31, 3);
	var addImg25 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg25', './img/access/PNG/sanwei/danDongShuangXianDunGouFa.png', 642, 430+288, 175, 29, 9);
	var addImg26 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg26', './img/access/PNG/sanwei/haiDiBengFang.png', 823, 489+288, 105, 30, 9);
	var addImg27 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg27', './img/access/PNG/sanwei/lingYuWanHaiYu.png', 904, 223+288, 129, 29, 3);
	var addImg28 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg28', './img/access/PNG/sanwei/yuNiLuanShiJiNianTuCeng.png', 904, 302+288, 227, 29, 3);
	var addImg29 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg29', './img/access/PNG/sanwei/quanQiangFengHuaBaiYunYan.png', 1052, 359+288, 189, 28, 3);
	var addImg30 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg30', './img/access/PNG/sanwei/0Dian8BaiFenHao.png', 1052, 440+288, 62, 25, 9);
	var addImg31 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg31', './img/access/PNG/sanwei/zhongFengHuaBaiYunYanYanRongFaYu.png', 1296, 488+288, 273, 28, 3);
	var addImg32 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg32', './img/access/PNG/sanwei/2Dian6BaiFenHao.png', 1502, 368+288, 64, 25, 9);
	var addImg33 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg33', './img/access/PNG/sanwei/12Dian2Mi.png', 1539, 258+288, 89, 30, 3);
	var addImg34 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg34', './img/access/PNG/sanwei/12Dian2MiJianTou.png', 1619, 232+288, 19, 75, 3);
	var addImg35 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg35', './img/access/PNG/sanwei/suoYuWanNanZhan.png', 1600, 100+288, 127, 44, 3);
	var addImg37 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg37', './img/access/PNG/dungou02.png', 1722, 280+288, 17, 58, 3);
	var addImg38 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg38', './img/access/PNG/zhiZhen.png', 0, 546+288, 19, 40, 3);
	var addImg39 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg39', './img/access/PNG/yiWa.png', 0, 216+288, 1740, 300, 2);
	var addImg40 = new FDFAction_SpaceImg_AddImg(Img,0,'imgBg40', './img/access/PNG/sanwei/0Dian2BaiFenHao.png', 1654, 307+288, 63, 27, 9);
	
	
	
	
	
	
	
	
	//FDPScript.AddAction( addImg0 );
	FDPScript.AddAction( addImg2 );  //中间地图
	FDPScript.AddAction( addImg3 );  //底部地图
	FDPScript.AddAction( addImg4 );  //中间以挖
	FDPScript.AddAction( addImg5 );  //中间以挖
	FDPScript.AddAction( addImg6 );  //中间以挖
	
	/*FDPScript.AddAction( addImg5 );  //工期-01
	FDPScript.AddAction( addImg5_02 );//工期-02
	FDPScript.AddAction( addImg5_03 );//工期-03
	FDPScript.AddAction( addImg5_04 );//工期-04
*/	
	
	/*FDPScript.AddAction( addImg6 );     //进度-01
	FDPScript.AddAction( addImg6_02 );  //进度-02
	FDPScript.AddAction( addImg6_03 );  //进度-03
	FDPScript.AddAction( addImg6_04 );  //进度-04
*/	
	
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
	FDPScript.AddAction( addImg38 );  //时间戳指针
	FDPScript.AddAction( addImg39 );  //以挖-1
	FDPScript.AddAction( addImg40 );  //0.2%
	
	
	
	//图片动画模拟效果
	
	//debug 盾构
	/*var animateArray = new Array();
	animateArray.push({x:1699,y:287+288,s:1000});
	animateArray.push({x:1453,y:382+288,s:3000});
	animateArray.push({x:887,y:453+288,s:3000});
	animateArray.push({x:857,y:453+288,s:1000});
	animateArray.push({x:370,y:339+288,s:3000});
	animateArray.push({x:97,y:232+288,s:3000});
	animateArray.push({x:0,y:220+288,s:3000});
	var changePosition0 = new FDFAction_SpaceImg_changePosition(Img,0,'imgBg37',animateArray);
	FDPScript.AddAction( changePosition0 ); */
	
	//启动盾构机移动
	var DunGou0 = new FDFAction_SpaceImg_changePositionDunGou(0);
	FDPScript.AddAction( DunGou0 );
	
	//debug 时间戳
	var timestampArray = new Array;
	timestampArray.push({x:1705,y:546+288,s:44000});
	var changePosition1 = new FDFAction_SpaceImg_changePosition(Img,0,'imgBg38',timestampArray);
	FDPScript.AddAction( changePosition1 ); 
	
	 //debug 图片裁剪  以挖-1
	 /*var clip0 = new FDFAction_SpaceImg_clipImg(Img,0,'imgBg6-04',750, 0, 1740, 700);
	 FDPScript.AddAction( clip0 ); */
	
	
	
	//debug 图片变换姿态--盾构机
  /* var positionPost0 =  new FDFAction_SpaceImg_positionPose(Img,0,'imgBg37',0,0,180);
   FDPScript.AddAction( positionPost0 ); */
   
	
   //计时器实现一个盾构机拖着管道走
   var dynamicClip = setInterval(function(){
	   if(!isNaN(parseInt($("#imgBg37").css("left")))){
		 var  dynamicLeftData = parseInt($("#imgBg37").css("left"))+10;
		 if(dynamicLeftData==18){
			 //关闭计时器
			 clearInterval(dynamicClip);
		 }
		 //调用底层方法，加快响应速度
		 Img.clip('imgBg39', dynamicLeftData, 0, 1740, 800);
	   }
   },0);
	
   
 
   
  
	
	
	
	
	
	
	
	
	
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
	
	/*var flicker0 =   new FDFAction_SpaceImg_Flicker(Img,2000);
	FDPScript.AddAction( flicker0 );
	*/
})




