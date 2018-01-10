<%@ page language="java" contentType="text/html;charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	    <%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
    <c:set var="ctx" value="<%=request.getContextPath()%>"></c:set>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>刀盘监控</title>
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/jiankong/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/daopanjiance/css/daopanjiance.css">
    <script src="${ctx }/static/page/common/js/jquery-3.2.1.min.js"></script>
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
            <span><i class="iconfont icon-out-login"></i><span>退出登录</span></span>
        </div>

    </div>
</header>
<div id="contentBox">
    <div class="nav">

    </div>
    <div class="page-info">
        <div class="page-nav">
            <ul>
                <li><a href="${ctx }/ProSystem/dungou/toDaopanjiance" class="active">刀盘检测</a></li>
                <li><a href="#">自动导向系统</a></li>
                <li><a href="#">泡沫系统</a></li>
                <li><a href="#">注浆系统</a></li>
                <li><a href="#">辅助系统</a></li>
                <li><a href="#">参数设置</a></li>
            </ul>
            <div class="btnChangePattern"><span class="bgBtn"></span><span class="spanActive">二维视图</span><span >三维视图</span></div>
        </div>
       <div class="content-box">
           <div class="page-info-top">
               <div class="top-one">
                   <p>超挖刀</p>
                   <div>
                       <img src="${ctx }/static/page/dungou/daopanjiance/img/cwd.png" alt="">
                       <div class="cwd-info">
                           <p>超挖量</p>
                           <p><span>实测值：</span><span><span></span>mm</span></p>
                           <p><span>设定值：</span><span><span></span>mm</span></p>
                           <p><button id="returnPage">缩回</button></p>
                       </div>
                   </div>
               </div>
               <div class="top-two">
                   <p>刀盘磨损</p>
                   <div>
                       <img src="${ctx }/static/page/dungou/daopanjiance/img/dpms.png" alt="">
                       <div class="daopan-info">
                       </div>
                   </div>
               </div>
               <div class="top-three">
                   <p>刀盘喷水</p>
                   <div>
                       <img src="${ctx }/static/page/dungou/daopanjiance/img/dpps.png" alt="">
                       <p><span>1路</span><br><span><span></span>bar</span></p>
                       <p><span>2路</span><br><span><span></span>bar</span></p>
                       <p><span>3路</span><br><span><span></span>bar</span></p>
                       <p><span>4路</span><br><span><span></span>bar</span></p>
                       <p><span>5路</span><br><span><span></span>bar</span></p>
                       <p><span>流量</span><span><span></span>m³/h</span></p>
                       <div class="btnList">
                           <div><span class="bg"></span><span class="spanActive">手动</span><span>自动</span></div>
                           <button>自动启动</button>
                           <button class="btnActive">停止</button>
                       </div>
                   </div>
               </div>
           </div>
           <div class="page-info-bottom">
               <div class="page-bottom-one">
                   <p>电机参数</p>
                   <div class="parameter">
                       <p><span>电机名称</span><span>频率</span><span>功率</span><span>电流</span><span>力矩</span></p>

                       <ul class="data-list-info">

                       </ul>
                   </div>
               </div>
               <div class="page-bottom-two">
                   <p>电机控制</p>
                   <div>
                       <div class="out-box">
                           <div class="inner-arc"></div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
        <div id="threeModel">
            <p>三维模型</p>
            <div id="earth"></div>
        </div>
    </div>
</div>

<script src="${ctx }/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx }/static/page/common/js/nav.js"></script>
<script src="${ctx }/static/page/dungou/daopanjiance/js/daopanjiance.js"></script>
</body>
</html>