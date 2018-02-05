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
    <link rel="stylesheet" type="text/css" href="${ctx }/static/page/dungou/common/font/iconfont.css">
    <link rel="stylesheet" href="${ctx }/static/page/dungou/jiankong/css/jiankong.css">
    <script src="${ctx }/static/page/common/js/jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="${ctx }/static/page/common/css/easyui.css">
    <link href="http://res.gbim360.com/lib/freedo/rel/1.5.3.1/Freedo/Widgets/widgets.css" rel="stylesheet">
    <script src="http://res.gbim360.com/lib/freedo/rel/1.5.3.1/Freedo/Freedo.js"></script>
    <script src="http://res.gbim360.com/shared/1710_lodash/lodash.min.js"></script>
    <!-- 指北针 -->
    <link rel="stylesheet" href="${ctx }/static/webgl/compass/css/compass.css">
    <script src="${ctx }/static/webgl/compass/js/Compass.js"></script>
    <!-- 调整PMODEL模型 -->
    <script src="${ctx }/static/webgl/pModel/js/move.js"></script>

    <script src="${ctx }/static/page/common/js/FreedoApp.js"></script>
    <script src="${ctx }/static/page/common/js/FreeDoTool.js"></script>
    <script src="${ctx }/static/page/common/js/FreeDoUtil.js"></script>
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
        <div class="content-middle">
            <div id="earth" style="overflow:hidden">
                <p>
                    <span class="dghh">环号:506</span>
                    <span class="line">左线</span>当前环:<span class="line">110</span>状态停止
                    <span class="line">右线</span>当前环:<span class="line">110</span>状态停止
                    <span id = "dungoujishijiao" class="dghh">盾构机姿态</span>
                    <img id="resetview"src="${ctx }/static/page/dungou/jiankong/img/danger.png" alt="">
                </p>
                <div class="tree-box">
                    <p class="tree-box-title">构件树<i class="iconfont icon-hidden"></i></p>
                    <div id="tree">

                    </div>
                </div>
                <ul class="changeContent">
                    <li class="main-page"><i class="iconfont icon-main-page"></i>&nbsp;&nbsp;<span>主页面</span></li>
                    <li class="three-page"><i class="iconfont icon-swzs"></i>&nbsp;&nbsp;<span>三维页面</span></li>
                    <li class="two-page"><i class="iconfont icon-yemian"></i>&nbsp;&nbsp;<span>二维页面</span></li>
                </ul>
                                <div class="tipbox" id="tipbox1">
					<p>提示</p>
					<ul>
						<li>当前风险覆盖范围<span>60</span>m</li>
					</ul>
				</div>
				<div class="tipbox" id="tipbox2">
					<p>提示：即将下穿构建筑物</p>
					<ul>
						<li>1、注意控制注浆量</li>
						<li>2、加强构建筑物监测与巡查</li>
					</ul>
				</div>
				<div class="tipbox" id="tipbox3">
					<p>提示</p>
					<ul>
						<li>距风险范围<span>130</span>m</li>
					</ul>
				</div>
				<div class="tipbox" id="tipbox4">
					<p>当前位置</p>
					<ul>
						<li>北京十六号线</li>
						<li>第二期（第<span>1</span>区间）</li>
					</ul>
				</div>
				<div class="tipbox" id="tipbox5">
					
				</div>
				<div class="tipbox" id="tipbox6">
					
				</div>
            </div>
        </div>
        <div class="content-bottom">
            <div class="info-left">
                <p>刀盘监控 <i class="iconfont icon-out"></i></p>
                <canvas id="cvs" width="500" height="500"></canvas>
            </div>
            <div class="info-middle">

            </div>
            <div class="info-right">
                <p>盾构机偏移 <i class="iconfont icon-out"></i></p>
                <ul>
                    <li>刀盘偏移量(mm):&nbsp;X:10&nbsp;&nbsp;Y:10</li>
                </ul>
                <canvas id="circleCanvas"></canvas>
                <img src="${ctx }/static/page/dungou/jiankong/img/yaw.png" alt="" class="yaw">
            </div>
        </div>
    </div>
    <div class="page-info">
        <div class="page-info-top">
            <div class="top-one">
                <span>
                    <span>环&nbsp;&nbsp;号</span>
                    <span>502</span>
                    <button class="returnPage">返回</button>
                     <span class="state">状态:</span>
                </span>
                <ul>
                    <li class="li-state-active">准备中</li>
                    <li>拼装中</li>
                    <li>掘进中</li>
                </ul>
            </div>
            <div class="top-two">
                <p><span>行程:</span><span>实际行程</span><span class="number-info">428km</span><span>管理行程</span><span class="number-info">428km</span><span>行程差</span><span>428km</span></p>
                <p><span>里程:</span><span>切口里程</span><span class="number-info">M</span><span>目标行程</span><span class="number-info">M</span><span>剩余里程</span><span>M</span></p>
                <p><span>掘进:</span><span>开始时间</span><span class="number-info">20:21:12</span><span>结束时间</span><span class="number-info">23:45:56</span><span>总耗时</span><span>3h23min</span></p>
            </div>
            <div class="top-three">
                <input type="button" value="发生警报">
                <p><span>2017-11-22</span><span>13:21:56</span></p>
            </div>
        </div>
        <div class="page-info-bottom">
            <div class="page-info-bottom-left">
                <div class="left-page-one">
                    <p>土压舱</p>
                    <div>
                        <img src="${ctx }/static/page/dungou/jiankong/img/dgqt/tyc.png" alt="">
                        <p><span>1#土压</span><span>0.15mpa</span></p>
                        <p><span>2#土压</span><span>0.13mpa</span></p>
                        <p><span>3#土压</span><span>0.19mpa</span></p>
                        <p><span>4#土压</span><span>0.200mpa</span></p>
                        <p><span>3#加泥加水流量</span><span>0L/min</span></p>
                        <p><span>内圈温度</span><span>23°C</span></p>
                        <p><span>外圈温度</span><span>23°C</span></p>
                    </div>
                </div>
                <div class="left-page-two">
                    <p>泥土舱</p>
                    <div>
                        <img src="${ctx }/static/page/dungou/jiankong/img/dgqt/ntc.png" alt="">
                        <p><span>刀盘短距(KN.M)</span><span>0KN.M</span></p>
                        <p><span>刀盘转速</span><span>0.0r/Min</span></p>
                        <p><span>1#加泥加水流量</span><span>0L/min</span></p>
                        <p><span>2#加泥加水流量</span><span>0L/min</span></p>
                        <ul>
                            <li><span>加泥<br>加水</span><span>压力<br>Mpa</span><span>流量<br>L/min</span><span>注入<br>M³</span></li>
                            <li><span>1#</span><span>0.03</span><span>0</span><span>1</span></li>
                            <li><span>2#</span><span>0.01</span><span>1</span><span>0</span></li>
                            <li><span>3#</span><span>0</span><span>2</span><span>1</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="page-info-bottom-right">
                <div class="right-page-one">
                    <p>刀盘</p>
                    <div>
                        <img src="${ctx }/static/page/dungou/jiankong/img/dgqt/dp.png" alt="">
                        <div class="daopan-info">
                            <ul>
                                <li><span>转角:</span><span>-0.1deg</span></li>
                                <li><span>坡度:</span><span>0%/m</span></li>
                                <li><span>总推力:</span><span>0KN</span></li>
                                <li><span>油温:</span><span>35°</span></li>
                            </ul>
                            <p></p>
                            <ul>
                                <li><span>左右差:</span><span>35mm</span></li>
                                <li><span>上下差:</span><span>-35mm</span></li>
                            </ul>
                            <p></p>
                            <ul>
                                <li><span>&nbsp;<br>&nbsp;</span><span>行程<br>mm</span><span>速度<br>mm/Min</span><span>油压<br>Mpa</span></li>
                                <li><span>上部</span><span>410</span><span>0</span><span>1.00</span></li>
                                <li><span>右部</span><span>405</span><span>0</span><span>1.00</span></li>
                                <li><span>下部</span><span>404</span><span>0</span><span>1.00</span></li>
                                <li><span>左部</span><span>440</span><span>0</span><span>1.00</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="right-page-two">
                    <p>工作舱</p>
                    <div>
                        <img src="${ctx }/static/page/dungou/jiankong/img/dgqt/gzc.png" alt="">
                        <p><span>气压:</span><span>0.00Mpa</span></p>
                        <p><span>注入压:</span><span>0.00Mpa</span></p>
                    </div>
                </div>
                <div class="right-page-three">
                    <p>注浆管</p>
                    <div>
                        <img src="${ctx }/static/page/dungou/jiankong/img/dgqt/zjg.png" alt="">
                       <div>
                           <ul>
                               <li><span>注浆<br>&nbsp;</span><span>压力A<br>Mpa</span><span>压力B<br>Mpa</span><span>流量A<br>L/Min</span><span>流量B<br>L/Min</span></li>
                               <li><span>1#</span><span>0.51</span><span>0.00</span><span>0</span><span>0</span></li>
                               <li><span>2#</span><span>0.06</span><span>0.00</span><span>0</span><span>0</span></li>
                               <li><span>3#</span><span>0.06</span><span>0.00</span><span>0</span><span>0</span></li>
                               <li><span>4#</span><span>0.27</span><span>0.00</span><span>0</span><span>0</span></li>
                            </ul>
                       </div>
                    </div>
                </div>
                <div class="right-page-four">
                    <p>螺旋输送机</p>
                    <div>
                        <img src="${ctx }/static/page/dungou/jiankong/img/dgqt/lxssj.png" alt="">
                        <p><span>螺旋机短距:</span><span>1KN.M</span></p>
                        <p><span>闸门开度:</span><span>0.00m/s</span></p>
                        <p><span>螺旋机转速:</span><span>0r/Min</span></p>
                    </div>
                </div>
                <div class="right-page-five">
                    <p>皮带输送机</p>
                    <div>
                        <img src="${ctx }/static/page/dungou/jiankong/img/dgqt/pdcsj.png" alt="">
                        <ul>
                            <li><span>左上行程:</span><span>47mm</span><span>右上行程:</span><span>11mm</span></li>
                            <li><span>左下行程:</span><span>32mm</span><span>右下行程:</span><span>50mm</span></li>
                            <li><span>左右差:</span><span>28mm</span><span>上下差:</span><span>50mm</span></li>
                        </ul>
                    </div>
                </div>
                <div class="right-page-six">
                    <p>伪行刀长度</p>
                    <div>
                        <img src="${ctx }/static/page/dungou/jiankong/img/dgqt/wxdcd.png" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>



<div class="list-box" id="listBox">
    <span class="close">×</span>
    <ul class="list"></ul>
</div>
<div class="list-box" id="aaa">
       <ul class="list1">
           <li><input type="radio" name="1" id="" value="1">相机视角1</li>
           <li><input type="radio" name="1" id="" value="2">相机视角2</li>
           <li><input type="radio" name="1" id="" value="3">相机视角3</li>
           <li><input type="radio" name="1" id="" value="4">相机视角4</li>
           <li><input type="radio" name="1" id="" value="5">相机视角5</li>
           <li><input type="radio" name="1" id="" value="6">相机视角6</li>
    <!--        <li><input type="radio" name="1" id="" value="7">相机视角7</li>
           <li><input type="radio" name="1" id="" value="8">相机视角8</li>
           <li><input type="radio" name="1" id="" value="9">相机视角9</li> -->
       </ul>
   </div>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/jquery.easyui.min.js"></script>
<script src="${ctx}/static/page/common/js/jquery-easyui-1.4.5/locale/easyui-lang-zh_CN.js"></script>
<script src="${ctx }/static/page/dungou/common/js/appendHeader.js"></script>
<script src="${ctx }/static/page/dungou/common/js/danpanHeader.js"></script>
<script src="${ctx }/static/page/common/js/nav.js"></script>
<script src="${ctx }/static/page/common/js/drag.js"></script>
<script src="${ctx }/static/page/dungou/jiankong/js/base-canvas.js"></script>
<script src="${ctx }/static/page/dungou/jiankong/js/canvasCircle.js"></script>
<script src="${ctx }/static/page/dungou/jiankong/js/jiankong.js"></script>
<script src="${ctx }/static/webgl/caozuoqi/cameraControlRightAdjust.js"></script>
<script src="${ctx }/static/page/dungou/jiankong/js/dungou_viewer.js"></script>
<script src="${ctx }/static/page/dungou/jiankong/js/dungou.js"></script>
</body>
</html>