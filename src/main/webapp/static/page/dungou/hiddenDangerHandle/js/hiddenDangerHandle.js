$(function(){
    $(".three-menu li:nth-of-type(3) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav>ul>li:nth-of-type(2) a").addClass("active").parent().siblings().children("a").removeClass("active");
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
        url: "../../static/page/dungou/hiddenDangerHandle/json/hiddenDangerHandle.json",
        method:"get",
        striped: true,
        singleSelect:true,
        idField: "id",
        rownumbers:true,
        columns: [[
            { field: 'ck',checkbox:true},
            { title: '隐患所属工程', field: 'project', align: 'left'},
            { title: '隐患地点', field: 'place', align: 'center'},
            { title: '隐患描述', field: 'issue', align: 'center'},
            { title: '隐患级别', field: 'level', align: 'center'},
            { title: '上报人', field: 'reportMan', align: 'center'},
            { title: '整改时限(天)', field: 'allTime', align: 'center'},
            { title: '治理状态', field: 'governState', align: 'center',styler:function (value,row,index) {
                if(value == "未处理"){
                    return "color:red;"
                }else  if(value == "整改中"){
                    return "color:blue;"
                }else  if(value == "已整改"){
                    return "color:green;"
                }
            }},
            { title: '排查时间', field: 'foundTime', align: 'center'},
            { title: '流程状态', field: 'flowState', align: 'center',styler:function (value,row,index) {
                if(value == "未处理"){
                    return "color:red;"
                }else  if(value == "处理中"){
                    return "color:blue;"
                }else  if(value == "已处理"){
                    return "color:green;"
                }
            }},
            { title: '批示(正常/超期)', field: 'suggest', align: 'center',styler:function (value,row,index) {
                if(value == "正常"){
                    return "color:green;"
                }else  if(value == "超期"){
                    return "color:red;"
                }
            }},
            { title: '整改(正常/超期)', field: 'handler', align: 'center',styler:function (value,row,index) {
                if(value == "正常"){
                    return "color:green;"
                }else  if(value == "超期"){
                    return "color:red;"
                }
            }},
            { title: '操作', field: 'mark', align: 'center',styler:function (value,row,index) {
                    return "color:blue;text-decoration: underline;cursor:pointer;"
            }}
        ]],
        onCheck:function (index,row) {
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
               $(".project option[value='"+node[0].project+"']").attr("selected", true);
               $(".place option[value='"+node[0].place+"']").attr("selected", true);
               $(".issue").val(node[0].issue);
               $(".level option[value='"+node[0].level+"']").attr("selected", true);
               $(".reportMan").val(node[0].reportMan);
               $(".allTime").val(node[0].allTime);
               $(".governState option[value='"+node[0].governState+"']").attr("selected", true);
               $(".foundTime").val(node[0].foundTime);
               $(".flowState option[value='"+node[0].flowState+"']").attr("selected", true);
               $(".suggest option[value='"+node[0].suggest+"']").attr("selected", true);
               $(".handler option[value='"+node[0].handler+"']").attr("selected", true);

               $(".save").on("click",function () {
                   let project = $(".project").val();
                   let place = $(".place").val();
                   let issue = $(".issue").val();
                   let level = $(".level").val();
                   let reportMan = $(".reportMan").val();
                   let allTime = $(".allTime").val();
                   let governState = $(".governState").val();
                   let foundTime = $(".foundTime").val();
                   let flowState = $(".flowState").val();
                   let suggest = $(".suggest").val();
                   let handler = $(".handler").val();
                   if(project != "" && place != "" && issue != "" && level != "" && reportMan != "" && allTime != "" && governState != "" && foundTime != "" && flowState != "" && suggest != "" && handler != ""){
                       node[0].project = project;
                       node[0].place = place;
                       node[0].issue = issue;
                       node[0].level = level;
                       node[0].reportMan = reportMan;
                       node[0].allTime = allTime;
                       node[0].governState = governState;
                       node[0].foundTime = foundTime;
                       node[0].flowState = flowState;
                       node[0].suggest = suggest;
                       node[0].handler = handler;
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
    });

    $('#history').datagrid({
        url: "../../static/page/dungou/hiddenDangerHandle/json/hiddenDangerHandle.json",
        method:"get",
        striped: true,
        singleSelect:true,
        idField: "id",
        rownumbers:true,
        columns: [[
            { title: '任务名称', field: 'project', align: 'left'},
            { title: '处理状态', field: 'place', align: 'center'},
            { title: '响应状态', field: 'flowState', align: 'center'},
            { title: '执行人', field: 'level', align: 'center'},
            { title: '批示说明', field: 'reportMan', align: 'center'},
            { title: '开始时间', field: 'allTime', align: 'center'},
            { title: '结束时间', field: 'governState', align: 'center',styler:function (value,row,index) {
                if(value == "未处理"){
                    return "color:red;"
                }else  if(value == "整改中"){
                    return "color:blue;"
                }else  if(value == "已整改"){
                    return "color:green;"
                }
            }},
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