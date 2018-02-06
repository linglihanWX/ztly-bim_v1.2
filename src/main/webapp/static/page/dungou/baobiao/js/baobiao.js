$(function(){
    $(".three-menu li:nth-of-type(6) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".content-top>ul:nth-of-type(2) li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });


    /*$('#dataGrid').datagrid({
        url: "./json/doc.json",
        striped: true,
        // singleSelect: true,
        idField: "id",
        fit:true,
        rownumbers:true,
        columns: [[{field: 'ck',checkbox:true},
            { title: '工程名称', field: 'text', align: 'left'},
            { title: '填报日期', field: 'time', align: 'center'},
            { title: '填报人', field: 'menName', align: 'center'},
            { title: '工作内容', field: 'content', align: 'center'},
            { title: '状况', field: 'progress', align: 'center'},
            { title: '问题及解决方案', field: 'problem', align: 'center'},
            { title: '备注', field: 'mark', align: 'center'}
        ]],
        onCheck:function (index,row) {
            let nodes = $("#dataGrid").datagrid("getChecked");
            console.log(nodes);
        },
        onSelect:function (row,index) {
            console.log(row);
            console.log(index);
        }
    });*/



    let safe = echarts.init(document.getElementById('safe'));
    let option1 = {
        title: {
            text: '质量安全',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox: {
            show: true,
            feature: {
                // dataZoom: {
                //     yAxisIndex: 'none'
                // },
                // dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                // restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            data: ['质量', '安全'],
            // orient: "vertical",
            left: "center"
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['2017/01', '2017/02', '2017/03', '2017/04', '2017/05', '2017/06', '2017/07', '2017/08', '2017/09', '2017/10', '2017/11', '2017/12']
        }],
        yAxis: [{
            name: '',
            type: 'value'
        }],
        series: [{
            name: '质量',
            type: 'bar',
            data: [10, 8, 6, 5, 6, 8, 10, 8, 6, 5, 6, 8],
            markPoint: {
                data: [
                    {
                        type: 'max',
                        name:"最大值"
                    },
                    {
                        type: 'min',
                        name:"最小值"
                    }
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
            {
                name: '安全',
                type: 'bar',
                data: [5, 9, 14, 6, 8, 5, 5, 9, 14, 6, 8, 5],
                markPoint: {
                    data: [
                        {
                            type: 'max',
                            name:"最大值"
                        },
                        {
                            type: 'min',
                            name:"最小值"
                        }
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    safe.setOption(option1);

    let progress = echarts.init(document.getElementById('progress'));
    let option2 = {
        title : {
            text: '安全类别',

        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:['安全教育','违章行为','防护措施','设备','其他']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'面积模式',
                type:'pie',
                radius : [30, 110],
                center : ['50%', '50%'],
                roseType : 'area',
                data:[
                    {value:10, name:'安全教育'},
                    {value:5, name:'违章行为'},
                    {value:15, name:'防护措施'},
                    {value:25, name:'设备'},
                    {value:20, name:'其他'}

                ]
            }
        ]
    };

    progress.setOption(option2);

    let risk = echarts.init(document.getElementById('risk'));
    let option3 = {
        title: {
            text: '进度曲线'
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data:['掘进进度','轨道铺设','电器安装']
        },
        /* grid: {
             left: '3%',
             right: '4%',
             bottom: '3%',
             containLabel: true
         },*/
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['三月份','四月份','五月份','六月份','七月份','八月份','九月份']
        },
        yAxis: {
            type: 'value'
        },

        series: [
            {
                name:'掘进进度',
                type:'line',
                smooth: true,
                data:[10, 11, 13, 16, 17, 19, 21],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#c23531'
                        }, {
                            offset: 1,
                            color: '#ffe'
                        }])
                    }
                },
                markPoint: {
                    data: [
                        {
                            type: 'max',
                            name:"最大值"
                        },
                        {
                            type: 'min',
                            name:"最小值"
                        }
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'轨道铺设',
                type:'line',
                smooth: true,
                data:[6, 6, 9, 12, 15, 16, 19],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#2f4554'
                        }, {
                            offset: 1,
                            color: '#ffe'
                        }])
                    }
                },
                markPoint: {
                    data: [
                        {
                            type: 'max',
                            name:"最大值"
                        },
                        {
                            type: 'min',
                            name:"最小值"
                        }
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'电器安装',
                type:'line',
                smooth: true,
                data:[3, 5, 7, 10, 14, 15, 16],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#61a0a8'
                        }, {
                            offset: 1,
                            color: '#ffe'
                        }])
                    }
                },
                markPoint: {
                    data: [
                        {
                            type: 'max',
                            name:"最大值"
                        },
                        {
                            type: 'min',
                            name:"最小值"
                        }
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    risk.setOption(option3);


    let a = echarts.init(document.getElementById('4'));
    let option4 = {
        title: {
            text: '风险类型分布统计'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            x: 'center',
            y:"bottom",
            data:['断层破碎带塌陷','岩层涌水','淤泥带','溶洞','市政管线']
        },

        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        series: [
            {
                name:'风险统计',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        // position: 'center'
                        position: 'outside'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '25',
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
                    {value:335, name:'断层破碎带塌陷'},
                    {value:310, name:'岩层涌水'},
                    {value:234, name:'淤泥带'},
                    {value:135, name:'溶洞'},
                    {value:1548, name:'市政管线'}
                ]
            }
        ]
    };
    a.setOption(option4);

    let c = echarts.init(document.getElementById('5'));
    let option5 = {
        title: {
            text: '资源曲线'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['人力','材料','机具','设备','成本']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'人力',
                type:'line',
                smooth:true,
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'材料',
                type:'line',
                smooth:true,
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'机具',
                type:'line',
                smooth:true,
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'设备',
                type:'line',
                smooth:true,
                data:[140, 110, 153, 125, 70, 190, 246]
            },
            {
                name:'成本',
                type:'line',
                smooth:true,
                data:[92, 240, 103, 178, 163, 256, 138]
            },
        ]
    };
    c.setOption(option5);

    let b = echarts.init(document.getElementById('6'));
    let option6 = {
        title : {
            text: '材料'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            left: 'center',
            top:'bottom',
            data: ['注浆量','工业水','膨润土','泡沫原液','密封油脂']
        },
        series : [
            {
                name: '消耗',
                type: 'pie',
                radius : '50%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'注浆量'},
                    {value:310, name:'工业水'},
                    {value:234, name:'膨润土'},
                    {value:135, name:'泡沫原液'},
                    {value:1548, name:'密封油脂'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    b.setOption(option6);
});