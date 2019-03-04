var user = require('../public/user.json');

exports.view = function(req, res) {
	res.render("register", user);
};

exports.viewAlt = function(req, res) {
	res.render("registerAlt", user);
};