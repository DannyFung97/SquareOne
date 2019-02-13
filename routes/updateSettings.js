var users = require("../views/user.json");

exports.update = function(request,response) {
	var username = request.query.username;
	var password = request.query.password;
	var preferences = request.query.preferences;

	var newUser = {
		"username": username,
		"password": password,
		"preferences": preferences
	}
	user.users.pop();
	user.users.push(newUser);
	response.render('settings', users);
}