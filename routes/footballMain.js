var user = require('../public/user.json');
exports.view = function (req, res) {
    res.render('footballMain', user);
};

exports.viewAlt = function (req, res) {
    res.render('footballMainAlt', user);
};