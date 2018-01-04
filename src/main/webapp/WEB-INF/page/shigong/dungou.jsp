<%@ page language="java" contentType="text/html;charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">

<head>

<!-- start: Meta -->
<meta charset="utf-8">
<title>盾构监测</title>
<meta name="description" content="Bootstrap Metro Dashboard">
<meta name="author" content="Dennis Ji">
<meta name="keyword"
	content="Metro, Metro UI, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">

<meta name="viewport" content="width=device-width, initial-scale=1">
<%@ include file="/WEB-INF/page/common/common.jsp"%>
<%@ include file="/WEB-INF/page/common/common_FD.jsp"%>
<link id="bootstrap-style"
	href="${ctx }/static/page/common/css/bootstrap.min.css"
	rel="stylesheet">
<link href="${ctx }/static/page/common/css/bootstrap-responsive.min.css"
	rel="stylesheet">
<link id="base-style" href="${ctx }/static/page/common/css/style.css"
	rel="stylesheet">
<link id="base-style-responsive"
	href="${ctx }/static/page/common/css/style-responsive.css"
	rel="stylesheet">

<link rel="stylesheet" href="${ctx }/static/page/common/css/common.css">
<link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
<link rel="stylesheet"
	href="${ctx }/static/page/common/IconFont/iconfont.css">
<script src="${ctx }/static/page/shigong/dungou/js/base-canvas.js"></script>
<link rel="stylesheet"
	href="${ctx }/static/page/common/js/zTreeStyle/zTreeStyle.css">
<link rel="stylesheet"
	href="${ctx }/static/page/common/css/appendTools.css">
<script src="${ctx }/static/page/common/js/zTreeStyle/ztree.js"></script>
<!--[if lt IE 9]>
    <link id="ie-style" href="css/ie.css" rel="stylesheet">
    <![endif]-->
<!--[if IE 9]>
    <link id="ie9style" href="css/ie9.css" rel="stylesheet">
    <![endif]-->
<link rel="stylesheet"
	href="${ctx }/static/page/shigong/dungou/css/dungou.css">
<link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">
</head>

<body>
	<%@ include file="/WEB-INF/page/common/iframe/head.jsp"%>
	<%@ include file="/WEB-INF/page/common/iframe/left.jsp"%>
	<c:set var="runtime" value="${runtimedata.get(0) }"></c:set>
	<!-- start: Content -->
	<span class="shigong" id="moduletype"></span>
	<div id="content" class="span10">
		<ul class="breadcrumb">
			<i class="iconfont icon-hxzfont08"></i>
		 <li class="lists">
                		<a href="${ctx }/shigong/toGaikuang">项目概况</a>
						<a href="${ctx }/shigong/toJindu">进度管理</a>
						<a href="${ctx }/shigong/toChangjing">场景管理</a>
						<a href="${ctx }/shigong/toAnquan">安全管理</a>
						<a href="${ctx }/shigong/toDungou" class="activeList">盾构监测</a>
						<a href="${ctx }/shigong/toFengxian">风险管理</a>
						<a href="#">质量管理</a>
						<a href="#">成本管理</a>
						<a href="#">合同管理</a>
						<a href="#">施工日志</a>
						<a href="#">项目信息</a>
						<a href="${ctx }/shigong/toZhanshi">3D综合展示</a>
                </li>
				<div id="div1" class="close1">
					<div id="div2" class="close2"></div>
				</div> <span class="twoThree">2D</span>
			</li>
		</ul>

		<div class="row-fluid sortable" id="contentBox">
			<div class="box perFour">
				<div class="box-header">
					<h2>
						<i class="halflings-icon white align-justify"></i><span
							class="break"></span>主监控
					</h2>
					<div class="box-icon">
						<a href="#" class="btn-setting"><i
							class="halflings-icon white wrench"></i></a> <a href="#"
							class="btn-minimize"><i
							class="halflings-icon white chevron-up"></i></a> <a href="#"
							class="btn-close"><i class="halflings-icon white remove"></i></a>
					</div>
				</div>
				<div class="box-content">
					<div id="wrap" style="text-align: center">
						<canvas id="cvs" name="cvs" width="500" height="500">
                            你使用的浏览器不支持canvas
                        </canvas>
					</div>
				</div>
			</div>

			<!--土压-->
			<div class="box perTwo">
				<div class="box-header">
					<h2>
						<i class="halflings-icon white align-justify"></i><span
							class="break"></span>土压
					</h2>
					<div class="box-icon">
						<a href="#" class="btn-setting"><i
							class="halflings-icon white wrench"></i></a> <a href="#"
							class="btn-minimize"><i
							class="halflings-icon white chevron-up"></i></a> <a href="#"
							class="btn-close"><i class="halflings-icon white remove"></i></a>
					</div>
				</div>
				<div class="box-content">
					<table class="table  table-striped table-bordered ">
						<thead>
							<tr>
								<th>类别名称</th>
								<th>数值大小</th>
							</tr>
						</thead>
						<tbody>
							<tr class="soil">
								<td>土压1(bar)</td>
								<td>${runtime.c43 }</td>
							</tr>
							<tr class="soil">
								<td>土压2(bar)</td>
								<td>${runtime.c44 }</td>
							</tr>
							<tr class="soil">
								<td>土压3(bar)</td>
								<td>${runtime.c45 }</td>
							</tr>
							<tr class="soil">
								<td>土压4(bar)</td>
								<td>${runtime.c46 }</td>
							</tr>
							<tr class="soil">
								<td>土压5(bar)</td>
								<td>${runtime.c47 }</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!--刀盘情况-->
			<div class="box perTwo">
				<div class="box-header">
					<h2>
						<i class="halflings-icon white align-justify"></i><span
							class="break"></span>刀盘情况
					</h2>
					<div class="box-icon">
						<a href="#" class="btn-setting"><i
							class="halflings-icon white wrench"></i></a> <a href="#"
							class="btn-minimize"><i
							class="halflings-icon white chevron-up"></i></a> <a href="#"
							class="btn-close"><i class="halflings-icon white remove"></i></a>
					</div>
				</div>
				<div class="box-content">
					<table class="table  table-striped table-bordered ">
						<thead>
							<tr>
								<th>类别名称</th>
								<th>数值大小</th>
							</tr>
						</thead>
						<tbody>
							<tr class="oil-route">
								<td>油缸A行程(mm)</td>
								<td>${runtime.c22 }</td>
							</tr>
							<tr class="oil-route">
								<td>油缸B行程(mm)</td>
								<td>${runtime.c24 }</td>
							</tr>
							<tr class="oil-route">
								<td>油缸C行程(mm)</td>
								<td>${runtime.c26 }</td>
							</tr>
							<tr class="oil-route">
								<td>油缸D行程(mm)</td>
								<td>${runtime.c28 }</td>
							</tr>
							<tr class="oil-bar">
								<td>油缸A压力(bar)</td>
								<td>${runtime.c23 }</td>
							</tr>
							<tr class="oil-bar">
								<td>油缸B压力(bar)</td>
								<td>${runtime.c25 }</td>
							</tr>
							<tr class="oil-bar">
								<td>油缸C压力(bar)</td>
								<td>${runtime.c27 }</td>
							</tr>
							<tr class="oil-bar">
								<td>油缸D压力(bar)</td>
								<td>${runtime.c29 }</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!--同步注浆量-->
			<div class="box perTwo">
				<div class="box-header">
					<h2>
						<i class="halflings-icon white align-justify"></i><span
							class="break"></span>同步注浆量
					</h2>
					<div class="box-icon">
						<a href="#" class="btn-setting"><i
							class="halflings-icon white wrench"></i></a> <a href="#"
							class="btn-minimize"><i
							class="halflings-icon white chevron-up"></i></a> <a href="#"
							class="btn-close"><i class="halflings-icon white remove"></i></a>
					</div>
				</div>
				<div class="box-content">
					<table class="table  table-striped table-bordered">
						<thead>
							<tr>
								<th>类别名称</th>
								<th>数值大小</th>
							</tr>
						<tbody>
							<tr class="mud">
								<td>1注浆压力(bar)</td>
								<td>${runtime.c55 }</td>
							</tr>
							<tr class="mud">
								<td>2注浆压力(bar)</td>
								<td>${runtime.c57 }</td>
							</tr>
							<tr class="mud">
								<td>3注浆压力(bar)</td>
								<td>${runtime.c59 }</td>
							</tr>
							<tr class="mud">
								<td>4注浆压力(bar)</td>
								<td>${runtime.c61 }</td>
							</tr>
							<tr class="mud-count">
								<td>1注浆量(strokes)</td>
								<td>${runtime.c56 }</td>
							</tr>
							<tr class="mud-count">
								<td>2注浆量(strokes)</td>
								<td>${runtime.c58 }</td>
							</tr>
							<tr class="mud-count">
								<td>3注浆量(strokes)</td>
								<td>${runtime.c60 }</td>
							</tr>
							<tr class="mud-count">
								<td>4注浆量(strokes)</td>
								<td>${runtime.c62 }</td>
							</tr>


						</tbody>
					</table>
				</div>
			</div>

			<div class="box perFour">
				<div class="box-header">
					<h2>
						<i class="halflings-icon white align-justify"></i><span
							class="break"></span>盾构机偏移
					</h2>
					<div class="box-icon">
						<a href="#" class="btn-setting"><i
							class="halflings-icon white wrench"></i></a> <a href="#"
							class="btn-minimize"><i
							class="halflings-icon white chevron-up"></i></a> <a href="#"
							class="btn-close"><i class="halflings-icon white remove"></i></a>
					</div>
				</div>
				<div class="box-content">
					<table class="table  table-striped table-bordered ">
						<thead>

						</thead>
						<tbody>
							<tr>
								<td>刀盘偏移量X(mm)</td>
								<td>${runtime.c9 }</td>
								<td>刀盘偏移量Y(mm)</td>
								<td>${runtime.c10 }</td>
							</tr>
							<tr>
								<td>前部水平位移(mm)</td>
								<td>${runtime.c4 }</td>
								<td>前部垂直位移(mm)</td>
								<td>${runtime.c5 }</td>
							</tr>
							<tr>
								<td>尾部水平位移(mm)</td>
								<td>${runtime.c6 }</td>
								<td>尾部垂直位移(mm)</td>
								<td>${runtime.c7 }</td>
							</tr>

							</tr>
						</tbody>
					</table>
					<canvas id="circleCanvas" width="380" height="380"></canvas>
					<img src="${ctx }/static/page/shigong/dungou/img/yaw.png"
						class="yaw">

				</div>
			</div>

			<!--螺旋机-->
			<div class="box perTwo">
				<div class="box-header">
					<h2>
						<i class="halflings-icon white align-justify"></i><span
							class="break"></span>螺旋机
					</h2>
					<div class="box-icon">
						<a href="#" class="btn-setting"><i
							class="halflings-icon white wrench"></i></a> <a href="#"
							class="btn-minimize"><i
							class="halflings-icon white chevron-up"></i></a> <a href="#"
							class="btn-close"><i class="halflings-icon white remove"></i></a>
					</div>
				</div>
				<div class="box-content">
					<table class="table  table-striped table-bordered ">
						<thead>
							<tr>
								<th>类别名称</th>
								<th>数值大小</th>
							</tr>
						</thead>
						<tbody>
							<tr class="spiral">
								<td>压力(bar)</td>
								<td>${runtime.c11 }</td>
							</tr>
							<tr class="deg">
								<td>油温(Deg.C)</td>
								<td>${runtime.c18 }</td>
							</tr>
							<tr class="torque">
								<td>扭矩(kN.m)</td>
								<td>${runtime.c12 }</td>
							</tr>
							<tr class="speed">
								<td>转速(bar)</td>
								<td>${runtime.c13 }</td>
							</tr>
							<tr class="aperture">
								<td>开度(mm)</td>
								<td>${runtime.c14 }</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!--铰链情况-->
			<div class="box perTwo">
				<div class="box-header">
					<h2>
						<i class="halflings-icon white align-justify"></i><span
							class="break"></span>铰链情况
					</h2>
					<div class="box-icon">
						<a href="#" class="btn-setting"><i
							class="halflings-icon white wrench"></i></a> <a href="#"
							class="btn-minimize"><i
							class="halflings-icon white chevron-up"></i></a> <a href="#"
							class="btn-close"><i class="halflings-icon white remove"></i></a>
					</div>
				</div>
				<div class="box-content">
					<table class="table  table-striped table-bordered ">
						<thead>
							<tr>
								<th>类别名称</th>
								<th>数值大小</th>
							</tr>
						</thead>
						<tbody>
							<tr class="hinge">
								<td>铰接油缸A行程(mm)</td>
								<td>${runtime.c30 }</td>
							</tr>
							<tr class="hinge">
								<td>铰接油缸B行程(mm)</td>
								<td>${runtime.c31 }</td>
							</tr>
							<tr class="hinge">
								<td>铰接油缸C行程(mm)</td>
								<td>${runtime.c32 }</td>
							</tr>
							<tr class="hinge">
								<td>铰接油缸D行程(mm)</td>
								<td>${runtime.c33 }</td>
							</tr>
							<tr class="hinge-bar">
								<td>铰接油缸压力(bar)</td>
								<td>${runtime.c34 }</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!--泡沫系统-->
			<div class="box perTwo">
				<div class="box-header">
					<h2>
						<i class="halflings-icon white align-justify"></i><span
							class="break"></span>泡沫系统
					</h2>
					<div class="box-icon">
						<a href="#" class="btn-setting"><i
							class="halflings-icon white wrench"></i></a> <a href="#"
							class="btn-minimize"><i
							class="halflings-icon white chevron-up"></i></a> <a href="#"
							class="btn-close"><i class="halflings-icon white remove"></i></a>
					</div>
				</div>
				<div class="box-content">
					<table class="table  table-striped table-bordered ">
						<thead>
							<tr>
								<th>类别名称</th>
								<th>数值大小</th>
							</tr>
						</thead>
						<tbody>
							<tr class="froth-bar">
								<td>泡沫系统1压力(bar)</td>
								<td>${runtime.c64 }</td>
							</tr>

							<tr class="air">
								<td>泡沫系统1空气流量(L/min)</td>
								<td>${runtime.c65 }</td>
							</tr>
							<tr class="additive">
								<td>泡沫系统1添加剂流量(L/min)</td>
								<td>${runtime.c66 }</td>
							</tr>
							<tr class="froth-bar">
								<td>泡沫系统2压力(bar)</td>
								<td>${runtime.c67 }</td>
							</tr>

							<tr class="air">
								<td>泡沫系统2空气流量(L/min)</td>
								<td>${runtime.c68 }</td>
							</tr>
							<tr class="additive">
								<td>泡沫系统2添加剂流量(L/min)</td>
								<td>${runtime.c69 }</td>
							</tr>
							<tr class="froth-bar">
								<td>泡沫系统3压力(bar)</td>
								<td>${runtime.c70 }</td>
							</tr>

							<tr class="air">
								<td>泡沫系统3空气流量(L/min)</td>
								<td>${runtime.c71}</td>
							</tr>
							<tr class="additive">
								<td>泡沫系统3添加剂流量(L/min)</td>
								<td>${runtime.c72 }</td>
							</tr>
							<tr class="froth-bar">
								<td>泡沫系统4压力(bar)</td>
								<td>${runtime.c73 }</td>
							</tr>

							<tr class="air">
								<td>泡沫系统4空气流量(L/min)</td>
								<td>${runtime.c74 }</td>
							</tr>
							<tr class="additive">
								<td>泡沫系统4添加剂流量(L/min)</td>
								<td>${runtime.c75 }</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<button id="showHistoryData">历史数据</button>
			<div class="box" id="history">
				<div class="box-header">
					<h2>
						<i class="halflings-icon white align-justify"></i><span
							class="break"></span>历史数据
					</h2>
					<div class="box-icon">
						<a href="#" class="btn-close"><i
							class="halflings-icon white remove"></i></a>
					</div>
				</div>
				<div class="box-content" id="historydata">
					<table class="table table-striped table-bordered ">
						<thead>
							<tr>
								<th style="width: 100px">时间</th>
								<th>土压1</th>
								<th>土压2</th>
								<th>土压3</th>
								<th>土压4</th>
								<th>土压5</th>
								<th>油缸A行程(mm)</th>
								<th>油缸B行程(mm)</th>
								<th>油缸C行程(mm)</th>
								<th>油缸D行程(mm)</th>
								<th>油缸A压力(bar)</th>
								<th>油缸B压力(bar)</th>
								<th>油缸C压力(bar)</th>
								<th>油缸D压力(bar)</th>
								<th>1注浆压力(bar)</th>
								<th>2注浆压力(bar)</th>
								<th>3注浆压力(bar)</th>
								<th>4注浆压力(bar)</th>
								<th>1注浆量(strokes)</th>
								<th>2注浆量(strokes)</th>
								<th>3注浆量(strokes)</th>
								<th>4注浆量(strokes)</th>
								<th>刀盘偏移量X(mm)</th>
								<th>刀盘偏移量Y(mm)</th>
								<th>前部水平位移(mm)</th>
								<th>前部垂直位移(mm)</th>
								<th>尾部水平位移(mm)</th>
								<th>尾部垂直位移(mm)</th>
								<th>压力(bar)</th>
								<th>油温(Deg.C)</th>
								<th>扭矩(kN.m)</th>
								<th>转速(bar)</th>
								<th>开度(mm)</th>
								<th>铰接油缸A行程(mm)</th>
								<th>铰接油缸B行程(mm)</th>
								<th>铰接油缸C行程(mm)</th>
								<th>铰接油缸D行程(mm)</th>
								<th>铰接油缸压力(bar)</th>
								<th>泡沫系统1压力(bar)</th>
								<th>泡沫系统1空气流量(L/min)</th>
								<th>泡沫系统1添加剂流量(L/min)</th>
								<th>泡沫系统2压力(bar)</th>
								<th>泡沫系统2空气流量(L/min)</th>
								<th>泡沫系统2添加剂流量(L/min)</th>
								<th>泡沫系统3压力(bar)</th>
								<th>泡沫系统3空气流量(L/min)</th>
								<th>泡沫系统3添加剂流量(L/min)</th>
								<th>泡沫系统4压力(bar)</th>
								<th>泡沫系统4空气流量(L/min)</th>
								<th>泡沫系统4添加剂流量(L/min)</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${historydata }" var="history">
								<tr>
									<td>${history.timestamp }</td>
									<td>${history.c43 }</td>
									<td>${history.c44 }</td>
									<td>${history.c45 }</td>
									<td>${history.c46 }</td>
									<td>${history.c47 }</td>
									<td>${history.c22 }</td>
									<td>${history.c24 }</td>
									<td>${history.c26 }</td>
									<td>${history.c28 }</td>
									<td>${history.c23 }</td>
									<td>${history.c25 }</td>
									<td>${history.c27 }</td>
									<td>${history.c29 }</td>
									<td>${history.c55 }</td>
									<td>${history.c57 }</td>
									<td>${history.c59 }</td>
									<td>${history.c61 }</td>
									<td>${history.c56 }</td>
									<td>${history.c58 }</td>
									<td>${history.c60 }</td>
									<td>${history.c62 }</td>
									<td>${history.c9 }</td>
									<td>${history.c10 }</td>
									<td>${history.c4 }</td>
									<td>${history.c5 }</td>
									<td>${history.c6 }</td>
									<td>${history.c7 }</td>
									<td>${history.c11 }</td>
									<td>${history.c18 }</td>
									<td>${history.c12 }</td>
									<td>${history.c13 }</td>
									<td>${history.c14 }</td>
									<td>${history.c30 }</td>
									<td>${history.c31 }</td>
									<td>${history.c32 }</td>
									<td>${history.c33 }</td>
									<td>${history.c34 }</td>
									<td>${history.c64 }</td>
									<td>${history.c65 }</td>
									<td>${history.c66 }</td>
									<td>${history.c67 }</td>
									<td>${history.c68 }</td>
									<td>${history.c69 }</td>
									<td>${history.c70 }</td>
									<td>${history.c71 }</td>
									<td>${history.c72 }</td>
									<td>${history.c73 }</td>
									<td>${history.c74 }</td>
									<td>${history.c75 }</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</div>

			<div class="changeToThree">
				<div id="tree" class="ztree"></div>
				<div id="earth"></div>
				<!-- <div class="tipbox" id="tipbox1">
					<p>提示</p>
					<ul>
						<li>当前风险覆盖范围<span>60</span>m</li>
					</ul>
				</div>
				<div class="tipbox" id="tipbox2">
					<p>提示：即将下穿构建筑物</p>
					<ul>
						<li>1、注意控制注浆量</li>
						<li>2、加强构建筑物监测与巡查</li>
					</ul>
				</div>
				<div class="tipbox" id="tipbox3">
					<p>提示</p>
					<ul>
						<li>距风险范围<span>130</span>m</li>
					</ul>
				</div>
				<div class="tipbox" id="tipbox4">
					<p>当前位置</p>
					<ul>
						<li>北京十六号线</li>
						<li>第二期（第<span>1</span>区间）</li>
					</ul>
				</div> -->
				<div class="detailInfo">
					<ul>
						<li><span>名称</span><input type="text" /></li>
						<li><span>水源所在地</span><input type="text" /></li>
						<li><span>取水口名称</span><input type="text" /></li>
						<li><span>设计能力</span><input type="text" /></li>
					</ul>
					<button class="sureChange">确认</button>
				</div>
			</div>
		</div>
	</div>
	</div>
	</div>

	<div id="chart">
		<span class="closeChart">关闭</span>
		<div id="picChart"></div>
	</div>
	<!-- start: JavaScript-->
	<script
		src="${ctx }/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.noty.js"></script>
	<!-- end: JavaScript-->
	<script src="${ctx }/static/page/common/js/echarts.min.js"></script>
	<script src="${ctx }/static/webgl/pModel/js/move.js"></script>
	<script src="${ctx }/static/page/common/js/FreeDoUtil.js"></script>
	<script src="${ctx }/static/page/shigong/dungou/js/canvasCircle.js"></script>
	<script src="${ctx }/static/page/shigong/dungou/js/tbm.js"></script>
	<script src="${ctx }/static/page/common/js/appendTool.js"></script>
	<script src="${ctx }/static/page/shigong/dungou/js/dungou_viewer.js"></script>
	<script src="${ctx }/static/webgl/Tool/surveyCallBack.js"></script>
	<script src="${ctx }/static/page/shigong/dungou/js/dungou.js"></script>

</body>

</html>