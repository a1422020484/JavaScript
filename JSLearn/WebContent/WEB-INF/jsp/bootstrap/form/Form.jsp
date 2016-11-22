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

<script type="text/javascript" src="${ctx}/js/bootstrap/form/form.js"></script>

<link rel="stylesheet" href="${ctx}/plugins/layer/skin/layer.css">
<script type="text/javascript" src="${ctx}/plugins/layer/layer.js"></script>
<script type="text/javascript" src="${ctx}/res/script/requestUtil.js"></script>
<script type="text/javascript" src="${ctx}/res/script/util.js"></script>
<script type="text/javascript">
	var rootPath="${ctx}";
</script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>表单测试</title>
</head>
<body>
	<form id="form1">
	  <div class="form-group">
	    <label for="name">名称</label>
	    <input type="text" class="form-control" id="name" name="name" placeholder="请输入名称">
	  </div>
	  <div class="form-group">
	    <label for="inputfile">文件输入</label>
	    <input type="file" id="inputfile">
	    <p class="help-block">这里是块级帮助文本的实例。</p>
	  </div>
	  <div class="checkbox">
	    <label>
	      <input type="checkbox">请打勾
	    </label>
	  </div>
	  <input class="btn btn-default" value="提交"/>
	</form>	
</body>
</html>