/**
 * Created by liuhong on 2016/7/15.
 */
var  client = require('../database');
var  uid = require('../utils/uuid');//用于生成id
function  User(user) {
    this.name = user.name;
    this.password = user.password;
}
var tableName = "user";
mysql = client.getDbCon();
module.exports = User;
//新增用户 
User.prototype.save = function  save(callback) {
    // 用户对象
    var  user = {
        name: this.name,
        password: this.password
    };
    uuid = uid.v4();
    //插入数据库
    var sql ="insert into user (id,name,password) values(?,?,?)";
    console.log(sql);
    console.log("id:"+uuid+"name:"+user.name+"password:"+user.password);
    
    mysql.query(sql,[uuid,user.name,user.password],function(err,results,fields){
        if (err) {
            throw err;
        } else {
            //返回用户id
            return callback(err, results, fields);
        }
    });
};
//获取用户
User.get =  function  get(username,password, callback) {
    // 读取 users 集合
    var sql = "select id,name,password from user where name='"+username+"' and password='"+password+"'";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log("results"+results[1]);
            callback(err,results,fields);
        }
    })

};