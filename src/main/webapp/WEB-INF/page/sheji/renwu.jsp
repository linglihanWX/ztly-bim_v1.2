<%@ page language="java" contentType="text/html;charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">

<head>

<!-- start: Meta -->
<meta charset="utf-8">
<title>任务列表</title>
<meta name="description" content="Bootstrap Metro Dashboard">
<meta name="author" content="Dennis Ji">
<meta name="keyword"
	content="Metro, Metro UI, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
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


<link rel="stylesheet" href="${ctx }/static/page/sheji/renwu/css/renwu.css">
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
                    <a href="#" class="activeList">任务</a>
                    <a href="${ctx }/sheji/toBIMfangansheji">BIM方案设计</a>
                    <a href="${ctx }/sheji/toWendang">文档管理</a>
                    <a href="#">项目信息</a>
                    <a href="${ctx }/sheji/toYijiao">数字移交</a>
                    <a href="${ctx }/sheji/toZhanshi">3D综合展示</a>
					</li>

					<li class="btnStandard">
						<input type="button" name="" id="gbk" value="任务列表" class="btnActive">
						<input type="button" name="" id="newFile" value="新建任务">
						<input type="button" name="" id="railway" value="任务分配">
						<input type="button" name="" id="myFlow" value="我的流程">
						<input type="button" name="" id="importFile" value="从文件导入">
					</li>
				</ul>
				<div id="tree" class="ztree"></div>
				<div class="row-fluid sortable">

					<div class="box span12" id="workData">
						<div class="box-header" data-original-title>
							<h2><i class="iconfont icon-hxzfont08"></i><span class="break"></span>数据</h2>
							<div class="box-icon">
								<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
								<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
								<!-- <a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a> -->
							</div>
						</div>
						<div class="box-content">
							<table class="table table-striped table-bordered bootstrap-datatable datatable" id="taskList">
								<thead>
									<tr>
										<th>序号</th>
										<th>任务描述</th>
										<th>任务状态</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>01</td>
										<td>地铁扶梯工作</td>
										<td>未开始</td>
										<td><span><img src="${ctx }/static/page/sheji/renwu/img/rightHand.svg" alt="">指派</span> <span><img src="${ctx }/static/page/sheji/renwu/img/right.svg" alt="">提交任务</span></td>
									</tr>
									<tr>
										<td>02</td>
										<td>安检设备选型</td>
										<td>未开始</td>
										<td><span><img src="${ctx }/static/page/sheji/renwu/img/rightHand.svg" alt="">指派</span> <span><img src="${ctx }/static/page/sheji/renwu/img/right.svg" alt="">提交任务</span></td>
									</tr>
									<tr>
										<td>03</td>
										<td>闸机设备选项</td>
										<td>进行中</td>
										<td><span><img src="${ctx }/static/page/sheji/renwu/img/rightHand.svg" alt="">指派</span> <span><img src="${ctx }/static/page/sheji/renwu/img/right.svg" alt="">提交任务</span></td>
									</tr>
									<tr>
										<td>04</td>
										<td>升降电梯设备</td>
										<td>已完成</td>
										<td><span><img src="${ctx }/static/page/sheji/renwu/img/rightHand.svg" alt="">指派</span> <span><img src="${ctx }/static/page/sheji/renwu/img/right.svg" alt="">提交任务</span></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="box span12" id="workFlow">
							<div class="box-header" >

									<input type="button" value="流程图">
									<input type="button"  value="审批记录">
									<input type="button"  value="流程评价">
									<input type="button"  value="使用说明">

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
										<th></th>
										<th><input type="checkbox"></th>
										<th>流程名称</th>
										<th>流程状态</th>
										<th>发起时间</th>
										<th>结束时间</th>
										<th>当前节点</th>
										<th>当前处理人</th>
										<th>版本</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>1</td>
										<td><input type="checkbox" name="" ></td>
										<td>BIM流程提交流程</td>
										<td>运行中</td>
										<td>2017/10/16 13:15:25</td>
										<td></td>
										<td>已提交</td>
										<td>程翔</td>
										<td>3</td>
									</tr>
									<tr>
										<td>2</td>
										<td><input type="checkbox" name="" ></td>
										<td>文档审批提交流程</td>
										<td>办结</td>
										<td>2017/10/16 13:15:25</td>
										<td>2017/10/17 09:20:15</td>
										<td>已办结</td>
										<td></td>
										<td>3</td>
									</tr>
									</tbody>
								</table>
							</div>
						</div>

					<div id="submitTask">
						  <p>任务提交</p>
						<span>文件路径：</span><input type="file" name="" id="file" value="选择文件"><br>
						<span>文件说明：</span><textarea name="" id="" cols="30" rows="10" onresize="false"></textarea>
						<input type="button" value="提交" class="st">
						<input type="button" value="取消" class="cancel">
					</div>


				</div>
			</div>
		</div>
	</div>

	<div id="newTask">
		<p>新建任务</p>
		<p>
			<span>父级任务:</span>
			<select>
				<option value="">勘察工作</option>
				<option value="">前端设计</option>
				<option value="">后端设计</option>
				<option value="">文档方案</option>
			</select>
		</p>
		<p>
			<span>指派给:</span>
			<select>
					<option value="">立明</option>
					<option value="">李勇</option>
					<option value="">张华</option>
					<option value="">王伟</option>
				</select>
		</p>
		<span>任务描述：</span>
		<textarea></textarea>
		<ul>
			<li>
				<span>优先级:</span>
				<select name="" >
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
			</li>
			<li id="newTime"></li>
		</ul>
		<p>
			<span>提醒：</span>
			<input type="checkbox">微信
			<input type="checkbox" >QQ
			<input type="checkbox" >微博
			<input type="checkbox" >短信
		</p>
		<p>
			<button class="sure">确认</button>
			<button class="closed">取消</button>
			
		</p>

	</div>
	<div id="importFiles">
		<p>文件导入</p>
		<span class="closeDialog">关闭</span>
		<span>文件路径：</span><input type="file" name="" id="files"  value="选择文件"><br>
		<table  border="1" cellspacing="0">
			<thead>
			<tr>
				<th>任务ID</th>
				<th>任务名称</th>
				<th>任务描述</th>
				<th>任务状态</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td class="data1"></td>
				<td class="data2"></td>
				<td class="data3"></td>
				<td class="data4"></td>
			</tr>
			<tr>
				<td  class="data5"></td>
				<td  class="data6"></td>
				<td  class="data7"></td>
				<td  class="data8"></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			</tbody>
		</table>
		<input type="button" value="导入" class="cancel">
		<input type="button" value="解析" class="st">
	</div>

	<!-- start: JavaScript-->
	<script src="${ctx }/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>
	<script src="${ctx }/static/page/common/js/jquery.noty.js"></script>
	<script src="${ctx }/static/page/common/js/zTreeStyle/ztree.js"></script>	
	<script src="${ctx }/static/page/sheji/renwu/js/renwu.js"></script>
    <!-- end: JavaScript-->
</body>

</html>