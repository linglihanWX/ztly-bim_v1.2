<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>

	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>其他系统</title>
	<meta name="description" content="Bootstrap Metro Dashboard">
	<meta name="author" content="Dennis Ji">
	<meta name="keyword" content="Metro, Metro UI, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
	<!-- end: Meta -->
<%@ include file="/WEB-INF/page/common/common.jsp" %>
	<!-- start: Mobile Specific -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- end: Mobile Specific -->

	<!-- start: CSS -->
	<link id="bootstrap-style" href="${ctx}/static/page/common/css/bootstrap.min.css" rel="stylesheet">
	<link href="${ctx}/static/page/common/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link id="base-style" href="${ctx}/static/page/common/css/style.css" rel="stylesheet">
	<link id="base-style-responsive" href="${ctx}/static/page/common/css/style-responsive.css" rel="stylesheet">

	<!-- end: CSS -->
	<link rel="stylesheet" href="${ctx}/static/page/common/css/common.css">
	<link rel="stylesheet" href="${ctx}/static/page/common/css/reset.css">
	<link rel="stylesheet" href="${ctx}/static/page/common/IconFont/iconfont.css">
	<link rel="stylesheet" href="${ctx}/static/page/yunwei/jicheng/css/jicheng.css">	
    <link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">
</head>

<body>
<%@ include file="/WEB-INF/page/common/iframe/head.jsp" %>
<%@ include file="/WEB-INF/page/common/iframe/left.jsp" %>
<span class="yunwei" id="moduletype"></span>
			<!-- start: Content -->
			<div id="content" class="span10">
				<ul class="breadcrumb">
					<i class="iconfont icon-hxzfont08"></i>
					<li class="lists">
					   <a href="${ctx }/yunwei/toGaikuang">项目概况</a>
						<a href="${ctx }/yunwei/toKongjianManage">空间管理</a>
						<a href="${ctx }/yunwei/toZichan">资产管理</a>
						<a href="#" >巡检管理</a>
						<a href="#">维护管理</a>
						<a href="#">调度管理</a>
						<a href="#">风险管控</a>
						<a href="#">应急指挥</a>
						<a href="#" class="activeList">其他系统</a>
						<a href="#">知识库建设</a>
					</li>


				</ul>
				<img src="${ctx }/static/page/yunwei/jicheng/img/jicheng.jpg" alt="">

			</div>
		</div>
	</div>


	<!-- start: JavaScript-->

	<script src="${ctx}/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>
	<script src="${ctx}/static/page/common/js/jquery.noty.js"></script>
	<!-- end: JavaScript-->
	<script src="${ctx}/static/page/yunwei/jicheng/js/jicheng.js"></script>
    <script src="${ctx }/static/webgl/pModel/js/move.js"></script>
</body>

</html>