// DEPENDENCIES 
const houndify = require('houndify');
const express = require('express');
const http = require('http');
const config = require('./config');

// Create Express web app
const app = express();

// Create an HTTP server and listen on the configured port
var server = http.createServer(app);
server.listen(config.port, function() {
    console.log('Express server listening on *:' + config.port);
});

var houndifyExpress = require('houndify').HoundifyExpress;

//authenticates requests
app.get('/houndifyAuth', houndifyExpress.createAuthenticationHandler({ 
  clientId:  "YOUR_CLIENT_ID",
  clientKey: "YOUR_CLIENT_KEY"
}));

//proxies text requests
app.post('/textSearchProxy', houndifyExpress.createTextProxyHandler());