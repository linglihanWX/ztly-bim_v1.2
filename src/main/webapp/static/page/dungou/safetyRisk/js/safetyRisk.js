$(function(){
    $(".three-menu li:nth-of-type(3) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(2) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
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

    $('#dataOne').tree({
        url: "../../static/page/dungou/safetyRisk/json/type.json",
        method:"get",
        idField: "id",
        lines:true
    });



    $('#dataGrid').treegrid({
        url: "../../static/page/dungou/safetyRisk/json/standardlist.json",
        method:"get",
        striped: true,
        singleSelect: true,
        idField: "num",
        checkbox:true,
        treeField:'num',
        rownumbers:true,
        // pageList: [10,20,30],
        // pagination:true,
        columns: [[
            { title: '序号', field: 'num', align: 'center'},
            { title: '一级分类', field: 'type1', align: 'center'},
            { title: '名称', field: 'name', align: 'center'},
            { title: '隐患级别', field: 'level', align: 'center'},
            { title: '排查项目', field: 'project', align: 'center'},
            { title: '排查内容', field: 'content', align: 'center'},
            { title: '扣款金额', field: 'money', align: 'center'},
            { title: '整改期限', field: 'date', align: 'center'},
            { title: '扣分', field: 'score', align: 'center'}
        ]]
    });


    $("#report").on("click",function () {
        $("#reportInfo").window('open')
    });

    $(".page-nav>ul>li").each(function () {
        $(this).hover(function () {
            $(this).children(".pull-down").stop().slideDown();
        },function () {
            $(this).children(".pull-down").stop().slideUp();
        })
    });

});