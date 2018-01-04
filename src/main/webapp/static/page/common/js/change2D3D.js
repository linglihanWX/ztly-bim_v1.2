$(function () {
    $("#div1").click(function () {
        if ($("#div1").hasClass("open1")) {
            $("#div1").removeClass("open1").addClass("close1");
            $(".twoThree").html("2D");
            $(".row-fluid .span12").width(100 + "%");
            $(".table,.box-header,#DataTables_Table_0_wrapper .row-fluid").show();
            $(".msgInfo,#tableInfo,.detailInfo,#earth,#tree").hide();
           
        } else {
            $("#div1").removeClass("close1").addClass("open1");
            $(".twoThree").html("3D");
            $(".row-fluid .span12").width(15 + "%");
            $("#tree,#earth").show();
            $(".box-header,#DataTables_Table_0_wrapper .row-fluid,.table").hide();
        }

        if ($("#div2").hasClass("open2")) {
            $("#div2").removeClass("open2").addClass("close2");
        } else {
            $("#div2").removeClass("close2").addClass("open2");
        }
    });
   
});