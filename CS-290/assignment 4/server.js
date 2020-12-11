/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:Mishary Alotaibi
 * Email:alotaimi@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var expressHandle = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3002;
var postData = require('./postData.json');
app.engine('handlebars',expressHandle({ defaultLayout:'main'}));
app.set('view engine','handlebars');
app.use(express.static('public'));
app.get('/', function (req, res, next){
  res.status(200).render('PostPageTemp',{
    Homepage: true,
    POSTS: postData
  });
});
app.get('/posts/:n',function(req,res,next){
  var n = req.params.n;
  if(n >= 0 && n <= 7){
  res.status(200).render('PostPageTemp',{
    Homepage: false,
    POSTS: postData[n]
  });
}
else{
  next();
}
});
app.get('*', function (req, res) {
  // res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  res.status(404).render('404textTemp');
});
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});