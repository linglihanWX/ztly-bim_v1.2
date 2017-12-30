<%@ page language="java" contentType="text/html;charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>

	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>数字移交</title>
	<meta name="description" content="Bootstrap Metro Dashboard">
	<meta name="author" content="Dennis Ji">
	<meta name="keyword" content="Metro, Metro UI, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
	<!-- end: Meta -->
<%@ include file="/WEB-INF/page/common/common.jsp" %>
	<!-- start: Mobile Specific -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- end: Mobile Specific -->

	<link id="bootstrap-style" href="${ctx }/static/page/common/css/bootstrap.min.css" rel="stylesheet">
	<link href="${ctx }/static/page/common/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link id="base-style" href="${ctx }/static/page/common/css/style.css" rel="stylesheet">
	<link id="base-style-responsive" href="${ctx }/static/page/common/css/style-responsive.css" rel="stylesheet">

	<link rel="stylesheet" href="${ctx }/static/page/common/css/common.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/IconFont/iconfont.css">
	<link rel="stylesheet" href="${ctx }/static/page/common/js/zTreeStyle/zTreeStyle.css">
	<script src="${ctx }/static/page/common/js/zTreeStyle/ztree.js"></script>
	<link rel="stylesheet" href="${ctx }/static/page/sheji/shuziyijiao/css/shuziyijiao.css">
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
                    <a href="${ctx }/sheji/toWendang">文档管理</a>
                    <a href="#">项目信息</a>
                    <a href="#" class="activeList">数字移交</a>
                    <a href="${ctx }/sheji/toZhanshi">3D综合展示</a>
					</li>

					<li class="btnStandard">
						<input type="button" name="" id="gbk" value="国网标准" class="btnActive">
						<input type="button" name="" id="waterOrEle" value="水电标准">
						<input type="button" name="" id="railway" value="铁路标准">
					</li>
				</ul>
				<div id="tree" class="ztree"></div>
				<div class="row-fluid sortable">
					
					<div class="box span12">
						<div class="box-header" data-original-title>
							<h2><i class="iconfont icon-hxzfont08"></i><span class="break"></span>数据</h2>
							<div class="box-icon">
								<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
								<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
								<!-- <a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a> -->
							</div>
						</div>
						<div class="box-content">
							<table class="table table-striped table-bordered bootstrap-datatable datatable">
								<thead>
									<tr>
										<th>是否包含(双击更改)</th>
										<th>文件名</th>
										<th>内容</th>
										<th>备注</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody>
										<tr>
											<td>是</td>
											<td>建设用地批准文件</td>
											<td>关于建设项目用地的预审批复、建设项目用地规划许可证</td>
											<td></td>
											<td>预览</td>
										</tr>
										<tr>
											<td>是</td>
											<td>可行性研究报告及附件</td>
											<td>项目成熟程度、市场需求情况和风险分析、投资估算及资金筹措、项目融资估算、资金筹措方案、投资使用计划</td>
											<td></td>
											<td>预览</td>
										</tr>
										<tr>
											<td>是</td>
											<td>地形测量和拨地测量成果报告</td>
											<td>项目概况、测绘说明、测绘项目精度及方法要求、地形图测绘成果、成果检核</td>
											<td></td>
											<td>预览</td>
										</tr>
										<tr>
											<td>是</td>
											<td>施工合同</td>
											<td>工程概况、工程期限、工程合同总价、材料设备供应、工程质量、检查验收</td>
											<td></td>
											<td>预览</td>
										</tr>
										<tr>
											<td>是</td>
											<td>监理实施细则</td>
											<td>监理工作目标、监理工作控制要点、监理工作流程、安全监理细则、旁站监理</td>
											<td></td>
											<td>预览</td>
										</tr>
										<tr>
											<td>是</td>
											<td>质量事故报告及处理资料</td>
											<td>事故概述、事故经过描述、事故原因分析、事故改善对策</td>
											<td></td>
											<td>预览</td>
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
	<script src="${ctx }/static/page/sheji/shuziyijiao/js/shuziyijiao.js"></script>

</body>

</html>