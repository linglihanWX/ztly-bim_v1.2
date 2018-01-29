$(function(){
    $(".three-menu li:nth-of-type(3) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");

    $(".page-nav>ul>li:nth-of-type(3) a").addClass("active").parent().siblings().children("a").removeClass("active");
    $(".content-top>ul li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });
    $(".page-nav>ul>li>a").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("active").parent().siblings().children("a").removeClass("active");
        });
    });

    $('#dataGrid').treegrid({
        url: "../../static/page/dungou/riskRoutineIssue/json/problemlist.json",
        method:"get",
        striped: true,
        idField: "id",
        nowrap:false,
        checkbox:true,
        treeField:'project',
        // pageList: [10,20,30],
        // pagination:true,
        columns: [[
            { title: '序号', field: 'num', align: 'center'},
            { title: '风险所属工程', field: 'project', align: 'center'},
            { title: '风险发生点', field: 'place', align: 'center'},
            { title: '问题描述', field: 'description', align: 'left '},
            { title: '处置措施建议', field: 'advice', align: 'center'},
            { title: '整改时限（h）', field: 'time', align: 'center'},
            { title: '上报人', field: 'people', align: 'center'},
            { title: '治理状态', field: 'state', align: 'center'},
            { title: '上报时间', field: 'date', align: 'center'},
            { title: '流程状态', field: 'processstate', align: 'center'},
            { title: '操作', field: 'operation', align: 'center'}
        ]]
    });

$(".content-bottom>p input").each(function () {
   $(this).click(function () {
       let id = $(this).attr("id");
       $("#"+id + "Box").window('open');
   });
});


    $(".page-nav>ul>li").each(function () {
        $(this).hover(function () {
            $(this).children(".pull-down").stop().slideDown();
        },function () {
            $(this).children(".pull-down").stop().slideUp();
        })
    });

});