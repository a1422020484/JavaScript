$(function(){
	$(".btn").click(function(){
		var data = $("#form1").serializeArray();
		var ajaxUrl =rootPath + "/bsform/form";
		doPost(ajaxUrl,data,onSuccess);
	})
})


//$(document).ready(function(){
//    $('#form1').bind('submit', function(){
//    	var data = $("#form1").serializeArray();
//		var ajaxUrl =rootPath + "/bsform/form";
//		doPost(ajaxUrl,data,onSuccess);
//    });
//});