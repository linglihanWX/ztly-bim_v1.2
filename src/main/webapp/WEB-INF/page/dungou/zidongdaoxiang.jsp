<%--
  Created by IntelliJ IDEA.
  User: FREEDO
  Date: 2018/1/21
  Time: 15:10
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
    <title>自动导向系统</title>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/reset.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/common/css/header.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/common/css/nav.css">
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/zidongdaoxiang/css/zidongdaoxiang.css">
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
    <div class="page-info">
        <div class="page-nav">
            <ul>
                <li><a href="${ctx }/ProSystem/dungou/toDaopanjiance">刀盘检测</a></li>
                <li><a href="${ctx }/ProSystem/dungou/toZidongdaoxiang" class="active">自动导向系统</a></li>
                <li><a href="${ctx }/ProSystem/dungou/toDongtaifengxian">动态风险</a></li>
                <li><a href="#">泡沫系统</a></li>
                <li><a href="#">注浆系统</a></li>
                <li><a href="#">辅助系统</a></li>
                <li><a href="#">参数设置</a></li>
            </ul>
            <div class="btnChangePattern"></div>
        </div>
        <div class="content-box">
            <div class="page-info-top">
                <div class="top-one">
                    <div><p><span>环号</span> <span>506</span></p></div>
                    <div>
                        <ul>
                            <li>推进油缸行程A(mm): &nbsp;&nbsp;&nbsp;1111</li>
                            <li>推进油缸行程B(mm): &nbsp;&nbsp;&nbsp;1111</li>
                            <li>推进油缸行程C(mm): &nbsp;&nbsp;&nbsp;1111</li>
                            <li>推进油缸行程D(mm): &nbsp;&nbsp;&nbsp;1111</li>
                        </ul>
                    </div>

                </div>
                <div class="top-two">
                    <canvas id="cav"></canvas>
                </div>
                <div class="top-three">
                    <div><ul>
                        <li>转动角(deg): &nbsp;&nbsp;&nbsp;-0.001</li>
                        <li>俯仰角(deg): &nbsp;&nbsp;&nbsp;3.000</li>
                    </ul></div>
                    <div>
                        <ul>
                            <li>铰接位移上(mm): &nbsp;&nbsp;&nbsp;3</li>
                            <li>铰接位移右(mm): &nbsp;&nbsp;&nbsp;4</li>
                            <li>铰接位移下(mm): &nbsp;&nbsp;&nbsp;3</li>
                            <li>铰接位移左(mm): &nbsp;&nbsp;&nbsp;5</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="page-info-bottom">
                <div class="bottom-one">
                    <ul>
                        <li>转动角(deg): &nbsp;&nbsp;&nbsp;-0.001</li>
                        <li>俯仰角(deg): &nbsp;&nbsp;&nbsp;3.000</li>
                    </ul>
                </div>
                <div class="bottom-two">
                    <ul>
                        <li><span></span><span>盾尾(mm)</span><span>切口(mm)</span><span>趋向RP(mm/m)</span></li>
                        <li><span>平面</span><span>25.000</span><span>41.000</span><span>-10</span></li>
                        <li><span>垂直</span><span>29.000</span><span>41.000</span><span>2</span></li>

                    </ul>
                </div>
                <div class="bottom-three">
                    <ul>
                        <li>累计掘进(mm): &nbsp;&nbsp;&nbsp;0</li>
                        <li>待掘进(mm): &nbsp;&nbsp;&nbsp;2734</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</div>

<script src="${ctx}/static/page/common/js/jquery-3.2.1.min.js"></script>
<script src="${ctx}/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx}/static/page/common/js/nav.js"></script>
<script src="${ctx}/static/page/dungou/zidongdaoxiang/js/zidongdaoxiang.js"></script>
</body>
</html>

</body>
</html>
