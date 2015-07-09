var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chatroom-angular')
});

router.get('/chatApp', function(req, res, next) {
  var content;
  var filePath = path.join(__dirname, 'chatApp.js');

  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err){
    console.log('received data: ' + data);
    response.writeHead(200, {'Content-Type': 'application/javascript'});
    response.write(data);
    response.end();
    }else{
        console.log(err);
    }

  });
});


router.get('/chatCtrl', function(req, res, next) {
  var content;
  var filePath = path.join(__dirname, 'chatCtrl.js');

  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err){
    console.log('received data: ' + data);
    response.writeHead(200, {'Content-Type': 'application/javascript'});
    response.write(data);
    response.end();
    }else{
        console.log(err);
    }

  });

});


module.exports = router;
