$(function(){

    secondNavClick();
    // nav收缩展开
    $('.nav-item>a').on('click',function(){
        if ($(this).next().css('display') == "none") {
            //展开未展开
            $('.nav-item').children('ul').stop().slideUp(300);
            $(this).next('ul').stop().slideDown(300);
            $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            secondNavClick();
        }else{
            //收缩已展开
            $(this).next('ul').stop().slideUp(300);
            $('.nav-item.nav-show').removeClass('nav-show');
        }
    });


    /**
     * 二级菜单导航点击事件
     */
    function secondNavClick() {
        $(".nav-show>a").siblings("ul").children("li").each(function () {
            $(this).click(function () {
                $(".nav-item ul li>a").removeClass("navLiActive");
                $(this).children("a").addClass("navLiActive").parent().siblings().children("a").removeClass("navLiActive");
            });
        });
    }

});