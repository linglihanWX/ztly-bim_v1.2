$(function () {
    let scrWidth = window.screen.width;
    $(".three-menu li:nth-of-type(3) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    if (scrWidth <= 1366) {
        new Swiper ('.swiper-container', {
            direction: 'vertical',
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
        });
    }
    // 三维窗口的大小改变
    $(".main-page").on("click",function () {
        $(".content-top").css({"height":50+"%"});
        $(".content-bottom").show();
    });

    $(".three-page").on("click",function () {
        $(".content-top").css({"height":100+"%"});
        $(".content-bottom").hide();
    });
    $(".nav-show-hide").on("click",function () {
        $(".nav").toggle();
    });

    let infoData = [];
    let dataArr = [0,1,2,3,4,5,6,7,8,9,10,11];
    // 请求信息数据
    $.ajax({
        url:"../../static/page/dungou/fengxian/json/data.json",
        type:"get",
        async:false,
        dataType:'json',
        success:function (data) {
            infoData = data;
            console.log(data)
            
        },error:function (err) {
            console.log(err);
        }
    });


    renderCheckData();
    // 渲染数据
    function renderCheckData() {
        for (let  n = 0; n < 4; n++) {
            for(let i = 0; i < infoData.length; i++){
                if(dataArr[n] == infoData[i].id){
                    let str = '';
                    if(infoData[i].type == 1){
                        str = `<div id="${infoData[i].id}"><p>${infoData[i].name}<i class="iconfont icon-out"></i></p><ul>`;
                    }else if(infoData[i].type == 2){
                        str = `<div id="${infoData[i].id}"><p>${infoData[i].name}<span><input type="checkbox">三维展示</span></p><ul>`;
                    }
                    for (let  j = 0; j < infoData[i].son.length; j++) {
                        str += `<li><span>${infoData[i].son[j].name}:</span><span>${infoData[i].son[j].value}</span></li>`;
                    }
                    str += `</ul></div>`;
                    $(".info-left").append(str);
                }
            }
        }
    }
    for (let  n = 4; n < 10; n++) {
        for(let i = 0; i < infoData.length; i++){
            if(dataArr[n] == infoData[i].id){
                let str = '';
                if(infoData[i].type == 1){
                    str = `<div id="${infoData[i].id}"><p>${infoData[i].name}<i class="iconfont icon-out"></i></p><ul>`;
                }else if(infoData[i].type == 2){
                    str = `<div id="${infoData[i].id}"><p>${infoData[i].name}<span><input type="checkbox">三维展示</span></p><ul>`;
                }
                for (let  j = 0; j < infoData[i].son.length; j++) {
                    str += `<li><span>${infoData[i].son[j].name}:</span><span>${infoData[i].son[j].value}</span></li>`;
                }
                str += `</ul></div>`;
                $(".text-info").append(str);
            }
        }
    }

    let chartOne = echarts.init(document.getElementById('chartOne'));
    let option1 = {
        title: {
            text: '横刨面',
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
            // y : 'bottom',
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

    let chartTwo = echarts.init(document.getElementById('chartTwo'));
    let option2 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid:{
          left:'10%',
            top:'5%',
            bottom:'15%'
        },
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
                // axisLabel: {
                //     inside: true,
                //     formatter: '{value}\n'
                // },
            }
        ],
        series : [
            {
                name:'A',
                type:'line',
                stack: '总量',
                smooth: true,
                data:[12, 13, 10, 13, 9, 23, 21],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#8ec6ad'
                        }, {
                            offset: 1,
                            color: '#ffe'
                        }])
                    }
                }
            },
            {
                name:'B',
                type:'line',
                stack: '总量',
                smooth: true,
                data:[22, 18, 19, 23, 29, 33, 31],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#d68262'
                        }, {
                            offset: 1,
                            color: '#ffe'
                        }])
                    }
                },
            },
            {
                name:'C',
                type:'line',
                stack: '总量',
                smooth: true,
                data:[15, 23, 20, 15, 19, 33, 41],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#8ec6ad'
                        }, {
                            offset: 1,
                            color: '#ffe'
                        }])
                    }
                }
            },
            {
                name:'D',
                type:'line',
                stack: '总量',
                smooth: true,
                data:[32, 33, 30, 33, 39, 33, 32],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#8ec6ad'
                        }, {
                            offset: 1,
                            color: '#ffe'
                        }])
                    }
                }
            },
            {
                name:'E',
                type:'line',
                stack: '总量',
                smooth: true,

                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#8ec6ad'
                        }, {
                            offset: 1,
                            color: '#ffe'
                        }])
                    }
                },
                data:[82, 93, 90, 93, 129, 133, 132]

            }
        ]
    };
    chartTwo.setOption(option2);
//    *****************************************zzw
    
 
    //*****************************************zzw
});