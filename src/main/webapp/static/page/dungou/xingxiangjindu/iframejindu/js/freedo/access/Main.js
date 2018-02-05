/**
 * 大连5号线形象进度主控类
 */
$(function () {
	Main.init("earth");
});


var Main = window.Main ||{};

Main.init = function(div)
{
	//创建三维基础环境。Viewer(影像地图，矢量地图，高程数据)
	 FreedoApp.init(div);
	this.m_Viewer = FreedoApp.viewers[div];
	//初始化脚本
	 Main.InitScript ();
	//	初始化播放界面。（显示前端做的界面，把 m_Script 赋值给它某个变量). 
//	界面类.SetScript( m_Script );
//	 FDPScript.Start();
}

Main.InitScript = function()
{
	//	脚本初始化
	FDPScript.Init(this.m_Viewer);
	
	//	读取脚本文件。
	/*var fac = new ScariptFac;*/

	var action0 = new FDPAction_Camera_0( this.m_Viewer.scene.camera, 21000, 116, 39, 10000000, 0, -90, 0 );
	FDPScript.AddAction(action0 );
	
	var action1 = new FDPAction_Camera_1( this.m_Viewer.scene.camera, 31000, 119, 40, 100000, 0, -90, 0, 4000 );
	FDPScript.AddAction( action1 )
	
//	var action1 = new FDPAction_Camera_0( this.m_Viewer.scene.camera, 30000, 119, 36, 1000, 0, -90, 0 );
	
//	FDPScript.AddAction( action1 );

/*	for(  )
	{
		// 逐行提取数据，交给 工程类 进行事件创建。
		
		var Action = ScariptFac.Create( Json字符串）。
		
		//	将事件加入到 脚本中。
		m_Sceript.AddAction( action );
	}*/
}



