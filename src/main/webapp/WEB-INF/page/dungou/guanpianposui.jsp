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
    <title>管片破损</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx}/static/page/dungou/guanpianposui/css/guanpianposui.css">
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
    <div class="nav"></div>
    <div class="content">
        <div class="page-nav">

        </div>
        <div id="info">
            <div class="content-top">
                <p>筛选条件</p>
                <ul>

                    <li>
                        <span>破损环数:&nbsp;</span>
                        <select>
                            <option value="">504</option>
                            <option value="">404</option>
                            <option value="">643</option>
                        </select>
                    </li>
                    <li><span>破损数量:&nbsp;</span><input type="text" value="10"></li>
                    <li><span>责任人:&nbsp;</span><input type="text" ></li>
                    <li><input type="button" name="" id="search" class="btn-active" value="查询"><input type="button" name="" id="reset" value="重置"></li>
                </ul>
            </div>
            <div class="content-bottom">
                <p>破损管片列表</p>
                <div id="dataBox">
                    <table id="dataGrid" style="width:100%;height:100%"></table>
                </div>
            </div>
        </div>

        <div class="three-box">
            <p>三维模型</p>
        </div>
    </div>
</div>

<div id="infoShow" class="easyui-window" title="预警详情" data-options="modal:true,closed:true" style="width:550px;height:530px;padding:10px;">
    <ul class="show-dangers-info">
        <li><span class="describe1">1点方向:</span></li>
        <li><span class="describe1">破损照片:</span><img src="${ctx }/static/page/dungou/common/img/avatar.jpg" alt=""></li>
        <li><span class="describe1">破损原因:</span><span>拼装质量不好造成管片错台，</span></li>
        <li><span class="describe1">处理及防范措施:</span><span>管片拼装应先上后下，左右交叉，最后封顶块的安装原则。发现问题及时对破损处打磨修补。</span></li>
    </ul>

    <ul class="show-dangers-info">
        <li><span class="describe1">2点方向:</span></li>
        <li><span class="describe1">破损照片:</span><img src="${ctx }/static/page/dungou/common/img/avatar.jpg" alt=""></li>
        <li><span class="describe1">破损原因:</span><span>拼装质量不好造成管片错台，</span></li>
        <li><span class="describe1">处理及防范措施:</span><span>管片拼装应先上后下，左右交叉，最后封顶块的安装原则。发现问题及时对破损处打磨修补。</span></li>
    </ul>
</div>

<script src="${ctx}/static/page/common/js/jquery-3.2.1.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/jquery.easyui.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/locale/easyui-lang-zh_CN.js"></script>
<script src="${ctx}/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx }/static/page/dungou/common/js/danpanHeader.js"></script>
<script src="${ctx}/static/page/common/js/nav.js"></script>
<script src="${ctx }/static/page/dungou/guanpianposui/js/guanpianposui.js"></script>
</body>

</html>