<%--
  Created by IntelliJ IDEA.
  User: FREEDO
  Date: 2018/1/21
  Time: 15:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html;charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<c:set var="ctx" value="<%=request.getContextPath()%>"></c:set>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>动态风险</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">

    <link rel="stylesheet" href="${ctx }/static/page/dungou/dongtaifengxian/css/dongtaifengxian.css">
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
            <ul>
                <li><a href="${ctx }/ProSystem/dungou/toDaopanjiance">刀盘检测</a></li>
                <li><a href="${ctx }/ProSystem/dungou/toZidongdaoxiang">自动导向系统</a></li>
                <li><a href="${ctx }/ProSystem/dungou/toDongtaifengxian" class="active">动态风险</a></li>
                <li><a href="#">泡沫系统</a></li>
                <li><a href="#">注浆系统</a></li>
                <li><a href="#">辅助系统</a></li>
                <li><a href="#">参数设置</a></li>
            </ul>
            <div class="btnChangePattern">
                <select name="" id="">
                    <option value="">动态风险</option>
                    <option value="">隐患风险</option>
                    <option value="">风险预警</option>
                    <option value="">监控测量</option>
                    <option value="">综合统计</option>
                </select>
            </div>
        </div>
        <div class="content-middle">
            <div id="earth">
                <p>
                    <span class="dghh">环号:506</span>
                    <span class="line">左线</span>当前环:<span class="line">110</span>状态停止
                    <span class="line">右线</span>当前环:<span class="line">110</span>状态停止
                </p>
            </div>
        </div>
        <div class="content-bottom">
            <p>
                <span class="dghh">纵剖面</span>
                <i class="iconfont icon-fxyj"></i>
                <span>风险预警</span>
            </p>

            <div id="chartBox">

                <div id="chart"></div>
                <div>
                    <p>提示信息</p>
                    <ul>
                        <li>当前环数: 506</li>
                        <li>所在土层: 中风化板岩</li>
                        <li>风险情况: 前方113m出现溶洞</li>
                        <li>风险等级: 二级</li>
                        <li>安全提示: 请提前做好注浆工作</li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


<script src="${ctx}/static/page/common/js/jquery-3.2.1.min.js"></script>
<script src="${ctx}/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx}/static/page/common/js/nav.js"></script>
<script src="${ctx}/static/page/common/js/echarts.min.js"></script>
<script src="${ctx}/static/page/dungou/dongtaifengxian/js/dongtaifengxian.js"></script>
</body>
</html>
