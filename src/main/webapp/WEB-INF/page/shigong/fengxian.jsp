<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>

	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>风险管理</title>
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
	<!-- end: CSS -->
	<link rel="stylesheet" href="${ctx }/static/page/common/css/common.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/IconFont/iconfont.css">


	<link rel="stylesheet" href="${ctx }/static/page/shigong/fengxian/css/fengxian.css">
	<script src="${ctx }/static/page/common/js/echarts.common.min.js"></script>
	
    <link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">

</head>

<body>
<%@ include file="/WEB-INF/page/common/iframe/head.jsp" %>
<%@ include file="/WEB-INF/page/common/iframe/left.jsp" %>
<span class="shigong" id="moduletype"></span>
			<!-- start: Content -->
			<div id="content" class="span10">
				<ul class="breadcrumb">
					<i class="iconfont icon-hxzfont08"></i>
					<li class="lists">
                		<a href="${ctx }/shigong/toGaikuang">项目概况</a>
						<a href="${ctx }/shigong/toEbs">进度管理</a>
						<a href="${ctx }/shigong/toPm">场景管理</a>
						<a href="${ctx }/shigong/toAnquan">安全管理</a>
						<a href="${ctx }/shigong/toDungou">盾构监测</a>
						<a href="#" class="activeList">风险管理</a>
						<a href="#">质量管理</a>
						<a href="#">成本管理</a>
						<a href="#">合同管理</a>
						<a href="#">施工日志</a>
						<a href="#">项目信息</a>
						<a href="${ctx }/shigong/toZhanshi">3D综合展示</a>
					</li>
				</ul>
				<div class="row-fluid sortable">
					<div id="left">
						<a href="${ctx }/shigong/toShexiangtou" id="spy">摄像头监控</a>
						<span></span>
						<a href="${ctx }/shigong/toChenjiangdian" id="downup">沉降检测</a>
						<!-- <a href="#">3</a> -->

					</div>
					<div id="right">
						<div class="box span6">
							<div class="box-header">
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>安全检查记录</h2>
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
										<td class="center">1号 检票口</td>
										<td class="center">易燃物品堆放</td>
										<td class="center">一级</td>
									</tr>
									<tr>
										<td>2</td>
										<td class="center">2号 检票口</td>
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
						<div class="box span6">
							<div class="box-header">
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>安全检查整改情况</h2>
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
									<tr>
										<td>2</td>
										<td class="center">JRKN-XCMD</td>
										<td class="center">整改完成</td>
										<td class="center">2018-04-09</td>
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
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>项目危险源控制计划</h2>
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
										<th>危险源</th>
										<th>风险等级</th>
										<th>措施</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>1</td>
										<td class="center">机械设备超期服役</td>
										<td class="center">重大</td>
										<td class="center">使用前进行例行检查</td>
									</tr>
									<tr>
										<td>2</td>
										<td class="center">高空抛物</td>
										<td class="center">重大</td>
										<td class="center">安全员进行日常的检查</td>
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
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>项目环境因素控制计划</h2>
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
										<th>工程活动</th>
										<th>环境因素</th>
										<th>控制措施</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>1</td>
										<td class="center">钢筋工程</td>
										<td class="center">电焊机噪音的排放</td>
										<td class="center">合理安排施工</td>
									</tr>
									<tr>
										<td>2</td>
										<td class="center">钢筋工程</td>
										<td class="center">钢筋切割时废渣散落</td>
										<td class="center">加强管理定时清扫</td>
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
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>检查整改反馈</h2>
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
										<th>整改问题</th>
										<th>整改反馈</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>1</td>
										<td class="center">JRXM-JCHC</td>
										<td class="center">电焊机噪音的排放</td>
										<td class="center">问题解决</td>
									</tr>
									<tr>
										<td>2</td>
										<td class="center">JRKN-XCMD</td>
										<td class="center">钢筋切割时废渣散落</td>
										<td class="center">问题解决</td>
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
								<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>安全检查计划</h2>
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
										<th>检查形式</th>
										<th>检查时间</th>
										<th>检查内容</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>1</td>
										<td class="center">专项检查</td>
										<td class="center">每季度一次</td>
										<td class="center">安全性能、使用存放、维护保养</td>
									</tr>
									<tr>
										<td>2</td>
										<td class="center">日常安全检查 </td>
										<td class="center">每周一次</td>
										<td class="center">作业环境、安全管理、安全作业</td>
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
	<script src="${ctx }/static/page/shigong/fengxian/js/fengxian.js"></script>
</body>

</html>