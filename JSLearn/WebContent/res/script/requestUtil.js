var ajaxRequest = null;
var hasSubData = true;
var type = null;
var chooseHtml = " <a href='javascript:;' title='"
	+ "请选择'"
	+ "rel=''>" 
	+" 请选择"
	+ "</a>";

$(function(){
	 //初始化所有下拉框的点击事件，点击获取下拉列表
	 $('.ycint').parents('span').on('hover',function(){
		 type = $(this).find('.ycint').attr('name');
		 var nullul=$(this).find('ul a');
		if(nullul.length==0 || nullul==null){
			getSubType(type);
			 }
		});
	 resetr();
});
function resetr(){
	 var dd = null;
	  var regionTypeEl = $("#regionTypeValue");
	  var areaidEl = $("#areaid");
	  var jdEl = $("#jd");
	  var sqEll = $("#sq");
	 //初始化行政区划选择
	  if(jdEl[0] != null && sqEll[0] != null){
     doPost('/Lgworknet/common/getuserinfo',{dd : 'dd'},function(result){
		 if(result.IsError == true){
			layer.msg(result.error_message,{icon:2});
		}else{
//			 var userInfo = {
//					 userLev : 'shequ',
//					 regionName : '白泥坑社区',
//					 regionCode : '440307001001'
//				 }
			 userInfo = result.Data;
			 var userLev = userInfo.groupLevel;
				 var regionTypeEl = $("#regionTypeValue");
				 var areaidEl = $("#areaid");
				 if(userLev == 1){
					 getSubQH('jiedao',userInfo.regionCode);
//					 $("#jd").unbind("click");
//					 $('#jd').find('b').text(userInfo.regionName);
//					 if(regionTypeEl){
//						 regionTypeEl.val('shequ');	 
//					 }
					 $("#firstField").prev().text('区');
					 $("#firstField").val('qcode');
					 $('#jd').find('b').text('请选择');
					 $('#sq').find('b').text('请选择');
				 }
				 if(userLev == 2){
					 getSubQH('shequ',userInfo.regionCode);
					 $("#jd").unbind("click");
					 $('#jd').find('b').text(userInfo.jdname);
					 $('#sq').find('b').text('请选择');
					 if(regionTypeEl){
						 regionTypeEl.val('shequ');	 
					 }
					 $("#firstField").prev().text('街道');
					 $("#firstField").val('jdcode');
				 }
				 if(userLev == 3){
					 getSubQH('worknet',userInfo.regionCode);
					 $("#jd,#sq").unbind("click");
					 $('#jd').find('b').text(userInfo.jdname);
					 $('#sq').find('b').text(userInfo.shequname);
					 if(regionTypeEl){
						 regionTypeEl.val('worknet');	 
					 };
					 $("#firstField").prev().text('社区');
					 $("#firstField").val('shequcode');
					 
				 }
				 if(areaidEl){
					 areaidEl.val(userInfo.regionCode);	 
				 }
		}
	 })
	 }
}
function doPost(ajaxUrl,data,onSuccess){
	ajaxRequest = $.ajax({
         type: 'post', cache: false, dataType: 'json',
         async: false,
         url: ajaxUrl,
         data: data,
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
//ajax返回数据模板
function doResponse(result){
	if (result.IsError == true) {
		layer.msg(result.error_message,{icon: 2,time: 4000,title:'操作失败'});
	} else {
		layer.msg(result.error_message,{icon: 1,time: 2000,title:'操作成功'});
		loadData();
	}
}

function getSubType(type){
	
	var subUlID = type + "List";
	var subEl = $('#' + type + "Name");

	var subListHtml =" <a href='javascript:;' title='请选择' rel=\"\">"
		+"请选择"
		+ "</a>";
	var ajaxUrl = rootPath + "/common/getSubType"; //获取事件类别和事件小类
	var data = {typecode : type};
	doPost(ajaxUrl,data,function(result) {
				if (result) {
					if (result.IsError == true) {
						alert(result.error_message);
					} else {
						var subQHData = result.Data;
						if (subQHData && subQHData.length > 0) {
							
							for (var i = 0, k = subQHData.length; i < k; i++) {
								var subItem = subQHData[i];
								var typeName = GetObjectValue(subItem.TYPE_NAME);
								var typeCode = GetObjectValue(subItem.TYPE_VALUE);
								subListHtml += "<a href='javascript:;' title='"
									+ typeName
									+ "'rel='"+typeCode +"'>" 
									+ typeName
									+ "</a>";
							}
						}
						$("#" + subUlID).html(subListHtml);
						resetList();
					}
				}
			});
	}

var resetList = function(){
    $(".xzs2-1").each(function(){
          $(this).find('a').click(function(){
            var d=$(this).text();
               $(this).parent("ul").parent("div").hide(300);
               $(this).parent("ul").parent("div").parent("span").children("b").text($(this).text());
               $(this).addClass("lse");
               $(this).siblings("a").removeClass("lse");
               $(this).parent("ul").parent("div").siblings("b").css({"color":"#3B3C4D","font-weight":"normal"})
               var e=$(this).attr("rel");
              $(this).parents(".xzs2-1").siblings(".ycint").val(e);
              $(this).parents(".xzs2-1").siblings("b").text(d);
        $(".xzs2 b:contains('请选择')").css({"color":"#999","font-weight":"normal"})
        $(".xzs2-1 a:contains('请选择')").css({"color":"#999"})
          })
    })
    
    $(".xzs2").click(function(){
  	  $(this).find("a").click(function(){
  		  
  		  var d=$(this).text();
            $(this).parent("ul").parent("div").hide(300);
            $(this).parent("ul").parent("div").parent("span").children("b").text($(this).text());
            $(this).addClass("lse");
            $(this).siblings("a").removeClass("lse");
            $(this).parent("ul").parent("div").siblings("b").css({"color":"#3B3C4D","font-weight":"normal"})
            var e=$(this).attr("rel");
           $(this).parents(".xzs2-1").siblings(".ycint").val(e);
           $(this).parents(".xzs2-1").siblings("b").text(d);
           $(".xzs2 b:contains('请选择')").css({"color":"#999","font-weight":"normal"});
           $(".xzs2-1 a:contains('请选择')").css({"color":"#999"});
  	  })
    })
	$('.xzs2').click(function(){
		var nullul=$(this).find('ul a');
		if(nullul.length==0 || nullul==null){
			$(this).find('.xzs2-1').css({'zIndex':'-9999'});
		}else{
			$(this).find('.xzs2-1').css({'zIndex':'9999'});
		}
	});
};
function getSubQH(qhType,pQhcode){
	if (hasSubData){
	var subUlID = qhType + "List";
	var subEl = $('#' + qhType + "Name");
	if(qhType == 'jiedao'){
		resetSubEvent(qhType, "街道");		
	}else if(qhType == 'shequ'){
		resetSubEvent(qhType, "社区");
	}

	var ajaxUrl = rootPath + "/common/getsubqh"; //获取子行政区划
	var data = {qhType : qhType,pqhcode : pQhcode};
	doPost(ajaxUrl,data,function(result) {
				if (result) {
					if (result.IsError == true) {
						alert(result.error_message);
					} else {
						var subQHData = result.Data;
						if (qhType == "jiedao"){
							qhType = "shequ";
						}else if (qhType == "shequ"){
							qhType = "worknet";
						}else if(qhType == "worknet"){//获得工作网格内楼栋
							qhType = "building";
						}else if(qhType == "building"){//获得工作网格内楼栋
							qhType = "buildingList";
						}
						var subListHtml = "<a href='javascript:;' title='"
							+ "请选择"
							+ "' onclick=\"javascript:changeAreaid(this,'"+ pQhcode +"')\""
							+ ">请选择</a>";
							if (qhType == "buildingList") {
								if (subQHData && subQHData.length > 0) {
									for (var i = 0, k = subQHData.length; i < k; i++) {
										var subItem = subQHData[i];
										var typeName = GetObjectValue(subItem.NAME);
										var typeCode = GetObjectValue(subItem.CODE);
										subListHtml += "<a href='javascript:;' title='"
												+ typeCode
												+ "' onclick=\"javascript:setBuildingcode('"+ typeCode +"','"+typeName+"["+ typeCode +"]" +"')"
												+ ",changeConditions(this,'regionType','"
												+ typeName
												+ "','"
												+ qhType
												+ "_"
												+ typeCode
												+ "')\">"
												//+ subString(typeName, 0, 10)+"["+ typeCode +"]"
												+ typeName+"["+ typeCode +"]"
												+ "</a>";
									}
								}
							} else {
								if (subQHData && subQHData.length > 0) {
									for (var i = 0, k = subQHData.length; i < k; i++) {
										var subItem = subQHData[i];
										var typeName = GetObjectValue(subItem.NAME);
										var typeCode = GetObjectValue(subItem.CODE);
										subListHtml += "<a href='javascript:;' title='"
												+ typeName
												+ "' onclick=\"javascript:changeConditions(this,'regionType','"
												+ typeName
												+ "','"
												+ qhType
												+ "_"
												+ typeCode
												+ "'),changeBNameForarea('"
												+ qhType
												+ "_"
												+ typeCode
												+ "')\">"
												+ subString(typeName, 0, 10)
												+ "</a>";
									}
								}
							}
						$("#" + subUlID).html(subListHtml);
					}
				}
			});
	}
}
//矫正行政区划下拉框
function changeAreaid(here,pQhcode){
	//document.getElementById("areaid").value = pQhcode;
	$('#areaid').val(pQhcode);
	if(pQhcode.length == 9){
		//document.getElementById("areaid").value = pQhcode;
		$(here).parent("ul").parent("div").hide(300);
		$(here).parent("ul").parent("div").parent("span").children("b").text($(here).text());
		$('#areaid').val(pQhcode);
		$('#regionTypeValue').val("shequ");
		//document.getElementById("shequDownList").innerHTML = chooseHtml;
		$('#shequDownList').html(chooseHtml);
		//document.getElementById("worknetDownList").innerHTML = "请选择";
		$('#worknetDownList').html('请选择');
		//document.getElementById("worknetList").innerHTML = chooseHtml;
		$('#worknetList').html(chooseHtml);
		//document.getElementById("buildingDownList").innerHTML = "请选择";
		$('#buildingDownList').html('请选择');
		//document.getElementById("buildingList").innerHTML = chooseHtml;
		$('#buildingList').html(chooseHtml);
	}else if(pQhcode.length == 6){
		$(here).parent("ul").parent("div").hide(300);
		$(here).parent("ul").parent("div").parent("span").children("b").text($(here).text());
		//document.getElementById("shequDownList").innerHTML = "请选择";
		$('#shequDownList').html('请选择');
		$('#regionTypeValue').val("jiedao");
		//document.getElementById("shequList").innerHTML = chooseHtml;
		$('#shequList').html(chooseHtml);
		//document.getElementById("worknetDownList").innerHTML = "请选择";
		$('#worknetDownList').html('请选择');
		//document.getElementById("worknetList").innerHTML = chooseHtml;
		$('#worknetList').html(chooseHtml);
		//document.getElementById("buildingDownList").innerHTML = "请选择";
		$('#buildingDownList').html('请选择');
		//document.getElementById("buildingList").innerHTML = chooseHtml;
		$('#buildingList').html(chooseHtml);
	}else if(pQhcode.length == 12){
		$(here).parent("ul").parent("div").hide(300);
		$(here).parent("ul").parent("div").parent("span").children("b").text($(here).text());
		//document.getElementById("buildingDownList").innerHTML = "请选择";
		$('#regionTypeValue').val("worknet");
		$('#buildingDownList').text('请选择');
		//document.getElementById("buildingList").innerHTML = chooseHtml;
		$('#buildingList').html(chooseHtml);
	}else if(pQhcode.length == 15){
	}
	
}
//设定楼栋编号
function setBuildingcode(buildcode,d){
	$("#buildcode").val(buildcode);
	var ajaxUrl = rootPath + "/baseinfoBuilding/getBuildingGeom";
	var data = {buildcode : buildcode};
	doPost(ajaxUrl,data,function(result) {
		  if (result) {
              if (result.IsError == true) {
                  alert(result.error_message);
              } else {
            	  if(result.Data.length == 0){
            		  $('#place').val($('#jiedaoDownList').text()+$('#shequDownList').text()+$('#worknetDownList').text()+d);
            		  $('#GISP').val("");
                      $('#GISP_X').val("");
                      $('#GISP_Y').val("");
            	  }
                  var pointx = result.Data[0].POINTX;
                  var pointy = result.Data[0].POINTY;
                  $('#GISP').val(pointx+";"+pointy);
                  $('#GISP_X').val(pointx);
                  $('#GISP_Y').val(pointy);
              }
          }
	});
}
function resetSubEvent(subType, defalutName) {
	var subNameEl = $('#' + subType + "Name");
	subNameEl.attr("name",'');
	subNameEl.html(defalutName);
	$('#' + subType + "Value").val("");
	if (subNameEl.hasClass("select-icon")) {
		subNameEl.removeClass("select-icon");
	}
}

function changeBName(data,predomId){
	var dom = $("#suibian").parent().parent().prev().attr("id");
	$("#"+predomId).attr("name",data);
}

function changeBNameForarea(data){
	var shuju = data.split("_");
	if(shuju[0] == 'shequ'){
		$("#jiedaoName").attr("name",shuju[1]);
		//document.getElementById("shequDownList").innerHTML = "请选择";
		$('#shequDownList').html('请选择');
		//document.getElementById("worknetDownList").innerHTML = "请选择";
		$('#worknetDownList').html('请选择');
		//document.getElementById("worknetList").innerHTML = chooseHtml;
		$('#worknetList').html(chooseHtml);
		//document.getElementById("buildingDownList").innerHTML = "请选择";
		$('#buildingDownList').html('请选择');
		//document.getElementById("buildingList").innerHTML = chooseHtml;
		$('#buildingList').html(chooseHtml);
		$('#buildcode').val('');
	}else if(shuju[0] == 'worknet'){
		$("#shequName").attr("name",shuju[1]);
		//document.getElementById("worknetDownList").innerHTML = "请选择";
		$('#worknetDownList').html('请选择');
		//document.getElementById("buildingDownList").innerHTML = "请选择";
		$('#buildingDownList').html('请选择');
		//document.getElementById("buildingList").innerHTML = chooseHtml;
		$('#buildingList').html(chooseHtml);
		$('#buildcode').val('');
	}else if(shuju[0] == 'baseworknet'){
		$("#worknetName").attr("name",shuju[1])
	}else if(shuju[0] == 'building'){
		$("#worknetName").attr("name",shuju[1]);
		//document.getElementById("buildingDownList").innerHTML = "请选择";
		$('#buildingDownList').html('请选择');
		$('#buildcode').val('');
	}else if(shuju[0] == 'erji'){
		// $("#erjiLt a").remove();
		$('#eventsList').html('请选择');
		// $('#erjiLt').html('');
		$('#eventSubList').html('请选择');
		if($('#event').val() == ''){
			$('#erjiLt a').remove();
			$('#sanjiLt a').remove();
		};
	}
}

function changeBNameForareaEvent(data){
	var shuju = data.split("_");
	if(shuju[0] == 'sanji'){
		$('#eventSubList').html('请选择');
	}
}

// function changeConditionsEventReset(this, type, typename, data) {
// 	var Data = data.split("_");
// 	$('#event').val(Data[1]);
// }

function changeConditions(evl,type, name, value){
	pageLoad = true;
	if (value.indexOf("buildingList") < 0) {
		setQhType(type, name, value);
	}
//	getSubQH()
	var d=$(evl).text();
	$(evl).parent("ul").parent("div").hide(300);
                 $(evl).parent("ul").parent("div").parent("span").children("b").text($(evl).text());
                 // $(evl).css({"color":"#6dc5a3"})
                 // $(evl).siblings("a").css({"color":"#666"});
                 $(evl).addClass("lse");
                 $(evl).siblings("a").removeClass("lse");
                // $(evl).parent("ul").parent("div").siblings("b").css({"color":"#6DC5A3","font-weight":"bold"})
                 var e=$(evl).attr("rel")
                // alert(e)
                $(evl).parents(".xzs2-1").siblings(".ycint").val(e);
                $(evl).parents(".xzs2-1").siblings("b").text(d);
      $(".xzs2>b:contains('请选择')").css({"color":"#666","font-weight":"normal"});
      
      	//为发生地赋值！
    	  if(value.indexOf("shequ")>=0){
    		  $('#place').val(name);
    		  $('#GISP').val('');
    	  }else if(value.indexOf("worknet")>=0){
    		  $('#place').val($('#jiedaoDownList').text()+name);
    		  $('#GISP').val('');
    	  }else if(value.indexOf('building_')>=0){
    		  $('#place').val($('#jiedaoDownList').text()+$('#shequDownList').text()+name);
    		  $('#GISP').val('');
    	  }else if(value.indexOf('buildingList')>=0){
    		  $('#place').val($('#jiedaoDownList').text()+$('#shequDownList').text()+$('#worknetDownList').text()+d);
    	  }
}
function setQhType(type, name, value) {
	var el = null;
	if (type.indexOf("region") != -1){
		if (value.indexOf("_") != -1){
			var values = value.split("_");
			$('#' + type + "Value").val(values[0]);
			$('#areaid').val(values[1]);
			
			if (values[0] == "jiedao" || values[0] == "shequ"){
				hasSubData = true;
				el = $("#jiedaoName");
			}else if (values[0] == "worknet"){
				hasSubData = true;
				el = $("#shequName");
			}else if(values[0] == "baseworknet"){
				hasSubData = false;
				el = $("#worknetName");
			}
		}else{
			$('#' + type + "Value").val(value);	
		}
		getSubQH($('#' + type + "Value").val(),$('#areaid').val());
	}else{
		$("#" + type + "Value").val(value);
//		$("#" + type + "Name").val(subString(name,0,5));
		el = $('#' + type + "Name");
	}
} 

//事件信息统计页面，事件联动,对应id，仿照/Lgworknet/WebRoot/WEB-INF/view/basicInformation/event/eventCount.jsp页面
//在页面上定义#eventst and #event 向后台传值
function getEvent(evType, evCode) {
    var subUlID = evType + "Lt";
    var subEl = $('#' + evType + "Name");
    if (evType == 'erji') {
    	changeSubEvent(subUlID,subEl);
    	$('#eventst').val('1');
    } else if (evType == 'sanji') {
    	changeSubEvent(subUlID,subEl);
    	$('#eventst').val('2');
    }
    else if (evType == 'siji') {
    	$('#eventst').val('3');
        return true;

    }
    $('#event').val(evCode);
    var subListHtml = "<a href='javascript:;' title='请选择'"
        + " onclick=\"javascript:changeConditionsEventXuan(this,'regionType','请选择','"
        + evType + "_" + evCode
        + "')\">" + "请选择"
        + "</a>";
    var ajaxUrl = rootPath + "/appanalysis/event/getsubevent"; //获取事件类别和事件小类
    var data = {pValue: evCode};
    doPost(ajaxUrl, data, function (result) {
        if (result) {
            if (result.IsError == true) {
                alert(result.error_message);
            } else {
                var subQHData = result.Data;
                if (evType == "yiji") {
                    evType = "erji";
                }
                if (evType == "sanji") {
                    evType = "siji";
                }
                if (evType == "erji") {
                    evType = "sanji";
                }

                if (subQHData && subQHData.length > 0) {
                    for (var i = 0, k = subQHData.length; i < k; i++) {
                        var subItem = subQHData[i];
                        var typeName = GetObjectValue(subItem.type_name);
                        var typeCode = GetObjectValue(subItem.type_code);
                        subListHtml += "<a href='javascript:;' title='"
                            + typeName
                            + "' onclick=\"javascript:changeConditionsEvent(this,'regionType','"
                            + typeName
                            + "','"
                            + evType + "_" + typeCode
                            + "'),changeBNameForareaEvent('" + evType + "_" + typeCode + "')\">" + subString(typeName, 0, 10)
                            + "</a>";
                    }
                }
                $("#" + subUlID).html(subListHtml);
            }
        }
    });

}
//事件信息统计页面，清空下拉框
function changeSubEvent(subUlID,subEl){
	$("#"+subUlID).html('');
	$(subEl).html('请选择');
}

function changeConditionsEventXuan(evl, type, name, value) {
    pageLoad = true;
    setEvTypeXuan(type, name, value);
    var d = $(evl).text();
    $(evl).parent("ul").parent("div").hide(300);
    $(evl).parent("ul").parent("div").parent("span").children("b").text($(evl).text());
    $(evl).addClass("lse");
    $(evl).siblings("a").removeClass("lse");
    var e = $(evl).attr("rel")
    $(evl).parents(".xzs2-1").siblings(".ycint").val(e);
    $(evl).parents(".xzs2-1").siblings("b").text(d);
}

function changeConditionsEventReset(evl, type, name, value) {
    pageLoad = true;
    var el = null;
    if (type.indexOf("region") != -1) {
        if (value.indexOf("_") != -1) {
            var values = value.split("_");
            $('#event').val('');

            if (values[0] == "erji" || values[0] == "sanji") {
                hasSubData = true;
                el = $("#erjiName");
            }
        } else {
            $('#' + type + "Value").val(value);
        }
    }
    var d = $(evl).text();
    $(evl).parent("ul").parent("div").hide(300);
    $(evl).parent("ul").parent("div").parent("span").children("b").text($(evl).text());
    $(evl).addClass("lse");
    $(evl).siblings("a").removeClass("lse");
    var e = $(evl).attr("rel")
    $(evl).parents(".xzs2-1").siblings(".ycint").val(e);
    $(evl).parents(".xzs2-1").siblings("b").text(d);
}

function changeConditionsEvent(evl, type, name, value) {
    pageLoad = true;
    setEvType(type, name, value);
    var d = $(evl).text();
    $(evl).parent("ul").parent("div").hide(300);
    $(evl).parent("ul").parent("div").parent("span").children("b").text($(evl).text());
    $(evl).addClass("lse");
    $(evl).siblings("a").removeClass("lse");
    var e = $(evl).attr("rel")
    $(evl).parents(".xzs2-1").siblings(".ycint").val(e);
    $(evl).parents(".xzs2-1").siblings("b").text(d);
}


function setEvType(type, name, value) {
    var el = null;
    if (type.indexOf("region") != -1) {
        if (value.indexOf("_") != -1) {
            var values = value.split("_");
            $('#' + type + "Value").val(values[0]);
            $('#event').val(values[1]);
            var st = values[1];
            $('#eventst').val("3");
            if (st.substr(3, 2) == '00') {
                $('#eventst').val("2");
            }
            if (st.substr(1, 4) == '0000') {
                $('#eventst').val("1");
            }
            if (values[0] == "erji" || values[0] == "sanji") {
                hasSubData = true;
                el = $("#erjiName");
            }
        } else {
            $('#' + type + "Value").val(value);
        }
        getEvent($('#' + type + "Value").val(), $('#event').val());
    } else {
        $("#" + type + "Value").val(value);
        el = $('#' + type + "Name");
    }
}

function setEvTypeXuan(type, name, value) {
    var el = null;
    if (type.indexOf("region") != -1) {
        if (value.indexOf("_") != -1) {
            var values = value.split("_");
            $('#' + type + "Value").val(values[0]);
            $('#event').val(values[1]);
            var st = values[1];
            $('#eventst').val("3");
            if (st.substr(3, 2) == '00') {
                $('#eventst').val("2");
            }
            if (st.substr(1, 4) == '0000') {
                $('#eventst').val("1");
            }
            if (values[0] == "erji" || values[0] == "sanji") {
                hasSubData = true;
                el = $("#erjiName");
            }
            if (values[0] == "erji" || values[0] == "sanji") {
                hasSubData = true;
                el = $("#erjiName");
            }
        } else {
            $('#' + type + "Value").val(value);
        }
    } else {
        $("#" + type + "Value").val(value);
        el = $('#' + type + "Name");
    }

}
//事件联动结束
function reSetGirdHide(g){
	if(g != null){
	 $('.xzs2 form input').each(function(){
			if($(this).is(':checked')){
				/* showHideColumn(evl)*/
				var name = $(this).attr('name');
//				g.toggleCol(cloumn, true, false);
				$(g.columns).each(function () {
			        if (this.name && this.name == name) {
			            g.toggleCol(this, true, false);
			            if (this.width == -1) {
			                g.setColumnWidth(this, 100);
			            } 
//			        		g.setColumnWidth(this, -1);
//			            }
			        }
			    });
			};
		});
	}
}

/*表单重置*/
$(function(){
	$('a:contains("重置")').click(function(e){
		e.preventDefault();
		$('.xzs2').not('#jd,#sq').find('.xzs2-1').find('a:contains("请选择")').click();
		var xzs=$('.xzs2').not('#jd,#sq').find('b').not(':contains("龙岗")').text('请选择');
		$('input[type="text"]').val('');
		resetr();
		$('.jgrya .jgrya1').click();
	});
})