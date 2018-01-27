$(function(){
    $(".three-menu li:nth-of-type(6) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(5) a").addClass("active").parent().siblings().children("a").removeClass("active");
    $(".content-top>ul li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });

    $('#dataOne').tree({
        url: "../../static/page/dungou/yichangdungouhuan/js/tree1.json",
        method:"get",
        idField: "id",
        lines:true
    });



    $('#dataGrid').datagrid({
        url: "../../static/page/dungou/yichangdungouhuan/js/doc.json",
        method:"get",
        striped: true,
        singleSelect: true,
        idField: "id",
        rownumbers:true,
        // pageList: [10,20,30],
        // pagination:true,
        columns: [[
            { title: '环号', field: 'name', align: 'left'},
            { title: '停机时间（小时）', field: 'time', align: 'center'},
            { title: '出土量（方）', field: 'menName', align: 'center'},
            { title: '注浆量（方）', field: 'content', align: 'center'},
            { title: '土压力（Mpa）', field: 'progress', align: 'center'},
            { title: '海床沉降（mm）', field: 'problem', align: 'center'},
            { title: '姿态', field: 'mark', align: 'center'}
        ]]
    });
});