/**
 * 
 */
$(function(){
	$(".btn").click(function(){
		var data = $("#form1").serializeArray();
		var ajaxUrl =rootPath + "/bsform/form";
		doPost(ajaxUrl,data,onSuccess);
	})
})