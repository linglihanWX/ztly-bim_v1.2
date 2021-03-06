<%@ page language="java" contentType="text/html;charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<c:set var="ctx" value="<%=request.getContextPath()%>"></c:set>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/swiper-3.4.2.min.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/fengxian/css/fengxian.css">
    <script src="${ctx }/static/page/common/js/jquery-3.2.1.min.js"></script>
    <link href="http://res.gbim360.com/lib/freedo/rel/1.5.2/Freedo/Widgets/widgets.css" rel="stylesheet">
    <script src="http://res.gbim360.com/lib/freedo/rel/1.5.2/Freedo/Freedo.js"></script>
    <script src="http://res.gbim360.com/shared/1710_lodash/lodash.min.js"></script>
    <!-- 指北针 -->
    <link rel="stylesheet" href="${ctx }/static/webgl/compass/css/compass.css">
    <script src="${ctx }/static/webgl/compass/js/Compass.js"></script>
    <!-- 调整PMODEL模型 -->
    <script src="${ctx }/static/webgl/pModel/js/move.js"></script>

    <script src="${ctx }/static/page/common/js/FreedoApp.js"></script>
    <script src="${ctx }/static/page/common/js/FreeDoTool.js"></script>
    <script src="${ctx }/static/page/common/js/FreeDoUtil.js"></script>
    <title>安全风险</title>
</head>
<body>
<header id="header">
    <div class="logo">
        <img src="${ctx }/static/page/dungou/common/img/logo.png" alt="">
    </div>
    <div class="user">
        <div class="user-info">
            <img src="${ctx }/static/page/dungou/common/img/avatar.jpg" alt="" class="user-img">
            <shiro:principal property="nickname"/>
        </div>
        <div class="user-handler">
            <span><i class="iconfont icon-self"></i><span>个人中心</span></span>
            <span><i class="iconfont icon-message"><span>2</span></i><span>消息中心</span></span>
            <a href="${ctx }/logout"><span><i class="iconfont icon-out-login"></i><span>退出登录</span></span></a>
        </div>

    </div>
</header>
<div id="contentBox">
    <div class="nav">

    </div>
    <div class="content">
        <div class="page-nav"></div>
        <div class="content-top">

            <div id="earth" style="overflow:hidden">
                <p>
                    <span class="dghh">环号:506</span>
                    <span class="line">左线</span>当前环:<span class="line">110</span>状态停止
                    <span class="line">右线</span>当前环:<span class="line">110</span>状态停止
                    <img id="resetview" src="${ctx }/static/page/dungou/jiankong/img/danger.png" alt="">
                </p>
                <div class="tree-box">
                    <p class="tree-box-title">构件树<i class="iconfont icon-hidden"></i></p>
                    <div id="tree">

                    </div>
                </div>
                <!--  <ul class="changeContent">
                     <li class="main-page"><i class="iconfont icon-main-page"></i>&nbsp;&nbsp;&nbsp;主页面</li>
                     <li class="three-page"><i class="iconfont icon-swzs"></i>&nbsp;&nbsp;&nbsp;三维页面</li>
                     <li class="nav-show-hide"><i class="iconfont icon-yemian"></i>&nbsp;&nbsp;&nbsp;显隐导航</li>
                 </ul>
        -->
            </div>
            <div id="chartOne"></div>
         <%--    <img src="${ctx }/static/page/dungou/fengxian/img/dungoutubiao.png"  class="icon-pos"/> --%>
            <i class="iconfont icon-pos"></i>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide info-left">
                    <p>隧道安全风险</p>
                </div>

                <div class="swiper-slide info-right">
                    <p>盾构机安全风险</p>
                    <div class="text-info"></div>
                    <div class="data-info">
                        <p>出土量方<i class="iconfont icon-out"></i></p>
                        <div id="chartTwo"></div>
                    </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>

</div>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/jquery.easyui.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/locale/easyui-lang-zh_CN.js"></script>

<script src="${ctx }/static/page/common/js/swiper-3.4.2.jquery.min.js"></script>
<script src="${ctx }/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx }/static/page/dungou/common/js/fengxianHeader.js"></script>
<script src="${ctx }/static/page/common/js/nav.js"></script>
<script src="${ctx }/static/page/dungou/fengxian/js/fengxian_viewer.js"></script>
<script src="${ctx }/static/page/common/js/echarts.min.js"></script>
<script src="${ctx }/static/webgl/caozuoqi/cameraControlRightAdjust.js"></script>
<script src="${ctx }/static/page/dungou/fengxian/js/fengxian.js"></script>
<script src="${ctx }/static/page/dungou/fengxian/js/fengxianinit.js"></script>
<%-- <script src="${ctx }/static/page/common/IconFont/iconfont.js"></script> --%>


</body>
</html>