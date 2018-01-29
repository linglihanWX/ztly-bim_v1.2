$(function () {
    let str = ' <ul>\n' +
        '                <li><a href="javascript:;">风险概览</a></li>\n' +
        '                <li><a href="javascript:;">隐患管理</a>\n' +
        '                    <ul  class="pull-down">\n' +
        '                        <li><a href="../../ProSystem/dungou/toSafetyRisk">隐患上报</a></li>\n' +
        '                        <li><a href="javascript:;">隐患处理</a></li>\n' +
        '                        <li><a href="javascript:;">施工单位月报</a></li>\n' +
        '                    </ul>\n' +
        '                </li>\n' +
        '                <li><a href="javascript:;">风险预警</a>\n' +
        '                    <ul class="pull-down">\n' +
        '                        <li><a href="../../ProSystem/dungou/toRiskRoutineIssue">风险常规问题</a></li>\n' +
        '                        <li><a href="javascript:;">工作联系单</a></li>\n' +
        '                        <li><a href="javascript:;">预警事件上报</a></li>\n' +
        '                        <li><a href="javascript:;">预警事件处理</a></li>\n' +
        '                    </ul></li>\n' +
        '                <li><a href="javascript:;">监控测量</a>\n' +
        '                    <ul class="pull-down">\n' +
        '                        <li><a href="../../ProSystem/dungou/toBaseInformation">基础信息</a></li>\n' +
        '                        <li><a href="javascript:;">第三方数据上报</a></li>\n' +
        '                        <li><a href="javascript:;">施工方数据上报</a></li>\n' +
        '                        <li><a href="javascript:;">数据查看</a></li>\n' +
        '                        <li><a href="javascript:;">数据对比</a></li>\n' +
        '                    </ul></li>\n' +
        '                <li><a href="javascript:;">综合统计</a>' +
        '                   <ul class="pull-down">\n' +
        '                            <li><a href="../../ProSystem/dungou/toRiskWarningStatistics">风险预警统计</a></li>\n' +
        '                            <li><a href="javascript:;">监理单位风险预警统计</a></li>\n' +
        '                            <li><a href="javascript:;">施工单位风险预警统计</a></li>\n' +
        '                            <li><a href="javascript:;">第三方风险预警统计</a></li>\n' +
        '                            <li><a href="javascript:;">隐患分类统计</a></li>\n' +
        '                            <li><a href="javascript:;">隐患各标段统计</a></li>\n' +
        '                            <li><a href="javascript:;">新增一、二级隐患情况</a></li>\n' +
        '                            <li><a href="javascript:;">施工单位月末统计报表</a></li>\n' +
        '                        </ul></li>\n' +
        '            </ul>'
    $(".page-nav").append(str);


});