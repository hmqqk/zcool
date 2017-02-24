// JavaScript Document
//register页面的表单验证工作
$(function() {


	$(".messageDetail").Validform({
		tiptype:3,//3=>side tip(siblings; with default pop)
		beforeSubmit:function(curform){
			//在验证成功后，表单提交前执行的函数，curform参数是当前表单对象。
			//这里明确return false的话表单将不会提交;
			//if enter return
			if(!$('#password').attr('ignore')){
				var value = $('#password').val();
				if(checkPwd.checkItem1(value) == 0){
					$('#password').parent().find(".Validform_checktip").html(checkPwd.msg.msg0).removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong");
					$('#password').removeClass('Validform_error').addClass('Validform_error');
					return false;
				}else if(checkPwd.checkItem2(value) == 0){
					$('#password').parent().find(".Validform_checktip").html(checkPwd.msg.msg1).removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong");
					$('#password').removeClass('Validform_error').addClass('Validform_error');
					return false;
				}else if( checkPwd.checkItem3(value) == 0){
					$('#password').parent().find(".Validform_checktip").html(checkPwd.msg.msg2).removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong");
					$('#password').removeClass('Validform_error').addClass('Validform_error');
					return false;
				}
				if($.Datatype.m.test($('#email').val()) ){
					if($('#phoneCodeInput').val() == ''){
						$('#phoneCodeInput').parent().find(".Validform_checktip").html("请输入验证码").removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong");
						$('#phoneCodeInput').removeClass('Validform_error').addClass('Validform_error');
						return false;
					}
				}
			}
		}
	});

	//TODO 验证密码
	var checkPwd = {
	    /**
	     * str 字符串常量
	     * @private
	     */
	    str: {
	        UPPER : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	        LOWER : "abcdefghijklmnopqrstuvwxyz",
	        NUMBER : "0123456789",
	        CHARACTER : "~`!@#$%^&*()_-+={}[]|;:,<>.?/"
	    },
	    msg: {
	    	msg0 : "请输入6-20个字符",
	    	msg1 : "只能包含大小写字母、数字以及标点符号（除空格）",
	    	msg2 : "大写字母、小写字母、数字和标点符号至少包含2种"
	    },
	    allStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[]|;:,<>.?/",
	    /**
	     * 对应校验条目
	     * @type {Object}
	     */
	    checkItem1: function(value){
	        if(value == ""){
	        	return 0;
	        }else{
	            if(value.length < 6 || value.length > 20){
	            	return 0;
	            }else{
	            	return 1;
	            }
	        }
	    },
	    checkItem2: function(value){
	        if(value == ""){
	        	console.log("");
	        }else{
	            var item2Result = true;
	            for (i = 0; i < value.length; i++) {
	                if (this.allStr.indexOf(value.charAt(i)) < 0) {
	                    item2Result = false;
	                }
	            }
	            if(item2Result){
	            	return 1; 
	            }else{
	            	return 0;
	            }
	        }
	    },
	    checkItem3: function(value){
	        if(value == ""){
	        	return 0;
	        }else{
	            var item3Result = {UPPER:0,LOWER:0,NUMBER:0,CHARACTER:0};
	            for (j in this.str) {
	                var strKey = j;
	                var strValue = this.str[strKey];
	                for (k = 0; k < value.length; k++) {
	                    if (strValue.indexOf(value.charAt(k)) > -1) {
	                        item3Result[strKey] = 1;
	                    }
	                }
	            }
	            if(item3Result.UPPER + item3Result.LOWER + item3Result.NUMBER +item3Result.CHARACTER > 1){
	            	return 1;
	            }else{
	            	return 0;
	            }
	        }
	    },
	    init : function(){
	        var that = this;
	        jQuery('.password').bind('keyup blur',function(event){
	                //if enter return
	        		if(!$('.password').attr('ignore')){
		                var keycode=event.which;
		                if(keycode==13){
		                    return;
		                }
		                var value = jQuery(this).val();
		                $('.passwordStrength').hide();
		                if(that.checkItem1(value) == 0){
		                	$('.password').parent().find(".Validform_checktip").html(that.msg.msg0).removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong");
		                	$('.password').removeClass('Validform_error').addClass('Validform_error');
		                }else if(that.checkItem2(value) == 0){
		                	$('.password').parent().find(".Validform_checktip").html(that.msg.msg1).removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong");
		                	$('.password').removeClass('Validform_error').addClass('Validform_error');
		                }else if( that.checkItem3(value) == 0){
		                	$('.password').parent().find(".Validform_checktip").html(that.msg.msg2).removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong");
		                	$('.password').removeClass('Validform_error').addClass('Validform_error');
		                }else{
		                	$('.password').parent().find(".Validform_checktip").html('').removeClass("Validform_wrong");
		                	$('.password').removeClass('Validform_error');
		                	$pwd.analyzePwd(value,$('.password'));
		                }
	        		}
	            });
	    }
	};
	checkPwd.init();
});