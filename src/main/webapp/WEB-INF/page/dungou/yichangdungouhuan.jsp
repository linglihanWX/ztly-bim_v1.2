<%--
  Created by IntelliJ IDEA.
  User: FREEDO
  Date: 2018/1/24
  Time: 16:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page language="java" contentType="text/html;charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<c:set var="ctx" value="<%=request.getContextPath()%>"></c:set>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>异常盾构环相关数据展示</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/yichangdungouhuan/css/yichangdungouhuan.css">
    <%@ include file="/WEB-INF/page/common/common_FDNew.jsp" %>
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
        <div class="page-nav">
        </div>
        <div class="content-left">
            <p>数据筛选</p>


            <div id="detailed">
                <div id="dataOne" style="width: 100%;height: 100%;"></div>
            </div>


        </div>
        <div class="content-right">
            <div class="content-top">
                <p>数据定位</p>
                <div id="earth">

                </div>


            </div>
            <div class="content-bottom">
                <p>数据列表</p>

                <div id="dataBox">
                    <div id="dataGrid" style="width:100%;height:100%">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="${ctx}/static/page/common/js/jquery-3.2.1.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/jquery.easyui.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/locale/easyui-lang-zh_CN.js"></script>
<script src="${ctx}/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx }/static/page/dungou/common/js/danpanHeader.js"></script>
<script src="${ctx}/static/page/common/js/nav.js"></script>
<script src="${ctx}/static/page/dungou/yichangdungouhuan/js/yichangdungouhuan.js"></script>
<script src="${ctx}/static/page/dungou/yichangdungouhuan/js/yichangdungouhuan3d.js"></script>
<script src="${ctx}/static/page/dungou/yichangdungouhuan/js/dungou_viewer.js"></script>
<script src="${ctx }/static/webgl/caozuoqi/cameraControlRightAdjust.js"></script>
</body>

</html>
