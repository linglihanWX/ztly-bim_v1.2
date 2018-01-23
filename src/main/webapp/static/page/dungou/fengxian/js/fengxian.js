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
   /* // 三维窗口的大小改变
    $(".main-page").on("click",function () {
        $(".content-top").css({"height":66+"%"});
        $(".content-bottom").show();
    });

    $(".three-page").on("click",function () {
        $(".content-top").css({"height":100+"%"});
        $(".content-bottom").hide();
    });
    $(".nav-show-hide").on("click",function () {
        $(".nav").toggle();
    });*/

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

    let chartOne = echarts.init(document.getElementById('chartOne'));//获取id为charOne对象进行实例化
    let option1 = {//表格样式框架对象
        title: {
            text: '横刨面',//// 图表标题，可以通过show:true/false控制显示与否
            textStyle:{
                fontSize:14
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'//这个是鼠标浮动时的工具条，显示鼠标所在区域的数据
                }
            }
        },
        legend: {
             x : 'right',
            // y : 'bottom',
            //data:[],
            itemGap:0,//这个就是图例，也就是每条折线或者项对应的示例  
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
            //    position:"top",
                data : ['0km','0.5km','1km','1.5km','2km','2.5km','3km']//x轴的数据
       
            }
        ],
        yAxis : [
            {
                type : 'value',//y轴的定义
                name: 'm',
          // type: 'category',
            //	data: ['-80', '-50', '-20','-5','-3','-1','0','10'],
            }
        ],
        series : [],//存放的相关数据
        color:['#005AB5', '#844200', '#5B4B00', '#FF9797','#270000',  '#272727']
    };
  //****************************************************************************************
//加载数据
	    $.ajax({
		url : "../../Zhuankong/zhuanKongDate",
		type : "get",
		// async:false,
		dateType : "json",
		success : function(data) {// 获得后台查询数组数据
			if (data) {
				// var cengNum =[1,2,3,4,5,6,7,8,9];
				for ( var i in data) {// 循环遍历数组中每个对象
					data[i].dcxx = JSON.parse(data[i].dcxx);// 每个对象格式进行解析
				}
				var Cengs = [];// 存放图标数据
				var desNames=[];//存放名字的数组
				var dcshendus=[];
				for ( var i in data[0].dcxx) {// 循环遍历第一钻井中地层信息数据
					var cengData = [];// 定义存放每个钻井地层信息的数据
					for ( var j in data) {
						 dcshendus = data[j].dcxx[i].dcshendu;// 定义土层深度数组
						cengData.push(dcshendus);
						var desName = data[0].dcxx[i].des;// 定义图层描述信息
						desNames.push(desName);
					}
					var ceng = {
						name : desName,
						type : "line",
						stack : "11",
						areaStyle : {
							normal : {}
						},
						label : {
							normal : {// 控制数字的显示
								show : true,
							//	position : 'top'
							}
						},
						data : cengData
					}
					Cengs.push(ceng);
				}
			}
			console.log(Cengs);
			option1.series = Cengs;// 设置图表
			//option1.legend.data=desNames;
			chartOne.setOption(option1);// 重新加载图表
		},
		error : function() {
			alert("数据加载失败！请检查数据链接是否正确");
		}
	});
	    console.log(option1);
  
// **********************************************************************************8
/*            {
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
            }*/
       /* ]*/
  /*  };*/
    

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

});