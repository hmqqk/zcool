var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});

router.post('/register', function(req, res, next) {
  //检验用户两次输入的口令是否一致
  /*
   if(req.body.passwordrepeat!=req.body.password){
   console.log("密码不一致");
   }
   */
  //生成口令的散列
  var  newUser =  new  User({
    name: req.body.name,
    password: req.body.password
  });

  //检查用户名是否已经存在
  User.get(newUser.name,newUser.password, function (err, user) {
    // 如果不存在则新增用户
    newUser.save(function (err) {
      res.send({"username":newUser.name});
    });
  });
});

router.get('/index', function(req, res, next) {
  res.render('index');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/loginCheck', function(req, res, next) {
  User.get(req.body.username,req.body.password, function (err, user) {
    console.log("userwhat:"+user[0].name);
    if (!user){
      res.send("erroring");
    }
    else{
      res.send({"username": req.body.username});
    }
  });
});

router.get('/logout', function(req, res, next) {
  res.render('index');
});

module.exports = router;

 