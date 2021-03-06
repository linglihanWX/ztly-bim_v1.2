<%@ page language="java" contentType="text/html;charset=UTF-8"
    pageEncoding="UTF-8"%>

    <!DOCTYPE html>
<html lang="en">

<head>

    <!-- start: Meta -->
    <meta charset="utf-8">
    <title>任务进度</title>
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
    <!-- end: CSS -->
    <link rel="stylesheet" href="${ctx }/static/page/common/css/common.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/IconFont/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/sheji/gaikuang/css/gaikuang.css">
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
                    <a href="#" class="activeList">项目概况</a>
                    <a href="${ctx }/sheji/toRenwu">任务</a>
                    <a href="${ctx }/sheji/toBIMfangansheji">BIM方案设计</a>
                    <a href="${ctx }/sheji/toWendang">文档管理</a>
                    <a href="#">项目信息</a>
                    <a href="${ctx }/sheji/toYijiao">数字移交</a>
                    <a href="${ctx }/sheji/toZhanshi">3D综合展示</a>
                </li>

            </ul>
            <div class="row-fluid sortable">
                <div class="box span6">
                    <div class="box-header">
                        <h2><i class="halflings-icon white align-justify"></i><span class="break"></span>当前项目进度</h2>
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
                                <th>专业名称</th>
                                <th>结束日期</th>
                                <th>当前状态</th>
                                <th>预计时间（天）</th>
                                <th>消耗时间（天）</th>
                                <th>剩余时间（天）</th>
                                <th>当前进度</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>土建专业</td>
                                <td class="center">2019/02-13</td>
                                <td class="center">进行中</td>
                                <td class="center">400</td>
                                <td class="center">40</td>
                                <td class="center">360</td>
                                <td class="center"><span class="outside"><span class="inside progress1"></span></span>10%</td>
                            </tr>
                            <tr>
                                <td>机电专业</td>
                                <td class="center">2019/06-09</td>
                                <td class="center">滞后</td>
                                <td class="center">340</td>
                                <td class="center">200</td>
                                <td class="center">140</td>
                                  <td class="center"><span class="outside"><span class="inside progress2"></span></span>40%</td>

                            </tr>
                            <tr>
                                <td>给水专业</td>
                                <td class="center">2019/03-15</td>
                                <td class="center">延期</td>
                                <td class="center">200</td>
                                <td class="center">260</td>
                                <td class="center">0</td>
                                 <td class="center"><span class="outside"><span class="inside progress3"></span></span>63%</td>
                            </tr>
                            <tr>
                                <td>通风专业</td>
                                <td class="center">2019/04-22</td>
                                <td class="center">稍快</td>
                                <td class="center">365</td>
                                <td class="center">100</td>
                                <td class="center">265</td>
                                <td class="center"><span class="outside"><span class="inside progress4"></span></span>90%</td>

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

                <div class="box span6">
                    <div class="box-header">
                        <h2><i class="halflings-icon white align-justify"></i><span class="break"></span>最新动态</h2>
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
                                <th>时间</th>
                                <th class="center">内容</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>10月20日 09:05</td>
                                <td class="center">杨强 登录系统</td>
                            </tr>
                            <tr>
                                <td>10月20日 09:05</td>
                                <td class="center">杨强 上传了 土建专业-基坑填挖.rvt</td>
                            </tr>
                            <tr>
                                <td>10月20日 09:05</td>
                                <td class="center">杨强 上传了 土建专业-基坑填挖.rvt-SBC-10220:采光不足，需...</td>
                            </tr>
                            <tr>
                                <td>10月20日 09:05</td>
                                <td class="center">杨强 上传了 土建专业-基坑填挖.rvt-SBC-10230:采光不足，需...</td>
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

            </div><!--/row-->
        </div>
    </div>
</div>




<!-- start: JavaScript-->

<script src="${ctx }/static/page/common/js/jquery-ui-1.10.0.custom.min.js"></script>
<script src="${ctx }/static/page/common/js/echarts.min.js"></script>
<script src="${ctx }/static/page/sheji/gaikuang/js/gaikuang.js"></script>

</body>

</html>