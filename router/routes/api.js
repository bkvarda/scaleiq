var express = require('express');
var router = express.Router();
var systems = require('../../models/systems');
var Sync = require('sync');




// GET /api
router.get('/', function(req, res){
	res.send('Hello');
});




//GET /api/systems - returns list of systems and whether we can log into them
router.get('/systems', function(req, res){
   
   	var system1 = { "ip": "10.4.44.23",
				"id": "11111111111",
				"username": "admin1",
				"password": "Password123456",
				"location": "Studio H",
				"description": "Relman Stuff" };

	var system2 = { "ip": "10.4.44.23",
				"id": "11111111112",
				"username": "admin",
				"password": "Password123",
				"location": "Studio G",
				"description": "Build Stuff" };

	var systemlist = [system1,system2];
	
	
 
	systems.areReachable(systemlist, function(data){
			
			
		console.log(data);
		res.send(data);
			
	});

		

  
});

module.exports = router; 