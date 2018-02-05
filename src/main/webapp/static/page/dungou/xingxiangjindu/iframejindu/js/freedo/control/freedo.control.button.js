/**
 * @author fanPeng
 * @Date   2018年2月1日下午02:02:08
 * @describe 屏幕按钮类
 */
  
var ButtonClick = window.ButtonClick || {};

/**
 * @author fanPeng
 * @Date   2018年2月1日下午02:09:08
 * @describe ButtonClick初始化
 * @param none
 * @return none
 */
ButtonClick.init = function( viewer ){
	this.m_Viewer = viewer || null;
	//同时初始化飞行脚本
	FDPScript.Init(this.m_Viewer);
}

/**
 * @author fanPeng
 * @Date   2018年2月1日下午3:24:38
 * @describe 点击开始事件
 * @param none
 * @return none
 */
ButtonClick.start = function(){
    	
    	FDPScript.Start();
    		
}

/**
 * @author fanPeng
 * @Date   2018年2月1日下午02:09:08
 * @describe 点击继续事件
 * @param none
 * @return none
 */
ButtonClick.play = function(){
	
	FDPScript.Resume();
	
}

/**
 * @author fanPeng
 * @Date   2018年2月1日下午02:11:08
 * @describe 点击暂停事件
 * @param none
 * @return none
 */
ButtonClick.pause = function(){
	
	FDPScript.Pause();
}

/**
 * @author fanPeng
 * @Date   2018年2月1日下午02:12:08
 * @describe 点击停止事件
 * @param none
 * @return none
 */
ButtonClick.stop = function(){
	
	FDPScript.Stop();
}