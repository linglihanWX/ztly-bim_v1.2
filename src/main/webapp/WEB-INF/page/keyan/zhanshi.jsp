<%@ page language="java" contentType="text/html;charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>

	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>3D综合展示</title>
	<meta name="description" content="Bootstrap Metro Dashboard">
	<meta name="author" content="Dennis Ji">
	<meta name="keyword" content="Metro, Metro UI, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
	<!-- end: Meta -->
<%@ include file="/WEB-INF/page/common/common.jsp" %>
<%@ include file="/WEB-INF/page/common/common_FD.jsp" %>
	<!-- start: Mobile Specific -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- end: Mobile Specific -->

	<!-- start: CSS -->
	<link id="bootstrap-style" href="${ctx }/static/page/common/css/bootstrap.min.css" rel="stylesheet">
	<link href="${ctx }/static/page/common/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link id="base-style" href="${ctx }/static/page/common/css/style.css" rel="stylesheet">
	<link id="base-style-responsive" href="${ctx }/static/page/common/css/style-responsive.css" rel="stylesheet">

	<!-- end: CSS -->
	<link rel="stylesheet" href="${ctx }/static/page/common/css/common.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/IconFont/iconfont.css">
	<script src="${ctx }/static/page/common/js/FreeDoTool.js"></script>
	<link rel="stylesheet" href="${ctx }/static/page/common/js/zTreeStyle/zTreeStyle.css">
	<script src="${ctx }/static/page/common/js/zTreeStyle/ztree.js"></script>
	<link rel="stylesheet" href="${ctx }/static/page/common/js/zTreeStyle/zTreeStyle.css">
	<link rel="stylesheet" href="${ctx }/static/page/keyan/zhanshi/css/zhanshi.css">
		<link rel="stylesheet" href="${ctx }/static/page/common/css/appendTools.css">
	<script src="${ctx }/static/page/common/js/echarts.common.min.js"></script>
 <link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">


</head>

<body>
<%@ include file="/WEB-INF/page/common/iframe/head.jsp" %>
<%@ include file="/WEB-INF/page/common/iframe/left.jsp" %>
<span class="keyan" id="moduletype"></span>
			<!-- start: Content -->
			<div id="content" class="span10">
				<ul class="breadcrumb">
					<li class="lists">
					<i class="iconfont icon-hxzfont08"></i>
						<a href="${ctx }/keyan/toGaikuang">项目概况</a>
						<a href="${ctx }/keyan/toShuiwen">水文数据</a>
						<a href="${ctx }/keyan/toHuanjing">环境数据</a>
						<a href="${ctx }/keyan/toDizhi">地质数据</a>
						<a href="#">风险数据</a>
						<a href="#">环评报告</a>
						<a href="#">政府批文</a>
						<a href="#">项目信息</a>
						<a href="#">数据导出</a>
						<a href="${ctx }/keyan/toXuanxian">规划选线</a>
						<a href="#" class="activeList">3D综合展示</a>
					</li>
					
				</ul>
				<div class="row-fluid sortable">
					<div id="tree" class="ztree"></div>
						<div class="msgInfo" id="showmsg">
        					<h1 id="information"></h1>
   						</div>
					<div id="earth"></div>
				</div>
				
			</div>
		</div>
	</div>
			<div id="tableInfo">
		<p><span>详细</span><span>关闭</span></p>

		<div class="tableContent">
			<table border="1">
				<tbody>
				<tr>
					<td>规划区名称</td>
					<td id="T_ghqmc"></td>
					<td>项目名称</td>
					<td id="T_xmmc"></td>
				</tr>
				<tr>
					<td>报告名称</td>
					<td id="T_bgmc"></td>
					<td>空间布局</td>
					<td id="T_kjbj"></td>
				</tr>
				<tr>
					<td>行政区划</td>
					<td id="T_xzqh"></td>
					<td>人均用地面积</td>
					<td id="T_rjztmj"></td>
				</tr>
				<tr>
					<td>规划区面积</td>
					<td id="T_ghqmj"></td>
					<td>规划期限</td>
					<td id="T_gdqx"></td>
				</tr>
				<tr>
					<td>职能结构</td>
					<td id="T_znjg"></td>
					<td>镇区规模</td>
					<td id="T_zqgm"></td>
				</tr><tr>
					<td>发展方向</td>
					<td id="T_fzfx"></td>
					<td>城镇化发展目标</td>
					<td id="T_czhfzmb"></td>
				</tr>
				</tbody>
			</table>
		</div>

	<!-- start: JavaScript-->
	<script src="${ctx }/static/page/common/js/jquery-ui.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.noty.js"></script>
	<script src="${ctx }/static/page/common/js/tool.js"></script>
	<script src="${ctx }/static/page/common/js/tableassign.js"></script>
	<script src="${ctx }/static/webgl/drillingColumn/js/FDDrillingMgr.js"></script>
	<script src="${ctx }/static/page/common/js/appendTool.js"></script>
	<script src="${ctx }/static/page/keyan/zhanshi/js/zhanshi_viewer.js"></script>
	<script src="${ctx }/static/webgl/Tool/surveyCallBack.js"></script>
	<script src="${ctx }/static/page/keyan/zhanshi/js/zhanshi.js"></script>
	<script type="text/javascript">
	var shuiwenJson = ${shuiwenstr}
	var huanjingJson = ${huanjingstr}
	var dizhiJson = ${dizhistr}
	</script>
	<!-- end: JavaScript-->
	

</body>

</html>