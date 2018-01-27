$(function(){
    $(".three-menu li:nth-of-type(3) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(4) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
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
        url: "../../static/page/dungou/baobiao/json/tree1.json",
        method:"get",
        idField: "id",
        lines:true
    });



    $('#dataGrid').treegrid({
        url: "../../static/page/dungou/ziliao/json/doc.json",
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
            { title: '工程名称', field: 'name', align: 'left'},
            { title: '填报日期', field: 'time', align: 'center'},
            { title: '填报人', field: 'menName', align: 'center'},
            { title: '工作内容', field: 'content', align: 'center'},
            { title: '状况', field: 'progress', align: 'center'},
            { title: '问题及解决方案', field: 'problem', align: 'center'},
            { title: '备注', field: 'mark', align: 'center'}
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