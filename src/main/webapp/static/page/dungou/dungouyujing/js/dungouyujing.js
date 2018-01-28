$(function(){
    $(".three-menu li:nth-of-type(2) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(4) a").addClass("active").parent().siblings().children("a").removeClass("active");
    $(".content-top>ul:nth-of-type(2) li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });
    $("#add").on("click",function () {
       $("#addDangers").window('open')
    });


    $('#dataGrid').treegrid({
        url: "../../static/page/dungou/dungouyujing/js/doc.json",
        method:"get",
        striped: true,
        singleSelect: true,
        idField: "id",
        checkbox:true,
        treeField:'name',
        rownumbers:true,
        // pageList: [10,20,30],
        // pagination:true,
        columns: [[
           /* {
                title: ' ', field: 'ck', align: 'center', width: 30, formatter: function (value, row, index) {
                    return '<input type="checkbox" name="DataGridCheckbox">';
                }
            },*/
            { title: '序号', field: 'id', align: 'left'},
            { title: '风险所属工程', field: 'project', align: 'center'},
            { title: '风险发生点', field: 'point', align: 'center'},
            { title: '管片环号', field: 'num', align: 'center'},
            { title: '偏差类型', field: 'deviationtype', align: 'center'},
            { title: '偏差数据', field: 'deviationdata', align: 'center'},
            { title: '预警等级', field: 'grade', align: 'center'},
            { title: '治理状态', field: 'stake', align: 'center'},
            { title: '填报日期', field: 'time', align: 'center'},
            { title: '填报人', field: 'menName', align: 'center'},
            { title: '预览', field: 'mark', align: 'center'}
        ]],
        onDblClickRow:function (index,row) {
            $("#infoShow").window('open')
        },
        onCheckNode:function (row,checked) {
        	var nodes = $('#dataGrid').treegrid('getCheckedNodes'); // get checked nodes
        	restAllEntity();
            setEntity(nodes);
        }
    });
});