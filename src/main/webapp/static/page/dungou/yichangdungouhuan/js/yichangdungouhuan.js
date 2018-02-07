$(function(){
    $(".three-menu li:nth-of-type(2) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav ul li:nth-of-type(6) a").addClass("active").parent().siblings().children("a").removeClass("active");
    $(".content-top>ul li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });
    /*构件树*/
    $(".tree-box-title .iconfont").on("click",function () {
        if($(this).hasClass("icon-hidden")){
            $(".tree-box").stop().animate({
                left:-200
            },"fast",function () {
                $(".tree-box-title .iconfont").css({
                    right:-30
                })
            });

        }else{
            $(".tree-box").stop().animate({
                left:0
            },"fast",function () {
                $(".tree-box-title .iconfont").css({
                    right:0
                })
            });

        }
        $(this).toggleClass("icon-hidden icon-show")
    })
    $('#dataOne').tree({
        url: "../../static/page/dungou/yichangdungouhuan/js/tree1.json",
        method:"get",
        idField: "id",
        lines:true
    });



    $('#dataGrid').datagrid({
        url: "../../static/page/dungou/yichangdungouhuan/js/doc.json",
        method:"get",
        striped: true,
        singleSelect: true,
        idField: "id",
        fit:true,
        rownumbers:true,
        // pageList: [10,20,30],
        // pagination:true,
        columns: [[
            { title: '环号', field: 'name', align: 'left'},
            { title: '停机时间（小时）', field: 'time', align: 'center'},
            { title: '出土量（方）', field: 'menName', align: 'center'},
            { title: '注浆量（方）', field: 'content', align: 'center'},
            { title: '土压力（Mpa）', field: 'progress', align: 'center'},
            { title: '海床沉降（mm）', field: 'problem', align: 'center'},
            { title: '姿态', field: 'mark', align: 'center'}
        ]],
        onClickRow:function (index,row) {
        	console.log(index)
            var boundingsphere = getSphereFromBoundsMinMax(imgpos[index].min,imgpos[index].max,pmodel)
            FreedoApp.viewers["earth"].camera.flyToBoundingSphere(boundingsphere,{duration:0,offset: new Freedo.HeadingPitchRange(Freedo.Math.toRadians(60), Freedo.Math.toRadians(0), boundingsphere.radius * 10.0)})

            DungouViewer.highlightmodel(row.shuju)
        	DungouViewer.huoqushujuhuizhishiti(row.shuju);
        },
    });
});