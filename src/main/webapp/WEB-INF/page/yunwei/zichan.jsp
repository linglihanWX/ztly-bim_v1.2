<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>

	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>资产管理</title>
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
	<link id="bootstrap-style" href="${ctx}/static/page/common/css/bootstrap.min.css" rel="stylesheet">
	<link href="${ctx}/static/page/common/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link id="base-style" href="${ctx}/static/page/common/css/style.css" rel="stylesheet">
	<link id="base-style-responsive" href="${ctx}/static/page/common/css/style-responsive.css" rel="stylesheet">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,latin-ext'
	    rel='stylesheet' type='text/css'>	
	<link rel="stylesheet" href="${ctx}/static/page/common/css/common.css">
	<link rel="stylesheet" href="${ctx}/static/page/common/css/reset.css">
	<link rel="stylesheet" href="${ctx}/static/page/common/IconFont/iconfont.css">
	<link rel="stylesheet" href="${ctx}/static/page/yunwei/zichan/css/zichan.css">	
	<link rel="stylesheet" href="${ctx }/static/page/common/css/appendTools.css">	
    <link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">
    <link rel="stylesheet" href="${ctx}/static/page/common/js/zTreeStyle/zTreeStyle.css">
    <!-- end: CSS -->
	<script src="${ctx}/static/page/common/js/FreeDoTool.js"></script>
	<script src="${ctx}/static/page/common/js/zTreeStyle/ztree.js"></script>
    <script src="${ctx}/static/page/common/js/echarts.common.min.js"></script>
	
</head>

<body>
<%@ include file="/WEB-INF/page/common/iframe/head.jsp" %>
<%@ include file="/WEB-INF/page/common/iframe/left.jsp" %>
<span class="yunwei" id="moduletype"></span>
			<!-- start: Content -->
			<div id="content" class="span10" style="min-heigth:238px;">
				<ul class="breadcrumb">
					<a href="${ctx }//yunwei/toGaikuang">
					<i class="iconfont icon-return"></i>返回</a>
					<li class="lists">
						<a href="${ctx }/yunwei/toGaikuang">项目概况</a>
						<a href="#">空间管理</a>
						<a href="#" class="activeList">资产管理</a>
						<a href="#" >巡检管理</a>
						<a href="#">维护管理</a>
						<a href="#">调度管理</a>
						<a href="#">风险管控</a>
						<a href="#">应急指挥</a>
						<a href="${ctx }/yunwei/toJicheng">其他系统</a>
						<a href="#">知识库建设</a>
					</li>
				</ul>
				  
				<div class="row-fluid sortable">
					<div class="box span12 changWidth">
						<div class="box-content">
							<div id="tree" class="ztree" style="-moz-user-select:none:"></div>
						</div>
					</div>
					<div id="earth"></div>
                </div>
			</div>
		</div>
	</div>
	<ul id="menu">
		<li class="r1">关键属性</li>
		<li class="r2">详细属性</li>
		<li class="r3">实时数据</li>
		<li class="r4">维修历史</li>
		<li class="r5">检查顶点</li>
		<li class="r6">对象隐藏</li>
		<li class="r7">对象凸显</li>
		<li class="r8">开启工单</li>
	</ul>

	<div class="keyInfo">
		<p>设备信息 <span class="keyClose">关闭</span></p>
		<ul>
			<li><span>资产名称</span><input type="text" value="自动扶梯" disabled></li>
			<li><span>资产编码</span><input type="text" value="A1324316546512" disabled></li>
			<li><span>资产型号</span><input type="text" value="SUPER_START_100276" disabled></li>
			<li><span>生产商</span><input type="text" value="翔云电梯有限公司" disabled></li>
			<li>
				<span>数量</span><input type="number" value="1" disabled  class="listOne"><span>台</span>
				<span>启用日期</span><input type="date" value="2012-10-01" disabled class="listOne">
			</li>
			<li>
				<span>单价</span><input type="number" value="200000.00" disabled class="listOne"><span>元</span>
				<span>使用年限</span><input type="number" value="15" disabled class="listOne"><span>年</span>
			</li>
			<li>
				<span>总价</span><input type="number" value="1000000.00" disabled class="listOne"><span>元</span>
				<span>保修期</span><input type="date" value="2020-09-30" disabled class="listOne">
			</li>
			<li>
				<span>线路段</span><input type="text" value="13号线" disabled class="listOne">
				<span>上次检修日期</span><input type="date" value="2013-02-01" disabled class="listOne">
			</li>
			<li>
				<span>大地点</span><input type="number" value="13号线" disabled class="listOne">
				<span>下次检修时间</span><input type="date" value="2013-11-01" disabled class="listOne">
			</li>
			<li>
				<span>小地点</span><input type="number" value="1000000.00" disabled class="listOne">
				<span>检修周期</span><input type="number" value="3" disabled class="listOne"><span>月</span>
			</li>
		</ul>

	</div>

	<div class="keyDetailInfo">
		<p>详细属性 <span class="keyClose">关闭</span>
		<p>
			<button class="ac">基本属性</button>
			<button>运行数据</button>
			<button>设备工单</button>
			<button>图纸资料</button>
		</p>

		<!--基本属性-->
		<div class="attrKey">
			<p>设计期 <span></span></p>
			<ul>
				<li>编码</li>
				<li>SD-G327</li>
				<li>类型</li>
				<li>单扶梯</li>
				<li>ID</li>
				<li>39542521</li>
				<li>簇与类型</li>
				<li>单扶梯</li>
				<li>踏步深</li>
				<li>400</li>
				<li>族</li>
				<li>电梯</li>
			</ul>
			<p>施工期 <span></span></p>
			<ul>
				<li>型号规格</li>
				<li>PA13(100)</li>
				<li>所属线路</li>
				<li>5号线</li>
				<li>施工单位</li>
				<li>中铁六局</li>
				<li>交付时间</li>
				<li>2017年3月</li>
				<li>使用年限</li>
				<li>144月</li>
				<li>备注</li>
				<li>每日巡检</li>
			</ul>
			<p>运营期 <span></span></p>
			<ul>
				<li>所属单位</li>
				<li>地铁有限公司</li>
				<li>运营单位</li>
				<li>辉耀公司</li>
				<li>安装位置</li>
				<li>5号线大兴站</li>
				<li>当前状态</li>
				<li>正常使用</li>
				<li>质保日期</li>
				<li>2018-10-2</li>
				<li>上次维修</li>
				<li>2016-03-13</li>
			</ul>
		</div>

		<!--运行数据-->
		<div id="chartAttr"></div>

		<!--设备工单-->
		<div class="dKey">
			<div class="row-fluid sortable">
			<div class="box span12">
				<div class="box-header">
					<h2><i class="halflings-icon white align-justify"></i><span class="break"></span>工单列表</h2>
					<div class="box-icon">
						<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
						<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
						<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
					</div>
				</div>
				<div class="box-content tab" >
					<table class="table table-bordered">
						<thead>
						<tr>
							<th>工单号</th>
							<th>工单描述</th>
							<th>负责人</th>
							<th>送单日期</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>1001</td>
							<td class="center">右侧齿轮加油</td>
							<td class="center">程翔</td>
							<td class="center">2017-10-18</td>
						</tr>
						<tr>
							<td>1002</td>
							<td class="center">功耗异常，检查线路部分</td>
							<td class="center">梁策</td>
							<td class="center">2017-10-19</td>
						</tr>
						<tr>
							<td>1003</td>
							<td class="center">功耗异常，检查线路部分</td>
							<td class="center">李华</td>
							<td class="center">2017-10-18</td>
						</tr>
						<tr>
							<td>1004</td>
							<td class="center">右侧齿轮加油</td>
							<td class="center">李华</td>
							<td class="center">2017-10-18</td>
						</tr>
						</tbody>
					</table>

				</div>
			</div><!--/span-->
			</div>
		</div>

		<!--图纸资料-->
		<div class="pic">
			<img src="${ctx }/static/page/yunwei/zichan/img/jiegoupingmiantu1.png" alt="">
			<input type="button" name="" id="" value="下载">
		</div>
	</div>
	<div class="currData">
		<p>实时数据 <span class="keyClose">关闭</span></p>
		<p>
			<span>运行状态：</span><input type="text"disabled value="运行中">
			<span>运行次数：</span><input type="text"disabled id="timeNum">
		</p>
		<p>
			<span>运行总次数：</span><input type="text"disabled id="timeTotal">
			<span>故障报警：</span><input type="text"disabled value="无">
		</p>

		<div id="currData"></div>
	</div>

</body>
	<script src="${ctx }/static/page/common/js/appendTool.js"></script>
	<script src="${ctx}/static/page/common/js/jquery.noty.js"></script>
	<script src="${ctx }/static/webgl/Tool/surveyCallBack.js"></script>
	<script src="${ctx }/static/page/yunwei/zichan/js/zichan.js"></script>
	<script src="${ctx }/static/page/yunwei/zichan/js/zichan_viewer.js"></script>
	<script src="${ctx }/static/webgl/pModel/js/move.js"></script>
	<script src="${ctx}/static/page/common/js/FreeDoUtil.js"></script>
	<script src="${ctx}/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>

</html>