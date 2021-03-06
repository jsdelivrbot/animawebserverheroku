var express = require('express');
var timesyncServer = require('../server');

var PORT = process.env.PORT || 3000;

// create an express app
var app = express();
app.listen(PORT);
console.log('Server listening at http://localhost:' + PORT);

// serve static pages
app.get('/', express.static(__dirname));
app.get('/index.html', express.static(__dirname));
app.get('/privacy.html', express.static(__dirname));


var publicDir = require('path').join(__dirname);
app.use(express.static(publicDir));
console.log(publicDir);

// handle timesync requests
app.use('/timesync', timesyncServer.requestHandler);
