<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>

	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>沉降监测</title>
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
	<link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/IconFont/iconfont.css">
	<script src="${ctx }/static/page/common/js/FreeDoTool.js"></script>
	
	<link rel="stylesheet" href="${ctx }/static/page/common/js/zTreeStyle/zTreeStyle.css">
	<script src="${ctx }/static/page/common/js/zTreeStyle/ztree.js"></script>
	<link rel="stylesheet" href="${ctx }/static/page/shigongguanli/downup/css/downup.css">
	<script src="${ctx }/static/page/common/js/echarts.common.min.js"></script>
	<link rel="stylesheet" href="${ctx }/static/page/common/css/appendTools.css">

    <link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">

</head>

<body>
<%@ include file="/WEB-INF/page/common/iframe/head.jsp" %>
<%@ include file="/WEB-INF/page/common/iframe/left.jsp" %>
			<!-- start: Content -->
			<span class="shigong" id="moduletype"></span>
			<div id="content" class="span10">
				<ul class="breadcrumb">
					<a href="${ctx }/toRiskmgmt"><i class="iconfont icon-return"></i>返回</a>
					<li>
                		<a href="${ctx }/shigong/toGaikuang">项目概况</a>
						<a href="${ctx }/shigong/toEbs">进度管理</a>
						<a href="${ctx }/shigong/toPm">场景管理</a>
						<a href="${ctx }/shigong/toAnquan">安全管理</a>
						<a href="${ctx }/shigong/toDungou">盾构监测</a>
						<a href="${ctx }/shigong/toFengxian" class="activeList">风险管理</a>
						<a href="#">质量管理</a>
						<a href="#">成本管理</a>
						<a href="#">合同管理</a>
						<a href="#">施工日志</a>
						<a href="#">项目信息</a>
						<a href="${ctx }/shigong/toZhanshi">3D综合展示</a>
					</li>
				</ul>
				<div class="row-fluid sortable">
					<div class="box span12 changWidth">
						<div class="box-content">
							<div id="tree" class="ztree"></div>
						</div>
					</div>
					<div id="earth"><div id='chart'></div></div>
				</div>
			</div>
		</div>
	</div>
	
</body>
		<script src="${ctx }/static/page/common/js/appendTool.js"></script>
	<script src="${ctx }/static/page/shigongguanli/downup/js/DownupViewer.js"></script>
	<script src="${ctx }/static/webgl/Tool/surveyCallBack.js"></script>
	<script src="${ctx }/static/page/shigongguanli/downup/js/downup.js"></script>
	<script src="${ctx }/static/webgl/pModel/js/move.js"></script>
	<script src="${ctx}/static/page/common/js/FreeDoUtil.js"></script>
	<script src="${ctx}/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>
	<script src="${ctx}/static/page/common/js/jquery.noty.js"></script>


</html>