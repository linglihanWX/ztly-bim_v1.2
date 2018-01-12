<%@ page language="java" contentType="text/html;charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	    <%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<c:set var="ctx" value="<%=request.getContextPath()%>"></c:set>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>盾构实时监控</title>
       <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/jiankong/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/gaikuang/css/gaikuang.css">
    <script src="${ctx }/static/page/common/js/jquery-3.2.1.min.js"></script>
        <%@ include file="/WEB-INF/page/common/common_FD.jsp"%>
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
        <div class="content-middle">
            <div id="earth" class="full-screen">
                <p>剖面视图
                    <i class="iconfont icon-bqp size"></i><i class="iconfont icon-zxh"></i>
                </p>
            </div>
            <div id="earth1" class="not-full-screen">
                <p><span>俯视视图</span><span></span><span>按时掘进</span><span></span><span>掘进延时</span> <i class="iconfont icon-qp size"></i><i class="iconfont icon-zxh"></i></p>
                <img alt="" src="${ctx }/static/page/dungou/gaikuang/img/poumian.png" style="width:100%;height:100%">
            </div>
            <ul class="changeContent">
                <li class="main-page"><i class="iconfont icon-main-page"></i>&nbsp;&nbsp;&nbsp;主页面</li>
                <li class="three-page"><i class="iconfont icon-swzs"></i>&nbsp;&nbsp;&nbsp;三维页面</li>
            </ul>
        </div>
        <div class="content-bottom">
            <div class="info-left">
                <div>
                    <p>工程概况</p>
                    <div>区间盾构线路出梭鱼湾南站后，受军港码头及香炉礁航道远期疏浚线影响，分别采用26、8、-15、-28的纵坡接入火车站，隧道最小埋深12.2M，距远期疏浚线最小距离17.4M，距离军港码头箱型基础地面最小距离10.5M</div>
                </div>
                <div>
                    <p>项目公告</p>
                    <ul>
                        <li><span>江苏省常州市市委书记今日视察标准厂房的建设情况以及慰问参与项目的工作人员</span><span>2017-12-31</span></li>
                        <li><span>北京铁建公司专家及专家后备公示</span><span>2017-12-28</span></li>
                        <li><span>专业消防安全知识讲座走进企业</span><span>2017-12-25</span></li>
                        <li><span>唐车试验线工程项目部制梁场圆满完成制梁任务</span><span>2017-12-19</span></li>
                        <li><span>将高难度桥体预制变为工程创新亮点</span><span>2017-12-11</span></li>
                        <li><span>做到四个到位 确保施工安全</span><span>2017-12-08</span></li>
                        <li><span>立即行动 排查隐患 确保施工生产安全有序</span><span>2017-12-06</span></li>
                        <li><span>高度重视 迅速传达 全面部署 规范执行 公司召开紧急会议 贯彻落实《铁路建设项目现场安全文明标志》</span><span>2017-12-05</span></li>


                    </ul>
                </div>

            </div>
            <div class="info-middle">
                <div id="chartOne"></div>
                <div id="chartTwo"></div>
                <div id="chartThree"></div>

            </div>
            <div class="info-right">
                <div id="chartFour"></div>
            </div>
        </div>
    </div>
</div>
<div class="list-box" id="listBox">
    <span class="close">×</span>
    <ul class="list"></ul>
</div>
<script src="${ctx }/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx }/static/page/common/js/echarts.min.js"></script>
<script src="${ctx }/static/page/common/js/nav.js"></script>
<script src="${ctx }/static/page/dungou/gaikuang/js/gaikuang.js"></script>
</body>
</html>