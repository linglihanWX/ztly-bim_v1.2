	var	data1Array = [];//存放查询数据的数组
	var jsonData=[];
	
//	var getValueByid =getValueByid ||{} ;
$(function(){
    $(".three-menu li:nth-of-type(4) a").addClass("second-active").parent().siblings().children("a").removeClass("second-active");
    $(".page-nav>ul>li:nth-of-type(1) a").addClass("active").parent().siblings().children("a").removeClass("active");
    $(".content-top>ul li:last-of-type input").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("btn-active").siblings().removeClass("btn-active");
        });
    });
    $(".page-nav>ul>li>a").each(function (index, element) {
        $(element).on("click", function () {
            $(this).addClass("active").parent().siblings().children("a").removeClass("active");
        });
    });


    $('#dataOne').tree({
        url: "../../static/page/dungou/baseInformation/json/gongchenginfo.json",
        method:"get",
        idField: "id",
        lines:true,
        onSelect: function(node){  
//        	var dataArray = node;
//        	 dataArray = $('#dataOne').tree('find', node.text);
        	var dataArray = [
        		  {
        		  "id":1,
        		  "bnum":"(DBHC)-01",
        		  "project":"六院-土建-标段",
        		  "type":"沉降",
        		  "threetest":"否",
        		  "testdate":"2017-01-11",
        		  "createdate":"2017-01-08",
        		  "originnum":"31351.4",
        		  "description":"",
        		  "text":"区间一"
        		  },
        		  {
        		    "id":2,
        		    "bnum":"(DBHC)-01",
        		    "project":"六院-土建-标段",
        		    "type":"沉降",
        		    "threetest":"否",
        		    "testdate":"2017-01-12",
        		    "createdate":"2017-01-08",
        		    "originnum":"31521.1",
        		    "description":"",
        		    "text":"区间一"
        		  },
        		  {
        		    "id":3,
        		    "bnum":"(DBHC)-01",
        		    "project":"六院-土建-标段",
        		    "type":"沉降",
        		    "threetest":"否",
        		    "testdate":"2017-01-13",
        		    "createdate":"2017-01-08",
        		    "originnum":"33421.1",
        		    "description":"",
        		    "text":"区间一"
        		  },
        		  {
        		    "id":4,
        		    "bnum":"(DBHC)-03",
        		    "project":"六院-土建-标段",
        		    "type":"拉力",
        		    "threetest":"否",
        		    "testdate":"2017-01-14",
        		    "createdate":"2017-01-08",
        		    "originnum":"31264.3",
        		    "description":"",
        		    "text":"区间一"
        		  },
        		  {
        		    "id":5,
        		    "bnum":"(DBHC)-03",
        		    "project":"六院-土建-标段",
        		    "type":"拉力",
        		    "threetest":"否",
        		    "testdate":"2017-01-15",
        		    "createdate":"2017-01-08",
        		    "originnum":"63461.3",
        		    "description":"",
        		    "text":"区间一"
        		  },
        		  {
        		    "id":6,
        		    "bnum":"(DBHC)-KJK",
        		    "project":"六院-土建-标段",
        		    "type":"位移",
        		    "threetest":"否",
        		    "testdate":"2017-01-16",
        		    "createdate":"2017-01-08",
        		    "originnum":"31561.1",
        		    "description":"",
        		    "text":"区间二"
        		  },
        		  {
          		    "id":7,
          		    "bnum":"(DBHC)-KJK",
          		    "project":"六院-土建-标段",
          		    "type":"位移",
          		    "threetest":"否",
          		    "testdate":"2017-01-16",
          		    "createdate":"2017-01-08",
          		    "originnum":"31561.1",
          		    "description":"",
          		    "text":"区间二"
          		  },
          		  {
            		    "id":8,
            		    "bnum":"(DBHC)-KJK",
            		    "project":"六院-土建-标段",
            		    "type":"位移",
            		    "threetest":"否",
            		    "testdate":"2017-01-16",
            		    "createdate":"2017-01-08",
            		    "originnum":"31561.1",
            		    "description":"",
            		    "text":"区间二"
            	   },
            		     {
                		    "id":9,
                		    "bnum":"(DBHC)-KJK",
                		    "project":"六院-土建-标段",
                		    "type":"位移",
                		    "threetest":"否",
                		    "testdate":"2017-01-16",
                		    "createdate":"2017-01-08",
                		    "originnum":"31561.1",
                		    "description":"",
                		    "text":"区间二"
                		  }
        		]
        	
        	var getValueByid = $('#dataOne').tree('find',node.id);  
        	data1Array=[];
        	for(let i=0;i<dataArray.length;i++){
        		if(dataArray[i].text==getValueByid.text){
        		data1Array.push(dataArray[i])
        		}
        	}
    			$("#dataGrid").datagrid("loadData",{ "total":"2",rows:data1Array});
        }
        
    });
    

    $('#dataGrid').datagrid({
        url: "../../static/page/dungou/baseInformation/json/standardlist.json",
        method:"get",
        striped: true,
        fit:true,
        // singleSelect: true,
        idField: "id",
        // checkbox:true,
        // treeField:'num',
        rownumbers:true,
       // data:columns[],
        // pageList: [10,20,30],
        // pagination:true,
        columns: [[
            {field: 'ck', checkbox:true},
            { title: '编号', field: 'bnum', align: 'center'},
            { title: '所属工程', field: 'project', align: 'center'},
            { title: '检测类型', field: 'type', align: 'center'},
            { title: '第三方检测', field: 'threetest', align: 'center'},
            { title: '检测时间', field: 'testdate', align: 'center'},
            { title: '创建时间', field: 'createdate', align: 'center'},
            { title: '初始值', field: 'originnum', align: 'center'},
            { title: '描述', field: 'description', align: 'center'}
        ]],
         onClickCell:function(row,field){
            if(field == 'level') {
                console.log(1);
            }
        },
        onCheck:function (index,row) {
            console.log(index);
            console.log(row);
            let nodes = $("#dataGrid").datagrid("getChecked");
            restAllEntity();
            setEntity(nodes);
        }

    });

$(".content-bottom>p input").each(function () {
   $(this).click(function () {
       let id = $(this).attr("id");
       $("#"+id + "Box").window('open');
   });
});


    $(".page-nav>ul>li").each(function () {
        $(this).hover(function () {
            $(this).children(".pull-down").stop().slideDown();
        },function () {
            $(this).children(".pull-down").stop().slideUp();
        })
    });

});