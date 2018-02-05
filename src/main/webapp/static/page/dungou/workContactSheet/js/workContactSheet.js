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

    $('#dataGrid').datagrid({
        url: "../../static/page/dungou/workContactSheet/json/problemlist.json",
        method:"get",
        striped: true,
        idField: "id",
        nowrap:false,
        fit:true,
        // checkbox:true,
        // treeField:'project',
        // pageList: [10,20,30],
        // pagination:true,
        rownumbers:true,
        columns: [[
            {field: 'ck', checkbox:true},
            { title: '风险所属工程', field: 'project', align: 'center'},
            { title: '风险发生点', field: 'place', align: 'center'},
            { title: '问题描述', field: 'description', align: 'left '},
            { title: '处置措施建议', field: 'advice', align: 'left'},
            { title: '整改时限（h）', field: 'time', align: 'center'},
            { title: '上报人', field: 'people', align: 'center'},
            { title: '治理状态', field: 'sta', align: 'center',styler: function(value,row,index){
                if(value == "已发布"){
                    return 'color:red;';
                }else if(value == "已处置"){
                    return 'color:blue;';
                }else if(value == "已消除"){
                    return 'color:#00FA9A;';
                }

            }},
            { title: '上报时间', field: 'date', align: 'center'},
            { title: '流程状态', field: 'processstate', align: 'center'},
            { title: '操作', field: 'operation', align: 'center',styler: function(value,row,index){
                    return 'color:blue;cursor:pointer;text-decoration:underline;';
            }}
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