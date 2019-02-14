var user = require('../views/user.json');

exports.view = function(req, res) {
	console.log(user);
	res.render('footballMain', user);
};