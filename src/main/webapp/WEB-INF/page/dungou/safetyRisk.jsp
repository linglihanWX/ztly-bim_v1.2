<%--
  Created by IntelliJ IDEA.
  User: FREEDO
  Date: 2018/1/26
  Time: 12:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html;charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<c:set var="ctx" value="<%=request.getContextPath()%>"></c:set>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>安全风险</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/safetyRisk/css/safetyRisk.css">
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
            <p>隐患分类</p>
            <div id="detailed">
                <div id="dataOne" style="width: 100%;height: 100%;"></div>
            </div>
        </div>
        <div class="content-right">
            <div class="content-top">
                <p>指标查询</p>
                <ul>
                    <li>
                        <span>隐患级别:&nbsp;</span>
                        <select>
                            <option value="">一级</option>
                            <option value="">二级</option>
                            <option value="">三级</option>
                        </select>
                    </li>
                    <li>
                        <span>排查项目:&nbsp;</span>
                        <select>
                            <option value="">六院-土建</option>
                        </select>
                    </li>
                    <li>
                        <span>排查内容:&nbsp;</span>
                        <select>
                            <option value="">管片破损</option>
                        </select>
                    </li>
                </ul>
                <ul>
                    <li><span>整改时间:&nbsp;</span><input type="date"><span>&nbsp;至&nbsp;</span><input type="date"></li>
                    <li><span>扣分:&nbsp;</span><input type="number"><span>&nbsp;至&nbsp;</span><input type="number"></li>
                </ul>
                <ul>
                    <li><input type="button" name="" id="search" class="btn-active" value="查询"><input type="button"
                                                                                                      name="" id="reset"
                                                                                                      value="重置"></li>
                </ul>
            </div>
            <div class="content-bottom">
                <p>指标列表<input type="button" name="" id="report" value="上报"></p>

                <div id="dataBox">
                    <table id="dataGrid"></table>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="reportInfo" class="easyui-window" title="隐患上报" data-options="modal:true,closed:true"
     style="width:550px;height:610px;padding:10px;">
    <ul class="add-dangers-info">
        <li><span class="describe"><span class="must-write">*</span>隐患级别:</span><select name="" id="">
            <option value="">一级隐患</option>
            <option value="">二级隐患</option>
            <option value="">三级隐患</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>排查项目:</span><textarea name="" id=""></textarea>
        </li>
        <li><span class="describe"><span class="must-write">*</span>排查内容:</span><textarea name="" id=""></textarea>
            </select></li>

        <li><span class="describe"><span class="must-write">*</span>排查时间:</span><input class="inp" required type="date">
        </li>
        <li><span class="describe"><span class="must-write">*</span>整改时间:</span><input class="inp" required type="date">&nbsp;至&nbsp;<input
                class="inp" required type="date">&nbsp;共&nbsp;<span class="total-days"></span>&nbsp;天
        </li>
        <li><span class="describe"><span class="must-write">*</span>隐患地点:</span><input class="inp" type="text"></li>
        <li><span class="describe"><span class="must-write">*</span>隐患类型:</span><input type="checkbox">质量隐患<input
                type="checkbox">安全隐患
        </li>
        <li>
            <span class="describe"><span class="must-write">*</span>隐患统计类型:</span><input type="checkbox">施工材料<input type="checkbox">安全管理<input
                type="checkbox">质量管理<input type="checkbox">安全防护
        </li>
        <li>
            <span class="describe"></span><input type="checkbox">消防安全<input type="checkbox">绿色施工<input type="checkbox">临时用电<input type="checkbox">施工机械
        </li>

        <li><span class="describe"><span class="must-write">*</span>隐患描述:</span><textarea name="" id=""></textarea>
            </select></li>
        <li><span class="describe"><span class="must-write">*</span>隐患场景:</span><input type="file" name="" id=""><img
                src="../../static/page/dungou/common/img/doc.png" alt="" class="file-img"></li>

        <li><input type="button" name="" id="save" class="btn-active" value="保存"><input type="button" name=""
                                                                                        id="cancel" value="取消"></li>
    </ul>
</div>
<script src="${ctx}/static/page/common/js/jquery-3.2.1.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/jquery.easyui.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/locale/easyui-lang-zh_CN.js"></script>
<script src="${ctx}/static/page/dungou/common/js/fengxianHeader.js"></script>
<script src="${ctx}/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx}/static/page/common/js/nav.js"></script>
<script src="${ctx}/static/page/dungou/safetyRisk/js/safetyRisk.js"></script>
</body>

</html>