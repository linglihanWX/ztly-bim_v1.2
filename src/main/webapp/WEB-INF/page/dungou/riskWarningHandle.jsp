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
    <title>预警事件上报</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/riskWarningHandle/css/riskWaringHandle.css">
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
        <div class="content-right">
            <div class="content-top">
                <p>预警事件处置</p><ul>
                <li><span>预警分类:&nbsp;</span><select name="" id="">
                    <option value="检测预警">检测预警</option>
                    <option value="巡视预警">巡视预警</option>
                    <option value="综合预警">综合预警</option>
                </select></li>
                <li><span>风险发生地:&nbsp;</span><select name="" id="">
                    <option value="">苏州街</option>
                    <option value="">长春桥</option>
                    <option value="">西直门</option>
                </select></li>
                <li><span>上报部门:&nbsp;</span><select name="" id="">
                    <option value="">安监室</option>
                    <option value="">监察部</option>
                    <option value="">巡逻部</option>
                </select></li>
                <li><span>上报时间:&nbsp;</span><input type="date"><span>&nbsp;至&nbsp;</span><input type="date" name=""
                                                                                                id=""></li>
                <li><span>预警等级:&nbsp;</span><select name="" id="">
                    <option value="橙色预警">橙色预警</option>
                    <option value="黄色预警">黄色预警</option>
                    <option value="红色预警">红色预警</option>
                </select></li>

                <li><span>治理状态:&nbsp;</span><select name="" id="">
                    <option value="未处理">未处理</option>
                    <option value="处理中">处理中</option>
                    <option value="已处理">已处理</option>
                </select></li>
                <li><input type="button" name="" id="search" class="btn-active" value="查询"><input type="button" name="" id="reset" value="重置"></li>
            </ul>
            </div>
            <div class="content-bottom">
                <p>
                    <span>预警事件处置列表</span>

                    <input type="button" name="" id="edit" value="编辑">
                    <input type="button" name="" id="detail" value="详情">
                </p>

                <div id="dataBox">
                    <table id="dataGrid"></table>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="detailBox" class="easyui-window" title="预警处置详情" data-options="modal:true,closed:true"
     style="width:550px;height:530px;padding:10px;">
    <ul class="add-dangers-info">
        <li><span class="describe">组织类型:</span><span>六院-土建</span></li>
        <li><span class="describe">所属部门:</span><span>某某公司</span></li>
        <li><span class="describe">上报人:</span><span>李国超</span></li>
        <li><span class="describe">上报时间:</span><span>2018-01-20</span></li>
        <li><span class="describe">预警分类:</span><span>监测预警</span></li>
        <li><span class="describe">预警等级:</span><span>橙色预警</span></li>
        <li><span class="describe">风险发生地:</span><span>标段01</span></li>
        <li><span class="describe">指标名称:</span><span>橙色监测预警</span></li>
        <li><span class="describe">指标内容:</span><span>橙色监测预警</span></li>
        <li><span class="describe">点位数目:</span><span>1</span></li>
        <li><span class="describe">处置状态:</span><span>已处置</span></li>
        <li><span class="describe">描述:</span><span>基坑东部监测点被地表土覆盖</span></li>
        <li><span class="describe">监测点信息:</span><table id="monitorInfo"></table></li>
        <li><span class="describe">处置前附件:</span><span>无附件</span></li>

        <li><input type="button" name="" class="save btn-active" value="保存"><input type="button" name=""
                                                                                   class="cancel" value="取消"></li>
    </ul>
</div>
<div id="editBox" class="easyui-window" title="风险常规问题编辑" data-options="modal:true,closed:true"
     style="width:450px;height:520px;padding:10px;">
    <ul class="add-dangers-info">
        <li><span class="describe"><span class="must-write">*</span>风险所属工程:</span><select name="" class="project">
            <option value="六院-土建-标段1">六院-土建-标段1</option>
            <option value="六院-土建-标段">六院-土建-标段</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>风险发生地:</span><select name="" class="place">
            <option value="标段01">标段01</option>
            <option value="标段02">标段02</option>
            <option value="标段03">标段03</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>预警类型:</span><select name="" class="waringClassify">
            <option value="检测预警">监测预警</option>
            <option value="巡视预警">巡视预警</option>
            <option value="综合预警">综合预警</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>预警等级:</span><select name="" class="waringLevel">
            <option value="橙色预警">橙色预警</option>
            <option value="黄色预警">黄色预警</option>
            <option value="红色预警">红色预警</option>
        </select></li>


        <li><span class="describe"><span class="must-write">*</span>预警描述:</span><textarea name="" class="waringDescription"></textarea></li>
        <li><span class="describe"><span class="must-write">*</span>点位数目:</span><input class="inp pointTotal" required type="number"></li>

        <li><span class="describe"><span class="must-write">*</span>测点编号:</span><input class="inp pointNumber" required type="text">
        </li>
        <li><span class="describe"><span class="must-write">*</span>上报人:</span><input class="inp reportMan" required type="text" >
        </li>
        <li><span class="describe"><span class="must-write">*</span>治理状态:</span><select name="" class="handleState">
            <option value="未处理">未处理</option>
            <option value="处理中">处理中</option>
            <option value="已处理">已处理</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>上报时间:</span><input class="inp reportTime" required type="date"></li>
        <li><span class="describe"><span class="must-write">*</span>流程状态:</span><select name="" class="flowState">
            <option value="未处理">未处理</option>
            <option value="处理中">处理中</option>
            <option value="已处理">已处理</option>
        </select></li>

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
<script src="${ctx}/static/page/dungou/riskWarningHandle/js/riskWaringHandle.js"></script>
</body>

</html>
