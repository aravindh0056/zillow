var express = require('express')
  , http = require('http')

var app = express()

var express = require('express');
var app = express();

app.get('/cars', function(req, res){
  var response = { 
          automobiles: [ 
    {"mpg":25, "price":11000, "name":"Subcompact"},
    {"mpg":16, "price":36400, "name":"Sports"},
    {"mpg":25, "price":16500, "name":"Compact"},
    {"mpg":22, "price":72000, "name":"Luxury"}
  ]
} 
  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});

app.listen(3000);


