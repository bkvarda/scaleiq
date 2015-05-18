var express = require('express');
var router = express.Router();
var rest = require('restler');
var options = {rejectUnauthorized: "false"};



// GET /api
router.get('/', function(req, res){
	res.send('Hello');
});

module.exports = router; 

// GET /api/login/:ip
router.get('/login/:ip', function(req, res){
	
	var ip = req.params.ip;
	var uri = "http://"+ip+"/api/login";
	console.log(ip);
	options.username = "admin";
	options.password = "Password123";

	rest.get(uri, options).on('complete', function(data){

		console.log(data);

		res.send(data);
	});

});