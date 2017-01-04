/**
 * @author xulz (xulizhi@zcool.com.cn)
 * 2015-3-13 First created
 */
(function($) {
	 window.PasswordUtil = {
			 M_STR: {
                UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                LOWER: "abcdefghijklmnopqrstuvwxyz",
                NUMBER: "0123456789",
                CHARACTER: "!@#$%^&*?_~/\\(){}[]<>.-+=|,"
	         },
			 analyzePwd:function(password,obj){
				 var score = this.getScore(password);
				 //修改样式
				 var target =  $(obj).parent().find('.passwordStrength');
				 target.find("span").removeClass("bgStrength");
				 if(score < 25 && score >= 0){
					 target.find("span:first").addClass("bgStrength");
				 }else if(score >=25 && score <= 45){
					 target.find("span:lt(2)").addClass("bgStrength");
				 }else if(score > 45){
					 target.find("span:lt(3)").addClass("bgStrength")
				 }
				 target.show();
			 },
	         getScore:function(password){
	        	var score = 0;
	     		var lenght = password.length;
	     		if(lenght >= 6 && lenght < 9){
	     			score += lenght;
	     		}else if(lenght >= 9 && lenght <= 10){
	     			score += 12;
	     		}else if(lenght > 10){
	     			score += 18;
	     		}
	     		var upper = this.countContain(password, this.M_STR.UPPER);
	     		if(upper > 0) score += 5;
	     		var lower = this.countContain(password, this.M_STR.LOWER);
	     		if(lower > 0) score += 1;
	     		var number = this.countContain(password, this.M_STR.NUMBER);
	     		if(number > 0) score += 5;
	     		if(number > 3) score += 7;
	     		var character = this.countContain(password, this.M_STR.CHARACTER);
	     		if(character > 0){
	     			if(character == 1){
	     				score += 5;
	     			}else{
	     				score += 12;
	     			}
	     		}
	     		if(upper > 0 && lower > 0) score += 2;
	     		if(upper > 0 && lower > 0 && number > 0) score += 3;
	     		if(upper > 0 && lower > 0 && number > 0 && character > 0) score += 3;
	     		return score;
	         },
			 countContain:function(password,m_str){
				var count = 0;
                for (i = 0; i < password.length; i++) m_str.indexOf(password.charAt(i)) > -1 && count++;
	            return count;
			 }
	 };
	 
	// 创建 PassPortUtil 的别名
	window.$pwd = window.PasswordUtil;
})(window.jQuery);