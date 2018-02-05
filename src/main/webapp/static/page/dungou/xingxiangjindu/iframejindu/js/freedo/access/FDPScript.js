/*
	脚本类。提供脚本播放相关接口。实现对脚本事件的管理。
*/

var FDPScript = window.FDPScript ||{};

/*
	脚本初始化。
	viewer	(in)	三维环境。对应 Freedo.Viewer
	返回：无。
*/
FDPScript.Init = function( viewer )
{
//	var m_Name = name;					//	脚本名称
	this.m_ActionList = new Array();		//	脚本事件容器。
	this.m_IsRun = false;				//	脚本是否处于执行状态的标志。
	this.m_Speed = 1.0;					//	播放速度系数（相对正常速度）。
	this.m_Time	= 0.0;					//	当前脚本时间。毫秒。
	var date = new Date();
	this.m_SystemTime = date.getTime(); // 获取系统时间。
	//	脚本运行。
	viewer.scene.preRender.addEventListener( FDPScript.OnpreRender );
	
	
	/**
	 * @describe  用来存储图片的集合
	 * @author fanPeng
	 * @Date 2018年2月2日下午1:43:25
	 */
	this.FDFAction_SpacePic_List = new Object();  
	
}

/*
	脚本循环执行函数，内部函数。
	dt	(in）	脚本执行时间间隔，相对上一次脚本执行的时间差，单位毫秒。
	return	无。
*/
FDPScript.Run = function( dt )
{
	if ( this.m_IsRun == false )
		return;

	//	更新当前脚本运行时刻。
	var time = this.m_Time;
	this.m_Time += dt*this.m_Speed;

	//	遍历所有脚本事件，执行它。
	var i;
	for ( i = 0; i < this.m_ActionList.length; i++ )
	{
		this.m_ActionList[i].Run( time, this.m_Time );	//	各具体时间按照当前时刻执行相应操作。
	}
}

/*
	帧渲染前回掉函数，用于调用脚本执行。内部函数。
	scene	（in）	回调自带参数，暂时未知。
	time 	（in）	回调自带参数，暂时未知。
	return	无 
*/
FDPScript.OnpreRender = function( scene, time )
{
	var date = new Date();
	var NowTime =  date.getTime();
	var dt  = NowTime - FDPScript.m_SystemTime;
	if ( dt <= 0 )
		return;
	FDPScript.Run( dt );
	FDPScript.m_SystemTime = NowTime;
}
	


/*
	添加脚本事件到脚本中。
	action	(in)	要添加的脚本事件实体。满足脚本事件类基础接口要求。
	return	无。
*/	
FDPScript.AddAction = function( action )
{
	//	检查时间是否已经存在脚本。存在则不添加。
	
	
	//	按照事件开始时间(action.m_StartTime)插入到已有容器(m_ActionList)中.(时间小的排在前面）。不考虑播放优化，先不考虑该步骤。
	

	this.m_ActionList.push( action );
	
}

/*
	删除一个脚本事件
	action	(in）	要删除的事件
	return	删除成功返回 true, 否则返回 false.
*/	
FDPScript.RemoveAction = function( action )
{
	return false;
}
	

/*
	设置脚本倍速。
	speed	(in)	脚本播放倍数，脚本执行速度与系统时间的倍数关系。
	return 无。
*/	
FDPScript.SetSpeed = function( speed )
{
	this.m_Speed = speed;
}
	
/*
	开始脚本运行。脚本冲头开始运行。
	return 无。
*/	
FDPScript.Start = function()
{
	this.m_Time = 0;
	this.m_IsRun = true;
}
	
/*
	脚本暂停运行
	return  无。
*/	
FDPScript.Pause = function()
{
	this.m_IsRun = false;
}
	
/*
	脚本继续运行。
*/	
FDPScript.Resume = function()
{
	this.m_IsRun = true;
}
	
/*
	停止脚本运行。
	return  无。
*/	
FDPScript.Stop = function()
{
	this.m_IsRun = false;
	this.m_Time = 0;
		
		//	遍历所有脚本事件 清理掉脚本事件引入的内容。
	var i;
	for ( i = 0; i < this.m_ActionList.length; i++ )
	{
		this.m_ActionList[i].Clear();	//	脚本事件清理资源，例如某脚本事件执行添加一个默认资源，则该函数需要删除掉该资源。
	}		
}

/*
	设置脚本时间。相当于脚本播放跳转。
	time	（in)	脚本时刻。
	return 	无。
*/	
FDPScript.SetPos = function( time )
{
	// 所有脚本事件 从头播放 ？ 清空脚本资源，从头播放？
	Stop();
	Start();
	Run(time/this.m_Speed);
}
	




