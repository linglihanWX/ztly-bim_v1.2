<%--
  Created by IntelliJ IDEA.
  User: FREEDO
  Date: 2018/1/26
  Time: 11:59
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
    <title>工作联系单</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/workContactSheet/css/workContactSheet.css/">
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
                <p>工作联系单查询</p><ul>
                <li><span>上报时间:&nbsp;</span><input type="date"><span>&nbsp;至&nbsp;</span><input type="date" name=""
                                                                                                id=""></li>
                <li><span>上报人:&nbsp;</span><input type="text"></li>
                <li><span>风险发生地:&nbsp;</span><select name="" id="">
                    <option value="">A</option>
                    <option value="">B</option>
                    <option value="">C</option>
                </select></li>
                <li><span>治理状态:&nbsp;</span><select name="" id="">
                    <option value="">A</option>
                    <option value="">B</option>
                    <option value="">C</option>
                </select></li>
                <li><input type="button" name="" id="search" class="btn-active" value="查询"><input type="button" name="" id="reset" value="重置"></li>
            </ul>
            </div>
            <div class="content-bottom">
                <p>
                    <span>工作联系单列表</span>

                    <input type="button" name="" id="edit" value="编辑">
                    <input type="button" name="" id="report" value="上报">
                </p>

                <div id="dataBox">
                    <table id="dataGrid"></table>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="reportBox" class="easyui-window" title="风险常规问题上报" data-options="modal:true,closed:true"
     style="width:500px;height:450px;padding:10px;">
    <ul class="add-dangers-info">
        <li><span class="describe"><span class="must-write">*</span>风险发生地:</span><select name="" id="">
            <option value="">苏州街</option>
            <option value="">长春桥</option>
            <option value="">五道口</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>整改时限:</span><input class="inp" required type="text">
        </li>
        <li><span class="describe"><span class="must-write">*</span>问题描述:</span><textarea name="" id="" ></textarea></li>
        <li><span class="describe"><span class="must-write">*</span>原因分析:</span><textarea name="" id="" ></textarea></li>
        <li><span class="describe"><span class="must-write">*</span>可能发生风险事件:</span><textarea name="" id="" ></textarea></li>
        <li><span class="describe"><span class="must-write">*</span>处理措施建议:</span><input class="inp" required type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>整改前图片:</span><select name="" id="">
            <option value="">六院-土建</option>
        </select></li>

        <li><input type="button" name="" class="save btn-active" value="保存"><input type="button" name=""
                                                                                   class="cancel" value="取消"></li>
    </ul>
</div>
<div id="editBox" class="easyui-window" title="风险常规问题编辑" data-options="modal:true,closed:true"
     style="width:450px;height:500px;padding:10px;">
    <ul class="add-dangers-info">
        <li><span class="describe"><span class="must-write">*</span>风险所属工程:</span><select name="" id="">
            <option value="">六院-土建</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>风险发生地:</span><select name="" id="">
            <option value="">苏州街</option>
            <option value="">长春桥</option>
            <option value="">五道口</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>问题描述:</span><textarea name="" id=""></textarea></li>
        <li><span class="describe"><span class="must-write">*</span>处置措施建议:</span><textarea name="" id=""></textarea></li>

        <li><span class="describe"><span class="must-write">*</span>整改时限:</span><input class="inp" required type="text">
        </li>
        <li><span class="describe"><span class="must-write">*</span>上报人:</span><input class="inp" required type="text">
        </li>
        <li><span class="describe"><span class="must-write">*</span>治理状态:</span><input class="inp" required type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>上报时间:</span><input class="inp" required type="date"></li>
        <li><span class="describe"><span class="must-write">*</span>流程状态:</span><input class="inp" required type="text"></li>

        <li><input type="button" name="" class="save btn-active" value="保存"><input type="button" name=""
                                                                                   class="cancel" value="取消"></li>
    </ul>
</div>
<script src="${ctx}/static/page/common/js/jquery-3.2.1.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/jquery.easyui.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/locale/easyui-lang-zh_CN.js"></script>
<script src="${ctx}/static/page/dungou/common/js/fengxianHeader.js"></script>
<script src="${ctx}/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx}/static/page/common/js/nav.js"></script>
<script src="${ctx}/static/page/dungou/workContactSheet/js/workContactSheet.js"></script>
</body>

</html>
