var user = require("../public/user.json");

exports.update = function(request,response) {
	if(request.query.username != "" || request.query.password != ""){
		console.log("Im in boyz");
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

		console.log(user);
		console.log(pass);

		var newUser = {
			"username": name,
			"password": pass,
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
            ]
		}
		
		console.log(newUser);

		console.log("OLD:");
		console.log(user);
		user.users.pop();
		user.users.push(newUser);
		console.log("NEW");
		console.log(user);
	}

	console.log("HI");
	response.render('settings', user);
}