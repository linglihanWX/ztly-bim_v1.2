/**
 * 图片绘制.JS
 * 2018.2.2
 * LYH
 */

let Img = {
	/*!
	 * 初始化容器
	 * @param  {Srting} id 唯一id
	 * @param  {Number} w  容器的宽度
	 * @param  {Number} h  容器的高度
	 * @return {[type]}    无
	 */		
	init(id, w, h){
		let divs = `<div id=${id} class="img-group-wrap"></div>`;
		$('#img-container').append(divs)
		$(`#${id}`).css({
			position: 'relative',
			top: 0,
			left: 0,
			width: `${w}px`,
			height: `${h}px`,
			background: '#7777779c'
		})	
	},
	/*!
	 * 添加图片
	 * @param  {Srting} id    唯一id
	 * @param  {Srting} img   图片的路径
	 * @param  {Number} x     图片X轴的起点
	 * @param  {Number} y     图片Y轴的起点
	 * @param  {Number} w     图片的宽度
	 * @param  {Number} h     图片的高度
	 * @param  {Number} layer 图片在容器的顺序(数值大的在上层，数字小的在下层)
	 * @return {[type]}       无
	 */
	drawImg(id, img, x, y, w, h, layer){
		let divs = `<div id=${id}></div>`;
		$('.img-group-wrap').append(divs)
		$(`#${id}`).css({
			position: 'absolute',
			top: `${y}px`,
			left: `${x}px`,
			width: `${w}px`,
			height: `${h}px`,
			zIndex: layer,
			background: `url(${img}) no-repeat`,
			backgroundSize: '100% 100%',
			boxSizing: 'border-box'
		})
	},
	/*!
	 * 图片显示
	 * @param  {String} id 唯一id
	 * @return {[type]}    无
	 */
	show(id) {
		$(`#${id}`).show()
	},
	/*!
	 * 图片隐藏
	 * @param  {String} id 唯一id
	 * @return {[type]}    无
	 */
	hide(id) {
		$(`#${id}`).hide()
	},
	/*!
	 * 图片位置改变
	 * @param  {String} id     唯一id
	 * @param  {Number} x      图片相对于X轴位移
	 * @param  {Number} y      图片相对于Y轴位移
	 * @param  {Number} rotate 图片旋转的角度		
	 * @return {[type]}        无
	 */
	position(id, x = 0, y = 0, rotate = 0) {
		let tops = $(`#${id}`).css('top')
		let lefts = $(`#${id}`).css('left')

		let top = Number(tops.substring(0, tops.length-2))
		let left = Number(lefts.substring(0, lefts.length-2))

		$(`#${id}`).css({
			top: `${top + y}px`,
			left: `${left + x}px`,
			transform: `rotate(${rotate}deg)`
		})
	},
	/*!
	 * 图片剪裁
	 * @param  {String} id 唯一id
	 * @param  {Number} x  图片X轴的起始点
	 * @param  {Number} y  图片Y轴的起始点
	 * @param  {Number} w  图片的宽度
	 * @param  {Number} h  图片的高度
	 * @return {[type]}    无
	 */
	clip(id, x, y, w, h) {
		let ws = $(`#${id}`).width()
		let hs = $(`#${id}`).height()
		$(`#${id}`).css({
			paddingLeft: `${x}px`,
			paddingTop: `${y}px`,
			paddingRight: `${ws - w - x}px`,
			paddingBottom: `${hs - h - y}px`,
			backgroundClip: `content-box`
		})
	},
	/*!
	 * @param  {String} id 唯一id
	 * @return {[type]}    无
	 */
	heightLight(id) {
		// let imgUrl = $(`#${id}`).css("backgroundImage").replace('url(','').replace(')','')
		$(`#${id}`).css({
			backgroundColor: 'red',
			backgroundBlendMode: 'lighten'
		})
	},
	/*!
	 * 去除高亮
	 * @param  {String} id 唯一id
	 * @return {[type]}    无
	 */
	removeHeightLight(id) {
		$(`#${id}`).css({
			backgroundColor: 'red',
			backgroundBlendMode: 'normal'
		})
	},
	/*!
	 * 改变图层的顺序
	 * @param  {String} id    唯一id
	 * @param  {Number} layer 图片在容器的顺序(数值大的在上层，数字小的在下层)
	 * @return {[type]}       无
	 */
	changeZIndex(id, layer) {
		$(`#${id}`).css({
			zIndex: layer
		})
	},/*!
	 *  图层的动画
	 * @author fanPeng
	 * @Date   2018年2月5日上午9:43:23
	 * @param  {String} id    唯一ids
	 * @param  {Json} position 移动的位置数据  
	 * @param  {Number} speed 移动的位置的速度
	 * @return {[type]}       无
	 */
	changePosition(id, x , y  , speed ){
		$(`#${id}`).animate({left:`${x}px`,top : `${y}px`},speed);
	}
};



