<%@ page language="java" contentType="text/html;charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>

	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>环境数据</title>
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
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,latin-ext'
	    rel='stylesheet' type='text/css'>
	<!-- end: CSS -->
	<link rel="stylesheet" href="${ctx }/static/page/common/css/common.css">

	<link rel="stylesheet" href="${ctx }/static/page/common/IconFont/iconfont.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
	<script src="${ctx }/static/page/common/js/FreeDoTool.js"></script>


	<link rel="stylesheet" href="${ctx }/static/page/common/js/zTreeStyle/zTreeStyle.css">
	<script src="${ctx }/static/page/common/js/zTreeStyle/ztree.js"></script>
	<script src="${ctx }/static/page/common/js/echarts.common.min.js"></script>
	<link rel="stylesheet" href="${ctx }/static/page/keyan/shuiwen/css/shuiwen.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/css/appendTools.css">
	 <link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">



</head>

<body>
<!-- start: Header -->
<%@ include file="/WEB-INF/page/common/iframe/head.jsp" %>
<%@ include file="/WEB-INF/page/common/iframe/left.jsp" %>
<span class="keyan" id="moduletype"></span>
			<!-- start: Content -->
			<div id="content" class="span10">
				<ul class="breadcrumb">
				<i class="iconfont icon-hxzfont08"></i>
					<li class="lists">
						<a href="${ctx }/keyan/toGaikuang">项目概况</a>
						<a href="${ctx }/keyan/toShuiwen">水文数据</a>
						<a href="#" class="activeList">环境数据</a>
						<a href="${ctx }/keyan/toDizhi">地质数据</a>
						<a href="#">风险数据</a>
						<a href="#">环评报告</a>
						<a href="#">政府批文</a>
						<a href="#">项目信息</a>
						<a href="#">数据导出</a>
						<a href="${ctx }/keyan/toXuanxian">规划选线</a>
						<a href="${ctx }/keyan/toZhanshi">3D综合展示</a>
					</li>
					<li>
						<div id="div1" class="close1">
							<div id="div2" class="close2"></div>
						</div>
						<span class="twoThree">2D</span>
					</li>
				</ul>


				<div class="row-fluid sortable">
					<div class="box span12">
						<div class="box-header" data-original-title>
							<h2><i class="iconfont icon-hxzfont08"></i><span class="break"></span>环境数据</h2>
							<div class="box-icon">
								<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
								<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
								<!-- <a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a> -->
							</div>
						</div>
						<div class="box-content">

							<table class="table table-striped table-bordered bootstrap-datatable datatable">
								<thead>
									<tr>
										<th rowspan="2">征地编号</th>
										<th rowspan="2">结构物名称</th>
										<th rowspan="2">单位</th>
										<th colspan="2">数量</th>
										<th rowspan="2">备注</th>
										<th rowspan="2">操作</th>

									</tr>
									<tr>
										<th>线路左侧</th>
										<th>线路右侧</th>
									</tr>

								</thead>
								<tbody>
									<c:forEach items="${huanjingList}" var="huanjing">
									<tr>
										<td>${huanjing.reqlandnum }</td>
										<td>${huanjing.structurename }</td>
										<td>${huanjing.unit }</td>
										<td>${huanjing.lineleftnum }</td>
										<td>${huanjing.linerightnum }</td>
										<td>${huanjing.remark }</td>
										<td>${huanjing.operation }</td>
									</tr>
									</c:forEach>
								</tbody>
							</table>
							<div id="tree" class="ztree"></div>
						</div>
					</div>
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


	</div>
	<!-- start: JavaScript-->
	<%-- <script src="${ctx }/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script> --%>
	<script src="${ctx }/static/page/common/js/jquery-ui.js"></script> 
	<script src="${ctx }/static/page/common/js/jquery.noty.js"></script>
	<script src="${ctx }/static/page/common/js/change2D3D.js"></script>
 	<script src="${ctx }/static/page/common/js/tool.js"></script>
 	<script src="${ctx }/static/page/common/js/tableassign.js"></script>
	<script src="${ctx }/static/page/common/js/appendTool.js"></script>
	<script src="${ctx }/static/page/keyan/huanjing/js/huangjing_viewer.js"></script>
	<script src="${ctx }/static/webgl/Tool/surveyCallBack.js"></script>
	<script src="${ctx }/static/page/keyan/huanjing/js/huanjing.js"></script>
	<script type="text/javascript">
	var nodeJson = ${huanjingJson}
	</script>
	


	<!-- end: JavaScript-->

</body>

</html>