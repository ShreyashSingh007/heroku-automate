const phantom = require("phantom");
var express = require('express');
var app = express();
var _ph, _page, _outObj;

app.get('/', function (req, res) {
   res.send('Hello tatti');
})

var server = app.listen(3002, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Server Running at", host, port)
})

phantomCode();

function phantomCode(){
  phantom.create().then(function(ph){
    _ph = ph;
    return _ph.createPage();
}).then(function(page){
    _page = page;
    return _page.open('http://shreyash.tech');
}).then(function(status){
    console.log(status);
    return _page.property('content')
}).then(function(content){
    console.log(content);
    _page.close();
    _ph.exit();
}).catch(function(e){
   console.log(e);
});
}