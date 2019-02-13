
var user = require('../views/user.json');

exports.view = function(req, res) { 
	res.render("settings", user);
};