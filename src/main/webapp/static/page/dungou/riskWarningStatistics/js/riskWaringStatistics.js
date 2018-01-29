$(function(){
    $(".three-menu li:nth-of-type(3) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav>ul>li:nth-of-type(5) a").addClass("active").parent().siblings().children("a").removeClass("active");
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
    $('#dataGrid').treegrid({
        url: "../../static/page/dungou/riskWarningStatistics/json/riskWaringStatistics.json",
        method:"get",
        //striped: true,
        idField: "id",
        treeField:'line',
        columns: [[
            { title: '线路',field:'line', align: 'center',"rowspan":2},
            { title: '预警类型',field:'synthesizeWarning', align: 'center',"rowspan":2},
            { title: '上期保留预警', align: 'center',"colspan":3},
            { title: '本期预警', align: 'center',"colspan":3},
            { title: '本期消警', align: 'center',"colspan":3},
            { title: '预警累计', align: 'center',"colspan":3}
        ],
            [
                { title: '红', field: 'lastWarning1', align: 'center',styler: function(value,row,index){
                    return 'color:red;';
                }

                },
                { title: '橙', field: 'lastWarning2', align: 'center',styler: function(value,row,index){
                    return 'color:orange;';
                }},
                { title: '黄', field: 'lastWarning3', align: 'center',styler: function(value,row,index){
                    return 'color:#ffbe4a;';
                }},
                { title: '红', field: 'thisWarning1', align: 'center',styler: function(value,row,index){
                    return 'color:red;';
                }},
                { title: '橙', field: 'thisWarning2', align: 'center',styler: function(value,row,index){
                    return 'color:orange;';
                }},
                { title: '黄', field: 'thisWarning3', align: 'center',styler: function(value,row,index){
                    return 'color:#ffbe4a;';
                }},
                { title: '红', field: 'solveWarning1', align: 'center',styler: function(value,row,index){
                    return 'color:red;';
                }},
                { title: '橙', field: 'solveWarning2', align: 'center',styler: function(value,row,index){
                    return 'color:orange;';
                }},
                { title: '黄', field: 'solveWarning3', align: 'center',styler: function(value,row,index){
                    return 'color:#ffbe4a;';
                }},
                { title: '红', field: 'totalWarning1', align: 'center',styler: function(value,row,index){
                    return 'color:red;';
                }},
                { title: '橙', field: 'totalWarning2', align: 'center',styler: function(value,row,index){
                    return 'color:orange;';
                }},
                { title: '黄', field: 'totalWarning3', align: 'center',styler: function(value,row,index){
                    return 'color:#ffbe4a;';
                }}

            ]],
        onLoadSuccess:function (row,data) {
            console.log(data);
            let merges = [];
            for (let i = 0; i < data.length; i++) {
                if(i % 3 == 1){
                    merges.push({
                        index:i,
                        rowspan:3
                    })
                }
            }
            /* var merges = [{
                 index: 1,
                 rowspan: 3
             },{
                 index: 4,
                 rowspan: 3
             },{
                 index: 7,
                 rowspan: 3
             }];*/
            for(var i=0; i<merges.length; i++){
                $(this).datagrid('mergeCells',{
                    index: merges[i].index,
                    field: 'line',
                    rowspan: merges[i].rowspan
                });
            }
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