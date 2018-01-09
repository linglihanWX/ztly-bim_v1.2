<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <c:set var="ctx" value="<%=request.getContextPath()%>"></c:set>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>403错误</title>
<style>
	html,body{
	widht:100%;
	height:100%}
</style>
</head>
<body style="background:url('${ctx}/static/page/common/img/error/error403.png') center center; background-repeat:no-repeat">
</body>
</html>