<%--
  Created by IntelliJ IDEA.
  User: FREEDO
  Date: 2018/2/1
  Time: 15:57
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
    <title>预警事件处置</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx}/static/page/dungou/riskWarningReport/css/riskWaringReport.css">
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
        <div class="content-left">
            <p>工程信息</p>
            <div id="detailed">
                <div id="dataOne" style="width: 100%;height: 100%;"></div>
            </div>
        </div>
        <div class="content-right">
            <div class="content-top">
                <p>预警指标查询</p>

                <ul>
                    <li>
                        <span>指标名称:&nbsp;</span>
                        <input type="text">
                    </li>
                    <li>
                        <span>指标内容:&nbsp;</span>
                        <input type="number">
                    </li>
                    <li>
                        <span>预警等级:&nbsp;</span><select name="" id="">
                        <option value="一级">一级</option>
                        <option value="二级">二级</option>
                        <option value="三级">三级</option>
                    </select>
                    </li>
                    <li>
                        <input type="button" name="" id="search" class="btn-active" value="查询">
                        <input type="button" name="" id="reset" value="重置">
                    </li>
                </ul>
            </div>
            <div class="content-bottom">
                <p>
                    <span>预警指标列表</span>
                    <input type="button" name="" id="report" value="上报">
                </p>

                <div id="dataBox">
                    <table id="dataGrid"></table>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="reportBox" class="easyui-window" title="上报风险指标" data-options="modal:true,closed:true"
     style="width:500px;height:450px;padding:10px;">
    <ul class="add-dangers-info">

        <li><span class="describe"><span class="must-write">*</span>指标名称:</span><input class="inp" required type="text" placeholder="指标名称"></li>
        <li><span class="describe"><span class="must-write">*</span>指标内容:</span><textarea name="" id="" ></textarea></li>
        <li><span class="describe"><span class="must-write">*</span>预警等级:</span><select name="" id="">
            <option value="橙色预警">橙色预警</option>
            <option value="黄色预警">黄色预警</option>
            <option value="红色预警">红色预警</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>风险发生地:</span><select name="" id="">
            <option value="苏州街">苏州街</option>
            <option value="长春桥">长春桥</option>
            <option value="西直门">西直门</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>点位数目:</span><input class="inp" required type="number"></li>
        <li><span class="describe"><span class="must-write">*</span>隐患描述:</span><textarea name="" id="" required></textarea></li>
        <li><span class="describe"><span class="must-write">*</span>整改前图片:</span><img src="${ctx }/static/page/dungou/common/img/avatar.jpg" alt="" class="pre"></li>
        <li><span class="describe"><span class="must-write">*</span> </span><input type="file" name="" id=""><img
                src="${ctx }/static/page/dungou/common/img/doc.png" alt="" class="file-img"></li>
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
<script src="${ctx}/static/page/dungou/riskWarningReport/js/riskWaringReport.js"></script>
</body>

</html>
