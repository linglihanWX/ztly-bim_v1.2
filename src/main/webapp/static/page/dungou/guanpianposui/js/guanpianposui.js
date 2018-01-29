$(function(){
    $(".three-menu li:nth-of-type(2) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(9) a").addClass("active").parent().siblings().children("a").removeClass("active");
    $(".content-top>ul li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });

    $('#dataGrid').treegrid({
        url: "../../static/page/dungou/guanpianposui/js/doc.json",
        method:"get",
        striped: true,
        singleSelect: false,
        idField: "id",
        checkbox:true,
        treeField:'name',
        rownumbers:true,
        // pageList: [10,20,30],
        // pagination:true,
        columns: [[
            /*{
                title: ' ', field: 'ck', align: 'center', width: 30, formatter: function (value, row, index) {
                    return '<input type="checkbox" name="DataGridCheckbox">';
                }
            },*/
            { title: '所属工程', field: 'name', align: 'left'},
            { title: '破损环号', field: 'time', align: 'center'},
            { title: '破损数量', field: 'menName', align: 'center'},
            { title: '破损位置', field: 'content', align: 'center'},
            { title: '负责人', field: 'problem', align: 'center'},
            { title: '破损详情', field: 'mark', align: 'center',styler: function(value,row,index){
                return 'color:blue;cursor:pointer;text-decoration:underline;';
            }}
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