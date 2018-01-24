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
    <title>盾构预警</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/dungouyujing/css/dungouyujing.css">
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
                <p>查询条件</p>
                <ul>
                    <li><span>预警时间:&nbsp;</span><input type="date" ><span>&nbsp;至&nbsp;</span><input type="date"></li>
                    <li>
                        <span>预警级别:&nbsp;</span>
                        <select>
                            <option value="">一级</option>
                            <option value="">二级</option>
                            <option value="">三级</option>
                        </select>
                    </li>
                    <li>
                        <span>预警发生点:&nbsp;</span>
                        <select>
                            <option value="">A</option>
                            <option value="">B</option>
                            <option value="">C</option>
                        </select>
                    </li>
                </ul>
                <ul>
                    <li><span>偏差类型:&nbsp;</span><input type="text" ></li>
                    <li><span>处理状态:&nbsp;</span><input type="text" ></li>
                    <li><span>责任人:&nbsp;</span><input type="text" ></li>
                    <li><input type="button" name="" id="search" class="btn-active" value="查询"><input type="button" name="" id="reset" value="重置"></li>
                </ul>
            </div>
            <div class="content-bottom">
                <p>预警列表 <input type="button" name="" id="add" value="添加"></p>
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
<div id="addDangers" class="easyui-window" title="预警上报" data-options="modal:true,closed:true" style="width:500px;height:530px;padding:10px;">
    <ul class="add-dangers-info">
        <li><span class="describe"><span class="must-write">*</span>风险所属工程:</span><input class="inp" type="text" required placeholder="六院-土建-标段"></li>
        <li><span class="describe"><span class="must-write">*</span>风险发生地:</span><input class="inp" type="text" required placeholder="六院-土建-标段"></li>
        <li><span class="describe"><span class="must-write">*</span>管片环号:</span><input class="inp" type="text" required placeholder="526"></li>

        <li><span class="describe"><span class="must-write">*</span>偏差类型:</span><input class="inp" required type="text"></li>
        <li><span class="describe">预警等级:</span><input class="inp" type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>处理状态:</span><input class="inp" required type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>上报日期:</span><input class="inp" required type="date"></li>
        <li><span class="describe"><span class="must-write">*</span>上报人:</span><input class="inp" required type="text"></li>
        <li><span class="describe">详情图片:</span><img src="${ctx }/static/page/dungou/common/img/avatar.jpg" alt=""></li>
        <li><input type="button" name="" id="save" class="btn-active" value="保存"><input type="button" name="" id="cancel" value="取消"></li>
    </ul>
</div>
<div id="infoShow" class="easyui-window" title="预警详情" data-options="modal:true,closed:true" style="width:550px;height:530px;padding:10px;">
    <ul class="show-dangers-info">
        <li><span class="describe1">风险所属工程:</span><span>六院-土建-标段</span></li>
        <li><span class="describe1">风险发生地:</span><span>六院土建项目二级项目部</span></li>
        <li><span class="describe1">详情描述:</span><span>526管片与轴线设计偏差较大</span></li>

        <li><span class="describe1">原因分析:</span><span>受地质影响</span></li>
        <li><span class="describe1">发生时间:</span><span>2016-12-31</span></li>
        <li><span class="describe1">发生问题单位:</span><span>总体项目部</span></li>
        <li><span class="describe1">发现问题人:</span><span>李某某</span></li>
        <li><span class="describe1">要求整改完成时间:</span><span>2017-01-21</span></li>
        <li><span class="describe1">详情图片:</span><img src="${ctx }/static/page/dungou/common/img/avatar.jpg" alt=""></li>
    </ul>
</div>

<script src="${ctx}/static/page/common/js/jquery-3.2.1.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/jquery.easyui.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/locale/easyui-lang-zh_CN.js"></script>
<script src="${ctx}/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx }/static/page/dungou/common/js/danpanHeader.js"></script>
<script src="${ctx}/static/page/common/js/nav.js"></script>
<script src="${ctx}/static/page/dungou/dungouyujing/js/dungouyujing.js"></script>
</body>

</html>
