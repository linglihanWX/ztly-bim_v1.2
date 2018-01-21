$(function(){
    $(".three-menu li:nth-of-type(7) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".content-top>ul:nth-of-type(2) li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
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
            {
                title: ' ', field: 'ck', align: 'center', width: 30, formatter: function (value, row, index) {
                    return '<input type="checkbox" name="DataGridCheckbox">';
                }
            },
            { title: '工程名称', field: 'name', align: 'center'},
            { title: '填报日期', field: 'time', align: 'center'},
            { title: '填报人', field: 'menName', align: 'center'},
            { title: '工作内容', field: 'content', align: 'center'},
            { title: '状况', field: 'progress', align: 'center'},
            { title: '问题及解决方案', field: 'problem', align: 'center'},
            { title: '备注', field: 'mark', align: 'center'}
        ]]
    });
});