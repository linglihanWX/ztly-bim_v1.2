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

    let index = 0;
    $('#dataGrid').datagrid({
        url: "../../static/page/dungou/riskWarningHandle/json/riskWaringHandle.json",
        method:"get",
        striped: true,
        singleSelect: true,
        idField: "id",
        rownumbers:true,
        columns: [[
            { field: 'ck',checkbox:true},
            { title: '风险所属工程', field: 'project', align: 'left'},
            { title: '风险发生地', field: 'place', align: 'center'},
            { title: '预警类型', field: 'waringClassify', align: 'center'},
            { title: '预警等级', field: 'waringLevel', align: 'center',styler:function (val,row,index) {
                if(val == "黄色预警"){
                    return  "color:yellow;"
                }else if(val == "红色预警"){
                    return  "color:red;"
                }else if(val == "橙色预警"){
                    return  "color:orange;"
                }
            }},
            { title: '预警描述', field: 'waringDescription', align: 'center'},
            { title: '点位数目', field: 'pointTotal', align: 'center'},
            { title: '测点编号', field: 'pointNumber', align: 'center'},
            { title: '上报人', field: 'reportMan', align: 'center'},
            { title: '治理状态', field: 'handleState', align: 'center',styler:function (val,row,index) {
                if(val == "未处理"){
                    console.log(1);
                    return  "color:yellow;"
                }else if(val == "已处理"){
                    return  "color:red;"
                }else if(val == "处理中"){
                    return  "color:orange;"
                }
            }},
            { title: '上报时间', field: 'reportTime', align: 'center'},
            { title: '流程状态', field: 'flowState', align: 'center'},
            { title: '操作', field: 'operation', align: 'center',styler:function (val,row,index) {
              return  "color:blue;cursor:pointer;text-decoration:underline"
            }}
        ]],
        onCheck:function (index,row) {
            index = index;
            let nodes = $("#dataGrid").datagrid("getChecked");
            console.log(nodes);
        },
        onClickCell:function (index,field,value) {
            if(field == "operation"){
                console.log(value);
            }
        }
    });

    $("#edit").on("click",function () {
        let id = $(this).attr("id");
        let node = $("#dataGrid").datagrid("getChecked");
        if(node.length){
            $("#"+id + "Box").window('open');
            $(".project option[value='"+node[0].project+"']").attr("selected", true);
            $(".place option[value='"+node[0].place+"']").attr("selected", true);
            $(".waringClassify option[value='"+node[0].waringClassify+"']").attr("selected", true);
            $(".waringLevel option[value='"+node[0].waringLevel+"']").attr("selected", true);
            $(".waringDescription").val(node[0].waringDescription);
            $(".pointTotal").val(node[0].pointTotal);
            $(".pointNumber").val(node[0].pointNumber);
            $(".reportMan").val(node[0].reportMan);
            $(".handleState option[value='"+node[0].handleState+"']").attr("selected", true);
            $(".reportTime").val(node[0].reportTime);
            $(".flowState option[value='"+node[0].flowState+"']").attr("selected", true);


            $(".save").on("click",function () {
                let project = $(".project").val();
                let place = $(".place").val();
                let waringClassify = $(".waringClassify").val();
                let waringLevel = $(".waringLevel").val();
                let waringDescription = $(".waringDescription").val();
                let pointTotal = $(".pointTotal").val();
                let pointNumber = $(".pointNumber").val();
                let reportMan = $(".reportMan").val();
                let reportTime = $(".reportTime").val();
                let flowState = $(".flowState").val();
                let handleState = $(".handleState").val();
                console.log(1);

                if(project != "" && place != "" && waringClassify != "" && waringLevel != "" && reportMan != "" && waringDescription != "" && pointTotal != "" && pointNumber != "" && flowState != "" && reportTime != "" && handleState != ""){
                    node[0].project = project;
                    node[0].place = place;
                    node[0].waringClassify = waringClassify;
                    node[0].waringLevel = waringLevel;
                    node[0].reportMan = reportMan;
                    node[0].waringDescription = waringDescription;
                    node[0].pointTotal = pointTotal;
                    node[0].pointNumber = pointNumber;
                    node[0].flowState = flowState;
                    node[0].reportTime = reportTime;
                    node[0].handleState = handleState;
                    $('#dataGrid').datagrid('refreshRow',index);
                    $("#"+id + "Box").window('close');
                }
            });
            $(".cancel").on("click",function () {
                $("#"+id + "Box").window('close');
            });
        }
    });
    $("#detail").on("click",function () {
        let id = $(this).attr("id");
        $("#"+id + "Box").window('open');
        $('#monitorInfo').datagrid({
            url: "../../static/page/dungou/riskWarningHandle/json/riskWaringHandle.json",
            method:"get",
            striped: true,
            singleSelect:true,
            idField: "id",
            rownumbers:true,
            columns: [[
                { title: '测点编号', field: 'project', align: 'left'},
                { title: '监测类型', field: 'place', align: 'center'},
                { title: '预警等级', field: 'flowState', align: 'center'},
                { title: '初始值(mm)', field: 'level', align: 'center'},
                { title: '本次累计变化值(mm|KN)', field: 'reportMan', align: 'center'},
                { title: '本次变化速率(mm/天|KN/天)', field: 'allTime', align: 'center'}
            ]],
            onCheck:function (index,row) {
                index = index;
                let nodes = $("#dataGrid").datagrid("getChecked");
                console.log(nodes);
            }
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