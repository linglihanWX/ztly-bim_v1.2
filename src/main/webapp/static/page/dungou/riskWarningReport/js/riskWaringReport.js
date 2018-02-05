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


    $('#dataOne').tree({
        url: "../../static/page/dungou/riskWarningReport/json/tree.json",
        method:"get",
        idField: "id",
        lines:true
    });



    $('#dataGrid').datagrid({
        url: "../../static/page/dungou/riskWarningReport/json/riskWaringReport.json",
        striped: true,
        method:"get",
        // singleSelect: true,
        idField: "id",
        rownumbers:true,
        fit:true,
        columns: [[
            { field: 'ck', checkbox:true},
            { title: '一级分类', field: 'firstClassify', align: 'left'},
            { title: '预警分类', field: 'waringClassify', align: 'center'},
            { title: '指标名称', field: 'name', align: 'center'},
            { title: '指标内容', field: 'content', align: 'center'},
            { title: '预警等级', field: 'level', align: 'center',styler:function (val,row,index) {
                console.log(val,row,index);
                if(val == "黄色预警"){
                    console.log(1);
                    return  "color:yellow;"
                }else if(val == "红色预警"){
                    return  "color:red;"
                }else if(val == "橙色预警"){
                    return  "color:orange;"
                }
            }},
            { title: '罚款金额(万)', field: 'money', align: 'center'},
            { title: '扣分', field: 'points', align: 'center'},
        ]],
        onCheck:function (index,row) {
            console.log(row);
            console.log(index);
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