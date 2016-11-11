$(function(){
	/********点击事项来源选择有子菜单的显示*********/
	$('.x li').click(function(){
		var idid=$(this).find('input').attr('id');$('tr.hide').each(function(){if($(this).hasClass(idid)){$(this).show();}else{$(this).hide();};});
	});
	$('.y li').click(function(){
		var idid=$(this).find('input').attr('id');
		$('table.hide').each(function(){
			if($(this).hasClass(idid)){
				$(this).show();$('table.hide').not(this).hide();
			}else{$(this).hide();};
		});
	});
	/*********点击事件类型修改矛盾****************/
	// $('.sim-type li').click(function(){
	// 	var txt=$(this).find('label').text();
	// 	$('.sim-typeC .et-s').text(txt);
	// });
	/*************关闭信息提示弹窗***********/
	$('body').click(function(){
		if($('#Validform_msg').css('display')=='block'){
			$('#Validform_msg').hide();
		};
	});
})
/******tab********/
$(function(){
  	$(".tab-d a").each(function(){
        var y=$(".active-tab").attr("name");
        $(this).parents(".tab-h").siblings("div").each(function(){
            if($(this).attr("id")==y){
              	// $(this).show();
                $(this).css('zIndex','9');
            }else{
              	// $(this).hide();
                $(this).css('zIndex','-1');
            }
        });

        $(this).click(function(){
          	$(this).addClass("active-tab");
          	$(this).siblings("a").removeClass("active-tab");
          	var x=$(this).attr("name");
          	$(this).parents(".tab-h").siblings("div").each(function(){
            	if($(this).attr("id")==x){
              		// $(this).show();
                  $(this).css('zIndex','9');
             	}else{
              		// $(this).hide();
                  $(this).css('zIndex','-1');
             	}
          	});
        });
    });
})

/************主要诉求人增减功能**************/
$(function(){
  $('.clonetb').each(function(){
    var thisx=$(this);
    var i=parseInt(thisx.find('.addtd').attr('rowspan'));
    thisx.find('.addclone').click(function(){
      i+=1;
      thisx.find('.addtd').attr('rowspan',i);
      thisx.find('.clonetr:last').after(thisx.find('.clonetr:first').clone(true));
      thisx.find('.clonetr').show();thisx.find('.clonetr:first').hide();
      /*******name********/
      thisx.find('.clonetr:last input').each(function(){
        var namex=$(this).attr('name')+i;
        $(this).attr('name',namex);
      });
    });
    thisx.find('.reduce').click(function(){
      if(i>3){
        i-=1;
        thisx.find('.addtd').attr('rowspan',i);
        thisx.find('.clonetr:last').remove();
      };
    });
  });
});
/************下拉框****************/
$(function(){
	$(".xzs2-1 ul").prepend('<a href="javascript:;"rel="">请选择</a>');
	$("span").not(".xzs2").click(function(){
       	$(".xzs2").children("div").hide(300);
    });
	$(".xzs2").each(function(){
        $(this).on("click", function(e){
            $(this).children("div").toggle(300);
            $(".xzs2").not(this).children("div").hide(300);
            $(document).on("click", function(){
                $(".xzs2-1").hide(300);
            });
                e.stopPropagation();
        });
        $(".xzs2-1").on("click", function(e){
            e.stopPropagation();
        });
    });
});
$(function(){
    $(".xzs2-1 a").each(function(){
        $(this).on('click',function(){
            $(this).parents(".xzs2-1").hide(300);
            $(this).parents(".xzs2").children("b").text($(this).text());
            $(this).addClass("lse");
            $(this).siblings("a").removeClass("lse");
            var e=$(this).attr("rel");
            $(this).parents(".xzs2-1").siblings(".ycint").val(e);
      		$(".xzs2-1 a:contains('请选择')").css({"color":"#999"});
        });
    });
});
$(function(){
  	$(".xzs2").each(function(){
    	var text1=0;
      	$(this).one('click',function(){
        	var text=$(this).children("b").text();
        	text1=text;
      	})
		  $(this).find("a").on('click',function(){
        	if($(this).text()=="请选择"){
          		$(this).parents(".xzs2-1").siblings("b").text(text1);
        	}
    	})
	  });
    $('.xzs2 b').hover(function(){
      var textx=$(this).text();
      $(this).attr('title',textx);
    });
});
/*********弹窗************/
$(function(){
  $('.modeladd').on('click',function(){
    var thisx=$(this);
    $('.model').each(function(){
        var idx=$(this).attr('id');
        if(thisx.hasClass(idx)){
          $('body').append('<div class="shade"></div>');
          $(this).show();
        }else{
          $(this).hide();
          // $('.shade').remove();
        }
    });
  });
  $('.model .close').click(function(){
    $('.model').hide();
    $('.shade').remove();
  });
})
 
/***********发生区域为发生地点赋值*************/ 
$(function(){
  var num0=$('.hparea .xzs2').length-1;var num1=num0-1;
  $('.hparea .xzs2-1 a').click(function(){
    for(var i=0;i<num0;i++){
       if($('.hpaddress span').length>num1){
        break;
       }
       $('.hpaddress').append('<span></span>');
    }
    var texty=$(this).text()+';';
    var num=$(this).parents('.xzs2').index()-1;
    $('.hpaddress span').eq(num).text(texty);
  });
})





$(function(){
  $('input[errormsg],*[datatype]').after('<div class="info"><span class="Validform_checktip">请输入正确的信息</span><span class="dec"><s class="dec1">◆</s><s class="dec2">◆</s></span></div>');
  $.Tipmsg.r=" ";
  $(".formx").Validform({
    ignoreHidden:true,
    datatype:{
      "idcard":function(gets,obj,curform,datatype){
      
        var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];// 加权因子;
        var ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];// 身份证验证位值，10代表X;
      
        if (gets.length == 15) {   
          return isValidityBrithBy15IdCard(gets);   
        }else if (gets.length == 18){   
          var a_idCard = gets.split("");// 得到身份证数组   
          if (isValidityBrithBy18IdCard(gets)&&isTrueValidateCodeBy18IdCard(a_idCard)) {   
            return true;   
          }   
          return false;
        }
        return false;
        
        function isTrueValidateCodeBy18IdCard(a_idCard) {   
          var sum = 0; // 声明加权求和变量   
          if (a_idCard[17].toLowerCase() == 'x') {   
            a_idCard[17] = 10;// 将最后位为x的验证码替换为10方便后续操作   
          }   
          for ( var i = 0; i < 17; i++) {   
            sum += Wi[i] * a_idCard[i];// 加权求和   
          }   
          valCodePosition = sum % 11;// 得到验证码所位置   
          if (a_idCard[17] == ValideCode[valCodePosition]) {   
            return true;   
          }
          return false;   
        }
        
        function isValidityBrithBy18IdCard(idCard18){   
          var year = idCard18.substring(6,10);   
          var month = idCard18.substring(10,12);   
          var day = idCard18.substring(12,14);   
          var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));   
          // 这里用getFullYear()获取年份，避免千年虫问题   
          if(temp_date.getFullYear()!=parseFloat(year) || temp_date.getMonth()!=parseFloat(month)-1 || temp_date.getDate()!=parseFloat(day)){   
            return false;   
          }
          return true;   
        }
        
        function isValidityBrithBy15IdCard(idCard15){   
          var year =  idCard15.substring(6,8);   
          var month = idCard15.substring(8,10);   
          var day = idCard15.substring(10,12);
          var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));   
          // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
          if(temp_date.getYear()!=parseFloat(year) || temp_date.getMonth()!=parseFloat(month)-1 || temp_date.getDate()!=parseFloat(day)){   
            return false;   
          }
          return true;
        }
        
      }
      
    },
    tiptype:function(msg,o,cssctl){
      if(!o.obj.is("form")){
        var objtip=o.obj.parents("td").find(".Validform_checktip");
        cssctl(objtip,o.type);
        objtip.text(msg);
        
        var infoObj=o.obj.parents("td").find(".info");
        o.obj.parents("td").css({'position':'relative'})
        if(o.type==2){
          infoObj.fadeOut(200);
        }else{
          if(infoObj.is(":visible")){return;}
          var left=o.obj.offset().left,
            top=o.obj.offset().top;
  
          infoObj.css({
            // left:left+100,top:top-40
            left:0,top:0
          }).show().animate({
            top:-30 
          },200);
        }
        
      } 
    }
  });
  $('input').blur(function(){
    if($(this).val()==""){$(this).siblings('.info').hide()};
  })
  $('.info').click(function(event) {
    $(this).hide()
  });
})








