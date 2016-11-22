<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="renderer" content="webkit">
	<title>矛盾纠纷受理登记</title>
	<link href="${ctx}/res/css/ztree/css/reset.css" rel="stylesheet">
    <link href="${ctx}/res/css/ztree/css/event.css" rel="stylesheet">
	<link rel="stylesheet" href="${ctx}/res/css/ztree/css/laydate.css">
	<link rel="stylesheet" href="${ctx}/res/css/ztree/z-tree/css/zTreeStyle/zTreeStyle.css" type="text/css">
    <script src="${ctx}/res/script/jquery-1.8.2.min.js"></script>
    <!-- <script src="z-tree/js/jquery.ztree.all.min.js"></script> -->
    <script src="${ctx}/res/css/ztree/z-tree/js/jquery.ztree.core.min.js"></script>
    <script src="${ctx}/res/css/ztree/z-tree/js/jquery.ztree.excheck.min.js"></script>
	<script src="${ctx}/js/list.js"></script>
    <script src="${ctx}/js/event.js"></script>
    <script src="${ctx}/res/script/requestUtil.js"></script>
    <script src="${ctx}/res/script/util.js"></script>
	<script type="text/javascript" src="${ctx}/js/laydate.dev.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <script type="text/javascript">
    	var rootPath="${ctx}";
    </script>
</head>
<body>
<form action=""class="formx">
	<fieldset>
		<div class="tabpage">
			<h1 class="tab-h">
				<div class="tab-d">
					<a name="tab-b1" class="active-tab">受理登记</a>
					<a name="tab-b2" class="">附件</a>
				</div>
			</h1>
			<div id="tab-b1"class="tabd">
				<div id="mainbody">
					<h3 class="e-h3">矛盾纠纷受理登记</h3>
					<h5 class="e-h5">事件编号: </h5><em></em>
					<div class="e-cont">
						<table class="e-table">
							<tr>
								<td class="e-td1"><span class="et-s Validform_label">受理时间</span><i class="red">*</i></td>
								<td class="e-td2"><input type="text" class="dataint cover"id="data1"datatype="*"></td>
								<td class="e-td1"><span class="et-s">受理人</span></td>
								<td class="e-td2"><span class="name">刘志君</span></td>
								<td class="e-td1"><span class="et-s Validform_label">受理次数</span></td>
								<td class=""><input type="text"class="num cover"value="1"datatype="n"errormsg="请输入数字！"ignore="ignore"></td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s">事项来源</span></td>
								<td class="sim-choose"colspan="5">
									<ul class="chooseul x">
										<li>
											<input type="radio" name="source" id="idx1"checked>
											<label for="idx1">群众来访</label>
										</li>
										<li>
											<input type="radio" name="source" id="idx2">
											<label for="idx2">群众来信</label>
										</li>
										<li>
											<input type="radio" name="source" id="idx3">
											<label for="idx3">群众来电</label>
										</li>
										<li>
											<input type="radio" name="source" id="idx4">
											<label for="idx4">领导批办</label>
										</li>
										<li>
											<input type="radio" name="source" id="idx5">
											<label for="idx5">上级交办</label>
										</li>
										<li>
											<input type="radio" name="source" id="idx6">
											<label for="idx6">部门转来</label>
										</li>
										<li>
											<input type="radio" name="source" id="idx7">
											<label for="idx7">综管排查</label>
										</li>
										<li>
											<input type="radio" name="source" id="idx8">
											<label for="idx8">媒体曝光</label>
										</li>
										<li>
											<input type="radio" name="source" id="idx9">
											<label for="idx9">网络发现</label>
										</li>
										<li>
											<input type="radio" name="source" id="idx10">
											<label for="idx10">其他途径</label>
										</li>
										<li>
											<input type="radio" name="source" id="idx11">
											<label for="idx11">其他排查</label>
										</li>
									</ul>
								</td>
							</tr>
							<tr class="hide idx3">
								<td class="e-td1"><span class="et-s">来电类型</span></td>
								<td class="sim-choose"colspan="5">
									<ul class="chooseul">
										<li>
											<input type="radio" name="tel" id="tel1"checked>
											<label for="tel1">来电登记</label>
										</li>
										<li>
											<input type="radio" name="tel" id="tel2">
											<label for="tel2">区长专线</label>
										</li>
										<li>
											<input type="radio" name="tel" id="tel3">
											<label for="tel3">市长专线</label>
										</li>
									</ul>
								</td>
							</tr>
							<tr class="hide idx5">
								<td class="e-td1"><span class="et-s">交办级别</span></td>
								<td class="sim-choose"colspan="5">
									<ul class="chooseul">
										<li>
											<input type="radio" name="Assigned" id="Assigned1">
											<label for="Assigned1">市交办</label>
										</li>
										<li>
											<input type="radio" name="Assigned" id="Assigned2"checked>
											<label for="Assigned2">区交办</label>
										</li>
										<li>
											<input type="radio" name="Assigned" id="Assigned3">
											<label for="Assigned3">其他</label>
										</li>
									</ul>
								</td>
							</tr>
							<tr class="hide idx8">
								<td class="e-td1"><span class="et-s">媒体级别</span></td>
								<td class="sim-choose"colspan="5">
									<ul class="chooseul">
										<li>
											<input type="radio" name="media" id="media1"checked>
											<label for="media1">中央媒体</label>
										</li>
										<li>
											<input type="radio" name="media" id="media2">
											<label for="media2">省级媒体</label>
										</li>
										<li>
											<input type="radio" name="media" id="media3">
											<label for="media3">市级媒体</label>
										</li>
										<li>
											<input type="radio" name="media" id="media4">
											<label for="media4">其他媒体</label>
										</li>
									</ul>
								</td>
							</tr>
							<tr class="sim-type">
								<td class="e-td1"><span class="et-s">事件类型</span></td>
								<td class="sim-choose"colspan="5">
									<ul class="chooseul">
										<li>
											<input type="radio" name="typex" id="idy1">
											<label for="idy1">家庭邻里</label>
										</li>
										<li>
											<input type="radio" name="typex" id="idy2">
											<label for="idy2">劳动社保</label>
										</li>
										<li>
											<input type="radio" name="typex" id="idy3">
											<label for="idy3">房屋租赁</label>
										</li>
										<li>
											<input type="radio" name="typex" id="idy4">
											<label for="idy4">房地产业</label>
										</li>
										<li>
											<input type="radio" name="typex" id="idy5">
											<label for="idy5">物业管理</label>
										</li>
										<li>
											<input type="radio" name="typex" id="idy6">
											<label for="idy6">行政管理</label>
										</li>
										<li>
											<input type="radio" name="typex" id="idy7">
											<label for="idy7">涉法涉诉</label>
										</li>
										<li>
											<input type="radio" name="typex" id="idy8">
											<label for="idy8">规划建设</label>
										</li>
										<li>
											<input type="radio" name="typex" id="idy9">
											<label for="idy9">村民股份</label>
										</li>
										<li>
											<input type="radio" name="typex" id="idy10">
											<label for="idy10">经济关系</label>
										</li>
										<li>
											<input type="radio" name="typex" id="idy11">
											<label for="idy11">特殊问题</label>
										</li>
										<li>
											<input type="radio" name="typex" id="idy12">
											<label for="idy12">党纪政纪</label>
										</li>
										<li>
											<input type="radio" name="typex" id="idy13"checked>
											<label for="idy13">其他矛盾</label>
										</li>
									</ul>
								</td>
							</tr>
							<tr class="sim-typeC">
								<td class="e-td1"><span class="et-s">事件小类</span></td>
								<td colspan="5">
									<span class="xzs2">
										<b>请选择</b>
										<input type="hidden" class="ycint">
										<div class="xzs2-1">
											<ul></ul>
										</div>
									</span>
								</td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s">诉求目的</span></td>
								<td class="sim-choose"colspan="5">
									<ul class="chooseul">
										<li>
											<input type="radio" name="purpose" id="idz1"checked>
											<label for="idz1">反映建议</label>
										</li>
										<li>
											<input type="radio" name="purpose" id="idz2">
											<label for="idz2">申诉</label>
										</li>
										<li>
											<input type="radio" name="purpose" id="idz3">
											<label for="idz3">求决</label>
										</li>
										<li>
											<input type="radio" name="purpose" id="idz4">
											<label for="idz4">投诉</label>
										</li>
										<li>
											<input type="radio" name="purpose" id="idz5">
											<label for="idz5">其他</label>
										</li>
									</ul>
								</td>
							</tr>
							<tr class="hparea">
								<td class="e-td1"><span class="et-s">发生区域</span><i class="red">*</i></td>
								<td colspan="3">
									<div class="region">
										<span class="xzs2">
											<b>龙岗</b>
											<input type="hidden" class="ycint">
											<!-- <div class="xzs2-1">
												<ul></ul>
											</div> -->
										</span>
										<span class="xzs2">
											<b>请选择</b>
											<input type="hidden" class="ycint">
											<div class="xzs2-1">
												<ul>
													<a href="javascript:;" rel="2">2</a><a href="javascript:;" rel="0">1</a>
												</ul>
											</div>
										</span>
										<span class="xzs2">
											<b>请选择</b>
											<input type="hidden" class="ycint">
											<div class="xzs2-1">
												<ul>
													<a href="javascript:;" rel="2">A</a><a href="javascript:;" rel="0">B</a>
												</ul>
											</div>
										</span>
										<span class="xzs2">
											<b>请选择</b>
											<input type="hidden" class="ycint">
											<div class="xzs2-1">
												<ul>
													<a href="javascript:;" rel="2">yi</a><a href="javascript:;" rel="0">er</a>
												</ul>
											</div>
										</span>
									</div>
								</td>
								<td class="e-td1"><span class="et-s">楼栋编码</span></td>
								<td><input type="text" class="cover"datatype="n"errormsg="请输入数字！"ignore="ignore" ></td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s">地图区域</span><i class="red">*</i></td>
								<td colspan="3"style="position:relative;">
									<input type="text" class="cover"nullmsg="地图区域不能为空" datatype="*"disabled value="x">
									<a href="javascript:;" class="mapa"></a>
								</td>
								<td class="e-td1"><span class="et-s">诉求人数</span></td>
								<td><input type="text" class="cover"datatype="n"errormsg="请输入数字！"ignore="ignore" ></td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s">发生地点</span></td>
								<td colspan="3"class="hpaddress"contentEditable="true">
									<!-- <input type="text" class="cover hpaddress"> -->
								</td>
								<td class="e-td1"><span class="et-s">涉及人数</span></td>
								<td><input type="text" class="cover"datatype="n"errormsg="请输入数字！"ignore="ignore" ></td>
							</tr>
						</table>
						<table class="e-table table1 clonetb">
							<tr class="sptr">
								<td class="e-td1 addtd"rowspan="3"><span class="et-s">被反映对象</span></td>
								<td class="e-tdx">类型</td>
								<td class="e-tdx"style="width:60px;">姓名/<br/>单位名称</td>
								<td class="e-tdx">性别/<br/>经营类型</td>
								<td class="e-tdx"style="width:90px;">年龄/<br/>成立时间</td>
								<td class="e-tdx"style="width:165px;">身份证号码/<br/>组织代码证号</td>
								<td class="e-tdx">地址</td>
								<td class="e-tdx"style="width:100px;">联系电话</td>
							</tr>
							<tr>
								<td class="e-tdx">
									<span class="xzs2">
										<b>个人</b>
										<input type="hidden" class="ycint">
										<div class="xzs2-1">
											<ul>
												<a href="javascript:;"rel="2">男性</a>
												<a href="javascript:;"rel="2">女性</a>
											</ul>
										</div>
									</span>
								</td>
								<td class="e-tdx"><input type="text" class="cover"></td>
								<td class="e-tdx">
									<span class="xzs2">
										<b>请选择</b>
										<input type="hidden" class="ycint">
										<div class="xzs2-1">
											<ul>
												<a href="javascript:;"rel="2">男性</a>
												<a href="javascript:;"rel="2">女性</a>
											</ul>
										</div>
									</span>
								</td>
								<td class="e-tdx"><input type="text" class="cover"value="2016-07-01"></td>
								<td class="e-tdx"><input type="text" class="cover"datatype="idcard"errormsg="您填写的身份证号码不对！"value="41080419941128173X"ignore="ignore" ></td>
								<td class="e-tdx"><input type="text" class="cover"></td>
								<td class="e-tdx"><input type="text" class="cover"datatype="n"errormsg="请输入正确的联系方式！"ignore="ignore" ></td>
							</tr>
							<tr>
								<td class="e-tdx">
									<span class="xzs2">
										<b>个人</b>
										<input type="hidden" class="ycint">
										<div class="xzs2-1">
											<ul>
												<a href="javascript:;"rel="2">男性</a>
												<a href="javascript:;"rel="2">女性</a>
											</ul>
										</div>
									</span>
								</td>
								<td class="e-tdx"><input type="text" class="cover"></td>
								<td class="e-tdx">
									<span class="xzs2">
										<b>请选择</b>
										<input type="hidden" class="ycint">
										<div class="xzs2-1">
											<ul>
												<a href="javascript:;"rel="2">男性</a>
												<a href="javascript:;"rel="2">女性</a>
											</ul>
										</div>
									</span>
								</td>
								<td class="e-tdx"><input type="text" class="cover"></td>
								<td class="e-tdx"><input type="text" class="cover"datatype="idcard"errormsg="您填写的身份证号码不对！"ignore="ignore" nullmsg="bu"></td>
								<td class="e-tdx"><input type="text" class="cover"></td>
								<td class="e-tdx"><input type="text" class="cover"datatype="n"errormsg="请输入正确的联系方式！"ignore="ignore" ></td>
							</tr>
							<!--下列隐藏，为空白tr，禁止编辑，删除-->
							<tr class="clonetr"style="display:none">
								<td class="e-tdx">
									<span class="xzs2">
										<b>个人</b>
										<input type="hidden" class="ycint"name="xxxx">
										<div class="xzs2-1">
											<ul>
												<a href="javascript:;"rel="2">男性</a>
												<a href="javascript:;"rel="2">女性</a>
											</ul>
										</div>
									</span>
								</td>
								<td class="e-tdx"><input type="text" class="cover"name="xxx0"></td>
								<td class="e-tdx">
									<span class="xzs2">
										<b>请选择</b>
										<input type="hidden" class="ycint">
										<div class="xzs2-1">
											<ul>
												<a href="javascript:;"rel="2">男性</a>
												<a href="javascript:;"rel="2">女性</a>
											</ul>
										</div>
									</span>
								</td>
								<td class="e-tdx"><input type="text" class="cover"name="xxx1"></td>
								<td class="e-tdx"><input type="text" class="cover"datatype="idcard"errormsg="您填写的身份证号码不对！"ignore="ignore" name="xxx2"></td>
								<td class="e-tdx"><input type="text" class="cover"name="xxx3"></td>
								<td class="e-tdx"><input type="text" class="cover"datatype="n"errormsg="请输入正确的联系方式！"ignore="ignore" name="xxx4"></td>
							</tr>
							<!--上列隐藏，为空白tr，禁止编辑，删除-->
							<tr>
								<td colspan="8"class="mainclone"style="border:0;">
									<div class="cloned">
										<span class="addclone">+</span>
										<span class="reduce">-</span>
									</div>
								</td>
							</tr>
						</table>
						<table class="e-table table1 clonetb">
							<tr>
								<td class="e-td1 addtd"rowspan="3"><span class="et-s">主要诉求人</span></td>
								<td class="e-tdx"style="width:100px;">姓名</td>
								<td class="e-tdx">性别</td>
								<td class="e-tdx"style="width:33px;">年龄</td>
								<td class="e-tdx"style="width:175px;">身份证号码</td>
								<td class="e-tdx">单位或住址</td>
								<td class="e-tdx">联系电话
								</td>
							</tr>
							<tr>
								<td class="e-tdx"><input type="text" class="cover"></td>
								<td class="e-tdx">
									<span class="xzs2">
										<b>男性</b>
										<input type="hidden" class="ycint">
										<div class="xzs2-1">
											<ul>
												<a href="javascript:;"rel="2">男性</a>
												<a href="javascript:;"rel="2">女性</a>
											</ul>
										</div>
									</span>
								</td>
								<td class="e-tdx"><input type="text" class="cover"datatype="n"errormsg="请输入数字！"ignore="ignore" ></td>
								<td class="e-tdx"><input type="text" class="cover"datatype="idcard"errormsg="您填写的身份证号码不对！"value="41080419941128173X"ignore="ignore" ></td>
								<td class="e-tdx"><input type="text" class="cover"></td>
								<td class="e-tdx"><input type="text" class="cover"datatype="n"errormsg="请输入正确的联系方式！"ignore="ignore" ></td>
							</tr>
							<tr>
								<td class="e-tdx"><input type="text" class="cover"></td>
								<td class="e-tdx">
									<span class="xzs2">
										<b>男性</b>
										<input type="hidden" class="ycint">
										<div class="xzs2-1">
											<ul>
												<a href="javascript:;"rel="2">男性</a>
												<a href="javascript:;"rel="2">女性</a>
											</ul>
										</div>
									</span>
								</td>
								<td class="e-tdx"><input type="text" class="cover"datatype="n"errormsg="请输入数字！"ignore="ignore" ></td>
								<td class="e-tdx"><input type="text" class="cover"datatype="idcard"errormsg="您填写的身份证号码不对！"ignore="ignore" ></td>
								<td class="e-tdx"><input type="text" class="cover"></td>
								<td class="e-tdx"><input type="text" class="cover"datatype="n"errormsg="请输入正确的联系方式！"ignore="ignore" ></td>
							</tr>
							<!--下列隐藏，为空白tr，禁止编辑，删除-->
							<tr class="clonetr"style="display:none">
								<td class="e-tdx"><input type="text" class="cover"name="name"></td>
								<td class="e-tdx">
									<span class="xzs2">
										<b>男性</b>
										<input type="hidden" class="ycint"name="sex">
										<div class="xzs2-1">
											<ul>
												<a href="javascript:;"rel="2">男性</a>
												<a href="javascript:;"rel="2">女性</a>
											</ul>
										</div>
									</span>
								</td>
								<td class="e-tdx"><input type="text" class="cover"datatype="n"errormsg="请输入数字！"name="age"ignore="ignore" ></td>
								<td class="e-tdx"><input type="text" class="cover"datatype="idcard"errormsg="您填写的身份证号码不对！"ignore="ignore" name="s1"></td>
								<td class="e-tdx"><input type="text" class="cover"name="s2"></td>
								<td class="e-tdx"><input type="text" class="cover"datatype="n"errormsg="请输入正确的联系方式！"ignore="ignore" name="s3"></td>
							</tr>
							<!--上列隐藏，为空白tr，禁止编辑，删除-->
							<tr>
								<td class="e-td1"><span class="et-s">共同诉求人</span></td>
								<td colspan="6"class="mainclone"><textarea class="tcover" rows="5"></textarea>
									<div class="cloned">
										<span class="addclone">+</span>
										<span class="reduce">-</span>
									</div>
								</td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s Validform_label">诉求问题及要求</span><i class="red">*</i></td>
								<td colspan="6"><textarea class="tcover" rows="5" datatype="*"></textarea></td>
							</tr>
						</table>
						<table class="e-table">
							<tr>
								<td class="e-td1"><span class="et-s">受理时间</span><i class="red">*</i></td>
								<td class="e-td4">
									<input type="radio" name="yn" id="ida1">
									<label for="ida1">是</label>
									<input type="radio" name="yn" id="ida2"checked>
									<label for="ida2">否</label>
								</td>
								<td class="e-td3"><span class="et-s">	是否出租屋事件</span></td>
								<td class="e-td4">
									<input type="radio" name="yn1" id="ida3">
									<label for="ida3">是</label>
									<input type="radio" name="yn1" id="ida4"checked>
									<label for="ida4">否</label>
								</td>
								<td class="e-td3"><span class="et-s">是否群体性事件</span></td>
								<td class="">
									<input type="radio" name="yn2" id="ida5">
									<label for="ida5">是</label>
									<input type="radio" name="yn2" id="ida6"checked>
									<label for="ida6">否</label>
								</td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s">转来文号</span></td>
								<td class="e-td4">
									<input type="text" class="cover">
								</td>
								<td class="e-td3"><span class="et-s">转来时间</span></td>
								<td class="e-td4">
									<input type="text" class="dataint cover"id="data2">
								</td>
								<td class="e-td3"><span class="et-s">紧急程度</span><i class="red">*</i></td>
								<td class="">
									<span class="xzs2">
										<b>一般</b>
										<input type="hidden" class="ycint">
										<div class="xzs2-1">
											<ul>
												<a href="javascript:;"rel="2">一般</a>
												<a href="javascript:;"rel="2">较急</a>
												<a href="javascript:;"rel="2">特急</a>
												<a href="javascript:;"rel="2">复杂</a>
												<a href="javascript:;"rel="2">领导交办</a>
											</ul>
										</div>
									</span>
								</td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s">预警级别</span><i class="red">*</i></td>
								<td class="e-td4"colspan="3">
									<input type="radio" name="warning" id="idb1"checked>
									<label for="idb1">一级预警</label>
									<input type="radio" name="warning" id="idb2">
									<label for="idb2">二级预警</label>
									<input type="radio" name="warning" id="idb3">
									<label for="idb3">三级预警</label>
								</td>
								<td class="e-td3"><span class="et-s">是否特别疑难件</span></td>
								<td class="">	
									<input type="radio" name="warning1" id="idb4">
									<label for="idb4">是</label>	
									<input type="radio" name="warning1" id="idb5"checked>
									<label for="idb5">否</label>
								</td>
							</tr>
							<tr>
								<td colspan="6">
									<ul class="chooseul y">
										<li>
											<input type="radio" name="warning2" id="idb7">
											<label for="idb7">直接办结</label>
										</li>
										<li>
											<input type="radio" name="warning2" id="idb8"checked>
											<label for="idb8">上报中心</label>
										</li>
										<li>
											<input type="radio" name="warning2" id="idb9">
											<label for="idb9">直接分派</label>
										</li>
									</ul>
								</td>
							</tr>
						</table>
						<table class="e-table hide idb7 table1">
							<tr>
								<td class="e-td1"><span class="et-s Validform_label">办结详情</span><i class="red">*</i></td>
								<td colspan="5"><textarea class="tcover" rows="5"datatype="*"></textarea></td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s Validform_label">责任领导</span><i class="red">*</i></td>
								<td colspan="5"><input type="text" class="cover"datatype="*"></td>
							</tr>
						</table>
						<table class="e-table hide idb9 table1"style="width:799px;">
							<tr>
								<td class="e-td1"><span class="et-s">拟办人</span><i class="red">*</i></td>
								<td class="e-td5"><input type="text" class="cover"value="刘志君"datatype="*"nullmsg="拟办人不能为空"></td>
								<td class="e-td1"><span class="et-s Validform_label">拟办时间</span><i class="red">*</i></td>
								<td><input type="text" class="cover dataint"id="data3"datatype="*"></td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s Validform_label">拟办意见</span><i class="red">*</i></td>
								<td colspan="5"><textarea class="tcover" rows="5"datatype="*"></textarea></td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s Validform_label">责任领导</span><i class="red">*</i></td>
								<td colspan="5"><input type="text" class="cover"datatype="*"></td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s Validform_label">办理期限</span><i class="red">*</i></td>
								<td><input type="text" class="cover dataint"id="data4"datatype="*"></td>
								<td class="e-td1"><span class="et-s">预警时间</span><i class="red">*</i></td>
								<td><input type="text" class="cover dataint"id="data5"datatype="*"nullmsg="请填写预警时间！"></td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s Validform_label">主办单位</span><i class="red">*</i></td>
								<td colspan="5" class="ztreeP"><input type="text" class="cover hostU"datatype="*">
								<div class="btn-get modeladd mod1"><div>
								</td>
							</tr>
							<tr>
								<td class="e-td1"><span class="et-s">协办单位</span></td>
								<td colspan="5" class="ztreeP"><input type="text" class="cover coU">
								<div class="btn-get modeladd mod2"><div>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div id="tab-b2"class="tabd"style="text-align: center;">
				<iframe src="Event_enclosure.html" frameborder="0"width="80%"height="250px"></iframe>
			</div>
		</div>	
	</fieldset>
	<div class="btnd">
		<button class="sub">暂存</button>
		<button type="submit"class="sub">提交</button>
	</div>

	<div class="model" id="mod1">
		<div class="modelcont"style="height: 400px;">
			<div class="tit"><span class="close">×</span></div>
			<form action="" class="formx">
			<div class="z-treed">
				<h1 class="tab-h">
					<div class="tab-d">
						<a name="tab-x1" class="active-tab zzjg" onClick="zzjg()">按区划分类</a>
						<a name="tab-x2" class="jcxx" onClick="jcxx()">按类别分类</a>
					</div>
				</h1>
				<div id="tab-x1" class="tabd modeltab">
					<div class="content_wrap">
						<div class="zTreeDemoBackground left">
							<ul id="zzjg" class="ztree"></ul>
						</div>
					</div>
				</div>
				<div id="tab-x2" class="tabd modeltab">
					<div class="content_wrap">
						<div class="zTreeDemoBackground left">
							<ul id="jcxx" class="ztree"></ul>
						</div>
					</div>
				</div>
			</div>
			</form>
		</div>
	</div>

	<div class="model" id="mod2">
		<div class="modelcont"style="height: 400px;">
			<div class="tit"><span class="close">×</span></div>
			<form action="" class="formx">
			<div class="z-treed">
				<h1 class="tab-h">
					<div class="tab-d">
						<a name="tab-y1" class="active-tab zhzl" onClick="zhzl()">按区划分类</a>
						<a name="tab-y2" class="sjcl" onClick="sjcl()">按类别分类</a>
					</div>
				</h1>
				<div id="tab-y1" class="tabd modeltab">
					<div class="content_wrap">
						<div class="zTreeDemoBackground left">
							<ul id="zhzl" class="ztree"></ul>
						</div>
					</div>
					<div class="btnzrd"><button type="button" class="close btnztree">确定</button></div>
				</div>
				<div id="tab-y2" class="tabd modeltab">
					<div class="content_wrap">
						<div class="zTreeDemoBackground left">
							<ul id="sjcl" class="ztree"></ul>
						</div>
					</div>
					<div class="btnzrd"><button type="button" class="close btnztree">确定</button></div>
				</div>
			</div>
			</form>
		</div>
	</div>

</form>		
<!-- <script>
	laydate({
    	elem: '#data1'
	});
	laydate({
    	elem: '#data2'
	});
	laydate({
    	elem: '#data3'
	});
	laydate({
    	elem: '#data4'
	});
	laydate({
    	elem: '#data5'
	});
</script> -->
</body>
</html>