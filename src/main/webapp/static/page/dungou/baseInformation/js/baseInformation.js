$(function(){
    $(".three-menu li:nth-of-type(7) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav>ul>li:nth-of-type(1) a").addClass("active").parent().siblings().children("a").removeClass("active");
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
        url: "../../static/page/dungou/baseInformation/json/gongchenginfo.json",
        method:"get",
        idField: "id",
        lines:true
    });



    $('#dataGrid').datagrid({
        url: "../../static/page/dungou/baseInformation/json/standardlist.json",
        method:"get",
        striped: true,
        fit:true,
        // singleSelect: true,
        idField: "id",
        // checkbox:true,
        // treeField:'num',
        rownumbers:true,
        // pageList: [10,20,30],
        // pagination:true,
        columns: [[
            {field: 'ck', checkbox:true},
            { title: '编号', field: 'bnum', align: 'center'},
            { title: '所属工程', field: 'project', align: 'center'},
            { title: '检测类型', field: 'type', align: 'center'},
            { title: '第三方检测', field: 'threetest', align: 'center'},
            { title: '检测时间', field: 'testdate', align: 'center'},
            { title: '创建时间', field: 'createdate', align: 'center'},
            { title: '初始值', field: 'originnum', align: 'center'},
            { title: '描述', field: 'description', align: 'center'}
        ]],
        onClickCell:function(row,field){
            if(field == 'level') {
                console.log(1);
            }
        },
        onCheck:function (index,row) {
            console.log(index);
            console.log(row);
            let nodes = $("#dataGrid").datagrid("getChecked");
            console.log(nodes);
        }
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