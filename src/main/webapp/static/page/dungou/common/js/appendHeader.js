$(function () {
    let str = '<ul><li class="nav-item"><a href="javascript:;"><span>全生命周期</span><i class="iconfont icon-down-arrow "></i></a><ul' +
        ' class="second-menu"><li> <a href="../../keyan/toGaikuang"><i class="iconfont icon-kcmanager"></i><span>勘测可研</span><i class="iconfont' +
        ' icon-arrow-down second-arrow"></i></a></li><li> <a href="../../sheji/toGaikuang"><i class="iconfont icon-sheji"></i><span>设计协同</span><i' +
        ' class="iconfont icon-arrow-down second-arrow"></i></a></li><li> <a href="javascript:;"><i class="iconfont' +
        ' icon-yh"></i><span>隐患管理</span><i class="iconfont icon-arrow-down second-arrow"></i></a></li><li> <a href="../../yunwei/toGaikuang"><i' +
        ' class="iconfont icon-yunwei"></i><span>运维管理</span><i class="iconfont icon-arrow-down second-arrow"></i></a></li></ul></li><li' +
        ' class="nav-item"><a href="javascript:;"><span>专业系统</span><i class="iconfont  icon-down-arrow"></i></a><ul class="second-menu"><li><a' +
        ' href="javascript:;" class="nav-item-active"><i class="iconfont icon-dgj"></i><span>盾构管理</span><i class="iconfont icon-arrow-down' +
        '  second-arrow"></i></a><ul class="three-menu"><li><a href="../../ProSystem/dungou/toGaikuang"' +
        ' class="second-active"><span>项目概况</span></a></li><li> <a href="../../ProSystem/dungou/toJiankong" ><span>盾构监控</span></a></li><li> <a' +
        ' href="../../ProSystem/dungou/toFengxian"><span>安全风险</span></a></li><li> <a href="../../ProSystem/dungou/toBaseInformation"><span>监控量测</span></a></li><li> <a href="../../ProSystem/dungou/toGraphicProgress"><span>形象进度</span></a></li><li> <a' +
        ' href="../../ProSystem/dungou/toZiliao"><span>资料管理</span></a></li><li> <a' +
        ' href="../../ProSystem/dungou/toBaobiao"><span>报表管理</span></a></li></ul></li></ul></li></ul ><span class="showCheckList"></span>';
    $(".nav").append(str);
});