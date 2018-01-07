<%@ page language="java" contentType="text/html;charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>盾构实时监控</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/jiankong/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/gaikuang/css/gaikuang.css">
    <script src="${ctx }/static/page/common/js/jquery-3.2.1.min.js"></script>
        <%@ include file="/WEB-INF/page/common/common_FD.jsp"%>
</head>
<body>
<header id="header">
    <div class="logo">
        <img src="${ctx }/static/page/dungou/jiankong/img/logo.png" alt="">
    </div>
    <div class="user">
        <div class="user-info">
            <img src="${ctx }/static/page/dungou/jiankong/img/avatar.jpg" alt="" class="user-img">
             <shiro:principal property="nickname"/>
        </div>
        <div class="user-handler">
            <span><i class="iconfont icon-self"></i><span>个人中心</span></span>
            <span><i class="iconfont icon-message"><span>2</span></i><span>消息中心</span></span>
            <span><i class="iconfont icon-out-login"></i><span>退出登录</span></span>
        </div>

    </div>
</header>
<div id="contentBox">
    <div class="nav">
        <ul>
            <li class="nav-item">
                <a href="javascript:;"><span>全生命周期</span><i class="iconfont icon-down-arrow "></i></a>
                <ul class="second-menu">
                    <li> <a href="javascript:;"><i class="iconfont icon-kcmanager"></i><span>勘测可研</span><i class="iconfont icon-arrow-down second-arrow"></i></a></li>
                    <li> <a href="javascript:;"><i class="iconfont icon-sheji"></i><span>设计协同</span><i class="iconfont icon-arrow-down second-arrow"></i></a></li>
                    <li> <a href="javascript:;"><i class="iconfont icon-yh"></i><span>隐患管理</span><i class="iconfont icon-arrow-down second-arrow"></i></a></li>
                    <li> <a href="javascript:;"><i class="iconfont icon-yunwei"></i><span>运维管理</span><i class="iconfont icon-arrow-down second-arrow"></i></a></li>
                </ul>
            </li>

            <li class="nav-item">
                <a href="javascript:;"><span>专业系统</span><i class="iconfont  icon-down-arrow"></i></a>
                <ul class="second-menu">
                    <li>
                        <a href="javascript:;" class="nav-item-active"><i class="iconfont icon-dgj"></i><span>盾构管理</span><i class="iconfont icon-arrow-down  second-arrow"></i></a>
                        <ul class="three-menu">
                            <li> <a href="${ctx }/ProSystem/dungou/toGaikuang" class="second-active"><span>项目概况</span></a></li>
                            <li> <a href="${ctx }/ProSystem/dungou/toJiankong"><span>盾构监控</span></a></li>
                            <li> <a href="javascript:;"><span>安全风险</span></a></li>
                            <li> <a href="javascript:;"><span>预警处理</span></a></li>
                            <li> <a href="javascript:;"><span>进度管理</span></a></li>
                            <li> <a href="javascript:;"><span>文档管理</span></a></li>
                            <li> <a href="javascript:;"><span>报表管理</span></a></li>
                        </ul>
                    </li>
                </ul>
            </li>

        </ul>
        <span class="showCheckList"></span>
    </div>
    <div class="content">
        <div class="content-middle">
            <div id="earth" class="not-full-screen">
                <p>剖面视图
                    <i class="iconfont icon-bqp bqp"></i>
                </p>
                <img alt="" src="${ctx }/static/page/dungou/gaikuang/img/poumian.png" style="width:100%;height:100%">
            </div>
            <div id="earth1" class="full-screen">
                <p><span>俯视视图</span><span></span><span>按时掘进</span><span></span><span>掘进延时</span> <i class="iconfont icon-qp qp"></i></p>
            </div>
        </div>
        <div class="content-bottom">
            <div class="info-left">
                <div>
                    <p>工程概况</p>
                    <div>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</div>
                </div>
                <div>
                    <p>项目公告</p>
                    <ul>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>

                    </ul>
                </div>

            </div>
            <div class="info-middle">
                <div id="chartOne"></div>
                <div id="chartTwo"></div>
                <div id="chartThree"></div>

            </div>
            <div class="info-right">
                <div id="chartFour"></div>

            </div>
        </div>
    </div>
</div>
<script src="${ctx }/static/page/common/js/echarts.min.js"></script>
<script src="${ctx }/static/page/common/js/nav.js"></script>
<script src="${ctx }/static/page/dungou/gaikuang/js/gaikuang.js"></script>
</body>
</html>