<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript" src="${ctx}/res/script/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="${ctx}/plugins/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="${ctx}/plugins/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="${ctx}/plugins/bootstrap/css/bootstrap-theme.min.css">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>栅格系统</title>
</head>
<body>
	<div class="container">
	<h2>表格</h2>
	<p> .active 类将悬停的颜色应用在行或者单元格上:</p>                                        
	<table class="table">
		<thead>
			<tr>
				<th>#</th>
				<th>Firstname</th>
			</tr>
		</thead>
		<tbody>
			<tr class="active">
				<td>1</td>
				<td>Anna</td>
			</tr>
			<tr class="success">
				<td>2</td>
				<td>Debbie</td>
			</tr>
			<tr>
				<td>3</td>
				<td>John</td>
			</tr>
		</tbody>
	</table>
</div>
</body>
</html>