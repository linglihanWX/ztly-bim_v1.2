$(function () {
	var h = $(".container-fluid-full").height();
	var h1 = $("#content .breadcrumb").height();
	$("#tree").height(h - h1 - 24);
	FreedoApp.init("earth");
	EnvironmentViewer.initLeftClick(FreedoApp.viewers["earth"],showlabel);
	FreedoApp.viewers["earth"].camera.setView({
				destination : new FreeDo.Cartesian3(-2176905.1385308662,4471880.533473881,3995906.2301306115),
			    orientation : {
			        heading : 0.8982847035993551,
			        pitch : -1.0446122396829853,
			        roll : 0.005203217157572659
			    }
			});
    tool.drag("#tableInfo");
    $("#tableInfo p span:last-of-type").click(function () {
        $("#tableInfo").hide();
    });
	var surveymanager = new SurveyManager(FreedoApp.viewers["earth"],function(){}); 
	
	var treedata = [ {
		"id" : 0,
		"pId" : -1,
		"name" : "环境数据"
	} ]
	var environmentEntitydata = {}
	var environmentEntity = {}
	var position = []
	for (var i = 0; i < nodeJson.length; i++) {
		// 加载水文图层
		environmentEntitydata = JSON.parse(nodeJson[i].entity);
		// 初始化树时所需要的数据
		treedata.push({
			"id" : nodeJson[i].id,
			"pId" : 0,
			"name" : environmentEntitydata.label.text
		});
		environmentEntity = FreedoApp.viewers["earth"].entities.add({
			id:nodeJson[i].id,
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
		environment[nodeJson[i].id]=environmentEntity;
	}
            var zTreeObj;
            var setting = {
           		check:{
           			enable:true
           		},
                data: {
                    simpleData: {
                        enable: true,
                        idKey: "id",
                        pIdKey: "pId",
                        rootPId: "0"
                    }
                },
                callback:{
                	
                	onClick:function(event, treeId, treeNode){
                		$("#tableInfo").hide();
						var id = treeNode.id;
						FreedoApp.viewers["earth"].zoomTo(environment[id]);

					},
				     onCheck:function(event, treeId, treeNode){
				    	 if(treeNode){
				    		 	checkflag =treeNode.checked;
						 }
				    	 if(checkflag){
				    		 environment[treeNode.id].show=true;
				    	 }else{
				    		 environment[treeNode.id].show=false;
				    	 }
				     },
                }
            }
            zTreeObj = $.fn.zTree.init( $("#tree"), setting, treedata);
            zTreeObj.checkAllNodes(true);
            zTreeObj.expandAll(true);

	/**
	 *工具栏按钮点击 
	 */
	$("#appendTools i").each(function(){
		$(this).click(function(){
			if($(this).hasClass("active")){
			//设置方法为none
			surveymanager.setSurveyType(SurveyType.NONE);
			//移除原有的监听事件
			EnvironmentViewer.removeListener();
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
			EnvironmentViewer.initLeftClick(FreedoApp.viewers["earth"],showlabel);
		}
		});
	});
})
var str_ghqmc,str_xmmc,str_bgmc,str_kjbj,str_xzqh,str_rjztmj,str_ghqmj,str_gdqx,str_znjg,str_zqgm,str_fzfx,str_czhfzmb =null;
function showlabel(picked){
	if(picked!=undefined){
		let	name = picked.id.name;
		switch (name) {
		case "gaoxiaowangcenchaiquanqu":
			str_ghqmc="高小王村拆迁区";
			str_xmmc="高小王村拆迁区";
			str_bgmc="高小王村拆迁区控制性工程规划报告书";
			str_kjbj="中心村以均匀布局形式带动基层村发展的空间结构形态";
			str_xzqh="河北省保定市空城县";
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
		case "zhangweizhuangtoucenchaiqianqu1":
			str_ghqmc="张巍庄头村拆迁区一区";
			str_xmmc="张巍庄头村拆迁区一区";
			str_bgmc="张巍庄头村拆迁区一区控制性工程规划报告书";
			str_kjbj="中心村以均匀布局形式带动基层村发展的空间结构形态";
			str_xzqh="河北省保定市安新县";
			str_rjztmj="97.24平方米";
			str_ghqmj="697.3公顷";
			str_gdqx="2008-2025年";
			str_znjg="中心镇是全镇的政治、经济、文化及交通中心，是以发展第三产业、农副产品精深加工及蔬菜等包装业和物流业为主的综合开发区，中心村是村民行政、文化娱乐中心、初级商贸中心，基层村是村民活动中心";
			str_zqgm="现状人口为8350，规划近期到2010年，镇区人口为8750，规划近期2015到年，镇区人口为9750，规划近期2025到年，镇区人口为10450";
			str_fzfx="旅游用地发展方向为向东发展";
			str_czhfzmb="2015年城镇人口为8430，城镇人口比重为33%<br>2015年城镇人口为10452，城镇人口比重为38%";
			TableAssign.setablevalue(str_ghqmc,str_xmmc,str_bgmc,str_kjbj,str_xzqh,str_rjztmj,str_ghqmj,str_gdqx,str_znjg,str_zqgm,str_fzfx,str_czhfzmb)
			$("#tableInfo").show();
			break;
		case "zhangweizhuangtoucunchaiqianqu2":
			str_ghqmc="张巍庄头村拆迁区二区";
			str_xmmc="张巍庄头村拆迁区二区";
			str_bgmc="张巍庄头村拆迁区二区控制性工程规划报告书";
			str_kjbj="中心村以均匀布局形式带动基层村发展的空间结构形态";
			str_xzqh="河北省保定市安新县";
			str_rjztmj="88.26平方米";
			str_ghqmj="785公顷";
			str_gdqx="2008-2025年";
			str_znjg="中心镇是全镇的政治、经济、文化及交通中心，是以发展第三产业、农副产品精深加工及蔬菜等包装业和物流业为主的综合开发区，中心村是村民行政、文化娱乐中心、初级商贸中心，基层村是村民活动中心";
			str_zqgm="现状人口为8350，规划近期到2010年，镇区人口为8750，规划近期2015到年，镇区人口为9750，规划近期2025到年，镇区人口为10450";
			str_fzfx="旅游用地发展方向为向东发展";
			str_czhfzmb="2015年城镇人口为8430，城镇人口比重为33%<br>2015年城镇人口为10452，城镇人口比重为38%";
			TableAssign.setablevalue(str_ghqmc,str_xmmc,str_bgmc,str_kjbj,str_xzqh,str_rjztmj,str_ghqmj,str_gdqx,str_znjg,str_zqgm,str_fzfx,str_czhfzmb)
			$("#tableInfo").show();
			break;
		case "xiaoyangcunchaiqianqu":
			str_ghqmc="小阳村拆迁区";
			str_xmmc="小阳村拆迁区";
			str_bgmc="小阳村拆迁区控制性工程规划报告书";
			str_kjbj="中心村以均匀布局形式带动基层村发展的空间结构形态";
			str_xzqh="河南郑州市新密市小阳村";
			str_rjztmj="98.24平方米";
			str_ghqmj="853公顷";
			str_gdqx="2008-2025年";
			str_znjg="中心镇是全镇的政治、经济、文化及交通中心，是以发展第三产业、农副产品精深加工及蔬菜等包装业和物流业为主的综合开发区，中心村是村民行政、文化娱乐中心、初级商贸中心，基层村是村民活动中心";
			str_zqgm="现状人口为8350，规划近期到2010年，镇区人口为8750，规划近期2015到年，镇区人口为9750，规划近期2025到年，镇区人口为10450";
			str_fzfx="旅游用地发展方向为向东发展";
			str_czhfzmb="2015年城镇人口为8430，城镇人口比重为33%<br>2015年城镇人口为10452，城镇人口比重为38%";
			TableAssign.setablevalue(str_ghqmc,str_xmmc,str_bgmc,str_kjbj,str_xzqh,str_rjztmj,str_ghqmj,str_gdqx,str_znjg,str_zqgm,str_fzfx,str_czhfzmb)
			$("#tableInfo").show();
			break;
		case "dayangcunchaiqianqu":
			str_ghqmc="大阳村拆迁区";
			str_xmmc="大阳村拆迁区";
			str_bgmc="大阳村拆迁区控制性工程规划报告书";
			str_kjbj="中心村以均匀布局形式带动基层村发展的空间结构形态";
			str_xzqh="山东省日照市五莲县大阳村";
			str_rjztmj="78.24平方米";
			str_ghqmj="600公顷";
			str_gdqx="2008-2025年";
			str_znjg="中心镇是全镇的政治、经济、文化及交通中心，是以发展第三产业、农副产品精深加工及蔬菜等包装业和物流业为主的综合开发区，中心村是村民行政、文化娱乐中心、初级商贸中心，基层村是村民活动中心";
			str_zqgm="现状人口为8350，规划近期到2010年，镇区人口为8750，规划近期2015到年，镇区人口为9750，规划近期2025到年，镇区人口为10450";
			str_fzfx="旅游用地发展方向为向东发展";
			str_czhfzmb="2015年城镇人口为8430，城镇人口比重为33%<br>2015年城镇人口为10452，城镇人口比重为38%";
			TableAssign.setablevalue(str_ghqmc,str_xmmc,str_bgmc,str_kjbj,str_xzqh,str_rjztmj,str_ghqmj,str_gdqx,str_znjg,str_zqgm,str_fzfx,str_czhfzmb)
			$("#tableInfo").show();
			break;
		default:
			break;
		}
	}else{
		$("#tableInfo").hide();
	}	
}
