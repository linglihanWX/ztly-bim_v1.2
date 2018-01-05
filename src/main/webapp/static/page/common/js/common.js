$(function () {
	if($("#moduletype").hasClass("keyan")){
		$("#keyan").addClass("active");
	}else if($("#moduletype").hasClass("sheji")){
		$("#sheji").addClass("active");
	}else if($("#moduletype").hasClass("shigong")){
		$("#shigong").addClass("active");
	}else if($("#moduletype").hasClass("yunwei")){
		$("#yunwei").addClass("active");
	}else if($("#moduletype").hasClass("dungou")){
		$("#dungou").addClass("active");
	}
   
});
var format = function (strTime) {  
	var date = new Date(strTime);
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? '0' + m : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    return y + '-' + m + '-' + d;  
}; 