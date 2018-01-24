$(function(){
    $(".three-menu li:nth-of-type(6) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(5) a").addClass("active").parent().siblings().children("a").removeClass("active");
    $(".content-top>ul li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });

    $('#dataOne').tree({
        url: "../../static/page/dungou/baobiao/json/tree1.json",
        method:"get",
        idField: "id",
        lines:true
    });



    $('#dataGrid').datagrid({
        url: "../../static/page/dungou/ziliao/json/doc.json",
        method:"get",
        striped: true,
        singleSelect: true,
        idField: "id",
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
});