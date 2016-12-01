<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>

<script type="text/javascript" src="${ctx}/res/script/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="${ctx}/plugins/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="${ctx}/plugins/bootstrap/css/bootstrap.min.css">
<title>欢迎回来</title>

</head>
<body>
	<div class="container">
			<div class="row">
			  <div class="col-xs-6 col-md-4"><a href="${ctx}/bsform/toForm">表单展示form</a></div>
			  <div class="col-xs-6 col-md-4"><a href="${ctx}/bootstrap/toTable">栅格系统</a></div>
			  
			  <div class="col-xs-6 col-md-4"><a href="${ctx}/user/login">登录页面</a></div>
			  <div class="col-xs-6 col-md-4"><a href="${ctx}/bsform/form">待确定</a></div>
			  <div class="col-xs-6 col-md-4"><a href="${ctx}/bsform/form">待确定</a></div>
			  <div class="col-xs-6 col-md-4"><a href="${ctx}/bsform/form">待确定</a></div>
			  <div class="col-xs-6 col-md-4"><a href="${ctx}/bsform/form">待确定</a></div>
			  <div class="col-xs-6 col-md-4"><A id="loginOut" href="${ctx}/logout">退出系统</A></div>
			</div>
	</div>
</body>
</html>