
var user = require('../public/user.json');

exports.view = function(req, res) {
	//console.log(username);
	//console.log(password);
	res.render("settings", user);
};

exports.viewAlt = function(req, res) {
	//console.log(username);
	//console.log(password);
	res.render("settingsAlt", user);
};