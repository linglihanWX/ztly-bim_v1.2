/**
 * @describe 空间图片控制脚本
 * @author fanPeng
 * @Date 2018年2月2日下午1:54:29
 */


/**
 * @describe 初始化一个空间图片的容器，后续所有方法都在此容器上面发生
 * @author fanPeng
 * @Date 2018年2月2日下午1:56:19
 */
FDFAction_SpaceImg_Init = function( globalImg, time, id,   width , height ){
	var m_Time = time;	             //方法执行的时间
	var m_Id = id;	                 //容器的id
	var m_Width = width;             //容器的宽度
	var m_Height = height;           //容器的高度
	var m_GlobalImg = globalImg;     //调用图片方法的全局对象
	
	//	执行事件，事件执行完成返回 true, 否则返回 false.
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
			//	执行事件
			m_GlobalImg.init(m_Id, m_Width, m_Height);
			
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


/**
 * @describe 空间图片添加
 * @author fanPeng
 * @Date 2018年2月2日下午2:09:54
 */
FDFAction_SpaceImg_AddImg = function( globalImg, time ,id, img, x, y, w, h, layer) {
	var m_Time = time;	 				//方法的调用时间控制
	var m_Id = id;						//图片的唯一id
	var m_Img = img;					//图片的路径
	var m_X = x;                        //添加图片的x轴的起点
	var m_Y = y;     					//添加图片的y轴的起点            
	var m_W = w;                        //添加图片的宽度
	var m_H = h;                        //添加图片的高度
	var m_Layer = layer;                //添加图片的图层先后等级，数值越大，越靠前
	var m_GlobalImg = globalImg;        //调用图片方法的全局对象
	
	//	执行事件，事件执行完成返回 true, 否则返回 false.
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
			//	执行事件
			m_GlobalImg.drawImg(m_Id, m_Img, m_X, m_Y, m_W, m_H, m_Layer)
			
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

/**
 * @describe 图片裁剪
 * @author fanPeng
 * @Date 2018年2月2日下午2:22:00
 */
FDFAction_SpaceImg_clipImg = function(globalImg , time ,id, x, y, w, h){
	
	var m_Time = time;				//方法的执行时间
	var m_Id = id;                  //裁剪图片的唯一id
	var m_X = x;                    //裁剪图片x轴的距离
	var m_Y = y;                    //裁剪图片y轴的距离
	var m_W = w;                    //裁剪图片的宽度
	var m_H = h;                    //裁剪图片的高度
	var m_GlobalImg = globalImg;    //调用裁剪图片的全局对象
	
//	执行事件，事件执行完成返回 true, 否则返回 false.
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
			//	执行事件
			m_GlobalImg.clip(m_Id, m_X, m_Y, m_W, m_H);
			
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

/**
 * @describe 根据图片的id来高亮图片
 * @author fanPeng
 * @Date 2018年2月2日下午2:31:34
 */
FDFAction_SpaceImg_heightLightImg = function( globalImg ,time ,id){
	 
	var m_Time = time;              //方法调用的时间
	var m_Id = id;                  //图片的id
	var m_GlobalImg = globalImg;    //调用高亮图片的全局对象
	
	
//	执行事件，事件执行完成返回 true, 否则返回 false.
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
			//	执行事件
			m_GlobalImg.heightLight(m_Id)
			
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

/**
 * @describe 根据id来取消高亮
 * @author fanPeng
 * @Date 2018年2月2日下午3:26:42
 */
FDFAction_SpaceImg_RemoveHeightLightImg = function( globalImg , time ,id){
	
	var m_Time = time;                 //方法执行的时间
	var m_Id = id;                     //方法的id
	var m_GlobalImg = globalImg;       //调用取消高亮图片方法的全局对象
	
//	执行事件，事件执行完成返回 true, 否则返回 false.
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
			//	执行事件
			m_GlobalImg.removeHeightLight(m_Id)
			
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

/**
 * @describe 根据图片的id来显示图片
 * @author fanPeng
 * @Date 2018年2月2日下午2:37:22
 */
FDFAction_SpaceImg_ShowImg = function( globalImg ,time ,id){
	
	var m_Time = time;           //方法调用的时间
	var m_Id = id;               //图片的唯一id
	var m_GlobalImg = globalImg; //调用显示图片方法的全局对象
	
//	执行事件，事件执行完成返回 true, 否则返回 false.
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
			//	执行事件
			m_GlobalImg.show(m_Id);
			
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


/**
 * @describe 根据id来隐藏图片
 * @author fanPeng
 * @Date 2018年2月2日下午2:37:45
 */
FDFAction_SpaceImg_HideImg = function( globalImg ,time ,id){
	
	var m_Time = time;             //调用方法的运行时间
	var m_Id = id;				   //图片的唯一id
	var m_GlobalImg = globalImg;   //调用底层隐藏图片方法的全局对象
	
//	执行事件，事件执行完成返回 true, 否则返回 false.
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
			//	执行事件
			m_GlobalImg.hide(m_Id);
			
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


/**
 * @describe 根据id来改变图片的位置
 * @author fanPeng
 * @Date 2018年2月2日下午2:37:45
 */
FDFAction_SpaceImg_positionPose = function( globalImg ,time ,id , x, y, rotate){
	
	var m_Time = time;                //方法的执行时间
	var m_Id = id;                    //图片的唯一id
	var m_X = x;                      //改变图片位置距离x轴方向的距离
	var m_Y = y;                      //改变图片位置距离y轴方向的距离              
	var m_Rotate = rotate;            //改变图片位置的角度，然顺时针旋转，负数按逆时针旋转
	var m_GlobalImg = globalImg;      //调用底层方法的全局对象
	
//	执行事件，事件执行完成返回 true, 否则返回 false.
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
			//	执行事件
			m_GlobalImg.position(m_Id, m_X, m_Y, m_Rotate)
			
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

/**
 * @describe 改变图层的顺序
 * @author fanPeng
 * @Date 2018年2月2日下午2:55:13
 */
FDFAction_SpaceImg_changeZIndex = function( globalImg ,time ,id  , layer){
	
	var m_Time = time;					//调用方法的时间
	var m_Id = id;                      //图片的id
	var m_Layer = layer;                //改变图片的位置  数值越大越靠前
	var m_GlobalImg = globalImg;        //调用底层方法的全局对象
	
//	执行事件，事件执行完成返回 true, 否则返回 false.
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
			//	执行事件
			m_GlobalImg.changeZIndex(m_Id,m_Layer)
			
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

/**
 * @describe  图片闪烁，依据图片id
 * @author fanPeng
 * @Date 2018年2月3日下午1:33:51
 */
FDFAction_SpaceImg_Flicker = function( globalImg ,time , id , flickerTime , count, status){
	
	var m_GlobalImg = globalImg;        //调用底层方法的全局对象
	var m_Time = time;					//调用方法的时间
	var m_Id = id;                      //图片的id
	var m_FlickerTime = flickerTime;    //图片闪烁的开始时间
	var m_Count = count;                //图片在一定时间内闪烁的速度，数值越大，闪烁越快
	var m_Status = status;              //图片闪烁后的状态，，显示或者不显示
	
//	执行事件，事件执行完成返回 true, 否则返回 false.
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
			//	执行事件
			
			
			
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

/**
 * @describe 图片按轨迹移动
 * @author fanPeng
 * @Date 2018年2月5日上午9:49:23
 */
FDFAction_SpaceImg_changePosition = function( globalImg ,time , id , animateArray){
	
	var m_GlobalImg = globalImg;        //调用底层方法的全局对象
	var m_Time = time;					//调用方法的时间
	var m_Id = id;                      //图片的id
	var m_AnimteArray = animateArray;   //动画的数组值
//	执行事件，事件执行完成返回 true, 否则返回 false.
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
			//	执行事件
			for(var i=0;i<m_AnimteArray.length;i++){
				
				globalImg.changePosition(id , m_AnimteArray[i].x, m_AnimteArray[i].y , m_AnimteArray[i].s);
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