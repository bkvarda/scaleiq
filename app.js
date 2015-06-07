var express = require('express');
var app = express();
var port = process.env.VCAP_APP_PORT || 3000;
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use('/management', express.static(__dirname + "/public/app/management"));
app.use('/dashboard', express.static(__dirname + "/public/app/dashboard"));
app.use('/chartist', express.static(__dirname + "/node_modules/angular-chartist.js"))
app.use(bodyParser.json());


app.listen(port);
console.log("Server running on " +port);

//==========ROUTER===========
var router = require('./router')(app);

//Error Handling
app.use(function(err, req, res, next){
	res.status(err.status || 500);
});

module.exports = app; 