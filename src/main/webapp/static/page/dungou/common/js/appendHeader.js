$(function () {
    $(".nav").append(` <ul>
            <li class="nav-item">
                <a href="javascript:;"><span>全生命周期</span><i class="iconfont icon-down-arrow "></i></a>
                <ul class="second-menu">
                    <li> <a href="javascript:;"><i class="iconfont icon-kcmanager"></i><span>勘测可研</span><i class="iconfont icon-arrow-down second-arrow"></i></a></li>
                    <li> <a href="javascript:;"><i class="iconfont icon-sheji"></i><span>设计协同</span><i class="iconfont icon-arrow-down second-arrow"></i></a></li>
                    <li> <a href="javascript:;"><i class="iconfont icon-yh"></i><span>隐患管理</span><i class="iconfont icon-arrow-down second-arrow"></i></a></li>
                    <li> <a href="javascript:;"><i class="iconfont icon-yunwei"></i><span>运维管理</span><i class="iconfont icon-arrow-down second-arrow"></i></a></li>
                </ul>
            </li>

            <li class="nav-item">
                <a href="javascript:;"><span>专业系统</span><i class="iconfont  icon-down-arrow"></i></a>
                <ul class="second-menu">
                    <li>
                        <a href="javascript:;" class="nav-item-active"><i class="iconfont icon-dgj"></i><span>盾构管理</span><i class="iconfont icon-arrow-down  second-arrow"></i></a>
                        <ul class="three-menu">
                            <li> <a href="../../ProSystem/dungou/toGaikuang" class="second-active"><span>项目概况</span></a></li>
                            <li> <a href="../../ProSystem/dungou/toJiankong" ><span>盾构监控</span></a></li>
                            <li> <a href="javascript:;"><span>安全风险</span></a></li>
                            <li> <a href="javascript:;"><span>预警处理</span></a></li>
                            <li> <a href="javascript:;"><span>进度管理</span></a></li>
                            <li> <a href="javascript:;"><span>文档管理</span></a></li>
                            <li> <a href="javascript:;"><span>报表管理</span></a></li>
                        </ul>
                    </li>
                </ul>
            </li>

        </ul>
        <span class="showCheckList"></span>`)
        
     
});