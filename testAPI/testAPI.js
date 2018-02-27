var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// post need it .....
app.use(bodyParser.urlencoded({ extended: false }));  

app.post('/login', function (req, res) {
  var name = null;
  for(var i in req.body) {
    name = JSON.parse(i).name;
  }

  // if(name== 1) {
  //   res.end({ "success": 1,"result": {"token": "aabbbcc","userId": 123});
  // }else {
  //   res.end({ "success": 0,"error": {"code": "124","message": "账户密码不正确"});
  // }

  if(name== 1) {
    fs.readFile( __dirname + "/" + "login.json", 'utf8', function (err, data) {
        res.end( data );
    });
  }else {
    fs.readFile( __dirname + "/" + "loginerror.json", 'utf8', function (err, data) {
        res.end( data );
    });
  }
})

app.post('/savecategory',function(req,res){

  res.end(JSON.stringify({
    id:3,
    name:" 我是获取到的分类",
  }))
}) 


app.get('/category',function(req,res){
  fs.readFile(__dirname+'/'+'category.json','utf8',function(err,data){
    res.end(data);
  });
})

app.get('/library',function(req,res){
  fs.readFile(__dirname+'/'+'library.json','utf8',function(err,data){
    res.end(data);
  });
})


app.get('/knowledgepoint',function(req,res){
  fs.readFile(__dirname+'/'+'knowledgepoint.json','utf8',function(err,data){
    res.end(data);
  });
})


app.get('/listUsers/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      res.end( data );
   });
})

app.get('/oauth/token', function (req, res) {
   fs.readFile( __dirname + "/" + "token.json", 'utf8', function (err, data) {
      res.end( data );
   });
})



var server = app.listen(8082, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})