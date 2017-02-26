var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var session=require('express-session')
var Geetest = require('./models/gt-sdk');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ //提供会话支持
    resave:false,
    saveUninitialized:true,
    secret: "zcool",//这个是session加密需要的，随便写的。
    cookie : {
        cookie : {maxAge:60000 * 20}	//20 minutes
    }
}));
// pc 端接口

var pcGeetest = new Geetest({
    geetest_id: 'a365f2e25a637bbff1c6b649e2e5db0b',
    geetest_key: 'aaf2c284d786f55762a18bd096ce8f0f'
});
app.get("/pc-geetest/register", function (req, res) {

    // 向极验申请每次验证所需的challenge
    pcGeetest.register(function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        if (!data.success) {
            // 进入 failback，如果一直进入此模式，请检查服务器到极验服务器是否可访问
            // 可以通过修改 hosts 把极验服务器 api.geetest.com 指到不可访问的地址

            // 为以防万一，你可以选择以下两种方式之一：

            // 1. 继续使用极验提供的failback备用方案
            res.send(data);

            // 2. 使用自己提供的备用方案
            // todo

        } else {
            // 正常模式
            res.send(data);
        }
    });
});
app.post("/pc-geetest/validate", function (req, res) {

    // 对ajax提供的验证凭证进行二次验证
    pcGeetest.validate({
        challenge: req.body.geetest_challenge,
        validate: req.body.geetest_validate,
        seccode: req.body.geetest_seccode
    }, function (err, success) {

        if (err) {
            // 网络错误
            res.send({
                status: "error",
                info: err
            });
        } else if (!success) {

            // 二次验证失败
            res.send({
                status: "fail",
                info: '登录失败'
            });
        } else {

            res.send({
                status: "success",
                info: '登录成功'
            });
        }
    });
});
app.post("/pc-geetest/form-validate", function (req, res) {

    // 对form表单提供的验证凭证进行验证
    pcGeetest.validate({

        challenge: req.body.geetest_challenge,
        validate: req.body.geetest_validate,
        seccode: req.body.geetest_seccode

    }, function (err, success) {

        if (err) {
            // 网络错误
            res.send(err);

        } else if (!success) {

            // 二次验证失败
            res.send("<h1 style='text-align: center'>登录失败</h1>");

        } else {
            res.send("<h1 style='text-align: center'>登录成功</h1>");
        }

    });
});


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});





//app.dynamicHelpers
app.use(function(req, res, next){
    res.locals.users = req.session.users;
    next();
});


// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        console.log("log1");
        res.render('error2', {
            message: err.message,
            error: err
        });


    });
}
// production error handler
// no stacktraces leaked to user
 app.use(function(err, req, res, next) {
 res.status(err.status || 500);
 console.log("log2");
 res.render('error3', {
 message: err.message,
 error: {}
 });

 });



module.exports = app;
