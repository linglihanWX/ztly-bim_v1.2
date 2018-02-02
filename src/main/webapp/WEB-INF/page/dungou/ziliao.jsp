<%--
  Created by IntelliJ IDEA.
  User: FREEDO
  Date: 2018/1/21
  Time: 14:16
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>资料管理</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/ziliao/css/ziliao.css">
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
        <div class="content-left">
            <p>资料清单</p>
            <ul class="btn-list">
                <li><span class="btn-active">资料1</span><span>资料2</span></li>
            </ul>

            <div id="detailed">
                <div id="dataOne" style="width: 100%;height: 100%;"></div>
                <div id="dataTwo" style="width: 100%;height: 100%;"></div>

            </div>


        </div>
        <div class="content-right">
            <div class="content-top">
                <p>查询条件</p>

                <ul>
                    <li><span>时间:</span><input type="date" name="" id=""></li>
                    <li><span>编号:</span><input type="text" name="" id=""></li>
                    <li><input type="button" name="" id="search" class="btn-active btn" value="查询"></li>
                    <li><span>责任人:</span><input type="text" name="" id=""></li>
                    <li><span>资料形成单位:</span><input type="text" name="" id=""></li>
                     <li><input type="button" name="" id="reset" value="重置" class="btn"></li>
                    
                </ul>
            </div>
            <div class="content-bottom">
                <p>资料列表 <span><input type="button" name="" id="upLoad" class="btn-active" value="上传"><input type="button" name="" id="downLoad" value="下载"></span></p>

                <div id="dataBox">
                    <div id="dataGrid" style="width:100%;height:100%">
                        <!--<ul>
                            <li><span></span><span><input type="checkbox" name="" id="all"></span><span>工程名称</span><span>行程时间</span><span>责任人</span><span>行成单位</span><span>保管单位</span><span>预览</span></li>
                        </ul>-->
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
<script src="${ctx}/static/page/common/js/nav.js"></script>
<script src="${ctx}/static/page/dungou/ziliao/js/ziliao.js"></script>
</body>

</html>