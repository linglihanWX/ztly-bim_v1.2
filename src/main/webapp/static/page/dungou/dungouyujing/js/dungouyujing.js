$(function(){
    $(".three-menu li:nth-of-type(2) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(5) a").addClass("active").parent().siblings().children("a").removeClass("active");
    $(".content-top>ul:nth-of-type(2) li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });
    $("#add").on("click",function () {
       $("#addDangers").window('open')
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
        url: "../../static/page/dungou/dungouyujing/js/doc.json",
        method:"get",
        striped: true,
        // singleSelect: true,
        idField: "id",
        // checkbox:true,
        // treeField:'project',
        rownumbers:true,
        // pageList: [10,20,30],
        // pagination:true,
        columns: [[
            {field: 'ck',checkbox:true},
            { title: '风险所属工程', field: 'project', align: 'left'},
            { title: '风险发生点', field: 'point', align: 'center'},
            { title: '管片环号', field: 'num', align: 'center'},
            { title: '偏差类型', field: 'deviationtype', align: 'center'},
            { title: '偏差数据', field: 'deviationdata', align: 'center'},
            { title: '预警等级', field: 'grade', align: 'center'},
            { title: '治理状态', field: 'stake', align: 'center'},
            { title: '填报日期', field: 'time', align: 'center'},
            { title: '填报人', field: 'menName', align: 'center'},
            { title: '预览', field: 'mark', align: 'center',styler: function(value,row,index){
                return 'color:blue;cursor:pointer;text-decoration:underline;';
            }}
        ]],
      /*  onDblClickRow:function (index,row) {
            $("#infoShow").window('open')
        },*/
        onClickCell:function(row,field){
            if(field == 'mark') {
              $("#infoShow").window('open');
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
      /*
        onCheckNode:function (row,checked) {
        	var nodes = $('#dataGrid').treegrid('getCheckedNodes'); // get checked nodes
        	restAllEntity();
            setEntity(nodes);
        }*/
    });
});