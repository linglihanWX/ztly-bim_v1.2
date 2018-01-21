$(function(){
    $(".three-menu li:nth-of-type(6) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".content-top>ul li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });
    $(".content-left ul li span").each(function (index, element) {
        $(element).on("click", function () {
            $(element).index() == 0?$("#dataOne").show().siblings().hide():$("#dataTwo").show().siblings().hide();
            $(element).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });
    $('#dataOne').tree({
        url: "../../static/page/dungou/baobiao/json/tree1.json",
        method:"get",
        idField: "id",
        lines:true
    });
    $('#dataTwo').tree({
        url: "../../static/page/dungou/baobiao/json/tree2.json",
        method:"get",
        idField: "id",
        lines:true
});
/*

$.ajax({
    type: "post",
    url: "./json/doc.json",
    async:false,
    // dataType: "dataType",
    success: function (data) {
        console.log(data);
        let str = '';
        for (let i = 0; i < data.length; i++) {
            str += '<li><span>'+ (i + 1) +'</span><span><input type="checkbox" name="" id="'+data[i].id+'"></span><span>'+data[i].name+'</span><span>'+data[i].time+'</span><span>'+data[i].menName+'</span><span>'+data[i].content+'</span><span>'+data[i].progress+'</span><span><a href="">'+data[i].mark+'</a></span></li>'
        }
        $("#dataGrid ul").append(str);
        console.log(str);
    },
    error:function (err) {
        console.log(err);
    }
});
*/


    $('#dataGrid').datagrid({
        url: "../../static/page/dungou/ziliao/json/doc.json",
        method:"get",
        striped: true,
        singleSelect: true,
        idField: "id",
        rownumbers:true,
        // pageList: [10,20,30],
        // pagination:true,
        columns: [[
            {
                title: ' ', field: 'ck', align: 'center', width: 30, formatter: function (value, row, index) {
                    return '<input type="checkbox" name="DataGridCheckbox">';
                }
            },
            { title: '工程名称', field: 'name', align: 'center'},
            { title: '填报日期', field: 'time', align: 'center'},
            { title: '填报人', field: 'menName', align: 'center'},
            { title: '工作内容', field: 'content', align: 'center'},
            { title: '状况', field: 'progress', align: 'center'},
            { title: '问题及解决方案', field: 'problem', align: 'center'},
            { title: '备注', field: 'mark', align: 'center'}
        ]]
    });
});