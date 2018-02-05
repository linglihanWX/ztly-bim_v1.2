/*
	基于前端页面的图片显示控制事件。
*/

/*
	添加显示图片。
	time	事件执行的时间。
	div   前端图片显示控制器。
	id	  添加图片的id， 对该图片进行后续控制的唯一标识。
	url		图片地址。
	x,y		图片显示位置的左上角坐标。
	w,h     图片显示的大小。
	bShow	图片初始显隐标识。
	注：需要前端提供的接口为，div.addpic( id, url, x, y, w, h, bshow );或者将显隐 独立成一个接口。
*/
FDPAction_DivPic_Create = function( time, div, id, url, x, y, w, h, bShow )
{
}

/*
	图片显示隐藏。
	time	事件执行时刻。
	div 	前端图片显示控制器。
	id		图片的唯一标识。
	bshow	显隐标识。
	注：需要DIV提供通过图片ID控制图片显隐。div.showpic(id, bShow );
*/
FDPAction_DivPic_Show = function( time, div, id, bShow )
{
}

/*
	设置图片左上角位置。
	注：需要DIV提供通过图片ID控制图片位置。div.setpicpos(id, x, y );
*/
FDPAction_DivPic_Pos = function( time, div, id, x, y )
{
}

/*
	设置图片中心点位置及角度。
	time
	div
	id
	x,y
	course
	注：需要DIV提供通过图片ID控制图片位置。div.setpicpospose(id, x, y,course );
*/
FDPAction_DivPic_Pos = function( time, div, id, x, y )
{
}


/*
	设置图片显示百分比（ X轴向）。
	time	事件时刻。
	div		前端图片显示控制器。
	id		图片的唯一标识。
	percent	显示百分比。
	bflag	图片显示左侧或者右侧。 bflag == 0 , 表示图片左侧对应百分比部分显示， bflag == 1 表示图片右侧侧对应百分比部分显示
	注：需要DIV提供通过图片ID控制图片显示百分比。div.SetPicPercent(id, percent, bflag );
 */
FDPAction_DivPic_PercentVisible = function( time, div, id, percent, bflag )
{	
}