$(function () {
    $(".three-menu li:nth-of-type(2) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(2) a").addClass("active").parent().siblings().children("a").removeClass("active");

    setSize(".top-one>div",".top-one>div img");
    setSize(".top-two>div",".top-two>div img");
    setSize(".top-three>div",".top-three>div img");
    setSize(".page-bottom-two>div",".page-bottom-two>div img");


    $(".page-nav ul>li").each(function () {
        $(this).click(function () {
            $(this).children("a").addClass("active").end().siblings().children("a").removeClass("active");
        })
    });


    var dataInfo = [];
    $.ajax({
        url:"../../static/page/dungou/daopanjiance/data.json",
        type:"get",
        async:false,
        dataType:"json",
        success:function(data){
            dataInfo = data;
            console.log(data);
        },
        error: function(err){
            console.log(err);
        }
    });

    // 渲染超挖刀的数据
    $(".cwd-info>p:nth-of-type(2)>span:nth-of-type(2)>span").html(dataInfo[0].realVal);
    $(".cwd-info>p:nth-of-type(3)>span:nth-of-type(2)>span").html(dataInfo[0].setVal);

    // 渲染刀盘喷水的数据
    for (let i = 0; i < dataInfo[1].length; i++) {
        $(".top-three>div>p>span:nth-of-type("+(i+1)+") span:first-of-type").html(dataInfo[1][i]);
    }

    // 手动自动的点击
    $(".btnList>div>span").each(function () {
        $(this).click(function () {
            let index = $(this).index();
            $(this).addClass("spanActive").siblings().removeClass("spanActive");
            index == 2?$(".bg").stop().animate({left:40},200):$(".bg").stop().animate({left:2},200);
        });
    });

    // 二维三维切换
    $(".btnChangePattern>span").each(function () {
        $(this).click(function () {
            let index = $(this).index();
            $(this).addClass("spanActive").siblings().removeClass("spanActive");
            if(index == 1){
                $(".bgBtn").stop().animate({left:2},200);
                $("#threeModel").hide();
                $(".content-box").css({width:100+"%"});
                $.each($(".top-three>div>p"),function (i,dom) {
                    $(dom).removeClass("p"+i+"Pos");
                })
            }else if(index == 2){
                $(".bgBtn").stop().animate({left:70},200);
                $("#threeModel").show();
                $(".content-box").css({width:70+"%"});

                $.each($(".top-three>div>p"),function (i,dom) {
                    $(dom).addClass("p"+i+"Pos");
                })
            }
            setSize(".top-one>div",".top-one>div img");
            setSize(".top-two>div",".top-two>div img");
            setSize(".top-three>div",".top-three>div img");
            setSize(".page-bottom-two>div",".page-bottom-two>div img");
            setArcSize(".page-bottom-two>div",".out-box");
            setLineHeight();
        });
    });

    // 自动启动 和 停止的点击
    $(".btnList>button").each(function () {
        $(this).click(function () {
            $(this).addClass("btnActive").siblings().removeClass("btnActive")
        });
    })

    //渲染电机参数
    let str = "";
    for (let i = 0; i < dataInfo[2].length; i++) {
        str += '<li><span>'+dataInfo[2][i][0]+'</span><span><span>'+dataInfo[2][i][1]+'</span><span>Hz</span></span><span><span>'+dataInfo[2][i][2]+'</span><span>Kw</span></span><span><span>'+dataInfo[2][i][3]+'</span><span>A</span></span><span><span>'+dataInfo[2][i][4]+'</span><span>KN.m</span></span></li>'
    }
    $(".data-list-info").append(str);


    /**
     *
     * @param el1   设置大圆的宽高
     * @param el2
     */

    function setArcSize(el1,el2) {
        let width = $(el1).width();
        let height = $(el1).height();
        let size = width >= height? height: width;
        $(el2).css({
            "width":size,
            "height":size,
            "margin-top": -size/2,
            "margin-left":-size/2
        });
    }
    setArcSize(".page-bottom-two>div",".out-box");


    // 旋转
    for (let i = 1; i <= 7; i++) {
        $(".out-box").append('<div class="small-arc"><span>' + i +'</span></div>');
        $(".out-box>div").eq(i).css({
            transform:"rotate("+(360 / 7) * ( i - 1) +"deg)"
        })
    }

    // 设置电机里面的 span 行高
    setLineHeight();
    /**
     * 设置电机里面的 span 行高
     */
    function setLineHeight() {
        $(".small-arc>span").css({
            "line-height":$(".small-arc>span").width() + "px"
        });
    }

    $(".small-arc>span").eq(0).addClass('arcActive');

    //之前旋转过要让文字正过来，旋转 span
    $.each($(".small-arc>span"),function (index,dom) {
        $(dom).css({
            transform: "rotate(" +( -360 / 7 * index) + "deg)"
        });
        $(dom).click(function () {
            $(dom).addClass('arcActive').parent().siblings(".small-arc").children("span").removeClass("arcActive")
        })
    });

    $("#returnPage").on("click",function () {
        window.location.href = '../../ProSystem/dungou/toJiankong';
    });


    $(window).resize(function(){
        setSize(".top-one>div",".top-one>div img");
        setSize(".top-two>div",".top-two>div img");
        setSize(".top-three>div",".top-three>div img");
        setSize(".page-bottom-two>div",".page-bottom-two>div img");
        setArcSize(".page-bottom-two>div",".out-box");
        setLineHeight();
    });
    /**
     * 设置图片代销并居中
     * @param el
     */
    function setSize(el1,el2) {
        let width = $(el1).width();
        let height = $(el1).height();
        let size = width >= height? height: width;
        $(el2).css({
            "width":size,
            "height":size,
            "margin-left": -size / 2,
            "margin-top": -size / 2
        });
    }


    let spanStr = "";
    for (let i = 0; i < 4; i++) {
        spanStr += '<div class="span-click"><div class="span-box"><span data-mao="false"></span><span data-mao="false"></span data-mao="false"><span data-mao="false"></span data-mao="false"><span data-mao="false"></span></div></div>';
        spanStr += '<div class="double-span-click"><div class="double-span-box" id="part'+i+'"><span class="left-span" data-mao="false"></span><span class="left-span" data-mao="false"></span><span class="left-span" data-mao="false"></span><span class="left-span" data-mao="false"></span><span class="right-span" data-mao="false"></span><span class="right-span1" data-mao="false"></span><span class="right-span2" data-mao="false"></span><span class="right-span3" data-mao="false"></span><span class="middle-span1" data-mao="false"></span><span class="middle-span2" data-mao="false"></span><span class="middle-span3" data-mao="false"></span><span class="middle-span4" data-mao="false"></span><span class="middle-span5" data-mao="false"></span><span class="middle-span6" data-mao="false"></span><span class="middle-span7" data-mao="false"></span></div></div>';
        /*spanStr += '<div class="span-click"><div class="span-box"><span></span><span></span><span></span><span></span></div></div>';
        spanStr += '<div class="double-span-click"><div class="double-span-box"><span class="left-span"></span><span class="left-span"></span><span class="left-span"></span><span class="left-span"></span><span class="right-span"></span><span class="right-span1"></span><span class="right-span2"></span><span class="right-span3"></span><span class="middle-span1"></span><span class="middle-span2"></span><span class="middle-span3"></span><span class="middle-span4"></span><span class="middle-span5"></span><span class="middle-span6"></span><span class="middle-span7"></span></div></div>';
*/
    }

    spanStr += '<span class="center-span"></span>';

    $(".top-two>div").append(spanStr);
    $.each($('.span-click'),function (i,dom) {
        $(dom).css({
            "transform":"rotate("+(i * 90)+"deg)"
        })
    });
    $.each($('.double-span-click'),function (i,dom) {
        $(dom).css({
            "transform":"rotate("+(i * 90 + 45)+"deg)"
        })
    });

    $(".top-two>div span").each(function () {
        $(this).click(function () {
            let parentIndex = $(this).parent().parent().index();
            console.log(parentIndex);
            let mathRandom = parseInt(Math.random()*200);

            if($(this).children("div").css("display") == undefined){
                $(this).append('<div>'+mathRandom+'</div>');
            }else{
                if($(this).children("div").css("display") == "none"){
                    $(this).children("div").show();
                }else{
                    $(this).children("div").hide();
                }
            }

            if(parentIndex == 1){
                $(this).children("div").css({
                    // "transform":"rotate("+ -(parentIndex- 1)*45 +"deg)",

                    "transform":"rotate("+ -(parentIndex- 1)*45 +"deg)"
                })
            }else{
                $(this).children("div").css({
                    // "transform":"rotate("+ -(parentIndex- 1)*45 +"deg)",

                    "transform":"rotate("+ -(parentIndex- 2)*45 +"deg)"
                })
            }
           /* $(this).children("div").css({
                // "transform":"rotate("+ -(parentIndex- 1)*45 +"deg)",

                "transform":"rotate("+ -(parentIndex- 2)*45 +"deg)"
            })*/

        });
    });




    let divH = $(".top-two>div").height() + 20;
    let imgH = $(".top-two>div img").height();
    $(".span-click").css({
        "top":(divH - imgH) /2,
        "width":imgH * 0.26,
        "height":imgH * 0.25,
        "margin-left":-imgH * 0.26 / 2
    });

    $(".double-span-click").css({
        "top":(divH - imgH) /2,
        "width":imgH * 0.2,
        "height":imgH * 0.5,
        "margin-left":-imgH * 0.2 / 2
    });
});