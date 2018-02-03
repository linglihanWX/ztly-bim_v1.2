$(function(){
    $(".three-menu li:nth-of-type(2) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(7) a").addClass("active").parent().siblings().children("a").removeClass("active");
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
        url: "../../static/page/dungou/cailiaoxiaohao/json/clxh.json",
        method:"get",
        striped: true,
        //singleSelect: true,
        // treeField:'name',
        idField: "id",
        // checkbox:true,
        rownumbers:true,
        // pageList: [10,20,30],
        // pagination:true,
        columns: [[

            { field: 'ck', checkbox:true},
            { title: '名称', field: 'name', align: 'left'},
            { title: '规格', field: 'guige', align: 'center'},
            { title: '数量', field: 'number', align: 'center'},
            { title: '单位', field: 'unit', align: 'center'},
            { title: '消耗程度', field: 'consume', align: 'center'},
            { title: '备注', field: 'mark', align: 'center'}
        ]],
        /* onClickCell:function (row,field) {
             if(field == "mark"){
                 $("#infoShow").window('open');
             }
         },*/
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