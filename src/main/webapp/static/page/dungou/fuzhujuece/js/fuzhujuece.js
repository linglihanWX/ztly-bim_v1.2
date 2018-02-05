$(function () {
    $(".three-menu li:nth-of-type(2) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(8) a").addClass("active").parent().siblings().children("a").removeClass("active");
    $(".content-top>ul li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });
    $('#dataGrid').datagrid({
        url: "../../static/page/dungou/fuzhujuece/js/doc.json",
        method:"get",
        striped: true,
        singleSelect: true,
        idField: "id",
        rownumbers: true,
        fit:true,
        //fitColumns:true,
        // pageList: [10,20,30],
        // pagination:true,
        columns: [
            [{
                    title: '环号',
                    field: 'name',
                    align: 'left'
                },
                {
                    title: '土压(Bar)',
                    field: 'time',
                    align: 'center'
                },
                {
                    title: '刀盘转速(RPM)',
                    field: 'menName',
                    align: 'center'
                },
                {
                    title: '刀盘扭矩(KN/M)',
                    field: 'content',
                    align: 'center'
                },
                {
                    title: '转角(%)',
                    field: 'progress',
                    align: 'center'
                },
                {
                    title: '坡度(%)',
                    field: 'problem',
                    align: 'center'
                },
                {
                    title: '总推力(Tonne)',
                    field: 'mark',
                    align: 'center'
                },
                {
                    title: '推进速度(mm/min)',
                    field: 'tuijinsudu',
                    align: 'center'
                },
                {
                    title: '日期',
                    field: 'riqi',
                    align: 'center'
                }
            ]
        ]
    });

    let chart = echarts.init(document.getElementById("chart"));
    let option = {
        /* title: {
             text: '曲线分析',
         },*/
        tooltip: {
            trigger: 'axis',
           /* axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }*/
            //formatter: '{b0}/{b1}<br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}<br />{a4}: {c4}<br />{a5}: {c5}<br />{a6}: {c6}'
        },
        legend: {
            // data: ['刀盘扭矩(KN.M)','土压(bar)','刀盘转速(rpm)','转角(%)','坡度(%)','总推力(Tonne)', '推进速度(mm/min)' ]
            data: [{
                    name: '刀盘扭矩(KN.M)',
                    textStyle: {
                        color: '#c23531'
                    }
                },
                {
                    name: '土压(bar)',
                    textStyle: {
                        color: '#2f4554'
                    }
                },
                {
                    name: '刀盘转速(rpm)',
                    textStyle: {
                        color: '#61a0a8'
                    }
                },
                {
                    name: '转角(%)',
                    textStyle: {
                        color: '#d48265'
                    }
                },
                {
                    name: '坡度(%)',
                    textStyle: {
                        color: '#91c7ae'
                    }
                },
                {
                    name: '总推力(Tonne)',
                    textStyle: {
                        color: '#749f83'
                    }
                },
                {
                    name: '推进速度(mm/min)',
                    textStyle: {
                        color: '#ca8622'
                    }
                }
            ]
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {
                    show: true,
                    type: ['stack', 'tiled']
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['133环', '144环', '164环', '178环', '187环', '192环', '215环']
        },{
            type: 'category',
            position:'bottom',
            offset:30,
            boundaryGap: false,
            data: ['2017-12-12', '2017-12-14', '2017-12-16', '2017-12-18', '2017-12-20', '2017-12-22', '2017-12-24']
        }],
        yAxis: [
            /* {
                type: "value"
            }, */
            {
                // position: "left",
                name: "刀盘扭矩",
                nameLocation: 'end',
                // offset: 120,
                // min: 0,
                // max: 300,
                axisLine: {
                    lineStyle: {
                        color: '#c23531'
                    }
                },
                 axisLabel:{inside:true},
                axisTick:{inside:true}
            },
            {
                position: "left",
                name: "土压",
                nameLocation: 'start',
                offset: 35,
                min: 0,
                max: 3.0,
                axisLine: {
                    lineStyle: {
                        color: '#2f4554'
                    }
                },
                axisLabel:{inside:true},
                axisTick:{inside:true}
            },
            {
                position: "left",
                name: "刀盘转速",
                offset: 60,
                min: 0,
                max: 6.0,
                nameLocation: 'end',
                axisLine: {
                    lineStyle: {
                        color: '#61a0a8'
                    }
                },
                axisLabel:{inside:true},
                axisTick:{inside:true}
            },
            {
                position: "left",
                name: "坡度",
                min: -150,
                max: 150,
                offset:100,
                nameLocation: 'start',
                axisLine: {
                    lineStyle: {
                        color: '#91c7ae'
                    }
                },
                axisLabel:{inside:true},
                axisTick:{inside:true}
            },
            {
                position: "right",
                name: "转角",
                min: 0,
                max: 6,
                nameLocation: 'end',
                axisLine: {
                    lineStyle: {
                        color: '#d48265'
                    }
                },
                axisLabel:{inside:true},
                axisTick:{inside:true}
            },
            {
                position: "right",
                name: "总推力",
                offset: 80,
                min: 0,
                max: 3000,
                nameLocation: 'end',
                axisLine: {
                    lineStyle: {
                        color: '#749f83'
                    }
                },
                axisLabel:{inside:true},
                axisTick:{inside:true}
            },
            {
                position: "right",
                name: "推进速度",
                offset: 40,
                min: 0,
                max: 180,
                nameLocation: 'start',
                axisLine: {
                    lineStyle: {
                        color: '#ca8622'
                    }
                },
                axisLabel:{inside:true},
                axisTick:{inside:true}
            }
        ],
        series: [{
                name: '刀盘扭矩(KN.M)',
                type: 'line',
                smooth: true,
                data: [79, 166, 113, 186, 127, 90, 70]
            },
            {
                name: '土压(bar)',
                type: 'line',
                smooth: true,
                data: [0.23, 1.42, 1.21, 2.56, 0.89, 1.76, 2.89]
            },
            {
                name: '刀盘转速(rpm)',
                type: 'line',
                smooth: true,
                data: [2.5, 3.9, 5.6, 4.5, 3.7, 4.9, 5.8]
            },
            {
                name: '转角(%)',
                type: 'line',
                smooth: true,
                data: [2.5, 3.9, 1.6, 4.5, 3.7, 4.9, 2.8]
            },
            {
                name: '坡度(%)',
                type: 'line',
                smooth: true,
                data: [120, 112, 201, 234, 114, 90, 20]
            },
            {
                name: '总推力(Tonne)',
                type: 'line',
                smooth: true,
                data: [30, 182, 34, 91, 135, 30, 10]
            },
            {
                name: '推进速度(mm/min)',
                type: 'line',
                smooth: true,
                data: [10, 12, 21, 54, 260, 130, 110]
            }
        ]
    };
    chart.setOption(option)
});