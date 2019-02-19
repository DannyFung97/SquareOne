var user = require("../public/user.json");

exports.update = function(request,response) {
	console.log("FIRST");
	console.log(user.users[0].playbooks[0]);
	if(request.query.username != "" || request.query.password != "" || request.query.football != "" || request.query.basketball != "" || request.query.baseball != "" ){
		var name = request.query.username;
		var pass = request.query.password;
		var fball = "unchecked";
		var bBall = "unchecked";
		var base = "unchecked";
		if(request.query.football){
			fball = "checked";
		}
		if(request.query.basketball){
			bBall = "checked";
		}
		if(request.query.baseball){
			base = "checked";
		}

		console.log("INSIDE");
		console.log(user);
		console.log(user.users);
		var playbooks = user.users[0].playbooks[0];
		console.log(playbooks);

		var newUser = {
			"username": name,
			"password": pass,
			"logged" : true,
			"preferences": [
            	{
            		"sport": "football",
                        "check": fball
            	},
            	{
            		"sport": "basketball",
                        "check": bBall
            	},
            	{
            		"sport": "baseball",
                        "check": base
            	}	
            ],
            "playbooks": playbooks
		}
		
		user.users.pop();
		user.users.push(newUser);
	}

	console.log("OUTSIDE");
	response.render('settings', user);
}
