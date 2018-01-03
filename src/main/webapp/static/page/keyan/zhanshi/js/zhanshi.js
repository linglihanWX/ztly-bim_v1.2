var flag = false;
$(function () {
	var h = $(".container-fluid-full").height();
	var h1 = $("#content .breadcrumb").height();
	$("#tree").height(h - h1 - 24);
	FreedoApp.init("earth");
	 ShowViewer.initLeftClick(FreedoApp.viewers["earth"],showlabel);
	 FreedoApp.viewers["earth"].camera.setView( 
				{
					destination : new FreeDo.Cartesian3(-2183570.5850746077,4471852.254049122,3990050.5935917823),
				    orientation : {
				        heading : 6.283061736872095,
				        pitch : -0.7852936750535262,
				        roll : 0.00010838690093617487
				    }
				});
	var surveymanager = new SurveyManager(FreedoApp.viewers["earth"],function(){});
	var treedata = [{
		"id" : 0,
		"pId" : -1,
		"name" : "综合数据",
		"nocheck":true
	},{
		"id" : 1,
		"pId" : 0,
		"name" : "水文数据",
		"nocheck":true
	},{
		"id" : 2,
		"pId" : 0,
		"name" : "环境数据",
		"nocheck":true
	},{
		"id" : 3,
		"pId" : 0,
		"name" : "地质数据",
		"nocheck":true
	}]
	var treelength = treedata.length;
	for (var i = treelength; i < shuiwenJson.length+treelength; i++) {
		// 初始化树时所需要的数据
		treedata.push({
			"id" : i,
			"pId" : 1,
			"name" : shuiwenJson[i-treelength].name,
			"type" :"水文数据",
			"index":i-treelength
		});
	}
	treelength = treedata.length;
	for (var i = treelength; i < huanjingJson.length+treelength; i++) {
		var entity = JSON.parse(huanjingJson[i-treelength].entity);
		// 初始化树时所需要的数据
		treedata.push({
			"id" : i,
			"pId" : 2,
			"name" : entity.label.text,
			"type" :"环境数据",
			"index":i-treelength
		});
	}
	treelength = treedata.length;
	for (var i = treelength; i < dizhiJson.length+treelength; i++) {
		var primitive = JSON.parse(dizhiJson[i-treelength].primitive);
		// 初始化树时所需要的数据
		treedata.push({
			"id" : i,
			"pId" : 3,
			"name" : primitive.id,
			"type" :"地质数据",
			"index":i-treelength,
			"nocheck":true
		});
	}
	var zTreeObj;
	var checkflag = null;
	var setting = {
		check : {
			enable : true,
			chkStyle : "checkbox",
			chkboxType : {
				"Y" : "p",
				"N" : "s"
			}
		},
		data : {
			simpleData : {
				enable : true,
				idKey : "id",
				pIdKey : "pId",
				rootPId : "0"
			}
		},
		callback : {
			onClick : function(event, treeId, treeNode) {
				var datatype = treeNode.type;
				var index =treeNode.index;
				switch (datatype) {
				case "水文数据":
					FreedoApp.viewers["earth"].zoomTo(water[index]);
					break;
				case "环境数据":
					FreedoApp.viewers["earth"].zoomTo(environment[index]);
					break;
				case "地质数据":
					var index = treeNode.index;
					ShowViewer.fly(FreedoApp.viewers["earth"],dizhiJson[index].drillinglon,dizhiJson[index].drillinglat,70,function(){})
					break;

				default:
					break;
				}
				},
			
			onCheck : function(event, treeId, treeNode) {
				var datatype = treeNode.type;
				var index = treeNode.index;
				switch (datatype) {
				case "水文数据":
					if (treeNode) {
						checkflag = treeNode.checked;
					}
					if (checkflag) {
						water[index].show = true;
					} else {
						water[index].show = false;
					}
					break;
				case "环境数据":
					if (treeNode) {
						checkflag = treeNode.checked;
					}
					if (checkflag) {
						environment[index].show = true;
					} else {
						environment[index].show = false;
					}
					break;
				default:
					break;
				}

			}
	}
		}
	zTreeObj = $.fn.zTree.init($("#tree"), setting, treedata);
	zTreeObj.checkAllNodes(true);
	zTreeObj.expandAll(true);
	/**
	 * 加载三维场景里面的内容
	 */
	var waterEntitydata = {}
	var waterEntity = {}
	for (var i = 0; i < shuiwenJson.length; i++) {
		// 加载水文图层
		waterEntitydata = JSON.parse(shuiwenJson[i].entity);
		waterEntity = FreedoApp.viewers["earth"].entities.add({
					id : "shuiwen_"+i,
					type:"shuiwen",
					name : waterEntitydata.name,
					show : waterEntitydata.show,
					position : FreeDo.Cartesian3.fromDegrees(waterEntitydata.position[0],waterEntitydata.position[1]),
					point : { // 点
						pixelSize : 5,
						color : FreeDo.Color.RED,
						outlineColor : FreeDo.Color.WHITE,
						outlineWidth : 2
					},
					label : { // 文字标签
						text : waterEntitydata.label.text,
						font : '14pt monospace',
						style : FreeDo.LabelStyle.FILL_AND_OUTLINE,
						outlineWidth : 2,
						verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
						pixelOffset : new FreeDo.Cartesian2(0, -9)// 偏移量
					},
					polygon : {
						hierarchy : {
							positions : FreeDo.Cartesian3.fromDegreesArray(waterEntitydata.polygon.hierarchy.positions),
						},
						material : new FreeDo.GridMaterialProperty({
							color : FreeDo.Color.BLUE,
							lineCount : new FreeDo.Cartesian2(15, 0),
							lineThickness : new FreeDo.Cartesian2(1, 1),
							lineOffset : new FreeDo.Cartesian2(1100.9, 1100.9)
						}),
						height : 10,
						outline : true,
						outlineColor : FreeDo.Color.BLUE
					}
				});
		water.push(waterEntity);
	}
	var environmentEntitydata = {}
	var environmentEntity = {}
	for (var i = 0; i < huanjingJson.length; i++) {
		// 初始化树时所需要的数据
		environmentEntitydata = JSON.parse(huanjingJson[i].entity);
		environmentEntity = FreedoApp.viewers["earth"].entities.add({
			id:"huanjing_"+i,
			type:"huanjing",
	    	name:environmentEntitydata.name,
	    	show : true,
	    	position : FreeDo.Cartesian3.fromDegrees(environmentEntitydata.position[0],environmentEntitydata.position[1]),
	    	    point : { //点
	    	        pixelSize : 5,
	    	        color : FreeDo.Color.RED,
	    	        outlineColor : FreeDo.Color.WHITE,
	    	        outlineWidth : 2
	    	   },
		    label : { //文字标签
		        text : environmentEntitydata.label.text,
		        font : '14pt monospace',
		        style : FreeDo.LabelStyle.FILL_AND_OUTLINE,
		        outlineWidth : 2,
		        verticalOrigin : FreeDo.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置
		        pixelOffset : new FreeDo.Cartesian2( 0, -9 )   //偏移量
		    },    	
	        polygon : {
	            outline : true,
	            outlineColor : FreeDo.Color.BLACK,
	            hierarchy : {
	                positions : FreeDo.Cartesian3.fromDegreesArray(environmentEntitydata.polygon.hierarchy.positions),
	            },
	            material : new FreeDo.GridMaterialProperty({
	                color : FreeDo.Color.ORANGE,
	                lineCount : new FreeDo.Cartesian2(15, 0),
	                lineThickness : new FreeDo.Cartesian2(1, 1),
	                lineOffset :  new FreeDo.Cartesian2(1100.9, 1100.9)
	            }),
	            height : 10,
	            outline : true,
	            outlineColor : FreeDo.Color.ORANGE                
	        }
	    });
		environment.push(environmentEntity);
	}
	//加载钻井柱
	var drillingMgr = FDDrillingMgr(FreedoApp.viewers["earth"]);
	var dizhistr = "[";
	for (var i = 0; i < dizhiJson.length; i++) {
		if(i!=dizhiJson.length-1){
			dizhistr+=dizhiJson[i].primitive+",";
		}else{
			dizhistr+=dizhiJson[i].primitive+"]";
		}
	}
	dizhidata = JSON.parse(dizhistr);
	for(var i=0;i<dizhidata.length;i++){
		drillingMgr.add(dizhidata[i]);
	}
	drillingMgr.startlistening(function(){});
	/**
	 *工具栏按钮点击 
	 */
	$("#appendTools i").each(function(){
		$(this).click(function(){
			if($(this).hasClass("active")){
			//设置方法为none
			surveymanager.setSurveyType(SurveyType.NONE);
			//移除原有的监听事件
			ShowViewer.removeListener();
			//初始化相应的监听事件
			switch ($(this).attr("id")) {
			//统计查询
			case "TJCX":
				$("#img").hide();
				surveymanager.setSurveyType(SurveyType.QUERY)
				break;
			//距离测量
			case "JLCL":
				$("#echartarea").hide();
				$("#img").hide();
				surveymanager.setSurveyType(SurveyType.LINE_DISTANCE);
				break;
			//方位测量
			case "FWCL":
				$("#echartarea").hide();
				$("#img").hide();						
				surveymanager.setSurveyType(SurveyType.Azimuth_DISTANCE);
				break;
			//面积测量
			case "MJCL":
				$("#echartarea").hide();
				$("#img").hide();					
				break;
			//地面刨切
			case "DMPQ":
				$("#echartarea").hide();					
				surveymanager.setSurveyType(SurveyType.Geology_SLICING);
				break;
			//其他
			default:
				break;
			}
		}else{
			//隐藏echarts和img窗口
			$("#echartarea").hide();
			$("#img").hide();
			//删除三维页面所有的线、标签
			
			//设置方法为none
			surveymanager.setSurveyType(SurveyType.NONE);
			//初始化原有的监听事件
			ShowViewer.initLeftClick(FreedoApp.viewers["earth"],showlabel);
		}
		});
	});
	//窗口拖动
	 tool.drag("#tableInfo");
	    $("#tableInfo p span:last-of-type").click(function () {
	        $("#tableInfo").hide();
	    });
   
});
var cartesian= null;
var str_ghqmc,str_xmmc,str_bgmc,str_kjbj,str_xzqh,str_rjztmj,str_ghqmj,str_gdqx,str_znjg,str_zqgm,str_fzfx,str_czhfzmb =null;
function showlabel(data,data2){
	if(data!=null){
		if(flag==true){
			removeFollowListener();
		}
		console.log(data2);
		var key = data2.id.type;
		switch (key) {
		case "shuiwen":
			var id = data2.id.id;
			var shuiwenid = parseInt(id.split("_")[1]);
				str_ghqmc=shuiwenJson[shuiwenid].name;
				str_xmmc=shuiwenJson[shuiwenid].name;
				str_bgmc=shuiwenJson[shuiwenid].name+"控制性工程规划报告书";
				str_kjbj="中心村以均匀布局形式带动基层村发展的空间结构形态";
				str_xzqh="河北省保定市安新县";
				str_rjztmj="99.24平方米";
				str_ghqmj="993公顷";
				str_gdqx="2008-2025年";
				str_znjg="中心镇是全镇的政治、经济、文化及交通中心，是以发展第三产业、农副产品精深加工及蔬菜等包装业和物流业为主的综合开发区，中心村是村民行政、文化娱乐中心、初级商贸中心，基层村是村民活动中心";
				str_zqgm="现状人口为8350，规划近期到2010年，镇区人口为8750，规划近期2015到年，镇区人口为9750，规划近期2025到年，镇区人口为10450";
				str_fzfx="旅游用地发展方向为向东发展";
				str_czhfzmb="2015年城镇人口为8430，城镇人口比重为33%<br>2015年城镇人口为10452，城镇人口比重为38%";
				TableAssign.setablevalue(str_ghqmc,str_xmmc,str_bgmc,str_kjbj,str_xzqh,str_rjztmj,str_ghqmj,str_gdqx,str_znjg,str_zqgm,str_fzfx,str_czhfzmb)
				$("#tableInfo").show();
			break;
		case "huanjing":
			var id = data2.id.id
			var huanjingid = parseInt(id.split("_")[1]);
			var huanjingjson = JSON.parse(huanjingJson[huanjingid].entity);
			str_ghqmc=huanjingjson.label.text;
			str_xmmc=huanjingjson.label.text;
			str_bgmc=huanjingjson.label.text+"控制性工程规划报告书";
			str_kjbj="中心村以均匀布局形式带动基层村发展的空间结构形态";
			str_xzqh="河北省保定市安新县";
			str_rjztmj="99.24平方米";
			str_ghqmj="993公顷";
			str_gdqx="2008-2025年";
			str_znjg="中心镇是全镇的政治、经济、文化及交通中心，是以发展第三产业、农副产品精深加工及蔬菜等包装业和物流业为主的综合开发区，中心村是村民行政、文化娱乐中心、初级商贸中心，基层村是村民活动中心";
			str_zqgm="现状人口为8350，规划近期到2010年，镇区人口为8750，规划近期2015到年，镇区人口为9750，规划近期2025到年，镇区人口为10450";
			str_fzfx="旅游用地发展方向为向东发展";
			str_czhfzmb="2015年城镇人口为8430，城镇人口比重为33%<br>2015年城镇人口为10452，城镇人口比重为38%";
			TableAssign.setablevalue(str_ghqmc,str_xmmc,str_bgmc,str_kjbj,str_xzqh,str_rjztmj,str_ghqmj,str_gdqx,str_znjg,str_zqgm,str_fzfx,str_czhfzmb)
			$("#tableInfo").show();
			break;
		case "drilling":
			cartesian = transform(data);
			var id = data2.id.id
			var index = null;
			for (var i = 0; i < dizhiJson.length; i++) {
				var primitive = JSON.parse(dizhiJson[i].primitive);
				if(primitive.id==id){
					index = i
					break;
				}
			}
			$(".msgInfo").html("钻孔编号："+dizhiJson[index].drillingnum+"<br>日期："+format(dizhiJson[index].drillingdate)+"<br>钻孔深度："+dizhiJson[index].drillingdepth+"<br>孔口高程："+dizhiJson[index].drillingaltitude)
			$(".msgInfo").show();
			break;

		default:
			if(data2.id.includes("钻井柱")){
				var id = parseInt(data2.id.split("_")[0].slice(3));
				console.log(id);
			}

			break;
		}

			addFollowListener();
			
	}else{
		removeFollowLisener();
		$(".msgInfo").hide();
		$("#tableInfo").hide();
		return;
	}
    
     
}
var htmlOverlay = document.getElementById('showmsg');
var addFollowListener=function(){
	flag = FreedoApp.viewers["earth"].scene.preRender.addEventListener(setScreenPostion);
}
var removeFollowLisener= function(){
	if(flag==true){
	FreedoApp.viewers["earth"].scene.preRender.removeEventListener(setScreenPostion);
	}
	flag = false;
}
var setScreenPostion=function (){	
	var canvasPosition = FreedoApp.viewers["earth"].scene.cartesianToCanvasCoordinates(cartesian);
	    if (FreeDo.defined(canvasPosition)) {
	        htmlOverlay.style.top = canvasPosition.y -150+ 'px';
	        htmlOverlay.style.left = canvasPosition.x +220+ 'px';
	    }
}
var transform = function(data){
	var pick= new FreeDo.Cartesian2(data.x,data.y);
	var cartesian = FreedoApp.viewers["earth"].scene.globe.pick(FreedoApp.viewers["earth"].camera.getPickRay(pick), FreedoApp.viewers["earth"].scene);
	return cartesian;
}
var transform1 = function(lonlathei){
	return  FreeDo.Cartesian3.fromDegrees(lonlathei[0],lonlathei[1],lonlathei[2]);	
}