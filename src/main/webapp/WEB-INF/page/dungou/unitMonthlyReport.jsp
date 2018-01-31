<%--
  Created by IntelliJ IDEA.
  User: FREEDO
  Date: 2018/1/31
  Time: 10:19
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
    <title>施工单位月报</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/unitMonthlyReport/css/unitMonthlyReport.css">
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
        <div class="content-right">
            <div class="content-top">
                <p>施工单位月报查询</p>
                <ul>
                    <li><span>上报月份:&nbsp;</span><input type="month"><span>&nbsp;至&nbsp;</span><input type="month" name="" id=""></li>
                    <li><span>排查地点:&nbsp;</span><select name="" id="">
                        <option value="">A</option>
                        <option value="">B</option>
                        <option value="">C</option>
                    </select></li>
                    <li>
                        <input type="button" name="" id="search" class="btn-active" value="查询">
                        <input type="button" name="" id="reset" value="重置">
                    </li>
                </ul>
            </div>
            <div class="content-bottom">
                <p>
                    <span>施工单位月报列表</span>

                    <input type="button" name="" id="edit" value="编辑">
                    <input type="button" name="" id="export" value="导出">
                </p>

                <div id="dataBox">
                    <table id="dataGrid"></table>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="editBox" class="easyui-window" title="施工单位月报修改" data-options="modal:true,closed:true"
     style="width:500px;height:500px;padding:10px;">
    <ul class="add-dangers-info">
        <li><span class="describe"><span class="must-write">*</span>上报月份:</span><input class="inp reportTime" required type="month"></li>
        <li><span class="describe"><span class="must-write">*</span>排查地点:</span><input class="inp place" required type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>排查描述:</span><textarea class="description"></textarea></li>
        <li><span class="describe"><span class="must-write">*</span>未完成原因:</span><textarea class="reason"></textarea></li>
        <li><span class="describe"><span class="must-write">*</span>月报详情列表:</span><table id="history"></table></li>

        <li><input type="button" name="" class="save btn-active" value="保存"><input type="button" name="" class="cancel" value="取消"></li>
    </ul>
</div>
<script src="${ctx}/static/page/common/js/jquery-3.2.1.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/jquery.easyui.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/locale/easyui-lang-zh_CN.js"></script>
<script src="${ctx}/static/page/dungou/common/js/fengxianHeader.js"></script>
<script src="${ctx}/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx}/static/page/common/js/nav.js"></script>
<script src="${ctx }/static/page/dungou/unitMonthlyReport/js/unitMonthlyReport.js"></script>
</body>

</html>
