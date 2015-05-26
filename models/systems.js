var rest = require('restler');
var bodyParser= require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('systems', ['systems']);


//Attempt to login in to system, return true or false if it was successful
exports.verify = function(systemlist, callback){
	var count = systemlist.length;
	
	if(count === 0){
		callback(systemlist);
	}
	systemlist.forEach(function(system){
		var options = {"rejectUnauthorized": false};
		var uri = "http://"+system.ip+"/api/login";
		options.username = system.username;
		options.password = system.password;
		
		rest.get(uri, options).on('complete', function(data){
			if(data instanceof Error){
				system.verified = false;
				

			}
			else if(data.httpStatusCode){
				system.verified = false;
				
			}
			else{
				system.verified = true;
				
			}

			if(--count === 0){

			callback(systemlist);
			}
		});

	});
};

//retrieves system list from DB
exports.getSystems = function(callback){
	db.systems.find(function(err, docs){
		console.log(docs.length);
		callback(docs);
	});
};

//gets a specific system from DB
exports.getSystem = function(id, callback){
	db.systems.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		callback(doc);
	});

};

//adds system to DB
exports.addSystem = function(system, callback){
	
	setID(system, function(systemWithID){

		db.systems.insert(systemWithID, function(err, doc){
			console.log(doc);
	    	callback(doc);
	    });
	});
};

//edits sytem in DB
exports.updateSystem = function(system, callback){
	var id = system._id;
	db.systems.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {ip: system.ip, username: system.username, password: system.password, location: system.location}},
		new: true}, function(err, doc){
			callback(doc);
		});
};

//removes system from DB
exports.removeSystem = function(id, callback){

	db.systems.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    	callback(doc);
	});


};
//private functions

login = function (system, callback){
	var options = {"rejectUnauthorized": false};
	var uri = "http://"+system.ip+"/api/login";
	options.username = system.username;
	options.password = system.password;
	rest.get(uri, options).on('complete', function(data){

			if(data instanceof Error){
				console.log(data);				
				token = "error";
			}
			else if(data.httpStatusCode){
				console.log(data);
				token = "error";
				
			}
			else{
				token = data; 
				
			}
		callback(token);
	});

};

setID = function(system, callback){
	var uri = "http://"+system.ip+"/api/types/System/instances";
	login(system, function(token){
		var options = {"rejectUnauthorized": false};
		options.username = system.username;
		options.password = token;
		rest.get(uri, options).on('complete', function(data, response){

				if(data instanceof Error){
				console.log("it was instanceof error");				
				system.system_id = "error";
				}
				else if(response.statusCode != 200){
				console.log("it was != 200 status code");
				system.system_id = "error";
				}
				else{
				console.log(data);
				system.system_id = data[0].id;
				}
			callback(system);
		});
	});
};		 
