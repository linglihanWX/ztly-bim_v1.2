<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">

<head>

	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>文档管理</title>
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

	<!-- end: CSS -->
	<link rel="stylesheet" href="${ctx }/static/page/common/css/common.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
	<link rel="stylesheet" href="${ctx }/static/page/common//IconFont/iconfont.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/js/zTreeStyle/zTreeStyle.css">
	<script src="${ctx }/static/page/common/js/zTreeStyle/ztree.js"></script>
	<link rel="stylesheet" href="${ctx }/static/page/sheji/wendang/css/doc.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">
</head>

<body>
	<%@ include file="/WEB-INF/page/common/iframe/head.jsp" %>
<%@ include file="/WEB-INF/page/common/iframe/left.jsp" %>
<span class="sheji" id="moduletype"></span>
			<!-- start: Content -->
			<div id="content" class="span10">
				<ul class="breadcrumb">
				<i class="iconfont icon-hxzfont08"></i>
					<li class="lists">
					<a href="${ctx }/sheji/toGaikuang">项目概况</a>
                    <a href="${ctx }/sheji/toRenwu">任务</a>
                    <a href="${ctx }/sheji/toBIMfangansheji">BIM方案设计</a>
                    <a href="#" class="activeList">文档管理</a>
                    <a href="#">项目信息</a>
                    
                    <a href="${ctx }/sheji/toYijiao">数字移交</a>
                    <a href="${ctx }/sheji/toZhanshi">3D综合展示</a>
					</li>
					<li class="btnStandard">
						<input type="button" value="上传" class="btnActive">
						<input type="button" value="修改">
						<input type="button" value="查看">
						<input type="button" value="审批">
					</li>
				</ul>

				<div id="tree" class="ztree"></div>
				<div class="row-fluid sortable">
					
					<div class="box span12">
						<div class="box-header" data-original-title>
							<h2><i class="iconfont icon-hxzfont08"></i><span class="break"></span>水文数据</h2>
							<div class="box-icon">
								<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
								<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
								<!-- <a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a> -->
							</div>
						</div>
						<div class="box-content">
							<table class="table table-striped table-bordered bootstrap-datatable datatable" id="data">
								<thead>
									<tr>
										<th>文件名</th>
										<th>版本</th>
										<th>大小</th>
										<th>修改时间</th>
										<th>关联模型</th>
										<th>操作</th>
										<th>状态</th>
									</tr>
								
								</thead>
								<tbody>
									<tr>
										<td><img src='../static/page/sheji/wendang/img/pdf.jpg' alt=''>S-1-01-010.PDF</td>
										<td>V2.1</td>
										<td>821.27 kb</td>
										<td>2017/03/04 17:36:25</td>
										<td>土建系统</td>
										<td><button class='xz'>下载</button><button class='yl'>预览</button></td><td>已提交</td>
									</tr>
									<tr>
										<td><img src='../static/page/sheji/wendang/img/pdf.jpg' alt=''>S-1-03-011.PDF</td>
										<td>V2.2</td>
										<td>865.01 kb</td>
										<td>2017/07/12 12:36:25</td>
										<td>土建系统</td>
										<td><button class='xz'>下载</button><button class='yl'>预览</button></td><td>已提交</td>
									</tr>
									<tr>
										<td><img src='../static/page/sheji/wendang/img/pdf.jpg' alt=''>S-1-03-012.PDF</td>
										<td>V2.3</td>
										<td>899.36 kb</td>
										<td>2017/08/29 06:36:25</td>
										<td>土建系统</td>
										<td><button class='xz'>下载</button><button class='yl'>预览</button></td><td>已提交</td>
									</tr>
									<tr>
										<td><img src='../static/page/sheji/wendang/img/pdf.jpg' alt=''>S-1-05-013.PDF</td>
										<td>V2.3</td>
										<td>912.86 kb</td>
										<td>2017/09/23 22:12:05</td>
										<td>土建系统</td>
										<td><button class='xz'>下载</button><button class='yl'>预览</button></td><td>已提交</td>
									</tr>
								</tbody>
							</table>
							
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
	<script src="${ctx }/static/page/sheji/wendang/js/doc.js"></script>

</body>

</html>