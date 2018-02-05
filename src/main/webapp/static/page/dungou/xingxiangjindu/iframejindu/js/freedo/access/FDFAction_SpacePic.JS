/*
	三维空间绑定屏幕图片相关事件。
*/
//	三维图片创建。
//	viewer,
	//	id
	//	time,
	//	url 图片的地址。
	//	ScreenWidth 图片在屏幕上显示的宽度。 
	//	ScreenHeight	图片在屏幕显示的高度。
	//	lon,lat,height,  空间绑定的经纬高。单位 度 度 米。
	//	px,py 绑定点对应的图片像素位置。
	//	color 图片叠加的颜色值，默认为白色  ARGB = ( 1,1,1,1).
	//	bShow 初始的显隐状态。
FDFAction_SpacePic_Create = function( Viewer, time, id, url, screenWidth, screenHeight, lon, lat, height, px, py, color,bShow )
{
	var m_Time = time;
	var m_Id = id;
	var m_Url = url;
	var m_ScreenWidth = screenWidth;
	var m_ScreenHeight = screenHeight;
	var m_Lon = lon;
	var m_Lat = lat;
	var m_Height = height;
	var m_Px = px;
	var m_Py = py;
	var m_Color = color;
	var m_BShow = bShow;
	
	
	
	this.Run = function( LastTime, NowTime )
	{
		if ( m_Time < LastTime )
		{
			return true;	//	事件时间已过，不执行，返回执行完成。
		}
		else if ( m_Time > NowTime )
		{
			return false;	//	事件时间未到，不执行，返回未执行。
		}
		else
		{	
			//	执行事件，添加图片对象
			FDPScript.FDFAction_SpacePic_List[m_Id] = Viewer.entities.add( { 
			    id:m_Id,
			    position : FreeDo.Cartesian3.fromDegrees(m_Lon, m_Lat, m_Height),  
			    billboard : { 
			        image : m_Url,  
			        verticalOrigin : Freedo.VerticalOrigin.BOTTOM , //垂直方向以底部来计算标签的位置  
			        width : m_ScreenWidth,  
			        height : m_ScreenHeight,
			        show : m_BShow,
			        color:m_Color
			    },  
			} );
			return true;	//	事件执行完成  返回 true;
		}
	}
	
	this.Clear = function()
	{
		//	没有资源需要清理。
	}

	this.GetStartTime = function()
	{
		return m_Time;
	}

	this.GetEndTime = function()
	{
		return m_Time;
	}

	
}

/*
	图片显隐
	time  
	Viewer
	id
	bShow
	返回: 无。
*/	
FDFAction_SpacePic_Visible = function( Viewer ,time, id, bShow )
{
	var m_Time = time; //时间
	var m_Id = id;     //id
	var m_bShow = bShow;  //设置图片的显示[true] 隐藏 [false]
	
	
	this.Run = function( LastTime, NowTime )
	{
		if ( m_Time < LastTime )
		{
			return true;	//	事件时间已过，不执行，返回执行完成。
		}
		else if ( m_Time > NowTime )
		{
			return false;	//	事件时间未到，不执行，返回未执行。
		}
		else
		{    //	执行事件，设置图片显隐
			if(FDPScript.FDFAction_SpacePic_List){
			
				FDPScript.FDFAction_SpacePic_List[m_Id].show = bShow;
			}
			
			
			return true;	//	事件执行完成  返回 true;
		}
	}
	
	this.Clear = function()
	{
		//	没有资源需要清理。
	}

	this.GetStartTime = function()
	{
		return m_Time;
	}

	this.GetEndTime = function()
	{
		return m_Time;
	}

}

//	图片闪烁。
FDFAction_SpacePic_flicker = function( Viewer, id, StartTime, EndTime, acccount, endVisible )
{
	//
	//	startTime,EndTime    闪烁开始和结束时间。
	//	account				显隐次数。
	//	EndVisible			闪烁结束后显隐状态。
	
	var m_Time = StartTime;
	var m_Id = id;
	
	this.Run = function( LastTime, NowTime )
	{
		if ( m_Time < LastTime )
		{
			return true;	//	事件时间已过，不执行，返回执行完成。
		}
		else if ( m_Time > NowTime )
		{
			return false;	//	事件时间未到，不执行，返回未执行。
		}
		else
		{    //	执行事件，设置图片显隐
			var flag = true;
			///for(;;){
				
			
			setInterval(function(){
				if(flag){
				flag = false;
				FDPScript.FDFAction_SpacePic_List[123].billboard.color=Freedo.Color.BLACK;
			}else {
				FDPScript.FDFAction_SpacePic_List[123].billboard.color=Freedo.Color.WHITE;
				flag = true;
			}
			},500);
		//	}
			
			return true;	//	事件执行完成  返回 true;
		}
	}
	
	this.Clear = function()
	{
		//	没有资源需要清理。
	}

	this.GetStartTime = function()
	{
		return m_Time;
	}

	this.GetEndTime = function()
	{
		return m_Time;
	}
}

//	图片按轨迹移动。
FDFAction_SpacePic_轨迹运动 = function( Viewer, id, array )
{
	//	viewer;
	//	id;
	//	Array  由时间，经度，维度，高度 构成的数组。  time0, lon0,lat0, height0, time1, lon1, lat1,height1,time2......
}

//	图片颜色叠加（高亮）。
FDFAction_SpacePic_Color = function( Viewer, id, time, color )
{
}

/*
*/
