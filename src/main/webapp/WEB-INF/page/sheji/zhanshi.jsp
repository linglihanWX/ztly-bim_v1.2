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
	<link rel="stylesheet" href="${ctx }/static/page/common//IconFont/iconfont.css">


	<!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
	  	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<link id="ie-style" href="css/ie.css" rel="stylesheet">
	<![endif]-->

	<!--[if IE 9]>
		<link id="ie9style" href="css/ie9.css" rel="stylesheet">
	<![endif]-->

	<!-- start: Favicon -->
	<!-- end: Favicon -->

	<link rel="stylesheet" href="${ctx }/static/page/shigong/jindu/css/sg.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">


</head>

<body>
	<!-- start: Header -->
<div class="navbar">
    <div class="navbar-inner">
        <div class="container-fluid">
            <a class="btn btn-navbar" data-toggle="collapse"
               data-target=".top-nav.nav-collapse,.sidebar-nav.nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
            <a class="brand" href="${ctx }/toLogin"><span>BIM全生命周期管理平台</span></a>

            <!-- start: Header Menu -->
            <div class="nav-no-collapse header-nav">
                <ul class="nav pull-right">
                    <li class="dropdown hidden-phone">
                        <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="icon-bell"></i>
                        </a>
                    </li>
                    <!-- start: Message Dropdown -->
						<li class="dropdown hidden-phone">
							<a class="btn dropdown-toggle"  href="${ctx }/toShezhi">
								<i class="iconfont icon-set"></i>
							</a>
						</li>
						<!-- start: Notifications Dropdown -->
						<li class="dropdown hidden-phone">
							<a class="btn dropdown-toggle" href="${ctx }/toLogin">
								<i class="icon-home" style="font-size: 20px"></i>
							</a>
						</li>
                    <!-- end: Notifications Dropdown -->
                    <!-- start: User Dropdown -->
                    <li class="dropdown">
                        <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="halflings-icon white user"></i><shiro:principal property="nickname"/>
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-menu-title">
                                <span>账户设置</span>
                            </li>
                            <li><a href="#"><i class="halflings-icon user"></i> 文件</a></li>
                            <li><a href="${ctx }/logout"><i class="halflings-icon off"></i>退出登录</a></li>
                        </ul>
                    </li>
                    <!-- end: User Dropdown -->
                </ul>
            </div>

        </div>
    </div>
</div>
<!-- start: Header -->

<div class="container-fluid-full">
    <div class="row-fluid">

        <!-- start: Main Menu -->
        <div id="sidebar-left" class="span2">
            <div class="nav-collapse sidebar-nav">
                <ul class="nav nav-tabs nav-stacked main-menu">
                    <li>
							<a href="${ctx }/keyan/toGaikuang">
								<i class="iconfont icon-kcmanager"></i>
								<span class="hidden-tablet">勘测可研</span>
							</a>
						</li>
						<li class="active">
							<a href="#">
								<i class="iconfont icon-sheji"></i>
								<span class="hidden-tablet">设计协同</span>
							</a>
						</li>
						<li >
							<a href="${ctx }/shigong/toGaikuang">
								<i class="iconfont icon-construct"></i>
								<span class="hidden-tablet">施工管理</span>
							</a>
						</li>
						<li>
							<a href="${ctx }/yunwei/toGaikuang">
								<i class="iconfont icon-Refresh"></i>
								<span class="hidden-tablet">运维管理</span>
							</a>
						</li>
                </ul>
            </div>
        </div>
        <!-- end: Main Menu -->

			<!-- start: Content -->
			<div id="content" class="span10">
				<ul class="breadcrumb">
				<i class="iconfont icon-hxzfont08"></i>
					<li class="lists">
 					<a href="${ctx }/sheji/toGaikuang">项目概况</a>
                    <a href="${ctx }/sheji/toRenwu">任务</a>
                    <a href="${ctx }/sheji/toBIMfangansheji">BIM方案设计</a>
                    <a href="${ctx }/sheji/toWendang">文档管理</a>
                    <a href="#">项目信息</a>                 
                    <a href="${ctx }/sheji/toYijiao">数字移交</a>
                    <a href="#" class="activeList">3D综合展示</a>
					</li>	
				</ul>
				<div class="row-fluid sortable" id="diqiu">
					<iframe src="${ctx}/static/page/sheji/zhanshi/designshow.html" style="width: 100%;height: 100%;border: none;"></iframe>
				</div>
			</div>
		</div>
	</div>
</body>
	<script src="${ctx}/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>
	<script src="${ctx}/static/page/common/js/jquery.noty.js"></script>

</html>