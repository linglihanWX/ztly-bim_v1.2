$(function() {
	var h = $(".container-fluid-full").height();
	var h1 = $("#content .breadcrumb").height();
	FreedoApp.init("earth");
	//WaterViewer.initModels();
	WaterViewer.initLeftClick(FreedoApp.viewers["earth"], showlabel);
	//new Compass(FreedoApp.viewers["earth"]);
	FreedoApp.viewers["earth"].camera.setView({
		destination : new FreeDo.Cartesian3(-2204069.3877862454,4508542.272707851, 3976537.1194422017),
		orientation : {
			heading : 0.001440818034851965,
			pitch : -0.7852116902406543,
			roll : 6.281915594067648
		}
	});
	tool.drag("#tableInfo");
	$("#tableInfo p span:last-of-type").click(function() {
		$("#tableInfo").hide();
	});
	var surveymanager = new SurveyManager(FreedoApp.viewers["earth"],function() {});
	$("#tree").height(h - h1 - 24);

	var treedata = [ {
		"id" : 0,
		"pId" : -1,
		"name" : "水文数据",
			"nocheck":true
	} ]
	var waterEntitydata = {}
	var waterEntity = {}
	var position = []
	for (var i = 0; i < nodeJson.length; i++) {
		// 初始化树时所需要的数据
		treedata.push({
			"id" : nodeJson[i].id,
			"pId" : 0,
			"name" : nodeJson[i].name
		});
		// 加载水文图层
		waterEntitydata = JSON.parse(nodeJson[i].entity);
		waterEntity = FreedoApp.viewers["earth"].entities.add({
					id : nodeJson[i].id,
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
		water[nodeJson[i].id]=waterEntity;
	}
	var zTreeObj;
	var checkflag = null;
	var setting = {
		check : {
			enable : true,
//			chkStyle : "checkbox",
//			chkboxType : {
//				"Y" : "p",
//				"N" : "s"
//			}
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
				$("#tableInfo").hide();
				var id = treeNode.id;
					FreedoApp.viewers["earth"].zoomTo(water[id]);
				},
			onCheck : function(event, treeId, treeNode) {
				if (treeNode) {
					checkflag = treeNode.checked;
				}
				if (checkflag) {
					water[treeNode.id].show = true;
				} else {
					water[treeNode.id].show = false;
				}
			}
		}
		}
		

	zTreeObj = $.fn.zTree.init($("#tree"), setting, treedata);
	zTreeObj.checkAllNodes(true);
	zTreeObj.expandAll(true);

	/**
	 * 工具栏按钮点击
	 */
	$("#appendTools i").each(function(){
		$(this).click(function(){
				if ($(this).hasClass("active")) {
					// 设置方法为none
					surveymanager.setSurveyType(SurveyType.NONE);
					// 移除原有的监听事件
					WaterViewer.removeListener();
					// 初始化相应的监听事件
					switch ($(this).attr("id")) {
					// 统计查询
					case "TJCX":
						$("#img").hide();
						surveymanager.setSurveyType(SurveyType.QUERY)
						break;
					// 距离测量
					case "JLCL":
						$("#echartarea").hide();
						$("#img").hide();
						surveymanager.setSurveyType(SurveyType.LINE_DISTANCE);
						break;
					// 方位测量
					case "FWCL":
						$("#echartarea").hide();
						$("#img").hide();
						surveymanager.setSurveyType(SurveyType.Azimuth_DISTANCE);
						break;
					// 面积测量
					case "MJCL":
						$("#echartarea").hide();
						$("#img").hide();
						break;
					// 地面刨切
					case "DMPQ":
						$("#echartarea").hide();
						surveymanager.setSurveyType(SurveyType.Geology_SLICING);
						break;
					// 其他
					default:
						break;
					}
				} else {
					// 隐藏echarts和img窗口
					$("#echartarea").hide();
					$("#img").hide();
					// 删除三维页面所有的线、标签

					// 设置方法为none
					surveymanager.setSurveyType(SurveyType.NONE);
					// 初始化原有的监听事件
					WaterViewer.initLeftClick(FreedoApp.viewers["earth"],showlabel);
				}
			});
		});
});
var str_ghqmc, str_xmmc, str_bgmc, str_kjbj, str_xzqh, str_rjztmj, str_ghqmj, str_gdqx, str_znjg, str_zqgm, str_fzfx, str_czhfzmb = null;
function showlabel(picked) {
	if (picked != undefined) {
		$("#tableInfo").show();
		let name = picked.id.name;
		switch (name) {
		case "baiyangdianshuiwenbaohu":
			str_ghqmc = "白洋淀水文保护区";
			str_xmmc = "白洋淀水文保护区";
			str_bgmc = "白洋淀水文保护区控制性工程规划报告书";
			str_kjbj = "中心村以均匀布局形式带动基层村发展的空间结构形态";
			str_xzqh = "河北省保定市安新县";
			str_rjztmj = "99.24平方米";
			str_ghqmj = "993公顷";
			str_gdqx = "2008-2025年";
			str_znjg = "中心镇是全镇的政治、经济、文化及交通中心，是以发展第三产业、农副产品精深加工及蔬菜等包装业和物流业为主的综合开发区，中心村是村民行政、文化娱乐中心、初级商贸中心，基层村是村民活动中心";
			str_zqgm = "现状人口为8350，规划近期到2010年，镇区人口为8750，规划近期2015到年，镇区人口为9750，规划近期2025到年，镇区人口为10450";
			str_fzfx = "旅游用地发展方向为向东发展";
			str_czhfzmb = "2015年城镇人口为8430，城镇人口比重为33%<br>2015年城镇人口为10452，城镇人口比重为38%";
			TableAssign.setablevalue(str_ghqmc, str_xmmc, str_bgmc, str_kjbj,
					str_xzqh, str_rjztmj, str_ghqmj, str_gdqx, str_znjg,
					str_zqgm, str_fzfx, str_czhfzmb)
			$("#tableInfo").show();
			break;
		case "daqingheshuiwenbaohu":
			str_ghqmc = "大清河水文保护区";
			str_xmmc = "大清河水文保护区";
			str_bgmc = "大清河水文保护区控制性工程规划报告书";
			str_kjbj = "清河县地处环渤海经济区中心地带，北京、天津、济南、石家庄、郑州、太原等大城市拱卫辐射内外";
			str_xzqh = "河北省邢台市清河县";
			str_rjztmj = "120.24平方米";
			str_ghqmj = "1200公顷";
			str_gdqx = "2008-2025年";
			str_znjg = "中心镇是全镇的政治、经济、文化及交通中心，是以发展第三产业、农副产品精深加工及蔬菜等包装业和物流业为主的综合开发区，中心村是村民行政、文化娱乐中心、初级商贸中心，基层村是村民活动中心";
			str_zqgm = "现状人口为13020，规划近期到2010年，县区人口为13500，规划近期2015到年，县区人口为14031，规划近期2025到年，县区人口为16000";
			str_fzfx = "建设用地发展方向为向东发展";
			str_czhfzmb = "2015年城镇人口为6430，城镇人口比重为38%<br>2015年城镇人口为8552，城镇人口比重为44%";
			TableAssign.setablevalue(str_ghqmc, str_xmmc, str_bgmc, str_kjbj,
					str_xzqh, str_rjztmj, str_ghqmj, str_gdqx, str_znjg,
					str_zqgm, str_fzfx, str_czhfzmb)
			$("#tableInfo").show();
			break;
		default:
			break;
		}
	} else {
		$("#tableInfo").hide();
	}

}
