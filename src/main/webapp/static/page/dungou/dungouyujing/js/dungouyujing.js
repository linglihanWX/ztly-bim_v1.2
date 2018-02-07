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
        fit:true,
        // singleSelect: true,
        idField: "id",
        // checkbox:true,
        // treeField:'project',
        rownumbers:true,
        remoteSort:false,
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
            { title: '治理状态', field: 'stake', align: 'center',
            	styler:function (value,row,index) {
            		console.log(value);
                if(value == "已清除"){
                    return "color:green;"
                }else if(value == "进行中"){
                    return "color:orange;"
                }else if(value == "待整改"){
                    return "color:red;"
                }
             },sortable: true,sorter:function(a,b){
                 if(a == "已清除"){
                     return 1;
             }else if(a == "进行中"){
                 if(b == "已清除"){
                     return -1;
                 }else if(b == "进行中" || b == "待整改"){
                     return 1;
                 }
             }else if(a == "待整改"){
                 return -1;
             }

         }},
            { title: '填报日期', field: 'time', align: 'center',
        	 sortable: true,sorter:function(c,d){
                 let a = c.split('-');
                 let b = d.split('-');
                 if (a[0] == b[0]){
                     if (a[1] == b[1]){
                         return (a[2]>b[2]?1:-1);
                     } else {
                         return (a[1]>b[1]?1:-1);
                     }
                 } else {
                     return (a[0]>b[0]?1:-1);
                 }
             }
},
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
        onClickRow:function (index,row) {
            var index = row.id-1
            var boundingsphere = getSphereFromBoundsMinMax(imgpos[index].min,imgpos[index].max,pmodel)
            FreedoApp.viewers["earth"].camera.flyToBoundingSphere(boundingsphere,{duration:0,offset: new Freedo.HeadingPitchRange(Freedo.Math.toRadians(60), Freedo.Math.toRadians(0), boundingsphere.radius * 10.0)})
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
    let riskTotal = echarts.init(document.getElementById('riskTotal'));
    let option1 =  {
        title: {
            text: '风险处理状态统计信息',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}条 ({d}%)"
        },
        legend: {
            x: 'center',
            y: 'bottom',
            data: ['待整改', '进行中', '已清除', ]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: false,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [

            {
                name:'统计信息',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:5, name:'待整改'},
                    {value:6, name:'进行中'},
                    {value:10, name:'已清除'},

                ]
            }
        ]
    };
    riskTotal.setOption(option1);
});