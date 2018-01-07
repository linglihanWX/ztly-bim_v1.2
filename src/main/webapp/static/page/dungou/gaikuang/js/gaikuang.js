$(function () {
    // Viewer.init("earth");

    $(".bqp").on("click",function () {
        $(".qp").toggleClass("icon-bqp icon-qp");
        $(this).toggleClass("icon-bqp icon-qp");
        $(this).parent().parent().toggleClass("full-screen not-full-screen");
        $(this).parent().parent().siblings("div").toggleClass("full-screen not-full-screen");
    });
    $(".qp").on("click",function () {
        $(".bqp").toggleClass("icon-bqp icon-qp");
        $(this).toggleClass("icon-bqp icon-qp");
        $(this).parent().parent().toggleClass("full-screen not-full-screen");
        $(this).parent().parent().siblings("div").toggleClass("full-screen not-full-screen");
    });

    var chartOne = echarts.init(document.getElementById('chartOne'));
    var option1 = {
        title: {
            text: '对数轴示例',
            left: 'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
            left: 'right',
            data: ['实际投资', '计划投资']
        },
        xAxis: {
            type: 'category',
            name: 'x',
            splitLine: {show: false},
            data: ['2017/09', '2017/10', '2017/11', '2017/12', '2018/01']
        },
        grid: {
            show: true,
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'log',
            name: 'y'
        },
        series: [
            {
                name: '实际投资',
                type: 'line',
                smooth:true,
                data: [1, 3, 5, 7, 4, 2]
            },
            {
                name: '计划投资',
                type: 'line',
                smooth:true,
                data: [1, 5, 3, 4, 7, 6 ]
            },
        ]
    };
    chartOne.setOption(option1);

    var chartTwo = echarts.init(document.getElementById('chartTwo'));
    var option2 = {
        title: {
            text: '进度情况',
            left: 'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}',

        },
        legend: {
            left: 'right',
            data: ['按时', '按期']
        },
        xAxis: {
            type: 'category',
            name: 'x',
            splitLine: {show: false},
            data: ['本月']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'log',
            name: 'y'
        },
        series: [
            {
                name: '按时',
                type: 'bar',
                data: [10],
                barWidth: 30

            },
            {
                name: '按期',
                type: 'bar',
                data: [5],
                barWidth: 30
            },
        ]
    };
    chartTwo.setOption(option2); chartTwo.setOption(option2);

    var chartThree = echarts.init(document.getElementById('chartThree'));
    var option3 = {
        title: {
            text: '检测信息',
            left: 'left'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['质量','安全'],
            left:"right"
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['2017/01','2017/02','2017/03','2017/04','2017/05','2017/06','2017/07','2017/08','2017/09','2017/10','2017/11','2017/12']
            }
        ],
        yAxis : [
            {
                name:'y',
                type : 'value'
            }
        ],
        series : [
            {
                name:'质量',
                type:'bar',
                data:[10, 8, 6, 5, 6, 8,10, 8, 6, 5, 6, 8]
            },
            {
                name:'安全',
                type:'bar',
                data:[5, 9, 14, 6, 8, 5, 5, 9, 14, 6, 8, 5]
            }
        ]
    };
    chartThree.setOption(option3);


    var chartFour = echarts.init(document.getElementById('chartFour'));
    var option4 = {
        title : {
            text: '进度情况',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            // data:['rose1','rose2','rose3','rose4','rose5',]
            data:['业主','PPP','总包','分包']
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
                    {value:10, name:'业主'},
                    {value:5, name:'PPP'},
                    {value:15, name:'总包'},
                    {value:25, name:'分包'},
                    // {value:20, name:'rose5'},
                ]
            }
        ]
    };
    chartFour.setOption(option4);
    
    //初始化地球
    FreedoApp.init("earth1");
});