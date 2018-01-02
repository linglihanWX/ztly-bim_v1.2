<%@ page language="java" contentType="text/html;charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>

	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>版本对比</title>
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
	<link rel="stylesheet" href="${ctx }/static/page/common/js/zTreeStyle/zTreeStyle.css">
	<script src="${ctx }/static/page/common/js/zTreeStyle/ztree.js"></script>
	<link rel="stylesheet" href="${ctx }/static/page/sheji/duibi/css/duibi.css">
	
    <link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">
</head>

<body>
	<%@ include file="/WEB-INF/page/common/iframe/head.jsp" %>
<%@ include file="/WEB-INF/page/common/iframe/left.jsp" %>

			<!-- start: Content -->
			<div id="content" class="span10">
				<ul class="breadcrumb">
					<i class="iconfont icon-hxzfont08"></i>
					<li class="lists">
                    <a href="#">项目概况</a>
                    <a href="${ctx }/sheji/toRenwu">任务</a>
                    <a href="${ctx }/sheji/toBIMfangansheji" class="activeList">BIM方案设计</a>
                    <a href="${ctx }/sheji/toWendang">文档管理</a>
                    <a href="#">项目信息</a>
                    <a href="${ctx }/sheji/toYijiao">数字移交</a>
                    <a href="${ctx }/sheji/toZhanshi">3D综合展示</a>
                </li>
					<li style="margin-left:20px;">
					<input id="shijiaotongbu" type="checkbox">视角同步
					<input id="gaoliangchayi" type="checkbox">高亮差异
					<input id="moreInfo" type="checkbox">审批信息</li>
				</ul>
				<div id="tree" class="ztree"></div>
				<div class="row-fluid sortable">
					
						<select name="" class="sel">
							<option value="">版本一</option>
							<option value="">版本二</option>
							<option value="">版本三</option>
						</select>
					
					<iframe id="desiframe" src="${ctx }/static/page/iframe/design_mainbuilding_VC/page/desVerPage.html" frameborder="1"></iframe>
					<iframe id="nowiframe" src="${ctx }/static/page/iframe/design_mainbuilding_VC/page/nowVerPage.html" frameborder="1"></iframe>
					<iframe id="compreiframe" src="${ctx }/static/page/iframe/design_mainbuilding_VC/page/comprehensivePage.html" frameborder="1"></iframe>
				</div>
				<div id="moreInfoBox">

								<ul>
									<li>节点</li>
									<li>审批人</li>
									<li>审批时间</li>
									<li>内容</li>
									<li>审批意见</li>
									<li>1</li>
									<li>组长</li>
									<li>2017-10-12</li>
									<li>可以在优化一下</li>
									<li>通过</li>
									<li>2</li>
									<li>部门负责人</li>
									<li>2017-10-13</li>
									<li>管线可以粗一些</li>
									<li>通过</li>
									<li>3</li>
									<li>专业负责人</li>
									<li>2017-10-23</li>
									<li>电缆可以粗一些</li>
									<li>审批中</li>
								</ul>
							</div>
			</div>
		</div>
	</div>
	<script>
        $(function () {

        })
	</script>

	<!-- start: JavaScript-->
	<script src="${ctx }/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.noty.js"></script>
	<script src="${ctx }/static/page/sheji/duibi/js/duibi.js"></script>
	<!-- end: JavaScript-->

</body>

</html>