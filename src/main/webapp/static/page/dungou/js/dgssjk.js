$(function () {

    var timer = null ;

    //FreedoApp.init("earth");

    // canvas画图
    renderDrilling();

    // 画坐标系
    renderTbmDeviation();


    // 三维窗口的大小改变
    $(".changeSize").on("click",function () {
        $(".content-bottom").toggle();
        if($(".content-bottom").css("display") == "block"){
            $(this).attr("src","static/page/dungou/img/sliderDown.png");
            $(".content-middle").stop().animate({
                "height":400
            },"fast");
        }else{
            $(this).attr("src","static/page/dungou/img/sliderUp.png");
            var height = $(".content").height() - 40;
            $(".content-middle").stop().animate({
                "height":height
            },"fast");
        }
    });

    var infoData = [];
    var dataArr = [0,1,2,3,4,5];
    // 请求信息数据
    $.ajax({
        url:"static/page/dungou/json/data.json",
        type:"get",
        async:false,
        dataType:'json',
        success:function (data) {
            infoData = data;
        },error:function (err) {
            console.log(err);
        }
    });


    renderCheckData();
    // 渲染数据
    function renderCheckData() {
        for (var  n = 0; n < dataArr.length; n++) {
            for(var i = 0; i < infoData.length; i++){
                if(dataArr[n] == infoData[i].id){
                    var str = '';
                    if(infoData[i].type == 1){
                        str = `<div id="${infoData[i].id}"><p>${infoData[i].name}<i class="iconfont icon-out"></i></p><ul>`;
                    }else if(infoData[i].type == 2){
                        str = `<div id="${infoData[i].id}"><p>${infoData[i].name}<span><input type="checkbox">三维展示</span></p><ul>`;
                    }
                    for (var  j = 0; j < infoData[i].son.length; j++) {
                        str += `<li><span>${infoData[i].son[j].name}:</span><span>${infoData[i].son[j].value}</span></li>`;
                    }
                    str += `</ul></div>`;
                    $(".info-middle").append(str);
                }
            }
        }
    }


    // 添加勾选的信息栏
    var str1 = "";
    for(var i = 0; i < infoData.length; i++){
        if(i < 6){
            str1 += `<li><input type="checkbox" checked name="" data-id="${infoData[i].id}">${infoData[i].name}</li>`;
        }else{
            str1 += `<li><input type="checkbox" name="" data-id="${infoData[i].id}">${infoData[i].name}</li>`;
        }
    }
    $(".list").append(str1);

    $(".showCheckList").on("click",function () {
       $(".list-box").stop().slideDown();
    });
    $(".close").on("click",function () {
        $(".list-box").stop().slideUp();
    });
    drag("listBox");

    // 勾选改变事件
    $(".list li input").each(function () {
       $(this).change(function () {
           var id = $(this).attr("data-id");
          if( $(this).prop("checked")){
              if(dataArr.length < 6){
                  dataArr.push(id);
                  if($("#" + id).css("display") == "none"){
                      $("#"+id).show();
                  }else{
                      for(var i = 0; i < infoData.length; i++){
                          if(id == infoData[i].id){
                              var str = '';
                              if(infoData[i].type == 1){
                                  str = `<div id="${infoData[i].id}"><p>${infoData[i].name}<i class="iconfont icon-out"></i></p><ul>`;
                              }else if(infoData[i].type == 2){
                                  str = `<div id="${infoData[i].id}"><p>${infoData[i].name}<span><input type="checkbox">三维展示</span></p><ul>`;
                              }
                              for (var  j = 0; j < infoData[i].son.length; j++) {
                                  str += `<li><span>${infoData[i].son[j].name}:</span><span>${infoData[i].son[j].value}</span></li>`;
                              }
                              str += `</ul></div>`;
                              $(".info-middle").append(str);
                          }
                      }
                  }
              }else{
                  alert("最多选6种数据展示!");
                  $(this).prop("checked",false);
                  return false;
              }
          }else{
              for(var i = 0; i < dataArr.length; i++){
                  if(id == dataArr[i]){
                      dataArr.splice(i,1);
                      $("#"+id).hide();
                  }
              }
          }
       })
    });

    /**
     * 重置高度
     */
    function resetHeight() {
        if($(".content-bottom").css("display") == "none"){
            var height = $(".content").height() - 40;
            $(".content-middle").css({"height":height});
        }
    }


    /**
     * 画坐标系
     */
    function renderTbmDeviation() {
        var widthC = $(".info-right").width();
        var heightC = $(".info-right").height() - $(".info-right ul").height() - 30;
        $("#circleCanvas").attr("height",heightC);
        $("#circleCanvas").attr("width",widthC);
        var a=document.getElementById("circleCanvas");
        new TbmDeviation(a);
    }

    /**
     * canvas画图
     */
    function renderDrilling() {
        clearInterval(timer);
        var widthT = $(".info-left").width();

        var heightT = $(".info-left").height() - 30;
        var i = 0;
        timer = setInterval(function () {
            i++;
            var options = {
                id: 1,
                width: widthT,
                height:heightT,
                sumGrouting: '数量100',
                pushSpeed: 100,
                knifeDishSpeed: 10,
                penetration: 10,
                knifeDishTorque: 10,
                sumPush: 1000000,
                thrustHydraulic: 10,
                KN: [i, i, i, i], //参数每秒更新
                mm: [3, 4, 5, 6],
                barRed: [0, 1, 2, 3, 4, 5, 6, 7],
                barBlue: [0, 1, 2, 3, 4, 5, 6, 7],
                m3: [0, 1, 2, 3, 4, 5, 6, 7],
                knifeDirection: '45°',
                knifeRotateTime: 0,
                cvs: document.getElementById('cvs'),
                ctx: document.getElementById('cvs').getContext('2d'),
            };
            canvas.drilling.clear(options);
            canvas.drilling.init(options);
        }, 1000);
    }

    // 窗口改变时，自动变化
    $(window).resize(function(){
        renderDrilling();
        renderTbmDeviation();
        resetHeight();
    });
});