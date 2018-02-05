$(function(){
    $(".three-menu li:nth-of-type(2) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(9) a").addClass("active").parent().siblings().children("a").removeClass("active");
    $(".content-top>ul li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });
    /*构件树*/
    $(".tree-box-title .iconfont").on("click",function () {
        if($(this).hasClass("icon-hidden")){
            $(".tree-box").stop().animate({
                left:-200
            },"fast",function () {
                $(".tree-box-title .iconfont").css({
                    right:-30
                })
            });

        }else{
            $(".tree-box").stop().animate({
                left:0
            },"fast",function () {
                $(".tree-box-title .iconfont").css({
                    right:0
                })
            });

        }
        $(this).toggleClass("icon-hidden icon-show")
    })
    $('#dataGrid').datagrid({
        url: "../../static/page/dungou/guanpianposui/js/doc.json",
        method:"get",
        striped: true,
        fit:true,
        // singleSelect: false,
        idField: "id",
        // checkbox:true,
        // treeField:'name',
        rownumbers:true,
        columns: [[
            { field: 'ck',checkbox:true},
            { title: '所属工程', field: 'name', align: 'left'},
            { title: '破损环号', field: 'time', align: 'center'},
            { title: '破损数量', field: 'menName', align: 'center'},
            { title: '破损位置', field: 'content', align: 'center'},
            { title: '负责人', field: 'problem', align: 'center'},
            { title: '破损详情', field: 'mark', align: 'center',styler: function(value,row,index){
                return 'color:blue;cursor:pointer;text-decoration:underline;';
            }}
        ]],
        onClickCell:function(row,field){
            if(field == 'mark') {
                $("#infoShow").window('open')
            }
        },
        onCheck:function (index,row) {
            console.log(index);
            console.log(row);
            let nodes = $("#dataGrid").datagrid("getChecked");
            console.log(nodes);
            restAllEntity();
            setEntity(nodes);
        },
        onUncheck:function (index,row) {
            let nodes = $("#dataGrid").datagrid("getChecked");
            console.log(nodes);
            restAllEntity();
            setEntity(nodes);
        }
    });
});