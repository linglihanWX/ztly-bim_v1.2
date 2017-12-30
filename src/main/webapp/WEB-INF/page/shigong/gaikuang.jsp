<%@ page language="java" contentType="text/html;charset=UTF-8"
    pageEncoding="UTF-8"%>
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

    <link id="bootstrap-style" href="${ctx }/static/page/common/css/bootstrap.min.css" rel="stylesheet">
    <link href="${ctx }/static/page/common/css/bootstrap-responsive.min.css" rel="stylesheet">
    <link id="base-style" href="${ctx }/static/page/common/css/style.css" rel="stylesheet">
    <link id="base-style-responsive" href="${ctx }/static/page/common/css/style-responsive.css" rel="stylesheet">

  	<link rel="stylesheet" href="${ctx }/static/page/common/css/common.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/IconFont/iconfont.css">

    <!--<script src="./js/jquery-1.9.1.min.js"></script>-->
    <link rel="stylesheet" href="${ctx }/static/page/common/js/zTreeStyle/zTreeStyle.css">
    <script src="${ctx }/static/page/common/js/zTreeStyle/ztree.js"></script>
    <link rel="stylesheet" href="${ctx }/static/page/shigong/gaikuang/css/gaikuang.css">
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
<span class="shigong" id="moduletype"></span>
        <!-- start: Content -->
        <div id="content" class="span10">
            <ul class="breadcrumb">
                <i class="iconfont icon-hxzfont08"></i>
                <li class="lists">
                		<a href="#" class="activeList">项目概况</a>
						<a href="${ctx }/shigong/toEbs">进度管理</a>
						<a href="${ctx }/shigong/toPm">场景管理</a>
						<a href="${ctx }/shigong/toAnquan">安全管理</a>
						<a href="${ctx }/shigong/toDungou">盾构监测</a>
						<a href="${ctx }/shigong/toFengxian">风险管理</a>
						<a href="#">质量管理</a>
						<a href="#">成本管理</a>
						<a href="#">合同管理</a>
						<a href="#">施工日志</a>
						<a href="#">项目信息</a>
						<a href="${ctx }/shigong/toZhanshi">3D综合展示</a>
                </li>

            </ul>
            <div class="row-fluid sortable">
                
                <div class="box span12">
                    <div class="box-header">
                        <h2><i class="halflings-icon white align-justify"></i><span class="break"></span>项目概况</h2>
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
                                <th>项目名称</th>
                                <th>项目类别</th>
                                <th>项目成本</th>
                                <th>质量达标</th>
                                <th>安全系数达标</th>
                                <th>项目信息</th>
                                <th>负责人</th>
                                <th>项目进度</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>塘沽地铁站</td>
                                <td>隧道工程</td>
                                <td>24亿</td>
                                <td>达标</td>
                                <td>达标</td>
                                <td>地下20米的，隧道地铁。</td>
                                <td>肖东菁</td>
                                <td><span class="outside"><span class="inside progress1" style="width:20px"></span></span>29%</td>
                            </tr>
                            <tr>
                                <td>广州高明区电场</td>
                                <td>电力工程</td>
                                <td>33亿</td>
                                <td>达标</td>
                                <td>达标</td>
                                <td>输电线路50公里小型发电场</td>
                                <td>傅双育</td>
                                <td><span class="outside"><span class="inside progress1" style="width:35px"></span></span>54%</td>
                            </tr>
                            <tr>
                                <td>岳阳奇家岭水电站</td>
                                <td>水力工程</td>
                                <td>56亿</td>
                                <td>达标</td>
                                <td>达标</td>
                                <td>输电线路2050公里大型水电站</td>
                                <td>潘小旋</td>
                                <td><span class="outside"><span class="inside progress1" style="width:53px"></span></span>70%</td>
                            </tr>
                            <tr>
                                <td>斜拉索大桥</td>
                                <td>桥梁工程</td>
                                <td>19亿</td>
                                <td>达标</td>
                                <td>达标</td>
                                <td>沙岭到范垄3.5公里跳河大桥</td>
                                <td>袁沁茹</td>
                                <td><span class="outside"><span class="inside progress1" style="width:30px"></span></span>40%</td>
                            </tr>
                            <tr>
                                <td>永安水电站</td>
                                <td>水力工程</td>
                                <td>15亿</td>
                                <td>达标</td>
                                <td>达标</td>
                                <td>输电线路919公里大型水电站</td>
                                <td>黄鼎</td>
                                <td><span class="outside"><span class="inside progress1" style="width:8px"></span></span>12%</td>
                            </tr> <tr>
                                <td>张通高速</td>
                                <td>道路工程</td>
                                <td>0.5亿</td>
                                <td>达标</td>
                                <td>达标</td>
                                <td>张州到通古50公里高速公路</td>
                                <td>高群</td>
                                <td><span class="outside"><span class="inside progress1" style="width:22px"></span></span>36%</td>
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
                </div>
            </div>
        </div>
    </div>
</div>
<script src="${ctx }/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>

</body>

</html>