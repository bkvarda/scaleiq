var chai = require('chai');
var expect = require('chai').expect;
var systems = require('../models/systems');

describe('verify', function (){
	it('returns array of ScaleIO systems with verified field', function(){
	
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

		var system3 = { "ip": "10.4.44.23",
					"id": "11111111112",
					"username": "admin",
					"password": "Password123",
					"location": "Studio G",
					"description": "Build Stuff",
					"verified": "true" };

		var system4 = { "ip": "10.4.44.23",
					"id": "11111111111",
					"username": "admin1",
					"password": "Password123456",
					"location": "Studio H",
					"description": "Relman Stuff",
					"verified": "false" };

		var systemList = [system1, system2];
		var expectedList = [system4, system3];



		var systemList = [system1,system2];

        systems.verify(systemList, function(data){

        	expect(data).to.equal(expectedList);

        });

	});
});