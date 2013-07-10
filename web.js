#!/usr/bin/env node

var express = require('express');
var fs = require('fs'); // So I can call it later :)


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFile('index.html','utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
