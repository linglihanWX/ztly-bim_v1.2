$(function () {
    $(".three-menu li:nth-of-type(2) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");


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
        success(data){
            dataInfo = data;
            console.log(data);
        },
        error(err){
            console.log(err);
        }
    });

    // 渲染超挖刀的数据
    $(".cwd-info>p:nth-of-type(2)>span:nth-of-type(2)>span").html(dataInfo[0].realVal);
    $(".cwd-info>p:nth-of-type(3)>span:nth-of-type(2)>span").html(dataInfo[0].setVal);

    $(".top-two>div").append("<div class='span-click'>13</div>")


    // 渲染刀盘喷水的数据
    for (let i = 0; i < dataInfo[1].length; i++) {
        $(".top-three>div>p>span:nth-of-type("+(i+1)+") span:first-of-type").html(dataInfo[1][i]);
    }

    // 手动自动的点击
    $(".btnList>div>span").each(function () {
        $(this).click(function () {
            let index = $(this).index();
            $(this).addClass("spanActive").siblings().removeClass("spanActive");
            index == 2?$(".bg").stop().animate({left:50},200):$(".bg").stop().animate({left:2},200);
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
                $(".content-box").css({
                    width:100+"%"
                });
            }else if(index == 2){
                $(".bgBtn").stop().animate({left:70},200);
                $("#threeModel").show();
                $(".content-box").css({
                    width:70+"%"
                });
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
        str += `<li>
                    <span>${dataInfo[2][i][0]}</span>
                    <span><span>${dataInfo[2][i][1]}</span><span>Hz</span></span>
                    <span><span>${dataInfo[2][i][2]}</span><span>Kw</span></span>
                    <span><span>${dataInfo[2][i][3]}</span><span>A</span></span>
                    <span><span>${dataInfo[2][i][4]}</span><span>KN.m</span></span>
                </li>`
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
        $(".out-box").append(`<div class="small-arc"><span>${i}</span></div>`);
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
});