var express = require('express');
var router = express.Router();
var systems = require('../../models/systems');
var rest = require('restler');



// GET /api
router.get('/', function(req, res){
	res.send('Hello');
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
	var system = req.body;
	console.log(system);
	systems.addSystem(system, function(data){
		res.json(data);
	});
});

//GET /api/systems/:id - get mgmt details for a system
router.get('/systems/:id', function(req, res){
  var id = req.params.id;
  console.log("Getting system "+id);
  systems.getSystem(id, function(data){
  	  res.json(data);
  });	
});

//PUT /api/systems/:id - update/edit a system
router.put('/systems/:id', function(req, res){
	var body = req.body;
	var id = req.params.id;
	console.log("Editing "+id+" with body "+body);
	systems.updateSystem(body, function(data){
		res.json(data);
	});
});

//DELETE /api/systems/:id - delete a system 
router.delete('/systems/:id', function(req, res){
	var id = req.params.id;
	console.log("Deleting "+id);
	systems.removeSystem(id, function(data){
		res.json(data);
	});

});

//GET /api/system/verify/:id
router.get('/system/verify/:id', function(req, res){
	console.log("hello");
	var id = req.params.id;
	res.send(systems.verify(id));

});








module.exports = router; 