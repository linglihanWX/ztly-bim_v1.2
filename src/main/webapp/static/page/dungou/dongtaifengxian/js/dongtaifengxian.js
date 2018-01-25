$(function () {
    $(".three-menu li:nth-of-type(2) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(3) a").addClass("active").parent().siblings().children("a").removeClass("active");
    $(".page-nav ul>li").each(function () {
        $(this).click(function () {
            $(this).children("a").addClass("active").end().siblings().children("a").removeClass("active");
        })
    });

    let chartOne = echarts.init(document.getElementById('chart'));
    let option1 = {
        title: {
            text: '横剖面',
            textStyle:{
                fontSize:14
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            x : 'right',
             y : 'bottom',
            data:['黄褐色分土层','砂岩','基岩','淀积层','母质层'],
            itemGap:0,
            textStyle:{
                fontSize:12
            }
        },
        // toolbox: {
        //     show : true,
        //     feature : {
        //         mark : {show: true},
        //         dataView : {show: false, readOnly: false},
        //         restore : {show: true},
        //         saveAsImage : {show: true}
        //     }
        // },

        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['0km','0.5km','1km','1.5km','2km','2.5km','3km']
            }
        ],
        yAxis : [
            {
                type : 'value',
                name: 'm',
            }
        ],
        series : [
            {
                name:'黄褐色分土层',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[12, 13, 10, 13, 9, 23, 21]
            },
            {
                name:'砂岩',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[22, 18, 19, 23, 29, 33, 31]
            },
            {
                name:'基岩',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[15, 23, 20, 15, 19, 33, 41]
            },
            {
                name:'淀积层',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[32, 33, 30, 33, 39, 33, 32]
            },
            {
                name:'母质层',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[82, 93, 90, 93, 129, 133, 132]
            }
        ]
    };
    chartOne.setOption(option1);
});