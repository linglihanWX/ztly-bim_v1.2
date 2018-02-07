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
    <title>基础信息</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/baseInformation/css/baseInformation.css">
        <script src="http://res.gbim360.com/lib/freedo/rel/1.5.3.1/Freedo/Freedo.js"></script>
    <script src="http://res.gbim360.com/shared/1710_lodash/lodash.min.js"></script>
       <script src="${ctx }/static/page/common/js/jquery-3.2.1.min.js"></script>
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
            <p>工程信息</p>
            <div id="detailed">
                <div id="dataOne" style="width: 100%;height: 100%;"></div>
            </div>
        </div>
        <div class="content-right">
        <div id="earth"></div>
            <div class="content-top">
                <p>风险监测查询</p>

                <ul>
                    <li><span>编号查询:&nbsp;</span><input type="number"></li>
                    <li><input type="button" name="" id="search" class="btn-active" value="查询"><input type="button" name="" id="reset" value="重置"></li>
                </ul>
            </div>
            <div class="content-bottom">
                <p>
                    <span>风险监测指标列表</span>
                    <input type="button" name="" id="report" value="测点控制指示添加">
                    <input type="button" name="" id="firstVal" value="初始值维护">
                    <input type="button" name="" id="add" value="新增指标">
                    <input type="button" name="" id="edit" value="编辑">
                    <input type="button" name="" id="up" value="上移">
                    <input type="button" name="" id="down" value="下移">
                </p>

                <div id="dataBox">
                    <table id="dataGrid"></table>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="reportBox" class="easyui-window" title="监测点控制指标添加" data-options="modal:true,closed:true"
     style="width:650px;height:420px;padding:10px;">
    <ul class="add-dangers-info">
        <li><span class="describe"><span class="must-write">*</span>失效开始时间:</span><input class="inp" required type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>生效结束时间:</span><input class="inp" required type="text"></li>
        <li><span class="describe">黄色指标:</span><input class="inp"  type="text"></li>
        <li><span class="describe">黄色指标(负):</span><input class="inp"  type="text"></li>
        <li><span class="describe">橙色指标:</span><input class="inp"  type="text"></li>
        <li><span class="describe">橙色指标(负):</span><input class="inp"  type="text"></li>
        <li><span class="describe">红色指标:</span><input class="inp"  type="text"></li>
        <li><span class="describe">红色指标(负):</span><input class="inp"  type="text"></li>
        <li><span class="describe">变化速率黄色指标:</span><input class="inp"  type="text"></li>
        <li><span class="describe">变化速率黄色指标(负):</span><input class="inp"  type="text"></li>
        <li><span class="describe">变化速率橙色指标:</span><input class="inp"  type="text"></li>
        <li><span class="describe">变化速率橙色指标(负):</span><input class="inp"  type="text"></li>
        <li><span class="describe">变化速率红色指标:</span><input class="inp"  type="text"></li>
        <li><span class="describe">变化速率红色指标(负):</span><input class="inp"  type="text"></li>
        <li><span class="describe">描述:</span><textarea name="" id="" ></textarea></li>
        <li><input type="button" name="" class="save btn-active" value="保存"><input type="button" name=""
                                                                                   class="cancel" value="取消"></li>
    </ul>
</div>
<div id="firstValBox" class="easyui-window" title="初始值维护" data-options="modal:true,closed:true"
     style="width:550px;height:250px;padding:10px;">
    <ul class="add-dangers-info">
        <li><span class="describe"><span class="must-write">*</span>检测时间:</span><input class="inp" required type="date">
        </li>
        <li><span class="describe"><span class="must-write">*</span>初始值(cm):</span><select name="" id="">
            <option value="">10</option>
            <option value="">20</option>
            <option value="">30</option>
        </select></li>

        <li><span class="describe"><span class="must-write">*</span>排查项目:</span><textarea name="" id=""></textarea>
        </li>
        <li><input type="button" name="" class="save btn-active" value="确定"><input type="button" name=""
                                                                                   class="cancel" value="取消"></li>
    </ul>
</div>
<div id="addBox" class="easyui-window" title="新增风险检测指标" data-options="modal:true,closed:true"
     style="width:450px;height:450px;padding:10px;">
    <ul class="add-dangers-info">

        <li><span class="describe"><span class="must-write">*</span>编号:</span><input class="inp" required type="text"></li>

        <li><span class="describe"><span class="must-write">*</span>检测类型:</span><select name="" id="">
            <option value="">沉降</option>
        </select></li>

        <li><span class="describe"><span class="must-write">*</span>第三方检测:</span><input class="inp" required type="text">
        </li>
        <li><span class="describe"><span class="must-write">*</span>X:</span><input class="inp" required type="date">
        </li>
        <li><span class="describe"><span class="must-write">*</span>Y:</span><input class="inp" required type="date"></li>
        <li><span class="describe"><span class="must-write">*</span>深度:</span><input class="inp" required type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>设备编号:</span><input class="inp" required type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>描述:</span><textarea name="" id="" ></textarea></li>

        <li><input type="button" name="" class="save btn-active" value="保存"><input type="button" name=""
                                                                                   class="cancel" value="取消"></li>
</div>
<div id="editBox" class="easyui-window" title="风险监测指标编辑" data-options="modal:true,closed:true"
     style="width:450px;height:410px;padding:10px;">
    <ul class="add-dangers-info">

        <li><span class="describe"><span class="must-write">*</span>编号:</span><input class="inp" required type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>所属工程:</span><select name="" id="">
            <option value="">六院-土建</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>检测类型:</span><select name="" id="">
            <option value="">沉降</option>
        </select></li>

        <li><span class="describe"><span class="must-write">*</span>第三方检测:</span><input class="inp" required type="text">
        </li>
        <li><span class="describe"><span class="must-write">*</span>检测时间:</span><input class="inp" required type="date">
        </li>
        <li><span class="describe"><span class="must-write">*</span>创建时间:</span><input class="inp" required type="date"></li>
        <li><span class="describe"><span class="must-write">*</span>初始值:</span><input class="inp" required type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>描述:</span><textarea name="" id="" ></textarea></li>

        <li><input type="button" name="" class="save btn-active" value="保存"><input type="button" name=""
                                                                                   class="cancel" value="取消"></li>
    </ul>
</div>

<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/jquery.easyui.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/locale/easyui-lang-zh_CN.js"></script>
<script src="${ctx}/static/page/dungou/common/js/jiankongceliangHeader.js"></script>
<script src="${ctx}/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx}/static/page/common/js/nav.js"></script>
<script src="${ctx }/static/webgl/caozuoqi/cameraControlRightAdjust.js"></script>
<script src="${ctx}/static/page/dungou/baseInformation/js/baseInformation.js"></script>
<script src="${ctx}/static/page/dungou/baseInformation/js/baseInfomation_viewer.js"></script>
<script src="${ctx}/static/page/dungou/baseInformation/js/baseInformationinit.js"></script>

</body>

</html>