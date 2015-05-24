var express = require('express');
var router = express.Router();
var systems = require('../../models/systems');
var rest = require('restler');



// GET /api
router.get('/', function(req, res){
	res.send('Hello');
});

//GET /api/system/verify/:id
router.get('/system/verify/:id', function(req, res){
	console.log("hello");
	var id = req.params.id;
	res.send(systems.verify(id));

});



//GET /api/systems - returns list of systems and whether we can log into them
router.get('/systems', function(req, res){
   
	systems.getSystems(function(systemlist){
		systems.verify(systemlist, function(data){
			console.log(data);
			res.json(data);
			
		});
	});

});

//POST /api/systems - add a system 
router.post('/systems', function(req, res){
	system = req.body;
	console.log(system);
	systems.addSystem(system, function(data){
		res.json(data);

	});

});

router.delete('/systems/:id', function(req, res){
	var id = req.params.id;
	console.log("Deleting "+id);
	systems.removeSystem(id, function(data){
		res.json(data);
	});

});

//GET /api/system/:id
router.get('/system/:id', function(req, res){
  console.log("hello");
  //retrieve systems from db
    var system3 = { "ip": "10.4.44.23",
				"id": "11111111111",
				"username": "admin1",
				"password": "Password123456",
				"location": "Studio H",
				"description": "Relman Stuff" };

	var system4 = { "ip": "10.4.44.23",
				"id": "11111111112",
				"username": "admin",
				"password": "Password123",
				"location": "Studio G",
				"description": "Build Stuff" };

	var systemlist = [system3,system4];
	var id = req.params.id;
	console.log(id);
	systemlist.forEach(function(system){
		console.log(system.id);
		if(system.id == id){

			res.send(system);
			
		}

	});
	

});






module.exports = router; 