var rest = require('restler');


//Login to System, return Token



//Attempt to login in to system, return true or false if it was successful
exports.areReachable = function(systemlist, callback){
	
	
	var options = {rejectUnauthorized: "false"};
	var result = []
	systemlist.forEach(function(system){
		var ip = system.ip
		var uri = "http://"+ip+"/api/login";
		options.username = system.username;
		options.password = system.password;

		rest.get(uri, options).on('complete', function(data, response){
			if(data instanceof Error){
				console.log('Error:', data.message);
				system.reachable = "false";
				result.push(system);
			}
			else if(data.httpStatusCode){
				console.log('Login unsuccessful', data);
				system.reachable = "false";
				result.push(system);
			}
			else{
				console.log(data);
				system.reachable = "true";
				result.push(system);
			}

			
		});

	});

   callback(result);
};