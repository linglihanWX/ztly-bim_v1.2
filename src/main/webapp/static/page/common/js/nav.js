$(function () {
  /* $(".nav-item").each(function () {
      $(this).click(function () {
          if($(this).children(".second-menu").css("display") == "block"){
              $(this).children("a").addClass("nav-item-active").end().siblings().children("a").removeClass("nav-item-active");
              $(this).children(".second-menu").stop().slideUp();
              $(this).children("a").children(".first-arrow").removeClass("rotate")
          }else{
              $(this).children("a").addClass("nav-item-active").end().siblings().children("a").removeClass("nav-item-active");
              $(this).children(".second-menu").stop().slideDown().end().siblings().children(".second-menu").stop().slideUp();
              $(this).children("a").children(".first-arrow").addClass("rotate")
          }
      });
   });*/

    $(".second-menu>li").each(function () {
        $(this).click(function (e) {
            var e = e || window.event;
            e.stopPropagation();
            e.cancelable = true;
            $(".second-menu>li>a").removeClass("nav-item-active");
            $(".second-menu .three-menu").stop().slideUp();
            //$(".second-menu .second-arrow").removeClass("rotate");
            $(this).children("a").children(".second-arrow").toggleClass("rotate");
            if($(this).children(".three-menu").css("display") == "block"){
                $(this).children("a").addClass("nav-item-active").end().siblings().children("a").removeClass("nav-item-active");
                $(this).children(".three-menu").stop().slideUp();
                $(this).children("a").children(".second-arrow").removeClass("rotate");
            }else{
                $(this).children("a").addClass("nav-item-active").end().siblings().children("a").removeClass("nav-item-active");
                $(this).children(".three-menu").stop().slideDown().end().siblings().children(".three-menu").stop().slideUp();
                // $(this).children("a").children(".second-arrow").addClass("rotate");
                $(this).siblings().children("a").children(".second-arrow").removeClass("rotate")
            }
        });
    });


    $(".three-menu>li").each(function () {
        $(this).click(function (e) {
            var e = e || window.event;
            e.stopPropagation();
            e.cancelable = true;
            $(this).children("a").addClass("second-active").end().siblings().children("a").removeClass("second-active");


        });
    });
});