<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>

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
	<script src="${ctx }/static/page/common/js/jquery-1.9.1.min.js"></script>
	<link rel="stylesheet" href="${ctx }/static/page/shigongguanli/jinduguanli/css/sg.css">
	
    <link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">
</head>

<body>
<%@ include file="/WEB-INF/page/common/iframe/head.jsp" %>
<%@ include file="/WEB-INF/page/common/iframe/left.jsp" %>
<span class="shigong" id="moduletype"></span>
			<!-- start: Content -->
			<div id="content" class="span10">
				<ul class="breadcrumb">
					<li class="lists">
					<i class="iconfont icon-hxzfont08"></i>
              		<a href="${ctx }/shigong/toGaikuang">项目概况</a>
						<a href="${ctx }/shigong/toEbs">进度管理</a>
						<a href="${ctx }/shigong/toPm">场景管理</a>
						<a href="${ctx }/shigong/toAnquan">安全管理</a>
						<a href="${ctx }/shigong/toDungou">盾构监测</a>
						<a href="${ctx }/shigong/toFengxian">风险管理</a>
						<a href="#">质量管理</a>
						<a href="#">成本管理</a>
						<a href="#">合同管理</a>
						<a href="#">施工日志</a>
						<a href="#">项目信息</a>
						<a href="#" class="activeList">3D综合展示</a>
					</li>
					
				</ul>
				<div class="row-fluid sortable" id="diqiu">
					<iframe src="${ctx }/static/page/shigongguanli/workshow/workshow.html" style="width: 100%;height: 100%;border: none;"></iframe>
				</div>
			</div>

		</div>
			
	</div>
	
</body>
	<script src="${ctx}/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>
	<script src="${ctx}/static/page/common/js/jquery.noty.js"></script>

</html>