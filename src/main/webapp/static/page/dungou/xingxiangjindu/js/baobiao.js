$(function(){
    $(".three-menu li:nth-of-type(5) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".content-top>ul:nth-of-type(2) li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });

});