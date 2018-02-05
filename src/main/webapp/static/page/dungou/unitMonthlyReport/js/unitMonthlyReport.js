$(function(){
    $(".three-menu li:nth-of-type(3) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
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

    let index = 0;
    $('#dataGrid').datagrid({
        url: "../../static/page/dungou/unitMonthlyReport/json/unitMonthReport.json",
        method:"get",
        striped: true,
        singleSelect: true,
        fit:true,
        idField: "id",
        rownumbers:true,
        columns: [[
            { field: 'ck',checkbox:true},
            { title: '上报月份', field: 'reportTime', align: 'center'},
            { title: '所属工程', field: 'project', align: 'center'},
            { title: '排查地点', field: 'place', align: 'center'},
            { title: '上报单位', field: 'reportUnit', align: 'center'},
            { title: '上报人', field: 'reportMan', align: 'center'},
            { title: '排查描述', field: 'description', align: 'center'},
            { title: '未完成原因', field: 'reason', align: 'center'}
        ]],
        onCheck:function (index,row) {
            console.log(row);
            console.log(index);
            index = index;
            let nodes = $("#dataGrid").datagrid("getChecked");
            console.log(nodes);
        }
    });

    $("#edit").on("click",function () {
        let id = $(this).attr("id");
        let node = $("#dataGrid").datagrid("getChecked");
        if(node.length){
            $("#"+id + "Box").window('open');

            $(".reportTime").val(node[0].reportTime);
            $(".place").val(node[0].place);
            $(".description").val(node[0].description);
            $(".reason").val(node[0].reason);
            $(".save").off("click").on("click",function () {
                let reportTime = $(".reportTime").val();
                let place = $(".place").val();
                let description = $(".description").val();
                let reason = $(".reason").val();
                if(reportTime != "" && place != "" && description != "" && reason != "" ){
                    node[0].reportTime = reportTime;
                    node[0].place = place;
                    node[0].description = description;
                    node[0].reason = reason;
                    $('#dataGrid').datagrid('refreshRow',index);
                    $("#"+id + "Box").window('close');
                }
            });
            $(".cancel").on("click",function () {
                $("#"+id + "Box").window('close');
            });
        }
    });
    $('#history').datagrid({
        url: "",
        striped: true,
        singleSelect:true,
        idField: "id",
        rownumbers:true,
        columns: [[
            { field: 'ck',checkbox:true},
            { title: '排查类型', field: 'place', align: 'center'},
            { title: '排查次数', field: 'place', align: 'center'},
            { title: '隐患数目', field: 'flowState', align: 'center'},
            { title: '未整数', field: 'level', align: 'center'},
            { title: '描述', field: 'reportMan', align: 'center'},

        ]],
        onCheck:function (index,row) {
            index = index;
            let nodes = $("#dataGrid").datagrid("getChecked");
            console.log(nodes);
        }
    });

    $(".page-nav>ul>li").each(function () {
        $(this).hover(function () {
            $(this).children(".pull-down").stop().slideDown();
        },function () {
            $(this).children(".pull-down").stop().slideUp();
        })
    });

});