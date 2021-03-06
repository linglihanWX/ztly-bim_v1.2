<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>

    <!-- start: Meta -->
    <meta charset="utf-8">
    <title>项目概况</title>
    <meta name="description" content="Bootstrap Metro Dashboard">
    <meta name="author" content="Dennis Ji">
    <meta name="keyword"
          content="Metro, Metro UI, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
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
    <link rel="stylesheet" href="${ctx }/static/page/common/js/zTreeStyle/zTreeStyle.css">
    <script src="${ctx }/static/page/common/js/zTreeStyle/ztree.js"></script>
    <link rel="stylesheet" href="${ctx }/static/page/yunwei/gaikuang/css/gaikuang.css">

    <link rel="stylesheet" href="${ctx }/static/page/common/css/media.css">
    <!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <link id="ie-style" href="css/ie.css" rel="stylesheet">
    <![endif]-->

    <!--[if IE 9]>
    <link id="ie9style" href="css/ie9.css" rel="stylesheet">
    <![endif]-->
</head>

<body>
<%@ include file="/WEB-INF/page/common/iframe/head.jsp" %>
<%@ include file="/WEB-INF/page/common/iframe/left.jsp" %>
<span class="yunwei" id="moduletype"></span>
        <!-- start: Content -->
        <div id="content" class="span10">
            <ul class="breadcrumb">
                <i class="iconfont icon-hxzfont08"></i>
                <li class="lists">
                		<a href="#" class="activeList">项目概况</a>
						<a href="#">空间管理</a>
						<a href="${ctx }/yunwei/toZichan">资产管理</a>
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
                
                <div class="box span12">
                    <div class="box-header">
                        <h2><i class="halflings-icon white align-justify"></i><span class="break"></span>部件维修进度</h2>
                        <div class="box-icon">
                            <a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
                            <a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
                            <a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
                        </div>
                    </div>
                    <div class="box-content">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>维护部件</th>
                                <th>位置</th>
                                <th>申报人</th>
                                <th>发现时间</th>
                                <th>维修开始时间</th>
                               
                                <th>维修费用(元)</th>
                                <th>维修周期(小时)</th>
                                <th>当前状态</th>
                                <th>当前进度</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>3号电梯</td>
                                <td class="center">南路A口电梯</td>
                                <td class="center">彭亚光</td>
                                <td class="center">2017/10/29 15:34:00</td>
                                <td class="center">2017/10/30 22:00:00</td>
                                <td class="center">6万</td>
                                <td class="center">2</td>
                                <td class="center">维修中</td>
                                <td class="center"><span class="outside"><span class="inside progress1"></span></span>20%</td>
                            </tr>
                         
                            <tr>
                                <td>5号闸机</td>
                                <td class="center">5号进站口</td>
                                <td class="center">谢云生</td>
                                <td class="center">2017/05/30 15:34:00</td>
                                <td class="center">2017/06/01 07:00:00</td>
                                <td class="center">2.2万</td>
                                <td class="center">5</td>
                                <td class="center">维修中</td>
                                <td class="center">
                                    <span class="outside">
                                        <span class="inside progress2"></span>
                                    </span>40%</td>
                            </tr>
                            <tr>
                                <td>1号升降电梯</td>
                                <td class="center">1号楼梯左侧</td>
                                <td class="center">李亦然</td>
                                <td class="center">2017/03/11 15:34:00</td>
                                <td class="center">2017/03/11 15:49:00</td>
                                <td class="center">0.5万</td>
                                <td class="center">3</td>
                                <td class="center">维修中</td>
                                <td class="center">
                                    <span class="outside">
                                        <span class="inside progress3"></span>
                                    </span>60%</td>
                            </tr>
                            <tr>
                                <td>13号支柱</td>
                                <td class="center">4号楼梯口</td>
                                <td class="center">韩志保</td>
                                <td class="center">2017/08/21 08:34:00</td>
                                <td class="center">2017/08/21 09:09:00</td>
                                <td class="center">1.5万</td>
                                <td class="center">8</td>
                                <td class="center">维修中</td>
                                <td class="center">
                                    <span class="outside">
                                        <span class="inside progress4"></span>
                                    </span>80%</td>
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
                                <li><a href="#">下页</a></li>
                            </ul>
                        </div>
                    </div>
                </div><!--/span-->
<div id="chartOne" class="span6 chart"></div>
<div id="chartTwo" class="span6 chart"></div>
        



            </div>
        </div>
    </div>
</div>
<script src="${ctx }/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>
<script src="${ctx }/static/page/common/js/echarts.min.js"></script>
<script src="${ctx }/static/page/yunwei/gaikuang/js/gaikuang.js"></script> 

</body>

</html>