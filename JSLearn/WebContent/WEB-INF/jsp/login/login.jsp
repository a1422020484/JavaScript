<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript" src="${ctx}/res/script/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="${ctx}/plugins/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="${ctx}/plugins/bootstrap/css/bootstrap.min.css">

<script type="text/javascript" src="${ctx}/js/user/login.js"></script>
<script type="text/javascript">

	//登录提示方法
	function loginsubmit() {
		alert('dd');
		$("#loginform").submit();

	}
	
</SCRIPT>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>登录页面</title>
</head>
<body>
	<form id="loginform" action="${ctx}/login" method="post">
		<table>
			<tr>
				<td>用户名：</td>
				<td><input type="text" name="username"></input></td>
			</tr>
			<tr>
				<td>密码：</td>
				<td><input type="password" name="password"></input></td>
			</tr>
			<tr>
				<td>记住我</td>
				<td><input type="checkbox" name="rememberMe" /></td>
			</tr>
			<tr>
				<td>提交</td>
				<!-- <td><input type="button" onclick="loginsubmit()" class=".btn" value="提交" /></td> -->
				<td><input type="submit" value="提交" /></td>
			</tr>
		</table>
	</form>
</body>
</html>