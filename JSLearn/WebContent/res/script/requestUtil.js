document.write('<script src="/JSLearn/plugins/layer/layer.js"><\/script>')

function doPost(ajaxUrl,data,onSuccess){
	ajaxRequest = $.ajax({
         type: 'POST', 
         cache: false, 
         dataType: 'json',
         async: false,
         url: ajaxUrl,
         data: data,
         async: false, 
      	 success : function(result){
      		onSuccess(result);
 	   	},
         error: function ()
         {
        	 alert("数据请求异常");
         },
         beforeSend: function ()
         {
//             $.ligerDialog.waitting("正在登陆中,请稍后...");
//             $("#btnLogin").attr("disabled", true);
         },
         complete: function ()
         {
//             $.ligerDialog.closeWaitting();
//             $("#btnLogin").attr("disabled", false);
         }
     });
}

function onSuccess(result){
	if(result.IsError == false){
		alert(result.Message);
	}else{
		alert(result.error_message);
	}
	return true;
}