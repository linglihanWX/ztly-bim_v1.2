<%@ page language="java" contentType="text/html;charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>

	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>编码库</title>
	<meta name="description" content="Bootstrap Metro Dashboard">
	<meta name="author" content="Dennis Ji">
	<meta name="keyword" content="Metro, Metro UI, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
	<!-- end: Meta -->
<%@ include file="/WEB-INF/page/common/common.jsp" %>
	<!-- start: Mobile Specific -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- end: Mobile Specific -->

	<!-- start: CSS -->
	<link id="bootstrap-style" href="${ctx }/static/page/common/css/bootstrap.min.css" rel="stylesheet">
	<link href="${ctx }/static/page/common/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link id="base-style" href="${ctx }/static/page/common/css/style.css" rel="stylesheet">
	<link id="base-style-responsive" href="${ctx }/static/page/common/css/style-responsive.css" rel="stylesheet">

	<link rel="stylesheet" href="${ctx }/static/page/common/css/common.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/IconFont/iconfont.css">
	<script src="${ctx }/static/page/common/js/jquery-1.9.1.min.js"></script>
	<link rel="stylesheet" href="${ctx }/static/page/common/js/zTreeStyle/zTreeStyle.css">
	<script src="${ctx }/static/page/common/js/zTreeStyle/ztree.js"></script>
	<link rel="stylesheet" href="${ctx }/static/page/set/css/codeLibrary.css">
</head>

<body>
	<%@ include file="/WEB-INF/page/common/iframe/head.jsp" %>
	<div class="container-fluid-full">
		<div class="row-fluid">
			<!-- start: Content -->
			<div id="content" class="span10">
				<ul class="breadcrumb">
					<li style="margin-right: 20px;"><i class="iconfont icon-return"></i>返回</li>

					<i class="iconfont icon-hxzfont08"></i>
					<li class="lists">
						<a href="${ctx }/toSet" >用户</a>
						<a href="#">权限</a>
						<a href="#">组织</a>
						<a href="${ctx }/toCodeLibrary" class="activeList">编码库</a>
						<a href="#">文档库</a>
						<a href="#">基础库配置</a>
					</li>
				</ul>


				<div class="row-fluid sortable">
					<div class="box span12" style="padding: 0">
						<div class="box-header" data-original-title>
							<h2><i class="iconfont icon-hxzfont08"></i><span class="break"></span>编码库信息</h2>
							<div class="box-icon">
								<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
								<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
								<!-- <a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a> -->
							</div>
						</div>
						<div class="box-content">
							<img src="${ctx }/static/page/set/img/codelibrary.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- start: JavaScript-->
	<script src="${ctx }/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.noty.js"></script>

	<!-- end: JavaScript-->
	<script src="${ctx }/static/page/set/js/set.js"></script>

</body>

</html>