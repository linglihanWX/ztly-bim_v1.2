<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>

	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>安全管理</title>
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
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,latin-ext'
	    rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="${ctx }/static/page/common/css/common.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/IconFont/iconfont.css">
	<link rel="stylesheet" href="${ctx }/static/page/shigongguanli/safe/css/safe.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">
	<link rel="stylesheet" href="${ctx }/static/page/shigong/anquan/css/anquan.css">
	<!-- end: CSS -->
<script src="${ctx }/static/page/common/js/echarts.common.min.js"></script>
</head>

<body>
<%@ include file="/WEB-INF/page/common/iframe/head.jsp" %>
<%@ include file="/WEB-INF/page/common/iframe/left.jsp" %>
<span class="shigong" id="moduletype"></span>
			<!-- end: Main Menu -->
			<!-- start: Content -->
			<div id="content" class="span10">
				<ul class="breadcrumb">
					<i class="iconfont icon-hxzfont08"></i>
					<li class="lists">
                		<a href="${ctx }/shigong/toGaikuang">项目概况</a>
						<a href="${ctx }/shigong/toJindu">进度管理</a>
						<a href="${ctx }/shigong/toChangjing">场景管理</a>
						<a href="#" class="activeList">安全管理</a>
						<a href="${ctx }/shigong/toDungou">盾构监测</a>
						<a href="${ctx }/shigong/toFengxian">风险管理</a>
						<a href="#">质量管理</a>
						<a href="#">成本管理</a>
						<a href="#">合同管理</a>
						<a href="#">施工日志</a>
						<a href="#">项目信息</a>
						<a href="${ctx }/shigong/toZhanshi">3D综合展示</a>
					</li>
					<li>
						<div id="div1" class="close1">
							<div id="div2" class="close2"></div>
						</div>
						<span class="twoThree">2D</span>
					</li>
				</ul>
				<div class="row-fluid sortable">
					<div id="left">
						<div class="box span12">
							<div class="box-header">
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>安全问题详情</h2>
								<div class="box-icon">
									<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
									<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
									<!--<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>-->
								</div>
							</div>
							<div class="box-content">
								<table class="table table-bordered table-striped table-condensed">
									<thead>
									<tr>
										<th>序号</th>
										<th>WBS名称</th>
										<th>存在隐患</th>
										<th>隐患等级</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>1</td>
										<td class="center">7号 施工支洞</td>
										<td class="center">易燃物品堆放</td>
										<td class="center">一级</td>
									</tr>

									</tbody>
								</table>
								<div class="pagination pagination-centered">
									<ul>
										<li><a href="#">上页</a></li>
										<li class="active">
											<a href="#">1</a>
										</li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">下页</a></li>
									</ul>
								</div>
							</div>
						</div><!--/span-->

						<div class="box span12">
							<div class="box-header">
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>安全整改详情</h2>
								<div class="box-icon">
									<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
									<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
									<!--<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>-->
								</div>
							</div>
							<div class="box-content">
								<table class="table table-bordered table-striped table-condensed">
									<thead>
									<tr>
										<th>序号</th>
										<th>整改编号</th>
										<th>整改情况</th>
										<th>整改日期</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>1</td>
										<td class="center">JRXM-JCHC</td>
										<td class="center">整改中</td>
										<td class="center">2016-09-09</td>
									</tr>
									</tbody>
								</table>
								<div class="pagination pagination-centered">
									<ul>
										<li><a href="#">上页</a></li>
										<li class="active">
											<a href="#">1</a>
										</li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">下页</a></li>
									</ul>
								</div>
							</div>
						</div><!--/span-->

						<div class="box span12">
							<div class="box-header">
								<h2><i class="halflings-icon white list-alt"></i><span class="break"></span>安全事故分布</h2>
								<div class="box-icon">
									<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
									<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
									<!--<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>-->
								</div>
							</div>
							<div class="box-content">
								<!-- <div id="piechart" style="height:300px"></div> -->
								<div id="main" style="width: 100%;height:250px;"></div>
							</div>
						</div>
					</div>
					<div id="right">
						<div class="box span6">
							<div class="box-header">
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>安全问题详情</h2>
								<div class="box-icon">
									<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
									<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
									<!--<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>-->
								</div>
							</div>
							<div class="box-content">
								<table class="table table-bordered table-striped table-condensed">
									<thead>
									<tr>
										<th>序号</th>
										<th>WBS名称</th>
										<th>存在隐患</th>
										<th>隐患等级</th>
									</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td class="center">2节 闸门</td>
											<td class="center">钢铁腐朽老旧</td>
											<td class="center">一级</td>
										</tr>
										<tr>
											<td>2</td>
											<td class="center">3节 闸门</td>
											<td class="center">钢铁腐朽老旧</td>
											<td class="center">一级</td>
										</tr>
									</tbody>
								</table>
								<div class="pagination pagination-centered">
									<ul>
										<li><a href="#">上页</a></li>
										<li class="active">
											<a href="#">1</a>
										</li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">下页</a></li>
									</ul>
								</div>
							</div>
						</div><!--/span-->
						<div class="box span6">
							<div class="box-header">
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>安全问题详情</h2>
								<div class="box-icon">
									<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
									<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
									<!--<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>-->
								</div>
							</div>
							<div class="box-content">
								<table class="table table-bordered table-striped table-condensed">
									<thead>
									<tr>
										<th>序号</th>
										<th>WBS名称</th>
										<th>存在隐患</th>
										<th>隐患等级</th>
									</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td class="center">4节 闸门</td>
											<td class="center">钢铁腐朽老旧</td>
											<td class="center">一级</td>
										</tr>
										<tr>
											<td>2</td>
											<td class="center">5节 闸门</td>
											<td class="center">钢铁腐朽老旧</td>
											<td class="center">一级</td>
										</tr>
									</tbody>
								</table>
								<div class="pagination pagination-centered">
									<ul>
										<li><a href="#">上页</a></li>
										<li class="active">
											<a href="#">1</a>
										</li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">下页</a></li>
									</ul>
								</div>
							</div>
						</div><!--/span-->
						<div class="box span6">
							<div class="box-header">
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>安全问题详情</h2>
								<div class="box-icon">
									<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
									<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
									<!--<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>-->
								</div>
							</div>
							<div class="box-content">
								<table class="table table-bordered table-striped table-condensed">
									<thead>
									<tr>
										<th>序号</th>
										<th>WBS名称</th>
										<th>存在隐患</th>
										<th>隐患等级</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>1</td>
										<td class="center">固卷1</td>
										<td class="center">变压器老旧</td>
										<td class="center">一级</td>
									</tr>
									<tr>
										<td>2</td>
										<td class="center">固卷2</td>
										<td class="center">变压器老旧</td>
										<td class="center">一级</td>
									</tr>
									</tbody>
								</table>
								<div class="pagination pagination-centered">
									<ul>
										<li><a href="#">上页</a></li>
										<li class="active">
											<a href="#">1</a>
										</li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">下页</a></li>
									</ul>
								</div>
							</div>
						</div><!--/span-->
						<div class="box span6">
							<div class="box-header">
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>安全问题详情</h2>
								<div class="box-icon">
									<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
									<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
									<!--<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>-->
								</div>
							</div>
							<div class="box-content">
								<table class="table table-bordered table-striped table-condensed">
									<thead>
									<tr>
										<th>序号</th>
										<th>WBS名称</th>
										<th>存在隐患</th>
										<th>隐患等级</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>1</td>
										<td class="center">固卷3</td>
										<td class="center">变压器老旧</td>
										<td class="center">一级</td>
									</tr>
									<tr>
										<td>2</td>
										<td class="center">固卷4</td>
										<td class="center">变压器老旧</td>
										<td class="center">一级</td>
									</tr>
									</tbody>
								</table>
								<div class="pagination pagination-centered">
									<ul>
										<li><a href="#">上页</a></li>
										<li class="active">
											<a href="#">1</a>
										</li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">下页</a></li>
									</ul>
								</div>
							</div>
						</div><!--/span-->
						<div class="box span6">
							<div class="box-header">
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>安全问题详情</h2>
								<div class="box-icon">
									<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
									<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
									<!--<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>-->
								</div>
							</div>
							<div class="box-content">
								<table class="table table-bordered table-striped table-condensed">
									<thead>
									<tr>
										<th>序号</th>
										<th>WBS名称</th>
										<th>存在隐患</th>
										<th>隐患等级</th>
									</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td class="center">6节 闸门</td>
											<td class="center">钢铁腐朽老旧</td>
											<td class="center">一级</td>
										</tr>
										<tr>
											<td>2</td>
											<td class="center">7节 闸门</td>
											<td class="center">钢铁腐朽老旧</td>
											<td class="center">一级</td>
										</tr>
									</tbody>
								</table>
								<div class="pagination pagination-centered">
									<ul>
										<li><a href="#">上页</a></li>
										<li class="active">
											<a href="#">1</a>
										</li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">下页</a></li>
									</ul>
								</div>
							</div>
						</div><!--/span-->
						<div class="box span6">
							<div class="box-header">
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>安全问题详情</h2>
								<div class="box-icon">
									<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
									<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
									<!--<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>-->
								</div>
							</div>
							<div class="box-content">
								<table class="table table-bordered table-striped table-condensed">
									<thead>
									<tr>
										<th>序号</th>
										<th>WBS名称</th>
										<th>存在隐患</th>
										<th>隐患等级</th>
									</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td class="center">8节 闸门</td>
											<td class="center">钢铁腐朽老旧</td>
											<td class="center">一级</td>
										</tr>
										<tr>
											<td>2</td>
											<td class="center">9节 闸门</td>
											<td class="center">钢铁腐朽老旧</td>
											<td class="center">一级</td>
										</tr>
									</tbody>
								</table>
								<div class="pagination pagination-centered">
									<ul>
										<li><a href="#">上页</a></li>
										<li class="active">
											<a href="#">1</a>
										</li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">下页</a></li>
									</ul>
								</div>
							</div>
						</div><!--/span-->
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<script src="${ctx }/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.ui.touch-punch.js"></script>
	<script src="${ctx }/static/page/common/js/modernizr.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.cookie.js"></script>
	<script src='${ctx }/static/page/common/js/fullcalendar.min.js'></script>
	<script src="${ctx }/static/page/common/js/excanvas.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.flot.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.flot.pie.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.flot.stack.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.flot.resize.min.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.noty.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.iphone.toggle.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.gritter.min.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.imagesloaded.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.masonry.min.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.knob.modified.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.sparkline.min.js"></script>
	<script src="${ctx }/static/page/common/js/counter.js"></script>
	<script src="${ctx }/static/page/common/js/retina.js"></script>
	<script src="${ctx }/static/page/shigongguanli/safe/js/safe.js"></script>
	<script src="${ctx }/static/page/shigongguanli/safe/js/safepie.js"></script>
</body>

</html>