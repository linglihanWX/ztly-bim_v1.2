var dizhidata=[]
$(function () {
	var h = $(".container-fluid-full").height();
	var h1 = $("#content .breadcrumb").height();
	$("#tree").height(h - h1 - 24);
			FreedoApp.init("earth");
        	FreedoApp.viewers["earth"].camera.setView( 
        			{
        				destination : new FreeDo.Cartesian3(-2175972.075982492,4461132.435519839,3992238.28299535),
        			    orientation : {
        			        heading : 6.068072024715445,
        			        pitch : -0.2942832510125577,
        			        roll : 6.282452688055265
        			    }
        			});
        	var surveymanager = new SurveyManager(FreedoApp.viewers["earth"],function(){});
			var drillingMgr = FDDrillingMgr(FreedoApp.viewers["earth"]);
			var dizhistr = "[";
			for (var i = 0; i < nodeJson.length; i++) {
				if(i!=nodeJson.length-1){
					dizhistr+=nodeJson[i].primitive+",";
				}else{
					dizhistr+=nodeJson[i].primitive+"]";
				}
			}
			dizhidata = JSON.parse(dizhistr);
			for (let i = 1; i <= nodeJson.length; i++) {
				for (let j = 1; j <= dizhidata[i-1].drilling.length; j++) {
					$("#dzc"+nodeJson[i-1].id+"depth"+j).text(dizhidata[i-1].drilling[j-1].height);
					$("#dzc"+nodeJson[i-1].id+"height"+j).text(dizhidata[i-1].drilling[j-1].altitude);
					$("#dzc"+nodeJson[i-1].id+"standardheight"+j).text(dizhidata[i-1].drilling[j-1].standardheight);
					
				}
			}
			var treedata = [{
				"id" : 0,
				"pId" : -1,
				"name" : "钻井柱编号"
			}]
			for(var i=0;i<dizhidata.length;i++){
				drillingMgr.add(dizhidata[i]);
				treedata.push({
					"id" : nodeJson[i].id,
					"pId" : 0,
					"name" : dizhidata[i].id,
					"index":i
				});
				}
			drillingMgr.startlistening(function(){});
	
                    var zTreeObj;
                    var setting = {
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
                    			var zjzid = treeNode.index;
									GeologyViewer.fly(FreedoApp.viewers["earth"],nodeJson[zjzid].drillinglon,nodeJson[zjzid].drillinglat,70);
									setablevalue1(nodeJson[zjzid].drillingnum,format(nodeJson[zjzid].drillingdate),nodeJson[zjzid].drillingdepth,nodeJson[zjzid].drillingaltitude);
									$(".detailInfo").show();

                    		}
                    	}
                    };
                    zTreeObj = $.fn.zTree.init($("#tree"), setting, treedata);
                    zTreeObj.expandAll(true);

            GeologyViewer.initLeftClick(FreedoApp.viewers["earth"],flyToModel);
            /**
			 *工具栏按钮点击 
			 */
			$("#appendTools i").each(function(){
				$(this).click(function(){
					if($(this).hasClass("active")){
					//设置方法为none
					surveymanager.setSurveyType(SurveyType.NONE);
					//移除原有的监听事件
					GeologyViewer.removeListener();
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
					GeologyViewer.initLeftClick(FreedoApp.viewers["earth"],flyToModel);
				}
				});
			});
			
			
})

var flyToModel=function(picked)
{	
	//FreedoApp.viewers["earth"].scene.preRender.removeEventListener(setdivfollow)
	if(picked!=null){
		var treeObj = $.fn.zTree.getZTreeObj("tree");
		if(picked.primitive.boundingSphere!=undefined){
			var index = picked.id.split("_");
			var zjzid = parseInt(index[0].substring(3));
			var nodes = treeObj.getNodesByParam("id", zjzid, null);
			var zjzindex = nodes[0].index
			var dzcindex = parseInt(index[1]);
			var lon = parseFloat(dizhidata[zjzindex].position.lon);
			var lat = parseFloat(dizhidata[zjzindex].position.lat);
			var altitude = parseFloat(dizhidata[zjzindex].drilling[dzcindex].altitude);
		
			GeologyViewer.fly(FreedoApp.viewers["earth"],lon,lat,altitude+70);
			var dcname =""
				switch (dzcindex) {
				case 0:
					dcname="粉质粘土";
					break;
				case 1:
					dcname="泥岩";
					break;
				case 2:
					dcname="沙岩";
					break;
				case 3:
					dcname="素填土";
					break;

				default:
					dcname="强风华带";
					break;
				}
			setablevalue2(dcname,dizhidata[zjzindex].drilling[dzcindex].height,dizhidata[zjzindex].drilling[dzcindex].altitude,dizhidata[zjzindex].drilling[dzcindex].standardheight);
			}else{
				var nodes = treeObj.getNodesByParam("name", picked.id.id, null);
				if (nodes.length>0) {
					treeObj.selectNode(nodes[0]);
					GeologyViewer.fly(FreedoApp.viewers["earth"],nodeJson[nodes[0].index].drillinglon,nodeJson[nodes[0].index].drillinglat,70);
					setablevalue1(nodeJson[nodes[0].index].drillingnum,format(nodeJson[nodes[0].index].drillingdate),nodeJson[nodes[0].index].drillingdepth,nodeJson[nodes[0].index].drillingaltitude);
					$(".detailInfo").show();

			}
			
		}
	}else{
		$(".detailInfo").hide();
	}
	
}
var setablevalue1 = function(num,date,deep,height){
	$(".detailInfo ul").html("<li><span>钻孔编号</span><input type='text' value='"+num+"'/></li><li><span>日期</span><input type='text' value='"+date+"'/></li><li><span>钻孔深度</span><input type='text' value='"+deep+"米'/></li><li><span>孔口高程</span><input type='text' value='"+height+"米'/></li>");
}
var setablevalue2 = function(name,deep,thick,sheight){
	$(".detailInfo ul").html("<li><span>名称</span><input type='text' value='"+name+"'/></li><li><span>深度</span><input type='text' value='"+deep+"米'/></li><li><span>厚度</span><input type='text' value='"+thick+"米'/></li><li><span>标高</span><input type='text' value='"+sheight+"米'/></li>");
}

