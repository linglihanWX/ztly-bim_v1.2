$(function () {
    $(".three-menu li:nth-of-type(2) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(3) a").addClass("active").parent().siblings().children("a").removeClass("active");
    $(".page-nav ul>li").each(function () {
        $(this).click(function () {
            $(this).children("a").addClass("active").end().siblings().children("a").removeClass("active");
        })
    });

    let fatherW = $(".top-two").width();
    let fatherH = $(".top-two").height();

    let canvasRect = fatherH > fatherW ? fatherW : fatherH;

    $("#cav").css({
        top: (fatherH - canvasRect) / 2
    });

    axisAndCircle({
        "id":"cav",
        "width":canvasRect,
        "height":canvasRect,
        "x1":20,
        "y1":40,
        "flag1":true,
        "x2":-60,
        "y2":40,
        "flag2":false
    });
    
    function axisAndCircle(option) {
         let canvas = document.getElementById(option.id);
         let avgRect =  option.width / 14;
         canvas.setAttribute("width", option.width);
         canvas.setAttribute("height", option.width);
         let ctx =  canvas.getContext("2d");
         ctx.translate( option.width / 2,  option.width / 2);
         ctx.save();
        drawAxis(ctx,avgRect);
        drawLine(ctx,avgRect);
        drawXAndY(ctx,avgRect);
        drawAxisText(ctx,avgRect);
        drawCircle(ctx,option.x1 * avgRect / 20 ,option.y1 * avgRect / 20,avgRect,option.flag1);
        drawCircle(ctx,option.x2 * avgRect / 20,option.y2 * avgRect / 20,avgRect,option.flag2);
    }


    // 画网格
    function drawAxis (ctx,avgRect) {
        for (let index = -4; index < 5; index++) {
            ctx.restore();
            ctx.strokeStyle = "#BBBBBB";
            ctx.moveTo(- 4 * avgRect, index * avgRect);
            ctx.lineTo(4 * avgRect, index * avgRect);
            ctx.moveTo(-index * avgRect, - 4 * avgRect);
            ctx.lineTo(-index * avgRect,  4 * avgRect);
            ctx.stroke();
        }
    }

    // 画 短的横竖线
    function drawLine (ctx,avgRect) {
        for (let index = -5; index < 6; index++) {
            ctx.restore();
            ctx.strokeStyle = "#ccc";
            ctx.moveTo(-10, index * avgRect);
            ctx.lineTo(10, index * avgRect);
            ctx.moveTo(-index * avgRect, -10);
            ctx.lineTo(-index * avgRect, 10);
            ctx.stroke();
        }
    }

    // 画 X，Y 轴
    function drawXAndY(ctx,avgRect) {
        ctx.strokeStyle = "#595959";
        ctx.moveTo(-6 * avgRect, 0);
        ctx.lineTo(6 * avgRect, 0);
        ctx.moveTo(0, -6 * avgRect);
        ctx.lineTo(0, 6 * avgRect);
        ctx.stroke();
    }

    // 填写字体
    function drawAxisText (ctx,avgRect) {
        ctx.font = "14px Verdana";
        ctx.fillText("-100", 20, 5.1 * avgRect);
        ctx.fillText("100", 20, -4.9 * avgRect);
        ctx.fillText("-100", -5.5 * avgRect, -30);
        ctx.fillText("100", 4.8 * avgRect, -30);
        ctx.fillStyle = 'red';
        ctx.fillText("切口坐标(mm)", 3*avgRect, 6*avgRect);
        ctx.fillStyle = '#147b97';
        ctx.fillText("盾尾坐标(mm)", 3*avgRect, 6.5*avgRect);
    }

    // 画圆
    function drawCircle(ctx,x,y,avgRect,flag) {
        ctx.save();
        ctx.translate(x,y);
        ctx.beginPath();
        ctx.fillStyle = flag ? "red":"#147b97";
        ctx.arc(0, 0, 5, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        ctx.fillStyle = flag ? "red":"#147b97";
        ctx.fillText("(" + x / avgRect * 20 +"," + y / avgRect * 20 + ")", x + 10 ,y + 20 );
        ctx.beginPath();
        ctx.strokeStyle = flag ? "red":"#147b97";
        ctx.arc(0, 0, Math.sqrt( Math.abs(x * x) + Math.abs(y * y)), 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }

});