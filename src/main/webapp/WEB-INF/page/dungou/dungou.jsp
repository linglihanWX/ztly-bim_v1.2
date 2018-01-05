<%@ page language="java" contentType="text/html;charset=UTF-8"
    pageEncoding="UTF-8"%>
    	<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	    <%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
    <c:set var="ctx" value="<%=request.getContextPath()%>"></c:set>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>盾构实时监控</title>
    
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/css/dgssjk.css">
    <script src="${ctx }/static/page/common/js/jquery-3.2.1.min.js"></script>
    <%@ include file="/WEB-INF/page/common/common_FD.jsp"%>
</head>
<body>
<header id="header">
    <div class="logo">
        <img src="${ctx }/static/page/dungou/img/logo.png" alt="">
    </div>
    <div class="user">
        <div class="user-info">
            <img src="${ctx }/static/page/dungou/img/avatar.jpg" alt="" class="user-img">
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
                <a href="javascript:;"><i class="iconfont icon-home"></i><span>首页</span><i class="iconfont icon-arrow-down"></i></a>
                <ul>
                    <li><a href="javascript:;"><span>首页</span></a></li>
                    <li><a href="javascript:;"><span>首页</span></a></li>
                    <li><a href="javascript:;"><span>首页</span></a></li>
                    <li><a href="javascript:;"><span>首页</span></a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="javascript:;"><i class="iconfont icon-yh"></i><span>隐患管理</span><i class="iconfont icon-arrow-down"></i></a>
                <ul>
                    <li><a href="javascript:;"><span>隐患管理</span></a></li>
                    <li><a href="javascript:;"><span>隐患管理</span></a></li>
                    <li><a href="javascript:;"><span>隐患管理</span></a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="javascript:;"><i class="iconfont icon-fengxian"></i><span>风险预警管理</span><i class="iconfont icon-arrow-down"></i></a>
                <ul>
                    <li><a href="javascript:;"><span>风险预警管理</span></a></li>
                    <li><a href="javascript:;"><span>风险预警管理</span></a></li>
                    <li><a href="javascript:;"><span>风险预警管理</span></a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="javascript:;"><i class="iconfont icon-measure"></i><span>监控测量管理</span><i class="iconfont icon-arrow-down"></i></a>
                <ul>
                    <li><a href="javascript:;"><span>监控测量管理</span></a></li>
                    <li><a href="javascript:;"><span>监控测量管理</span></a></li>
                    <li><a href="javascript:;"><span>监控测量管理</span></a></li>
                </ul>
            </li>
            <li class="nav-item nav-show">
                <a href="javascript:;"><i class="iconfont icon-ssjk"></i><span>盾构实时监控</span><i class="iconfont icon-arrow-down"></i></a>
                <ul>
                    <li ><a href="javascript:;" class="navLiActive"><span>盾构实时监控</span></a></li>
                    <li><a href="javascript:;"><span>刀盘监控</span></a></li>
                    <li><a href="javascript:;"><span>自动测量系统</span></a></li>
                    <li><a href="javascript:;"><span>动态风险管理</span></a></li>
                    <li><a href="javascript:;"><span>盾构预警</span></a></li>
                    <li><a href="javascript:;"><span>异常盾构环相数据</span></a></li>
                    <li><a href="javascript:;"><span>材料消耗</span></a></li>
                    <li><a href="javascript:;"><span>辅助决策</span></a></li>
                    <li><a href="javascript:;"><span>管片破损</span></a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="javascript:;"><i class="iconfont icon-zonghe"></i><span>系统管理</span><i class="iconfont icon-arrow-down"></i></a>
                <ul>
                    <li><a href="javascript:;"><span>系统管理</span></a></li>
                    <li><a href="javascript:;"><span>系统管理</span></a></li>
                    <li><a href="javascript:;"><span>系统管理</span></a></li>
                </ul>
            </li>
        </ul>
    </div>


    <div class="content">
        <div class="content-top"><span>盾构实时监控</span><i class="iconfont icon-arrow-right"></i><a href="dgssjk.html">盾构实时监控</a><span class="showCheckList"></span></div>
        <div class="content-middle">
            <div id="earth">
                <p>
                    <span class="line">左线</span>当前环<span class="line">110</span>状态停止
                    <span class="line">右线</span>当前环<span class="line">110</span>状态停止
                    <img src="${ctx }/static/page/dungou/img/danger.png" alt="">
                </p>
            </div>
            <img src="${ctx }/static/page/dungou/img/sliderDown.png"  class="changeSize" alt="">
        </div>
        <div class="content-bottom">
            <div class="info-left">
                <p>主监控 <i class="iconfont icon-out"></i></p>
                <canvas id="cvs" width="500" height="500"></canvas>
            </div>
            <div class="info-middle">

            </div>
            <div class="info-right">
                <p>盾构机偏移 <i class="iconfont icon-out"></i></p>
                <ul>
                    <li><span>刀盘偏移量X(mm):10</span><span>刀盘偏移量X(mm):10</span></li>
                </ul>
                <canvas id="circleCanvas"></canvas>
                <img src="${ctx }/static/page/dungou/img/yaw.png" alt="" class="yaw">
            </div>
        </div>
    </div>
</div>

<div class="list-box" id="listBox">
    <span class="close">×</span>
    <ul class="list"></ul>
</div>
<script src="${ctx }/static/page/common/js/echarts.common.min.js"></script>
<script src="${ctx }/static/page/dungou/js/nav.js"></script>
<script src="${ctx }/static/page/dungou/js/drag.js"></script>
<script src="${ctx }/static/page/dungou/js/base-canvas.js"></script>
<script src="${ctx }/static/page/dungou/js/canvasCircle.js"></script>
<script src="${ctx }/static/page/dungou/js/dgssjk.js"></script>
<script src="${ctx }/static/page/dungou/js/dungou_viewer.js"></script>
<script src="${ctx }/static/page/dungou/js/dungou.js"></script>
</body>
</html>