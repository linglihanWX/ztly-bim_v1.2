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
    <div class="nav"></div>
    <div class="content">
        <div class="page-nav">

        </div>
        <div id="info">
            <div class="three-box">
                <p>三维模型</p>
                <div id="earth" >
                    <p><span></span><span>一级破损</span><span></span><span>二级破损</span><span></span><span>三级破损</span></p>
                    <div class="tree-box">
                        <p class="tree-box-title">构件树<i class="iconfont icon-hidden"></i></p>
                        <div id="tree">

                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="content-top">
                 &lt;!&ndash;<p>筛选条件</p>&ndash;&gt;

             </div>-->
            <div class="content-bottom">
                <!--<p>破损管片列表</p>-->
                <ul><li>破损管片列表</li>
                    <li><span>破损环数:&nbsp;</span><select>
                        <option value="">504</option>
                        <option value="">404</option>
                        <option value="">643</option>
                    </select></li>
                    <li><span>破损数量:&nbsp;</span><input type="text" value="10"></li>
                    <li><span>责任人:&nbsp;</span><input type="text" ></li>
                    <li><input type="button" name="" id="search" class="btn-active" value="查询"><input type="button" name="" id="reset" value="重置"><input type="button" name="" id="handle" value="处置"></li>
                </ul>
                <div id="dataBox">
                    <table id="dataGrid" style="width:100%;height:100%"></table>
                </div>
            </div>
        </div>


    </div>
</div>

<div id="infoShow" class="easyui-window" title="预警详情" data-options="modal:true,closed:true" style="width:550px;height:530px;padding:10px;">
    <ul class="show-dangers-info">
        <li><span class="describe1">1点方向:</span></li>
        <li><span class="describe1">破损照片:</span><img src="${ctx }/static/page/dungou/guanpianposui/img/posun1.png" alt=""></li>
        <li><span class="describe1">破损原因:</span><span>拼装质量不好造成管片错台，</span></li>
        <li><span class="describe1">处理及防范措施:</span><span>管片拼装应先上后下，左右交叉，最后封顶块的安装原则。发现问题及时对破损处打磨修补。</span></li>
    </ul>

    <ul class="show-dangers-info">
        <li><span class="describe1">2点方向:</span></li>
        <li><span class="describe1">破损照片:</span><img src="${ctx }/static/page/dungou/guanpianposui/img/posun2.png" alt=""></li>
        <li><span class="describe1">破损原因:</span><span>拼装质量不好造成管片错台，</span></li>
        <li><span class="describe1">处理及防范措施:</span><span>管片拼装应先上后下，左右交叉，最后封顶块的安装原则。发现问题及时对破损处打磨修补。</span></li>
    </ul>
</div>
<div id="handleBox" class="easyui-window" title="破损管片处置" data-options="modal:true,closed:true"
     style="width:450px;height:410px;padding:10px;">
    <ul class="add-dangers-info">

        <li><span class="describe"><span class="must-write">*</span>编号:</span><input class="inp" required type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>所属工程:</span><select name="" id="">
            <option value="">六院-土建</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>管片ID:</span><select name="" id="">
            <option value="">第0001环</option>
            <option value="">第0002环</option>
            <option value="">第0003环</option>
            <option value="">第0004环</option>
            <option value="">第0005环</option>
            <option value="">第0006环</option>
        </select></li>

        <li><span class="describe"><span class="must-write">*</span>第三方检测:</span><input class="inp" required type="text">
        </li>
        <li><span class="describe"><span class="must-write">*</span>处置时间:</span><input class="inp" required type="date">
        </li>
        <li><span class="describe"><span class="must-write">*</span>创建时间:</span><input class="inp" required type="date"></li>
        <li><span class="describe"><span class="must-write">*</span>初始值:</span><input class="inp" required type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>描述:</span><textarea name="" id="" ></textarea></li>

        <li><input type="button" name="" class="save btn-active" value="保存"><input type="button" name=""
                                                                                   class="cancel" value="取消"></li>
    </ul>
</div>

<script src="${ctx}/static/page/common/js/jquery-3.2.1.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/jquery.easyui.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/locale/easyui-lang-zh_CN.js"></script>
<script src="${ctx}/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx }/static/page/dungou/common/js/danpanHeader.js"></script>
<script src="${ctx}/static/page/common/js/nav.js"></script>
<script src="${ctx }/static/page/dungou/guanpianposui/js/guanpianposui.js"></script>
<script src="${ctx }/static/page/dungou/guanpianposui/js/guanpianposui3D.js"></script>
<script src="${ctx }/static/page/dungou/guanpianposui/js/guanpianposui_viewer.js"></script>
<script src="${ctx }/static/webgl/caozuoqi/cameraControlRightAdjust.js"></script>
</body>

</html>