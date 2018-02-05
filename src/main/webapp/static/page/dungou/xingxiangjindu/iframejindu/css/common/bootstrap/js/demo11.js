$(function () {
	var WINDOW_WIDTH = $(document).width()
	var WINDOW_HEIGHT = $(document).height()
	const controlWidth = 100;
	const sliderWidth = 20;

	var tree = {} //创建树形结构对象
	
	tree.data = null; //树结构数据初始化
	tree.ajax = function () { //ajax 请求数据，并进行过滤初始化tree
    $.ajax({
      url: 'css/tree_data.json',
      dataType: "json",
      success(content) {
          resData = content;
          let bufferData = {}; // 缓存数据
          let node = null;
          let parentNode = null;
          for (let i = 0; i < content.length; i++) {
              node = content[i];
              parentNode = bufferData[node.parentId];
              if (parentNode == undefined) { // 如果在树结构数据中不存在父节点则创建一个
                  parentNode = bufferData[node.parentId] = {
                      children: []
                  };
              }
              if (node.leaf == false) {
                  if (bufferData[node.id] == undefined) {
                      node.children = [];
                  } else
                      node.children = bufferData[node.id].children;
                  bufferData[node.id] = node;
              }
              parentNode.children.push(node);
          }
          tree.data = resData[0]
          tree.init(tree.data)  //初始化树形结构

        }
    });
	}
	tree.init = function (data) {  //初始化树形结构
		$('#layer-ctrl').on('click', function() {
			tree.loading = false
			$('.tree-wrapper').height(WINDOW_HEIGHT - 32)
			$('.tree-wrapper').show()
			$('.treegrid-wrapper').hide()
			$('#tree').height(WINDOW_HEIGHT - 32 -20)
			$('#tree').tree({ 
			    data: [data],
			    checkbox: true,

			    onDblClick(row) {
			    	console.log(row)
			    },
			    onBeforeLoad(node, param){ 
			        tree.loading = true; 
			    },
			    onLoadSuccess(node, data){ 
			        tree.loading = false; 
			    }, 
			    onCheck(row){
			    	if(tree.loading){ 
			    			console.log(row)
	    	    }

			    }
			});
		})
		$('.tree-wrapper .fa-close').on('click', function() {
			$('.tree-wrapper').hide()
		})
	}


	var treegrid = {} //创建简单表对象
	treegrid.data = null; //简单表数据初始化
	treegrid.init = function (data) { //初始化简单表
		$('#ways').on('click', function() {alert();
			var _width = WINDOW_WIDTH/15
			$('.treegrid-wrapper').show().width(WINDOW_WIDTH/3-2)

			$('.tree-wrapper').hide()

			$('#treegrid').treegrid({
			    url: 'static/treegrid_data.json', 
			    method: 'get', 
			    idField:'id',
			    // treeField:'text',
			    width: WINDOW_WIDTH / 3,
			    height: WINDOW_HEIGHT -30 -20 -2,
			    columns:[[
					{title:'脚本名称',field:'text',width:_width + 20},
					{title:'脚本描述',field:'dec',width:_width},
					{title:'时长(ms)',field:'time',width:_width - 10},
					{title:'制作人',field:'person',width:_width - 10},
					{title:'日期',field:'dateStr',width:_width}
			    ]],
			    onDblClickRow(row) {
			    	console.log(row)
			    	$('.treegrid-wrapper').hide()
			    },

			});
		})
		$('.treegrid-wrapper .fa-close').on('click', function() {
			$('.treegrid-wrapper').hide()
		})

	}
	// 播放 2D
	treegrid.play = function  () {
	    $('#playNode,.close-play').on('click', () => {  // 点击 关闭播放界面
	       $('.planPlay').toggle()
	      
	    })
	    $('.playOrStop').on('click', () => {  // 点击 暂停 开始
	        $('.playOrStop').toggleClass("icon-start icon-stop"); // 切换图标
	        if ($('.playOrStop').hasClass('icon-start')){
	            console.log('开始播放！')
	           
	        }else{
	            console.log('暂停播放！')
	           
	        }
	    })
	    $('.cutSpeed').on('click', () => {
	        console.log('减速播放！')
	        
	    })
	    $('.addSpeed').on('click', () => {
	        console.log('加速播放！')
	        
	    })
	    $(".slider").mousedown(function (e) {
	        let disY = e.pageY;
	        $(document).mousemove(function (e) {
	            let sliderMarginLeft = $(".planPlay").offset().left + controlWidth + (sliderWidth/2)
	            let disX = e.pageX - sliderMarginLeft;
	            if (disX >= -10 && disX <= 610 ) {
	                $(".slider").css({"left": disX});
	            }
	        });
	        $(document).mouseup(function () {
	            $(document).off('mousedown');
	            $(document).off('mousemove');
	        });
	    });
	}



	tree.ajax()
	treegrid.init()
	treegrid.play()
	

})