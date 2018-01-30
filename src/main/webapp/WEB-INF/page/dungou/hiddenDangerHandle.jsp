<%--
  Created by IntelliJ IDEA.
  User: FREEDO
  Date: 2018/1/30
  Time: 15:51
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
    <title>隐患处置</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/hiddenDangerHandle/css/hiddenDangerHandle.css">
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
                <p>处置查询</p><ul>
                <li>
                    <span>上报部门:&nbsp;</span>
                    <select name="" id="">
                        <option value="">A</option>
                        <option value="">B</option>
                        <option value="">C</option>
                    </select>
                </li>
                <li>
                    <span>隐患发生地:&nbsp;</span>
                    <select name="" id="">
                        <option value="苏州街">苏州街</option>
                        <option value="长春桥">长春桥</option>
                        <option value="五道口">五道口</option>
                    </select>
                </li>
                <li>
                    <span>隐患级别:&nbsp;</span>
                    <select name="" id="">
                        <option value="一级">一级</option>
                        <option value="二级">二级</option>
                        <option value="三级">三级</option>
                    </select>
                </li>
                <li><span>整改时间:&nbsp;</span><input type="date"><span>&nbsp;至&nbsp;</span><input type="date" name="" id=""></li>
                <li><span>排查项目:&nbsp;</span><input type="text"></li>
                <li><span>排查内容:&nbsp;</span><input type="text"></li>
                <li>
                    <span>治理状态:&nbsp;</span>
                    <select name="" id="">
                        <option value="未处理">未处理</option>
                        <option value="整改中">整改中</option>
                        <option value="已整改">已整改</option>
                    </select>
                </li>
                <li>
                    <span>整改状态:&nbsp;</span>
                    <select name="" id="">
                        <option value="">正常</option>
                        <option value="">超期</option>
                    </select>
                </li>
                <li>
                    <span>批示状态:&nbsp;</span>
                    <select name="" id="">
                        <option value="">正常</option>
                        <option value="">超期</option>
                    </select>
                </li>
                <li>
                    <span>流程状态:&nbsp;</span>
                    <select name="" id="">
                        <option value="未处理">未处理</option>
                        <option value="处理中">处理中</option>
                        <option value="已处理">已处理</option>
                    </select>
                </li>
                <li>
                    <input type="button" name="" id="search" class="btn-active" value="查询">
                    <input type="button" name="" id="report"  value="导出">
                    <input type="button" name="" id="reset" value="重置">
                </li>
            </ul>
            </div>
            <div class="content-bottom">
                <p>
                    <span>风险监测指标列表</span>
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

<div id="editBox" class="easyui-window" title="隐患处置编辑" data-options="modal:true,closed:true"
     style="width:500px;height:520px;padding:10px;">
    <ul class="add-dangers-info">
        <li><span class="describe"><span class="must-write">*</span>隐患所属工程:</span><select name="" class="project">
            <option value="六院-土建1">六院-土建1</option>
            <option value="六院-土建">六院-土建</option>
            <option value="六院-土建2">六院-土建2</option>
        </select></li>
        <li><span class="describe"><span class="must-write">*</span>隐患地点:</span><select name="" class="place">
            <option value="苏州街">苏州街</option>
            <option value="长春桥">长春桥</option>
            <option value="五道口">五道口</option>
        </select>
        </li>
        <li><span class="describe"><span class="must-write">*</span>隐患描述:</span><textarea name="" class="issue"></textarea></li>
        <li><span class="describe"><span class="must-write">*</span>隐患级别:</span><select name="" class="level">
            <option value="一级">一级</option>
            <option value="二级">二级</option>
            <option value="三级">三级</option>
        </select>
        </li>
        <li><span class="describe"><span class="must-write">*</span>上报人:</span><input class="inp reportMan" required type="text" ></li>
        <li><span class="describe"><span class="must-write">*</span>整改时限(天):</span><input class="inp allTime" required type="number">
        <li><span class="describe"><span class="must-write">*</span>治理状态:</span><select name="" class="governState">
            <option value="未处理">未处理</option>
            <option value="整改中">整改中</option>
            <option value="已整改">已整改</option>
        </select>
        </li>
        <li><span class="describe"><span class="must-write">*</span>排查时间:</span><input class="inp foundTime" required type="date"></li>
        <li><span class="describe"><span class="must-write">*</span>流程状态:</span><select name="" class="flowState">
            <option value="未处理">未处理</option>
            <option value="处理中">处理中</option>
            <option value="已处理">已处理</option>
        </select>
        </li>
        <li><span class="describe"><span class="must-write">*</span>批示:</span><select name="" class="suggest">
            <option value="正常">正常</option>
            <option value="超期">超期</option>
        </select>
        </li>
        <li><span class="describe"><span class="must-write">*</span>整改:</span><select name="" class="handler">
            <option value="正常">正常</option>
            <option value="超期">超期</option>
        </select>
        </li>
        <li><input type="button" name="" class="save btn-active" value="保存"><input type="button" name="" class="cancel" value="取消"></li>
    </ul>
</div>
<div id="detailBox" class="easyui-window" title="隐患详情" data-options="modal:true,closed:true"
     style="width:600px;height:550px;padding:10px;">
    <ul class="add-dangers-info">
        <li><span class="describe">组织类型:</span><span>职能型</span></li>
        <li><span class="describe">所属部门:</span><span>安检室</span></li>
        <li><span class="describe">上报人:</span><span>安检室02-检查组</span></li>
        <li><span class="describe">排查时间:</span><span>2018-01-15</span></li>
        <li><span class="describe">所属工程:</span><span>16号线-土建-标段13</span></li>
        <li><span class="describe">发生地点:</span><span>站点01</span></li>
        <li><span class="describe">隐患类型:</span><span>通用安全-临时用电</span></li>
        <li><span class="describe">隐患级别:</span><span>三级</span></li>
        <li><span class="describe">隐患描述:</span><span>车站负一层钢筋加工区域开关箱至用电设备距离大于1米</span></li>
        <li><span class="describe">排查项目:</span><span>电缆铺设</span></li>
        <li><span class="describe">排查内容:</span><span>电缆、电线铺设是否符合要求</span></li>
        <li><span class="describe">排查状态:</span><span>正常</span></li>
        <li><span class="describe">治理状态:</span><span>整改中</span></li>
        <li><span class="describe">整改前图片:</span><img src="${ctx }/static/page/dungou/common/img/avatar.jpg" alt=""></li>
        <li><span class="describe">整改后图片:</span><img src="${ctx }/static/page/dungou/common/img/avatar.jpg" alt=""></li>
        <li><span class="describe">整改描述:</span><span>整改已完成。</span></li>
        <li><span class="describe">审批历史:</span><table id="history"></table></li>

    </ul>
</div>


<script src="${ctx}/static/page/common/js/jquery-3.2.1.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/jquery.easyui.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/locale/easyui-lang-zh_CN.js"></script>
<script src="${ctx}/static/page/dungou/common/js/fengxianHeader.js"></script>
<script src="${ctx}/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx}/static/page/common/js/nav.js"></script>
<script src="${ctx}/static/page/dungou/hiddenDangerHandle/js/hiddenDangerHandle.js"></script>
</body>

</html>
