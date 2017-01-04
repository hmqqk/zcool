/**
 * Created by liuhong on 2016/6/30.
 */
$().ready(function() {
    var choosed = $('.choosed').text();
    $('.chooseItems').attr('value', choosed);
    $('.fan').hover(function () {
        $(this).children('.navItems').show();
        $(this).children('a').css('background', '#2D2D2D').css('color', 'white');
        $(this).children('a').children('i').css('border-color', '#8c8c8c #2d2d2d #2d2d2d')
    }, function () {
        $(this).children('.navItems').hide();
        $(this).children('a').css('background', 'url(../images/topBg.png) no-repeat 0 0').css('color', 'black');
        $(this).children('a').children('i').css('border-color', '#8c6000 #ffae00 #ffae00')
    });
    $('.navItems').hover(function () {
        $(this).parent('.fan > a').css('background', '#2D2D2D').css('color', 'white');
        $(this).css('background', '#2D2D2D');
        $(this).siblings('a').children('i').css('border-color', '#8c8c8c #2d2d2d #2d2d2d')
    });
    $('.topHeaderRight input').hover(function () {
        $(this).siblings('.radioItems').show();
    }, function () {
        $(this).siblings('.radioItems').hide();
    });
    $('.radioItems').hover(function () {
        $(this).show();
    }, function () {
        $(this).hide();
    });

    $('.chooseItems').hover(function () {
            $('.items').show();
        },
        function () {
            $('.items').hide();
        });
    $('.items').hover(function () {
            $('.items').show();
            $(this).children('a').hover(function () {
                $(this).css('background', '#FFC000');
            }, function () {
                $(this).css('background', 'white');
            });
        }, function () {
            $('.items').hide();
        }
    );

    var mainLiA = document.querySelectorAll(".main ul.one li a");
    for (var i = 0; i < mainLiA.length; i++) {
        $(mainLiA[i]).hover(function () {
            $(this).css('color', 'white');
        }, function () {
            $(this).css('color', '#AAAAAA');
        });
    }

    var f2A = document.querySelectorAll(".main div p a");
    for (var i = 0; i < f2A.length; i++) {
        $(f2A[i]).hover(function () {
            $(this).css('color', 'white');
        }, function () {
            $(this).css('color', '#AAAAAA');
        });
    }

//index_longBox_effect
    $(function () {
        $(".showBox").slideJ({
            leftBtn: ".lButton",
            rightBtn: ".rButton",
            speed: 800
        });
    });

    $(".doLogin").click(function () {
        return doLogin();
    });
    function doLogin() {
        var username = $.trim($('input[name=user]').val());
        var password = $.trim($('input[name=pass]').val());
        $(".autolog").val();
        if (username.length == 0 || password.length == 0) {
            alert("用户名和密码都必须填写");
            return false;
        }
        var remember = "0";
        if ($(".autolog").prop('checked')) {
            remember = "1";
        }
        $(".doLogin").val("登录中...");
        $(".doLogin").attr("disabled", "true");

        $.ajax({
            url:"http://localhost:5000/loginCheck",
            dataType:'json',
            type:"post",
            data:{username:username,password:password,remember:remember},
            success:function(data) {
                $(SetCookie(userCookieLoginname,data.username));
                window.location.href = "index";
            },
            error:function(data) {
                alert("用户名或密码错误！");
            },
        });

    }

    $(function () {
        $(".voice").hover(function () {
            window.clearTimeout(status_timer);
        }, function () {
            status_timer = window.setTimeout(status_scroll(), 5000);
        });
        status_timer = window.setTimeout(status_scroll(), 1000);
    });


    //var status_timer;
    function status_scroll() {
        $(".voice ul").animate({top: "-46px"}, 1000, function () {
            $(".voice li:first").appendTo(".voice ul");
            $(".voice ul").css("top", "0");
        });
        status_timer = window.setTimeout("status_scroll()", 5000);//轮换速度
    }


    if (getCookie().length <= 0) {
        printUnloginHtml();
    } else {
        printLoginHtml();
    }
    function printUnloginHtml() {
       $(".userMsg").html("<a class=\"login\" href=\"login\">登录</a>"+"&nbsp;| &nbsp;"+"<a class=\"register\" href=\"register\">注册</a>");
    }

    function printLoginHtml() {
        $(".userMsg").html("<ul class=\"userLogin\"><li><a href=\"\" class=\"house\"></a></li><li><a href=\"\" class=\"letter\"></a></li><li><a href=\"javascript:void(0)\" class=\"volume\"></a><ul class=\"hide\"><li><a href=\"\">我的粉丝</a><a href=\"\">@到我的</a><a href=\"\">推荐我的</a><a href=\"\">给我的评论</a><a href=\"\">给我的留言</a><a href=\"\">给我的回复</a><a href=\"\">系统通知</a><a href=\"\">站酷公告</a></li></ul></li><li><a href=\"\" class=\"star\"></a></li><li><a href=\"\" class=\"cloud\"></a><ul class=\"hide\"><li><a href=\"\">发布作品</a><a href=\"\">发表文章</a></li></ul></li><li class=\"vistornest\"><a href=\"\" class=\"visitor\"><img src=\"../images/visitor.gif\"></a><ul class=\"hide\"><li><a href=\"\">"+getCookie()+"</a><a class = \"vis1\" href=\"\">作品管理</a><a class = \"vis2\" href=\"\">我关注的</a><a class = \"vis3\" href=\"\">我的团队</a><a class = \"vis4\" href=\"\">我的简历</a><a class = \"vis5\" href=\"\">账号设置</a><a class=\'vis6 userLogout\' href=\"javascript:void(0);\">退出</a></li></ul></li></ul>")
    }
//用户登录后的用户信息显示
    $('.volume').siblings('ul').find('li a').hover(function(){
        $(this).css('background','#000');
        $(this).parents('ul').siblings('a').addClass('hover');
    },function(){
        $(this).css('background','#3c3c3c');
    });
    $('.cloud').siblings('ul').find('li a').hover(function(){
        $(this).css('background','#000');
    },function(){
        $(this).css('background','#3c3c3c');
    });
    $('.userLogin > li').hover(function(){
        $(this).find("ul").removeClass("hide");
        $(this).find("a").addClass("hover");
    },function(){
        $(this).find("ul").addClass("hide");
        $(this).find("a").removeClass("hover");
    });
    $('.volume').hover(function(){
        $(this).addClass('hover');
    });
    $('.cloud').hover(function(){
        $(this).addClass('hover');
    });
    $('.visitor').hover(function(){
        $(this).addClass('hover');
    });
    $('.userLogin ul').hover(function(){
        $(this).siblings("a").addClass("hover");
    },function(){
        $(this).siblings("a").removeClass("hover");
    });
    //登出操作
    $('.userLogout').click(function(){
        document.cookie="";
        printUnloginHtml();
    });

    //页面右侧部分固定图标显示
    if($(window).height()>760){
        $(".fixedImg").css({
            top:"416px",
            bottom:"auto",
        });
    }else{
        $(".fixedImg").css({
            top:"auto",
            bottom:"125px",
        });
    }

    //根据屏幕宽度定位右侧固定图标的显示情况
    //判断是否宽屏
    var winWide = window.screen.width;
    var wideScreen = false;
    var mainWidth = 1084;
    if(wideScreen){
        mainWidth = 1084;
    }else{
        mainWidth = 1084;
    }

    $(".fixedImg").css({
        "left": ($(window).width() - mainWidth) / 2 + mainWidth
    });

    goTopInit(mainWidth);
    $(window).resize(function(){goTopInit(mainWidth);});
    $(window).scroll(function(){goTopInit(mainWidth);});

    function goTopInit(mainWidth) {
        var winWide = $(window).width();
        if ($(window).scrollTop() == 0) {
            if (!$(".goTop").is(":hidden")) {
                $(".goTop").hide();
            }
        } else {
            if ($(".goTop").is(":hidden")) {
                $(".goTop").show();
            }
        }
        $(".goTop").css({
            "left": (winWide - mainWidth) / 2 + mainWidth
        });
    }

    //register_part
    $('.sure').click(
        function(){
            var flag=true;
            if(flag){
                $.ajax({
                    url : "http://localhost:5000/register",
                    type : "post",
                    dataType : 'json',
                    data:{email:$('.email').val(),name:$('.username').val(),password:$('.password').val(),passwordrepeat:$('.password-repeat').val()},
                    success : function(data) {
                        $(SetCookie(userCookieLoginname,data.username));
                        window.location.href="index"
                    },
                    error : function(){
                        alert("登录未成功，请重新登录！");
                    }
                });
            }
            else
                alert("验证码信息尚未加载完成，请稍后。。。");
        });
});

