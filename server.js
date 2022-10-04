const path = require('path');

var express = require('express');
var app = express();

app.get("/", function(req, res){
    let resText = "I declare that this test is my own work in accordance with Seneca Academic Policy. No part this test has <br>been copied manually or electronically from any other source. ";
    resText += "<a href = '/'> Go to home </a> <br>"; 

    res.sendFile(path.join(__dirname, "test1/pages/test1/.html"));
});

app.get('/test1', function (req, res) {
    
    let resText = "<a href='/test1.html'> Go to test1 </a>";
    res.send(path.join(__dirname, "test1/pages/test1.html"));
});

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("Express http server listening on port", port)
});



